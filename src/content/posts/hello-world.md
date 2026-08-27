---
title: "Hello, World"
description: "이 블로그가 어떻게 만들어졌고, 글은 어떻게 쓰는지"
pubDate: 2026-08-27
tags: [meta, astro]
---

포트폴리오 옆에 글 쓸 자리를 하나 마련했다. 서버, 인프라, 그리고 가끔 딴 길로 새는 이야기를 적을 예정.

## 어떻게 만들었나

- [Astro](https://astro.build) 정적 빌드, 마크다운 콘텐츠 컬렉션
- GitHub Actions로 빌드해서 GitHub Pages `/blog`에 배포
- 디자인은 [포트폴리오](https://iam-jimmy.github.io/me/)와 같은 결 — SUIT 폰트, 얇은 웨이트, 회색 톤, 점선 구분선

## 글 쓰는 법

`src/content/posts/` 아래에 마크다운 파일을 하나 추가하면 끝. 파일명이 URL이 된다 (`hello-world.md` → `/blog/posts/hello-world/`).

```md
---
title: "글 제목"
description: "목록과 RSS에 노출되는 한 줄 요약"
pubDate: 2026-08-27
updatedDate: 2026-09-01   # 선택
tags: [nestjs, kubernetes] # 선택
draft: true                # 선택 — dev에서만 보이고 배포에선 제외
---
```

코드 블록은 이렇게 나온다.

```ts
export function postUrl(id: string) {
  return `${BASE}/posts/${id}/`;
}
```

> 인용문은 이렇게.

`main`에 push하면 1~2분 뒤 반영된다.
