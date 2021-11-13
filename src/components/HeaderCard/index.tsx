import React from 'react'

import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";
import { MdOutlineAttachMoney } from 'react-icons/md';

import { colors } from '~/theme';

import { CashAmount, Container, Header, Title } from './styles';
import { formatMoney } from '../../utils/number';


interface HeaderCardProps {
    title: string;
    type: 'income' | 'outcome' | 'total';
    amount: number;
}

export default function HeaderCard({title, type, amount}: HeaderCardProps) {

    function renderIcon() {
        switch(type) {
            case 'income':
                return <AiOutlineUpCircle 
                    size={26}
                    color={colors.primary}
                />
            case 'outcome':
                return <AiOutlineDownCircle 
                    size={26}
                    color={colors.red}
                />
            case 'total':
                return <MdOutlineAttachMoney 
                    size={26}
                    color={colors.primary}
                />
        }
    }

    return (
        <Container>
            <Header>
                <Title>{title}</Title>
                {renderIcon()}
            </Header>

            <CashAmount>{formatMoney(amount)}</CashAmount>
        </Container>
    )
}
