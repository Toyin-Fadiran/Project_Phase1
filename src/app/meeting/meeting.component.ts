import { Component } from '@angular/core';
import { Meeting } from '../meeting';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meeting',
  standalone: true,
  //add your two modules needed here: FormsModule/CommonModule
  imports: [FormsModule, CommonModule],
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.css'
})
export class MeetingComponent {

  submitted: boolean = false;

  model: Meeting;

  constructor(){
    //let model;
    this.model = new Meeting(`testTopic`, -1, new Date);
  }
  
////////////////////////////////////////////////////////////////////

  

//onSubmit(clientForm: NgForm){
   // this.submitted = true; //redundant, as ngSubmit sets to true
 //   console.log(this.model);

  //  this.model = new Client(-1, '', '', '', ''); // Reset model

   
   // clientForm.resetForm();  // Reset the form using ngForm directive method
  //  this.submitted = false; // Reset submitted flag
 // }

  // newClient() {
  //   this.model = new Client(-1,'','','','');
  //   this.submitted = false;
  // }


  // showFormControls(form: any) {
  //   return form && form.controls.name && form.controls.name.value; // John Doe
  // }



}