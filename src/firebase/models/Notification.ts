import { collection, CollectionReference } from "firebase/firestore"
import { firebaseApp } from "../firebase"

export type Notification = {
    href: string;
    text: string;
    type: string;
    instituteName: string;
    date: Date;
    profile: string; // reference to Profile document
}

export const NotificationCollection = collection(firebaseApp.firestore, 'Notifications') as CollectionReference<Notification>