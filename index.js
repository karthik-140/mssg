var form = document.getElementById("my-form");
form.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  try {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const obj = {
      name,
      email,
      phone,
      message,
    };

    console.log(obj);
    // showOnScreen(obj);
    const data = await axios.post(
      'https://crudcrud.com/api/ad5bd58b18634195a7e22727afed87cc/contacts',
      obj
    );
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", async() => {
    const response = await axios.get('https://crudcrud.com/api/ad5bd58b18634195a7e22727afed87cc/contacts');
    console.log(response);
})
// function showOnScreen(obj){
//     const parentNode = document.getElementById('list');
//     const childNode = `<li>${obj.name} - ${obj.phone}
//     </li>`

//     parentNode.innerHTML = parentNode.innerHTML + childNode
// }

// // <!-- Swiper JS -->
// <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

// <!-- Initialize Swiper -->

//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     slidesPerGroup: 3,
//     loop: true,
//     loopFillGroupWithBlank: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// const fun =async () =>{

// console.log("a");

//     await new Promise((res, rej) =>{
//         setTimeout(() => {
//             console.log("b")
//             res();
//         }, 1000)
//     })

// console.log("c");
// }

// fun();
