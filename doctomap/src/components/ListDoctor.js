import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import doctors from "../../../db.json";

const listDoctor = () => {
    const [doctors, setDoctor] = useState([]);

    useEffect(() => {
        getDoctors();
    }, []);

    const getDoctors = async () => {
        const response = await axios.get("http://localhost:5173/doctors");
        setDoctor(response.data);
    }
}