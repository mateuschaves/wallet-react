import React from 'react'
import HeaderCard from '../HeaderCard';

import { Container, Content, Options, Option, Label, OptionHighlighted, Cards } from './styles';

export default function Header() {
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
                    <HeaderCard title="Entradas" amount={73874} type="income" />
                    <HeaderCard title="Saídas" amount={700} type="outcome"/>
                    <HeaderCard title="Saldo" amount={2000} type="total"/>
                </Cards>
            </Content>
        </Container>
    )
}
