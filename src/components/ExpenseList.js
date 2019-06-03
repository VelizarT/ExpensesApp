import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem.js';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expenses List</h1>
        <ul>
            {props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>))}
        </ul>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseList);