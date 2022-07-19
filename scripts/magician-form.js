function controlOptions(elem){
    let option = elem.closest('.option')
    let nowOption = document.querySelector(".option.now")
    let activeElems = document.querySelectorAll('.option.active')
    let navTit =  document.querySelector('.form-container nav .tab-tit')
    if(!option.classList.contains('active')){

        option.classList.add('active')
        if(nowOption){

            nowOption.classList.remove('now')

        }

        option.classList.add('now')
        navTit.closest('nav').classList.add('on')

    }else if(option.classList.contains('active')){

        if(!option.classList.contains('now')){
            if(nowOption){

                nowOption.classList.remove('now')

            }
            option.classList.add('now')
            option.querySelector('input').checked = true

        }else if(option.classList.contains('now')){

            option.classList.remove('now')
            option.classList.remove('active')
            option.querySelector('input').checked = false
            activeElems = document.querySelectorAll('.option.active')

            if(activeElems.length !== 0){

                activeElems[activeElems.length-1].classList.add('now')

            }else if(activeElems.length === 0){

                navTit.textContent = ''
                navTit.closest('nav').dataset.option = ''
                navTit.closest('nav').classList.remove('on')

            }
        }

    }

    nowOption = document.querySelector(".option.now")

    if(nowOption){

        changeConts(nowOption)
        changeTitle(nowOption)

    }else if(nowOption === null){

        document.querySelector(".sec-option_conts.on").classList.remove('on')
    
    }
}

function changeTitle(nowOption){

    let nowTit = nowOption.querySelector('.name').textContent
    let nowTitArea = document.querySelector('.form-container nav .tab-tit')
    let nowID = nowOption.querySelector('input').id
    nowTitArea.textContent = nowTit
    nowTitArea.closest('nav').dataset.option = nowID
}

function changeConts(nowOption){
    let nowID = nowOption.querySelector('input').id
    let nowCont = document.querySelector(".sec-option_conts[data-option='"+ nowID + "']")
    let onCont = document.querySelector(".sec-option_conts.on")
    if(onCont){
        onCont.classList.remove('on')
    }
    nowCont.classList.add('on');
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function openPopups(button){
    const popupGroup = document.querySelector('.popups')
    let nowPopupName,nowOptionName,nowPopup
    nowPopupName = button.dataset.popup;
    nowOptionName= button.closest('nav').dataset.option
    nowPopup = document.querySelector(".popup[data-popup='"+ nowPopupName + "'][data-option='" + nowOptionName + "']")
    popupGroup.classList.add('on')
    nowPopup.classList.add('on')
    document.querySelector('body').style.overflow='hidden'
}

function closePopups(){
    const popupGroup = document.querySelector('.popups')
    popupGroup.classList.remove('on');
    popupGroup.querySelector('.popup.on').classList.remove('on')
    document.querySelector('body').style.overflow='auto'
}

function controlOnepass(elem){
    let areaOnepass = elem.closest('.area-onepass');
    
    if(areaOnepass.dataset.onepass === 'off'){
        areaOnepass.dataset.onepass = 'on'
    }else if(areaOnepass.dataset.onepass === 'on'){
        areaOnepass.dataset.onepass = 'off'
    }
}

function resizeTextArea(obj) {
    obj.style.height = "1px";
    obj.style.height = (12+obj.scrollHeight)+"px";
}