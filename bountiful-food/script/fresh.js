fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
    .then(response=>response.json())
    .then(data=> showData(data));
    

function showData(data){
    const fruitdata = data;
    console.log(fruitdata)
    const fruit = document.getElementById("firstfruit");
    const fruit2 = document.getElementById("secondfruit");
    const fruit3 = document.getElementById("thirdfruit");
    

    const listfruit = [
        [fruitdata[0].name],
        [fruitdata[1].name],
        [fruitdata[2].name],
        [fruitdata[3].name],
        [fruitdata[4].name],
        [fruitdata[5].name],
        [fruitdata[6].name],
        [fruitdata[7].name],
        [fruitdata[8].name],
        [fruitdata[9].name],
        [fruitdata[10].name],
        [fruitdata[11].name],
        [fruitdata[12].name],
        [fruitdata[13].name],
        [fruitdata[14].name],
        [fruitdata[15].name],
        [fruitdata[16].name],
        [fruitdata[17].name],
        [fruitdata[18].name],
        [fruitdata[19].name],
        [fruitdata[20].name],
        [fruitdata[21].name],
        [fruitdata[22].name],
        [fruitdata[23].name],
        [fruitdata[24].name],
        [fruitdata[25].name],
        [fruitdata[26].name],
        [fruitdata[27].name],
        [fruitdata[28].name],
        [fruitdata[29].name],
        [fruitdata[30].name]
        ]
        
    
        
        
        
        fruit.innerHTML = listfruit;
        fruit2.innerHTML = listfruit;
        fruit3.innerHTML = listfruit;
        document.getElementById("submit");     
}

