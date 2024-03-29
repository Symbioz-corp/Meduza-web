import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type Attendance = {
    day: Date;
    inTime: Date;
    outTime: Date;
    institute: string; // reference to Institute document
    user: string; // reference to User document
}

export const AttendanceCollection = collection(FirebaseService.firestore, 'Attendances') as CollectionReference<Attendance>