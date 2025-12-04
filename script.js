console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project

// AI-generated code starts here
// Student prompt: Make both the "No Oil Change" and "Hit a Big Pothole" buttons work
// to trigger the car animation and display different messages.

// Grab the citations button and keep its existing behavior.
document.querySelector("#my-button").addEventListener("click", function () {
  // go to the citations page when the citations button is clicked
  window.location.href = "citations.html";
});

// Grab all the buttons and the car image element once (not repeatedly).
var oilButton = document.querySelector(".oil-change");
var potholeButton = document.querySelector(".hit-a-big-pothole");
var car = document.querySelector(".car-image");

// Function to handle the car animation and show a message.
// We pass in which button was clicked so we can show the right message.
function triggerCarAnimation(messageText) {
  // If the car already has the drive class, remove it first to restart.
  // This forces the browser to reflow so the animation can play again.
  car.classList.remove("drive");

  // remove old smoke if present so the effect can be added again after restart
  var wrapperForRemove = document.querySelector(".car-image-wrapper");
  if (wrapperForRemove) {
    var old = wrapperForRemove.querySelector(".smoke");
    if (old) {
      old.parentNode.removeChild(old);
    }
  }

  // hide the result message when restarting
  var resultMsg = document.querySelector(".result-message");
  if (resultMsg) {
    resultMsg.classList.add("hidden");
    resultMsg.classList.remove("visible");
    // Update the message text for this button
    resultMsg.textContent = messageText;
  }

  // Reading offsetWidth forces a reflow.
  void car.offsetWidth;

  // Add the class that starts the CSS keyframes animation.
  car.classList.add("drive");
}

// When the drive animation finishes, show the smoke image and message.
// This listener is added ONCE outside the function, not repeatedly.
car.addEventListener("animationend", function (e) {
  // make sure it's the 'drive' animation that ended
  if (e.animationName === "drive") {
    // add smoke image inside the wrapper so it's positioned near the car
    var wrapper = document.querySelector(".car-image-wrapper") || document.body;
    // If a smoke element already exists, don't add another
    if (!wrapper.querySelector(".smoke")) {
      var img = document.createElement("img");
      img.src = "images/smoke.png";
      img.alt = "Smoke from the car";
      img.className = "smoke";
      wrapper.appendChild(img);
    }

    // Show the result message paragraph
    var resultMsg = document.querySelector(".result-message");
    if (resultMsg) {
      resultMsg.classList.remove("hidden");
      resultMsg.classList.add("visible");
    }
  }
});

// If the "No Oil Change" button exists, attach a click listener.
if (oilButton && car) {
  oilButton.addEventListener("click", function () {
    triggerCarAnimation(
      " Your car broke down! Your car needs oil changes every 5,000-7,000 miles and sooner if you drive harder. This helps keep the engine lubricated and running smoothly."
    );
  });
}

// If the "Hit a Big Pothole" button exists, attach a click listener.
if (potholeButton && car) {
  potholeButton.addEventListener("click", function () {
    triggerCarAnimation("Your car broke down, you need to avoid potholes. You blew a tire and need to either put a spare on or call a tow truck.");
  });
}
