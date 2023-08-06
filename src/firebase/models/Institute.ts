import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type TInstitute = {
    name: string;
    address: string;
    pictureUrl?: string;
    contact?: string[];
}

export const InstituteCollection = collection(FirebaseService.firestore, 'Institutes') as CollectionReference<TInstitute>