function controlKeyword(elem){
    elem.closest('.radios').find('label.active').removeClass('active');
    elem.closest('label').toggleClass('active')
    const secForm = elem.closest('.container-keyword').siblings('.sec-form');
    const clickedKeyword = elem[0].defaultValue
    //clickedKeyword로 체크된 키워드의 value를 받아올 수 있습니다.
    console.log(clickedKeyword)
    for(let i=0;i<secForm.length;i++){
        secForm[i].style.display= 'block'
    }
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

function controlOptions(elem){
    let option = elem.closest('.option')
    let nowOption = document.querySelector(".option.now")
    let activeElems = document.querySelectorAll('.option.active')

    if(!option.classList.contains('active')){

        option.classList.add('active')
        if(nowOption){

            nowOption.classList.remove('now')

        }

        option.classList.add('now')

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

            }
        }

    }

    nowOption = document.querySelector(".option.now")

    if(nowOption){

        changeConts(nowOption)

    }else if(nowOption === null){

        document.querySelector(".sec-option_conts.on").classList.remove('on')

    }
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