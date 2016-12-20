(function(){
    var log = function( title ){
        console.log("==============="+title+"=============");
    };

    //==================string-->timesStamp==================
    (function(){
        log(arguments[0]);
        var str = "2016-12-20 23:49:34";
        str = str.replace(/-/g,'/');
        var utcDate = new Date(str);
        var timesStamp  = utcDate.getTime().toString();
        console.log(timesStamp);
    })('string-->timesStamp');

    (function(){
        log(arguments[0])
        var utcDate = new Date(new Number(1482248974000));
        var year = utcDate.getYear();
        var month = utcDate.getMonth() + 1;
        var day = utcDate.getDay();

        var hour = utcDate.getHours();
        var min = utcDate.getMinutes();
        var sec = utcDate.getMinutes();

        console.log(year[1]);
        console.log(month[1]);
        console.log(day[1]);
        console.log(hour[1]);
        console.log(min[1]);
        console.log(sec[1]);
    })("timesStamp-->string");
})();
