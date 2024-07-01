import "./db.json";
import listDoctors from "./routes/Doctor";
import cors from "cors";
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// Create the express app
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/doctors", listDoctors);

// routes
const router = express.Router();

router.get("/", getAllDoctors);
router.get("/:id", getDoctorById);
router.put("/:id", updateDoctor);
router.delete("/:id", deleteDoctor);

// start server
app.listen(3000, () => {
    console.log(`Server started at port http://localhost:3000`);
});

export default router;