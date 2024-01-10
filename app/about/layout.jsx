import AboutMenu from '@/components/header/aboutMenu/aboutMenu';

export const generateMetadata = () => {
	return {
		title: 'About Page',
		description: 'Infomation of ABC Company including President, crew info',
	};
};

export default function Layout({ children }) {
	return (
		<div className='layout'>
			<AboutMenu />
			{children}
		</div>
	);
}
