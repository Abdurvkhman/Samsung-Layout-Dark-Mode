'use strict'

let darkThemeBtn = document.querySelector('.dark-theme-btn')

let bodyTheme = document.querySelector('body')

let headerImg = document.querySelector('.header-img')

let lightThemeBtn = document.querySelector('.light-theme-btn')

let rightTitleTriangle = document.querySelector('.right-title-triangle')

let downTitleTriangle = document.querySelector('.down-title-triangle')

let headerNavMenu = document.querySelector('.header-nav-menu')

let listItemLink = document.querySelectorAll('.list-item-link')

let headerHoverLine = document.querySelector('.header-hover-line')

let secondHeaderHoverLine = document.querySelector('.second-header-hover-line')

let thirdHeaderHoverLine = document.querySelector('.third-header-hover-line')

let fouthHeaderHoverLine = document.querySelector('.fouth-header-hover-line')

let addBlock = document.querySelector('.add-block')

let firstAddBtn = document.querySelector('.first-add-btn')

let secondAddBtn = document.querySelector('.second-add-btn')

let slideBtn = document.querySelectorAll('.m')

let sixMainBtn = document.querySelector('.six-main-btn')

let sevenMainBtn = document.querySelectorAll('.seven-main-btn')

let firstMiniBlock = document.querySelectorAll('.first-mini-block')

// 

// Появление скрытого нав-менюlet firstMiniBlock = document.querySelectorAll('.first-mini-block')

rightTitleTriangle.onclick = () => {
    rightTitleTriangle.style.opacity = '0'
    rightTitleTriangle.style.visibility = 'hidden'
    downTitleTriangle.style.opacity = '1'
    downTitleTriangle.style.visibility = 'visible'
    headerNavMenu.style.opacity = '1'
    headerNavMenu.style.visibility = 'visible'
    headerNavMenu.style.transition = '0.5s'
}

downTitleTriangle.onclick = () => {
    rightTitleTriangle.style.opacity = '1'
    rightTitleTriangle.style.visibility = 'visible'
    downTitleTriangle.style.opacity = '0'
    downTitleTriangle.style.visibility = 'hidden'
    headerNavMenu.style.opacity = '0'
    headerNavMenu.style.visibility = 'hidden'
    headerNavMenu.style.transition = '0.5s'
}

// Изменение цвета фона

darkThemeBtn.onclick = () => {
    bodyTheme.style.backgroundColor = '#1E1E1E'
    bodyTheme.style.color = 'white'
    headerImg.style.opacity = '0'
    darkThemeBtn.style.opacity = '0'
    darkThemeBtn.style.visibility = 'hidden'
    lightThemeBtn.style.opacity = '1'
    lightThemeBtn.style.visibility = 'visible'
    localStorage.clear()
    if (bodyTheme.style.backgroundColor = '#1E1E1E') {
        localStorage.setItem('theme', 'dark')
    }
    bodyTheme.style.transition = '0.8s'
    listItemLink.forEach(i => {
        i.style.color = 'white'
    })
    headerHoverLine.style.backgroundColor = 'white'
    secondHeaderHoverLine.style.backgroundColor = 'white'
    thirdHeaderHoverLine.style.backgroundColor = 'white'
    fouthHeaderHoverLine.style.backgroundColor = 'white'
    slideBtn.forEach(i => {
        i.style.backgroundColor = 'transparent'
    })
    sixMainBtn.style.border = '1px solid #fff'
    sixMainBtn.style.color = 'white'
    sevenMainBtn.forEach(i => {
        i.style.border = '1px solid #fff'
        i.style.color = 'white'
    })
    firstMiniBlock.forEach(i => {
        i.style.backgroundColor = 'transparent'
        i.style.color = 'white'
        i.style.fontWeight = '400'
    })
}

if (localStorage.getItem('theme')) {
    bodyTheme.style.backgroundColor = '#1E1E1E'
    bodyTheme.style.color = 'white'
    headerImg.style.opacity = '0'
    darkThemeBtn.style.opacity = '0'
    darkThemeBtn.style.visibility = 'hidden'
    lightThemeBtn.style.opacity = '1'
    lightThemeBtn.style.visibility = 'visible'
    bodyTheme.style.transition = '0.8s'
    listItemLink.forEach(i => {
        i.style.color = 'white'
    })
    headerHoverLine.style.backgroundColor = 'white'
    secondHeaderHoverLine.style.backgroundColor = 'white'
    thirdHeaderHoverLine.style.backgroundColor = 'white'
    fouthHeaderHoverLine.style.backgroundColor = 'white'
    slideBtn.forEach(i => {
        i.style.backgroundColor = 'transparent'
    })
    sixMainBtn.style.border = '1px solid #fff'
    sixMainBtn.style.color = 'white'
    sevenMainBtn.forEach(i => {
        i.style.border = '1px solid #fff'
        i.style.color = 'white'
    })
    firstMiniBlock.forEach(i => {
        i.style.backgroundColor = 'transparent'
        i.style.color = 'white'
        i.style.fontWeight = '400'
    })
}

lightThemeBtn.onclick = () => {
    bodyTheme.style.backgroundColor = 'white'
    bodyTheme.style.color = 'black'
    headerImg.style.opacity = '1'
    lightThemeBtn.style.opacity = '0'
    lightThemeBtn.style.visibility = 'hidden'
    darkThemeBtn.style.opacity = '1'
    darkThemeBtn.style.visibility = 'visible'
    localStorage.clear()
    if (bodyTheme.style.backgroundColor === 'white') {
        localStorage.setItem('secondTheme', 'light')
    }
    bodyTheme.style.transition = '0.8s'
    listItemLink.forEach(i => {
        i.style.color = 'black'
    })
    headerHoverLine.style.backgroundColor = '#00B3E3'
    secondHeaderHoverLine.style.backgroundColor = '#00B3E3'
    thirdHeaderHoverLine.style.backgroundColor = '#00B3E3'
    fouthHeaderHoverLine.style.backgroundColor = '#00B3E3'
    slideBtn.forEach(i => {
        i.style.backgroundColor = 'black'
    })
    sixMainBtn.style.border = '1px solid black'
    sixMainBtn.style.color = 'black'
    sevenMainBtn.forEach(i => {
        i.style.border = '1px solid black'
        i.style.color = 'black'
    })
    firstMiniBlock.forEach(i => {
        i.style.backgroundColor = '#F3F4F6'
        i.style.color = 'black'
        i.style.fontWeight = '700'
    })
}

if (localStorage.getItem('secondTheme')) {
    bodyTheme.style.backgroundColor = 'white'
    headerImg.style.opacity = '1'
    darkThemeBtn.style.opacity = '1'
    darkThemeBtn.style.visibility = 'visible'
    lightThemeBtn.style.opacity = '0'
    lightThemeBtn.style.visibility = 'hidden'
    bodyTheme.style.transition = '0.8s'
    listItemLink.forEach(i => {
        i.style.color = 'black'
    })
    slideBtn.forEach(i => {
        i.style.backgroundColor = 'black'
    })
    sixMainBtn.style.border = '1px solid black'
    sixMainBtn.style.color = 'black'
    sevenMainBtn.forEach(i => {
        i.style.border = '1px solid black'
        i.style.color = 'black'
    })
    firstMiniBlock.forEach(i => {
        i.style.backgroundColor = '#F3F4F6'
        i.style.color = 'black'
        i.style.fontWeight = '700'
    })
}

// Эффект при наведении на ссылки

listItemLink[0].onmouseenter = () => {
    headerHoverLine.style.transform = 'scaleX(1)'
    headerHoverLine.style.transformOrigin = 'left'
    headerHoverLine.style.transition = '0.25s'
}

listItemLink[0].onmouseleave = () => {
    headerHoverLine.style.transform = 'scaleX(0)'
}

listItemLink[1].onmouseenter = () => {
    secondHeaderHoverLine.style.transform = 'scaleX(1)'
    secondHeaderHoverLine.style.transformOrigin = 'left'
    secondHeaderHoverLine.style.transition = '0.25s'
}

listItemLink[1].onmouseleave = () => {
    secondHeaderHoverLine.style.transform = 'scaleX(0)'
}

listItemLink[2].onmouseenter = () => {
    thirdHeaderHoverLine.style.transform = 'scaleX(1)'
    thirdHeaderHoverLine.style.transformOrigin = 'left'
    thirdHeaderHoverLine.style.transition = '0.25s'
}

listItemLink[2].onmouseleave = () => {
    thirdHeaderHoverLine.style.transform = 'scaleX(0)'
}

listItemLink[3].onmouseenter = () => {
    fouthHeaderHoverLine.style.transform = 'scaleX(1)'
    fouthHeaderHoverLine.style.transformOrigin = 'left'
    fouthHeaderHoverLine.style.transition = '0.25s'
}

listItemLink[3].onmouseleave = () => {
    fouthHeaderHoverLine.style.transform = 'scaleX(0)'
}

//Рекламный блок

// let addSet = setInterval(() => {
//     addBlock.style.opacity = '1'
//     addBlock.style.visibility = 'visible'
//     addBlock.style.transition = '0.5s'
//     firstAddBtn.onclick = () => {
//         addBlock.style.opacity = '0'
//         addBlock.style.visibility = 'hidden'
//         addBlock.style.transition = '0.5s'
//     }
//     secondAddBtn.onclick = () => {
//         addBlock.style.opacity = '0'
//         addBlock.style.visibility = 'hidden'
//         addBlock.style.transition = '0.5s'
//         clearInterval(addSet)
//     }
// }, 2000)