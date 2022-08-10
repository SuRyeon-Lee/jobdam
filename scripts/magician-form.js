function controlKeyword(elem){
    elem.closest('.radios').find('label.active').removeClass('active');
    elem.closest('label').toggleClass('active')
    const secForm = elem.closest('.container-keyword').siblings('.sec-form');
    for(let i=0;i<secForm.length;i++){
        secForm[i].style.display= 'block'
    }
}

function controlOptions(elem){
    let option = elem.closest('.option') //지금 누른거의 옵션
    if(!option.classList.contains('active')){ //지금 누른게 이미 액티브 되어 있지 않다면

        option.classList.add('active')

    }else if(option.classList.contains('active')){ //지금 누른게 이미 액티브 되어있다면

        option.classList.remove('active')

    }
    changeConts(elem)
}

function changeConts(input){
    let nowID = input.id
    let nowCont = document.querySelector(".sec-option_conts[data-option='"+ nowID + "']")
    nowCont.classList.contains('on') ? nowCont.classList.remove('on'):nowCont.classList.add('on');
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

function controlCombine(elem){
    let areaCombine = elem.closest('.area-combine');
    if(elem.classList.contains('btn-combine')){
        areaCombine.dataset.combine = 'on'
    }else if(elem.classList.contains('btn-star')){
        areaCombine.dataset.combine = 'off'
    }
}

function resizeTextArea(obj) {
    obj.style.height = "1px";
    obj.style.height = (12+obj.scrollHeight)+"px";
}

function controlMoreBtn(el){
    const radioContainer = el.closest('.radios')
    const activatedLabel = radioContainer.find('label.active')[0]
    radioContainer[0].insertBefore(activatedLabel,radioContainer[0].firstChild)
}