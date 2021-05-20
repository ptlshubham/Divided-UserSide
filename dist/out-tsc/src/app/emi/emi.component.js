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
exports.EmiComponent = void 0;
var core_1 = require("@angular/core");
var emi_model_1 = require("./emi.model");
var emi_service_1 = require("./emi.service");
var EmiComponent = /** @class */ (function () {
    function EmiComponent(emiService) {
        this.emiService = emiService;
        this.EmiModel = new emi_model_1.Emi;
        this.addEmiFields = [];
        this.val = 0;
        this.EMI = [];
        this.bank = [];
        this.rateOfIntrest = [];
        this.roi = [];
        this.getBankList();
    }
    EmiComponent.prototype.ngOnInit = function () {
    };
    EmiComponent.prototype.addEmiMonths = function () {
        this.val++;
        this.addEmiFields.push({ name: this.val });
    };
    EmiComponent.prototype.removeEmiMonths = function (val) {
        this.addEmiFields.splice(val, 1);
    };
    EmiComponent.prototype.addBankList = function () {
        debugger;
        this.emiService.saveBankList(this.EmiModel).subscribe(function (response) {
            console.log(response);
        });
    };
    EmiComponent.prototype.getBankList = function () {
        var _this = this;
        debugger;
        this.emiService.getBankList().subscribe(function (data) {
            _this.EMI = data;
        });
    };
    EmiComponent.prototype.selectBankList = function (id) {
        var _this = this;
        this.EMI.forEach(function (element) {
            if (element.id == id) {
                _this.selectedBank = element.bankname;
            }
        });
    };
    EmiComponent = __decorate([
        core_1.Component({
            selector: 'app-emi',
            templateUrl: './emi.component.html',
            styleUrls: ['./emi.component.css']
        }),
        __metadata("design:paramtypes", [emi_service_1.EmiService])
    ], EmiComponent);
    return EmiComponent;
}());
exports.EmiComponent = EmiComponent;
//# sourceMappingURL=emi.component.js.map