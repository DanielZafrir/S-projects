import React from 'react'

import Header from './components/Header/Header'
import Balance from './components/Balance/Balance'
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses'
import TransitionList from './components/TransitionList/TransitionList'
import AddTransition from './components/AddTransition/Addtransition'

import {GlobalProvider} from './context/GlobalState'

import './App.css'

const App = () => {
    return (
        <GlobalProvider>
            <Header/>
            <div className="container">
                <Balance/>
                <IncomeExpenses/>
                <TransitionList/>
                <AddTransition/>
            </div>
        </GlobalProvider>
    )
}

export default App
