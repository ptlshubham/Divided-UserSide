"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, mainCategory, category, subCategory, productName, brandName, manufacturerName, productCode, startRating, productSRNumber, productPrice, discountPrice, emiOptiions, avibilityStatus, 
    // public productQuantity?: number [],
    descripition, relatedProduct, 
    //public selectedSize?: string [],
    productSize, itemWeight, 
    // public productListImage?: string,
    isActive, productMainImage, selectedSize) {
        this.id = id;
        this.mainCategory = mainCategory;
        this.category = category;
        this.subCategory = subCategory;
        this.productName = productName;
        this.brandName = brandName;
        this.manufacturerName = manufacturerName;
        this.productCode = productCode;
        this.startRating = startRating;
        this.productSRNumber = productSRNumber;
        this.productPrice = productPrice;
        this.discountPrice = discountPrice;
        this.emiOptiions = emiOptiions;
        this.avibilityStatus = avibilityStatus;
        this.descripition = descripition;
        this.relatedProduct = relatedProduct;
        this.productSize = productSize;
        this.itemWeight = itemWeight;
        this.isActive = isActive;
        this.productMainImage = productMainImage;
        this.selectedSize = selectedSize;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.model.js.map