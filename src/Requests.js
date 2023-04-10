const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
	requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
	requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
	requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
	requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult`,
	requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}=<<api_key>>&language=en-US`,
};

console.log("Hey here it is" + API_KEY);
export default requests;
