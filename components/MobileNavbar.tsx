'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image 
            src='/icons/hamburger.svg'
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side='left' className="border-none bg-white">
          <SheetClose asChild>
            <Link   className='flex cursor-pointer items-center gap-1 px-4'href='/'>
              <Image
                src='/icons/logo.svg'
                width={34}
                height={34}
                alt='Top Bank'
                className='size-[24px] max-xl:size-14'
              />
              <h1 className='text-26 text-black-1 font-ibm-plex-serif font-bold'>Top Bank</h1>
            </Link>
          </SheetClose>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
                    return (
                      <SheetClose asChild key={item.route}>
                        <Link 
                          href={item.route} 
                          key={item.label}
                          className={`mobilenav-sheet_close ${isActive && 'bg-bank-gradient'}`}
                        >
                          <div className='relative size-6'>
                            <Image 
                              src={item.imgURL}
                              alt={item.label}
                              width={20}
                              height={20}
                              className={`${isActive && 'brightness-[3] invert-0'}`}
                            />
                          </div>
                          <p className={`text-16 font-semibold text-black-2 ${isActive && 'text-white'}`}>{item.label}</p>
                        </Link>
                      </SheetClose>
                    )
                  }
                )}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNavbar