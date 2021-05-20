"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var reviews_component_1 = require("./reviews.component");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var reviews_service_1 = require("./reviews.service");
var ReviewsModule = /** @class */ (function () {
    function ReviewsModule() {
    }
    ReviewsModule = __decorate([
        core_1.NgModule({
            declarations: [reviews_component_1.ReviewsComponent],
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    {
                        path: 'reviews',
                        component: reviews_component_1.ReviewsComponent
                    }
                ])
            ],
            providers: [
                reviews_service_1.ReviewsService
            ],
        })
    ], ReviewsModule);
    return ReviewsModule;
}());
exports.ReviewsModule = ReviewsModule;
//# sourceMappingURL=reviews.module.js.map