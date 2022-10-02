const express = require('express');
const app = express();
const validaNome = require('./middlewares/name-middleware');
const validaPreco = require('./middlewares/price-middleware');
const validaDescricao = require('./middlewares/description-middleware');
const validaCreatedAt = require('./middlewares/createdAt-middleware');
const validaRating = require('./middlewares/rating-middleware');
const validaDifficulty = require('./middlewares/createdAt-middleware');
const obj = { validaCreatedAt, validaDescricao, validaNome, validaPreco, validaRating, validaDifficulty };
const token = require('./utils/token');

app.use(express.json());
app.post('/activities', ...obj, (_, res) => {
 return res.status(201).json({ "message": "Atividade cadastrada com sucesso!"})
})

app.post('/signup', (_, res) => {
  const { email, password, name, phone } = req.body;
  const arrayInfos = [email, password, name, phone];
  if (arrayInfos.includes(undefined)) {
    return res.status(401).json({"message": "Campos ausentes!"})
  }
return res.status(200).json({ token })
})

module.exports=app