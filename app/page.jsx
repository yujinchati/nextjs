import styles from './main.module.scss';
import clsx from 'clsx';
import pic from './pic.jpg';
import pic2 from '@/public/pic.jpg';
import Image from 'next/image';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Main Page</h1>
			<h1>main 페이지</h1>
			<div className={clsx(styles.pic)}>
				<img src={pic.src} alt='image' />
			</div>
			<div className={clsx(styles.pic)}>
				<Image src={pic2} alt='image' fill quality={100} sizes='(min-width:800px) 50vw, 100vw' priority />
				{/* 속성이 fill next가 크기 산정이 어려우므로 */}
			</div>
		</main>
	);
}

/* NEXT에서 Image 사용해야 하는 이유 
0. LCP(largest Contentfull Paint) : 웹페이지 로딩속도 측정시 컨텐츠에 있는 이미지나 영상같이 용량이 큰 소스용량까지 로딩속도 측정에 포함시키는 방식
(image컴포넌트는 lcp성능점수를 높이기 위함)
1. 원본 빌드시에 import 한다음에 브라우저 킈에 따른 이미지 용량을 자동 최적화 시켜서 
2. 클라이언트 요청이 들어올떄 미리 최적화 시킨 이미지를 렌더링
3. quality 속성으로 직접 최적화 가능 0-100(default 75)
4. priority 속성을 이용하여 빨리 출력해야 되야되는 이미지에 우선순위를 부여 가능
5. 기본적으로 iamge컴포넌트 lazy loading 기능을 적용하는데 priority 적용시 lazy loading 기능은 강제 해제됨(주의)

lazyloading이란?
뷰포트에 보이는 이미지만 랜더링을 하고 문서엔 있지만 viewport에 보이지 않으면 로딩을 미룸 
이미지의 크기가 고정값이 아닐때에는 fill 속성을 적용(연결되어있는 style의 넓이,높이를 판단해서 최적화)

fill 속성 적용시 추가적으로 하면 좋은 속성
placeholder="blur"로 지정시(로컬이미지일때) 미리 용량은 blur 이미지를 먼저 출력하고 전체 이미지 렌더링 완료시 변경처리
(주의점 : placeholder 지정시 lazy-loading 기능 제거됨, priority 적용시에는 placeholder동작 안됨)
처음 마운트 화면에 보일 큰 이미지에 적용할 수 있는 2가지 옵션(1.priority 지정 or 2-placeholder 지정)


*/
