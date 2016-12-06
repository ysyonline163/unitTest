(function(){
    Array.prototype.indexOf4Object = function( item ){
        var arr = this;
        for( var i = 0; i < arr.length; i++ ){
            if( arr[i].name == item.name ){
                return i;
            }
        }
    };
    //==============filter===============
    (function(){
        var arr = ['a','b','c'];

        var arr = [{"name":"aa", "age":23},{"name":"bb", "age":67},{"name":"aa", "age":43}];
        var brr = arr.filter(function( item, index, self ){
            return self.indexOf4Object( item ) === index;
        });

        console.log( brr );
    })('filter');

    //==============map===============
    (function(){
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
        var arr = [ 'a','b','c','d' ];
        var brr = arr.map(function( item, index ){
            return item +'x0'
        });

        brr.reduce(function(){});
        console.log(brr);

    })('reduce');
})();
