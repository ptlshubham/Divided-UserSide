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
exports.CurrentComponent = void 0;
var core_1 = require("@angular/core");
var CurrentComponent = /** @class */ (function () {
    function CurrentComponent() {
    }
    CurrentComponent.prototype.ngOnInit = function () {
    };
    CurrentComponent = __decorate([
        core_1.Component({
            selector: 'app-current',
            templateUrl: './current.component.html',
            styleUrls: ['./current.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], CurrentComponent);
    return CurrentComponent;
}());
exports.CurrentComponent = CurrentComponent;
//# sourceMappingURL=current.component.js.map