import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Transactions() {
  const { accountId } = useParams() // Get account ID from URL

  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          <h1>Transactions for account {accountId}</h1>
          <p style={{ marginTop: "20px" }}>
            Page présente à titre informatif.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Transactions


