"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridSystemComponent = void 0;
var core_1 = require("@angular/core");
var GridSystemComponent = /** @class */ (function () {
    function GridSystemComponent() {
    }
    GridSystemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'grid-cmp',
            templateUrl: 'grid.component.html'
        })
    ], GridSystemComponent);
    return GridSystemComponent;
}());
exports.GridSystemComponent = GridSystemComponent;
//# sourceMappingURL=grid.component.js.map