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
    //================原型对象定义属性所引发的问题=============
    (function(){
        log(arguments[0]);
        // 在原型对象中定义属性。尤其是引用类型属性。会造成很大困扰。
        var Person = function(){
            this.name = "person";
            this.age = 32;
        };

        Person.prototype.sayName = function(){
            console.log(this.name);
        };
        Person.prototype.sayAge = function(){
            console.log(this.age);
        };
        Person.prototype.friends = ['a'];

        var p1 = new Person();
        var p2 = new Person();
        p1.friends.push('b');
        console.log(p2.friends)

       /* Person.prototype = {
            sayName : function(){},
            sayAge : function(){},
            friends : []
        };*/
        //conclusion: do not define property in prototype object
    })('define property in protype obj');
    //1.原型链继承
    (function(){
        log(arguments[0]);
        var Person = function(){
            this.name = "person";
            this.age = 32;
            this.friends = ['aaa'];
        };
        Person.prototype.sayName = function(){
            console.log(this.name);
        };
        Person.prototype.sayAge = function(){
            console.log(this.age);
        };
        var Student = function(){
            this.level = '5';
        }

        //!!!!!!!!!!!!!!!!!!!!!!( 原型对象中的属性不要有引用类型！！！！)
        Student.prototype = new Person();
        //!!!!!!!!!!!!!!!!!!!!!!
        Student.prototype.sayLevel = function(){ console.log(this.level); };

        var s = new Student();
        s.sayName();
        s.sayLevel();
        console.log(s.friends);
        s.friends.push('bbb');

        var s1 = new Student();
        console.log(s1.friends);
    })('1.原型链继承');
    //2.借用构造函数继承
    (function(){
        log(arguments[0]);
        var Person = function(){
            this.name = "person";
            this.age = 32;
            this.friends = ['aaa'];
        };

        Person.prototype.sayName =function(){console.log(this.name);};
        var Student = function(){
            Person.call( this );
            this.level = '5';
        }
        var st = new Student();

        st.friends.push('bbb');
        console.log(st.friends);
        var st1 = new Student();
        console.log(st1.friends);

        console.log(st.sayName === undefined);
        /* 构造函数继承又被称为经典继承
        *
        * 使用调用构造函数。把父类的属性绑定到子类上。
        *
        * 缺点：1.方法如果定义在父类原型中，子类不可见！！！！console.log(st.sayName === undefined);
        *
        *      2.方法如果定义在父类中。方法的复用不好！！！
        * */
    })('2.借用构造函数继承');
    //3.组合继承
    (function(){
        log(arguments[0]);
        /* 组合继承 -----> 原型链 + 借用构造调用 */
        var Person = function( name, age ){
            this.name = name ;
            this.age = age;
            this.friends = ['aaa'];
        };
        Person.prototype.sayName =function(){console.log(this.name);};
        Person.prototype.sayAge = function(){console.log(this.age);};

        var Student = function(){
            Person.call( this, 'p1', 32 ); // 2.使用 借用构造函数  this 代表student实例。把 p1, 32 绑定到Student实例
            this.level = 5;
        };
        Student.prototype = new Person('p2', 100 ); // 1.使用 原型链, 把 p2 ,100 绑定到Student原型
        //Person.call( Student.prototype, 'p2', 100 );
        Student.prototype.sayLevel = function(){console.log(this.level)};

        var stu = new Student();
        stu.sayName();
        stu.sayAge();
        stu.sayLevel();

    })('3.组合继承');
    //4.原型继承
    (function(){
        log(arguments[0]);
        //var Person = function(){ this.name = 'ssss'; this.age = 23; this.friends=['A'];};
        var person = { name: "json", friends: ['A','B']};

        var object = function( o ){
            function F(){};
            F.prototype = o;
            return new F();
        };

        var p1 = object( person );
        console.log(p1.name);
        console.log(p1.friends);// ['A','B']
        p1.friends.push('C');

        var p2 = object( person );
        p2.friends.push('D');
        console.log(p2.friends);// ['A','B','C','D'];
        console.log(person.friends);// ['A','B','C','D'];
        /*
        * 使用原型继承为浅克隆。 尤其是对引用类型的复制。会影响到父对象的数组。
        * */
        // IE9,谷歌。。。使用Object.create() 浅度复制一个对象。
        var p3 = Object.create( p2 );
        p3.friends.push('E');
        console.log(person.friends);//[ 'A', 'B', 'C', 'D', 'E' ]
        /*
        * 有点： 方便简单。无需创建新的自定义类型的函数
        * */
        //=============一些测试==========
        console.log("--------一些测试-----------");
        console.log(Object.getPrototypeOf(p1) === person );
        console.log(Object.getPrototypeOf( person) === Object.prototype );
        console.log(Object.keys(p1)); //[]
        console.log(Object.getOwnPropertyNames(p1)); //[]
        for( var prop in p1 ){
            if( p1.hasOwnProperty(prop)) console.log("-->Own:"+prop );
            else console.log("-->totype:"+prop);
        }

        var a = ["a","b","c",[1,2,4] ];
        console.log(a.length);console.log(a[1]);
        var b = Object.create(a);
        console.log(b.length);console.log(b[3]);
        for( var i = 0; i < b.length; i++ ){
            console.log("---" + b[i]);
        }

        var s = Array.prototype.slice.call(a);
        console.log(s);
    })('4.原型继承');
    //5.寄生式继承
    (function(){
        log(arguments[0]);
        function object( o ){
            function F(){};
            F.prototype = o;
            return new F();
        }
        function cloneAnther(o){
            var clone = object( o );
            clone.sayHi = function(){ console.log("Hi"); };
            return clone;
        }


        var Person = function( name, age ){
            this.name = name ;
            this.age = age;
            this.friends = ['aaa'];
        };
        Person.prototype.sayName =function(){console.log(this.name);};
        Person.prototype.sayAge = function(){console.log(this.age);};

        var p = new Person('sa', 32);
        p.sayName();
        var p_clone = cloneAnther( p );

        p_clone.sayName();
        p_clone.sayHi();

        console.log( Object.getOwnPropertyNames( p_clone ));
    })('5.寄生式继承');
    //6.寄生组合式继承
    (function(){
        log(arguments[0]);
        var Person = function( name, age ){
            this.name = name ;
            this.age = age;
            this.friends = ['aaa'];
        };
        Person.prototype.sayName =function(){console.log(this.name);};
        Person.prototype.sayAge = function(){console.log(this.age);};

        var Student = function( name, age, level ){
            Person.call( this, name, age );
            this.level = level;
        };
        Student.prototype.sayHi = function(){ console.log('Hi'); };
        Student.prototype.sayLevel = function(){ console.log( this.level ); };

        // fn2 exthend from fn1
        function inherbit( fn1, fn2 ){
            var prototype = Object.create( fn1.prototype );
            prototype.constructor = fn2;
            fn2.prototype = prototype;
        }

        inherbit( Person, Student );

        var p = new Person( 'p', 23 );
        var s = new Student('s', 32, 5 );
        s.sayName();
        s.sayAge();
        console.log(s.sayHi === undefined );
        //s.sayLevel();


    })('6.寄生组合式继承');
})();
