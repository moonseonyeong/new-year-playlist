import Image from 'next/image';
import { InstagramIcon } from '../icons';
import Link from 'next/link';
import ShareButton from '../share-button';

const Header = () => {
  return (
    <header className='sticky top-0 w-full h-[83px] bg-[#000] text-[#FFFFFF]'>
      <div className='flex items-center justify-between h-full px-[23px] pt-[40px] pb-[20px]'>
        <Link
          href='https://www.instagram.com/afterdinnerclub.kr'
          target='_blank'
        >
          <InstagramIcon />
        </Link>
        <Link href='/'>
          <Image src='/images/logo.png' width={211} height={32} alt='logo' />
        </Link>
        <ShareButton />
      </div>
    </header>
  );
};

export default Header;
