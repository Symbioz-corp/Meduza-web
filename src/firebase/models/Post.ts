import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type Post = {
    date: Date;
    text: string;
    filesUrl: string[];
    user: string; // reference to User document
    institute: string; // reference to Institute document
}

export const PostCollection = collection(FirebaseService.firestore, 'Posts') as CollectionReference<Post>