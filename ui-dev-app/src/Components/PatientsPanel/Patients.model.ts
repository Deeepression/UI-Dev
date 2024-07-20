export interface Patient {
    posts: Post[];
    id: number;
    patientName: string;
    age: number;
    notes: string;
    socialMediaLink: string;
    generalStatus: PatientStatus;
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

export type Post = {
    id?: string;
    source: string;
    text: string;
    prediction?: number;
    date: string;
}

export type PatientStatus = 'GOOD' | 'MEDIUM' | 'BAD';
