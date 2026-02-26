import Skeleton from 'react-loading-skeleton';
import { Switch } from '../../ui/Switch.tsx';

export function InStockSwitch({ loading, value, onChange }: Readonly<Props>) {
  if (loading) {
    return <Skeleton height={50} width={150} />;
  }

  return <Switch label={'in stock'} value={value} onChange={onChange} />;
}

interface Props {
  loading: boolean;
  value: boolean;
  onChange: (value: boolean) => void;
}
