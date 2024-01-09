import styles from './main.module.scss';
console.log(styles);

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>main 페이지</h1>
		</main>
	);
}
