import { InstituteCollection, TInstitute } from "../models/Institute"
import { runTransaction, doc, collection } from "firebase/firestore"
import { CategoryCollection } from "../models/Category"
import { GroupCollection } from "../models/Group"
import { FirebaseService } from "../firebase"
import { FirebaseError } from "@firebase/util"
import { ValueError } from "../../utils/error"
import UserService from "./User.service"
import { ERoles } from "../models/roles"


class InstituteService {
    async createInstitute(data: TInstitute): Promise<void> {
        await runTransaction(FirebaseService.firestore, async (transaction) => {
            const defaultCategoryRef = doc(CategoryCollection)
            const instituteRef = doc(InstituteCollection)
            const groupRef = doc(GroupCollection)

            transaction.set(instituteRef, data)
            const instituteId = instituteRef.id
            const defaultCategoryData = {
                name: "Default Category",
                institute: instituteId,
            }
            transaction.set(defaultCategoryRef, defaultCategoryData)

            const groupData = {
                name: "Super admin",
                EDT: [],
                institute: instituteId,
                category: defaultCategoryRef.id,
            }
            transaction.set(groupRef, groupData)
            const currentUser = await UserService.getAuthentifiedUser()
            if (currentUser) {
                const groupUserLinkRef = doc(collection(FirebaseService.firestore, "groupUserLinks"))
                const groupUserLinkData = {
                    group: groupRef.id,
                    profile: currentUser.uid,
                    role: [ERoles.superAdmin]
                }
                transaction.set(groupUserLinkRef, groupUserLinkData)
            }
        }).catch((error) => {
            if (error instanceof FirebaseError) {
                switch (error.code) {
                    default: throw new ValueError(error.code, error.message)
                }
            }
        })
    }


}

export default new InstituteService()