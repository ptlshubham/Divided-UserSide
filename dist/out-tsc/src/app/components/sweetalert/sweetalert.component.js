"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SweetAlertComponent = void 0;
var core_1 = require("@angular/core");
var sweetalert2_1 = require("sweetalert2");
var SweetAlertComponent = /** @class */ (function () {
    function SweetAlertComponent() {
    }
    SweetAlertComponent.prototype.showSwal = function (type) {
        if (type == 'basic') {
            sweetalert2_1.default.fire({
                title: "Here's a message!",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success"
                }
            });
        }
        else if (type == 'title-and-text') {
            sweetalert2_1.default.fire({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-info"
                }
            });
        }
        else if (type == 'success-message') {
            sweetalert2_1.default.fire({
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success",
                },
                icon: "success"
            });
        }
        else if (type == 'warning-message-and-confirmation') {
            sweetalert2_1.default.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger',
                },
                confirmButtonText: 'Yes, delete it!',
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2_1.default.fire({
                        title: 'Deleted!',
                        text: 'Your file has been deleted.',
                        icon: 'success',
                        customClass: {
                            confirmButton: "btn btn-success",
                        },
                        buttonsStyling: false
                    });
                }
            });
        }
        else if (type == 'warning-message-and-cancel') {
            sweetalert2_1.default.fire({
                title: 'Are you sure?',
                text: 'You will not be able to recover this imaginary file!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, keep it',
                customClass: {
                    confirmButton: "btn btn-success",
                    cancelButton: "btn btn-danger",
                },
                buttonsStyling: false
            }).then(function (result) {
                if (result.value) {
                    sweetalert2_1.default.fire({
                        title: 'Deleted!',
                        text: 'Your imaginary file has been deleted.',
                        icon: 'success',
                        customClass: {
                            confirmButton: "btn btn-success",
                        },
                        buttonsStyling: false
                    });
                }
                else {
                    sweetalert2_1.default.fire({
                        title: 'Cancelled',
                        text: 'Your imaginary file is safe :)',
                        icon: 'error',
                        customClass: {
                            confirmButton: "btn btn-info",
                        },
                        buttonsStyling: false
                    });
                }
            });
        }
        else if (type == 'custom-html') {
            sweetalert2_1.default.fire({
                title: 'HTML example',
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success",
                },
                html: 'You can use <b>bold text</b>, ' +
                    '<a href="https://github.com">links</a> ' +
                    'and other HTML tags'
            });
        }
        else if (type == 'auto-close') {
            sweetalert2_1.default.fire({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            });
        }
        else if (type == 'input-field') {
            sweetalert2_1.default.fire({
                title: 'Input something',
                html: '<div class="form-group">' +
                    '<input id="input-field" type="text" class="form-control" />' +
                    '</div>',
                showCancelButton: true,
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger',
                },
                buttonsStyling: false
            }).then(function (result) {
                sweetalert2_1.default.fire({
                    icon: 'success',
                    html: 'You entered: <strong>' +
                        $('#input-field').val() +
                        '</strong>',
                    customClass: {
                        confirmButton: 'btn btn-success',
                    },
                    buttonsStyling: false
                });
            });
        }
    };
    SweetAlertComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'sweetalert-cmp',
            templateUrl: 'sweetalert.component.html'
        })
    ], SweetAlertComponent);
    return SweetAlertComponent;
}());
exports.SweetAlertComponent = SweetAlertComponent;
//# sourceMappingURL=sweetalert.component.js.map