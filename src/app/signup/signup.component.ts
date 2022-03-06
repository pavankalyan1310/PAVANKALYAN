import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
sendData(data:NgForm)
{
  console.log("data form form is",data.value)
}
  constructor() { }

  ngOnInit(): void {
  }

}
