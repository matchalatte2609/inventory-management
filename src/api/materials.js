import axios from 'axios';

const backendUrl = process.env.BACKEND_URL || 'http://localhost:5002';

const materialsApi = {
	getAllProductsMaterials: () => {
		// Returns the promise from the axios.get call
		return axios
			.get(`${backendUrl}/materials`)
			.then((response) => {
				// You would typically return the data here so the calling function can use it
				return response.data;
			})
			.catch((error) => {
				// Handle errors here, for example, by logging or displaying a message
				console.error('There was an error fetching the products:', error);
			});
	},
	getProductMaterialsById: (id) => {},
};

export default materialsApi;
