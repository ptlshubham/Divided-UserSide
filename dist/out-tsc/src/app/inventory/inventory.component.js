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
exports.InventoryComponent = void 0;
var core_1 = require("@angular/core");
var InventoryComponent = /** @class */ (function () {
    function InventoryComponent() {
    }
    InventoryComponent.prototype.ngOnInit = function () {
        this.model = new Date();
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "nc-icon",
                tickIcon: "nc-check-2"
            });
        }
    };
    InventoryComponent = __decorate([
        core_1.Component({
            selector: 'app-inventory',
            templateUrl: './inventory.component.html',
            styleUrls: ['./inventory.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());
exports.InventoryComponent = InventoryComponent;
//# sourceMappingURL=inventory.component.js.map