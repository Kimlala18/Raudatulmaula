// console,log(1)
// console,log(2)
// console,log(3)
// console,log(4)
// console,log(5)
// console,log(6)
// console,log(7)
// console,log(8)
// console,log(9)
// console,log(10)

// for (let i =1; i <= 10; i+= 1){
//     console.log('saya ada di dalam loop');
//     console.log(i);
// }

// for (let i = 1; i <= 20; i += 2){
//     console.log(i);
// }

// for (let i = 20; i >= 0; i -= 2){
//     console.log(i);
// }

//  for (let i = 10; i <= 100000; i *= 10){
//     console.log(i);
//  }

// const animaals = ['cat', 'deer', 'hog', 'koala', 'zebra'];

// for (let i = 0; i < animaals.length; i++){
//     console.log(i + 1, animals[1]);
// }

//   const studentRow = [
//      ['Olivia', 'Liam', 'Emma', 'Noah' ],
//      ['Amalia', 'Olivia', 'Ava', 'Elijah'],
//      ['Sophia', 'Mateo', 'Isabella', 'Lucas'],
//  ];

//   for (let i = 0; i < studentRow.length; i++){
//      const row = studentRow[i];
//      console.log('seat Row #${i + 1}');
//     for (let j = 0; j < rpw.length; j++){
//          console.log(' $ {row[j]}');
//      }
//   }

  // for (let row of studentRow){
  //   for (let student of row){
  //       console.log(student)
  //   }
  // }



// const pilihan ='abcd';
// for (let i =1; i <= 10; i++){
//     console.log('${i}. soal nomer ${i}:');
//     for (let j =0; j <pilihan.length; j++){
//         console.log('   ${pilihan[j]}.pilihan jawaban');
//     }
// }

// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// for (let num = 0; num < 10; num++){
//     console.log(num);
// }

// const PASSWORD = 'Pass123';

// let guess = prompt('enter the password');
// while (guess !== PASSWORD){
//     guess = prompt('enter the password ');
// }
// alert('congrats! the password is correct');

// let input = prompt('Hei, say something!');
// while (true){
//     input = prompt(input);
//     if (input.toLowerCase ==='stop') break;
// }
// alert('ok');

// for (let i = 0; i <10000;i++){
//     console.log(i);
//     if (i === 100)break;
// }

// const studentScore = {
//   Olivia : 20,
//   Liam : 13,
//   Emma : 40,
//   Noah :18,
//   Amalia : 32,
//   Olivia : 10,
//   Ava : 11,
//   Elijah : 21,
//   Sophia: 14,
//   Mateo : 22,
  
// };
// for (let student in studentScore){
//   console.log('${student} memiliki skor ${studentScore[student]}');
// }

// let total = 0;
// let scores = objek.values(studentScore);
// for (let score of scores) {
//   total += scores;
// }
// console.log(total / scores.length);

// let lembarDadu = console.log(lembarDadu);

// function lembarDadu(){
//   console.log(math.floor(math.rendom()* 6) + 1);
// }

//  function nyanyi(){
//   console.log('cek...');
//   console.loh('Do re mi..');
//  }

//  nyanyi();
//  nyanyi();
//  nyanyi();
//  nyanyi();
//  nyanyi();

//  function SelamatPagi(name){
//   console.log('Halo, ${name}. selamat pagi!');
//  }
//  SelamatPagi('Aim');

// function jumlahkan(a,b){
//   if (typeof a !== 'number' || typeof b !== 'number'){
//     return 'bukan angka';
//   }
//   return a + b;
  
// }

// let programming = ' JavaScript';

// function typesafe() {
//   let programming = 'TypeScript';
//   console.log(programming);
// }

// typesafe();

// console.log(programming);

// let tinggi = 8;
// if (tinggi > 5) {
//   var lebar = 10;
//   // console.log(lebar);

// }

// console.log('lebar');

// for (let index  =0; index <10; index++){
//   var lebar = index;
//   // console.log(indexNumber);
// }
// console.log('lebar:',lebar);

// function lamarkerja(){

//   const jabatan = 'programmer';

//   function orangdalam(){
//     function orangdalem(){
//     let kenalan = 'orang dalam bisa memasukan${jabatan}';
//     console.log(kenalan);

//   }
//   orangdalem();
// }

// lebihdalem();
// }

// function perpangkatan(nilai){
//   return nilai * nilai;

// }

// let hasil = perpangkatan(5);

// const hasilperpangkatan = function (nilai, pembanding) {
//   return nilai * pembanding;
// }

// function duakali(func){
//   func();
//   func();
// }

// function lempardadu(){
//   const hasil =math.flour(math.rendom()* 6)+ 1;
//   console.log(hasil);
// }

// function hasilnyaadalahfunction(){
//   const rand = math.rendom();
//   if (rand > 0.1){
//   return function(){
//     console.log('selamat, anglanya lebih besar');
//   };
// }else{
//   return function() {
//     console.log('maaf, mungkin bisa coba lagi');
//   };
// }
// }

// function myfun(){
//   console.log('HI');
//   return 'HELLO';

// }
// const saya = {
//   nama: 'aim',
//   hobi: 'mancing ikan',
//   kenalan: function(){
//     return 'Hi, saya ${this.nama'}. Hobi saya ${this.hobi}.';
//   },
// };

// try{
//   saya.kenalan();
// } catch {
//   console.log{'error!!'};
// }

// saya.kenalan();
// console.log('setelan proses try and catch');

function teriak(msg){
  try {
    console.log(msg.toUppercase());
  } catch (error) {
    console.log(error);
    console.log('silakan masukan tipe data string pada argument teriak()');
  
  }
}
