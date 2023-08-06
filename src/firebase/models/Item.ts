import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type Item = {
    name: string;
    value: string;
    isPublic: boolean;
    type: string;
    groupUserLink: string; // reference to GroupUserLink document
}

export const ItemCollection = collection(FirebaseService.firestore, 'Items') as CollectionReference<Item>