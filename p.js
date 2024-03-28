class ParagraphChanger{
    constructor(paraElem){
        this.paragraph= paraElem;

        //button_container div
        this.div = document.createElement('div');
        this.div.id = 'button_container';
        this.paragraph.parentNode.insertBefore(this.div,this.paragraph);

        //toggle buttons
        this.div.innerHTML= "<button id='button1'><a href='#'> Toggle Bold</a></button> <button class='button2'><a href='#'> Toggle width</a></button> <button class='button3'><a href='#'> Toggle Color</a></button> <button class='button4'><a href='#'> Toggle Font size</a></button>";
       
    }
    event(){
        //eventListeners
        this.previous={};      //object to store original paragraph styles          

        this.reset=function Reset(){                              //store original paragraph style in the previous object  
            this.paragraph.style.color=this.previous.color;
            this.paragraph.style.width=this.previous.width;
            this.paragraph.style.fontSize=this.previous.fontSize;
            this.paragraph.style.fontWeight=this.previous.fontWeight;                                              
        }

        document.querySelectorAll('button').forEach(button =>{    //Reference Stack overflow help (https://stackoverflow.com/questions/9329446/loop-for-each-over-an-array-in-javascript/9329476#9329476). For each button add event listner, which also calls the reset function
            button.addEventListener("click",()=>{
                this.reset();
            });
        });
        

        this.toggleBold= function(){                                  //the functions set original style to previous and add requested styles
            this.previous.fontWeight=this.paragraph.style.fontWeight;
            this.paragraph.style.fontWeight ='bold';   
        }

        this.toggleColor= function() {
            this.previous.color=this.paragraph.style.color;
            this.paragraph.style.color = 'red';
        }

        this.toggleWidth= function() {
           this.previous.width=this.paragraph.style.width;
            this.paragraph.style.width ='50%';
        }
        

        this.toggleFontSize= function() {
            this.previous.fontSize=this.paragraph.style.fontSize;
            this.paragraph.style.fontSize = '50%';
        }

        

        for(let i=0; i<document.body.firstElementChild.childNodes.length;i++){

            this.node=document.body.firstElementChild.childNodes[i];
            
            if(this.node.innerHTML == '<a href="#"> Toggle Bold</a>'){
               //this.node.onclick = () => this.toggleBold();
                //this.node.addEventListener("click",this.toggleBold(),once);
            }

            if(this.node.innerHTML == '<a href="#"> Toggle width</a>'){
                this.node.onclick = () => this.toggleWidth();
                //this.node.addEventListener("click",this.toggleWidth());
            }


            if(this.node.innerHTML == '<a href="#"> Toggle Color</a>'){
                this.node.onclick = () => this.toggleColor();
            }

            if(this.node.innerHTML == '<a href="#"> Toggle Font size</a>'){
                this.node.onclick = () => this.toggleFontSize();
            }

        }
    } 
}

let para = new ParagraphChanger(document.getElementById('target_p'));
para.event();
