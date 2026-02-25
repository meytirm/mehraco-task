import { LoaderCircleIcon, SearchIcon, XCircleIcon } from 'lucide-react';
import { Input } from '../ui/Input.tsx';

export function SearchInput({ onSearch, value, loading = false }: Readonly<Props>) {
  return (
    <Input
      placeholder="Search products"
      prepend={
        loading ? (
          <LoaderCircleIcon className="text-muted animate-spin" />
        ) : (
          <SearchIcon size={24} className="text-placeholder" />
        )
      }
      append={
        value && <XCircleIcon className="cursor-pointer text-muted" onClick={() => onSearch('')} />
      }
      onChange={(e) => onSearch(e.target.value)}
      value={value}
    />
  );
}

interface Props {
  onSearch: (query: string) => void;
  value: string;
  loading?: boolean;
}
