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
        function Person( name, age ){
            this.name = name;
            this.age = age;
        }
        Person.prototype.say = function(){
            console.log(this.name);
        }

        var p = new Person( 'a', 32 );
        var flag = Person.prototype.isPrototypeOf(p);
        console.log(flag);
    })('isPrototyeOf');
    //=====================getPrototyeOf==================
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
        var p_prototype = Object.getPrototypeOf(p);
        console.log(p_prototype);
        for( prop in p_prototype ){
            console.log(prop);
        }
        console.log(p_prototype === Person.prototype);
    })('getPrototyeOf');
    //=====================hasOwnProperty==================
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
        console.log(p.hasOwnProperty('name'));
        console.log(p.hasOwnProperty('age'));
        console.log(p.hasOwnProperty('say'));
    })('hasOwnProperty');
    //=====================in or for in==================
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
        for( prop in p ){
            if(p.hasOwnProperty(prop)){
                console.log('own prop:'+ prop );
            }
            else{
                console.log('prototype prop:' + prop );
            }
        }
    })('in or for in');
    //=====================hasPrototypeProperty==================
    (function(){
        log(arguments[0]);
        var hasPrototypeProperty = function( o, name ){
            return (name in o) && (!o.hasOwnProperty(name));
        };
        function Person( name, age ){
            this.name = name;
            this.age = age;
        }
        Person.prototype.say = function(){
            console.log(this.name);
        }

        var p = new Person( 'a', 32 );

        var result = hasPrototypeProperty( p, 'name' );
        console.log(result);
        result = hasPrototypeProperty( p, 'say' );
        console.log(result);
    })('hasPrototypeProperty');
})();
