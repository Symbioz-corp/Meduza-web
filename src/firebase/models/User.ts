import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "./../firebase"

export type User = {
    pictureUrl?: string | null,
    email: string,
    fullname: string,
    password?: string,
    pictureList: string[] | undefined,
    uid: string
}

export const UserCollection = collection(firebaseApp.firestore, 'users') as CollectionReference<User>