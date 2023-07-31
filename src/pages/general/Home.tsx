import React from "react"
import FAQ from "../../components/home/FAQ"
import Footer from "../../components/home/footer"
import Hero from "../../components/home/hero"
import ImageXL from "../../components/home/ImageXL"
import Pricing from "../../components/home/prix"

export default function Home() {

    return (
        <>
            <Hero />
            <Pricing />
            <ImageXL />
            <FAQ />
            <Footer />
        </>
    )
}

