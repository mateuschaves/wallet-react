import React, { useEffect, useState } from 'react';
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

    const [income, setIncome] = useState(0);
    const [outcome, setOutcome] = useState(0);
    const [ballance, setBallance] = useState(0);

    useEffect(() => {
        dispatch(fetchTransactionsActions.fetchTransactions())
    }, [dispatch])


    useEffect(() => {
        const totalIncome = transactions.reduce((totalIncome, transaction) => {
            if (transaction.operation_type === 'income') return totalIncome + transaction.amount;
            return totalIncome;
        }, 0);

        const totalOutcome = transactions.reduce((totalOutcome, transaction) => {
            if (transaction.operation_type === 'outcome') return totalOutcome + transaction.amount;
            return totalOutcome;
        }, 0);

        setIncome(totalIncome);
        setOutcome(totalOutcome);
        setBallance(totalIncome - totalOutcome);
    }, [transactions])


    function renderAmount({amount, operationType}: RenderAmountProps) {
        return `${operationType === 'income' ? '+' : '-'}  ${formatMoney(amount)}`;
    }

    return (
        <Container>
            <Header 
                income={income}
                outcome={outcome}
                ballance={ballance}
            />
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
