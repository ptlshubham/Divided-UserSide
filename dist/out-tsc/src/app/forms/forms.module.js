"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forms = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var equal_validator_directive_1 = require("./equal-validator.directive");
var jw_bootstrap_switch_ng2_1 = require("jw-bootstrap-switch-ng2");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ngx_chips_1 = require("ngx-chips");
var forms_routing_1 = require("./forms.routing");
var extendedforms_component_1 = require("./extendedforms/extendedforms.component");
var regularforms_component_1 = require("./regularforms/regularforms.component");
var validationforms_component_1 = require("./validationforms/validationforms.component");
var wizard_component_1 = require("./wizard/wizard.component");
var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild(forms_routing_1.FormsRoutes),
                forms_1.FormsModule,
                ngx_chips_1.TagInputModule,
                jw_bootstrap_switch_ng2_1.JwBootstrapSwitchNg2Module,
                ng_bootstrap_1.NgbModule,
                forms_1.FormsModule
            ],
            declarations: [
                extendedforms_component_1.ExtendedFormsComponent,
                regularforms_component_1.RegularFormsComponent,
                validationforms_component_1.ValidationFormsComponent,
                wizard_component_1.WizardComponent,
                equal_validator_directive_1.EqualValidator
            ]
        })
    ], Forms);
    return Forms;
}());
exports.Forms = Forms;
//# sourceMappingURL=forms.module.js.map