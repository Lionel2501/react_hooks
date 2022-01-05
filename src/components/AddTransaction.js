import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [ text, setText ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const handleForm = (e) => {
      e.preventDefault();

      let newTransaction = {
        id: Math.floor(Math.random() * 100000),
        text,
        amount: +amount
      }

      addTransaction(newTransaction);
      
    }

    return (
      <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleForm}>
          <div className="form-control">
              <label htmlFor="text">Text</label>
              <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='enter text ...' />     
              <label htmlFor="amount">Amount
              <br />negative - amount, positive - income</label>
              <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='enter amount ...' />  
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </>
    )
}

export default AddTransaction
