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
    i++

    li.className = 'li'
    li.textContent = value
    result.appendChild(li)

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
        li.classList.toggle('li-active')
    })

    total.textContent = i
    result.appendChild(li)
}