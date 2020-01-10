    /*JAVASCRIPT*/



let name = 'niko' //variables

let school = 'ironhack'

const logMyName = () => { //functions
    console.log(name + ' teaches at '+ school)

}    

const addASquare = () => {
    var square = document.createElement('div')//    <div class="square">Square</div>
    square.className += 'square'
    document.body.appendChild(square)
}


//event listeners
document.querySelector('i').onclick = logMyName;

document.querySelector('.square').onclick = addASquare;

setInterval(()=>{
    console.log('hello')
    addASquare()
},1000)
