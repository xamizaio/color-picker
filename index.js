var y;
var i;
var items;
var html;
var color;
var no;
var x;
document.getElementById("number").innerText = 0
document.getElementById("items").innerText = 0
unselect=(e)=>{
    e.stopPropagation();
    html = e.target
    console.log(e.target.parentNode);
    color = e.target.classList[1];
    selecte(e.target.parentNode , e.target.classList[1])
    
}
selecte=(e , color)=>{
    let x = false;

    for(let i =0 ; i<e.classList.length ; i++ ){
        if(e.classList[i] === 'selected'){
            x = true
        }else{
            x = false
        }
        
    }
    if(x === false){
        e.classList.add("selected");
        document.getElementById('color').innerText = color
        document.getElementById('color-modal').innerText = color
    }
    if(y){
        if(y !== e){
        y.classList.remove("selected")}
    }
    if(y !== e){
        y = e
    }
}

add=()=>{
    i = parseInt(document.getElementById("number").innerText) 
    i = i +1
    document.getElementById("number").innerText = i
}
remove=()=>{
    i = parseInt(document.getElementById("number").innerText)
    if(i>0){
        i = i -1
    }else{
        i =i
    }
    document.getElementById("number").innerText = i
}
agree=()=>{
    items = i
    console.log(items);
    if(items === undefined){
        items = 0
    }
    if(document.getElementById('color').innerText === ""){
        items = 0
    }else{
        console.log("items",items);
        no =x;
        console.log("no",no);
        for(x=0 ; x< items ; x++){
            if(items<no){
                for(var e = no ; e>items ; e--){
                    console.log("done",x);
                    var list = document.getElementById("add"); 
                     console.log("list",list);
                     console.log("index",e);
                    list.removeChild(list.childNodes[e-1]);
                }
                x = e
            }else{
                var node = document.createElement("div");
                document.getElementById("add").appendChild(node);
                console.log("x",x);
                console.log(document.querySelectorAll("#add > div")[x]);
                console.log(color);
                document.querySelectorAll("#add > div")[x].classList.add("color" , color ,"margin");
            }
            
        }
        cart()
    }
    document.getElementById("items").innerText = items
}
cancel=()=>{
    let v =parseInt(document.getElementById("items").innerText) 
    i = v 
    document.getElementById("number").innerText = i
}
cart=()=>{
    console.log("sdfghjk",items);
    if(items>0){
        document.getElementById("cart").innerText="Checkout Now"
    }
}