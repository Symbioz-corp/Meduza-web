import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type React = {
    reactType: string;
    user: string; // reference to User document
    post: string; // reference to Post document (if reaction on post)
    react: string; // reference to React document (if reaction on react)

}

export const ReactCollection = collection(FirebaseService.firestore, 'Reacts') as CollectionReference<React>