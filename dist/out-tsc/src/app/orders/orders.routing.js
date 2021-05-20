"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersRoutes = void 0;
var complete_component_1 = require("./complete/complete.component");
var current_component_1 = require("./current/current.component");
var pending_component_1 = require("./pending/pending.component");
var running_component_1 = require("./running/running.component");
exports.OrdersRoutes = [{
        path: '',
        children: [{
                path: 'current',
                component: current_component_1.CurrentComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'pending',
                component: pending_component_1.PendingComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'complete',
                component: complete_component_1.CompleteComponent
            }]
    }, {
        path: '',
        children: [{
                path: 'running',
                component: running_component_1.RunningComponent
            }]
    },
];
//# sourceMappingURL=orders.routing.js.map