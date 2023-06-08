const notFound = (res, message) => {
    return res.status(404).json({ error: message });
  };
  
  module.exports = { notFound };