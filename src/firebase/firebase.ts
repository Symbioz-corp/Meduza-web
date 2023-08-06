import { Auth, browserLocalPersistence, getAuth, setPersistence } from "firebase/auth"
import { FirebaseStorage, getStorage } from 'firebase/storage'
import { Firestore, getFirestore } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import { firebaseConfig } from './config'

export class FirebaseService {

    static auth: Auth
    static storage: FirebaseStorage
    static firestore: Firestore

    constructor() {
        initializeApp(firebaseConfig)
        FirebaseService.auth = getAuth()
        FirebaseService.auth.useDeviceLanguage()
        FirebaseService.storage = getStorage()
        FirebaseService.firestore = getFirestore()
        setPersistence(FirebaseService.auth, browserLocalPersistence)
    }

}
export const firebaseApp = new FirebaseService()


