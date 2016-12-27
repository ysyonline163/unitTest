'use strict';
(function(){
    var log = function( title ){
        console.log("==============="+title+"=============");
    };
    //=================重写原型对象=============
    (function(){
        log(arguments[0]);
        function Person( name, age ){
            this.name = name;
            this.age = age;
        }
        var p = new Person('sss', 32 );
        var p_props = Object.getOwnPropertyNames(p);
        //  p 实例属性 [ name, age ]
        console.log(p_props);
        // p原型属性[ constructor ]
        console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(p)));

        Person.prototype = {
            sayName: function(){
                console.log(this.name);
            },
            sayAge: function(){
                console.log(this.name);
            }
        };

        //  p 实例属性 [ name, age ]
        console.log(Object.getOwnPropertyNames(p));
        // p原型属性[ constructor ]
        console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(p)));

        var p1 = new Person('sss1', 32);
        console.log('sayName' in p );
        console.log('sayName' in p1 );

    })('override prototype obj');
    //=================原型链=============
    (function(){
        log(arguments[0]);
        function Person( name, age ){
            this.name = name;
            this.age = age;
        }
        Person.prototype.sayName = function(){
            console.log(this.name);
        };
        Person.prototype.sayAge = function(){
            console.log(this.age);
        };

        function Student( name, age, level ){

            name? (this.name =name) : (delete this.name);
            age? (this.age =age): (delete this.name);
            this.level = level || '3';
        }

        Student.prototype = new Person('people', 1000);
        Student.prototype.sayLevel = function(){ console.log( this.level )};
        var stu = new Student('student', 23, 6 );

        stu.sayName();
        stu.sayAge();
        stu.sayLevel();

        var stu1 = new Student( );

        stu1.sayName();
        stu1.sayAge();
        stu1.sayLevel();
        console.log("------------>relationship<-------------");

        console.log(stu instanceof Student);
        console.log(stu instanceof Person);
        console.log(stu instanceof Object);
        console.log("------------>relationship1<-------------");

        console.log(Student.prototype.isPrototypeOf(stu));
        console.log(Person.prototype.isPrototypeOf(stu));
        console.log(Object.prototype.isPrototypeOf(stu));
    })('prototye chain');
})();
