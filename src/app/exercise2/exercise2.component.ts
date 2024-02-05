import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})

export class Exercise2Component {
  submitted = false;

  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('')
  });

  onSubmit() {
    this.submitted = true;
    console.log(this.productForm);
  }
}
