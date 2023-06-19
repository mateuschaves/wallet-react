import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';

import { Container, TableContainer, Content } from './styles';
import { fetchTransactionsActions } from '~/store/ducks/Transaction/FetchTransactions';
import { RootState } from '~/shared/store/app.state';
import { InitialFetchTransactionsStateProps } from '~/shared/store/app.state';
import { formatMoney } from '~/utils/number';
import { OperationType } from '~/shared/models/transaction.model';
import { formatDateStringBr } from '~/utils/date';

interface RenderAmountProps {
    amount: number;
    operationType: OperationType
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
        const totalIncome = transactions?.reduce((totalIncome, transaction) => {
            if (transaction.operationType === 'income') return totalIncome + transaction.priceBrl;
            return totalIncome;
        }, 0);

        const totalOutcome = transactions?.reduce((totalOutcome, transaction) => {
            if (transaction.operationType === 'outcome') return totalOutcome + transaction.priceBrl;
            return totalOutcome;
        }, 0);

        setIncome(totalIncome);
        setOutcome(totalOutcome);
        setBallance(totalIncome - totalOutcome || 0);
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
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        </tr>
                    </thead>

                    {transactions?.map(transaction => (
                        <tbody key={transaction.id}>
                        <tr>
                            <td className="title">{transaction.title}</td>
                            <td className={transaction.operationType}>
                            {renderAmount({amount: transaction.priceBrl, operationType: transaction.operationType })}
                            </td>
                            <td>{transaction.category?.title}</td>
                            <td>{formatDateStringBr(new Date(transaction.releaseDate))}</td>
                        </tr>
                        </tbody>
                    ))}
                    </table>
            </TableContainer>
          </Content>
        </Container>
    )
}
