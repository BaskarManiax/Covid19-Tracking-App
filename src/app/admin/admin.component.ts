import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  name =new FormControl('');
  age =new FormControl('');
  gender =new FormControl('');
  infection = new FormControl('');
  status = new FormControl('');
  cid = new FormControl('');
  infection_days = new FormControl('');

  
}
