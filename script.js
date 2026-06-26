/* ============================================================
   RELIABLE TREND ENTERPRISES LLC â€” Site JavaScript
   ------------------------------------------------------------
   Small helpers shared across pages:
   1. Mobile navigation menu toggle
   2. Contact form -> opens the user's email app (no backend needed)
   ============================================================ */

/* ---- 1. MOBILE MENU ----
   When the hamburger button is tapped, show/hide the nav links. */
function toggleMenu() {
  var links = document.getElementById('navLinks');
  if (links) links.classList.toggle('open');
}

/* ---- 2. CONTACT FORM ----
   A static site can't run server code to send email. The simplest
   reliable approach: build a pre-filled email and open the visitor's
   own mail app via a "mailto:" link. They just hit send.
   (Later you can upgrade this to a real form service like Formspree.) */
function sendContact(event) {
  event.preventDefault(); // stop the page from reloading

  var name    = document.getElementById('cName').value;
  var email   = document.getElementById('cEmail').value;
  var message = document.getElementById('cMessage').value;

  // Build the email subject and body
  var subject = encodeURIComponent('Website inquiry from ' + name);
  var body = encodeURIComponent(
    'Name: ' + name + '\n' +
    'Email: ' + email + '\n\n' +
    message
  );

  // Open the visitor's email client addressed to RTE
  window.location.href =
    'mailto:reliabletrendenterprises@gmail.com?subject=' + subject + '&body=' + body;
}
