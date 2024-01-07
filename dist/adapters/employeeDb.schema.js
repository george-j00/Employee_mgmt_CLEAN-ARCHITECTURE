"use strict";
// import { Schema, model } from "mongoose";
// import { employeeSchema } from "../interfaces/IEmployeeSchema";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const mongoose_1 = __importStar(require("mongoose"));
const employeeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
});
const EmployeeModel = mongoose_1.default.model('Employee', employeeSchema);
exports.default = EmployeeModel;
