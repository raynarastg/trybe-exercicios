const validaDescricao = (req, res, next) => {
  const { description : { rating, difficulty, createdAt} } = req.body;
  const array = [rating, difficulty, createdAt];
  if (array.includes(undefined)) {
    const index = array.indexOf(array.includes(undefined))
    return res.status(400).json({ "message": `O campo ${array[index]} é obrigatório`});
  }
  next();
}

module.exports = validaDescricao;