
alert(aaa);
        text += "Carro-"+0+"<br>";
        text += "Carro-"+1+"<br>";
        text += "Carro-"+2+"<br>";
        text += "Carro-"+3+"<br>";
        text += "Carro-"+4+"<br>";
        text += "Carro-"+5+"<br>";
        
        var cars = ['corolla','uno','brasilia','sandeiro','KA','Gol'];
        var text = "";
        for (var i = o; i < cars.length; i++) {
            text += "carro: " + cars[i] + "<br>";
        }
        
        document.getElementById("carro").innerHTML = text;

        var i = 0;
        while (i < cars.length){
            text += "carro: " + cars[i] + "<br>";
        }