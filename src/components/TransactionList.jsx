import React from 'react'

export const TransactionList = () => {
  return (
    <>
    <h3>History</h3>
    <ul className="list">
      {/* the below is temp */}
      <li className="minus">
        Cash <span>-$400</span><button className="delete-btn">x</button>
      </li>
    </ul>  
    </>
  )
}
