'use client'

import { sidebarLinks } from '@/constants';
//import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className='sidebar'>
        <nav className='flex flex-col gap-4'>
            <Link   className='flex mb-12 cursor-pointer items-center gap-2'href='/'>
                <Image
                    src='/icons/logo.svg' 
                    width={34}
                    height={34}
                    alt='Top Bank'
                    className='size-[24px] max-xl:size-14'
                />
                <h1 className='sidebar-logo'>Top Bank</h1>
            </Link>
            {sidebarLinks.map((item) => {
              const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                return (
                  <Link 
                    href={item.route} 
                    key={item.label}
                    className={`sidebar-link ${isActive && 'bg-bank-gradient'}`}//{isActive ?'bg-bank-gradient sidebar-link':'sidebar-link'}//{cn('sidebar-link', {'bg-bank-gradient': isActive})}
                  >
                    <div className='relative size-6'>
                      <Image 
                        src={item.imgURL}
                        alt={item.label}
                        fill
                        className={`${isActive && 'brightness-[3] invert-0'}`}
                      />
                    </div>
                    <p className={`sidebar-label ${isActive && '!text-white'}`}>{item.label}</p>
                   
                  </Link>
                )
              }
            )}
          USER
        </nav>
        FOOTER
    </section>
  )
}

export default Sidebar;