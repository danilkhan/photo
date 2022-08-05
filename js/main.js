// const textSpan = document.querySelector('.text-btn-one span')
// const textText = document.querySelector('.text-btn-one p')
// const textOne = document.querySelector('.text-btn-one')
// const iconArr = document.querySelector('.icon-arr-bot')
// const textBlock = document.querySelector('.text-text')
// const textBlockTwo = document.querySelector('.text-text-two')
// const textTwo = document.querySelector('.text-btn-two')
// textOne.setAttribute('hide', 'true')

// textOne.addEventListener('click', function(){
//     if(textOne.getAttribute('hide')){
//         textBlock.style.display = 'flex'
//         textSpan.style.transform = 'rotate(180deg)'
//         textSpan.style.display = 'inline-block'
//         textText.innerHTML = 'Скрыть'
//         textOne.removeAttribute('hide')
//     }
//     else{
//         textBlock.removeAttribute("style")
//         textBlock.style.display = '-webkit-box'
//         textSpan.style.transform = 'rotate(0deg)'
//         textText.innerHTML = 'Подробнee'
//         textOne.setAttribute('hide','true')
//     }
// })


const textSpan = document.querySelector('.text-btn span')
const textText = document.querySelector('.text-btn p')
const textOne = document.querySelectorAll('.text-btn')
const iconArr = document.querySelector('.icon-arr-bot')
const textBlock = document.querySelector('.text-text-one')
const textBlockTwo = document.querySelector('.text-text-two')

textOne.forEach(function(chek, key){
    chek.setAttribute('hide', 'true');
    chek.addEventListener('click', function(){
        if(chek.getAttribute('hide')){
            textBlock.style.display = 'flex'
            textSpan.style.transform = 'rotate(180deg)'
            textSpan.style.display = 'inline-block'
            textText.innerHTML = 'Скрыть'
            chek.removeAttribute('hide')
        }
        else{
            textBlock.removeAttribute("style")
            textBlock.style.display = '-webkit-box'
            textSpan.style.transform = 'rotate(0deg)'
            textText.innerHTML = 'Подробнee'
            chek.setAttribute('hide','true')
        }
        console.log(chek);
    })
})

