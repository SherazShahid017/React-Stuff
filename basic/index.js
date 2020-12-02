let a = 13;
const b = 100;
console.log(a);
do {
    console.log("Hello");
    a++;
}
while (a < 15);

const rgb = [200];
const [red = 255, green, blue = 255] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);
