function preload(){
  questions = loadJSON("question.json")
  question = loadJSON("questions.json")

}

displayQuestion = null;

function setup() {
  createCanvas(windowWidth, windowHeight)
  root = new Numball(null, null)
  root.x = width/2
  root.y = 50 // height/2
  root.s = 0
  root.addVal(5)
  for (var i=0; i<10; i++) {
    root.addVal(floor(random(1,11)))
    root.tie()
    root.fly()
  }
  input = createInput()
  input.position((width/2)-75, 410)
}

function draw() {
  background(51)
  root.tie()
  root.fly()
  root.show()
  // for (var b in balls) {
  //   balls[b].tie()
  //   balls[b].fly()
  //   balls[b].show()
  // }

  if (displayQuestion != null){
    textAlign(CENTER)
    fill(questions.r, questions.g, questions.b)
    text(displayQuestion.question, width/2, 400)

  }

  // textAlign(CENTER)
  // fill(questions.r, questions.g, questions.b)
  // text(questions.question, width/2, 400)
  // text(question.questions[1].question, width/2, 600)
  input.changed(score);


}

function mousePressed() {
  for (var i = 0; i < Ball.balls.length; i++){
    
    Ball.balls[i].clicked()
  }
}

function score() {
  if (input.value()==displayQuestion.answer){

    console.log("correct")
  }else{
    console.log("wrong")
  }
  input.value("")

  for (var i = 0; i < Ball.balls.length; i++){
    if (Ball.balls[i].marked == true){
    Ball.balls[i].col = color(51)
    Ball.balls[i].marked = false
    }
  }

  // background(51)

}


// for (var i =0; i < question.questions.length; i++){
//   if (this.val == question.questions[i].no){
//     textAlign(CENTER)
//     fill(questions.r, questions.g, questions.b)
//     text(question.questions[i].question, width/2, 600)
//   }
// }