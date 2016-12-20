'use strict';
(function(){
    var log = function( title ){
        console.log("==============="+title+"=============");
    };
    //var console = console.log;
    Array.prototype.remove = function( item ){
        var ind = this.indexOf( item );
        Array.prototype.splice.call( this, ind, 1 );
        return this;
    };
    Array.prototype.pushf = function( item ){
        Array.prototype.splice.call( this, this.length, 0, item );
        return this;
    };

    //======================call========================
    (function(){
        log(arguments[0]);
        var a = ['A','B','C','D','E','F'];
        var b = a.slice();
        a.pushf('G').pushf('H').pushf('I');
        console.log(a);
        a.remove('A').remove('D').remove('E');
        console.log(a);

        var b_map = b.map( function( item, index, self ){
            return item + "-";
        } );
        console.log(b_map);
        var c_reduce = b_map.reduce( function( x, y ){
            return x + y;
        });
        console.log(c_reduce);

        //===============use the call==============
        var n = ['A','B','C','D','E','F'];
        var m = ['A','C','F'];
        var c = function( w, x ,v ){
            var a = new Array();

            Array.prototype.push.apply( a, arguments );

            console.log(a);

            var s = new Array();
            var s_args = s.forEach(function( item, index, self ){
                s.concat(arguments);
            });

            Array.prototype.push.apply(s, s_args );

        }
        c( 'A','b',2);


    })('call');
})();
