import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { ProductlistService } from '../product/list/list.service';
import { Productlist } from '../product/list/productlist.model';
import { UserHomeService } from './home.services';
import { Webbanners } from './webhome.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  flag: boolean;
  cssclasss: string = '';
  public Banners: Webbanners[]=[];
  public newArrival: Productlist[] = [];
  topban:any=[];
  dealOfTheDay:any=[];
  productList:any;
  public imageUrls1;
  imageObject:any=[];

  constructor(
    private userHomeService:UserHomeService,
    private productListService:ProductlistService,
    private router:Router
    ) {
    this.flag = false;
    this.cssclasss = 'newsletter-overlay-active';
    this.getBanners();
    this.getBestProductSlider();
    this.getNewArrivalsProducts();
    this.getDealOfTheDay();
  }

  ngOnInit(): void {

    this.imageUrls1 = [
      'assets/images/slider/s1.JPG',
      'assets/images/slider/s2.JPG',
      'assets/images/slider/s3.JPG',
      'assets/images/slider/s4.JPG',
      'assets/images/slider/s5.JPG',
      'assets/images/slider/s6.JPG',
      'assets/images/slider/s7.JPG',
      'assets/images/slider/s8.JPG',

    ];
  }
  
  closepopup() {
    this.flag = true;
    this.cssclasss = '';
  }
  getBanners() {
    this.userHomeService.getWebSlider().subscribe((data: any) => {
      this.Banners = data;
      this.Banners.forEach(element=>{
        if(element.name =='Top'){
          this.topban.push(element);
        }
      })
  
    });
  }
  getDealOfTheDay() {
    this.userHomeService.getWebSlider().subscribe((data: any) => {
      this.Banners = data;
      this.Banners.forEach(element=>{
        if(element.name =='Deal of the Day'){
          this.dealOfTheDay.push(element);
        }
      })
  
    });
  }
  getBestProductSlider(){
      this.userHomeService.getBestProduct().subscribe((data: any) => {
        this.productList = data;
        this.productList.forEach(element => {

          let data={
            image: 'http://localhost:8090'+element.productMainImage,
            thumbImage: 'http://localhost:8090'+element.productMainImage,
            title:element.productName
          }
         
          this.imageObject.push(data)
        });
      });
  }
  openImageMenu(val){
    if(val =='Tops'){
      this.router.navigate(['/product/productlist'], {
        queryParams: {
          val:JSON.stringify({subid:161})
        }
      })
    }
    else if(val == 'Kurtis'){
      this.router.navigate(['/product/productlist'], {
        queryParams: {
          val:JSON.stringify({subid:160})
        }
      })
    }
    else if(val == 'Lehenga'){
      this.router.navigate(['/product/productlist'], {
        queryParams: {
          val:JSON.stringify({subid:159})
        }
      })
    }
    else if(val == 'Dresses'){
      this.router.navigate(['/product/productlist'], {
        queryParams: {
          val:JSON.stringify({subid:161})
        }
      })
    }
    else if(val == 'Punjabi'){
      this.router.navigate(['/product/productlist'], {
        queryParams: {
          val:JSON.stringify({subid:160})
        }
      })
    }
  }

  getNewArrivalsProducts() {
    this.userHomeService.getNewArrival().subscribe((data: any) => {
      this.newArrival = data
    })
  }
  openNewArrivals(id) {
    this.router.navigate(['/product/productdetails'], {
      queryParams: {
        val: id
      }
    })
  }

}
