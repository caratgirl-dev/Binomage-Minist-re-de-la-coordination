const members = [
  {
    name: "Steven Boua",
    binome: {
      name: "Aba Ange Danielle",
      phone: "2250700000000",
      dept: "Département Louange"
    }
  },
  {
    name: "Aba Ange Danielle",
    binome: {
      name: "Steven Boua",
      phone: "2250700000001",
      dept: "Département Intercession"
    }
  }
];

const input = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");
const validateBtn = document.getElementById("validateBtn");
const result = document.getElementById("result");

let selectedMember = null;

/* AUTOCOMPLETE */
input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestions.innerHTML = "";
  selectedMember = null;

  if (!value) {
    suggestions.classList.add("hidden");
    return;
  }

  const filtered = members.filter(m =>
    m.name.toLowerCase().includes(value)
  );

  filtered.forEach(member => {
    const li = document.createElement("li");
    li.textContent = member.name;
    li.className = "px-6 py-3 hover:bg-cotton cursor-pointer";
    li.onclick = () => {
      input.value = member.name;
      selectedMember = member;
      suggestions.classList.add("hidden");
    };
    suggestions.appendChild(li);
  });

  suggestions.classList.toggle("hidden", filtered.length === 0);
});

/* BOUTON VALIDATION */
validateBtn.addEventListener("click", () => {

  if (!selectedMember) {
    alert("Veuillez sélectionner votre nom dans la liste.");
    return;
  }

  document.getElementById("binomeName").textContent =
    selectedMember.binome.name;

  document.getElementById("binomeDept").textContent =
    selectedMember.binome.dept;

  document.getElementById("binomePhone").textContent =
    selectedMember.binome.phone;

  const message =
    `Bonjour ${selectedMember.binome.name}, je suis ton binôme du ministère de la coordination.`;

  const whatsappURL =
    `https://wa.me/${selectedMember.binome.phone}?text=${encodeURIComponent(message)}`;

  document.getElementById("whatsappBtn").href = whatsappURL;

  /* Animation révélation */
  result.classList.remove("hidden");

  setTimeout(() => {
    result.classList.remove("scale-90", "opacity-0");
    result.classList.add("scale-100", "opacity-100");
  }, 50);
});