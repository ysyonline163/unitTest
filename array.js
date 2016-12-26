'use strict';
(function(){
    Array.prototype.indexOf4Object = function( item ){
        var arr = this;
        for( var i = 0; i < arr.length; i++ ){
            if( arr[i].name == item.name ){
                return i;
            }
        }
    };
    var log = function(title){
        console.log("===================" + title + "===================");
    };
    //==============filter===============
    (function(){
        log(arguments[0]);
        var arr = ['a','b','c'];

        var arr = [{"name":"aa", "age":23},{"name":"bb", "age":67},{"name":"aa", "age":43}];
        var brr = arr.filter(function( item, index, self ){
            return self.indexOf4Object( item ) === index;
        });

        console.log( brr );
    })('filter');

    //==============map===============
    (function(){
        log(arguments[0]);
        var a = [1,2,3,4,5,6,7,8,9,10];
        var b = a.map(function( item ){
            return item + 2;
        });

        console.log('map==>'+ b);
        console.log('map==>' + a);

        function Stu( name, age ){
            this.name = name;
            this.age = age;
        }
        var stus = [];
        for( var i = 0; i < 5; i++ ){
            stus.push(new Stu('su_' + i , 31 ));
        }

        console.log(stus);

        var stus_map = stus.map(function( item ){
            if( item.name !== 'su_4'){
                item['age'] += 21;
                item['sky'] = 'blue';

            }
            return item;
        });
        console.log(stus_map);
        console.log(stus);
    })('map');

    //==============reduce===============
    (function(){
        log(arguments[0]);
        var arr = [ 'a','b','c','d' ];
        var brr = arr.map(function( item, index ){
            return item +'x0'
        });

        var aa = brr.reduce(function( x, y ){
            return x + "-" + y;
        });
        console.log(arr);
        console.log(brr);
        console.log(aa);

    })('reduce');

    //==============splice===============
    (function(){
        log(arguments[0]);
        var stus = ['a','b','c'];
        stus.splice(1, 0 , 'A', 'B', 'C');
        console.log("splice:==>" + stus);
    })('splice');
    //==============slice================
    (function(){
        log(arguments[0]);
        var stus =[{"name":"xiaowang","age":12},{"name":"lilei","age":13},{"name":"Hanmeimei","age":13}];
        var stus_slice = stus.slice();
        console.log(stus_slice);
        console.log(stus_slice === stus);
    })('slice');
    //==============sort================
    (function(){
        log(arguments[0]);
        var arr = [10,1,2,41,3];
        var sort_arr = arr.sort();
        console.log("sort:default==>" + sort_arr );
        var sort_brr = arr.sort(function( x, y ){
            return x - y;
        });
        console.log(sort_brr);
        var sort_crr = arr.sort(function( x, y ){
            return y - x;
        });
        console.log(sort_crr);

        var stus =[{"name":"xiaowang","age":12},{"name":"lilei","age":13},{"name":"Hanmeimei","age":13}];
        var ex_arr = ['Google', 'apple', 'Microsoft'];
        console.log(ex_arr.sort());
        console.log(ex_arr.sort(function( x, y ){
            var to_x = x.toUpperCase();
            var to_y = y.toUpperCase();
            if( to_x < to_y ) return -1
            else if( to_x > to_y ) return 1;
            else return 0;
        }));
        console.log(stus.sort(function( x, y ){
            if( x.name > y.name ) return 1;
            else if(x.name < y.name ) return -1;
            else return 0;
        }));
    })('sort');
    //===========deple obj===================
    (function(){
        log(arguments[0]);
        var stus =[{"name":"xiaowang","age":12},
                   {"name":"lilei","age":13},
                   {"name":"Hanmeimei","age":13},
                   {"name":"xiaowang","age":12}];

        var sort_stus = stus.sort(function(x , y){
            x = x.name.toUpperCase();
            y = y.name.toUpperCase();
            if( x < y ) return -1;
            else if(x > y) return 1;
            return 0;
        });
        var preitem = {"name":"","age":0};
        var deple_obj = sort_stus.filter(function( item, index, self ){

            if(preitem.name != item.name ){
                preitem = item;
                return item;
            }
        });
        console.log(deple_obj);
    })('deple obj');
    //=============realize ===============
    (function(){
        log(arguments[0]);
        Array.prototype.indexOf4Obj = function( ard ){
            var arr = this;
            for( var i =0; i < arr.length ; i ++ ){
                if( arr[i].name === ard ){
                    return i;
                }
            }
        };
        var stus =[{"name":"xiaowang","age":12},
            {"name":"lilei","age":13},
            {"name":"Hanmeimei","age":13},
            {"name":"xiaowang","age":12}];
        var s = stus.filter(function( item, index, self ){
            return self.indexOf4Obj(item.name) === index;
        });
        console.log(s);
    })('realize');

    //============= some ===============
    (function(){
        log(arguments[0]);
        var stus =[{"name":"xiaowang","age":12},
            {"name":"lilei","age":13},
            {"name":"Hanmeimei","age":13},
            {"name":"xiaowang","age":12}];
        var ind = -1 ;
        stus.some( function(item, index, self){
            ind = index;
            return item.name === 'lilei';
        } );

        console.log(ind);

        var stus_fi = stus.filter(function( item ,index , self ){
            var ind = null;
            self.some(function( itemsome ,indsome, selfsome ){
                ind = indsome;
                return itemsome.name === item.name;
            });

            return ind === index;
        });
        console.log(stus_fi);

        Array.prototype.defilter = function( obj ){
            var arr = this;
            var arrfi = arr.filter(function( itfi, infi, selfi ){
                var ind = null;
                selfi.some(function( itsome, insome, selfsome ){
                    return itfi['name'] === insome['name'] &&
                           itfi['age'] === insome['age'];
                });
                return ind === infi;
            });

            return arrfi;
        };

        var stusfi = stus.defilter([ "name", "age" ]);
        console.log(stusfi);
    })('some');

    //===============filter the is-enable=============
    (function(){
        log(arguments[0]);
        var full_device_list = [
            {"device-name":"320xfe1","is-enable":true},
            {"device-name":"320xfe2","is-enable":false},
            {"device-name":"320xfe3","is-enable":false},
            {"device-name":"320xfe4","is-enable":false},
            {"device-name":"320xfe5","is-enable":false},
            {"device-name":"320xfe6","is-enable":true},
            {"device-name":"320xfe7","is-enable":true},
            { "device-name":"320xfe8","is-enable":false}
        ];

        var s = full_device_list.filter(function( item, index, self ){
            return item['is-enable'];
        });
        console.log(s);

    })('filter the is-enable');
})();
