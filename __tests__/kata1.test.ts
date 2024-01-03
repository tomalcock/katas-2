import {add} from '../src/kata1';

describe('Maths functions', () => {
    test('should add two numbers correctly', () => {
        expect(add(1,2)).toBe(3);
    })
})