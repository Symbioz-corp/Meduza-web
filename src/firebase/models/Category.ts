import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type Category = {
    name: string;
    institute: string; // reference to Institute document
}

export const CategoryCollection = collection(FirebaseService.firestore, 'Categories') as CollectionReference<Category>