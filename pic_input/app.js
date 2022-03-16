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
            console.log(file)
            wrapper.insertAdjacentHTML('afterbegin', 
            `<div class=peview_wrapper>
                <div class=delete_pic_button>&times;</div>
                    <img src = "${image}" class='image_prevew'></img>
                    <div class="pic_info"><marquee>${file.name}</marquee></div>

            
            
            </div>`)

        }
        
        
        reader.readAsDataURL(file)

    })
    

}



loadPicButton.addEventListener('click', activateLoader)

input.addEventListener('change', picHandler)

