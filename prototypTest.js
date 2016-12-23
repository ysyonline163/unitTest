(function(){
    var log = function( title ){
        console.log("==============="+title+"=============");
    };

    //=====================constructor=========================
    (function(){
        log(arguments[0]);
        function Person( name, age ){
            this.name = name;
            this.age = age;
        }
        Person.prototype.say = function(){
            console.log(this.name);
        }

        var p = new Person( 'a', 32 );

        console.log(p.constructor === Person );

        console.log(Person.prototype.constructor === Person );

        /*if o.constructor === Person . o must not be Person 实例 可能是原型对象*/

    })('constructor');
    //=====================isPrototyeOf==================
    (function(){
        log(arguments[0]);

    })('isPrototyeOf');
    //=====================getPrototyeOf==================
    (function(){
        log(arguments[0]);

    })('getPrototyeOf');
    //=====================hasOwnProperty==================
    (function(){
        log(arguments[0]);


    })('hasOwnProperty');
    //=====================in or for in==================
    (function(){
        log(arguments[0]);


    })('in or for in');
})();
