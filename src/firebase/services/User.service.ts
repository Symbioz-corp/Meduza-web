import { FirebaseError } from "@firebase/util"
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, UserCredential } from "firebase/auth"
import { setDoc, doc, CollectionReference } from "firebase/firestore"
import { ValueError } from "../../utils/error"
import { Validation } from "../../utils/validation"
import { FirebaseService } from "../firebase"
import { User, UserCollection } from "../models/User"


class UserService {

    userCollection: CollectionReference<User>
    googleAuthProvider: GoogleAuthProvider

    constructor() {
        this.googleAuthProvider = new GoogleAuthProvider()
        this.userCollection = UserCollection
    }

    async getAuthentifiedUser() {
        return FirebaseService.auth.currentUser
    }

    async signinWithGoogle(): Promise<UserCredential | void> {
        return await signInWithPopup(FirebaseService.auth, this.googleAuthProvider)
            .then(async (userCredential) => {
                if (userCredential.user.email && userCredential.user.displayName) {
                    await setDoc(doc(this.userCollection, userCredential.user.uid), {
                        uid: userCredential.user.uid,
                        email: userCredential.user.email,
                        fullname: userCredential.user.displayName,
                        pictureUrl: userCredential.user.photoURL,
                        pictureList: []
                    })
                } else throw new ValueError("Votre compte n'est pas correctement inscrit à google", "Vous ne pouvez pas créer un compte Medusa avec ce compte google car il n'est inscrit sur aucun nom.")
                return userCredential
            })
            .catch((error) => {
                if (error.code) {
                    switch (error.code) {
                        case 'auth/popup-closed-by-user': break
                        case 'auth/cancelled-popup-request': break
                        case 'auth/network-request-failed': throw new ValueError(`Problème de connexion internet`, `Il est impossible de vous connecter car votre connexion internet est de mauvaise qualité`)
                        default: throw new ValueError(error.code, error.message)
                    }
                }
            })
    }

    async signin(email: string, password: string): Promise<UserCredential | void> {
        return await signInWithEmailAndPassword(FirebaseService.auth, email, password)
            .then((userCredential) => { return userCredential })
            .catch((error) => {
                if (error instanceof FirebaseError) {
                    switch (error.code) {
                        case 'auth/invalid-email': throw new ValueError("Adresse e-mail invalide", "Veuillez entrer une adresse e-mail valide pour continuer.")
                        case 'auth/missing-password': throw new ValueError("Le mot de passe est nécessaire", `Pour vous connecter sur le compte ${email}, vous devez fournir le mot de passe correspondant`)
                        case 'auth/user-not-found': throw new ValueError("Vous devez d'abord créer un compte", "L'adresse email que vous avez fourni n'a pas encore été inscrit sur Medusa. Vous êtes invité à créer un compte.")
                        case 'auth/wrong-password': throw new ValueError('Mot de passe incorrect', 'Le mot de passe que vous avez saisi est incorrect. Veuillez réessayer.')
                        default: throw new ValueError(error.message, error.code)
                    }
                }
            })
    }

    async signUp(email: string, fullname: string, password: string): Promise<UserCredential | void> {
        if (password.length < 8) throw new ValueError("Mot de passe trop court", "Le mot de passe doit comporter au moins 8 caractères. Veuillez choisir un mot de passe plus long.")
        else if (!Validation.isName(fullname)) throw new ValueError("Nom et prénom invalide", "Votre participation est importante. Assurez-vous d'entrer un nom valide pour que nous puissions vous offrir une expérience optimale")
        else if (!Validation.isEmail(email)) throw new ValueError("Adresse email invalide", "Afin de poursuivre, veuillez saisir une adresse e-mail valide conformément à nos exigences.")

        return await createUserWithEmailAndPassword(FirebaseService.auth, email, password)
            .then(async (userCredential) => {
                await setDoc(doc(this.userCollection, userCredential.user.uid), {
                    uid: userCredential.user.uid,
                    email: email,
                    fullname: fullname,
                    password: password,
                    pictureUrl: '',
                    pictureList: []
                })
                if (FirebaseService.auth.currentUser?.emailVerified == false) {
                    sendEmailVerification(FirebaseService.auth.currentUser)
                        .catch((error) => {
                            console.error(error)
                        })
                } else throw new ValueError(`L'adresse a déjà été vérifiée`, 'Cette adresse e-mail a déjà été confirmée.')
                return userCredential
            })
            .catch((error) => {
                if (error instanceof FirebaseError) {
                    switch (error.code) {
                        case 'auth/email-already-in-use': throw new ValueError(`Adresse e-mail déjà utilisée`, `L'adresse e-mail que vous avez entrée est déjà associée à un compte existant. Veuillez vous connecter ou utiliser une autre adresse e-mail pour créer un nouveau compte.`)
                        case 'auth/credential-already-in-use': throw new ValueError(`Informations d'identification déjà utilisées`, `Les informations d'identification que vous avez fournies sont déjà associées à un compte existant.Veuillez vous connecter avec ces informations ou utiliser un autre ensemble d'informations pour créer un nouveau compte.`)
                        default: throw new ValueError(error.code, error.message)
                    }
                }
            })
    }
}

export default new UserService()