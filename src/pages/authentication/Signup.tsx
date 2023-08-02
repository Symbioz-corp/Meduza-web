import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/input/button"
import FacebookAuthentication from "../../components/input/facebookAuthentication"
import GoogleAuthentication from "../../components/input/googleAuthentication"
import InputText from "../../components/input/inputText"
import UserService from "../../firebase/services/User.service"
import { show, TErrorModal } from "../../store/features/errorModalSlice"
import { Dispatch } from "../../store/hooks"
import { ValueError } from "../../utils/error"
import { Validation } from "../../utils/validation"

export default function Signup() {


  const navigate = useNavigate()
  const [fullname, setFullname] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [email, setEmail] = useState('')

  const handleFullnameChange = (newFullname: string) => { setFullname(newFullname) }

  const handleEmailChange = (newEmail: string) => { setEmail(newEmail) }
  const handlePasswordChange = (newPassword: string) => { setPassword(newPassword) }

  const dispatch = Dispatch()

  const showModal = (payload: TErrorModal) => {
    dispatch(show(payload))
  }
  const handleSignup = async () => {

    const name = fullname.trim()
    const nameWords = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1))
    setFullname(nameWords.join(' '))
    setEmail(email.trim())

    console.log('fullname : ', fullname)
    console.log('email : ', email)
    console.log('password : ', password)

    if (!fullname.length) showModal({ code: 'Comment vous appelez vous?', message: 'Veuillez fournir tout les informations demandées notament votre nom complet' })
    else if (!email.length) showModal({ code: 'Vous avez oublié de fournir votre adresse email', message: 'Veuillez fournir tout les informations demandées notament votre adresse email' })
    else if (!password.length) showModal({ code: 'Penser à remplir le mot de passe', message: 'Pour votre securité vous devez fournir un mot de passe de 8 caractère minimum.' })
    else if (Validation.isEmail(email) == false) showModal({ code: 'Adresse email invalide', message: 'Afin de poursuivre, veuillez saisir une adresse e-mail valide conformément à nos exigences.' })
    else if (Validation.isName(fullname) == false || fullname.length < 5) showModal({ code: 'Donnez votre vrai nom complet', message: 'Medusa est une plateforme professionnelle qui sera lié à votre entreprise. Il est donc plus approprié de fournir son vrai nom.' })
    else if (password.length < 7) showModal({ code: 'Votre mot de passe est trop court', message: 'Pour votre securité vous devez fournir un mot de passe de 8 caractère minimum.' })
    else {
      setIsLoading(true)
      await UserService.signUp(email, fullname, password)
        .then((credential) => {
          console.log(credential);
        })
        .catch((error) => {
          const payload: TErrorModal = {
            code: error.code,
            message: error.message
          }
          if (error instanceof ValueError) showModal(payload)
        })
        .finally(() => setIsLoading(false))

    }
  }

  return (
    <>
      <section className="w-full h-screen bg-slate-900 flex justify-center items-center">
        <div className="w-full mt-4 z-[10] overflow-x-hidden overflow-y-auto">
          <div className="mt-0  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm  ">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h2 className="block text-2xl font-bold text-gray-800 ">Iscrivez-vous</h2>
                  <p className="mt-2 text-sm text-gray-600 ">Vous avez déjà un compte?
                    <a onClick={() => { navigate("/sign-in") }} className="cursor-pointer text-blue-600 decoration-2 hover:underline font-medium">Connectez-vous</a>
                  </p>
                </div>
                <div className="mt-5">
                  <GoogleAuthentication />
                  <FacebookAuthentication />
                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6">Ou</div>
                  <div className="grid gap-y-4">
                    <InputText onDataChange={handleFullnameChange} label='Nom complet' type='text' />
                    <InputText onDataChange={handleEmailChange} label='Adresse email' type='text' />
                    <InputText onDataChange={handlePasswordChange} label='Mot de passe' type='password' />
                    <Button label='Inscription' isLoading={isLoading} onDataChange={handleSignup} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
