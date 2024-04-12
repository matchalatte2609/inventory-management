import axios from 'axios';

const backendUrl = process.env.BACKEND_URL || 'http://localhost:5002';

const productsApi = {
	getAllProducts: () => {
		// Returns the promise from the axios.get call
		return axios
			.get(`${backendUrl}/products`)
			.then((response) => {
				// You would typically return the data here so the calling function can use it
				return response.data;
			})
			.catch((error) => {
				// Handle errors here, for example, by logging or displaying a message
				console.error('There was an error fetching the products:', error);
			});
	},
	getProductById: (id) => {},
};

export default productsApi;
