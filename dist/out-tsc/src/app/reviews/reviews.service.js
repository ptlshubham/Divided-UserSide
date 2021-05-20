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
exports.ReviewsService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var http_2 = require("@angular/http");
var api_service_1 = require("app/api.service");
var ReviewsService = /** @class */ (function () {
    function ReviewsService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
    }
    ReviewsService.prototype.getReview = function () {
        debugger;
        return this.httpClient.get(api_service_1.ApiService.getReviewsListURL);
    };
    ReviewsService.prototype.updateRating = function (admin) {
        debugger;
        return this.httpClient.post(api_service_1.ApiService.updatereviewsURL, admin);
    };
    ReviewsService.prototype.removeRating = function (id) {
        debugger;
        return this.httpClient.get(api_service_1.ApiService.removeReviewsURL + id);
    };
    ReviewsService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_2.Http,
            http_1.HttpClient])
    ], ReviewsService);
    return ReviewsService;
}());
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=reviews.service.js.map