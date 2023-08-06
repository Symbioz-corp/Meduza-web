import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Attendance = {
    day: Date;
    inTime: Date;
    outTime: Date;
    institute: string; // reference to Institute document
    profile: string; // reference to Profile document
}

export const AttendanceCollection = collection(firebaseApp.firestore, 'Attendances') as CollectionReference<Attendance>