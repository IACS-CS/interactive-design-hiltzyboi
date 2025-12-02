console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project
// AI-generated code starts here
// Student prompt: Start the car animation when the "No Oil Change" button is clicked.
// Grab the citations button and the oil-change button, and wire up click behavior.

// Grab the citations button and keep its existing behavior.
document.querySelector("#my-button").addEventListener("click", function () {
  // go to the citations page when the citations button is clicked
  window.location.href = "citations.html";
});

// Grab the "No Oil Change" button using its class name.
var oilButton = document.querySelector(".oil-change");
// Grab the car image element.
var car = document.querySelector(".car-image");

// If both elements exist, attach a click listener to trigger the animation.
if (oilButton && car) {
  oilButton.addEventListener("click", function () {
    // If the car already has the class, remove it first to restart the animation.
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
    }
    // Reading offsetWidth forces a reflow.
    void car.offsetWidth;
    // Add the class that starts the CSS keyframes animation.
    car.classList.add("drive");
  
      // When the drive animation finishes, show the smoke image and message.
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
  });
}
// AI-generated code ends here
// Code generated with ChatGPT//

//End of code generated with ChatGPT//
