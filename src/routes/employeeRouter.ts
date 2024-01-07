import { Router, Request, Response } from 'express';
import { EmployeeController } from '../controllers/controller';
import { EmployeeUsecase } from '../usecases/EmployeeUsecase';
import { EmployeeRepository } from '../repositories/employeeRepository';
import EmployeeModel from '../adapters/employeeDb.schema';

export class EmployeeRouter {
    router = Router();

    constructor() {
        const employeeRepository = new EmployeeRepository(EmployeeModel);
        const employeeUsecase = new EmployeeUsecase(employeeRepository);
        const employeeController = new EmployeeController(employeeUsecase);

        this.router.post('/api/create', (req: Request, res: Response) => {
            employeeController.add_employee(req, res);
        });
        this.router.post('/api/get-single-emp', (req: Request, res: Response) => {
            employeeController.get_one_employee(req, res);
        });
        this.router.get('/api/get-all-emp', (req: Request, res: Response) => {
            employeeController.get_all_employees(req, res);
        });
        this.router.post('/api/delete', (req: Request, res: Response) => {
            employeeController.delete_employee(req, res);
        });
        this.router.post('/api/update-emp', (req: Request, res: Response) => {
            employeeController.update_employee(req, res);
        });
        
    }
}

export const employeeRouter = new EmployeeRouter().router;
