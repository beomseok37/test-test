import { add } from './index';

test('add가 되나?!', () => {
  expect(add(1, 2)).toBe(3);
});

test(() => {
  expect(1).toBe(1);
});
