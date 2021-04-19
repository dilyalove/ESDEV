
// Scroll

let customersOffset = document.querySelector('#customers').offsetTop;

window.addEventListener('scroll', (event) => {
	if ((window.scrollY + window.innerHeight - 100) >= customersOffset) {
		if (!document.querySelector('#customers').classList.contains('active')) {
			document.querySelector('#customers').classList.add('active');
		}
	}
});

let asdas = document.querySelector('#development').offsetTop;

window.addEventListener('scroll', (event) => {
	if ((window.scrollY + window.innerHeight - 100) >= asdas) {
		if (!document.querySelector('#development').classList.contains('active')) {
			document.querySelector('#development').classList.add('active');
		}
	}
});


let num = 5; //number of pixels before modifying styles 

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
        $('.headerContainer').addClass('fixed');
    } else {
        $('.headerContainer').removeClass('fixed');
    }
});

// Modal in the window
// document.getElementById('modalScope').addEventListener('click', (event) => {
// 	event.preventDefault();
// 	document.querySelector('#modal').classList.add('show');
// 	document.body.style.overflowY = 'hidden';
// });

// document.getElementById('closeModal').addEventListener('click', (event) => {
// 	event.preventDefault();		
// 	document.querySelector('#modal').classList.remove('show');
// 	document.body.style.overflowY = 'auto';
// });

// Anchors headerNaw 
const anchors = document.querySelectorAll('a.headerAnchors, a.headerDisccus, a.adviceButtonContainer, a.projectButtonContainer, a.headerDisccus, a.discoverArrowContainer')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (event) {
		event.preventDefault()
		const blockID = anchor.getAttribute('href')
		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start',
			inline: 'nearest'
		})
	})
};

// Open blocks

function openTab(event, tabName) {
	var i, rightcontent, buttonLeft;

	rightcontent = document.getElementsByClassName('moreScopeFinance');
	for (i = 0; i < rightcontent.length; i++) {
		rightcontent[i].style.display = "none";
	};

	buttonLeft = document.getElementsByClassName('moreScopesButton');
	for (i = 0; i < buttonLeft.length; i++) {
		buttonLeft[i].className = buttonLeft[i].className.replace( " active", "");
	};

	document.getElementById(tabName).style.display = "block";
	event.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();

// Validation form in progect
;(function() {
	'use strict';

	var form = document.getElementById('feedback');
	if (!form) return;

	var	elements	= form.querySelectorAll('.form-control'),
		btn			= document.getElementById('send_mess'),
		patternName	= /^[а-яёА-ЯЁ\s]+$/,
		patternMail = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,
		patternCompany = /^[а-яёА-ЯЁ\s]+$/,
		patternSpam	= /[^\<\>\[\]%\&'`]+$/,
		errorMess	= [
			'Незаполненное поле ввода', // 0
			'Введите Ваше реальное имя', // 1
			'Укажите Вашу электронную почту', // 2
			'Неверный формат email', // 3
		],
		iserror		= false;

	btn.addEventListener('click', validForm);
	form.addEventListener('focus', function() {
		var el = document.activeElement;
		if (el !== btn) cleanError(el);
	}, true);

	function validForm(e) {
		e.preventDefault();
		var formVal = getFormData(form),
			error;

		for (var property in formVal) {
			error = getError(formVal, property);
			if (error.length != 0) {
				iserror = true;
				showError(property, error);
			}
		}
		if (!iserror) {
			sendFormData(formVal);
		}
		return false;
	}

	function getError(formVal, property) {
		var error = '',
			validate = {
			'username': function() {
				if (formVal.username.length == 0) {
					error = errorMess[0];
				} else if (patternName.test(formVal.username) == false) {
					error = errorMess[1];
				}
			},
			'usermail': function() {
				if (formVal.usermail.length == 0) {
					error = errorMess[0];
				} else if (patternMail.test(formVal.usermail) == false) {
					error = errorMess[3];
				}
			},
			'nameCompany': function() {
				if (formVal.nameCompany.length == 0) {
					error = errorMess[0];
				}
			}
		};
		validate[property]();
		return error;
	}

	[].forEach.call(elements, function(element) {
		element.addEventListener('blur', function(e) {
			var formElement = e.target,
				property = formElement.getAttribute('name'),
				dataField = {};

			dataField[property] = formElement.value;

			var error = getError(dataField, property);
			if (error.length != 0) {
				showError(property, error);
			}
			return false;
		});
	});

	function showError(property, error) {
		var formElement = form.querySelector('[name=' + property + ']'),
			errorBox	= formElement.parentElement.nextElementSibling;

		formElement.classList.add('form-control_error');
		errorBox.innerHTML = error;
		errorBox.style.display = 'block';
	}

	function cleanError(el) {
		var errorBox = el.parentElement.nextElementSibling;
		el.classList.remove('form-control_error');
		errorBox.removeAttribute('style');
	}

	function getFormData(form) {
		var controls = {};
		if (!form.elements) return '';
		for (var i = 0, ln = form.elements.length; i < ln; i++) {
			var element = form.elements[i];

			if (element.tagName.toLowerCase() !== 'button') {
				controls[element.name]= element.value;
			}
		}
		return controls;
	}
})();

	
// Button to up
	scrollTop.onclick = function() {
		window.scrollTo(pageXOffset, 0);
	};

	window.addEventListener('scroll', function() {
		scrollTop.hidden = (pageYOffset < 
			document.documentElement.clientHeight);
	});

// Click slider

$(function(){
        $('.adviceAdvantageContainer').slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            prevArrow: document.getElementsByClassName('adviceArrowTop'),
            nextArrow: document.getElementsByClassName('adviceArrowBottom'),
            draggable: false,
            variableHeight: true
        });
    });















