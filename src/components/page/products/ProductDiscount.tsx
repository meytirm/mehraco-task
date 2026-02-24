import { applyDiscount } from '../../../utils/utils.ts';

export function ProductDiscount({ price, discountPercentage }: Readonly<Props>) {
  const discountedPrice = applyDiscount(price, discountPercentage);

  return (
    <div className="product-discount">
      <div className="product-discount-percentage">{Math.ceil(discountPercentage)} %</div>
      <div className="product-discount-price">{discountedPrice}</div>
    </div>
  );
}

interface Props {
  price: number;
  discountPercentage: number;
}
