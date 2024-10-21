const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

// CORS middleware
app.use(
  cors({
    origin: process.env.BASE_URL, // разрешаем запросы только от этого источника
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    headers: ["Content-Type", "Authorization"],
  })
);

// Роут для получения products.json
app.get("/products", (req, res) => {
  const filePath = path.join(__dirname, "products.json");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).send("Ошибка при чтении файла");
    }
    res.header("Content-Type", "application/json");
    res.send(data);
  });
});

// Middleware для отдачи файлов из директории image
app.use(
  express.static(path.join(__dirname, "image"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".svg")) {
        res.header("Content-Type", "image/svg+xml");
      }
    },
  })
);
//Проверка запросов
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Error handling для middleware express.static
app.use((err, req, res, next) => {
  if (err.code === "ENOENT") {
    res.status(404).send("Файл не найден");
  } else {
    next(err);
  }
});

// Роут для получения JSON (опционально)
// app.get("/data", (req, res) => {
//   const jsonData = { /* данные */ };
//   res.json(jsonData);
// });

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
