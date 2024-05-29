"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createDoctor = zod_1.z.object({
    password: zod_1.z.string(),
    doctor: zod_1.z.object({
        email: zod_1.z.string().email(),
        name: zod_1.z.string(),
        contactNumber: zod_1.z.string(),
        address: zod_1.z.string().nullable(),
        registrationNumber: zod_1.z.string(),
        experience: zod_1.z.number().int(),
        gender: zod_1.z.enum(['MALE', 'FEMALE']),
        apointmentFee: zod_1.z.number(),
        qualification: zod_1.z.string(),
        currentWorkingPlace: zod_1.z.string(),
        designation: zod_1.z.string(),
    })
});
const createAdmin = zod_1.z.object({
    password: zod_1.z.string(),
    admin: zod_1.z.object({
        email: zod_1.z.string().email(),
        name: zod_1.z.string(),
        contactNumber: zod_1.z.string()
    })
});
const createPatient = zod_1.z.object({
    password: zod_1.z.string(),
    patient: zod_1.z.object({
        email: zod_1.z.string().email(),
        name: zod_1.z.string(),
        contactNumber: zod_1.z.string({
            required_error: "Contact number is required!"
        }),
        address: zod_1.z.string({
            required_error: "Address is required"
        })
    })
});
const updateStatus = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.enum(['PENDING', 'ACTIVE', 'BLOCKED']),
    }),
});
exports.UserValidation = {
    createDoctor,
    createAdmin,
    createPatient,
    updateStatus,
};
