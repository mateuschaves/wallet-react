import { capitalizeFirstLetter } from "~/utils/string";

describe('String Util', () => {
    describe('capitalizeFirstLetter', () => {
        it('should capitalize first letter of a string', () => {
            expect(capitalizeFirstLetter('hello')).toBe('Hello');
        });

        it('should return empty string if input is empty', () => {
            expect(capitalizeFirstLetter('')).toBe('');
        });

        it('should return empty string if input is null', () => {
            expect(capitalizeFirstLetter(null as unknown as string)).toBe('');
        });
    })
});