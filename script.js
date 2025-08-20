let count_ele = document.getElementById("count")
if(localStorage.getItem("count")){
count_ele.textContent = localStorage.getItem("count")
}

function onIncrement(){
    let curr_val = count_ele.textContent 
    curr_val = parseInt(curr_val)
    count_ele.textContent = curr_val+1
    // storing in localStorage
    localStorage.setItem("count", count_ele.textContent)
}

function onReset(){
    count_ele.textContent = 0
    localStorage.setItem("count", count_ele.textContent)
}

function onDecrement(){
    let curr_val = count_ele.textContent 
    curr_val = parseInt(curr_val)
    count_ele.textContent = curr_val-1
    localStorage.setItem("count", count_ele.textContent)
}