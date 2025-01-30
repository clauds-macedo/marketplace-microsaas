"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiGatewayModule = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const api_gateway_service_1 = require("./api-gateway.service");
const request_employee_use_case_1 = require("./modules/employee/application/usecases/request-employee-use-case");
const employee_controller_1 = require("./modules/employee/presentation/controllers/employee.controller");
let ApiGatewayModule = class ApiGatewayModule {
};
exports.ApiGatewayModule = ApiGatewayModule;
exports.ApiGatewayModule = ApiGatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'EMPLOYEE_SERVICE',
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ['amqp://localhost:5672'],
                        queue: 'employee_queue',
                        queueOptions: { durable: false },
                    },
                },
            ]),
        ],
        controllers: [employee_controller_1.EmployeeController],
        providers: [request_employee_use_case_1.RequestEmployeeUseCase, api_gateway_service_1.ApiGatewayService],
    })
], ApiGatewayModule);
//# sourceMappingURL=api-gateway.module.js.map