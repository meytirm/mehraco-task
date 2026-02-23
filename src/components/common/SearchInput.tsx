import { SearchIcon } from 'lucide-react';
import { Input } from '../ui/Input.tsx';

export function SearchInput() {
  return (
    <Input
      placeholder="Search products"
      prepend={<SearchIcon size={24} className="text-placeholder" />}
    />
  );
}
