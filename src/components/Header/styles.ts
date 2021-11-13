import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.header`
    display: flex;
    width: 100%;
    background-color: ${colors.primary};
    height: 250px;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 750px;
`;

export const Options = styled.div`
    display: flex;
    flex: 1;
`;

export const Option = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin: 30px 10px 0px 0px;
    color: ${colors.white};
    cursor: pointer;
`;

export const OptionHighlighted = styled.div`
    width: 60px;
    height: 5px;
    border-radius: 8px;
    background-color: ${colors.accent};
`;

export const Cards = styled.div`
    height: 100px;
    display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-column-gap: 26px;
    justify-content: center;
    align-items: center;
`;