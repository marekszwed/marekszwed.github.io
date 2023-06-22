// NAVIGATION
const burgerBtn = document.querySelector('.burger');
const barsBatn = document.querySelector('.fa-bars');
const xBtn = document.querySelector('.fa-times');
const nav = document.querySelector('.nav');
const allNavLinks = document.querySelectorAll('.nav__link');
// Scroll Spy
const menuItems = document.querySelectorAll('.nav__link');
const scrollSpySections = document.querySelectorAll('.section');
// Form
const mailInput = document.querySelector('.mail-input');
const nameInput = document.querySelector('.name-input');
const errorMail = document.querySelector('.error-mail');
const errorName = document.querySelector('.error-name');
const sendBtn = document.querySelector('.sendBtn');
const clearBtn = document.querySelector('.clear');
const textArea = document.querySelector('#text')

// Footer - year
const footerYear = document.querySelector('.footer__year');

const currentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};


currentYear();

// Navigation

const handleNav = () => {
	nav.classList.toggle('nav--active');

	allNavLinks.forEach((item) => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active');
		});
	});
};

burgerBtn.addEventListener('click', handleNav);

// scroll-spy

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = [];

		scrollSpySections.forEach((section) => {
			if (window.scrollY <= section.offsetTop + section.offsetHeight - 108) {
				sections.push(section);

				const activeSections = document.querySelector(
					`[href*="${sections[0].id}"]`
				);

				menuItems.forEach((item) => item.classList.remove('active'));

				activeSections.classList.add('active');
			}
		});
	}
};

window.addEventListener('scroll', handleScrollSpy);

// FORM

// mail
const showError = () => {
	errorMail.classList.remove('hide')
}

const hideError = () => {
	errorMail.classList.add('hide')
}

const checkMail = () => {
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(mailFormat.test(mailInput.value)) {
		console.log('correct');
		hideError()
	} else {
		console.log('uncorrect');
		showError()
	}
	
};

// username

const checkLength = min => {
	if(nameInput.value.length < min) {
		errorName.classList.remove('hide')
		nameInput.textContent

	} else {
		errorName.classList.add('hide')
	}
	
}


sendBtn.addEventListener('click', e=> {
	e.preventDefault()
	showError()
	checkMail()
	checkLength(4)
})

// clearing inputs (mail and name input)

clearBtn.addEventListener('click', (e) => {
	[mailInput, nameInput, textArea].forEach(el => {
		el.value = '';
	});
	hideError()
	checkLength()
	e.preventDefault();
});
