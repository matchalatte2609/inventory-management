import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5002';

const shapesApi = {
	getProductShapesById: (id) => {
		return axios
			.get(`${backendUrl}/shapes/${id}`)
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				// Handle errors here, for example, by logging or displaying a message
				console.error(
					`Error fetching product shapes details for product id ${id}`,
					error
				);
			});
	},
};

export default shapesApi;
