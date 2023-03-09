npm install --save-dev nyc coveralls

añadir en package.json:
"coverage": "nyc npm test",

npm run coverage