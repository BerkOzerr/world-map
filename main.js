import { api_Key } from "./key.js";

let apiUrl = "https://timezone.abstractapi.com/v1/current_time/" + api_Key; //&location=Oxford, United Kingdom // api key your key

async function getData(place) {
  let finalUrl = apiUrl + `&location=${place}`;
  const res = await fetch(finalUrl);
  const data = await res.json();
  console.log(data);

  document.getElementById(
    "time"
  ).innerHTML = `${place}'s time ${data.datetime} ${data.timezone_name}`;
  document.querySelector(".timeCont").style.display = "block";
}

document.querySelectorAll(".allPaths").forEach((e) => {
  e.addEventListener("mouseover", () => {
    let name = document.querySelector(".name");
    let names = document.getElementById("names");
    window.onmousemove = function (j) {
      let x = j.clientX;
      let y = j.clientY;

      name.style.top = y + "px";
      name.style.left = x + "px";
    };
    e.style.fill = "rgba(205, 97, 97, 0.622)";
    names.innerText = e.getAttribute("title");
    name.style.opacity = 1;

    e.addEventListener("mouseleave", () => {
      name.style.opacity = 0;
      e.style.fill = "wheat";
    });
  });
  e.addEventListener("click", () => {
    console.log(e.getAttribute("title"));
    getData(`${e.getAttribute("title")}`);
  });
});
