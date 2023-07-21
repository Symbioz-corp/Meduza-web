import React from "react"
export default function FAQ() {
    return (
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800">
                    FAQ
                </h2>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Puis-je annuler à tout moment ?
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Oui, vous pouvez annuler à tout moment sans poser de questions pendant que vous annulez, mais nous vous serions reconnaissants de bien vouloir nous faire part de vos commentaires.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Comment fonctionne la tarification de Medusa ?
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Nous fournissons un système d'abonnement très simple et très abordable. 5000MGA pour une personne par établissement chaque mois. Cependant, vous pouvez utiliser Medusa gratuitement à vie si votre entreprise ne fait que 10 personnes.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Dans quelle mesure Medusa est-il sécurisé ?
                        </h3>
                        <p className="mt-2 text-gray-600">
                            La protection des données que vous confiez à Medusa est notre première priorité. Cette partie est vraiment cruciale pour maintenir le projet en ligne jusqu'à son achèvement.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                            Comment sont traitées mes données ?
                        </h3>
                        <p className="mt-2 text-gray-600">
                            Vos données sont uniquement utilisées pour les établissements dont vous êtes membres. Si vous avez accès à deux établissements (disons A et B). A ne vera pas vos activités dans l'autre établissements.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )
}