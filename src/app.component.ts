import { Component, Inject } from '@angular/core';

import { Author } from './author';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>Hi <span>{{name}}</span></h1>
        </div>
    `,
    styles: [`
        span { color: red; }
    `]
})
export class App {

    name: string = null;

    constructor(
        @Inject(Author) private author: string
    ) {
        this.name = this.author;
    }

}
