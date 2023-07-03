const dogImageDiv = document.getElementById('dogImage')
const refreshImageDiv=document.getElementById('refresh')
const fetchImage = () =>{
fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(json => {
    console.log(json.message)
    dogImageDiv.innerHTML=`<img src="${json.message}" height="300" width="300">`
  }
  )
}
refreshImageDiv.onclick = () =>{
  fetchImage()
}




//Promises : asynchronous programming : .this()