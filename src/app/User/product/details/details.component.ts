import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ChangeDetectorRef, Component, Input, KeyValueDiffer, KeyValueDiffers, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/api.service';
import { Gallery, GalleryItem, ImageSize, ThumbnailsPosition } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';
import { Toaster } from 'ngx-toast-notifications';
import { ProductlistService } from '../list/list.service';
import { Productlist } from '../list/productlist.model';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  items: GalleryItem[];
  @ViewChild("itemTemplate", { static: true }) itemTemplate: TemplateRef<any>;

  imageData: any = [];
  getIamges: any[];
  getDetails: any;
  Ref_id: any;
  data: any;
  public ProductListModel: Productlist = new Productlist;
  public productList: Productlist[] = [];
  public similarProducts: Productlist[] = [];
  rating: number;
  quantity: any;
  sizelist: any = [];
  sizeclassxxl = "single-size";
  sizeclasss = "single-size";
  sizeclassl = "single-size";
  sizeclassm = "single-size";
  sizeclassxs = "single-size";
  sizeclassxl = "single-size";
  isxxl: boolean = false;
  ism: boolean = false;
  isxl: boolean = false;
  isl: boolean = false;
  iss: boolean = false;
  isxs: boolean = false;
  // slides = [
  //   {
  //     url: 'assets/images/sliders/s1.jpeg'
  //   },
  //   {
  //     url: 'assets/images/sliders/s1.jpeg'
  //   }
  // ]
  // img: string = 'assets/images/product/shoe_1.jpg';
  // img1class: string = 'thumbnail active';
  // img2class: string = 'thumbnail';
  // img3class: string = 'thumbnail';
  // img4class: string = 'thumbnail';
  constructor(
    private detailsService: DetailsService,
    private productListService: ProductlistService,
    private activatedRoute: ActivatedRoute,
    private apiservice: ApiService,
    public gallery: Gallery,
    public lightbox: Lightbox,
    private toaster: Toaster
  ) {
    this.activatedRoute.queryParams.subscribe((res: any) => {
      this.Ref_id = res.val;
      this.getProductDetails();
      this.getProductimages();

      this.rating = 0;
    })
  }
  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    // this.items = this.imageData.map(item => {
    //   return {
    //     type: "imageViewer",
    //     data: {
    //       src: 'http://localhost:8090' + item.productListImage,
    //       thumb: 'http://localhost:8090' + item.productListImage
    //     }
    //   };
    // });

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref("lightbox");

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }


  getProductDetails() {
    this.detailsService.getDetails(this.Ref_id).subscribe((data: any) => {
      this.getDetails = data;
      this.getSimilarProducts();
      this.getDetails[0].quantity = 1;
      this.getDetails[0].disablemin = true;
      this.getProductSize(this.getDetails[0].id);
    });
  }
  getSimilarProducts() {
     
    this.getDetails[0].category;
    this.productListService.getSimilar(this.getDetails[0].category).subscribe((data: any) => {
      this.similarProducts = data;
    });
  }
  openSimilar(id){
    this.detailsService.getDetails(id).subscribe((data: any) => {
      this.getDetails = data;
      this.getDetails[0].quantity = 1;
      this.getDetails[0].disablemin = true;
      this.getProductSize(this.getDetails[0].id);
    });
  }
  getProductSize(id) {

    this.detailsService.getProductSizelist(id).subscribe(data => {
      this.sizelist = data;
      for(let i=0;i<this.sizelist.length;i++){
        if (this.sizelist[i].size == 'undefined') {
         this.sizelist.splice(i,1);
        }
      }
     

    })
  }
  selectSize(val) {
    if (val == 'xxl') {
      this.sizeclassxl = "single-size active";
      this.ProductListModel.productSize = 'XXL';
    }
    else if (val == 'l') {
      this.sizeclassl = "single-size active";
      this.ProductListModel.productSize = 'L'
    }
    else if (val == 's') {
      this.sizeclasss = "single-size active";
      this.ProductListModel.productSize = 'S'
    }
    else if (val == 'xs') {
      this.sizeclassxs = "single-size active";
      this.ProductListModel.productSize = 'Extra Small'
    }
    else if (val == 'xl') {
      this.sizeclassxl = "single-size active";
      this.ProductListModel.productSize = 'XL'
    }
    else if (val == 'm') {
      this.sizeclassxl = "single-size active";
      this.ProductListModel.productSize = 'M'
    }
  }
  getProductimages() {
    this.detailsService.getImages(this.Ref_id).subscribe((data: any) => {
      this.getIamges = data;
      this.getIamges.forEach(element => {
        this.imageData.push(element)
      })
      this.items = this.imageData.map(item => {
        return {
          type: "imageViewer",
          data: {
            src: 'http://localhost:8090' + item.productListImage,
            thumb: 'http://localhost:8090' + item.productListImage
          }
        };
      });
    });

  }
  addToCart(id, obj) {
     
    // this.productListService. = true;
    if (localStorage.getItem('UserId') != undefined) {
      this.ProductListModel.userid = localStorage.getItem('UserId') ;
      this.ProductListModel.productid = id;
      this.ProductListModel.quantity = 1;
      obj.quantity = 1;
      localStorage.setItem('cart', JSON.stringify(obj));
      this.productListService.saveAddTocart(this.ProductListModel).subscribe((response) => {
        console.log(response);
        this.toaster.open({text:'Product added in cart Successfully.',caption:'Product',type:'dark',duration:4000,position:'bottom-center'});
      })
    }
    else {
      obj.quantity = 1;
      localStorage.setItem('cart', JSON.stringify(obj));

    }

  }

  incrementQty() {

    this.getDetails[0].quantity++;
    this.getDetails[0].total = this.getDetails[0].total + this.getDetails[0].productPrice;
    if (this.getDetails[0].quantity > 1) {
      this.getDetails[0].disablemin = false;
    }
    // this.GrandTotal = this.GrandTotal + this.getCartList[indx].productPrice;

  }
  decrementQty() {
    if (this.getDetails[0].quantity == 1) {

      this.getDetails[0].disablemin = true;
      // this.getDetails[0].quantity--;
    }
    else {
      this.getDetails[0].quantity--;
      this.getDetails[0].disablemin = false;
      this.getDetails[0].total = this.getDetails[0].total - this.getDetails[0].productPrice
      // this.GrandTotal = this.GrandTotal - this.getCartList[indx].productPrice;
    }
  }
}

