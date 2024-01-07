// import { Schema, model } from "mongoose";
// import { employeeSchema } from "../interfaces/IEmployeeSchema";

// const employeeSchema = new Schema({
//     // Enforce unique email addresses with a case-insensitive index
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     name: {
//         type: String,
//         required: true,
//     },
// }, {
//     timestamps: true,
// });

// export const EmployeeModel = model<employeeSchema>("Employee", employeeSchema);

import mongoose, { Document, Model, Schema } from 'mongoose';
import { IEmployeeSchema } from '../interfaces/IEmployeeSchema';

const employeeSchema = new Schema<IEmployeeSchema>({
    name: { type: String, required: true },
    email: { type: String, required: true },
});

const EmployeeModel: Model<IEmployeeSchema> = mongoose.model<IEmployeeSchema>('Employee', employeeSchema);

export default EmployeeModel;
