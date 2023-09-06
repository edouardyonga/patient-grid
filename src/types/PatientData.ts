
export interface Patient {
    ID: number;
    SURNAME: string;
    OTHERNAMES?: string | null;
    SEX: string;
    DOB: string;
    HONORIFIC: string;
    CITY: string;
    CC: string;
    NATIONALITY: string;
    RELIGION?: string | null;
    OCCUPATION?: string | null;
    CREATEDAT: string;
    CREATEDBY: string;
}

export interface PatientGridProps {
    patientData: Patient[];
}
