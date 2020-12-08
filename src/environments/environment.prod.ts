export const environment = {
    production: true,
    apiHost: 'https://duy-nginx.herokuapp.com',
    apiPort: parseInt(<string>process.env.PORT, 10) || 443,
    shopApiPath: 'shop-api',
    baseHref: '/',
    tokenMethod: 'cookie',
};
