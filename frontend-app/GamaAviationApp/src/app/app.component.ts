import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ToastrService } from 'ngx-toastr';
import { SaveProductDateIntoTextFileCommand } from './models/SaveProductDateIntoTextFileCommand';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GamaAviationApp';

  gamaAviationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductService, 
    private toastr: ToastrService) {

    this.gamaAviationForm = this.formBuilder.group({});
  }

  ngOnInit() {
    this.gamaAviationForm = this.formBuilder.group({
      productId: [null, [Validators.required, Validators.min(1)]],
      productName: [null, [Validators.required, Validators.min(1), Validators.maxLength(255)]],
      productDescription: [null, [Validators.required, Validators.min(1), Validators.maxLength(255)]],
      dateCreated: [null, [Validators.required, Validators.pattern('^[0-9]{4}[./-]+[0-9]{2}[./-]+[0-9]{2}$')]]
    });
  }

  get gamaAviationFormData() { return this.gamaAviationForm.controls; }

  onSubmit() {
    if (this.gamaAviationForm.invalid) {
      for (var formField in this.gamaAviationForm.controls) {
        this.gamaAviationForm.controls[formField].markAsTouched();
      }

      return;
    }

    var command: SaveProductDateIntoTextFileCommand = {
      productId: this.gamaAviationForm.controls['productId'].value,
      productName: this.gamaAviationForm.controls['productName'].value,
      productDescription: this.gamaAviationForm.controls['productDescription'].value,
      dateCreated: this.gamaAviationForm.controls['dateCreated'].value,
    };

    this.productService.createProduct(command)
      .subscribe((response: any) => {
        this.toastr.success('Successfully submitted product form.');
        this.gamaAviationForm.reset();
      }, response => {
        if (response instanceof HttpErrorResponse) {
          if (response.status === 400) {

            const validationErrors = response.error.errors;
            Object.keys(validationErrors).forEach(prop => {
              var propertyName = prop.replace('$.', '');
              const formControl = this.gamaAviationForm.get(propertyName);

              if (formControl) {
                formControl.setErrors({
                  serverError: validationErrors[prop]
                });
              }
            });

            this.toastr.error('Invalid data submitted please check the data and resubmit the form');
          } else {
            this.toastr.error('An error has occurred while submitting the product form.');
          }
        }
      });
  }
}
