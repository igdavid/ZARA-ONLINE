function toggleContent(content) {
	if (content.style.maxHeight) {
		content.style.maxHeight = null;
	} 
	
	else {
		content.style.maxHeight = content.scrollHeight + 'px';
	}
}

		
function collapseAllOpenContent() {
	const colls = document.getElementsByClassName('collapsible');
	
	for (const coll of colls) {
		if (coll.classList.contains('active')) {
			coll.classList.remove('active');
			toggleContent(coll.nextElementSibling);
		}
	}
}

const colls = document.getElementsByClassName('collapsible');
for (const coll of colls) {
	coll.addEventListener('click', function() {
		if (!this.classList.contains('active')) {
			collapseAllOpenContent();
		}
		
		this.classList.toggle('active');
		
		toggleContent(this.nextElementSibling);
		});
}