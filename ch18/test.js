var name = "하재명";

const DongJeaMyung = {
  name: "동재명이",
  bark() {
    console.log(this.name);
  },
};

console.log(name);
console.log(window.name);
console.log(DongJeaMyung.name);
console.log(DongJeaMyung.bark());
