function search(query) {

    if (query.trim() === '') {
        displayResults([]);
        return;
    }

    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const results = data.filter(item => 
          item.domaine.toLowerCase().includes(query.toLowerCase()) ||
          item.filiere.toLowerCase().includes(query.toLowerCase()) ||
          item.id.toLowerCase().includes(query.toLowerCase()) 
        );
        displayResults(results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    if (results.length === 0) {
        resultsContainer.textContent = 'Aucun résultat trouvé.';
    } else {
      results.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `
          <p>${item.filiere}</p>
          <p>${item.domaine}</p>
        `;
        resultsContainer.appendChild(resultItem);
      });
    }
  }
  