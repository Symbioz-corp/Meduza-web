import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "./../firebase"

export type User = {
    pictureUrl?: string | null,
    email: string,
    fullname: string,
    password?: string,
    pictureList: string[] | undefined,
    uid: string
}

export const UserCollection = collection(FirebaseService.firestore, 'users') as CollectionReference<User>