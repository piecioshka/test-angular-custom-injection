import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { App } from './app.component';
import { Author } from './author';

@NgModule({
    imports: [BrowserModule],
    providers: [
        { provide: Author, useValue: 'piecioshka' }
    ],
    declarations: [App],
    bootstrap: [App],
})
export class CoreModule { }
