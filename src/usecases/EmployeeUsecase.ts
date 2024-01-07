import { EmployeeEntity } from "../entities/employeeEntity";
import { IEmployeeUsecase } from "../interfaces/IEmployeeUsecase";
import { EmployeeRepository } from "../repositories/employeeRepository";

export class EmployeeUsecase implements IEmployeeUsecase {

     
    constructor (private readonly employeeRepository : EmployeeRepository){}

   async addEmployee(employee: EmployeeEntity): Promise<void> {
       await this.employeeRepository.addEmployee(employee);
    }
   async getEmployeeById(email: string): Promise<EmployeeEntity | null> {
      return await this.employeeRepository.getEmployeeById(email);
    }
   async getAllEmployees(): Promise<EmployeeEntity[]> {
      return  await this.employeeRepository.getAllEmployees();
    }
   async updateEmployee(email: string, employeeData: Partial<EmployeeEntity>): Promise<EmployeeEntity | null> {
       return await this.employeeRepository.updateEmployee(email, employeeData);
    }
    async deleteEmployee(email: string): Promise<void> {
        await this.employeeRepository.deleteEmployee(email)
    }

   
}