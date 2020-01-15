let stdin = process.openStdin()
let i = 0
let a,b


stdin.addListener("data", (str) => {
    console.log(typeof(str.toString()));
    if(i==0){
        a = str.toString()
        
        
    }
    else if(i==1){
        b = str.toString()
        // console.log(+a + +b)
        // let c = findChar("a","abc")
        let c = findChar(a,b)
        console.log(c);
       
       
    }

    i++
})


findChar = (a,b) => {
    let c = 0
    b = b.split("")
    console.log(typeof(a));
    
    b.forEach(element => {
        console.log(`${element} == ${a} , ${typeof(element)} == ${typeof(a)} = ${element==a}`);
        element = element + ""
        if(element==a){
            c++
            // console.log(element);
            
        }
    });
    

    return c
}
