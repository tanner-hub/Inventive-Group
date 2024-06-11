import { Component } from '@angular/core';

@Component({
  selector: 'app-eight-wastes',
  templateUrl: './eight-wastes.component.html',
  styleUrls: ['./eight-wastes.component.scss']
})
export class EightWaistesComponent {

  constructor() {}

  wastes = [
              ["What is Overproduction?", "To produce sooner, faster, or in greater quantities than customer demands."],
              ["What is Inventory?", "Raw material, work in process, or finished goods which are not having value added to it."],
              ["What is Waiting?", "People or parts that wait for a work cycle to be completed."],
              ["What is Motion?", "Unnecessary movement of people, parts or machines within a process."],
              ["What is Transportation?", "Unnecessary movement of people or parts between processes."],
              ["What are Defects?", "Not right the first time. Repetition or correction of a process. Scrap, rework and defects."],
              ["What is Over Processing?", "Processing beyond the standard required by the customer."],
              ["What is Talent?", "Underutilizing people’s talents, skills, and knowledge."]
  ]
  currentIndex = 0
  currentQuestion = "What is Waiting?"
  currentAnswerOptions = ["To produce sooner, faster, or in greater quantities than customer demands.",
                          "Raw material, work in process, or finished goods which are not having value added to it.",
                          "People or parts that wait for a work cycle to be completed.",
                          "Unnecessary movement of people, parts or machines within a process."]
  usersScore = 0
  showScore = false

  generateOptions() {

    let tempArr = []
    tempArr.push(this.wastes[this.currentIndex][1])

    while (tempArr.length < 5) {
      console.log(tempArr.length)
      var getRandomElement = (wastes: any[]) =>
        console.log(tempArr.length)
        tempArr.push(this.wastes[Math.floor(Math.random() * this.wastes.length)][1])
    }
    
    this.currentAnswerOptions = tempArr
  }

  nextIndex() {
    if (this.currentIndex < this.wastes.length - 1) {
      this.currentIndex += 1
      this.currentQuestion = this.wastes[this.currentIndex][0]
      this.generateOptions()
    } else {
      this.usersScore = this.getScore();
      this.showScore = true;
    }
  }

  clearAnswers() {
    const elementA = document.getElementById("A") as HTMLInputElement;
    const elementB = document.getElementById("B") as HTMLInputElement;
    const elementC = document.getElementById("C") as HTMLInputElement;
    const elementD = document.getElementById("D") as HTMLInputElement;

    elementA.checked = false;
    elementB.checked = false;
    elementC.checked = false;
    elementD.checked = false;
  }

  setAnswer(e: any) {
    this.clearAnswers()
    const element = document.getElementById(e.explicitOriginalTarget.id) as HTMLInputElement;
    element.checked = true
  }

  checkAnswer() {
    let usersSuccess = false

    const elementA = document.getElementById("A") as HTMLInputElement;
    const elementB = document.getElementById("B") as HTMLInputElement;
    const elementC = document.getElementById("C") as HTMLInputElement;
    const elementD = document.getElementById("D") as HTMLInputElement;

    if (elementA.checked) {
      const index = this.wastes.findIndex((element) => element[1] == this.currentAnswerOptions[0]);
      if (this.wastes[index][0] == this.currentQuestion) {
        usersSuccess = true
      }
    } else if (elementB.checked) {
      const index = this.wastes.findIndex((element) => element[1] == this.currentAnswerOptions[1]);
      if (this.wastes[index][0] == this.currentQuestion) {
        usersSuccess = true
      }
    } else if (elementC.checked) {
      const index = this.wastes.findIndex((element) => element[1] == this.currentAnswerOptions[2]);
      if (this.wastes[index][0] == this.currentQuestion) {
        usersSuccess = true
      }
    } else if (elementD.checked) {
      const index = this.wastes.findIndex((element) => element[1] == this.currentAnswerOptions[3]);
      if (this.wastes[index][0] == this.currentQuestion) {
        usersSuccess = true
      }
    } else {
      console.log("No Answer Was Selected")
    }
    return usersSuccess;
  }

  onSubmit() {
    if (this.checkAnswer()) {
      this.usersScore += 1
    }
    this.clearAnswers()
    this.nextIndex()
  }

  getScore() {
    return this.usersScore / this.wastes.length * 100;
  }
}
