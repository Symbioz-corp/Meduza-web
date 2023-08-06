import { collection, CollectionReference } from "firebase/firestore"
import { FirebaseService } from "../firebase"

export type Notification = {
    href: string;
    text: string;
    type: string;
    instituteName: string;
    date: Date;
    user: string; // reference to user document
}

export const NotificationCollection = collection(FirebaseService.firestore, 'Notifications') as CollectionReference<Notification>