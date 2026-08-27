import { getCollection } from 'astro:content';

export const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const PORTFOLIO_URL = 'https://iam-jimmy.github.io/me/';
export const CONTACT_EMAIL = 'jimmy.work.kr@gmail.com';

export async function getPublishedPosts() {
  const posts = await getCollection('posts', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postUrl(id: string) {
  return `${BASE}/posts/${id}/`;
}

export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}
