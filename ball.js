function Ball(target) {
    this.x = random(100, width-100)
    this.y = random(100, height-100)
    this.a = random(-PI, PI)
    this.s = 1
    this.marked = false;
    this.target = target
    Ball.balls.push(this)
  }
  Ball.balls = []
  Ball.stack = []
  


  Ball.prototype.fly = function () {
    this.x += this.s * cos(this.a)
    this.y += this.s * sin(this.a)
    if (this.target != null) {
      a = atan2(this.target.y - this.y, this.target.x - this.x)
      // this.x = this.target.x - 50*cos(a)
      // this.y = this.target.y - 50*sin(a)
    }
  }
  
  Ball.prototype.tie = function () {
    sx = this.s * cos(this.a)
    sy = this.s * sin(this.a)
    if (this.target != null) {
      d = ((this.x - this.target.x)**2 + (this.y - this.target.y)**2)**0.5
      a = atan2(this.target.y - this.y, this.target.x - this.x)
      this.a = atan2(sin(this.a)*99 + sin(a), cos(this.a)*99 + cos(a))
      tielength = 30
      sx += (d-tielength)/24 * cos(a)
      sy += (d-tielength)/24 * sin(a)
      var balls = Ball.balls
      for (var b in balls) {
        if (this == balls[b]) continue
        if (this.target == balls[b].target) continue
        d = dist(this.x, this.y, balls[b].x, balls[b].y)
        dx = this.x - balls[b].x
        dy = this.y - balls[b].y
        da = atan2(dy, dx)
        fleeforce = 12**4
        sx += fleeforce/d**3*cos(da)
        sy += fleeforce/d**3*sin(da)
      }
      // da = atan2(root.y - this.y, root.x - this.x)
      // sx -= .1*cos(da)
      // sy -= .1*sin(da)
      sy += 1
      if (this.side == 0) sx -= 1
      if (this.side == 1) sx += 1
    }
    this.s = (sx**2 + sy**2)**0.5
    this.a = atan2(sy, sx)
    this.s *= .70
  }
  
  Ball.prototype.show = function () {
    stroke(255)
    strokeWeight(2)
    noFill()
    bsize = 30
    ellipse(this.x, this.y, bsize, bsize)
    if (this.target != null) {
      a = atan2(this.target.y - this.y, this.target.x - this.x)
      line(this.x+bsize/2*cos(a), this.y+bsize/2*sin(a), this.target.x-bsize/2*cos(a), this.target.y-bsize/2*sin(a))
    }

    this.clicked()
  }





  // this.bfs = function(){
  //   var root = Ball.balls[0]
  //   Ball.stack.push(root)
  //   root.marked = true
  //   while(Ball.stack.length > 0){
  //     var current = Ball.stack.shift()
  //     if (current.val == this.val){
  //       //change color of balls marked true
  //       for (var i = 0; i < Ball.balls.length; i++){
  //         if (Ball.balls[i].marked == true){
  //         Ball.balls[i].col = this.col
  //         }
  //     }
  //     break;
  //   }
  //   if (current.left != null){
  //     Ball.stack.unshift(current.left)
  //     current.left.marked = true
  //   }
  //   if (current.right != null){
  //     Ball.stack.unshift(current.right)
  //     current.right.marked = true
  //   }
    
  
  //   }
  
  // }