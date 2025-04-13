import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import SignInForm from "../components/SignInForm"

function SignIn() {
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignInForm />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default SignIn





