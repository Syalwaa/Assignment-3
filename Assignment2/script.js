// user info
const nameTarget       = document.getElementById('nameTarget');
const roleTarget       = document.getElementById('roleTarget');
const avaibilityTarget = document.getElementById('avaibilityTarget');
const usiaTarget       = document.getElementById('usiaTarget');
const lokasiTarget     = document.getElementById('lokasiTarget');
const pengalamanTarget = document.getElementById('pengalamanTarget');
const emailTarget      = document.getElementById('emailTarget');
const imageTarget      = document.getElementById('imageTarget'); // Fixed the typo here

// form
const nama       = document.getElementById('nama');
const role       = document.getElementById('role');
const avaibility = document.getElementById('avaibility');
const usia       = document.getElementById('usia');
const lokasi     = document.getElementById('lokasi');
const experience = document.getElementById('experience');
const email      = document.getElementById('email');
const image      = document.getElementById('image');

// fungsi utk edit button
const editButton   = document.getElementById('edit');
const editForm     = document.getElementById('myForm');
const submitButton = document.getElementById('submit'); // Added this line
const resumeButton = document.getElementById('resume');

editButton.addEventListener('click', toggleEditForm);
submitButton.addEventListener('click', mySubmitForm);

function toggleEditForm(event) {
  editForm.classList.toggle('hide-content');
}

// pemanggilan user info
function mySubmitForm(event) {
  event.preventDefault();
  const currentNama = nama.value;
  const currentRole = role.value;
  const currentAvaibility = avaibility.value;
  const currentUsia = usia.value;
  const currentLokasi = lokasi.value;
  const currentExperience = experience.value;
  const currentEmail = email.value;
  const currentFile = image.files[0];

  // Menampilkan data di section profile
  nameTarget.innerHTML = currentNama;
  roleTarget.innerHTML = currentRole;
  avaibilityTarget.innerHTML = currentAvaibility;
  usiaTarget.innerHTML = currentUsia;
  lokasiTarget.innerHTML = currentLokasi;
  pengalamanTarget.innerHTML = currentExperience;
  emailTarget.innerHTML = currentEmail;

  if (currentFile) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageTarget.src = e.target.result;
    };

    reader.readAsDataURL(currentFile);
    console.log(currentFile);
    console.log('file sudah ada');
  }

  toggleEditForm();
}
