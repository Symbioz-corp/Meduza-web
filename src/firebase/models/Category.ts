import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Category = {
    name: string;
    institute: string; // reference to Institute document
}

export const CategoryCollection = collection(firebaseApp.firestore, 'Categories') as CollectionReference<Category>