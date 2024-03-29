import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type Comment = {
    date: Date;
    text: string;
    imageUrl: string;
    user: string; // reference to User document
    post: string; // reference to Post document
}

export const CommentCollection = collection(FirebaseService.firestore, 'Comments') as CollectionReference<Comment>