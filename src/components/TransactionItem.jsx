import React, { useState } from "react"
import { FaPencilAlt, FaChevronDown, FaChevronUp } from "react-icons/fa"

function TransactionItem({ transaction }) {
  const [expanded, setExpanded] = useState(false)
  const [editingCategory, setEditingCategory] = useState(false)
  const [editingNote, setEditingNote] = useState(false)

  const [category, setCategory] = useState(transaction.category)
  const [note, setNote] = useState(transaction.note)

  return (
    <div className={`transaction-item ${expanded ? "expanded" : ""}`}>
      <div className="transaction-summary" onClick={() => setExpanded(!expanded)}>
        <div>{transaction.date}</div>
        <div>{transaction.description}</div>
        <div>${transaction.amount.toFixed(2)}</div>
        <div>${transaction.balance.toFixed(2)}</div>
        <div className="toggle-icon">
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>

      {expanded && (
        <div className="transaction-details">
          <div><strong>Transaction type:</strong> {transaction.type}</div>

          <div>
            <strong>Category:</strong>{" "}
            {editingCategory ? (
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                onBlur={() => setEditingCategory(false)}
              >
                <option>Food</option>
                <option>Transport</option>
                <option>Utilities</option>
                <option>Shopping</option>
                <option>Other</option>
              </select>
            ) : (
              <>
                {category}{" "}
                <FaPencilAlt
                  className="edit-icon"
                  onClick={() => setEditingCategory(true)}
                />
              </>
            )}
          </div>

          <div>
            <strong>Note:</strong>{" "}
            {editingNote ? (
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                onBlur={() => setEditingNote(false)}
              />
            ) : (
              <>
                {note || "—"}{" "}
                <FaPencilAlt
                  className="edit-icon"
                  onClick={() => setEditingNote(true)}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TransactionItem




