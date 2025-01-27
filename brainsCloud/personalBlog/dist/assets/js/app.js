/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst modalBtn = document.querySelectorAll('[data-modal]');\nconst body = document.body;\nconst modalClose = document.querySelectorAll('.modal__close');\nconst modal = document.querySelectorAll('.modal');\n\n\n// вызов модального окна\nmodalBtn.forEach(item => {\n    item.addEventListener('click', event => {\n        let $this = event.currentTarget;\n        let modalId = $this.getAttribute('data-modal');\n        let modal = document.getElementById(modalId);\n        const modalContent = modal.querySelector('.modal__content');\n\n        modalContent.addEventListener('click', event => {\n            // The stopPropagation() method prevents bubbling up to parent elements. Клик, по дочерним элементам нашего окна, не будет вызывать данное событие у родителя.\n            event.stopPropagation();\n        });\n\n        modal.classList.add('show');\n        body.classList.add('no-scroll');\n\n        modalContent.style.transform = 'none';\n    });\n});\n\n// закрытие модального окна \"крестиком\"\nmodalClose.forEach(item => {\n    item.addEventListener('click', event => {\n        // The closest() method find the closest element and its parents\n        let currentModal = event.currentTarget.closest('.modal');\n\n        closeModal(currentModal);\n    });\n});\n\n// закрытие модального окна кликом на маску\nmodal.forEach(item => {\n    item.addEventListener('click', event => {\n        let currentModal = event.currentTarget;\n\n        closeModal(currentModal);\n    });\n});\n\nfunction closeModal(currentModal) {\n    currentModal.classList.remove('show');\n    body.classList.remove('no-scroll');\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/modal.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;