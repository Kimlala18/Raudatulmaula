const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('#notes');

// input.addEventListener('change', (e) => {
//     console.log('Nilai Berubah');
// });

input.addEventListener('change', (e) => {
    console.log('Nilai Berhasil diinput');
});

form.addEventListener('subbmit', function (e){
    e.preventDefault();
    const notevalue = input.Value;
    const newList = document.createElement('li');
    newList.innerText = noteValue;
    list.append(newList);
    input.value ="";
    

});

// document.querySelector('a').addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('harusnya ke google');
// });