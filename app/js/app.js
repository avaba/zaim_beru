// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

import Swiper from '~/app/libs/swiper/js/swiper.min.js'
import noUiSlider from '~/app/libs/noUiSlider/distribute/nouislider.js'
import wNumb from '~/app/libs/wnumb/wNumb.js'
import Inputmask from "inputmask";


document.addEventListener('DOMContentLoaded', () => {

	// skills number
	const skillsItem = document.querySelectorAll('.how-work__item')

	skillsItem.forEach((e, i) => {
		let count = i + 1,
			skillsItemNum = document.createElement('span')
		skillsItemNum.classList.add('how-work__item-num')
		skillsItemNum.innerHTML = count
		e.append(skillsItemNum)
	})

	// отзывы
	const sliderVideo = document.querySelector('.comment-slider-video');
	const sliderText = document.querySelector('.comment-slider-text');

	if (!!sliderVideo) {
		const swiperVideo = new Swiper('.comment-slider-video', {
			slidesPerView: 3,
			spaceBetween: '10%',
			centeredSlides: true,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				992: {
					slidesPerView: 1,
					spaceBetween: "8%",
				}
			}
		})
	}
	if (!!sliderText) {
		const swiperText = new Swiper('.comment-slider-text', {
			slidesPerView: 3,
			spaceBetween: '8%',
			centeredSlides: true,
			loop: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				992: {
					slidesPerView: 1,
				}
			}
		})
	}

	// онлайн-эфир
	const broacCast = document.querySelector('.broadcast__wrapper')
	if (!!broacCast) {
		const swiperOnline = new Swiper('.broadcast__wrapper', {
			direction: 'vertical',
			slidesPerView: 5,
			loopedSlides: 5,
			spaceBetween: 0,
			followFinger: false,
			allowTouchMove: false,
			simulateTouch: false,
			loop: true,
			autoplay: {
				delay: 6000,
			},
			breakpoints: {
				992: {
					spaceBetween: 8,
					slidesPerView: 3,
					loopedSlides: 3,

				}
			},
			on: {
				beforeInit: function () {
					let current = document.querySelectorAll('.broadcast .swiper-slide')
					let currentSlide = current[0]
					if (screen.width > 992) {
						currentSlide.firstElementChild.firstElementChild.innerText = '25 сек. назад';
						currentSlide.nextElementSibling.firstElementChild.firstElementChild.innerText = '19 сек. назад';
						currentSlide.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText = '13 сек. назад';
						currentSlide.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText = '7 сек. назад';
						currentSlide.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText = '1 сек. назад';
					} else {
						currentSlide.firstElementChild.firstElementChild.innerText = '13 сек. назад';
						currentSlide.nextElementSibling.firstElementChild.firstElementChild.innerText = '7 сек. назад';
						currentSlide.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText = '1 сек. назад';
					}
				},
			},
		})

		swiperOnline.on('slideChange', function () {
			let current = document.querySelectorAll('.broadcast .swiper-slide')
			let currentSlide = current[swiperOnline.activeIndex]
			if (screen.width > 992) {
				currentSlide.firstElementChild.firstElementChild.innerText = '25 сек. назад';
				currentSlide.nextElementSibling.firstElementChild.firstElementChild.innerText = '19 сек. назад';
				currentSlide.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText = '13 сек. назад';
				currentSlide.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText = '7 сек. назад';
				currentSlide.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText = '1 сек. назад';
			} else {
				currentSlide.firstElementChild.firstElementChild.innerText = '13 сек. назад';
				currentSlide.nextElementSibling.firstElementChild.firstElementChild.innerText = '7 сек. назад';
				currentSlide.nextElementSibling.nextElementSibling.firstElementChild.firstElementChild.innerText = '1 сек. назад';
			}
		});
	}

	// квиз

	const swiperQuiz = new Swiper('.quiz__slider.swiper-container', {
		slidesPerView: 1,
		followFinger: false,
		allowTouchMove: false,
		simulateTouch: false,
		autoHeight: true
	})

	const nextSlideBtn = document.querySelectorAll('.next-slide-btn');
	const fact = document.getElementById('registr')

	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
	}



	function formChecker(selector) {
		let index = 0;
		if (fact.checked) {
			let regAdress = document.querySelector('input[name="reg-adress"]')
			let factAdress = document.querySelector('input[name="fact-adress"]')
			factAdress.value = regAdress.value
		}
		let formData = new FormData(document.querySelector(selector));
		for (let input of formData.entries()) {
			if (input[1] == "") {
				index++
				document.querySelector('input[name="' + input[0] + '"]').classList.add('invalid')
			} else {
				console.log(input[0])
				if (input[0] == 'phone' && document.querySelector('input[name="' + input[0] + '"]').value.replace(/[_]/g, '').length != 18) {
					index++
					document.querySelector('input[name="' + input[0] + '"]').classList.add('invalid')
				} else if (input[0] == 'birthday' && document.querySelector('input[name="' + input[0] + '"]').value.replace(/[^a-z]/g, '').length != 0) {
					index++
					document.querySelector('input[name="' + input[0] + '"]').classList.add('invalid')
				} else if (input[0] == 'ppt-serial' && document.querySelector('input[name="' + input[0] + '"]').value.replace(/[_]/g, '').length != 5) {
					index++
					document.querySelector('input[name="' + input[0] + '"]').classList.add('invalid')
				} else if (input[0] == 'ppt-numbe6' && document.querySelector('input[name="' + input[0] + '"]').value.replace(/[_]/g, '').length != 6) {
					index++
					document.querySelector('input[name="' + input[0] + '"]').classList.add('invalid')
				} else {
					document.querySelector('input[name="' + input[0] + '"]').classList.remove('invalid')
				}
			}
		}
		return index;
	}

	function sendBitrixForm() {
		let formData = new FormData(document.querySelector('.slide1'));
		let formData2 = new FormData(document.querySelector('.slide2'));
		let formArray = new Array();
		for (let input of formData.entries()) {
			let arr = {}
			arr[input[0]] = input[1]
			formArray.push(arr)
		}
		for (let input2 of formData2.entries()) {
			let arr = {}
			arr[input2[0]] = input2[1]
			formArray.push(arr)
		}

		jQuery.ajax({
			url: 'http://aviator.avaba.ru/wp-content/themes/zaym_beru/inc/bitrixform.php',
			type: 'POST',
			data: {
				bitrix: true,
				field: formArray
			},
			success: function (data) {
				console.log(data)
			}
		});
	}


	nextSlideBtn.forEach((btn) => {
		btn.addEventListener('click', () => {
			let index = swiperQuiz.activeIndex
			let start = document.getElementsByClassName('start')[0]
			let end = document.getElementsByClassName('end')[0]
			let popup = document.querySelector('.popup-tel')
			let overlay = document.querySelector('.overlay')
			let firstName = document.querySelector('input[name="lname"]')
			let lasttName = document.querySelector('input[name="patronymic"]')
			switch (index) {
				case 0:
					popup.classList.remove('showed')
					overlay.classList.remove('showed')
					start.classList.remove('start')
					start.classList.add('all')
					break;
				case 1:
					let formRes = formChecker('.slide2')
					if (formRes == 0) {
						end.classList.remove('start')
						end.classList.add('all')
						localStorage.setItem('name', firstName.value);
						localStorage.setItem('patronymic', lasttName.value);
						let rand = getRandomInt(1, 837)
						let time = 6000 / rand
						let time2 = 6000 / 100

						// сбор данных и отправка на Bitrix

						sendBitrixForm();

						function timer() {
							setInterval(() => {
								let res = document.querySelector('.count-results')
								let countResults = parseInt(res.innerText)
								if (countResults <= rand) {
									res.innerHTML = countResults + 1
								} else {
									clearInterval()
								}
							}, time);
							setInterval(() => {
								let res = document.querySelector('.repsent-count')
								let countResults = parseInt(res.innerText)
								if (countResults < 100) {
									res.innerHTML = countResults + 1
								} else {
									clearInterval()
								}
							}, time2);
						}
						let bar = document.querySelector('.quiz__slide-process-bar')
						setTimeout(() => {
							bar.classList.add('active')
							timer()
						}, 1000);
						setTimeout(() => {
							document.location.href = '/results/'
						}, 10000);
					} else {
						return false
					}
					break;
			}
			swiperQuiz.slideNext();
			window.scrollTo(0, 100)
		})
	})

	// calc

	const returnMoneyElement = document.getElementById('return-money')
	const returnDateElem = document.querySelector('#return-date')
	const dateValTerm = document.getElementById('date-val-term')
	const dateInput = document.getElementById('date-input')
	let percentMoney = 0

	function returnMoney() {
		const dateGet = +calcDate.noUiSlider.get()
		const sumGet = +calcSum.noUiSlider.get()

		if ((sumGet >= 10001 && sumGet < 30000) || (dateGet >= 8 && dateGet < 30)) {
			percentMoney = (sumGet / 100) * 0.5
			returnMoneyElement.innerText = percentMoney * dateGet + sumGet
		} else if (sumGet >= 30000 || dateGet >= 30) {
			percentMoney = (sumGet / 100) * 0.25
			returnMoneyElement.innerText = percentMoney * dateGet + sumGet
		} else {
			returnMoneyElement.innerText = sumGet
		}
	}

	let count = sessionStorage.getItem('loan_size')
	let time = sessionStorage.getItem('loan_term')
	if (!count) {
		count = 1000
	}
	if (!time) {
		time = 1
	}

	// Сумма займа

	const calcSum = document.getElementById('sum')
	if (!!calcSum) {
		noUiSlider.create(calcSum, {
			start: [count],
			step: 1000,
			connect: [true, false],
			range: {
				min: [1000],
				max: [100000]
			},
			format: wNumb({
				decimals: 0
			})
		})
	}

	// Срок займа

	const calcDate = document.getElementById('date')

	if (!!calcDate) {
		noUiSlider.create(calcDate, {
			start: [time],
			step: 1,
			connect: [true, false],
			range: {
				min: [1],
				'50%': [30, 30],
				max: 360
			},
			format: wNumb({
				decimals: 0
			})
		})
	}

	// меняем дату
	const calcDateValueElement = document.getElementById('date-val')

	function numWord(value, words) {
		value = Math.abs(value) % 100
		let num = value % 10
		if (value > 10 && value < 20) return words[2]
		if (num > 1 && num < 5) return words[1]
		if (num == 1) return words[0]
		return words[2]
	}
	if (!!calcDate) {
		calcDate.noUiSlider.on('update', function (values, handle) {
			calcDateValueElement.innerHTML = values[handle]
			dateInput.value = values[handle]

			// формируем дату выдачи
			const addDays = +values[handle]
			const date = new Date()
			date.setDate(date.getDate() + addDays)

			const day = ('0' + date.getDate()).slice(-2)
			const mounth = ('0' + (date.getMonth() + 1)).slice(-2)
			const year = date.getFullYear()

			const returnDate = `${day}.${mounth}.${year}`

			returnDateElem.innerHTML = returnDate

			let newDateMounth = Math.round(calcDate.noUiSlider.get() / 30)

			const dateGet = +calcDate.noUiSlider.get()

			// склонение слов

			if (dateGet >= 30) {
				calcDateValueElement.innerText = newDateMounth
				dateValTerm.innerText = numWord(newDateMounth, [
					'месяц',
					'месяца',
					'месяцев'
				])
			} else {
				dateValTerm.innerText = numWord(dateGet, ['день', 'дня', 'дней'])
			}

			if (dateGet >= 360) {
				newDateMounth /= 12
				calcDateValueElement.innerText = newDateMounth
				dateValTerm.innerText = numWord(newDateMounth, ['год', 'года', 'лет'])
			}

			returnMoney()
		})
	}

	// меняем сумму по клику
	const calcSumFootValueElement = document.getElementById('foot-sum')
	const calcSumValueElement = document.getElementById('sum-val')
	const sumInput = document.getElementById('sum-input')

	// горячие клавиши '1000', '50000', '100000'
	const calcVariableSum = document.querySelectorAll(
		'.calc__variant-item[data-sum]'
	)

	calcVariableSum.forEach((item) => {
		item.addEventListener('click', (e) => {
			const calcVal = item.getAttribute('data-sum')
			calcSum.noUiSlider.set(calcVal)
		})
	})
	if (!!calcSum) {
		calcSum.noUiSlider.on('update', function (values, handle) {
			calcSumValueElement.innerHTML = values[handle]
			calcSumFootValueElement.innerHTML = values[handle]
			sumInput.value = values[handle]

			returnMoney()
		})

		sumInput.addEventListener('change', function () {
			calcSum.noUiSlider.set(this.value)
		})
	}

	// меняем дату по клику
	const calcVariableDate = document.querySelectorAll(
		'.calc__variant-item[data-date]'
	)
	if (!!dateInput) {
		dateInput.addEventListener('keydown', function (e) {
			if (e.key == 'Enter') {
				this.blur()
			}
		})
		dateInput.addEventListener('focus', function () {
			let dayCouunt = this.value
			if (dayCouunt >= 30) {
				dateValTerm.innerText = "дней"
			}
		})
		dateInput.addEventListener('blur', function () {
			let newDateMounth = Math.round(calcDate.noUiSlider.get() / 30)
			let dateGet = this.value
			if (dateGet >= 30) {
				calcDateValueElement.innerText = newDateMounth
				dateValTerm.innerText = numWord(newDateMounth, [
					'месяц',
					'месяца',
					'месяцев'
				])
			} else {
				dateValTerm.innerText = numWord(dateGet, ['день', 'дня', 'дней'])
			}

			if (dateGet >= 360) {
				newDateMounth /= 12
				calcDateValueElement.innerText = newDateMounth
				dateValTerm.innerText = numWord(newDateMounth, ['год', 'года', 'лет'])
			}
		})

		dateInput.addEventListener('change', function () {
			let dayCouunt = this.value,
				newVal;
			switch (true) {
				case (dayCouunt < 46 && dayCouunt >= 30): newVal = 30; break;
				case (dayCouunt < 75 && dayCouunt >= 46): newVal = 60; break;
				case (dayCouunt < 106 && dayCouunt >= 76): newVal = 90; break;
				case (dayCouunt < 136 && dayCouunt >= 106): newVal = 120; break;
				case (dayCouunt < 166 && dayCouunt >= 136): newVal = 150; break;
				case (dayCouunt < 196 && dayCouunt >= 166): newVal = 180; break;
				case (dayCouunt < 226 && dayCouunt >= 196): newVal = 210; break;
				case (dayCouunt < 256 && dayCouunt >= 226): newVal = 240; break;
				case (dayCouunt < 286 && dayCouunt >= 256): newVal = 270; break;
				case (dayCouunt < 316 && dayCouunt >= 286): newVal = 300; break;
				case (dayCouunt < 346 && dayCouunt >= 316): newVal = 330; break;
				case (dayCouunt >= 346): newVal = 360; break;
			}

			this.value = newVal
			calcDate.noUiSlider.set(newVal)
		})
	}

	// горячие клавиши '1 день', '1 месяц', '1 год'
	calcVariableDate.forEach((item) => {
		item.addEventListener('click', () => {
			const calcVal = item.getAttribute('data-date')
			calcDate.noUiSlider.set(calcVal)
		})
	})

	// сохранение и отправка
	const calcBtn = document.querySelectorAll('.calc-btn')
	if (calcBtn.length != 0) {
		calcBtn.forEach((calc) => {
			calc.addEventListener('click', (e) => {
				e.preventDefault()
				let getSum = document.getElementById('sum-input').value
				let getDate = document.getElementById('date-input').value
				sessionStorage.setItem('loan_size', getSum);
				sessionStorage.setItem('loan_term', getDate);
				let name = localStorage.getItem('name')
				if (!!name && name != "") {
					document.location.href = '/results/'
				}
				else {
					let win = window.open('/quiz/', '_blank');
					document.location.href = '/result/'
				}
			})
		})
	}

	// позсказки
	let token = "6f07823a261fd4211e9bf71f9c003161603829f0";
	const fname = document.querySelectorAll('.quiz__data')

	fname.forEach((input) => {
		input.oninput = function (e) {
			let list = input.nextElementSibling.children[0]
			let type = input.dataset.attr
			list.innerHTML = ''
			let text = input.value
			let arr, url

			switch (type) {
				case "ADRESS":
					url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
					arr = {
						query: text,
						count: 5
					}
					break;
				case "EMAIL":
					url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/email";
					arr = {
						query: text,
						count: 5
					}
					break;
				default:
					url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio";
					arr = {
						query: text,
						parts: [type],
						count: 5
					}
					break;
			}

			if (type == 'EMAIL' && text.search('@') == -1) {
				return false
			}
			let options = {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					"Accept": "application/json",
					"Authorization": "Token " + token
				},
				body: JSON.stringify(arr)
			}

			fetch(url, options)
				.then(response => response.text())
				.then((result) => {
					let person = JSON.parse(result);
					person.suggestions.forEach((item) => {
						let label = document.createElement("li");
						label.className = 'hint-option-label'
						label.innerText = item.value
						list.appendChild(label)
						if (type == 'EMAIL') {
							input.parentElement
						}
					})
				})
				.catch(error => console.log("error", error));
		}
	});

	//выбор подсказки

	const titleAdress = document.querySelectorAll('.quiz__adress-title')
	titleAdress.forEach((item) => {
		item.addEventListener('click', function () {
			item.nextElementSibling.classList.add('active')
			item.nextElementSibling.firstElementChild.nextElementSibling.focus()
		})
	})

	document.addEventListener('click', function (li) {
		if (li.target && li.target.className == 'hint-option-label') {
			let lis = li.target
			let parentInput = lis.parentElement.parentElement.previousElementSibling
			if (parentInput.dataset.attr == "ADRESS") {
				parentInput.previousElementSibling.value = lis.innerText
				parentInput.parentElement.previousElementSibling.innerText = lis.innerText
				parentInput.value = lis.innerText
				parentInput.parentElement.classList.remove('active')
			} else {
				parentInput.value = lis.innerText
				lis.parentElement.innerHTML = ''
			}

		}
		if (li.target && li.target.className != 'quiz__adress-select' && li.target.className != 'quiz__adress-title quiz__personal-input' && li.target.className != 'quiz__adress-search quiz__data') {
			let list = document.querySelectorAll('.quiz__adress-select');
			list.forEach((fa) => {
				fa.classList.remove('active')
			})
		}
		if (li.target && li.target.className != 'datacol-hint') {
			let ul = document.querySelectorAll('.datacol-hint ul');
			ul.forEach((item) => {
				item.innerHTML = ''
			})
		}
	});


	// маски

	let deta = document.getElementById("dirthday");
	let tel = document.getElementById("tel");
	let serial = document.getElementById("ppt-serial");
	let number = document.getElementById("ppt-number");
	let email = document.getElementById("email")

	let currentTime = new Date()

	// returns the month (from 0 to 11)
	let month = ('0' + (currentTime.getMonth() + 1)).slice(-2)

	// returns the day of the month (from 1 to 31)
	let day = ('0' + (currentTime.getDate())).slice(-2)

	// returns the year (four digits)
	let year = currentTime.getFullYear() - 18
	let minyear = currentTime.getFullYear() - 75

	// write output MM/dd/yyyy
	let maxdate = day + "." + month + "." + year
	let minDate = day + "." + month + "." + minyear

	if (!!email) {
		email.addEventListener('input', function () {
			this.value = this.value.replace(/[^a-zA-Z0-9.]/g, '');
		})
	}

	if (!!deta) {
		Inputmask({ "alias": "datetime", "inputFormat": "dd.mm.yyyy", "max": maxdate, "min": minDate }).mask(deta);
	}
	if (!!tel) {
		Inputmask({ "mask": "+7 (999) 999-99-99" }).mask(tel);
	}
	if (!!serial) {
		Inputmask({ "mask": "99 99" }).mask(serial);
	}
	if (!!number) {
		Inputmask({ "mask": "999999" }).mask(number);
	}

	//появление фактического адреса

	const adress = document.querySelector('.fact-adress')

	if (!!fact) {
		fact.addEventListener('change', (el) => {
			adress.style.opacity = (adress.style.opacity == '0') ? '1' : '0'
			adress.style.visibility = (adress.style.visibility == 'hidden') ? 'visible' : 'hidden'
		})
	}


	// проверка телефона

	const close = document.querySelectorAll('.close-popup')
	const popup = document.querySelectorAll('.popup')
	const overlay = document.querySelector('.overlay')
	const openPopup = document.querySelectorAll('.popup-btn')

	openPopup.forEach((op) => {
		op.addEventListener('click', () => {
			let name = op.dataset.popup
			if (name == 'tel') {
				let result = formChecker('.slide1')
				if (result == 0) {
					let polit = document.getElementById('polit')
					let serv = document.getElementById('go_serv')
					if (polit.checked && serv.checked) {
						let tel = document.getElementById('tel').value
						let telPut = document.querySelector('.correct-tel')
						telPut.innerText = tel
						polit.nextElementSibling.classList.remove('invalid')
						serv.nextElementSibling.classList.remove('invalid')
					} else {
						if (!polit.checked) {
							polit.nextElementSibling.classList.add('invalid')
						}
						if (!serv.checked) {
							serv.nextElementSibling.classList.add('invalid')
						}
						return false
					}
				} else {
					return false
				}
			}
			let needPopup = document.querySelector('.popup-' + name)
			overlay.classList.add('showed')
			needPopup.classList.add('showed')
		})
	})

	// закрыть попап

	if (!!overlay) {
		overlay.addEventListener('click', () => {
			overlay.classList.remove('showed')
			popup.forEach((pp) => {
				pp.classList.remove('showed')
			})
		})
	}

	if (!!close) {
		close.forEach((cl) => {
			cl.addEventListener('click', () => {
				overlay.classList.remove('showed')
				popup.forEach((pp) => {
					pp.classList.remove('showed')
				})
			})
		})
	}

	// вывод имени в результатах

	const title_name = document.querySelector('.quiz__final-title')
	let title = document.querySelector('.person-bought')

	const name = localStorage.getItem('name')
	const patronymic = localStorage.getItem('patronymic')

	if (!!title_name) {
		if (name.length != 0 && patronymic.length != 0) {
			title.innerHTML = name + ' ' + patronymic
			title_name.classList.add('active')
		}
	}

})
