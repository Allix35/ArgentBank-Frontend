import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Hero from '../components/Hero'
import FeatureItem from '../components/FeatureItem'


function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <section className="features">
  <h2 className="sr-only">Features</h2>

  <FeatureItem icon="/img/icon-chat.webp" title="You are our #1 priority" loading="lazy"> 
    Need to talk to a representative? You can get in touch through our
    24/7 chat or through a phone call in less than 5 minutes.
  </FeatureItem>

  <FeatureItem icon="/img/icon-money.webp" title="More savings means higher rates" loading="lazy">
    The more you save with us, the higher your interest rate will be!
  </FeatureItem>

  <FeatureItem icon="/img/icon-security.webp" title="Security you can trust" loading="lazy">
    We use top of the line encryption to make sure your data and money is always safe.
  </FeatureItem>
</section>

      </main>

      <Footer />
    </>
  )
}

export default Home

