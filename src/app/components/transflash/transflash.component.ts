import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert('Thanks!');
  }

}
