import type { CollectionEntry } from "astro:content";

const getSortedPosts = (posts: any[]) =>
  posts
    .filter(data => !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.published_at).getTime() / 1000) -
        Math.floor(new Date(a.published_at).getTime() / 1000)
    );

export default getSortedPosts;
