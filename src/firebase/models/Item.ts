import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Item = {
    name: string;
    value: string;
    isPublic: boolean;
    type: string;
    groupUserLink: string; // reference to GroupUserLink document
}

export const ItemCollection = collection(firebaseApp.firestore, 'Items') as CollectionReference<Item>