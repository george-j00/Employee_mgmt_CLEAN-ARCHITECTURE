import { EmployeeEntity } from "../entities/employeeEntity";
import { IEmployeeUsecase } from "../interfaces/IEmployeeUsecase";

export class EmployeeUsecase implements IEmployeeUsecase {

     
    constructor (private readonly employeeRepository : EmployeeRepository){}

    addEmployee(employee: EmployeeEntity): Promise<EmployeeEntity> {
        throw new Error("Method not implemented.");
    }
    getEmployeeById(id: string): Promise<EmployeeEntity | null> {
        throw new Error("Method not implemented.");
    }
    getAllEmployees(): Promise<EmployeeEntity[]> {
        throw new Error("Method not implemented.");
    }
    updateEmployee(id: string, employeeData: Partial<EmployeeEntity>): Promise<EmployeeEntity | null> {
        throw new Error("Method not implemented.");
    }
    deleteEmployee(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}