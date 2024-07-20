import {PatientStatus} from "../PatientsPanel/Patients.model";

export const statusSvgMap: Record<PatientStatus, string> = {
    GOOD: '/good-status.svg',
    MEDIUM: '/medium-status.svg',
    BAD: '/bad-status.svg',
};