const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "22a15ca6b1d4821d6dd59748f69005b7",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};
export default apiConfig;
