import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"


export type Group = {
    name: string;
    EDT: string[][];
    institute: string; // reference to Institute document
    category: string; // reference to Category document
}

export const GroupCollection = collection(firebaseApp.firestore, 'Groups') as CollectionReference<Group>