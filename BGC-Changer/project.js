const btn = document.querySelectorAll('.button');
const canvas = document.querySelector('.canvas');

const txt = document.querySelector('#txt')
txt.style.backgroundColor='red'
txt.innerHTML="abc"
//txt.remove()

btn.forEach(function (btn){
    btn.addEventListener('click', function(e){
        if(e.target.id==='grey'){
            canvas.style.backgroundColor=e.target.id//as color is already in id
            txt.innerHTML='grey is pressed'
            txt.style.backgroundColor=e.target.id
        }
         if(e.target.id==='green'){
            canvas.style.backgroundColor=e.target.id
            txt.innerHTML='green is pressed'
        }
          if(e.target.id==='yellow'){
            canvas.style.backgroundColor=e.target.id
            txt.innerHTML='yellow is pressed'
        
        }
          if(e.target.id==='redish'){
            canvas.style.backgroundColor= 'red'
            txt.innerHTML='red is pressed'
        }
    });
});