import { graphConfig } from './msalConfig.js';
import axios from 'axios';
/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
export const callMsGraph = async (accessToken) => {
	const headers = new Headers();
	const bearer = `Bearer ${accessToken}`;

	headers.append('Authorization', bearer);

	const options = {
		method: 'GET',
		headers: headers,
	};

	// return fetch(graphConfig.graphMeEndpoint, options)
	// 	.then((response) => response.json())
	// 	.catch((error) => console.log(error));

	return axios
		.get(graphConfig.graphMeEndpoint, options)
		.then((response) => response.json())
		.catch((error) => console.log(error));
};
