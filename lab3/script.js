const requestButton = document.getElementById("requestButton");
const successMessage = document.getElementById("successMessage");
const people = document.getElementById("people");

requestButton.addEventListener('click', () => {
    let person = document.createElement("div")
    person.className = "person";
    people.appendChild(person);
    requestPersonFromAPI(person);
});

function requestPersonFromAPI(person) {
    let link = 'https://randomuser.me/api';
    fetch(link)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            addPerson(data, person);
        })
        .catch(() => {
            successMessage.innerText = "Something went wrong!";
        });

}

function addPerson(data, person) {
    let personInfo = data?.results[0];

    let picture = document.createElement("img");
    picture.src = personInfo?.picture?.large;
    person.appendChild(picture);

    let name = document.createElement("div");
    name.innerText = `Name: ${personInfo?.name.title} ${personInfo?.name?.first} ${personInfo?.name?.last}`
    person.appendChild(name);

    let city = document.createElement("div");
    city.innerText = `City: ${personInfo?.location?.city}`;
    person.appendChild(city);

    let postcode = document.createElement("div");
    postcode.innerText = `Postcode: ${personInfo?.location?.postcode}`;
    person.appendChild(postcode);

    let email = document.createElement("div");
    email.innerText = `Email: ${personInfo?.email}`;
    person.appendChild(email);

    successMessage.innerText = "success!";
}