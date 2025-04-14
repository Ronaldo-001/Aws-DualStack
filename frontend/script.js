document.getElementById("getQuoteBtn").addEventListener("click", () => {
    fetch("http://localhost:3000/api/quote") // replace with EC2 IP later
      .then((res) => res.json())
      .then((data) => {
        document.getElementById("msg").textContent = `"${data.quote}"`;
      })
      .catch((err) => {
        console.error("Error:", err);
        document.getElementById("msg").textContent = "Failed to load quote.";
      });
  });
  