const textInput= document.querySelector('#textInput');
const addTextBtn= document.querySelector('#addTextBtn');
const textUl = document.querySelector('#textUl');

const btnDelText =document.querySelector('#delText');//доступ к кнопке удалить всё
btnDelText.disabled = true;
console.log(btnDelText);

function loadArr(){
    let listArr = window.localStorage.getItem('listArr');
    listArr = listArr ? JSON.parse(listArr) : [];
    return listArr;
}
function saveArr(arr){
    window.localStorage.setItem('listArr', JSON.stringify(arr));
}

function addElem(textCont){
    document.querySelector('.container__notext').style.display = 'none';

        document.querySelector('.container__textlist').style.display = 'flex';

    let textLi = document.createElement('li');
        textLi.textContent = textCont;

        let checkBox = document.createElement('input');
        checkBox.type = "checkbox";

        textLi.append(checkBox);
        let listPlan = textUl.append(textLi);
}

function addText() {
    let textCont =textInput.value;
    const listArr =loadArr();

    listArr.push(textCont);
    saveArr(listArr);

    if(textCont == ''){
        document.querySelector('#errorOne').innerHTML = `введите текст`;
    }
    else{
        document.querySelector('#errorOne').innerHTML = '';

        addElem(textCont);

        textInput.value = '';

    }

}

addTextBtn.addEventListener('click', addText);

function activBtn(){
    const listArr =loadArr();
    if(listArr.length == 0){
        btnDelText.disabled = true;
    }
    else{
        btnDelText.disabled = false;
    }
}


function delText(){
    const listArr =loadArr();
    listArr.length = 0;
    saveArr(listArr);

    document.querySelector('.container__notext').style.display = 'block';

    document.querySelector('.container__textlist').style.display = 'none';

    btnDelText.disabled = true;
}

window.addEventListener('load', () => {
    let listArrAdd =loadArr();
    for(let i of listArrAdd) {
        addElem(i);
    }

    activBtn();
});

window.addEventListener('change', () => {
    activBtn();
})



btnDelText.addEventListener('click', delText)







