const express = require("express");
const app = express();

// NOTA: En express EL ORDEN de middlewares/rutas es importante
// .use() se utiliza para registrar un "middleware"
app.use(function (request, response, next) {
  console.log(request.url);
});

app.get("/", function (request, response) {
	response.send("Hello World");
});

app.listen(8080, function () {
	console.log("> Escuchando puerto 8080");
});