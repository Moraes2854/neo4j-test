

function errorHandler (error, req, res, next) {  
  if ( !error ) next();

  let statusCode = error.statusCode || error.code || 500;
  let errorMessage = error.message || 'Internal server error [check server logs]';
  const id = new Date().getTime();
  return res.status( statusCode ).json({ 
    error: errorMessage,
    id,
    statusCode,
    status: 'failure'
  });
}

module.exports = {
  errorHandler
};
