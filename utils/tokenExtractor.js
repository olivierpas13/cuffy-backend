export const tokenExtractor = (request, response, next) => {
    try {
      const authorization = request.get('authorization');
      if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        const token = (authorization.substring(7));
        request.token = token;
      }
      next();
    } catch (error) {
      next(error);
    }
  };