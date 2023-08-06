import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";
import { SITE } from "@config";
import { getArticles } from "@utils/getArticles";

export async function get() {
  const sortedPosts = await getArticles();
  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map((data: any) => ({
      link: `posts/${data.slug}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.published_at),
    })),
  });
}
