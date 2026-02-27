import { Drawer } from 'vaul';
import { Button } from '../../ui/Button.tsx';
import { SlidersHorizontalIcon, XIcon } from 'lucide-react';
import { ProductsFilter } from './ProductsFilter.tsx';

export default function FilterDrawer({ loading = false }: Readonly<Props>) {
  return (
    <Drawer.Root noBodyStyles>
      {/* دکمه باز کردن */}
      <div className="md:hidden block">
        <Drawer.Trigger asChild>
          <Button variant="solid">
            <SlidersHorizontalIcon />
          </Button>
        </Drawer.Trigger>
      </div>

      {/* overlay */}
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />

        {/* content */}
        <Drawer.Content
          className="
            fixed bottom-0 left-0 right-0
            bg-white rounded-t-2xl
            p-6 h-[70vh] flex flex-col
          "
        >
          <div className="mx-auto w-12 h-1.5 bg-gray-300 rounded mb-4" />
          {/* header (fixed) */}
          <div className="flex justify-between items-center mb-4 shrink-0">
            <Drawer.Title className="text-lg font-semibold">Filters</Drawer.Title>

            <Drawer.Close>
              <XIcon className="text-muted hover:text-red-600" />
            </Drawer.Close>
          </div>

          {/* scrollable area */}
          <div className="flex-1 overflow-y-auto">
            <ProductsFilter loading={loading} />
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

interface Props {
  loading?: boolean;
}
