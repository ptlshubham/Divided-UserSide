"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmiModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var emi_component_1 = require("./emi.component");
var router_1 = require("@angular/router");
var emi_service_1 = require("./emi.service");
var forms_1 = require("@angular/forms");
var EmiModule = /** @class */ (function () {
    function EmiModule() {
    }
    EmiModule = __decorate([
        core_1.NgModule({
            declarations: [emi_component_1.EmiComponent],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild([
                    {
                        path: 'emi',
                        component: emi_component_1.EmiComponent
                    }
                ])
            ],
            providers: [
                emi_service_1.EmiService
            ],
        })
    ], EmiModule);
    return EmiModule;
}());
exports.EmiModule = EmiModule;
//# sourceMappingURL=emi.module.js.map