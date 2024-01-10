import styles from './gallery.module.scss';

//next에서는 기본적으로 app폴더 안쪽에 폴더명을 라우터 이름으로 설정하고 그 안쪽에 있는 page.jsx 페이지를 해당 라우터 명에 연결
export default function Gallery() {
	return (
		<main className={styles.gallery}>
			<h1>gallery list</h1>
		</main>
	);
}
export const generateMetadata = () => {
	return {
		title: 'Gallery Page',
		description: 'Infomation of ABC Company including President, crew info',
	};
};
