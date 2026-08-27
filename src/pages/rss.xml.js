import rss from '@astrojs/rss';
import { getPublishedPosts, postUrl, BASE } from '../utils/posts';

export async function GET(context) {
  const posts = await getPublishedPosts();
  const site = new URL(`${BASE}/`, context.site);
  return rss({
    title: 'Jimmy Kim - Blog',
    description: 'Notes on what I build, break, and learn along the way.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: new URL(postUrl(post.id), context.site).href,
    })),
    customData: '<language>en</language>',
  });
}
