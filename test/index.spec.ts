describe('package', () => {
  test('should be able to be imported', () => {
    expect(async () => await import('index')).not.toThrow();
  });
});