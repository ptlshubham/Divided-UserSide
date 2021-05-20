"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedFormsComponent = void 0;
var core_1 = require("@angular/core");
var ExtendedFormsComponent = /** @class */ (function () {
    function ExtendedFormsComponent() {
        this.state_default = true;
        this.state_plain = true;
        this.state_with_icons = true;
        this.tagItems = ['Amsterdam', 'Washington', 'Sydney', 'Beijing'];
    }
    ExtendedFormsComponent.prototype.ngOnInit = function () {
        this.model = new Date();
        this.model2 = new Date();
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();
        var tagClass = $('.tagsinput').data('color');
        if ($(".tagsinput").length != 0) {
            $('.tagsinput').tagsinput();
        }
        $('.bootstrap-tagsinput').addClass('' + tagClass + '-badge');
        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "nc-icon",
                tickIcon: "nc-check-2"
            });
        }
        if ($(".datetimepicker").length != 0) {
            $('.datetimepicker').datetimepicker({
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove'
                },
                debug: true
            });
        }
        if ($(".datepicker").length != 0) {
            $('.datepicker').datetimepicker({
                format: 'MM/DD/YYYY',
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove'
                },
                debug: true
            });
        }
        if ($(".timepicker").length != 0) {
            $('.timepicker').datetimepicker({
                //          format: 'H:mm',    // use this format if you want the 24hours timepicker
                format: 'h:mm A',
                icons: {
                    time: "fa fa-clock-o",
                    date: "fa fa-calendar",
                    up: "fa fa-chevron-up",
                    down: "fa fa-chevron-down",
                    previous: 'fa fa-chevron-left',
                    next: 'fa fa-chevron-right',
                    today: 'fa fa-screenshot',
                    clear: 'fa fa-trash',
                    close: 'fa fa-remove'
                },
                debug: true
            });
        }
        var noUiSlider = require('nouislider');
        var sliderRegular = document.getElementById('sliderRegular');
        noUiSlider.create(sliderRegular, {
            start: 40,
            connect: [true, false],
            range: {
                min: 0,
                max: 100
            }
        });
        var sliderDouble = document.getElementById('sliderDouble');
        noUiSlider.create(sliderDouble, {
            start: [20, 60],
            connect: true,
            range: {
                min: 0,
                max: 100
            }
        });
    };
    ExtendedFormsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'extendedforms-cmp',
            templateUrl: 'extendedforms.component.html'
        })
    ], ExtendedFormsComponent);
    return ExtendedFormsComponent;
}());
exports.ExtendedFormsComponent = ExtendedFormsComponent;
//# sourceMappingURL=extendedforms.component.js.map