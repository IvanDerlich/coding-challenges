function tests(longestPeakFunction) {
  describe("Longest Peak Solution 1", () => {
    test("1/13", () => {
      expect(
        longestPeakFunction([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3])
      ).toBe(6);
    });
  });
}

export default tests;
