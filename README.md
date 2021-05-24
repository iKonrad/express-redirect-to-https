# express-redirect-to-https

A simple express server that its sole purpose is to redirect all the incoming traffic to https.

If you're running a Node app and don't want to set up the entire Nginx server just to add an SSL certificate, then this app will be handy.

## Usage

1. Pull the repo
2. Install dependencies `npm i`
3. Start the application `npm start`

By default, the app will listen on `3001` port. If you want to specify a different port, just set the `PORT` environment variable: `PORT=3002 npm start`
