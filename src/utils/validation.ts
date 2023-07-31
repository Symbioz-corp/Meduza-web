export const Validation = {
    isName: (name: string): boolean => {
        if (name.length > 5) {
            const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ -]+$/
            return nameRegex.test(name)
        } else return false
    },
    isEmail: (email: string): boolean => {
        if (email.length > 8) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        } else return false
    }
}