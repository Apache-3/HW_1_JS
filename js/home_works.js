// HOME WORKS BY EMIR
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^\w{6,30}@gmail.com$/

gmailInput.addEventListener('keydown', (event) => {
    if (event.code === 'Enter'){
        validate()
    }
})
gmailButton.onclick = validate
function validate (){
    if (regExp.test(gmailInput.value)) {
        gmailResult.textContent = 'Your gmail verified!'
        gmailResult.style.color = 'yellow'
    }else if (gmailInput.value === ''){
        gmailResult.textContent = 'The field must not be empty!'
        gmailResult.style.color = 'red'
    }else{
        gmailResult.textContent = 'Such user does not exist!'
        gmailResult.style.color = 'red'
    }
}

// PART 2

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

function recursionCount(position) {
    childBlock.style.left = position + 'px'
    if (position < parentBlock.offsetWidth - childBlock.offsetWidth) {
        setTimeout(function() {
            recursionCount(position + 1)
        }, 10)
    }
}
recursionCount(0)



