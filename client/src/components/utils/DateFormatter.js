const dateFormatter = (date) => {
    try{
        date.setTime(date.getTime() - date.getTimezoneOffset() * 60000);
        let dateValue = date.toISOString().split("T")[0];
        return dateValue;
    }
    catch{
        date = new Date();
        date.setTime(date.getTime() - date.getTimezoneOffset() * 60000);
        let dateValue = date.toISOString().split("T")[0];
        return dateValue;
    };
}

module.exports = dateFormatter;