const express = require('express');

let httpRedirectServer = express();

// set up a route to redirect http to https
httpRedirectServer.get('*', (request, response) => {
  response.redirect('https://' + request.headers.host + request.url);
});

const port = process.env.PORT || 3001;

httpRedirectServer.listen(port, () => {
  console.log("Listening to redirect http to https on PORT: ", port);
});
