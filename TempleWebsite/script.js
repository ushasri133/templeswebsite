fetch('temples.json')
  .then(response => response.json())
  .then(temples => {
    const container = document.getElementById('temple-list');

    temples.forEach(temple => {
      const card = document.createElement('div');
      card.classList.add('temple-card');

      card.innerHTML = `
        <img src="${temple.image}" alt="${temple.name}">
        <div class="info">
          <h2>${temple.name}</h2>
          <p><strong>State:</strong> ${temple.state}</p>
          <p><strong>Location:</strong> ${temple.location}</p>
          <p><strong>Deity:</strong> ${temple.deity}</p>
          <p><strong>Timings:</strong> ${temple.timings}</p>
        </div>
      `;

      container.appendChild(card);
    });
  });
