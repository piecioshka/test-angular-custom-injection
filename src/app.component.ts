import { Component, Inject } from '@angular/core';

import { Author } from './author';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>Hi <span>{{ author }}</span></h1>
        </div>
    `,
    styles: [`
        span { color: red; }
    `]
})
export class App {

    constructor(
        @Inject(Author) public author: string
    ) { }

}
