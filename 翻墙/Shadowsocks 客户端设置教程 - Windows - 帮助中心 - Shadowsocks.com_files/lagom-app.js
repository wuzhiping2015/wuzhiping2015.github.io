/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"lagom/assets/js/lagom-app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "templates";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/assets/js/lagom-app.js","lagom/assets/js/vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/components/check-all.js":
/*!***********************************************!*\
  !*** ./src/assets/js/components/check-all.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  var checkAll = $('#selectAll');
  var checkboxes = $('.domids').not(':disabled');
  checkAll.on('ifChecked ifUnchecked', function (e) {
    if (e.type == 'ifChecked') {
      checkboxes.iCheck('check');
    } else {
      checkboxes.iCheck('uncheck');
    }
  });
  checkboxes.on('ifChanged', function (e) {
    if (checkboxes.filter(':checked').length > 0) {
      $('#domainSelectedCounter').addClass('badge--primary');
      $('.bottom-action-sticky').css('opacity', '1');
      $('body').addClass('is-actions');
    } else {
      $('#domainSelectedCounter').removeClass('badge--primary');
      $('.bottom-action-sticky').css('opacity', '0');
      $('body').removeClass('is-actions');
    }

    $('#domainSelectedCounter').text(checkboxes.filter(':checked').length);

    if (checkboxes.filter(':checked').length == checkboxes.length) {
      checkAll.prop('checked', 'checked');
    } else {
      checkAll.removeProp('checked');
    }

    checkAll.iCheck('update');
  });
}

/***/ }),

/***/ "./src/assets/js/components/content-slider.js":
/*!****************************************************!*\
  !*** ./src/assets/js/components/content-slider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/assets/js/components/utils.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Name: Content Slider(layersUI)
 * Version: Alpha
 * License: -
 * Website: http://layersui.com/
 * --------------------------------------------------------------------------
 */


var SELECTORS = {
  container: '[data-content-slider]',
  nextSlide: '[data-next-slide]',
  prevSlide: '[data-prev-slide]',
  pagination: '[data-slider-pagination]'
};
var Default = {
  slideToClickedSlide: false,
  navStorage: 'normal'
};

var contentSlider =
/*#__PURE__*/
function () {
  function contentSlider(container, options) {
    _classCallCheck(this, contentSlider);

    this.container = container;
    this.nextSlide = this.container.find(SELECTORS.nextSlide).first();
    this.prevSlide = this.container.find(SELECTORS.prevSlide).first();
    this.pagination = this.container.find(SELECTORS.pagination).first();
    this.options = options;
    this.isInit = false;
    this.getConfig();
    this.initPLugin();
    this.bindEvents();
  }

  _createClass(contentSlider, [{
    key: "getConfig",
    value: function getConfig() {
      var dataConfig = this.container.data();

      if (dataConfig.options) {
        this.dataOptions = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].parseDataOptions(dataConfig.options);
      } else {
        this.dataOptions = {};
      }

      this.config = $.extend({}, Default, dataConfig, this.dataOptions, this.options);
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {}
  }, {
    key: "slideTo",
    value: function slideTo() {}
  }, {
    key: "slideNext",
    value: function slideNext() {}
  }, {
    key: "slidePrev",
    value: function slidePrev() {}
  }, {
    key: "destroy",
    value: function destroy() {} //Private methods

  }, {
    key: "initPLugin",
    value: function initPLugin() {
      var that = this;
      this.swiperInstance = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_1___default.a(this.container, {
        resistance: true,
        resistanceRatio: 0,
        slidesPerView: 'auto',
        watchSlidesVisibility: true,
        scrollbar: {
          hide: false
        },
        pagination: {
          el: this.pagination[0]
        },
        navigation: {
          nextEl: this.nextSlide[0],
          prevEl: this.prevSlide[0],
          disabledClass: 'is-disabled'
        },
        on: {
          init: function init() {
            that.onInit(this);
          },
          tap: function tap(event) {
            that.changeActiveSlide(this);

            if (that.config.slideToClickedSlide) {
              that.slideToClickedSlide(this, event);
            }

            that.onClick(this, event);
          },
          slideChangeStart: function slideChangeStart(event) {
            that.onSlideChangeStart(this, event);
          },
          slideChangeEnd: function slideChangeEnd(event) {
            that.onSlideChangeEnd(this, event);
          },
          transitionStart: function transitionStart(event) {
            that.onTransitionStart(this, event);
          },
          transitionEnd: function transitionEnd(event) {
            that.onTransitionEnd(this, event);
          },
          sliderMove: function sliderMove(event) {
            that.onSliderMove(this, event);
          }
        },
        containerModifierClass: 'content-slider',
        slideClass: 'content-slider-item',
        wrapperClass: 'content-slider-wrapper'
      });
    }
  }, {
    key: "changeActiveSlide",
    value: function changeActiveSlide(swiper) {
      if (!this.isInit) {
        return;
      }

      var slides = swiper.slides;

      switch (this.config.navStorage) {
        case 'normal':
          break;

        case 'hash':
          break;

        case 'localStorage':
          $(slides).removeClass('is-active');
          window.localStorage.setItem("content-slider-".concat(this.config.localStorageId), swiper.clickedIndex);
          break;
      }
    }
  }, {
    key: "slideToClickedSlide",
    value: function slideToClickedSlide(swiper, event) {
      var clickedIndex = swiper.clickedIndex,
          slides = swiper.slides;
      swiper.updateActiveIndex();

      if (!$(slides[clickedIndex - 1]).hasClass('swiper-slide-visible')) {
        swiper.slideTo(swiper.activeIndex - 1);
      }

      if (!$(slides[clickedIndex + 1]).hasClass('swiper-slide-visible')) {
        swiper.slideTo(swiper.activeIndex + 1);
      }
    } //Callbacks

  }, {
    key: "onInit",
    value: function onInit(swiper) {
      if (typeof this.config.onInit === 'function') {
        this.config.onInit();
      }

      switch (this.config.navStorage) {
        case 'normal':
          var activeSlideIndex = 0,
              slides = swiper.slides;
          $(slides).each(function (index) {
            if ($(this).hasClass('is-active')) {
              activeSlideIndex = index;
            }
          });
          swiper.slideTo(activeSlideIndex, 0);
          break;

        case 'hash':
          if (window.location.hash) {
            var slide = $(swiper.container).find('[href="' + window.location.hash + '"]'),
                slideIndex = slide.closest('.swiper-slide').index();
            slide.trigger('click');
            swiper.slideTo(slideIndex, 0);
          }

          break;

        case 'localStorage':
          var index = window.localStorage.getItem("content-slider-".concat(this.config.localStorageId));

          if (index) {
            swiper.slideTo(index, 0);
            $(swiper.slides[index]).find('a').trigger('click');
          } else {
            swiper.slideTo(0, 0);
          }

          break;
      }

      this.showSlider(swiper);
      this.isInit = true;
    }
  }, {
    key: "showSlider",
    value: function showSlider(swiper) {
      swiper.$el.css({
        visibility: 'visible'
      });
    }
  }, {
    key: "onClick",
    value: function onClick(swiper, event) {
      if (typeof this.config.onClick === 'function') {
        this.config.onClick(swiper, event);
      }
    }
  }, {
    key: "onSlideChangeStart",
    value: function onSlideChangeStart(swiper, event) {
      if (typeof this.config.onSlideChange === 'function') {
        this.config.onSlideChangeStart(swiper, event);
      }
    }
  }, {
    key: "onSlideChangeEnd",
    value: function onSlideChangeEnd(swiper, event) {
      if (typeof this.config.onSlideChangeEnd === 'function') {
        this.config.onSlideChangeEnd(swiper, event);
      }
    }
  }, {
    key: "onTransitionStart",
    value: function onTransitionStart(swiper, event) {
      if (typeof this.config.onTransitionStart === 'function') {
        this.config.onTransitionStart(swiper, event);
      }
    }
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd(swiper, event) {
      if (typeof this.config.onTransitionEnd === 'function') {
        this.config.onTransitionEnd(swiper, event);
      }
    }
  }, {
    key: "onSliderMove",
    value: function onSliderMove(swiper, event) {
      if (typeof this.config.onSliderMove === 'function') {
        this.config.onSliderMove(swiper, event);
      }
    }
  }]);

  return contentSlider;
}();

function initDataSelectors() {
  $(SELECTORS.container).each(function () {
    new contentSlider($(this));
  });
}

function init() {
  $(SELECTORS.container).each(function () {
    new contentSlider($(this));
  });
}

/***/ }),

/***/ "./src/assets/js/components/credit-box.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/credit-box.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  $(document).on('click', '#add-credits-buttons .btn', function () {
    var price = $(this).data('price');
    $(this).parent().find('.active').removeClass('active');
    $(this).addClass('active');
    $(this).parent().siblings('.input-group').find('#amount').val(price);
  });
  $(document).on('keyup', '#amount', function () {
    var val = $(this).val();
    $('#add-credits-buttons').find('.active').removeClass('active');
    $('#add-credits-buttons').find('[data-price="' + val + '"]').addClass('active');
  });
}

/***/ }),

/***/ "./src/assets/js/components/custom-scrollbar.js":
/*!******************************************************!*\
  !*** ./src/assets/js/components/custom-scrollbar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var NavCustomScrollbar =
/*#__PURE__*/
function () {
  function NavCustomScrollbar(scrollbar) {
    _classCallCheck(this, NavCustomScrollbar);

    this.scrollbar = $('[data-nav-scrollbar]');

    if (!this.scrollbar.length) {
      return;
    }

    this.scrollbarInner = $('[data-nav-scrollbar-inner]');
    this.navContent = $('[data-nav-content]');
    this.blockUpdateContentPosition = false;
    this.bindEvents();
    this.initPlugin();
    this.setScrollbarPosition();
  }

  _createClass(NavCustomScrollbar, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.scrollbar.on('ps-scroll-y', function () {
        _this.updateContentPosition();
      });
      this.navContent.on('scroll', function (event) {
        _this.updateScrollbarPosition();
      });
      $(window).on('resize', function () {
        _this.setScrollbarPosition();
      });
    }
  }, {
    key: "initPlugin",
    value: function initPlugin() {
      this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](this.scrollbar[0], {
        wheelSpeed: 2,
        wheelPropagation: false,
        minScrollbarLength: 20
      });
    }
  }, {
    key: "updateContentPosition",
    value: function updateContentPosition() {
      if (!this.blockUpdateContentPosition) {
        this.navContent.scrollTop(this.scrollbar.scrollTop());
      }

      this.blockUpdateContentPosition = false;
    }
  }, {
    key: "updateScrollbarPosition",
    value: function updateScrollbarPosition() {
      this.blockUpdateContentPosition = true;
      this.scrollbar.scrollTop(this.navContent.scrollTop());
      this.ps.update();
    }
  }, {
    key: "setScrollbarPosition",
    value: function setScrollbarPosition() {
      var scrollHeight = this.navContent[0].scrollHeight;
      this.scrollbarInner.css('height', scrollHeight);
      this.ps.update();
    }
  }]);

  return NavCustomScrollbar;
}();

function init() {
  new NavCustomScrollbar();
  $('[data-panels-grid] .list-group, .language div.dropdown-menu, .panel-choose-domain .dropdown-menu, .footer-links .dropdown-menu, .categories-collapsed .dropdown-menu').each(function () {
    this.ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["default"](this, {
      wheelSpeed: 2,
      wheelPropagation: true,
      minScrollbarLength: 20
    });
  });
}

/***/ }),

/***/ "./src/assets/js/components/dataTablesScripts.js":
/*!*******************************************************!*\
  !*** ./src/assets/js/components/dataTablesScripts.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  // datatables
  if ($('.dataTable').length) {
    //add collapse button to each row
    // $('.dataTable tbody tr').each(function(){
    //     var td = $(this).find('td:first');
    //     $('<button type="button" class="btn-table-collapse"></button>').appendTo(td);
    // });
    //prevent standard collapse click
    $(document).on('click', '.dataTable tbody tr td', function (e) {
      var i = e.target.tagName.toLowerCase(),
          r = e.target.parentNode.tagName.toLowerCase();

      if (e.target.className != "btn-table-collapse" && e.target.className != "cell-action" && e.target.className != "cell-checkbox" && "button" != i && "a" != i && "img" != i && "button" != r && "a" != r && "input" != i && "input" != r) {
        if ($(this).closest('tr').data('url') != undefined) {
          document.location.href = $(this).closest('tr').data('url');
        }
      }
    });
    $('.dataTable thead tr th .btn-table-collapse').on('click', function () {
      if ($(this).hasClass('expanded')) {
        $(this).removeClass('expanded');
        $(this).closest('.dataTable').find('tr.parent td .btn-table-collapse').trigger('click');
      } else {
        $(this).addClass('expanded');
        $(this).closest('.dataTable').find('tr:not(.parent) td .btn-table-collapse').trigger('click');
      }
    });
    $('.dataTable input').on('ifChecked', function (event) {
      $(this).closest('tr').addClass('active');
    });
    $('.dataTable input').on('ifUnchecked', function (event) {
      $(this).closest('tr').removeClass('active');
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/dropdown-select.js":
/*!*****************************************************!*\
  !*** ./src/assets/js/components/dropdown-select.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DropdownSelect =
/*#__PURE__*/
function () {
  function DropdownSelect(dropdown) {
    _classCallCheck(this, DropdownSelect);

    this.dropdown = $(dropdown);
    this.list = this.dropdown.find('[data-dropdown-select-list]');
    this.listItems = this.list.children();
    this.searchInput = this.dropdown.find('[data-dropdown-select-search]');
    this.selectedValue = this.dropdown.find('[data-dropdown-select-value]');
    this.selectedValueView = this.dropdown.find('[data-dropdown-select-value-view]');
    this.orginalData = [];
    this.filteredData = [];
    this.activeItem = '';
    this.bindEvents();
    this.getData();
  }

  _createClass(DropdownSelect, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.searchInput.on('keyup', function (event) {
        _this.handleSearch(event);
      });
      this.dropdown.on('shown.bs.dropdown', function () {
        _this.focusSearch();
      });
      this.dropdown.on('hidden.bs.dropdown', function () {
        _this.clearSearch();
      });
      this.listItems.on('click', function (event) {
        _this.handleSelectItem(event);
      });
    }
  }, {
    key: "getSearchResult",
    value: function getSearchResult(searchValue) {
      var result = this.orginalData.filter(function (value) {
        if (value.indexOf(searchValue) > -1) {
          return true;
        }
      });
      return result;
    }
  }, {
    key: "getData",
    value: function getData() {
      var items = this.listItems;
      var values = [];
      items.each(function () {
        var value = $(this).attr('data-value');
        values.push(value);
      });
      this.orginalData = values;
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(event) {
      var value = event.target.value;
      this.filteredData = this.getSearchResult(value);
      this.updateView();
    }
  }, {
    key: "updateView",
    value: function updateView() {
      this.list.html('');
      var newHTML = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.filteredData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var tld = _step.value;
          var activeClass = '';

          if (this.activeItem == tld) {
            activeClass = 'active';
          }

          newHTML += "<div class=\"dropdown-menu-item ".concat(activeClass, "\" data-value=\"").concat(tld, "\"><a>").concat(tld, "</a></div>");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (this.filteredData.length) {
        this.dropdown.removeClass('is-empty');
      } else {
        this.dropdown.addClass('is-empty');
      }

      this.list.html(newHTML);
      this.unRegisterItemsClickEvent();
      this.listItems = this.dropdown.find('[data-dropdown-select-list]').children();
      this.registerItemsClickEvent();
    }
  }, {
    key: "focusSearch",
    value: function focusSearch() {
      var _this2 = this;

      setTimeout(function () {
        _this2.searchInput.focus();
      }, 0);
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.searchInput.val('');
      this.searchInput.trigger('keyup');
    }
  }, {
    key: "handleSelectItem",
    value: function handleSelectItem(event) {
      var item = $(event.currentTarget);
      var value = item.data('value');
      this.activeItem = value;
      this.selectedValueView.text(value);
      this.selectedValue.val(value);
      item.addClass('active');
    }
  }, {
    key: "registerItemsClickEvent",
    value: function registerItemsClickEvent() {
      var _this3 = this;

      this.listItems.on('click.searchDropdown', function (event) {
        _this3.handleSelectItem(event);
      });
    }
  }, {
    key: "unRegisterItemsClickEvent",
    value: function unRegisterItemsClickEvent() {
      this.listItems.off('click.searchDropdown');
    }
  }]);

  return DropdownSelect;
}();

function init() {
  $('[data-dropdown-select]').each(function () {
    new DropdownSelect(this);
  });
}

/***/ }),

/***/ "./src/assets/js/components/filter-grid.js":
/*!*************************************************!*\
  !*** ./src/assets/js/components/filter-grid.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var shufflejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shufflejs */ "./node_modules/shufflejs/dist/shuffle.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FilterGrid =
/*#__PURE__*/
function () {
  function FilterGrid() {
    _classCallCheck(this, FilterGrid);

    this.cacheDOM();
    this.bindEvents();
    this.initPlugin();
  }

  _createClass(FilterGrid, [{
    key: "cacheDOM",
    value: function cacheDOM() {
      this.filtersContainer = $('[data-filter-grid]');
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      $('[data-filter-nav] [data-filter]').on('click', function (event) {
        event.preventDefault();
        $(event.target).closest('.nav').find('.active').removeClass('active');
        $(event.target).parent().addClass('active');
        var filterName = $(event.target).data('filter');

        _this.filterItems(filterName);
      });
    }
  }, {
    key: "initPlugin",
    value: function initPlugin() {
      var _this2 = this;

      if (!this.filtersContainer.length) {
        return;
      }

      this.shuffleInstance = new shufflejs__WEBPACK_IMPORTED_MODULE_0__["default"](this.filtersContainer[0], {
        itemSelector: '.filtr-item',
        sizer: '.js-shuffle-sizer',
        isCentered: true
      });
      setTimeout(function () {
        _this2.filtersContainer.addClass('visible');
      }, 300);
    }
  }, {
    key: "filterItems",
    value: function filterItems(name) {
      if (name == 'all') {
        this.shuffleInstance.filter();
      } else {
        this.shuffleInstance.filter([name]);
      }
    }
  }]);

  return FilterGrid;
}();

/* harmony default export */ __webpack_exports__["default"] = (function () {
  new FilterGrid();
});

/***/ }),

/***/ "./src/assets/js/components/forms.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/forms.js ***!
  \*******************************************/
/*! exports provided: virtualInput, numberInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "virtualInput", function() { return virtualInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberInput", function() { return numberInput; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var virtualInput =
/*#__PURE__*/
function () {
  function virtualInput(container) {
    _classCallCheck(this, virtualInput);

    this.container = container;
    this.virtualInputs = this.container.find('[data-virtual-input]');
    this.selectItems = this.container.find('[data-dropdown-menu] [data-value]');

    if (this.container.find('[data-input-collapse]').length != 0) {
      this.checkboxInputs = this.virtualInputs.find('.panel-heading input');
    } else {
      this.checkboxInputs = this.virtualInputs.find('input');
    }

    this.bindEvents();
    this.initCheck();
  }

  _createClass(virtualInput, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.checkboxInputs.on('ifChecked', function (event) {
        _this.addClass(event);

        _this.onCheck(event);
      });
      this.checkboxInputs.on('ifUnchecked', function (event) {
        _this.removeClass(event);

        _this.onUncheck(event);
      });
      this.virtualInputs.on('click selectOption', function (event) {
        _this.check(event);
      });
      this.selectItems.on('click selectOption', function (event) {
        _this.handleSelectItemClick(event);
      });
      this.virtualInputs.find('[type="password"]').on('click', function (event) {
        event.stopPropagation();
      });
    }
  }, {
    key: "initCheck",
    value: function initCheck() {
      var checkedItem = this.virtualInputs.find('input:checked');
      var checkedId = checkedItem.val();

      if (checkedId) {
        var selctedItem = checkedItem.closest("[data-virtual-input]").find('[data-dropdown-menu] [data-value="' + checkedId + '"]');
        selctedItem.trigger('selectOption');
      }

      ;
    }
  }, {
    key: "removeClass",
    value: function removeClass(event) {
      var input = $(event.currentTarget);
      var virtualInput = input.closest('[data-virtual-input]');
      this.hideCollapse(virtualInput);
      virtualInput.removeClass('checked');

      if (input.attr('type') == 'checkbox') {
        return;
      } // remove class from container


      if (virtualInput.data('virtual-input-none') == undefined) {
        if (this.container.hasClass('is-selected')) {
          this.container.removeClass('is-selected');
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass(event) {
      var input = $(event.currentTarget);
      var virtualInput = input.closest('[data-virtual-input]');
      this.showCollapse(virtualInput);
      virtualInput.addClass('checked');

      if (input.attr('type') == 'checkbox') {
        return;
      } // add Class to container


      if (virtualInput.data('virtual-input-none') == undefined) {
        if (!this.container.hasClass('is-selected')) {
          this.container.addClass('is-selected');
        }
      }
    }
  }, {
    key: "showCollapse",
    value: function showCollapse(virtualInput) {
      virtualInput.find('[data-input-collapse]').collapse('show');
    }
  }, {
    key: "hideCollapse",
    value: function hideCollapse(virtualInput) {
      virtualInput.find('[data-input-collapse]').collapse('hide');
    }
  }, {
    key: "check",
    value: function check(event) {
      var item = $(event.currentTarget);
      var hasDropdown = item.data('virtual-input') == 'dropdown' ? true : false;

      if (!hasDropdown) {
        if (!item.hasClass('disabled') && !$(event.target).is('a')) {
          item.find('input').first().iCheck('check');
        }

        this.onCheck(event);
      }
    }
  }, {
    key: "unCheck",
    value: function unCheck(event) {}
  }, {
    key: "updateInputValues",
    value: function updateInputValues(item, selectItem, value, properties, event) {
      var input = item.find('input');

      if (event.type == 'click') {
        $(item).find('[data-toggle="dropdown"]').first().dropdown('toggle');
        input.iCheck('check');
        input.val(value);
      }

      item.find('[data-name]').text(properties.name);
      item.find('[data-price]').text(properties.price);
      this.onCheck(event);
    }
  }, {
    key: "handleSelectItemClick",
    value: function handleSelectItemClick(event) {
      var selectItem = $(event.currentTarget);
      var item = selectItem.closest('[data-virtual-input]');
      var value = selectItem.data('value');
      var properties = $(selectItem).data('properties');
      item.find('[data-dropdown-menu] [data-value]').removeClass('active');
      selectItem.addClass('active');
      this.updateInputValues(item, selectItem, value, properties, event);
    }
  }, {
    key: "onCheck",
    value: function onCheck(event) {
      var item = $(event.currentTarget).closest('[data-virtual-input]');
      item.find('[data-on-unchecked]').addClass('hidden');
      item.find('[data-on-checked]').removeClass('hidden');
    }
  }, {
    key: "onUncheck",
    value: function onUncheck(event) {
      var item = $(event.currentTarget).closest('[data-virtual-input]');
      item.find('[data-on-unchecked]').removeClass('hidden');
      item.find('[data-on-checked]').addClass('hidden');
      item.find('[data-dropdown-menu] [data-value]').removeClass('active');
    }
  }]);

  return virtualInput;
}();
;
var numberInput =
/*#__PURE__*/
function () {
  function numberInput(container) {
    _classCallCheck(this, numberInput);

    this.container = $(container);
    this.input = this.container.find('input');
    this.incBtn = this.container.find("[data-input-number-inc]");
    this.decBtn = this.container.find("[data-input-number-dec]");
    this.updateBtn = this.container.find("[data-input-number-update]");
    this.minValue = this.input.attr('min');
    this.maxValue = this.input.attr('max');
    this.inputValue = this.input.val();
    this.price = this.container.find("[data-input-number-price]");
    this.bindEvents();
  }

  _createClass(numberInput, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.incBtn.on('click', function () {
        _this2.increment();
      });
      this.decBtn.on('click', function () {
        _this2.decrement();
      });
      this.input.on('change', function (event) {
        _this2.inputValue = event.target.value;
      });
    }
  }, {
    key: "handleInputChange",
    value: function handleInputChange() {}
  }, {
    key: "increment",
    value: function increment() {
      var showButton = true;
      this.inputValue++;

      if (this.inputValue >= this.maxValue) {
        this.inputValue = this.maxValue;
      }

      this.updateInput(showButton);
    }
  }, {
    key: "decrement",
    value: function decrement() {
      var showButton = true;

      if (this.inputValue <= this.minValue) {
        showButton = false;
      }

      this.inputValue--;

      if (this.inputValue <= this.minValue) {
        this.inputValue = this.minValue;
      }

      this.updateInput(showButton);
    }
  }, {
    key: "updateInput",
    value: function updateInput(showButton) {
      if (showButton === true) {
        this.updateBtn.removeClass('hidden');
        this.updateBtn.parent().addClass('item-price-changed');
        this.price.addClass('hidden');
        this.input.val(this.inputValue).parent().addClass('is-active');
      } else {
        this.input.val(this.inputValue);
      }
    }
  }]);

  return numberInput;
}();
;

/***/ }),

/***/ "./src/assets/js/components/other.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/other.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  // navbar toggle
  $('#header .navbar-toggle').on('click', function () {
    $('body').toggleClass('menu-open');
  });
  $(document).on('click', '.menu-open .app-main', function () {
    $('body').removeClass('menu-open');
  });
  $(window).on('resize', function () {
    $('body').removeClass('menu-open');
  });
  jQuery(document).ready(function () {
    enquire.register("screen and (min-width:768px)", {
      match: function match() {
        jQuery('.lagom-layout-left .navbar-main .navbar-nav').superfish();
      },
      unmatch: function unmatch() {
        jQuery('.lagom-layout-left .navbar-main .navbar-nav').superfish('destroy');
      }
    });
  });

  if ($('#sticky-sidebar').length) {
    $('#sticky-sidebar').stickySidebar({
      topSpacing: 32,
      bottomSpacing: 32
    });
  }

  $(document).on('click', '.dropdown-menu', function (e) {
    if ("a" != e.target.tagName && "A" != e.target.tagName) {
      e.stopPropagation();
    }
  });
  $(document).on('click', '.domain-extensions .dropdown-menu', function (e) {
    e.stopPropagation();
  });
  $('.addon-promo-container > .radio-inline').each(function () {
    var checkValue = $(this).find('input[type=radio]:checked').val();

    if (checkValue != "on" && checkValue != undefined) {
      $(this).closest('.addon-promo-container').addClass('is-selected');
    }
  });
  $('.addon-promo-container > .radio-inline').each(function () {
    $(this).find('input[type=radio]').on('ifChecked', function (event) {
      if ($(this).val() == "on") {
        $(this).closest('.addon-promo-container').removeClass('is-selected');
      } else {
        $(this).closest('.addon-promo-container').addClass('is-selected');
      }
    });
  });
  $(document).on('click', '.add-extra-attachement', function () {
    var nofiletext = $(this).data('nofiletext'),
        selectfiletext = $(this).data('selectfiletext'),
        removetext = $(this).data('selectfiletext');
    $("#fileUploadsContainer").append('<div class="file-input form-control"><input type="file" name="attachments[]"><span class="file-input-button btn btn-default">' + selectfiletext + '</span><span class="file-input-text text-light">' + nofiletext + '</span><button data-toggle="tooltip" title="' + removetext + '" class="btn btn-icon file-input-remove"><i class="ls ls-trash"></i></button></div>');
    $('[data-toggle="tooltip"]').tooltip();
  });
  $(document).on('change', '.file-input input[type=file]', function () {
    var string = $(this).val();
    var result = string.substring(string.lastIndexOf("\\") + 1);

    if (result == "") {
      $(this).parent().find('.file-input-text').text('No file selected').addClass('text-light');
    } else {
      $(this).parent().find('.file-input-text').text(result).removeClass('text-light');
    }
  });
  $(document).on('click', '.file-input-remove', function () {
    $(this).closest('.file-input').remove();
  });
  $('.search-group').on('click', function () {
    $(this).find('.form-control').focus();
  });
  $('.panel-accordion').on('show.bs.collapse', function () {
    $(this).addClass('is-open');
  });
  $('.panel-accordion').on('hide.bs.collapse', function () {
    $(this).removeClass('is-open');
  });
  $('#nav-landing-page, #nav-ssl').on('show.bs.collapse', function () {
    $(this).closest('.main-subnav').addClass('is-open');
  });
  $('#nav-landing-page, #nav-ssl').on('hidden.bs.collapse', function () {
    $(this).closest('.main-subnav').removeClass('is-open');
  }); // store animation

  $('[data-store-lines-animation] path, [data-banner-lines-animation] path').each(function (index, item) {
    var path = $(item);
    setTimeout(function () {
      path.css({
        'stroke-dashoffset': 0
      });
    }, 200);
  });
}

/***/ }),

/***/ "./src/assets/js/components/panel-switch.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/panel-switch.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  var panelSwitch = $('.panel-switch');
  panelSwitch.on('click', function (e) {
    if (!$(this).is('a')) {
      var currCheck = $(this).find('input[type="checkbox"]');

      if (currCheck.is(':checked')) {
        panelSwitch.removeClass('checked');
        currCheck.prop('checked', false);
      } else {
        panelSwitch.addClass('checked');
        currCheck.prop('checked', true);
      }

      var that = $(this);
      setTimeout(function () {
        that.find('.loader').addClass('loading');
      }, 300);
    }
  });
}

/***/ }),

/***/ "./src/assets/js/components/panels-grid.js":
/*!*************************************************!*\
  !*** ./src/assets/js/components/panels-grid.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
/* harmony import */ var masonry_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(masonry_layout__WEBPACK_IMPORTED_MODULE_0__);

function init() {
  var panelsGrid = $('[data-panels-grid]')[0];

  if (panelsGrid) {
    var msnry = new masonry_layout__WEBPACK_IMPORTED_MODULE_0___default.a(panelsGrid, {
      itemSelector: '[data-panels-grid-item]',
      transitionDuration: 0
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/range-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/range-slider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RangeSlider; });
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/distribute/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/assets/js/components/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * --------------------------------------------------------------------------
 * Name: RangeSlider(layersUI)
 * Version: Alpha
 * License: -
 * Website: http://layersui.com
 * --------------------------------------------------------------------------
 */


var SELECTORS = {
  container: '[data-range-container]',
  rangeSlider: '[data-range-slider]',
  rangeInput: '[data-range-input]',
  incBtn: '[data-range-inc]',
  decBtn: '[data-range-dec]',
  price: '[data-range-price]',
  selectedOption: '[data-selected-option]',
  viewValue: '[data-range-view]'
};
var Default = {
  connect: [true, false],
  behaviour: 'tap',
  snap: false,
  range: {},
  step: 1,
  startValue: 0,
  minValue: null,
  maxValue: null,
  pricePerOne: 2
};
var pipsDefault = {
  mode: 'steps',
  stepped: true
};

var RangeSlider =
/*#__PURE__*/
function () {
  function RangeSlider(container, options) {
    _classCallCheck(this, RangeSlider);

    this.container = container;
    this.rangeSlider = this.container.find(SELECTORS.rangeSlider);
    this.rangeInput = this.container.find(SELECTORS.rangeInput);
    this.decBtn = this.container.find(SELECTORS.decBtn);
    this.incBtn = this.container.find(SELECTORS.incBtn);
    this.price = this.container.find(SELECTORS.price);
    this.selectedOption = this.container.find(SELECTORS.selectedOption);
    this.viewValue = this.container.find(SELECTORS.viewValue);
    this.getConfig();
    this.getPipsConfig();
    this.initPlugin();
    this.bindEvents();
  }

  _createClass(RangeSlider, [{
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.decBtn.on('click', function () {
        _this.slider.set(_this.slider.get() - _this.config.step);
      });
      this.incBtn.on('click', function () {
        _this.slider.set(_this.slider.get() + _this.config.step);
      });
      this.rangeInput.on('change blur', function (event) {
        _this.slider.set(event.target.value);
      });
    }
  }, {
    key: "getConfig",
    value: function getConfig() {
      this.dataConfig = this.container.data();

      if (this.dataConfig.options) {
        this.dataOptions = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseDataOptions(this.dataConfig.options);
      } else {
        this.dataOptions = {};
      }

      this.config = $.extend({}, Default, this.dataConfig, this.dataOptions);
    }
  }, {
    key: "getPipsConfig",
    value: function getPipsConfig() {
      this.dataPips = this.container.data('pips-options');

      if (this.dataPips) {
        this.dataPipsOptions = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].parseDataOptions(this.dataPips);
      } else {
        this.dataPipsOptions = {};
      }

      this.pipsConfig = $.extend({}, pipsDefault, this.dataPipsOptions);
    }
  }, {
    key: "setRange",
    value: function setRange() {
      var _this2 = this;

      this.range = {};

      if (this.config.minValue != null) {
        this.range['min'] = this.config.minValue;
      }

      if (this.config.maxValue != null) {
        this.range['max'] = this.config.maxValue;
      }

      if (this.dataConfig.values) {
        this.customValues = {};
        var values = this.dataConfig.values;
        var count = 1;
        values.map(function (item, index, array) {
          if (index == 0) {
            _this2.range['min'] = count;
          } else if (index == array.length - 1) {
            _this2.range['max'] = _this2.dataConfig.values.length;
          }

          _this2.customValues[count] = {
            price: item.price,
            name: item.name,
            id: item.optionID
          };
          count++;
        });
        this.setCustomTips();
      }
    }
  }, {
    key: "setStartValue",
    value: function setStartValue() {
      if (this.rangeInput.length) {
        this.startValue = this.rangeInput.first().val();
      } else {
        this.startValue = this.config.startValue;
      }
    }
  }, {
    key: "isPageRTL",
    value: function isPageRTL() {
      return $('html').attr('dir') == 'rtl' ? true : false;
    }
  }, {
    key: "initPlugin",
    value: function initPlugin() {
      var _this3 = this;

      this.setStartValue();
      this.setRange();
      this.slider = nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(this.rangeSlider[0], {
        start: this.startValue,
        step: this.config.step,
        snap: this.config.snap,
        connect: this.config.connect,
        range: this.range,
        behaviour: this.config.behaviour,
        direction: this.isPageRTL() ? 'rtl' : 'ltr',
        format: {
          to: function to(value) {
            return value !== undefined && Math.round(value);
          },
          from: function from(value) {
            return value;
          }
        },
        pips: this.pipsConfig,
        'cssPrefix': 'range-slider',
        'cssClasses': {
          target: '',
          base: '-base',
          origin: '-origin',
          handle: '-handle',
          handleLower: '-handle-lower',
          handleUpper: '-handle-upper',
          horizontal: '-horizontal',
          vertical: '-vertical',
          background: '-background',
          connects: "-connects",
          connect: '-connect',
          ltr: '-ltr',
          rtl: '-rtl',
          draggable: '-draggable',
          drag: '-state-drag',
          tap: '-state-tap',
          active: 'is-active',
          tooltip: '-tooltip',
          pips: '-pips',
          pipsHorizontal: '-pips-horizontal',
          pipsVertical: '-pips-vertical',
          marker: '-marker',
          markerHorizontal: '-marker-horizontal',
          markerVertical: '-marker-vertical',
          markerNormal: '-marker-normal',
          markerLarge: '-marker-large',
          markerSub: '-marker-sub',
          value: '-value',
          valueHorizontal: '-value-horizontal',
          valueVertical: '-value-vertical',
          valueNormal: '-value-normal',
          valueLarge: '-value-large',
          valueSub: '-value-sub'
        }
      });
      this.sliderPipsContainer = $(this.rangeSlider[0].querySelector('.range-slider-pips'));
      this.sliderPips = this.sliderPipsContainer.find('[data-value]');
      this.sliderPips.on('click', function (event) {
        var pip = $(event.currentTarget);
        var pipValue = pip.data('value');

        _this3.slider.set(pipValue);
      });
      this.handleSliderEvents();
    }
  }, {
    key: "handleSliderEvents",
    value: function handleSliderEvents() {
      var _this4 = this;

      this.slider.on('update', function (values, handle) {
        _this4.onUpdate(values, handle);

        _this4.setPrice(values, handle);

        _this4.setViewValue(values, handle);

        _this4.changeActivePip(values);

        if (_this4.customValues) {
          _this4.changeActiveSlideID(_this4.customValues[values].id);
        }
      });
      this.slider.on('slide', function (values, handle) {
        _this4.onSlide(values, handle);

        _this4.setPrice(values, handle);

        _this4.setViewValue(values, handle);
      });
      this.slider.on('change', function (values, handle) {
        _this4.onChange(values, handle);

        _this4.setPrice(values, handle);

        _this4.setViewValue(values, handle);
      });
      this.slider.on('set', function (values, handle) {
        _this4.onSet(values, handle);

        _this4.setPrice(values, handle);

        _this4.setViewValue(values, handle);
      });
    }
  }, {
    key: "changeActivePip",
    value: function changeActivePip(values) {
      var value = values[0];
      var pip = this.sliderPipsContainer.find('[data-value="' + value + '"]');
      this.sliderPipsContainer.find('.is-active').removeClass('is-active');
      pip.addClass('is-active');
    }
  }, {
    key: "setCustomTips",
    value: function setCustomTips() {
      var _this5 = this;

      this.pipsConfig.format = {
        to: function to(value) {
          return value !== undefined && _this5.customValues[value].name;
        },
        from: Number
      };
    }
  }, {
    key: "changeActiveSlideID",
    value: function changeActiveSlideID(id) {
      this.selectedOption.val(id);
    }
  }, {
    key: "onSlide",
    value: function onSlide(values, handle) {
      if (this.customValues) {
        this.changeActiveSlideID(this.customValues[values].id);
      } else {
        this.rangeInput.val(values[0].toFixed(0));
      }

      if (typeof this.config.onSlide === 'function') {
        this.config.onSlide(values, handle);
      }
    }
  }, {
    key: "onChange",
    value: function onChange(values, handle) {
      if (typeof this.config.onChange === 'function') {
        this.config.onChange(values, handle);
      }
    }
  }, {
    key: "onSet",
    value: function onSet(values, handle) {
      this.rangeInput.val(values[0]).trigger('keyup');

      if (this.customValues) {
        this.selectedOption.trigger('keyup').trigger('change');
      }

      if (typeof this.config.onSet === 'function') {
        this.config.onSet(values, handle);
      }
    }
  }, {
    key: "onUpdate",
    value: function onUpdate(values, handle) {
      if (typeof this.config.onUpdate === 'function') {
        this.config.onUpdate(values, handle);
      }
    }
  }, {
    key: "setPrice",
    value: function setPrice(values, handle) {
      if (this.customValues) {
        this.price.text(this.customValues[values].price);
      } else {
        this.price.text((parseFloat(this.config.pricePerOne) * parseFloat(this.rangeInput.val())).toFixed(2));
      }
    }
  }, {
    key: "setViewValue",
    value: function setViewValue(values, handle) {
      if (this.customValues) {
        this.viewValue.text(this.customValues[values].name);
      } else {
        this.viewValue.text(this.rangeInput.val());
      }
    }
  }]);

  return RangeSlider;
}();



/***/ }),

/***/ "./src/assets/js/components/sliders/base-slider.js":
/*!*********************************************************!*\
  !*** ./src/assets/js/components/sliders/base-slider.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Slider =
/*#__PURE__*/
function () {
  function Slider(slider) {
    _classCallCheck(this, Slider);

    this.slider = $(slider);
    this.sliderConfig = {};
    this.cacheDOM();
  }

  _createClass(Slider, [{
    key: "cacheDOM",
    value: function cacheDOM() {
      this.container = this.slider.find("[data-slider-container]");
      this.wrapper = this.slider.find("[data-slider-wrapper]");
      this.pagination = this.slider.find("[data-slider-pagination]");
      this.nextSlide = this.slider.find("[data-next-slide]");
      this.prevSlide = this.slider.find("[data-prev-slide]");
    }
  }, {
    key: "setSliderConfig",
    value: function setSliderConfig(config) {
      this.sliderConfig = Object.assign({
        centeredSlides: false,
        loop: false,
        slidesPerView: 3,
        spaceBetween: 0,
        scrollbar: {
          hide: false
        },
        pagination: {
          el: this.pagination[0],
          type: "bullets",
          modifierClass: "content-slider-pagination-",
          bulletClass: "content-slider-pagination-bullet",
          bulletActiveClass: "is-active",
          clickable: true
        },
        navigation: {
          nextEl: this.nextSlide[0],
          prevEl: this.prevSlide[0]
        },
        a11y: {
          enabled: false
        },
        watchSlidesVisibility: false,
        containerModifierClass: "content-slider-",
        slideClass: "content-slider-item",
        slidePrevClass: "content-slider-item-prev",
        slideNextClass: "content-slider-item-next",
        slideVisibleClass: "content-slider-item-visible",
        slideActiveClass: "content-slider-item-active",
        wrapperClass: "content-slider-wrapper"
      }, config);
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      this.swiperInstance = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a(this.container[0], this.sliderConfig);
    }
  }, {
    key: "destroySlider",
    value: function destroySlider() {
      this.swiperInstance.destroy(true, true);
    }
  }]);

  return Slider;
}();



/***/ }),

/***/ "./src/assets/js/components/sliders/index.js":
/*!***************************************************!*\
  !*** ./src/assets/js/components/sliders/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _testimonials_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testimonials.js */ "./src/assets/js/components/sliders/testimonials.js");
/* harmony import */ var _promo_sliders_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./promo-sliders/index.js */ "./src/assets/js/components/sliders/promo-sliders/index.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    _testimonials_js__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    _promo_sliders_index_js__WEBPACK_IMPORTED_MODULE_1__["default"].init();
  }
});

/***/ }),

/***/ "./src/assets/js/components/sliders/promo-sliders/animations.js":
/*!**********************************************************************!*\
  !*** ./src/assets/js/components/sliders/promo-sliders/animations.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");

var slideLeft = {
  refs: {},
  beforeInit: function beforeInit(element, config) {
    this.refs.element = element;
    this.refs["content"] = element.find("[data-animation-content]");
    this.refs["icons"] = element.find("[data-animation-icons]").children();
  },
  showSlide: function showSlide(element, config) {
    var animations = [];
    var contentAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: this.refs.content[0],
      translateX: [-56, 0],
      opacity: [0, 1],
      duration: 320,
      delay: 800,
      easing: "cubicBezier(0,0,0,1)"
    }).finished;
    animations.push(contentAnimation);
    var iconDelay = 480 + this.refs.icons.length * 80;

    for (var _i = 0, _Array$from = Array.from(this.refs.icons); _i < _Array$from.length; _i++) {
      var icon = _Array$from[_i];
      var iconAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: icon,
        translateX: [-52, 0],
        translateY: [-30, 0],
        opacity: [0, 1],
        duration: 320,
        delay: iconDelay,
        easing: "cubicBezier(0,0,0,1)"
      }).finished;
      iconDelay -= 80;
      animations.push(iconAnimation);
    }

    return new Promise(function (resolve) {
      Promise.all(animations).then(function () {
        resolve();
      });
    });
  },
  hideSlide: function hideSlide() {
    var animations = [];
    var contentAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: this.refs.content[0],
      translateX: [0, 56],
      opacity: [1, 0],
      duration: 320,
      delay: 240,
      easing: "cubicBezier(1,0,1,1)"
    }).finished;
    animations.push(contentAnimation);
    var iconDelay = this.refs.icons.length * 80;

    for (var _i2 = 0, _Array$from2 = Array.from(this.refs.icons); _i2 < _Array$from2.length; _i2++) {
      var icon = _Array$from2[_i2];
      var iconAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: icon,
        translateX: [0, 52],
        translateY: [0, 30],
        opacity: [1, 0],
        duration: 320,
        delay: iconDelay,
        easing: "cubicBezier(1,0,1,1)"
      }).finished;
      animations.push(iconAnimation);
      iconDelay -= 80;
    }

    return new Promise(function (resolve) {
      Promise.all(animations).then(function () {
        resolve();
      });
    });
  }
};
var fadeIn = {
  refs: {},
  beforeInit: function beforeInit(element, config) {
    this.refs.element = element;
    this.refs["content"] = element.find("[data-animation-content]");
    this.refs["icons"] = element.find("[data-animation-icons]").children();
  },
  showSlide: function showSlide(element, config) {
    var animations = [];
    var contentAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: this.refs.content[0],
      translateX: [-56, 0],
      opacity: [0, 1],
      duration: 320,
      delay: 800,
      easing: "cubicBezier(0,0,0,1)"
    }).finished;
    animations.push(contentAnimation);
    var iconDelay = 480 + this.refs.icons.length * 80;

    for (var _i3 = 0, _Array$from3 = Array.from(this.refs.icons); _i3 < _Array$from3.length; _i3++) {
      var icon = _Array$from3[_i3];
      var iconAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: icon,
        opacity: [0, 1],
        duration: 320,
        delay: iconDelay,
        easing: "cubicBezier(0,0,0,1)"
      }).finished;
      iconDelay -= 80;
      animations.push(iconAnimation);
    }

    return new Promise(function (resolve) {
      Promise.all(animations).then(function () {
        resolve();
      });
    });
  },
  hideSlide: function hideSlide() {
    var animations = [];
    var contentAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
      targets: this.refs.content[0],
      translateX: [0, 56],
      opacity: [1, 0],
      duration: 320,
      delay: 240,
      easing: "cubicBezier(1,0,1,1)"
    }).finished;
    animations.push(contentAnimation);
    var iconDelay = this.refs.icons.length * 80;

    for (var _i4 = 0, _Array$from4 = Array.from(this.refs.icons); _i4 < _Array$from4.length; _i4++) {
      var icon = _Array$from4[_i4];
      var iconAnimation = Object(animejs__WEBPACK_IMPORTED_MODULE_0__["default"])({
        targets: icon,
        opacity: [1, 0],
        duration: 320,
        delay: iconDelay,
        easing: "cubicBezier(1,0,1,1)"
      }).finished;
      iconDelay -= 80;
      animations.push(iconAnimation);
    }

    return new Promise(function (resolve) {
      Promise.all(animations).then(function () {
        resolve();
      });
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = ({
  slideLeft: slideLeft,
  fadeIn: fadeIn
});

/***/ }),

/***/ "./src/assets/js/components/sliders/promo-sliders/index.js":
/*!*****************************************************************!*\
  !*** ./src/assets/js/components/sliders/promo-sliders/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_features_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/features/array/from */ "./node_modules/core-js/features/array/from.js");
/* harmony import */ var core_js_features_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_features_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/features/symbol/iterator */ "./node_modules/core-js/features/symbol/iterator.js");
/* harmony import */ var core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_features_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_features_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/features/promise */ "./node_modules/core-js/features/promise/index.js");
/* harmony import */ var core_js_features_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_features_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/features/object/assign */ "./node_modules/core-js/features/object/assign.js");
/* harmony import */ var core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_features_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../utils.js */ "./src/assets/js/components/utils.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _animations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animations.js */ "./src/assets/js/components/sliders/promo-sliders/animations.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var SELECTORS = {
  slider: '[data-promo-slider]',
  wrapper: '[data-promo-slider-wrapper]',
  pagination: '[data-promo-slider-pagination]',
  paginationItem: '[data-promo-slider-pagination-item]',
  close: '[data-promo-slide-close]',
  background: '[data-promo-slider-background]'
};
var Default = {
  defaultAnimationType: 'slideLeft'
};

var PromoSlider =
/*#__PURE__*/
function () {
  function PromoSlider(slider) {
    _classCallCheck(this, PromoSlider);

    this.animations = [];
    this.activeSlideIndex = 0;
    this.preventSlideChange = false;
    this.queneAnimations = [];
    this.cacheDOM(slider);
    this.getConfig();
    this.bindEvents();
    this.initSlider();
  }

  _createClass(PromoSlider, [{
    key: "getConfig",
    value: function getConfig() {
      var dataConfig = this.refs.slider.data();

      if (dataConfig.options) {
        this.dataOptions = util.parseDataOptions(dataConfig.options);
      } else {
        this.dataOptions = {};
      }

      this.config = $.extend({}, Default, dataConfig, this.dataOptions, this.options);
    }
  }, {
    key: "cacheDOM",
    value: function cacheDOM(slider) {
      this.refs = {};
      this.refs.slider = $(slider);
      this.refs.wrapper = this.refs.slider.find(SELECTORS.wrapper);
      this.refs.slides = this.refs.wrapper.children();
      this.refs.pagination = this.refs.slider.find(SELECTORS.pagination);
      this.refs.paginationItems = this.refs.pagination.find(SELECTORS.paginationItem);
      this.refs.close = this.refs.slider.find(SELECTORS.close);
      this.refs.background = this.refs.slider.find(SELECTORS.background).children();
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.refs.paginationItems.on('click', function (event) {
        return _this.handlePaginationClick(event);
      });
      this.refs.close.on('click', function () {
        return _this.hideSlider();
      });
      $(window).on('resize', function () {
        setTimeout(function () {
          _this.updateHeight();
        }, 200);
      });
      this.refs.slider.on({
        mouseenter: function mouseenter() {
          return _this.stopAutoplay();
        },
        mouseleave: function mouseleave() {
          return _this.startAutoplay();
        }
      });
      $(document).on('visibilitychange', function (event) {
        if (document.hidden) {
          _this.stopAutoplay();
        } else {
          _this.startAutoplay();
        }
      });
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      this.setAnimations();

      if (this.animations.length) {
        var activeSlide = this.refs.paginationItems.filter('.active');
        this.updateHeight();

        if (activeSlide.length) {
          var activeSlideIndex = this.refs.paginationItems.index(activeSlide);
          this.goToSlide(activeSlideIndex);
        } else {
          this.goToSlide(0, true);
        }
      }

      if (!this.refs.slider.is(':hover') && !document.hidden) {
        this.startAutoplay();
      }
    }
  }, {
    key: "hideSlider",
    value: function hideSlider() {
      this.refs.slider.addClass('hidden');
    }
  }, {
    key: "handlePaginationClick",
    value: function handlePaginationClick(event) {
      var item = $(event.currentTarget);
      var itemIndex = this.refs.paginationItems.index(item);

      if (this.preventSlideChange) {
        this.addAnimationToQuene(itemIndex);
        return;
      }

      this.refs.pagination.find('.active').removeClass('active');
      item.addClass('active');
      this.goToSlide(itemIndex);
    }
  }, {
    key: "prevSlide",
    value: function prevSlide() {
      if (this.activeSlideIndex - 1 < 0) {
        this.goToSlide(this.refs.slides.length - 1);
      } else {
        this.goToSlide(this.activeSlideIndex - 1);
      }
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      if (this.activeSlideIndex >= this.refs.slides.length - 1) {
        this.goToSlide(0);
      } else {
        this.goToSlide(this.activeSlideIndex + 1);
      }
    }
  }, {
    key: "goToSlide",
    value: function goToSlide(index) {
      var _this2 = this;

      var firstSlide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (this.activeSlideIndex == index && !firstSlide) {
        this.preventSlideChange = false;
        return;
      }

      var oldIndex = this.activeSlideIndex;
      this.preventSlideChange = true;

      if (firstSlide) {
        this.activeSlideIndex = index;
        $(this.refs.slides[this.activeSlideIndex]).addClass('active');
        this.animations[this.activeSlideIndex].showSlide().then(function () {
          if (_this2.queneAnimations.length) {
            var _index = _this2.queneAnimations.pop();

            _this2.goToSlide(_index);
          } else {
            _this2.preventSlideChange = false;
          }
        });
        this.updatePaginationStatus(0, 0);
      } else {
        this.updatePaginationStatus(index, oldIndex);
        this.activeSlideIndex = index;
        this.animations[oldIndex].hideSlide().then(function () {});
        $(this.refs.slides[oldIndex]).removeClass('active');
        $(this.refs.slides[this.activeSlideIndex]).addClass('active');
        this.animations[index].showSlide().then(function () {
          if (_this2.queneAnimations.length) {
            var _index2 = _this2.queneAnimations.pop();

            _this2.goToSlide(_index2);
          } else {
            _this2.preventSlideChange = false;
          }
        });
      }

      this.updateHeight();
      this.setBackground();
    }
  }, {
    key: "setAnimations",
    value: function setAnimations() {
      for (var _i = 0, _Array$from = Array.from(this.refs.slides); _i < _Array$from.length; _i++) {
        var slide = _Array$from[_i];
        var animationType = $(slide).data('animation-type');

        if (animationType) {
          var animation = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(_animations_js__WEBPACK_IMPORTED_MODULE_6__["default"][animationType]);
          animation.beforeInit($(slide));
          this.animations.push(animation);
        } else {
          var _animation = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(_animations_js__WEBPACK_IMPORTED_MODULE_6__["default"][this.config.defaultAnimationType]);

          _animation.beforeInit($(slide));

          this.animations.push(_animation);
        }
      }
    }
  }, {
    key: "updatePaginationStatus",
    value: function updatePaginationStatus(index, oldIndex) {
      this.refs.paginationItems.removeClass('active');
      this.refs.paginationItems.eq(index).addClass('active');
    }
  }, {
    key: "startAutoplay",
    value: function startAutoplay() {
      var that = this;

      if (this.autoPlay) {
        return;
      }

      this.autoPlay = setInterval(function () {
        if (!that.queneAnimations.length) {
          that.nextSlide();
        }
      }, 5000);
    }
  }, {
    key: "stopAutoplay",
    value: function stopAutoplay() {
      clearInterval(this.autoPlay);
      this.autoPlay = false;
    }
  }, {
    key: "updateHeight",
    value: function updateHeight() {
      var innerHeight = $(this.refs.slides[this.activeSlideIndex]).innerHeight();
      this.refs.wrapper.css('height', innerHeight);
    }
  }, {
    key: "setBackground",
    value: function setBackground(index) {
      this.refs.background.removeClass('active');
      this.refs.background.eq(this.activeSlideIndex).addClass('active');
    }
  }, {
    key: "addAnimationToQuene",
    value: function addAnimationToQuene(index) {
      if ((this.queneAnimations.length && this.queneAnimations[0]) !== index) {
        this.queneAnimations.unshift(index);
      }
    }
  }]);

  return PromoSlider;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    $("[data-promo-slider]").each(function (index, item) {
      new PromoSlider(item);
    });
  }
});

/***/ }),

/***/ "./src/assets/js/components/sliders/testimonials.js":
/*!**********************************************************!*\
  !*** ./src/assets/js/components/sliders/testimonials.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-slider */ "./src/assets/js/components/sliders/base-slider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TestimoniaslSlider =
/*#__PURE__*/
function (_BaseSlider) {
  _inherits(TestimoniaslSlider, _BaseSlider);

  function TestimoniaslSlider(slider) {
    var _this;

    _classCallCheck(this, TestimoniaslSlider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TestimoniaslSlider).call(this, slider));

    _this.setSliderConfig(_this.getSliderConfig());

    _this.initSlider();

    return _this;
  }

  _createClass(TestimoniaslSlider, [{
    key: "getSliderConfig",
    value: function getSliderConfig() {
      return {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        loop: true
      };
    }
  }]);

  return TestimoniaslSlider;
}(_base_slider__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = ({
  init: function init() {
    $("[data-testimonial-slider]").each(function (index, item) {
      new TestimoniaslSlider(item);
    });
  }
});

/***/ }),

/***/ "./src/assets/js/components/theme-switcher.js":
/*!****************************************************!*\
  !*** ./src/assets/js/components/theme-switcher.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  function toggleOverlay() {
    $('.order-summary-mob .summary-container >.content').slideToggle();
    $('.overlay').fadeToggle('fast');
  }

  var activeStyle = $('.theme-switcher').data('active-style');
  var activeLayout = $('.theme-switcher').data('active-layout');
  var activePage = $('.theme-switcher').data('active-page');
  var url = $('[data-set-theme]').data('original-url');

  function toggleThemeSwitcher() {
    $('body').toggleClass('theme-switcher-open');
    var browser = parseInt(window.innerHeight);
    var body = parseInt($('body').height());
    var scroll = parseInt(getScrollbarWidth());

    if (body > browser && $('body').hasClass('theme-switcher-open')) {
      $('body').prop('style', 'padding-right: ' + scroll + 'px');
    } else {
      $('body').removeProp('style');
    }

    resetThemeSwitcher();
  }

  function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    document.body.appendChild(outer);
    var widthNoScroll = outer.offsetWidth; // force scrollbars

    outer.style.overflow = "scroll"; // add innerdiv

    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    var widthWithScroll = inner.offsetWidth; // remove divs

    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }

  function resetThemeSwitcher() {
    $('[data-set-theme]').attr('href', url);
    $('.theme-switcher').find('.active').removeClass('active');
    $('.theme-switcher').find('[data-style="' + activeStyle + '"]').addClass('active');
    $('.theme-switcher').find('[data-layout="' + activeLayout + '"]').addClass('active');
    $('.theme-switcher').find('[data-page="' + activePage + '"]').addClass('active');
    $('.theme-switcher').data('choosen-style', '');
    $('.theme-switcher').data('choosen-layout', '');
    $('.theme-switcher').data('choosen-page', '');
  }

  $(document).on('click', '.order-summary-mob .summary-container .btn-rounded', function (e) {
    e.preventDefault();
    toggleOverlay();
  });
  $('.overlay').on('click', function (e) {
    toggleOverlay();

    if ($('body').hasClass('theme-switcher-open')) {
      toggleThemeSwitcher();
    }
  });
  $('.theme-switcher-button').on('click', function () {
    toggleThemeSwitcher();
    toggleOverlay();
  });
  $('.theme-switcher-box').on('click', function (e) {
    e.preventDefault();
    $(this).closest('.row').find('.active').removeClass('active');
    $(this).addClass('active');
    var newStyle = $(this).data('style');
    var newLayout = $(this).data('layout');
    var newPage = $(this).data('page');

    if (newStyle != undefined) {
      var setStyle = newStyle;
      $('.theme-switcher').data('choosen-style', setStyle);
    }

    if (newLayout != undefined) {
      var setLayout = newLayout;
      $('.theme-switcher').data('choosen-layout', setLayout);
    }

    if (newPage != undefined) {
      var setPage = newPage;
      $('.theme-switcher').data('choosen-page', setPage);
    }

    if ($('.theme-switcher').data('choosen-layout') != "") {
      var choosenLayout = $('.theme-switcher').data('choosen-layout');
    } else {
      var choosenLayout = activeLayout;
    }

    if ($('.theme-switcher').data('choosen-style') != "") {
      var choosenStyle = $('.theme-switcher').data('choosen-style');
    } else {
      var choosenStyle = activeStyle;
    }

    if ($('.theme-switcher').data('choosen-page') != "") {
      var choosenPage = $('.theme-switcher').data('choosen-page');
    } else {
      var choosenPage = activePage;
    }

    var findsign = url.indexOf("?");

    if (findsign != -1) {
      var newUrl = url + '&rsstyle=' + choosenStyle + '&rslayout=' + choosenLayout + '&rspage=' + choosenPage;
    } else {
      var newUrl = url + '?rsstyle=' + choosenStyle + '&rslayout=' + choosenLayout + '&rspage=' + choosenPage;
    }

    $('[data-set-theme]').attr('href', newUrl);
  });
  $('[data-style-reset]').on('click', function () {
    toggleThemeSwitcher();
    toggleOverlay();
  });
  $(window).on('resize', function () {
    $('.order-summary-mob .summary-container >.content').slideUp();
    $('.overlay').fadeOut('fast');
    $('body').removeClass('theme-switcher-open');
    resetThemeSwitcher();
  });
}

/***/ }),

/***/ "./src/assets/js/components/tiles-slider.js":
/*!**************************************************!*\
  !*** ./src/assets/js/components/tiles-slider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/dist/js/swiper.js */ "./node_modules/swiper/dist/js/swiper.js");
/* harmony import */ var swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0__);

function init() {
  if ($('.tiles').length) {
    var mySwiper = new swiper_dist_js_swiper_js__WEBPACK_IMPORTED_MODULE_0___default.a('.tiles.swiper-container', {
      speed: 400,
      init: false,
      slidesPerView: 'auto',
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
    enquire.register("screen and (max-width:767px)", {
      match: function match() {
        mySwiper.init();
      },
      unmatch: function unmatch() {
        mySwiper.destroy(false);
      }
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/tld-filter.js":
/*!************************************************!*\
  !*** ./src/assets/js/components/tld-filter.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return init; });
function init() {
  var filter = $('.custom-multiselect').selectize({
    copyClassesToDropdown: false,
    plugins: ['remove_button'],
    render: {
      item: function item(data, escape) {
        return '<div>' + escape(data.text) + '</div>';
      }
    },
    onItemAdd: function onItemAdd(value, $item) {
      var data = this.options[value];
      var value = data.value;
      $('.message.no-tlds').hide();
      $('.tld-pricing').show();
      $('.tld-pricing .tld-row').each(function () {
        var row = $(this);
        var str1 = $(this).data('category');
        var str2 = value;

        if (str1.indexOf(str2) != -1) {
          $(this).show();
        }
      });
    },
    onDelete: function onDelete(value, $item) {
      var data = this.options[value];
      var value = data.value;
      var selectize = filter[0].selectize;
      var selected_objects = $.map(selectize.items, function (value) {
        if (value != data.value) {
          return selectize.options[value];
        }
      });
      var totalLen = selected_objects.length;
      $('.tld-pricing .tld-row').hide();
      $.each(selected_objects, function (key, value) {
        $('.tld-row[data-category*="' + value.value + '"]').show();
      });

      if (totalLen == 0) {
        $('.tld-pricing').hide();
        $('.message.no-tlds').show();
      } else {
        $('.message.no-tlds').hide();
        $('.tld-pricing').show();
      }
    }
  });

  if ($('.tld-filters').length) {
    var selectize = filter[0].selectize;
    var selected_objects = $.map(selectize.items, function (value) {
      return selectize.options[value];
    });
    $('.message.no-tlds').hide();
    $('.tld-pricing .tld-row').hide();
    $.each(selected_objects, function (key, value) {
      $('.tld-row[data-category*="' + value.value + '"]').show();
    });
  }
}

/***/ }),

/***/ "./src/assets/js/components/utils.js":
/*!*******************************************!*\
  !*** ./src/assets/js/components/utils.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
var Util = function () {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var transition = false;
  var MAX_UID = 1000000;
  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  }; // shoutout AngusCroll (https://goo.gl/pxwQGp)

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (typeof el.style[name] !== 'undefined') {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();
    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }

  function parseOption(item) {
    if ('true' === item) {
      return true;
    } else if ('false' === item) {
      return false;
    } else if (!isNaN(item * 1)) {
      return parseFloat(item);
    } else {
      return item;
    }
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        var $selector = $(document).find(selector);
        return $selector.length > 0 ? selector : null;
      } catch (error) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error("".concat(componentName.toUpperCase(), ": ") + "Option \"".concat(property, "\" provided type \"").concat(valueType, "\" ") + "but expected type \"".concat(expectedTypes, "\"."));
          }
        }
      }
    },
    parseDataOptions: function parseDataOptions(dataOptions) {
      var options = [];
      var string = dataOptions.split(';');
      string.forEach(function (item, index) {
        var option = item.split(':');
        option = option.map(function (item) {
          return item.trim();
        });

        if (option[0]) {
          options[option[0]] = parseOption(option[1]);
        }
      });
      return options;
    }
  };
  setTransitionEndSupport();
  return Util;
}($);

/* harmony default export */ __webpack_exports__["default"] = (Util);

/***/ }),

/***/ "./src/assets/js/lagom-app.js":
/*!************************************!*\
  !*** ./src/assets/js/lagom-app.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/forms */ "./src/assets/js/components/forms.js");
/* harmony import */ var _components_range_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/range-slider */ "./src/assets/js/components/range-slider.js");
/* harmony import */ var _components_panels_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/panels-grid */ "./src/assets/js/components/panels-grid.js");
/* harmony import */ var _components_check_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/check-all */ "./src/assets/js/components/check-all.js");
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sliders */ "./src/assets/js/components/sliders/index.js");
/* harmony import */ var _components_panel_switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/panel-switch */ "./src/assets/js/components/panel-switch.js");
/* harmony import */ var _components_credit_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/credit-box */ "./src/assets/js/components/credit-box.js");
/* harmony import */ var _components_tiles_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tiles-slider */ "./src/assets/js/components/tiles-slider.js");
/* harmony import */ var _components_custom_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/custom-scrollbar */ "./src/assets/js/components/custom-scrollbar.js");
/* harmony import */ var _components_tld_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tld-filter */ "./src/assets/js/components/tld-filter.js");
/* harmony import */ var _components_theme_switcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/theme-switcher */ "./src/assets/js/components/theme-switcher.js");
/* harmony import */ var _components_dataTablesScripts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dataTablesScripts */ "./src/assets/js/components/dataTablesScripts.js");
/* harmony import */ var _components_dropdown_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/dropdown-select */ "./src/assets/js/components/dropdown-select.js");
/* harmony import */ var _components_content_slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/content-slider */ "./src/assets/js/components/content-slider.js");
/* harmony import */ var _components_filter_grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/filter-grid */ "./src/assets/js/components/filter-grid.js");
/* harmony import */ var _components_other__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/other */ "./src/assets/js/components/other.js");
















$(document).ready(function () {
  Object(_components_panels_grid__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_components_check_all__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(_components_panel_switch__WEBPACK_IMPORTED_MODULE_5__["default"])();
  Object(_components_credit_box__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_components_tiles_slider__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_components_theme_switcher__WEBPACK_IMPORTED_MODULE_10__["default"])();
  Object(_components_dataTablesScripts__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(_components_other__WEBPACK_IMPORTED_MODULE_15__["default"])();
  Object(_components_tld_filter__WEBPACK_IMPORTED_MODULE_9__["default"])();
  Object(_components_custom_scrollbar__WEBPACK_IMPORTED_MODULE_8__["default"])();
  Object(_components_dropdown_select__WEBPACK_IMPORTED_MODULE_12__["default"])();
  Object(_components_content_slider__WEBPACK_IMPORTED_MODULE_13__["default"])();
  Object(_components_filter_grid__WEBPACK_IMPORTED_MODULE_14__["default"])();
  _components_sliders__WEBPACK_IMPORTED_MODULE_4__["default"].init();
  var checkboxes = $('body').find('input.icheck-control:not(.icheck-input):not(.switch__checkbox), .addon-selector');
  var radioTabs = $('[data-radio-tab]');
  checkboxes.iCheck({
    checkboxClass: 'checkbox-styled',
    radioClass: 'radio-styled',
    increaseArea: '40%'
  });
  $('body').on('click', '[data-radio-tab]', function () {
    $(this).find('input').iCheck('check');
  });
  $('body').on('ifChecked', '[data-radio-tab] input', function () {
    $(this).closest('[data-radio-tab]').tab('show');
  });
  $('.custom-select').selectize({
    copyClassesToDropdown: false
  });
  $('[data-inputs-container]').each(function () {
    new _components_forms__WEBPACK_IMPORTED_MODULE_0__["virtualInput"]($(this));
  });
  $('[data-input-number]').each(function () {
    new _components_forms__WEBPACK_IMPORTED_MODULE_0__["numberInput"]($(this));
  });
  $('[data-input-number]').each(function () {
    new _components_forms__WEBPACK_IMPORTED_MODULE_0__["numberInput"]($(this));
  });
  $('[data-range-container]').each(function () {
    new _components_range_slider__WEBPACK_IMPORTED_MODULE_1__["default"]($(this));
  });
  $('.lagom-layout-left-wide .navbar-main .dropdown-toggle').on('click', function (e) {
    e.preventDefault();

    if ($(this).parent().hasClass('open')) {
      var that = $(this).parent();
      $(this).siblings('.dropdown-menu').slideUp(400).promise().done(function () {
        that.removeClass('open');
      });
    } else {
      var that = $(this).closest('.navbar-main').find('.open');
      that.find('.dropdown-menu').slideUp(400).promise().done(function () {
        that.removeClass('open');
      });
      $(this).parent().addClass('open');
      $(this).siblings('.dropdown-menu').slideDown(400);
    }
  });
});

window.reloadConfigOptions = function (selector) {
  $(selector).find('[data-inputs-container]').each(function () {
    new _components_forms__WEBPACK_IMPORTED_MODULE_0__["virtualInput"]($(this));
  });
  $(selector).find('[data-range-container]').each(function () {
    new _components_range_slider__WEBPACK_IMPORTED_MODULE_1__["default"]($(this));
  });
};

$('.page-viewinvoice .invoice').wrap('<div class="table-scrollbar"></div>');
;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NoZWNrLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvY29udGVudC1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2NyZWRpdC1ib3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2N1c3RvbS1zY3JvbGxiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2RhdGFUYWJsZXNTY3JpcHRzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9kcm9wZG93bi1zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL2ZpbHRlci1ncmlkLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvb3RoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3BhbmVsLXN3aXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvcGFuZWxzLWdyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3JhbmdlLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVycy9iYXNlLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVycy9wcm9tby1zbGlkZXJzL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NsaWRlcnMvcHJvbW8tc2xpZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL2NvbXBvbmVudHMvc2xpZGVycy90ZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RoZW1lLXN3aXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvY29tcG9uZW50cy90aWxlcy1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3RsZC1maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9qcy9jb21wb25lbnRzL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvanMvbGFnb20tYXBwLmpzIl0sIm5hbWVzIjpbImluaXQiLCJjaGVja0FsbCIsIiQiLCJjaGVja2JveGVzIiwibm90Iiwib24iLCJlIiwidHlwZSIsImlDaGVjayIsImZpbHRlciIsImxlbmd0aCIsImFkZENsYXNzIiwiY3NzIiwicmVtb3ZlQ2xhc3MiLCJ0ZXh0IiwicHJvcCIsInJlbW92ZVByb3AiLCJTRUxFQ1RPUlMiLCJjb250YWluZXIiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJwYWdpbmF0aW9uIiwiRGVmYXVsdCIsInNsaWRlVG9DbGlja2VkU2xpZGUiLCJuYXZTdG9yYWdlIiwiY29udGVudFNsaWRlciIsIm9wdGlvbnMiLCJmaW5kIiwiZmlyc3QiLCJpc0luaXQiLCJnZXRDb25maWciLCJpbml0UEx1Z2luIiwiYmluZEV2ZW50cyIsImRhdGFDb25maWciLCJkYXRhIiwiZGF0YU9wdGlvbnMiLCJ1dGlsIiwicGFyc2VEYXRhT3B0aW9ucyIsImNvbmZpZyIsImV4dGVuZCIsInRoYXQiLCJzd2lwZXJJbnN0YW5jZSIsIlN3aXBlciIsInJlc2lzdGFuY2UiLCJyZXNpc3RhbmNlUmF0aW8iLCJzbGlkZXNQZXJWaWV3Iiwid2F0Y2hTbGlkZXNWaXNpYmlsaXR5Iiwic2Nyb2xsYmFyIiwiaGlkZSIsImVsIiwibmF2aWdhdGlvbiIsIm5leHRFbCIsInByZXZFbCIsImRpc2FibGVkQ2xhc3MiLCJvbkluaXQiLCJ0YXAiLCJldmVudCIsImNoYW5nZUFjdGl2ZVNsaWRlIiwib25DbGljayIsInNsaWRlQ2hhbmdlU3RhcnQiLCJvblNsaWRlQ2hhbmdlU3RhcnQiLCJzbGlkZUNoYW5nZUVuZCIsIm9uU2xpZGVDaGFuZ2VFbmQiLCJ0cmFuc2l0aW9uU3RhcnQiLCJvblRyYW5zaXRpb25TdGFydCIsInRyYW5zaXRpb25FbmQiLCJvblRyYW5zaXRpb25FbmQiLCJzbGlkZXJNb3ZlIiwib25TbGlkZXJNb3ZlIiwiY29udGFpbmVyTW9kaWZpZXJDbGFzcyIsInNsaWRlQ2xhc3MiLCJ3cmFwcGVyQ2xhc3MiLCJzd2lwZXIiLCJzbGlkZXMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwibG9jYWxTdG9yYWdlSWQiLCJjbGlja2VkSW5kZXgiLCJ1cGRhdGVBY3RpdmVJbmRleCIsImhhc0NsYXNzIiwic2xpZGVUbyIsImFjdGl2ZUluZGV4IiwiYWN0aXZlU2xpZGVJbmRleCIsImVhY2giLCJpbmRleCIsImxvY2F0aW9uIiwiaGFzaCIsInNsaWRlIiwic2xpZGVJbmRleCIsImNsb3Nlc3QiLCJ0cmlnZ2VyIiwiZ2V0SXRlbSIsInNob3dTbGlkZXIiLCIkZWwiLCJ2aXNpYmlsaXR5Iiwib25TbGlkZUNoYW5nZSIsImluaXREYXRhU2VsZWN0b3JzIiwiZG9jdW1lbnQiLCJwcmljZSIsInBhcmVudCIsInNpYmxpbmdzIiwidmFsIiwiTmF2Q3VzdG9tU2Nyb2xsYmFyIiwic2Nyb2xsYmFySW5uZXIiLCJuYXZDb250ZW50IiwiYmxvY2tVcGRhdGVDb250ZW50UG9zaXRpb24iLCJpbml0UGx1Z2luIiwic2V0U2Nyb2xsYmFyUG9zaXRpb24iLCJ1cGRhdGVDb250ZW50UG9zaXRpb24iLCJ1cGRhdGVTY3JvbGxiYXJQb3NpdGlvbiIsInBzIiwiUGVyZmVjdFNjcm9sbGJhciIsIndoZWVsU3BlZWQiLCJ3aGVlbFByb3BhZ2F0aW9uIiwibWluU2Nyb2xsYmFyTGVuZ3RoIiwic2Nyb2xsVG9wIiwidXBkYXRlIiwic2Nyb2xsSGVpZ2h0IiwiaSIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsInIiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lIiwidW5kZWZpbmVkIiwiaHJlZiIsIkRyb3Bkb3duU2VsZWN0IiwiZHJvcGRvd24iLCJsaXN0IiwibGlzdEl0ZW1zIiwiY2hpbGRyZW4iLCJzZWFyY2hJbnB1dCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZFZhbHVlVmlldyIsIm9yZ2luYWxEYXRhIiwiZmlsdGVyZWREYXRhIiwiYWN0aXZlSXRlbSIsImdldERhdGEiLCJoYW5kbGVTZWFyY2giLCJmb2N1c1NlYXJjaCIsImNsZWFyU2VhcmNoIiwiaGFuZGxlU2VsZWN0SXRlbSIsInNlYXJjaFZhbHVlIiwicmVzdWx0IiwidmFsdWUiLCJpbmRleE9mIiwiaXRlbXMiLCJ2YWx1ZXMiLCJhdHRyIiwicHVzaCIsImdldFNlYXJjaFJlc3VsdCIsInVwZGF0ZVZpZXciLCJodG1sIiwibmV3SFRNTCIsInRsZCIsImFjdGl2ZUNsYXNzIiwidW5SZWdpc3Rlckl0ZW1zQ2xpY2tFdmVudCIsInJlZ2lzdGVySXRlbXNDbGlja0V2ZW50Iiwic2V0VGltZW91dCIsImZvY3VzIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJvZmYiLCJGaWx0ZXJHcmlkIiwiY2FjaGVET00iLCJmaWx0ZXJzQ29udGFpbmVyIiwicHJldmVudERlZmF1bHQiLCJmaWx0ZXJOYW1lIiwiZmlsdGVySXRlbXMiLCJzaHVmZmxlSW5zdGFuY2UiLCJTaHVmZmxlIiwiaXRlbVNlbGVjdG9yIiwic2l6ZXIiLCJpc0NlbnRlcmVkIiwibmFtZSIsInZpcnR1YWxJbnB1dCIsInZpcnR1YWxJbnB1dHMiLCJzZWxlY3RJdGVtcyIsImNoZWNrYm94SW5wdXRzIiwiaW5pdENoZWNrIiwib25DaGVjayIsIm9uVW5jaGVjayIsImNoZWNrIiwiaGFuZGxlU2VsZWN0SXRlbUNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiY2hlY2tlZEl0ZW0iLCJjaGVja2VkSWQiLCJzZWxjdGVkSXRlbSIsImlucHV0IiwiaGlkZUNvbGxhcHNlIiwic2hvd0NvbGxhcHNlIiwiY29sbGFwc2UiLCJoYXNEcm9wZG93biIsImlzIiwic2VsZWN0SXRlbSIsInByb3BlcnRpZXMiLCJ1cGRhdGVJbnB1dFZhbHVlcyIsIm51bWJlcklucHV0IiwiaW5jQnRuIiwiZGVjQnRuIiwidXBkYXRlQnRuIiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsImlucHV0VmFsdWUiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJzaG93QnV0dG9uIiwidXBkYXRlSW5wdXQiLCJ0b2dnbGVDbGFzcyIsImpRdWVyeSIsInJlYWR5IiwiZW5xdWlyZSIsInJlZ2lzdGVyIiwibWF0Y2giLCJzdXBlcmZpc2giLCJ1bm1hdGNoIiwic3RpY2t5U2lkZWJhciIsInRvcFNwYWNpbmciLCJib3R0b21TcGFjaW5nIiwiY2hlY2tWYWx1ZSIsIm5vZmlsZXRleHQiLCJzZWxlY3RmaWxldGV4dCIsInJlbW92ZXRleHQiLCJhcHBlbmQiLCJ0b29sdGlwIiwic3RyaW5nIiwic3Vic3RyaW5nIiwibGFzdEluZGV4T2YiLCJyZW1vdmUiLCJwYXRoIiwicGFuZWxTd2l0Y2giLCJjdXJyQ2hlY2siLCJwYW5lbHNHcmlkIiwibXNucnkiLCJNYXNvbnJ5IiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicmFuZ2VTbGlkZXIiLCJyYW5nZUlucHV0Iiwic2VsZWN0ZWRPcHRpb24iLCJ2aWV3VmFsdWUiLCJjb25uZWN0IiwiYmVoYXZpb3VyIiwic25hcCIsInJhbmdlIiwic3RlcCIsInN0YXJ0VmFsdWUiLCJwcmljZVBlck9uZSIsInBpcHNEZWZhdWx0IiwibW9kZSIsInN0ZXBwZWQiLCJSYW5nZVNsaWRlciIsImdldFBpcHNDb25maWciLCJzbGlkZXIiLCJzZXQiLCJnZXQiLCJ1dGlscyIsImRhdGFQaXBzIiwiZGF0YVBpcHNPcHRpb25zIiwicGlwc0NvbmZpZyIsImN1c3RvbVZhbHVlcyIsImNvdW50IiwibWFwIiwiYXJyYXkiLCJpZCIsIm9wdGlvbklEIiwic2V0Q3VzdG9tVGlwcyIsInNldFN0YXJ0VmFsdWUiLCJzZXRSYW5nZSIsIm5vVWlTbGlkZXIiLCJjcmVhdGUiLCJzdGFydCIsImRpcmVjdGlvbiIsImlzUGFnZVJUTCIsImZvcm1hdCIsInRvIiwiTWF0aCIsInJvdW5kIiwiZnJvbSIsInBpcHMiLCJiYXNlIiwib3JpZ2luIiwiaGFuZGxlIiwiaGFuZGxlTG93ZXIiLCJoYW5kbGVVcHBlciIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImJhY2tncm91bmQiLCJjb25uZWN0cyIsImx0ciIsInJ0bCIsImRyYWdnYWJsZSIsImRyYWciLCJhY3RpdmUiLCJwaXBzSG9yaXpvbnRhbCIsInBpcHNWZXJ0aWNhbCIsIm1hcmtlciIsIm1hcmtlckhvcml6b250YWwiLCJtYXJrZXJWZXJ0aWNhbCIsIm1hcmtlck5vcm1hbCIsIm1hcmtlckxhcmdlIiwibWFya2VyU3ViIiwidmFsdWVIb3Jpem9udGFsIiwidmFsdWVWZXJ0aWNhbCIsInZhbHVlTm9ybWFsIiwidmFsdWVMYXJnZSIsInZhbHVlU3ViIiwic2xpZGVyUGlwc0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZXJQaXBzIiwicGlwIiwicGlwVmFsdWUiLCJoYW5kbGVTbGlkZXJFdmVudHMiLCJvblVwZGF0ZSIsInNldFByaWNlIiwic2V0Vmlld1ZhbHVlIiwiY2hhbmdlQWN0aXZlUGlwIiwiY2hhbmdlQWN0aXZlU2xpZGVJRCIsIm9uU2xpZGUiLCJvbkNoYW5nZSIsIm9uU2V0IiwiTnVtYmVyIiwidG9GaXhlZCIsInBhcnNlRmxvYXQiLCJTbGlkZXIiLCJzbGlkZXJDb25maWciLCJ3cmFwcGVyIiwiT2JqZWN0IiwiYXNzaWduIiwiY2VudGVyZWRTbGlkZXMiLCJsb29wIiwic3BhY2VCZXR3ZWVuIiwibW9kaWZpZXJDbGFzcyIsImJ1bGxldENsYXNzIiwiYnVsbGV0QWN0aXZlQ2xhc3MiLCJjbGlja2FibGUiLCJhMTF5IiwiZW5hYmxlZCIsInNsaWRlUHJldkNsYXNzIiwic2xpZGVOZXh0Q2xhc3MiLCJzbGlkZVZpc2libGVDbGFzcyIsInNsaWRlQWN0aXZlQ2xhc3MiLCJkZXN0cm95IiwidGVzdGltb25pYWxzIiwicHJvbW9TbGlkZXIiLCJzbGlkZUxlZnQiLCJyZWZzIiwiYmVmb3JlSW5pdCIsImVsZW1lbnQiLCJzaG93U2xpZGUiLCJhbmltYXRpb25zIiwiY29udGVudEFuaW1hdGlvbiIsImFuaW1lIiwidGFyZ2V0cyIsImNvbnRlbnQiLCJ0cmFuc2xhdGVYIiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZGVsYXkiLCJlYXNpbmciLCJmaW5pc2hlZCIsImljb25EZWxheSIsImljb25zIiwiQXJyYXkiLCJpY29uIiwiaWNvbkFuaW1hdGlvbiIsInRyYW5zbGF0ZVkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFsbCIsInRoZW4iLCJoaWRlU2xpZGUiLCJmYWRlSW4iLCJwYWdpbmF0aW9uSXRlbSIsImNsb3NlIiwiZGVmYXVsdEFuaW1hdGlvblR5cGUiLCJQcm9tb1NsaWRlciIsInByZXZlbnRTbGlkZUNoYW5nZSIsInF1ZW5lQW5pbWF0aW9ucyIsImluaXRTbGlkZXIiLCJwYWdpbmF0aW9uSXRlbXMiLCJoYW5kbGVQYWdpbmF0aW9uQ2xpY2siLCJoaWRlU2xpZGVyIiwidXBkYXRlSGVpZ2h0IiwibW91c2VlbnRlciIsInN0b3BBdXRvcGxheSIsIm1vdXNlbGVhdmUiLCJzdGFydEF1dG9wbGF5IiwiaGlkZGVuIiwic2V0QW5pbWF0aW9ucyIsImFjdGl2ZVNsaWRlIiwiZ29Ub1NsaWRlIiwiaXRlbUluZGV4IiwiYWRkQW5pbWF0aW9uVG9RdWVuZSIsImZpcnN0U2xpZGUiLCJvbGRJbmRleCIsInBvcCIsInVwZGF0ZVBhZ2luYXRpb25TdGF0dXMiLCJzZXRCYWNrZ3JvdW5kIiwiYW5pbWF0aW9uVHlwZSIsImFuaW1hdGlvbiIsImNsb25lRGVlcCIsImVxIiwiYXV0b1BsYXkiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJpbm5lckhlaWdodCIsInVuc2hpZnQiLCJUZXN0aW1vbmlhc2xTbGlkZXIiLCJzZXRTbGlkZXJDb25maWciLCJnZXRTbGlkZXJDb25maWciLCJzbGlkZXNQZXJHcm91cCIsIkJhc2VTbGlkZXIiLCJ0b2dnbGVPdmVybGF5Iiwic2xpZGVUb2dnbGUiLCJmYWRlVG9nZ2xlIiwiYWN0aXZlU3R5bGUiLCJhY3RpdmVMYXlvdXQiLCJhY3RpdmVQYWdlIiwidXJsIiwidG9nZ2xlVGhlbWVTd2l0Y2hlciIsImJyb3dzZXIiLCJwYXJzZUludCIsImJvZHkiLCJoZWlnaHQiLCJzY3JvbGwiLCJnZXRTY3JvbGxiYXJXaWR0aCIsInJlc2V0VGhlbWVTd2l0Y2hlciIsIm91dGVyIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwid2lkdGgiLCJhcHBlbmRDaGlsZCIsIndpZHRoTm9TY3JvbGwiLCJvZmZzZXRXaWR0aCIsIm92ZXJmbG93IiwiaW5uZXIiLCJ3aWR0aFdpdGhTY3JvbGwiLCJyZW1vdmVDaGlsZCIsIm5ld1N0eWxlIiwibmV3TGF5b3V0IiwibmV3UGFnZSIsInNldFN0eWxlIiwic2V0TGF5b3V0Iiwic2V0UGFnZSIsImNob29zZW5MYXlvdXQiLCJjaG9vc2VuU3R5bGUiLCJjaG9vc2VuUGFnZSIsImZpbmRzaWduIiwibmV3VXJsIiwic2xpZGVVcCIsImZhZGVPdXQiLCJteVN3aXBlciIsInNwZWVkIiwic2VsZWN0aXplIiwiY29weUNsYXNzZXNUb0Ryb3Bkb3duIiwicGx1Z2lucyIsInJlbmRlciIsImVzY2FwZSIsIm9uSXRlbUFkZCIsIiRpdGVtIiwic2hvdyIsInJvdyIsInN0cjEiLCJzdHIyIiwib25EZWxldGUiLCJzZWxlY3RlZF9vYmplY3RzIiwidG90YWxMZW4iLCJrZXkiLCJVdGlsIiwidHJhbnNpdGlvbiIsIk1BWF9VSUQiLCJUcmFuc2l0aW9uRW5kRXZlbnQiLCJXZWJraXRUcmFuc2l0aW9uIiwiTW96VHJhbnNpdGlvbiIsIk9UcmFuc2l0aW9uIiwidG9UeXBlIiwib2JqIiwidG9TdHJpbmciLCJjYWxsIiwiZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCIsImJpbmRUeXBlIiwiZW5kIiwiZGVsZWdhdGVUeXBlIiwiaGFuZGxlT2JqIiwiaGFuZGxlciIsImFwcGx5IiwiYXJndW1lbnRzIiwidHJhbnNpdGlvbkVuZFRlc3QiLCJRVW5pdCIsInRyYW5zaXRpb25FbmRFbXVsYXRvciIsImNhbGxlZCIsIm9uZSIsIlRSQU5TSVRJT05fRU5EIiwidHJpZ2dlclRyYW5zaXRpb25FbmQiLCJzZXRUcmFuc2l0aW9uRW5kU3VwcG9ydCIsImZuIiwiZW11bGF0ZVRyYW5zaXRpb25FbmQiLCJzdXBwb3J0c1RyYW5zaXRpb25FbmQiLCJzcGVjaWFsIiwicGFyc2VPcHRpb24iLCJpc05hTiIsImdldFVJRCIsInByZWZpeCIsInJhbmRvbSIsImdldEVsZW1lbnRCeUlkIiwiZ2V0U2VsZWN0b3JGcm9tRWxlbWVudCIsInNlbGVjdG9yIiwiZ2V0QXR0cmlidXRlIiwiJHNlbGVjdG9yIiwiZXJyb3IiLCJyZWZsb3ciLCJvZmZzZXRIZWlnaHQiLCJCb29sZWFuIiwiaXNFbGVtZW50Iiwibm9kZVR5cGUiLCJ0eXBlQ2hlY2tDb25maWciLCJjb21wb25lbnROYW1lIiwiY29uZmlnVHlwZXMiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiZXhwZWN0ZWRUeXBlcyIsInZhbHVlVHlwZSIsIlJlZ0V4cCIsInRlc3QiLCJFcnJvciIsInRvVXBwZXJDYXNlIiwic3BsaXQiLCJmb3JFYWNoIiwib3B0aW9uIiwidHJpbSIsImluaXRQYW5lbHNHcmlkIiwiaW5pdENoZWNrQWxsIiwiaW5pdFBhbmVsU3dpdGNoIiwiaW5pdENyZWRpdEJveCIsImluaXRUaWxlc1NsaWRlciIsImluaXRUaGVtZVN3aXRjaGVyIiwiaW5pdERhdGFUYWJsZVNjcmlwdHMiLCJpbml0T3RoZXJTY3JpcHRzIiwiaW5pdFRMRGZpbGVyIiwiaW5pdEN1c3RvbVNjcm9sbGJhciIsImluaXREcm9wZG93blNlbGVjdCIsImluaXRDb250ZW50U2xpZGVyIiwiaW5pdEZpbHRlckdyaWQiLCJzbGlkZXJzIiwicmFkaW9UYWJzIiwiY2hlY2tib3hDbGFzcyIsInJhZGlvQ2xhc3MiLCJpbmNyZWFzZUFyZWEiLCJ0YWIiLCJwcm9taXNlIiwiZG9uZSIsInNsaWRlRG93biIsInJlbG9hZENvbmZpZ09wdGlvbnMiLCJ3cmFwIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FB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QUNBLEMiLCJmaWxlIjoibGFnb20vYXNzZXRzL2pzL2xhZ29tLWFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJsYWdvbS9hc3NldHMvanMvbGFnb20tYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJ0ZW1wbGF0ZXNcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9zcmMvYXNzZXRzL2pzL2xhZ29tLWFwcC5qc1wiLFwibGFnb20vYXNzZXRzL2pzL3ZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKXtcclxuXHJcbiAgICBcclxuXHJcbiAgICBsZXQgY2hlY2tBbGwgPSAkKCcjc2VsZWN0QWxsJyk7XHJcbiAgICBsZXQgY2hlY2tib3hlcyA9ICQoJy5kb21pZHMnKS5ub3QoJzpkaXNhYmxlZCcpO1xyXG4gICAgY2hlY2tBbGwub24oJ2lmQ2hlY2tlZCBpZlVuY2hlY2tlZCcsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS50eXBlID09ICdpZkNoZWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXMuaUNoZWNrKCdjaGVjaycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94ZXMuaUNoZWNrKCd1bmNoZWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBjaGVja2JveGVzLm9uKCdpZkNoYW5nZWQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGNoZWNrYm94ZXMuZmlsdGVyKCc6Y2hlY2tlZCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgJCgnI2RvbWFpblNlbGVjdGVkQ291bnRlcicpLmFkZENsYXNzKCdiYWRnZS0tcHJpbWFyeScpO1xyXG4gICAgICAgICAgICAkKCcuYm90dG9tLWFjdGlvbi1zdGlja3knKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2lzLWFjdGlvbnMnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjZG9tYWluU2VsZWN0ZWRDb3VudGVyJykucmVtb3ZlQ2xhc3MoJ2JhZGdlLS1wcmltYXJ5Jyk7XHJcbiAgICAgICAgICAgICQoJy5ib3R0b20tYWN0aW9uLXN0aWNreScpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaXMtYWN0aW9ucycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCcjZG9tYWluU2VsZWN0ZWRDb3VudGVyJykudGV4dChjaGVja2JveGVzLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGgpO1xyXG4gICAgICAgIGlmIChjaGVja2JveGVzLmZpbHRlcignOmNoZWNrZWQnKS5sZW5ndGggPT0gY2hlY2tib3hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2hlY2tBbGwucHJvcCgnY2hlY2tlZCcsICdjaGVja2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hlY2tBbGwucmVtb3ZlUHJvcCgnY2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaGVja0FsbC5pQ2hlY2soJ3VwZGF0ZScpO1xyXG4gICAgfSk7XHJcblxyXG5cclxufSIsIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBOYW1lOiBDb250ZW50IFNsaWRlcihsYXllcnNVSSlcclxuICogVmVyc2lvbjogQWxwaGFcclxuICogTGljZW5zZTogLVxyXG4gKiBXZWJzaXRlOiBodHRwOi8vbGF5ZXJzdWkuY29tL1xyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlscy5qcyc7XHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyL2Rpc3QvanMvc3dpcGVyLmpzJztcclxuXHJcbmNvbnN0IFNFTEVDVE9SUyA9IHtcclxuICAgIGNvbnRhaW5lcjogJ1tkYXRhLWNvbnRlbnQtc2xpZGVyXScsXHJcbiAgICBuZXh0U2xpZGU6ICdbZGF0YS1uZXh0LXNsaWRlXScsXHJcbiAgICBwcmV2U2xpZGU6ICdbZGF0YS1wcmV2LXNsaWRlXScsXHJcbiAgICBwYWdpbmF0aW9uOiAnW2RhdGEtc2xpZGVyLXBhZ2luYXRpb25dJ1xyXG59O1xyXG5cclxuY29uc3QgRGVmYXVsdCA9IHtcclxuXHJcbiAgICBzbGlkZVRvQ2xpY2tlZFNsaWRlOiBmYWxzZSxcclxuICAgIG5hdlN0b3JhZ2U6ICdub3JtYWwnLFxyXG59O1xyXG5cclxuY2xhc3MgY29udGVudFNsaWRlcntcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgb3B0aW9ucyl7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5uZXh0U2xpZGUgPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5uZXh0U2xpZGUpLmZpcnN0KCk7XHJcbiAgICAgICAgdGhpcy5wcmV2U2xpZGUgPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5wcmV2U2xpZGUpLmZpcnN0KCk7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uID0gdGhpcy5jb250YWluZXIuZmluZChTRUxFQ1RPUlMucGFnaW5hdGlvbikuZmlyc3QoKTsgICAgICAgIFxyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5pc0luaXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRDb25maWcoKTtcclxuICAgICAgICB0aGlzLmluaXRQTHVnaW4oKTtcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuXHJcbiAgICB9XHJcbiAgICBnZXRDb25maWcoKXtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFDb25maWcgID0gdGhpcy5jb250YWluZXIuZGF0YSgpO1xyXG4gICAgICAgIGlmKGRhdGFDb25maWcub3B0aW9ucyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSB1dGlsLnBhcnNlRGF0YU9wdGlvbnMoZGF0YUNvbmZpZy5vcHRpb25zKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kYXRhT3B0aW9ucyA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZyA9ICQuZXh0ZW5kKHt9LCBEZWZhdWx0LCBkYXRhQ29uZmlnLCB0aGlzLmRhdGFPcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgIH1cclxuICAgIGJpbmRFdmVudHMoKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2xpZGVUbygpe1xyXG5cclxuICAgIH1cclxuICAgIHNsaWRlTmV4dCgpe1xyXG5cclxuICAgIH1cclxuICAgIHNsaWRlUHJldigpe1xyXG5cclxuICAgIH1cclxuICAgIGRlc3Ryb3koKXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9Qcml2YXRlIG1ldGhvZHNcclxuICAgIGluaXRQTHVnaW4oKXtcclxuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zd2lwZXJJbnN0YW5jZSA9IG5ldyBTd2lwZXIodGhpcy5jb250YWluZXIsIHtcclxuICAgICAgICAgICAgcmVzaXN0YW5jZTogdHJ1ZSxcclxuICAgICAgICAgICAgcmVzaXN0YW5jZVJhdGlvOiAwLFxyXG4gICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcbiAgICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICAgICAgc2Nyb2xsYmFyOntcclxuICAgICAgICAgICAgICAgIGhpZGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgIGVsOiB0aGlzLnBhZ2luYXRpb25bMF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmV4dEVsOiB0aGlzLm5leHRTbGlkZVswXSxcclxuICAgICAgICAgICAgICAgIHByZXZFbDogdGhpcy5wcmV2U2xpZGVbMF0sXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZENsYXNzOiAnaXMtZGlzYWJsZWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uOntcclxuICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vbkluaXQodGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFwOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5jaGFuZ2VBY3RpdmVTbGlkZSh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGF0LmNvbmZpZy5zbGlkZVRvQ2xpY2tlZFNsaWRlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zbGlkZVRvQ2xpY2tlZFNsaWRlKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vbkNsaWNrKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzbGlkZUNoYW5nZVN0YXJ0OiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vblNsaWRlQ2hhbmdlU3RhcnQodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNsaWRlQ2hhbmdlRW5kOiBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5vblNsaWRlQ2hhbmdlRW5kKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uU3RhcnQoZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQub25UcmFuc2l0aW9uU3RhcnQodGhpcywgZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0Lm9uVHJhbnNpdGlvbkVuZCh0aGlzLCBldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyTW92ZTogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQub25TbGlkZXJNb3ZlKHRoaXMsIGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGFpbmVyTW9kaWZpZXJDbGFzczogJ2NvbnRlbnQtc2xpZGVyJyxcclxuICAgICAgICAgICAgc2xpZGVDbGFzczogJ2NvbnRlbnQtc2xpZGVyLWl0ZW0nLFxyXG4gICAgICAgICAgICB3cmFwcGVyQ2xhc3M6ICdjb250ZW50LXNsaWRlci13cmFwcGVyJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2hhbmdlQWN0aXZlU2xpZGUoc3dpcGVyKXtcclxuICAgICAgICBpZighdGhpcy5pc0luaXQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzbGlkZXMgPSBzd2lwZXIuc2xpZGVzO1xyXG5cclxuICAgICAgICBzd2l0Y2godGhpcy5jb25maWcubmF2U3RvcmFnZSl7XHJcbiAgICAgICAgICAgIGNhc2UgJ25vcm1hbCc6XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2hhc2gnOlxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xvY2FsU3RvcmFnZSc6XHJcbiAgICAgICAgICAgICAgICAkKHNsaWRlcykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjb250ZW50LXNsaWRlci0ke3RoaXMuY29uZmlnLmxvY2FsU3RvcmFnZUlkfWAsIHN3aXBlci5jbGlja2VkSW5kZXgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgc2xpZGVUb0NsaWNrZWRTbGlkZShzd2lwZXIsIGV2ZW50KXtcclxuXHJcbiAgICAgICAgbGV0IGNsaWNrZWRJbmRleCA9IHN3aXBlci5jbGlja2VkSW5kZXgsXHJcbiAgICAgICAgICAgIHNsaWRlcyA9IHN3aXBlci5zbGlkZXM7XHJcbiAgICAgICAgICAgIHN3aXBlci51cGRhdGVBY3RpdmVJbmRleCgpO1xyXG5cclxuICAgICAgICAgICAgaWYoISQoc2xpZGVzW2NsaWNrZWRJbmRleC0xXSkuaGFzQ2xhc3MoJ3N3aXBlci1zbGlkZS12aXNpYmxlJykpe1xyXG4gICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoISQoc2xpZGVzW2NsaWNrZWRJbmRleCsxXSkuaGFzQ2xhc3MoJ3N3aXBlci1zbGlkZS12aXNpYmxlJykpe1xyXG4gICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc3dpcGVyLmFjdGl2ZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy9DYWxsYmFja3NcclxuICAgIG9uSW5pdChzd2lwZXIpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub25Jbml0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uSW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2godGhpcy5jb25maWcubmF2U3RvcmFnZSl7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdub3JtYWwnOlxyXG4gICAgICAgICAgICAgICAgbGV0IGFjdGl2ZVNsaWRlSW5kZXggPSAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzID0gc3dpcGVyLnNsaWRlcztcclxuXHJcbiAgICAgICAgICAgICAgICAkKHNsaWRlcykuZWFjaChmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZUluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzd2lwZXIuc2xpZGVUbyhhY3RpdmVTbGlkZUluZGV4LCAwKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgY2FzZSAnaGFzaCc6XHJcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNsaWRlID0gJChzd2lwZXIuY29udGFpbmVyKS5maW5kKCdbaHJlZj1cIicrIHdpbmRvdy5sb2NhdGlvbi5oYXNoKydcIl0nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IHNsaWRlLmNsb3Nlc3QoJy5zd2lwZXItc2xpZGUnKS5pbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyaWdnZXIoJ2NsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oc2xpZGVJbmRleCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2xvY2FsU3RvcmFnZSc6XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oYGNvbnRlbnQtc2xpZGVyLSR7dGhpcy5jb25maWcubG9jYWxTdG9yYWdlSWR9YCk7XHJcbiAgICAgICAgICAgICAgICBpZihpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oaW5kZXgsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICQoc3dpcGVyLnNsaWRlc1tpbmRleF0pLmZpbmQoJ2EnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpcGVyLnNsaWRlVG8oMCwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG93U2xpZGVyKHN3aXBlcik7XHJcbiAgICAgICAgdGhpcy5pc0luaXQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgc2hvd1NsaWRlcihzd2lwZXIpe1xyXG4gICAgICAgIHN3aXBlci4kZWwuY3NzKHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrKHN3aXBlciwgZXZlbnQpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vbkNsaWNrKHN3aXBlciwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNsaWRlQ2hhbmdlU3RhcnQoc3dpcGVyLCBldmVudCl7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vblNsaWRlQ2hhbmdlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uU2xpZGVDaGFuZ2VTdGFydChzd2lwZXIsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TbGlkZUNoYW5nZUVuZChzd2lwZXIsIGV2ZW50KXtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9uU2xpZGVDaGFuZ2VFbmQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcub25TbGlkZUNoYW5nZUVuZChzd2lwZXIsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblRyYW5zaXRpb25TdGFydChzd2lwZXIsIGV2ZW50KXtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9uVHJhbnNpdGlvblN0YXJ0ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uVHJhbnNpdGlvblN0YXJ0KHN3aXBlciwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVHJhbnNpdGlvbkVuZChzd2lwZXIsIGV2ZW50KXtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY29uZmlnLm9uVHJhbnNpdGlvbkVuZCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vblRyYW5zaXRpb25FbmQoc3dpcGVyLCBldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TbGlkZXJNb3ZlKHN3aXBlciwgZXZlbnQpe1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub25TbGlkZXJNb3ZlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLm9uU2xpZGVyTW92ZShzd2lwZXIsIGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdERhdGFTZWxlY3RvcnMoKXtcclxuICAgICQoU0VMRUNUT1JTLmNvbnRhaW5lcikuZWFjaChmdW5jdGlvbigpe1xyXG4gICAgICAgIG5ldyBjb250ZW50U2xpZGVyKCQodGhpcykpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCl7XHJcbiAgICAkKFNFTEVDVE9SUy5jb250YWluZXIpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICBuZXcgY29udGVudFNsaWRlcigkKHRoaXMpKTtcclxuICAgIH0pO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJyNhZGQtY3JlZGl0cy1idXR0b25zIC5idG4nLCBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgcHJpY2UgPSAkKHRoaXMpLmRhdGEoJ3ByaWNlJyk7XHJcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoJy5pbnB1dC1ncm91cCcpLmZpbmQoJyNhbW91bnQnKS52YWwocHJpY2UpO1xyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbigna2V5dXAnLCAnI2Ftb3VudCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciB2YWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICQoJyNhZGQtY3JlZGl0cy1idXR0b25zJykuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcjYWRkLWNyZWRpdHMtYnV0dG9ucycpLmZpbmQoJ1tkYXRhLXByaWNlPVwiJyArIHZhbCArICdcIl0nKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxufSIsImltcG9ydCBQZXJmZWN0U2Nyb2xsYmFyIGZyb20gJ3BlcmZlY3Qtc2Nyb2xsYmFyJztcclxuXHJcbmNsYXNzIE5hdkN1c3RvbVNjcm9sbGJhcntcclxuICAgIGNvbnN0cnVjdG9yKHNjcm9sbGJhcil7XHJcblxyXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyID0gJCgnW2RhdGEtbmF2LXNjcm9sbGJhcl0nKTtcclxuICAgICAgICBpZighdGhpcy5zY3JvbGxiYXIubGVuZ3RoKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNjcm9sbGJhcklubmVyID0gJCgnW2RhdGEtbmF2LXNjcm9sbGJhci1pbm5lcl0nKTtcclxuICAgICAgICB0aGlzLm5hdkNvbnRlbnQgPSAkKCdbZGF0YS1uYXYtY29udGVudF0nKTtcclxuICAgICAgICB0aGlzLmJsb2NrVXBkYXRlQ29udGVudFBvc2l0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBsdWdpbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsYmFyUG9zaXRpb24oKTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGJpbmRFdmVudHMoKXtcclxuICAgICAgICB0aGlzLnNjcm9sbGJhci5vbigncHMtc2Nyb2xsLXknLCAoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbnRlbnRQb3NpdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubmF2Q29udGVudC5vbignc2Nyb2xsJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjcm9sbGJhclBvc2l0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2Nyb2xsYmFyUG9zaXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGluaXRQbHVnaW4oKXtcclxuICAgICAgICB0aGlzLnBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcy5zY3JvbGxiYXJbMF0sIHtcclxuICAgICAgICAgICAgd2hlZWxTcGVlZDogMixcclxuICAgICAgICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2UsXHJcbiAgICAgICAgICAgIG1pblNjcm9sbGJhckxlbmd0aDogMjBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDb250ZW50UG9zaXRpb24oKXtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMuYmxvY2tVcGRhdGVDb250ZW50UG9zaXRpb24pe1xyXG4gICAgICAgICAgICB0aGlzLm5hdkNvbnRlbnQuc2Nyb2xsVG9wKHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ibG9ja1VwZGF0ZUNvbnRlbnRQb3NpdGlvbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU2Nyb2xsYmFyUG9zaXRpb24oKXtcclxuICAgICAgICB0aGlzLmJsb2NrVXBkYXRlQ29udGVudFBvc2l0aW9uID0gdHJ1ZVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2Nyb2xsYmFyLnNjcm9sbFRvcCh0aGlzLm5hdkNvbnRlbnQuc2Nyb2xsVG9wKCkpO1xyXG4gICAgICAgIHRoaXMucHMudXBkYXRlKCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzZXRTY3JvbGxiYXJQb3NpdGlvbigpe1xyXG4gICAgICAgIGxldCBzY3JvbGxIZWlnaHQgPSAgdGhpcy5uYXZDb250ZW50WzBdLnNjcm9sbEhlaWdodDtcclxuICAgICAgICB0aGlzLnNjcm9sbGJhcklubmVyLmNzcygnaGVpZ2h0Jywgc2Nyb2xsSGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnBzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIG5ldyBOYXZDdXN0b21TY3JvbGxiYXIoKTtcclxuXHJcbiAgICAkKCdbZGF0YS1wYW5lbHMtZ3JpZF0gLmxpc3QtZ3JvdXAsIC5sYW5ndWFnZSBkaXYuZHJvcGRvd24tbWVudSwgLnBhbmVsLWNob29zZS1kb21haW4gLmRyb3Bkb3duLW1lbnUsIC5mb290ZXItbGlua3MgLmRyb3Bkb3duLW1lbnUsIC5jYXRlZ29yaWVzLWNvbGxhcHNlZCAuZHJvcGRvd24tbWVudScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnBzID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIodGhpcywge1xyXG4gICAgICAgICAgICB3aGVlbFNwZWVkOiAyLFxyXG4gICAgICAgICAgICB3aGVlbFByb3BhZ2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICBtaW5TY3JvbGxiYXJMZW5ndGg6IDIwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgXHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuXHQvLyBkYXRhdGFibGVzXHJcbiAgICBpZiAoJCgnLmRhdGFUYWJsZScpLmxlbmd0aCkge1xyXG4gICAgICAgIC8vYWRkIGNvbGxhcHNlIGJ1dHRvbiB0byBlYWNoIHJvd1xyXG4gICAgICAgIC8vICQoJy5kYXRhVGFibGUgdGJvZHkgdHInKS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gICAgIHZhciB0ZCA9ICQodGhpcykuZmluZCgndGQ6Zmlyc3QnKTtcclxuICAgICAgICAvLyAgICAgJCgnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdGFibGUtY29sbGFwc2VcIj48L2J1dHRvbj4nKS5hcHBlbmRUbyh0ZCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9wcmV2ZW50IHN0YW5kYXJkIGNvbGxhcHNlIGNsaWNrXHJcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5kYXRhVGFibGUgdGJvZHkgdHIgdGQnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHZhciBpID0gZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpLFxyXG4gICAgICAgICAgICAgICAgciA9IGUudGFyZ2V0LnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBpZiAoIGUudGFyZ2V0LmNsYXNzTmFtZSAhPSBcImJ0bi10YWJsZS1jb2xsYXBzZVwiICYmIGUudGFyZ2V0LmNsYXNzTmFtZSAhPSBcImNlbGwtYWN0aW9uXCIgJiYgZS50YXJnZXQuY2xhc3NOYW1lICE9IFwiY2VsbC1jaGVja2JveFwiICYmIFwiYnV0dG9uXCIgIT0gaSAmJiBcImFcIiAhPSBpICYmIFwiaW1nXCIgIT0gaSAmJiBcImJ1dHRvblwiICE9IHIgJiYgXCJhXCIgIT0gciAmJiBcImlucHV0XCIgIT0gaSAmJiBcImlucHV0XCIgIT0gcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdCgndHInKS5kYXRhKCd1cmwnKSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5jbG9zZXN0KCd0cicpLmRhdGEoJ3VybCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLmRhdGFUYWJsZSB0aGVhZCB0ciB0aCAuYnRuLXRhYmxlLWNvbGxhcHNlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZGF0YVRhYmxlJykuZmluZCgndHIucGFyZW50IHRkIC5idG4tdGFibGUtY29sbGFwc2UnKS50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmRhdGFUYWJsZScpLmZpbmQoJ3RyOm5vdCgucGFyZW50KSB0ZCAuYnRuLXRhYmxlLWNvbGxhcHNlJykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICQoJy5kYXRhVGFibGUgaW5wdXQnKS5vbignaWZDaGVja2VkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAkKCcuZGF0YVRhYmxlIGlucHV0Jykub24oJ2lmVW5jaGVja2VkJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiY2xhc3MgRHJvcGRvd25TZWxlY3R7XHJcbiAgICBjb25zdHJ1Y3Rvcihkcm9wZG93bikge1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd24gPSAkKGRyb3Bkb3duKTtcclxuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmRyb3Bkb3duLmZpbmQoJ1tkYXRhLWRyb3Bkb3duLXNlbGVjdC1saXN0XScpO1xyXG4gICAgICAgIHRoaXMubGlzdEl0ZW1zICA9ICB0aGlzLmxpc3QuY2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnNlYXJjaElucHV0ID0gdGhpcy5kcm9wZG93bi5maW5kKCdbZGF0YS1kcm9wZG93bi1zZWxlY3Qtc2VhcmNoXScpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHRoaXMuZHJvcGRvd24uZmluZCgnW2RhdGEtZHJvcGRvd24tc2VsZWN0LXZhbHVlXScpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZVZpZXcgPSB0aGlzLmRyb3Bkb3duLmZpbmQoJ1tkYXRhLWRyb3Bkb3duLXNlbGVjdC12YWx1ZS12aWV3XScpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICB0aGlzLm9yZ2luYWxEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5maWx0ZXJlZERhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSAnJztcclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgIH1cclxuICAgIGJpbmRFdmVudHMoKXtcclxuXHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5vbigna2V5dXAnLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoKGV2ZW50KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuZHJvcGRvd24ub24oJ3Nob3duLmJzLmRyb3Bkb3duJywgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5mb2N1c1NlYXJjaCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZHJvcGRvd24ub24oJ2hpZGRlbi5icy5kcm9wZG93bicsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJTZWFyY2goKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RJdGVtcy5vbignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0SXRlbShldmVudCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldFNlYXJjaFJlc3VsdChzZWFyY2hWYWx1ZSl7XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLm9yZ2luYWxEYXRhLmZpbHRlcigodmFsdWUpPT57XHJcblxyXG4gICAgICAgICAgICBpZih2YWx1ZS5pbmRleE9mKHNlYXJjaFZhbHVlKSA+IC0xKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpe1xyXG5cclxuICAgICAgICBsZXQgaXRlbXMgPSB0aGlzLmxpc3RJdGVtcztcclxuICAgICAgICBsZXQgdmFsdWVzID0gW107XHJcblxyXG4gICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9ICQodGhpcykuYXR0cignZGF0YS12YWx1ZScpO1xyXG4gICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9yZ2luYWxEYXRhID0gdmFsdWVzO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlU2VhcmNoKGV2ZW50KXtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlICA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkRGF0YSA9IHRoaXMuZ2V0U2VhcmNoUmVzdWx0KHZhbHVlKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGVWaWV3KCl7XHJcbiAgICAgICAgdGhpcy5saXN0Lmh0bWwoJycpO1xyXG5cclxuICAgICAgICBsZXQgbmV3SFRNTCA9IGBgO1xyXG5cclxuICAgICAgICBmb3IobGV0IHRsZCBvZiB0aGlzLmZpbHRlcmVkRGF0YSl7XHJcbiAgICAgICAgICAgIGxldCBhY3RpdmVDbGFzcyA9ICcnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVJdGVtID09IHRsZCl7XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzcyA9ICdhY3RpdmUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5ld0hUTUwgKz0gYDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51LWl0ZW0gJHthY3RpdmVDbGFzc31cIiBkYXRhLXZhbHVlPVwiJHt0bGR9XCI+PGE+JHt0bGR9PC9hPjwvZGl2PmBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5maWx0ZXJlZERhdGEubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5kcm9wZG93bi5yZW1vdmVDbGFzcygnaXMtZW1wdHknKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duLmFkZENsYXNzKCdpcy1lbXB0eScpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3QuaHRtbChuZXdIVE1MKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVuUmVnaXN0ZXJJdGVtc0NsaWNrRXZlbnQoKTtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcyA9IHRoaXMuZHJvcGRvd24uZmluZCgnW2RhdGEtZHJvcGRvd24tc2VsZWN0LWxpc3RdJykuY2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySXRlbXNDbGlja0V2ZW50KCk7XHJcbiAgICB9XHJcbiAgICBmb2N1c1NlYXJjaCgpe1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcclxuICAgICAgICB9LDApO1xyXG5cclxuICAgIH1cclxuICAgIGNsZWFyU2VhcmNoKCl7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC52YWwoJycpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoSW5wdXQudHJpZ2dlcigna2V5dXAnKTtcclxuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZWxlY3RJdGVtKGV2ZW50KXtcclxuICAgICAgICBsZXQgaXRlbSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gIGl0ZW0uZGF0YSgndmFsdWUnKTtcclxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWVWaWV3LnRleHQodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZS52YWwodmFsdWUpO1xyXG4gICAgICAgIGl0ZW0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgcmVnaXN0ZXJJdGVtc0NsaWNrRXZlbnQoKXtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcy5vbignY2xpY2suc2VhcmNoRHJvcGRvd24nLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlU2VsZWN0SXRlbShldmVudCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHVuUmVnaXN0ZXJJdGVtc0NsaWNrRXZlbnQoKXtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcy5vZmYoJ2NsaWNrLnNlYXJjaERyb3Bkb3duJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gIGluaXQoKXtcclxuICAgICQoJ1tkYXRhLWRyb3Bkb3duLXNlbGVjdF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG5ldyBEcm9wZG93blNlbGVjdCh0aGlzKTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IFNodWZmbGUgZnJvbSAnc2h1ZmZsZWpzJztcblxuY2xhc3MgRmlsdGVyR3JpZCB7XG4gICAgY29uc3RydWN0b3IoKXtcblxuICAgICAgICB0aGlzLmNhY2hlRE9NKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmluaXRQbHVnaW4oKTtcblxuICAgIH1cbiAgICBjYWNoZURPTSgpe1xuICAgICAgICB0aGlzLmZpbHRlcnNDb250YWluZXIgPSAkKCdbZGF0YS1maWx0ZXItZ3JpZF0nKTtcbiAgICB9XG4gICAgYmluZEV2ZW50cygpe1xuXG4gICAgICAgICQoJ1tkYXRhLWZpbHRlci1uYXZdIFtkYXRhLWZpbHRlcl0nKS5vbignY2xpY2snLCAoZXZlbnQpPT57XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLm5hdicpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKGV2ZW50LnRhcmdldCkucGFyZW50KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsZXQgZmlsdGVyTmFtZSA9ICQoZXZlbnQudGFyZ2V0KS5kYXRhKCdmaWx0ZXInKTtcbiAgICAgICAgICAgIHRoaXMuZmlsdGVySXRlbXMoZmlsdGVyTmFtZSlcblxuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBpbml0UGx1Z2luKCkge1xuXG4gICAgICAgIGlmKCF0aGlzLmZpbHRlcnNDb250YWluZXIubGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2h1ZmZsZUluc3RhbmNlID0gbmV3IFNodWZmbGUodGhpcy5maWx0ZXJzQ29udGFpbmVyWzBdLCB7XG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZmlsdHItaXRlbScsXG4gICAgICAgICAgICBzaXplcjogJy5qcy1zaHVmZmxlLXNpemVyJyxcbiAgICAgICAgICAgIGlzQ2VudGVyZWQ6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuXG4gICAgICAgICAgICB0aGlzLmZpbHRlcnNDb250YWluZXIuYWRkQ2xhc3MoJ3Zpc2libGUnKVxuXG4gICAgICAgIH0sMzAwKTtcbiAgICB9XG4gICAgZmlsdGVySXRlbXMobmFtZSl7XG5cbiAgICAgICAgaWYobmFtZSA9PSAnYWxsJyl7XG5cbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZUluc3RhbmNlLmZpbHRlcigpO1xuXG4gICAgICAgIH1lbHNle1xuICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZUluc3RhbmNlLmZpbHRlcihbbmFtZV0pO1xuICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcbiAgICBuZXcgRmlsdGVyR3JpZCgpO1xufSIsIlxyXG5leHBvcnQgY2xhc3MgdmlydHVhbElucHV0e1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMudmlydHVhbElucHV0cyA9ICB0aGlzLmNvbnRhaW5lci5maW5kKCdbZGF0YS12aXJ0dWFsLWlucHV0XScpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbXMgPSAgdGhpcy5jb250YWluZXIuZmluZCgnW2RhdGEtZHJvcGRvd24tbWVudV0gW2RhdGEtdmFsdWVdJyk7XHJcblxyXG5cdFx0aWYgKHRoaXMuY29udGFpbmVyLmZpbmQoJ1tkYXRhLWlucHV0LWNvbGxhcHNlXScpLmxlbmd0aCAhPSAwKSB7XHJcbiAgICAgICAgXHR0aGlzLmNoZWNrYm94SW5wdXRzICA9IHRoaXMudmlydHVhbElucHV0cy5maW5kKCcucGFuZWwtaGVhZGluZyBpbnB1dCcpO1xyXG5cdFx0fSBlbHNlIHtcdFxyXG4gICAgICAgIFx0dGhpcy5jaGVja2JveElucHV0cyAgPSB0aGlzLnZpcnR1YWxJbnB1dHMuZmluZCgnaW5wdXQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRDaGVjaygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG5cclxuXHRcdHRoaXMuY2hlY2tib3hJbnB1dHMub24oJ2lmQ2hlY2tlZCcsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyhldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGVjayhldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcblx0XHR0aGlzLmNoZWNrYm94SW5wdXRzLm9uKCdpZlVuY2hlY2tlZCcsIChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcyhldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub25VbmNoZWNrKGV2ZW50KTsgICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuXHRcdHRoaXMudmlydHVhbElucHV0cy5vbignY2xpY2sgc2VsZWN0T3B0aW9uJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtcy5vbignY2xpY2sgc2VsZWN0T3B0aW9uJywgKGV2ZW50KT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVNlbGVjdEl0ZW1DbGljayhldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aXJ0dWFsSW5wdXRzLmZpbmQoJ1t0eXBlPVwicGFzc3dvcmRcIl0nKS5vbignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0Q2hlY2soKXtcclxuICAgICAgICBsZXQgY2hlY2tlZEl0ZW0gPSB0aGlzLnZpcnR1YWxJbnB1dHMuZmluZCgnaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gXHJcbiAgICAgICAgbGV0IGNoZWNrZWRJZCA9IGNoZWNrZWRJdGVtLnZhbCgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZihjaGVja2VkSWQpe1xyXG4gICAgICAgICAgICBsZXQgc2VsY3RlZEl0ZW0gPSBjaGVja2VkSXRlbS5jbG9zZXN0KFwiW2RhdGEtdmlydHVhbC1pbnB1dF1cIikuZmluZCgnW2RhdGEtZHJvcGRvd24tbWVudV0gW2RhdGEtdmFsdWU9XCInK2NoZWNrZWRJZCsnXCJdJyk7XHJcbiAgICAgICAgICAgIHNlbGN0ZWRJdGVtLnRyaWdnZXIoJ3NlbGVjdE9wdGlvbicpXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHJlbW92ZUNsYXNzKGV2ZW50KSB7ICAgICAgXHJcbiAgICAgICAgbGV0IGlucHV0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTsgICAgXHJcbiAgICAgICAgbGV0IHZpcnR1YWxJbnB1dCA9IGlucHV0LmNsb3Nlc3QoJ1tkYXRhLXZpcnR1YWwtaW5wdXRdJylcclxuICAgICAgICB0aGlzLmhpZGVDb2xsYXBzZSh2aXJ0dWFsSW5wdXQpXHJcbiAgICAgICAgdmlydHVhbElucHV0LnJlbW92ZUNsYXNzKCdjaGVja2VkJyk7XHJcblxyXG5cclxuICAgICAgICBpZihpbnB1dC5hdHRyKCd0eXBlJykgPT0gJ2NoZWNrYm94Jyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyByZW1vdmUgY2xhc3MgZnJvbSBjb250YWluZXJcclxuICAgICAgICBpZih2aXJ0dWFsSW5wdXQuZGF0YSgndmlydHVhbC1pbnB1dC1ub25lJykgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgaWYodGhpcy5jb250YWluZXIuaGFzQ2xhc3MoJ2lzLXNlbGVjdGVkJykpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRDbGFzcyhldmVudCkge1xyXG4gICAgICAgIGxldCBpbnB1dCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IHZpcnR1YWxJbnB1dCA9IGlucHV0LmNsb3Nlc3QoJ1tkYXRhLXZpcnR1YWwtaW5wdXRdJyk7XHJcbiAgICAgICAgdGhpcy5zaG93Q29sbGFwc2UodmlydHVhbElucHV0KVxyXG5cclxuXHRcdHZpcnR1YWxJbnB1dC5hZGRDbGFzcygnY2hlY2tlZCcpO1xyXG4gICAgICBcclxuICAgICAgICBpZihpbnB1dC5hdHRyKCd0eXBlJykgPT0gJ2NoZWNrYm94Jyl7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBhZGQgQ2xhc3MgdG8gY29udGFpbmVyXHJcbiAgICAgICAgaWYodmlydHVhbElucHV0LmRhdGEoJ3ZpcnR1YWwtaW5wdXQtbm9uZScpID09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmNvbnRhaW5lci5oYXNDbGFzcygnaXMtc2VsZWN0ZWQnKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gICBcclxuICAgIHNob3dDb2xsYXBzZSh2aXJ0dWFsSW5wdXQpe1xyXG4gICAgICAgIHZpcnR1YWxJbnB1dC5maW5kKCdbZGF0YS1pbnB1dC1jb2xsYXBzZV0nKS5jb2xsYXBzZSgnc2hvdycpO1xyXG4gICAgfVxyXG4gICAgaGlkZUNvbGxhcHNlKHZpcnR1YWxJbnB1dCl7XHJcbiAgICAgICAgdmlydHVhbElucHV0LmZpbmQoJ1tkYXRhLWlucHV0LWNvbGxhcHNlXScpLmNvbGxhcHNlKCdoaWRlJyk7XHJcbiAgICB9XHJcbiAgICBjaGVjayhldmVudCkge1xyXG4gICAgICAgIGxldCBpdGVtID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBsZXQgaGFzRHJvcGRvd24gID0gaXRlbS5kYXRhKCd2aXJ0dWFsLWlucHV0JykgPT0gJ2Ryb3Bkb3duJyA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYoIWhhc0Ryb3Bkb3duKXtcclxuICAgICAgICAgICAgaWYoIWl0ZW0uaGFzQ2xhc3MoJ2Rpc2FibGVkJykgJiYgISQoZXZlbnQudGFyZ2V0KS5pcygnYScpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmZpbmQoJ2lucHV0JykuZmlyc3QoKS5pQ2hlY2soJ2NoZWNrJyk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25DaGVjayhldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICB9XHJcbiAgICB1bkNoZWNrKGV2ZW50KXtcclxuXHJcbiAgICB9XHJcbiAgICB1cGRhdGVJbnB1dFZhbHVlcyhpdGVtLCBzZWxlY3RJdGVtLCB2YWx1ZSwgcHJvcGVydGllcywgZXZlbnQpe1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGlucHV0ID0gaXRlbS5maW5kKCdpbnB1dCcpO1xyXG5cclxuICAgICAgICBpZihldmVudC50eXBlID09ICdjbGljaycpe1xyXG4gICAgICAgICAgICAkKGl0ZW0pLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdJykuZmlyc3QoKS5kcm9wZG93bigndG9nZ2xlJyk7XHJcbiAgICAgICAgICAgIGlucHV0LmlDaGVjaygnY2hlY2snKTtcclxuICAgICAgICAgICAgaW5wdXQudmFsKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbS5maW5kKCdbZGF0YS1uYW1lXScpLnRleHQocHJvcGVydGllcy5uYW1lKTtcclxuICAgICAgICBpdGVtLmZpbmQoJ1tkYXRhLXByaWNlXScpLnRleHQocHJvcGVydGllcy5wcmljZSk7XHJcbiAgICAgICAgdGhpcy5vbkNoZWNrKGV2ZW50KTtcclxuXHJcbiAgICB9XHJcbiAgICBoYW5kbGVTZWxlY3RJdGVtQ2xpY2soZXZlbnQpe1xyXG5cclxuICAgICAgICBsZXQgc2VsZWN0SXRlbSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBzZWxlY3RJdGVtLmNsb3Nlc3QoJ1tkYXRhLXZpcnR1YWwtaW5wdXRdJyk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gc2VsZWN0SXRlbS5kYXRhKCd2YWx1ZScpO1xyXG4gICAgICAgIGxldCBwcm9wZXJ0aWVzID0gJChzZWxlY3RJdGVtKS5kYXRhKCdwcm9wZXJ0aWVzJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaXRlbS5maW5kKCdbZGF0YS1kcm9wZG93bi1tZW51XSBbZGF0YS12YWx1ZV0nKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgc2VsZWN0SXRlbS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dFZhbHVlcyhpdGVtLCBzZWxlY3RJdGVtLCB2YWx1ZSwgcHJvcGVydGllcywgZXZlbnQpO1xyXG5cclxuICAgIH1cclxuICAgIG9uQ2hlY2soZXZlbnQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBpdGVtID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS12aXJ0dWFsLWlucHV0XScpO1xyXG5cclxuICAgICAgICBpdGVtLmZpbmQoJ1tkYXRhLW9uLXVuY2hlY2tlZF0nKS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgaXRlbS5maW5kKCdbZGF0YS1vbi1jaGVja2VkXScpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuXHJcbiAgICB9XHJcbiAgICBvblVuY2hlY2soZXZlbnQpe1xyXG5cclxuICAgICAgICBsZXQgaXRlbSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdCgnW2RhdGEtdmlydHVhbC1pbnB1dF0nKTtcclxuICAgICAgICBpdGVtLmZpbmQoJ1tkYXRhLW9uLXVuY2hlY2tlZF0nKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgaXRlbS5maW5kKCdbZGF0YS1vbi1jaGVja2VkXScpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuICAgICAgICBpdGVtLmZpbmQoJ1tkYXRhLWRyb3Bkb3duLW1lbnVdIFtkYXRhLXZhbHVlXScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICB9XHJcbiAgICBcclxufTtcclxuZXhwb3J0IGNsYXNzIG51bWJlcklucHV0e1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKXtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9ICQoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuY29udGFpbmVyLmZpbmQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy5pbmNCdG4gPSAgdGhpcy5jb250YWluZXIuZmluZChcIltkYXRhLWlucHV0LW51bWJlci1pbmNdXCIpO1xyXG4gICAgICAgIHRoaXMuZGVjQnRuID0gIHRoaXMuY29udGFpbmVyLmZpbmQoXCJbZGF0YS1pbnB1dC1udW1iZXItZGVjXVwiKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUJ0biA9IHRoaXMuY29udGFpbmVyLmZpbmQoXCJbZGF0YS1pbnB1dC1udW1iZXItdXBkYXRlXVwiKTtcclxuICAgICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5pbnB1dC5hdHRyKCdtaW4nKTtcclxuICAgICAgICB0aGlzLm1heFZhbHVlID0gdGhpcy5pbnB1dC5hdHRyKCdtYXgnKTtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAgdGhpcy5pbnB1dC52YWwoKTtcclxuICAgICAgICB0aGlzLnByaWNlID0gdGhpcy5jb250YWluZXIuZmluZChcIltkYXRhLWlucHV0LW51bWJlci1wcmljZV1cIik7XHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBiaW5kRXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5pbmNCdG4ub24oJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgdGhpcy5pbmNyZW1lbnQoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuZGVjQnRuLm9uKCdjbGljaycsICgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmlucHV0Lm9uKCdjaGFuZ2UnLCAoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgaGFuZGxlSW5wdXRDaGFuZ2UoKXtcclxuXHJcbiAgICB9XHJcbiAgICBpbmNyZW1lbnQoKXtcclxuICAgICAgICBsZXQgc2hvd0J1dHRvbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlKys7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFZhbHVlID49IHRoaXMubWF4VmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLm1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVJbnB1dChzaG93QnV0dG9uKTtcclxuICAgIH1cclxuICAgIGRlY3JlbWVudCgpe1xyXG4gICAgICAgIGxldCBzaG93QnV0dG9uID0gdHJ1ZTtcclxuICAgICAgICBpZih0aGlzLmlucHV0VmFsdWUgPD0gdGhpcy5taW5WYWx1ZSl7XHJcbiAgICAgICAgICAgIHNob3dCdXR0b24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlLS07XHJcbiAgICAgICAgaWYodGhpcy5pbnB1dFZhbHVlIDw9IHRoaXMubWluVmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLm1pblZhbHVlOyAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlSW5wdXQoc2hvd0J1dHRvbik7XHJcbiAgICB9XHJcbiAgICB1cGRhdGVJbnB1dChzaG93QnV0dG9uKVxyXG4gICAge1xyXG4gICAgICAgIGlmKHNob3dCdXR0b24gPT09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUJ0bi5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQnRuLnBhcmVudCgpLmFkZENsYXNzKCdpdGVtLXByaWNlLWNoYW5nZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5wcmljZS5hZGRDbGFzcygnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsKHRoaXMuaW5wdXRWYWx1ZSkucGFyZW50KCkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbCh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn07XHJcblxyXG5cclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gbmF2YmFyIHRvZ2dsZVxyXG4gICAgJCgnI2hlYWRlciAubmF2YmFyLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS50b2dnbGVDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcubWVudS1vcGVuIC5hcHAtbWFpbicsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnbWVudS1vcGVuJyk7XHJcbiAgICB9KTtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51LW9wZW4nKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgalF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4gICAgICAgIGVucXVpcmUucmVnaXN0ZXIoXCJzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpXCIsIHtcclxuICAgICAgICAgICAgbWF0Y2g6IGZ1bmN0aW9uKCkgeyAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5sYWdvbS1sYXlvdXQtbGVmdCAubmF2YmFyLW1haW4gLm5hdmJhci1uYXYnKS5zdXBlcmZpc2goKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdW5tYXRjaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoJy5sYWdvbS1sYXlvdXQtbGVmdCAubmF2YmFyLW1haW4gLm5hdmJhci1uYXYnKS5zdXBlcmZpc2goJ2Rlc3Ryb3knKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHR9KTtcclxuXHJcblxyXG5cclxuICAgIGlmICgkKCcjc3RpY2t5LXNpZGViYXInKS5sZW5ndGgpIHtcclxuICAgICAgICAkKCcjc3RpY2t5LXNpZGViYXInKS5zdGlja3lTaWRlYmFyKHtcclxuICAgICAgICAgICAgdG9wU3BhY2luZzogMzIsXHJcbiAgICAgICAgICAgIGJvdHRvbVNwYWNpbmc6IDMyXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuZHJvcGRvd24tbWVudScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoXCJhXCIgIT0gZS50YXJnZXQudGFnTmFtZSAmJiBcIkFcIiAhPSBlLnRhcmdldC50YWdOYW1lKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmRvbWFpbi1leHRlbnNpb25zIC5kcm9wZG93bi1tZW51JywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYWRkb24tcHJvbW8tY29udGFpbmVyID4gLnJhZGlvLWlubGluZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrVmFsdWUgPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQnKS52YWwoKTtcclxuICAgICAgICBpZiAoY2hlY2tWYWx1ZSAhPSBcIm9uXCIgJiYgY2hlY2tWYWx1ZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5hZGRvbi1wcm9tby1jb250YWluZXInKS5hZGRDbGFzcygnaXMtc2VsZWN0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcuYWRkb24tcHJvbW8tY29udGFpbmVyID4gLnJhZGlvLWlubGluZScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPXJhZGlvXScpLm9uKCdpZkNoZWNrZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSA9PSBcIm9uXCIpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuYWRkb24tcHJvbW8tY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmFkZG9uLXByb21vLWNvbnRhaW5lcicpLmFkZENsYXNzKCdpcy1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgXHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmFkZC1leHRyYS1hdHRhY2hlbWVudCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBub2ZpbGV0ZXh0ID0gJCh0aGlzKS5kYXRhKCdub2ZpbGV0ZXh0JyksXHJcbiAgICAgICAgICAgIHNlbGVjdGZpbGV0ZXh0ID0gJCh0aGlzKS5kYXRhKCdzZWxlY3RmaWxldGV4dCcpLFxyXG4gICAgICAgICAgICByZW1vdmV0ZXh0ID0gJCh0aGlzKS5kYXRhKCdzZWxlY3RmaWxldGV4dCcpO1xyXG5cclxuICAgICAgICAkKFwiI2ZpbGVVcGxvYWRzQ29udGFpbmVyXCIpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImZpbGUtaW5wdXQgZm9ybS1jb250cm9sXCI+PGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImF0dGFjaG1lbnRzW11cIj48c3BhbiBjbGFzcz1cImZpbGUtaW5wdXQtYnV0dG9uIGJ0biBidG4tZGVmYXVsdFwiPicrc2VsZWN0ZmlsZXRleHQrJzwvc3Bhbj48c3BhbiBjbGFzcz1cImZpbGUtaW5wdXQtdGV4dCB0ZXh0LWxpZ2h0XCI+Jytub2ZpbGV0ZXh0Kyc8L3NwYW4+PGJ1dHRvbiBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIicrcmVtb3ZldGV4dCsnXCIgY2xhc3M9XCJidG4gYnRuLWljb24gZmlsZS1pbnB1dC1yZW1vdmVcIj48aSBjbGFzcz1cImxzIGxzLXRyYXNoXCI+PC9pPjwvYnV0dG9uPjwvZGl2PicpO1xyXG4gICAgICAgICQoJ1tkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIl0nKS50b29sdGlwKCk7XHJcbiAgICB9KTtcclxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmZpbGUtaW5wdXQgaW5wdXRbdHlwZT1maWxlXScsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzdHJpbmcgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBzdHJpbmcuc3Vic3RyaW5nKHN0cmluZy5sYXN0SW5kZXhPZihcIlxcXFxcIikgKyAxKTtcclxuICAgICAgICBpZiAocmVzdWx0ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuZmlsZS1pbnB1dC10ZXh0JykudGV4dCgnTm8gZmlsZSBzZWxlY3RlZCcpLmFkZENsYXNzKCd0ZXh0LWxpZ2h0Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuZmlsZS1pbnB1dC10ZXh0JykudGV4dChyZXN1bHQpLnJlbW92ZUNsYXNzKCd0ZXh0LWxpZ2h0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZpbGUtaW5wdXQtcmVtb3ZlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZmlsZS1pbnB1dCcpLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgICQoJy5zZWFyY2gtZ3JvdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKHRoaXMpLmZpbmQoJy5mb3JtLWNvbnRyb2wnKS5mb2N1cygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnLnBhbmVsLWFjY29yZGlvbicpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcucGFuZWwtYWNjb3JkaW9uJykub24oJ2hpZGUuYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBcclxuICAgICQoJyNuYXYtbGFuZGluZy1wYWdlLCAjbmF2LXNzbCcpLm9uKCdzaG93LmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5tYWluLXN1Ym5hdicpLmFkZENsYXNzKCdpcy1vcGVuJyk7XHJcbiAgICB9KVxyXG4gICAgJCgnI25hdi1sYW5kaW5nLXBhZ2UsICNuYXYtc3NsJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcubWFpbi1zdWJuYXYnKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvLyBzdG9yZSBhbmltYXRpb25cclxuICAgICQoJ1tkYXRhLXN0b3JlLWxpbmVzLWFuaW1hdGlvbl0gcGF0aCwgW2RhdGEtYmFubmVyLWxpbmVzLWFuaW1hdGlvbl0gcGF0aCcpLmVhY2goKGluZGV4LCBpdGVtKT0+e1xyXG5cclxuICAgICAgICBjb25zdCBwYXRoID0gJChpdGVtKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuXHJcbiAgICAgICAgICAgIHBhdGguY3NzKHtcclxuICAgICAgICAgICAgICAgICdzdHJva2UtZGFzaG9mZnNldCc6IDAsXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH0sMjAwKVxyXG4gICAgfSk7XHJcbn1cclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG5cclxuICAgIHZhciBwYW5lbFN3aXRjaCA9ICQoJy5wYW5lbC1zd2l0Y2gnKTtcclxuICAgIFxyXG4gICAgcGFuZWxTd2l0Y2gub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmICghJCh0aGlzKS5pcygnYScpKSB7XHJcbiAgICAgICAgICAgIHZhciBjdXJyQ2hlY2sgPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG4gICAgICAgICAgICBpZiAoY3VyckNoZWNrLmlzKCc6Y2hlY2tlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbFN3aXRjaC5yZW1vdmVDbGFzcygnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgY3VyckNoZWNrLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYW5lbFN3aXRjaC5hZGRDbGFzcygnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgY3VyckNoZWNrLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgIFxyXG4gICAgICAgICAgICAgICAgdGhhdC5maW5kKCcubG9hZGVyJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTsgXHJcbiAgICAgICAgICAgIH0sIDMwMCk7ICBcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSIsImltcG9ydCBNYXNvbnJ5IGZyb20gJ21hc29ucnktbGF5b3V0JztcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgbGV0IHBhbmVsc0dyaWQgPSAkKCdbZGF0YS1wYW5lbHMtZ3JpZF0nKVswXTtcclxuXHJcbiAgICBpZihwYW5lbHNHcmlkKXtcclxuICAgICAgICB2YXIgbXNucnkgPSBuZXcgTWFzb25yeShwYW5lbHNHcmlkLCB7XHJcbiAgICAgICAgICAgIGl0ZW1TZWxlY3RvcjogJ1tkYXRhLXBhbmVscy1ncmlkLWl0ZW1dJyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiAwXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59IiwiLyoqXHJcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIE5hbWU6IFJhbmdlU2xpZGVyKGxheWVyc1VJKVxyXG4gKiBWZXJzaW9uOiBBbHBoYVxyXG4gKiBMaWNlbnNlOiAtXHJcbiAqIFdlYnNpdGU6IGh0dHA6Ly9sYXllcnN1aS5jb21cclxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICovXHJcbmltcG9ydCBub1VpU2xpZGVyIGZyb20gJ25vdWlzbGlkZXInO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XHJcbmNvbnN0IFNFTEVDVE9SUyA9IHtcclxuICAgIGNvbnRhaW5lcjogJ1tkYXRhLXJhbmdlLWNvbnRhaW5lcl0nLFxyXG4gICAgcmFuZ2VTbGlkZXI6ICdbZGF0YS1yYW5nZS1zbGlkZXJdJyxcclxuICAgIHJhbmdlSW5wdXQ6ICdbZGF0YS1yYW5nZS1pbnB1dF0nLFxyXG4gICAgaW5jQnRuOiAnW2RhdGEtcmFuZ2UtaW5jXScsXHJcbiAgICBkZWNCdG46ICdbZGF0YS1yYW5nZS1kZWNdJyxcclxuICAgIHByaWNlOiAnW2RhdGEtcmFuZ2UtcHJpY2VdJyxcclxuICAgIHNlbGVjdGVkT3B0aW9uOiAnW2RhdGEtc2VsZWN0ZWQtb3B0aW9uXScsXHJcbiAgICB2aWV3VmFsdWU6ICdbZGF0YS1yYW5nZS12aWV3XScsXHJcbn07XHJcbmNvbnN0IERlZmF1bHQgPSB7XHJcbiAgICBjb25uZWN0OiBbdHJ1ZSwgZmFsc2VdLFxyXG4gICAgYmVoYXZpb3VyOiAndGFwJyxcclxuICAgIHNuYXA6IGZhbHNlLFxyXG4gICAgcmFuZ2U6IHt9LFxyXG4gICAgc3RlcDogMSxcclxuICAgIHN0YXJ0VmFsdWU6IDAsXHJcbiAgICBtaW5WYWx1ZTogbnVsbCxcclxuICAgIG1heFZhbHVlOiBudWxsLFxyXG4gICAgcHJpY2VQZXJPbmU6IDIsXHJcbn07XHJcblxyXG5jb25zdCBwaXBzRGVmYXVsdCA9IHtcclxuICAgIG1vZGU6ICdzdGVwcycsXHJcbiAgICBzdGVwcGVkOiB0cnVlLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZ2VTbGlkZXIge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCBvcHRpb25zKSB7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMucmFuZ2VTbGlkZXIgPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5yYW5nZVNsaWRlcik7XHJcbiAgICAgICAgdGhpcy5yYW5nZUlucHV0ID0gdGhpcy5jb250YWluZXIuZmluZChTRUxFQ1RPUlMucmFuZ2VJbnB1dCk7XHJcbiAgICAgICAgdGhpcy5kZWNCdG4gPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5kZWNCdG4pO1xyXG4gICAgICAgIHRoaXMuaW5jQnRuID0gdGhpcy5jb250YWluZXIuZmluZChTRUxFQ1RPUlMuaW5jQnRuKTtcclxuICAgICAgICB0aGlzLnByaWNlID0gdGhpcy5jb250YWluZXIuZmluZChTRUxFQ1RPUlMucHJpY2UpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24gPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy5zZWxlY3RlZE9wdGlvbik7XHJcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSB0aGlzLmNvbnRhaW5lci5maW5kKFNFTEVDVE9SUy52aWV3VmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLmdldENvbmZpZygpO1xyXG4gICAgICAgIHRoaXMuZ2V0UGlwc0NvbmZpZygpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBsdWdpbigpO1xyXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gICAgfVxyXG4gICAgYmluZEV2ZW50cygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kZWNCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5zZXQodGhpcy5zbGlkZXIuZ2V0KCkgLSB0aGlzLmNvbmZpZy5zdGVwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5pbmNCdG4ub24oJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5zZXQodGhpcy5zbGlkZXIuZ2V0KCkgKyB0aGlzLmNvbmZpZy5zdGVwKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMucmFuZ2VJbnB1dC5vbignY2hhbmdlIGJsdXInLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuc2V0KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0Q29uZmlnKCkge1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFDb25maWcgPSB0aGlzLmNvbnRhaW5lci5kYXRhKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YUNvbmZpZy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSB1dGlscy5wYXJzZURhdGFPcHRpb25zKHRoaXMuZGF0YUNvbmZpZy5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFPcHRpb25zID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIERlZmF1bHQsIHRoaXMuZGF0YUNvbmZpZywgdGhpcy5kYXRhT3B0aW9ucyk7XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0UGlwc0NvbmZpZygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhUGlwcyA9IHRoaXMuY29udGFpbmVyLmRhdGEoJ3BpcHMtb3B0aW9ucycpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhUGlwcykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhUGlwc09wdGlvbnMgPSB1dGlscy5wYXJzZURhdGFPcHRpb25zKHRoaXMuZGF0YVBpcHMpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhUGlwc09wdGlvbnMgPSB7fTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGlwc0NvbmZpZyA9ICQuZXh0ZW5kKHt9LCBwaXBzRGVmYXVsdCwgdGhpcy5kYXRhUGlwc09wdGlvbnMpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgc2V0UmFuZ2UoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yYW5nZSA9IHt9O1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5taW5WYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZ2VbJ21pbiddID0gdGhpcy5jb25maWcubWluVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcubWF4VmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmdlWydtYXgnXSA9IHRoaXMuY29uZmlnLm1heFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YUNvbmZpZy52YWx1ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21WYWx1ZXMgPSB7fTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZGF0YUNvbmZpZy52YWx1ZXM7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDE7XHJcblxyXG4gICAgICAgICAgICB2YWx1ZXMubWFwKChpdGVtLCBpbmRleCwgYXJyYXkpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmdlWydtaW4nXSA9IGNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gYXJyYXkubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmdlWydtYXgnXSA9IHRoaXMuZGF0YUNvbmZpZy52YWx1ZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1c3RvbVZhbHVlc1tjb3VudF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpdGVtLm9wdGlvbklEXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGNvdW50Kys7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VzdG9tVGlwcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFN0YXJ0VmFsdWUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJhbmdlSW5wdXQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRoaXMucmFuZ2VJbnB1dC5maXJzdCgpLnZhbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRWYWx1ZSA9IHRoaXMuY29uZmlnLnN0YXJ0VmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGlzUGFnZVJUTCgpIHtcclxuICAgICAgICByZXR1cm4gJCgnaHRtbCcpLmF0dHIoJ2RpcicpID09ICdydGwnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaW5pdFBsdWdpbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGFydFZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5zZXRSYW5nZSgpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zbGlkZXIgPSBub1VpU2xpZGVyLmNyZWF0ZSh0aGlzLnJhbmdlU2xpZGVyWzBdLCB7XHJcbiAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0VmFsdWUsXHJcbiAgICAgICAgICAgIHN0ZXA6IHRoaXMuY29uZmlnLnN0ZXAsXHJcbiAgICAgICAgICAgIHNuYXA6IHRoaXMuY29uZmlnLnNuYXAsXHJcbiAgICAgICAgICAgIGNvbm5lY3Q6IHRoaXMuY29uZmlnLmNvbm5lY3QsXHJcbiAgICAgICAgICAgIHJhbmdlOiB0aGlzLnJhbmdlLFxyXG4gICAgICAgICAgICBiZWhhdmlvdXI6IHRoaXMuY29uZmlnLmJlaGF2aW91cixcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLmlzUGFnZVJUTCgpID8gJ3J0bCcgOiAnbHRyJyxcclxuICAgICAgICAgICAgZm9ybWF0OiB7XHJcbiAgICAgICAgICAgICAgICB0bzogZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmcm9tOiBmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGlwczogdGhpcy5waXBzQ29uZmlnLFxyXG4gICAgICAgICAgICAnY3NzUHJlZml4JzogJ3JhbmdlLXNsaWRlcicsXHJcbiAgICAgICAgICAgICdjc3NDbGFzc2VzJzoge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiAnJyxcclxuICAgICAgICAgICAgICAgIGJhc2U6ICctYmFzZScsXHJcbiAgICAgICAgICAgICAgICBvcmlnaW46ICctb3JpZ2luJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZTogJy1oYW5kbGUnLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlTG93ZXI6ICctaGFuZGxlLWxvd2VyJyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZVVwcGVyOiAnLWhhbmRsZS11cHBlcicsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnLWhvcml6b250YWwnLFxyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICctdmVydGljYWwnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJy1iYWNrZ3JvdW5kJyxcclxuICAgICAgICAgICAgICAgIGNvbm5lY3RzOiBcIi1jb25uZWN0c1wiLFxyXG4gICAgICAgICAgICAgICAgY29ubmVjdDogJy1jb25uZWN0JyxcclxuICAgICAgICAgICAgICAgIGx0cjogJy1sdHInLFxyXG4gICAgICAgICAgICAgICAgcnRsOiAnLXJ0bCcsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6ICctZHJhZ2dhYmxlJyxcclxuICAgICAgICAgICAgICAgIGRyYWc6ICctc3RhdGUtZHJhZycsXHJcbiAgICAgICAgICAgICAgICB0YXA6ICctc3RhdGUtdGFwJyxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogJ2lzLWFjdGl2ZScsXHJcbiAgICAgICAgICAgICAgICB0b29sdGlwOiAnLXRvb2x0aXAnLFxyXG4gICAgICAgICAgICAgICAgcGlwczogJy1waXBzJyxcclxuICAgICAgICAgICAgICAgIHBpcHNIb3Jpem9udGFsOiAnLXBpcHMtaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgICAgICBwaXBzVmVydGljYWw6ICctcGlwcy12ZXJ0aWNhbCcsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXI6ICctbWFya2VyJyxcclxuICAgICAgICAgICAgICAgIG1hcmtlckhvcml6b250YWw6ICctbWFya2VyLWhvcml6b250YWwnLFxyXG4gICAgICAgICAgICAgICAgbWFya2VyVmVydGljYWw6ICctbWFya2VyLXZlcnRpY2FsJyxcclxuICAgICAgICAgICAgICAgIG1hcmtlck5vcm1hbDogJy1tYXJrZXItbm9ybWFsJyxcclxuICAgICAgICAgICAgICAgIG1hcmtlckxhcmdlOiAnLW1hcmtlci1sYXJnZScsXHJcbiAgICAgICAgICAgICAgICBtYXJrZXJTdWI6ICctbWFya2VyLXN1YicsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJy12YWx1ZScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUhvcml6b250YWw6ICctdmFsdWUtaG9yaXpvbnRhbCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVZlcnRpY2FsOiAnLXZhbHVlLXZlcnRpY2FsJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlTm9ybWFsOiAnLXZhbHVlLW5vcm1hbCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZUxhcmdlOiAnLXZhbHVlLWxhcmdlJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlU3ViOiAnLXZhbHVlLXN1YidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXJQaXBzQ29udGFpbmVyID0gJCh0aGlzLnJhbmdlU2xpZGVyWzBdLnF1ZXJ5U2VsZWN0b3IoJy5yYW5nZS1zbGlkZXItcGlwcycpKTtcclxuICAgICAgICB0aGlzLnNsaWRlclBpcHMgPSAgdGhpcy5zbGlkZXJQaXBzQ29udGFpbmVyLmZpbmQoJ1tkYXRhLXZhbHVlXScpO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlclBpcHMub24oJ2NsaWNrJywgKGV2ZW50KT0+e1xyXG5cclxuICAgICAgICAgICAgbGV0IHBpcCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgIGxldCBwaXBWYWx1ZSA9IHBpcC5kYXRhKCd2YWx1ZScpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuc2V0KHBpcFZhbHVlKTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNsaWRlckV2ZW50cygpO1xyXG5cclxuICAgIH1cclxuICAgIGhhbmRsZVNsaWRlckV2ZW50cygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zbGlkZXIub24oJ3VwZGF0ZScsICh2YWx1ZXMsIGhhbmRsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcmljZSh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Vmlld1ZhbHVlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVQaXAodmFsdWVzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1c3RvbVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VBY3RpdmVTbGlkZUlEKHRoaXMuY3VzdG9tVmFsdWVzW3ZhbHVlc10uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xpZGVyLm9uKCdzbGlkZScsICh2YWx1ZXMsIGhhbmRsZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2xpZGUodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaWNlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaWV3VmFsdWUodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlci5vbignY2hhbmdlJywgKHZhbHVlcywgaGFuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaWNlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaWV3VmFsdWUodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNsaWRlci5vbignc2V0JywgKHZhbHVlcywgaGFuZGxlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25TZXQodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaWNlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaWV3VmFsdWUodmFsdWVzLCBoYW5kbGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIGNoYW5nZUFjdGl2ZVBpcCh2YWx1ZXMpIHtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlID0gdmFsdWVzWzBdO1xyXG4gICAgICAgIGxldCBwaXAgPSB0aGlzLnNsaWRlclBpcHNDb250YWluZXIuZmluZCgnW2RhdGEtdmFsdWU9XCInICsgdmFsdWUgKyAnXCJdJyk7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJQaXBzQ29udGFpbmVyLmZpbmQoJy5pcy1hY3RpdmUnKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgcGlwLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRDdXN0b21UaXBzKCl7XHJcblxyXG4gICAgICAgIHRoaXMucGlwc0NvbmZpZy5mb3JtYXQgPSB7XHJcblxyXG4gICAgICAgICAgICB0bzogKHZhbHVlKSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuY3VzdG9tVmFsdWVzW3ZhbHVlXS5uYW1lO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmcm9tOiBOdW1iZXJcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIGNoYW5nZUFjdGl2ZVNsaWRlSUQoaWQpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb24udmFsKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNsaWRlKHZhbHVlcywgaGFuZGxlKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUFjdGl2ZVNsaWRlSUQodGhpcy5jdXN0b21WYWx1ZXNbdmFsdWVzXS5pZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJhbmdlSW5wdXQudmFsKHZhbHVlc1swXS50b0ZpeGVkKDApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWcub25TbGlkZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vblNsaWRlKHZhbHVlcywgaGFuZGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25DaGFuZ2UodmFsdWVzLCBoYW5kbGUpIHtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vbkNoYW5nZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vbkNoYW5nZSh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TZXQodmFsdWVzLCBoYW5kbGUpIHtcclxuXHJcbiAgICAgICAgdGhpcy5yYW5nZUlucHV0LnZhbCh2YWx1ZXNbMF0pLnRyaWdnZXIoJ2tleXVwJyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuY3VzdG9tVmFsdWVzKXtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9wdGlvbi50cmlnZ2VyKCdrZXl1cCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vblNldCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vblNldCh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG9uVXBkYXRlKHZhbHVlcywgaGFuZGxlKSB7XHJcblxyXG4gICAgXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbmZpZy5vblVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5vblVwZGF0ZSh2YWx1ZXMsIGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHNldFByaWNlKHZhbHVlcywgaGFuZGxlKSB7XHJcbiAgIFxyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVZhbHVlcykge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmljZS50ZXh0KHRoaXMuY3VzdG9tVmFsdWVzW3ZhbHVlc10ucHJpY2UpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wcmljZS50ZXh0KChwYXJzZUZsb2F0KHRoaXMuY29uZmlnLnByaWNlUGVyT25lKSAqIHBhcnNlRmxvYXQodGhpcy5yYW5nZUlucHV0LnZhbCgpKSkudG9GaXhlZCgyKSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldFZpZXdWYWx1ZSh2YWx1ZXMsIGhhbmRsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbVZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXdWYWx1ZS50ZXh0KHRoaXMuY3VzdG9tVmFsdWVzW3ZhbHVlc10ubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMudmlld1ZhbHVlLnRleHQodGhpcy5yYW5nZUlucHV0LnZhbCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFN3aXBlciBmcm9tICdzd2lwZXIvZGlzdC9qcy9zd2lwZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzbGlkZXIpIHtcbiAgICAgICAgdGhpcy5zbGlkZXIgPSAkKHNsaWRlcik7XG4gICAgICAgIHRoaXMuc2xpZGVyQ29uZmlnID0ge307XG4gICAgICAgIHRoaXMuY2FjaGVET00oKTtcbiAgICB9XG4gICAgY2FjaGVET00oKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gdGhpcy5zbGlkZXIuZmluZChcIltkYXRhLXNsaWRlci1jb250YWluZXJdXCIpO1xuICAgICAgICB0aGlzLndyYXBwZXIgPSB0aGlzLnNsaWRlci5maW5kKFwiW2RhdGEtc2xpZGVyLXdyYXBwZXJdXCIpO1xuICAgICAgICB0aGlzLnBhZ2luYXRpb24gPSB0aGlzLnNsaWRlci5maW5kKFwiW2RhdGEtc2xpZGVyLXBhZ2luYXRpb25dXCIpO1xuXG4gICAgICAgIHRoaXMubmV4dFNsaWRlID0gdGhpcy5zbGlkZXIuZmluZChcIltkYXRhLW5leHQtc2xpZGVdXCIpO1xuICAgICAgICB0aGlzLnByZXZTbGlkZSA9IHRoaXMuc2xpZGVyLmZpbmQoXCJbZGF0YS1wcmV2LXNsaWRlXVwiKTtcbiAgICB9XG4gICAgc2V0U2xpZGVyQ29uZmlnKGNvbmZpZykge1xuICAgICAgICB0aGlzLnNsaWRlckNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2VudGVyZWRTbGlkZXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgICAgICAgICAgc3BhY2VCZXR3ZWVuOiAwLFxuICAgICAgICAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICAgICAgICAgICBoaWRlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBlbDogdGhpcy5wYWdpbmF0aW9uWzBdLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImJ1bGxldHNcIixcbiAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJDbGFzczogXCJjb250ZW50LXNsaWRlci1wYWdpbmF0aW9uLVwiLFxuICAgICAgICAgICAgICAgICAgICBidWxsZXRDbGFzczogXCJjb250ZW50LXNsaWRlci1wYWdpbmF0aW9uLWJ1bGxldFwiLFxuICAgICAgICAgICAgICAgICAgICBidWxsZXRBY3RpdmVDbGFzczogXCJpcy1hY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRFbDogdGhpcy5uZXh0U2xpZGVbMF0sXG4gICAgICAgICAgICAgICAgICAgIHByZXZFbDogdGhpcy5wcmV2U2xpZGVbMF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGExMXk6IHtcbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHdhdGNoU2xpZGVzVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29udGFpbmVyTW9kaWZpZXJDbGFzczogXCJjb250ZW50LXNsaWRlci1cIixcbiAgICAgICAgICAgICAgICBzbGlkZUNsYXNzOiBcImNvbnRlbnQtc2xpZGVyLWl0ZW1cIixcbiAgICAgICAgICAgICAgICBzbGlkZVByZXZDbGFzczogXCJjb250ZW50LXNsaWRlci1pdGVtLXByZXZcIixcbiAgICAgICAgICAgICAgICBzbGlkZU5leHRDbGFzczogXCJjb250ZW50LXNsaWRlci1pdGVtLW5leHRcIixcbiAgICAgICAgICAgICAgICBzbGlkZVZpc2libGVDbGFzczogXCJjb250ZW50LXNsaWRlci1pdGVtLXZpc2libGVcIixcbiAgICAgICAgICAgICAgICBzbGlkZUFjdGl2ZUNsYXNzOiBcImNvbnRlbnQtc2xpZGVyLWl0ZW0tYWN0aXZlXCIsXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzOiBcImNvbnRlbnQtc2xpZGVyLXdyYXBwZXJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZ1xuICAgICAgICApO1xuICAgIH1cbiAgICBpbml0U2xpZGVyKCkge1xuICAgICAgICB0aGlzLnN3aXBlckluc3RhbmNlID0gbmV3IFN3aXBlcih0aGlzLmNvbnRhaW5lclswXSwgdGhpcy5zbGlkZXJDb25maWcpXG4gICAgfVxuICAgIGRlc3Ryb3lTbGlkZXIoKSB7XG4gICAgICAgIHRoaXMuc3dpcGVySW5zdGFuY2UuZGVzdHJveSh0cnVlLCB0cnVlKVxuICAgIH1cbn1cbiIsImltcG9ydCB0ZXN0aW1vbmlhbHMgZnJvbSBcIi4vdGVzdGltb25pYWxzLmpzXCI7XG5pbXBvcnQgcHJvbW9TbGlkZXIgZnJvbSBcIi4vcHJvbW8tc2xpZGVycy9pbmRleC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGVzdGltb25pYWxzLmluaXQoKVxuICAgICAgICBwcm9tb1NsaWRlci5pbml0KClcbiAgICB9XG59O1xuIiwiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XG5jb25zdCBzbGlkZUxlZnQgPSB7XG4gICAgcmVmczoge30sXG4gICAgYmVmb3JlSW5pdChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5yZWZzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnJlZnNbXCJjb250ZW50XCJdID0gZWxlbWVudC5maW5kKFwiW2RhdGEtYW5pbWF0aW9uLWNvbnRlbnRdXCIpO1xuICAgICAgICB0aGlzLnJlZnNbXCJpY29uc1wiXSA9IGVsZW1lbnQuZmluZChcIltkYXRhLWFuaW1hdGlvbi1pY29uc11cIikuY2hpbGRyZW4oKTtcbiAgICB9LFxuICAgIHNob3dTbGlkZShlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50QW5pbWF0aW9uID0gYW5pbWUoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5yZWZzLmNvbnRlbnRbMF0sXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiBbLTU2LCAwXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMjAsXG4gICAgICAgICAgICBkZWxheTogODAwLFxuICAgICAgICAgICAgZWFzaW5nOiBcImN1YmljQmV6aWVyKDAsMCwwLDEpXCJcbiAgICAgICAgfSkuZmluaXNoZWQ7XG4gICAgICAgIGFuaW1hdGlvbnMucHVzaChjb250ZW50QW5pbWF0aW9uKTtcbiAgICAgICAgbGV0IGljb25EZWxheSA9IDQ4MCArIHRoaXMucmVmcy5pY29ucy5sZW5ndGggKiA4MDtcbiAgICAgICAgZm9yIChsZXQgaWNvbiBvZiBBcnJheS5mcm9tKHRoaXMucmVmcy5pY29ucykpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25BbmltYXRpb24gPSBhbmltZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogaWNvbixcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiBbLTUyLCAwXSxcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVZOiBbLTMwLCAwXSxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMyMCxcbiAgICAgICAgICAgICAgICBkZWxheTogaWNvbkRlbGF5LFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJjdWJpY0JlemllcigwLDAsMCwxKVwiXG4gICAgICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgICAgIGljb25EZWxheSAtPSA4MDtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChpY29uQW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChhbmltYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoaWRlU2xpZGUoKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgY29udGVudEFuaW1hdGlvbiA9IGFuaW1lKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMucmVmcy5jb250ZW50WzBdLFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogWzAsIDU2XSxcbiAgICAgICAgICAgIG9wYWNpdHk6IFsxLCAwXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMjAsXG4gICAgICAgICAgICBkZWxheTogMjQwLFxuICAgICAgICAgICAgZWFzaW5nOiBcImN1YmljQmV6aWVyKDEsMCwxLDEpXCJcbiAgICAgICAgfSkuZmluaXNoZWQ7XG4gICAgICAgIGFuaW1hdGlvbnMucHVzaChjb250ZW50QW5pbWF0aW9uKTtcbiAgICAgICAgbGV0IGljb25EZWxheSA9IHRoaXMucmVmcy5pY29ucy5sZW5ndGggKiA4MDtcbiAgICAgICAgZm9yIChsZXQgaWNvbiBvZiBBcnJheS5mcm9tKHRoaXMucmVmcy5pY29ucykpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25BbmltYXRpb24gPSBhbmltZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogaWNvbixcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVYOiBbMCwgNTJdLFxuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVk6IFswLCAzMF0sXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogWzEsIDBdLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMjAsXG4gICAgICAgICAgICAgICAgZGVsYXk6IGljb25EZWxheSxcbiAgICAgICAgICAgICAgICBlYXNpbmc6IFwiY3ViaWNCZXppZXIoMSwwLDEsMSlcIlxuICAgICAgICAgICAgfSkuZmluaXNoZWQ7XG4gICAgICAgICAgICBhbmltYXRpb25zLnB1c2goaWNvbkFuaW1hdGlvbik7XG4gICAgICAgICAgICBpY29uRGVsYXkgLT0gODA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoYW5pbWF0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5jb25zdCBmYWRlSW4gPSB7XG4gICAgcmVmczoge30sXG4gICAgYmVmb3JlSW5pdChlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5yZWZzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnJlZnNbXCJjb250ZW50XCJdID0gZWxlbWVudC5maW5kKFwiW2RhdGEtYW5pbWF0aW9uLWNvbnRlbnRdXCIpO1xuICAgICAgICB0aGlzLnJlZnNbXCJpY29uc1wiXSA9IGVsZW1lbnQuZmluZChcIltkYXRhLWFuaW1hdGlvbi1pY29uc11cIikuY2hpbGRyZW4oKTtcbiAgICB9LFxuICAgIHNob3dTbGlkZShlbGVtZW50LCBjb25maWcpIHtcbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IFtdO1xuICAgICAgICBjb25zdCBjb250ZW50QW5pbWF0aW9uID0gYW5pbWUoe1xuICAgICAgICAgICAgdGFyZ2V0czogdGhpcy5yZWZzLmNvbnRlbnRbMF0sXG4gICAgICAgICAgICB0cmFuc2xhdGVYOiBbLTU2LCAwXSxcbiAgICAgICAgICAgIG9wYWNpdHk6IFswLCAxXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMjAsXG4gICAgICAgICAgICBkZWxheTogODAwLFxuICAgICAgICAgICAgZWFzaW5nOiBcImN1YmljQmV6aWVyKDAsMCwwLDEpXCJcbiAgICAgICAgfSkuZmluaXNoZWQ7XG4gICAgICAgIGFuaW1hdGlvbnMucHVzaChjb250ZW50QW5pbWF0aW9uKTtcbiAgICAgICAgbGV0IGljb25EZWxheSA9IDQ4MCArIHRoaXMucmVmcy5pY29ucy5sZW5ndGggKiA4MDtcbiAgICAgICAgZm9yIChsZXQgaWNvbiBvZiBBcnJheS5mcm9tKHRoaXMucmVmcy5pY29ucykpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25BbmltYXRpb24gPSBhbmltZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogaWNvbixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMCwgMV0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMyMCxcbiAgICAgICAgICAgICAgICBkZWxheTogaWNvbkRlbGF5LFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJjdWJpY0JlemllcigwLDAsMCwxKVwiXG4gICAgICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgICAgIGljb25EZWxheSAtPSA4MDtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChpY29uQW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChhbmltYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoaWRlU2xpZGUoKSB7XG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbnMgPSBbXTtcbiAgICAgICAgY29uc3QgY29udGVudEFuaW1hdGlvbiA9IGFuaW1lKHtcbiAgICAgICAgICAgIHRhcmdldHM6IHRoaXMucmVmcy5jb250ZW50WzBdLFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogWzAsIDU2XSxcbiAgICAgICAgICAgIG9wYWNpdHk6IFsxLCAwXSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAzMjAsXG4gICAgICAgICAgICBkZWxheTogMjQwLFxuICAgICAgICAgICAgZWFzaW5nOiBcImN1YmljQmV6aWVyKDEsMCwxLDEpXCJcbiAgICAgICAgfSkuZmluaXNoZWQ7XG4gICAgICAgIGFuaW1hdGlvbnMucHVzaChjb250ZW50QW5pbWF0aW9uKTtcbiAgICAgICAgbGV0IGljb25EZWxheSA9IHRoaXMucmVmcy5pY29ucy5sZW5ndGggKiA4MDtcbiAgICAgICAgZm9yIChsZXQgaWNvbiBvZiBBcnJheS5mcm9tKHRoaXMucmVmcy5pY29ucykpIHtcbiAgICAgICAgICAgIGNvbnN0IGljb25BbmltYXRpb24gPSBhbmltZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogaWNvbixcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiBbMSwgMF0sXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDMyMCxcbiAgICAgICAgICAgICAgICBkZWxheTogaWNvbkRlbGF5LFxuICAgICAgICAgICAgICAgIGVhc2luZzogXCJjdWJpY0JlemllcigxLDAsMSwxKVwiXG4gICAgICAgICAgICB9KS5maW5pc2hlZDtcbiAgICAgICAgICAgIGljb25EZWxheSAtPSA4MDtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChpY29uQW5pbWF0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChhbmltYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzbGlkZUxlZnQsXG4gICAgZmFkZUluXG59OyIsImltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9hcnJheS9mcm9tJztcbmltcG9ydCAnY29yZS1qcy9mZWF0dXJlcy9zeW1ib2wvaXRlcmF0b3InO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3Byb21pc2UnO1xuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL29iamVjdC9hc3NpZ24nO1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vLi4vLi4vdXRpbHMuanMnO1xuaW1wb3J0IGNsb25lRGVlcCBmcm9tICdsb2Rhc2gvY2xvbmVEZWVwJztcbmltcG9ydCBhbmltYXRpb25zIGZyb20gJy4vYW5pbWF0aW9ucy5qcydcbmNvbnN0IFNFTEVDVE9SUyA9IHtcbiAgICBzbGlkZXI6ICdbZGF0YS1wcm9tby1zbGlkZXJdJyxcbiAgICB3cmFwcGVyOiAnW2RhdGEtcHJvbW8tc2xpZGVyLXdyYXBwZXJdJyxcbiAgICBwYWdpbmF0aW9uOiAnW2RhdGEtcHJvbW8tc2xpZGVyLXBhZ2luYXRpb25dJyxcbiAgICBwYWdpbmF0aW9uSXRlbTogJ1tkYXRhLXByb21vLXNsaWRlci1wYWdpbmF0aW9uLWl0ZW1dJyxcbiAgICBjbG9zZTogJ1tkYXRhLXByb21vLXNsaWRlLWNsb3NlXScsXG4gICAgYmFja2dyb3VuZDogJ1tkYXRhLXByb21vLXNsaWRlci1iYWNrZ3JvdW5kXSdcbn07XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gICAgZGVmYXVsdEFuaW1hdGlvblR5cGU6ICdzbGlkZUxlZnQnXG59XG5jbGFzcyBQcm9tb1NsaWRlcntcbiAgICBjb25zdHJ1Y3RvcihzbGlkZXIpIHtcbiAgICAgICAgdGhpcy5hbmltYXRpb25zID0gW107XG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVJbmRleCA9IDA7XG4gICAgICAgIHRoaXMucHJldmVudFNsaWRlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucXVlbmVBbmltYXRpb25zID0gW11cblxuICAgICAgICB0aGlzLmNhY2hlRE9NKHNsaWRlcik7XG4gICAgICAgIHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmluaXRTbGlkZXIoKTsgICAgICAgIFxuICAgIH1cbiAgICBnZXRDb25maWcoKSB7XG5cbiAgICAgICAgY29uc3QgZGF0YUNvbmZpZyA9IHRoaXMucmVmcy5zbGlkZXIuZGF0YSgpO1xuXG4gICAgICAgIGlmIChkYXRhQ29uZmlnLm9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSB1dGlsLnBhcnNlRGF0YU9wdGlvbnMoZGF0YUNvbmZpZy5vcHRpb25zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YU9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29uZmlnID0gJC5leHRlbmQoe30sIERlZmF1bHQsIGRhdGFDb25maWcsIHRoaXMuZGF0YU9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XG4gICAgfVxuICAgIGNhY2hlRE9NKHNsaWRlcikge1xuICAgICAgICB0aGlzLnJlZnMgPSB7fTtcbiAgICAgICAgdGhpcy5yZWZzLnNsaWRlciA9ICQoc2xpZGVyKTtcbiAgICAgICAgdGhpcy5yZWZzLndyYXBwZXIgPSB0aGlzLnJlZnMuc2xpZGVyLmZpbmQoU0VMRUNUT1JTLndyYXBwZXIpO1xuICAgICAgICB0aGlzLnJlZnMuc2xpZGVzID0gdGhpcy5yZWZzLndyYXBwZXIuY2hpbGRyZW4oKTtcblxuICAgICAgICB0aGlzLnJlZnMucGFnaW5hdGlvbiA9IHRoaXMucmVmcy5zbGlkZXIuZmluZChTRUxFQ1RPUlMucGFnaW5hdGlvbik7XG4gICAgICAgIHRoaXMucmVmcy5wYWdpbmF0aW9uSXRlbXMgPSB0aGlzLnJlZnMucGFnaW5hdGlvbi5maW5kKFNFTEVDVE9SUy5wYWdpbmF0aW9uSXRlbSlcblxuICAgICAgICB0aGlzLnJlZnMuY2xvc2UgPSB0aGlzLnJlZnMuc2xpZGVyLmZpbmQoU0VMRUNUT1JTLmNsb3NlKTtcbiAgICAgICAgdGhpcy5yZWZzLmJhY2tncm91bmQgPSB0aGlzLnJlZnMuc2xpZGVyLmZpbmQoU0VMRUNUT1JTLmJhY2tncm91bmQpLmNoaWxkcmVuKCk7XG5cbiAgICB9XG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5yZWZzLnBhZ2luYXRpb25JdGVtcy5vbignY2xpY2snLCAgKGV2ZW50KT0+IHRoaXMuaGFuZGxlUGFnaW5hdGlvbkNsaWNrKGV2ZW50KSk7XG4gICAgICAgIHRoaXMucmVmcy5jbG9zZS5vbignY2xpY2snLCAoKT0+IHRoaXMuaGlkZVNsaWRlcigpKTtcblxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsICgpPT57XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKTtcbiAgICAgICAgICAgIH0sIDIwMClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZWZzLnNsaWRlci5vbih7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiAoKT0+IHRoaXMuc3RvcEF1dG9wbGF5KCksXG4gICAgICAgICAgICBtb3VzZWxlYXZlOiAoKT0+IHRoaXMuc3RhcnRBdXRvcGxheSgpLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbigndmlzaWJpbGl0eWNoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYoZG9jdW1lbnQuaGlkZGVuKXtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BBdXRvcGxheSgpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydEF1dG9wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgfVxuICAgIGluaXRTbGlkZXIoKSB7XG4gICAgICAgIHRoaXMuc2V0QW5pbWF0aW9ucygpXG4gICAgICAgIGlmKHRoaXMuYW5pbWF0aW9ucy5sZW5ndGgpe1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlU2xpZGUgPSB0aGlzLnJlZnMucGFnaW5hdGlvbkl0ZW1zLmZpbHRlcignLmFjdGl2ZScpXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUhlaWdodCgpXG4gICAgICAgICAgICBpZihhY3RpdmVTbGlkZS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGFjdGl2ZVNsaWRlSW5kZXggPSB0aGlzLnJlZnMucGFnaW5hdGlvbkl0ZW1zLmluZGV4KGFjdGl2ZVNsaWRlKVxuICAgICAgICAgICAgICAgIHRoaXMuZ29Ub1NsaWRlKGFjdGl2ZVNsaWRlSW5kZXgpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9TbGlkZSgwLCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZighdGhpcy5yZWZzLnNsaWRlci5pcygnOmhvdmVyJykgJiYgIWRvY3VtZW50LmhpZGRlbil7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0QXV0b3BsYXkoKVxuICAgICAgICB9XG4gICAgfVxuICAgIGhpZGVTbGlkZXIoKSB7XG4gICAgICAgIHRoaXMucmVmcy5zbGlkZXIuYWRkQ2xhc3MoJ2hpZGRlbicpXG4gICAgfVxuICAgIGhhbmRsZVBhZ2luYXRpb25DbGljayhldmVudCkge1xuICAgICAgICBjb25zdCBpdGVtID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgaXRlbUluZGV4ID0gdGhpcy5yZWZzLnBhZ2luYXRpb25JdGVtcy5pbmRleChpdGVtKTtcblxuICAgICAgICBpZih0aGlzLnByZXZlbnRTbGlkZUNoYW5nZSl7XG4gICAgICAgICAgICB0aGlzLmFkZEFuaW1hdGlvblRvUXVlbmUoaXRlbUluZGV4KVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZWZzLnBhZ2luYXRpb24uZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgaXRlbS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuZ29Ub1NsaWRlKGl0ZW1JbmRleCk7XG4gICAgfVxuICAgIHByZXZTbGlkZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuYWN0aXZlU2xpZGVJbmRleCAtIDEgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmdvVG9TbGlkZSh0aGlzLnJlZnMuc2xpZGVzLmxlbmd0aCAtIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nb1RvU2xpZGUodGhpcy5hY3RpdmVTbGlkZUluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmV4dFNsaWRlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVNsaWRlSW5kZXggPj0gdGhpcy5yZWZzLnNsaWRlcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aGlzLmdvVG9TbGlkZSgwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ29Ub1NsaWRlKHRoaXMuYWN0aXZlU2xpZGVJbmRleCArIDEpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgZ29Ub1NsaWRlKGluZGV4LCBmaXJzdFNsaWRlID0gZmFsc2UpIHtcblxuICAgICAgICBpZiAodGhpcy5hY3RpdmVTbGlkZUluZGV4ID09IGluZGV4ICYmICFmaXJzdFNsaWRlKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZlbnRTbGlkZUNoYW5nZSA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG9sZEluZGV4ID0gdGhpcy5hY3RpdmVTbGlkZUluZGV4O1xuICAgICAgICB0aGlzLnByZXZlbnRTbGlkZUNoYW5nZSA9IHRydWVcbiAgICAgICAgaWYgKGZpcnN0U2xpZGUpIHtcblxuICAgICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAkKHRoaXMucmVmcy5zbGlkZXNbdGhpcy5hY3RpdmVTbGlkZUluZGV4XSkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW3RoaXMuYWN0aXZlU2xpZGVJbmRleF0uc2hvd1NsaWRlKCkudGhlbigoKT0+e1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5xdWVuZUFuaW1hdGlvbnMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5xdWVuZUFuaW1hdGlvbnMucG9wKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1RvU2xpZGUoaW5kZXgpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmVudFNsaWRlQ2hhbmdlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy51cGRhdGVQYWdpbmF0aW9uU3RhdHVzKDAsIDApO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGFnaW5hdGlvblN0YXR1cyhpbmRleCwgb2xkSW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVTbGlkZUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbnNbb2xkSW5kZXhdLmhpZGVTbGlkZSgpLnRoZW4oKCk9Pnt9KVxuICAgICAgICAgICAgJCh0aGlzLnJlZnMuc2xpZGVzW29sZEluZGV4XSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzLnJlZnMuc2xpZGVzW3RoaXMuYWN0aXZlU2xpZGVJbmRleF0pLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zW2luZGV4XS5zaG93U2xpZGUoKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYodGhpcy5xdWVuZUFuaW1hdGlvbnMubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5xdWVuZUFuaW1hdGlvbnMucG9wKClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1RvU2xpZGUoaW5kZXgpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmVudFNsaWRlQ2hhbmdlID0gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVIZWlnaHQoKVxuICAgICAgICB0aGlzLnNldEJhY2tncm91bmQoKVxuICAgIH1cbiAgICBzZXRBbmltYXRpb25zKCkge1xuICAgICAgICBmb3IgKGxldCBzbGlkZSBvZiBBcnJheS5mcm9tKHRoaXMucmVmcy5zbGlkZXMpKSB7XG5cbiAgICAgICAgICAgIGxldCBhbmltYXRpb25UeXBlID0gJChzbGlkZSkuZGF0YSgnYW5pbWF0aW9uLXR5cGUnKTtcblxuICAgICAgICAgICAgaWYgKGFuaW1hdGlvblR5cGUpIHtcblxuICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSBjbG9uZURlZXAoYW5pbWF0aW9uc1thbmltYXRpb25UeXBlXSk7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmJlZm9yZUluaXQoJChzbGlkZSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9ucy5wdXNoKGFuaW1hdGlvbik7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gY2xvbmVEZWVwKGFuaW1hdGlvbnNbdGhpcy5jb25maWcuZGVmYXVsdEFuaW1hdGlvblR5cGVdKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uYmVmb3JlSW5pdCgkKHNsaWRlKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hbmltYXRpb25zLnB1c2goYW5pbWF0aW9uKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZVBhZ2luYXRpb25TdGF0dXMoaW5kZXgsIG9sZEluZGV4KSB7XG4gICAgICAgIHRoaXMucmVmcy5wYWdpbmF0aW9uSXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB0aGlzLnJlZnMucGFnaW5hdGlvbkl0ZW1zLmVxKGluZGV4KS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfVxuICAgIHN0YXJ0QXV0b3BsYXkoKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpc1xuICAgICAgICBpZih0aGlzLmF1dG9QbGF5KXtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0b1BsYXkgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoIXRoYXQucXVlbmVBbmltYXRpb25zLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdGhhdC5uZXh0U2xpZGUoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1MDAwKVxuICAgIH1cbiAgICBzdG9wQXV0b3BsYXkoKXtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9QbGF5KTtcbiAgICAgICAgdGhpcy5hdXRvUGxheSA9IGZhbHNlXG4gICAgfVxuICAgIHVwZGF0ZUhlaWdodCgpe1xuICAgICAgICBjb25zdCBpbm5lckhlaWdodCA9ICQodGhpcy5yZWZzLnNsaWRlc1t0aGlzLmFjdGl2ZVNsaWRlSW5kZXhdKS5pbm5lckhlaWdodCgpO1xuICAgICAgICB0aGlzLnJlZnMud3JhcHBlci5jc3MoJ2hlaWdodCcsIGlubmVySGVpZ2h0KTtcbiAgICB9XG4gICAgc2V0QmFja2dyb3VuZChpbmRleCl7XG4gICAgICAgIHRoaXMucmVmcy5iYWNrZ3JvdW5kLnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxuICAgICAgICB0aGlzLnJlZnMuYmFja2dyb3VuZC5lcSh0aGlzLmFjdGl2ZVNsaWRlSW5kZXgpLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgIH1cbiAgICBhZGRBbmltYXRpb25Ub1F1ZW5lKGluZGV4KXtcbiAgICAgICAgaWYgKCh0aGlzLnF1ZW5lQW5pbWF0aW9ucy5sZW5ndGggJiYgdGhpcy5xdWVuZUFuaW1hdGlvbnNbMF0pICE9PSBpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5xdWVuZUFuaW1hdGlvbnMudW5zaGlmdChpbmRleClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluaXQoKSB7XG4gICAgICAgICQoXCJbZGF0YS1wcm9tby1zbGlkZXJdXCIpLmVhY2goKGluZGV4LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICBuZXcgUHJvbW9TbGlkZXIoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgQmFzZVNsaWRlciBmcm9tIFwiLi9iYXNlLXNsaWRlclwiO1xuXG5jbGFzcyBUZXN0aW1vbmlhc2xTbGlkZXIgZXh0ZW5kcyBCYXNlU2xpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzbGlkZXIpIHtcbiAgICAgICAgc3VwZXIoc2xpZGVyKTtcbiAgICAgICAgdGhpcy5zZXRTbGlkZXJDb25maWcodGhpcy5nZXRTbGlkZXJDb25maWcoKSk7XG4gICAgICAgIHRoaXMuaW5pdFNsaWRlcigpXG4gICAgfVxuICAgIGdldFNsaWRlckNvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgICAgICAgbG9vcDogdHJ1ZVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpIHtcbiAgICAgICAgJChcIltkYXRhLXRlc3RpbW9uaWFsLXNsaWRlcl1cIikuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIG5ldyBUZXN0aW1vbmlhc2xTbGlkZXIoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG4iLCJcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVPdmVybGF5KCkge1xyXG4gICAgICAgICQoJy5vcmRlci1zdW1tYXJ5LW1vYiAuc3VtbWFyeS1jb250YWluZXIgPi5jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICAkKCcub3ZlcmxheScpLmZhZGVUb2dnbGUoJ2Zhc3QnKTtcclxuICAgIH1cclxuICAgIHZhciBhY3RpdmVTdHlsZSA9ICQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2FjdGl2ZS1zdHlsZScpO1xyXG4gICAgdmFyIGFjdGl2ZUxheW91dCA9ICQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2FjdGl2ZS1sYXlvdXQnKTtcclxuICAgIHZhciBhY3RpdmVQYWdlID0gJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnYWN0aXZlLXBhZ2UnKTtcclxuICAgIHZhciB1cmwgPSAkKCdbZGF0YS1zZXQtdGhlbWVdJykuZGF0YSgnb3JpZ2luYWwtdXJsJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlVGhlbWVTd2l0Y2hlcigpIHtcclxuICAgICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ3RoZW1lLXN3aXRjaGVyLW9wZW4nKTtcclxuICAgICAgICB2YXIgYnJvd3NlciA9IHBhcnNlSW50KHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICAgICAgdmFyIGJvZHkgPSBwYXJzZUludCgkKCdib2R5JykuaGVpZ2h0KCkpO1xyXG4gICAgICAgIHZhciBzY3JvbGwgPSBwYXJzZUludChnZXRTY3JvbGxiYXJXaWR0aCgpKTtcclxuXHJcbiAgICAgICAgaWYgKGJvZHkgPiBicm93c2VyICYmICQoJ2JvZHknKS5oYXNDbGFzcygndGhlbWUtc3dpdGNoZXItb3BlbicpKXtcclxuICAgICAgICAgICAgJCgnYm9keScpLnByb3AoJ3N0eWxlJywncGFkZGluZy1yaWdodDogJytzY3JvbGwrJ3B4Jyk7XHJcbiAgICAgICAgfSBcclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlUHJvcCgnc3R5bGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzZXRUaGVtZVN3aXRjaGVyKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxiYXJXaWR0aCgpIHtcclxuICAgICAgICB2YXIgb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIG91dGVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIG91dGVyLnN0eWxlLndpZHRoID0gXCIxMDBweFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3V0ZXIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciB3aWR0aE5vU2Nyb2xsID0gb3V0ZXIub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgLy8gZm9yY2Ugc2Nyb2xsYmFyc1xyXG4gICAgICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gXCJzY3JvbGxcIjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBhZGQgaW5uZXJkaXZcclxuICAgICAgICB2YXIgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGlubmVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpOyAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIHdpZHRoV2l0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHJlbW92ZSBkaXZzXHJcbiAgICAgICAgb3V0ZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvdXRlcik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHdpZHRoTm9TY3JvbGwgLSB3aWR0aFdpdGhTY3JvbGw7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRUaGVtZVN3aXRjaGVyKCkge1xyXG4gICAgICAgICQoJ1tkYXRhLXNldC10aGVtZV0nKS5hdHRyKCdocmVmJywgdXJsKTtcclxuICAgICAgICAkKCcudGhlbWUtc3dpdGNoZXInKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy50aGVtZS1zd2l0Y2hlcicpLmZpbmQoJ1tkYXRhLXN0eWxlPVwiJyArIGFjdGl2ZVN0eWxlICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcudGhlbWUtc3dpdGNoZXInKS5maW5kKCdbZGF0YS1sYXlvdXQ9XCInICsgYWN0aXZlTGF5b3V0ICsgJ1wiXScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKCcudGhlbWUtc3dpdGNoZXInKS5maW5kKCdbZGF0YS1wYWdlPVwiJyArIGFjdGl2ZVBhZ2UgKyAnXCJdJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2Nob29zZW4tc3R5bGUnLCAnJyk7XHJcbiAgICAgICAgJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1sYXlvdXQnLCAnJyk7XHJcbiAgICAgICAgJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1wYWdlJywgJycpO1xyXG4gICAgfVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5vcmRlci1zdW1tYXJ5LW1vYiAuc3VtbWFyeS1jb250YWluZXIgLmJ0bi1yb3VuZGVkJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0b2dnbGVPdmVybGF5KCk7XHJcbiAgICB9KTtcclxuICAgICQoJy5vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHRvZ2dsZU92ZXJsYXkoKTtcclxuICAgICAgICBpZiAoJCgnYm9keScpLmhhc0NsYXNzKCd0aGVtZS1zd2l0Y2hlci1vcGVuJykpIHtcclxuICAgICAgICAgICAgdG9nZ2xlVGhlbWVTd2l0Y2hlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAkKCcudGhlbWUtc3dpdGNoZXItYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdG9nZ2xlVGhlbWVTd2l0Y2hlcigpO1xyXG4gICAgICAgIHRvZ2dsZU92ZXJsYXkoKTtcclxuICAgIH0pO1xyXG4gICAgJCgnLnRoZW1lLXN3aXRjaGVyLWJveCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcucm93JykuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICB2YXIgbmV3U3R5bGUgPSAkKHRoaXMpLmRhdGEoJ3N0eWxlJyk7XHJcbiAgICAgICAgdmFyIG5ld0xheW91dCA9ICQodGhpcykuZGF0YSgnbGF5b3V0Jyk7XHJcbiAgICAgICAgdmFyIG5ld1BhZ2UgPSAkKHRoaXMpLmRhdGEoJ3BhZ2UnKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld1N0eWxlICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgc2V0U3R5bGUgPSBuZXdTdHlsZTtcclxuICAgICAgICAgICAgJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1zdHlsZScsIHNldFN0eWxlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuZXdMYXlvdXQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXRMYXlvdXQgPSBuZXdMYXlvdXQ7XHJcbiAgICAgICAgICAgICQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2Nob29zZW4tbGF5b3V0Jywgc2V0TGF5b3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5ld1BhZ2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXRQYWdlID0gbmV3UGFnZTtcclxuICAgICAgICAgICAgJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1wYWdlJywgc2V0UGFnZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnLnRoZW1lLXN3aXRjaGVyJykuZGF0YSgnY2hvb3Nlbi1sYXlvdXQnKSAhPSBcIlwiKXtcclxuICAgICAgICAgICAgdmFyIGNob29zZW5MYXlvdXQgPSAkKCcudGhlbWUtc3dpdGNoZXInKS5kYXRhKCdjaG9vc2VuLWxheW91dCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB2YXIgY2hvb3NlbkxheW91dCA9IGFjdGl2ZUxheW91dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkKCcudGhlbWUtc3dpdGNoZXInKS5kYXRhKCdjaG9vc2VuLXN0eWxlJykgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHZhciBjaG9vc2VuU3R5bGUgPSAkKCcudGhlbWUtc3dpdGNoZXInKS5kYXRhKCdjaG9vc2VuLXN0eWxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHZhciBjaG9vc2VuU3R5bGUgPSBhY3RpdmVTdHlsZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCQoJy50aGVtZS1zd2l0Y2hlcicpLmRhdGEoJ2Nob29zZW4tcGFnZScpICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB2YXIgY2hvb3NlblBhZ2UgPSAkKCcudGhlbWUtc3dpdGNoZXInKS5kYXRhKCdjaG9vc2VuLXBhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdmFyIGNob29zZW5QYWdlID0gYWN0aXZlUGFnZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBmaW5kc2lnbiA9IHVybC5pbmRleE9mKFwiP1wiKTtcclxuICAgICAgICBpZiAoZmluZHNpZ24gIT0gLTEpIHtcclxuICAgICAgICAgICAgdmFyIG5ld1VybCA9IHVybCArICcmcnNzdHlsZT0nICsgY2hvb3NlblN0eWxlICsgJyZyc2xheW91dD0nICsgY2hvb3NlbkxheW91dCArICcmcnNwYWdlPScgKyBjaG9vc2VuUGFnZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbmV3VXJsID0gdXJsICsgJz9yc3N0eWxlPScgKyBjaG9vc2VuU3R5bGUgKyAnJnJzbGF5b3V0PScgKyBjaG9vc2VuTGF5b3V0ICsgJyZyc3BhZ2U9JyArIGNob29zZW5QYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKCdbZGF0YS1zZXQtdGhlbWVdJykuYXR0cignaHJlZicsIG5ld1VybCk7XHJcbiAgICB9KTtcclxuICAgICQoJ1tkYXRhLXN0eWxlLXJlc2V0XScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRvZ2dsZVRoZW1lU3dpdGNoZXIoKTtcclxuICAgICAgICB0b2dnbGVPdmVybGF5KCk7XHJcbiAgICB9KTtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJCgnLm9yZGVyLXN1bW1hcnktbW9iIC5zdW1tYXJ5LWNvbnRhaW5lciA+LmNvbnRlbnQnKS5zbGlkZVVwKCk7XHJcbiAgICAgICAgJCgnLm92ZXJsYXknKS5mYWRlT3V0KCdmYXN0Jyk7XHJcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCd0aGVtZS1zd2l0Y2hlci1vcGVuJyk7XHJcbiAgICAgICAgcmVzZXRUaGVtZVN3aXRjaGVyKClcclxuICAgIH0pO1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgU3dpcGVyIGZyb20gJ3N3aXBlci9kaXN0L2pzL3N3aXBlci5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XHJcblxyXG4gICAgaWYgKCQoJy50aWxlcycpLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBteVN3aXBlciA9IG5ldyBTd2lwZXIoJy50aWxlcy5zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICAgICAgICBzcGVlZDogNDAwLFxyXG4gICAgICAgICAgICBpbml0OiBmYWxzZSxcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgICAgICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZW5xdWlyZS5yZWdpc3RlcihcInNjcmVlbiBhbmQgKG1heC13aWR0aDo3NjdweClcIiwge1xyXG4gICAgICAgICAgICBtYXRjaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBteVN3aXBlci5pbml0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVubWF0Y2g6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbXlTd2lwZXIuZGVzdHJveShmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xyXG5cclxuICAgIHZhciBmaWx0ZXIgPSAkKCcuY3VzdG9tLW11bHRpc2VsZWN0Jykuc2VsZWN0aXplKHtcclxuICAgICAgICBjb3B5Q2xhc3Nlc1RvRHJvcGRvd246IGZhbHNlLFxyXG4gICAgICAgIHBsdWdpbnM6IFsncmVtb3ZlX2J1dHRvbiddLFxyXG4gICAgICAgIHJlbmRlcjoge1xyXG4gICAgICAgICAgICBpdGVtOiBmdW5jdGlvbihkYXRhLCBlc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnPGRpdj4nICsgZXNjYXBlKGRhdGEudGV4dCkgKyAnPC9kaXY+JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25JdGVtQWRkOiBmdW5jdGlvbih2YWx1ZSwgJGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLm9wdGlvbnNbdmFsdWVdO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAkKCcubWVzc2FnZS5uby10bGRzJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcudGxkLXByaWNpbmcnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICQoJy50bGQtcHJpY2luZyAudGxkLXJvdycpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdHIxID0gJCh0aGlzKS5kYXRhKCdjYXRlZ29yeScpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0cjIgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIxLmluZGV4T2Yoc3RyMikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRGVsZXRlOiBmdW5jdGlvbih2YWx1ZSwgJGl0ZW0pIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLm9wdGlvbnNbdmFsdWVdO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgc2VsZWN0aXplID0gZmlsdGVyWzBdLnNlbGVjdGl6ZTtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkX29iamVjdHMgPSAkLm1hcChzZWxlY3RpemUuaXRlbXMsIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT0gZGF0YS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RpemUub3B0aW9uc1t2YWx1ZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgdG90YWxMZW4gPSBzZWxlY3RlZF9vYmplY3RzLmxlbmd0aDtcclxuICAgICAgICAgICAgJCgnLnRsZC1wcmljaW5nIC50bGQtcm93JykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkLmVhY2goc2VsZWN0ZWRfb2JqZWN0cywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnRsZC1yb3dbZGF0YS1jYXRlZ29yeSo9XCInICsgdmFsdWUudmFsdWUgKyAnXCJdJykuc2hvdygpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBpZiAodG90YWxMZW4gPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLnRsZC1wcmljaW5nJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm1lc3NhZ2Uubm8tdGxkcycpLnNob3coKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJy5tZXNzYWdlLm5vLXRsZHMnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcudGxkLXByaWNpbmcnKS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoJCgnLnRsZC1maWx0ZXJzJykubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHNlbGVjdGl6ZSA9IGZpbHRlclswXS5zZWxlY3RpemU7XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkX29iamVjdHMgPSAkLm1hcChzZWxlY3RpemUuaXRlbXMsIGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZWxlY3RpemUub3B0aW9uc1t2YWx1ZV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgJCgnLm1lc3NhZ2Uubm8tdGxkcycpLmhpZGUoKTtcclxuICAgICAgICAkKCcudGxkLXByaWNpbmcgLnRsZC1yb3cnKS5oaWRlKCk7XHJcbiAgICAgICAgJC5lYWNoKHNlbGVjdGVkX29iamVjdHMsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgJCgnLnRsZC1yb3dbZGF0YS1jYXRlZ29yeSo9XCInICsgdmFsdWUudmFsdWUgKyAnXCJdJykuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxufSIsIi8qKlxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBCb290c3RyYXAgKHY0LjAuMC1iZXRhKTogdXRpbC5qc1xyXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxyXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcbmNvbnN0IFV0aWwgPSAoKCkgPT4ge1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICogUHJpdmF0ZSBUcmFuc2l0aW9uRW5kIEhlbHBlcnNcclxuICAgICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICovXHJcblxyXG4gICAgbGV0IHRyYW5zaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdCBNQVhfVUlEID0gMTAwMDAwMDtcclxuXHJcbiAgICBjb25zdCBUcmFuc2l0aW9uRW5kRXZlbnQgPSB7XHJcbiAgICAgICAgV2Via2l0VHJhbnNpdGlvbiA6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcclxuICAgICAgICBNb3pUcmFuc2l0aW9uICAgIDogJ3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgIE9UcmFuc2l0aW9uICAgICAgOiAnb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQnLFxyXG4gICAgICAgIHRyYW5zaXRpb24gICAgICAgOiAndHJhbnNpdGlvbmVuZCdcclxuICAgIH1cclxuXHJcbiAgICAvLyBzaG91dG91dCBBbmd1c0Nyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXHJcbiAgICBmdW5jdGlvbiB0b1R5cGUob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKS5tYXRjaCgvXFxzKFthLXpBLVpdKykvKVsxXS50b0xvd2VyQ2FzZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBiaW5kVHlwZTogdHJhbnNpdGlvbi5lbmQsXHJcbiAgICAgICAgICAgIGRlbGVnYXRlVHlwZTogdHJhbnNpdGlvbi5lbmQsXHJcbiAgICAgICAgICAgIGhhbmRsZShldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5pcyh0aGlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZpbmVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZFRlc3QoKSB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5RVW5pdCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9vdHN0cmFwJylcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIFRyYW5zaXRpb25FbmRFdmVudCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsLnN0eWxlW25hbWVdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFRyYW5zaXRpb25FbmRFdmVudFtuYW1lXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kRW11bGF0b3IoZHVyYXRpb24pIHtcclxuICAgICAgICBsZXQgY2FsbGVkID0gZmFsc2VcclxuXHJcbiAgICAgICAgJCh0aGlzKS5vbmUoVXRpbC5UUkFOU0lUSU9OX0VORCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjYWxsZWQgPSB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgVXRpbC50cmlnZ2VyVHJhbnNpdGlvbkVuZCh0aGlzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZHVyYXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpc1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KCkge1xyXG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRW5kVGVzdCgpXHJcblxyXG4gICAgICAgICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSB0cmFuc2l0aW9uRW5kRW11bGF0b3JcclxuXHJcbiAgICAgICAgaWYgKFV0aWwuc3VwcG9ydHNUcmFuc2l0aW9uRW5kKCkpIHtcclxuICAgICAgICAgICAgJC5ldmVudC5zcGVjaWFsW1V0aWwuVFJBTlNJVElPTl9FTkRdID0gZ2V0U3BlY2lhbFRyYW5zaXRpb25FbmRFdmVudCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VPcHRpb24oaXRlbSl7XHJcbiAgICAgICAgaWYgKCd0cnVlJyA9PT0gaXRlbSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgnZmFsc2UnID09PSBpdGVtKXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc05hTihpdGVtICogMSkpe1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChpdGVtKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqIFB1YmxpYyBVdGlsIEFwaVxyXG4gICAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAqL1xyXG5cclxuICAgIGNvbnN0IFV0aWwgPSB7XHJcblxyXG4gICAgICAgIFRSQU5TSVRJT05fRU5EOiAnYnNUcmFuc2l0aW9uRW5kJyxcclxuXHJcbiAgICAgICAgZ2V0VUlEKHByZWZpeCkge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgICAgICAgICAgICAgcHJlZml4ICs9IH5+KE1hdGgucmFuZG9tKCkgKiBNQVhfVUlEKSAvLyBcIn5+XCIgYWN0cyBsaWtlIGEgZmFzdGVyIE1hdGguZmxvb3IoKSBoZXJlXHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXHJcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXhcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBnZXRTZWxlY3RvckZyb21FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JylcclxuICAgICAgICAgICAgaWYgKCFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gJyMnKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJydcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RvciA9ICQoZG9jdW1lbnQpLmZpbmQoc2VsZWN0b3IpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJHNlbGVjdG9yLmxlbmd0aCA+IDAgPyBzZWxlY3RvciA6IG51bGxcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByZWZsb3coZWxlbWVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRIZWlnaHRcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbkVuZChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkudHJpZ2dlcih0cmFuc2l0aW9uLmVuZClcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzdXBwb3J0c1RyYW5zaXRpb25FbmQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKHRyYW5zaXRpb24pXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaXNFbGVtZW50KG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gKG9ialswXSB8fCBvYmopLm5vZGVUeXBlXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdHlwZUNoZWNrQ29uZmlnKGNvbXBvbmVudE5hbWUsIGNvbmZpZywgY29uZmlnVHlwZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBjb25maWdUeXBlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChjb25maWdUeXBlcywgcHJvcGVydHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwZWN0ZWRUeXBlcyA9IGNvbmZpZ1R5cGVzW3Byb3BlcnR5XVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlICAgICAgICAgPSBjb25maWdbcHJvcGVydHldXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWVUeXBlICAgICA9IHZhbHVlICYmIFV0aWwuaXNFbGVtZW50KHZhbHVlKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtjb21wb25lbnROYW1lLnRvVXBwZXJDYXNlKCl9OiBgICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBPcHRpb24gXCIke3Byb3BlcnR5fVwiIHByb3ZpZGVkIHR5cGUgXCIke3ZhbHVlVHlwZX1cIiBgICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBidXQgZXhwZWN0ZWQgdHlwZSBcIiR7ZXhwZWN0ZWRUeXBlc31cIi5gKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyc2VEYXRhT3B0aW9ucyhkYXRhT3B0aW9ucyl7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gW107XHJcbiAgICAgICAgICAgIGxldCBzdHJpbmcgPSBkYXRhT3B0aW9ucy5zcGxpdCgnOycpO1xyXG5cclxuICAgICAgICAgICAgc3RyaW5nLmZvckVhY2goZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3B0aW9uICA9IGl0ZW0uc3BsaXQoJzonKTtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb24gPSBvcHRpb24ubWFwKGZ1bmN0aW9uKGl0ZW0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBpZihvcHRpb25bMF0pe1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnNbb3B0aW9uWzBdXSA9IHBhcnNlT3B0aW9uKG9wdGlvblsxXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFRyYW5zaXRpb25FbmRTdXBwb3J0KClcclxuXHJcbiAgICByZXR1cm4gVXRpbFxyXG5cclxufSkoJClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFV0aWwiLCJpbXBvcnQge1xyXG4gIHZpcnR1YWxJbnB1dCxcclxuICBudW1iZXJJbnB1dCxcclxufSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybXMnO1xyXG5pbXBvcnQgcmFuZ2VTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL3JhbmdlLXNsaWRlcic7XHJcblxyXG5cclxuaW1wb3J0IGluaXRQYW5lbHNHcmlkIGZyb20gJy4vY29tcG9uZW50cy9wYW5lbHMtZ3JpZCc7XHJcbmltcG9ydCBpbml0Q2hlY2tBbGwgZnJvbSAnLi9jb21wb25lbnRzL2NoZWNrLWFsbCc7XHJcbmltcG9ydCBzbGlkZXJzIGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXJzJztcclxuaW1wb3J0IGluaXRQYW5lbFN3aXRjaCBmcm9tICcuL2NvbXBvbmVudHMvcGFuZWwtc3dpdGNoJztcclxuaW1wb3J0IGluaXRDcmVkaXRCb3ggZnJvbSAnLi9jb21wb25lbnRzL2NyZWRpdC1ib3gnO1xyXG5pbXBvcnQgaW5pdFRpbGVzU2xpZGVyIGZyb20gJy4vY29tcG9uZW50cy90aWxlcy1zbGlkZXInO1xyXG5pbXBvcnQgaW5pdEN1c3RvbVNjcm9sbGJhciBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tLXNjcm9sbGJhcic7XHJcbmltcG9ydCBpbml0VExEZmlsZXIgZnJvbSAnLi9jb21wb25lbnRzL3RsZC1maWx0ZXInO1xyXG5pbXBvcnQgaW5pdFRoZW1lU3dpdGNoZXIgZnJvbSAnLi9jb21wb25lbnRzL3RoZW1lLXN3aXRjaGVyJztcclxuaW1wb3J0IGluaXREYXRhVGFibGVTY3JpcHRzIGZyb20gJy4vY29tcG9uZW50cy9kYXRhVGFibGVzU2NyaXB0cyc7XHJcbmltcG9ydCBpbml0RHJvcGRvd25TZWxlY3QgZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duLXNlbGVjdCc7XHJcbmltcG9ydCBpbml0Q29udGVudFNsaWRlciBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC1zbGlkZXInO1xyXG5pbXBvcnQgaW5pdEZpbHRlckdyaWQgZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlci1ncmlkJztcclxuaW1wb3J0IGluaXRPdGhlclNjcmlwdHMgZnJvbSAnLi9jb21wb25lbnRzL290aGVyJztcclxuXHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgaW5pdFBhbmVsc0dyaWQoKTtcclxuICBpbml0Q2hlY2tBbGwoKTtcclxuICBpbml0UGFuZWxTd2l0Y2goKTtcclxuICBpbml0Q3JlZGl0Qm94KCk7XHJcbiAgaW5pdFRpbGVzU2xpZGVyKCk7XHJcbiAgaW5pdFRoZW1lU3dpdGNoZXIoKTtcclxuICBpbml0RGF0YVRhYmxlU2NyaXB0cygpO1xyXG4gIGluaXRPdGhlclNjcmlwdHMoKTtcclxuICBpbml0VExEZmlsZXIoKTtcclxuICBpbml0Q3VzdG9tU2Nyb2xsYmFyKCk7XHJcbiAgaW5pdERyb3Bkb3duU2VsZWN0KCk7XHJcbiAgaW5pdENvbnRlbnRTbGlkZXIoKTtcclxuICBpbml0RmlsdGVyR3JpZCgpXHJcbiAgc2xpZGVycy5pbml0KClcclxuICBjb25zdCBjaGVja2JveGVzID0gJCgnYm9keScpLmZpbmQoJ2lucHV0LmljaGVjay1jb250cm9sOm5vdCguaWNoZWNrLWlucHV0KTpub3QoLnN3aXRjaF9fY2hlY2tib3gpLCAuYWRkb24tc2VsZWN0b3InKTtcclxuICBjb25zdCByYWRpb1RhYnMgPSAkKCdbZGF0YS1yYWRpby10YWJdJyk7XHJcblxyXG4gIGNoZWNrYm94ZXMuaUNoZWNrKHtcclxuICAgICAgY2hlY2tib3hDbGFzczogJ2NoZWNrYm94LXN0eWxlZCcsXHJcbiAgICAgIHJhZGlvQ2xhc3M6ICdyYWRpby1zdHlsZWQnLFxyXG4gICAgICBpbmNyZWFzZUFyZWE6ICc0MCUnXHJcbiAgfSk7XHJcblxyXG4gIFxyXG4gICQoJ2JvZHknKS5vbignY2xpY2snLCdbZGF0YS1yYWRpby10YWJdJywgZnVuY3Rpb24oKXtcclxuICAgICAgJCh0aGlzKS5maW5kKCdpbnB1dCcpLmlDaGVjaygnY2hlY2snKTtcclxuICB9KTtcclxuICAkKCdib2R5Jykub24oJ2lmQ2hlY2tlZCcsJ1tkYXRhLXJhZGlvLXRhYl0gaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLXJhZGlvLXRhYl0nKS50YWIoJ3Nob3cnKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmN1c3RvbS1zZWxlY3QnKS5zZWxlY3RpemUoe1xyXG4gICAgICBjb3B5Q2xhc3Nlc1RvRHJvcGRvd246IGZhbHNlLFxyXG4gIH0pO1xyXG5cclxuICAkKCdbZGF0YS1pbnB1dHMtY29udGFpbmVyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyB2aXJ0dWFsSW5wdXQoJCh0aGlzKSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ1tkYXRhLWlucHV0LW51bWJlcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBuZXcgbnVtYmVySW5wdXQoJCh0aGlzKSk7XHJcbiAgfSk7XHJcblxyXG4gICQoJ1tkYXRhLWlucHV0LW51bWJlcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBuZXcgbnVtYmVySW5wdXQoJCh0aGlzKSk7XHJcbiAgfSk7XHJcbiAgJCgnW2RhdGEtcmFuZ2UtY29udGFpbmVyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyByYW5nZVNsaWRlcigkKHRoaXMpKTtcclxuICB9KTtcclxuICBcclxuICBcclxuICAgICQoJy5sYWdvbS1sYXlvdXQtbGVmdC13aWRlIC5uYXZiYXItbWFpbiAuZHJvcGRvd24tdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50KCkuaGFzQ2xhc3MoJ29wZW4nKSkge1xyXG4gICAgICAgICAgICB2YXIgdGhhdCA9ICQodGhpcykucGFyZW50KCk7XHJcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5kcm9wZG93bi1tZW51Jykuc2xpZGVVcCg0MDApLnByb21pc2UoKS5kb25lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRoYXQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpLmNsb3Nlc3QoJy5uYXZiYXItbWFpbicpLmZpbmQoJy5vcGVuJyk7XHJcbiAgICAgICAgICAgIHRoYXQuZmluZCgnLmRyb3Bkb3duLW1lbnUnKS5zbGlkZVVwKDQwMCkucHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5yZW1vdmVDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnb3BlbicpO1xyXG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpLnNsaWRlRG93big0MDApO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG53aW5kb3cucmVsb2FkQ29uZmlnT3B0aW9ucyA9IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xyXG5cclxuICAkKHNlbGVjdG9yKS5maW5kKCdbZGF0YS1pbnB1dHMtY29udGFpbmVyXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgIG5ldyB2aXJ0dWFsSW5wdXQoJCh0aGlzKSk7XHJcbiAgfSk7XHJcblxyXG4gICQoc2VsZWN0b3IpLmZpbmQoJ1tkYXRhLXJhbmdlLWNvbnRhaW5lcl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBuZXcgcmFuZ2VTbGlkZXIoJCh0aGlzKSk7XHJcbiAgfSk7XHJcblxyXG59O1xyXG5cclxuJCgnLnBhZ2Utdmlld2ludm9pY2UgLmludm9pY2UnKS53cmFwKCc8ZGl2IGNsYXNzPVwidGFibGUtc2Nyb2xsYmFyXCI+PC9kaXY+Jyk7IFxyXG47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=