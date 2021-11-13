import {combineReducers} from 'redux';

import {fetchTransactionsReducer as transactions} from './Transaction/FetchTransactions';

const reducers = combineReducers({
    transactions,
});

export default reducers;