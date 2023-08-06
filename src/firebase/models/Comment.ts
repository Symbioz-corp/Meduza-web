import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Comment = {
    date: Date;
    text: string;
    imageUrl: string;
    profile: string; // reference to Profile document
    post: string; // reference to Post document
}

export const CommentCollection = collection(firebaseApp.firestore, 'Comments') as CollectionReference<Comment>