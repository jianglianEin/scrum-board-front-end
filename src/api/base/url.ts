const _restApiUrl = process.env.REACT_APP_REST_API_URL;
if (!_restApiUrl) {
  throw new Error("'REACT_APP_REST_API_URL' not set!");
}

export const restApiUrl = _restApiUrl;

const _graphqlApiUrl = process.env.REACT_APP_API_URL;
if (_graphqlApiUrl === undefined) {
  throw new Error("REACT_APP_API_URL is not set");
}

export const graphqlUrl = _graphqlApiUrl;
