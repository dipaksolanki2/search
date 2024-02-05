import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css',
})
export class Exercise3Component {
  // productForm: FormGroup;
  submitted = false;

  productForm = new FormGroup({
    products: new FormArray([this.createProductFormGroup()]),
  });

  getControls() {
    return (this.productForm.get('products') as FormArray).controls
  }

  createProductFormGroup() {
    return new FormGroup({
      productName: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      description: new FormControl(''),
    });
  }

  removeProduct(index: number) {
    const productsArray = this.productForm.get('products') as FormArray;
    productsArray.removeAt(index);
  }

  addProduct() {
    const productsArray = this.productForm.get('products') as FormArray;
    productsArray.push(this.createProductFormGroup());
  }

  onSubmit() {
    this.submitted = true
    this.productForm.reset()
    console.log(this.productForm);
  }
}
