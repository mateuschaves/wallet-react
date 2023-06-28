import { render } from "@testing-library/react";
import TransactionItem from '../../../pages/Dashboard/components/Transaction/index';
import { OperationType, Transaction } from "~/shared/models/transaction.model";

describe('TransactionItem Component', () => {
    it('should be able to render income transaction item with valid data', () => {
        const transaction: Transaction = {
            id: 1,
            title: 'Test Transaction',
            priceBrl: 100,
            operationType: OperationType.Income,
            category: {
                title: 'Test Category',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: 1
            },
            releaseDate: new Date(),
            createdAt: new Date(),
        };
        const { getByText } = render(<table><TransactionItem transaction={transaction} /></table>);
        expect(getByText('Test Transaction')).toBeInTheDocument();
        expect(getByText('+ R$ 100,00')).toBeInTheDocument();
        expect(getByText('Test Category')).toBeInTheDocument();
        expect(getByText(/(Segunda|Terça|Quarta|Quinta|Sexta|Sábado|Domingo)/)).toBeInTheDocument();
    });

    it('should be able to render outcome transaction item with valid data', () => {
        const transaction: Transaction = {
            id: 1,
            title: 'Test Transaction',
            priceBrl: 100,
            operationType: OperationType.Outcome,
            category: {
                title: 'Test Category',
                createdAt: new Date(),
                updatedAt: new Date(),
                id: 1
            },
            releaseDate: new Date(),
            createdAt: new Date(),
        };
        const { getByText } = render(<table><TransactionItem transaction={transaction} /></table>);
        expect(getByText('Test Transaction')).toBeInTheDocument();
        expect(getByText('- R$ 100,00')).toBeInTheDocument();
        expect(getByText('Test Category')).toBeInTheDocument();
        expect(getByText(/(Segunda|Terça|Quarta|Quinta|Sexta|Sábado|Domingo)/)).toBeInTheDocument();
    })

    it('should be able to render income transaction item with null category', () => {
        const transaction = {
            id: 1,
            title: 'Test Transaction',
            priceBrl: 100,
            operationType: OperationType.Income,
            category: null as unknown as Transaction['category'],
            releaseDate: new Date(),
            createdAt: new Date(),
            
        };
        const { getByText } = render(<table><TransactionItem transaction={transaction} /></table>);
        expect(getByText('Test Transaction')).toBeInTheDocument();
        expect(getByText('+ R$ 100,00')).toBeInTheDocument();
        expect(getByText('-')).toBeInTheDocument();
        expect(getByText(/(Segunda|Terça|Quarta|Quinta|Sexta|Sábado|Domingo)/)).toBeInTheDocument();
    });

    it('should be able to render outcome transaction item with null category', () => {
        const transaction = {
            id: 1,
            title: 'Test Transaction',
            priceBrl: 100,
            operationType: OperationType.Outcome,
            category: null as unknown as Transaction['category'],
            releaseDate: new Date(),
            createdAt: new Date(),
            
        };
        const { getByText } = render(<table><TransactionItem transaction={transaction} /></table>);
        expect(getByText('Test Transaction')).toBeInTheDocument();
        expect(getByText('- R$ 100,00')).toBeInTheDocument();
        expect(getByText('-')).toBeInTheDocument();
        expect(getByText(/(Segunda|Terça|Quarta|Quinta|Sexta|Sábado|Domingo)/)).toBeInTheDocument();
    });
})