const express = require('express');
const bodyParser = require('body-parser');

const db = require('../config/db')
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
    res.send("Hey Connected");
})

// @route    GET api/stock-data/:company/:date
// @desc     get a particular 
// @access   Public
router.get('/:company', async (req, res) => {
    try {
        let symbol = req.params.company;
        symbol = symbol.toString();
        // let date = ["17-OCT-2022", "16-OCT-2022", "15-OCT-2022", "14-OCT-2022", "13-OCT-2022"];
        // let date = req.params.date;
        // date = date.toString();
        // let ans = [];
        // for(d = 0;d<date.length;d++){
        //     let query = `SELECT * FROM nse_data WHERE SYMBOL="${symbol}" AND TIMESTAMP="${date[d]}"`;
        //     let r = await (await db).execute(query);
        //     console.log
        //     if(r[0].length)
        //         ans.push(r[0][0]);
        // }
        let query = `SELECT * FROM nse_data WHERE SYMBOL="${symbol}"`;
        let r = await (await db).execute(query);
        // console.log(ans);
        res.status(200).send(r[0]);
    } catch (err) {
        if(err instanceof Error) {
            console.log(err.message);
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;

