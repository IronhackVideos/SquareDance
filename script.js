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


class Square {
    constructor(backgroundColor, text){
        this.backgroundColor = backgroundColor
        this.text = text
    }
    addASquare = () => {
        var square = document.createElement('div')//    <div class="square">Square</div>
        square.className += 'square'
        square.style.backgroundColor = this.backgroundColor; 
        square.innerText = this.text;
        document.body.appendChild(square)
    }
}

//event listeners
document.querySelector('i').onclick = logMyName;


setInterval(()=>{
    console.log('hello')
    let square = new Square('pink', 'cool')
    square.addASquare()
    //addASquare()
},1000)
