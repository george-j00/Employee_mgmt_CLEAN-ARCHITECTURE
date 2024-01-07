import { EmployeeEntity } from "../entities/employeeEntity";
import { IEmployeeUsecase } from "../interfaces/IEmployeeUsecase";
import { Request, Response } from "express";
import { EmployeeUsecase } from "../usecases/EmployeeUsecase";

export class EmployeeController {

  private readonly employeeUsecase: EmployeeUsecase;
  constructor(employeeUsecase: EmployeeUsecase) {
    this.employeeUsecase = employeeUsecase;
  }

  async add_employee(req: Request, res: Response) {
    try {
        const empData: EmployeeEntity = req.body;
        await this.employeeUsecase.addEmployee(empData);
        res.status(200).send('Employee added successfully');
    } catch (error) {
        res.status(500).send('Error while adding employee');
        console.log('Error while adding => ', error);
    }
}

  async delete_employee(req: Request, res: Response) {
    try {
      const { email } = req.body;
      await this.employeeUsecase.deleteEmployee(email);
      res.status(200).send('Employee deleted successfully');
    } catch (error) {
      res.send("error");
      console.log("Error while deleting => ", error);
    }
  }

  async get_one_employee(req: Request, res: Response) {
    try {
      const { email } = req.body;
      const oneEmployee = await this.employeeUsecase.getEmployeeById(email);
      res.send(oneEmployee);
      console.log("Got one Employee ", oneEmployee);
    } catch (error) {
      res.send("error");
      console.log("Error while fetching single employee  => ", error);
    }
  }

  async get_all_employees(req: Request, res: Response) {
    try {
      const allEmployees = await this.employeeUsecase.getAllEmployees();
      res.send(allEmployees);
      console.log(allEmployees);
    } catch (error) {
      res.send("error");
      console.log("Error while fetching all employees => ", error);
    }
  }

  async update_employee(req: Request, res: Response) {
    try {
        const {name , email } = req.body;
        const updateData = {
            name     
            // email
        }
        const updatedEmployee = await this.employeeUsecase.updateEmployee(email , updateData);
        console.log(updatedEmployee);
        res.send(updatedEmployee)

    } catch (error) {
        res.send("error");
        console.log("Error while updating => ", error);
    }
  }
}
