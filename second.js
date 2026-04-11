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