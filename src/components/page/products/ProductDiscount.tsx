export function ProductDiscount({ price, discountPercentage }: Readonly<Props>) {
  return (
    <div className="product-discount">
      <div className="product-discount-percentage">{Math.ceil(discountPercentage)} %</div>
      <div className="product-discount-price">{price}</div>
    </div>
  );
}

interface Props {
  price: number;
  discountPercentage: number;
}
