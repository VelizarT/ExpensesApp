import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <li>
        <Link to={`/edit/${id}`}>
            {description && <h3>{description}</h3>}
        </Link>
        {amount && <span>{amount}</span>} - <span>{createdAt}</span>
        <button onClick={() => {
            dispatch(removeExpense(id));
        }}>Remove</button>
    </li>
);

export default connect()(ExpenseListItem);

