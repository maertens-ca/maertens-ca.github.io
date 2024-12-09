        // Dynamically apply classes based on Bootstrap breakpoints
        function updateBackground() {
            const body = document.body;
            body.className = ""; // Clear existing classes
      
            if (window.innerWidth < 992) {
              body.classList.add("bg-xs");
            } else {
              body.classList.add("bg-lg");
            }
          }
      
          // Update background on page load and window resize
          window.addEventListener("resize", updateBackground);
          window.addEventListener("DOMContentLoaded", updateBackground);