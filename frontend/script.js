 fetch("http://localhost:3000/api/hello") // replace with EC2 IP later
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("msg").textContent = data.message;
  })
  .catch((err) => {
    console.error("Error:", err);
    document.getElementById("msg").textContent = "Failed to load backend message.";
  });
