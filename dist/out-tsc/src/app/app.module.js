"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.tokenGetter = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var app_component_1 = require("./app.component");
var sidebar_module_1 = require("./sidebar/sidebar.module");
var fixedplugin_module_1 = require("./shared/fixedplugin/fixedplugin.module");
var footer_module_1 = require("./shared/footer/footer.module");
var navbar_module_1 = require("./shared/navbar/navbar.module");
var admin_layout_component_1 = require("./layouts/admin/admin-layout.component");
var auth_layout_component_1 = require("./layouts/auth/auth-layout.component");
var app_routing_1 = require("./app.routing");
var http_2 = require("@angular/common/http");
var ng_multiselect_dropdown_1 = require("ng-multiselect-dropdown");
function tokenGetter() {
    return localStorage.getItem('access_token');
}
exports.tokenGetter = tokenGetter;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(app_routing_1.AppRoutes, {
                    useHash: true
                }),
                ng_bootstrap_1.NgbModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                fixedplugin_module_1.FixedPluginModule,
                ng_multiselect_dropdown_1.NgMultiSelectDropDownModule.forRoot(),
            ],
            declarations: [
                app_component_1.AppComponent,
                admin_layout_component_1.AdminLayoutComponent,
                auth_layout_component_1.AuthLayoutComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map