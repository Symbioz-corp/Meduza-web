import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type ItemModel = {
    name: string;
    type: string;
    isPublic: boolean;
    isRequired: boolean;
    institute: string; // reference to Institute document
}

export const ItemModelCollection = collection(firebaseApp.firestore, 'ItemModels') as CollectionReference<ItemModel>