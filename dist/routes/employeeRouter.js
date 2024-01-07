"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeRouter = exports.EmployeeRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../controllers/controller");
const EmployeeUsecase_1 = require("../usecases/EmployeeUsecase");
const employeeRepository_1 = require("../repositories/employeeRepository");
const employeeDb_schema_1 = __importDefault(require("../adapters/employeeDb.schema"));
class EmployeeRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        const employeeRepository = new employeeRepository_1.EmployeeRepository(employeeDb_schema_1.default);
        const employeeUsecase = new EmployeeUsecase_1.EmployeeUsecase(employeeRepository);
        const employeeController = new controller_1.EmployeeController(employeeUsecase);
        this.router.post('/api/create', (req, res) => {
            employeeController.add_employee(req, res);
        });
        this.router.post('/api/get-single-emp', (req, res) => {
            employeeController.get_one_employee(req, res);
        });
        this.router.get('/api/get-all-emp', (req, res) => {
            employeeController.get_all_employees(req, res);
        });
        this.router.post('/api/delete', (req, res) => {
            employeeController.delete_employee(req, res);
        });
        this.router.post('/api/update-emp', (req, res) => {
            employeeController.update_employee(req, res);
        });
    }
}
exports.EmployeeRouter = EmployeeRouter;
exports.employeeRouter = new EmployeeRouter().router;
