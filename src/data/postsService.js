import posts from "./posts.json";

const allPosts = posts.posts;

export const getAllPosts = () => allPosts;

export const getFeaturedPosts = () => allPosts.slice(0, 4);

export const getLatestPosts = () =>
  allPosts.filter((p) => p.id >= 4 && p.id <= 6);

export const getCategories = () => [
  "جميع المقالات",
  ...posts.categories.map((c) => c.name),
];

export const getCategoriesData = () => posts.categories;

export const getTeamMembers = () =>
  allPosts.map((post) => {
    return post.author;
  });

export const getPostsByCategory = (category) => {
  if (!category || category === "جميع المقالات") {
    return allPosts;
  }
  return allPosts.filter((p) => p.category === category);
};

// Filter posts helper
export const getFilteredPosts = (
  category = "جميع المقالات",
  searchQuery = "",
) => {
  let result = getPostsByCategory(category);

  const query = searchQuery.trim().toLowerCase();
  if (query) {
    result = result.filter(
      (p) =>
        (p.title && p.title.toLowerCase().includes(query)) ||
        (p.excerpt && p.excerpt.toLowerCase().includes(query)),
    );
  }

  return result;
};

// Array pagination helper
export const paginate = (items, page = 1, perPage = 6) => {
  const totalPages = Math.ceil(items.length / perPage);
  const validPage = Math.max(1, Math.min(page, totalPages || 1));
  const startIndex = (validPage - 1) * perPage;
  const data = items.slice(startIndex, startIndex + perPage);

  return {
    data,
    totalPages,
    currentPage: validPage,
    hasPagination: totalPages > 1,
  };
};
export const getPost = (slug) => allPosts.find((p) => p.slug === slug);
// Arabic date formatter
export const formatArabicDate = (date) => {
  try {
    return new Intl.DateTimeFormat("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
};

const getThreeRandomNum = (length) => {
  let randoms = [];

  for (let i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * length);

    if (randoms.includes(r)) {
      i--;
      continue;
    }

    randoms.push(r);
  }

  return randoms;
};

export const getThreeRandomPostsByCategory = (category) => {
  const posts = getPostsByCategory(category);

  const randomIndexes = getThreeRandomNum(posts.length);

  return randomIndexes.map((index) => posts[index]);
};
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
export const getAllLinks = () => {
  return posts.siteInfo.social;
};
