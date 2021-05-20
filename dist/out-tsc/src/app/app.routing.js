"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
var admin_layout_component_1 = require("./layouts/admin/admin-layout.component");
var auth_layout_component_1 = require("./layouts/auth/auth-layout.component");
exports.AppRoutes = [{
        path: '',
        redirectTo: 'pages/login',
        pathMatch: 'full',
    }, {
        path: '',
        component: admin_layout_component_1.AdminLayoutComponent,
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }, {
                path: '',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            },
            {
                path: '',
                loadChildren: './category/category.module#CategoryModule'
            },
            {
                path: '',
                loadChildren: './emi/emi.module#EmiModule'
            },
            {
                path: 'orders',
                loadChildren: './orders/orders.module#OrdersModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#CustomersModule'
            },
            {
                path: '',
                loadChildren: './reviews/reviews.module#ReviewsModule'
            },
            {
                path: '',
                loadChildren: './inventory/inventory.module#InventoryModule'
            },
            {
                path: '',
                loadChildren: './vendors/vendors.module#VendorsModule'
            }
        ]
    }, {
        path: '',
        component: auth_layout_component_1.AuthLayoutComponent,
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }
];
//# sourceMappingURL=app.routing.js.map