var tajmerID=0;
        var sStart=null;
        function UpdateTajmer(){
            if(tajmerID){
                clearTimeout(tajmerID);
                timerID=0;
            }
        if (!tStart) tStart = new Date();
        var tDate = new Date();
        var tDiff = tDate.getTime() - tStart.getTime();
        tDate.setTime(tDiff);
        document.tajmer.vreme.value = "" + tDate.getMinutes() + ":"+tDate.getSeconds()+":" +tDate.getMilliseconds();
        tajmerID = setTimeout("UpdateTajmer()", 1000);    
        }//kraj funkcije UpdateTajmer....

        function Start(){
            tStart = new Date();
            document.tajmer.vreme.value = "00:00";
            tajmerID = setTimeout("UpdateTajmer()", 1000);
        }//kraj funkcije Start()...

        function Stop(){
            if(tajmerID){
                clearTimeout(tajmerID);
                tajmerID=0;
            }
            tStart = 0;
        }//kraj funkcije Stop()...

        function Reset(){
            tStart = null;
            document.tajmer.vreme.value = "00:00";
        }
