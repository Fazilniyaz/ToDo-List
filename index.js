var i = document.getElementById("inp")

var div = document.getElementById("todo")

var count = 0

i.addEventListener("keydown",function(e){
    console.log(e.key)
    if(e.key == "Enter"){
        count++
        var smallDiv = document.createElement("div")
        smallDiv.style.width = "900px"
        smallDiv.className = "divs"
        var task = document.createElement("span")
        var delbtn = document.createElement("button")
        delbtn.innerText = "Delete task"
        var finishbtn = document.createElement("button")
        finishbtn.innerText = "Task finished"
        task.innerText = count + ". " + i.value
        task.style.color = "white"
        smallDiv.appendChild(task)
        smallDiv.appendChild(finishbtn)
        smallDiv.appendChild(delbtn)
        div.appendChild(smallDiv)
        finishbtn.addEventListener("click",function(){
            smallDiv.remove()
        })
        delbtn.addEventListener("click",function(){
            smallDiv.remove() 
        })
        i.value = "" // i.value = "" or i.innerText = ""
    
    }
})

var p1 = document.getElementById("p1")
p1.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif";
p1.style.color = "white"
p1.style.letterSpacing = "2px"
p1.style.fontSize = "22px"


var uniq = document.getElementById("uniq")
uniq.style.height = "5px"
uniq.style.color = "azure"
uniq.style.backgroundColor = "azure"

