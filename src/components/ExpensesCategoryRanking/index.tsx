import React, { ReactNode } from 'react'

import {Container, Title, List, ListItem, Description} from './styles';
import { formatMoney } from '~/utils/number';

type CategoryExpenses = {
  category: string;
  amount: number;
  icon: ReactNode;
}

interface ExpensesCategoryRankingProps {
  categoryExpenses: CategoryExpenses[];
}

export default function ExpensesCategoryRanking({ categoryExpenses }: ExpensesCategoryRankingProps) {
  return (
    <Container>
      <Title>Maiores gastos por categoria</Title>

      <List>
        {
          categoryExpenses.map(({ icon: Icon, amount, category }) => (
            <ListItem key={category}>
              <Description>
                <span>{Icon}</span>
                <span>{category}</span>
              </Description>
              <span>{formatMoney(amount)}</span>
            </ListItem>
          ))
        }
      </List>
    </Container>
  )
}