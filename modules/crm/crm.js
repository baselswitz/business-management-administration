const clients = [
  { name: "TechNova", email: "contact@technova.com" },
  { name: "RoboCorp", email: "info@robocorp.io" },
];

const container = document.getElementById("clients");
clients.forEach(c => {
  const div = document.createElement("div");
  div.className = "client-card";
  div.innerHTML = `<strong>${c.name}</strong><br>${c.email}`;
  container.appendChild(div);
});
