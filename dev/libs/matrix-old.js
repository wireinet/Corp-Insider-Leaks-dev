// geting canvas by Boujjou Achraf
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = document.documentElement.scrollHeight;
        c.width = document.documentElement.scrollWidth;

        //chinese characters - taken from the unicode charset
        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 12;
        var columns = c.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = Math.floor(Math.random()*columns);
        //drawing the characters
        function draw()
        {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width*0.15, c.height);
            ctx.fillRect(c.width*0.85, 0, c.width, c.height);

            ctx.fillStyle = "#00ff2b";//green text
            ctx.font = font_size + "px arial bold";
            //looping over drops
            
                for (i = 0; i < drops.length; i++) {
                  var text = matrix[Math.floor(Math.random() * matrix.length)];
                  ctx.fillText(text, i*font_size, drops[i] * font_size);
                  if (drops[i] * font_size > c.height && Math.random() > 0.975)
                   { drops[i] =  Math.floor(Math.random()*columns);}
                  drops[i]++;
                }
        
        }
        let drops2=[];
        for(var x = 0; x < columns; x++){
            drops2[x] = -Math.floor(Math.random()*columns);}
        function draw2()
        {

            ctx.fillStyle = "#00ff2b";//green text
            ctx.font = font_size + "px arial";
            //looping over drops
            
                for (i = 0; i < drops2.length; i++) {
                  var text = matrix[Math.floor(Math.random() * matrix.length)];
                  ctx.fillText(text, i*font_size, drops2[i] * font_size);
                  if (drops2[i] * font_size > window.innerHeight && Math.random() > 0.975)
                   { drops2[i] = 0;}
                  drops2[i]++;
                }
        
        }
            setInterval(draw,65);
            setInterval(draw2,55);

        setInterval(() => {
            
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(c.width*0.15, 0, c.width*0.85, c.height);
        }, 105);