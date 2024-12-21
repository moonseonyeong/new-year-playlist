import { cn } from '@/lib/utils';

interface DefaultIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const InstagramIcon = ({ className, ...props }: DefaultIconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('w-[18px] h-[18px]', className)}
      {...props}
    >
      <path
        d='M1 8.2C1 5.20021 1 3.70032 1.76393 2.64886C2.01065 2.30928 2.30928 2.01065 2.64886 1.76393C3.70032 1 5.20021 1 8.2 1H11.8C14.7998 1 16.2997 1 17.3511 1.76393C17.6907 2.01065 17.9893 2.30928 18.2361 2.64886C19 3.70032 19 5.20021 19 8.2V11.8C19 14.7998 19 16.2997 18.2361 17.3511C17.9893 17.6907 17.6907 17.9893 17.3511 18.2361C16.2997 19 14.7998 19 11.8 19H8.2C5.20021 19 3.70032 19 2.64886 18.2361C2.30928 17.9893 2.01065 17.6907 1.76393 17.3511C1 16.2997 1 14.7998 1 11.8V8.2Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
      <path
        d='M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export const ShareIcon = ({ className, ...props }: DefaultIconProps) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={cn('w-[18px] h-[18px]', className)}
      {...props}
    >
      <path
        d='M7.5 8L13 5M7.5 12L13 15M16 19V19C17.6569 19 19 17.6569 19 16V16C19 14.3431 17.6569 13 16 13V13C14.3431 13 13 14.3431 13 16V16C13 17.6569 14.3431 19 16 19ZM16 7V7C17.6569 7 19 5.65685 19 4V4C19 2.34315 17.6569 1 16 1V1C14.3431 1 13 2.34315 13 4V4C13 5.65685 14.3431 7 16 7ZM4.5 13.5V13.5C6.433 13.5 8 11.933 8 10V10C8 8.067 6.433 6.5 4.5 6.5V6.5C2.567 6.5 1 8.067 1 10V10C1 11.933 2.567 13.5 4.5 13.5Z'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
