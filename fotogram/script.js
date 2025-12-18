let fotogramImgs = [
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

let alternate = [
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
    let currentIndex;                                       //empty variable to recieve value
    let currentHeadIndex;
 

function openDialog(index){                             // opens dialog on onclick
    dialogRef.showModal();
    currentImg(index); 
    currentHeadline(index);                                     //rendering your img into dialog that was selected
}

function currentImg(index){  
    let diaCont = document.getElementById('dia_cont');
    diaCont.innerHTML = getImgsHtml(index);
    currentIndex = index;
}
function currentHeadline(index){                        //rendering the headline into dialog
    let headCont = document.getElementById('dialogTitle');
    headCont.innerHTML = alternate[index];
    currentHeadIndex = index;
}


function showNext(){                                     // function for rendering the next img from the array
    if(currentIndex == fotogramImgs.length-1){
    index = 0;
    }  
    else{
    currentIndex++;
    index = currentIndex;
    let diaCont = document.getElementById('dia_cont');
    diaCont.innerHTML =  getImgsHtml(index);
    }                                //index for headline
    if(currentHeadIndex == alternate.length-1){
    index = 0;
    }else{currentHeadIndex++;
    index = currentHeadIndex;
    let headCont = document.getElementById('dialogTitle');
    headCont.innerHTML = alternate[index];
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function showPrev(){                                    // function for rendering the previos img from the array
    if(currentIndex == fotogramImgs.length-12){
    index = 0;
    }else{
    currentIndex--;
    index = currentIndex;
    let diaCont = document.getElementById('dia_cont');
    diaCont.innerHTML =  getImgsHtml(index);
    }
    if(currentHeadIndex == alternate.length-12){
    index = 0;
    }else{
    currentHeadIndex--;
    index = currentHeadIndex;
    let headCont = document.getElementById('dialogTitle');
    headCont.innerHTML = alternate[index];
    }
}




function closeDialog(){                                 // function to close the dialog
    dialogRef.close();
}
function bubblingPrevention(event){
    event.stopPropagation();
}
function render(){                                  // rendeing the imgs from the array into the HTML
    let contentRef = document.getElementById('content');
    contentRef.innerHTML ="";
    for(let index = 0; index < fotogramImgs.length; index++) {
    contentRef.innerHTML += getImgsHtml(index);
    }
}


function getImgsHtml(index) {                           // get the img from the HTML for rendering into the dialog
    return `<button type="button" onclick="openDialog(${index})"  class="single_img"><img src="${fotogramImgs[index]}" alt="${alternate[index]}" aria-haspopup="dialog" aria-controls="myDialog" onclick="openDialog(${index})"></button>`
}