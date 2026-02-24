import Dialog, { type DialogHandle } from '../../ui/Dialog.tsx';
import { useEffect, useRef } from 'react';
import type { Product } from '../../../services/products/products.type.ts';
import { ProductDialogContent } from './ProductDialogContent.tsx';

export function ProductDialog({ value, onChange, product, isLoading = false }: Readonly<Props>) {
  const dialogRef = useRef<DialogHandle | null>(null);

  useEffect(() => {
    if (value) {
      dialogRef.current?.open();
    } else {
      dialogRef.current?.close();
    }
  }, [value]);

  return (
    <Dialog ref={dialogRef} onClose={() => onChange(false)}>
      <ProductDialogContent loading={isLoading} product={product} />
    </Dialog>
  );
}

interface Props {
  product?: Product;
  onAddCart?: () => void;
  value: boolean;
  onChange: (value: boolean) => void;
  isLoading?: boolean;
}
