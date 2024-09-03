import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { IProduct } from '../../models/product.model';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  productList: IProduct[] = [];
  private _router = inject(Router);
  private _apiService = inject(ApiService);

  ngOnInit(): void {
      this._apiService.getProoducts().subscribe((data: IProduct[]) => {
        this.productList = data;
      });
  }

  navegate(id: number){
    this._router.navigate(['/products', id]);
  }
}
