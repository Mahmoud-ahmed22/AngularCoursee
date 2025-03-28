import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit{
  profileData:any;
  success: boolean = false;
constructor(private fb:FormBuilder) {
  
}

get f() {
  return this.profileData.controls
}

ngOnInit(): void {
  this.initform();
}
submitForm(){
  if (this.profileData.valid) {
    console.log(this.profileData.value);
    this.success = true;
  }
};

initform() {
  this.profileData = this.fb.group({
    name: ['', Validators.required],
    lname: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.email],
  });
}

}
