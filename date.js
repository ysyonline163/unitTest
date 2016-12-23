(function(){
    var log = function( title ){
        console.log("==============="+title+"=============");
    };

    //==================string-->timesStamp==================
    (function(){
        log(arguments[0]);
        var str = "2016-12-08 13:02:14";
        str = str.replace(/-/g,'/');
        var utcDate = new Date(str);
        var timesStamp  = utcDate.getTime().toString();
        console.log(timesStamp);
    })('string-->timesStamp');
    //==================timesStamp-->string==================
    (function(){
        log(arguments[0])
        var utcDate = new Date(new Number(1481212174000));
        var yyyy = utcDate.getFullYear().toString();
        var month = (utcDate.getMonth() + 1).toString();
        var date = utcDate.getDate().toString();

        var hour =utcDate.getHours().toString();
        var min = utcDate.getMinutes().toString();
        var sec = utcDate.getSeconds().toString();

        /* if month is 5,the month[1] is undefined,is month 12, the month[1] is 2*/
        month = month[1]? month: "0"+ month;
        date = date[1]? date: "0"+ date;
        hour = hour[1]? hour: "0"+ hour;
        min = min[1]? min: "0"+ hour;
        sec = sec[1]? sec: "0"+ sec;

        var str = [ yyyy, month, date].join("-")+ " " + [hour, min, sec].join(":");
        console.log(str);
    })("timesStamp-->string");
})();
