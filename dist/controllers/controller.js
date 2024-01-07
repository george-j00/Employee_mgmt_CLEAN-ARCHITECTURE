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
exports.EmployeeController = void 0;
class EmployeeController {
    constructor(employeeUsecase) {
        this.employeeUsecase = employeeUsecase;
    }
    add_employee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const empData = req.body;
                yield this.employeeUsecase.addEmployee(empData);
                res.status(200).send('Employee added successfully');
            }
            catch (error) {
                res.status(500).send('Error while adding employee');
                console.log('Error while adding => ', error);
            }
        });
    }
    delete_employee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                yield this.employeeUsecase.deleteEmployee(email);
                res.status(200).send('Employee deleted successfully');
            }
            catch (error) {
                res.send("error");
                console.log("Error while deleting => ", error);
            }
        });
    }
    get_one_employee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email } = req.body;
                const oneEmployee = yield this.employeeUsecase.getEmployeeById(email);
                res.send(oneEmployee);
                console.log("Got one Employee ", oneEmployee);
            }
            catch (error) {
                res.send("error");
                console.log("Error while fetching single employee  => ", error);
            }
        });
    }
    get_all_employees(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allEmployees = yield this.employeeUsecase.getAllEmployees();
                res.send(allEmployees);
                console.log(allEmployees);
            }
            catch (error) {
                res.send("error");
                console.log("Error while fetching all employees => ", error);
            }
        });
    }
    update_employee(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email } = req.body;
                const updateData = {
                    name
                    // email
                };
                const updatedEmployee = yield this.employeeUsecase.updateEmployee(email, updateData);
                console.log(updatedEmployee);
                res.send(updatedEmployee);
            }
            catch (error) {
                res.send("error");
                console.log("Error while updating => ", error);
            }
        });
    }
}
exports.EmployeeController = EmployeeController;
