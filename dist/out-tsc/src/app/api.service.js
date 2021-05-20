"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.httpOption = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    ApiService_1 = ApiService;
    // GetCategory(){
    //   return this.http.get(this.base_path+'/admin/GetCategoryddl',this.httpOption).pipe(
    //     map(res=>res)
    //   )
    // }
    // GetSubCategory(cid){
    //   return this.http.get(this.base_path+'/admin/GetSubCategory/'+cid,this.httpOption).pipe(
    //     map(res=>res)
    //   )
    // }
    // SaveProduct(data){
    //   debugger
    //   return this.http.post(this.base_path+'/admin/SaveProductDetails',JSON.stringify(data),this.httpOption).pipe(
    //     map(req=>req)
    //   )
    // }
    // getProducts(cid){
    //   return this.http.get(this.base_path+'/admin/GetProducts/'+cid,this.httpOption).pipe(
    //     map(res=>res)
    //   )
    // }
    // UploadProductImg(img ){
    //   debugger
    //   return this.http.post(this.base_path+'/admin/UploadProductImage', img).pipe();
    // }
    // UploadProductDetailImg(img ){
    //   debugger
    //   return this.http.post(this.base_path+'/admin/UploadProductDetailImage',img).pipe();
    // }
    // UploadMultiImg(img){
    //   debugger
    //   return this.http.post(this.base_path+'/admin/UploadMultiProductImage',img).pipe();
    // }
    // GetGalleryImg(ref_id){
    //   debugger
    //   return this.http.get(this.base_path+'/admin/GetGallery/'+ref_id,this.httpOption).pipe(
    //     map(res=>res)
    //   )
    // }
    // RemoveProductList(pid){
    //   debugger
    //   return this.http.get(this.base_path+'/admin/RemoveProduct/'+pid,this.httpOption).pipe(
    //     map(res=>res)
    //   )
    // }
    // GetDisplayGalleryImg(ref_id){
    //   debugger
    //   return this.http.get(this.base_path+'/admin/GetGallery'+ref_id,this.httpOption).pipe(
    //     map(res=>res)
    //   )
    // }
    // SaveMail(data){
    //   debugger
    //   return this.http.post(this.base_path+'/admin/SendEmailToUser',JSON.stringify(data),this.httpOption).pipe(
    //     map(req=>req)
    //   )
    // }
    ApiService.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "ti-gift",
            message: "Welcome to <b>Paper Dashboard</b> - a beautiful dashboard for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
        });
    };
    var ApiService_1;
    ApiService.HOST_URL = "http://localhost:8090";
    ApiService.saveMainURL = ApiService_1.HOST_URL + '/admin/SaveMainCategory';
    ApiService.getMainURL = ApiService_1.HOST_URL + '/admin/GetMainCategory/';
    ApiService.saveCatURL = ApiService_1.HOST_URL + '/admin/SaveMainCategory';
    ApiService.updateMainCatURL = ApiService_1.HOST_URL + '/admin/UpdateMainCategory/';
    ApiService.removeMainCatURL = ApiService_1.HOST_URL + '/admin/RemoveMainCategory/';
    ApiService.updateCategoryURL = ApiService_1.HOST_URL + '/admin/UpdateCategory/';
    ApiService.saveProductsURL = ApiService_1.HOST_URL + '/admin/SaveAddProducts/';
    ApiService.uploadMainImageURL = ApiService_1.HOST_URL + '/admin/UploadProductImage/';
    ApiService.uploadMultiImageURL = ApiService_1.HOST_URL + '/admin/UploadMultiProductImage/';
    ApiService.removeImageURL = ApiService_1.HOST_URL + '/admin/RemoveRecentUoloadImage/';
    ApiService.getClothsURL = ApiService_1.HOST_URL + '/admin/GetClothsSize/';
    ApiService.getReviewsListURL = ApiService_1.HOST_URL + '/admin/GetReviewList/';
    ApiService.updatereviewsURL = ApiService_1.HOST_URL + '/admin/UpdateReviews/';
    ApiService.removeReviewsURL = ApiService_1.HOST_URL + '/admin/RemoveReviews/';
    ApiService.getCustomerListURL = ApiService_1.HOST_URL + '/admin/GetCustomerList/';
    ApiService.loginAdminURL = ApiService_1.HOST_URL + '/admin/GetLoginAdmin/';
    ApiService.saveAdminRegisterURL = ApiService_1.HOST_URL + '/admin/SaveAdminRegister';
    ApiService.saveBankListURL = ApiService_1.HOST_URL + '/admin/SaveBankListCategory';
    ApiService.getBankListURL = ApiService_1.HOST_URL + '/admin/GetBankList';
    ApiService = ApiService_1 = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map