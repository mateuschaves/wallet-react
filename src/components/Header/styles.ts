import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.header`
    display: flex;
    background-color: ${colors.primary};
    height: 250px;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 750px;
`;

export const Options = styled.div`
    display: flex;
`;

export const Option = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    margin: 30px 10px 0px 0px;
    color: ${colors.white};
`;

export const OptionHighlighted = styled.div`
    width: 60px;
    height: 5px;
    border-radius: 8px;
    background-color: ${colors.accent};
`;