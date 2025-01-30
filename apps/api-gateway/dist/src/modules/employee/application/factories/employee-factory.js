"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEmployeeUseCase = exports.getEmployeeUseCase = void 0;
const create_employee_use_case_1 = require("../../domain/usecases/create-employee-use-case");
const get_employee_use_case_1 = require("../../domain/usecases/get-employee-use-case");
const employee_repository_1 = require("../../infra/repositories/employee-repository");
exports.getEmployeeUseCase = new get_employee_use_case_1.GetEmployeeUseCase(new employee_repository_1.EmployeeRepository());
exports.createEmployeeUseCase = new create_employee_use_case_1.CreateEmployeeUseCase(new employee_repository_1.EmployeeRepository());
//# sourceMappingURL=employee-factory.js.map