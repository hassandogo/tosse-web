'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import LocaleSwitcher from './locale-switcher';
import { DialogBuyCredit } from '../client/credit/dialog-buycredit';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type NavbarProps = {
	className?: string
}
export const NavBar = ({className }: NavbarProps) => {
	const tabs = [
	  { id: "1", label: "Comment ça fonctionne", href: "/#functioning" },
	  { id: "2", label: "Credit disponible", href: "/#availability" },
	  { id: "3", label: "Forfaits", href: "/forfaits" },
	  { id: "4", label: "Contact", href: "/contact" },
	];
	return (
	  <nav className={cn("lg:col-start-2 lg:col-span-5 hidden lg:flex gap-4 lg:gap-6 lg:justify-end lg:items-center", className)}>
		<DialogBuyCredit className='max-w-44 lg:max-w-full h-12 lg:h-auto text-lg lg:text-sm' />
		{tabs.map((tab) => (
		  <Link
			href={tab.href}
			key={tab.id}
			className="hover:bg-muted p-2 lg:p-0 lg:hover:bg-transparent lg:relative lg:hover:after:absolute lg:after:bottom-[-2rem] lg:after:left-0 lg:after:content-[''] lg:after:w-full lg:after:h-1 lg:after:bg-[#ff9d00]"
		  >
			{tab.label}
		  </Link>
		))}
		<LocaleSwitcher />
	  </nav>
	);
  };

export const TogglePhoneMenu: FC = () => {
	return (
		<div className='lg:hidden'>
        <Sheet>
          <SheetTrigger asChild>
			<Button
				size={'icon'}
				variant={'ghost'}
				className={cn('lg:hidden bg-transparent', 'hover:bg-transparent hover:text-primary')}
			>
				<MenuIcon className='size-8' />
			</Button>
          </SheetTrigger>
          <SheetContent side={'left'}>
            <SheetHeader>
              <SheetTitle><Link href={'/'}>TOSSE</Link></SheetTitle>
            </SheetHeader>
			<NavBar className="grid grid-cols-1 gap-4 py-4" />
          </SheetContent>
        </Sheet>
		</div>
	);
};





