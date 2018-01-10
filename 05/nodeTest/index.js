console.info("hello world");

var objs = [{a:1,b:2},{a:3,b:4}];
objs.forEach(function(obj){
    console.info(obj);
    console.info(obj.a + "," + obj.b);
});
