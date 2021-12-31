const baseURL = "https://codealo-commerce-cms.onrender.com";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${baseURL}/categories`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${baseURL}/products`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
export const fetchProduct = async (slug) => {
  try {
    const response = await fetch(`${baseURL}/products/${slug}`);
    const data = await response.json();
    return data;
  } catch (err) {
    return null;
  }
};

export const fetchImageURL = (url) => {
  return `${baseURL}${url}`;
};
