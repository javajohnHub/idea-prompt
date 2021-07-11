const express = require('express');
const cors = require('cors');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const morgan = require('morgan');
const helmet = require('helmet');
const { join } = require('path');

const app = express();

const port = process.env.PORT || 4200;

app.use(morgan('dev'));

app.use(
  helmet({
    contentSecurityPolicy: {
      // reportOnly: true,
      directives: {
        'default-src': ["'self'"],
        'connect-src': ["'self'", 'https://*.auth0.com', process.env.appUri],
        'frame-src': ["'self'", 'https://*.auth0.com'],
        'base-uri': ["'self'"],
        'block-all-mixed-content': [],
        'font-src': ["'self'", 'https:', 'data:'],
        'frame-ancestors': ["'self'"],
        'img-src': ["'self'", 'data:', '*.gravatar.com'],
        'style-src': ["'self'", 'https:', "'unsafe-inline'"],
      },
    },
  })
);

app.use(
  cors({
    origin: process.env.appUri,
  })
);

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.domain}/.well-known/jwks.json`,
  }),

  audience: process.env.audience,
  issuer: `https://${process.env.domain}/`,
  algorithms: ['RS256'],
});

app.get('/api/check', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});
app.get('/authorize', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!',
  });
});
app.use(express.static(join(__dirname, 'dist/login-demo')));

app.listen(port, () => console.log(`App server listening on port ${port}`));
