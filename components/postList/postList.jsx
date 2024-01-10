'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function PostList() {
	const [Posts, setPosts] = useState([]);

	//미션 - 해당 컴포넌트의 li를 링크로 변경해서
	//해당 링크 클릭시 상세 페이지 컴포넌트가 열리면서 클릭한 목록에 대한 데이터가 출력되는 상세페이지 출력
	//필요한 기술 : dynamic routing, next/link, useParams
	useEffect(() => {
		const fetchPosts = async (url) => {
			const data = await fetch(url);
			const result = await data.json();
			console.log(result);
			setPosts(result);
		};

		fetchPosts('https://jsonplaceholder.typicode.com/posts');
	}, []);

	return (
		<ul>
			{Posts.map((post, idx) => {
				if (idx >= 10) return null;
				return (
					<li key={post.id}>
						<Link href={`/post/${post.id}`} prefetch={true}>
							{post.title}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

/* 
	Next에서는 Link 컴포넌트를 이용해서 Router연결시
	해당 Router에 mapping 되어 있는 컴포넌트 데이터를 해당 컴포넌트 페이지에서 쓰이지 않더라고 미리 백단에서 
	prefetch처리함으로 추후 라우터를 클릭했을때 빠른 페이지 전환이 가능하도록 처리

	prefetch기능은 개발버전에서는 확인이 불가하고 npm run build로 빌드 한 뒤 npm run start로 production모드로 구동해야지만 확인 가능

	next 14에서 달라진 prefetching동작 방식
	- 기존 Next13에서는 실제 Link커포넌트 위에 마우스 호버를 해야지 prefetching이 일어난 반면
	새로운 Next14버전에서는 hover하지 않더라도 Link 컴포너트에서 중요한 데이터는 모두 prefetch처리
	- link prefetch={true} 기능 활성화 / prefetch = {false}
*/
