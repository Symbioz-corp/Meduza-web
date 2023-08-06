import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Annonce = {
    title: string;
    text: string;
    imagesUrl: string[];
    filePaths: string[];
    date: Date;
    scope: string;
    scopeId: string; // reference to Profile/Group/Category document
}

export const AnnonceCollection = collection(firebaseApp.firestore, 'Annonces') as CollectionReference<Annonce>