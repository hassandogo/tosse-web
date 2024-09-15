import { TypographyH1, TypographyP } from '@/components/ui/typographies';
import { FC } from 'react';
import { AppContainer } from '../global/appContainer';
import { Spacer } from '../global/spacer';
import Header from '../global/header';

export const HomeBanner: FC = () => {
	return (
		<section className='home-banner relative z-0'>
			<div className='bg-black/50 -z-50 absolute inset-0' />
			<Header transparentBg={false} />
			<AppContainer className='pb-20'>
				<Spacer />
				<TypographyH1 className='mx-auto max-w-3xl text-center text-primary-foreground'>
					Vous avez besoin d’un <span className='text-primary'>service rapide</span> et de{' '}
					<span className='text-primary'>qualité</span> offert par des{' '}
					<span className='text-primary'>professionnels</span> ?
				</TypographyH1>
				<Spacer tooSmall />
				<TypographyP className='mx-auto max-w-3xl text-center text-primary-foreground'>
					Tosse est la solution idéal pour vous, trouver un professionnel dans le metier dont vous avez
					besoin des services n’aurai jamais été aussi facile.
				</TypographyP>
				<Spacer small />
				{/* <div className='max-w-3xl mx-auto'>
					<HomeSearchForm />
				</div>
				<Spacer large /> */}
			</AppContainer>
		</section>
	);
};
