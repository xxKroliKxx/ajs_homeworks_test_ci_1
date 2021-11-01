import healthLevel from '../app';

test('healthy test', () => {
  expect(healthLevel({ health: 51 })).toBe('healthy');
});

test('wounded test', () => {
  expect(healthLevel({ health: 41 })).toBe('wounded');
});

test('critical test', () => {
  expect(healthLevel({ health: 5 })).toBe('critical');
});
