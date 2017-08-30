import { Component, trigger, state, animate, style, transition, keyframes } from '@angular/core';


@Component({
    moduleId: module.id,
    animations: [
        trigger('toggleElement', [
            state('open', style({ 'height': '*' })),
            state('closed', style({ 'height': '0px', 'font-size': '0px' })),

            transition('closed <=> open', [
                animate("1000ms 100ms cubic-bezier(1, 0, 0, 1)")
            ])
        ]),
        trigger('animateCitation', [
            transition('stateA <=> stateB', [
                animate(600, keyframes([
                    style({ opacity: .5, offset: 0 }),
                    style({ opacity: 1, color: '#FCB514', offset: .5 }),
                    style({ opacity: .7, offset: .7 }),
                    style({ opacity: 1, offset: 1 })
                ]))
            ])
        ])
    ],
    selector: 'home',
    templateUrl: 'home.component.html',
    styles: [`
        .frame {margin-bottom: 10px; padding: 10px; border: 5px solid #eeeeee; height: 170px}
        .citation {font-size: 20px; color: #3268ba}
    `]
})

export class HomeComponent {
    open: boolean = false;
    toggleElement: string = 'closed';

    animateCitation: string = 'stateB';
    index: number = 0;

    quotes: quote[] = [
        {
            id: 0,
            text: "Laudate omnes gentes laudate, Magnificat in secula, Et anima mea laudate, Magnificat in secula",
            author: "Ace of Base"
        },
        {
            id: 1,
            text: "If you wanna make the world a better place, Take a look at yourself and then make the change",
            author: "Michael Jackson"
        },
        {
            id: 2,
            text: "Ah, le notti che senza di te, ch'eri la luce per me, Ah, capire no, sai non si può, nel buio un grido sarò",
            author: "Jeanne Mas"
        }
    ]

    quote: quote = this.quotes[0];

    getPreviousQuote() {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.getSomeQuote(-1);
    }

    getNextQuote() {
        this.animateCitation = this.animateCitation === 'stateA' ? 'stateB' : 'stateA';
        this.getSomeQuote(1);
    }

    getSomeQuote(increment: number) {
        this.index = this.index + increment;
        if (this.index >= this.quotes.length && increment === 1) {
            this.index = 0;
        }
        if (this.index < 0 && increment === -1) {
            this.index = this.quotes.length - 1;
        }

        this.quote = this.quotes[this.index];
    }

    log(event: any){
        console.log(event);
    }

    toggle() {
        this.open = !this.open;
        if (this.open) {
            this.toggleElement = 'open';
        } else {
            this.toggleElement = 'closed';
        }
    }
}

interface quote {
    id: number;
    text: string;
    author: string;
}