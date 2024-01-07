"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeUsecase = void 0;
class EmployeeUsecase {
    constructor(employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    addEmployee(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.employeeRepository.addEmployee(employee);
        });
    }
    getEmployeeById(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.employeeRepository.getEmployeeById(email);
        });
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.employeeRepository.getAllEmployees();
        });
    }
    updateEmployee(email, employeeData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.employeeRepository.updateEmployee(email, employeeData);
        });
    }
    deleteEmployee(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.employeeRepository.deleteEmployee(email);
        });
    }
}
exports.EmployeeUsecase = EmployeeUsecase;
