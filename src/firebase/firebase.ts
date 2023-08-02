import { Auth, browserLocalPersistence, getAuth, setPersistence } from "firebase/auth"
import { Firestore, getFirestore } from "firebase/firestore"
import { FirebaseStorage, getStorage } from 'firebase/storage'

import { firebaseConfig } from './config'
import { initializeApp } from "firebase/app"


export class FirebaseService implements IFirebase {

    public storage: FirebaseStorage
    public firestore: Firestore
    public auth: Auth

    constructor() {
        initializeApp(firebaseConfig)
        this.auth = getAuth()
        this.storage = getStorage()
        this.auth.useDeviceLanguage()
        this.firestore = getFirestore()

        setPersistence(this.auth, browserLocalPersistence);
    }

}
export const firebaseApp = new FirebaseService()

export interface IFirebase {
    storage: FirebaseStorage
    firestore: Firestore
    auth: Auth
}

