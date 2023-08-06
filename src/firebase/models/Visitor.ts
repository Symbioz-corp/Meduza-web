import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Visitor = {
    fullname: string;
    contact: string;
    reason: string;
    inTime: Date;
    outTime: Date;
    pictures: string[];
    institute: string; // reference to Institute document
}

export const VisitorCollection = collection(firebaseApp.firestore, 'Visitors') as CollectionReference<Visitor>