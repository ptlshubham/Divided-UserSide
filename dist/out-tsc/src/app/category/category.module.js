"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var category_component_1 = require("./category.component");
var forms_1 = require("@angular/forms");
var category_service_1 = require("./category.service");
var jw_bootstrap_switch_ng2_1 = require("jw-bootstrap-switch-ng2");
var ng_multiselect_dropdown_1 = require("ng-multiselect-dropdown");
var CategoryModule = /** @class */ (function () {
    function CategoryModule() {
    }
    CategoryModule = __decorate([
        core_1.NgModule({
            declarations: [category_component_1.CategoryComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                jw_bootstrap_switch_ng2_1.JwBootstrapSwitchNg2Module,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule.forRoot(),
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forChild([
                    {
                        path: 'category',
                        component: category_component_1.CategoryComponent
                    }
                ])
            ],
            providers: [
                category_service_1.CategoryService
            ],
        })
    ], CategoryModule);
    return CategoryModule;
}());
exports.CategoryModule = CategoryModule;
//# sourceMappingURL=category.module.js.map