import type { Product } from '../../../services/products/products.type.ts';
import { Badge } from '../../ui/Badge.tsx';
import { BadgeCheck, HeartIcon, Package2Icon, StarIcon, TruckIcon } from 'lucide-react';
import { ProductDiscount } from './ProductDiscount.tsx';
import { Button } from '../../ui/Button.tsx';

export function ProductDialogInfo({ product }: Readonly<Props>) {
  const rating = Math.floor(product.rating * 10) / 10; // 4.64 to 4.6

  return (
    <div className="product-dialog-info">
      <div className="product-dialog-info-category">{product.category}</div>
      <div className="product-dialog-info-title-wrapper">
        <div className="product-dialog-info-title">{product.title}</div>
        <Badge variant={product.stock === 0 ? 'danger' : 'success'}>
          {product.availabilityStatus}
        </Badge>
      </div>
      <div className="product-dialog-info-review-wrapper">
        <div className="product-dialog-info-rating-wrapper">
          <StarIcon className="text-yellow-400" fill="currentColor" size={24} />
          <span className="product-dialog-info-rating">{rating}</span>
        </div>
        <span className="product-dialog-info-divider">|</span>
        <div className="product-dialog-info-review">{product.reviews.length} Reviews</div>
      </div>
      <div className="product-dialog-info-description">{product.description}</div>
      <div>
        <ProductDiscount price={product.price} discountPercentage={product.discountPercentage} />
        <div className="product-price">$ {product.price}</div>
      </div>
      <div className="flex items-center gap-4 my-4">
        <Button className={'grow'}>ADD TO CART</Button>
        <Button variant={'outline'}>
          <HeartIcon size={24} strokeWidth={1} />
        </Button>
      </div>
      <div className="product-dialog-info-guarantee-box">
        <div className="flex items-center gap-2">
          <TruckIcon strokeWidth={1} />
          <div className="text-xs font-medium">
            <span className="text-foreground">Shipping Information :</span>
            <span className="text-muted">Ships in 2 weeks</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <BadgeCheck strokeWidth={1} />
          <div className="text-xs font-medium">
            <span className="text-foreground">Warranty Information :</span>
            <span className="text-muted">3 years warranty</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Package2Icon strokeWidth={1} />
          <div className="text-xs font-medium">
            <span className="text-foreground">Return Policy :</span>
            <span className="text-muted">7 days return policy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Props {
  product: Product;
}
