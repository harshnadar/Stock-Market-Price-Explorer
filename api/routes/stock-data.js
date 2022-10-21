const express = require('express');
const bodyParser = require('body-parser');

const db = require('../../config/db');
const date_formatter = require('../utils/date_formatter');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send("Hey Connected");
})

// @route    GET api/stock-data/:company/:date
// @desc     get a particular 
// @access   Public
router.get('/:company/:start_date/:end_date', async (req, res) => {
    try {
        let symbol = req.params.company;
        let start_date = req.params.start_date;
        let end_date = req.params.end_date;
        // console.log(start_date);
        // console.log(end_date);
        let ans = [];

        for(let date = new Date(start_date); date<= new Date(end_date); date.setDate(date.getDate()+1)){
            let query = `SELECT * FROM nse_data WHERE SYMBOL="${symbol}" AND TIMESTAMP="${date_formatter(date)}"`;
            let r = await (await db).execute(query);
            console.log
            if(r[0].length)
                ans.push(r[0][0]);
        }

        // console.log(typeof(date));
        // date = date.toString();
        // let ans = [];
        // for(d = 0;d<date.length;d++){
        //     
        // }
        // let query = `SELECT * FROM nse_data WHERE SYMBOL="${symbol}"`;
        // let r = await (await db).execute(query);
        // console.log(ans);
        res.status(200).send(ans);
    } catch (err) {
        if(err instanceof Error) {
            console.log(err.message);
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;

