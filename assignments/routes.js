const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Assignement</title></head>");
    res.write(
      "<body><h1>Hello, I am Pedro. I'm gonna be a backend developer soon</h1><br><form action='/create-user'method='POST'><input type='text'name='username'><button type='submit'>Send</button></form> </body>"
    );

    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Assignement</title></head>");
    res.write(
      "<body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      const username = parseBody.split("=")[1];
      console.log(username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }

  
  
};

module.exports = {
  handler: requestHandler,
};
