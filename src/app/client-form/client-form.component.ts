import { Component } from '@angular/core';
import { Client } from '../client';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-client-form',
  standalone: true,
  //add your needed dependencies here for this particular component
  imports: [FormsModule, CommonModule,],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.css'
})
export class ClientFormComponent {

  submitted: boolean = false;

  model: Client;

  constructor(){
    //let model;
    this.model = new Client(-1, 'John Doe', 'john@doe.com', '123 Main Street', '');
  }
  
////////////////////////////////////////////////////////////////////

  

onSubmit(clientForm: NgForm){
   // this.submitted = true; //redundant, as ngSubmit sets to true
    console.log(this.model);

    this.model = new Client(-1, '', '', '', ''); // Reset model

   
    clientForm.resetForm();  // Reset the form using ngForm directive method
    this.submitted = false; // Reset submitted flag
  }

  newClient() {
    this.model = new Client(-1,'','','','');
    this.submitted = false;
  }


  // showFormControls(form: any) {
  //   return form && form.controls.name && form.controls.name.value; // John Doe
  // }



}
