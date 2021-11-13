import { AxiosError } from 'axios';
import { Transaction } from '~/shared/types/entity';

export interface InitialFetchTransactionsStateProps {
    transactions: Transaction[],
    loading: boolean,
    error: AxiosError | undefined,
}


export interface RootState {
    transactions: InitialFetchTransactionsStateProps;
}