import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(20), Validators.max(60)]],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      tags: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.http.post('http://localhost:3000/register', this.registerForm.value)
        .subscribe(response => {
          console.log('Success', response);
        });
    }
  }
}