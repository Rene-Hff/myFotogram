const fotogramImgs = [
"img/acorns-5646979_640.jpg", 
"img/autumn-5709408_640.jpg", 
"img/cats-eyes-2944820_640.jpg", 
"img/doggy-8683291_640.jpg",
"img/halloween-4585684_640.jpg",
"img/muztagh-9883659_640.jpg",
"img/snail-9868046_640.jpg",
"img/snowflake-6566453_640.jpg",
"img/sparrow-9617024_640.jpg",
"img/train-3758523_640.jpg",
"img/tree-99852_640.jpg",
"img/wildlife-9653797_640.jpg"
];
const alternate = [
"Acorns",
"Autumn",
"Cats-Eyes",
"Puppy-Dog",
"Pumpkin-for-Halloween",
"Muztagh-Mountain",
"Snail",
"Snowflake",
"Sparrow-Bird",
"Train",
"Tree",
"Wildlife-Cows",
];

const dialogRef = document.getElementById('myDialog');
let currentIndex;                                      

function openDialog(currentImg){                              
    dialogRef.showModal();
    renderCurrentImg(currentImg);
    currentHeadline(currentIndex);                                
};

function renderCurrentImg(index){  
    let diaCont = document.getElementById('dia_cont');
    diaCont.innerHTML = renderDialogContentImg(index);
    currentIndex = index;
};

function currentHeadline(index){                            
    let headCont = document.getElementById('dialogTitle');
    headCont.innerHTML = alternate[index];
    currentIndex = index;       
};

function increaseIndex(){
    if(currentIndex  == fotogramImgs.length-1){
        currentIndex = 0;
        renderCurrentImg(currentIndex);
        currentHeadline(currentIndex);
    } else{
        currentIndex++;
        renderCurrentImg(currentIndex);
        currentHeadline(currentIndex);
    }
}
function decreaseIndex(){
    if(currentIndex == fotogramImgs.length-12){
        currentIndex = 11;
        renderCurrentImg(currentIndex);
        currentHeadline(currentIndex);
    } else{
        currentIndex--;
        renderCurrentImg(currentIndex);
        currentHeadline(currentIndex);
    }
}
function slideImg(direction){
        if(direction == 'right'){
        increaseIndex();
        }
        else if(direction == 'left'){
        decreaseIndex();
        }
}

function closeDialog(){                                 
    dialogRef.close();
};

function bubblingPrevention(event){
    event.stopPropagation();
};

function render(){                                      
    let contentRef = document.getElementById('content');
    contentRef.innerHTML ="";
    for(let index = 0; index < fotogramImgs.length; index++) {
        contentRef.innerHTML += getImgsHtml(index);
    }
};

function getImgsHtml(currentImg) {                          
    return `<button type="button" onclick="openDialog(${currentImg})"  class="single_img"><img src="${fotogramImgs[currentImg]}" alt="${alternate[currentImg]}" aria-haspopup="dialog" aria-controls="myDialog"></button>`
};
function renderDialogContentImg(index){
    return `<button class="single_img"><img src="${fotogramImgs[index]}" alt="${alternate[index]}" aria-haspopup="dialog" aria-controls="myDialog"></button>`
}