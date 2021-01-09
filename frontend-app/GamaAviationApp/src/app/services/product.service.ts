import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SaveProductDateIntoTextFileCommand } from '../models/SaveProductDateIntoTextFileCommand';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  createProduct(command: SaveProductDateIntoTextFileCommand) {
    var saveProductDataUrl = `${environment.API_ENDPOINT}/api/product/SaveProductData`;
    return this.http.post(saveProductDataUrl, command);
  }
}
