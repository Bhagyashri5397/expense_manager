import React from 'react'

const ExpenceSection = ({transactions}) => {

  const expence = transactions
  .filter((transaction)=> transaction.amount < 0)
  .reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const income = transactions
  .filter((transaction)=> transaction.amount > 0)
  .reduce((p, c) => {
    return p + c.amount;
  }, 0);

  

  return (
    <div className="container2  ">
        <div className="expense-section p-2 d-flex">
    <div className="card p-1 mx-5  " >
            <h3 className='card-title p-3 text-info'>Total Expence :</h3>
            <h1 className='display-5 text-success'>₹ {expence}</h1>
        </div>
        <div className="card p-1 ">
            <h3 className='card-title p-3 text-info'>Total Income :</h3>
            <h1 className='display-5 text-success'>₹ {income}</h1>
        </div>
    
     </div>
     </div>
  )
}

export default ExpenceSection
