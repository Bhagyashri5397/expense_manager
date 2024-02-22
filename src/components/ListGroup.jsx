import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions, deleteTransaction , editTransaction}) => {
  return (

    <ul className='list-group my-3'>

     {
        transactions.map((transaction) => <ListItem key={transaction.id} 
        transaction={transaction} 
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}/>)
     }
    </ul>
  )
}

export default ListGroup
