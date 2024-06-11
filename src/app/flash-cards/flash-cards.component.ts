import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-flash-cards',
  templateUrl: './flash-cards.component.html',
  styleUrls: ['./flash-cards.component.scss']
})
export class FlashCardsComponent implements OnInit{

  constructor( private http: HttpClient) {}

  cards: any = [];
  answer_exposed = false;
  card_displayed = 0;

  ngOnInit() {
    console.log("Loading Card Data")

    this.http.get('/assets/term.json')
    .subscribe(response => 
      console.log(response)
    );

    this.cards = [
                    ["6S", "Study, sort, shine, set in order, standardize, and sustain."],
                    ["Andon", "A visual light used to show the current status of a machine or process."],
                    ["Current State", "Current condition of anything. How something is currently being done."],
                    ["Defects", "Waste of inspection, repair, and scrapping of material to which value has already been added."],
                    ["FIFO", "First in, first out."],
                    ["Five Whys", "Asking five why questions to get to the root cause of a problem."],
                    ["Flow", "Move or process in a forward motion."],
                    ["Future state", "The condition we imagine something can be in once changes have taken place."],
                    ["Gemba", "The real place, the place where work occurs."],
                    ["Hai", "I accept the challenge."],
                    ["Hansei", "Reflection, Reflect on what went right or what went wrong. Make changes if needed and try something else."],
                    ["Heijunka", "A process to help manage production by leveling peaks and valleys of customer demand."],
                    ["Kaizen", "Many small changes for the better, created by the people that do the work."],
                    ["Kanban", "A visual system that shows you to replace what has been consumed."]
    ]
  }

  nextCard() {
    this.answer_exposed = false
    if (this.card_displayed + 1 < this.cards.length) {
      this.card_displayed += 1
    } else {
      this.card_displayed = 0;
    }
  }

  prevCard() {
    this.answer_exposed = false
    if (this.card_displayed > 0) {
      this.card_displayed -= 1
    } else {
      this.card_displayed = this.cards.length - 1;
    }
  }

  exposeCard() {
    console.log(this.answer_exposed)
    if (this.answer_exposed) {
      this.answer_exposed = false
    } else {
      this.answer_exposed = true
    }
  }
}
