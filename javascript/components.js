// Load header
fetch("components/header.html")
  .then(response => response.text())
  .then(data => {
      const header = document.querySelector("#header");
      if (header) header.innerHTML = data;
  });

// Load footer
fetch("components/footer.html")
  .then(response => response.text())
  .then(data => {
      const footer = document.querySelector("#footer");
      if (footer) footer.innerHTML = data;
  });

// Load header2
fetch("components/header2.html")
  .then(response => response.text())
  .then(data => {
      const header2 = document.querySelector("#header2");

      if (header2) {
          header2.innerHTML = data;

          // Initialize time and date after header loads
          updateTime();
          updateLocalDate();
      }
  });

// Load footer2
fetch("components/footer2.html")
  .then(response => response.text())
  .then(data => {
      const footer2 = document.querySelector("#footer2");
      if (footer2) footer2.innerHTML = data;
  });