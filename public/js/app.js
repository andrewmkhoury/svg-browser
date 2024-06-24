document.addEventListener('DOMContentLoaded', function() {
    const svgItems = JSON.parse(document.getElementById('svgData').textContent);
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    const resultsContainer = document.getElementById('results');

    const fuse = new Fuse(svgItems, {
        keys: ['name'],
        threshold: 0.4,
        distance: 100
    });

    function displayResults(results) {
        resultsContainer.innerHTML = '';
        results.forEach(result => {
            const item = result.item;
            const div = document.createElement('div');
            div.className = 'svg-item';
            div.innerHTML = `
            <a href="/download/${item.name}" class="download-btn">
                <img src="/svg_files/${item.name}" alt="${item.name}">
                <p title="${item.name}">${item.name}</p>
            </a>
            `;
            resultsContainer.appendChild(div);
        });
    }

    function performSearch() {
        const query = searchInput.value;
        if (query.length > 0) {
            const results = fuse.search(query);
            displayResults(results);
        } else {
            displayResults(svgItems.map(item => ({ item })));
        }
    }

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch();
    });

    searchInput.addEventListener('input', performSearch);

    // Initial display
    displayResults(svgItems.map(item => ({ item })));
});