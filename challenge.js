// Challenge ex. 1 ------------------------------------------------

var arr = [ 
    
    ["Vienna", 2, 1, 24, 2], 
    [8, "is", 9, 4, 0], 
    [7, 0, "a", 27, 5], 
    [7, 4, 28, "nice", 0], 
    [3, 10, 25, 7, "city"], 

]

var diagonal = [arr[0][0], arr[1][1], arr[2][2], arr[3][3], arr[4][4]];

console.log(diagonal);
document.write(diagonal.join(" "))
// document.write(diagonal.join("<br>"))


document.write("<br><br>"); // now is not ugly!! <3

// Challenge ex. 2 ------------------------------------------------


var text_ = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";


document.write(text_.split("$") .join(" "));


