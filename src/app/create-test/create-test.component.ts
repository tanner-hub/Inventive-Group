import { Component } from '@angular/core';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.scss']
})
export class CreateTestComponent {

  constructor() {}

  questionSet: string[][] = []

  addQuestion() {
    let question = document.getElementById("q") as HTMLInputElement;
    let answerA = document.getElementById("a1") as HTMLInputElement;
    let answerB = document.getElementById("a2") as HTMLInputElement;
    let answerC = document.getElementById("a3") as HTMLInputElement;
    let answerD = document.getElementById("a4") as HTMLInputElement;
    let finalA = document.getElementById("f1") as HTMLInputElement;
    let finalB = document.getElementById("f2") as HTMLInputElement;
    let finalC = document.getElementById("f3") as HTMLInputElement;
    let finalD = document.getElementById("f3") as HTMLInputElement;

    let tempArr: string[] = []
    tempArr.push(question.value);
    tempArr.push(answerA.value);
    tempArr.push(answerB.value);
    tempArr.push(answerC.value);
    tempArr.push(answerD.value);
    if (finalA.checked) {
      tempArr.push("A")
    } else if (finalB.checked) {
      tempArr.push("B")
    } else if (finalC.checked) {
      tempArr.push("C")
    } else if (finalD.checked) {
      tempArr.push("D")
    } else {
      console.log("Nothing was selected as an answer.")
    }

    if (tempArr.length == 6) {
      this.questionSet.push(tempArr)
    } else {
      console.log("Question could not be created as there is missing information.")
    }

    question.value = ""
    answerA.value = ""
    answerB.value = ""
    answerC.value = ""
    answerD.value = ""
    finalA.checked = false
    finalB.checked = false
    finalC.checked = false
    finalD.checked = false
  }
}

