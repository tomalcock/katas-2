import {stat} from '../src/kata1';

describe('stat function', () => {
    
    test('if string is empty, return empty string', () => {
        expect(stat('')).toBe('');
    }) 
    
    test('if all the times are 00|00|00, return Range:00|00|00 Average: 00|00|00 Median: 00|00|00', () => {
        expect(stat('00|00|00, 00|00|00, 00|00|00, 00|00|00')).toBe('Range: 00|00|00 Average: 00|00|00 Median: 00|00|00');
    })

    test('function works for general case', () => {
        expect(stat('01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17')).toBe('Range: 01|01|18 Average: 01|38|05 Median: 01|32|34')

        expect(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17")).toBe("Range: 00|31|17 Average: 02|27|10 Median: 02|24|57")
    })

})


