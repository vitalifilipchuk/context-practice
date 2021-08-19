document.addEventListener('DOMContentLoaded', function() {

	let scrollerObject = {
		scrollToBlock() {
			let cordTop = this.getBoundingClientRect().top + pageYOffset;
			window.scrollTo({
			    top: cordTop,
			    behavior: 'smooth'
			});
		}
	}

	function initToTop() {
	   //cache to top button
	   let toTopBtn = document.querySelector("#toTop");
	   toTopBtn.addEventListener('click', function(e) {
	   	e.preventDefault();
		let attrBlock = this.getAttribute('href');
		let targetBlock = document.querySelector(attrBlock);
		scrollerObject.scrollToBlock.call(targetBlock);
	   });
	   window.addEventListener('scroll', function() {
		   let scroll = window.pageYOffset;

		   if (scroll >= 100) {
		       toTopBtn.classList.add("show");
		   } else {
		       toTopBtn.classList.remove("show");
		   }
	   });
	}

	function initLinks() {
		let menuLinks = document.querySelectorAll('.links-list li a');
		menuLinks.forEach(item => {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				let attrBlock = this.getAttribute('href');
				let targetBlock = document.querySelector(attrBlock);
				scrollerObject.scrollToBlock.call(targetBlock);
			});
		});
	}

	initToTop();
	initLinks();
});
