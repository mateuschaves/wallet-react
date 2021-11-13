export interface Transaction {
    id: number;
    store: string;
    amount: number;
    type: string;
    operation_type: 'income' | 'outcome';
    date: Date;
}