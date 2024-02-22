import React from 'react';
import { FaTrash , FaPen } from "react-icons/fa";

const ListItem = ({transaction, deleteTransaction , editTransaction}) => {
  return (
  
    <li className='list-group-item d-flex align-items-center justify-content-between '>
   <span>
   <h5 className='text-dark'>{transaction.text}</h5>
    <h3 className={transaction.amount > 0 ? "text-success" : 'text-danger'}>{transaction.amount}</h3>
   </span>
    <span className=''>
        <button className='btn btn-sm btn-warning mx-1 rounded-0 mx-2' onClick={()=>editTransaction(transaction)}>Edit <FaPen/></button>
        <button className='btn btn-sm btn-danger rounded-0' onClick={() => deleteTransaction(transaction.id)} >Delete <FaTrash /></button>
    </span>
   </li>
     
  
  )
}

export default ListItem
