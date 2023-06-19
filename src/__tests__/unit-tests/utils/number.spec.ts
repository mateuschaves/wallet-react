import { formatMoney } from "~/utils/number";

describe('Number Util', () => {
    describe('formatMoney', () => {
        
        it('should format a positive integer correctly', () => {
            expect(formatMoney(1000)).toBe('R$ 1.000,00');
        });

        it('should format a positive float correctly', () => {
            expect(formatMoney(1000.5)).toBe('R$ 1.000,50');
        });

        it('should format a zero correctly', () => {
            expect(formatMoney(0)).toBe('R$ 0,00');
        });

        it('should format a negative integer correctly', () => {
            expect(formatMoney(-1000)).toBe('-R$ 1.000,00');
        });

        it('should format a negative float correctly', () => {
            expect(formatMoney(-1000.5)).toBe('-R$ 1.000,50');
        });
    })
})