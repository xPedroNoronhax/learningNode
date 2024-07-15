const fs = require("fs");

const requestHandler = (req, res) => {
    // const url = req.url; // Obtém a URL da requisição
  // const method = req.method; // Obtém o método da requisição (GET, POST, etc.)
  
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    // Se a URL for "/", retorna o formulário HTML
    res.write("<html>"); // Inicia o documento HTML
    res.write("<head><title>Enter Message</title><head>"); // Adiciona o título da página
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    ); // Adiciona um formulário HTML com um campo de texto e um botão de envio
    res.write("</html>"); // Fecha o documento HTML
    return res.end(); // Finaliza a resposta e envia para o cliente
  }

  if (url === "/message" && method === "POST") {
    // Se a URL for "/message" e o método for POST
    const body = []; // Cria um array para armazenar os chunks de dados recebidos
    req.on("data", (chunk) => {
      // Evento acionado quando um chunk de dados é recebido
      console.log(chunk); // Loga o chunk de dados no console
      body.push(chunk); // Adiciona o chunk ao array `body`
    });

    return req.on("end", () => {
      // Evento acionado quando todos os chunks de dados foram recebidos
      const parsedBody = Buffer.concat(body).toString(); // Concatena todos os chunks em um buffer e converte para string
      const message = parsedBody.split("=")[1]; // Extrai a mensagem do corpo da requisição

      fs.writeFile("message.txt", message, (err) => {
        // Escreve a mensagem em um arquivo chamado 'message.txt'
        res.statusCode = 302; // Define o status de redirecionamento (302)
        res.setHeader("Location", "/"); // Define o cabeçalho de redirecionamento para "/"
        return res.end(); // Finaliza a resposta e redireciona o cliente
      });
    });
  }

  // Para todas as outras URLs, retorna uma página HTML padrão
  res.setHeader("Content-Type", "text/html"); // Define o tipo de conteúdo como HTML
  res.write("<html>"); // Inicia o documento HTML
  res.write("<head><title>My First Page</title><head>"); // Adiciona o título da página
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>"); // Adiciona um corpo com uma mensagem
  res.write("</html>"); // Fecha o documento HTML
  res.end(); // Finaliza a resposta e envia para o cliente
};

module.exports = {
    handler : requestHandler,
    someText: 'toca no calleri'
}