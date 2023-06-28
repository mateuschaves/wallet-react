import { OperationType, Transaction } from '~/shared/models/transaction.model';
import { formatDateStringBr } from '~/utils/date';
import { formatMoney } from '~/utils/number';

interface RenderAmountProps {
    amount: number;
    operationType: OperationType
}

interface TransactionProps {
    transaction: Omit<Transaction, 'createdAt'>;
}

export default function TransactionItem({ transaction }: TransactionProps) {

    function renderAmount({ amount, operationType }: RenderAmountProps) {
        return `${operationType === 'income' ? '+' : '-'} ${formatMoney(amount)}`;
    }

    return (
        <tbody key={transaction.id}>
            <tr>
                <td className="title">{transaction.title}</td>
                <td className={transaction.operationType}>{renderAmount({ amount: transaction.priceBrl, operationType: transaction.operationType })}</td>
                <td>{transaction.category?.title || '-'}</td>
                <td>{formatDateStringBr(new Date(transaction.releaseDate))}</td>
            </tr>
        </tbody>
    )
}
