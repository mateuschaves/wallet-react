import React from 'react'

import { Container, Content, Options, Option, Label, OptionHighlighted } from './styles';

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
            </Content>
        </Container>
    )
}
