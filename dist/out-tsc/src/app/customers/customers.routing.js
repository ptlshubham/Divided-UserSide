"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersRoutes = void 0;
var customerlist_component_1 = require("./customerlist/customerlist.component");
exports.CustomersRoutes = [{
        path: '',
        children: [{
                path: 'customerlist',
                component: customerlist_component_1.CustomerlistComponent
            }]
    },
];
//# sourceMappingURL=customers.routing.js.map