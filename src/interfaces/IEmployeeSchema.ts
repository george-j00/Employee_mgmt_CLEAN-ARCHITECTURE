import { Document } from "mongoose";

export interface IEmployeeSchema extends Document {
    id?: string;
    name: string;
    email: string;
}