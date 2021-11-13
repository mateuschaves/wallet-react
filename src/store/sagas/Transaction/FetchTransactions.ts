import { call, put, takeLatest } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';

import {
    fetchTransactionsActions,
    fetchTransactionsTypes,
} from '~/store/ducks/Transaction/FetchTransactions';

import { Transaction } from '~/shared/types/entity';

import { TransactionService } from '~/services/api/resources';

export function* fetchTransactionsSaga() {
    try {
        const response: AxiosResponse<Transaction[]> = yield call(TransactionService.fetchTransactions);
        yield put(fetchTransactionsActions.fetchTransactionsSuccess(response.data));
    } catch (error: any) {
        yield put(fetchTransactionsActions.fetchTransactionsError(error));
    }
}

export function* watchFetchTransactions() {
    yield takeLatest(fetchTransactionsTypes.FETCH_TRANSACTIONS_REQUEST, fetchTransactionsSaga);
}