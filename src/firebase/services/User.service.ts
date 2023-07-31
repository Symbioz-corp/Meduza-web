import { createUserWithEmailAndPassword } from "firebase/auth"
import { setDoc, doc, collection, CollectionReference } from "firebase/firestore"
import { ValueError } from "../../utils/error"
import { Validation } from "../../utils/validation"
import { FirebaseService } from "../firebase"
import { UserModel } from "../models/User"


export class UserService extends FirebaseService {

    userCollection: CollectionReference<UserModel>
    constructor() {
        super()
        this.userCollection = collection(this.firestore, 'users') as CollectionReference<UserModel>
    }

    async signUp(email: string, fullname: string, password: string): Promise<string> {
        if (password.length < 8) throw new ValueError("Le mot de passe doit contenir au moin 8 caractères.")
        else if (!Validation.isName(fullname)) throw new ValueError("Veuillez renseigner un nom valide.")
        else if (!Validation.isEmail(email)) throw new ValueError("Veuillez renseigner un email valide.")

        const userCredential = await createUserWithEmailAndPassword(this.auth, email, password)
        await setDoc(doc(this.userCollection, userCredential.user.uid), {
            uid: userCredential.user.uid,
            email: email,
            fullname: fullname,
            password: password,
            pictureUrl: '',
            pictureList: []
        })
        return userCredential.user.uid
    }
}