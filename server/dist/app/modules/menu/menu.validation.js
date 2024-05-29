"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        startDate: zod_1.z.string({
            required_error: 'Start Date is required',
        }),
        endDate: zod_1.z.string({
            required_error: 'End Date is required',
        }),
        startTime: zod_1.z.string({
            required_error: 'Start Time is required',
        }),
        endTime: zod_1.z.string({
            required_error: 'End Time is required',
        }),
    }),
});
exports.ScheduleValidation = {
    create,
};
