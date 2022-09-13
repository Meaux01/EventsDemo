const body = document.querySelector('body')
const reset = () => {
    console.log('Clicked!!!!!')
}
const randNum = () => {
    console.log(Math.floor(Math.random() * 255))
}
// dom property way
const resetBtn = document.getElementById('reset-btn')
resetBtn.onclick = reset

// add event listener 
const btn = document.querySelector('#reset-btn2')
btn.addEventListener('click',reset)
btn.addEventListener('click', randNum)
btn.addEventListener('click', function(){
    body.style.backgroundColor = 'purple'
})