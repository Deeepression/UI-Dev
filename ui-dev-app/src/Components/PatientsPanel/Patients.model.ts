export interface Patient {
    id: number;
    patientName: string;
    age: number;
    notes: string;
    socialMediaLink: string;
}

export type AddPatientModalProps = {
    open: boolean;
    handleClose: () => void;
    addPatient: (p: Partial<Patient>) => void;
}

export type PatientsListProps = {
    patients: Patient[];
    deletePatient: (id: number) => void;
}
