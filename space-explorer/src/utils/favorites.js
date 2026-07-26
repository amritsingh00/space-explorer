export const getFavorites = () => {
  return JSON.parse(localStorage.getItem("favorites")) || [];
};

export const saveFavorite = (picture) => {
  const favorites = getFavorites();

  const exists = favorites.some(
    (item) => item.date === picture.date
  );

  if (exists) {
    alert("Already in Favorites ❤️");
    return;
  }

  favorites.push(picture);

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

  alert("Saved Successfully ❤️");
};

export const removeFavorite = (date) => {
  const favorites = getFavorites().filter(
    (item) => item.date !== date
  );

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );
};

export const clearFavorites = () => {
  localStorage.removeItem("favorites");
};