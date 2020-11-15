webpackHotUpdate(7,{

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core__ = __webpack_require__("./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
var _jsxFileName = "D:\\ethereum-contract-workflow\\ethereum-contract-workflow\\components\\Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var styles = {
  wrapper: {
    margin: '0 auto',
    width: '80%',
    maxWidth: '1200px',
    display: 'flex'
  },
  brand: {
    borderRight: '2px solid #CCCCCC',
    paddingRight: '1em',
    marginRight: '1em'
  },
  toolbar: {
    padding: 0,
    flex: 1
  },
  flexContainer: {
    flex: 1
  },
  anchor: {
    textDecoration: 'none'
  }
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core__["a" /* AppBar */], {
        position: "static",
        color: "default",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.wrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core__["m" /* Toolbar */], {
        className: classes.toolbar,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core__["n" /* Typography */], {
        variant: "title",
        color: "inherit",
        className: classes.brand,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "\u4F17\u7B79 DApp"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        className: classes.flexContainer,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/",
        className: classes.anchor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core__["n" /* Typography */], {
        variant: "title",
        color: "inherit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, "\u9879\u76EE\u5217\u8868"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
        route: "/projects/create",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core__["b" /* Button */], {
        variant: "raised",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "\u53D1\u8D77\u9879\u76EE")))));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Header));

/***/ }),

/***/ "./pages/projects/detail.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core__ = __webpack_require__("./node_modules/@material-ui/core/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libs_web3__ = __webpack_require__("./libs/web3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web3__ = __webpack_require__("./node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_web3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__libs_project__ = __webpack_require__("./libs/project.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__libs_projectList__ = __webpack_require__("./libs/projectList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__libs_withRoot__ = __webpack_require__("./libs/withRoot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_InfoBlock__ = __webpack_require__("./components/InfoBlock.js");

var _jsxFileName = "D:\\ethereum-contract-workflow\\ethereum-contract-workflow\\pages\\projects\\detail.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var ProjectDetail =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProjectDetail, _React$Component);

  _createClass(ProjectDetail, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, contract, summary, _Object$values, _Object$values2, description, minInvest, maxInvest, goal, balance, investorCount, paymentCount, owner, tasks, i, payments, project;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                contract = Object(__WEBPACK_IMPORTED_MODULE_6__libs_project__["a" /* default */])(query.address);
                _context.next = 4;
                return contract.methods.getSummary().call();

              case 4:
                summary = _context.sent;
                _Object$values = Object.values(summary), _Object$values2 = _slicedToArray(_Object$values, 8), description = _Object$values2[0], minInvest = _Object$values2[1], maxInvest = _Object$values2[2], goal = _Object$values2[3], balance = _Object$values2[4], investorCount = _Object$values2[5], paymentCount = _Object$values2[6], owner = _Object$values2[7];
                tasks = [];

                for (i = 0; i < paymentCount; i++) {
                  tasks.push(contract.methods.payments(i).call());
                }

                _context.next = 10;
                return Promise.all(tasks);

              case 10:
                payments = _context.sent;
                project = {
                  address: query.address,
                  description: description,
                  minInvest: minInvest,
                  maxInvest: maxInvest,
                  goal: goal,
                  balance: balance,
                  investorCount: investorCount,
                  paymentCount: paymentCount,
                  owner: owner,
                  payments: payments
                };
                console.log(project);
                return _context.abrupt("return", {
                  project: project
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  function ProjectDetail(props) {
    var _this;

    _classCallCheck(this, ProjectDetail);

    _this = _possibleConstructorReturn(this, (ProjectDetail.__proto__ || Object.getPrototypeOf(ProjectDetail)).call(this, props));
    _this.state = {
      amount: 0,
      errmsg: '',
      loading: false,
      isApproving: false,
      isPaying: false
    };
    _this.onSubmit = _this.contributeProject.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProjectDetail, [{
    key: "getInputHandler",
    value: function getInputHandler(key) {
      var _this2 = this;

      return function (e) {
        console.log(e.target.value);

        _this2.setState(_defineProperty({}, key, e.target.value));
      };
    }
  }, {
    key: "contributeProject",
    value: function () {
      var _contributeProject = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2() {
        var amount, _props$project, minInvest, maxInvest, minInvestInEther, maxInvestInEther, accounts, owner, contract, result;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                amount = this.state.amount;
                _props$project = this.props.project, minInvest = _props$project.minInvest, maxInvest = _props$project.maxInvest;
                minInvestInEther = __WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].utils.fromWei(minInvest, 'ether');
                maxInvestInEther = __WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].utils.fromWei(maxInvest, 'ether');
                console.log({
                  amount: amount,
                  minInvestInEther: minInvestInEther,
                  maxInvestInEther: maxInvestInEther
                }); // 字段合规检查

                if (!(amount <= 0)) {
                  _context2.next = 7;
                  break;
                }

                return _context2.abrupt("return", this.setState({
                  errmsg: '投资金额必须大于0'
                }));

              case 7:
                if (!(amount < minInvestInEther)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", this.setState({
                  errmsg: '投资金额必须大于最小投资金额'
                }));

              case 9:
                if (!(amount > maxInvestInEther)) {
                  _context2.next = 11;
                  break;
                }

                return _context2.abrupt("return", this.setState({
                  errmsg: '投资金额必须小于最大投资金额'
                }));

              case 11:
                _context2.prev = 11;
                _context2.next = 14;
                return __WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].eth.getAccounts();

              case 14:
                accounts = _context2.sent;
                owner = accounts[0]; //   const owner = "0xfa90707b4aA3D578Aa09A73Bf12252D8E518C0Ac";

                window.alert(this.props.project.address);
                console.log('Owner', owner);
                this.setState({
                  loading: true,
                  errmsg: ''
                }); // 发起转账，这是合约的地址

                contract = Object(__WEBPACK_IMPORTED_MODULE_6__libs_project__["a" /* default */])(this.props.project.address);
                _context2.next = 22;
                return contract.methods.contribute().send({
                  from: owner,
                  value: __WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].utils.toWei(amount, 'ether'),
                  gas: '5000000'
                });

              case 22:
                result = _context2.sent;
                this.setState({
                  errmsg: '投资成功',
                  amount: 0
                });
                console.log(result);
                setTimeout(function () {
                  location.reload();
                }, 1000);
                _context2.next = 32;
                break;

              case 28:
                _context2.prev = 28;
                _context2.t0 = _context2["catch"](11);
                console.error(_context2.t0);
                this.setState({
                  errmsg: _context2.t0.message || _context2.t0.toString
                });

              case 32:
                _context2.prev = 32;
                this.setState({
                  loading: false
                });
                return _context2.finish(32);

              case 35:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[11, 28, 32, 35]]);
      }));

      return function contributeProject() {
        return _contributeProject.apply(this, arguments);
      };
    }()
  }, {
    key: "approvePayment",
    value: function () {
      var _approvePayment = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3(i) {
        var accounts, sender, contract, isInvestor, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                this.setState({
                  isApproving: i
                });
                _context3.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].eth.getAccounts();

              case 4:
                accounts = _context3.sent;
                sender = accounts[0];
                contract = Object(__WEBPACK_IMPORTED_MODULE_6__libs_project__["a" /* default */])(this.props.project.address);
                _context3.next = 9;
                return contract.methods.investors(sender).call();

              case 9:
                isInvestor = _context3.sent;

                if (isInvestor) {
                  _context3.next = 12;
                  break;
                }

                return _context3.abrupt("return", window.alert('只有投资人才有权投票'));

              case 12:
                _context3.next = 14;
                return contract.methods.approvePayment(i).send({
                  from: sender,
                  gas: '5000000'
                });

              case 14:
                result = _context3.sent;
                window.alert('投票成功');
                setTimeout(function () {
                  location.reload();
                }, 1000);
                _context3.next = 23;
                break;

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);
                window.alert(_context3.t0.message || _context3.t0.toString());

              case 23:
                _context3.prev = 23;
                this.setState({
                  isApproving: false
                });
                return _context3.finish(23);

              case 26:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 19, 23, 26]]);
      }));

      return function approvePayment(_x2) {
        return _approvePayment.apply(this, arguments);
      };
    }()
  }, {
    key: "doPayment",
    value: function () {
      var _doPayment = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee4(i) {
        var accounts, sender, contract, result;
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                this.setState({
                  isPaying: i
                });
                _context4.next = 4;
                return __WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].eth.getAccounts();

              case 4:
                accounts = _context4.sent;
                sender = accounts[0]; // 检查账户

                if (!(sender !== this.props.project.owner)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", window.alert('只有管理员能创建资金支出请求'));

              case 8:
                contract = Object(__WEBPACK_IMPORTED_MODULE_6__libs_project__["a" /* default */])(this.props.project.address);
                _context4.next = 11;
                return contract.methods.doPayment(i).send({
                  from: sender,
                  gas: '5000000'
                });

              case 11:
                result = _context4.sent;
                window.alert('资金划转成功');
                setTimeout(function () {
                  location.reload();
                }, 1000);
                _context4.next = 20;
                break;

              case 16:
                _context4.prev = 16;
                _context4.t0 = _context4["catch"](0);
                console.error(_context4.t0);
                window.alert(_context4.t0.message || _context4.t0.toString());

              case 20:
                _context4.prev = 20;
                this.setState({
                  isPaying: false
                });
                return _context4.finish(20);

              case 23:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 16, 20, 23]]);
      }));

      return function doPayment(_x3) {
        return _doPayment.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var project = this.props.project;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["n" /* Typography */], {
        variant: "title",
        color: "inherit",
        style: {
          margin: '15px 0'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, "\u9879\u76EE\u8BE6\u60C5"), this.renderBasicInfo(project), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["n" /* Typography */], {
        variant: "title",
        color: "inherit",
        style: {
          margin: '30px 0 15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, "\u8D44\u91D1\u652F\u51FA\u8BF7\u6C42"), this.renderPayments(project));
    }
  }, {
    key: "renderBasicInfo",
    value: function renderBasicInfo(project) {
      var progress = project.balance / project.goal * 100;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["f" /* Paper */], {
        style: {
          padding: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["n" /* Typography */], {
        gutterBottom: true,
        variant: "headline",
        component: "h2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, project.description), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["e" /* LinearProgress */], {
        style: {
          margin: '10px 0'
        },
        color: "primary",
        variant: "determinate",
        value: progress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["d" /* Grid */], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_InfoBlock__["a" /* default */], {
        title: "".concat(__WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].utils.fromWei(project.goal, 'ether'), " ETH"),
        description: "\u52DF\u8D44\u4E0A\u9650",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_InfoBlock__["a" /* default */], {
        title: "".concat(__WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].utils.fromWei(project.minInvest, 'ether'), " ETH"),
        description: "\u6700\u5C0F\u6295\u8D44\u91D1\u989D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_InfoBlock__["a" /* default */], {
        title: "".concat(__WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].utils.fromWei(project.maxInvest, 'ether'), " ETH"),
        description: "\u6700\u5927\u6295\u8D44\u91D1\u989D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_InfoBlock__["a" /* default */], {
        title: "".concat(project.investorCount, "\u4EBA"),
        description: "\u53C2\u6295\u4EBA\u6570",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__components_InfoBlock__["a" /* default */], {
        title: "".concat(__WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].utils.fromWei(project.balance, 'ether'), " ETH"),
        description: "\u5DF2\u52DF\u8D44\u91D1\u989D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["d" /* Grid */], {
        container: true,
        spacing: 16,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["d" /* Grid */], {
        item: true,
        md: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["l" /* TextField */], {
        required: true,
        id: "amount",
        label: "\u6295\u8D44\u91D1\u989D",
        style: {
          marginRight: '15px'
        },
        value: this.state.amount,
        onChange: this.getInputHandler('amount'),
        margin: "normal",
        InputProps: {
          endAdornment: 'ETH'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["b" /* Button */], {
        size: "small",
        variant: "raised",
        color: "primary",
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231
        }
      }, this.state.loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["c" /* CircularProgress */], {
        color: "secondary",
        size: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232
        }
      }) : '立即投资'), !!this.state.errmsg && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["n" /* Typography */], {
        component: "p",
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        }
      }, this.state.errmsg))));
    }
  }, {
    key: "renderPayments",
    value: function renderPayments(project) {
      var _this3 = this;

      if (project.payments.length === 0) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["f" /* Paper */], {
          style: {
            padding: '15px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249
          }
        }, "\u8FD8\u6CA1\u6709\u6570\u636E"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
          route: "/projects/".concat(project.address, "/payments/create"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["b" /* Button */], {
          variant: "raised",
          color: "primary",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          }
        }, "\u521B\u5EFA\u8D44\u91D1\u652F\u51FA\u8BF7\u6C42")));
      }

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["f" /* Paper */], {
        style: {
          padding: '15px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["g" /* Table */], {
        style: {
          marginBottom: '30px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["j" /* TableHead */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["k" /* TableRow */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        }
      }, "\u652F\u51FA\u7406\u7531"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        numeric: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        }
      }, "\u652F\u51FA\u91D1\u989D"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266
        }
      }, "\u6536\u6B3E\u4EBA"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        }
      }, "\u5DF2\u5B8C\u6210\uFF1F"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        }
      }, "\u6295\u7968\u72B6\u6001"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        }
      }, "\u64CD\u4F5C"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["h" /* TableBody */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        }
      }, project.payments.map(function (payment, index) {
        return _this3.renderPaymentRow(payment, index, project);
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__routes__["Link"], {
        route: "/projects/".concat(project.address, "/payments/create"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["b" /* Button */], {
        variant: "raised",
        color: "primary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        }
      }, "\u521B\u5EFA\u8D44\u91D1\u652F\u51FA\u8BF7\u6C42")));
    }
  }, {
    key: "isApproving",
    value: function isApproving(i) {
      return typeof this.state.isApproving === 'number' && this.state.isApproving === i;
    }
  }, {
    key: "isPaying",
    value: function isPaying(i) {
      return typeof this.state.isPaying === 'number' && this.state.isPaying === i;
    }
  }, {
    key: "renderPaymentRow",
    value: function renderPaymentRow(payment, index, project) {
      var _this4 = this;

      var canApprove = !payment.completed;
      var canDoPayment = !payment.completed && payment.voterCount / project.investorCount > 0.5;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["k" /* TableRow */], {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298
        }
      }, payment.description), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        numeric: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        }
      }, __WEBPACK_IMPORTED_MODULE_4__libs_web3__["a" /* default */].utils.fromWei(payment.amount, 'ether'), " ETH"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        }
      }, payment.receiver), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 301
        }
      }, payment.completed ? '是' : '否'), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 302
        }
      }, payment.voterCount, "/", project.investorCount), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["i" /* TableCell */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        }
      }, canApprove && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["b" /* Button */], {
        size: "small",
        color: "primary",
        onClick: function onClick() {
          return _this4.approvePayment(index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        }
      }, this.isApproving(index) ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["c" /* CircularProgress */], {
        color: "secondary",
        size: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        }
      }) : '投赞成票'), canDoPayment && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["b" /* Button */], {
        size: "small",
        color: "primary",
        onClick: function onClick() {
          return _this4.doPayment(index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        }
      }, this.isPaying(index) ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core__["c" /* CircularProgress */], {
        color: "primary",
        size: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        }
      }) : '资金划转')));
    }
  }]);

  return ProjectDetail;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_8__libs_withRoot__["a" /* default */])(ProjectDetail));
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/projects\\detail")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("./node_modules/next-routes/dist/index.js")();

routes.add('/', '/index').add('/projects/create', 'projects/create').add('/projects/:address', 'projects/detail').add('/projects/:address/payments/create', 'projects/payments/create');
module.exports = routes;

/***/ })

})
//# sourceMappingURL=7.fd5227bff3d6b56b87e1.hot-update.js.map