import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/api.service';
import { ProductlistService } from './list.service';
import { Productlist } from './productlist.model';
import { Wishlist } from './wishlist.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  fiveclass: string = 'active';
  fourclass: string = '';
  threeclass: string = '';
  listclass: string = '';
  allDefaultclass: string = 'active';
  hotclass: string = '';
  newclass: string = '';
  saleclass: string = '';
  open: boolean = false;
  filterclass: string = 'shop-advance-filter-area';
  column: string = 'row product-isotope shop-product-wrap five-column';
  columnrow: string = 'col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale';
  menuShow: string = 'none';
  category: any;
  subcategory: any;
  isclose: boolean = true;
  subid: any;
  catid: any;
  public UserId = localStorage.getItem('UserId');
  public ProductListModel: Productlist = new Productlist;
  public productList: Productlist[] = [];
  public tempproductList: Productlist[] = [];
  public popularList: Productlist[] = [];
  public WishListModel: Wishlist = new Wishlist;
  public wishList: Wishlist[] = [];

  constructor(
    private productListService: ProductlistService,
    private router: Router,
    private apiservice: ApiService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.queryParams.subscribe((res: any) => {
      debugger
      if (res.val) {
        let data = JSON.parse(res.val);
        if (data.subid != undefined) {
          this.subid = data.subid;
        }
        else {
          this.catid = data.catid;
        }
      }


      this.getNavbarRoutedProducts();
    })
    if (this.subid == undefined && this.catid == undefined) {
      this.getProducts();
    }
    this.fiveclass = 'active';

    this.getMainCategory(0);
    this.menuShow = 'display:none';
    this.getPopularProducts();
  }

  ngOnInit(): void {

  }
  allDefault() {
    this.allDefaultclass = 'active';
    this.saleclass = '';
    this.newclass = '';
    this.hotclass = '';
    this.getProducts();
  }
  sale() {
    this.allDefaultclass = '';
    this.saleclass = 'active';
    this.newclass = '';
    this.hotclass = '';
    this.tempproductList=[];
    this.productList=[];
    this.productListService.getProduct().subscribe((data: any) => {
      this.tempproductList = data;
      this.tempproductList.forEach(element=>{
        if(element.isOnSale == true){
          this.productList.push(element);
        }
      })
    });
  }
  new() {
    this.allDefaultclass = '';
    this.saleclass = '';
    this.newclass = 'active';
    this.hotclass = '';
    this.tempproductList=[];
    this.productList=[];
    this.productListService.getProduct().subscribe((data: any) => {
      this.tempproductList = data;
      this.tempproductList.forEach(element=>{
        if(element.isNewArrival == true){
          this.productList.push(element);
        }
      })
    });
  }
  hot() {
    this.allDefaultclass = '';
    this.saleclass = '';
    this.newclass = '';
    this.hotclass = 'active';
    this.tempproductList=[];
    this.productList=[];
    this.productListService.getProduct().subscribe((data: any) => {
      this.tempproductList = data;
      this.tempproductList.forEach(element=>{
        if(element.isHot == true){
          this.productList.push(element);
        }
      })
    });
  }
  fiveColumn() {
    this.fiveclass = 'active';
    this.fourclass = '';
    this.threeclass = '';
    this.listclass = '';
    this.column = 'row product-isotope shop-product-wrap five-column';
    this.columnrow = 'col-12 col-lg-is-5 col-md-6 col-sm-6 mb-45 sale';
  }
  fourColumn() {

    this.fourclass = 'active';
    this.fiveclass = '';
    this.threeclass = '';
    this.listclass = '';
    this.column = 'row product-isotope shop-product-wrap four-column';
    this.columnrow = 'col-12 col-md-6 col-sm-6 mb-45 sale col-lg-3';
  }
  threeColumn() {
    this.threeclass = 'active';
    this.fiveclass = '';
    this.fourclass = '';
    this.listclass = '';
    this.column = 'row product-isotope shop-product-wrap three-column';
    this.columnrow = 'col-12 col-md-6 col-sm-6 mb-45 sale col-lg-4';
  }
  // list() {
  //   this.listclass = 'active';
  //   this.fiveclass = '';
  //   this.fourclass = '';
  //   this.threeclass = '';
  //   this.column='row product-isotope shop-product-wrap list';
  //   this.columnrow='col-12 col-md-6 col-sm-6 mb-45 sale col-lg-3';

  // }
  openFilter() {

    if (this.open == false) {
      this.open = true;
      this.filterclass = 'advance-filter-active-btn';
    }
    else {
      this.filterclass = 'shop-advance-filter-area';
      this.open = false;
    }

  };
  getProducts() {
    this.productListService.getProduct().subscribe((data: any) => {
      this.productList = data;
    });
  }
  getPopularProducts() {
    this.productListService.getPopular().subscribe((data: any) => {
      this.popularList = data
    })
  }
  getNavbarRoutedProducts() {
    this.productList = [];
    if (this.subid != undefined || this.subid != null) {
      let data = {
        subid: this.subid
      }
      this.productListService.getNavbarProduct(data).subscribe((data: any) => {
        this.productList = data;
      });
    }
    else {
      let data = {
        catid: this.catid
      }
      this.productListService.getNavbarProduct(data).subscribe((data: any) => {
        this.productList = data;
      });
    }

  }
  openCategories(id) {
    this.subid = null;
    this.catid = id;
    this.getNavbarRoutedProducts();
  }
  addToCart(id, obj) {

    // this.productListService. = true;
    if (this.UserId != undefined) {
      this.ProductListModel.userid = this.UserId;
      this.ProductListModel.productid = id;
      this.ProductListModel.quantity = 1;
      obj.quantity = 1;
      localStorage.setItem('cart', JSON.stringify(obj));
      this.productListService.saveAddTocart(this.ProductListModel).subscribe((response) => {
        console.log(response);
      })
    }
    else {
      obj.quantity = 1;
      localStorage.setItem('cart', JSON.stringify(obj));

    }

  }
  addToWishlist(id, obj) {
    if (this.UserId != undefined) {
      this.WishListModel.userid = this.UserId;
      this.WishListModel.productid = id;
      this.productListService.saveAddToWish(this.WishListModel).subscribe((response) => {
        console.log(response);
      })
    }
    else {
      localStorage.setItem('wish', JSON.stringify(obj));
    }

  }
  getProductList(id) {
    this.router.navigate(['/product/productdetails'], {
      queryParams: {
        val: id
      }
    })
  }
  openPopular(id){
    this.router.navigate(['/product/productdetails'], {
      queryParams: {
        val: id
      }
    })
  }
  getMainCategory(id) {
    this.productListService.getMainCat(0).subscribe(data => {
      this.category = data;
      this.category.forEach(element => {
        this.productListService.getMainCat(element.id).subscribe((res: any) => {
          element.isclose = true;
          element.SubCategory = res;
          element.SubCategory.isopen = false;
        })
      })
    });
  }

  getSubCategory(subid, i) {
    for (let p = 0; p < this.category.length; p++) {
      if (i != p) {
        this.category[p].isclose = true;
      }
    }
    if (this.category[i].isclose == true) {
      this.menuShow = 'block';
      this.category[i].isclose = false;
      if (this.category[i].SubCategory.isopen == false) {
        this.category[i].SubCategory.isopen = true;
        for (let j = 0; j < this.category.length; j++) {
          if (j != i) {
            this.category[j].SubCategory.isopen = false;
          }
        }
      }
      else {
        this.category[i].SubCategory.isopen = false;
      }
    }
    else {
      this.menuShow = 'none';
      this.category[i].isclose = true;
      this.category[i].SubCategory.isopen = false;
    }

  }
}
