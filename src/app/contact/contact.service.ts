import { Injectable } from '@angular/core';

@Injectable()

export class ContactService {
    postContactForm(contactFormValue: any){
        console.log('depuis le service');
        console.log(contactFormValue);
    }
}