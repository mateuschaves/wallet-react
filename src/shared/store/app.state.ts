import { AxiosError } from 'axios';
import { Transaction } from '../models/transaction.model';

export interface InitialFetchTransactionsStateProps {
    transactions: Transaction[],
    loading: boolean,
    error: AxiosError | undefined,
}


export interface RootState {
    transactions: InitialFetchTransactionsStateProps;
}