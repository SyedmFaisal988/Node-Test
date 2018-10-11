var rect = require('./rectangle');
function solveRect(l,b) {
    console.log('solving rectangle l=' + l + ' and b=' + b);
    rect(l, b, (err, rectangle)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log('Area of rectangle is: ' + rectangle.area() );
            console.log('Perimeter is: ' + rectangle.perimeter());
        }
    });
    console.log('This statement is after call to rect()');
    };
solveRect(2, 4);
solveRect(4, 3);