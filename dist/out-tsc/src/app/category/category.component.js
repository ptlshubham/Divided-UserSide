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
exports.CategoryComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var category_model_1 = require("./category.model");
var category_service_1 = require("./category.service");
var clothsize_model_1 = require("./clothsize.model");
var images_model_1 = require("./images.model");
var product_model_1 = require("./product.model");
var quantity_model_1 = require("./quantity.model");
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, fm) {
        this.categoryService = categoryService;
        this.fm = fm;
        this.startRating = false;
        this.avibilityStatus = false;
        this.emiOptiions = false;
        this.relatedProduct = false;
        this.isShow = false;
        this.isshowsub = false;
        this.isProduct = false;
        this.isCatData = false;
        this.isMainShow = false;
        this.isMainCatData = false;
        this.isSubCatData = false;
        this.CategoryModel = new category_model_1.Category;
        this.ProductModel = new product_model_1.Product;
        this.ImagesModel = new images_model_1.Images;
        this.ClothSizeModel = new clothsize_model_1.ClothSize;
        this.QuantityWithSizeModel = new quantity_model_1.QuantityWithSize;
        this.quantitysize = [];
        this.images = [];
        this.clothsize = [];
        this.product = [];
        this.category = [];
        this.subcategory = [];
        this.subprodcat = [];
        this.editMain = {};
        this.editCat = {};
        this.addingprdtimg = [];
        this.val = 0;
        this.disabled = false;
        this.ShowFilter = false;
        this.limitSelection = false;
        this.files = [];
        this.addSelectFields = [];
        this.value = 0;
        this.mainNavCategory();
        this.getMainCategory(0);
        this.ProductModel.startRating = false;
        this.ProductModel.avibilityStatus = false;
        this.ProductModel.emiOptiions = false;
        this.ProductModel.relatedProduct = false;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.addSelectFields = [{ name: this.value }];
        this.value++;
    };
    CategoryComponent.prototype.showNotification = function (from, align) {
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
    CategoryComponent.prototype.mainNavCategory = function () {
        this.isMainShow = true;
        this.isshowsub = false;
        this.isProduct = false;
        this.isCatData = false;
        this.isShow = false;
        this.isSubCatData = false;
    };
    CategoryComponent.prototype.mainCategory = function () {
        this.isShow = true;
        this.isshowsub = false;
        this.isProduct = false;
        this.isCatData = false;
        this.isMainShow = false;
        this.isMainCatData = false;
        this.isSubCatData = false;
    };
    CategoryComponent.prototype.subCategory = function () {
        this.isshowsub = true;
        this.isShow = false;
        this.isProduct = false;
        this.isCatData = false;
        this.isMainShow = false;
        this.isMainCatData = false;
    };
    CategoryComponent.prototype.addProduct = function () {
        this.isProduct = true;
        this.isShow = false;
        this.isshowsub = false;
        this.isCatData = false;
        this.isMainShow = false;
        this.isMainCatData = false;
        this.isSubCatData = false;
        this.getClothSize();
    };
    CategoryComponent.prototype.ngAfterViewInit = function () {
        $('[rel="tooltip"]').tooltip();
    };
    CategoryComponent.prototype.submitMainCategory = function () {
        var _this = this;
        this.CategoryModel.parent = 0;
        this.CategoryModel.isactive = 1;
        this.categoryService.saveMainCat(this.CategoryModel).subscribe(function (response) {
            console.log(response);
            // this.router.navigate(['/', 'labourlist']);
            _this.getMainCategory(0);
        });
    };
    CategoryComponent.prototype.getMainCategory = function (id) {
        var _this = this;
        this.categoryService.getMainCat(id).subscribe(function (data) {
            _this.category = data;
        });
    };
    CategoryComponent.prototype.mainCatEdit = function (data) {
        debugger;
        this.editMain = data;
    };
    CategoryComponent.prototype.updateMainCate = function (data) {
        var _this = this;
        debugger;
        this.CategoryModel.isactive = 1;
        this.categoryService.updateMainCategory(data).subscribe(function (req) {
            _this.getMainCategory(0);
        });
    };
    CategoryComponent.prototype.mainCatRemove = function (id) {
        var _this = this;
        this.categoryService.removeMainCatList(id).subscribe(function (req) {
            _this.getMainCategory(0);
            _this.getProductSubCategory(_this.selectedSubCatid);
            _this.getSubCategory(_this.subToSubCat);
        });
    };
    CategoryComponent.prototype.editCategory = function (Data) {
        debugger;
        this.editCat = Data;
    };
    CategoryComponent.prototype.EditedSaveCategory = function (data) {
        var _this = this;
        debugger;
        this.category.forEach(function (element) {
            if (element.id == data) {
                _this.selectedCat = element.id;
                _this.CategoryModel.parent = _this.selectedCat;
            }
        });
        this.categoryService.updateMainCat(data).subscribe(function (req) {
            console.log(req);
            _this.getSubCategory(_this.subToSubCat);
        });
    };
    CategoryComponent.prototype.cateMain = function (id) {
        var _this = this;
        this.ImagesModel.mainCategoryId = id;
        this.ProductModel.mainCategory = id;
        this.category.forEach(function (element) {
            if (element.id == id) {
                _this.selectedCat = element.name;
            }
        });
        this.getSubCategory(id);
    };
    CategoryComponent.prototype.submitCategory = function () {
        var _this = this;
        this.category.forEach(function (element) {
            if (element.name == _this.selectedCat) {
                _this.CategoryModel.parent = element.id;
                _this.CategoryModel.isactive = 1;
            }
        });
        this.categoryService.saveCat(this.CategoryModel).subscribe(function (response) {
            console.log(response);
            _this.getSubCategory(_this.subToSubCat);
        });
    };
    CategoryComponent.prototype.cateCategory = function (id) {
        var _this = this;
        this.ProductModel.category = id;
        this.ImagesModel.categoryId = id;
        this.selectedSubCatid = id;
        this.subcategory.forEach(function (element) {
            if (element.id == id) {
                _this.selectedSubCat = element.name;
            }
        });
        this.getProductSubCategory(id);
    };
    CategoryComponent.prototype.getSubCategory = function (id) {
        var _this = this;
        this.subToSubCat = id;
        this.categoryService.getMainCat(id).subscribe(function (data) {
            _this.subcategory = data;
        });
    };
    CategoryComponent.prototype.submitSubCategory = function () {
        var _this = this;
        this.subcategory.forEach(function (element) {
            if (element.name == _this.selectedSubCat) {
                _this.CategoryModel.parent = element.id;
                _this.CategoryModel.isactive = 1;
            }
        });
        this.categoryService.saveCat(this.CategoryModel).subscribe(function (response) {
            _this.getProductSubCategory(_this.CategoryModel.parent);
        });
        this.isSubCatData = true;
    };
    CategoryComponent.prototype.getProductSubCategory = function (id) {
        var _this = this;
        this.categoryService.getMainCat(id).subscribe(function (data) {
            _this.subprodcat = data;
        });
    };
    CategoryComponent.prototype.subProCategory = function (id) {
        var _this = this;
        this.ImagesModel.subCategoryId = id;
        this.ProductModel.subCategory = id;
        this.subprodcat.forEach(function (element) {
            if (element.id == id) {
                _this.selectedSubProCat = element.name;
            }
        });
    };
    CategoryComponent.prototype.addImageUploader = function () {
        this.val++;
        this.addingprdtimg.push({ name: this.val });
    };
    CategoryComponent.prototype.removeImageUploader = function (val) {
        this.addingprdtimg.splice(val, 1);
    };
    CategoryComponent.prototype.select = function (event) {
        var _this = this;
        debugger;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var formdata = new FormData();
            formdata.append('file', file);
            debugger;
            this.categoryService.selectUploadImage(formdata).subscribe(function (response) {
                _this.image = response;
                console.log(response);
            });
        }
    };
    CategoryComponent.prototype.onSelect = function (event) {
        var _this = this;
        debugger;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            var formdata = new FormData();
            formdata.append('file', file);
            formdata.append('catid', this.ImagesModel.mainCategoryId);
            formdata.append('subcatid', this.ImagesModel.categoryId);
            formdata.append('grandchild', this.ImagesModel.subCategoryId);
            debugger;
            this.categoryService.selectMultiUploadImage(formdata).subscribe(function (response) {
                _this.multi = response;
                console.log(response);
            });
        }
    };
    // onSelect(event) {
    //   debugger
    //   const formdata = new FormData();
    //   if (event.addedFiles.length > 0) {
    //     for (var i = 0; i < event.addedFiles.length; i++) {
    //       this.files.push(event.addedFiles[i]);
    //     }
    //     for (var i = 0; i < this.files.length; i++) {
    //       formdata.append("files", this.files[i]);
    //     }
    //     //formdata.append('pid', this.pid)
    //     //   let data = { pid : this.pid ,  formdata}
    //     this.categoryService.selectMultiUploadImage(formdata).subscribe((response) => {
    //       this.image = response;
    //       console.log(response);
    //     })
    //   }
    // }
    CategoryComponent.prototype.addSelectSize = function () {
        this.value++;
        this.addSelectFields.push({ name: this.value, selsize: '', quantity: 0 });
    };
    CategoryComponent.prototype.removeSelectSize = function (value) {
        this.addSelectFields.splice(value, 1);
    };
    CategoryComponent.prototype.getClothSize = function () {
        var _this = this;
        this.categoryService.getCloth().subscribe(function (data) {
            _this.clothsize = data;
        });
    };
    CategoryComponent.prototype.selectClothsSize = function (id) {
        var _this = this;
        this.clothsize.forEach(function (element) {
            if (element.id == id) {
                _this.selectClothSize = element.size;
            }
        });
    };
    CategoryComponent.prototype.submitClothSize = function (id, index) {
        var _this = this;
        if (index != undefined) {
            this.clothsize.forEach(function (element) {
                if (element.id == id) {
                    _this.addSelectFields[index].selsize = element.size;
                }
            });
        }
        else {
            this.clothsize.forEach(function (element) {
                if (element.id == id) {
                    _this.selectClothSize = element.size;
                }
            });
        }
    };
    CategoryComponent.prototype.submitAddProduct = function () {
        debugger;
        this.ProductModel.isActive = 0;
        this.ProductModel.productMainImage = this.image;
        this.ProductModel.selectedSize = this.addSelectFields;
        // this.QuantityWithSizeModel.addSelectFields = this.addSelectFields;
        this.categoryService.saveAddProduct(this.ProductModel).subscribe(function (response) {
            console.log(response);
        });
    };
    CategoryComponent.prototype.removeOrChangedImage = function () {
        debugger;
        this.categoryService.removeOrChanged().subscribe(function (req) {
        });
    };
    CategoryComponent = __decorate([
        core_1.Component({
            selector: 'app-category',
            templateUrl: './category.component.html',
            styleUrls: ['./category.component.css']
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService,
            forms_1.FormBuilder])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map