module.exports = {
  development: {
    API_BASE: JSON.stringify('https://api-staging.votemate.us'),
    GOOGLE_MAPS_API_KEY: JSON.stringify('AIzaSyCMCxPvABPSovm-bhezhEczBPQcZ3OtOVs'),
  },
  production: {
    API_BASE: JSON.stringify('https://api.votemate.us'),
    GOOGLE_MAPS_API_KEY: JSON.stringify('AIzaSyDpCoMETST3psVqsBTqiDtNYqgYVX6Pq54'),
  },
  test: {
    API_BASE: JSON.stringify('https://api-staging.votemate.us'),
    GOOGLE_MAPS_API_KEY: JSON.stringify('AIzaSyCMCxPvABPSovm-bhezhEczBPQcZ3OtOVs'),
  },
};
