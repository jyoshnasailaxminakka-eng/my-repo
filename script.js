function generatePassword() {
  const length = document.getElementById('length').value;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomChar = charset.charAt(Math.floor(Math.random() * charset.length));
    password += randomChar;
  }

  document.getElementById('password').value = password;
}

function copyPassword() {
  const passwordField = document.getElementById("password");
  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}

function updateLength() {
  const slider = document.getElementById("length");
  document.getElementById("lengthValue").innerText = slider.value;
}
