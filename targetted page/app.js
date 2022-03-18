console.log('app js has been connected')


const big_pic_loader = document.querySelector('.pic_load_big')
const small_pic_loader = document.querySelector('.pic_load_small')
const big_input = document.querySelector('.big_pic_input')
const small_input = document.querySelector('.small_pic_input')
const big_photos_wrapper = document.querySelector('.big_photos_wrapper')
const small_photos_wrapper = document.querySelector('.small_photos_wrapper')
const big_add_button = document.querySelector('.pic_load_big')

big_input.addEventListener('change', picHandler)
big_photos_wrapper.addEventListener('click', removePicture)
small_input.addEventListener('change', picHandlerSmall)
small_photos_wrapper.addEventListener('click', removePicture)


let big_pics_array_length = 0
let small_pics_array_length = 0


function removePicture(event) {
    if (!event.target.dataset.name) {return}

    if (event.target.classList[1] == 'big_closing') {
        big_pics_array_length -= 1
        const removablePicture = document.querySelector(`[data-name='${event.target.dataset.name}+big']`)
        removablePicture.remove()
        big_pic_loader.classList.remove('hidden')
    }

    if (event.target.classList[1] == 'small_closing') {
        small_pics_array_length -= 1
        console.log(small_pics_array_length)
        const removablePicture = document.querySelector(`[data-name='${event.target.dataset.name}+small']`)
        removablePicture.remove()
        small_pic_loader.classList.remove('hidden')
    }

    giveNumbers()
}



big_pic_loader.addEventListener('click', (event) =>
    big_input.click()
)

small_pic_loader.addEventListener('click', (event) =>
    small_input.click()
)


function picHandler(event) {
    file_storage = Array.from(event.target.files)

    file_storage.forEach(file => {       
        const reader = new FileReader()
        reader.onload = event => {
            if (big_pics_array_length == 5) {return}
            const image = event.target.result
            big_photos_wrapper.insertAdjacentHTML('afterbegin',
                ` <div style="position: relative; margin-right: 20px; margin-bottom: 20px;" data-name="${file.name}+big" class = "big_pic_container">
                    <div class="closeV big_closing" data-name="${file.name}"></div>
                    <div class="big_preview_box">
                        <img src="${image}" class="big_pic_preview" alt="">
                    </div>
                    <div class="pic_number big_pic_number"></div>
                </div>`
            )
            giveNumbers()
            big_pics_array_length += 1
            if(big_pics_array_length==5){
                big_pic_loader.classList.add('hidden')
            }
        }
        reader.readAsDataURL(file)
    })
}

function picHandlerSmall(event) {
    file_storage = Array.from(event.target.files)
    file_storage.forEach(file => {
        const reader = new FileReader()

        reader.onload = event => {
            if (small_pics_array_length == 5) {
                return
            }
            const image = event.target.result
            small_photos_wrapper.insertAdjacentHTML('afterbegin',
                ` <div style="position: relative; margin-right: 20px; margin-bottom: 20px;" data-name="${file.name}+small" class = "big_pic_container">
                    <div class="closeV small_closing" data-name="${file.name}"></div>
                    <div class="small_preview_box">
                        <img src="${image}" class="small_pic_preview" alt="">
                    </div>
                    <div class="pic_number small_pic_number"></div>
                </div>`
            )
            giveNumbers()
            small_pics_array_length += 1
            if(small_pics_array_length==5){
                small_pic_loader.classList.add('hidden')
            }
        }
        reader.readAsDataURL(file)
    })
}


function giveNumbers() {
    let arrayOfBigPicNumbers = document.querySelectorAll('.big_pic_number')
    let index = 0
    arrayOfBigPicNumbers = Array.from(arrayOfBigPicNumbers)
    arrayOfBigPicNumbers.forEach(number => {
        index += 1
        number.innerHTML = index

    })

    let arrayOfsmallPicNumbers = document.querySelectorAll('.small_pic_number')
    let indexS = 0
    arrayOfsmallPicNumbers = Array.from(arrayOfsmallPicNumbers)
    arrayOfsmallPicNumbers.forEach(number => {
        indexS += 1
        number.innerHTML = indexS

    })
}




