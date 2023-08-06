import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type GroupUserLink = {
    roles: string[];
    user: string; // reference to User document
    group: string; // reference to Group document
}

export const GroupUserLinkCollection = collection(FirebaseService.firestore, 'GroupUserLinks') as CollectionReference<GroupUserLink>