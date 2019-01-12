class solution {
  MyPow(x, n) {
    return n > 0 ? pow(x, n) : 1 / pow(x, n);
  }
}
function pow(x, n) {
  if (n == 0) return 1;
  let mid = pow(x, parseInt(n / 2));
  return n % 2 == 0 ? mid * mid : mid * mid * x;
}

module.exports = solution;
