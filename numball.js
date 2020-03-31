function Numball(parent, side) {
    Ball.call(this, parent)
    this.val = null
    this.left = null
    this.right = null
    this.side = side
    // this.question
    this. col = color(51)


    this.clicked = function() {
      var d = dist(mouseX, mouseY, this.x, this.y)
      if (d < 15){
      // this.col = color(255,200,0)
      this.bfs()
      
      
    for (var i =0; i < question.questions.length; i++){
      if (this.val == question.questions[i].no){
        console.log("haha")
        textAlign(CENTER)
        displayQuestion = question.questions[i]
      }
    }


    }
  }


this.bfs = function(){
  var root = Ball.balls[0]
  Ball.stack.unshift(root)
  root.marked = true
  while(Ball.stack.length > 0){
    var current = Ball.stack.shift()
    current.marked = true
    if (current.val == this.val){
      //change color of balls marked true
      for (var i = 0; i < Ball.balls.length; i++){
        if (Ball.balls[i].marked == true){
        Ball.balls[i].col = color(255,200,0)
        }
        Ball.stack = []
    }
    break;
  }
  if (current.left != null){
    Ball.stack.push(current.left)
    // current.left.marked = true
  }
  if (current.right != null){
    Ball.stack.push(current.right)
    // current.right.marked = true
  }


  }

}

}


  Numball.prototype = Object.create(Ball.prototype);
  Numball.prototype.constructor = Numball;
  
  Numball.prototype.addVal = function (n) {
    if (this.val == null) {
      this.val = n
    } else if (this.val > n) {
      if (this.left == null) {
        this.left = new Numball(this, 0)
        this.left.x = this.x
        this.left.y = this.y + 50
      }
      this.left.addVal(n)
    } else if (this.val < n) {
      if (this.right == null) {
        this.right = new Numball(this, 1)
        this.right.x = this.x
        this.right.y = this.y + 50
      }
      this.right.addVal(n)
    }
  }
  
  Numball.prototype.show = function() {
    // Ball.prototype.show.call(this)
    if (this.target == null) stroke(255)
    else if (this.target.val > this.val) stroke(97,175,239)
    else if (this.target.val < this.val) stroke(224,108,117)
    strokeWeight(2)
    // fill(noFill())
    fill(this.col);
    bsize = 30
    ellipse(this.x, this.y, bsize, bsize)
    if (this.target != null) {
      a = atan2(this.target.y - this.y, this.target.x - this.x)
      line(this.x+bsize/2*cos(a), this.y+bsize/2*sin(a), this.target.x-bsize/2*cos(a), this.target.y-bsize/2*sin(a))
    }
    fsize = 16
    textSize(fsize)
    fill(255)
    strokeWeight(1)
    if (this.val > 9) {
      text(this.val, this.x - fsize/1.9, this.y + fsize/2.6)
    } else {
      text(this.val, this.x - fsize/3.8, this.y + fsize/2.6)
    }
    if (this.left != null) this.left.show() 
    if (this.right != null) this.right.show()
  }

  // Numball.prototype.clicked = function(){
  //   var d = dist(mouseX, mouseY, this.x, this.y)
  //   if (d < 15) {
  //     fill(255, 0, 0);
  //   }
  // }

  
  Numball.prototype.tie = function() {
    Ball.prototype.tie.call(this)
    if (this.left != null) this.left.tie()
    if (this.right != null) this.right.tie()
  }
  
  Numball.prototype.fly = function() {
    Ball.prototype.fly.call(this)
    if (this.left != null) this.left.fly()
    if (this.right != null) this.right.fly()
  }


//   this.bfs = function(){
//     var root = Balls.ball[0]
//     Ball.stack.push(root)
//     root.marked = true
//     while(Ball.stack.length > 0){
//       var current = Ball.stack.shift()
//       if (current.val == this.val){
//         //change color of balls marked true
//         for (var i = 0; i < Ball.balls.length; i++){
//           if (Ball.balls[i].marked == true){
//           Ball.balls[i].col = this.col
//           }
//       }
//       break;
//     }
//     var left = [current.left, current.right]


//   }

// }