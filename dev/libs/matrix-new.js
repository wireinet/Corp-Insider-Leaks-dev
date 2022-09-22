// geting canvas by Boujjou Achraf
        var c = document.getElementById("c");
        var ctx = c.getContext("2d");

        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
        
        //making the canvas full screen
        c.height = bodyHeight;
        c.style.height = bodyHeight;
        c.width = windowWidth;
        c.style.width = windowWidth;
        //если меняется ширина при повороте экрана
    window.addEventListener("resize", function() {
        windowWidth = document.documentElement.clientWidth;
        windowHeight = document.documentElement.clientHeight;
        
        //making the canvas full screen
        c.height = bodyHeight;
        c.width = windowWidth;
}, false);    
        //chinese characters - taken from the unicode charset
        var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 24;
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
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#00ff2b";//green text
            ctx.font = font_size + "px arial";
            //looping over drops
            for(l=0; l<3; l++){
            for(var i = 0; i < drops.length; i++)
            {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);


                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
        }   
        }

        setInterval(draw, 55);