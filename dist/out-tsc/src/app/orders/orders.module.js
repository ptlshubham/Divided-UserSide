"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var orders_routing_1 = require("./orders.routing");
var pending_component_1 = require("./pending/pending.component");
var complete_component_1 = require("./complete/complete.component");
var running_component_1 = require("./running/running.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var forms_1 = require("@angular/forms");
var current_component_1 = require("./current/current.component");
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        core_1.NgModule({
            declarations: [
                current_component_1.CurrentComponent,
                pending_component_1.PendingComponent,
                complete_component_1.CompleteComponent,
                running_component_1.RunningComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ng_bootstrap_1.NgbModule,
                router_1.RouterModule.forChild(orders_routing_1.OrdersRoutes),
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());
exports.OrdersModule = OrdersModule;
//# sourceMappingURL=orders.module.js.map