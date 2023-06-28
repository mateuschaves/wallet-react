 import { AxiosError, AxiosResponse } from 'axios';
import { Transaction } from '~/shared/models/transaction.model';
 
 import { InitialFetchTransactionsStateProps} from '~/shared/store/app.state';

 export const fetchTransactionsTypes = {
    FETCH_TRANSACTIONS_REQUEST: 'transactions/FETCH_TRANSACTIONS_REQUEST',
    FETCH_TRANSACTIONS_SUCCESS: 'transactions/FETCH_TRANSACTIONS_SUCCESS',
    FETCH_TRANSACTIONS_ERROR: 'transactions/FETCH_TRANSACTIONS_ERROR',
};

export const fetchTransactionsActions = {
    fetchTransactions: () => ({
        type: fetchTransactionsTypes.FETCH_TRANSACTIONS_REQUEST,
        payload: {},
    }),
    fetchTransactionsSuccess: (data: Transaction[]) => ({
        type: fetchTransactionsTypes.FETCH_TRANSACTIONS_SUCCESS,
        payload: data,
    }),
    fetchTransactionsError: (error: AxiosError) => ({
        type: fetchTransactionsTypes.FETCH_TRANSACTIONS_ERROR,
        payload: error,
    }),
};

interface actionProps {
    type?: string;
    payload?: AxiosError | AxiosResponse<Transaction[]>;
}

const initialState: InitialFetchTransactionsStateProps = {
    transactions: [],
    loading: false,
    error: undefined,
};

export const fetchTransactionsReducer = (state = initialState, action: actionProps) => {
    switch (action.type) {
        case fetchTransactionsTypes.FETCH_TRANSACTIONS_REQUEST:
            return {...state, loading: true};
        case fetchTransactionsTypes.FETCH_TRANSACTIONS_SUCCESS:
            return {...state, loading: false, transactions: action.payload};
        case fetchTransactionsTypes.FETCH_TRANSACTIONS_ERROR:
            return {
                ...state,
                loading: false,
                transactions: undefined,
                error: action.payload,
            };
        default:
            return state;
    }
};