// Check from req.session
const checkUserId = (check) => {
  if (check.userId) {
    return true;
  }
  return false;
};

export default checkUserId;
