function showPopup(type) {
    const popup = document.getElementById(`${type}-popup`);
    if (popup) popup.style.display = 'flex';
  }
  function hidePopup(type) {
    const popup = document.getElementById(`${type}-popup`);
    if (popup) popup.style.display = 'none';
  }
  document.addEventListener('click', function (e) {
    const loginPopup = document.getElementById('login-popup');
    const registerPopup = document.getElementById('register-popup');
    if (
      loginPopup.style.display === 'flex' &&
      !e.target.closest('.popup-form') &&
      !e.target.closest('[onclick^="showPopup"]')
    ) {
      loginPopup.style.display = 'none';
    }
    if (
      registerPopup.style.display === 'flex' &&
      !e.target.closest('.popup-form') &&
      !e.target.closest('[onclick^="showPopup"]')
    ) {
      registerPopup.style.display = 'none';
    }
  });
  function validateRegister() {
    const password = document.getElementById("reg-password").value;
    const confirmPassword = document.getElementById("reg-confirm-password").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return false;
    }
  
    alert("Registration successful!");
    hidePopup('register');
    return true;
  }
  

