"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetEmployeeUseCase = void 0;
class GetEmployeeUseCase {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    async execute(id) {
        return this.employeeRepository.findById(id);
    }
}
exports.GetEmployeeUseCase = GetEmployeeUseCase;
//# sourceMappingURL=get-employee-use-case.js.map