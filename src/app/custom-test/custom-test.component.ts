import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-test',
  templateUrl: './custom-test.component.html',
  styleUrls: ['./custom-test.component.scss']
})
export class CustomTestComponent {

  constructor() {}

  customQ = [
    ["What is the ideal season for manufacturing?", "Winter."],
    ["How many manufacturing jobs are there?", "1.9 Million"],
    ["Why get into manufacturing?", "It's a growing industry."],
    ["Did Tanner Utz write this website?", "Yes, yes he did."]
]
currentIndex = 0
currentQuestion = "What is the ideal season for manufacturing?"
currentAnswerOptions = ["Winter.",
                "1.9 Million",
                "It's a growing industry.",
                "Yes, yes he did."]
usersScore = 0
showScore = false

generateOptions() {

let tempArr = []
tempArr.push(this.customQ[this.currentIndex][1])

while (tempArr.length < 5) {
console.log(tempArr.length)
var getRandomElement = (customQ: any[]) =>
console.log(tempArr.length)
tempArr.push(this.customQ[Math.floor(Math.random() * this.customQ.length)][1])
}

this.currentAnswerOptions = tempArr
}

nextIndex() {
if (this.currentIndex < this.customQ.length - 1) {
this.currentIndex += 1
this.currentQuestion = this.customQ[this.currentIndex][0]
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
const index = this.customQ.findIndex((element) => element[1] == this.currentAnswerOptions[0]);
if (this.customQ[index][0] == this.currentQuestion) {
usersSuccess = true
}
} else if (elementB.checked) {
const index = this.customQ.findIndex((element) => element[1] == this.currentAnswerOptions[1]);
if (this.customQ[index][0] == this.currentQuestion) {
usersSuccess = true
}
} else if (elementC.checked) {
const index = this.customQ.findIndex((element) => element[1] == this.currentAnswerOptions[2]);
if (this.customQ[index][0] == this.currentQuestion) {
usersSuccess = true
}
} else if (elementD.checked) {
const index = this.customQ.findIndex((element) => element[1] == this.currentAnswerOptions[3]);
if (this.customQ[index][0] == this.currentQuestion) {
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
return this.usersScore / this.customQ.length * 100;
}
}

