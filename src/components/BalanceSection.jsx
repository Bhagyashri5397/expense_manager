import React, { useEffect, useState } from 'react'


const BalanceSection = ({transactions, addTransaction , edit}) => {

    const balance = transactions.reduce((p,c) => {
        return p + c.amount;
    }, 0);

    // FOR ADD :----

    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();
      addTransaction(text, amount);
      setText("");
      setAmount("");
      
    };
   

     useEffect(()=> {
      setText(edit.transaction.text);
      setAmount(edit.transaction.amount);
     }, [edit]);
    

  return (
    <div className="container1  ">
    <div className="balance-section p-2 d-flex">
<div className="card p-1 mx-5  " >
        <h3 className='card-title p-3 text-info'>Total Balance :</h3>
        <h1 className='display-5 text-success'>₹ {balance}</h1>
    </div>
    <div className="card p-4 ">
       <form  onSubmit={(e)=>handleSubmit(e)}>

        <input type="text" 
        className='form-control my-2' 
        placeholder='Enter Narration' required 
        onChange={(e)=>setText(e.target.value)}
        value={text}/>

        <input type="text" 
        className='form-control my-2' 
        placeholder='Enter Amount' required
        onChange={(e)=>setAmount(e.target.value)}
        value={amount} />

        <button className='btn btn-success float-end rounded-0'>Save</button>

       </form>
    </div>

 </div>
 </div>
  )
}

export default BalanceSection;
