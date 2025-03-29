function status(request, response) {
  response.status(200).json({ chave: "tudo certo por aqui" });
}

export default status;
