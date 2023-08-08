/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/gadgets/helper.ts":
/*!*******************************!*\
  !*** ./src/gadgets/helper.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IG_CONTAINER_KEY\": () => (/* binding */ IG_CONTAINER_KEY),\n/* harmony export */   \"IG_CONTAINER_VALUE\": () => (/* binding */ IG_CONTAINER_VALUE),\n/* harmony export */   \"JsonStreamParser\": () => (/* binding */ JsonStreamParser),\n/* harmony export */   \"PubSub\": () => (/* binding */ PubSub),\n/* harmony export */   \"isIGPod\": () => (/* binding */ isIGPod),\n/* harmony export */   \"pubSub\": () => (/* binding */ pubSub)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar IG_CONTAINER_KEY = 'k8s-app';\nvar IG_CONTAINER_VALUE = 'gadget';\nfunction isIGPod(podResource) {\n  return podResource.metadata.labels[IG_CONTAINER_KEY] === IG_CONTAINER_VALUE;\n}\nvar PubSub = /*#__PURE__*/function () {\n  function PubSub() {\n    _classCallCheck(this, PubSub);\n    _defineProperty(this, \"listeners\", {});\n  }\n  _createClass(PubSub, [{\n    key: \"subscribe\",\n    value: function subscribe(id, fn) {\n      if (!this.listeners[id]) {\n        this.listeners[id] = [];\n      }\n      this.listeners[id].push(fn);\n    }\n  }, {\n    key: \"publish\",\n    value: function publish(id, data) {\n      if (this.listeners[id]) {\n        var _iterator = _createForOfIteratorHelper(this.listeners[id]),\n          _step;\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var fn = _step.value;\n            fn(data);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    }\n  }]);\n  return PubSub;\n}();\nvar buffer = \"\";\nvar pubSub = new PubSub();\nvar processedStreams = new Map();\nvar JsonStreamParser = /*#__PURE__*/function () {\n  function JsonStreamParser() {\n    var _this = this;\n    _classCallCheck(this, JsonStreamParser);\n    // clear expired entries every minute\n    setInterval(function () {\n      return _this.clearExpiredEntries();\n    }, 60 * 1000);\n  }\n  _createClass(JsonStreamParser, [{\n    key: \"subscribe\",\n    value: function subscribe(id, fn) {\n      pubSub.subscribe(id, fn);\n    }\n  }, {\n    key: \"feed\",\n    value: function feed(stream) {\n      var streamHash = this.hashString(stream);\n      if (processedStreams.has(streamHash)) {\n        return;\n      }\n      processedStreams.set(streamHash, Date.now());\n      buffer += stream;\n      var lastNewLineIndex = buffer.lastIndexOf('\\n');\n      if (lastNewLineIndex === -1) return;\n      var completeJSONs = buffer.substring(0, lastNewLineIndex);\n      buffer = buffer.substring(lastNewLineIndex + 1);\n      var jsonStrings = completeJSONs.split('\\n');\n      var _iterator2 = _createForOfIteratorHelper(jsonStrings),\n        _step2;\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var jsonString = _step2.value;\n          try {\n            var _data = JSON.parse(jsonString);\n            pubSub.publish(_data.id, _data);\n            // we have published the stream so it makes we delete the hash now\n            var _iterator3 = _createForOfIteratorHelper(processedStreams.entries()),\n              _step3;\n            try {\n              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n                var _step3$value = _slicedToArray(_step3.value, 1),\n                  _key = _step3$value[0];\n                processedStreams[\"delete\"](_key);\n              }\n            } catch (err) {\n              _iterator3.e(err);\n            } finally {\n              _iterator3.f();\n            }\n          } catch (e) {\n            console.error('Invalid JSON:', e);\n          }\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n      buffer = \"\";\n    }\n  }, {\n    key: \"clearExpiredEntries\",\n    value: function clearExpiredEntries() {\n      var oneSecondAgo = Date.now() - 1000;\n      var keysToDelete = [];\n      var _iterator4 = _createForOfIteratorHelper(processedStreams.entries()),\n        _step4;\n      try {\n        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {\n          var _step4$value = _slicedToArray(_step4.value, 2),\n            _key2 = _step4$value[0],\n            timestamp = _step4$value[1];\n          if (timestamp < oneSecondAgo) {\n            keysToDelete.push(_key2);\n          }\n        }\n\n        // Delete entries over multiple ticks\n      } catch (err) {\n        _iterator4.e(err);\n      } finally {\n        _iterator4.f();\n      }\n      keysToDelete.forEach(function (key, index) {\n        setTimeout(function () {\n          processedStreams[\"delete\"](key);\n        }, 0);\n      });\n    }\n  }, {\n    key: \"hashString\",\n    value: function hashString(s) {\n      var hash = 0;\n      for (var i = 0; i < s.length; i++) {\n        hash = Math.imul(31, hash) + s.charCodeAt(i) | 0;\n      }\n      return hash;\n    }\n  }]);\n  return JsonStreamParser;\n}();\n\n//# sourceURL=webpack://headlamp-ig/./src/gadgets/helper.ts?");

/***/ }),

/***/ "./src/gadgets/index.tsx":
/*!*******************************!*\
  !*** ./src/gadgets/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gadget)\n/* harmony export */ });\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kinvolk/headlamp-plugin/lib */ \"@kinvolk/headlamp-plugin/lib\");\n/* harmony import */ var _kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper */ \"./src/gadgets/helper.ts\");\n/* harmony import */ var _kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @kinvolk/headlamp-plugin/lib/CommonComponents */ \"@kinvolk/headlamp-plugin/lib/CommonComponents\");\n/* harmony import */ var _kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction GenericGadgetRenderer(props) {\n  var name = props.name,\n    category = props.category,\n    gadget = props.gadget,\n    dataAccessKey = props.dataAccessKey,\n    columns = props.columns,\n    gadgetID = props.gadgetID,\n    isDataAccessTypeObject = props.isDataAccessTypeObject;\n  var params = gadget.params,\n    operatorParamsCollection = gadget.operatorParamsCollection;\n  var decoder = new TextDecoder('utf-8');\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n    _useState2 = _slicedToArray(_useState, 2),\n    entries = _useState2[0],\n    setEntries = _useState2[1];\n  var _K8s$ResourceClasses$ = _kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_1__.K8s.ResourceClasses.Pod.useList(),\n    _K8s$ResourceClasses$2 = _slicedToArray(_K8s$ResourceClasses$, 2),\n    pods = _K8s$ResourceClasses$2[0],\n    error = _K8s$ResourceClasses$2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n    _useState4 = _slicedToArray(_useState3, 2),\n    igPod = _useState4[0],\n    setIGPod = _useState4[1];\n  var execRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n  console.log(\"params and operation params\", params, operatorParamsCollection);\n  function runGadgetWithActionAndPayload(socket, action, payload) {\n    socket.send('\\0' + JSON.stringify({\n      action: action,\n      payload: payload\n    }) + \"\\n\");\n  }\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!pods) {\n      return;\n    }\n    var igPod = pods === null || pods === void 0 ? void 0 : pods.find(_helper__WEBPACK_IMPORTED_MODULE_3__.isIGPod);\n    if (!igPod) {\n      return;\n    }\n    setIGPod(igPod);\n  }, [pods]);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    if (!igPod) {\n      return;\n    }\n    if (execRef.current) {\n      return;\n    }\n    execRef.current = igPod.exec('gadget', function () {}, {\n      command: [\"/usr/bin/socat\", \"/run/gadgetstreamingservice.socket\", \"-\"],\n      tty: false,\n      stdin: true,\n      stdout: true,\n      stderr: false\n    });\n    var socket = execRef.current.getSocket();\n    socket.addEventListener('message', function (event) {\n      var items = new Uint8Array(event.data);\n      var text = decoder.decode(items.slice(1));\n      if (new Uint8Array(items)[0] !== 1) {\n        return;\n      }\n      var parser = new _helper__WEBPACK_IMPORTED_MODULE_3__.JsonStreamParser();\n      parser.feed(text);\n    });\n    socket.addEventListener('open', function () {\n      return runGadgetWithActionAndPayload(socket, \"start\", {\n        gadgetName: name,\n        gadgetCategory: category,\n        id: gadgetID\n      });\n    });\n    return function () {\n      socket.removeEventListener('open', function () {\n        return runGadgetWithActionAndPayload(socket, \"stop\", {\n          gadgetName: name,\n          gadgetCategory: category,\n          id: gadgetID\n        });\n      });\n      execRef.current.cancel();\n    };\n  }, [igPod]);\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(function () {\n    _helper__WEBPACK_IMPORTED_MODULE_3__.pubSub.subscribe(gadgetID, function (data) {\n      var dataToUse = data;\n      if (dataAccessKey) {\n        dataToUse = data[dataAccessKey];\n      }\n      console.log(data);\n      if (isDataAccessTypeObject) {\n        setEntries(function (prev) {\n          return prev === null ? [dataToUse] : [].concat(_toConsumableArray(prev), [dataToUse]);\n        });\n      } else {\n        setEntries(function (prev) {\n          return prev === null ? _toConsumableArray(dataToUse) : [].concat(_toConsumableArray(prev), _toConsumableArray(dataToUse));\n        });\n      }\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_4__.SectionBox, {\n    title: name,\n    backLink: true,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_4__.SimpleTable, {\n      columns: columns,\n      data: entries\n    })\n  });\n}\nfunction Gadget() {\n  var location = (0,react_router__WEBPACK_IMPORTED_MODULE_0__.useLocation)();\n  var _useParams = (0,react_router__WEBPACK_IMPORTED_MODULE_0__.useParams)(),\n    gadget = _useParams.gadget,\n    category = _useParams.category;\n  var gadgetObj = location.state;\n  if (gadget === \"socket\" && category === \"snapshot\") {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(GenericGadgetRenderer, {\n      name: gadget,\n      category: category,\n      dataAccessKey: \"payload\",\n      gadgetID: \"socket-snapshot-gadget\",\n      gadget: gadgetObj,\n      columns: [{\n        label: 'Src',\n        getter: function getter(e) {\n          return \"\".concat(e.src.addr, \":\").concat(e.src.port);\n        }\n      }, {\n        label: 'Destination',\n        getter: function getter(e) {\n          return \"\".concat(e.dst.addr, \":\").concat(e.dst.port);\n        }\n      }, {\n        label: 'Node',\n        getter: function getter(e) {\n          return e.node;\n        }\n      }, {\n        label: 'Pod',\n        getter: function getter(e) {\n          return e.pod;\n        }\n      }, {\n        label: 'Protocol',\n        getter: function getter(e) {\n          return e.protocol;\n        }\n      }, {\n        label: 'Status',\n        getter: function getter(e) {\n          return e.status;\n        }\n      }]\n    });\n  }\n  if (gadget === \"process\" && category === \"snapshot\") {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(GenericGadgetRenderer, {\n      name: gadget,\n      category: category,\n      dataAccessKey: \"payload\",\n      gadgetID: \"process-snapshot-gadget\",\n      gadget: gadgetObj,\n      columns: [{\n        label: 'Command',\n        getter: function getter(e) {\n          return e.comm;\n        }\n      }, {\n        label: 'Container',\n        getter: function getter(e) {\n          return e.container;\n        }\n      }, {\n        label: 'mntns',\n        getter: function getter(e) {\n          return e.mountnsid;\n        }\n      }, {\n        label: 'Namespace',\n        getter: function getter(e) {\n          return e.namespace;\n        }\n      }, {\n        label: 'Node',\n        getter: function getter(e) {\n          return e.node;\n        }\n      }, {\n        label: 'Pid',\n        getter: function getter(e) {\n          return e.pid;\n        }\n      }, {\n        label: 'Pod',\n        getter: function getter(e) {\n          return e.pod;\n        }\n      }, {\n        label: 'ppid',\n        getter: function getter(e) {\n          return e.ppid;\n        }\n      }, {\n        label: 'tid',\n        getter: function getter(e) {\n          return e.tid;\n        }\n      }]\n    });\n  }\n  if (gadget === \"open\" && category === \"trace\") {\n    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(GenericGadgetRenderer, {\n      name: gadget,\n      category: category,\n      dataAccessKey: \"payload\",\n      gadgetID: \"open-trace-gadget\",\n      isDataAccessTypeObject: true,\n      gadget: gadgetObj,\n      columns: [{\n        label: 'Command',\n        getter: function getter(e) {\n          return e.comm;\n        }\n      }, {\n        label: 'Path',\n        getter: function getter(e) {\n          return e.path;\n        }\n      }, {\n        label: 'fd',\n        getter: function getter(e) {\n          return e.fd;\n        }\n      }, {\n        label: 'Ret',\n        getter: function getter(e) {\n          return e.ret;\n        }\n      }]\n    });\n  }\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"h1\", {\n      children: \"Gadget\"\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"p\", {\n      children: \"This is the Gadget page.\"\n    })]\n  });\n}\n\n//# sourceURL=webpack://headlamp-ig/./src/gadgets/index.tsx?");

/***/ }),

/***/ "./src/gadgets/list.tsx":
/*!******************************!*\
  !*** ./src/gadgets/list.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GadgetList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper */ \"./src/gadgets/helper.ts\");\n/* harmony import */ var _kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @kinvolk/headlamp-plugin/lib */ \"@kinvolk/headlamp-plugin/lib\");\n/* harmony import */ var _kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @kinvolk/headlamp-plugin/lib/CommonComponents */ \"@kinvolk/headlamp-plugin/lib/CommonComponents\");\n/* harmony import */ var _kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\nfunction GadgetList() {\n  var decoder = new TextDecoder('utf-8');\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    _useState2 = _slicedToArray(_useState, 2),\n    gadgets = _useState2[0],\n    setGadgets = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    _useState4 = _slicedToArray(_useState3, 2),\n    operators = _useState4[0],\n    setOperators = _useState4[1];\n  var _K8s$ResourceClasses$ = _kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_2__.K8s.ResourceClasses.Pod.useList(),\n    _K8s$ResourceClasses$2 = _slicedToArray(_K8s$ResourceClasses$, 2),\n    pods = _K8s$ResourceClasses$2[0],\n    error = _K8s$ResourceClasses$2[1];\n  var gadgetID = \"app-catalog\";\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    _useState6 = _slicedToArray(_useState5, 2),\n    igPod = _useState6[0],\n    setIGPod = _useState6[1];\n  var execRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null);\n  function runGadgetWithActionAndPayload(socket, action, payload, other) {\n    socket.send('\\0' + JSON.stringify(_objectSpread({\n      action: action,\n      payload: payload\n    }, other)) + \"\\n\");\n  }\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!pods) {\n      return;\n    }\n    var igPod = pods === null || pods === void 0 ? void 0 : pods.find(_helper__WEBPACK_IMPORTED_MODULE_1__.isIGPod);\n    if (!igPod) {\n      return;\n    }\n    setIGPod(igPod);\n  }, [pods]);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    if (!igPod) {\n      return;\n    }\n    if (execRef.current) {\n      return;\n    }\n    execRef.current = igPod.exec('gadget', function () {}, {\n      command: [\"/usr/bin/socat\", \"/run/gadgetstreamingservice.socket\", \"-\"],\n      tty: false,\n      stdin: true,\n      stdout: true,\n      stderr: false\n    });\n    var socket = execRef.current.getSocket();\n    socket.addEventListener('message', function (event) {\n      var items = new Uint8Array(event.data);\n      var text = decoder.decode(items.slice(1));\n      if (new Uint8Array(items)[0] !== 1) {\n        return;\n      }\n      var parser = new _helper__WEBPACK_IMPORTED_MODULE_1__.JsonStreamParser();\n      parser.feed(text);\n    });\n    socket.addEventListener('open', function () {\n      return runGadgetWithActionAndPayload(socket, \"catalog\", {}, {\n        id: gadgetID\n      });\n    });\n    return function () {\n      socket.removeEventListener('open', function () {\n        return runGadgetWithActionAndPayload(socket, \"catalog\", {}, {\n          id: gadgetID\n        });\n      });\n      execRef.current.cancel();\n    };\n  }, [igPod]);\n  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {\n    _helper__WEBPACK_IMPORTED_MODULE_1__.pubSub.subscribe(gadgetID, function (data) {\n      setGadgets(data.payload.Gadgets);\n      setOperators(data.payload.Operators);\n      console.log(\"gadgets data \", data);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_3__.SectionBox, {\n      title: \"Gadgets\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_3__.SimpleTable, {\n        columns: [{\n          label: \"Name\",\n          getter: function getter(gadget) {\n            return gadget.category == \"\" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_3__.Link, {\n              routeName: \"/gadgets/:gadget\",\n              params: {\n                gadget: gadget.name\n              },\n              state: gadget,\n              children: gadget.name\n            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_kinvolk_headlamp_plugin_lib_CommonComponents__WEBPACK_IMPORTED_MODULE_3__.Link, {\n              routeName: \"/gadgets/:gadget/:category\",\n              params: {\n                gadget: gadget.name,\n                category: gadget.category\n              },\n              state: gadget,\n              children: gadget.name\n            });\n          }\n        }, {\n          label: 'Type',\n          getter: function getter(gadget) {\n            return gadget.type;\n          }\n        }, {\n          label: 'Category',\n          getter: function getter(gadget) {\n            return gadget.category;\n          }\n        }, {\n          label: \"Description\",\n          getter: function getter(gadget) {\n            return gadget.description;\n          }\n        }],\n        data: gadgets\n      })\n    })\n  });\n}\n\n//# sourceURL=webpack://headlamp-ig/./src/gadgets/list.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kinvolk/headlamp-plugin/lib */ \"@kinvolk/headlamp-plugin/lib\");\n/* harmony import */ var _kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _gadgets_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gadgets/list */ \"./src/gadgets/list.tsx\");\n/* harmony import */ var _gadgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gadgets */ \"./src/gadgets/index.tsx\");\n\n\n\n//import Gadget from \"./gadget\";\n\n(0,_kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_0__.registerSidebarEntry)({\n  name: \"gadgets\",\n  icon: \"mdi:usb\",\n  url: \"/gadgets\",\n  parent: null,\n  label: \"Gadgets\"\n});\n(0,_kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_0__.registerRoute)({\n  path: \"/gadgets\",\n  component: _gadgets_list__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  exact: true,\n  sidebar: 'gadgets',\n  name: \"gadgets\"\n});\n(0,_kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_0__.registerRoute)({\n  path: \"/gadgets/:gadget\",\n  component: _gadgets__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true,\n  sidebar: 'gadgets',\n  name: \"gadgets\"\n});\n(0,_kinvolk_headlamp_plugin_lib__WEBPACK_IMPORTED_MODULE_0__.registerRoute)({\n  path: \"/gadgets/:gadget/:category\",\n  component: _gadgets__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  exact: true,\n  sidebar: 'gadgets',\n  name: \"gadgets\"\n});\n\n//# sourceURL=webpack://headlamp-ig/./src/index.tsx?");

/***/ }),

/***/ "@kinvolk/headlamp-plugin/lib":
/*!****************************!*\
  !*** external "pluginLib" ***!
  \****************************/
/***/ ((module) => {

module.exports = pluginLib;

/***/ }),

/***/ "@kinvolk/headlamp-plugin/lib/CommonComponents":
/*!*********************************************!*\
  !*** external "pluginLib.CommonComponents" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = pluginLib.CommonComponents;

/***/ }),

/***/ "react":
/*!**********************************!*\
  !*** external "pluginLib.React" ***!
  \**********************************/
/***/ ((module) => {

module.exports = pluginLib.React;

/***/ }),

/***/ "react/jsx-runtime":
/*!*************************************!*\
  !*** external "pluginLib.ReactJSX" ***!
  \*************************************/
/***/ ((module) => {

module.exports = pluginLib.ReactJSX;

/***/ }),

/***/ "react-router":
/*!****************************************!*\
  !*** external "pluginLib.ReactRouter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = pluginLib.ReactRouter;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;