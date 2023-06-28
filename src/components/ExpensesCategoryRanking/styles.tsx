import styled from 'styled-components';
import { colors } from '~/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 925px;

  transform: translateY(36px);
`;

export const Title = styled.h1`
    font-size: 1.2rem;
    color: ${colors.black};
    margin-bottom: 1rem;
`;


export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    width: 35%;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`