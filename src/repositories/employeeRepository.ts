import { Document, Model } from "mongoose";
import { IEmployeeUsecase } from "../interfaces/IEmployeeUsecase";
import { EmployeeEntity } from "../entities/employeeEntity";
import { IEmployeeSchema } from "../interfaces/IEmployeeSchema";

export class EmployeeRepository implements IEmployeeUsecase {

  private readonly Employee: Model<IEmployeeSchema>;

  constructor(employeeModel: Model<IEmployeeSchema>) {
    this.Employee = employeeModel;
  }

  async addEmployee(employee: EmployeeEntity): Promise<void> {
    const newEmployee = new this.Employee(employee);
    await newEmployee.save();
    console.log('employee added successfully');
    
  }
  async getEmployeeById(email: string): Promise<EmployeeEntity | null> {
    return await this.Employee.findOne({email : email});
  }
  async getAllEmployees(): Promise<EmployeeEntity[]> {
    return await this.Employee.find();
  }
  async updateEmployee(
    email: string,
    employeeData: Partial<EmployeeEntity>
  ): Promise<EmployeeEntity | null> {
    return await this.Employee.findOneAndUpdate({ email }, employeeData, { new: true });
  }
  async deleteEmployee(email: string): Promise<void> {
    await this.Employee.deleteOne({email : email});
  }
}
