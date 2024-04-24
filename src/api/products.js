import axios from 'axios';

const backendUrl = process.env.BACKEND_URL || 'http://localhost:5002';

const productsApi = {
	getAllProducts: () => {
		console.log(`debug: ${process.env.BACKEND_URL}`);
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
	getProductById: (id) => {
		return axios
			.get(`${backendUrl}/products/${id}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				// Handle errors here, for example, by logging or displaying a message
				console.error(
					`Error fetching product details for product id ${id}`,
					error
				);
			});
	},
};

export default productsApi;
