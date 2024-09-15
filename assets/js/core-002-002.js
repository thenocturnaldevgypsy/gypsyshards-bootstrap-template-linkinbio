/* 
* Main JS File for GypsyShards [002.002] of Free Bootstrap 5.3.3 Themes of Link in Bio Templates
* Author: TheNocturnalDevGypsy [ Abegail Baustista Torrendon ]
*/ 

// For class="linkinbio-link-button" id="shake-button" Shaking Button
document.addEventListener('DOMContentLoaded', function() {
   const button = document.getElementById('shake-button'); // Target by ID

   function shakeButton() {
      button.classList.add('shake');
      setTimeout(() => {
         button.classList.remove('shake');
         setTimeout(shakeButton, 2000); // 3-second gap before next shake
      }, 6000); // Shake duration
   }

   shakeButton(); // Start the shake loop
});