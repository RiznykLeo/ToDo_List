const input = document.querySelector('#input')
const button = document.querySelector('#button')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let i = 0

total.textContent = i
//Add event

button.addEventListener('click',(e)=>{
    if(input.value ==='') return
    createDeleteElements(input.value)
    input.value = ''
})

//Create and delete task
function createDeleteElements(value){
    const li = document.createElement('li')
    const button = document.createElement('button')
    const span = document.createElement('span')
    i++
    span.className = 'span_'
    span.textContent = value
    li.className = 'li'

    result.appendChild(li)
    li.appendChild(span)
    button.className = 'button'
    button.textContent = 'Erase'
    li.appendChild(button)

    //Remove task
    button.addEventListener('click', e=>{
        result.removeChild(li)
        i--
        total.textContent = i
    })

    //Toggle class active
    li.addEventListener('click', e=>{
        span.classList.toggle('span-active')
    })

    total.textContent = i
    result.appendChild(li)
}