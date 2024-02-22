import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import BalanceSection from './components/BalanceSection'
import ExpenceSection from './components/ExpenceSection'
import ListGroup from './components/ListGroup'

const App = () => {

  const [dark , setDark] = useState(true);

  const [edit , setEdit] = useState({
    transaction: {},
    editMode: false,
  });
  console.log(edit);
  

    const [transactions , setTransactions] = useState(
        []
    );

    // DELETE :-----------------

     const deleteTransaction = (id) => {
      setTransactions(transactions.filter((item) => item.id !== id));
      toast("Transaction Deleted!")
     };

    //  ADD :--------------------

     const addTransaction = (text, amount) => {
      const newTransaction = {
        id: crypto.randomUUID(),
        text,
        amount: parseInt(amount),
      };
      setTransactions([newTransaction, ...transactions]);
      toast("Transaction Saved!");
     };

    //  EDITTRANSACTION :----------

   

    //  THEME :----------

    const changeTheme = () => {
      if (dark) {
        setDark(false);
      } else {
        setDark(true);
      }
    };

    // EDIT :--------------

    const editTransaction = (transaction) => {
      // console.log(transaction);
      setEdit({
        transaction : transaction,
        editMode : true,
      });
    };

  return (
    <div className={dark ? "bg-dark" : "bg-light"}>
    <Navbar dark={dark} changeTheme={changeTheme}/>
     <div className="container my-3  d-flex align-items-center justify-content-center ">
     <BalanceSection transactions={transactions} addTransaction={addTransaction} edit={edit}/>
      <ExpenceSection transactions={transactions}/>
     </div> 
     <ListGroup transactions={transactions} deleteTransaction={deleteTransaction} editTransaction={editTransaction} />

     <ToastContainer/>
 
    </div>
    
  )
  
}

export default App
