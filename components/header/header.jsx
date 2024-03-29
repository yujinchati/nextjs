'use client';
import styles from './header.module.scss';
console.log(styles);
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
	const pathname = usePathname();
	return (
		<header className={styles.header}>
			<ul>
				<li>
					<Link href='/' className={pathname === '/' ? styles.on : ''}>
						Main
					</Link>
				</li>
				<li>
					<Link href='/about' className={pathname === '/about' ? styles.on : ''}>
						About
					</Link>
				</li>
				<li>
					<Link href='/gallery' className={pathname === '/gallery' ? styles.on : ''}>
						Gallery
					</Link>
				</li>
				<li>
					<Link href='/post' className={pathname === '/post' ? styles.on : ''}>
						Post
					</Link>
				</li>
			</ul>
		</header>
	);
}
