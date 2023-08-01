import { FirebaseError } from "@firebase/util"
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, UserCredential } from "firebase/auth"
import { setDoc, doc, collection, CollectionReference } from "firebase/firestore"
import { ValueError } from "../../utils/error"
import { Validation } from "../../utils/validation"
import { FirebaseService } from "../firebase"
import { UserModel } from "../models/User"


class UserService extends FirebaseService {

    userCollection: CollectionReference<UserModel>
    googleAuthProvider: GoogleAuthProvider

    constructor() {
        super()
        this.googleAuthProvider = new GoogleAuthProvider()
        this.userCollection = collection(this.firestore, 'users') as CollectionReference<UserModel>
    }

    async signinWithGoogle(): Promise<UserCredential | void> {
        await signInWithPopup(this.auth, this.googleAuthProvider)
            .then(async (userCredential) => {
                if (userCredential.user.email && userCredential.user.displayName) {
                    await setDoc(doc(this.userCollection, userCredential.user.uid), {
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                        fullname: userCredential.user.displayName,
                        pictureUrl: userCredential.user.photoURL,
                        pictureList: []
                    })
                } else throw new ValueError("Ce compte google ne peut pas créer de compte sur Medusa")
                return userCredential
            })
            .catch((error) => {
                if (error instanceof FirebaseError) {
                    switch (error.code) {
                        default:
                            throw new ValueError(error.code)
                    }
                }
            })


    }

    async signin(email: string, password: string): Promise<UserCredential | void> {
        let userCredential: UserCredential
        try {
            userCredential = await signInWithEmailAndPassword(this.auth, email, password)
            return userCredential

        } catch (error) {
            if (error instanceof FirebaseError) {
                switch (error.code) {
                    case 'auth/invalid-email':
                        throw new ValueError("Adresse e-mail invalide")
                    case 'auth/wrong-password':
                        throw new ValueError('Mot de passe incorrect')
                    default:
                        throw new ValueError(error.code)
                }
            }
        }

    }
    async signUp(email: string, fullname: string, password: string): Promise<UserCredential | void> {
        if (password.length < 8) throw new ValueError("Le mot de passe doit contenir au moin 8 caractères.")
        else if (!Validation.isName(fullname)) throw new ValueError("Veuillez renseigner un nom valide.")
        else if (!Validation.isEmail(email)) throw new ValueError("Veuillez renseigner un email valide.")

        await createUserWithEmailAndPassword(this.auth, email, password)
            .then(async (userCredential) => {
                await setDoc(doc(this.userCollection, userCredential.user.uid), {
                    uid: userCredential.user.uid,
                    email: email,
                    fullname: fullname,
                    password: password,
                    pictureUrl: '',
                    pictureList: []
                })
                this.sendVerificationEmail()
                console.log('userCredential : ', userCredential);

                return userCredential
            })
            .catch((error) => {
                console.log('error : ', error);

                if (error instanceof FirebaseError) {
                    switch (error.code) {
                        case 'auth/credential-already-in-use':
                            throw new ValueError(`Vous avez déjà un compte lié à l'adresse email: ${email}.`)
                        default:
                            throw new ValueError(error.code)
                    }
                }
            })
    }

    sendVerificationEmail(): void {
        if (this.auth.currentUser?.emailVerified == false) {
            sendEmailVerification(this.auth.currentUser)
                .then(() => alert('Un email de verification vous a été envoyé'))
                .catch((error) => {
                    console.log(error);
                })
        } else throw new ValueError('Cet adresse email est déjà vérifié')
    }
}

export default new UserService()