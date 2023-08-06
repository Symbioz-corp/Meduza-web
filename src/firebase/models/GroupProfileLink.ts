import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type GroupProfileLink = {
    roles: string[];
    profile: string; // reference to Profile document
    group: string; // reference to Group document
}

export const GroupProfileLinkCollection = collection(firebaseApp.firestore, 'GroupProfileLinks') as CollectionReference<GroupProfileLink>