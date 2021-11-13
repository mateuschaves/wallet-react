import client from '../client';

const fetchTransactions = () => {
    return client({
        url: 'transactions',
        method: 'GET',
    });
}

export default {
    fetchTransactions,
}