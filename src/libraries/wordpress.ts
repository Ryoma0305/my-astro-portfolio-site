export async function BlogsQuery() {
  const res = await fetch(import.meta.env.WORDPRESS_API_URL);
  const posts = await res.json();
  return posts;
}
