function greetUser() {
  const name = document.getElementById("name").value;
  const feeling = document.getElementById("feeling").value;
  const greeting = document.getElementById("greeting");

  greeting.innerText = `Lanka Enterprises welcomes you, ${name}!\nWe're glad you are doing ${feeling}!`;
}

function updateTime() {
  const now = new Date();
  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const day = now.toLocaleDateString("en-US", {
    weekday: "long",
  });
  const date = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const timeDisplay = document.getElementById("time-display");

  timeDisplay.innerText = `Today is ${time} on ${day}, ${date}`;
}
