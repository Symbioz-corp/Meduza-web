import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Institute = {
    name: string;
    address: string;
    pictureUrl: string;
    contact: string[];
}

export const InstituteCollection = collection(firebaseApp.firestore, 'Institutes') as CollectionReference<Institute>