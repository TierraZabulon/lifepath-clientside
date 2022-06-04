// const button = document.querySelector("button");
// const input = document.querySelector("input")

//call back function
// function alertBtn() {
//   alert("trst");
// }
// function userValue(){

// }
//event listener
// input.addEventListener('input',userValue)
// button.addEventListener("click", alertBtn);
document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const number = document.querySelector("input").value;
  try {
    const res = await fetch(`https://lifepath-api.herokuapp.com/api/${number}`);
    const data = await res.json();

    console.log(data);
    document.querySelector("#display").innerText = data;
  } catch (error) {
    console.log(error);
  }
}
