import { EmployeeEntity } from "../entities/employeeEntity";

export interface IEmployeeUsecase {
    addEmployee(employee: EmployeeEntity): Promise<void>;
    getEmployeeById(id: string): Promise<EmployeeEntity | null>;
    getAllEmployees(): Promise<EmployeeEntity[]>;
    updateEmployee(id: string, employeeData: Partial<EmployeeEntity>): Promise<EmployeeEntity | null>;
    deleteEmployee(id: string): Promise<void>;
  }