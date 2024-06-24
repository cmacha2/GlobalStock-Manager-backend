const sdk = require('@api/clover-platform');

module.exports = (token) => {
  sdk.auth(token);
  return sdk;
};
