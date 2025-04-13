import React from 'react'
import { Link } from 'react-router-dom'

function AccountCard({ title, amount, description, accountId }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">
          {amount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
        </p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Link to={`/transactions/${accountId}`}>
          <button className="transaction-button">View transactions</button>
        </Link>
      </div>
    </section>
  )
}

export default AccountCard







