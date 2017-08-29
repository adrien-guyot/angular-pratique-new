import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    templateUrl: 'contact-us.component.html'
})

export class ContactUsComponent {
    subject: string;
    isVisible: boolean = false;

    sendMessage(form: NgForm) {
        console.log(form.value);
    }
}