//For Search box 
	document.addEventListener('DOMContentLoaded', () => {
		const searchBox = document.getElementById('search-box');
		const contentDiv = document.getElementById('explore');
		const message = document.getElementById('message');

    // Event listener for input to search and highlight
    searchBox.addEventListener('input', function () {
        const query = this.value.toLowerCase();
        let found = false;

        // Clear previous highlights
        const paragraphs = contentDiv.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
            paragraph.innerHTML = paragraph.textContent; // Reset content
        });

        // Hide no-match message initially
        message.style.display = 'none';

        // Search and highlight matches
        paragraphs.forEach(paragraph => {
            const text = paragraph.textContent.toLowerCase();
            if (text.includes(query) && query.trim() !== '') {
                found = true;
                const regex = new RegExp(`(${query})`, 'gi');
                paragraph.innerHTML = paragraph.textContent.replace(regex, '<span class="highlight">$1</span>');
            }
        });

        // Show message if no matches found
        if (!found && query.trim() !== '') {
            message.style.display = 'block'; // Show the "No matching data found" message
        }
    });

    // Reset search box when clicking outside of it
    document.addEventListener('click', function (e) {
        if (!searchBox.contains(e.target)) {
            searchBox.value = '';  // Reset the input box
            message.style.display = 'none';  // Hide the "No matching data found" message
            // Reset the highlighted text in the content div
            const paragraphs = contentDiv.querySelectorAll('p');
            paragraphs.forEach(paragraph => {
                paragraph.innerHTML = paragraph.textContent; // Reset content
            });
        }
    });

    // Prevent the document click event from firing when clicking inside the search box
    searchBox.addEventListener('click', function (e) {
        e.stopPropagation();
    });
});


//For explore on Flipping the tile 
		function handleTileClick(tile) {
		// If the tile has been flipped once, add the 'twice' class
			if (tile.classList.contains('flipped')) {
		// If it's been flipped twice, add the 'thrice' class to go back to the front
			if (tile.classList.contains('twice')) {
			// Reset to initial state (remove all flip classes)
				tile.classList.remove('twice');
				tile.classList.remove('flipped');
			// Optionally, reset tile to the front content with a small delay for smooth animation
				setTimeout(() => {
				tile.classList.remove('thrice');
				}, 600); // Wait for the animation to finish before resetting the class
		} else {
				tile.classList.add('twice');
    }
		} else {
// First click: Flip to back-1
				tile.classList.add('flipped');
  }
}
