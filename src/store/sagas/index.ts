import { all } from 'redux-saga/effects';

import { watchFetchTransactions } from './Transaction/FetchTransactions';

export default function* rootSaga() {
    yield all([
        watchFetchTransactions(),
    ])
}