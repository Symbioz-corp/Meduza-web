import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type React = {
    reactType: string;
    profile: string; // reference to Profile document
    post: string; // reference to Post document (if reaction on post)
    react: string; // reference to React document (if reaction on react)

}

export const ReactCollection = collection(firebaseApp.firestore, 'Reacts') as CollectionReference<React>