
const lightDarkChanger = () => {

    const changeButton = document.querySelector('.background-change-circle')
    const changeBackground = document.querySelector('.background-change-container')

    const whiteText = document.querySelectorAll('.white-text')
    const bodyBackground = document.querySelector('body')
    
    const sideBar = document.querySelector('.side-bar')
    const topBar = document.querySelector('.top-bar')

    


    changeBackground.addEventListener('click', () => {
       if (changeButton.classList.contains('button-back-dark')) {
           changeButton.classList.add('button-back-light')
           changeButton.classList.remove('button-back-dark')
           changeBackground.classList.add('back-light')
           changeBackground.classList.remove('back-dark')



            whiteText.forEach(text => {
                text.classList.remove('white-text')
                text.classList.add('black-text')
            })

            bodyBackground.classList.remove('body-dark')
            bodyBackground.classList.add('body-light')

            sideBar.classList.remove('dark-side-bar')
            sideBar.classList.add('light-side-bar')

            topBar.classList.remove('dark-top-bar')
            topBar.classList.add('light-top-bar')

       } else {
        changeButton.classList.remove('button-back-light')
        changeButton.classList.add('button-back-dark')
        changeBackground.classList.remove('back-light')
        changeBackground.classList.add('back-dark')
    

     

        whiteText.forEach(text => {
            text.classList.add('white-text')
            text.classList.remove('black-text')
        })

        bodyBackground.classList.add('body-dark')
        bodyBackground.classList.remove('body-light')

        sideBar.classList.add('dark-side-bar')
        sideBar.classList.remove('light-side-bar')

        topBar.classList.add('dark-top-bar')
        topBar.classList.remove('light-top-bar')
       }
    })

}

export {lightDarkChanger}