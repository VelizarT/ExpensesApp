import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configure-store.js';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    // console.log(visibleExpenses);
});

store.dispatch(addExpense({ description: 'Water Bill', amount: 5, createdAt: 21772 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 8, createdAt: 6543 }));
store.dispatch(addExpense({ description: 'Another Bill', amount: 12, createdAt: 65543 }));
store.dispatch(sortByAmount());


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));