function Setcall(name) {
    this.name = name;
};

function Showcall(name, email, password){
    Setcall.call(this, name);
    this.email = email;
    this.password = password;
};

const log = new Showcall("krit", "krit@instgrame.com", "krit@90")
console.log(log)

// Q.8
let a= 10;
const r= 35;
var v=20;
{
    // console.log(a);
    // console.log(r);
    a=40;
    r=40;
    var v= 45
    console.log(a)
    console.log(r)
    console.log(v)
}
console.log(v);