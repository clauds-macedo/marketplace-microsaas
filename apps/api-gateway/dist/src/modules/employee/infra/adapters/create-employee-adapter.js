"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeAdapter = void 0;
const Employee_1 = require("../../domain/entities/Employee");
class CreateEmployeeAdapter {
    static toEntity(dto) {
        return Employee_1.Employee.create(dto);
    }
}
exports.CreateEmployeeAdapter = CreateEmployeeAdapter;
//# sourceMappingURL=create-employee-adapter.js.map