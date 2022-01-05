import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id:'1', text:'flowers', amount: -90},
        {id:'2', text:'books', amount: -30},
        {id:'3', text:'gifts', amount: -44},
        {id:'4', text:'salary', amount: 5500},
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{ 
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
         }}>
            {children}
        </GlobalContext.Provider>
    );

}