export function formatNumber(num) {
    let formatted = num.toFixed(2);
    formatted = formatted.padStart(2, '0');
    return formatted;
  }