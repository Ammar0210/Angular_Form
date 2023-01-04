import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AppService} from "./AppService";

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {
  constructor(private servie: AppService) {}
  messageTimer:any;
  showAlertMessage:boolean = false;
  registerApiUrl:string = "http://localhost:8080/register";

  registerForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
  })

  buildRequestBody() {
    const body = {
      'name': this.registerForm.get('name')?.value,
      "email": this.registerForm.get('email')?.value,
      "phone": this.registerForm.get('phone')?.value,
    }
    return body;
  }
  ngOnInit() {}

  submitForm() {
    let requestBody = this.buildRequestBody();
    console.log(requestBody)
    this.servie.postRequest(requestBody,this.registerApiUrl).subscribe((res:any)=> {
      if (res){
        this.showAlertMessage = true;
        this.messageTimer = setTimeout(()=> this.displayModal(),3000)
      }
      console.log("Respones is " + res)
    })
  }
  displayModal(){
    this.showAlertMessage = false;
  }

}
