import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/input/button"
import FacebookAuthentication from "../../components/input/facebookAuthentication"
import GoogleAuthentication from "../../components/input/googleAuthentication"
import InputText from "../../components/input/inputText"
import UserService from "../../firebase/services/User.service"

export default function Signin() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail)
  }
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword)
  }


  const handleSignin = async () => {
    console.log('email : ', email)
    console.log('password : ', password)
    UserService.signin(email, password)
  }
  return (
    <>
      <section className="w-full h-screen bg-slate-900 flex justify-center items-center">
        <div className="w-full z-[60] overflow-x-hidden">
          <div className="mt-0  ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm  ">
              <div className="p-4 sm:p-7">
                <div className="text-center">
                  <h2 className="block text-2xl font-bold text-gray-800 ">
                    Connectez-vous
                  </h2>
                  <p className="mt-2 text-sm mr-4 text-gray-600 ">
                    Pas encore de compte?
                    <a onClick={() => { navigate("/sign-up") }} className="text-blue-600 decoration-2 cursor-pointer hover:underline font-medium">
                      Inscrivez-vous
                    </a>
                  </p>
                </div>

                <div className="mt-5">
                  <GoogleAuthentication />
                  <FacebookAuthentication />

                  <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6">  Ou</div>

                  <div>
                    <div className="grid gap-y-4">
                      <InputText messageError={emailError} onDataChange={handleEmailChange} label='Adresse email' type='text' />
                      <InputText onDataChange={handlePasswordChange} label='Mot de passe' type='password' />
                      <Button label='Connexion' onDataChange={handleSignin} />
                    </div>
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
