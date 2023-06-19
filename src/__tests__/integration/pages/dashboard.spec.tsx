import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dashboard from '~/pages/Dashboard';
import { fetchTransactionsActions } from "~/store/ducks/Transaction/FetchTransactions";
import { formatDateStringBr } from "~/utils/date";
import * as redux from 'react-redux'

jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useSelector: jest.fn().mockImplementation(() => {
            return { transactions: [] };
        }),
    };
});

describe('Dashboard Page', () => {

    // Tests that fetchTransactionsActions.fetchTransactions() is dispatched on mount
    it('test_dispatches_fetch_transactions_on_mount', () => {
        const dispatch = jest.fn();
        const useSelectorMock = jest.spyOn(redux, 'useSelector');
        useSelectorMock.mockReturnValue({ transactions: [] });
        render(<Dashboard />, { wrapper: MemoryRouter });
        expect(dispatch).toHaveBeenCalledWith(fetchTransactionsActions.fetchTransactions());
    })

    // Tests that Header component is rendered with income, outcome and balance props
    it('test_renders_header_component_with_income_outcome_and_balance_props', () => {
        const useSelectorMock = jest.spyOn(redux, 'useSelector');
        useSelectorMock.mockReturnValue({ transactions: [], income: 100, outcome: 50, balance: 50 });
        const screen = render(<Dashboard />, { wrapper: MemoryRouter });
        expect(screen.getByText('+ R$100,00')).toBeInTheDocument();
        expect(screen.getByText('- R$50,00')).toBeInTheDocument();
        expect(screen.getByText('R$50,00')).toBeInTheDocument();
    })

    // Tests that TransactionItem components are rendered with transaction props
    it('test_renders_transaction_item_components_with_transaction_props', () => {
        const useSelectorMock = jest.spyOn(redux, 'useSelector');
        const transaction = {
            id: 1,
            title: 'Test transaction',
            priceBrl: 100,
            operationType: 'income',
            category: {
                title: 'Test category'
            },
            releaseDate: new Date()
        };
        useSelectorMock.mockReturnValue({ transactions: [transaction] });
        const screen = render(<Dashboard />, { wrapper: MemoryRouter });
        expect(screen.getByText('Test transaction')).toBeInTheDocument();
        expect(screen.getByText('+ R$100,00')).toBeInTheDocument();
        expect(screen.getByText('Test category')).toBeInTheDocument();
        expect(screen.getByText(formatDateStringBr(new Date(transaction.releaseDate)))).toBeInTheDocument();
    })

    // Tests that the component handles the case when transactions is undefined
    it('test_transactions_is_undefined', () => {
        const useSelectorMock = jest.spyOn(redux, 'useSelector');
        useSelectorMock.mockReturnValue({ transactions: undefined });
        const screen = render(<Dashboard />, { wrapper: MemoryRouter });
        expect(screen.queryByText('Test transaction')).not.toBeInTheDocument();
    })

    // Tests that the component handles the case when transactions is an empty array
    it('test_transactions_is_an_empty_array', () => {
        const useSelectorMock = jest.spyOn(redux, 'useSelector');
        useSelectorMock.mockReturnValue({ transactions: [] });
        const screen = render(<Dashboard />, { wrapper: MemoryRouter });
        expect(screen.queryByText('Test transaction')).not.toBeInTheDocument();
    })
});