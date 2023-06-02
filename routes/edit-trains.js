const express = require("express")
const trainRoutes = express.Router();
const fs = require('fs');

const dataPath = './data/trains.json';

const saveTrainData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
    console.log('write');
}
const getTrainData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData);
    console.log('read');
}

const createTrainPayload = {
    trainExpressName: "Some train name",
    countryOfOrigin: "Example country",
    yearOfConstruction: "2137",
    maxKilometerPerHour: "320",
    destinationFrom: "Earth",
    destinationTo: "Moon",
};


trainRoutes.get('/trains/list', (req, res) => {
    res.send(getTrainData());
});

trainRoutes.post('/trains/add', (req, res) => {
    const currentTrains = getTrainData();
    const newAccountId = Math.floor(100000 + Math.random() * 900000);
    currentTrains[newAccountId] = req.body
    console.log(currentTrains);
    saveTrainData(currentTrains);
    res.send({success: true, msg: 'account added successfully'});
})

module.exports = trainRoutes