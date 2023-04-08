const input = document.querySelector(".heading-content input");
const ul = document.querySelector(".user-info");
const liEl = document.querySelector(".set");

const userArray = [];

const getUserInfo = async () => {
  try {
    const Api = "https://randomuser.me/api/?results=15";
    const result = await fetch(Api);
    const data = await result.json();
    const userData = data.results;
    // if(data){
    //     liEl.innerHTML = ''
    // }
    userData.map((user) => {
      const li = document.createElement("li");
      userArray.push(li);
      li.innerHTML = `<div class="user-profile"><img src="${user.picture.large}" alt=""></div>
            <div class="userTitle-info">
                <span class="title">${user.name.first} ${user.name.last}</span><span class="description">${user.location.city}, ${user.location.country}</span>
            </div>`;
      li.classList.add("set");
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
};

getUserInfo();
input.addEventListener("input", (e) => {
  const searchWord = e.target.value;
  userArray.map((userList) => {
    userList.innerText.toLowerCase().includes(searchWord.toLowerCase())
      ? userList.classList.remove("hide")
      : userList.classList.add("hide");
  });
});
