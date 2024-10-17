'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuIcon, XIcon } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import LocaleSwitcher from './locale-switcher';
import { DialogBuyCredit } from '../client/credit/dialog-buycredit';
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
		<DialogBuyCredit />
	  </nav>
	);
  };

export const TogglePhoneMenu: FC = () => {
	const [show, setShow] = useState<boolean>(false);
	
	const toggleShow = () => setShow((s) => !s);

	return (
		<>
			<Button
				onClick={toggleShow}
				size={'icon'}
				variant={'ghost'}
				className={cn('lg:hidden bg-transparent', 'hover:bg-transparent hover:text-primary')}
			>
				<MenuIcon className='size-8' />
			</Button>
			{show && (
				<div className='fixed top-0 left-0 right-0 shadow-lg z-50 bg-card text-secondary-foreground'>
					<div className='flex justify-between items-center px-5 py-3'>
						<Link href={'/'}>
							TOSSE
						</Link>
						<Button
							onClick={toggleShow}
							size={'icon'}
							className={cn(
								'lg:hidden bg-transparent text-muted-foreground',
								'hover:bg-transparent hover:text-primary'
							)}
						>
							<XIcon className='size-6' />
						</Button>
					</div>
					<NavBar className="grid grid-cols-1 gap-4 z-10 p-4" />
				</div>
			)}
		</>
	);
};

