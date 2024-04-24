import { LogLevel } from '@azure/msal-browser';
// import dotenv from 'dotenv';
// dotenv.config();

export const msalConfig = {
	auth: {
		clientId:
			process.env.MSAL_CLIENT_ID || '21bbb4bf-c6be-4f92-8828-54768bd663e0',
		authority:
			process.env.MSAL_TENANT_URL ||
			'https://login.microsoftonline.com/d5ecd414-895b-4c83-8cff-7995443859fe',
		redirectUri: process.env.MSAL_REDIRECT_URI || '/',
	},
	cache: {
		cacheLocation: 'sessionStorage', // This configures where your cache will be stored
		storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
	},
	system: {
		loggerOptions: {
			loggerCallback: (level, message, containsPii) => {
				if (containsPii) {
					return;
				}
				switch (level) {
					case LogLevel.Error:
						console.error(message);
						return;
					case LogLevel.Info:
						console.info(message);
						return;
					case LogLevel.Verbose:
						console.debug(message);
						return;
					case LogLevel.Warning:
						console.warn(message);
						return;
					default:
						return;
				}
			},
		},
	},
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
	scopes: ['User.Read'],
};

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const graphConfig = {
	graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me', //e.g. https://graph.microsoft.com/v1.0/me
};