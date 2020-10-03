import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer'


const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20},
        { id: 2, text: 'Salary', amount: 300},
        { id: 3, text: 'Book', amount: -10},
        { id: 4, text: 'Camera', amount: 150},
    ]
}

// create context 

export const GlobalContext = createContext(initialState)

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, disptch] = useReducer(AppReducer,initialState);

    //Actions
    const deleteTransaction = (id) => {
        disptch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        disptch({
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