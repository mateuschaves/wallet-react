import React from 'react'
import HeaderCard from '../HeaderCard';

import { Container, Content, Options, Option, Label, OptionHighlighted, Cards } from './styles';

interface HeaderProps {
    income: number;
    outcome: number;
    ballance: number;
}

export default function Header({income, outcome, ballance}: HeaderProps) {
    return (
        <Container>
            <Content>
                <Options>
                    <Option>
                        <Label>Dashboard</Label>
                        <OptionHighlighted />
                    </Option>
                    <Option>
                        <Label>Importar</Label>
                    </Option>
                </Options>

                <Cards>
                    <HeaderCard title="Entradas" amount={income} type="income" />
                    <HeaderCard title="Saídas" amount={outcome} type="outcome"/>
                    <HeaderCard title="Saldo" amount={ballance} type="total"/>
                </Cards>
            </Content>
        </Container>
    )
}
