const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const port = 3000;

// upload song
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.mimetype.startsWith("audio/")) {
      callback(null, "uploads/audio");
    }
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });
module.exports = upload;


// Set up multer storage engine
const storage_playlist = multer.diskStorage({
  destination: (req, file, callback) => {
    if (file.mimetype.startsWith("image/")) {
      callback(null, "uploads/image");
    }
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    callback(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});
const upload_playlist = multer({ storage: storage_playlist });
module.exports = upload_playlist;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

// static files
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //upload folder for songs

// routers
const songRoutes = require("./router/songRoutes");
// const playlistRoutes = require('./router/playlistRoutes')
app.use("/", songRoutes);
// app.use('/playlist', playlistRoutes)

// port
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
