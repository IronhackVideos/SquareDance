

class Square {
    constructor(backgroundColor){
        this.backgroundColor = backgroundColor
        this.square = null;
    }
    addASquare = () => {
        var square = document.createElement('div')//    <div class="square">Square</div>
        square.className += 'square'
        square.style.backgroundColor = this.backgroundColor; 
        square.onclick = this.removeSquare;


        this.square = square; 
        document.body.appendChild(square)
    }
    changeCSS = () => {
        this.square.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16)
        this.square.style.width = Math.random()*100 + 'px';
        this.square.style.left =  Math.random()*window.innerWidth + 'px';
        this.square.style.top =  Math.random()*window.innerHeight + 'px';
        this.square.style.transform = `rotate(${Math.random()*100}deg)`
        this.square.style.borderRadius =  Math.random()*100 + '%'
    }
    removeSquare = () => {
        this.square.remove()
    }
}



setInterval(()=>{
    console.log('hello')
    let square = new Square('magenta')
    square.addASquare()
    setInterval(() => {
        square.changeCSS()
    },500)

},3000)


// "#"+((1<<24)*Math.random()|0).toString(16)
