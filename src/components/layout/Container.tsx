import { cn } from '@/lib/utils';
import Header from './Header';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  hasHeader?: boolean;
}

const Container = ({
  children,
  className,
  hasHeader = false,
  ...props
}: ContainerProps) => {
  const MAIN_CLASSNAME = hasHeader
    ? 'calc(100dvh - 83px)'
    : 'calc(100dvh - 0px)';

  return (
    <div
      className={cn(
        'flex flex-col bg-primary h-[100dvh] overflow-y-scroll',
        className
      )}
      {...props}
    >
      {hasHeader && <Header />}
      <main className={cn(MAIN_CLASSNAME, 'text-background')}>{children}</main>
    </div>
  );
};

export default Container;
