// geting canvas by Boujjou Achraf
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");
        var started = false;

        //making the canvas full screen
        c.height = document.documentElement.scrollHeight;
        c.width = document.documentElement.scrollWidth;

        //chinese characters - taken from the unicode charset
        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 18;
        if(c.width<1200){font_size = 14;}
        if(c.width<900){font_size = 12;}
        if(c.width<600){font_size = 10;}
        var columns = c.width/font_size; //number of columns for the rain
        let drops=[];
        for(var x = 0; x < columns; x++){
            drops[x] = -Math.floor(Math.random()*columns);}  //-Math.floor(Math.random()*columns)
        function draw()
        {

            ctx.fillStyle = "#00ff2b";//green text
            ctx.font = "600 " + font_size + "px arial"; //"px arial"
            //looping over drops
            
                for (i = 0; i < drops.length; i++) {
                  var text = matrix[Math.floor(Math.random() * matrix.length)];
                  ctx.fillText(text, i*font_size, drops[i] * font_size);
                  if (drops[i] * font_size > window.innerHeight && Math.random() > 0.975)
                   { drops[i] = 0;}
                  drops[i]++;
                }
        
        }
            
        function run(){
            if(!started){
                started = true;
                setInterval(draw,65);
                setInterval(() => {
                    ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
                    ctx.fillRect(c.width*0.0, 0, c.width, c.height);
                }, 125);
            }
        }

    
        if(window.screen.width >= 1370){  
            run();
        }

        window.addEventListener('scroll', function() {
           if(window.screen.width < 1370){   
                run();
           }
        })