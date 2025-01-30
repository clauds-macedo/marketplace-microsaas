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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const request_employee_use_case_1 = require("../../application/usecases/request-employee-use-case");
const create_employee_adapter_1 = require("../../infra/adapters/create-employee-adapter");
const create_employee_dto_1 = require("../../infra/validators/dtos/create-employee-dto");
let EmployeeController = class EmployeeController {
    constructor(requestEmployeeUseCase) {
        this.requestEmployeeUseCase = requestEmployeeUseCase;
    }
    async createEmployee(employeeData) {
        const employee = create_employee_adapter_1.CreateEmployeeAdapter.toEntity(employeeData);
        return this.requestEmployeeUseCase.createEmployee(employee.name, employee.position, employee.salary);
    }
    async getEmployee(id) {
        return this.requestEmployeeUseCase.getEmployee(id);
    }
};
exports.EmployeeController = EmployeeController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_employee_dto_1.CreateEmployeeDTO]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "createEmployee", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getEmployee", null);
exports.EmployeeController = EmployeeController = __decorate([
    (0, common_1.Controller)('employees'),
    __metadata("design:paramtypes", [request_employee_use_case_1.RequestEmployeeUseCase])
], EmployeeController);
//# sourceMappingURL=employee.controller.js.map