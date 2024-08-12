async function consult() {
  const result = await fetch("http://localhost:3000");
  const data = await result.json();
  return data;
}

const body = document.querySelector("body");
const dataS = document.createElement("div");


(async () => {
  dataS.innerHTML = `${Object.keys(await consult())} : ${Object.values(
    await consult()
  )}`;
  body.appendChild(dataS);
})();

// const body = document.body
// const data = document.createElement('section')
// data.innerHTML= " "
// data.classList.add("result")
// body.appendChild(data)
// boofofoof