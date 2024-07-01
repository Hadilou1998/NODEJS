const express = require("express");
const fs = require("fs");
import data from "../db.json";

export const getAllDoctors = async (req, res) => {
    try {
        const doctor = await data.findAll();
        res.json(doctor);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getDoctorById = async (req, res) => {
    try {
        const doctor = await data.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(doctor[0]);
    } catch (error) {
        res.json({ message: error.message });
    }
}

/*export const createDoctor = async (req, res) => {
    try {
        await data.create(req.body);
        res.json({
            "message": "Doctor Added Successfull"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}*/

export const updateDoctor = async (req, res) => {
    try {
        await data.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Doctor Updated Successfully"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const deleteDoctor = async (req, res) => {
    try {
        await data.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Doctor Deleted Successfully"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
}