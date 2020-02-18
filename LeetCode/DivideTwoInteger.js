/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let isMinusDivisor = false;
    let isMinusDividend = false;
    let result = 0;
    const max = 2147483647;

    if (divisor < 0) {
        divisor = -divisor;
        isMinusDivisor = true;
    }

    if (dividend < 0) {
        dividend = -dividend;
        isMinusDividend = true;
    }

    while (dividend >= divisor) {
        dividend -= divisor;
        result++;
    }

    if ((isMinusDividend && !isMinusDivisor) || (!isMinusDividend && isMinusDivisor)) {
        result = -result;
    }

    return Math.min(max, result);
};