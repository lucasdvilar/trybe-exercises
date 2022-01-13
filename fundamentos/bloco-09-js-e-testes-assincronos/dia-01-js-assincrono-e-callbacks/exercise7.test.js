const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('teste', (done) => {
  uppercase('lucas', (result) => {
    try {
      expect(result).toBe('LUCAS');
      done();
    } catch (error) {
      done(error);
    }
  })
})