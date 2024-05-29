"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewRelationalFieldsMapper = exports.reviewRelationalFields = exports.reviewFilterableFields = void 0;
exports.reviewFilterableFields = ['patientEmail', 'doctorEmail'];
exports.reviewRelationalFields = ['patientEmail', 'doctorEmail'];
exports.reviewRelationalFieldsMapper = {
    patientEmail: 'patient',
    doctorEmail: 'doctor',
};
