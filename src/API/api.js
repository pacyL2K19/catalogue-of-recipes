import API from '../config/config';

/**
 * @description To fetch meals from a category selected in the dropdown
 * @param {*} category: string
 */
const fetchMeals = async (category) => {
  const url = `${API.BASE_URL}/${API.FILTER_ENDPOINT}/?c=${category}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};

/**
 * @description To fetch a specific meal by its ID.
 * @param {*} id: number
 */
const fetchMeal = async (id) => {
  const url = `${API.BASE_URL}/${API.LOOKUP_ENDPOINT}/?i=${id}`;
  const response = await fetch(url);

  if (response.status === 200) {
    const data = await response.json();
    return data;
  }

  throw Error(404);
};

export { fetchMeals, fetchMeal };
