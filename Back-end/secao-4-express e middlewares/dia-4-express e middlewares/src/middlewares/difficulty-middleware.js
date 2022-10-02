const validaDifficulty = (req, res, next) => {
  const { description: { difficulty } } = req.body;
  const arrayValores = ['Fácil', 'Médio', 'Difícil'];
  if (!arrayValores.includes(difficulty)) {
    return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
  next();
}

module.exports = validaDifficulty;