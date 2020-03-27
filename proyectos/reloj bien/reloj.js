setInterval(Actualizar, 500);
        function Actualizar(){
            let time = new Date;
            let Hrs = time.getHours();
            let Min = time.getMinutes();
            let Sec = time.getSeconds();
            
            if(Hrs > 12){
                Hrs = Hrs -12;
            }
            if(Hrs == 0){
                Hrs = 12;
            }

            if(Hrs >= 0){
                document.querySelector("body").classList.add("hora3");
                document.querySelector(".hora").classList.add("hora2");
                document.querySelector(".mn").classList.add("hora2");
            }
            if(Hrs == 6){
                document.querySelector("body").classList.add("negro");
                document.querySelector(".hora").classList.add("hora2");
                document.querySelector(".mn").classList.add("hora2");
            }
            if(Hrs <= 12){
                document.querySelector(".mn").textContent = "pm";
            }
            if(Hrs == 0){
                document.querySelector(".mn").textContent = "am";
            }

            document.querySelector(".hora").textContent = Hrs + ": " + Min + ": " + Sec + "";   
        }