document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   
    
    if (email && password) {
        alert('Login successful!\nEmail: ' + email);
      
    } else {
        alert('Please fill in all fields');
    }
});

document.getElementById('registerLink').addEventListener('click', function() {
    alert('Redirecting to registration page...');
  
});
