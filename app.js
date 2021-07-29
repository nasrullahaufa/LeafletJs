"use strict";

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const data = "welcome";

const lokasiPeta = [-6.4953, 106.8333];
const koordinatMarker1 = [-6.4953, 106.8333];
const koordinatMarker2 = [-6.483, 106.8316];
const koordinatMarker3 = [-6.4755, 106.8042];
const pesanMarker1 = "Ini Stadion Pakansari"
const pesanMarker2 = "Ini Pemda Cibinong"
const pesanMarker3 = "Ini Nasi Goreng Cak Parman"

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs", {
    lokasi:JSON.stringify(lokasiPeta),
    marker1: JSON.stringify(koordinatMarker1),
    marker2: JSON.stringify(koordinatMarker2),
    marker3: JSON.stringify(koordinatMarker3),
    pesanMarker1,
    pesanMarker2,
    pesanMarker3
  });
});

app.listen(PORT, () => {
  console.log(`idling at ${PORT} RPM`);
});

module.exports = app;
