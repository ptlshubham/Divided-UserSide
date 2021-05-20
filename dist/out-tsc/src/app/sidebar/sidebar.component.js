"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarComponent = exports.ROUTES = void 0;
var core_1 = require("@angular/core");
//Menu Items
exports.ROUTES = [{
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'nc-icon nc-bank'
    },
    {
        path: '/category',
        title: 'Add',
        type: 'link',
        icontype: 'nc-icon nc-simple-add'
    },
    // Only hidden items Don't Delete this Path
    // {
    //     path: '/vendors',
    //     title: 'Vendors',
    //     type: 'link',
    //     icontype: 'fa fa-industry'
    // },
    {
        path: '/emi',
        title: 'EMI ',
        type: 'link',
        icontype: 'fa fa-percent'
    },
    {
        path: '/inventory',
        title: 'Manage Inventory',
        type: 'link',
        icontype: 'fa fa-product-hunt'
    },
    {
        path: '/customers',
        title: 'Customers',
        type: 'sub',
        collapse: 'components',
        icontype: 'nc-icon nc-single-02',
        children: [
            { path: 'customerlist', title: 'Customer List', ab: 'CL' },
        ]
    },
    {
        path: '/orders',
        title: 'Orders List',
        type: 'sub',
        collapse: 'components',
        icontype: 'fa fa-shopping-cart',
        children: [
            { path: 'current', title: 'Recent Orders', ab: 'CO' },
            { path: 'pending', title: 'Pending Orders', ab: 'PO' },
            { path: 'running', title: 'Shipments Orders', ab: 'SO' },
            { path: 'complete', title: 'Complete Orders', ab: 'CO' },
        ]
    },
    {
        path: '/reviews',
        title: 'Customer Reviews ',
        type: 'link',
        icontype: 'fa fa-star'
    },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if (window.outerWidth > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = exports.ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
    };
    SidebarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sidebar-cmp',
            templateUrl: 'sidebar.component.html',
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map