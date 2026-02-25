import { Button } from '../ui/Button.tsx';

export function FetchErrorMessage({ refetch, errorMessage }: Readonly<Props>) {
  return (
    <div className="flex flex-col items-center justify-center border border-muted rounded-xl p-4 gap-2 bg-white">
      <div className="text-red-600">{errorMessage}</div>
      <Button onClick={() => refetch()} className={'bg-muted'}>
        <span>Retry!</span>
      </Button>
    </div>
  );
}

interface Props {
  refetch: () => void;
  errorMessage: string;
}
