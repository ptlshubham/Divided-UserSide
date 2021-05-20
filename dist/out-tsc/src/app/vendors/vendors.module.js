"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var vendors_component_1 = require("./vendors.component");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var VendorsModule = /** @class */ (function () {
    function VendorsModule() {
    }
    VendorsModule = __decorate([
        core_1.NgModule({
            declarations: [vendors_component_1.VendorsComponent],
            imports: [
                common_1.CommonModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forChild([
                    {
                        path: 'vendors',
                        component: vendors_component_1.VendorsComponent
                    }
                ])
            ]
        })
    ], VendorsModule);
    return VendorsModule;
}());
exports.VendorsModule = VendorsModule;
//# sourceMappingURL=vendors.module.js.map