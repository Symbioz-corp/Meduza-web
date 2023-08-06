import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"


export type Group = {
    name: string;
    EDT: string[][];
    institute: string; // reference to Institute document
    category: string; // reference to Category document
}

export const GroupCollection = collection(FirebaseService.firestore, 'Groups') as CollectionReference<Group>