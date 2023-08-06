import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Post = {
    date: Date;
    text: string;
    filesUrl: string[];
    user: string; // reference to User document
    institute: string; // reference to Institute document
}

export const PostCollection = collection(firebaseApp.firestore, 'Posts') as CollectionReference<Post>