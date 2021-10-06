export const parseError = (err) => {
  if (err.response) {
    return {
      status: err.response.status,
      error: err.response,
    };
  } else if (err.request) {
    return {
      status: 500,
      error: err.request,
    };
  } else {
    return {
      status: 500,
      error: err.message,
    };
  }
};
