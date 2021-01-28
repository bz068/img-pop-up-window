const pic = './img/template.png';
const pic1 = './img/pixx.jpg';


const picArr = [pic,pic1];

const active = document.querySelector('.active');
const img = document.querySelector('.img');
const right = document.querySelector('.fa-chevron-right');
const left = document.querySelector('.fa-chevron-left');



let position = 0;

function display(position){

active.src = picArr[position];
}

right.addEventListener('click', ()=>{
    position++
    if(position > picArr.length - 1){
        position = 0;
    }
    
    display(position)
})

left.addEventListener('click', ()=>{
    position--
    if(position < 0){
        position = picArr.length-1;
    }
    display(position)
})









picArr.map((pix , index) =>{

   const x =  `<img class="navImg" src=${pix}  data-id=${index} alt${index}>`;


   img.innerHTML += x;

//    console.log(x);
});

const y = document.querySelectorAll('.navImg');

y.forEach((btn, i, e) =>{
    btn.addEventListener('click', ()=>{
        position = i;
        display(position);

    })
})




