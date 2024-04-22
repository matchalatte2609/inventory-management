import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './msalConfig';

const msalInstance = new PublicClientApplication(msalConfig);

export const loginRequest = () => {
	msalInstance.loginRedirect({
		scopes: ['User.Read', 'openid', 'profile', 'email'],
	});
};

export const handleLogout = () => {
	msalInstance.logoutRedirect('/');
};
