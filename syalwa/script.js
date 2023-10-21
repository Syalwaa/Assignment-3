// Mengisi data ke dalam elemen form
const formNama = document.getElementById("nama");
const formRole = document.getElementById("role");
const formAvaibility = document.getElementById("avaibility");
const formUsia = document.getElementById("usia");
const formLokasi = document.getElementById("lokasi");
const formExperience = document.getElementById("experience");
const formEmail = document.getElementById("email");

const submitButton = document.getElementById("submit");

function mySubmitForm(event) {
  event.preventDefault();

  const currentNama = formNama.value;
  const currentRole = formRole.value;
  const currentAvaibility = formAvaibility.value;
  const currentUsia = formUsia.value;
  const currentLokasi = formLokasi.value;
  const currentExperience = formExperience.value;
  const currentEmail = formEmail.value;

  // Melakukan sesuatu dengan data yang telah diperoleh
  console.log("Nama: " + currentNama);
  console.log("Role: " + currentRole);
  console.log("Avaibility: " + currentAvaibility);
  console.log("Usia: " + currentUsia);
  console.log("Lokasi: " + currentLokasi);
  console.log("Experience: " + currentExperience);
  console.log("Email: " + currentEmail);
}

submitButton.addEventListener("click", mySubmitForm);
