webpackHotUpdate(5,{

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = __webpack_require__(1212);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //add .enable() for the first use if it's not working
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    //we are not in the browser or the user is not running metamask

    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/9c327ed633ac475fac8ab2bb8f65e266');
    web3 = new _web2.default(provider);
};

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsU0FBdUIsQUFBNUQsYUFBeUUsQUFDckU7QUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxPQUFPLEFBQVAsS0FBWSxBQUFyQixBQUFQLEFBRUg7QUFKRCxPQUlPLEFBQ0g7QUFFQTs7UUFBTSxXQUFXLElBQUksY0FBSyxBQUFMLFVBQWUsQUFBbkIsYUFDYixBQURhLEFBQWpCLEFBR0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBQ0g7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2hoay1wcm9qZWN0cy9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/hhk-projects/kickstart/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/hhk-projects/kickstart/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5mMWVhMjYyMDAyNjA2MzQ2NjUwOS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz8zY2E0OTU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuXG5sZXQgd2ViMztcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvL2FkZCAuZW5hYmxlKCkgZm9yIHRoZSBmaXJzdCB1c2UgaWYgaXQncyBub3Qgd29ya2luZ1xuICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xuXG59IGVsc2Uge1xuICAgIC8vd2UgYXJlIG5vdCBpbiB0aGUgYnJvd3NlciBvciB0aGUgdXNlciBpcyBub3QgcnVubmluZyBtZXRhbWFza1xuXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxuICAgICAgICAnaHR0cHM6Ly9yaW5rZWJ5LmluZnVyYS5pby92My85YzMyN2VkNjMzYWM0NzVmYWM4YWIyYmI4ZjY1ZTI2NidcbiAgICApO1xuICAgIHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3ZWIzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2V0aGVyZXVtL3dlYjMuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQURBO0FBR0E7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==