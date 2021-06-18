class Security {
     constructor(){
        this.textbox1=createInput("Code1");
        this.textbox1.position(100,90);

        this.button1=createButton("Check");
        this.button1.position(100,120);   
        
        this.textbox2=createInput("Code2");
        this.textbox2.position(700,190);

        this.button2=createButton("Check");
        this.button2.position(700,220); 

        this.textbox3=createInput("Code3");
        this.textbox3.position(100,290);

        this.button3=createButton("Check");
        this.button3.position(100,320); 
    }

    display(){

        // Add code to make the buttons function as expected
          this.button1.mousePressed(()=> {
             if(system.authenticate(accessCode1,this.textbox1.value())){
                this.button1.hide();
                this.textbox1.hide();
                score++
             }
           }
          ); 

          this.button2.mousePressed(()=> {
            if(system.authenticate(accessCode2,this.textbox2.value())){
               this.button2.hide();
               this.textbox2.hide();
               score++
            }
          }
         ); 

         this.button3.mousePressed(()=> {
            if(system.authenticate(accessCode3,this.textbox3.value())){
               this.button3.hide();
               this.textbox3.hide();
               score++
            }
          }
         ); 

    }
}