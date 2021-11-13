import client from '../client';

const fetchTransactions = () => {
    return client({
        url: 'transactions',
        method: 'GET',
    });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchTransactions,
}