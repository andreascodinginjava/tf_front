import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transflash',
  templateUrl: './transflash.component.html',
  styleUrls: ['./transflash.component.css']
})
export class TransflashComponent {

  contactForm = this.fb.group({
    name: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    cel: [null, Validators.required],
    message: [null, Validators.required]
  });
  
  constructor(private fb: FormBuilder, public router:Router) {}

  onSubmit(): void {
    alert('Thanks!');
  }

  goLogIn() {
    this.router.navigateByUrl("/LogIn");
  }
}
