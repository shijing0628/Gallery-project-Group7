filterCategory('all');
function filterCategory(filter) {
    let allElements, i;
    allElements = document.getElementsByClassName('image-column');
    console.log(allElements);

    if (filter == 'all') filter='';
    for (i = 0; i < allElements.length; i++) {
        removeClass(allElements[i], 'showCategory');
        console.log("test");
        if (allElements[i].className.indexOf(filter) > -1) addClass(allElements[i], 'showCategory');
        console.log("show class should be added!");
    }
}

function addClass(element, classShowCategory) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = classShowCategory.split(' ');

    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += ' ' + arr2[i];
        }
    }
    console.log("got into addClass - Added showCategory to div");
}

function removeClass(element, classShowCategory) {
    let i, arr1, arr2;
    arr1 = element.className.split(' ');
    arr2 = classShowCategory.split(' ');

    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    console.log("got into removeClass");
    element.className = arr1.join(' ');
    console.log("what did you remove?");
}


let btnContainer = document.getElementById('categoryBtnContainer');
let btns = btnContainer.getElementsByClassName('btn');

for (let i = 0; i < btns.length; i++ ) {
    btns[i].addEventListener('click', function(){
        let selectedBtn = document.getElementsByClassName('active');
        selectedBtn[0].className = selectedBtn[0].className.replace(' active', '');
        this.className += ' active';
    });
}
