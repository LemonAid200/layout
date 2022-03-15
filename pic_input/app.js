console.log('app.js is connected')


const loadPicButton = document.querySelector('.btn')
const input = document.querySelector('#input_pic')

const activateLoader = () => input.click()


function picHandler(event){
    const files = event.target.files
    console.log(files)
    

}



loadPicButton.addEventListener('click', activateLoader)

input.addEventListener('change', picHandler)

