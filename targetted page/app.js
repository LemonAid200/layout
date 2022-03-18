console.log('app js has been connected')



const big_pic_loader = document.querySelector('.pic_load_big')
const small_pic_loader = document.querySelector('.pic_load_small')
const big_input = document.querySelector('.big_pic_input')
const small_input = document.querySelector('.small_pic_input')
const big_photos_wrapper = document.querySelector('.big_photos_wrapper')
let big_pics_array_length = 0



big_photos_wrapper.addEventListener('click', removePicture)

function removePicture(event) {
    if (!event.target.dataset.name) {
        return
    }

    const removablePicture = document.querySelector(`[data-name='${event.target.dataset.name}']`)
    removablePicture.remove()


    big_pics_array_length-=1
    console.log(big_pics_array_length)


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
            if (big_pics_array_length == 5){
                return
            }
            const image = event.target.result
            big_photos_wrapper.insertAdjacentHTML('afterbegin',
                ` <div style="position: relative; margin-right: 20px; margin-bottom: 20px;" data-name="${file.name}" class = "big_pic_container">
                    <div class="closeV" data-name="${file.name}"></div>
                    <div class="big_preview_box">
                        <img src="${image}" class="big_pic_preview" alt="">
                    </div>
                    <div class="pic_number big_pic_number"></div>
                </div>`
            )
            giveNumbers()
            big_pics_array_length+=1
            console.log(big_pics_array_length)
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
}




big_input.addEventListener('change', picHandler)