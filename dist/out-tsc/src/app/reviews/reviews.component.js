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
exports.ReviewsComponent = void 0;
var core_1 = require("@angular/core");
var reviews_model_1 = require("./reviews.model");
var reviews_service_1 = require("./reviews.service");
var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(reviewsService) {
        this.reviewsService = reviewsService;
        this.ReviewsModel = new reviews_model_1.Reviews;
        this.rating = [];
        this.editrating = [];
        this.getReviewList();
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        this.model = new Date();
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "nc-icon",
                tickIcon: "nc-check-2"
            });
        }
    };
    ReviewsComponent.prototype.getReviewList = function () {
        var _this = this;
        this.reviewsService.getReview().subscribe(function (data) {
            _this.rating = data;
        });
    };
    ReviewsComponent.prototype.editReview = function (data) {
        debugger;
        this.editrating = data;
    };
    ReviewsComponent.prototype.updateRatings = function (data) {
        debugger;
        this.reviewsService.updateRating(data).subscribe(function (req) {
        });
    };
    ReviewsComponent.prototype.removeReview = function (id) {
        var _this = this;
        this.reviewsService.removeRating(id).subscribe(function (req) {
            _this.getReviewList();
        });
    };
    ReviewsComponent = __decorate([
        core_1.Component({
            selector: 'app-reviews',
            templateUrl: './reviews.component.html',
            styleUrls: ['./reviews.component.css']
        }),
        __metadata("design:paramtypes", [reviews_service_1.ReviewsService])
    ], ReviewsComponent);
    return ReviewsComponent;
}());
exports.ReviewsComponent = ReviewsComponent;
//# sourceMappingURL=reviews.component.js.map