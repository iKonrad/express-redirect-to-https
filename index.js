let httpRedirectServer = express();

// set up a route to redirect http to https
httpRedirectServer.get('*', (request, response) => {
  response.redirect('https://' + request.headers.host + request.url);
});

httpRedirectServer.listen(process.env.PORT || 3001);
httpRedirectServer.on('listening', () => {
  console.log("Listening to redirect http to https");
});
