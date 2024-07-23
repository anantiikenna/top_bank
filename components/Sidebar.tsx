'use client'

import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();
  return (
    <section className=''>
        <nav className='flex flex-col gap-4'>
            <Link   className='mb-12 cursor-pointer items-center gap-2'href='/'>
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
              const isActive = pathname === item.route || pathname.startsWith('${item.route}/')
                return (
                  <Link 
                    href={item.route} 
                    key={item.label}
                    className={isActive ?'bg-bank-gradient sidebar-link':'sidebar-link'}//{cn('sidebar-link', {'bg-bank-gradient': isActive})}
                  >
                    {item.label}
                  </Link>
                )
              }
            )}

        </nav>
    </section>
  )
}

export default Sidebar