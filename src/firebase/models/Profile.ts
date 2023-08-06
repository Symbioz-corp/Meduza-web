import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type Annonce = {
    title: string;
    text: string;
    imagesUrl: string[];
    filePaths: string[];
    date: Date;
    scope: string;
    scopeId: string; // reference to User/Group/Category document
}

export const AnnonceCollection = collection(FirebaseService.firestore, 'Annonces') as CollectionReference<Annonce>