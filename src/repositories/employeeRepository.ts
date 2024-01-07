import { Model } from "mongoose";
import { IEmployeeUsecase } from "../interfaces/IEmployeeUsecase";

export class EmployeeRepository {

    private readonly Employee : Model<Document>;
    
    constructor(employeeModel : Model<Document>){
        this.Employee = employeeModel ;
    }

    async add(empData : IEmployeeUsecase):Promise<Document> {
        const newEmployee = new this.Employee(empData);
        return await newEmployee.save();
    }
    async delete(empId : string) : Promise<void> {
        await this.Employee.findByIdAndDelete(empId);
    }
    async update(empId :string , empData: IEmployeeUsecase): Promise<Document | null>{
        return await this.Employee.findByIdAndUpdate(empId, empData, { new: true });
    }
    async getEmp() : Promise<Document[]>{
        return await this.Employee.find();
    }
}
