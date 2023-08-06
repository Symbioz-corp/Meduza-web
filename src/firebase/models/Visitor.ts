import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type Visitor = {
    fullname: string;
    contact: string;
    reason: string;
    inTime: Date;
    outTime: Date;
    pictures: string[];
    institute: string; // reference to Institute document
}

export const VisitorCollection = collection(FirebaseService.firestore, 'Visitors') as CollectionReference<Visitor>