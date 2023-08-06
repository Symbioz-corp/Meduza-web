import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type History = {
    action: string;
    editType: string;
    editedId: string; // reference to edited document
    author: string; // reference to User document
    institute: string;
}

export const HistoryCollection = collection(firebaseApp.firestore, 'Histories') as CollectionReference<History>