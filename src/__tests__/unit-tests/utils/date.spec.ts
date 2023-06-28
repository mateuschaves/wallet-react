import { formatDateStringBr } from "~/utils/date";

describe('Date Util', () => {

    describe('formatDateStringBr', () => {
        it('should format a date string correctly', () => {
            const date = new Date(2022, 0, 1);
            expect(formatDateStringBr(date)).toBe('Sábado, 1 de jan. de 2022');
        });

        it('should format a date using -03:00 timezone correctly', () => {
            const date = new Date('2022-01-01T00:00:00.000-03:00');
            expect(formatDateStringBr(date)).toBe('Sábado, 1 de jan. de 2022');
        });

        it('should format a date with a different locale correctly using pt-BR locale', () => {
            const date = new Date('2022-01-01T03:00:00.000-03:00');
            expect(formatDateStringBr(new Date(date.toLocaleString('en-US')))).toBe('Sábado, 1 de jan. de 2022');
        });

        it("should throw an error when a null date is passed"
            , () => {
                const date = null;
                expect(() => formatDateStringBr(date as unknown as Date)).toThrow();
            });
    })


})