const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const app = express();
const dotenv = require("dotenv");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const envfile = require("envfile");


const sourcePath = path.resolve(__dirname, ".env");
let parsedFile = envfile.parseFileSync(sourcePath);
let loggedIn = false;

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


//MULTER
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    const folder = req.body.category;
    const ext = file.mimetype.split("/")[1];
    cb(null, `files/${folder}/${file.originalname}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.split("/")[1] === "pdf") {
    cb(null, true);
  } 
  else if (file.mimetype.split("/")[1].split(".")[3] === "document") {
    cb(null, true);
  } 
  else if (file.mimetype.split("/")[1] === "mp4") {
    cb(null, true);
  } 
  else if(file.mimetype.split("/")[1] === "jpeg"){
    cb(null, true);
  }
  else if(file.mimetype.split("/")[1]==="png"){
    cb(null, true);
  }
  else if(file.mimetype.split("/")[1]==="jpg"){
    cb(null, true);
  }
  else {
    cb(new Error("Not a PDF File!!"), false);
  }
};

const upload = multer({
  storage: multerStorage,
   fileFilter: multerFilter,
});


//Directories
const Celebrations = path.join(__dirname, "public/files/Celebrations");
const Cleanliness = path.join(__dirname, "public/files/Cleanliness");
const CommonVenues = path.join(__dirname, "public/files/CommonVenues");
const DemandForFurniture = path.join(
  __dirname,
  "public/files/DemandForFurniture"
);
const Facilities = path.join(__dirname, "public/files/Facilities");
const Gallery = path.join(__dirname, "public/files/Gallery");
const Housekeeping = path.join(__dirname, "public/files/Housekeeping");
const Inventory = path.join(__dirname, "public/files/Inventory");
const Maintainance = path.join(__dirname, "public/files/Maintainance");
const Newsletters = path.join(__dirname, "public/files/Newsletters");
const Pantries = path.join(__dirname, "public/files/Pantries");
const Policies = path.join(__dirname, "public/files/Policies");
const Sanitisation = path.join(__dirname, "public/files/Sanitisation");
const SpaceAllotment = path.join(__dirname, "public/files/SpaceAllotment");
const SustainabilityReport = path.join(
  __dirname,
  "public/files/SustainabilityReport"
);
const WasteManagement = path.join(__dirname, "public/files/WasteManagement");
const WaterManagement = path.join(__dirname, "public/files/WaterManagement");


//FILE HANDLING
app.post("/api/uploadFile", upload.single("myFile"), async (req, res) => {
 
  const file = req.file;
  if (!file) {
    return res.status(400).send("No file selected");
  }
  res.redirect("/dashboard");
});

app.get("/api/deleteFile/:Category/:File", (req, res) => {
  const Category = req.params.Category;
  const File = req.params.File;
  let fileName= File.split(".")[0];
  let fileext= File.split('.')[1] || '';
  let file = `${__dirname}/public/files/${Category}/${File}.pdf`;

  if(fileext==="mp4" || fileext=="docx" || fileext==="png" || fileext==="jpg" || fileext==="jpeg"){
  file = `${__dirname}/public/files/${Category}/${fileName}.${fileext}`;
  }
  fs.unlink(file, (err) => {
    if (err) {
      return res.json({ status: "error", error: "File not found" });
    }
    res.redirect("/dashboard");

   
  });
  
});

//GET ALL FILES
app.get("/api/celebrations", (req, res) => {
  let Category = "Celebrations";
  const files = fs.readdirSync(Celebrations).map((name) => {
    return {
      Category: "Celebrations",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/cleanliness", (req, res) => {
  let Category = "Cleanliness";
  const files = fs.readdirSync(Cleanliness).map((name) => {
    return {
      Category: "Cleanliness",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/commonvenues", (req, res) => {
  let Category = "CommonVenues";
  const files = fs.readdirSync(CommonVenues).map((name) => {
    return {
      Category: "CommonVenues",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/demandforfurniture", (req, res) => {
  let Category = "DemandForFurniture";
  const files = fs.readdirSync(DemandForFurniture).map((name) => {
    return {
      Category: "DemandForFurniture",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/facilities", (req, res) => {
  let Category = "Facilities";
  const files = fs.readdirSync(Facilities).map((name) => {
    return {
      Category: "Facilities",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/gallery", (req, res) => {
  let Category = "Gallery";
  const files = fs.readdirSync(Gallery).map((name) => {
    return {
      Category: "Gallery",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/housekeeping", (req, res) => {
  let Category = "Housekeeping";
  const files = fs.readdirSync(Housekeeping).map((name) => {
    return {
      Category: "Housekeeping",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/inventory", (req, res) => {
  let Category = "Inventory";
  const files = fs.readdirSync(Inventory).map((name) => {
    return {
      Category: "Inventory",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/maintainance", (req, res) => {
  let Category = "Maintainance";
  const files = fs.readdirSync(Maintainance).map((name) => {
    return {
      Category: "Maintainance",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/newsletters", (req, res) => {
  let Category = "Newsletters";
  const files = fs.readdirSync(Newsletters).map((name) => {
    return {
      Category: "Newsletters",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/pantries", (req, res) => {
  let Category = "Pantries";
  const files = fs.readdirSync(Pantries).map((name) => {
    return {
      Category: "Pantries",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/policies", (req, res) => {
  let Category = "Policies";
  const files = fs.readdirSync(Policies).map((name) => {
    return {
      Category: "Policies",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/sanitisation", (req, res) => {
  let Category = "Sanitisation";
  const files = fs.readdirSync(Sanitisation).map((name) => {
    return {
      Category: "Sanitisation",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/space", (req, res) => {
  let Category = "SpaceAllotment";
  const files = fs.readdirSync(SpaceAllotment).map((name) => {
    return {
      Category: "SpaceAllotment",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/sustainability", (req, res) => {
  let Category = "SustainabilityReport";
  const files = fs.readdirSync(SustainabilityReport).map((name) => {
    return {
      Category: "SustainabilityReport",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/wastemanagement", (req, res) => {
  let Category = "WasteManagement";
  const files = fs.readdirSync(WasteManagement).map((name) => {
    return {
      Category: "WasteManagement",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/api/watermanagement", (req, res) => {
  let Category = "WaterManagement";
  const files = fs.readdirSync(WaterManagement).map((name) => {
    return {
      Category: "WaterManagement",
      name: path.basename(name, ".pdf"),
      url: `/${Category}/${name}`,
    };
  });
  res.send(files);
});

app.get("/:Category/:file", (req, res) => {
  const cat = req.params.Category;
  const pdfs = req.params.file;
  res.sendFile(__dirname + `/public/files/${cat}/${pdfs}`);
});



//AUTHENTICATION
app.post("/api/locked/changePassword", (req, res) => {
  let newp=bcrypt.hashSync(req.body.pass,10);
 
  parsedFile.PASSWORDCUAM = newp;
  fs.writeFileSync("./.env", envfile.stringifySync(parsedFile));
 
  res.send(true);
});

app.post("/api/login", (req, res) => {
  let { email, password } = req.body;
  let isPasswordValid = bcrypt.compareSync(password, parsedFile.PASSWORDCUAM);
  if (email !== process.env.USERNAMECUAM) {
    return res.json({ status: "error", error: "Invalid login" });
  }
  if (!isPasswordValid) {
    return res.json({ status: "error", error: "Invalid login" });
  }
  loggedIn = true;
  return res.status(200).json({ passed: true });
});





app.post("/api/logout", (req, res) => {
  if (loggedIn) {
    loggedIn = false;
    res.send(true);
  } else {
    res.send(false);
  }
});

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
);

app.listen(3001, () => {
  console.log("BE started at port 3001");
});

module.exports = app;
