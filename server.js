const express = require("express");

const app = express();

const PORT = 3000;

const fs = require("fs"); // this engine requires the fs module like we did Saturday
app.engine("madeline", (filePath, options, callback) => {
  // define the view engine called hypatia
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content
      .toString()
      .replace("#title#", "<title>" + options.title + "</title>")
      .replace("#message#", "<h1>" + options.message + "</h1>")
      .replace("#content#", "<h2>" + options.content + "</h2>")
      .replace("#image#", "<img src=" + options.image + "/>");
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // specify the views directory
app.set("view engine", "madeline"); // register the hypatia view engine

app.get("/", (req, res) => {
  res.render("template", {
    title: "Avatar: The Last Airbender",
    message: "Avatar: The Last Airbender",
    content: "Characters",
    image:
      "https://sportshub.cbsistatic.com/i/2021/04/09/f5d5c941-a08e-4dd7-9085-581126241fa3/avatar-the-last-airbender-the-future-1231966.jpg?width=1200",
  });
});

// 1
app.get("/Aang", (req, res) => {
  res.render("template", {
    title: "Aang",
    message: "Avatar: The Last Airbender",
    content: "Aang",
    image: "https://media.tenor.com/lP-4bk-owRsAAAAC/aang-atla.gif",
  });
});

// 2
app.get("/Katara", (req, res) => {
  res.render("template", {
    title: "Katara",
    message: "Avatar: The Last Airbender",
    content: "Katara",
    image:
      "https://www.seekpng.com/png/detail/157-1576126_21-avatar-the-last-airbender-katara-costume.png",
  });
});

// 3
app.get("/Toph", (req, res) => {
  res.render("template", {
    title: "Toph Beifong",
    message: "Avatar: The Last Airbender",
    content: "Toph Beifong",
    image:
      "https://images.unsplash.com/photo-1615591292724-2e5017d22542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
});

// 4
app.get("/Sokka", (req, res) => {
  res.render("template", {
    title: "Sokka",
    message: "Avatar: The Last Airbender",
    content: "Sokka",
    image:
      "https://images.unsplash.com/photo-1615591292724-2e5017d22542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
});

// 5
app.get("/Zuko", (req, res) => {
  res.render("template", {
    title: "Zuko",
    message: "Avatar: The Last Airbender",
    content: "Zuko",
    image:
      "https://images.unsplash.com/photo-1615591292724-2e5017d22542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
});

//
app.get("//", (req, res) => {
  res.render("content", {
    title: "The Legend of Korra",
    message: "The Legend of Korra",
    content: "Characters",
    image:
      "https://images.wallpapersden.com/image/download/avatar-the-legend-of-korra-hd_bG1qZWuUmZqaraWkpJRobWllrWdma2U.jpg",
  });
});

// 6
app.get("//Korra", (req, res) => {
  res.render("content", {
    title: "Korra",
    message: "The Legend of Korra",
    content: "Korra",
    image:
      "https://imageio.forbes.com/specials-images/imageserve/5f3bf6a73e141846b057572b/The-Legend-of-Korra/960x0.jpg?format=jpg&width=960",
  });
});

// 7
app.get("//Mako", (req, res) => {
  res.render("content", {
    title: "Mako",
    message: "The Legend of Korra",
    content: "Mako",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBMVgihCSqZ_gLy_VULZk4g84ghAVCe7ZjO2awVF5XPHDTPtJpa1_D_zq4UjmmztXV04&usqp=CAU",
  });
});

// 8
app.get("//Bolin", (req, res) => {
  res.render("content", {
    title: "Bolin",
    message: "The Legend of Korra",
    content: "Bolin",
    image:
      "https://images.unsplash.com/photo-1615591292724-2e5017d22542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
});

// 9
app.get("//Asami", (req, res) => {
  res.render("content", {
    title: "Asami Sato",
    message: "The Legend of Korra",
    content: "Asami Sato",
    image:
      "https://images.unsplash.com/photo-1615591292724-2e5017d22542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
});

// 10
app.get("//Tenzin", (req, res) => {
  res.render("content", {
    title: "Tenzin",
    message: "The Legend of Korra",
    content: "Tenzin",
    image:
      "https://images.unsplash.com/photo-1615591292724-2e5017d22542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
