// rename this file to `aws-config.js` and add in your credentials

const awsconfig = {
  Auth: {
    region: "XX-XXXX-X",
    userPoolId: "XX-XXXX-X_AaBC1bcde",
    userPoolWebClientId: "12ab34cdefg5h6i7jk8901lmno",
    identityPoolId: "XX-XXXX-X:3a601c64-7f88-4676-8552-c6fe5a1a4d1c",
  },
  API: {
    endpoints: [
      {
        name: "apiName",
        endpoint: "https://abcdefghij.execute-api.XX-XXXX-X.amazonaws.com/dev/",
        region: "XX-XXXX-X",
      },
    ],
  },
  ssr: true,
};

export default awsconfig;
