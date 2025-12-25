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
    let currentHeadIndex;

function openDialog(index){                              
    dialogRef.showModal();
    currentImg(index); 
    currentHeadline(index);                                 
};

function currentImg(index){  
    let diaCont = document.getElementById('dia_cont');
    diaCont.innerHTML = getImgsHtml(index);
    currentIndex = index;
};

function currentHeadline(index){                            
    let headCont = document.getElementById('dialogTitle');
    headCont.innerHTML = alternate[index];
    currentHeadIndex = index;
};

function showNextImg(){                                        
    if(currentIndex == fotogramImgs.length-1){
        currentIndex = 0;
        index = currentIndex;
        let diaCont = document.getElementById('dia_cont');
        diaCont.innerHTML =  getImgsHtml(index);
    }  
    else{
        currentIndex++;
        index = currentIndex;
        let diaCont = document.getElementById('dia_cont');
        diaCont.innerHTML =  getImgsHtml(index);
    }
};

function showNextTitle(){                                                    
    if(currentHeadIndex == alternate.length-1){
        currentHeadIndex = 0;
        index = currentHeadIndex;
        let headCont = document.getElementById('dialogTitle');
        headCont.innerHTML = alternate[index];
    }else{
        currentHeadIndex++;
        index = currentHeadIndex;
        let headCont = document.getElementById('dialogTitle');
        headCont.innerHTML = alternate[index];
    }
};

function showPrevImg(){                                    
    if(currentIndex == fotogramImgs.length-12){
        currentIndex = 11;
        index = currentIndex;
        let diaCont = document.getElementById('dia_cont');
        diaCont.innerHTML =  getImgsHtml(index);
    }else{
        currentIndex--;
        index = currentIndex;
        let diaCont = document.getElementById('dia_cont');
        diaCont.innerHTML =  getImgsHtml(index);
    }
};

function showPrevTitle(){
    if(currentHeadIndex == alternate.length-12){
        currentHeadIndex = 11;
        index = currentHeadIndex;
        let headCont = document.getElementById('dialogTitle');
        headCont.innerHTML = alternate[index];
    }else{
        currentHeadIndex--;
        index = currentHeadIndex;
        let headCont = document.getElementById('dialogTitle');
        headCont.innerHTML = alternate[index];
    }
};

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

function getImgsHtml(index) {                          
    return `<button type="button" onclick="openDialog(${index})"  class="single_img"><img src="${fotogramImgs[index]}" alt="${alternate[index]}" aria-haspopup="dialog" aria-controls="myDialog" onclick="openDialog(${index})"></button>`
};