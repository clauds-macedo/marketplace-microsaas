"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeUseCase = void 0;
const employee_1 = require("../entities/employee");
class CreateEmployeeUseCase {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async execute({ name, position, salary, }) {
        const employee = employee_1.Employee.create({ name, position, salary });
        return this.employeeRepository.create(employee);
    }
}
exports.CreateEmployeeUseCase = CreateEmployeeUseCase;
//# sourceMappingURL=create-employee-use-case.js.map