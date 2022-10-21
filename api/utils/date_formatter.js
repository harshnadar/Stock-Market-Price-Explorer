const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
];

const date_formatter = (date) => {
    let day = date.toLocaleDateString('en-UK').split("/")[0];
    let month = date.toLocaleDateString('en-UK').split("/")[1];
    let year = date.toLocaleDateString('en-UK').split("/")[2];
    let formattedDate = (day.toString() + "-" + monthNames[parseInt(month)-1] + "-" + year.toString());
    return formattedDate;
}

module.exports  = date_formatter;