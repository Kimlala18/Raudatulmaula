let maximum = parseInt(prompt('masukan nilai maksimal!'));
while (!maximum){
    maximum = parseInt(prompt('masukan nilai maksimal!'));
}

const targetNum = Math.floor(math.rendom() * maximum) +1;
console.log(targetNum);

let guess = parseInt(prompt('isi tebakan pertama kamu!'));
let attempts = 1;


while (parsint(guess) !== targetNum) {
    attempts++;
    if (guess > targetNum) {
        guess = parseInt(prompt('terlalu tinggi! tebak lagi:'));
    }else{
        guess = parseInt(prompt('terlalu rendah! tebak lagi:'));
    }
}

alert('selamat tebakan andah benar!dengan percobaan ${attempt}kali');