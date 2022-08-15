const argv = process.argv.slice(2);
const crypto = require("crypto")

if(argv[0] === "add"){
    console.log(parseInt(argv[1])+parseInt(argv[2]));
}

if(argv[0] === "sub"){
    console.log(parseInt(argv[1])-parseInt(argv[2]));
}

if(argv[0] === "mul"){
    console.log(parseInt(argv[1])*parseInt(argv[2]));
}

if(argv[0] === "divide"){
    console.log(parseInt(argv[1])/parseInt(argv[2]));
}

if(argv[0] === "sin"){
    console.log(parseInt(Math.sin(argv[1])));
}

if(argv[0] === "cos"){
    console.log(parseInt(Math.cos(argv[1])));
}

if(argv[0] === "tan"){
    console.log(parseInt(Math.tan(argv[1])));
}

if(argv[0] === "random"){
    console.log(crypto.generateKey(argv[1]));
}