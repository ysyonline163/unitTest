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

        /*如果  o.constructor === Person . 也证明不了o就是Person的实例， o可能是原型对象*/

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
        //for in 返回对象中所有属性。实例和原型对象中的。可以枚举的属性
        for( prop in p ){
            if(p.hasOwnProperty(prop)){
                console.log('own prop:'+ prop );
            }
            else{
                console.log('prototype prop:' + prop );
            }
        }
        console.log( 'name' in p );
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
    //=====================Object.keys & Object.getOwnPropertyNames ==================
    (function(){
        log(arguments[0]);
        function Person( name, age ){
            this.name = name;
            this.age = age;
        }
        Person.prototype.say = function(){
            console.log(this.name);
        }
        Person.prototype.cal = function(){
            console.log(this.age);
        };

        var p = new Person( 'sss', 32 );
        var props = Object.keys(p);
        //keys ：所有的属性，但不包括原型的属性( 并且属性可以枚举 )。
        console.log(props);
        var prototypeKeys = Object.keys(Person.prototype);
        console.log(prototypeKeys);

        //getOwnPropertyNames ：所有的属性，但不包括从原型对象中继承来的属性（属性可以枚举 + 不可以枚举）
        props = Object.getOwnPropertyNames(p);
        console.log(props);
        /**
         * keys  与 getOwnPropertyNames 都强调是自身的属性（也是就是说不包含继承来的属性）。
         *
         * 不同点：getOwnPropertyNames是不可枚举的 + 可枚举的。
         */
    })('Object.keys & Object.getOwnPropertyNames');
    //=================可枚举与不可枚举属性的实验==========================
    (function(){
        function Person( name, age ){
            this.name = name;
            this.age = age;
        }
        Person.prototype.say = function(){
            console.log(this.name);
        }
        Person.prototype.cal = function(){
            console.log(this.age);
        };

        var p = new Person( 'sss', 32 );
        log(arguments[0]);
        Object.prototype.getAllProps =function(){
            var o = this;
            var props = [];
            for( prop in o ){
                Array.prototype.push.call( props, prop );
            }
            return props;
        };

        var keys = p.getAllProps();
        console.log(keys);
        var Objcet_keys = Object.keys(p);
        console.log(Objcet_keys);
        var Objcet_Names = Object.getOwnPropertyNames(p);
        console.log(Objcet_Names);
        console.log("0.-------------------------");
        console.log(p.name);
        console.log(p.constructor);
        console.log('name' in p );
        console.log('constructor' in p );
        console.log('constructor' in Person.prototype );
        var prop_names = Object.getOwnPropertyNames(Person.prototype);
        console.log(prop_names);
        console.log("1.----------证明原型对象中的constructor属性是不可枚举的---------------");
        console.log(Object.getOwnPropertyNames(Person.prototype));
        console.log(Object.keys(Person.prototype));
        console.log("2.----------for in 列出所有属性，自身的（可枚举的），继承来的（可枚举的）。注意是可枚举的---------------");
        for( prop in Person.prototype ){
            console.log( prop );
        }
        //===============列出所有属性增强版（自身的，继承的，不管可枚举还是不可枚举）====================
        //1.获取 p 自身所有属性。使用Object
        var self_attrs = Object.getOwnPropertyNames(p);
        //2.获取 p 原型对象。
        var ptype = Object.getPrototypeOf(p);
        //3.获取 p 原型对象的所有自身属性。
        var ptype_slef_attrs = Object.getOwnPropertyNames(ptype);
        //组合两个数组。
        var concats = self_attrs.concat(ptype_slef_attrs);

        console.log(concats);
        console.log(Person.prototype == Object.getPrototypeOf(p));
        console.log(Person.prototype == p.__proto__);
        console.log(Object.prototype == Object.getPrototypeOf(Person.prototype));
        console.log(Object.prototype == Person.prototype.__proto__);
        var k = Person.prototype;

        console.log(Person.prototype.prototype);
    })('可枚举与不可枚举属性的实验');
    //================思考。如果p.prototype 还有原型呢？==================
})();
