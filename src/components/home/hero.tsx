import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <div className="bg-slate-900">
      <div className="bg-gradient-to-b from-violet-600/[.15] via-transparent">
        <div className="flex flex-col justify-center max-w-[85rem] h-screen mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-14">
          <div className="flex justify-center">
            <a
              onClick={() => navigate("/sign-in")}
              className="group cursor-pointer inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md"
            >
              <p className="mr-2 inline-block text-white text-sm">
                Connectez-vous
              </p>
              <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </a>
          </div>
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="block font-medium text-gray-200 text-4xl sm:text-4xl lg:text-5xl">
              Confiance et efficacité. <br />
              Votre visage, votre identité.
            </h1>
          </div>

          <div className="max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-400">
              Facilitez la communication interne avec Medusa : Une technologie
              de reconnaissance faciale de confiance.
            </p>
          </div>

          <div className="text-center">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800"
              href="#ray"
            >
              Premier pas
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
