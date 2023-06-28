import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';

import { MdDirectionsTransitFilled, MdFastfood, MdHouse } from 'react-icons/md';

import { Container, TableContainer, Content } from './styles';
import { fetchTransactionsActions } from '~/store/ducks/Transaction/FetchTransactions';
import { RootState } from '~/shared/store/app.state';
import { InitialFetchTransactionsStateProps } from '~/shared/store/app.state';
import TransactionItem from './components/Transaction';
import ExpensesCategoryRanking from '~/components/ExpensesCategoryRanking';

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

    return (
        <Container>
            <Header 
                income={income}
                outcome={outcome}
                ballance={ballance}
            />
            <ExpensesCategoryRanking
                categoryExpenses={[
                    { category: 'Alimentação', amount: 1000, icon: <MdFastfood size={20}/> },
                    { category: 'Transporte', amount: 200, icon: <MdDirectionsTransitFilled size={20}/> },
                    { category: 'Casa', amount: 1000, icon: <MdHouse size={20}/> },
                ]}
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
                        <TransactionItem 
                            key={transaction.id}
                            transaction={transaction}
                        />
                    ))}
                    </table>
            </TableContainer>
          </Content>
        </Container>
    )
}
