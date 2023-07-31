import React from "react";
import { useNavigate } from "react-router-dom";
export default function Pricing() {
  const navigate = useNavigate();
  return (
    <div
      id="ray"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      <div className="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
        <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold">
          Une tarification unique à partir de 10 utilisateurs!
        </h2>
      </div>

      <div className="relative xl:w-10/12 xl:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <div className="p-4 relative z-10 bg-white border rounded-xl md:p-10">
              <h3 className="text-xl font-bold text-gray-800 ">Essayez</h3>
              <div className="text-sm text-gray-500">
                Tout ce dont vous aviez besoin pour tester et configurer.
              </div>

              <div className="mt-5">
                <span className="text-6xl font-bold text-gray-800 ">
                  Gratuit
                </span>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                <ul role="list" className="space-y-2 text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">Jusqu'à 10 personnes</span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">
                      Reconnaissance faciale
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">Emplois du temps</span>
                  </li>
                </ul>
                <ul role="list" className="space-y-2 text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">Annonces</span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">Partage de fichiers</span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">
                      Cannaux de communications
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm text-gray-500">
                    Annulez à tout moment.
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={()=>{navigate('/sign-in')}}
                    type="button"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                  >
                    On débute
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10">
              <h3 className="text-xl font-bold text-gray-800 ">
                Utilisation réel
              </h3>
              <div className="text-sm text-gray-500">
                Payez par utilisateur par mois!
              </div>
              <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 ">
                Le plus populaire
              </span>

              <div className="mt-5">
                <span className="text-6xl font-bold text-gray-800 ">5000</span>
                <span className="text-lg font-bold text-gray-800 ">MGA</span>
                <span className="ml-3 text-gray-500">/ personne</span>
              </div>

              <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                <ul role="list" className="space-y-2 text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">Jusqu'à 10 personnes</span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">
                      Reconnaissance faciale
                    </span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">Emplois du temps</span>
                  </li>
                </ul>
                <ul role="list" className="space-y-2 text-sm sm:text-base">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">Annonces</span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">Partage de fichiers</span>
                  </li>

                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 h-5 w-5 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fill-opacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 ">
                      Cannaux de communications
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm text-gray-500">
                    Payez par mobile monnaie.
                  </p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      navigate("/sign-in");
                    }}
                    type="button"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                  >
                    Commencer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute top-0 right-0 translate-y-16 translate-x-16">
          <svg
            className="w-16 h-auto text-orange-500"
            width="121"
            height="135"
            viewBox="0 0 121 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
              stroke="currentColor"
              stroke-width="10"
              stroke-linecap="round"
            />
            <path
              d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
              stroke="currentColor"
              stroke-width="10"
              stroke-linecap="round"
            />
            <path
              d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
              stroke="currentColor"
              stroke-width="10"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="hidden md:block absolute bottom-0 left-0 translate-y-16 -translate-x-16">
          <svg
            className="w-56 h-auto text-cyan-500"
            width="347"
            height="188"
            viewBox="0 0 347 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
              stroke="currentColor"
              stroke-width="7"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>

      <div className="mt-7 text-center">
        <p className="text-xs text-gray-400">TTC*</p>
      </div>
    </div>
  );
}
