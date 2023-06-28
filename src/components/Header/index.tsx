import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router';
import HeaderCard from '../HeaderCard';

import { Container, Content, Options, Option, Label, OptionHighlighted, Cards } from './styles';
import ExpensesCategoryRanking from '../ExpensesCategoryRanking';

interface HeaderProps {
    income?: number;
    outcome?: number;
    ballance?: number;
    renderCards?: boolean;
}

type MenuSelected = 'dashboard' | 'import';

export default function Header({ income = 0, outcome = 0, ballance = 0, renderCards = true }: HeaderProps) {

    const history = useHistory();
    const location = useLocation();

    const [menu, setMenu] = useState<MenuSelected>('dashboard');

    useEffect(() => {
        if (location.pathname.includes('import')) {
            setMenu('import')
        } else {
            setMenu('dashboard')
        }
    }, [location])

    function goToDashboardScreen() {
        history.push('dashboard');
    }

    function goToImportFileScreen() {
        history.push('import')
    }

    return (
        <Container>
            <Content>
                <Options>
                    <Option>
                        <Label onClick={goToDashboardScreen}>Dashboard</Label>
                        {
                            menu === 'dashboard' && (<OptionHighlighted />)
                        }
                    </Option>
                    <Option>
                        <Label onClick={goToImportFileScreen}>Importar</Label>
                        {
                            menu === 'import' && (<OptionHighlighted />)
                        }
                    </Option>
                </Options>
                {
                    renderCards && (
                        <Cards>
                            <HeaderCard title="Entradas" amount={income} type="income" />
                            <HeaderCard title="Saídas" amount={outcome} type="outcome" />
                            <HeaderCard title="Saldo" amount={ballance} type="total" />
                        </Cards>
                    )
                }
            </Content>
        </Container>
    )
}
