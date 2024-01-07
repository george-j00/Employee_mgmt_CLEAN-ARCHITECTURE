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
exports.EmployeeRepository = void 0;
class EmployeeRepository {
    constructor(employeeModel) {
        this.Employee = employeeModel;
    }
    addEmployee(employee) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEmployee = new this.Employee(employee);
            yield newEmployee.save();
            console.log('employee added successfully');
        });
    }
    getEmployeeById(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Employee.findOne({ email: email });
        });
    }
    getAllEmployees() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Employee.find();
        });
    }
    updateEmployee(email, employeeData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.Employee.findOneAndUpdate({ email }, employeeData, { new: true });
        });
    }
    deleteEmployee(email) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.Employee.deleteOne({ email: email });
        });
    }
}
exports.EmployeeRepository = EmployeeRepository;
