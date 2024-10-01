// const angka = [1, 2 ,3, 4, 5, 6, 7, 8, 9];
// const angkaDouble = angka.map(function(num){
//     return num * 2;
// });

// const angkaBaru = angka.filter((n)=>{
//     return n < 5;
// });

// const animes = [
//     {
//         title: 'Attack on Titan',
//         reting: 90,
//     },
//     {
//         title: 'One PIACE',
//         reting: 89,
//     },
//     {
//         title: 'Bleach',
//         reting: 83,
//     },
//     {
//         title: 'Hunter & Hunter',
//         reting: 90,
//     },
//     {
//         title: 'Naruto',
//         reting: 84,
//     },
// ];
 
const animeBagus = animes.filter((anime) => anime.ranting >= 85);
const judulAnimeBagus =animes

.filter((anime) => anime.ranting >=85)
.map((anime) => anime.title);

const animeCukupBagus = animes.filter((anime) => anime.ranting < 85);
const animeBaru = animes.filter((anime) => anime.year > 2010);


 // animes.forEach(function(anime){
//     console.log('${anime.title}- ${anime.rating}/100');
 // });

// const animeList = anime.map(function(anime){
//     return anime.title.toUpperCase
// })

// function perpangkatan(x) {
//     return x * x;
// }

// const hasil = perpangkatan(5);

// const perpangkatan = (x) => {
//     return x * x;
// };

// const random = () => {
//     return Math.floor(math.rendom() * 1000);
// };
// const add = (a, b) => a + b

// console.log('Halo...');
// setTimeout(()=>{
// console.log('masih di sanah gak?');
// }, 5000);
// console.loh('saya pergi yah..');

const interval = setInterval(()=>{
    console.log(math.rendom());

}, 2000);


const examstore = [80, 85, 79, 90, 93, 77];
// let total = 0;
// for (let score of examscore){
//     total += score;
// }

// const total =examScore.reduce((total, score ) =>{
//     return total + score;
// });

//     const animes = [
    
//      {       
//         title: 'One PIACE',
//         reting: 89,
//         year: 1999,
//      },
//     {
//                 title: 'Bleach',
//                 reting: 83,
//                 year: 2004
//     },
    
//     {
//             title: 'Attack on Titan',
//             reting: 90,
//             year: 2013
//     },
//     {
//                 title: 'Hunter & Hunter',
//                 reting: 90,
//                 year: 2011
//     },
//     {
//                 title: 'Naruto',
//                  reting: 84,
//                  year:2002
//      },
//     ];

    // const bestAnime = animes.reduce((bestAnime, currAnime) =>{
    //     if(currAnime.reting > bestAnime.reting){
    //         return currAnime;
    // }
    //     return bestAnime;
    // });


    // const person ={
    //     firstName: 'john',
    //     lastName: 'Deo',
    //     fullName: function (){ 
    //         console.log(this);
    //         return '${this.firstName}${this.lastName}';
    //     },

        // pangilNanti: function(){
        //     setTimeout(function(){
        //         console.log(this);
        //         console.log(this.fulName());
        //     },3000);
            
    //     },
    // };


    // function lemparDadu(sisi = 6) {
    //     return math.floor(,ath.rendom()* sisi) + 1;
    // }

    // function sapa(name, msg = 'selamat bekerja'){
    //     donsole.log('${orang} ${msg}');
    // }


        // const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // const nama = ['Alex', 'Bimo', 'Cici', 'Delia', 'Felix'];

        // const campuran = [...angka, ...nama];


        // const user = {
        //     name: 'John',
        //     email: 'john@deo.com',
            
        // };

        // const credential ={
        //     password: 'password',
        //     token: 'u123786uahsgdouasdt'
        // }

        // const userBaru = { ...user, ...credential};
 
        // const sumAll = (...nums) => {
        //     return nums.reduce((total, el) => total + el);
        // };

        const nama = ['Alex', 'Bimo', 'Cici', 'Delia', 'Felix', 'Gerard', 'Huey'];

        // const pemenang = (gold, silver, vronze, ...sisa) =>{
        //     console.log('mendali emas di raih: ${gold}');
        //     console.log('mendali silver di raih: ${silver}');
        //     console.log('mendali bronze di raih: ${bronze}');
        //     console.log('peserta lainya: ${sisa}');
        // };
         
        // const [gold, silver, broze, ...peserta] = nama;

        // const user = {
        //          name: 'John',
        //         email: 'john@deo.com',
                
        //     };

        //     const{ name: name, email, phone = '089123124'} = user;

        //     phone;

        const animes = [
    
                 {
                         title: 'Attack on Titan',
                         reting: 90,
                         year: 2013
                 },
                 {
                             title: 'Hunter & Hunter',
                             reting: 90,
                             year: 2011
                 },
                 {
                             title: 'Naruto',
                              reting: 84,
                             year:2002
                 },
               ];

            const anime = animes.map(({ title, year, reting}) => {
                return '${title}(${uear}) rating ${silver}';
            });

