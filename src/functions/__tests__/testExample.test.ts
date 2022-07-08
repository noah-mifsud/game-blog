import { sum, subtract } from '../sum';

test('Check if sum and subtract work', () => {
    expect(sum(1, 5)).toBe(6);
    expect(subtract(5, 1)).toBe(4);
})