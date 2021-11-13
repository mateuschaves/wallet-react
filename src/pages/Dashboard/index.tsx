import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';

import { Container, TableContainer, Content } from './styles';
import { fetchTransactionsActions } from '~/store/ducks/Transaction/FetchTransactions';
import { RootState } from '~/shared/store/app.state';
import { InitialFetchTransactionsStateProps } from '~/shared/store/app.state';
import { formatMoney } from '~/utils/number';

interface RenderAmountProps {
    amount: number;
    operationType: 'income' | 'outcome';
}

export default function Dashboard() {

    const dispatch = useDispatch();
    const { transactions } = useSelector<RootState, InitialFetchTransactionsStateProps>(store => store.transactions);

    useEffect(() => {
        dispatch(fetchTransactionsActions.fetchTransactions())
    }, [dispatch])


    function renderAmount({amount, operationType}: RenderAmountProps) {
        return `${operationType === 'income' ? '+' : '-'}  ${formatMoney(amount)}`;
    }

    return (
        <Container>
            <Header />
            <Content>
                <TableContainer>
                    <table>
                    <thead>
                        <tr>
                        <th>Loja</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Data</th>
                        </tr>
                    </thead>

                    {transactions.map(transaction => (
                        <tbody key={transaction.id}>
                        <tr>
                            <td className="title">{transaction.store}</td>
                            <td className={transaction.operation_type}>
                            {renderAmount({amount: transaction.amount, operationType: transaction.operation_type })}
                            </td>
                            <td>{transaction.type}</td>
                            <td>{new Date(transaction.date).toDateString()}</td>
                        </tr>
                        </tbody>
                    ))}
                    </table>
            </TableContainer>
          </Content>
        </Container>
    )
}
