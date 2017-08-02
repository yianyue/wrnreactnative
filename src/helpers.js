const countWords = (str) => str.trim().split(/\s+/).length;

const getErrorMessage = (error) => {
  if (!error) {
    return 'something went wrong';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error.message && typeof error.message === 'string') {
    return error.message;
  }
};

export {
  countWords,
  getErrorMessage
};
