export function applyDiscount(price: number, discountPercent: number): number {
  const discountAmount = price * (discountPercent / 100);
  const finalPrice = price - discountAmount;
  return Number.parseFloat(finalPrice.toFixed(2));
}
