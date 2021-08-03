const { default: axios } = require("axios");
const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("js"));
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

let data = {
  api_token: "",
  bibcode: "",
  abstract: "",
};

app.get("/", function (req, res) {
  res.render("index", data);
});

app.post("/", async function (req, res) {
  console.log(req.body);
  data = {
    ...data,
    ...req.body,
  };

  const { api_token, bibcode } = data;
  if (typeof api_token !== "string") {
    return res.render("index", { ...data, error: "api_token not found" });
  }

  if (typeof bibcode !== "string" && bibcode.length <= 0) {
    return res.render("index", { ...data, error: "bibcode invalid" });
  }

  if (
    typeof api_token === "string" &&
    api_token.length > 0 &&
    typeof bibcode === "string" &&
    bibcode.length > 0
  ) {
    try {
      const { data: results } = await axios.get(
        "https://api.adsabs.harvard.edu/v1/search/query",
        {
          params: { q: `identifier:${bibcode}`, fl: "id,abstract" },
          headers: {
            Authorization: `Bearer:${api_token}`,
          },
        }
      );
      if (results.response.docs.length > 0) {
        return res.render("index", {
          ...data,
          abstract: results.response.docs[0].abstract,
        });
      } else {
        return res.render("index", {
          ...data,
          error: "No results for that bibcode",
        });
      }
    } catch (e) {
      return res.render("index", { ...data, error: e.message });
    }
  }

  res.render("index", data);
});

app.listen(8000, "", () => {
  console.log("View app @ http://localhost:8000");
});
