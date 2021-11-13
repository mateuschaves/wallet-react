import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.header`
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    height: 130px;
    padding: 26px 10px 0px 26px;
    border-radius: 8px;
`;

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.label`
    font-size: 16px;
    font-weight:  lighter;
    margin-bottom: 16px;
`;

export const CashAmount = styled.label`
    font-size: 26px;
    font-weight: bold;
`;
