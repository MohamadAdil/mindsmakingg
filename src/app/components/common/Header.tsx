import Image from 'next/image';
import Link from 'next/link';
import { FaBars, FaCaretDown } from 'react-icons/fa';

const navItems = [
  { href: '/about-us', label: 'About Us' },
  { href: '/pregnancy', label: 'Pregnancy' },
  { href: '/development-stages', label: 'Development Stages' },
  { href: '/parenting', label: 'Parenting' },
  { href: '/healthy-kids', label: 'Healthy Kids' },
  { href: '/trending', label: 'Trending' },
  { href: '/gear-&-products', label: 'Gear & Products' },
  { href: '/tools-&-resources', label: 'Tools & Resources' }
];

const Header = () => {
  return (
    <header className="bg-white border-b border-[#E5E5E5]">
      <nav className="container mx-auto px-4 flex flex-col gap-3 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center mr-3">
            <button className="lg:hidden">
              <FaBars className="text-pry text-2xl" />
            </button>
            <Link href="/">
              <Image
                alt="website logo"
                width={96}
                height={48}
                src="/images/logo.webp"
                priority
                className="ml-2 md:ml-0 object-contain w-[73px] h-[36px] sm:w-[73px] sm:h-[36px] md:w-[96px] md:h-[48px]"
              />
            </Link>
          </div>
          <div className="hidden lg:block relative mx-auto">
            <ul className="flex justify-evenly gap-4">
              {navItems.map((item) => (
                <li key={item.href} className="relative">
                  <Link href={item.href} className="text-[13px] lg:text-[13px] xl:text-[15px] font-medium leading-[24px] tracking-[-0.02em] text-[#1F2421] capitalize group flex items-center gap-1">
                    {item.label}
                    <FaCaretDown className="mt-0.5 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 items-center sm:flex-row-reverse">
            <Link href="/join">
              <button className="px-4 py-2 md:px-6 md:py-3 rounded-full font-medium border border-pry hover:text-white text-pry hover:bg-pry">
                Join
              </button>
            </Link>
            <Link href="/login">
              <button className="px-4 py-2 md:px-6 md:py-3 rounded-full font-medium bg-pry text-sec hover:bg-pry/90 transition-all duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;