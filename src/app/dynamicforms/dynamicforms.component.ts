import { Component } from "@angular/core";
import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
    templateUrl: './dynamicforms.component.html',
    styleUrls: ['./dynamicforms.component.css']
})

export class DynamicformsComponent {
    form = new FormGroup({});
    user = { email: 'email@gmail.com' };
    userFields: Array<FormlyFieldConfig> = [{
        className: 'row',
        fieldGroup: [{
            className: 'col-xs-6',
            key: 'email',
            type: 'input',
            templateOptions: {
                type: 'email',
                label: 'Email address',
                placeholder: 'Enter email'
            },
            validators: {
              validation: Validators.compose([Validators.required])
            }
        }, {
            className: 'col-xs-6',
            key: 'password',
            type: 'input',
            templateOptions: {
                type: 'password',
                label: 'Password',
                placeholder: 'Password',
                pattern: ''
            },
            validators: {
              validation: Validators.compose([Validators.required])
            }
        }]
      }];
  
    submit(user) {
      console.log(user);
    }
}