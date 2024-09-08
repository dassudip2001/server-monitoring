const express = require("express");
const { doSomeHeavyTask } = require("./util");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/slow", async (req, res) => {
  try {
    const time = await doSomeHeavyTask();
    return res.status(200).json({ status: "success", time });
  } catch (error) {
    return res
      .status(500)
      .json({ status: error, error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
