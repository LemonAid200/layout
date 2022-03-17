console.log('app.js is connected')


const loadPicButton = document.querySelector('.btn')
const input = document.querySelector('#input_pic')
const wrapper = document.querySelector('.wrapper')

const activateLoader = () => input.click()
let file_storage = []


wrapper.addEventListener('click', event => {


    if (!event.target.dataset.name){
        return
    }

    const {name} = event.target.dataset
    console.log(name)


})


function picHandler(event){
    file_storage = Array.from(event.target.files)
    
    file_storage.forEach(file => {
        const reader =  new FileReader()
        
        reader.onload = event => {
            const image = event.target.result
            
            wrapper.insertAdjacentHTML('afterbegin', 
            `<div class=peview_wrapper>

                <div class=delete_pic_button data-name="${file.name}">&times;</div>

                <img src = "${image}" class='image_prevew'></img>

                <div class="pic_info"><marquee>${file.name}</marquee></div>

            </div>`)

        }
        
        
        reader.readAsDataURL(file)

    })
    

}



loadPicButton.addEventListener('click', activateLoader)

input.addEventListener('change', picHandler)

