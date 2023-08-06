const { DEV_API_KEY, DEV_TO_API_URL } = import.meta.env;

export async function getArticles() {
  const res = await fetch(DEV_TO_API_URL + "articles/me/published", {
    headers: {
      "api-key": DEV_API_KEY,
    },
  });
  const data = await res.json();
  const articles = data;

  return articles;
}
