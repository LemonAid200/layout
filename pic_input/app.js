console.log('app.js is connected')


const loadPicButton = document.querySelector('.btn')
const input = document.querySelector('#input_pic')
const wrapper = document.querySelector('.wrapper')

const activateLoader = () => input.click()



function picHandler(event){
    const files = Array.from(event.target.files)
    
    files.forEach(file => {
        const reader =  new FileReader()
        
        reader.onload = event => {
            const image = event.target.result
            wrapper.insertAdjacentHTML('afterbegin', `<img src = "${image}" class='image_prevew'></img>`)

        }
        
        
        reader.readAsDataURL(file)

    })
    

}



loadPicButton.addEventListener('click', activateLoader)

input.addEventListener('change', picHandler)

