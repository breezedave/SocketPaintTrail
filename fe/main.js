/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */
// eslint-disable-next-line complexity

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // Is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  args[0] = (this.useColors ? '%c' : '') + this.namespace + (this.useColors ? ' %c' : ' ') + args[0] + (this.useColors ? '%c ' : ' ') + '+' + module.exports.humanize(this.diff);

  if (!this.useColors) {
    return;
  }

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // The final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if (match === '%%') {
      return;
    }

    index++;

    if (match === '%c') {
      // We only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  var _console;

  // This hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return (typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.log && (_console = console).log.apply(_console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (namespaces) {
      exports.storage.setItem('debug', namespaces);
    } else {
      exports.storage.removeItem('debug');
    }
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.getItem('debug');
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  } // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */


function localstorage() {
  try {
    // TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    // The Browser also has localStorage in the global context.
    return localStorage;
  } catch (error) {// Swallow
    // XXX (@Qix-) should we be logging these?
  }
}

module.exports = __webpack_require__(26)(exports);
var formatters = module.exports.formatters;
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (error) {
    return '[UnexpectedJSONParseError]: ' + error.message;
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var keys = __webpack_require__(40);

var hasBinary = __webpack_require__(18);

var sliceBuffer = __webpack_require__(41);

var after = __webpack_require__(42);

var utf8 = __webpack_require__(43);

var base64encoder;

if (typeof ArrayBuffer !== 'undefined') {
  base64encoder = __webpack_require__(44);
}
/**
 * Check if we are running an android browser. That requires us to use
 * ArrayBuffer with polling transports...
 *
 * http://ghinda.net/jpeg-blob-ajax-android/
 */


var isAndroid = typeof navigator !== 'undefined' && /Android/i.test(navigator.userAgent);
/**
 * Check if we are running in PhantomJS.
 * Uploading a Blob with PhantomJS does not work correctly, as reported here:
 * https://github.com/ariya/phantomjs/issues/11395
 * @type boolean
 */

var isPhantomJS = typeof navigator !== 'undefined' && /PhantomJS/i.test(navigator.userAgent);
/**
 * When true, avoids using Blobs to encode payloads.
 * @type boolean
 */

var dontSendBlobs = isAndroid || isPhantomJS;
/**
 * Current protocol version.
 */

exports.protocol = 3;
/**
 * Packet types.
 */

var packets = exports.packets = {
  open: 0 // non-ws
  ,
  close: 1 // non-ws
  ,
  ping: 2,
  pong: 3,
  message: 4,
  upgrade: 5,
  noop: 6
};
var packetslist = keys(packets);
/**
 * Premade error packet.
 */

var err = {
  type: 'error',
  data: 'parser error'
};
/**
 * Create a blob api even for blob builder when vendor prefixes exist
 */

var Blob = __webpack_require__(45);
/**
 * Encodes a packet.
 *
 *     <packet type id> [ <data> ]
 *
 * Example:
 *
 *     5hello world
 *     3
 *     4
 *
 * Binary is encoded in an identical principle
 *
 * @api private
 */


exports.encodePacket = function (packet, supportsBinary, utf8encode, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = false;
  }

  if (typeof utf8encode === 'function') {
    callback = utf8encode;
    utf8encode = null;
  }

  var data = packet.data === undefined ? undefined : packet.data.buffer || packet.data;

  if (typeof ArrayBuffer !== 'undefined' && data instanceof ArrayBuffer) {
    return encodeArrayBuffer(packet, supportsBinary, callback);
  } else if (typeof Blob !== 'undefined' && data instanceof Blob) {
    return encodeBlob(packet, supportsBinary, callback);
  } // might be an object with { base64: true, data: dataAsBase64String }


  if (data && data.base64) {
    return encodeBase64Object(packet, callback);
  } // Sending data as a utf-8 string


  var encoded = packets[packet.type]; // data fragment is optional

  if (undefined !== packet.data) {
    encoded += utf8encode ? utf8.encode(String(packet.data), {
      strict: false
    }) : String(packet.data);
  }

  return callback('' + encoded);
};

function encodeBase64Object(packet, callback) {
  // packet data is an object { base64: true, data: dataAsBase64String }
  var message = 'b' + exports.packets[packet.type] + packet.data.data;
  return callback(message);
}
/**
 * Encode packet helpers for binary types
 */


function encodeArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var data = packet.data;
  var contentArray = new Uint8Array(data);
  var resultBuffer = new Uint8Array(1 + data.byteLength);
  resultBuffer[0] = packets[packet.type];

  for (var i = 0; i < contentArray.length; i++) {
    resultBuffer[i + 1] = contentArray[i];
  }

  return callback(resultBuffer.buffer);
}

function encodeBlobAsArrayBuffer(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  var fr = new FileReader();

  fr.onload = function () {
    exports.encodePacket({
      type: packet.type,
      data: fr.result
    }, supportsBinary, true, callback);
  };

  return fr.readAsArrayBuffer(packet.data);
}

function encodeBlob(packet, supportsBinary, callback) {
  if (!supportsBinary) {
    return exports.encodeBase64Packet(packet, callback);
  }

  if (dontSendBlobs) {
    return encodeBlobAsArrayBuffer(packet, supportsBinary, callback);
  }

  var length = new Uint8Array(1);
  length[0] = packets[packet.type];
  var blob = new Blob([length.buffer, packet.data]);
  return callback(blob);
}
/**
 * Encodes a packet with binary data in a base64 string
 *
 * @param {Object} packet, has `type` and `data`
 * @return {String} base64 encoded message
 */


exports.encodeBase64Packet = function (packet, callback) {
  var message = 'b' + exports.packets[packet.type];

  if (typeof Blob !== 'undefined' && packet.data instanceof Blob) {
    var fr = new FileReader();

    fr.onload = function () {
      var b64 = fr.result.split(',')[1];
      callback(message + b64);
    };

    return fr.readAsDataURL(packet.data);
  }

  var b64data;

  try {
    b64data = String.fromCharCode.apply(null, new Uint8Array(packet.data));
  } catch (e) {
    // iPhone Safari doesn't let you apply with typed arrays
    var typed = new Uint8Array(packet.data);
    var basic = new Array(typed.length);

    for (var i = 0; i < typed.length; i++) {
      basic[i] = typed[i];
    }

    b64data = String.fromCharCode.apply(null, basic);
  }

  message += btoa(b64data);
  return callback(message);
};
/**
 * Decodes a packet. Changes format to Blob if requested.
 *
 * @return {Object} with `type` and `data` (if any)
 * @api private
 */


exports.decodePacket = function (data, binaryType, utf8decode) {
  if (data === undefined) {
    return err;
  } // String data


  if (typeof data === 'string') {
    if (data.charAt(0) === 'b') {
      return exports.decodeBase64Packet(data.substr(1), binaryType);
    }

    if (utf8decode) {
      data = tryDecode(data);

      if (data === false) {
        return err;
      }
    }

    var type = data.charAt(0);

    if (Number(type) != type || !packetslist[type]) {
      return err;
    }

    if (data.length > 1) {
      return {
        type: packetslist[type],
        data: data.substring(1)
      };
    } else {
      return {
        type: packetslist[type]
      };
    }
  }

  var asArray = new Uint8Array(data);
  var type = asArray[0];
  var rest = sliceBuffer(data, 1);

  if (Blob && binaryType === 'blob') {
    rest = new Blob([rest]);
  }

  return {
    type: packetslist[type],
    data: rest
  };
};

function tryDecode(data) {
  try {
    data = utf8.decode(data, {
      strict: false
    });
  } catch (e) {
    return false;
  }

  return data;
}
/**
 * Decodes a packet encoded in a base64 string
 *
 * @param {String} base64 encoded message
 * @return {Object} with `type` and `data` (if any)
 */


exports.decodeBase64Packet = function (msg, binaryType) {
  var type = packetslist[msg.charAt(0)];

  if (!base64encoder) {
    return {
      type: type,
      data: {
        base64: true,
        data: msg.substr(1)
      }
    };
  }

  var data = base64encoder.decode(msg.substr(1));

  if (binaryType === 'blob' && Blob) {
    data = new Blob([data]);
  }

  return {
    type: type,
    data: data
  };
};
/**
 * Encodes multiple messages (payload).
 *
 *     <length>:data
 *
 * Example:
 *
 *     11:hello world2:hi
 *
 * If any contents are binary, they will be encoded as base64 strings. Base64
 * encoded strings are marked with a b before the length specifier
 *
 * @param {Array} packets
 * @api private
 */


exports.encodePayload = function (packets, supportsBinary, callback) {
  if (typeof supportsBinary === 'function') {
    callback = supportsBinary;
    supportsBinary = null;
  }

  var isBinary = hasBinary(packets);

  if (supportsBinary && isBinary) {
    if (Blob && !dontSendBlobs) {
      return exports.encodePayloadAsBlob(packets, callback);
    }

    return exports.encodePayloadAsArrayBuffer(packets, callback);
  }

  if (!packets.length) {
    return callback('0:');
  }

  function setLengthHeader(message) {
    return message.length + ':' + message;
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, !isBinary ? false : supportsBinary, false, function (message) {
      doneCallback(null, setLengthHeader(message));
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(results.join(''));
  });
};
/**
 * Async array map using after
 */


function map(ary, each, done) {
  var result = new Array(ary.length);
  var next = after(ary.length, done);

  var eachWithIndex = function eachWithIndex(i, el, cb) {
    each(el, function (error, msg) {
      result[i] = msg;
      cb(error, result);
    });
  };

  for (var i = 0; i < ary.length; i++) {
    eachWithIndex(i, ary[i], next);
  }
}
/*
 * Decodes data when a payload is maybe expected. Possible binary contents are
 * decoded from their base64 representation
 *
 * @param {String} data, callback method
 * @api public
 */


exports.decodePayload = function (data, binaryType, callback) {
  if (typeof data !== 'string') {
    return exports.decodePayloadAsBinary(data, binaryType, callback);
  }

  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var packet;

  if (data === '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }

  var length = '',
      n,
      msg;

  for (var i = 0, l = data.length; i < l; i++) {
    var chr = data.charAt(i);

    if (chr !== ':') {
      length += chr;
      continue;
    }

    if (length === '' || length != (n = Number(length))) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    msg = data.substr(i + 1, n);

    if (length != msg.length) {
      // parser error - ignoring payload
      return callback(err, 0, 1);
    }

    if (msg.length) {
      packet = exports.decodePacket(msg, binaryType, false);

      if (err.type === packet.type && err.data === packet.data) {
        // parser error in individual packet - ignoring payload
        return callback(err, 0, 1);
      }

      var ret = callback(packet, i + n, l);
      if (false === ret) return;
    } // advance cursor


    i += n;
    length = '';
  }

  if (length !== '') {
    // parser error - ignoring payload
    return callback(err, 0, 1);
  }
};
/**
 * Encodes multiple messages (payload) as binary.
 *
 * <1 = binary, 0 = string><number from 0-9><number from 0-9>[...]<number
 * 255><data>
 *
 * Example:
 * 1 3 255 1 2 3, if the binary contents are interpreted as 8 bit integers
 *
 * @param {Array} packets
 * @return {ArrayBuffer} encoded payload
 * @api private
 */


exports.encodePayloadAsArrayBuffer = function (packets, callback) {
  if (!packets.length) {
    return callback(new ArrayBuffer(0));
  }

  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (data) {
      return doneCallback(null, data);
    });
  }

  map(packets, encodeOne, function (err, encodedPackets) {
    var totalLength = encodedPackets.reduce(function (acc, p) {
      var len;

      if (typeof p === 'string') {
        len = p.length;
      } else {
        len = p.byteLength;
      }

      return acc + len.toString().length + len + 2; // string/binary identifier + separator = 2
    }, 0);
    var resultArray = new Uint8Array(totalLength);
    var bufferIndex = 0;
    encodedPackets.forEach(function (p) {
      var isString = typeof p === 'string';
      var ab = p;

      if (isString) {
        var view = new Uint8Array(p.length);

        for (var i = 0; i < p.length; i++) {
          view[i] = p.charCodeAt(i);
        }

        ab = view.buffer;
      }

      if (isString) {
        // not true binary
        resultArray[bufferIndex++] = 0;
      } else {
        // true binary
        resultArray[bufferIndex++] = 1;
      }

      var lenStr = ab.byteLength.toString();

      for (var i = 0; i < lenStr.length; i++) {
        resultArray[bufferIndex++] = parseInt(lenStr[i]);
      }

      resultArray[bufferIndex++] = 255;
      var view = new Uint8Array(ab);

      for (var i = 0; i < view.length; i++) {
        resultArray[bufferIndex++] = view[i];
      }
    });
    return callback(resultArray.buffer);
  });
};
/**
 * Encode as Blob
 */


exports.encodePayloadAsBlob = function (packets, callback) {
  function encodeOne(packet, doneCallback) {
    exports.encodePacket(packet, true, true, function (encoded) {
      var binaryIdentifier = new Uint8Array(1);
      binaryIdentifier[0] = 1;

      if (typeof encoded === 'string') {
        var view = new Uint8Array(encoded.length);

        for (var i = 0; i < encoded.length; i++) {
          view[i] = encoded.charCodeAt(i);
        }

        encoded = view.buffer;
        binaryIdentifier[0] = 0;
      }

      var len = encoded instanceof ArrayBuffer ? encoded.byteLength : encoded.size;
      var lenStr = len.toString();
      var lengthAry = new Uint8Array(lenStr.length + 1);

      for (var i = 0; i < lenStr.length; i++) {
        lengthAry[i] = parseInt(lenStr[i]);
      }

      lengthAry[lenStr.length] = 255;

      if (Blob) {
        var blob = new Blob([binaryIdentifier.buffer, lengthAry.buffer, encoded]);
        doneCallback(null, blob);
      }
    });
  }

  map(packets, encodeOne, function (err, results) {
    return callback(new Blob(results));
  });
};
/*
 * Decodes data when a payload is maybe expected. Strings are decoded by
 * interpreting each byte as a key code for entries marked to start with 0. See
 * description of encodePayloadAsBinary
 *
 * @param {ArrayBuffer} data, callback method
 * @api public
 */


exports.decodePayloadAsBinary = function (data, binaryType, callback) {
  if (typeof binaryType === 'function') {
    callback = binaryType;
    binaryType = null;
  }

  var bufferTail = data;
  var buffers = [];

  while (bufferTail.byteLength > 0) {
    var tailArray = new Uint8Array(bufferTail);
    var isString = tailArray[0] === 0;
    var msgLength = '';

    for (var i = 1;; i++) {
      if (tailArray[i] === 255) break; // 310 = char length of Number.MAX_VALUE

      if (msgLength.length > 310) {
        return callback(err, 0, 1);
      }

      msgLength += tailArray[i];
    }

    bufferTail = sliceBuffer(bufferTail, 2 + msgLength.length);
    msgLength = parseInt(msgLength);
    var msg = sliceBuffer(bufferTail, 0, msgLength);

    if (isString) {
      try {
        msg = String.fromCharCode.apply(null, new Uint8Array(msg));
      } catch (e) {
        // iPhone Safari doesn't let you apply to typed arrays
        var typed = new Uint8Array(msg);
        msg = '';

        for (var i = 0; i < typed.length; i++) {
          msg += String.fromCharCode(typed[i]);
        }
      }
    }

    buffers.push(msg);
    bufferTail = sliceBuffer(bufferTail, msgLength);
  }

  var total = buffers.length;
  buffers.forEach(function (buffer, i) {
    callback(exports.decodePacket(buffer, binaryType, true), i, total);
  });
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Compiles a querystring
 * Returns string representation of the object
 *
 * @param {Object}
 * @api private
 */
exports.encode = function (obj) {
  var str = '';

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (str.length) str += '&';
      str += encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]);
    }
  }

  return str;
};
/**
 * Parses a simple querystring into an object
 *
 * @param {String} qs
 * @api private
 */


exports.decode = function (qs) {
  var qry = {};
  var pairs = qs.split('&');

  for (var i = 0, l = pairs.length; i < l; i++) {
    var pair = pairs[i].split('=');
    qry[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return qry;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (a, b) {
  var fn = function fn() {};

  fn.prototype = b.prototype;
  a.prototype = new fn();
  a.prototype.constructor = a;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var debug = __webpack_require__(28)('socket.io-parser');

var Emitter = __webpack_require__(5);

var binary = __webpack_require__(31);

var isArray = __webpack_require__(6);

var isBuf = __webpack_require__(14);
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = 4;
/**
 * Packet types.
 *
 * @api public
 */

exports.types = ['CONNECT', 'DISCONNECT', 'EVENT', 'ACK', 'ERROR', 'BINARY_EVENT', 'BINARY_ACK'];
/**
 * Packet type `connect`.
 *
 * @api public
 */

exports.CONNECT = 0;
/**
 * Packet type `disconnect`.
 *
 * @api public
 */

exports.DISCONNECT = 1;
/**
 * Packet type `event`.
 *
 * @api public
 */

exports.EVENT = 2;
/**
 * Packet type `ack`.
 *
 * @api public
 */

exports.ACK = 3;
/**
 * Packet type `error`.
 *
 * @api public
 */

exports.ERROR = 4;
/**
 * Packet type 'binary event'
 *
 * @api public
 */

exports.BINARY_EVENT = 5;
/**
 * Packet type `binary ack`. For acks with binary arguments.
 *
 * @api public
 */

exports.BINARY_ACK = 6;
/**
 * Encoder constructor.
 *
 * @api public
 */

exports.Encoder = Encoder;
/**
 * Decoder constructor.
 *
 * @api public
 */

exports.Decoder = Decoder;
/**
 * A socket.io Encoder instance
 *
 * @api public
 */

function Encoder() {}

var ERROR_PACKET = exports.ERROR + '"encode error"';
/**
 * Encode a packet as a single string if non-binary, or as a
 * buffer sequence, depending on packet type.
 *
 * @param {Object} obj - packet object
 * @param {Function} callback - function to handle encodings (likely engine.write)
 * @return Calls callback with Array of encodings
 * @api public
 */

Encoder.prototype.encode = function (obj, callback) {
  debug('encoding packet %j', obj);

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    encodeAsBinary(obj, callback);
  } else {
    var encoding = encodeAsString(obj);
    callback([encoding]);
  }
};
/**
 * Encode packet as string.
 *
 * @param {Object} packet
 * @return {String} encoded
 * @api private
 */


function encodeAsString(obj) {
  // first is type
  var str = '' + obj.type; // attachments if we have them

  if (exports.BINARY_EVENT === obj.type || exports.BINARY_ACK === obj.type) {
    str += obj.attachments + '-';
  } // if we have a namespace other than `/`
  // we append it followed by a comma `,`


  if (obj.nsp && '/' !== obj.nsp) {
    str += obj.nsp + ',';
  } // immediately followed by the id


  if (null != obj.id) {
    str += obj.id;
  } // json data


  if (null != obj.data) {
    var payload = tryStringify(obj.data);

    if (payload !== false) {
      str += payload;
    } else {
      return ERROR_PACKET;
    }
  }

  debug('encoded %j as %s', obj, str);
  return str;
}

function tryStringify(str) {
  try {
    return JSON.stringify(str);
  } catch (e) {
    return false;
  }
}
/**
 * Encode packet as 'buffer sequence' by removing blobs, and
 * deconstructing packet into object with placeholders and
 * a list of buffers.
 *
 * @param {Object} packet
 * @return {Buffer} encoded
 * @api private
 */


function encodeAsBinary(obj, callback) {
  function writeEncoding(bloblessData) {
    var deconstruction = binary.deconstructPacket(bloblessData);
    var pack = encodeAsString(deconstruction.packet);
    var buffers = deconstruction.buffers;
    buffers.unshift(pack); // add packet info to beginning of data list

    callback(buffers); // write all the buffers
  }

  binary.removeBlobs(obj, writeEncoding);
}
/**
 * A socket.io Decoder instance
 *
 * @return {Object} decoder
 * @api public
 */


function Decoder() {
  this.reconstructor = null;
}
/**
 * Mix in `Emitter` with Decoder.
 */


Emitter(Decoder.prototype);
/**
 * Decodes an encoded packet string into packet JSON.
 *
 * @param {String} obj - encoded packet
 * @return {Object} packet
 * @api public
 */

Decoder.prototype.add = function (obj) {
  var packet;

  if (typeof obj === 'string') {
    packet = decodeString(obj);

    if (exports.BINARY_EVENT === packet.type || exports.BINARY_ACK === packet.type) {
      // binary packet's json
      this.reconstructor = new BinaryReconstructor(packet); // no attachments, labeled binary but no binary data to follow

      if (this.reconstructor.reconPack.attachments === 0) {
        this.emit('decoded', packet);
      }
    } else {
      // non-binary full packet
      this.emit('decoded', packet);
    }
  } else if (isBuf(obj) || obj.base64) {
    // raw binary data
    if (!this.reconstructor) {
      throw new Error('got binary data when not reconstructing a packet');
    } else {
      packet = this.reconstructor.takeBinaryData(obj);

      if (packet) {
        // received final buffer
        this.reconstructor = null;
        this.emit('decoded', packet);
      }
    }
  } else {
    throw new Error('Unknown type: ' + obj);
  }
};
/**
 * Decode a packet String (JSON data)
 *
 * @param {String} str
 * @return {Object} packet
 * @api private
 */


function decodeString(str) {
  var i = 0; // look up type

  var p = {
    type: Number(str.charAt(0))
  };

  if (null == exports.types[p.type]) {
    return error('unknown packet type ' + p.type);
  } // look up attachments if type binary


  if (exports.BINARY_EVENT === p.type || exports.BINARY_ACK === p.type) {
    var buf = '';

    while (str.charAt(++i) !== '-') {
      buf += str.charAt(i);
      if (i == str.length) break;
    }

    if (buf != Number(buf) || str.charAt(i) !== '-') {
      throw new Error('Illegal attachments');
    }

    p.attachments = Number(buf);
  } // look up namespace (if any)


  if ('/' === str.charAt(i + 1)) {
    p.nsp = '';

    while (++i) {
      var c = str.charAt(i);
      if (',' === c) break;
      p.nsp += c;
      if (i === str.length) break;
    }
  } else {
    p.nsp = '/';
  } // look up id


  var next = str.charAt(i + 1);

  if ('' !== next && Number(next) == next) {
    p.id = '';

    while (++i) {
      var c = str.charAt(i);

      if (null == c || Number(c) != c) {
        --i;
        break;
      }

      p.id += str.charAt(i);
      if (i === str.length) break;
    }

    p.id = Number(p.id);
  } // look up json data


  if (str.charAt(++i)) {
    var payload = tryParse(str.substr(i));
    var isPayloadValid = payload !== false && (p.type === exports.ERROR || isArray(payload));

    if (isPayloadValid) {
      p.data = payload;
    } else {
      return error('invalid payload');
    }
  }

  debug('decoded %s as %j', str, p);
  return p;
}

function tryParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return false;
  }
}
/**
 * Deallocates a parser's resources
 *
 * @api public
 */


Decoder.prototype.destroy = function () {
  if (this.reconstructor) {
    this.reconstructor.finishedReconstruction();
  }
};
/**
 * A manager of a binary event's 'buffer sequence'. Should
 * be constructed whenever a packet of type BINARY_EVENT is
 * decoded.
 *
 * @param {Object} packet
 * @return {BinaryReconstructor} initialized reconstructor
 * @api private
 */


function BinaryReconstructor(packet) {
  this.reconPack = packet;
  this.buffers = [];
}
/**
 * Method to be called when binary data received from connection
 * after a BINARY_EVENT packet.
 *
 * @param {Buffer | ArrayBuffer} binData - the raw binary data received
 * @return {null | Object} returns null if more binary data is expected or
 *   a reconstructed packet object if all buffers have been received.
 * @api private
 */


BinaryReconstructor.prototype.takeBinaryData = function (binData) {
  this.buffers.push(binData);

  if (this.buffers.length === this.reconPack.attachments) {
    // done with buffer list
    var packet = binary.reconstructPacket(this.reconPack, this.buffers);
    this.finishedReconstruction();
    return packet;
  }

  return null;
};
/**
 * Cleans up binary packet reconstruction variables.
 *
 * @api private
 */


BinaryReconstructor.prototype.finishedReconstruction = function () {
  this.reconPack = null;
  this.buffers = [];
};

function error(msg) {
  return {
    type: exports.ERROR,
    data: 'parser error: ' + msg
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1),
      callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__(33);

var ieee754 = __webpack_require__(34);

var isArray = __webpack_require__(35);

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// browser shim for xmlhttprequest module
var hasCORS = __webpack_require__(38);

var globalThis = __webpack_require__(9);

module.exports = function (opts) {
  var xdomain = opts.xdomain; // scheme must be same when usign XDomainRequest
  // http://blogs.msdn.com/b/ieinternals/archive/2010/05/13/xdomainrequest-restrictions-limitations-and-workarounds.aspx

  var xscheme = opts.xscheme; // XDomainRequest has a flow of not sending cookie, therefore it should be disabled as a default.
  // https://github.com/Automattic/engine.io-client/pull/217

  var enablesXDR = opts.enablesXDR; // XMLHttpRequest can be disabled on IE

  try {
    if ('undefined' !== typeof XMLHttpRequest && (!xdomain || hasCORS)) {
      return new XMLHttpRequest();
    }
  } catch (e) {} // Use XDomainRequest for IE8 if enablesXDR is true
  // because loading bar keeps flashing when using jsonp-polling
  // https://github.com/yujiosaka/socke.io-ie8-loading-example


  try {
    if ('undefined' !== typeof XDomainRequest && !xscheme && enablesXDR) {
      return new XDomainRequest();
    }
  } catch (e) {}

  if (!xdomain) {
    try {
      return new globalThis[['Active'].concat('Object').join('X')]('Microsoft.XMLHTTP');
    } catch (e) {}
  }
};

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function () {
  if (typeof self !== 'undefined') {
    return self;
  } else if (typeof window !== 'undefined') {
    return window;
  } else {
    return Function('return this')(); // eslint-disable-line no-new-func
  }
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parser = __webpack_require__(1);

var Emitter = __webpack_require__(11);
/**
 * Module exports.
 */


module.exports = Transport;
/**
 * Transport abstract constructor.
 *
 * @param {Object} options.
 * @api private
 */

function Transport(opts) {
  this.path = opts.path;
  this.hostname = opts.hostname;
  this.port = opts.port;
  this.secure = opts.secure;
  this.query = opts.query;
  this.timestampParam = opts.timestampParam;
  this.timestampRequests = opts.timestampRequests;
  this.readyState = '';
  this.agent = opts.agent || false;
  this.socket = opts.socket;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized;
  this.forceNode = opts.forceNode; // results of ReactNative environment detection

  this.isReactNative = opts.isReactNative; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.localAddress = opts.localAddress;
}
/**
 * Mix in `Emitter`.
 */


Emitter(Transport.prototype);
/**
 * Emits an error.
 *
 * @param {String} str
 * @return {Transport} for chaining
 * @api public
 */

Transport.prototype.onError = function (msg, desc) {
  var err = new Error(msg);
  err.type = 'TransportError';
  err.description = desc;
  this.emit('error', err);
  return this;
};
/**
 * Opens the transport.
 *
 * @api public
 */


Transport.prototype.open = function () {
  if ('closed' === this.readyState || '' === this.readyState) {
    this.readyState = 'opening';
    this.doOpen();
  }

  return this;
};
/**
 * Closes the transport.
 *
 * @api private
 */


Transport.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.doClose();
    this.onClose();
  }

  return this;
};
/**
 * Sends multiple packets.
 *
 * @param {Array} packets
 * @api private
 */


Transport.prototype.send = function (packets) {
  if ('open' === this.readyState) {
    this.write(packets);
  } else {
    throw new Error('Transport not open');
  }
};
/**
 * Called upon open
 *
 * @api private
 */


Transport.prototype.onOpen = function () {
  this.readyState = 'open';
  this.writable = true;
  this.emit('open');
};
/**
 * Called with data.
 *
 * @param {String} data
 * @api private
 */


Transport.prototype.onData = function (data) {
  var packet = parser.decodePacket(data, this.socket.binaryType);
  this.onPacket(packet);
};
/**
 * Called with a decoded packet.
 */


Transport.prototype.onPacket = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon close.
 *
 * @api private
 */


Transport.prototype.onClose = function () {
  this.readyState = 'closed';
  this.emit('close');
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Expose `Emitter`.
 */
if (true) {
  module.exports = Emitter;
}
/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */


function Emitter(obj) {
  if (obj) return mixin(obj);
}

;
/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }

  return obj;
}
/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
  return this;
};
/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.once = function (event, fn) {
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};
/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */


Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
  this._callbacks = this._callbacks || {}; // all

  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  } // specific event


  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this; // remove all handlers

  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  } // remove specific handler


  var cb;

  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];

    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  } // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.


  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};
/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */


Emitter.prototype.emit = function (event) {
  this._callbacks = this._callbacks || {};
  var args = new Array(arguments.length - 1),
      callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);

    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};
/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */


Emitter.prototype.listeners = function (event) {
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};
/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */


Emitter.prototype.hasListeners = function (event) {
  return !!this.listeners(event).length;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Parses an URI
 *
 * @author Steven Levithan <stevenlevithan.com> (MIT license)
 * @api private
 */
var re = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var parts = ['source', 'protocol', 'authority', 'userInfo', 'user', 'password', 'host', 'port', 'relative', 'path', 'directory', 'file', 'query', 'anchor'];

module.exports = function parseuri(str) {
  var src = str,
      b = str.indexOf('['),
      e = str.indexOf(']');

  if (b != -1 && e != -1) {
    str = str.substring(0, b) + str.substring(b, e).replace(/:/g, ';') + str.substring(e, str.length);
  }

  var m = re.exec(str || ''),
      uri = {},
      i = 14;

  while (i--) {
    uri[parts[i]] = m[i] || '';
  }

  if (b != -1 && e != -1) {
    uri.source = src;
    uri.host = uri.host.substring(1, uri.host.length - 1).replace(/;/g, ':');
    uri.authority = uri.authority.replace('[', '').replace(']', '').replace(/;/g, ':');
    uri.ipv6uri = true;
  }

  return uri;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = isBuf;
var withNativeBuffer = typeof Buffer === 'function' && typeof Buffer.isBuffer === 'function';
var withNativeArrayBuffer = typeof ArrayBuffer === 'function';

var isView = function isView(obj) {
  return typeof ArrayBuffer.isView === 'function' ? ArrayBuffer.isView(obj) : obj.buffer instanceof ArrayBuffer;
};
/**
 * Returns true if obj is a buffer or an arraybuffer.
 *
 * @api private
 */


function isBuf(obj) {
  return withNativeBuffer && Buffer.isBuffer(obj) || withNativeArrayBuffer && (obj instanceof ArrayBuffer || isView(obj));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7).Buffer))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Module dependencies.
 */
var eio = __webpack_require__(36);

var Socket = __webpack_require__(21);

var Emitter = __webpack_require__(5);

var parser = __webpack_require__(4);

var on = __webpack_require__(22);

var bind = __webpack_require__(23);

var debug = __webpack_require__(0)('socket.io-client:manager');

var indexOf = __webpack_require__(20);

var Backoff = __webpack_require__(50);
/**
 * IE6+ hasOwnProperty
 */


var has = Object.prototype.hasOwnProperty;
/**
 * Module exports
 */

module.exports = Manager;
/**
 * `Manager` constructor.
 *
 * @param {String} engine instance or engine uri/opts
 * @param {Object} options
 * @api public
 */

function Manager(uri, opts) {
  if (!(this instanceof Manager)) return new Manager(uri, opts);

  if (uri && 'object' === _typeof(uri)) {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  opts.path = opts.path || '/socket.io';
  this.nsps = {};
  this.subs = [];
  this.opts = opts;
  this.reconnection(opts.reconnection !== false);
  this.reconnectionAttempts(opts.reconnectionAttempts || Infinity);
  this.reconnectionDelay(opts.reconnectionDelay || 1000);
  this.reconnectionDelayMax(opts.reconnectionDelayMax || 5000);
  this.randomizationFactor(opts.randomizationFactor || 0.5);
  this.backoff = new Backoff({
    min: this.reconnectionDelay(),
    max: this.reconnectionDelayMax(),
    jitter: this.randomizationFactor()
  });
  this.timeout(null == opts.timeout ? 20000 : opts.timeout);
  this.readyState = 'closed';
  this.uri = uri;
  this.connecting = [];
  this.lastPing = null;
  this.encoding = false;
  this.packetBuffer = [];

  var _parser = opts.parser || parser;

  this.encoder = new _parser.Encoder();
  this.decoder = new _parser.Decoder();
  this.autoConnect = opts.autoConnect !== false;
  if (this.autoConnect) this.open();
}
/**
 * Propagate given event to sockets and emit on `this`
 *
 * @api private
 */


Manager.prototype.emitAll = function () {
  this.emit.apply(this, arguments);

  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].emit.apply(this.nsps[nsp], arguments);
    }
  }
};
/**
 * Update `socket.id` of all sockets
 *
 * @api private
 */


Manager.prototype.updateSocketIds = function () {
  for (var nsp in this.nsps) {
    if (has.call(this.nsps, nsp)) {
      this.nsps[nsp].id = this.generateId(nsp);
    }
  }
};
/**
 * generate `socket.id` for the given `nsp`
 *
 * @param {String} nsp
 * @return {String}
 * @api private
 */


Manager.prototype.generateId = function (nsp) {
  return (nsp === '/' ? '' : nsp + '#') + this.engine.id;
};
/**
 * Mix in `Emitter`.
 */


Emitter(Manager.prototype);
/**
 * Sets the `reconnection` config.
 *
 * @param {Boolean} true/false if it should automatically reconnect
 * @return {Manager} self or value
 * @api public
 */

Manager.prototype.reconnection = function (v) {
  if (!arguments.length) return this._reconnection;
  this._reconnection = !!v;
  return this;
};
/**
 * Sets the reconnection attempts config.
 *
 * @param {Number} max reconnection attempts before giving up
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionAttempts = function (v) {
  if (!arguments.length) return this._reconnectionAttempts;
  this._reconnectionAttempts = v;
  return this;
};
/**
 * Sets the delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelay = function (v) {
  if (!arguments.length) return this._reconnectionDelay;
  this._reconnectionDelay = v;
  this.backoff && this.backoff.setMin(v);
  return this;
};

Manager.prototype.randomizationFactor = function (v) {
  if (!arguments.length) return this._randomizationFactor;
  this._randomizationFactor = v;
  this.backoff && this.backoff.setJitter(v);
  return this;
};
/**
 * Sets the maximum delay between reconnections.
 *
 * @param {Number} delay
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.reconnectionDelayMax = function (v) {
  if (!arguments.length) return this._reconnectionDelayMax;
  this._reconnectionDelayMax = v;
  this.backoff && this.backoff.setMax(v);
  return this;
};
/**
 * Sets the connection timeout. `false` to disable
 *
 * @return {Manager} self or value
 * @api public
 */


Manager.prototype.timeout = function (v) {
  if (!arguments.length) return this._timeout;
  this._timeout = v;
  return this;
};
/**
 * Starts trying to reconnect if reconnection is enabled and we have not
 * started reconnecting yet
 *
 * @api private
 */


Manager.prototype.maybeReconnectOnOpen = function () {
  // Only try to reconnect if it's the first time we're connecting
  if (!this.reconnecting && this._reconnection && this.backoff.attempts === 0) {
    // keeps reconnection from firing twice for the same reconnection loop
    this.reconnect();
  }
};
/**
 * Sets the current transport `socket`.
 *
 * @param {Function} optional, callback
 * @return {Manager} self
 * @api public
 */


Manager.prototype.open = Manager.prototype.connect = function (fn, opts) {
  debug('readyState %s', this.readyState);
  if (~this.readyState.indexOf('open')) return this;
  debug('opening %s', this.uri);
  this.engine = eio(this.uri, this.opts);
  var socket = this.engine;
  var self = this;
  this.readyState = 'opening';
  this.skipReconnect = false; // emit `open`

  var openSub = on(socket, 'open', function () {
    self.onopen();
    fn && fn();
  }); // emit `connect_error`

  var errorSub = on(socket, 'error', function (data) {
    debug('connect_error');
    self.cleanup();
    self.readyState = 'closed';
    self.emitAll('connect_error', data);

    if (fn) {
      var err = new Error('Connection error');
      err.data = data;
      fn(err);
    } else {
      // Only do this if there is no fn to handle the error
      self.maybeReconnectOnOpen();
    }
  }); // emit `connect_timeout`

  if (false !== this._timeout) {
    var timeout = this._timeout;
    debug('connect attempt will timeout after %d', timeout); // set timer

    var timer = setTimeout(function () {
      debug('connect attempt timed out after %d', timeout);
      openSub.destroy();
      socket.close();
      socket.emit('error', 'timeout');
      self.emitAll('connect_timeout', timeout);
    }, timeout);
    this.subs.push({
      destroy: function destroy() {
        clearTimeout(timer);
      }
    });
  }

  this.subs.push(openSub);
  this.subs.push(errorSub);
  return this;
};
/**
 * Called upon transport open.
 *
 * @api private
 */


Manager.prototype.onopen = function () {
  debug('open'); // clear old subs

  this.cleanup(); // mark as open

  this.readyState = 'open';
  this.emit('open'); // add new subs

  var socket = this.engine;
  this.subs.push(on(socket, 'data', bind(this, 'ondata')));
  this.subs.push(on(socket, 'ping', bind(this, 'onping')));
  this.subs.push(on(socket, 'pong', bind(this, 'onpong')));
  this.subs.push(on(socket, 'error', bind(this, 'onerror')));
  this.subs.push(on(socket, 'close', bind(this, 'onclose')));
  this.subs.push(on(this.decoder, 'decoded', bind(this, 'ondecoded')));
};
/**
 * Called upon a ping.
 *
 * @api private
 */


Manager.prototype.onping = function () {
  this.lastPing = new Date();
  this.emitAll('ping');
};
/**
 * Called upon a packet.
 *
 * @api private
 */


Manager.prototype.onpong = function () {
  this.emitAll('pong', new Date() - this.lastPing);
};
/**
 * Called with data.
 *
 * @api private
 */


Manager.prototype.ondata = function (data) {
  this.decoder.add(data);
};
/**
 * Called when parser fully decodes a packet.
 *
 * @api private
 */


Manager.prototype.ondecoded = function (packet) {
  this.emit('packet', packet);
};
/**
 * Called upon socket error.
 *
 * @api private
 */


Manager.prototype.onerror = function (err) {
  debug('error', err);
  this.emitAll('error', err);
};
/**
 * Creates a new socket for the given `nsp`.
 *
 * @return {Socket}
 * @api public
 */


Manager.prototype.socket = function (nsp, opts) {
  var socket = this.nsps[nsp];

  if (!socket) {
    socket = new Socket(this, nsp, opts);
    this.nsps[nsp] = socket;
    var self = this;
    socket.on('connecting', onConnecting);
    socket.on('connect', function () {
      socket.id = self.generateId(nsp);
    });

    if (this.autoConnect) {
      // manually call here since connecting event is fired before listening
      onConnecting();
    }
  }

  function onConnecting() {
    if (!~indexOf(self.connecting, socket)) {
      self.connecting.push(socket);
    }
  }

  return socket;
};
/**
 * Called upon a socket close.
 *
 * @param {Socket} socket
 */


Manager.prototype.destroy = function (socket) {
  var index = indexOf(this.connecting, socket);
  if (~index) this.connecting.splice(index, 1);
  if (this.connecting.length) return;
  this.close();
};
/**
 * Writes a packet.
 *
 * @param {Object} packet
 * @api private
 */


Manager.prototype.packet = function (packet) {
  debug('writing packet %j', packet);
  var self = this;
  if (packet.query && packet.type === 0) packet.nsp += '?' + packet.query;

  if (!self.encoding) {
    // encode, then write to engine with result
    self.encoding = true;
    this.encoder.encode(packet, function (encodedPackets) {
      for (var i = 0; i < encodedPackets.length; i++) {
        self.engine.write(encodedPackets[i], packet.options);
      }

      self.encoding = false;
      self.processPacketQueue();
    });
  } else {
    // add packet to the queue
    self.packetBuffer.push(packet);
  }
};
/**
 * If packet buffer is non-empty, begins encoding the
 * next packet in line.
 *
 * @api private
 */


Manager.prototype.processPacketQueue = function () {
  if (this.packetBuffer.length > 0 && !this.encoding) {
    var pack = this.packetBuffer.shift();
    this.packet(pack);
  }
};
/**
 * Clean up transport subscriptions and packet buffer.
 *
 * @api private
 */


Manager.prototype.cleanup = function () {
  debug('cleanup');
  var subsLength = this.subs.length;

  for (var i = 0; i < subsLength; i++) {
    var sub = this.subs.shift();
    sub.destroy();
  }

  this.packetBuffer = [];
  this.encoding = false;
  this.lastPing = null;
  this.decoder.destroy();
};
/**
 * Close the current socket.
 *
 * @api private
 */


Manager.prototype.close = Manager.prototype.disconnect = function () {
  debug('disconnect');
  this.skipReconnect = true;
  this.reconnecting = false;

  if ('opening' === this.readyState) {
    // `onclose` will not fire because
    // an open event never happened
    this.cleanup();
  }

  this.backoff.reset();
  this.readyState = 'closed';
  if (this.engine) this.engine.close();
};
/**
 * Called upon engine close.
 *
 * @api private
 */


Manager.prototype.onclose = function (reason) {
  debug('onclose');
  this.cleanup();
  this.backoff.reset();
  this.readyState = 'closed';
  this.emit('close', reason);

  if (this._reconnection && !this.skipReconnect) {
    this.reconnect();
  }
};
/**
 * Attempt a reconnection.
 *
 * @api private
 */


Manager.prototype.reconnect = function () {
  if (this.reconnecting || this.skipReconnect) return this;
  var self = this;

  if (this.backoff.attempts >= this._reconnectionAttempts) {
    debug('reconnect failed');
    this.backoff.reset();
    this.emitAll('reconnect_failed');
    this.reconnecting = false;
  } else {
    var delay = this.backoff.duration();
    debug('will wait %dms before reconnect attempt', delay);
    this.reconnecting = true;
    var timer = setTimeout(function () {
      if (self.skipReconnect) return;
      debug('attempting reconnect');
      self.emitAll('reconnect_attempt', self.backoff.attempts);
      self.emitAll('reconnecting', self.backoff.attempts); // check again for the case socket closed in above events

      if (self.skipReconnect) return;
      self.open(function (err) {
        if (err) {
          debug('reconnect attempt error');
          self.reconnecting = false;
          self.reconnect();
          self.emitAll('reconnect_error', err.data);
        } else {
          debug('reconnect success');
          self.onreconnect();
        }
      });
    }, delay);
    this.subs.push({
      destroy: function destroy() {
        clearTimeout(timer);
      }
    });
  }
};
/**
 * Called upon successful reconnect.
 *
 * @api private
 */


Manager.prototype.onreconnect = function () {
  var attempt = this.backoff.attempts;
  this.reconnecting = false;
  this.backoff.reset();
  this.updateSocketIds();
  this.emitAll('reconnect', attempt);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies
 */
var XMLHttpRequest = __webpack_require__(8);

var XHR = __webpack_require__(39);

var JSONP = __webpack_require__(46);

var websocket = __webpack_require__(47);
/**
 * Export transports.
 */


exports.polling = polling;
exports.websocket = websocket;
/**
 * Polling transport polymorphic constructor.
 * Decides on xhr vs jsonp based on feature detection.
 *
 * @api private
 */

function polling(opts) {
  var xhr;
  var xd = false;
  var xs = false;
  var jsonp = false !== opts.jsonp;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    xd = opts.hostname !== location.hostname || port !== opts.port;
    xs = opts.secure !== isSSL;
  }

  opts.xdomain = xd;
  opts.xscheme = xs;
  xhr = new XMLHttpRequest(opts);

  if ('open' in xhr && !opts.forceJSONP) {
    return new XHR(opts);
  } else {
    if (!jsonp) throw new Error('JSONP disabled');
    return new JSONP(opts);
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var Transport = __webpack_require__(10);

var parseqs = __webpack_require__(2);

var parser = __webpack_require__(1);

var inherit = __webpack_require__(3);

var yeast = __webpack_require__(19);

var debug = __webpack_require__(0)('engine.io-client:polling');
/**
 * Module exports.
 */


module.exports = Polling;
/**
 * Is XHR2 supported?
 */

var hasXHR2 = function () {
  var XMLHttpRequest = __webpack_require__(8);

  var xhr = new XMLHttpRequest({
    xdomain: false
  });
  return null != xhr.responseType;
}();
/**
 * Polling interface.
 *
 * @param {Object} opts
 * @api private
 */


function Polling(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (!hasXHR2 || forceBase64) {
    this.supportsBinary = false;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(Polling, Transport);
/**
 * Transport name.
 */

Polling.prototype.name = 'polling';
/**
 * Opens the socket (triggers polling). We write a PING message to determine
 * when the transport is open.
 *
 * @api private
 */

Polling.prototype.doOpen = function () {
  this.poll();
};
/**
 * Pauses polling.
 *
 * @param {Function} callback upon buffers are flushed and transport is paused
 * @api private
 */


Polling.prototype.pause = function (onPause) {
  var self = this;
  this.readyState = 'pausing';

  function pause() {
    debug('paused');
    self.readyState = 'paused';
    onPause();
  }

  if (this.polling || !this.writable) {
    var total = 0;

    if (this.polling) {
      debug('we are currently polling - waiting to pause');
      total++;
      this.once('pollComplete', function () {
        debug('pre-pause polling complete');
        --total || pause();
      });
    }

    if (!this.writable) {
      debug('we are currently writing - waiting to pause');
      total++;
      this.once('drain', function () {
        debug('pre-pause writing complete');
        --total || pause();
      });
    }
  } else {
    pause();
  }
};
/**
 * Starts polling cycle.
 *
 * @api public
 */


Polling.prototype.poll = function () {
  debug('polling');
  this.polling = true;
  this.doPoll();
  this.emit('poll');
};
/**
 * Overloads onData to detect payloads.
 *
 * @api private
 */


Polling.prototype.onData = function (data) {
  var self = this;
  debug('polling got data %s', data);

  var callback = function callback(packet, index, total) {
    // if its the first message we consider the transport open
    if ('opening' === self.readyState) {
      self.onOpen();
    } // if its a close packet, we close the ongoing requests


    if ('close' === packet.type) {
      self.onClose();
      return false;
    } // otherwise bypass onData and handle the message


    self.onPacket(packet);
  }; // decode payload


  parser.decodePayload(data, this.socket.binaryType, callback); // if an event did not trigger closing

  if ('closed' !== this.readyState) {
    // if we got data we're not polling
    this.polling = false;
    this.emit('pollComplete');

    if ('open' === this.readyState) {
      this.poll();
    } else {
      debug('ignoring poll - transport state "%s"', this.readyState);
    }
  }
};
/**
 * For polling, send a close packet.
 *
 * @api private
 */


Polling.prototype.doClose = function () {
  var self = this;

  function close() {
    debug('writing close packet');
    self.write([{
      type: 'close'
    }]);
  }

  if ('open' === this.readyState) {
    debug('transport open - closing');
    close();
  } else {
    // in case we're trying to close while
    // handshaking is in progress (GH-164)
    debug('transport not open - deferring close');
    this.once('open', close);
  }
};
/**
 * Writes a packets payload.
 *
 * @param {Array} data packets
 * @param {Function} drain callback
 * @api private
 */


Polling.prototype.write = function (packets) {
  var self = this;
  this.writable = false;

  var callbackfn = function callbackfn() {
    self.writable = true;
    self.emit('drain');
  };

  parser.encodePayload(packets, this.supportsBinary, function (data) {
    self.doWrite(data, callbackfn);
  });
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


Polling.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'https' : 'http';
  var port = ''; // cache busting is forced

  if (false !== this.timestampRequests) {
    query[this.timestampParam] = yeast();
  }

  if (!this.supportsBinary && !query.sid) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // avoid port if default for schema

  if (this.port && ('https' === schema && Number(this.port) !== 443 || 'http' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // prepend ? to query


  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* global Blob File */

/*
 * Module requirements.
 */
var isArray = __webpack_require__(6);

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Module exports.
 */

module.exports = hasBinary;
/**
 * Checks for binary data.
 *
 * Supports Buffer, ArrayBuffer, Blob and File.
 *
 * @param {Object} anything
 * @api public
 */

function hasBinary(obj) {
  if (!obj || _typeof(obj) !== 'object') {
    return false;
  }

  if (isArray(obj)) {
    for (var i = 0, l = obj.length; i < l; i++) {
      if (hasBinary(obj[i])) {
        return true;
      }
    }

    return false;
  }

  if (typeof Buffer === 'function' && Buffer.isBuffer && Buffer.isBuffer(obj) || typeof ArrayBuffer === 'function' && obj instanceof ArrayBuffer || withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
    return true;
  } // see: https://github.com/Automattic/has-binary/pull/4


  if (obj.toJSON && typeof obj.toJSON === 'function' && arguments.length === 1) {
    return hasBinary(obj.toJSON(), true);
  }

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && hasBinary(obj[key])) {
      return true;
    }
  }

  return false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7).Buffer))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''),
    length = 64,
    map = {},
    seed = 0,
    i = 0,
    prev;
/**
 * Return a string representing the specified number.
 *
 * @param {Number} num The number to convert.
 * @returns {String} The string representation of the number.
 * @api public
 */

function encode(num) {
  var encoded = '';

  do {
    encoded = alphabet[num % length] + encoded;
    num = Math.floor(num / length);
  } while (num > 0);

  return encoded;
}
/**
 * Return the integer value specified by the given string.
 *
 * @param {String} str The string to convert.
 * @returns {Number} The integer value represented by the string.
 * @api public
 */


function decode(str) {
  var decoded = 0;

  for (i = 0; i < str.length; i++) {
    decoded = decoded * length + map[str.charAt(i)];
  }

  return decoded;
}
/**
 * Yeast: A tiny growing id generator.
 *
 * @returns {String} A unique id.
 * @api public
 */


function yeast() {
  var now = encode(+new Date());
  if (now !== prev) return seed = 0, prev = now;
  return now + '.' + encode(seed++);
} //
// Map each character to its index.
//


for (; i < length; i++) {
  map[alphabet[i]] = i;
} //
// Expose the `yeast`, `encode` and `decode` functions.
//


yeast.encode = encode;
yeast.decode = decode;
module.exports = yeast;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

var indexOf = [].indexOf;

module.exports = function (arr, obj) {
  if (indexOf) return arr.indexOf(obj);

  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }

  return -1;
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Module dependencies.
 */
var parser = __webpack_require__(4);

var Emitter = __webpack_require__(5);

var toArray = __webpack_require__(49);

var on = __webpack_require__(22);

var bind = __webpack_require__(23);

var debug = __webpack_require__(0)('socket.io-client:socket');

var parseqs = __webpack_require__(2);

var hasBin = __webpack_require__(18);
/**
 * Module exports.
 */


module.exports = exports = Socket;
/**
 * Internal events (blacklisted).
 * These events can't be emitted by the user.
 *
 * @api private
 */

var events = {
  connect: 1,
  connect_error: 1,
  connect_timeout: 1,
  connecting: 1,
  disconnect: 1,
  error: 1,
  reconnect: 1,
  reconnect_attempt: 1,
  reconnect_failed: 1,
  reconnect_error: 1,
  reconnecting: 1,
  ping: 1,
  pong: 1
};
/**
 * Shortcut to `Emitter#emit`.
 */

var emit = Emitter.prototype.emit;
/**
 * `Socket` constructor.
 *
 * @api public
 */

function Socket(io, nsp, opts) {
  this.io = io;
  this.nsp = nsp;
  this.json = this; // compat

  this.ids = 0;
  this.acks = {};
  this.receiveBuffer = [];
  this.sendBuffer = [];
  this.connected = false;
  this.disconnected = true;
  this.flags = {};

  if (opts && opts.query) {
    this.query = opts.query;
  }

  if (this.io.autoConnect) this.open();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Socket.prototype);
/**
 * Subscribe to open, close and packet events
 *
 * @api private
 */

Socket.prototype.subEvents = function () {
  if (this.subs) return;
  var io = this.io;
  this.subs = [on(io, 'open', bind(this, 'onopen')), on(io, 'packet', bind(this, 'onpacket')), on(io, 'close', bind(this, 'onclose'))];
};
/**
 * "Opens" the socket.
 *
 * @api public
 */


Socket.prototype.open = Socket.prototype.connect = function () {
  if (this.connected) return this;
  this.subEvents();
  this.io.open(); // ensure open

  if ('open' === this.io.readyState) this.onopen();
  this.emit('connecting');
  return this;
};
/**
 * Sends a `message` event.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.send = function () {
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
};
/**
 * Override `emit`.
 * If the event is in `events`, it's emitted normally.
 *
 * @param {String} event name
 * @return {Socket} self
 * @api public
 */


Socket.prototype.emit = function (ev) {
  if (events.hasOwnProperty(ev)) {
    emit.apply(this, arguments);
    return this;
  }

  var args = toArray(arguments);
  var packet = {
    type: (this.flags.binary !== undefined ? this.flags.binary : hasBin(args)) ? parser.BINARY_EVENT : parser.EVENT,
    data: args
  };
  packet.options = {};
  packet.options.compress = !this.flags || false !== this.flags.compress; // event ack callback

  if ('function' === typeof args[args.length - 1]) {
    debug('emitting packet with ack id %d', this.ids);
    this.acks[this.ids] = args.pop();
    packet.id = this.ids++;
  }

  if (this.connected) {
    this.packet(packet);
  } else {
    this.sendBuffer.push(packet);
  }

  this.flags = {};
  return this;
};
/**
 * Sends a packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.packet = function (packet) {
  packet.nsp = this.nsp;
  this.io.packet(packet);
};
/**
 * Called upon engine `open`.
 *
 * @api private
 */


Socket.prototype.onopen = function () {
  debug('transport is open - connecting'); // write connect packet if necessary

  if ('/' !== this.nsp) {
    if (this.query) {
      var query = _typeof(this.query) === 'object' ? parseqs.encode(this.query) : this.query;
      debug('sending connect packet with query %s', query);
      this.packet({
        type: parser.CONNECT,
        query: query
      });
    } else {
      this.packet({
        type: parser.CONNECT
      });
    }
  }
};
/**
 * Called upon engine `close`.
 *
 * @param {String} reason
 * @api private
 */


Socket.prototype.onclose = function (reason) {
  debug('close (%s)', reason);
  this.connected = false;
  this.disconnected = true;
  delete this.id;
  this.emit('disconnect', reason);
};
/**
 * Called with socket packet.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onpacket = function (packet) {
  var sameNamespace = packet.nsp === this.nsp;
  var rootNamespaceError = packet.type === parser.ERROR && packet.nsp === '/';
  if (!sameNamespace && !rootNamespaceError) return;

  switch (packet.type) {
    case parser.CONNECT:
      this.onconnect();
      break;

    case parser.EVENT:
      this.onevent(packet);
      break;

    case parser.BINARY_EVENT:
      this.onevent(packet);
      break;

    case parser.ACK:
      this.onack(packet);
      break;

    case parser.BINARY_ACK:
      this.onack(packet);
      break;

    case parser.DISCONNECT:
      this.ondisconnect();
      break;

    case parser.ERROR:
      this.emit('error', packet.data);
      break;
  }
};
/**
 * Called upon a server event.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onevent = function (packet) {
  var args = packet.data || [];
  debug('emitting event %j', args);

  if (null != packet.id) {
    debug('attaching ack callback to event');
    args.push(this.ack(packet.id));
  }

  if (this.connected) {
    emit.apply(this, args);
  } else {
    this.receiveBuffer.push(args);
  }
};
/**
 * Produces an ack callback to emit with an event.
 *
 * @api private
 */


Socket.prototype.ack = function (id) {
  var self = this;
  var sent = false;
  return function () {
    // prevent double callbacks
    if (sent) return;
    sent = true;
    var args = toArray(arguments);
    debug('sending ack %j', args);
    self.packet({
      type: hasBin(args) ? parser.BINARY_ACK : parser.ACK,
      id: id,
      data: args
    });
  };
};
/**
 * Called upon a server acknowlegement.
 *
 * @param {Object} packet
 * @api private
 */


Socket.prototype.onack = function (packet) {
  var ack = this.acks[packet.id];

  if ('function' === typeof ack) {
    debug('calling ack %s with %j', packet.id, packet.data);
    ack.apply(this, packet.data);
    delete this.acks[packet.id];
  } else {
    debug('bad ack %s', packet.id);
  }
};
/**
 * Called upon server connect.
 *
 * @api private
 */


Socket.prototype.onconnect = function () {
  this.connected = true;
  this.disconnected = false;
  this.emit('connect');
  this.emitBuffered();
};
/**
 * Emit buffered events (received and emitted).
 *
 * @api private
 */


Socket.prototype.emitBuffered = function () {
  var i;

  for (i = 0; i < this.receiveBuffer.length; i++) {
    emit.apply(this, this.receiveBuffer[i]);
  }

  this.receiveBuffer = [];

  for (i = 0; i < this.sendBuffer.length; i++) {
    this.packet(this.sendBuffer[i]);
  }

  this.sendBuffer = [];
};
/**
 * Called upon server disconnect.
 *
 * @api private
 */


Socket.prototype.ondisconnect = function () {
  debug('server disconnect (%s)', this.nsp);
  this.destroy();
  this.onclose('io server disconnect');
};
/**
 * Called upon forced client/server side disconnections,
 * this method ensures the manager stops tracking us and
 * that reconnections don't get triggered for this.
 *
 * @api private.
 */


Socket.prototype.destroy = function () {
  if (this.subs) {
    // clean subscriptions to avoid reconnections
    for (var i = 0; i < this.subs.length; i++) {
      this.subs[i].destroy();
    }

    this.subs = null;
  }

  this.io.destroy(this);
};
/**
 * Disconnects the socket manually.
 *
 * @return {Socket} self
 * @api public
 */


Socket.prototype.close = Socket.prototype.disconnect = function () {
  if (this.connected) {
    debug('performing disconnect (%s)', this.nsp);
    this.packet({
      type: parser.DISCONNECT
    });
  } // remove socket from pool


  this.destroy();

  if (this.connected) {
    // fire events
    this.onclose('io client disconnect');
  }

  return this;
};
/**
 * Sets the compress flag.
 *
 * @param {Boolean} if `true`, compresses the sending data
 * @return {Socket} self
 * @api public
 */


Socket.prototype.compress = function (compress) {
  this.flags.compress = compress;
  return this;
};
/**
 * Sets the binary flag
 *
 * @param {Boolean} whether the emitted data contains binary
 * @return {Socket} self
 * @api public
 */


Socket.prototype.binary = function (binary) {
  this.flags.binary = binary;
  return this;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Module exports.
 */
module.exports = on;
/**
 * Helper for subscriptions.
 *
 * @param {Object|EventEmitter} obj with `Emitter` mixin or `EventEmitter`
 * @param {String} event name
 * @param {Function} callback
 * @api public
 */

function on(obj, ev, fn) {
  obj.on(ev, fn);
  return {
    destroy: function destroy() {
      obj.removeListener(ev, fn);
    }
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports) {

/**
 * Slice reference.
 */
var slice = [].slice;
/**
 * Bind `obj` to `fn`.
 *
 * @param {Object} obj
 * @param {Function|String} fn or string
 * @return {Function}
 * @api public
 */

module.exports = function (obj, fn) {
  if ('string' == typeof fn) fn = obj[fn];
  if ('function' != typeof fn) throw new Error('bind() requires a function');
  var args = slice.call(arguments, 2);
  return function () {
    return fn.apply(obj, args.concat(slice.call(arguments)));
  };
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Module dependencies.
 */
var url = __webpack_require__(25);

var parser = __webpack_require__(4);

var Manager = __webpack_require__(15);

var debug = __webpack_require__(0)('socket.io-client');
/**
 * Module exports.
 */


module.exports = exports = lookup;
/**
 * Managers cache.
 */

var cache = exports.managers = {};
/**
 * Looks up an existing `Manager` for multiplexing.
 * If the user summons:
 *
 *   `io('http://localhost/a');`
 *   `io('http://localhost/b');`
 *
 * We reuse the existing instance based on same scheme/port/host,
 * and we initialize sockets for each namespace.
 *
 * @api public
 */

function lookup(uri, opts) {
  if (_typeof(uri) === 'object') {
    opts = uri;
    uri = undefined;
  }

  opts = opts || {};
  var parsed = url(uri);
  var source = parsed.source;
  var id = parsed.id;
  var path = parsed.path;
  var sameNamespace = cache[id] && path in cache[id].nsps;
  var newConnection = opts.forceNew || opts['force new connection'] || false === opts.multiplex || sameNamespace;
  var io;

  if (newConnection) {
    debug('ignoring socket cache for %s', source);
    io = Manager(source, opts);
  } else {
    if (!cache[id]) {
      debug('new io instance for %s', source);
      cache[id] = Manager(source, opts);
    }

    io = cache[id];
  }

  if (parsed.query && !opts.query) {
    opts.query = parsed.query;
  }

  return io.socket(parsed.path, opts);
}
/**
 * Protocol version.
 *
 * @api public
 */


exports.protocol = parser.protocol;
/**
 * `connect`.
 *
 * @param {String} uri
 * @api public
 */

exports.connect = lookup;
/**
 * Expose constructors for standalone build.
 *
 * @api public
 */

exports.Manager = __webpack_require__(15);
exports.Socket = __webpack_require__(21);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */
var parseuri = __webpack_require__(12);

var debug = __webpack_require__(0)('socket.io-client:url');
/**
 * Module exports.
 */


module.exports = url;
/**
 * URL parser.
 *
 * @param {String} url
 * @param {Object} An object meant to mimic window.location.
 *                 Defaults to window.location.
 * @api public
 */

function url(uri, loc) {
  var obj = uri; // default to window.location

  loc = loc || typeof location !== 'undefined' && location;
  if (null == uri) uri = loc.protocol + '//' + loc.host; // relative path support

  if ('string' === typeof uri) {
    if ('/' === uri.charAt(0)) {
      if ('/' === uri.charAt(1)) {
        uri = loc.protocol + uri;
      } else {
        uri = loc.host + uri;
      }
    }

    if (!/^(https?|wss?):\/\//.test(uri)) {
      debug('protocol-less url %s', uri);

      if ('undefined' !== typeof loc) {
        uri = loc.protocol + '//' + uri;
      } else {
        uri = 'https://' + uri;
      }
    } // parse


    debug('parse %s', uri);
    obj = parseuri(uri);
  } // make sure we treat `localhost:80` and `localhost` equally


  if (!obj.port) {
    if (/^(http|ws)$/.test(obj.protocol)) {
      obj.port = '80';
    } else if (/^(http|ws)s$/.test(obj.protocol)) {
      obj.port = '443';
    }
  }

  obj.path = obj.path || '/';
  var ipv6 = obj.host.indexOf(':') !== -1;
  var host = ipv6 ? '[' + obj.host + ']' : obj.host; // define unique id

  obj.id = obj.protocol + '://' + host + ':' + obj.port; // define href

  obj.href = obj.protocol + '://' + host + (loc && loc.port === obj.port ? '' : ':' + obj.port);
  return obj;
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */
function setup(env) {
  createDebug.debug = createDebug;
  createDebug["default"] = createDebug;
  createDebug.coerce = coerce;
  createDebug.disable = disable;
  createDebug.enable = enable;
  createDebug.enabled = enabled;
  createDebug.humanize = __webpack_require__(27);
  Object.keys(env).forEach(function (key) {
    createDebug[key] = env[key];
  });
  /**
  * Active `debug` instances.
  */

  createDebug.instances = [];
  /**
  * The currently active debug mode names, and names to skip.
  */

  createDebug.names = [];
  createDebug.skips = [];
  /**
  * Map of special "%n" handling functions, for the debug "format" argument.
  *
  * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
  */

  createDebug.formatters = {};
  /**
  * Selects a color for a debug namespace
  * @param {String} namespace The namespace string for the for the debug instance to be colored
  * @return {Number|String} An ANSI color code for the given namespace
  * @api private
  */

  function selectColor(namespace) {
    var hash = 0;

    for (var i = 0; i < namespace.length; i++) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i);
      hash |= 0; // Convert to 32bit integer
    }

    return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
  }

  createDebug.selectColor = selectColor;
  /**
  * Create a debugger with the given `namespace`.
  *
  * @param {String} namespace
  * @return {Function}
  * @api public
  */

  function createDebug(namespace) {
    var prevTime;

    function debug() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // Disabled?
      if (!debug.enabled) {
        return;
      }

      var self = debug; // Set `diff` timestamp

      var curr = Number(new Date());
      var ms = curr - (prevTime || curr);
      self.diff = ms;
      self.prev = prevTime;
      self.curr = curr;
      prevTime = curr;
      args[0] = createDebug.coerce(args[0]);

      if (typeof args[0] !== 'string') {
        // Anything else let's inspect with %O
        args.unshift('%O');
      } // Apply any `formatters` transformations


      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
        // If we encounter an escaped % then don't increase the array index
        if (match === '%%') {
          return match;
        }

        index++;
        var formatter = createDebug.formatters[format];

        if (typeof formatter === 'function') {
          var val = args[index];
          match = formatter.call(self, val); // Now we need to remove `args[index]` since it's inlined in the `format`

          args.splice(index, 1);
          index--;
        }

        return match;
      }); // Apply env-specific formatting (colors, etc.)

      createDebug.formatArgs.call(self, args);
      var logFn = self.log || createDebug.log;
      logFn.apply(self, args);
    }

    debug.namespace = namespace;
    debug.enabled = createDebug.enabled(namespace);
    debug.useColors = createDebug.useColors();
    debug.color = selectColor(namespace);
    debug.destroy = destroy;
    debug.extend = extend; // Debug.formatArgs = formatArgs;
    // debug.rawLog = rawLog;
    // env-specific initialization logic for debug instances

    if (typeof createDebug.init === 'function') {
      createDebug.init(debug);
    }

    createDebug.instances.push(debug);
    return debug;
  }

  function destroy() {
    var index = createDebug.instances.indexOf(this);

    if (index !== -1) {
      createDebug.instances.splice(index, 1);
      return true;
    }

    return false;
  }

  function extend(namespace, delimiter) {
    var newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    newDebug.log = this.log;
    return newDebug;
  }
  /**
  * Enables a debug mode by namespaces. This can include modes
  * separated by a colon and wildcards.
  *
  * @param {String} namespaces
  * @api public
  */


  function enable(namespaces) {
    createDebug.save(namespaces);
    createDebug.names = [];
    createDebug.skips = [];
    var i;
    var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    var len = split.length;

    for (i = 0; i < len; i++) {
      if (!split[i]) {
        // ignore empty strings
        continue;
      }

      namespaces = split[i].replace(/\*/g, '.*?');

      if (namespaces[0] === '-') {
        createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
      } else {
        createDebug.names.push(new RegExp('^' + namespaces + '$'));
      }
    }

    for (i = 0; i < createDebug.instances.length; i++) {
      var instance = createDebug.instances[i];
      instance.enabled = createDebug.enabled(instance.namespace);
    }
  }
  /**
  * Disable debug output.
  *
  * @return {String} namespaces
  * @api public
  */


  function disable() {
    var namespaces = [].concat(_toConsumableArray(createDebug.names.map(toNamespace)), _toConsumableArray(createDebug.skips.map(toNamespace).map(function (namespace) {
      return '-' + namespace;
    }))).join(',');
    createDebug.enable('');
    return namespaces;
  }
  /**
  * Returns true if the given mode name is enabled, false otherwise.
  *
  * @param {String} name
  * @return {Boolean}
  * @api public
  */


  function enabled(name) {
    if (name[name.length - 1] === '*') {
      return true;
    }

    var i;
    var len;

    for (i = 0, len = createDebug.skips.length; i < len; i++) {
      if (createDebug.skips[i].test(name)) {
        return false;
      }
    }

    for (i = 0, len = createDebug.names.length; i < len; i++) {
      if (createDebug.names[i].test(name)) {
        return true;
      }
    }

    return false;
  }
  /**
  * Convert regexp to namespace
  *
  * @param {RegExp} regxep
  * @return {String} namespace
  * @api private
  */


  function toNamespace(regexp) {
    return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, '*');
  }
  /**
  * Coerce `val`.
  *
  * @param {Mixed} val
  * @return {Mixed}
  * @api private
  */


  function coerce(val) {
    if (val instanceof Error) {
      return val.stack || val.message;
    }

    return val;
  }

  createDebug.enable(createDebug.load());
  return createDebug;
}

module.exports = setup;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options["long"] ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'weeks':
    case 'week':
    case 'w':
      return n * w;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  var msAbs = Math.abs(ms);

  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }

  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }

  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }

  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }

  return ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = __webpack_require__(29);
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome && 'undefined' != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */

exports.colors = ['#0000CC', '#0000FF', '#0033CC', '#0033FF', '#0066CC', '#0066FF', '#0099CC', '#0099FF', '#00CC00', '#00CC33', '#00CC66', '#00CC99', '#00CCCC', '#00CCFF', '#3300CC', '#3300FF', '#3333CC', '#3333FF', '#3366CC', '#3366FF', '#3399CC', '#3399FF', '#33CC00', '#33CC33', '#33CC66', '#33CC99', '#33CCCC', '#33CCFF', '#6600CC', '#6600FF', '#6633CC', '#6633FF', '#66CC00', '#66CC33', '#9900CC', '#9900FF', '#9933CC', '#9933FF', '#99CC00', '#99CC33', '#CC0000', '#CC0033', '#CC0066', '#CC0099', '#CC00CC', '#CC00FF', '#CC3300', '#CC3333', '#CC3366', '#CC3399', '#CC33CC', '#CC33FF', '#CC6600', '#CC6633', '#CC9900', '#CC9933', '#CCCC00', '#CCCC33', '#FF0000', '#FF0033', '#FF0066', '#FF0099', '#FF00CC', '#FF00FF', '#FF3300', '#FF3333', '#FF3366', '#FF3399', '#FF33CC', '#FF33FF', '#FF6600', '#FF6633', '#FF9900', '#FF9933', '#FFCC00', '#FFCC33'];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  } // Internet Explorer and Edge do not support colors.


  if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    return false;
  } // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632


  return typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
  typeof window !== 'undefined' && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
  // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
  typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */


exports.formatters.j = function (v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */


function formatArgs(args) {
  var useColors = this.useColors;
  args[0] = (useColors ? '%c' : '') + this.namespace + (useColors ? ' %c' : ' ') + args[0] + (useColors ? '%c ' : ' ') + '+' + exports.humanize(this.diff);
  if (!useColors) return;
  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit'); // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into

  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function (match) {
    if ('%%' === match) return;
    index++;

    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });
  args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */


function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */


function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */


function load() {
  var r;

  try {
    r = exports.storage.debug;
  } catch (e) {} // If debug isn't set in LS, and we're in Electron, try to load $DEBUG


  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */


exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */
exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(30);
/**
 * Active `debug` instances.
 */

exports.instances = [];
/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0,
      i;

  for (i in namespace) {
    hash = (hash << 5) - hash + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */


function createDebug(namespace) {
  var prevTime;

  function debug() {
    // disabled?
    if (!debug.enabled) return;
    var self = debug; // set `diff` timestamp

    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr; // turn the `arguments` into a proper Array

    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    } // apply any `formatters` transformations


    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];

      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val); // now we need to remove `args[index]` since it's inlined in the `format`

        args.splice(index, 1);
        index--;
      }

      return match;
    }); // apply env-specific formatting (colors, etc.)

    exports.formatArgs.call(self, args);
    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);
  debug.destroy = destroy; // env-specific initialization logic for debug instances

  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  exports.instances.push(debug);
  return debug;
}

function destroy() {
  var index = exports.instances.indexOf(this);

  if (index !== -1) {
    exports.instances.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */


function enable(namespaces) {
  exports.save(namespaces);
  exports.names = [];
  exports.skips = [];
  var i;
  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings

    namespaces = split[i].replace(/\*/g, '.*?');

    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }

  for (i = 0; i < exports.instances.length; i++) {
    var instance = exports.instances[i];
    instance.enabled = exports.enabled(instance.namespace);
  }
}
/**
 * Disable debug output.
 *
 * @api public
 */


function disable() {
  exports.enable('');
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */


function enabled(name) {
  if (name[name.length - 1] === '*') {
    return true;
  }

  var i, len;

  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }

  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }

  return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */


function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Helpers.
 */
var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function (val, options) {
  options = options || {};

  var type = _typeof(val);

  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options["long"] ? fmtLong(val) : fmtShort(val);
  }

  throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */


function parse(str) {
  str = String(str);

  if (str.length > 100) {
    return;
  }

  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);

  if (!match) {
    return;
  }

  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();

  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;

    case 'days':
    case 'day':
    case 'd':
      return n * d;

    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;

    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;

    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;

    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;

    default:
      return undefined;
  }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }

  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }

  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }

  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }

  return ms + 'ms';
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */


function fmtLong(ms) {
  return plural(ms, d, 'day') || plural(ms, h, 'hour') || plural(ms, m, 'minute') || plural(ms, s, 'second') || ms + ' ms';
}
/**
 * Pluralization helper.
 */


function plural(ms, n, name) {
  if (ms < n) {
    return;
  }

  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }

  return Math.ceil(ms / n) + ' ' + name + 's';
}

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*global Blob,File*/

/**
 * Module requirements
 */
var isArray = __webpack_require__(6);

var isBuf = __webpack_require__(14);

var toString = Object.prototype.toString;
var withNativeBlob = typeof Blob === 'function' || typeof Blob !== 'undefined' && toString.call(Blob) === '[object BlobConstructor]';
var withNativeFile = typeof File === 'function' || typeof File !== 'undefined' && toString.call(File) === '[object FileConstructor]';
/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 *
 * @param {Object} packet - socket.io event packet
 * @return {Object} with deconstructed packet and list of buffers
 * @api public
 */

exports.deconstructPacket = function (packet) {
  var buffers = [];
  var packetData = packet.data;
  var pack = packet;
  pack.data = _deconstructPacket(packetData, buffers);
  pack.attachments = buffers.length; // number of binary 'attachments'

  return {
    packet: pack,
    buffers: buffers
  };
};

function _deconstructPacket(data, buffers) {
  if (!data) return data;

  if (isBuf(data)) {
    var placeholder = {
      _placeholder: true,
      num: buffers.length
    };
    buffers.push(data);
    return placeholder;
  } else if (isArray(data)) {
    var newData = new Array(data.length);

    for (var i = 0; i < data.length; i++) {
      newData[i] = _deconstructPacket(data[i], buffers);
    }

    return newData;
  } else if (_typeof(data) === 'object' && !(data instanceof Date)) {
    var newData = {};

    for (var key in data) {
      newData[key] = _deconstructPacket(data[key], buffers);
    }

    return newData;
  }

  return data;
}
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param {Object} packet - event packet with placeholders
 * @param {Array} buffers - binary buffers to put in placeholder positions
 * @return {Object} reconstructed packet
 * @api public
 */


exports.reconstructPacket = function (packet, buffers) {
  packet.data = _reconstructPacket(packet.data, buffers);
  packet.attachments = undefined; // no longer useful

  return packet;
};

function _reconstructPacket(data, buffers) {
  if (!data) return data;

  if (data && data._placeholder) {
    return buffers[data.num]; // appropriate buffer (should be natural order anyway)
  } else if (isArray(data)) {
    for (var i = 0; i < data.length; i++) {
      data[i] = _reconstructPacket(data[i], buffers);
    }
  } else if (_typeof(data) === 'object') {
    for (var key in data) {
      data[key] = _reconstructPacket(data[key], buffers);
    }
  }

  return data;
}
/**
 * Asynchronously removes Blobs or Files from data via
 * FileReader's readAsArrayBuffer method. Used before encoding
 * data as msgpack. Calls callback with the blobless data.
 *
 * @param {Object} data
 * @param {Function} callback
 * @api private
 */


exports.removeBlobs = function (data, callback) {
  function _removeBlobs(obj, curKey, containingObject) {
    if (!obj) return obj; // convert any blob

    if (withNativeBlob && obj instanceof Blob || withNativeFile && obj instanceof File) {
      pendingBlobs++; // async filereader

      var fileReader = new FileReader();

      fileReader.onload = function () {
        // this.result == arraybuffer
        if (containingObject) {
          containingObject[curKey] = this.result;
        } else {
          bloblessData = this.result;
        } // if nothing pending its callback time


        if (! --pendingBlobs) {
          callback(bloblessData);
        }
      };

      fileReader.readAsArrayBuffer(obj); // blob -> arraybuffer
    } else if (isArray(obj)) {
      // handle array
      for (var i = 0; i < obj.length; i++) {
        _removeBlobs(obj[i], i, obj);
      }
    } else if (_typeof(obj) === 'object' && !isBuf(obj)) {
      // and object
      for (var key in obj) {
        _removeBlobs(obj[key], key, obj);
      }
    }
  }

  var pendingBlobs = 0;
  var bloblessData = data;

  _removeBlobs(bloblessData);

  if (!pendingBlobs) {
    callback(bloblessData);
  }
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);
/**
 * Exports parser
 *
 * @api public
 *
 */

module.exports.parser = __webpack_require__(1);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Module dependencies.
 */
var transports = __webpack_require__(16);

var Emitter = __webpack_require__(11);

var debug = __webpack_require__(0)('engine.io-client:socket');

var index = __webpack_require__(20);

var parser = __webpack_require__(1);

var parseuri = __webpack_require__(12);

var parseqs = __webpack_require__(2);
/**
 * Module exports.
 */


module.exports = Socket;
/**
 * Socket constructor.
 *
 * @param {String|Object} uri or options
 * @param {Object} options
 * @api public
 */

function Socket(uri, opts) {
  if (!(this instanceof Socket)) return new Socket(uri, opts);
  opts = opts || {};

  if (uri && 'object' === _typeof(uri)) {
    opts = uri;
    uri = null;
  }

  if (uri) {
    uri = parseuri(uri);
    opts.hostname = uri.host;
    opts.secure = uri.protocol === 'https' || uri.protocol === 'wss';
    opts.port = uri.port;
    if (uri.query) opts.query = uri.query;
  } else if (opts.host) {
    opts.hostname = parseuri(opts.host).host;
  }

  this.secure = null != opts.secure ? opts.secure : typeof location !== 'undefined' && 'https:' === location.protocol;

  if (opts.hostname && !opts.port) {
    // if no port is specified manually, use the protocol default
    opts.port = this.secure ? '443' : '80';
  }

  this.agent = opts.agent || false;
  this.hostname = opts.hostname || (typeof location !== 'undefined' ? location.hostname : 'localhost');
  this.port = opts.port || (typeof location !== 'undefined' && location.port ? location.port : this.secure ? 443 : 80);
  this.query = opts.query || {};
  if ('string' === typeof this.query) this.query = parseqs.decode(this.query);
  this.upgrade = false !== opts.upgrade;
  this.path = (opts.path || '/engine.io').replace(/\/$/, '') + '/';
  this.forceJSONP = !!opts.forceJSONP;
  this.jsonp = false !== opts.jsonp;
  this.forceBase64 = !!opts.forceBase64;
  this.enablesXDR = !!opts.enablesXDR;
  this.withCredentials = false !== opts.withCredentials;
  this.timestampParam = opts.timestampParam || 't';
  this.timestampRequests = opts.timestampRequests;
  this.transports = opts.transports || ['polling', 'websocket'];
  this.transportOptions = opts.transportOptions || {};
  this.readyState = '';
  this.writeBuffer = [];
  this.prevBufferLen = 0;
  this.policyPort = opts.policyPort || 843;
  this.rememberUpgrade = opts.rememberUpgrade || false;
  this.binaryType = null;
  this.onlyBinaryUpgrades = opts.onlyBinaryUpgrades;
  this.perMessageDeflate = false !== opts.perMessageDeflate ? opts.perMessageDeflate || {} : false;
  if (true === this.perMessageDeflate) this.perMessageDeflate = {};

  if (this.perMessageDeflate && null == this.perMessageDeflate.threshold) {
    this.perMessageDeflate.threshold = 1024;
  } // SSL options for Node.js client


  this.pfx = opts.pfx || null;
  this.key = opts.key || null;
  this.passphrase = opts.passphrase || null;
  this.cert = opts.cert || null;
  this.ca = opts.ca || null;
  this.ciphers = opts.ciphers || null;
  this.rejectUnauthorized = opts.rejectUnauthorized === undefined ? true : opts.rejectUnauthorized;
  this.forceNode = !!opts.forceNode; // detect ReactNative environment

  this.isReactNative = typeof navigator !== 'undefined' && typeof navigator.product === 'string' && navigator.product.toLowerCase() === 'reactnative'; // other options for Node.js or ReactNative client

  if (typeof self === 'undefined' || this.isReactNative) {
    if (opts.extraHeaders && Object.keys(opts.extraHeaders).length > 0) {
      this.extraHeaders = opts.extraHeaders;
    }

    if (opts.localAddress) {
      this.localAddress = opts.localAddress;
    }
  } // set on handshake


  this.id = null;
  this.upgrades = null;
  this.pingInterval = null;
  this.pingTimeout = null; // set on heartbeat

  this.pingIntervalTimer = null;
  this.pingTimeoutTimer = null;
  this.open();
}

Socket.priorWebsocketSuccess = false;
/**
 * Mix in `Emitter`.
 */

Emitter(Socket.prototype);
/**
 * Protocol version.
 *
 * @api public
 */

Socket.protocol = parser.protocol; // this is an int

/**
 * Expose deps for legacy compatibility
 * and standalone browser access.
 */

Socket.Socket = Socket;
Socket.Transport = __webpack_require__(10);
Socket.transports = __webpack_require__(16);
Socket.parser = __webpack_require__(1);
/**
 * Creates transport of the given type.
 *
 * @param {String} transport name
 * @return {Transport}
 * @api private
 */

Socket.prototype.createTransport = function (name) {
  debug('creating transport "%s"', name);
  var query = clone(this.query); // append engine.io protocol identifier

  query.EIO = parser.protocol; // transport name

  query.transport = name; // per-transport options

  var options = this.transportOptions[name] || {}; // session id if we already have one

  if (this.id) query.sid = this.id;
  var transport = new transports[name]({
    query: query,
    socket: this,
    agent: options.agent || this.agent,
    hostname: options.hostname || this.hostname,
    port: options.port || this.port,
    secure: options.secure || this.secure,
    path: options.path || this.path,
    forceJSONP: options.forceJSONP || this.forceJSONP,
    jsonp: options.jsonp || this.jsonp,
    forceBase64: options.forceBase64 || this.forceBase64,
    enablesXDR: options.enablesXDR || this.enablesXDR,
    withCredentials: options.withCredentials || this.withCredentials,
    timestampRequests: options.timestampRequests || this.timestampRequests,
    timestampParam: options.timestampParam || this.timestampParam,
    policyPort: options.policyPort || this.policyPort,
    pfx: options.pfx || this.pfx,
    key: options.key || this.key,
    passphrase: options.passphrase || this.passphrase,
    cert: options.cert || this.cert,
    ca: options.ca || this.ca,
    ciphers: options.ciphers || this.ciphers,
    rejectUnauthorized: options.rejectUnauthorized || this.rejectUnauthorized,
    perMessageDeflate: options.perMessageDeflate || this.perMessageDeflate,
    extraHeaders: options.extraHeaders || this.extraHeaders,
    forceNode: options.forceNode || this.forceNode,
    localAddress: options.localAddress || this.localAddress,
    requestTimeout: options.requestTimeout || this.requestTimeout,
    protocols: options.protocols || void 0,
    isReactNative: this.isReactNative
  });
  return transport;
};

function clone(obj) {
  var o = {};

  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = obj[i];
    }
  }

  return o;
}
/**
 * Initializes transport to use and starts probe.
 *
 * @api private
 */


Socket.prototype.open = function () {
  var transport;

  if (this.rememberUpgrade && Socket.priorWebsocketSuccess && this.transports.indexOf('websocket') !== -1) {
    transport = 'websocket';
  } else if (0 === this.transports.length) {
    // Emit error on next tick so it can be listened to
    var self = this;
    setTimeout(function () {
      self.emit('error', 'No transports available');
    }, 0);
    return;
  } else {
    transport = this.transports[0];
  }

  this.readyState = 'opening'; // Retry with the next transport if the transport is disabled (jsonp: false)

  try {
    transport = this.createTransport(transport);
  } catch (e) {
    this.transports.shift();
    this.open();
    return;
  }

  transport.open();
  this.setTransport(transport);
};
/**
 * Sets the current transport. Disables the existing one (if any).
 *
 * @api private
 */


Socket.prototype.setTransport = function (transport) {
  debug('setting transport %s', transport.name);
  var self = this;

  if (this.transport) {
    debug('clearing existing transport %s', this.transport.name);
    this.transport.removeAllListeners();
  } // set up transport


  this.transport = transport; // set up transport listeners

  transport.on('drain', function () {
    self.onDrain();
  }).on('packet', function (packet) {
    self.onPacket(packet);
  }).on('error', function (e) {
    self.onError(e);
  }).on('close', function () {
    self.onClose('transport close');
  });
};
/**
 * Probes a transport.
 *
 * @param {String} transport name
 * @api private
 */


Socket.prototype.probe = function (name) {
  debug('probing transport "%s"', name);
  var transport = this.createTransport(name, {
    probe: 1
  });
  var failed = false;
  var self = this;
  Socket.priorWebsocketSuccess = false;

  function onTransportOpen() {
    if (self.onlyBinaryUpgrades) {
      var upgradeLosesBinary = !this.supportsBinary && self.transport.supportsBinary;
      failed = failed || upgradeLosesBinary;
    }

    if (failed) return;
    debug('probe transport "%s" opened', name);
    transport.send([{
      type: 'ping',
      data: 'probe'
    }]);
    transport.once('packet', function (msg) {
      if (failed) return;

      if ('pong' === msg.type && 'probe' === msg.data) {
        debug('probe transport "%s" pong', name);
        self.upgrading = true;
        self.emit('upgrading', transport);
        if (!transport) return;
        Socket.priorWebsocketSuccess = 'websocket' === transport.name;
        debug('pausing current transport "%s"', self.transport.name);
        self.transport.pause(function () {
          if (failed) return;
          if ('closed' === self.readyState) return;
          debug('changing transport and sending upgrade packet');
          cleanup();
          self.setTransport(transport);
          transport.send([{
            type: 'upgrade'
          }]);
          self.emit('upgrade', transport);
          transport = null;
          self.upgrading = false;
          self.flush();
        });
      } else {
        debug('probe transport "%s" failed', name);
        var err = new Error('probe error');
        err.transport = transport.name;
        self.emit('upgradeError', err);
      }
    });
  }

  function freezeTransport() {
    if (failed) return; // Any callback called by transport should be ignored since now

    failed = true;
    cleanup();
    transport.close();
    transport = null;
  } // Handle any error that happens while probing


  function onerror(err) {
    var error = new Error('probe error: ' + err);
    error.transport = transport.name;
    freezeTransport();
    debug('probe transport "%s" failed because of error: %s', name, err);
    self.emit('upgradeError', error);
  }

  function onTransportClose() {
    onerror('transport closed');
  } // When the socket is closed while we're probing


  function onclose() {
    onerror('socket closed');
  } // When the socket is upgraded while we're probing


  function onupgrade(to) {
    if (transport && to.name !== transport.name) {
      debug('"%s" works - aborting "%s"', to.name, transport.name);
      freezeTransport();
    }
  } // Remove all listeners on the transport and on self


  function cleanup() {
    transport.removeListener('open', onTransportOpen);
    transport.removeListener('error', onerror);
    transport.removeListener('close', onTransportClose);
    self.removeListener('close', onclose);
    self.removeListener('upgrading', onupgrade);
  }

  transport.once('open', onTransportOpen);
  transport.once('error', onerror);
  transport.once('close', onTransportClose);
  this.once('close', onclose);
  this.once('upgrading', onupgrade);
  transport.open();
};
/**
 * Called when connection is deemed open.
 *
 * @api public
 */


Socket.prototype.onOpen = function () {
  debug('socket open');
  this.readyState = 'open';
  Socket.priorWebsocketSuccess = 'websocket' === this.transport.name;
  this.emit('open');
  this.flush(); // we check for `readyState` in case an `open`
  // listener already closed the socket

  if ('open' === this.readyState && this.upgrade && this.transport.pause) {
    debug('starting upgrade probes');

    for (var i = 0, l = this.upgrades.length; i < l; i++) {
      this.probe(this.upgrades[i]);
    }
  }
};
/**
 * Handles a packet.
 *
 * @api private
 */


Socket.prototype.onPacket = function (packet) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket receive: type "%s", data "%s"', packet.type, packet.data);
    this.emit('packet', packet); // Socket is live - any packet counts

    this.emit('heartbeat');

    switch (packet.type) {
      case 'open':
        this.onHandshake(JSON.parse(packet.data));
        break;

      case 'pong':
        this.setPing();
        this.emit('pong');
        break;

      case 'error':
        var err = new Error('server error');
        err.code = packet.data;
        this.onError(err);
        break;

      case 'message':
        this.emit('data', packet.data);
        this.emit('message', packet.data);
        break;
    }
  } else {
    debug('packet received with socket readyState "%s"', this.readyState);
  }
};
/**
 * Called upon handshake completion.
 *
 * @param {Object} handshake obj
 * @api private
 */


Socket.prototype.onHandshake = function (data) {
  this.emit('handshake', data);
  this.id = data.sid;
  this.transport.query.sid = data.sid;
  this.upgrades = this.filterUpgrades(data.upgrades);
  this.pingInterval = data.pingInterval;
  this.pingTimeout = data.pingTimeout;
  this.onOpen(); // In case open handler closes socket

  if ('closed' === this.readyState) return;
  this.setPing(); // Prolong liveness of socket on heartbeat

  this.removeListener('heartbeat', this.onHeartbeat);
  this.on('heartbeat', this.onHeartbeat);
};
/**
 * Resets ping timeout.
 *
 * @api private
 */


Socket.prototype.onHeartbeat = function (timeout) {
  clearTimeout(this.pingTimeoutTimer);
  var self = this;
  self.pingTimeoutTimer = setTimeout(function () {
    if ('closed' === self.readyState) return;
    self.onClose('ping timeout');
  }, timeout || self.pingInterval + self.pingTimeout);
};
/**
 * Pings server every `this.pingInterval` and expects response
 * within `this.pingTimeout` or closes connection.
 *
 * @api private
 */


Socket.prototype.setPing = function () {
  var self = this;
  clearTimeout(self.pingIntervalTimer);
  self.pingIntervalTimer = setTimeout(function () {
    debug('writing ping packet - expecting pong within %sms', self.pingTimeout);
    self.ping();
    self.onHeartbeat(self.pingTimeout);
  }, self.pingInterval);
};
/**
* Sends a ping packet.
*
* @api private
*/


Socket.prototype.ping = function () {
  var self = this;
  this.sendPacket('ping', function () {
    self.emit('ping');
  });
};
/**
 * Called on `drain` event
 *
 * @api private
 */


Socket.prototype.onDrain = function () {
  this.writeBuffer.splice(0, this.prevBufferLen); // setting prevBufferLen = 0 is very important
  // for example, when upgrading, upgrade packet is sent over,
  // and a nonzero prevBufferLen could cause problems on `drain`

  this.prevBufferLen = 0;

  if (0 === this.writeBuffer.length) {
    this.emit('drain');
  } else {
    this.flush();
  }
};
/**
 * Flush write buffers.
 *
 * @api private
 */


Socket.prototype.flush = function () {
  if ('closed' !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
    debug('flushing %d packets in socket', this.writeBuffer.length);
    this.transport.send(this.writeBuffer); // keep track of current length of writeBuffer
    // splice writeBuffer and callbackBuffer on `drain`

    this.prevBufferLen = this.writeBuffer.length;
    this.emit('flush');
  }
};
/**
 * Sends a message.
 *
 * @param {String} message.
 * @param {Function} callback function.
 * @param {Object} options.
 * @return {Socket} for chaining.
 * @api public
 */


Socket.prototype.write = Socket.prototype.send = function (msg, options, fn) {
  this.sendPacket('message', msg, options, fn);
  return this;
};
/**
 * Sends a packet.
 *
 * @param {String} packet type.
 * @param {String} data.
 * @param {Object} options.
 * @param {Function} callback function.
 * @api private
 */


Socket.prototype.sendPacket = function (type, data, options, fn) {
  if ('function' === typeof data) {
    fn = data;
    data = undefined;
  }

  if ('function' === typeof options) {
    fn = options;
    options = null;
  }

  if ('closing' === this.readyState || 'closed' === this.readyState) {
    return;
  }

  options = options || {};
  options.compress = false !== options.compress;
  var packet = {
    type: type,
    data: data,
    options: options
  };
  this.emit('packetCreate', packet);
  this.writeBuffer.push(packet);
  if (fn) this.once('flush', fn);
  this.flush();
};
/**
 * Closes the connection.
 *
 * @api private
 */


Socket.prototype.close = function () {
  if ('opening' === this.readyState || 'open' === this.readyState) {
    this.readyState = 'closing';
    var self = this;

    if (this.writeBuffer.length) {
      this.once('drain', function () {
        if (this.upgrading) {
          waitForUpgrade();
        } else {
          close();
        }
      });
    } else if (this.upgrading) {
      waitForUpgrade();
    } else {
      close();
    }
  }

  function close() {
    self.onClose('forced close');
    debug('socket closing - telling transport to close');
    self.transport.close();
  }

  function cleanupAndClose() {
    self.removeListener('upgrade', cleanupAndClose);
    self.removeListener('upgradeError', cleanupAndClose);
    close();
  }

  function waitForUpgrade() {
    // wait for upgrade to finish since we can't send packets while pausing a transport
    self.once('upgrade', cleanupAndClose);
    self.once('upgradeError', cleanupAndClose);
  }

  return this;
};
/**
 * Called upon transport error
 *
 * @api private
 */


Socket.prototype.onError = function (err) {
  debug('socket error %j', err);
  Socket.priorWebsocketSuccess = false;
  this.emit('error', err);
  this.onClose('transport error', err);
};
/**
 * Called upon transport close.
 *
 * @api private
 */


Socket.prototype.onClose = function (reason, desc) {
  if ('opening' === this.readyState || 'open' === this.readyState || 'closing' === this.readyState) {
    debug('socket close with reason: "%s"', reason);
    var self = this; // clear timers

    clearTimeout(this.pingIntervalTimer);
    clearTimeout(this.pingTimeoutTimer); // stop event from firing again for transport

    this.transport.removeAllListeners('close'); // ensure transport won't stay open

    this.transport.close(); // ignore further transport communication

    this.transport.removeAllListeners(); // set ready state

    this.readyState = 'closed'; // clear session id

    this.id = null; // emit close event

    this.emit('close', reason, desc); // clean buffers after, so users can still
    // grab the buffers on `close` event

    self.writeBuffer = [];
    self.prevBufferLen = 0;
  }
};
/**
 * Filters upgrades, returning only those matching client transports.
 *
 * @param {Array} server upgrades
 * @api private
 *
 */


Socket.prototype.filterUpgrades = function (upgrades) {
  var filteredUpgrades = [];

  for (var i = 0, j = upgrades.length; i < j; i++) {
    if (~index(this.transports, upgrades[i])) filteredUpgrades.push(upgrades[i]);
  }

  return filteredUpgrades;
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Module exports.
 *
 * Logic borrowed from Modernizr:
 *
 *   - https://github.com/Modernizr/Modernizr/blob/master/feature-detects/cors.js
 */
try {
  module.exports = typeof XMLHttpRequest !== 'undefined' && 'withCredentials' in new XMLHttpRequest();
} catch (err) {
  // if XMLHttp support is disabled in IE then it will throw
  // when trying to create
  module.exports = false;
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* global attachEvent */

/**
 * Module requirements.
 */
var XMLHttpRequest = __webpack_require__(8);

var Polling = __webpack_require__(17);

var Emitter = __webpack_require__(11);

var inherit = __webpack_require__(3);

var debug = __webpack_require__(0)('engine.io-client:polling-xhr');

var globalThis = __webpack_require__(9);
/**
 * Module exports.
 */


module.exports = XHR;
module.exports.Request = Request;
/**
 * Empty function
 */

function empty() {}
/**
 * XHR Polling constructor.
 *
 * @param {Object} opts
 * @api public
 */


function XHR(opts) {
  Polling.call(this, opts);
  this.requestTimeout = opts.requestTimeout;
  this.extraHeaders = opts.extraHeaders;

  if (typeof location !== 'undefined') {
    var isSSL = 'https:' === location.protocol;
    var port = location.port; // some user agents have empty `location.port`

    if (!port) {
      port = isSSL ? 443 : 80;
    }

    this.xd = typeof location !== 'undefined' && opts.hostname !== location.hostname || port !== opts.port;
    this.xs = opts.secure !== isSSL;
  }
}
/**
 * Inherits from Polling.
 */


inherit(XHR, Polling);
/**
 * XHR supports binary
 */

XHR.prototype.supportsBinary = true;
/**
 * Creates a request.
 *
 * @param {String} method
 * @api private
 */

XHR.prototype.request = function (opts) {
  opts = opts || {};
  opts.uri = this.uri();
  opts.xd = this.xd;
  opts.xs = this.xs;
  opts.agent = this.agent || false;
  opts.supportsBinary = this.supportsBinary;
  opts.enablesXDR = this.enablesXDR;
  opts.withCredentials = this.withCredentials; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  opts.requestTimeout = this.requestTimeout; // other options for Node.js client

  opts.extraHeaders = this.extraHeaders;
  return new Request(opts);
};
/**
 * Sends data.
 *
 * @param {String} data to send.
 * @param {Function} called upon flush.
 * @api private
 */


XHR.prototype.doWrite = function (data, fn) {
  var isBinary = typeof data !== 'string' && data !== undefined;
  var req = this.request({
    method: 'POST',
    data: data,
    isBinary: isBinary
  });
  var self = this;
  req.on('success', fn);
  req.on('error', function (err) {
    self.onError('xhr post error', err);
  });
  this.sendXhr = req;
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


XHR.prototype.doPoll = function () {
  debug('xhr poll');
  var req = this.request();
  var self = this;
  req.on('data', function (data) {
    self.onData(data);
  });
  req.on('error', function (err) {
    self.onError('xhr poll error', err);
  });
  this.pollXhr = req;
};
/**
 * Request constructor
 *
 * @param {Object} options
 * @api public
 */


function Request(opts) {
  this.method = opts.method || 'GET';
  this.uri = opts.uri;
  this.xd = !!opts.xd;
  this.xs = !!opts.xs;
  this.async = false !== opts.async;
  this.data = undefined !== opts.data ? opts.data : null;
  this.agent = opts.agent;
  this.isBinary = opts.isBinary;
  this.supportsBinary = opts.supportsBinary;
  this.enablesXDR = opts.enablesXDR;
  this.withCredentials = opts.withCredentials;
  this.requestTimeout = opts.requestTimeout; // SSL options for Node.js client

  this.pfx = opts.pfx;
  this.key = opts.key;
  this.passphrase = opts.passphrase;
  this.cert = opts.cert;
  this.ca = opts.ca;
  this.ciphers = opts.ciphers;
  this.rejectUnauthorized = opts.rejectUnauthorized; // other options for Node.js client

  this.extraHeaders = opts.extraHeaders;
  this.create();
}
/**
 * Mix in `Emitter`.
 */


Emitter(Request.prototype);
/**
 * Creates the XHR object and sends the request.
 *
 * @api private
 */

Request.prototype.create = function () {
  var opts = {
    agent: this.agent,
    xdomain: this.xd,
    xscheme: this.xs,
    enablesXDR: this.enablesXDR
  }; // SSL options for Node.js client

  opts.pfx = this.pfx;
  opts.key = this.key;
  opts.passphrase = this.passphrase;
  opts.cert = this.cert;
  opts.ca = this.ca;
  opts.ciphers = this.ciphers;
  opts.rejectUnauthorized = this.rejectUnauthorized;
  var xhr = this.xhr = new XMLHttpRequest(opts);
  var self = this;

  try {
    debug('xhr open %s: %s', this.method, this.uri);
    xhr.open(this.method, this.uri, this.async);

    try {
      if (this.extraHeaders) {
        xhr.setDisableHeaderCheck && xhr.setDisableHeaderCheck(true);

        for (var i in this.extraHeaders) {
          if (this.extraHeaders.hasOwnProperty(i)) {
            xhr.setRequestHeader(i, this.extraHeaders[i]);
          }
        }
      }
    } catch (e) {}

    if ('POST' === this.method) {
      try {
        if (this.isBinary) {
          xhr.setRequestHeader('Content-type', 'application/octet-stream');
        } else {
          xhr.setRequestHeader('Content-type', 'text/plain;charset=UTF-8');
        }
      } catch (e) {}
    }

    try {
      xhr.setRequestHeader('Accept', '*/*');
    } catch (e) {} // ie6 check


    if ('withCredentials' in xhr) {
      xhr.withCredentials = this.withCredentials;
    }

    if (this.requestTimeout) {
      xhr.timeout = this.requestTimeout;
    }

    if (this.hasXDR()) {
      xhr.onload = function () {
        self.onLoad();
      };

      xhr.onerror = function () {
        self.onError(xhr.responseText);
      };
    } else {
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
          try {
            var contentType = xhr.getResponseHeader('Content-Type');

            if (self.supportsBinary && contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
              xhr.responseType = 'arraybuffer';
            }
          } catch (e) {}
        }

        if (4 !== xhr.readyState) return;

        if (200 === xhr.status || 1223 === xhr.status) {
          self.onLoad();
        } else {
          // make sure the `error` event handler that's user-set
          // does not throw in the same tick and gets caught here
          setTimeout(function () {
            self.onError(typeof xhr.status === 'number' ? xhr.status : 0);
          }, 0);
        }
      };
    }

    debug('xhr data %s', this.data);
    xhr.send(this.data);
  } catch (e) {
    // Need to defer since .create() is called directly fhrom the constructor
    // and thus the 'error' event can only be only bound *after* this exception
    // occurs.  Therefore, also, we cannot throw here at all.
    setTimeout(function () {
      self.onError(e);
    }, 0);
    return;
  }

  if (typeof document !== 'undefined') {
    this.index = Request.requestsCount++;
    Request.requests[this.index] = this;
  }
};
/**
 * Called upon successful response.
 *
 * @api private
 */


Request.prototype.onSuccess = function () {
  this.emit('success');
  this.cleanup();
};
/**
 * Called if we have data.
 *
 * @api private
 */


Request.prototype.onData = function (data) {
  this.emit('data', data);
  this.onSuccess();
};
/**
 * Called upon error.
 *
 * @api private
 */


Request.prototype.onError = function (err) {
  this.emit('error', err);
  this.cleanup(true);
};
/**
 * Cleans up house.
 *
 * @api private
 */


Request.prototype.cleanup = function (fromError) {
  if ('undefined' === typeof this.xhr || null === this.xhr) {
    return;
  } // xmlhttprequest


  if (this.hasXDR()) {
    this.xhr.onload = this.xhr.onerror = empty;
  } else {
    this.xhr.onreadystatechange = empty;
  }

  if (fromError) {
    try {
      this.xhr.abort();
    } catch (e) {}
  }

  if (typeof document !== 'undefined') {
    delete Request.requests[this.index];
  }

  this.xhr = null;
};
/**
 * Called upon load.
 *
 * @api private
 */


Request.prototype.onLoad = function () {
  var data;

  try {
    var contentType;

    try {
      contentType = this.xhr.getResponseHeader('Content-Type');
    } catch (e) {}

    if (contentType === 'application/octet-stream' || contentType === 'application/octet-stream; charset=UTF-8') {
      data = this.xhr.response || this.xhr.responseText;
    } else {
      data = this.xhr.responseText;
    }
  } catch (e) {
    this.onError(e);
  }

  if (null != data) {
    this.onData(data);
  }
};
/**
 * Check if it has XDomainRequest.
 *
 * @api private
 */


Request.prototype.hasXDR = function () {
  return typeof XDomainRequest !== 'undefined' && !this.xs && this.enablesXDR;
};
/**
 * Aborts the request.
 *
 * @api public
 */


Request.prototype.abort = function () {
  this.cleanup();
};
/**
 * Aborts pending requests when unloading the window. This is needed to prevent
 * memory leaks (e.g. when using IE) and to ensure that no spurious error is
 * emitted.
 */


Request.requestsCount = 0;
Request.requests = {};

if (typeof document !== 'undefined') {
  if (typeof attachEvent === 'function') {
    attachEvent('onunload', unloadHandler);
  } else if (typeof addEventListener === 'function') {
    var terminationEvent = 'onpagehide' in globalThis ? 'pagehide' : 'unload';
    addEventListener(terminationEvent, unloadHandler, false);
  }
}

function unloadHandler() {
  for (var i in Request.requests) {
    if (Request.requests.hasOwnProperty(i)) {
      Request.requests[i].abort();
    }
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * Gets the keys for an object.
 *
 * @return {Array} keys
 * @api private
 */
module.exports = Object.keys || function keys(obj) {
  var arr = [];
  var has = Object.prototype.hasOwnProperty;

  for (var i in obj) {
    if (has.call(obj, i)) {
      arr.push(i);
    }
  }

  return arr;
};

/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * An abstraction for slicing an arraybuffer even when
 * ArrayBuffer.prototype.slice is not supported
 *
 * @api public
 */
module.exports = function (arraybuffer, start, end) {
  var bytes = arraybuffer.byteLength;
  start = start || 0;
  end = end || bytes;

  if (arraybuffer.slice) {
    return arraybuffer.slice(start, end);
  }

  if (start < 0) {
    start += bytes;
  }

  if (end < 0) {
    end += bytes;
  }

  if (end > bytes) {
    end = bytes;
  }

  if (start >= bytes || start >= end || bytes === 0) {
    return new ArrayBuffer(0);
  }

  var abv = new Uint8Array(arraybuffer);
  var result = new Uint8Array(end - start);

  for (var i = start, ii = 0; i < end; i++, ii++) {
    result[ii] = abv[i];
  }

  return result.buffer;
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = after;

function after(count, callback, err_cb) {
  var bail = false;
  err_cb = err_cb || noop;
  proxy.count = count;
  return count === 0 ? callback() : proxy;

  function proxy(err, result) {
    if (proxy.count <= 0) {
      throw new Error('after called too many times');
    }

    --proxy.count; // after first error, rest are passed to err_cb

    if (err) {
      bail = true;
      callback(err); // future error callbacks will go to error handler

      callback = err_cb;
    } else if (proxy.count === 0 && !bail) {
      callback(null, result);
    }
  }
}

function noop() {}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

/*! https://mths.be/utf8js v2.1.2 by @mathias */
var stringFromCharCode = String.fromCharCode; // Taken from https://mths.be/punycode

function ucs2decode(string) {
  var output = [];
  var counter = 0;
  var length = string.length;
  var value;
  var extra;

  while (counter < length) {
    value = string.charCodeAt(counter++);

    if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
      // high surrogate, and there is a next character
      extra = string.charCodeAt(counter++);

      if ((extra & 0xFC00) == 0xDC00) {
        // low surrogate
        output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
      } else {
        // unmatched surrogate; only append this code unit, in case the next
        // code unit is the high surrogate of a surrogate pair
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }

  return output;
} // Taken from https://mths.be/punycode


function ucs2encode(array) {
  var length = array.length;
  var index = -1;
  var value;
  var output = '';

  while (++index < length) {
    value = array[index];

    if (value > 0xFFFF) {
      value -= 0x10000;
      output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
      value = 0xDC00 | value & 0x3FF;
    }

    output += stringFromCharCode(value);
  }

  return output;
}

function checkScalarValue(codePoint, strict) {
  if (codePoint >= 0xD800 && codePoint <= 0xDFFF) {
    if (strict) {
      throw Error('Lone surrogate U+' + codePoint.toString(16).toUpperCase() + ' is not a scalar value');
    }

    return false;
  }

  return true;
}
/*--------------------------------------------------------------------------*/


function createByte(codePoint, shift) {
  return stringFromCharCode(codePoint >> shift & 0x3F | 0x80);
}

function encodeCodePoint(codePoint, strict) {
  if ((codePoint & 0xFFFFFF80) == 0) {
    // 1-byte sequence
    return stringFromCharCode(codePoint);
  }

  var symbol = '';

  if ((codePoint & 0xFFFFF800) == 0) {
    // 2-byte sequence
    symbol = stringFromCharCode(codePoint >> 6 & 0x1F | 0xC0);
  } else if ((codePoint & 0xFFFF0000) == 0) {
    // 3-byte sequence
    if (!checkScalarValue(codePoint, strict)) {
      codePoint = 0xFFFD;
    }

    symbol = stringFromCharCode(codePoint >> 12 & 0x0F | 0xE0);
    symbol += createByte(codePoint, 6);
  } else if ((codePoint & 0xFFE00000) == 0) {
    // 4-byte sequence
    symbol = stringFromCharCode(codePoint >> 18 & 0x07 | 0xF0);
    symbol += createByte(codePoint, 12);
    symbol += createByte(codePoint, 6);
  }

  symbol += stringFromCharCode(codePoint & 0x3F | 0x80);
  return symbol;
}

function utf8encode(string, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  var codePoints = ucs2decode(string);
  var length = codePoints.length;
  var index = -1;
  var codePoint;
  var byteString = '';

  while (++index < length) {
    codePoint = codePoints[index];
    byteString += encodeCodePoint(codePoint, strict);
  }

  return byteString;
}
/*--------------------------------------------------------------------------*/


function readContinuationByte() {
  if (byteIndex >= byteCount) {
    throw Error('Invalid byte index');
  }

  var continuationByte = byteArray[byteIndex] & 0xFF;
  byteIndex++;

  if ((continuationByte & 0xC0) == 0x80) {
    return continuationByte & 0x3F;
  } // If we end up here, it’s not a continuation byte


  throw Error('Invalid continuation byte');
}

function decodeSymbol(strict) {
  var byte1;
  var byte2;
  var byte3;
  var byte4;
  var codePoint;

  if (byteIndex > byteCount) {
    throw Error('Invalid byte index');
  }

  if (byteIndex == byteCount) {
    return false;
  } // Read first byte


  byte1 = byteArray[byteIndex] & 0xFF;
  byteIndex++; // 1-byte sequence (no continuation bytes)

  if ((byte1 & 0x80) == 0) {
    return byte1;
  } // 2-byte sequence


  if ((byte1 & 0xE0) == 0xC0) {
    byte2 = readContinuationByte();
    codePoint = (byte1 & 0x1F) << 6 | byte2;

    if (codePoint >= 0x80) {
      return codePoint;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 3-byte sequence (may include unpaired surrogates)


  if ((byte1 & 0xF0) == 0xE0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    codePoint = (byte1 & 0x0F) << 12 | byte2 << 6 | byte3;

    if (codePoint >= 0x0800) {
      return checkScalarValue(codePoint, strict) ? codePoint : 0xFFFD;
    } else {
      throw Error('Invalid continuation byte');
    }
  } // 4-byte sequence


  if ((byte1 & 0xF8) == 0xF0) {
    byte2 = readContinuationByte();
    byte3 = readContinuationByte();
    byte4 = readContinuationByte();
    codePoint = (byte1 & 0x07) << 0x12 | byte2 << 0x0C | byte3 << 0x06 | byte4;

    if (codePoint >= 0x010000 && codePoint <= 0x10FFFF) {
      return codePoint;
    }
  }

  throw Error('Invalid UTF-8 detected');
}

var byteArray;
var byteCount;
var byteIndex;

function utf8decode(byteString, opts) {
  opts = opts || {};
  var strict = false !== opts.strict;
  byteArray = ucs2decode(byteString);
  byteCount = byteArray.length;
  byteIndex = 0;
  var codePoints = [];
  var tmp;

  while ((tmp = decodeSymbol(strict)) !== false) {
    codePoints.push(tmp);
  }

  return ucs2encode(codePoints);
}

module.exports = {
  version: '2.1.2',
  encode: utf8encode,
  decode: utf8decode
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

/*
 * base64-arraybuffer
 * https://github.com/niklasvh/base64-arraybuffer
 *
 * Copyright (c) 2012 Niklas von Hertzen
 * Licensed under the MIT license.
 */
(function () {
  "use strict";

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; // Use a lookup table to find the index.

  var lookup = new Uint8Array(256);

  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  exports.encode = function (arraybuffer) {
    var bytes = new Uint8Array(arraybuffer),
        i,
        len = bytes.length,
        base64 = "";

    for (i = 0; i < len; i += 3) {
      base64 += chars[bytes[i] >> 2];
      base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
      base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
      base64 += chars[bytes[i + 2] & 63];
    }

    if (len % 3 === 2) {
      base64 = base64.substring(0, base64.length - 1) + "=";
    } else if (len % 3 === 1) {
      base64 = base64.substring(0, base64.length - 2) + "==";
    }

    return base64;
  };

  exports.decode = function (base64) {
    var bufferLength = base64.length * 0.75,
        len = base64.length,
        i,
        p = 0,
        encoded1,
        encoded2,
        encoded3,
        encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;

      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
        bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i += 4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i + 1)];
      encoded3 = lookup[base64.charCodeAt(i + 2)];
      encoded4 = lookup[base64.charCodeAt(i + 3)];
      bytes[p++] = encoded1 << 2 | encoded2 >> 4;
      bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
      bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
    }

    return arraybuffer;
  };
})();

/***/ }),
/* 45 */
/***/ (function(module, exports) {

/**
 * Create a blob builder even when vendor prefixes exist
 */
var BlobBuilder = typeof BlobBuilder !== 'undefined' ? BlobBuilder : typeof WebKitBlobBuilder !== 'undefined' ? WebKitBlobBuilder : typeof MSBlobBuilder !== 'undefined' ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined' ? MozBlobBuilder : false;
/**
 * Check if Blob constructor is supported
 */

var blobSupported = function () {
  try {
    var a = new Blob(['hi']);
    return a.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if Blob constructor supports ArrayBufferViews
 * Fails in Safari 6, so we need to map to ArrayBuffers there.
 */


var blobSupportsArrayBufferView = blobSupported && function () {
  try {
    var b = new Blob([new Uint8Array([1, 2])]);
    return b.size === 2;
  } catch (e) {
    return false;
  }
}();
/**
 * Check if BlobBuilder is supported
 */


var blobBuilderSupported = BlobBuilder && BlobBuilder.prototype.append && BlobBuilder.prototype.getBlob;
/**
 * Helper function that maps ArrayBufferViews to ArrayBuffers
 * Used by BlobBuilder constructor and old browsers that didn't
 * support it in the Blob constructor.
 */

function mapArrayBufferViews(ary) {
  return ary.map(function (chunk) {
    if (chunk.buffer instanceof ArrayBuffer) {
      var buf = chunk.buffer; // if this is a subarray, make a copy so we only
      // include the subarray region from the underlying buffer

      if (chunk.byteLength !== buf.byteLength) {
        var copy = new Uint8Array(chunk.byteLength);
        copy.set(new Uint8Array(buf, chunk.byteOffset, chunk.byteLength));
        buf = copy.buffer;
      }

      return buf;
    }

    return chunk;
  });
}

function BlobBuilderConstructor(ary, options) {
  options = options || {};
  var bb = new BlobBuilder();
  mapArrayBufferViews(ary).forEach(function (part) {
    bb.append(part);
  });
  return options.type ? bb.getBlob(options.type) : bb.getBlob();
}

;

function BlobConstructor(ary, options) {
  return new Blob(mapArrayBufferViews(ary), options || {});
}

;

if (typeof Blob !== 'undefined') {
  BlobBuilderConstructor.prototype = Blob.prototype;
  BlobConstructor.prototype = Blob.prototype;
}

module.exports = function () {
  if (blobSupported) {
    return blobSupportsArrayBufferView ? Blob : BlobConstructor;
  } else if (blobBuilderSupported) {
    return BlobBuilderConstructor;
  } else {
    return undefined;
  }
}();

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module requirements.
 */
var Polling = __webpack_require__(17);

var inherit = __webpack_require__(3);

var globalThis = __webpack_require__(9);
/**
 * Module exports.
 */


module.exports = JSONPPolling;
/**
 * Cached regular expressions.
 */

var rNewline = /\n/g;
var rEscapedNewline = /\\n/g;
/**
 * Global JSONP callbacks.
 */

var callbacks;
/**
 * Noop.
 */

function empty() {}
/**
 * JSONP Polling constructor.
 *
 * @param {Object} opts.
 * @api public
 */


function JSONPPolling(opts) {
  Polling.call(this, opts);
  this.query = this.query || {}; // define global callbacks array if not present
  // we do this here (lazily) to avoid unneeded global pollution

  if (!callbacks) {
    // we need to consider multiple engines in the same page
    callbacks = globalThis.___eio = globalThis.___eio || [];
  } // callback identifier


  this.index = callbacks.length; // add callback to jsonp global

  var self = this;
  callbacks.push(function (msg) {
    self.onData(msg);
  }); // append to query string

  this.query.j = this.index; // prevent spurious errors from being emitted when the window is unloaded

  if (typeof addEventListener === 'function') {
    addEventListener('beforeunload', function () {
      if (self.script) self.script.onerror = empty;
    }, false);
  }
}
/**
 * Inherits from Polling.
 */


inherit(JSONPPolling, Polling);
/*
 * JSONP only supports binary as base64 encoded strings
 */

JSONPPolling.prototype.supportsBinary = false;
/**
 * Closes the socket.
 *
 * @api private
 */

JSONPPolling.prototype.doClose = function () {
  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  if (this.form) {
    this.form.parentNode.removeChild(this.form);
    this.form = null;
    this.iframe = null;
  }

  Polling.prototype.doClose.call(this);
};
/**
 * Starts a poll cycle.
 *
 * @api private
 */


JSONPPolling.prototype.doPoll = function () {
  var self = this;
  var script = document.createElement('script');

  if (this.script) {
    this.script.parentNode.removeChild(this.script);
    this.script = null;
  }

  script.async = true;
  script.src = this.uri();

  script.onerror = function (e) {
    self.onError('jsonp poll error', e);
  };

  var insertAt = document.getElementsByTagName('script')[0];

  if (insertAt) {
    insertAt.parentNode.insertBefore(script, insertAt);
  } else {
    (document.head || document.body).appendChild(script);
  }

  this.script = script;
  var isUAgecko = 'undefined' !== typeof navigator && /gecko/i.test(navigator.userAgent);

  if (isUAgecko) {
    setTimeout(function () {
      var iframe = document.createElement('iframe');
      document.body.appendChild(iframe);
      document.body.removeChild(iframe);
    }, 100);
  }
};
/**
 * Writes with a hidden iframe.
 *
 * @param {String} data to send
 * @param {Function} called upon flush.
 * @api private
 */


JSONPPolling.prototype.doWrite = function (data, fn) {
  var self = this;

  if (!this.form) {
    var form = document.createElement('form');
    var area = document.createElement('textarea');
    var id = this.iframeId = 'eio_iframe_' + this.index;
    var iframe;
    form.className = 'socketio';
    form.style.position = 'absolute';
    form.style.top = '-1000px';
    form.style.left = '-1000px';
    form.target = id;
    form.method = 'POST';
    form.setAttribute('accept-charset', 'utf-8');
    area.name = 'd';
    form.appendChild(area);
    document.body.appendChild(form);
    this.form = form;
    this.area = area;
  }

  this.form.action = this.uri();

  function complete() {
    initIframe();
    fn();
  }

  function initIframe() {
    if (self.iframe) {
      try {
        self.form.removeChild(self.iframe);
      } catch (e) {
        self.onError('jsonp polling iframe removal error', e);
      }
    }

    try {
      // ie6 dynamic iframes with target="" support (thanks Chris Lambacher)
      var html = '<iframe src="javascript:0" name="' + self.iframeId + '">';
      iframe = document.createElement(html);
    } catch (e) {
      iframe = document.createElement('iframe');
      iframe.name = self.iframeId;
      iframe.src = 'javascript:0';
    }

    iframe.id = self.iframeId;
    self.form.appendChild(iframe);
    self.iframe = iframe;
  }

  initIframe(); // escape \n to prevent it from being converted into \r\n by some UAs
  // double escaping is required for escaped new lines because unescaping of new lines can be done safely on server-side

  data = data.replace(rEscapedNewline, '\\\n');
  this.area.value = data.replace(rNewline, '\\n');

  try {
    this.form.submit();
  } catch (e) {}

  if (this.iframe.attachEvent) {
    this.iframe.onreadystatechange = function () {
      if (self.iframe.readyState === 'complete') {
        complete();
      }
    };
  } else {
    this.iframe.onload = complete;
  }
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {/**
 * Module dependencies.
 */
var Transport = __webpack_require__(10);

var parser = __webpack_require__(1);

var parseqs = __webpack_require__(2);

var inherit = __webpack_require__(3);

var yeast = __webpack_require__(19);

var debug = __webpack_require__(0)('engine.io-client:websocket');

var BrowserWebSocket, NodeWebSocket;

if (typeof WebSocket !== 'undefined') {
  BrowserWebSocket = WebSocket;
} else if (typeof self !== 'undefined') {
  BrowserWebSocket = self.WebSocket || self.MozWebSocket;
}

if (typeof window === 'undefined') {
  try {
    NodeWebSocket = __webpack_require__(48);
  } catch (e) {}
}
/**
 * Get either the `WebSocket` or `MozWebSocket` globals
 * in the browser or try to resolve WebSocket-compatible
 * interface exposed by `ws` for Node-like environment.
 */


var WebSocketImpl = BrowserWebSocket || NodeWebSocket;
/**
 * Module exports.
 */

module.exports = WS;
/**
 * WebSocket transport constructor.
 *
 * @api {Object} connection options
 * @api public
 */

function WS(opts) {
  var forceBase64 = opts && opts.forceBase64;

  if (forceBase64) {
    this.supportsBinary = false;
  }

  this.perMessageDeflate = opts.perMessageDeflate;
  this.usingBrowserWebSocket = BrowserWebSocket && !opts.forceNode;
  this.protocols = opts.protocols;

  if (!this.usingBrowserWebSocket) {
    WebSocketImpl = NodeWebSocket;
  }

  Transport.call(this, opts);
}
/**
 * Inherits from Transport.
 */


inherit(WS, Transport);
/**
 * Transport name.
 *
 * @api public
 */

WS.prototype.name = 'websocket';
/*
 * WebSockets support binary
 */

WS.prototype.supportsBinary = true;
/**
 * Opens socket.
 *
 * @api private
 */

WS.prototype.doOpen = function () {
  if (!this.check()) {
    // let probe timeout
    return;
  }

  var uri = this.uri();
  var protocols = this.protocols;
  var opts = {};

  if (!this.isReactNative) {
    opts.agent = this.agent;
    opts.perMessageDeflate = this.perMessageDeflate; // SSL options for Node.js client

    opts.pfx = this.pfx;
    opts.key = this.key;
    opts.passphrase = this.passphrase;
    opts.cert = this.cert;
    opts.ca = this.ca;
    opts.ciphers = this.ciphers;
    opts.rejectUnauthorized = this.rejectUnauthorized;
  }

  if (this.extraHeaders) {
    opts.headers = this.extraHeaders;
  }

  if (this.localAddress) {
    opts.localAddress = this.localAddress;
  }

  try {
    this.ws = this.usingBrowserWebSocket && !this.isReactNative ? protocols ? new WebSocketImpl(uri, protocols) : new WebSocketImpl(uri) : new WebSocketImpl(uri, protocols, opts);
  } catch (err) {
    return this.emit('error', err);
  }

  if (this.ws.binaryType === undefined) {
    this.supportsBinary = false;
  }

  if (this.ws.supports && this.ws.supports.binary) {
    this.supportsBinary = true;
    this.ws.binaryType = 'nodebuffer';
  } else {
    this.ws.binaryType = 'arraybuffer';
  }

  this.addEventListeners();
};
/**
 * Adds event listeners to the socket
 *
 * @api private
 */


WS.prototype.addEventListeners = function () {
  var self = this;

  this.ws.onopen = function () {
    self.onOpen();
  };

  this.ws.onclose = function () {
    self.onClose();
  };

  this.ws.onmessage = function (ev) {
    self.onData(ev.data);
  };

  this.ws.onerror = function (e) {
    self.onError('websocket error', e);
  };
};
/**
 * Writes data to socket.
 *
 * @param {Array} array of packets.
 * @api private
 */


WS.prototype.write = function (packets) {
  var self = this;
  this.writable = false; // encodePacket efficient as it uses WS framing
  // no need for encodePayload

  var total = packets.length;

  for (var i = 0, l = total; i < l; i++) {
    (function (packet) {
      parser.encodePacket(packet, self.supportsBinary, function (data) {
        if (!self.usingBrowserWebSocket) {
          // always create a new object (GH-437)
          var opts = {};

          if (packet.options) {
            opts.compress = packet.options.compress;
          }

          if (self.perMessageDeflate) {
            var len = 'string' === typeof data ? Buffer.byteLength(data) : data.length;

            if (len < self.perMessageDeflate.threshold) {
              opts.compress = false;
            }
          }
        } // Sometimes the websocket has already been closed but the browser didn't
        // have a chance of informing us about it yet, in that case send will
        // throw an error


        try {
          if (self.usingBrowserWebSocket) {
            // TypeError is thrown when passing the second argument on Safari
            self.ws.send(data);
          } else {
            self.ws.send(data, opts);
          }
        } catch (e) {
          debug('websocket closed before onclose event');
        }

        --total || done();
      });
    })(packets[i]);
  }

  function done() {
    self.emit('flush'); // fake drain
    // defer to next tick to allow Socket to clear writeBuffer

    setTimeout(function () {
      self.writable = true;
      self.emit('drain');
    }, 0);
  }
};
/**
 * Called upon close
 *
 * @api private
 */


WS.prototype.onClose = function () {
  Transport.prototype.onClose.call(this);
};
/**
 * Closes socket.
 *
 * @api private
 */


WS.prototype.doClose = function () {
  if (typeof this.ws !== 'undefined') {
    this.ws.close();
  }
};
/**
 * Generates uri for connection.
 *
 * @api private
 */


WS.prototype.uri = function () {
  var query = this.query || {};
  var schema = this.secure ? 'wss' : 'ws';
  var port = ''; // avoid port if default for schema

  if (this.port && ('wss' === schema && Number(this.port) !== 443 || 'ws' === schema && Number(this.port) !== 80)) {
    port = ':' + this.port;
  } // append timestamp to URI


  if (this.timestampRequests) {
    query[this.timestampParam] = yeast();
  } // communicate binary support capabilities


  if (!this.supportsBinary) {
    query.b64 = 1;
  }

  query = parseqs.encode(query); // prepend ? to query

  if (query.length) {
    query = '?' + query;
  }

  var ipv6 = this.hostname.indexOf(':') !== -1;
  return schema + '://' + (ipv6 ? '[' + this.hostname + ']' : this.hostname) + port + this.path + query;
};
/**
 * Feature detection for WebSocket.
 *
 * @return {Boolean} whether this transport is available.
 * @api public
 */


WS.prototype.check = function () {
  return !!WebSocketImpl && !('__initialize' in WebSocketImpl && this.name === WS.prototype.name);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7).Buffer))

/***/ }),
/* 48 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = toArray;

function toArray(list, index) {
  var array = [];
  index = index || 0;

  for (var i = index || 0; i < list.length; i++) {
    array[i - index] = list[i];
  }

  return array;
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Expose `Backoff`.
 */
module.exports = Backoff;
/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}
/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */


Backoff.prototype.duration = function () {
  var ms = this.ms * Math.pow(this.factor, this.attempts++);

  if (this.jitter) {
    var rand = Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0 ? ms - deviation : ms + deviation;
  }

  return Math.min(ms, this.max) | 0;
};
/**
 * Reset the number of attempts.
 *
 * @api public
 */


Backoff.prototype.reset = function () {
  this.attempts = 0;
};
/**
 * Set the minimum duration
 *
 * @api public
 */


Backoff.prototype.setMin = function (min) {
  this.ms = min;
};
/**
 * Set the maximum duration
 *
 * @api public
 */


Backoff.prototype.setMax = function (max) {
  this.max = max;
};
/**
 * Set the jitter
 *
 * @api public
 */


Backoff.prototype.setJitter = function (jitter) {
  this.jitter = jitter;
};

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/socket.io-client/lib/index.js
var lib = __webpack_require__(24);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./fe/blocks.js
var blocks = ["#ccc", "#3CB371", "#B0C4DE", "#F0FFF0", "#EEE8AA", "#FA8072", "#696969", "#800000", "#E6E6FA", "#FFA07A", "#40E0D0", "#9400D3", "#778899", "#6495ED", "#483D8B", "#4682B4"];
/* harmony default export */ var fe_blocks = (blocks);
// CONCATENATED MODULE: ./fe/Board.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Board_Board = function Board(world) {
  var _this = this;

  _classCallCheck(this, Board);

  _defineProperty(this, "updateWorld", function (data) {
    var x = data.x,
        y = data.y,
        v = data.v;
    var blockSize = _this.world.blockSize;
    _this.ctx.fillStyle = fe_blocks[v];

    _this.ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  });

  _defineProperty(this, "draw", function () {
    var self = _this;
    var _this$world = _this.world,
        blockSize = _this$world.blockSize,
        w = _this$world.w,
        h = _this$world.h;
    if (!_this.world.world) return window.requestAnimationFrame(self.draw);
    _this.canvas.width = w * blockSize;
    _this.canvas.height = h * blockSize;

    for (var i = 0; i < _this.world.world.length; i += 1) {
      _this.ctx.fillStyle = fe_blocks[_this.world.world[i]];

      _this.ctx.fillRect(i % w * blockSize, parseInt(i / w) * blockSize, blockSize, blockSize);
    }
  });

  this.world = world;
  this.canvas = document.querySelector("#board");
  this.ctx = this.canvas.getContext("2d");
};

/* harmony default export */ var fe_Board = (Board_Board);
// CONCATENATED MODULE: ./fe/Players.js
function Players_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Players = /*#__PURE__*/function () {
  function Players(world) {
    Players_classCallCheck(this, Players);

    this.canvas = document.querySelector("#players");
    this.ctx = this.canvas.getContext("2d");
    this.world = world;
    this.playerSize = 10;
  }

  _createClass(Players, [{
    key: "updatePlayers",
    value: function updatePlayers(data) {
      var _this = this;

      var _this$world = this.world,
          w = _this$world.w,
          h = _this$world.h,
          blockSize = _this$world.blockSize;
      var colors = this.colors,
          playerSize = this.playerSize;
      this.canvas.width = w * blockSize;
      this.canvas.height = h * blockSize;
      data.forEach(function (player) {
        if (!player.pos) return;
        var _player$pos = player.pos,
            x = _player$pos.x,
            y = _player$pos.y;
        var col = player.col;
        _this.ctx.fillStyle = "rgba(0,0,0,.2)";

        _this.ctx.beginPath();

        _this.ctx.ellipse(x + 3, y + 3, playerSize, playerSize, Math.PI / 4, 0, 2 * Math.PI);

        _this.ctx.fill();

        _this.ctx.fillStyle = col;

        _this.ctx.beginPath();

        _this.ctx.ellipse(x, y, playerSize, playerSize, Math.PI / 4, 0, 2 * Math.PI);

        _this.ctx.fill();
      });
    }
  }]);

  return Players;
}();

/* harmony default export */ var fe_Players = (Players);
// CONCATENATED MODULE: ./fe/Client.js
function Client_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Client_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var keycodes = [38, //up
40, //down
37, //left
39, //right
87, //w
83, //s
65, //a
68 //d
];

var Client_Client = function Client() {
  var _this = this;

  Client_classCallCheck(this, Client);

  Client_defineProperty(this, "updateWorld", function (data) {
    var x = data.x,
        y = data.y,
        v = data.v;
    var blockSize = _this.blockSize,
        w = _this.w,
        h = _this.h;
    if (_this.world) _this.world[y * w + x] = v;

    _this.board.updateWorld(data);
  });

  Client_defineProperty(this, "updatePlayers", function (data) {
    delete _this.playersData;
    _this.playersData = data;

    _this.players.updatePlayers(data);
  });

  var self = this;
  this.socket = lib_default()();
  this.board = new fe_Board(this);
  this.players = new fe_Players(this);
  this.world = false;
  this.blockSize = 16;
  this.w = 64;
  this.h = 64;
  this.socket.on("world", function (val) {
    _this.world = val;

    _this.board.draw();
  });
  this.socket.on('connect', function () {
    return _this.socket.emit("join");
  });
  this.socket.on("updateWorld", self.updateWorld);
  this.socket.on("updatePlayers", self.updatePlayers);
  window.document.addEventListener("keydown", function (e) {
    if (_this["keyDown".concat(e.keyCode)] === true) return;
    _this["keyDown".concat(e.keyCode)] = true;

    if (keycodes.indexOf(e.keyCode) >= 0) {
      _this.socket.emit("keydown", e.keyCode);
    }
  });
  window.document.addEventListener("keyup", function (e) {
    _this["keyDown".concat(e.keyCode)] = false;

    if (keycodes.indexOf(e.keyCode) >= 0) {
      _this.socket.emit("keyup", e.keyCode);
    }
  });
};

/* harmony default export */ var fe_Client = (Client_Client);
// CONCATENATED MODULE: ./fe/index.js

window.gameClient = new fe_Client();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtaW5oZXJpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIveG1saHR0cHJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pcy1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLWJpbmFyeTIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3llYXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLWNvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5YnVmZmVyLnNsaWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvdXRmOC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jsb2IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy1qc29ucC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdG8tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhY2tvMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mZS9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vZmUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vZmUvUGxheWVycy5qcyIsIndlYnBhY2s6Ly8vLi9mZS9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZmUvaW5kZXguanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsImxvZyIsImZvcm1hdEFyZ3MiLCJzYXZlIiwibG9hZCIsInVzZUNvbG9ycyIsInN0b3JhZ2UiLCJsb2NhbHN0b3JhZ2UiLCJjb2xvcnMiLCJ3aW5kb3ciLCJwcm9jZXNzIiwidHlwZSIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsImNvbnNvbGUiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJwYXJzZUludCIsIlJlZ0V4cCIsIiQxIiwiYXJncyIsIm5hbWVzcGFjZSIsIm1vZHVsZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJjb2xvciIsInNwbGljZSIsImluZGV4IiwibGFzdEMiLCJyZXBsYWNlIiwibmFtZXNwYWNlcyIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJyIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImZvcm1hdHRlcnMiLCJqIiwidiIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwia2V5cyIsImhhc0JpbmFyeSIsInNsaWNlQnVmZmVyIiwiYWZ0ZXIiLCJ1dGY4IiwiYmFzZTY0ZW5jb2RlciIsIkFycmF5QnVmZmVyIiwiaXNBbmRyb2lkIiwidGVzdCIsImlzUGhhbnRvbUpTIiwiZG9udFNlbmRCbG9icyIsInByb3RvY29sIiwicGFja2V0cyIsIm9wZW4iLCJjbG9zZSIsInBpbmciLCJwb25nIiwidXBncmFkZSIsIm5vb3AiLCJwYWNrZXRzbGlzdCIsImVyciIsImRhdGEiLCJCbG9iIiwiZW5jb2RlUGFja2V0IiwicGFja2V0Iiwic3VwcG9ydHNCaW5hcnkiLCJ1dGY4ZW5jb2RlIiwiY2FsbGJhY2siLCJ1bmRlZmluZWQiLCJidWZmZXIiLCJlbmNvZGVBcnJheUJ1ZmZlciIsImVuY29kZUJsb2IiLCJiYXNlNjQiLCJlbmNvZGVCYXNlNjRPYmplY3QiLCJlbmNvZGVkIiwiZW5jb2RlIiwiU3RyaW5nIiwic3RyaWN0IiwiZW5jb2RlQmFzZTY0UGFja2V0IiwiY29udGVudEFycmF5IiwiVWludDhBcnJheSIsInJlc3VsdEJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJpIiwibGVuZ3RoIiwiZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJsb2IiLCJiNjQiLCJzcGxpdCIsInJlYWRBc0RhdGFVUkwiLCJiNjRkYXRhIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJlIiwidHlwZWQiLCJiYXNpYyIsIkFycmF5IiwiYnRvYSIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJ1dGY4ZGVjb2RlIiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0Iiwic3Vic3RyIiwidHJ5RGVjb2RlIiwiTnVtYmVyIiwic3Vic3RyaW5nIiwiYXNBcnJheSIsInJlc3QiLCJkZWNvZGUiLCJtc2ciLCJlbmNvZGVQYXlsb2FkIiwiaXNCaW5hcnkiLCJlbmNvZGVQYXlsb2FkQXNCbG9iIiwiZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIiLCJzZXRMZW5ndGhIZWFkZXIiLCJlbmNvZGVPbmUiLCJkb25lQ2FsbGJhY2siLCJtYXAiLCJyZXN1bHRzIiwiam9pbiIsImFyeSIsImVhY2giLCJkb25lIiwibmV4dCIsImVhY2hXaXRoSW5kZXgiLCJlbCIsImNiIiwiZGVjb2RlUGF5bG9hZCIsImRlY29kZVBheWxvYWRBc0JpbmFyeSIsIm4iLCJsIiwiY2hyIiwicmV0IiwiZW5jb2RlZFBhY2tldHMiLCJ0b3RhbExlbmd0aCIsInJlZHVjZSIsImFjYyIsInAiLCJsZW4iLCJ0b1N0cmluZyIsInJlc3VsdEFycmF5IiwiYnVmZmVySW5kZXgiLCJmb3JFYWNoIiwiaXNTdHJpbmciLCJhYiIsInZpZXciLCJjaGFyQ29kZUF0IiwibGVuU3RyIiwiYmluYXJ5SWRlbnRpZmllciIsInNpemUiLCJsZW5ndGhBcnkiLCJidWZmZXJUYWlsIiwiYnVmZmVycyIsInRhaWxBcnJheSIsIm1zZ0xlbmd0aCIsInB1c2giLCJ0b3RhbCIsIm9iaiIsInN0ciIsImhhc093blByb3BlcnR5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhIiwiYiIsImZuIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJkZWJ1ZyIsIkVtaXR0ZXIiLCJiaW5hcnkiLCJpc0FycmF5IiwiaXNCdWYiLCJ0eXBlcyIsIkNPTk5FQ1QiLCJESVNDT05ORUNUIiwiRVZFTlQiLCJBQ0siLCJFUlJPUiIsIkJJTkFSWV9FVkVOVCIsIkJJTkFSWV9BQ0siLCJFbmNvZGVyIiwiRGVjb2RlciIsIkVSUk9SX1BBQ0tFVCIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RpbmciLCJlbmNvZGVBc1N0cmluZyIsImF0dGFjaG1lbnRzIiwibnNwIiwiaWQiLCJwYXlsb2FkIiwidHJ5U3RyaW5naWZ5Iiwid3JpdGVFbmNvZGluZyIsImJsb2JsZXNzRGF0YSIsImRlY29uc3RydWN0aW9uIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrIiwidW5zaGlmdCIsInJlbW92ZUJsb2JzIiwicmVjb25zdHJ1Y3RvciIsImFkZCIsImRlY29kZVN0cmluZyIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJyZWNvblBhY2siLCJlbWl0IiwiRXJyb3IiLCJ0YWtlQmluYXJ5RGF0YSIsImJ1ZiIsInRyeVBhcnNlIiwiaXNQYXlsb2FkVmFsaWQiLCJwYXJzZSIsImRlc3Ryb3kiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwiYmluRGF0YSIsInJlY29uc3RydWN0UGFja2V0IiwibWl4aW4iLCJrZXkiLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIl9jYWxsYmFja3MiLCJvbmNlIiwib2ZmIiwiYXJndW1lbnRzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwic2xpY2UiLCJjYWxsIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwiYXJyIiwiaWVlZTc1NCIsIkJ1ZmZlciIsIlNsb3dCdWZmZXIiLCJJTlNQRUNUX01BWF9CWVRFUyIsIlRZUEVEX0FSUkFZX1NVUFBPUlQiLCJnbG9iYWwiLCJ0eXBlZEFycmF5U3VwcG9ydCIsImtNYXhMZW5ndGgiLCJfX3Byb3RvX18iLCJmb28iLCJzdWJhcnJheSIsImNyZWF0ZUJ1ZmZlciIsInRoYXQiLCJSYW5nZUVycm9yIiwiYXJnIiwiZW5jb2RpbmdPck9mZnNldCIsImFsbG9jVW5zYWZlIiwiZnJvbSIsInBvb2xTaXplIiwiX2F1Z21lbnQiLCJ2YWx1ZSIsIlR5cGVFcnJvciIsImZyb21BcnJheUJ1ZmZlciIsImZyb21TdHJpbmciLCJmcm9tT2JqZWN0IiwiU3ltYm9sIiwic3BlY2llcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiYXNzZXJ0U2l6ZSIsImFsbG9jIiwiZmlsbCIsImNoZWNrZWQiLCJhbGxvY1Vuc2FmZVNsb3ciLCJzdHJpbmciLCJpc0VuY29kaW5nIiwiYWN0dWFsIiwid3JpdGUiLCJmcm9tQXJyYXlMaWtlIiwiYXJyYXkiLCJieXRlT2Zmc2V0IiwiaXNCdWZmZXIiLCJjb3B5IiwiaXNuYW4iLCJfaXNCdWZmZXIiLCJjb21wYXJlIiwieCIsInkiLCJNYXRoIiwibWluIiwiY29uY2F0IiwibGlzdCIsInBvcyIsImlzVmlldyIsImxvd2VyZWRDYXNlIiwidXRmOFRvQnl0ZXMiLCJiYXNlNjRUb0J5dGVzIiwic2xvd1RvU3RyaW5nIiwic3RhcnQiLCJlbmQiLCJoZXhTbGljZSIsInV0ZjhTbGljZSIsImFzY2lpU2xpY2UiLCJsYXRpbjFTbGljZSIsImJhc2U2NFNsaWNlIiwidXRmMTZsZVNsaWNlIiwic3dhcCIsIm0iLCJzd2FwMTYiLCJzd2FwMzIiLCJzd2FwNjQiLCJlcXVhbHMiLCJpbnNwZWN0IiwibWF4IiwidGFyZ2V0IiwidGhpc1N0YXJ0IiwidGhpc0VuZCIsInRoaXNDb3B5IiwidGFyZ2V0Q29weSIsImJpZGlyZWN0aW9uYWxJbmRleE9mIiwidmFsIiwiZGlyIiwiaXNOYU4iLCJhcnJheUluZGV4T2YiLCJpbmRleE9mIiwibGFzdEluZGV4T2YiLCJpbmRleFNpemUiLCJhcnJMZW5ndGgiLCJ2YWxMZW5ndGgiLCJyZWFkIiwicmVhZFVJbnQxNkJFIiwiZm91bmRJbmRleCIsImZvdW5kIiwiaW5jbHVkZXMiLCJoZXhXcml0ZSIsIm9mZnNldCIsInJlbWFpbmluZyIsInN0ckxlbiIsInBhcnNlZCIsInV0ZjhXcml0ZSIsImJsaXRCdWZmZXIiLCJhc2NpaVdyaXRlIiwiYXNjaWlUb0J5dGVzIiwibGF0aW4xV3JpdGUiLCJiYXNlNjRXcml0ZSIsInVjczJXcml0ZSIsInV0ZjE2bGVUb0J5dGVzIiwiaXNGaW5pdGUiLCJ0b0pTT04iLCJfYXJyIiwiZnJvbUJ5dGVBcnJheSIsInJlcyIsImZpcnN0Qnl0ZSIsImNvZGVQb2ludCIsImJ5dGVzUGVyU2VxdWVuY2UiLCJzZWNvbmRCeXRlIiwidGhpcmRCeXRlIiwiZm91cnRoQnl0ZSIsInRlbXBDb2RlUG9pbnQiLCJkZWNvZGVDb2RlUG9pbnRzQXJyYXkiLCJNQVhfQVJHVU1FTlRTX0xFTkdUSCIsImNvZGVQb2ludHMiLCJvdXQiLCJ0b0hleCIsImJ5dGVzIiwibmV3QnVmIiwic2xpY2VMZW4iLCJjaGVja09mZnNldCIsImV4dCIsInJlYWRVSW50TEUiLCJub0Fzc2VydCIsIm11bCIsInJlYWRVSW50QkUiLCJyZWFkVUludDgiLCJyZWFkVUludDE2TEUiLCJyZWFkVUludDMyTEUiLCJyZWFkVUludDMyQkUiLCJyZWFkSW50TEUiLCJwb3ciLCJyZWFkSW50QkUiLCJyZWFkSW50OCIsInJlYWRJbnQxNkxFIiwicmVhZEludDE2QkUiLCJyZWFkSW50MzJMRSIsInJlYWRJbnQzMkJFIiwicmVhZEZsb2F0TEUiLCJyZWFkRmxvYXRCRSIsInJlYWREb3VibGVMRSIsInJlYWREb3VibGVCRSIsImNoZWNrSW50Iiwid3JpdGVVSW50TEUiLCJtYXhCeXRlcyIsIndyaXRlVUludEJFIiwid3JpdGVVSW50OCIsImZsb29yIiwib2JqZWN0V3JpdGVVSW50MTYiLCJsaXR0bGVFbmRpYW4iLCJ3cml0ZVVJbnQxNkxFIiwid3JpdGVVSW50MTZCRSIsIm9iamVjdFdyaXRlVUludDMyIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludExFIiwibGltaXQiLCJzdWIiLCJ3cml0ZUludEJFIiwid3JpdGVJbnQ4Iiwid3JpdGVJbnQxNkxFIiwid3JpdGVJbnQxNkJFIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiY2hlY2tJRUVFNzU0Iiwid3JpdGVGbG9hdCIsIndyaXRlRmxvYXRMRSIsIndyaXRlRmxvYXRCRSIsIndyaXRlRG91YmxlIiwid3JpdGVEb3VibGVMRSIsIndyaXRlRG91YmxlQkUiLCJ0YXJnZXRTdGFydCIsInNldCIsImNvZGUiLCJJTlZBTElEX0JBU0U2NF9SRSIsImJhc2U2NGNsZWFuIiwic3RyaW5ndHJpbSIsInRyaW0iLCJ1bml0cyIsIkluZmluaXR5IiwibGVhZFN1cnJvZ2F0ZSIsImJ5dGVBcnJheSIsImhpIiwibG8iLCJ0b0J5dGVBcnJheSIsInNyYyIsImRzdCIsImhhc0NPUlMiLCJnbG9iYWxUaGlzIiwib3B0cyIsInhkb21haW4iLCJ4c2NoZW1lIiwiZW5hYmxlc1hEUiIsIlhNTEh0dHBSZXF1ZXN0IiwiWERvbWFpblJlcXVlc3QiLCJzZWxmIiwiRnVuY3Rpb24iLCJwYXJzZXIiLCJUcmFuc3BvcnQiLCJwYXRoIiwiaG9zdG5hbWUiLCJwb3J0Iiwic2VjdXJlIiwicXVlcnkiLCJ0aW1lc3RhbXBQYXJhbSIsInRpbWVzdGFtcFJlcXVlc3RzIiwicmVhZHlTdGF0ZSIsImFnZW50Iiwic29ja2V0Iiwid2l0aENyZWRlbnRpYWxzIiwicGZ4IiwicGFzc3BocmFzZSIsImNlcnQiLCJjYSIsImNpcGhlcnMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJmb3JjZU5vZGUiLCJpc1JlYWN0TmF0aXZlIiwiZXh0cmFIZWFkZXJzIiwibG9jYWxBZGRyZXNzIiwib25FcnJvciIsImRlc2MiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJvbkNsb3NlIiwic2VuZCIsIm9uT3BlbiIsIndyaXRhYmxlIiwib25EYXRhIiwib25QYWNrZXQiLCJyZSIsInBhcnRzIiwicGFyc2V1cmkiLCJleGVjIiwidXJpIiwic291cmNlIiwiaG9zdCIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJydW4iLCJuZXh0VGljayIsIkl0ZW0iLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwiYWRkTGlzdGVuZXIiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsInVtYXNrIiwid2l0aE5hdGl2ZUJ1ZmZlciIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsImVpbyIsIlNvY2tldCIsImJpbmQiLCJCYWNrb2ZmIiwiaGFzIiwiTWFuYWdlciIsIm5zcHMiLCJzdWJzIiwicmVjb25uZWN0aW9uIiwicmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJqaXR0ZXIiLCJjb25uZWN0aW5nIiwibGFzdFBpbmciLCJwYWNrZXRCdWZmZXIiLCJfcGFyc2VyIiwiZW5jb2RlciIsImRlY29kZXIiLCJhdXRvQ29ubmVjdCIsImVtaXRBbGwiLCJ1cGRhdGVTb2NrZXRJZHMiLCJnZW5lcmF0ZUlkIiwiZW5naW5lIiwiX3JlY29ubmVjdGlvbiIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9yZWNvbm5lY3Rpb25EZWxheSIsInNldE1pbiIsIl9yYW5kb21pemF0aW9uRmFjdG9yIiwic2V0Sml0dGVyIiwiX3JlY29ubmVjdGlvbkRlbGF5TWF4Iiwic2V0TWF4IiwiX3RpbWVvdXQiLCJtYXliZVJlY29ubmVjdE9uT3BlbiIsInJlY29ubmVjdGluZyIsImF0dGVtcHRzIiwicmVjb25uZWN0IiwiY29ubmVjdCIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViIiwib25vcGVuIiwiZXJyb3JTdWIiLCJjbGVhbnVwIiwidGltZXIiLCJvbnBpbmciLCJEYXRlIiwib25wb25nIiwib25kYXRhIiwib25kZWNvZGVkIiwib25lcnJvciIsIm9uQ29ubmVjdGluZyIsIm9wdGlvbnMiLCJwcm9jZXNzUGFja2V0UXVldWUiLCJzaGlmdCIsInN1YnNMZW5ndGgiLCJkaXNjb25uZWN0IiwicmVzZXQiLCJvbmNsb3NlIiwicmVhc29uIiwiZGVsYXkiLCJkdXJhdGlvbiIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsIlhIUiIsIkpTT05QIiwid2Vic29ja2V0IiwicG9sbGluZyIsInhociIsInhkIiwieHMiLCJqc29ucCIsImxvY2F0aW9uIiwiaXNTU0wiLCJmb3JjZUpTT05QIiwicGFyc2VxcyIsImluaGVyaXQiLCJ5ZWFzdCIsIlBvbGxpbmciLCJoYXNYSFIyIiwicmVzcG9uc2VUeXBlIiwiZm9yY2VCYXNlNjQiLCJwb2xsIiwicGF1c2UiLCJvblBhdXNlIiwiZG9Qb2xsIiwiY2FsbGJhY2tmbiIsImRvV3JpdGUiLCJzY2hlbWEiLCJzaWQiLCJpcHY2Iiwid2l0aE5hdGl2ZUJsb2IiLCJ3aXRoTmF0aXZlRmlsZSIsIkZpbGUiLCJhbHBoYWJldCIsInNlZWQiLCJwcmV2IiwibnVtIiwiZGVjb2RlZCIsIm5vdyIsInRvQXJyYXkiLCJoYXNCaW4iLCJldmVudHMiLCJjb25uZWN0X2Vycm9yIiwiY29ubmVjdF90aW1lb3V0IiwicmVjb25uZWN0X2F0dGVtcHQiLCJyZWNvbm5lY3RfZmFpbGVkIiwicmVjb25uZWN0X2Vycm9yIiwiaW8iLCJqc29uIiwiaWRzIiwiYWNrcyIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiZmxhZ3MiLCJzdWJFdmVudHMiLCJldiIsImNvbXByZXNzIiwicG9wIiwib25wYWNrZXQiLCJzYW1lTmFtZXNwYWNlIiwicm9vdE5hbWVzcGFjZUVycm9yIiwib25jb25uZWN0Iiwib25ldmVudCIsIm9uYWNrIiwib25kaXNjb25uZWN0IiwiYWNrIiwic2VudCIsImVtaXRCdWZmZXJlZCIsInVybCIsImxvb2t1cCIsImNhY2hlIiwibWFuYWdlcnMiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJsb2MiLCJocmVmIiwic2V0dXAiLCJjcmVhdGVEZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiaW5zdGFuY2VzIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImFicyIsInByZXZUaW1lIiwiY3VyciIsIm1zIiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwibG9nRm4iLCJleHRlbmQiLCJpbml0IiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJpbnN0YW5jZSIsInRvTmFtZXNwYWNlIiwicmVnZXhwIiwic3RhY2siLCJzIiwiaCIsImQiLCJ3IiwiZm10TG9uZyIsImZtdFNob3J0IiwicGFyc2VGbG9hdCIsIm1zQWJzIiwicm91bmQiLCJwbHVyYWwiLCJpc1BsdXJhbCIsImNocm9tZSIsImxvY2FsIiwiY2VpbCIsInBhY2tldERhdGEiLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm5ld0RhdGEiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVtb3ZlQmxvYnMiLCJjdXJLZXkiLCJjb250YWluaW5nT2JqZWN0IiwicGVuZGluZ0Jsb2JzIiwiZmlsZVJlYWRlciIsImciLCJyZXZMb29rdXAiLCJBcnIiLCJnZXRMZW5zIiwidmFsaWRMZW4iLCJwbGFjZUhvbGRlcnNMZW4iLCJsZW5zIiwiX2J5dGVMZW5ndGgiLCJ0bXAiLCJjdXJCeXRlIiwidHJpcGxldFRvQmFzZTY0IiwiZW5jb2RlQ2h1bmsiLCJ1aW50OCIsIm91dHB1dCIsImV4dHJhQnl0ZXMiLCJtYXhDaHVua0xlbmd0aCIsImxlbjIiLCJpc0xFIiwibUxlbiIsIm5CeXRlcyIsImVMZW4iLCJlTWF4IiwiZUJpYXMiLCJuQml0cyIsIk5hTiIsInJ0IiwiTE4yIiwidHJhbnNwb3J0cyIsInRyYW5zcG9ydE9wdGlvbnMiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJwb2xpY3lQb3J0IiwicmVtZW1iZXJVcGdyYWRlIiwib25seUJpbmFyeVVwZ3JhZGVzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJwcm9kdWN0IiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdJbnRlcnZhbFRpbWVyIiwicGluZ1RpbWVvdXRUaW1lciIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImNyZWF0ZVRyYW5zcG9ydCIsImNsb25lIiwiRUlPIiwidHJhbnNwb3J0IiwicmVxdWVzdFRpbWVvdXQiLCJwcm90b2NvbHMiLCJvIiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwidXBncmFkZUxvc2VzQmluYXJ5IiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJvblRyYW5zcG9ydENsb3NlIiwib251cGdyYWRlIiwidG8iLCJvbkhhbmRzaGFrZSIsInNldFBpbmciLCJmaWx0ZXJVcGdyYWRlcyIsIm9uSGVhcnRiZWF0Iiwic2VuZFBhY2tldCIsIndhaXRGb3JVcGdyYWRlIiwiY2xlYW51cEFuZENsb3NlIiwiZmlsdGVyZWRVcGdyYWRlcyIsIlJlcXVlc3QiLCJlbXB0eSIsInJlcXVlc3QiLCJyZXEiLCJtZXRob2QiLCJzZW5kWGhyIiwicG9sbFhociIsImFzeW5jIiwiY3JlYXRlIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJzdGF0dXMiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlIiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwidGVybWluYXRpb25FdmVudCIsImFycmF5YnVmZmVyIiwiYWJ2IiwiaWkiLCJjb3VudCIsImVycl9jYiIsImJhaWwiLCJwcm94eSIsInN0cmluZ0Zyb21DaGFyQ29kZSIsInVjczJkZWNvZGUiLCJjb3VudGVyIiwiZXh0cmEiLCJ1Y3MyZW5jb2RlIiwiY2hlY2tTY2FsYXJWYWx1ZSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQnl0ZSIsImVuY29kZUNvZGVQb2ludCIsInN5bWJvbCIsImJ5dGVTdHJpbmciLCJyZWFkQ29udGludWF0aW9uQnl0ZSIsImJ5dGVJbmRleCIsImJ5dGVDb3VudCIsImNvbnRpbnVhdGlvbkJ5dGUiLCJkZWNvZGVTeW1ib2wiLCJieXRlMSIsImJ5dGUyIiwiYnl0ZTMiLCJieXRlNCIsImNoYXJzIiwiYnVmZmVyTGVuZ3RoIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJCbG9iQnVpbGRlciIsIldlYktpdEJsb2JCdWlsZGVyIiwiTVNCbG9iQnVpbGRlciIsIk1vekJsb2JCdWlsZGVyIiwiYmxvYlN1cHBvcnRlZCIsImJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyIsImJsb2JCdWlsZGVyU3VwcG9ydGVkIiwiYXBwZW5kIiwiZ2V0QmxvYiIsIm1hcEFycmF5QnVmZmVyVmlld3MiLCJjaHVuayIsIkJsb2JCdWlsZGVyQ29uc3RydWN0b3IiLCJiYiIsInBhcnQiLCJCbG9iQ29uc3RydWN0b3IiLCJKU09OUFBvbGxpbmciLCJyTmV3bGluZSIsInJFc2NhcGVkTmV3bGluZSIsIl9fX2VpbyIsInNjcmlwdCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZvcm0iLCJpZnJhbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImhlYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpc1VBZ2Vja28iLCJhcmVhIiwiaWZyYW1lSWQiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJzZXRBdHRyaWJ1dGUiLCJhY3Rpb24iLCJjb21wbGV0ZSIsImluaXRJZnJhbWUiLCJodG1sIiwic3VibWl0IiwiQnJvd3NlcldlYlNvY2tldCIsIk5vZGVXZWJTb2NrZXQiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJXZWJTb2NrZXRJbXBsIiwiV1MiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJjaGVjayIsImhlYWRlcnMiLCJ3cyIsInN1cHBvcnRzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm1lc3NhZ2UiLCJmYWN0b3IiLCJyYW5kIiwicmFuZG9tIiwiZGV2aWF0aW9uIiwiYmxvY2tzIiwiQm9hcmQiLCJ3b3JsZCIsImJsb2NrU2l6ZSIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJQbGF5ZXJzIiwicGxheWVyU2l6ZSIsInBsYXllciIsImNvbCIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJQSSIsImtleWNvZGVzIiwiQ2xpZW50IiwiYm9hcmQiLCJ1cGRhdGVXb3JsZCIsInBsYXllcnNEYXRhIiwicGxheWVycyIsInVwZGF0ZVBsYXllcnMiLCJrZXlDb2RlIiwiZ2FtZUNsaWVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFD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QXg2QixNQUFNLENBQUMrNkIsVUFBUCxHQUFvQixJQUFJUCxTQUFKLEVBQXBCLEMiLCJmaWxlIjoiLi4vZmUvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1MSk7XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyoqXG4gKiBUaGlzIGlzIHRoZSB3ZWIgYnJvd3NlciBpbXBsZW1lbnRhdGlvbiBvZiBgZGVidWcoKWAuXG4gKi9cblxuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcblx0JyMwMDAwQ0MnLFxuXHQnIzAwMDBGRicsXG5cdCcjMDAzM0NDJyxcblx0JyMwMDMzRkYnLFxuXHQnIzAwNjZDQycsXG5cdCcjMDA2NkZGJyxcblx0JyMwMDk5Q0MnLFxuXHQnIzAwOTlGRicsXG5cdCcjMDBDQzAwJyxcblx0JyMwMENDMzMnLFxuXHQnIzAwQ0M2NicsXG5cdCcjMDBDQzk5Jyxcblx0JyMwMENDQ0MnLFxuXHQnIzAwQ0NGRicsXG5cdCcjMzMwMENDJyxcblx0JyMzMzAwRkYnLFxuXHQnIzMzMzNDQycsXG5cdCcjMzMzM0ZGJyxcblx0JyMzMzY2Q0MnLFxuXHQnIzMzNjZGRicsXG5cdCcjMzM5OUNDJyxcblx0JyMzMzk5RkYnLFxuXHQnIzMzQ0MwMCcsXG5cdCcjMzNDQzMzJyxcblx0JyMzM0NDNjYnLFxuXHQnIzMzQ0M5OScsXG5cdCcjMzNDQ0NDJyxcblx0JyMzM0NDRkYnLFxuXHQnIzY2MDBDQycsXG5cdCcjNjYwMEZGJyxcblx0JyM2NjMzQ0MnLFxuXHQnIzY2MzNGRicsXG5cdCcjNjZDQzAwJyxcblx0JyM2NkNDMzMnLFxuXHQnIzk5MDBDQycsXG5cdCcjOTkwMEZGJyxcblx0JyM5OTMzQ0MnLFxuXHQnIzk5MzNGRicsXG5cdCcjOTlDQzAwJyxcblx0JyM5OUNDMzMnLFxuXHQnI0NDMDAwMCcsXG5cdCcjQ0MwMDMzJyxcblx0JyNDQzAwNjYnLFxuXHQnI0NDMDA5OScsXG5cdCcjQ0MwMENDJyxcblx0JyNDQzAwRkYnLFxuXHQnI0NDMzMwMCcsXG5cdCcjQ0MzMzMzJyxcblx0JyNDQzMzNjYnLFxuXHQnI0NDMzM5OScsXG5cdCcjQ0MzM0NDJyxcblx0JyNDQzMzRkYnLFxuXHQnI0NDNjYwMCcsXG5cdCcjQ0M2NjMzJyxcblx0JyNDQzk5MDAnLFxuXHQnI0NDOTkzMycsXG5cdCcjQ0NDQzAwJyxcblx0JyNDQ0NDMzMnLFxuXHQnI0ZGMDAwMCcsXG5cdCcjRkYwMDMzJyxcblx0JyNGRjAwNjYnLFxuXHQnI0ZGMDA5OScsXG5cdCcjRkYwMENDJyxcblx0JyNGRjAwRkYnLFxuXHQnI0ZGMzMwMCcsXG5cdCcjRkYzMzMzJyxcblx0JyNGRjMzNjYnLFxuXHQnI0ZGMzM5OScsXG5cdCcjRkYzM0NDJyxcblx0JyNGRjMzRkYnLFxuXHQnI0ZGNjYwMCcsXG5cdCcjRkY2NjMzJyxcblx0JyNGRjk5MDAnLFxuXHQnI0ZGOTkzMycsXG5cdCcjRkZDQzAwJyxcblx0JyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG5cdC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcblx0Ly8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2Vcblx0Ly8gZXhwbGljaXRseVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgKHdpbmRvdy5wcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgd2luZG93LnByb2Nlc3MuX19ud2pzKSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Ly8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuXHRpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuXHQvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuXHRyZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcblx0XHQvLyBJcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG5cdFx0KHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcblx0XHQvLyBJcyBmaXJlZm94ID49IHYzMT9cblx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcblx0XHQvLyBEb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcblx0YXJnc1swXSA9ICh0aGlzLnVzZUNvbG9ycyA/ICclYycgOiAnJykgK1xuXHRcdHRoaXMubmFtZXNwYWNlICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnICVjJyA6ICcgJykgK1xuXHRcdGFyZ3NbMF0gK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICclYyAnIDogJyAnKSArXG5cdFx0JysnICsgbW9kdWxlLmV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuXHRpZiAoIXRoaXMudXNlQ29sb3JzKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG5cdGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpO1xuXG5cdC8vIFRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG5cdC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cblx0Ly8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG5cdGxldCBpbmRleCA9IDA7XG5cdGxldCBsYXN0QyA9IDA7XG5cdGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBtYXRjaCA9PiB7XG5cdFx0aWYgKG1hdGNoID09PSAnJSUnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGluZGV4Kys7XG5cdFx0aWYgKG1hdGNoID09PSAnJWMnKSB7XG5cdFx0XHQvLyBXZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcblx0XHRcdC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG5cdFx0XHRsYXN0QyA9IGluZGV4O1xuXHRcdH1cblx0fSk7XG5cblx0YXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBsb2coLi4uYXJncykge1xuXHQvLyBUaGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuXHQvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuXHRyZXR1cm4gdHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmXG5cdFx0Y29uc29sZS5sb2cgJiZcblx0XHRjb25zb2xlLmxvZyguLi5hcmdzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuXHR0cnkge1xuXHRcdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2Uuc2V0SXRlbSgnZGVidWcnLCBuYW1lc3BhY2VzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG5cdFx0fVxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBsb2FkKCkge1xuXHRsZXQgcjtcblx0dHJ5IHtcblx0XHRyID0gZXhwb3J0cy5zdG9yYWdlLmdldEl0ZW0oJ2RlYnVnJyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG5cblx0Ly8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuXHRpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcblx0XHRyID0gcHJvY2Vzcy5lbnYuREVCVUc7XG5cdH1cblxuXHRyZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG5cdHRyeSB7XG5cdFx0Ly8gVFZNTEtpdCAoQXBwbGUgVFYgSlMgUnVudGltZSkgZG9lcyBub3QgaGF2ZSBhIHdpbmRvdyBvYmplY3QsIGp1c3QgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dFxuXHRcdC8vIFRoZSBCcm93c2VyIGFsc28gaGFzIGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHQuXG5cdFx0cmV0dXJuIGxvY2FsU3RvcmFnZTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbW1vbicpKGV4cG9ydHMpO1xuXG5jb25zdCB7Zm9ybWF0dGVyc30gPSBtb2R1bGUuZXhwb3J0cztcblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24gKHYpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0cmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVycm9yLm1lc3NhZ2U7XG5cdH1cbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcbnZhciBoYXNCaW5hcnkgPSByZXF1aXJlKCdoYXMtYmluYXJ5MicpO1xudmFyIHNsaWNlQnVmZmVyID0gcmVxdWlyZSgnYXJyYXlidWZmZXIuc2xpY2UnKTtcbnZhciBhZnRlciA9IHJlcXVpcmUoJ2FmdGVyJyk7XG52YXIgdXRmOCA9IHJlcXVpcmUoJy4vdXRmOCcpO1xuXG52YXIgYmFzZTY0ZW5jb2RlcjtcbmlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gIGJhc2U2NGVuY29kZXIgPSByZXF1aXJlKCdiYXNlNjQtYXJyYXlidWZmZXInKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB3ZSBhcmUgcnVubmluZyBhbiBhbmRyb2lkIGJyb3dzZXIuIFRoYXQgcmVxdWlyZXMgdXMgdG8gdXNlXG4gKiBBcnJheUJ1ZmZlciB3aXRoIHBvbGxpbmcgdHJhbnNwb3J0cy4uLlxuICpcbiAqIGh0dHA6Ly9naGluZGEubmV0L2pwZWctYmxvYi1hamF4LWFuZHJvaWQvXG4gKi9cblxudmFyIGlzQW5kcm9pZCA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9BbmRyb2lkL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuLyoqXG4gKiBDaGVjayBpZiB3ZSBhcmUgcnVubmluZyBpbiBQaGFudG9tSlMuXG4gKiBVcGxvYWRpbmcgYSBCbG9iIHdpdGggUGhhbnRvbUpTIGRvZXMgbm90IHdvcmsgY29ycmVjdGx5LCBhcyByZXBvcnRlZCBoZXJlOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2FyaXlhL3BoYW50b21qcy9pc3N1ZXMvMTEzOTVcbiAqIEB0eXBlIGJvb2xlYW5cbiAqL1xudmFyIGlzUGhhbnRvbUpTID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL1BoYW50b21KUy9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogV2hlbiB0cnVlLCBhdm9pZHMgdXNpbmcgQmxvYnMgdG8gZW5jb2RlIHBheWxvYWRzLlxuICogQHR5cGUgYm9vbGVhblxuICovXG52YXIgZG9udFNlbmRCbG9icyA9IGlzQW5kcm9pZCB8fCBpc1BoYW50b21KUztcblxuLyoqXG4gKiBDdXJyZW50IHByb3RvY29sIHZlcnNpb24uXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IDM7XG5cbi8qKlxuICogUGFja2V0IHR5cGVzLlxuICovXG5cbnZhciBwYWNrZXRzID0gZXhwb3J0cy5wYWNrZXRzID0ge1xuICAgIG9wZW46ICAgICAwICAgIC8vIG5vbi13c1xuICAsIGNsb3NlOiAgICAxICAgIC8vIG5vbi13c1xuICAsIHBpbmc6ICAgICAyXG4gICwgcG9uZzogICAgIDNcbiAgLCBtZXNzYWdlOiAgNFxuICAsIHVwZ3JhZGU6ICA1XG4gICwgbm9vcDogICAgIDZcbn07XG5cbnZhciBwYWNrZXRzbGlzdCA9IGtleXMocGFja2V0cyk7XG5cbi8qKlxuICogUHJlbWFkZSBlcnJvciBwYWNrZXQuXG4gKi9cblxudmFyIGVyciA9IHsgdHlwZTogJ2Vycm9yJywgZGF0YTogJ3BhcnNlciBlcnJvcicgfTtcblxuLyoqXG4gKiBDcmVhdGUgYSBibG9iIGFwaSBldmVuIGZvciBibG9iIGJ1aWxkZXIgd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcbiAqL1xuXG52YXIgQmxvYiA9IHJlcXVpcmUoJ2Jsb2InKTtcblxuLyoqXG4gKiBFbmNvZGVzIGEgcGFja2V0LlxuICpcbiAqICAgICA8cGFja2V0IHR5cGUgaWQ+IFsgPGRhdGE+IF1cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICA1aGVsbG8gd29ybGRcbiAqICAgICAzXG4gKiAgICAgNFxuICpcbiAqIEJpbmFyeSBpcyBlbmNvZGVkIGluIGFuIGlkZW50aWNhbCBwcmluY2lwbGVcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCB1dGY4ZW5jb2RlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQmluYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBzdXBwb3J0c0JpbmFyeTtcbiAgICBzdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB1dGY4ZW5jb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSB1dGY4ZW5jb2RlO1xuICAgIHV0ZjhlbmNvZGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIGRhdGEgPSAocGFja2V0LmRhdGEgPT09IHVuZGVmaW5lZClcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogcGFja2V0LmRhdGEuYnVmZmVyIHx8IHBhY2tldC5kYXRhO1xuXG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBlbmNvZGVBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIGRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgcmV0dXJuIGVuY29kZUJsb2IocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICB9XG5cbiAgLy8gbWlnaHQgYmUgYW4gb2JqZWN0IHdpdGggeyBiYXNlNjQ6IHRydWUsIGRhdGE6IGRhdGFBc0Jhc2U2NFN0cmluZyB9XG4gIGlmIChkYXRhICYmIGRhdGEuYmFzZTY0KSB7XG4gICAgcmV0dXJuIGVuY29kZUJhc2U2NE9iamVjdChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8vIFNlbmRpbmcgZGF0YSBhcyBhIHV0Zi04IHN0cmluZ1xuICB2YXIgZW5jb2RlZCA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuXG4gIC8vIGRhdGEgZnJhZ21lbnQgaXMgb3B0aW9uYWxcbiAgaWYgKHVuZGVmaW5lZCAhPT0gcGFja2V0LmRhdGEpIHtcbiAgICBlbmNvZGVkICs9IHV0ZjhlbmNvZGUgPyB1dGY4LmVuY29kZShTdHJpbmcocGFja2V0LmRhdGEpLCB7IHN0cmljdDogZmFsc2UgfSkgOiBTdHJpbmcocGFja2V0LmRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGxiYWNrKCcnICsgZW5jb2RlZCk7XG5cbn07XG5cbmZ1bmN0aW9uIGVuY29kZUJhc2U2NE9iamVjdChwYWNrZXQsIGNhbGxiYWNrKSB7XG4gIC8vIHBhY2tldCBkYXRhIGlzIGFuIG9iamVjdCB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogZGF0YUFzQmFzZTY0U3RyaW5nIH1cbiAgdmFyIG1lc3NhZ2UgPSAnYicgKyBleHBvcnRzLnBhY2tldHNbcGFja2V0LnR5cGVdICsgcGFja2V0LmRhdGEuZGF0YTtcbiAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpO1xufVxuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgaGVscGVycyBmb3IgYmluYXJ5IHR5cGVzXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBkYXRhID0gcGFja2V0LmRhdGE7XG4gIHZhciBjb250ZW50QXJyYXkgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgdmFyIHJlc3VsdEJ1ZmZlciA9IG5ldyBVaW50OEFycmF5KDEgKyBkYXRhLmJ5dGVMZW5ndGgpO1xuXG4gIHJlc3VsdEJ1ZmZlclswXSA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRlbnRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdEJ1ZmZlcltpKzFdID0gY29udGVudEFycmF5W2ldO1xuICB9XG5cbiAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdEJ1ZmZlci5idWZmZXIpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAoIXN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0KHBhY2tldCwgY2FsbGJhY2spO1xuICB9XG5cbiAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZnIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQoeyB0eXBlOiBwYWNrZXQudHlwZSwgZGF0YTogZnIucmVzdWx0IH0sIHN1cHBvcnRzQmluYXJ5LCB0cnVlLCBjYWxsYmFjayk7XG4gIH07XG4gIHJldHVybiBmci5yZWFkQXNBcnJheUJ1ZmZlcihwYWNrZXQuZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUJsb2IocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmIChkb250U2VuZEJsb2JzKSB7XG4gICAgcmV0dXJuIGVuY29kZUJsb2JBc0FycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBuZXcgVWludDhBcnJheSgxKTtcbiAgbGVuZ3RoWzBdID0gcGFja2V0c1twYWNrZXQudHlwZV07XG4gIHZhciBibG9iID0gbmV3IEJsb2IoW2xlbmd0aC5idWZmZXIsIHBhY2tldC5kYXRhXSk7XG5cbiAgcmV0dXJuIGNhbGxiYWNrKGJsb2IpO1xufVxuXG4vKipcbiAqIEVuY29kZXMgYSBwYWNrZXQgd2l0aCBiaW5hcnkgZGF0YSBpbiBhIGJhc2U2NCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0LCBoYXMgYHR5cGVgIGFuZCBgZGF0YWBcbiAqIEByZXR1cm4ge1N0cmluZ30gYmFzZTY0IGVuY29kZWQgbWVzc2FnZVxuICovXG5cbmV4cG9ydHMuZW5jb2RlQmFzZTY0UGFja2V0ID0gZnVuY3Rpb24ocGFja2V0LCBjYWxsYmFjaykge1xuICB2YXIgbWVzc2FnZSA9ICdiJyArIGV4cG9ydHMucGFja2V0c1twYWNrZXQudHlwZV07XG4gIGlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgcGFja2V0LmRhdGEgaW5zdGFuY2VvZiBCbG9iKSB7XG4gICAgdmFyIGZyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBmci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiNjQgPSBmci5yZXN1bHQuc3BsaXQoJywnKVsxXTtcbiAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgKyBiNjQpO1xuICAgIH07XG4gICAgcmV0dXJuIGZyLnJlYWRBc0RhdGFVUkwocGFja2V0LmRhdGEpO1xuICB9XG5cbiAgdmFyIGI2NGRhdGE7XG4gIHRyeSB7XG4gICAgYjY0ZGF0YSA9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkobnVsbCwgbmV3IFVpbnQ4QXJyYXkocGFja2V0LmRhdGEpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGlQaG9uZSBTYWZhcmkgZG9lc24ndCBsZXQgeW91IGFwcGx5IHdpdGggdHlwZWQgYXJyYXlzXG4gICAgdmFyIHR5cGVkID0gbmV3IFVpbnQ4QXJyYXkocGFja2V0LmRhdGEpO1xuICAgIHZhciBiYXNpYyA9IG5ldyBBcnJheSh0eXBlZC5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGJhc2ljW2ldID0gdHlwZWRbaV07XG4gICAgfVxuICAgIGI2NGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGJhc2ljKTtcbiAgfVxuICBtZXNzYWdlICs9IGJ0b2EoYjY0ZGF0YSk7XG4gIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKTtcbn07XG5cbi8qKlxuICogRGVjb2RlcyBhIHBhY2tldC4gQ2hhbmdlcyBmb3JtYXQgdG8gQmxvYiBpZiByZXF1ZXN0ZWQuXG4gKlxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGB0eXBlYCBhbmQgYGRhdGFgIChpZiBhbnkpXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBhY2tldCA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCB1dGY4ZGVjb2RlKSB7XG4gIGlmIChkYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZXJyO1xuICB9XG4gIC8vIFN0cmluZyBkYXRhXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoZGF0YS5jaGFyQXQoMCkgPT09ICdiJykge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZGVjb2RlQmFzZTY0UGFja2V0KGRhdGEuc3Vic3RyKDEpLCBiaW5hcnlUeXBlKTtcbiAgICB9XG5cbiAgICBpZiAodXRmOGRlY29kZSkge1xuICAgICAgZGF0YSA9IHRyeURlY29kZShkYXRhKTtcbiAgICAgIGlmIChkYXRhID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZXJyO1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgdHlwZSA9IGRhdGEuY2hhckF0KDApO1xuXG4gICAgaWYgKE51bWJlcih0eXBlKSAhPSB0eXBlIHx8ICFwYWNrZXRzbGlzdFt0eXBlXSkge1xuICAgICAgcmV0dXJuIGVycjtcbiAgICB9XG5cbiAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSwgZGF0YTogZGF0YS5zdWJzdHJpbmcoMSkgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0gfTtcbiAgICB9XG4gIH1cblxuICB2YXIgYXNBcnJheSA9IG5ldyBVaW50OEFycmF5KGRhdGEpO1xuICB2YXIgdHlwZSA9IGFzQXJyYXlbMF07XG4gIHZhciByZXN0ID0gc2xpY2VCdWZmZXIoZGF0YSwgMSk7XG4gIGlmIChCbG9iICYmIGJpbmFyeVR5cGUgPT09ICdibG9iJykge1xuICAgIHJlc3QgPSBuZXcgQmxvYihbcmVzdF0pO1xuICB9XG4gIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdLCBkYXRhOiByZXN0IH07XG59O1xuXG5mdW5jdGlvbiB0cnlEZWNvZGUoZGF0YSkge1xuICB0cnkge1xuICAgIGRhdGEgPSB1dGY4LmRlY29kZShkYXRhLCB7IHN0cmljdDogZmFsc2UgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8qKlxuICogRGVjb2RlcyBhIHBhY2tldCBlbmNvZGVkIGluIGEgYmFzZTY0IHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlNjQgZW5jb2RlZCBtZXNzYWdlXG4gKiBAcmV0dXJuIHtPYmplY3R9IHdpdGggYHR5cGVgIGFuZCBgZGF0YWAgKGlmIGFueSlcbiAqL1xuXG5leHBvcnRzLmRlY29kZUJhc2U2NFBhY2tldCA9IGZ1bmN0aW9uKG1zZywgYmluYXJ5VHlwZSkge1xuICB2YXIgdHlwZSA9IHBhY2tldHNsaXN0W21zZy5jaGFyQXQoMCldO1xuICBpZiAoIWJhc2U2NGVuY29kZXIpIHtcbiAgICByZXR1cm4geyB0eXBlOiB0eXBlLCBkYXRhOiB7IGJhc2U2NDogdHJ1ZSwgZGF0YTogbXNnLnN1YnN0cigxKSB9IH07XG4gIH1cblxuICB2YXIgZGF0YSA9IGJhc2U2NGVuY29kZXIuZGVjb2RlKG1zZy5zdWJzdHIoMSkpO1xuXG4gIGlmIChiaW5hcnlUeXBlID09PSAnYmxvYicgJiYgQmxvYikge1xuICAgIGRhdGEgPSBuZXcgQmxvYihbZGF0YV0pO1xuICB9XG5cbiAgcmV0dXJuIHsgdHlwZTogdHlwZSwgZGF0YTogZGF0YSB9O1xufTtcblxuLyoqXG4gKiBFbmNvZGVzIG11bHRpcGxlIG1lc3NhZ2VzIChwYXlsb2FkKS5cbiAqXG4gKiAgICAgPGxlbmd0aD46ZGF0YVxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogICAgIDExOmhlbGxvIHdvcmxkMjpoaVxuICpcbiAqIElmIGFueSBjb250ZW50cyBhcmUgYmluYXJ5LCB0aGV5IHdpbGwgYmUgZW5jb2RlZCBhcyBiYXNlNjQgc3RyaW5ncy4gQmFzZTY0XG4gKiBlbmNvZGVkIHN0cmluZ3MgYXJlIG1hcmtlZCB3aXRoIGEgYiBiZWZvcmUgdGhlIGxlbmd0aCBzcGVjaWZpZXJcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBheWxvYWQgPSBmdW5jdGlvbiAocGFja2V0cywgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2Ygc3VwcG9ydHNCaW5hcnkgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IHN1cHBvcnRzQmluYXJ5O1xuICAgIHN1cHBvcnRzQmluYXJ5ID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpc0JpbmFyeSA9IGhhc0JpbmFyeShwYWNrZXRzKTtcblxuICBpZiAoc3VwcG9ydHNCaW5hcnkgJiYgaXNCaW5hcnkpIHtcbiAgICBpZiAoQmxvYiAmJiAhZG9udFNlbmRCbG9icykge1xuICAgICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQmxvYihwYWNrZXRzLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIocGFja2V0cywgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKCFwYWNrZXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjaygnMDonKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldExlbmd0aEhlYWRlcihtZXNzYWdlKSB7XG4gICAgcmV0dXJuIG1lc3NhZ2UubGVuZ3RoICsgJzonICsgbWVzc2FnZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgIWlzQmluYXJ5ID8gZmFsc2UgOiBzdXBwb3J0c0JpbmFyeSwgZmFsc2UsIGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAgICAgIGRvbmVDYWxsYmFjayhudWxsLCBzZXRMZW5ndGhIZWFkZXIobWVzc2FnZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdHMuam9pbignJykpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQXN5bmMgYXJyYXkgbWFwIHVzaW5nIGFmdGVyXG4gKi9cblxuZnVuY3Rpb24gbWFwKGFyeSwgZWFjaCwgZG9uZSkge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGFyeS5sZW5ndGgpO1xuICB2YXIgbmV4dCA9IGFmdGVyKGFyeS5sZW5ndGgsIGRvbmUpO1xuXG4gIHZhciBlYWNoV2l0aEluZGV4ID0gZnVuY3Rpb24oaSwgZWwsIGNiKSB7XG4gICAgZWFjaChlbCwgZnVuY3Rpb24oZXJyb3IsIG1zZykge1xuICAgICAgcmVzdWx0W2ldID0gbXNnO1xuICAgICAgY2IoZXJyb3IsIHJlc3VsdCk7XG4gICAgfSk7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyBpKyspIHtcbiAgICBlYWNoV2l0aEluZGV4KGksIGFyeVtpXSwgbmV4dCk7XG4gIH1cbn1cblxuLypcbiAqIERlY29kZXMgZGF0YSB3aGVuIGEgcGF5bG9hZCBpcyBtYXliZSBleHBlY3RlZC4gUG9zc2libGUgYmluYXJ5IGNvbnRlbnRzIGFyZVxuICogZGVjb2RlZCBmcm9tIHRoZWlyIGJhc2U2NCByZXByZXNlbnRhdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLCBjYWxsYmFjayBtZXRob2RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVQYXlsb2FkID0gZnVuY3Rpb24gKGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5kZWNvZGVQYXlsb2FkQXNCaW5hcnkoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBiaW5hcnlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBiaW5hcnlUeXBlO1xuICAgIGJpbmFyeVR5cGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIHBhY2tldDtcbiAgaWYgKGRhdGEgPT09ICcnKSB7XG4gICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICB9XG5cbiAgdmFyIGxlbmd0aCA9ICcnLCBuLCBtc2c7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBkYXRhLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjaHIgPSBkYXRhLmNoYXJBdChpKTtcblxuICAgIGlmIChjaHIgIT09ICc6Jykge1xuICAgICAgbGVuZ3RoICs9IGNocjtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChsZW5ndGggPT09ICcnIHx8IChsZW5ndGggIT0gKG4gPSBOdW1iZXIobGVuZ3RoKSkpKSB7XG4gICAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICB9XG5cbiAgICBtc2cgPSBkYXRhLnN1YnN0cihpICsgMSwgbik7XG5cbiAgICBpZiAobGVuZ3RoICE9IG1zZy5sZW5ndGgpIHtcbiAgICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgIH1cblxuICAgIGlmIChtc2cubGVuZ3RoKSB7XG4gICAgICBwYWNrZXQgPSBleHBvcnRzLmRlY29kZVBhY2tldChtc2csIGJpbmFyeVR5cGUsIGZhbHNlKTtcblxuICAgICAgaWYgKGVyci50eXBlID09PSBwYWNrZXQudHlwZSAmJiBlcnIuZGF0YSA9PT0gcGFja2V0LmRhdGEpIHtcbiAgICAgICAgLy8gcGFyc2VyIGVycm9yIGluIGluZGl2aWR1YWwgcGFja2V0IC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJldCA9IGNhbGxiYWNrKHBhY2tldCwgaSArIG4sIGwpO1xuICAgICAgaWYgKGZhbHNlID09PSByZXQpIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhZHZhbmNlIGN1cnNvclxuICAgIGkgKz0gbjtcbiAgICBsZW5ndGggPSAnJztcbiAgfVxuXG4gIGlmIChsZW5ndGggIT09ICcnKSB7XG4gICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICB9XG5cbn07XG5cbi8qKlxuICogRW5jb2RlcyBtdWx0aXBsZSBtZXNzYWdlcyAocGF5bG9hZCkgYXMgYmluYXJ5LlxuICpcbiAqIDwxID0gYmluYXJ5LCAwID0gc3RyaW5nPjxudW1iZXIgZnJvbSAwLTk+PG51bWJlciBmcm9tIDAtOT5bLi4uXTxudW1iZXJcbiAqIDI1NT48ZGF0YT5cbiAqXG4gKiBFeGFtcGxlOlxuICogMSAzIDI1NSAxIDIgMywgaWYgdGhlIGJpbmFyeSBjb250ZW50cyBhcmUgaW50ZXJwcmV0ZWQgYXMgOCBiaXQgaW50ZWdlcnNcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBwYWNrZXRzXG4gKiBAcmV0dXJuIHtBcnJheUJ1ZmZlcn0gZW5jb2RlZCBwYXlsb2FkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyID0gZnVuY3Rpb24ocGFja2V0cywgY2FsbGJhY2spIHtcbiAgaWYgKCFwYWNrZXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBjYWxsYmFjayhuZXcgQXJyYXlCdWZmZXIoMCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5jb2RlT25lKHBhY2tldCwgZG9uZUNhbGxiYWNrKSB7XG4gICAgZXhwb3J0cy5lbmNvZGVQYWNrZXQocGFja2V0LCB0cnVlLCB0cnVlLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICByZXR1cm4gZG9uZUNhbGxiYWNrKG51bGwsIGRhdGEpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24oZXJyLCBlbmNvZGVkUGFja2V0cykge1xuICAgIHZhciB0b3RhbExlbmd0aCA9IGVuY29kZWRQYWNrZXRzLnJlZHVjZShmdW5jdGlvbihhY2MsIHApIHtcbiAgICAgIHZhciBsZW47XG4gICAgICBpZiAodHlwZW9mIHAgPT09ICdzdHJpbmcnKXtcbiAgICAgICAgbGVuID0gcC5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW4gPSBwLmJ5dGVMZW5ndGg7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjICsgbGVuLnRvU3RyaW5nKCkubGVuZ3RoICsgbGVuICsgMjsgLy8gc3RyaW5nL2JpbmFyeSBpZGVudGlmaWVyICsgc2VwYXJhdG9yID0gMlxuICAgIH0sIDApO1xuXG4gICAgdmFyIHJlc3VsdEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodG90YWxMZW5ndGgpO1xuXG4gICAgdmFyIGJ1ZmZlckluZGV4ID0gMDtcbiAgICBlbmNvZGVkUGFja2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHApIHtcbiAgICAgIHZhciBpc1N0cmluZyA9IHR5cGVvZiBwID09PSAnc3RyaW5nJztcbiAgICAgIHZhciBhYiA9IHA7XG4gICAgICBpZiAoaXNTdHJpbmcpIHtcbiAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShwLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZpZXdbaV0gPSBwLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgYWIgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzU3RyaW5nKSB7IC8vIG5vdCB0cnVlIGJpbmFyeVxuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDA7XG4gICAgICB9IGVsc2UgeyAvLyB0cnVlIGJpbmFyeVxuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDE7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5TdHIgPSBhYi5ieXRlTGVuZ3RoLnRvU3RyaW5nKCk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlblN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IHBhcnNlSW50KGxlblN0cltpXSk7XG4gICAgICB9XG4gICAgICByZXN1bHRBcnJheVtidWZmZXJJbmRleCsrXSA9IDI1NTtcblxuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShhYik7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZpZXcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSB2aWV3W2ldO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNhbGxiYWNrKHJlc3VsdEFycmF5LmJ1ZmZlcik7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBFbmNvZGUgYXMgQmxvYlxuICovXG5cbmV4cG9ydHMuZW5jb2RlUGF5bG9hZEFzQmxvYiA9IGZ1bmN0aW9uKHBhY2tldHMsIGNhbGxiYWNrKSB7XG4gIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgdHJ1ZSwgdHJ1ZSwgZnVuY3Rpb24oZW5jb2RlZCkge1xuICAgICAgdmFyIGJpbmFyeUlkZW50aWZpZXIgPSBuZXcgVWludDhBcnJheSgxKTtcbiAgICAgIGJpbmFyeUlkZW50aWZpZXJbMF0gPSAxO1xuICAgICAgaWYgKHR5cGVvZiBlbmNvZGVkID09PSAnc3RyaW5nJykge1xuICAgICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGVuY29kZWQubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmlld1tpXSA9IGVuY29kZWQuY2hhckNvZGVBdChpKTtcbiAgICAgICAgfVxuICAgICAgICBlbmNvZGVkID0gdmlldy5idWZmZXI7XG4gICAgICAgIGJpbmFyeUlkZW50aWZpZXJbMF0gPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuID0gKGVuY29kZWQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcilcbiAgICAgICAgPyBlbmNvZGVkLmJ5dGVMZW5ndGhcbiAgICAgICAgOiBlbmNvZGVkLnNpemU7XG5cbiAgICAgIHZhciBsZW5TdHIgPSBsZW4udG9TdHJpbmcoKTtcbiAgICAgIHZhciBsZW5ndGhBcnkgPSBuZXcgVWludDhBcnJheShsZW5TdHIubGVuZ3RoICsgMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlblN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZW5ndGhBcnlbaV0gPSBwYXJzZUludChsZW5TdHJbaV0pO1xuICAgICAgfVxuICAgICAgbGVuZ3RoQXJ5W2xlblN0ci5sZW5ndGhdID0gMjU1O1xuXG4gICAgICBpZiAoQmxvYikge1xuICAgICAgICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtiaW5hcnlJZGVudGlmaWVyLmJ1ZmZlciwgbGVuZ3RoQXJ5LmJ1ZmZlciwgZW5jb2RlZF0pO1xuICAgICAgICBkb25lQ2FsbGJhY2sobnVsbCwgYmxvYik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBtYXAocGFja2V0cywgZW5jb2RlT25lLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IEJsb2IocmVzdWx0cykpO1xuICB9KTtcbn07XG5cbi8qXG4gKiBEZWNvZGVzIGRhdGEgd2hlbiBhIHBheWxvYWQgaXMgbWF5YmUgZXhwZWN0ZWQuIFN0cmluZ3MgYXJlIGRlY29kZWQgYnlcbiAqIGludGVycHJldGluZyBlYWNoIGJ5dGUgYXMgYSBrZXkgY29kZSBmb3IgZW50cmllcyBtYXJrZWQgdG8gc3RhcnQgd2l0aCAwLiBTZWVcbiAqIGRlc2NyaXB0aW9uIG9mIGVuY29kZVBheWxvYWRBc0JpbmFyeVxuICpcbiAqIEBwYXJhbSB7QXJyYXlCdWZmZXJ9IGRhdGEsIGNhbGxiYWNrIG1ldGhvZFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLmRlY29kZVBheWxvYWRBc0JpbmFyeSA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGJpbmFyeVR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjYWxsYmFjayA9IGJpbmFyeVR5cGU7XG4gICAgYmluYXJ5VHlwZSA9IG51bGw7XG4gIH1cblxuICB2YXIgYnVmZmVyVGFpbCA9IGRhdGE7XG4gIHZhciBidWZmZXJzID0gW107XG5cbiAgd2hpbGUgKGJ1ZmZlclRhaWwuYnl0ZUxlbmd0aCA+IDApIHtcbiAgICB2YXIgdGFpbEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyVGFpbCk7XG4gICAgdmFyIGlzU3RyaW5nID0gdGFpbEFycmF5WzBdID09PSAwO1xuICAgIHZhciBtc2dMZW5ndGggPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAxOyA7IGkrKykge1xuICAgICAgaWYgKHRhaWxBcnJheVtpXSA9PT0gMjU1KSBicmVhaztcblxuICAgICAgLy8gMzEwID0gY2hhciBsZW5ndGggb2YgTnVtYmVyLk1BWF9WQUxVRVxuICAgICAgaWYgKG1zZ0xlbmd0aC5sZW5ndGggPiAzMTApIHtcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgICB9XG5cbiAgICAgIG1zZ0xlbmd0aCArPSB0YWlsQXJyYXlbaV07XG4gICAgfVxuXG4gICAgYnVmZmVyVGFpbCA9IHNsaWNlQnVmZmVyKGJ1ZmZlclRhaWwsIDIgKyBtc2dMZW5ndGgubGVuZ3RoKTtcbiAgICBtc2dMZW5ndGggPSBwYXJzZUludChtc2dMZW5ndGgpO1xuXG4gICAgdmFyIG1zZyA9IHNsaWNlQnVmZmVyKGJ1ZmZlclRhaWwsIDAsIG1zZ0xlbmd0aCk7XG4gICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICB0cnkge1xuICAgICAgICBtc2cgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KG1zZykpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpUGhvbmUgU2FmYXJpIGRvZXNuJ3QgbGV0IHlvdSBhcHBseSB0byB0eXBlZCBhcnJheXNcbiAgICAgICAgdmFyIHR5cGVkID0gbmV3IFVpbnQ4QXJyYXkobXNnKTtcbiAgICAgICAgbXNnID0gJyc7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBtc2cgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSh0eXBlZFtpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBidWZmZXJzLnB1c2gobXNnKTtcbiAgICBidWZmZXJUYWlsID0gc2xpY2VCdWZmZXIoYnVmZmVyVGFpbCwgbXNnTGVuZ3RoKTtcbiAgfVxuXG4gIHZhciB0b3RhbCA9IGJ1ZmZlcnMubGVuZ3RoO1xuICBidWZmZXJzLmZvckVhY2goZnVuY3Rpb24oYnVmZmVyLCBpKSB7XG4gICAgY2FsbGJhY2soZXhwb3J0cy5kZWNvZGVQYWNrZXQoYnVmZmVyLCBiaW5hcnlUeXBlLCB0cnVlKSwgaSwgdG90YWwpO1xuICB9KTtcbn07XG4iLCIvKipcclxuICogQ29tcGlsZXMgYSBxdWVyeXN0cmluZ1xyXG4gKiBSZXR1cm5zIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0XHJcbiAqXHJcbiAqIEBwYXJhbSB7T2JqZWN0fVxyXG4gKiBAYXBpIHByaXZhdGVcclxuICovXHJcblxyXG5leHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICB2YXIgc3RyID0gJyc7XHJcblxyXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XHJcbiAgICAgIGlmIChzdHIubGVuZ3RoKSBzdHIgKz0gJyYnO1xyXG4gICAgICBzdHIgKz0gZW5jb2RlVVJJQ29tcG9uZW50KGkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtpXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RyO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFBhcnNlcyBhIHNpbXBsZSBxdWVyeXN0cmluZyBpbnRvIGFuIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gcXNcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbihxcyl7XHJcbiAgdmFyIHFyeSA9IHt9O1xyXG4gIHZhciBwYWlycyA9IHFzLnNwbGl0KCcmJyk7XHJcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBwYWlycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgIHZhciBwYWlyID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcclxuICAgIHFyeVtkZWNvZGVVUklDb21wb25lbnQocGFpclswXSldID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xyXG4gIH1cclxuICByZXR1cm4gcXJ5O1xyXG59O1xyXG4iLCJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYSwgYil7XG4gIHZhciBmbiA9IGZ1bmN0aW9uKCl7fTtcbiAgZm4ucHJvdG90eXBlID0gYi5wcm90b3R5cGU7XG4gIGEucHJvdG90eXBlID0gbmV3IGZuO1xuICBhLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGE7XG59OyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBiaW5hcnkgPSByZXF1aXJlKCcuL2JpbmFyeScpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG52YXIgaXNCdWYgPSByZXF1aXJlKCcuL2lzLWJ1ZmZlcicpO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gNDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZXMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnR5cGVzID0gW1xuICAnQ09OTkVDVCcsXG4gICdESVNDT05ORUNUJyxcbiAgJ0VWRU5UJyxcbiAgJ0FDSycsXG4gICdFUlJPUicsXG4gICdCSU5BUllfRVZFTlQnLFxuICAnQklOQVJZX0FDSydcbl07XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGNvbm5lY3RgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5DT05ORUNUID0gMDtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZGlzY29ubmVjdGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkRJU0NPTk5FQ1QgPSAxO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBldmVudGAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVWRU5UID0gMjtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgYWNrYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQUNLID0gMztcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZXJyb3JgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FUlJPUiA9IDQ7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgJ2JpbmFyeSBldmVudCdcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQklOQVJZX0VWRU5UID0gNTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgYmluYXJ5IGFja2AuIEZvciBhY2tzIHdpdGggYmluYXJ5IGFyZ3VtZW50cy5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQklOQVJZX0FDSyA9IDY7XG5cbi8qKlxuICogRW5jb2RlciBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRW5jb2RlciA9IEVuY29kZXI7XG5cbi8qKlxuICogRGVjb2RlciBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRGVjb2RlciA9IERlY29kZXI7XG5cbi8qKlxuICogQSBzb2NrZXQuaW8gRW5jb2RlciBpbnN0YW5jZVxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW5jb2RlcigpIHt9XG5cbnZhciBFUlJPUl9QQUNLRVQgPSBleHBvcnRzLkVSUk9SICsgJ1wiZW5jb2RlIGVycm9yXCInO1xuXG4vKipcbiAqIEVuY29kZSBhIHBhY2tldCBhcyBhIHNpbmdsZSBzdHJpbmcgaWYgbm9uLWJpbmFyeSwgb3IgYXMgYVxuICogYnVmZmVyIHNlcXVlbmNlLCBkZXBlbmRpbmcgb24gcGFja2V0IHR5cGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiAtIHBhY2tldCBvYmplY3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0gZnVuY3Rpb24gdG8gaGFuZGxlIGVuY29kaW5ncyAobGlrZWx5IGVuZ2luZS53cml0ZSlcbiAqIEByZXR1cm4gQ2FsbHMgY2FsbGJhY2sgd2l0aCBBcnJheSBvZiBlbmNvZGluZ3NcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW5jb2Rlci5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24ob2JqLCBjYWxsYmFjayl7XG4gIGRlYnVnKCdlbmNvZGluZyBwYWNrZXQgJWonLCBvYmopO1xuXG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gb2JqLnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBvYmoudHlwZSkge1xuICAgIGVuY29kZUFzQmluYXJ5KG9iaiwgY2FsbGJhY2spO1xuICB9IGVsc2Uge1xuICAgIHZhciBlbmNvZGluZyA9IGVuY29kZUFzU3RyaW5nKG9iaik7XG4gICAgY2FsbGJhY2soW2VuY29kaW5nXSk7XG4gIH1cbn07XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBhcyBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7U3RyaW5nfSBlbmNvZGVkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBc1N0cmluZyhvYmopIHtcblxuICAvLyBmaXJzdCBpcyB0eXBlXG4gIHZhciBzdHIgPSAnJyArIG9iai50eXBlO1xuXG4gIC8vIGF0dGFjaG1lbnRzIGlmIHdlIGhhdmUgdGhlbVxuICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IG9iai50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gb2JqLnR5cGUpIHtcbiAgICBzdHIgKz0gb2JqLmF0dGFjaG1lbnRzICsgJy0nO1xuICB9XG5cbiAgLy8gaWYgd2UgaGF2ZSBhIG5hbWVzcGFjZSBvdGhlciB0aGFuIGAvYFxuICAvLyB3ZSBhcHBlbmQgaXQgZm9sbG93ZWQgYnkgYSBjb21tYSBgLGBcbiAgaWYgKG9iai5uc3AgJiYgJy8nICE9PSBvYmoubnNwKSB7XG4gICAgc3RyICs9IG9iai5uc3AgKyAnLCc7XG4gIH1cblxuICAvLyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSB0aGUgaWRcbiAgaWYgKG51bGwgIT0gb2JqLmlkKSB7XG4gICAgc3RyICs9IG9iai5pZDtcbiAgfVxuXG4gIC8vIGpzb24gZGF0YVxuICBpZiAobnVsbCAhPSBvYmouZGF0YSkge1xuICAgIHZhciBwYXlsb2FkID0gdHJ5U3RyaW5naWZ5KG9iai5kYXRhKTtcbiAgICBpZiAocGF5bG9hZCAhPT0gZmFsc2UpIHtcbiAgICAgIHN0ciArPSBwYXlsb2FkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gRVJST1JfUEFDS0VUO1xuICAgIH1cbiAgfVxuXG4gIGRlYnVnKCdlbmNvZGVkICVqIGFzICVzJywgb2JqLCBzdHIpO1xuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiB0cnlTdHJpbmdpZnkoc3RyKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHN0cik7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5jb2RlIHBhY2tldCBhcyAnYnVmZmVyIHNlcXVlbmNlJyBieSByZW1vdmluZyBibG9icywgYW5kXG4gKiBkZWNvbnN0cnVjdGluZyBwYWNrZXQgaW50byBvYmplY3Qgd2l0aCBwbGFjZWhvbGRlcnMgYW5kXG4gKiBhIGxpc3Qgb2YgYnVmZmVycy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAcmV0dXJuIHtCdWZmZXJ9IGVuY29kZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFzQmluYXJ5KG9iaiwgY2FsbGJhY2spIHtcblxuICBmdW5jdGlvbiB3cml0ZUVuY29kaW5nKGJsb2JsZXNzRGF0YSkge1xuICAgIHZhciBkZWNvbnN0cnVjdGlvbiA9IGJpbmFyeS5kZWNvbnN0cnVjdFBhY2tldChibG9ibGVzc0RhdGEpO1xuICAgIHZhciBwYWNrID0gZW5jb2RlQXNTdHJpbmcoZGVjb25zdHJ1Y3Rpb24ucGFja2V0KTtcbiAgICB2YXIgYnVmZmVycyA9IGRlY29uc3RydWN0aW9uLmJ1ZmZlcnM7XG5cbiAgICBidWZmZXJzLnVuc2hpZnQocGFjayk7IC8vIGFkZCBwYWNrZXQgaW5mbyB0byBiZWdpbm5pbmcgb2YgZGF0YSBsaXN0XG4gICAgY2FsbGJhY2soYnVmZmVycyk7IC8vIHdyaXRlIGFsbCB0aGUgYnVmZmVyc1xuICB9XG5cbiAgYmluYXJ5LnJlbW92ZUJsb2JzKG9iaiwgd3JpdGVFbmNvZGluZyk7XG59XG5cbi8qKlxuICogQSBzb2NrZXQuaW8gRGVjb2RlciBpbnN0YW5jZVxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gZGVjb2RlclxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBEZWNvZGVyKCkge1xuICB0aGlzLnJlY29uc3RydWN0b3IgPSBudWxsO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAgd2l0aCBEZWNvZGVyLlxuICovXG5cbkVtaXR0ZXIoRGVjb2Rlci5wcm90b3R5cGUpO1xuXG4vKipcbiAqIERlY29kZXMgYW4gZW5jb2RlZCBwYWNrZXQgc3RyaW5nIGludG8gcGFja2V0IEpTT04uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG9iaiAtIGVuY29kZWQgcGFja2V0XG4gKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5EZWNvZGVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihvYmopIHtcbiAgdmFyIHBhY2tldDtcbiAgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgcGFja2V0ID0gZGVjb2RlU3RyaW5nKG9iaik7XG4gICAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBwYWNrZXQudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IHBhY2tldC50eXBlKSB7IC8vIGJpbmFyeSBwYWNrZXQncyBqc29uXG4gICAgICB0aGlzLnJlY29uc3RydWN0b3IgPSBuZXcgQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpO1xuXG4gICAgICAvLyBubyBhdHRhY2htZW50cywgbGFiZWxlZCBiaW5hcnkgYnV0IG5vIGJpbmFyeSBkYXRhIHRvIGZvbGxvd1xuICAgICAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvci5yZWNvblBhY2suYXR0YWNobWVudHMgPT09IDApIHtcbiAgICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyBub24tYmluYXJ5IGZ1bGwgcGFja2V0XG4gICAgICB0aGlzLmVtaXQoJ2RlY29kZWQnLCBwYWNrZXQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChpc0J1ZihvYmopIHx8IG9iai5iYXNlNjQpIHsgLy8gcmF3IGJpbmFyeSBkYXRhXG4gICAgaWYgKCF0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZ290IGJpbmFyeSBkYXRhIHdoZW4gbm90IHJlY29uc3RydWN0aW5nIGEgcGFja2V0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhY2tldCA9IHRoaXMucmVjb25zdHJ1Y3Rvci50YWtlQmluYXJ5RGF0YShvYmopO1xuICAgICAgaWYgKHBhY2tldCkgeyAvLyByZWNlaXZlZCBmaW5hbCBidWZmZXJcbiAgICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHR5cGU6ICcgKyBvYmopO1xuICB9XG59O1xuXG4vKipcbiAqIERlY29kZSBhIHBhY2tldCBTdHJpbmcgKEpTT04gZGF0YSlcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZGVjb2RlU3RyaW5nKHN0cikge1xuICB2YXIgaSA9IDA7XG4gIC8vIGxvb2sgdXAgdHlwZVxuICB2YXIgcCA9IHtcbiAgICB0eXBlOiBOdW1iZXIoc3RyLmNoYXJBdCgwKSlcbiAgfTtcblxuICBpZiAobnVsbCA9PSBleHBvcnRzLnR5cGVzW3AudHlwZV0pIHtcbiAgICByZXR1cm4gZXJyb3IoJ3Vua25vd24gcGFja2V0IHR5cGUgJyArIHAudHlwZSk7XG4gIH1cblxuICAvLyBsb29rIHVwIGF0dGFjaG1lbnRzIGlmIHR5cGUgYmluYXJ5XG4gIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gcC50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gcC50eXBlKSB7XG4gICAgdmFyIGJ1ZiA9ICcnO1xuICAgIHdoaWxlIChzdHIuY2hhckF0KCsraSkgIT09ICctJykge1xuICAgICAgYnVmICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoaSA9PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgaWYgKGJ1ZiAhPSBOdW1iZXIoYnVmKSB8fCBzdHIuY2hhckF0KGkpICE9PSAnLScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBhdHRhY2htZW50cycpO1xuICAgIH1cbiAgICBwLmF0dGFjaG1lbnRzID0gTnVtYmVyKGJ1Zik7XG4gIH1cblxuICAvLyBsb29rIHVwIG5hbWVzcGFjZSAoaWYgYW55KVxuICBpZiAoJy8nID09PSBzdHIuY2hhckF0KGkgKyAxKSkge1xuICAgIHAubnNwID0gJyc7XG4gICAgd2hpbGUgKCsraSkge1xuICAgICAgdmFyIGMgPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKCcsJyA9PT0gYykgYnJlYWs7XG4gICAgICBwLm5zcCArPSBjO1xuICAgICAgaWYgKGkgPT09IHN0ci5sZW5ndGgpIGJyZWFrO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwLm5zcCA9ICcvJztcbiAgfVxuXG4gIC8vIGxvb2sgdXAgaWRcbiAgdmFyIG5leHQgPSBzdHIuY2hhckF0KGkgKyAxKTtcbiAgaWYgKCcnICE9PSBuZXh0ICYmIE51bWJlcihuZXh0KSA9PSBuZXh0KSB7XG4gICAgcC5pZCA9ICcnO1xuICAgIHdoaWxlICgrK2kpIHtcbiAgICAgIHZhciBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChudWxsID09IGMgfHwgTnVtYmVyKGMpICE9IGMpIHtcbiAgICAgICAgLS1pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHAuaWQgKz0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gICAgcC5pZCA9IE51bWJlcihwLmlkKTtcbiAgfVxuXG4gIC8vIGxvb2sgdXAganNvbiBkYXRhXG4gIGlmIChzdHIuY2hhckF0KCsraSkpIHtcbiAgICB2YXIgcGF5bG9hZCA9IHRyeVBhcnNlKHN0ci5zdWJzdHIoaSkpO1xuICAgIHZhciBpc1BheWxvYWRWYWxpZCA9IHBheWxvYWQgIT09IGZhbHNlICYmIChwLnR5cGUgPT09IGV4cG9ydHMuRVJST1IgfHwgaXNBcnJheShwYXlsb2FkKSk7XG4gICAgaWYgKGlzUGF5bG9hZFZhbGlkKSB7XG4gICAgICBwLmRhdGEgPSBwYXlsb2FkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZXJyb3IoJ2ludmFsaWQgcGF5bG9hZCcpO1xuICAgIH1cbiAgfVxuXG4gIGRlYnVnKCdkZWNvZGVkICVzIGFzICVqJywgc3RyLCBwKTtcbiAgcmV0dXJuIHA7XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlKHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKHN0cik7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRGVhbGxvY2F0ZXMgYSBwYXJzZXIncyByZXNvdXJjZXNcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkRlY29kZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMucmVjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMucmVjb25zdHJ1Y3Rvci5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQSBtYW5hZ2VyIG9mIGEgYmluYXJ5IGV2ZW50J3MgJ2J1ZmZlciBzZXF1ZW5jZScuIFNob3VsZFxuICogYmUgY29uc3RydWN0ZWQgd2hlbmV2ZXIgYSBwYWNrZXQgb2YgdHlwZSBCSU5BUllfRVZFTlQgaXNcbiAqIGRlY29kZWQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QmluYXJ5UmVjb25zdHJ1Y3Rvcn0gaW5pdGlhbGl6ZWQgcmVjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gQmluYXJ5UmVjb25zdHJ1Y3RvcihwYWNrZXQpIHtcbiAgdGhpcy5yZWNvblBhY2sgPSBwYWNrZXQ7XG4gIHRoaXMuYnVmZmVycyA9IFtdO1xufVxuXG4vKipcbiAqIE1ldGhvZCB0byBiZSBjYWxsZWQgd2hlbiBiaW5hcnkgZGF0YSByZWNlaXZlZCBmcm9tIGNvbm5lY3Rpb25cbiAqIGFmdGVyIGEgQklOQVJZX0VWRU5UIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge0J1ZmZlciB8IEFycmF5QnVmZmVyfSBiaW5EYXRhIC0gdGhlIHJhdyBiaW5hcnkgZGF0YSByZWNlaXZlZFxuICogQHJldHVybiB7bnVsbCB8IE9iamVjdH0gcmV0dXJucyBudWxsIGlmIG1vcmUgYmluYXJ5IGRhdGEgaXMgZXhwZWN0ZWQgb3JcbiAqICAgYSByZWNvbnN0cnVjdGVkIHBhY2tldCBvYmplY3QgaWYgYWxsIGJ1ZmZlcnMgaGF2ZSBiZWVuIHJlY2VpdmVkLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQmluYXJ5UmVjb25zdHJ1Y3Rvci5wcm90b3R5cGUudGFrZUJpbmFyeURhdGEgPSBmdW5jdGlvbihiaW5EYXRhKSB7XG4gIHRoaXMuYnVmZmVycy5wdXNoKGJpbkRhdGEpO1xuICBpZiAodGhpcy5idWZmZXJzLmxlbmd0aCA9PT0gdGhpcy5yZWNvblBhY2suYXR0YWNobWVudHMpIHsgLy8gZG9uZSB3aXRoIGJ1ZmZlciBsaXN0XG4gICAgdmFyIHBhY2tldCA9IGJpbmFyeS5yZWNvbnN0cnVjdFBhY2tldCh0aGlzLnJlY29uUGFjaywgdGhpcy5idWZmZXJzKTtcbiAgICB0aGlzLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24oKTtcbiAgICByZXR1cm4gcGFja2V0O1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuLyoqXG4gKiBDbGVhbnMgdXAgYmluYXJ5IHBhY2tldCByZWNvbnN0cnVjdGlvbiB2YXJpYWJsZXMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuQmluYXJ5UmVjb25zdHJ1Y3Rvci5wcm90b3R5cGUuZmluaXNoZWRSZWNvbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJlY29uUGFjayA9IG51bGw7XG4gIHRoaXMuYnVmZmVycyA9IFtdO1xufTtcblxuZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogZXhwb3J0cy5FUlJPUixcbiAgICBkYXRhOiAncGFyc2VyIGVycm9yOiAnICsgbXNnXG4gIH07XG59XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8qIVxuICogVGhlIGJ1ZmZlciBtb2R1bGUgZnJvbSBub2RlLmpzLCBmb3IgdGhlIGJyb3dzZXIuXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHA6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xuXG4ndXNlIHN0cmljdCdcblxudmFyIGJhc2U2NCA9IHJlcXVpcmUoJ2Jhc2U2NC1qcycpXG52YXIgaWVlZTc1NCA9IHJlcXVpcmUoJ2llZWU3NTQnKVxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5JylcblxuZXhwb3J0cy5CdWZmZXIgPSBCdWZmZXJcbmV4cG9ydHMuU2xvd0J1ZmZlciA9IFNsb3dCdWZmZXJcbmV4cG9ydHMuSU5TUEVDVF9NQVhfQllURVMgPSA1MFxuXG4vKipcbiAqIElmIGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGA6XG4gKiAgID09PSB0cnVlICAgIFVzZSBVaW50OEFycmF5IGltcGxlbWVudGF0aW9uIChmYXN0ZXN0KVxuICogICA9PT0gZmFsc2UgICBVc2UgT2JqZWN0IGltcGxlbWVudGF0aW9uIChtb3N0IGNvbXBhdGlibGUsIGV2ZW4gSUU2KVxuICpcbiAqIEJyb3dzZXJzIHRoYXQgc3VwcG9ydCB0eXBlZCBhcnJheXMgYXJlIElFIDEwKywgRmlyZWZveCA0KywgQ2hyb21lIDcrLCBTYWZhcmkgNS4xKyxcbiAqIE9wZXJhIDExLjYrLCBpT1MgNC4yKy5cbiAqXG4gKiBEdWUgdG8gdmFyaW91cyBicm93c2VyIGJ1Z3MsIHNvbWV0aW1lcyB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uIHdpbGwgYmUgdXNlZCBldmVuXG4gKiB3aGVuIHRoZSBicm93c2VyIHN1cHBvcnRzIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBOb3RlOlxuICpcbiAqICAgLSBGaXJlZm94IDQtMjkgbGFja3Mgc3VwcG9ydCBmb3IgYWRkaW5nIG5ldyBwcm9wZXJ0aWVzIHRvIGBVaW50OEFycmF5YCBpbnN0YW5jZXMsXG4gKiAgICAgU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02OTU0MzguXG4gKlxuICogICAtIENocm9tZSA5LTEwIGlzIG1pc3NpbmcgdGhlIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24uXG4gKlxuICogICAtIElFMTAgaGFzIGEgYnJva2VuIGBUeXBlZEFycmF5LnByb3RvdHlwZS5zdWJhcnJheWAgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhcnJheXMgb2ZcbiAqICAgICBpbmNvcnJlY3QgbGVuZ3RoIGluIHNvbWUgc2l0dWF0aW9ucy5cblxuICogV2UgZGV0ZWN0IHRoZXNlIGJ1Z2d5IGJyb3dzZXJzIGFuZCBzZXQgYEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUYCB0byBgZmFsc2VgIHNvIHRoZXlcbiAqIGdldCB0aGUgT2JqZWN0IGltcGxlbWVudGF0aW9uLCB3aGljaCBpcyBzbG93ZXIgYnV0IGJlaGF2ZXMgY29ycmVjdGx5LlxuICovXG5CdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCA9IGdsb2JhbC5UWVBFRF9BUlJBWV9TVVBQT1JUICE9PSB1bmRlZmluZWRcbiAgPyBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVFxuICA6IHR5cGVkQXJyYXlTdXBwb3J0KClcblxuLypcbiAqIEV4cG9ydCBrTWF4TGVuZ3RoIGFmdGVyIHR5cGVkIGFycmF5IHN1cHBvcnQgaXMgZGV0ZXJtaW5lZC5cbiAqL1xuZXhwb3J0cy5rTWF4TGVuZ3RoID0ga01heExlbmd0aCgpXG5cbmZ1bmN0aW9uIHR5cGVkQXJyYXlTdXBwb3J0ICgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gbmV3IFVpbnQ4QXJyYXkoMSlcbiAgICBhcnIuX19wcm90b19fID0ge19fcHJvdG9fXzogVWludDhBcnJheS5wcm90b3R5cGUsIGZvbzogZnVuY3Rpb24gKCkgeyByZXR1cm4gNDIgfX1cbiAgICByZXR1cm4gYXJyLmZvbygpID09PSA0MiAmJiAvLyB0eXBlZCBhcnJheSBpbnN0YW5jZXMgY2FuIGJlIGF1Z21lbnRlZFxuICAgICAgICB0eXBlb2YgYXJyLnN1YmFycmF5ID09PSAnZnVuY3Rpb24nICYmIC8vIGNocm9tZSA5LTEwIGxhY2sgYHN1YmFycmF5YFxuICAgICAgICBhcnIuc3ViYXJyYXkoMSwgMSkuYnl0ZUxlbmd0aCA9PT0gMCAvLyBpZTEwIGhhcyBicm9rZW4gYHN1YmFycmF5YFxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24ga01heExlbmd0aCAoKSB7XG4gIHJldHVybiBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVFxuICAgID8gMHg3ZmZmZmZmZlxuICAgIDogMHgzZmZmZmZmZlxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdWZmZXIgKHRoYXQsIGxlbmd0aCkge1xuICBpZiAoa01heExlbmd0aCgpIDwgbGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdHlwZWQgYXJyYXkgbGVuZ3RoJylcbiAgfVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gbmV3IFVpbnQ4QXJyYXkobGVuZ3RoKVxuICAgIHRoYXQuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIC8vIEZhbGxiYWNrOiBSZXR1cm4gYW4gb2JqZWN0IGluc3RhbmNlIG9mIHRoZSBCdWZmZXIgY2xhc3NcbiAgICBpZiAodGhhdCA9PT0gbnVsbCkge1xuICAgICAgdGhhdCA9IG5ldyBCdWZmZXIobGVuZ3RoKVxuICAgIH1cbiAgICB0aGF0Lmxlbmd0aCA9IGxlbmd0aFxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBUaGUgQnVmZmVyIGNvbnN0cnVjdG9yIHJldHVybnMgaW5zdGFuY2VzIG9mIGBVaW50OEFycmF5YCB0aGF0IGhhdmUgdGhlaXJcbiAqIHByb3RvdHlwZSBjaGFuZ2VkIHRvIGBCdWZmZXIucHJvdG90eXBlYC4gRnVydGhlcm1vcmUsIGBCdWZmZXJgIGlzIGEgc3ViY2xhc3Mgb2ZcbiAqIGBVaW50OEFycmF5YCwgc28gdGhlIHJldHVybmVkIGluc3RhbmNlcyB3aWxsIGhhdmUgYWxsIHRoZSBub2RlIGBCdWZmZXJgIG1ldGhvZHNcbiAqIGFuZCB0aGUgYFVpbnQ4QXJyYXlgIG1ldGhvZHMuIFNxdWFyZSBicmFja2V0IG5vdGF0aW9uIHdvcmtzIGFzIGV4cGVjdGVkIC0tIGl0XG4gKiByZXR1cm5zIGEgc2luZ2xlIG9jdGV0LlxuICpcbiAqIFRoZSBgVWludDhBcnJheWAgcHJvdG90eXBlIHJlbWFpbnMgdW5tb2RpZmllZC5cbiAqL1xuXG5mdW5jdGlvbiBCdWZmZXIgKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiYgISh0aGlzIGluc3RhbmNlb2YgQnVmZmVyKSkge1xuICAgIHJldHVybiBuZXcgQnVmZmVyKGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgLy8gQ29tbW9uIGNhc2UuXG4gIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgZW5jb2RpbmdPck9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0lmIGVuY29kaW5nIGlzIHNwZWNpZmllZCB0aGVuIHRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nJ1xuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gYWxsb2NVbnNhZmUodGhpcywgYXJnKVxuICB9XG4gIHJldHVybiBmcm9tKHRoaXMsIGFyZywgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucG9vbFNpemUgPSA4MTkyIC8vIG5vdCB1c2VkIGJ5IHRoaXMgaW1wbGVtZW50YXRpb25cblxuLy8gVE9ETzogTGVnYWN5LCBub3QgbmVlZGVkIGFueW1vcmUuIFJlbW92ZSBpbiBuZXh0IG1ham9yIHZlcnNpb24uXG5CdWZmZXIuX2F1Z21lbnQgPSBmdW5jdGlvbiAoYXJyKSB7XG4gIGFyci5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gZnJvbSAodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpXG4gIH1cblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh0aGF0LCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBmcm9tT2JqZWN0KHRoYXQsIHZhbHVlKVxufVxuXG4vKipcbiAqIEZ1bmN0aW9uYWxseSBlcXVpdmFsZW50IHRvIEJ1ZmZlcihhcmcsIGVuY29kaW5nKSBidXQgdGhyb3dzIGEgVHlwZUVycm9yXG4gKiBpZiB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEJ1ZmZlci5mcm9tKHN0clssIGVuY29kaW5nXSlcbiAqIEJ1ZmZlci5mcm9tKGFycmF5KVxuICogQnVmZmVyLmZyb20oYnVmZmVyKVxuICogQnVmZmVyLmZyb20oYXJyYXlCdWZmZXJbLCBieXRlT2Zmc2V0WywgbGVuZ3RoXV0pXG4gKiovXG5CdWZmZXIuZnJvbSA9IGZ1bmN0aW9uICh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBmcm9tKG51bGwsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpXG59XG5cbmlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICBCdWZmZXIucHJvdG90eXBlLl9fcHJvdG9fXyA9IFVpbnQ4QXJyYXkucHJvdG90eXBlXG4gIEJ1ZmZlci5fX3Byb3RvX18gPSBVaW50OEFycmF5XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wuc3BlY2llcyAmJlxuICAgICAgQnVmZmVyW1N5bWJvbC5zcGVjaWVzXSA9PT0gQnVmZmVyKSB7XG4gICAgLy8gRml4IHN1YmFycmF5KCkgaW4gRVMyMDE2LiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3MvYnVmZmVyL3B1bGwvOTdcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLCBTeW1ib2wuc3BlY2llcywge1xuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2VydFNpemUgKHNpemUpIHtcbiAgaWYgKHR5cGVvZiBzaXplICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3QgYmUgYSBudW1iZXInKVxuICB9IGVsc2UgaWYgKHNpemUgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1wic2l6ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIG5lZ2F0aXZlJylcbiAgfVxufVxuXG5mdW5jdGlvbiBhbGxvYyAodGhhdCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgYXNzZXJ0U2l6ZShzaXplKVxuICBpZiAoc2l6ZSA8PSAwKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxuICB9XG4gIGlmIChmaWxsICE9PSB1bmRlZmluZWQpIHtcbiAgICAvLyBPbmx5IHBheSBhdHRlbnRpb24gdG8gZW5jb2RpbmcgaWYgaXQncyBhIHN0cmluZy4gVGhpc1xuICAgIC8vIHByZXZlbnRzIGFjY2lkZW50YWxseSBzZW5kaW5nIGluIGEgbnVtYmVyIHRoYXQgd291bGRcbiAgICAvLyBiZSBpbnRlcnByZXR0ZWQgYXMgYSBzdGFydCBvZmZzZXQuXG4gICAgcmV0dXJuIHR5cGVvZiBlbmNvZGluZyA9PT0gJ3N0cmluZydcbiAgICAgID8gY3JlYXRlQnVmZmVyKHRoYXQsIHNpemUpLmZpbGwoZmlsbCwgZW5jb2RpbmcpXG4gICAgICA6IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwpXG4gIH1cbiAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqIGFsbG9jKHNpemVbLCBmaWxsWywgZW5jb2RpbmddXSlcbiAqKi9cbkJ1ZmZlci5hbGxvYyA9IGZ1bmN0aW9uIChzaXplLCBmaWxsLCBlbmNvZGluZykge1xuICByZXR1cm4gYWxsb2MobnVsbCwgc2l6ZSwgZmlsbCwgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGFsbG9jVW5zYWZlICh0aGF0LCBzaXplKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgdGhhdCA9IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplIDwgMCA/IDAgOiBjaGVja2VkKHNpemUpIHwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICB0aGF0W2ldID0gMFxuICAgIH1cbiAgfVxuICByZXR1cm4gdGhhdFxufVxuXG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gQnVmZmVyKG51bSksIGJ5IGRlZmF1bHQgY3JlYXRlcyBhIG5vbi16ZXJvLWZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG4vKipcbiAqIEVxdWl2YWxlbnQgdG8gU2xvd0J1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICovXG5CdWZmZXIuYWxsb2NVbnNhZmVTbG93ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgcmV0dXJuIGFsbG9jVW5zYWZlKG51bGwsIHNpemUpXG59XG5cbmZ1bmN0aW9uIGZyb21TdHJpbmcgKHRoYXQsIHN0cmluZywgZW5jb2RpbmcpIHtcbiAgaWYgKHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycgfHwgZW5jb2RpbmcgPT09ICcnKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgfVxuXG4gIGlmICghQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKVxuICB9XG5cbiAgdmFyIGxlbmd0aCA9IGJ5dGVMZW5ndGgoc3RyaW5nLCBlbmNvZGluZykgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuXG4gIHZhciBhY3R1YWwgPSB0aGF0LndyaXRlKHN0cmluZywgZW5jb2RpbmcpXG5cbiAgaWYgKGFjdHVhbCAhPT0gbGVuZ3RoKSB7XG4gICAgLy8gV3JpdGluZyBhIGhleCBzdHJpbmcsIGZvciBleGFtcGxlLCB0aGF0IGNvbnRhaW5zIGludmFsaWQgY2hhcmFjdGVycyB3aWxsXG4gICAgLy8gY2F1c2UgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgaW52YWxpZCBjaGFyYWN0ZXIgdG8gYmUgaWdub3JlZC4gKGUuZy5cbiAgICAvLyAnYWJ4eGNkJyB3aWxsIGJlIHRyZWF0ZWQgYXMgJ2FiJylcbiAgICB0aGF0ID0gdGhhdC5zbGljZSgwLCBhY3R1YWwpXG4gIH1cblxuICByZXR1cm4gdGhhdFxufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlMaWtlICh0aGF0LCBhcnJheSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoIDwgMCA/IDAgOiBjaGVja2VkKGFycmF5Lmxlbmd0aCkgfCAwXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuZ3RoKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGhhdFtpXSA9IGFycmF5W2ldICYgMjU1XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5QnVmZmVyICh0aGF0LCBhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGFycmF5LmJ5dGVMZW5ndGggLy8gdGhpcyB0aHJvd3MgaWYgYGFycmF5YCBpcyBub3QgYSB2YWxpZCBBcnJheUJ1ZmZlclxuXG4gIGlmIChieXRlT2Zmc2V0IDwgMCB8fCBhcnJheS5ieXRlTGVuZ3RoIDwgYnl0ZU9mZnNldCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdvZmZzZXRcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQgKyAobGVuZ3RoIHx8IDApKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1xcJ2xlbmd0aFxcJyBpcyBvdXQgb2YgYm91bmRzJylcbiAgfVxuXG4gIGlmIChieXRlT2Zmc2V0ID09PSB1bmRlZmluZWQgJiYgbGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5KVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldClcbiAgfSBlbHNlIHtcbiAgICBhcnJheSA9IG5ldyBVaW50OEFycmF5KGFycmF5LCBieXRlT2Zmc2V0LCBsZW5ndGgpXG4gIH1cblxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBSZXR1cm4gYW4gYXVnbWVudGVkIGBVaW50OEFycmF5YCBpbnN0YW5jZSwgZm9yIGJlc3QgcGVyZm9ybWFuY2VcbiAgICB0aGF0ID0gYXJyYXlcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgdGhhdCA9IGZyb21BcnJheUxpa2UodGhhdCwgYXJyYXkpXG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbU9iamVjdCAodGhhdCwgb2JqKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIob2JqKSkge1xuICAgIHZhciBsZW4gPSBjaGVja2VkKG9iai5sZW5ndGgpIHwgMFxuICAgIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgbGVuKVxuXG4gICAgaWYgKHRoYXQubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhhdFxuICAgIH1cblxuICAgIG9iai5jb3B5KHRoYXQsIDAsIDAsIGxlbilcbiAgICByZXR1cm4gdGhhdFxuICB9XG5cbiAgaWYgKG9iaikge1xuICAgIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8ICdsZW5ndGgnIGluIG9iaikge1xuICAgICAgaWYgKHR5cGVvZiBvYmoubGVuZ3RoICE9PSAnbnVtYmVyJyB8fCBpc25hbihvYmoubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm4gY3JlYXRlQnVmZmVyKHRoYXQsIDApXG4gICAgICB9XG4gICAgICByZXR1cm4gZnJvbUFycmF5TGlrZSh0aGF0LCBvYmopXG4gICAgfVxuXG4gICAgaWYgKG9iai50eXBlID09PSAnQnVmZmVyJyAmJiBpc0FycmF5KG9iai5kYXRhKSkge1xuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqLmRhdGEpXG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcignRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LicpXG59XG5cbmZ1bmN0aW9uIGNoZWNrZWQgKGxlbmd0aCkge1xuICAvLyBOb3RlOiBjYW5ub3QgdXNlIGBsZW5ndGggPCBrTWF4TGVuZ3RoKClgIGhlcmUgYmVjYXVzZSB0aGF0IGZhaWxzIHdoZW5cbiAgLy8gbGVuZ3RoIGlzIE5hTiAod2hpY2ggaXMgb3RoZXJ3aXNlIGNvZXJjZWQgdG8gemVyby4pXG4gIGlmIChsZW5ndGggPj0ga01heExlbmd0aCgpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0F0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpemU6IDB4JyArIGtNYXhMZW5ndGgoKS50b1N0cmluZygxNikgKyAnIGJ5dGVzJylcbiAgfVxuICByZXR1cm4gbGVuZ3RoIHwgMFxufVxuXG5mdW5jdGlvbiBTbG93QnVmZmVyIChsZW5ndGgpIHtcbiAgaWYgKCtsZW5ndGggIT0gbGVuZ3RoKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZXFlcWVxXG4gICAgbGVuZ3RoID0gMFxuICB9XG4gIHJldHVybiBCdWZmZXIuYWxsb2MoK2xlbmd0aClcbn1cblxuQnVmZmVyLmlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIgKGIpIHtcbiAgcmV0dXJuICEhKGIgIT0gbnVsbCAmJiBiLl9pc0J1ZmZlcilcbn1cblxuQnVmZmVyLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlIChhLCBiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGEpIHx8ICFCdWZmZXIuaXNCdWZmZXIoYikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudHMgbXVzdCBiZSBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChhID09PSBiKSByZXR1cm4gMFxuXG4gIHZhciB4ID0gYS5sZW5ndGhcbiAgdmFyIHkgPSBiLmxlbmd0aFxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBNYXRoLm1pbih4LCB5KTsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKGFbaV0gIT09IGJbaV0pIHtcbiAgICAgIHggPSBhW2ldXG4gICAgICB5ID0gYltpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbkJ1ZmZlci5pc0VuY29kaW5nID0gZnVuY3Rpb24gaXNFbmNvZGluZyAoZW5jb2RpbmcpIHtcbiAgc3dpdGNoIChTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdoZXgnOlxuICAgIGNhc2UgJ3V0ZjgnOlxuICAgIGNhc2UgJ3V0Zi04JzpcbiAgICBjYXNlICdhc2NpaSc6XG4gICAgY2FzZSAnbGF0aW4xJzpcbiAgICBjYXNlICdiaW5hcnknOlxuICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgY2FzZSAndWNzMic6XG4gICAgY2FzZSAndWNzLTInOlxuICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgIHJldHVybiB0cnVlXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbkJ1ZmZlci5jb25jYXQgPSBmdW5jdGlvbiBjb25jYXQgKGxpc3QsIGxlbmd0aCkge1xuICBpZiAoIWlzQXJyYXkobGlzdCkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICB9XG5cbiAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIEJ1ZmZlci5hbGxvYygwKVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbGVuZ3RoID0gMFxuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgICBsZW5ndGggKz0gbGlzdFtpXS5sZW5ndGhcbiAgICB9XG4gIH1cblxuICB2YXIgYnVmZmVyID0gQnVmZmVyLmFsbG9jVW5zYWZlKGxlbmd0aClcbiAgdmFyIHBvcyA9IDBcbiAgZm9yIChpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgYnVmID0gbGlzdFtpXVxuICAgIGlmICghQnVmZmVyLmlzQnVmZmVyKGJ1ZikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wibGlzdFwiIGFyZ3VtZW50IG11c3QgYmUgYW4gQXJyYXkgb2YgQnVmZmVycycpXG4gICAgfVxuICAgIGJ1Zi5jb3B5KGJ1ZmZlciwgcG9zKVxuICAgIHBvcyArPSBidWYubGVuZ3RoXG4gIH1cbiAgcmV0dXJuIGJ1ZmZlclxufVxuXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmIChCdWZmZXIuaXNCdWZmZXIoc3RyaW5nKSkge1xuICAgIHJldHVybiBzdHJpbmcubGVuZ3RoXG4gIH1cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgICAgKEFycmF5QnVmZmVyLmlzVmlldyhzdHJpbmcpIHx8IHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSkge1xuICAgIHJldHVybiBzdHJpbmcuYnl0ZUxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nXG4gIH1cblxuICB2YXIgbGVuID0gc3RyaW5nLmxlbmd0aFxuICBpZiAobGVuID09PSAwKSByZXR1cm4gMFxuXG4gIC8vIFVzZSBhIGZvciBsb29wIHRvIGF2b2lkIHJlY3Vyc2lvblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsZW5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIGxlbiAqIDJcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBsZW4gPj4+IDFcbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRUb0J5dGVzKHN0cmluZykubGVuZ3RoXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHJldHVybiB1dGY4VG9CeXRlcyhzdHJpbmcpLmxlbmd0aCAvLyBhc3N1bWUgdXRmOFxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuQnVmZmVyLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5cbmZ1bmN0aW9uIHNsb3dUb1N0cmluZyAoZW5jb2RpbmcsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcblxuICAvLyBObyBuZWVkIHRvIHZlcmlmeSB0aGF0IFwidGhpcy5sZW5ndGggPD0gTUFYX1VJTlQzMlwiIHNpbmNlIGl0J3MgYSByZWFkLW9ubHlcbiAgLy8gcHJvcGVydHkgb2YgYSB0eXBlZCBhcnJheS5cblxuICAvLyBUaGlzIGJlaGF2ZXMgbmVpdGhlciBsaWtlIFN0cmluZyBub3IgVWludDhBcnJheSBpbiB0aGF0IHdlIHNldCBzdGFydC9lbmRcbiAgLy8gdG8gdGhlaXIgdXBwZXIvbG93ZXIgYm91bmRzIGlmIHRoZSB2YWx1ZSBwYXNzZWQgaXMgb3V0IG9mIHJhbmdlLlxuICAvLyB1bmRlZmluZWQgaXMgaGFuZGxlZCBzcGVjaWFsbHkgYXMgcGVyIEVDTUEtMjYyIDZ0aCBFZGl0aW9uLFxuICAvLyBTZWN0aW9uIDEzLjMuMy43IFJ1bnRpbWUgU2VtYW50aWNzOiBLZXllZEJpbmRpbmdJbml0aWFsaXphdGlvbi5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQgfHwgc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgPSAwXG4gIH1cbiAgLy8gUmV0dXJuIGVhcmx5IGlmIHN0YXJ0ID4gdGhpcy5sZW5ndGguIERvbmUgaGVyZSB0byBwcmV2ZW50IHBvdGVudGlhbCB1aW50MzJcbiAgLy8gY29lcmNpb24gZmFpbCBiZWxvdy5cbiAgaWYgKHN0YXJ0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCB8fCBlbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoZW5kIDw9IDApIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIC8vIEZvcmNlIGNvZXJzaW9uIHRvIHVpbnQzMi4gVGhpcyB3aWxsIGFsc28gY29lcmNlIGZhbHNleS9OYU4gdmFsdWVzIHRvIDAuXG4gIGVuZCA+Pj49IDBcbiAgc3RhcnQgPj4+PSAwXG5cbiAgaWYgKGVuZCA8PSBzdGFydCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2hleCc6XG4gICAgICAgIHJldHVybiBoZXhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgICAgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdhc2NpaSc6XG4gICAgICAgIHJldHVybiBhc2NpaVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGF0aW4xU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYmFzZTY0JzpcbiAgICAgICAgcmV0dXJuIGJhc2U2NFNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiB1dGYxNmxlU2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgICAgIGVuY29kaW5nID0gKGVuY29kaW5nICsgJycpLnRvTG93ZXJDYXNlKClcbiAgICAgICAgbG93ZXJlZENhc2UgPSB0cnVlXG4gICAgfVxuICB9XG59XG5cbi8vIFRoZSBwcm9wZXJ0eSBpcyB1c2VkIGJ5IGBCdWZmZXIuaXNCdWZmZXJgIGFuZCBgaXMtYnVmZmVyYCAoaW4gU2FmYXJpIDUtNykgdG8gZGV0ZWN0XG4vLyBCdWZmZXIgaW5zdGFuY2VzLlxuQnVmZmVyLnByb3RvdHlwZS5faXNCdWZmZXIgPSB0cnVlXG5cbmZ1bmN0aW9uIHN3YXAgKGIsIG4sIG0pIHtcbiAgdmFyIGkgPSBiW25dXG4gIGJbbl0gPSBiW21dXG4gIGJbbV0gPSBpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDE2ID0gZnVuY3Rpb24gc3dhcDE2ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSAyICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiAxNi1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgMSlcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAzMiA9IGZ1bmN0aW9uIHN3YXAzMiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgNCAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDMpXG4gICAgc3dhcCh0aGlzLCBpICsgMSwgaSArIDIpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQgPSBmdW5jdGlvbiBzd2FwNjQgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDggIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDgpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyA3KVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyA2KVxuICAgIHN3YXAodGhpcywgaSArIDIsIGkgKyA1KVxuICAgIHN3YXAodGhpcywgaSArIDMsIGkgKyA0KVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCB8IDBcbiAgaWYgKGxlbmd0aCA9PT0gMCkgcmV0dXJuICcnXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSByZXR1cm4gdXRmOFNsaWNlKHRoaXMsIDAsIGxlbmd0aClcbiAgcmV0dXJuIHNsb3dUb1N0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gZXF1YWxzIChiKSB7XG4gIGlmICghQnVmZmVyLmlzQnVmZmVyKGIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyJylcbiAgaWYgKHRoaXMgPT09IGIpIHJldHVybiB0cnVlXG4gIHJldHVybiBCdWZmZXIuY29tcGFyZSh0aGlzLCBiKSA9PT0gMFxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbiBpbnNwZWN0ICgpIHtcbiAgdmFyIHN0ciA9ICcnXG4gIHZhciBtYXggPSBleHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTXG4gIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICBzdHIgPSB0aGlzLnRvU3RyaW5nKCdoZXgnLCAwLCBtYXgpLm1hdGNoKC8uezJ9L2cpLmpvaW4oJyAnKVxuICAgIGlmICh0aGlzLmxlbmd0aCA+IG1heCkgc3RyICs9ICcgLi4uICdcbiAgfVxuICByZXR1cm4gJzxCdWZmZXIgJyArIHN0ciArICc+J1xufVxuXG5CdWZmZXIucHJvdG90eXBlLmNvbXBhcmUgPSBmdW5jdGlvbiBjb21wYXJlICh0YXJnZXQsIHN0YXJ0LCBlbmQsIHRoaXNTdGFydCwgdGhpc0VuZCkge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcih0YXJnZXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIH1cblxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIGlmIChlbmQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuZCA9IHRhcmdldCA/IHRhcmdldC5sZW5ndGggOiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc1N0YXJ0ID0gMFxuICB9XG4gIGlmICh0aGlzRW5kID09PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzRW5kID0gdGhpcy5sZW5ndGhcbiAgfVxuXG4gIGlmIChzdGFydCA8IDAgfHwgZW5kID4gdGFyZ2V0Lmxlbmd0aCB8fCB0aGlzU3RhcnQgPCAwIHx8IHRoaXNFbmQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdvdXQgb2YgcmFuZ2UgaW5kZXgnKVxuICB9XG5cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kICYmIHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgaWYgKHRoaXNTdGFydCA+PSB0aGlzRW5kKSB7XG4gICAgcmV0dXJuIC0xXG4gIH1cbiAgaWYgKHN0YXJ0ID49IGVuZCkge1xuICAgIHJldHVybiAxXG4gIH1cblxuICBzdGFydCA+Pj49IDBcbiAgZW5kID4+Pj0gMFxuICB0aGlzU3RhcnQgPj4+PSAwXG4gIHRoaXNFbmQgPj4+PSAwXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCkgcmV0dXJuIDBcblxuICB2YXIgeCA9IHRoaXNFbmQgLSB0aGlzU3RhcnRcbiAgdmFyIHkgPSBlbmQgLSBzdGFydFxuICB2YXIgbGVuID0gTWF0aC5taW4oeCwgeSlcblxuICB2YXIgdGhpc0NvcHkgPSB0aGlzLnNsaWNlKHRoaXNTdGFydCwgdGhpc0VuZClcbiAgdmFyIHRhcmdldENvcHkgPSB0YXJnZXQuc2xpY2Uoc3RhcnQsIGVuZClcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgaWYgKHRoaXNDb3B5W2ldICE9PSB0YXJnZXRDb3B5W2ldKSB7XG4gICAgICB4ID0gdGhpc0NvcHlbaV1cbiAgICAgIHkgPSB0YXJnZXRDb3B5W2ldXG4gICAgICBicmVha1xuICAgIH1cbiAgfVxuXG4gIGlmICh4IDwgeSkgcmV0dXJuIC0xXG4gIGlmICh5IDwgeCkgcmV0dXJuIDFcbiAgcmV0dXJuIDBcbn1cblxuLy8gRmluZHMgZWl0aGVyIHRoZSBmaXJzdCBpbmRleCBvZiBgdmFsYCBpbiBgYnVmZmVyYCBhdCBvZmZzZXQgPj0gYGJ5dGVPZmZzZXRgLFxuLy8gT1IgdGhlIGxhc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0IDw9IGBieXRlT2Zmc2V0YC5cbi8vXG4vLyBBcmd1bWVudHM6XG4vLyAtIGJ1ZmZlciAtIGEgQnVmZmVyIHRvIHNlYXJjaFxuLy8gLSB2YWwgLSBhIHN0cmluZywgQnVmZmVyLCBvciBudW1iZXJcbi8vIC0gYnl0ZU9mZnNldCAtIGFuIGluZGV4IGludG8gYGJ1ZmZlcmA7IHdpbGwgYmUgY2xhbXBlZCB0byBhbiBpbnQzMlxuLy8gLSBlbmNvZGluZyAtIGFuIG9wdGlvbmFsIGVuY29kaW5nLCByZWxldmFudCBpcyB2YWwgaXMgYSBzdHJpbmdcbi8vIC0gZGlyIC0gdHJ1ZSBmb3IgaW5kZXhPZiwgZmFsc2UgZm9yIGxhc3RJbmRleE9mXG5mdW5jdGlvbiBiaWRpcmVjdGlvbmFsSW5kZXhPZiAoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgLy8gRW1wdHkgYnVmZmVyIG1lYW5zIG5vIG1hdGNoXG4gIGlmIChidWZmZXIubGVuZ3RoID09PSAwKSByZXR1cm4gLTFcblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldFxuICBpZiAodHlwZW9mIGJ5dGVPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBieXRlT2Zmc2V0XG4gICAgYnl0ZU9mZnNldCA9IDBcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0ID4gMHg3ZmZmZmZmZikge1xuICAgIGJ5dGVPZmZzZXQgPSAweDdmZmZmZmZmXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA8IC0weDgwMDAwMDAwKSB7XG4gICAgYnl0ZU9mZnNldCA9IC0weDgwMDAwMDAwXG4gIH1cbiAgYnl0ZU9mZnNldCA9ICtieXRlT2Zmc2V0ICAvLyBDb2VyY2UgdG8gTnVtYmVyLlxuICBpZiAoaXNOYU4oYnl0ZU9mZnNldCkpIHtcbiAgICAvLyBieXRlT2Zmc2V0OiBpdCBpdCdzIHVuZGVmaW5lZCwgbnVsbCwgTmFOLCBcImZvb1wiLCBldGMsIHNlYXJjaCB3aG9sZSBidWZmZXJcbiAgICBieXRlT2Zmc2V0ID0gZGlyID8gMCA6IChidWZmZXIubGVuZ3RoIC0gMSlcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSBieXRlT2Zmc2V0OiBuZWdhdGl2ZSBvZmZzZXRzIHN0YXJ0IGZyb20gdGhlIGVuZCBvZiB0aGUgYnVmZmVyXG4gIGlmIChieXRlT2Zmc2V0IDwgMCkgYnl0ZU9mZnNldCA9IGJ1ZmZlci5sZW5ndGggKyBieXRlT2Zmc2V0XG4gIGlmIChieXRlT2Zmc2V0ID49IGJ1ZmZlci5sZW5ndGgpIHtcbiAgICBpZiAoZGlyKSByZXR1cm4gLTFcbiAgICBlbHNlIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoIC0gMVxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAwKSB7XG4gICAgaWYgKGRpcikgYnl0ZU9mZnNldCA9IDBcbiAgICBlbHNlIHJldHVybiAtMVxuICB9XG5cbiAgLy8gTm9ybWFsaXplIHZhbFxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBCdWZmZXIuZnJvbSh2YWwsIGVuY29kaW5nKVxuICB9XG5cbiAgLy8gRmluYWxseSwgc2VhcmNoIGVpdGhlciBpbmRleE9mIChpZiBkaXIgaXMgdHJ1ZSkgb3IgbGFzdEluZGV4T2ZcbiAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWwpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlOiBsb29raW5nIGZvciBlbXB0eSBzdHJpbmcvYnVmZmVyIGFsd2F5cyBmYWlsc1xuICAgIGlmICh2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5SW5kZXhPZihidWZmZXIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJykge1xuICAgIHZhbCA9IHZhbCAmIDB4RkYgLy8gU2VhcmNoIGZvciBhIGJ5dGUgdmFsdWUgWzAtMjU1XVxuICAgIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCAmJlxuICAgICAgICB0eXBlb2YgVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKGRpcikge1xuICAgICAgICByZXR1cm4gVWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mLmNhbGwoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCBbIHZhbCBdLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKVxuICB9XG5cbiAgdGhyb3cgbmV3IFR5cGVFcnJvcigndmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyJylcbn1cblxuZnVuY3Rpb24gYXJyYXlJbmRleE9mIChhcnIsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcikge1xuICB2YXIgaW5kZXhTaXplID0gMVxuICB2YXIgYXJyTGVuZ3RoID0gYXJyLmxlbmd0aFxuICB2YXIgdmFsTGVuZ3RoID0gdmFsLmxlbmd0aFxuXG4gIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSBTdHJpbmcoZW5jb2RpbmcpLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoZW5jb2RpbmcgPT09ICd1Y3MyJyB8fCBlbmNvZGluZyA9PT0gJ3Vjcy0yJyB8fFxuICAgICAgICBlbmNvZGluZyA9PT0gJ3V0ZjE2bGUnIHx8IGVuY29kaW5nID09PSAndXRmLTE2bGUnKSB7XG4gICAgICBpZiAoYXJyLmxlbmd0aCA8IDIgfHwgdmFsLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgcmV0dXJuIC0xXG4gICAgICB9XG4gICAgICBpbmRleFNpemUgPSAyXG4gICAgICBhcnJMZW5ndGggLz0gMlxuICAgICAgdmFsTGVuZ3RoIC89IDJcbiAgICAgIGJ5dGVPZmZzZXQgLz0gMlxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWQgKGJ1ZiwgaSkge1xuICAgIGlmIChpbmRleFNpemUgPT09IDEpIHtcbiAgICAgIHJldHVybiBidWZbaV1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGJ1Zi5yZWFkVUludDE2QkUoaSAqIGluZGV4U2l6ZSlcbiAgICB9XG4gIH1cblxuICB2YXIgaVxuICBpZiAoZGlyKSB7XG4gICAgdmFyIGZvdW5kSW5kZXggPSAtMVxuICAgIGZvciAoaSA9IGJ5dGVPZmZzZXQ7IGkgPCBhcnJMZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHJlYWQoYXJyLCBpKSA9PT0gcmVhZCh2YWwsIGZvdW5kSW5kZXggPT09IC0xID8gMCA6IGkgLSBmb3VuZEluZGV4KSkge1xuICAgICAgICBpZiAoZm91bmRJbmRleCA9PT0gLTEpIGZvdW5kSW5kZXggPSBpXG4gICAgICAgIGlmIChpIC0gZm91bmRJbmRleCArIDEgPT09IHZhbExlbmd0aCkgcmV0dXJuIGZvdW5kSW5kZXggKiBpbmRleFNpemVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChmb3VuZEluZGV4ICE9PSAtMSkgaSAtPSBpIC0gZm91bmRJbmRleFxuICAgICAgICBmb3VuZEluZGV4ID0gLTFcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGJ5dGVPZmZzZXQgKyB2YWxMZW5ndGggPiBhcnJMZW5ndGgpIGJ5dGVPZmZzZXQgPSBhcnJMZW5ndGggLSB2YWxMZW5ndGhcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpID49IDA7IGktLSkge1xuICAgICAgdmFyIGZvdW5kID0gdHJ1ZVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWxMZW5ndGg7IGorKykge1xuICAgICAgICBpZiAocmVhZChhcnIsIGkgKyBqKSAhPT0gcmVhZCh2YWwsIGopKSB7XG4gICAgICAgICAgZm91bmQgPSBmYWxzZVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChmb3VuZCkgcmV0dXJuIGlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbmNsdWRlcyA9IGZ1bmN0aW9uIGluY2x1ZGVzICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiB0aGlzLmluZGV4T2YodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykgIT09IC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIGluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIHRydWUpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbiBsYXN0SW5kZXhPZiAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gYmlkaXJlY3Rpb25hbEluZGV4T2YodGhpcywgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZmFsc2UpXG59XG5cbmZ1bmN0aW9uIGhleFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgb2Zmc2V0ID0gTnVtYmVyKG9mZnNldCkgfHwgMFxuICB2YXIgcmVtYWluaW5nID0gYnVmLmxlbmd0aCAtIG9mZnNldFxuICBpZiAoIWxlbmd0aCkge1xuICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICB9IGVsc2Uge1xuICAgIGxlbmd0aCA9IE51bWJlcihsZW5ndGgpXG4gICAgaWYgKGxlbmd0aCA+IHJlbWFpbmluZykge1xuICAgICAgbGVuZ3RoID0gcmVtYWluaW5nXG4gICAgfVxuICB9XG5cbiAgLy8gbXVzdCBiZSBhbiBldmVuIG51bWJlciBvZiBkaWdpdHNcbiAgdmFyIHN0ckxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKHN0ckxlbiAlIDIgIT09IDApIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgaGV4IHN0cmluZycpXG5cbiAgaWYgKGxlbmd0aCA+IHN0ckxlbiAvIDIpIHtcbiAgICBsZW5ndGggPSBzdHJMZW4gLyAyXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIHZhciBwYXJzZWQgPSBwYXJzZUludChzdHJpbmcuc3Vic3RyKGkgKiAyLCAyKSwgMTYpXG4gICAgaWYgKGlzTmFOKHBhcnNlZCkpIHJldHVybiBpXG4gICAgYnVmW29mZnNldCArIGldID0gcGFyc2VkXG4gIH1cbiAgcmV0dXJuIGlcbn1cblxuZnVuY3Rpb24gdXRmOFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIodXRmOFRvQnl0ZXMoc3RyaW5nLCBidWYubGVuZ3RoIC0gb2Zmc2V0KSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYXNjaWlXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKGFzY2lpVG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiBsYXRpbjFXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBhc2NpaVdyaXRlKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gYmFzZTY0V3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihiYXNlNjRUb0J5dGVzKHN0cmluZyksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIHVjczJXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjE2bGVUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiB3cml0ZSAoc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCwgZW5jb2RpbmcpIHtcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZylcbiAgaWYgKG9mZnNldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZW5jb2RpbmcgPSAndXRmOCdcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgZW5jb2RpbmcpXG4gIH0gZWxzZSBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICBlbmNvZGluZyA9IG9mZnNldFxuICAgIGxlbmd0aCA9IHRoaXMubGVuZ3RoXG4gICAgb2Zmc2V0ID0gMFxuICAvLyBCdWZmZXIjd3JpdGUoc3RyaW5nLCBvZmZzZXRbLCBsZW5ndGhdWywgZW5jb2RpbmddKVxuICB9IGVsc2UgaWYgKGlzRmluaXRlKG9mZnNldCkpIHtcbiAgICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gICAgaWYgKGlzRmluaXRlKGxlbmd0aCkpIHtcbiAgICAgIGxlbmd0aCA9IGxlbmd0aCB8IDBcbiAgICAgIGlmIChlbmNvZGluZyA9PT0gdW5kZWZpbmVkKSBlbmNvZGluZyA9ICd1dGY4J1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmNvZGluZyA9IGxlbmd0aFxuICAgICAgbGVuZ3RoID0gdW5kZWZpbmVkXG4gICAgfVxuICAvLyBsZWdhY3kgd3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0LCBsZW5ndGgpIC0gcmVtb3ZlIGluIHYwLjEzXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0J1ZmZlci53cml0ZShzdHJpbmcsIGVuY29kaW5nLCBvZmZzZXRbLCBsZW5ndGhdKSBpcyBubyBsb25nZXIgc3VwcG9ydGVkJ1xuICAgIClcbiAgfVxuXG4gIHZhciByZW1haW5pbmcgPSB0aGlzLmxlbmd0aCAtIG9mZnNldFxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQgfHwgbGVuZ3RoID4gcmVtYWluaW5nKSBsZW5ndGggPSByZW1haW5pbmdcblxuICBpZiAoKHN0cmluZy5sZW5ndGggPiAwICYmIChsZW5ndGggPCAwIHx8IG9mZnNldCA8IDApKSB8fCBvZmZzZXQgPiB0aGlzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIHdyaXRlIG91dHNpZGUgYnVmZmVyIGJvdW5kcycpXG4gIH1cblxuICBpZiAoIWVuY29kaW5nKSBlbmNvZGluZyA9ICd1dGY4J1xuXG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG4gIGZvciAoOzspIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIC8vIFdhcm5pbmc6IG1heExlbmd0aCBub3QgdGFrZW4gaW50byBhY2NvdW50IGluIGJhc2U2NFdyaXRlXG4gICAgICAgIHJldHVybiBiYXNlNjRXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdWNzMldyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9ICgnJyArIGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uIHRvSlNPTiAoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0J1ZmZlcicsXG4gICAgZGF0YTogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyIHx8IHRoaXMsIDApXG4gIH1cbn1cblxuZnVuY3Rpb24gYmFzZTY0U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBpZiAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBidWYubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1ZilcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZTY0LmZyb21CeXRlQXJyYXkoYnVmLnNsaWNlKHN0YXJ0LCBlbmQpKVxuICB9XG59XG5cbmZ1bmN0aW9uIHV0ZjhTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcbiAgdmFyIHJlcyA9IFtdXG5cbiAgdmFyIGkgPSBzdGFydFxuICB3aGlsZSAoaSA8IGVuZCkge1xuICAgIHZhciBmaXJzdEJ5dGUgPSBidWZbaV1cbiAgICB2YXIgY29kZVBvaW50ID0gbnVsbFxuICAgIHZhciBieXRlc1BlclNlcXVlbmNlID0gKGZpcnN0Qnl0ZSA+IDB4RUYpID8gNFxuICAgICAgOiAoZmlyc3RCeXRlID4gMHhERikgPyAzXG4gICAgICA6IChmaXJzdEJ5dGUgPiAweEJGKSA/IDJcbiAgICAgIDogMVxuXG4gICAgaWYgKGkgKyBieXRlc1BlclNlcXVlbmNlIDw9IGVuZCkge1xuICAgICAgdmFyIHNlY29uZEJ5dGUsIHRoaXJkQnl0ZSwgZm91cnRoQnl0ZSwgdGVtcENvZGVQb2ludFxuXG4gICAgICBzd2l0Y2ggKGJ5dGVzUGVyU2VxdWVuY2UpIHtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGlmIChmaXJzdEJ5dGUgPCAweDgwKSB7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBmaXJzdEJ5dGVcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHgxRikgPDwgMHg2IHwgKHNlY29uZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCkge1xuICAgICAgICAgICAgdGVtcENvZGVQb2ludCA9IChmaXJzdEJ5dGUgJiAweEYpIDw8IDB4QyB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKHRoaXJkQnl0ZSAmIDB4M0YpXG4gICAgICAgICAgICBpZiAodGVtcENvZGVQb2ludCA+IDB4N0ZGICYmICh0ZW1wQ29kZVBvaW50IDwgMHhEODAwIHx8IHRlbXBDb2RlUG9pbnQgPiAweERGRkYpKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIHNlY29uZEJ5dGUgPSBidWZbaSArIDFdXG4gICAgICAgICAgdGhpcmRCeXRlID0gYnVmW2kgKyAyXVxuICAgICAgICAgIGZvdXJ0aEJ5dGUgPSBidWZbaSArIDNdXG4gICAgICAgICAgaWYgKChzZWNvbmRCeXRlICYgMHhDMCkgPT09IDB4ODAgJiYgKHRoaXJkQnl0ZSAmIDB4QzApID09PSAweDgwICYmIChmb3VydGhCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweDEyIHwgKHNlY29uZEJ5dGUgJiAweDNGKSA8PCAweEMgfCAodGhpcmRCeXRlICYgMHgzRikgPDwgMHg2IHwgKGZvdXJ0aEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweEZGRkYgJiYgdGVtcENvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICAgICAgICAgIGNvZGVQb2ludCA9IHRlbXBDb2RlUG9pbnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGVQb2ludCA9PT0gbnVsbCkge1xuICAgICAgLy8gd2UgZGlkIG5vdCBnZW5lcmF0ZSBhIHZhbGlkIGNvZGVQb2ludCBzbyBpbnNlcnQgYVxuICAgICAgLy8gcmVwbGFjZW1lbnQgY2hhciAoVStGRkZEKSBhbmQgYWR2YW5jZSBvbmx5IDEgYnl0ZVxuICAgICAgY29kZVBvaW50ID0gMHhGRkZEXG4gICAgICBieXRlc1BlclNlcXVlbmNlID0gMVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50ID4gMHhGRkZGKSB7XG4gICAgICAvLyBlbmNvZGUgdG8gdXRmMTYgKHN1cnJvZ2F0ZSBwYWlyIGRhbmNlKVxuICAgICAgY29kZVBvaW50IC09IDB4MTAwMDBcbiAgICAgIHJlcy5wdXNoKGNvZGVQb2ludCA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMClcbiAgICAgIGNvZGVQb2ludCA9IDB4REMwMCB8IGNvZGVQb2ludCAmIDB4M0ZGXG4gICAgfVxuXG4gICAgcmVzLnB1c2goY29kZVBvaW50KVxuICAgIGkgKz0gYnl0ZXNQZXJTZXF1ZW5jZVxuICB9XG5cbiAgcmV0dXJuIGRlY29kZUNvZGVQb2ludHNBcnJheShyZXMpXG59XG5cbi8vIEJhc2VkIG9uIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIyNzQ3MjcyLzY4MDc0MiwgdGhlIGJyb3dzZXIgd2l0aFxuLy8gdGhlIGxvd2VzdCBsaW1pdCBpcyBDaHJvbWUsIHdpdGggMHgxMDAwMCBhcmdzLlxuLy8gV2UgZ28gMSBtYWduaXR1ZGUgbGVzcywgZm9yIHNhZmV0eVxudmFyIE1BWF9BUkdVTUVOVFNfTEVOR1RIID0gMHgxMDAwXG5cbmZ1bmN0aW9uIGRlY29kZUNvZGVQb2ludHNBcnJheSAoY29kZVBvaW50cykge1xuICB2YXIgbGVuID0gY29kZVBvaW50cy5sZW5ndGhcbiAgaWYgKGxlbiA8PSBNQVhfQVJHVU1FTlRTX0xFTkdUSCkge1xuICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZywgY29kZVBvaW50cykgLy8gYXZvaWQgZXh0cmEgc2xpY2UoKVxuICB9XG5cbiAgLy8gRGVjb2RlIGluIGNodW5rcyB0byBhdm9pZCBcImNhbGwgc3RhY2sgc2l6ZSBleGNlZWRlZFwiLlxuICB2YXIgcmVzID0gJydcbiAgdmFyIGkgPSAwXG4gIHdoaWxlIChpIDwgbGVuKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoXG4gICAgICBTdHJpbmcsXG4gICAgICBjb2RlUG9pbnRzLnNsaWNlKGksIGkgKz0gTUFYX0FSR1VNRU5UU19MRU5HVEgpXG4gICAgKVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlTbGljZSAoYnVmLCBzdGFydCwgZW5kKSB7XG4gIHZhciByZXQgPSAnJ1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICByZXQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShidWZbaV0gJiAweDdGKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gbGF0aW4xU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldKVxuICB9XG4gIHJldHVybiByZXRcbn1cblxuZnVuY3Rpb24gaGV4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gYnVmLmxlbmd0aFxuXG4gIGlmICghc3RhcnQgfHwgc3RhcnQgPCAwKSBzdGFydCA9IDBcbiAgaWYgKCFlbmQgfHwgZW5kIDwgMCB8fCBlbmQgPiBsZW4pIGVuZCA9IGxlblxuXG4gIHZhciBvdXQgPSAnJ1xuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIG91dCArPSB0b0hleChidWZbaV0pXG4gIH1cbiAgcmV0dXJuIG91dFxufVxuXG5mdW5jdGlvbiB1dGYxNmxlU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBidWYuc2xpY2Uoc3RhcnQsIGVuZClcbiAgdmFyIHJlcyA9ICcnXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICByZXMgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShieXRlc1tpXSArIGJ5dGVzW2kgKyAxXSAqIDI1NilcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgPSBmdW5jdGlvbiBzbGljZSAoc3RhcnQsIGVuZCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgc3RhcnQgPSB+fnN0YXJ0XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogfn5lbmRcblxuICBpZiAoc3RhcnQgPCAwKSB7XG4gICAgc3RhcnQgKz0gbGVuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIH0gZWxzZSBpZiAoc3RhcnQgPiBsZW4pIHtcbiAgICBzdGFydCA9IGxlblxuICB9XG5cbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDBcbiAgfSBlbHNlIGlmIChlbmQgPiBsZW4pIHtcbiAgICBlbmQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCBzdGFydCkgZW5kID0gc3RhcnRcblxuICB2YXIgbmV3QnVmXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIG5ld0J1ZiA9IHRoaXMuc3ViYXJyYXkoc3RhcnQsIGVuZClcbiAgICBuZXdCdWYuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICB9IGVsc2Uge1xuICAgIHZhciBzbGljZUxlbiA9IGVuZCAtIHN0YXJ0XG4gICAgbmV3QnVmID0gbmV3IEJ1ZmZlcihzbGljZUxlbiwgdW5kZWZpbmVkKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2VMZW47ICsraSkge1xuICAgICAgbmV3QnVmW2ldID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0J1ZlxufVxuXG4vKlxuICogTmVlZCB0byBtYWtlIHN1cmUgdGhhdCBidWZmZXIgaXNuJ3QgdHJ5aW5nIHRvIHdyaXRlIG91dCBvZiBib3VuZHMuXG4gKi9cbmZ1bmN0aW9uIGNoZWNrT2Zmc2V0IChvZmZzZXQsIGV4dCwgbGVuZ3RoKSB7XG4gIGlmICgob2Zmc2V0ICUgMSkgIT09IDAgfHwgb2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ29mZnNldCBpcyBub3QgdWludCcpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBsZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludExFID0gZnVuY3Rpb24gcmVhZFVJbnRMRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIGJ5dGVMZW5ndGgsIHRoaXMubGVuZ3RoKVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldF1cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHdoaWxlICgrK2kgPCBieXRlTGVuZ3RoICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgaV0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFID0gZnVuY3Rpb24gcmVhZFVJbnRCRSAob2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcbiAgfVxuXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF1cbiAgdmFyIG11bCA9IDFcbiAgd2hpbGUgKGJ5dGVMZW5ndGggPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1ieXRlTGVuZ3RoXSAqIG11bFxuICB9XG5cbiAgcmV0dXJuIHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OCA9IGZ1bmN0aW9uIHJlYWRVSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQxNkxFID0gZnVuY3Rpb24gcmVhZFVJbnQxNkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiB0aGlzW29mZnNldF0gfCAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gKHRoaXNbb2Zmc2V0XSA8PCA4KSB8IHRoaXNbb2Zmc2V0ICsgMV1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDMyTEUgPSBmdW5jdGlvbiByZWFkVUludDMyTEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA0LCB0aGlzLmxlbmd0aClcblxuICByZXR1cm4gKCh0aGlzW29mZnNldF0pIHxcbiAgICAgICh0aGlzW29mZnNldCArIDFdIDw8IDgpIHxcbiAgICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSkgK1xuICAgICAgKHRoaXNbb2Zmc2V0ICsgM10gKiAweDEwMDAwMDApXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkJFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gKiAweDEwMDAwMDApICtcbiAgICAoKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgdGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEUgPSBmdW5jdGlvbiByZWFkSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50QkUgPSBmdW5jdGlvbiByZWFkSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgaSA9IGJ5dGVMZW5ndGhcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgLS1pXVxuICB3aGlsZSAoaSA+IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyAtLWldICogbXVsXG4gIH1cbiAgbXVsICo9IDB4ODBcblxuICBpZiAodmFsID49IG11bCkgdmFsIC09IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50OCA9IGZ1bmN0aW9uIHJlYWRJbnQ4IChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMSwgdGhpcy5sZW5ndGgpXG4gIGlmICghKHRoaXNbb2Zmc2V0XSAmIDB4ODApKSByZXR1cm4gKHRoaXNbb2Zmc2V0XSlcbiAgcmV0dXJuICgoMHhmZiAtIHRoaXNbb2Zmc2V0XSArIDEpICogLTEpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDE2TEUgPSBmdW5jdGlvbiByZWFkSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbiAgcmV0dXJuICh2YWwgJiAweDgwMDApID8gdmFsIHwgMHhGRkZGMDAwMCA6IHZhbFxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkJFID0gZnVuY3Rpb24gcmVhZEludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0ICsgMV0gfCAodGhpc1tvZmZzZXRdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0pIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSA8PCAyNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRJbnQzMkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgMjQpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDgpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAzXSlcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRMRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdExFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCAyMywgNClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRmxvYXRCRSA9IGZ1bmN0aW9uIHJlYWRGbG9hdEJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFID0gZnVuY3Rpb24gcmVhZERvdWJsZUxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCB0cnVlLCA1MiwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlQkUgPSBmdW5jdGlvbiByZWFkRG91YmxlQkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCA4LCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIGllZWU3NTQucmVhZCh0aGlzLCBvZmZzZXQsIGZhbHNlLCA1MiwgOClcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImJ1ZmZlclwiIGFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXIgaW5zdGFuY2UnKVxuICBpZiAodmFsdWUgPiBtYXggfHwgdmFsdWUgPCBtaW4pIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgaXMgb3V0IG9mIGJvdW5kcycpXG4gIGlmIChvZmZzZXQgKyBleHQgPiBidWYubGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlVUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIG11bCA9IDFcbiAgdmFyIGkgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlVUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoIHwgMFxuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgdmFyIG1heEJ5dGVzID0gTWF0aC5wb3coMiwgOCAqIGJ5dGVMZW5ndGgpIC0gMVxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG1heEJ5dGVzLCAwKVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAodmFsdWUgLyBtdWwpICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIG9mZnNldCArIGJ5dGVMZW5ndGhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVVSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweGZmLCAwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIHJldHVybiBvZmZzZXQgKyAxXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDE2IChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZiArIHZhbHVlICsgMVxuICBmb3IgKHZhciBpID0gMCwgaiA9IE1hdGgubWluKGJ1Zi5sZW5ndGggLSBvZmZzZXQsIDIpOyBpIDwgajsgKytpKSB7XG4gICAgYnVmW29mZnNldCArIGldID0gKHZhbHVlICYgKDB4ZmYgPDwgKDggKiAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSkpKSA+Pj5cbiAgICAgIChsaXR0bGVFbmRpYW4gPyBpIDogMSAtIGkpICogOFxuICB9XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlVUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHhmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbmZ1bmN0aW9uIG9iamVjdFdyaXRlVUludDMyIChidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbikge1xuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmZmZmZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCA0KTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSA+Pj4gKGxpdHRsZUVuZGlhbiA/IGkgOiAzIC0gaSkgKiA4KSAmIDB4ZmZcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyTEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlVUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHhmZmZmZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRMRSA9IGZ1bmN0aW9uIHdyaXRlSW50TEUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSAwXG4gIHZhciBtdWwgPSAxXG4gIHZhciBzdWIgPSAwXG4gIHRoaXNbb2Zmc2V0XSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSAtIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnRCRSA9IGZ1bmN0aW9uIHdyaXRlSW50QkUgKHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBsaW1pdCA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoIC0gMSlcblxuICAgIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGJ5dGVMZW5ndGgsIGxpbWl0IC0gMSwgLWxpbWl0KVxuICB9XG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoIC0gMVxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldCArIGldID0gdmFsdWUgJiAweEZGXG4gIHdoaWxlICgtLWkgPj0gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIGlmICh2YWx1ZSA8IDAgJiYgc3ViID09PSAwICYmIHRoaXNbb2Zmc2V0ICsgaSArIDFdICE9PSAwKSB7XG4gICAgICBzdWIgPSAxXG4gICAgfVxuICAgIHRoaXNbb2Zmc2V0ICsgaV0gPSAoKHZhbHVlIC8gbXVsKSA+PiAwKSAtIHN1YiAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQ4ID0gZnVuY3Rpb24gd3JpdGVJbnQ4ICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDEsIDB4N2YsIC0weDgwKVxuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB2YWx1ZSA9IE1hdGguZmxvb3IodmFsdWUpXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZiArIHZhbHVlICsgMVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gOClcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVJbnQxNkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4N2ZmZiwgLTB4ODAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgJiAweGZmKVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlKVxuICB9XG4gIHJldHVybiBvZmZzZXQgKyAyXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVJbnQzMkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4N2ZmZmZmZmYsIC0weDgwMDAwMDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSA+Pj4gMjQpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5mdW5jdGlvbiBjaGVja0lFRUU3NTQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgZXh0LCBtYXgsIG1pbikge1xuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG4gIGlmIChvZmZzZXQgPCAwKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW5kZXggb3V0IG9mIHJhbmdlJylcbn1cblxuZnVuY3Rpb24gd3JpdGVGbG9hdCAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA0LCAzLjQwMjgyMzQ2NjM4NTI4ODZlKzM4LCAtMy40MDI4MjM0NjYzODUyODg2ZSszOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCAyMywgNClcbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0TEUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRmxvYXRCRSA9IGZ1bmN0aW9uIHdyaXRlRmxvYXRCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRmxvYXQodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG5mdW5jdGlvbiB3cml0ZURvdWJsZSAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICBjaGVja0lFRUU3NTQoYnVmLCB2YWx1ZSwgb2Zmc2V0LCA4LCAxLjc5NzY5MzEzNDg2MjMxNTdFKzMwOCwgLTEuNzk3NjkzMTM0ODYyMzE1N0UrMzA4KVxuICB9XG4gIGllZWU3NTQud3JpdGUoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4sIDUyLCA4KVxuICByZXR1cm4gb2Zmc2V0ICsgOFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSwgbm9Bc3NlcnQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSA9IGZ1bmN0aW9uIHdyaXRlRG91YmxlQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZURvdWJsZSh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSwgbm9Bc3NlcnQpXG59XG5cbi8vIGNvcHkodGFyZ2V0QnVmZmVyLCB0YXJnZXRTdGFydD0wLCBzb3VyY2VTdGFydD0wLCBzb3VyY2VFbmQ9YnVmZmVyLmxlbmd0aClcbkJ1ZmZlci5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uIGNvcHkgKHRhcmdldCwgdGFyZ2V0U3RhcnQsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKCFzdGFydCkgc3RhcnQgPSAwXG4gIGlmICghZW5kICYmIGVuZCAhPT0gMCkgZW5kID0gdGhpcy5sZW5ndGhcbiAgaWYgKHRhcmdldFN0YXJ0ID49IHRhcmdldC5sZW5ndGgpIHRhcmdldFN0YXJ0ID0gdGFyZ2V0Lmxlbmd0aFxuICBpZiAoIXRhcmdldFN0YXJ0KSB0YXJnZXRTdGFydCA9IDBcbiAgaWYgKGVuZCA+IDAgJiYgZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgLy8gQ29weSAwIGJ5dGVzOyB3ZSdyZSBkb25lXG4gIGlmIChlbmQgPT09IHN0YXJ0KSByZXR1cm4gMFxuICBpZiAodGFyZ2V0Lmxlbmd0aCA9PT0gMCB8fCB0aGlzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBGYXRhbCBlcnJvciBjb25kaXRpb25zXG4gIGlmICh0YXJnZXRTdGFydCA8IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcigndGFyZ2V0U3RhcnQgb3V0IG9mIGJvdW5kcycpXG4gIH1cbiAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSB0aGlzLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZVN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICBpZiAoZW5kIDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3NvdXJjZUVuZCBvdXQgb2YgYm91bmRzJylcblxuICAvLyBBcmUgd2Ugb29iP1xuICBpZiAoZW5kID4gdGhpcy5sZW5ndGgpIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgPCBlbmQgLSBzdGFydCkge1xuICAgIGVuZCA9IHRhcmdldC5sZW5ndGggLSB0YXJnZXRTdGFydCArIHN0YXJ0XG4gIH1cblxuICB2YXIgbGVuID0gZW5kIC0gc3RhcnRcbiAgdmFyIGlcblxuICBpZiAodGhpcyA9PT0gdGFyZ2V0ICYmIHN0YXJ0IDwgdGFyZ2V0U3RhcnQgJiYgdGFyZ2V0U3RhcnQgPCBlbmQpIHtcbiAgICAvLyBkZXNjZW5kaW5nIGNvcHkgZnJvbSBlbmRcbiAgICBmb3IgKGkgPSBsZW4gLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSBpZiAobGVuIDwgMTAwMCB8fCAhQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICAvLyBhc2NlbmRpbmcgY29weSBmcm9tIHN0YXJ0XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICB0YXJnZXRbaSArIHRhcmdldFN0YXJ0XSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChcbiAgICAgIHRhcmdldCxcbiAgICAgIHRoaXMuc3ViYXJyYXkoc3RhcnQsIHN0YXJ0ICsgbGVuKSxcbiAgICAgIHRhcmdldFN0YXJ0XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIGxlblxufVxuXG4vLyBVc2FnZTpcbi8vICAgIGJ1ZmZlci5maWxsKG51bWJlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoYnVmZmVyWywgb2Zmc2V0WywgZW5kXV0pXG4vLyAgICBidWZmZXIuZmlsbChzdHJpbmdbLCBvZmZzZXRbLCBlbmRdXVssIGVuY29kaW5nXSlcbkJ1ZmZlci5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIGZpbGwgKHZhbCwgc3RhcnQsIGVuZCwgZW5jb2RpbmcpIHtcbiAgLy8gSGFuZGxlIHN0cmluZyBjYXNlczpcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBzdGFydCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGVuY29kaW5nID0gc3RhcnRcbiAgICAgIHN0YXJ0ID0gMFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IGVuZFxuICAgICAgZW5kID0gdGhpcy5sZW5ndGhcbiAgICB9XG4gICAgaWYgKHZhbC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZhciBjb2RlID0gdmFsLmNoYXJDb2RlQXQoMClcbiAgICAgIGlmIChjb2RlIDwgMjU2KSB7XG4gICAgICAgIHZhbCA9IGNvZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuY29kaW5nICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZW5jb2RpbmcgbXVzdCBiZSBhIHN0cmluZycpXG4gICAgfVxuICAgIGlmICh0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnICYmICFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAyNTVcbiAgfVxuXG4gIC8vIEludmFsaWQgcmFuZ2VzIGFyZSBub3Qgc2V0IHRvIGEgZGVmYXVsdCwgc28gY2FuIHJhbmdlIGNoZWNrIGVhcmx5LlxuICBpZiAoc3RhcnQgPCAwIHx8IHRoaXMubGVuZ3RoIDwgc3RhcnQgfHwgdGhpcy5sZW5ndGggPCBlbmQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignT3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgc3RhcnQgPSBzdGFydCA+Pj4gMFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IHRoaXMubGVuZ3RoIDogZW5kID4+PiAwXG5cbiAgaWYgKCF2YWwpIHZhbCA9IDBcblxuICB2YXIgaVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICBmb3IgKGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgICB0aGlzW2ldID0gdmFsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBieXRlcyA9IEJ1ZmZlci5pc0J1ZmZlcih2YWwpXG4gICAgICA/IHZhbFxuICAgICAgOiB1dGY4VG9CeXRlcyhuZXcgQnVmZmVyKHZhbCwgZW5jb2RpbmcpLnRvU3RyaW5nKCkpXG4gICAgdmFyIGxlbiA9IGJ5dGVzLmxlbmd0aFxuICAgIGZvciAoaSA9IDA7IGkgPCBlbmQgLSBzdGFydDsgKytpKSB7XG4gICAgICB0aGlzW2kgKyBzdGFydF0gPSBieXRlc1tpICUgbGVuXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzXG59XG5cbi8vIEhFTFBFUiBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT1cblxudmFyIElOVkFMSURfQkFTRTY0X1JFID0gL1teK1xcLzAtOUEtWmEtei1fXS9nXG5cbmZ1bmN0aW9uIGJhc2U2NGNsZWFuIChzdHIpIHtcbiAgLy8gTm9kZSBzdHJpcHMgb3V0IGludmFsaWQgY2hhcmFjdGVycyBsaWtlIFxcbiBhbmQgXFx0IGZyb20gdGhlIHN0cmluZywgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHN0ciA9IHN0cmluZ3RyaW0oc3RyKS5yZXBsYWNlKElOVkFMSURfQkFTRTY0X1JFLCAnJylcbiAgLy8gTm9kZSBjb252ZXJ0cyBzdHJpbmdzIHdpdGggbGVuZ3RoIDwgMiB0byAnJ1xuICBpZiAoc3RyLmxlbmd0aCA8IDIpIHJldHVybiAnJ1xuICAvLyBOb2RlIGFsbG93cyBmb3Igbm9uLXBhZGRlZCBiYXNlNjQgc3RyaW5ncyAobWlzc2luZyB0cmFpbGluZyA9PT0pLCBiYXNlNjQtanMgZG9lcyBub3RcbiAgd2hpbGUgKHN0ci5sZW5ndGggJSA0ICE9PSAwKSB7XG4gICAgc3RyID0gc3RyICsgJz0nXG4gIH1cbiAgcmV0dXJuIHN0clxufVxuXG5mdW5jdGlvbiBzdHJpbmd0cmltIChzdHIpIHtcbiAgaWYgKHN0ci50cmltKSByZXR1cm4gc3RyLnRyaW0oKVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxufVxuXG5mdW5jdGlvbiB0b0hleCAobikge1xuICBpZiAobiA8IDE2KSByZXR1cm4gJzAnICsgbi50b1N0cmluZygxNilcbiAgcmV0dXJuIG4udG9TdHJpbmcoMTYpXG59XG5cbmZ1bmN0aW9uIHV0ZjhUb0J5dGVzIChzdHJpbmcsIHVuaXRzKSB7XG4gIHVuaXRzID0gdW5pdHMgfHwgSW5maW5pdHlcbiAgdmFyIGNvZGVQb2ludFxuICB2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aFxuICB2YXIgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcbiAgdmFyIGJ5dGVzID0gW11cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgY29kZVBvaW50ID0gc3RyaW5nLmNoYXJDb2RlQXQoaSlcblxuICAgIC8vIGlzIHN1cnJvZ2F0ZSBjb21wb25lbnRcbiAgICBpZiAoY29kZVBvaW50ID4gMHhEN0ZGICYmIGNvZGVQb2ludCA8IDB4RTAwMCkge1xuICAgICAgLy8gbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICghbGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgICAvLyBubyBsZWFkIHlldFxuICAgICAgICBpZiAoY29kZVBvaW50ID4gMHhEQkZGKSB7XG4gICAgICAgICAgLy8gdW5leHBlY3RlZCB0cmFpbFxuICAgICAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH0gZWxzZSBpZiAoaSArIDEgPT09IGxlbmd0aCkge1xuICAgICAgICAgIC8vIHVucGFpcmVkIGxlYWRcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmFsaWQgbGVhZFxuICAgICAgICBsZWFkU3Vycm9nYXRlID0gY29kZVBvaW50XG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gMiBsZWFkcyBpbiBhIHJvd1xuICAgICAgaWYgKGNvZGVQb2ludCA8IDB4REMwMCkge1xuICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyB2YWxpZCBzdXJyb2dhdGUgcGFpclxuICAgICAgY29kZVBvaW50ID0gKGxlYWRTdXJyb2dhdGUgLSAweEQ4MDAgPDwgMTAgfCBjb2RlUG9pbnQgLSAweERDMDApICsgMHgxMDAwMFxuICAgIH0gZWxzZSBpZiAobGVhZFN1cnJvZ2F0ZSkge1xuICAgICAgLy8gdmFsaWQgYm1wIGNoYXIsIGJ1dCBsYXN0IGNoYXIgd2FzIGEgbGVhZFxuICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgfVxuXG4gICAgbGVhZFN1cnJvZ2F0ZSA9IG51bGxcblxuICAgIC8vIGVuY29kZSB1dGY4XG4gICAgaWYgKGNvZGVQb2ludCA8IDB4ODApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMSkgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChjb2RlUG9pbnQpXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDgwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2IHwgMHhDMCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTAwMDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyB8IDB4RTAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDYgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ICYgMHgzRiB8IDB4ODBcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA8IDB4MTEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDQpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweDEyIHwgMHhGMCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4QyAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjb2RlIHBvaW50JylcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYnl0ZXNcbn1cblxuZnVuY3Rpb24gYXNjaWlUb0J5dGVzIChzdHIpIHtcbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgLy8gTm9kZSdzIGNvZGUgc2VlbXMgdG8gYmUgZG9pbmcgdGhpcyBhbmQgbm90ICYgMHg3Ri4uXG4gICAgYnl0ZUFycmF5LnB1c2goc3RyLmNoYXJDb2RlQXQoaSkgJiAweEZGKVxuICB9XG4gIHJldHVybiBieXRlQXJyYXlcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVRvQnl0ZXMgKHN0ciwgdW5pdHMpIHtcbiAgdmFyIGMsIGhpLCBsb1xuICB2YXIgYnl0ZUFycmF5ID0gW11cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoKHVuaXRzIC09IDIpIDwgMCkgYnJlYWtcblxuICAgIGMgPSBzdHIuY2hhckNvZGVBdChpKVxuICAgIGhpID0gYyA+PiA4XG4gICAgbG8gPSBjICUgMjU2XG4gICAgYnl0ZUFycmF5LnB1c2gobG8pXG4gICAgYnl0ZUFycmF5LnB1c2goaGkpXG4gIH1cblxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFRvQnl0ZXMgKHN0cikge1xuICByZXR1cm4gYmFzZTY0LnRvQnl0ZUFycmF5KGJhc2U2NGNsZWFuKHN0cikpXG59XG5cbmZ1bmN0aW9uIGJsaXRCdWZmZXIgKHNyYywgZHN0LCBvZmZzZXQsIGxlbmd0aCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChpICsgb2Zmc2V0ID49IGRzdC5sZW5ndGgpIHx8IChpID49IHNyYy5sZW5ndGgpKSBicmVha1xuICAgIGRzdFtpICsgb2Zmc2V0XSA9IHNyY1tpXVxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIGlzbmFuICh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gdmFsIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2VsZi1jb21wYXJlXG59XG4iLCIvLyBicm93c2VyIHNoaW0gZm9yIHhtbGh0dHByZXF1ZXN0IG1vZHVsZVxuXG52YXIgaGFzQ09SUyA9IHJlcXVpcmUoJ2hhcy1jb3JzJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4vZ2xvYmFsVGhpcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIHZhciB4ZG9tYWluID0gb3B0cy54ZG9tYWluO1xuXG4gIC8vIHNjaGVtZSBtdXN0IGJlIHNhbWUgd2hlbiB1c2lnbiBYRG9tYWluUmVxdWVzdFxuICAvLyBodHRwOi8vYmxvZ3MubXNkbi5jb20vYi9pZWludGVybmFscy9hcmNoaXZlLzIwMTAvMDUvMTMveGRvbWFpbnJlcXVlc3QtcmVzdHJpY3Rpb25zLWxpbWl0YXRpb25zLWFuZC13b3JrYXJvdW5kcy5hc3B4XG4gIHZhciB4c2NoZW1lID0gb3B0cy54c2NoZW1lO1xuXG4gIC8vIFhEb21haW5SZXF1ZXN0IGhhcyBhIGZsb3cgb2Ygbm90IHNlbmRpbmcgY29va2llLCB0aGVyZWZvcmUgaXQgc2hvdWxkIGJlIGRpc2FibGVkIGFzIGEgZGVmYXVsdC5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvZW5naW5lLmlvLWNsaWVudC9wdWxsLzIxN1xuICB2YXIgZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcblxuICAvLyBYTUxIdHRwUmVxdWVzdCBjYW4gYmUgZGlzYWJsZWQgb24gSUVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAmJiAoIXhkb21haW4gfHwgaGFzQ09SUykpIHtcbiAgICAgIHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHsgfVxuXG4gIC8vIFVzZSBYRG9tYWluUmVxdWVzdCBmb3IgSUU4IGlmIGVuYWJsZXNYRFIgaXMgdHJ1ZVxuICAvLyBiZWNhdXNlIGxvYWRpbmcgYmFyIGtlZXBzIGZsYXNoaW5nIHdoZW4gdXNpbmcganNvbnAtcG9sbGluZ1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20veXVqaW9zYWthL3NvY2tlLmlvLWllOC1sb2FkaW5nLWV4YW1wbGVcbiAgdHJ5IHtcbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBYRG9tYWluUmVxdWVzdCAmJiAheHNjaGVtZSAmJiBlbmFibGVzWERSKSB7XG4gICAgICByZXR1cm4gbmV3IFhEb21haW5SZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IH1cblxuICBpZiAoIXhkb21haW4pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIG5ldyBnbG9iYWxUaGlzW1snQWN0aXZlJ10uY29uY2F0KCdPYmplY3QnKS5qb2luKCdYJyldKCdNaWNyb3NvZnQuWE1MSFRUUCcpO1xuICAgIH0gY2F0Y2ggKGUpIHsgfVxuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gd2luZG93O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy1mdW5jXG4gIH1cbn0pKCk7XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zcG9ydDtcblxuLyoqXG4gKiBUcmFuc3BvcnQgYWJzdHJhY3QgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBUcmFuc3BvcnQgKG9wdHMpIHtcbiAgdGhpcy5wYXRoID0gb3B0cy5wYXRoO1xuICB0aGlzLmhvc3RuYW1lID0gb3B0cy5ob3N0bmFtZTtcbiAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0O1xuICB0aGlzLnNlY3VyZSA9IG9wdHMuc2VjdXJlO1xuICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgdGhpcy50aW1lc3RhbXBQYXJhbSA9IG9wdHMudGltZXN0YW1wUGFyYW07XG4gIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnJztcbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gIHRoaXMuc29ja2V0ID0gb3B0cy5zb2NrZXQ7XG4gIHRoaXMuZW5hYmxlc1hEUiA9IG9wdHMuZW5hYmxlc1hEUjtcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBvcHRzLndpdGhDcmVkZW50aWFscztcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeDtcbiAgdGhpcy5rZXkgPSBvcHRzLmtleTtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQ7XG4gIHRoaXMuY2EgPSBvcHRzLmNhO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIHRoaXMuZm9yY2VOb2RlID0gb3B0cy5mb3JjZU5vZGU7XG5cbiAgLy8gcmVzdWx0cyBvZiBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudCBkZXRlY3Rpb25cbiAgdGhpcy5pc1JlYWN0TmF0aXZlID0gb3B0cy5pc1JlYWN0TmF0aXZlO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMuZXh0cmFIZWFkZXJzID0gb3B0cy5leHRyYUhlYWRlcnM7XG4gIHRoaXMubG9jYWxBZGRyZXNzID0gb3B0cy5sb2NhbEFkZHJlc3M7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFRyYW5zcG9ydC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIEVtaXRzIGFuIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1RyYW5zcG9ydH0gZm9yIGNoYWluaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChtc2csIGRlc2MpIHtcbiAgdmFyIGVyciA9IG5ldyBFcnJvcihtc2cpO1xuICBlcnIudHlwZSA9ICdUcmFuc3BvcnRFcnJvcic7XG4gIGVyci5kZXNjcmlwdGlvbiA9IGRlc2M7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3BlbnMgdGhlIHRyYW5zcG9ydC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuaW5nJztcbiAgICB0aGlzLmRvT3BlbigpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENsb3NlcyB0aGUgdHJhbnNwb3J0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMuZG9DbG9zZSgpO1xuICAgIHRoaXMub25DbG9zZSgpO1xuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIG11bHRpcGxlIHBhY2tldHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy53cml0ZShwYWNrZXRzKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zcG9ydCBub3Qgb3BlbicpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIG9wZW5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICB0aGlzLndyaXRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGRhdGEuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGRhdGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIHBhY2tldCA9IHBhcnNlci5kZWNvZGVQYWNrZXQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSk7XG4gIHRoaXMub25QYWNrZXQocGFja2V0KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggYSBkZWNvZGVkIHBhY2tldC5cbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uUGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIHRoaXMuZW1pdCgnY2xvc2UnKTtcbn07XG4iLCJcclxuLyoqXHJcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXHJcbiAqL1xyXG5cclxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xyXG59XHJcblxyXG4vKipcclxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXHJcbiAqXHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcclxuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXHJcbiAqIEByZXR1cm4ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XHJcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XHJcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XHJcbiAgfVxyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICAodGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW10pXHJcbiAgICAucHVzaChmbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXHJcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xyXG4gIGZ1bmN0aW9uIG9uKCkge1xyXG4gICAgdGhpcy5vZmYoZXZlbnQsIG9uKTtcclxuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBvbi5mbiA9IGZuO1xyXG4gIHRoaXMub24oZXZlbnQsIG9uKTtcclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxyXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIC8vIGFsbFxyXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBzcGVjaWZpYyBldmVudFxyXG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcclxuXHJcbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xyXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxyXG4gIHZhciBjYjtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xyXG4gICAgY2IgPSBjYWxsYmFja3NbaV07XHJcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xyXG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFJlbW92ZSBldmVudCBzcGVjaWZpYyBhcnJheXMgZm9yIGV2ZW50IHR5cGVzIHRoYXQgbm9cclxuICAvLyBvbmUgaXMgc3Vic2NyaWJlZCBmb3IgdG8gYXZvaWQgbWVtb3J5IGxlYWsuXHJcbiAgaWYgKGNhbGxiYWNrcy5sZW5ndGggPT09IDApIHtcclxuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge01peGVkfSAuLi5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuXHJcbiAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpXHJcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF07XHJcblxyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcclxuICB9XHJcblxyXG4gIGlmIChjYWxsYmFja3MpIHtcclxuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcclxuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0FycmF5fVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gfHwgW107XHJcbn07XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XHJcbn07XHJcbiIsIi8qKlxyXG4gKiBQYXJzZXMgYW4gVVJJXHJcbiAqXHJcbiAqIEBhdXRob3IgU3RldmVuIExldml0aGFuIDxzdGV2ZW5sZXZpdGhhbi5jb20+IChNSVQgbGljZW5zZSlcclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxudmFyIHJlID0gL14oPzooPyFbXjpAXSs6W146QFxcL10qQCkoaHR0cHxodHRwc3x3c3x3c3MpOlxcL1xcLyk/KCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oKD86W2EtZjAtOV17MCw0fTopezIsN31bYS1mMC05XXswLDR9fFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS87XHJcblxyXG52YXIgcGFydHMgPSBbXHJcbiAgICAnc291cmNlJywgJ3Byb3RvY29sJywgJ2F1dGhvcml0eScsICd1c2VySW5mbycsICd1c2VyJywgJ3Bhc3N3b3JkJywgJ2hvc3QnLCAncG9ydCcsICdyZWxhdGl2ZScsICdwYXRoJywgJ2RpcmVjdG9yeScsICdmaWxlJywgJ3F1ZXJ5JywgJ2FuY2hvcidcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2V1cmkoc3RyKSB7XHJcbiAgICB2YXIgc3JjID0gc3RyLFxyXG4gICAgICAgIGIgPSBzdHIuaW5kZXhPZignWycpLFxyXG4gICAgICAgIGUgPSBzdHIuaW5kZXhPZignXScpO1xyXG5cclxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcclxuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyaW5nKDAsIGIpICsgc3RyLnN1YnN0cmluZyhiLCBlKS5yZXBsYWNlKC86L2csICc7JykgKyBzdHIuc3Vic3RyaW5nKGUsIHN0ci5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtID0gcmUuZXhlYyhzdHIgfHwgJycpLFxyXG4gICAgICAgIHVyaSA9IHt9LFxyXG4gICAgICAgIGkgPSAxNDtcclxuXHJcbiAgICB3aGlsZSAoaS0tKSB7XHJcbiAgICAgICAgdXJpW3BhcnRzW2ldXSA9IG1baV0gfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGIgIT0gLTEgJiYgZSAhPSAtMSkge1xyXG4gICAgICAgIHVyaS5zb3VyY2UgPSBzcmM7XHJcbiAgICAgICAgdXJpLmhvc3QgPSB1cmkuaG9zdC5zdWJzdHJpbmcoMSwgdXJpLmhvc3QubGVuZ3RoIC0gMSkucmVwbGFjZSgvOy9nLCAnOicpO1xyXG4gICAgICAgIHVyaS5hdXRob3JpdHkgPSB1cmkuYXV0aG9yaXR5LnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKS5yZXBsYWNlKC87L2csICc6Jyk7XHJcbiAgICAgICAgdXJpLmlwdjZ1cmkgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1cmk7XHJcbn07XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJcbm1vZHVsZS5leHBvcnRzID0gaXNCdWY7XG5cbnZhciB3aXRoTmF0aXZlQnVmZmVyID0gdHlwZW9mIEJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgQnVmZmVyLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nO1xudmFyIHdpdGhOYXRpdmVBcnJheUJ1ZmZlciA9IHR5cGVvZiBBcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJztcblxudmFyIGlzVmlldyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgPyBBcnJheUJ1ZmZlci5pc1ZpZXcob2JqKSA6IChvYmouYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgb2JqIGlzIGEgYnVmZmVyIG9yIGFuIGFycmF5YnVmZmVyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGlzQnVmKG9iaikge1xuICByZXR1cm4gKHdpdGhOYXRpdmVCdWZmZXIgJiYgQnVmZmVyLmlzQnVmZmVyKG9iaikpIHx8XG4gICAgICAgICAgKHdpdGhOYXRpdmVBcnJheUJ1ZmZlciAmJiAob2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIgfHwgaXNWaWV3KG9iaikpKTtcbn1cbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBlaW8gPSByZXF1aXJlKCdlbmdpbmUuaW8tY2xpZW50Jyk7XG52YXIgU29ja2V0ID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgb24gPSByZXF1aXJlKCcuL29uJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1iaW5kJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50Om1hbmFnZXInKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnaW5kZXhvZicpO1xudmFyIEJhY2tvZmYgPSByZXF1aXJlKCdiYWNrbzInKTtcblxuLyoqXG4gKiBJRTYrIGhhc093blByb3BlcnR5XG4gKi9cblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hbmFnZXI7XG5cbi8qKlxuICogYE1hbmFnZXJgIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbmdpbmUgaW5zdGFuY2Ugb3IgZW5naW5lIHVyaS9vcHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBNYW5hZ2VyICh1cmksIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE1hbmFnZXIpKSByZXR1cm4gbmV3IE1hbmFnZXIodXJpLCBvcHRzKTtcbiAgaWYgKHVyaSAmJiAoJ29iamVjdCcgPT09IHR5cGVvZiB1cmkpKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgb3B0cy5wYXRoID0gb3B0cy5wYXRoIHx8ICcvc29ja2V0LmlvJztcbiAgdGhpcy5uc3BzID0ge307XG4gIHRoaXMuc3VicyA9IFtdO1xuICB0aGlzLm9wdHMgPSBvcHRzO1xuICB0aGlzLnJlY29ubmVjdGlvbihvcHRzLnJlY29ubmVjdGlvbiAhPT0gZmFsc2UpO1xuICB0aGlzLnJlY29ubmVjdGlvbkF0dGVtcHRzKG9wdHMucmVjb25uZWN0aW9uQXR0ZW1wdHMgfHwgSW5maW5pdHkpO1xuICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KG9wdHMucmVjb25uZWN0aW9uRGVsYXkgfHwgMTAwMCk7XG4gIHRoaXMucmVjb25uZWN0aW9uRGVsYXlNYXgob3B0cy5yZWNvbm5lY3Rpb25EZWxheU1heCB8fCA1MDAwKTtcbiAgdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKG9wdHMucmFuZG9taXphdGlvbkZhY3RvciB8fCAwLjUpO1xuICB0aGlzLmJhY2tvZmYgPSBuZXcgQmFja29mZih7XG4gICAgbWluOiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5KCksXG4gICAgbWF4OiB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KCksXG4gICAgaml0dGVyOiB0aGlzLnJhbmRvbWl6YXRpb25GYWN0b3IoKVxuICB9KTtcbiAgdGhpcy50aW1lb3V0KG51bGwgPT0gb3B0cy50aW1lb3V0ID8gMjAwMDAgOiBvcHRzLnRpbWVvdXQpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy51cmkgPSB1cmk7XG4gIHRoaXMuY29ubmVjdGluZyA9IFtdO1xuICB0aGlzLmxhc3RQaW5nID0gbnVsbDtcbiAgdGhpcy5lbmNvZGluZyA9IGZhbHNlO1xuICB0aGlzLnBhY2tldEJ1ZmZlciA9IFtdO1xuICB2YXIgX3BhcnNlciA9IG9wdHMucGFyc2VyIHx8IHBhcnNlcjtcbiAgdGhpcy5lbmNvZGVyID0gbmV3IF9wYXJzZXIuRW5jb2RlcigpO1xuICB0aGlzLmRlY29kZXIgPSBuZXcgX3BhcnNlci5EZWNvZGVyKCk7XG4gIHRoaXMuYXV0b0Nvbm5lY3QgPSBvcHRzLmF1dG9Db25uZWN0ICE9PSBmYWxzZTtcbiAgaWYgKHRoaXMuYXV0b0Nvbm5lY3QpIHRoaXMub3BlbigpO1xufVxuXG4vKipcbiAqIFByb3BhZ2F0ZSBnaXZlbiBldmVudCB0byBzb2NrZXRzIGFuZCBlbWl0IG9uIGB0aGlzYFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmVtaXRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgdGhpcy5uc3BzW25zcF0uZW1pdC5hcHBseSh0aGlzLm5zcHNbbnNwXSwgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogVXBkYXRlIGBzb2NrZXQuaWRgIG9mIGFsbCBzb2NrZXRzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUudXBkYXRlU29ja2V0SWRzID0gZnVuY3Rpb24gKCkge1xuICBmb3IgKHZhciBuc3AgaW4gdGhpcy5uc3BzKSB7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMubnNwcywgbnNwKSkge1xuICAgICAgdGhpcy5uc3BzW25zcF0uaWQgPSB0aGlzLmdlbmVyYXRlSWQobnNwKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogZ2VuZXJhdGUgYHNvY2tldC5pZGAgZm9yIHRoZSBnaXZlbiBgbnNwYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuc3BcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmdlbmVyYXRlSWQgPSBmdW5jdGlvbiAobnNwKSB7XG4gIHJldHVybiAobnNwID09PSAnLycgPyAnJyA6IChuc3AgKyAnIycpKSArIHRoaXMuZW5naW5lLmlkO1xufTtcblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoTWFuYWdlci5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFNldHMgdGhlIGByZWNvbm5lY3Rpb25gIGNvbmZpZy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHRydWUvZmFsc2UgaWYgaXQgc2hvdWxkIGF1dG9tYXRpY2FsbHkgcmVjb25uZWN0XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbiA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbjtcbiAgdGhpcy5fcmVjb25uZWN0aW9uID0gISF2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgcmVjb25uZWN0aW9uIGF0dGVtcHRzIGNvbmZpZy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IHJlY29ubmVjdGlvbiBhdHRlbXB0cyBiZWZvcmUgZ2l2aW5nIHVwXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkF0dGVtcHRzID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHM7XG4gIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzID0gdjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGRlbGF5IGJldHdlZW4gcmVjb25uZWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gZGVsYXlcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucmVjb25uZWN0aW9uRGVsYXkgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheTtcbiAgdGhpcy5fcmVjb25uZWN0aW9uRGVsYXkgPSB2O1xuICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldE1pbih2KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yYW5kb21pemF0aW9uRmFjdG9yID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvcjtcbiAgdGhpcy5fcmFuZG9taXphdGlvbkZhY3RvciA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0Sml0dGVyKHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgbWF4aW11bSBkZWxheSBiZXR3ZWVuIHJlY29ubmVjdGlvbnMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkRlbGF5TWF4ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXlNYXg7XG4gIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4ID0gdjtcbiAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRNYXgodik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjb25uZWN0aW9uIHRpbWVvdXQuIGBmYWxzZWAgdG8gZGlzYWJsZVxuICpcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGYgb3IgdmFsdWVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUudGltZW91dCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3RpbWVvdXQ7XG4gIHRoaXMuX3RpbWVvdXQgPSB2O1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3RhcnRzIHRyeWluZyB0byByZWNvbm5lY3QgaWYgcmVjb25uZWN0aW9uIGlzIGVuYWJsZWQgYW5kIHdlIGhhdmUgbm90XG4gKiBzdGFydGVkIHJlY29ubmVjdGluZyB5ZXRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5tYXliZVJlY29ubmVjdE9uT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gT25seSB0cnkgdG8gcmVjb25uZWN0IGlmIGl0J3MgdGhlIGZpcnN0IHRpbWUgd2UncmUgY29ubmVjdGluZ1xuICBpZiAoIXRoaXMucmVjb25uZWN0aW5nICYmIHRoaXMuX3JlY29ubmVjdGlvbiAmJiB0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPT09IDApIHtcbiAgICAvLyBrZWVwcyByZWNvbm5lY3Rpb24gZnJvbSBmaXJpbmcgdHdpY2UgZm9yIHRoZSBzYW1lIHJlY29ubmVjdGlvbiBsb29wXG4gICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydCBgc29ja2V0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25hbCwgY2FsbGJhY2tcbiAqIEByZXR1cm4ge01hbmFnZXJ9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub3BlbiA9XG5NYW5hZ2VyLnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKGZuLCBvcHRzKSB7XG4gIGRlYnVnKCdyZWFkeVN0YXRlICVzJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgaWYgKH50aGlzLnJlYWR5U3RhdGUuaW5kZXhPZignb3BlbicpKSByZXR1cm4gdGhpcztcblxuICBkZWJ1Zygnb3BlbmluZyAlcycsIHRoaXMudXJpKTtcbiAgdGhpcy5lbmdpbmUgPSBlaW8odGhpcy51cmksIHRoaXMub3B0cyk7XG4gIHZhciBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG4gIHRoaXMuc2tpcFJlY29ubmVjdCA9IGZhbHNlO1xuXG4gIC8vIGVtaXQgYG9wZW5gXG4gIHZhciBvcGVuU3ViID0gb24oc29ja2V0LCAnb3BlbicsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9ub3BlbigpO1xuICAgIGZuICYmIGZuKCk7XG4gIH0pO1xuXG4gIC8vIGVtaXQgYGNvbm5lY3RfZXJyb3JgXG4gIHZhciBlcnJvclN1YiA9IG9uKHNvY2tldCwgJ2Vycm9yJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkZWJ1ZygnY29ubmVjdF9lcnJvcicpO1xuICAgIHNlbGYuY2xlYW51cCgpO1xuICAgIHNlbGYucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICAgIHNlbGYuZW1pdEFsbCgnY29ubmVjdF9lcnJvcicsIGRhdGEpO1xuICAgIGlmIChmbikge1xuICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignQ29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgZXJyLmRhdGEgPSBkYXRhO1xuICAgICAgZm4oZXJyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT25seSBkbyB0aGlzIGlmIHRoZXJlIGlzIG5vIGZuIHRvIGhhbmRsZSB0aGUgZXJyb3JcbiAgICAgIHNlbGYubWF5YmVSZWNvbm5lY3RPbk9wZW4oKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8vIGVtaXQgYGNvbm5lY3RfdGltZW91dGBcbiAgaWYgKGZhbHNlICE9PSB0aGlzLl90aW1lb3V0KSB7XG4gICAgdmFyIHRpbWVvdXQgPSB0aGlzLl90aW1lb3V0O1xuICAgIGRlYnVnKCdjb25uZWN0IGF0dGVtcHQgd2lsbCB0aW1lb3V0IGFmdGVyICVkJywgdGltZW91dCk7XG5cbiAgICAvLyBzZXQgdGltZXJcbiAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGRlYnVnKCdjb25uZWN0IGF0dGVtcHQgdGltZWQgb3V0IGFmdGVyICVkJywgdGltZW91dCk7XG4gICAgICBvcGVuU3ViLmRlc3Ryb3koKTtcbiAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgc29ja2V0LmVtaXQoJ2Vycm9yJywgJ3RpbWVvdXQnKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgnY29ubmVjdF90aW1lb3V0JywgdGltZW91dCk7XG4gICAgfSwgdGltZW91dCk7XG5cbiAgICB0aGlzLnN1YnMucHVzaCh7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB0aGlzLnN1YnMucHVzaChvcGVuU3ViKTtcbiAgdGhpcy5zdWJzLnB1c2goZXJyb3JTdWIpO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgb3Blbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdvcGVuJyk7XG5cbiAgLy8gY2xlYXIgb2xkIHN1YnNcbiAgdGhpcy5jbGVhbnVwKCk7XG5cbiAgLy8gbWFyayBhcyBvcGVuXG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG5cbiAgLy8gYWRkIG5ldyBzdWJzXG4gIHZhciBzb2NrZXQgPSB0aGlzLmVuZ2luZTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnZGF0YScsIGJpbmQodGhpcywgJ29uZGF0YScpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ3BpbmcnLCBiaW5kKHRoaXMsICdvbnBpbmcnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdwb25nJywgYmluZCh0aGlzLCAnb25wb25nJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnZXJyb3InLCBiaW5kKHRoaXMsICdvbmVycm9yJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAnY2xvc2UnLCBiaW5kKHRoaXMsICdvbmNsb3NlJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24odGhpcy5kZWNvZGVyLCAnZGVjb2RlZCcsIGJpbmQodGhpcywgJ29uZGVjb2RlZCcpKSk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgcGluZy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMubGFzdFBpbmcgPSBuZXcgRGF0ZSgpO1xuICB0aGlzLmVtaXRBbGwoJ3BpbmcnKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25wb25nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXRBbGwoJ3BvbmcnLCBuZXcgRGF0ZSgpIC0gdGhpcy5sYXN0UGluZyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGRhdGEuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25kYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdGhpcy5kZWNvZGVyLmFkZChkYXRhKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gcGFyc2VyIGZ1bGx5IGRlY29kZXMgYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25kZWNvZGVkID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNvY2tldCBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICBkZWJ1ZygnZXJyb3InLCBlcnIpO1xuICB0aGlzLmVtaXRBbGwoJ2Vycm9yJywgZXJyKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBzb2NrZXQgZm9yIHRoZSBnaXZlbiBgbnNwYC5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnNvY2tldCA9IGZ1bmN0aW9uIChuc3AsIG9wdHMpIHtcbiAgdmFyIHNvY2tldCA9IHRoaXMubnNwc1tuc3BdO1xuICBpZiAoIXNvY2tldCkge1xuICAgIHNvY2tldCA9IG5ldyBTb2NrZXQodGhpcywgbnNwLCBvcHRzKTtcbiAgICB0aGlzLm5zcHNbbnNwXSA9IHNvY2tldDtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc29ja2V0Lm9uKCdjb25uZWN0aW5nJywgb25Db25uZWN0aW5nKTtcbiAgICBzb2NrZXQub24oJ2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBzb2NrZXQuaWQgPSBzZWxmLmdlbmVyYXRlSWQobnNwKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmF1dG9Db25uZWN0KSB7XG4gICAgICAvLyBtYW51YWxseSBjYWxsIGhlcmUgc2luY2UgY29ubmVjdGluZyBldmVudCBpcyBmaXJlZCBiZWZvcmUgbGlzdGVuaW5nXG4gICAgICBvbkNvbm5lY3RpbmcoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvbkNvbm5lY3RpbmcgKCkge1xuICAgIGlmICghfmluZGV4T2Yoc2VsZi5jb25uZWN0aW5nLCBzb2NrZXQpKSB7XG4gICAgICBzZWxmLmNvbm5lY3RpbmcucHVzaChzb2NrZXQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzb2NrZXQ7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgc29ja2V0IGNsb3NlLlxuICpcbiAqIEBwYXJhbSB7U29ja2V0fSBzb2NrZXRcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKHNvY2tldCkge1xuICB2YXIgaW5kZXggPSBpbmRleE9mKHRoaXMuY29ubmVjdGluZywgc29ja2V0KTtcbiAgaWYgKH5pbmRleCkgdGhpcy5jb25uZWN0aW5nLnNwbGljZShpbmRleCwgMSk7XG4gIGlmICh0aGlzLmNvbm5lY3RpbmcubGVuZ3RoKSByZXR1cm47XG5cbiAgdGhpcy5jbG9zZSgpO1xufTtcblxuLyoqXG4gKiBXcml0ZXMgYSBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBkZWJ1Zygnd3JpdGluZyBwYWNrZXQgJWonLCBwYWNrZXQpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmIChwYWNrZXQucXVlcnkgJiYgcGFja2V0LnR5cGUgPT09IDApIHBhY2tldC5uc3AgKz0gJz8nICsgcGFja2V0LnF1ZXJ5O1xuXG4gIGlmICghc2VsZi5lbmNvZGluZykge1xuICAgIC8vIGVuY29kZSwgdGhlbiB3cml0ZSB0byBlbmdpbmUgd2l0aCByZXN1bHRcbiAgICBzZWxmLmVuY29kaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmVuY29kZXIuZW5jb2RlKHBhY2tldCwgZnVuY3Rpb24gKGVuY29kZWRQYWNrZXRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVuY29kZWRQYWNrZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNlbGYuZW5naW5lLndyaXRlKGVuY29kZWRQYWNrZXRzW2ldLCBwYWNrZXQub3B0aW9ucyk7XG4gICAgICB9XG4gICAgICBzZWxmLmVuY29kaW5nID0gZmFsc2U7XG4gICAgICBzZWxmLnByb2Nlc3NQYWNrZXRRdWV1ZSgpO1xuICAgIH0pO1xuICB9IGVsc2UgeyAvLyBhZGQgcGFja2V0IHRvIHRoZSBxdWV1ZVxuICAgIHNlbGYucGFja2V0QnVmZmVyLnB1c2gocGFja2V0KTtcbiAgfVxufTtcblxuLyoqXG4gKiBJZiBwYWNrZXQgYnVmZmVyIGlzIG5vbi1lbXB0eSwgYmVnaW5zIGVuY29kaW5nIHRoZVxuICogbmV4dCBwYWNrZXQgaW4gbGluZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5wcm9jZXNzUGFja2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnBhY2tldEJ1ZmZlci5sZW5ndGggPiAwICYmICF0aGlzLmVuY29kaW5nKSB7XG4gICAgdmFyIHBhY2sgPSB0aGlzLnBhY2tldEJ1ZmZlci5zaGlmdCgpO1xuICAgIHRoaXMucGFja2V0KHBhY2spO1xuICB9XG59O1xuXG4vKipcbiAqIENsZWFuIHVwIHRyYW5zcG9ydCBzdWJzY3JpcHRpb25zIGFuZCBwYWNrZXQgYnVmZmVyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdjbGVhbnVwJyk7XG5cbiAgdmFyIHN1YnNMZW5ndGggPSB0aGlzLnN1YnMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNMZW5ndGg7IGkrKykge1xuICAgIHZhciBzdWIgPSB0aGlzLnN1YnMuc2hpZnQoKTtcbiAgICBzdWIuZGVzdHJveSgpO1xuICB9XG5cbiAgdGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcbiAgdGhpcy5lbmNvZGluZyA9IGZhbHNlO1xuICB0aGlzLmxhc3RQaW5nID0gbnVsbDtcblxuICB0aGlzLmRlY29kZXIuZGVzdHJveSgpO1xufTtcblxuLyoqXG4gKiBDbG9zZSB0aGUgY3VycmVudCBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuY2xvc2UgPVxuTWFuYWdlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ2Rpc2Nvbm5lY3QnKTtcbiAgdGhpcy5za2lwUmVjb25uZWN0ID0gdHJ1ZTtcbiAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgLy8gYG9uY2xvc2VgIHdpbGwgbm90IGZpcmUgYmVjYXVzZVxuICAgIC8vIGFuIG9wZW4gZXZlbnQgbmV2ZXIgaGFwcGVuZWRcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgfVxuICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIGlmICh0aGlzLmVuZ2luZSkgdGhpcy5lbmdpbmUuY2xvc2UoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZW5naW5lIGNsb3NlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGRlYnVnKCdvbmNsb3NlJyk7XG5cbiAgdGhpcy5jbGVhbnVwKCk7XG4gIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgdGhpcy5lbWl0KCdjbG9zZScsIHJlYXNvbik7XG5cbiAgaWYgKHRoaXMuX3JlY29ubmVjdGlvbiAmJiAhdGhpcy5za2lwUmVjb25uZWN0KSB7XG4gICAgdGhpcy5yZWNvbm5lY3QoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBBdHRlbXB0IGEgcmVjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMucmVjb25uZWN0aW5nIHx8IHRoaXMuc2tpcFJlY29ubmVjdCkgcmV0dXJuIHRoaXM7XG5cbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICh0aGlzLmJhY2tvZmYuYXR0ZW1wdHMgPj0gdGhpcy5fcmVjb25uZWN0aW9uQXR0ZW1wdHMpIHtcbiAgICBkZWJ1ZygncmVjb25uZWN0IGZhaWxlZCcpO1xuICAgIHRoaXMuYmFja29mZi5yZXNldCgpO1xuICAgIHRoaXMuZW1pdEFsbCgncmVjb25uZWN0X2ZhaWxlZCcpO1xuICAgIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRlbGF5ID0gdGhpcy5iYWNrb2ZmLmR1cmF0aW9uKCk7XG4gICAgZGVidWcoJ3dpbGwgd2FpdCAlZG1zIGJlZm9yZSByZWNvbm5lY3QgYXR0ZW1wdCcsIGRlbGF5KTtcblxuICAgIHRoaXMucmVjb25uZWN0aW5nID0gdHJ1ZTtcbiAgICB2YXIgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLnNraXBSZWNvbm5lY3QpIHJldHVybjtcblxuICAgICAgZGVidWcoJ2F0dGVtcHRpbmcgcmVjb25uZWN0Jyk7XG4gICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdF9hdHRlbXB0Jywgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcbiAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0aW5nJywgc2VsZi5iYWNrb2ZmLmF0dGVtcHRzKTtcblxuICAgICAgLy8gY2hlY2sgYWdhaW4gZm9yIHRoZSBjYXNlIHNvY2tldCBjbG9zZWQgaW4gYWJvdmUgZXZlbnRzXG4gICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KSByZXR1cm47XG5cbiAgICAgIHNlbGYub3BlbihmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICBkZWJ1ZygncmVjb25uZWN0IGF0dGVtcHQgZXJyb3InKTtcbiAgICAgICAgICBzZWxmLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYucmVjb25uZWN0KCk7XG4gICAgICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RfZXJyb3InLCBlcnIuZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVidWcoJ3JlY29ubmVjdCBzdWNjZXNzJyk7XG4gICAgICAgICAgc2VsZi5vbnJlY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBkZWxheSk7XG5cbiAgICB0aGlzLnN1YnMucHVzaCh7XG4gICAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZWNvbm5lY3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhdHRlbXB0ID0gdGhpcy5iYWNrb2ZmLmF0dGVtcHRzO1xuICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgdGhpcy51cGRhdGVTb2NrZXRJZHMoKTtcbiAgdGhpcy5lbWl0QWxsKCdyZWNvbm5lY3QnLCBhdHRlbXB0KTtcbn07XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbnZhciBYSFIgPSByZXF1aXJlKCcuL3BvbGxpbmcteGhyJyk7XG52YXIgSlNPTlAgPSByZXF1aXJlKCcuL3BvbGxpbmctanNvbnAnKTtcbnZhciB3ZWJzb2NrZXQgPSByZXF1aXJlKCcuL3dlYnNvY2tldCcpO1xuXG4vKipcbiAqIEV4cG9ydCB0cmFuc3BvcnRzLlxuICovXG5cbmV4cG9ydHMucG9sbGluZyA9IHBvbGxpbmc7XG5leHBvcnRzLndlYnNvY2tldCA9IHdlYnNvY2tldDtcblxuLyoqXG4gKiBQb2xsaW5nIHRyYW5zcG9ydCBwb2x5bW9ycGhpYyBjb25zdHJ1Y3Rvci5cbiAqIERlY2lkZXMgb24geGhyIHZzIGpzb25wIGJhc2VkIG9uIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBvbGxpbmcgKG9wdHMpIHtcbiAgdmFyIHhocjtcbiAgdmFyIHhkID0gZmFsc2U7XG4gIHZhciB4cyA9IGZhbHNlO1xuICB2YXIganNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBpc1NTTCA9ICdodHRwczonID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB4ZCA9IG9wdHMuaG9zdG5hbWUgIT09IGxvY2F0aW9uLmhvc3RuYW1lIHx8IHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB4cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxuXG4gIG9wdHMueGRvbWFpbiA9IHhkO1xuICBvcHRzLnhzY2hlbWUgPSB4cztcbiAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KG9wdHMpO1xuXG4gIGlmICgnb3BlbicgaW4geGhyICYmICFvcHRzLmZvcmNlSlNPTlApIHtcbiAgICByZXR1cm4gbmV3IFhIUihvcHRzKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWpzb25wKSB0aHJvdyBuZXcgRXJyb3IoJ0pTT05QIGRpc2FibGVkJyk7XG4gICAgcmV0dXJuIG5ldyBKU09OUChvcHRzKTtcbiAgfVxufVxuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBUcmFuc3BvcnQgPSByZXF1aXJlKCcuLi90cmFuc3BvcnQnKTtcbnZhciBwYXJzZXFzID0gcmVxdWlyZSgncGFyc2VxcycpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciB5ZWFzdCA9IHJlcXVpcmUoJ3llYXN0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBvbGxpbmc7XG5cbi8qKlxuICogSXMgWEhSMiBzdXBwb3J0ZWQ/XG4gKi9cblxudmFyIGhhc1hIUjIgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbiAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCh7IHhkb21haW46IGZhbHNlIH0pO1xuICByZXR1cm4gbnVsbCAhPSB4aHIucmVzcG9uc2VUeXBlO1xufSkoKTtcblxuLyoqXG4gKiBQb2xsaW5nIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gUG9sbGluZyAob3B0cykge1xuICB2YXIgZm9yY2VCYXNlNjQgPSAob3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0KTtcbiAgaWYgKCFoYXNYSFIyIHx8IGZvcmNlQmFzZTY0KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG4gIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICovXG5cbmluaGVyaXQoUG9sbGluZywgVHJhbnNwb3J0KTtcblxuLyoqXG4gKiBUcmFuc3BvcnQgbmFtZS5cbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5uYW1lID0gJ3BvbGxpbmcnO1xuXG4vKipcbiAqIE9wZW5zIHRoZSBzb2NrZXQgKHRyaWdnZXJzIHBvbGxpbmcpLiBXZSB3cml0ZSBhIFBJTkcgbWVzc2FnZSB0byBkZXRlcm1pbmVcbiAqIHdoZW4gdGhlIHRyYW5zcG9ydCBpcyBvcGVuLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5wb2xsKCk7XG59O1xuXG4vKipcbiAqIFBhdXNlcyBwb2xsaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHVwb24gYnVmZmVycyBhcmUgZmx1c2hlZCBhbmQgdHJhbnNwb3J0IGlzIHBhdXNlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbiAob25QYXVzZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ3BhdXNpbmcnO1xuXG4gIGZ1bmN0aW9uIHBhdXNlICgpIHtcbiAgICBkZWJ1ZygncGF1c2VkJyk7XG4gICAgc2VsZi5yZWFkeVN0YXRlID0gJ3BhdXNlZCc7XG4gICAgb25QYXVzZSgpO1xuICB9XG5cbiAgaWYgKHRoaXMucG9sbGluZyB8fCAhdGhpcy53cml0YWJsZSkge1xuICAgIHZhciB0b3RhbCA9IDA7XG5cbiAgICBpZiAodGhpcy5wb2xsaW5nKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSBwb2xsaW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgncG9sbENvbXBsZXRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHBvbGxpbmcgY29tcGxldGUnKTtcbiAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLndyaXRhYmxlKSB7XG4gICAgICBkZWJ1Zygnd2UgYXJlIGN1cnJlbnRseSB3cml0aW5nIC0gd2FpdGluZyB0byBwYXVzZScpO1xuICAgICAgdG90YWwrKztcbiAgICAgIHRoaXMub25jZSgnZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlYnVnKCdwcmUtcGF1c2Ugd3JpdGluZyBjb21wbGV0ZScpO1xuICAgICAgICAtLXRvdGFsIHx8IHBhdXNlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGF1c2UoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTdGFydHMgcG9sbGluZyBjeWNsZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblBvbGxpbmcucHJvdG90eXBlLnBvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdwb2xsaW5nJyk7XG4gIHRoaXMucG9sbGluZyA9IHRydWU7XG4gIHRoaXMuZG9Qb2xsKCk7XG4gIHRoaXMuZW1pdCgncG9sbCcpO1xufTtcblxuLyoqXG4gKiBPdmVybG9hZHMgb25EYXRhIHRvIGRldGVjdCBwYXlsb2Fkcy5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGRlYnVnKCdwb2xsaW5nIGdvdCBkYXRhICVzJywgZGF0YSk7XG4gIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChwYWNrZXQsIGluZGV4LCB0b3RhbCkge1xuICAgIC8vIGlmIGl0cyB0aGUgZmlyc3QgbWVzc2FnZSB3ZSBjb25zaWRlciB0aGUgdHJhbnNwb3J0IG9wZW5cbiAgICBpZiAoJ29wZW5pbmcnID09PSBzZWxmLnJlYWR5U3RhdGUpIHtcbiAgICAgIHNlbGYub25PcGVuKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgaXRzIGEgY2xvc2UgcGFja2V0LCB3ZSBjbG9zZSB0aGUgb25nb2luZyByZXF1ZXN0c1xuICAgIGlmICgnY2xvc2UnID09PSBwYWNrZXQudHlwZSkge1xuICAgICAgc2VsZi5vbkNsb3NlKCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gb3RoZXJ3aXNlIGJ5cGFzcyBvbkRhdGEgYW5kIGhhbmRsZSB0aGUgbWVzc2FnZVxuICAgIHNlbGYub25QYWNrZXQocGFja2V0KTtcbiAgfTtcblxuICAvLyBkZWNvZGUgcGF5bG9hZFxuICBwYXJzZXIuZGVjb2RlUGF5bG9hZChkYXRhLCB0aGlzLnNvY2tldC5iaW5hcnlUeXBlLCBjYWxsYmFjayk7XG5cbiAgLy8gaWYgYW4gZXZlbnQgZGlkIG5vdCB0cmlnZ2VyIGNsb3NpbmdcbiAgaWYgKCdjbG9zZWQnICE9PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAvLyBpZiB3ZSBnb3QgZGF0YSB3ZSdyZSBub3QgcG9sbGluZ1xuICAgIHRoaXMucG9sbGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZW1pdCgncG9sbENvbXBsZXRlJyk7XG5cbiAgICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICAgIHRoaXMucG9sbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygnaWdub3JpbmcgcG9sbCAtIHRyYW5zcG9ydCBzdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBGb3IgcG9sbGluZywgc2VuZCBhIGNsb3NlIHBhY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgZnVuY3Rpb24gY2xvc2UgKCkge1xuICAgIGRlYnVnKCd3cml0aW5nIGNsb3NlIHBhY2tldCcpO1xuICAgIHNlbGYud3JpdGUoW3sgdHlwZTogJ2Nsb3NlJyB9XSk7XG4gIH1cblxuICBpZiAoJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1ZygndHJhbnNwb3J0IG9wZW4gLSBjbG9zaW5nJyk7XG4gICAgY2xvc2UoKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpbiBjYXNlIHdlJ3JlIHRyeWluZyB0byBjbG9zZSB3aGlsZVxuICAgIC8vIGhhbmRzaGFraW5nIGlzIGluIHByb2dyZXNzIChHSC0xNjQpXG4gICAgZGVidWcoJ3RyYW5zcG9ydCBub3Qgb3BlbiAtIGRlZmVycmluZyBjbG9zZScpO1xuICAgIHRoaXMub25jZSgnb3BlbicsIGNsb3NlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXcml0ZXMgYSBwYWNrZXRzIHBheWxvYWQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gZGF0YSBwYWNrZXRzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkcmFpbiBjYWxsYmFja1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgdmFyIGNhbGxiYWNrZm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi53cml0YWJsZSA9IHRydWU7XG4gICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICB9O1xuXG4gIHBhcnNlci5lbmNvZGVQYXlsb2FkKHBhY2tldHMsIHRoaXMuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgc2VsZi5kb1dyaXRlKGRhdGEsIGNhbGxiYWNrZm4pO1xuICB9KTtcbn07XG5cbi8qKlxuICogR2VuZXJhdGVzIHVyaSBmb3IgY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS51cmkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICdodHRwcycgOiAnaHR0cCc7XG4gIHZhciBwb3J0ID0gJyc7XG5cbiAgLy8gY2FjaGUgYnVzdGluZyBpcyBmb3JjZWRcbiAgaWYgKGZhbHNlICE9PSB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzKSB7XG4gICAgcXVlcnlbdGhpcy50aW1lc3RhbXBQYXJhbV0gPSB5ZWFzdCgpO1xuICB9XG5cbiAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5ICYmICFxdWVyeS5zaWQpIHtcbiAgICBxdWVyeS5iNjQgPSAxO1xuICB9XG5cbiAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgLy8gYXZvaWQgcG9ydCBpZiBkZWZhdWx0IGZvciBzY2hlbWFcbiAgaWYgKHRoaXMucG9ydCAmJiAoKCdodHRwcycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICAoJ2h0dHAnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDgwKSkpIHtcbiAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICB9XG5cbiAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xufTtcbiIsIi8qIGdsb2JhbCBCbG9iIEZpbGUgKi9cblxuLypcbiAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gKi9cblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgd2l0aE5hdGl2ZUJsb2IgPSB0eXBlb2YgQmxvYiA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoQmxvYikgPT09ICdbb2JqZWN0IEJsb2JDb25zdHJ1Y3Rvcl0nO1xudmFyIHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEZpbGUpID09PSAnW29iamVjdCBGaWxlQ29uc3RydWN0b3JdJztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0JpbmFyeTtcblxuLyoqXG4gKiBDaGVja3MgZm9yIGJpbmFyeSBkYXRhLlxuICpcbiAqIFN1cHBvcnRzIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEJsb2IgYW5kIEZpbGUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFueXRoaW5nXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGhhc0JpbmFyeSAob2JqKSB7XG4gIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKGhhc0JpbmFyeShvYmpbaV0pKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgQnVmZmVyLmlzQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB8fFxuICAgICh0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHx8XG4gICAgKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgKHdpdGhOYXRpdmVGaWxlICYmIG9iaiBpbnN0YW5jZW9mIEZpbGUpXG4gICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gc2VlOiBodHRwczovL2dpdGh1Yi5jb20vQXV0b21hdHRpYy9oYXMtYmluYXJ5L3B1bGwvNFxuICBpZiAob2JqLnRvSlNPTiAmJiB0eXBlb2Ygb2JqLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGhhc0JpbmFyeShvYmoudG9KU09OKCksIHRydWUpO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICYmIGhhc0JpbmFyeShvYmpba2V5XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFscGhhYmV0ID0gJzAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6LV8nLnNwbGl0KCcnKVxuICAsIGxlbmd0aCA9IDY0XG4gICwgbWFwID0ge31cbiAgLCBzZWVkID0gMFxuICAsIGkgPSAwXG4gICwgcHJldjtcblxuLyoqXG4gKiBSZXR1cm4gYSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBudW0gVGhlIG51bWJlciB0byBjb252ZXJ0LlxuICogQHJldHVybnMge1N0cmluZ30gVGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgbnVtYmVyLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZW5jb2RlKG51bSkge1xuICB2YXIgZW5jb2RlZCA9ICcnO1xuXG4gIGRvIHtcbiAgICBlbmNvZGVkID0gYWxwaGFiZXRbbnVtICUgbGVuZ3RoXSArIGVuY29kZWQ7XG4gICAgbnVtID0gTWF0aC5mbG9vcihudW0gLyBsZW5ndGgpO1xuICB9IHdoaWxlIChudW0gPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGludGVnZXIgdmFsdWUgc3BlY2lmaWVkIGJ5IHRoZSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgaW50ZWdlciB2YWx1ZSByZXByZXNlbnRlZCBieSB0aGUgc3RyaW5nLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICB2YXIgZGVjb2RlZCA9IDA7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGRlY29kZWQgPSBkZWNvZGVkICogbGVuZ3RoICsgbWFwW3N0ci5jaGFyQXQoaSldO1xuICB9XG5cbiAgcmV0dXJuIGRlY29kZWQ7XG59XG5cbi8qKlxuICogWWVhc3Q6IEEgdGlueSBncm93aW5nIGlkIGdlbmVyYXRvci5cbiAqXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBBIHVuaXF1ZSBpZC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIHllYXN0KCkge1xuICB2YXIgbm93ID0gZW5jb2RlKCtuZXcgRGF0ZSgpKTtcblxuICBpZiAobm93ICE9PSBwcmV2KSByZXR1cm4gc2VlZCA9IDAsIHByZXYgPSBub3c7XG4gIHJldHVybiBub3cgKycuJysgZW5jb2RlKHNlZWQrKyk7XG59XG5cbi8vXG4vLyBNYXAgZWFjaCBjaGFyYWN0ZXIgdG8gaXRzIGluZGV4LlxuLy9cbmZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIG1hcFthbHBoYWJldFtpXV0gPSBpO1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBgeWVhc3RgLCBgZW5jb2RlYCBhbmQgYGRlY29kZWAgZnVuY3Rpb25zLlxuLy9cbnllYXN0LmVuY29kZSA9IGVuY29kZTtcbnllYXN0LmRlY29kZSA9IGRlY29kZTtcbm1vZHVsZS5leHBvcnRzID0geWVhc3Q7XG4iLCJcbnZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnIsIG9iail7XG4gIGlmIChpbmRleE9mKSByZXR1cm4gYXJyLmluZGV4T2Yob2JqKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAoYXJyW2ldID09PSBvYmopIHJldHVybiBpO1xuICB9XG4gIHJldHVybiAtMTtcbn07IiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHBhcnNlciA9IHJlcXVpcmUoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciB0b0FycmF5ID0gcmVxdWlyZSgndG8tYXJyYXknKTtcbnZhciBvbiA9IHJlcXVpcmUoJy4vb24nKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnY29tcG9uZW50LWJpbmQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQ6c29ja2V0Jyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBoYXNCaW4gPSByZXF1aXJlKCdoYXMtYmluYXJ5MicpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFNvY2tldDtcblxuLyoqXG4gKiBJbnRlcm5hbCBldmVudHMgKGJsYWNrbGlzdGVkKS5cbiAqIFRoZXNlIGV2ZW50cyBjYW4ndCBiZSBlbWl0dGVkIGJ5IHRoZSB1c2VyLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBldmVudHMgPSB7XG4gIGNvbm5lY3Q6IDEsXG4gIGNvbm5lY3RfZXJyb3I6IDEsXG4gIGNvbm5lY3RfdGltZW91dDogMSxcbiAgY29ubmVjdGluZzogMSxcbiAgZGlzY29ubmVjdDogMSxcbiAgZXJyb3I6IDEsXG4gIHJlY29ubmVjdDogMSxcbiAgcmVjb25uZWN0X2F0dGVtcHQ6IDEsXG4gIHJlY29ubmVjdF9mYWlsZWQ6IDEsXG4gIHJlY29ubmVjdF9lcnJvcjogMSxcbiAgcmVjb25uZWN0aW5nOiAxLFxuICBwaW5nOiAxLFxuICBwb25nOiAxXG59O1xuXG4vKipcbiAqIFNob3J0Y3V0IHRvIGBFbWl0dGVyI2VtaXRgLlxuICovXG5cbnZhciBlbWl0ID0gRW1pdHRlci5wcm90b3R5cGUuZW1pdDtcblxuLyoqXG4gKiBgU29ja2V0YCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFNvY2tldCAoaW8sIG5zcCwgb3B0cykge1xuICB0aGlzLmlvID0gaW87XG4gIHRoaXMubnNwID0gbnNwO1xuICB0aGlzLmpzb24gPSB0aGlzOyAvLyBjb21wYXRcbiAgdGhpcy5pZHMgPSAwO1xuICB0aGlzLmFja3MgPSB7fTtcbiAgdGhpcy5yZWNlaXZlQnVmZmVyID0gW107XG4gIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xuICB0aGlzLmNvbm5lY3RlZCA9IGZhbHNlO1xuICB0aGlzLmRpc2Nvbm5lY3RlZCA9IHRydWU7XG4gIHRoaXMuZmxhZ3MgPSB7fTtcbiAgaWYgKG9wdHMgJiYgb3B0cy5xdWVyeSkge1xuICAgIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5O1xuICB9XG4gIGlmICh0aGlzLmlvLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgLlxuICovXG5cbkVtaXR0ZXIoU29ja2V0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogU3Vic2NyaWJlIHRvIG9wZW4sIGNsb3NlIGFuZCBwYWNrZXQgZXZlbnRzXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zdWJFdmVudHMgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnN1YnMpIHJldHVybjtcblxuICB2YXIgaW8gPSB0aGlzLmlvO1xuICB0aGlzLnN1YnMgPSBbXG4gICAgb24oaW8sICdvcGVuJywgYmluZCh0aGlzLCAnb25vcGVuJykpLFxuICAgIG9uKGlvLCAncGFja2V0JywgYmluZCh0aGlzLCAnb25wYWNrZXQnKSksXG4gICAgb24oaW8sICdjbG9zZScsIGJpbmQodGhpcywgJ29uY2xvc2UnKSlcbiAgXTtcbn07XG5cbi8qKlxuICogXCJPcGVuc1wiIHRoZSBzb2NrZXQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9wZW4gPVxuU29ja2V0LnByb3RvdHlwZS5jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5jb25uZWN0ZWQpIHJldHVybiB0aGlzO1xuXG4gIHRoaXMuc3ViRXZlbnRzKCk7XG4gIHRoaXMuaW8ub3BlbigpOyAvLyBlbnN1cmUgb3BlblxuICBpZiAoJ29wZW4nID09PSB0aGlzLmlvLnJlYWR5U3RhdGUpIHRoaXMub25vcGVuKCk7XG4gIHRoaXMuZW1pdCgnY29ubmVjdGluZycpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2VuZHMgYSBgbWVzc2FnZWAgZXZlbnQuXG4gKlxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cyk7XG4gIGFyZ3MudW5zaGlmdCgnbWVzc2FnZScpO1xuICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBPdmVycmlkZSBgZW1pdGAuXG4gKiBJZiB0aGUgZXZlbnQgaXMgaW4gYGV2ZW50c2AsIGl0J3MgZW1pdHRlZCBub3JtYWxseS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgbmFtZVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIChldikge1xuICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KGV2KSkge1xuICAgIGVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICB2YXIgcGFja2V0ID0ge1xuICAgIHR5cGU6ICh0aGlzLmZsYWdzLmJpbmFyeSAhPT0gdW5kZWZpbmVkID8gdGhpcy5mbGFncy5iaW5hcnkgOiBoYXNCaW4oYXJncykpID8gcGFyc2VyLkJJTkFSWV9FVkVOVCA6IHBhcnNlci5FVkVOVCxcbiAgICBkYXRhOiBhcmdzXG4gIH07XG5cbiAgcGFja2V0Lm9wdGlvbnMgPSB7fTtcbiAgcGFja2V0Lm9wdGlvbnMuY29tcHJlc3MgPSAhdGhpcy5mbGFncyB8fCBmYWxzZSAhPT0gdGhpcy5mbGFncy5jb21wcmVzcztcblxuICAvLyBldmVudCBhY2sgY2FsbGJhY2tcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0pIHtcbiAgICBkZWJ1ZygnZW1pdHRpbmcgcGFja2V0IHdpdGggYWNrIGlkICVkJywgdGhpcy5pZHMpO1xuICAgIHRoaXMuYWNrc1t0aGlzLmlkc10gPSBhcmdzLnBvcCgpO1xuICAgIHBhY2tldC5pZCA9IHRoaXMuaWRzKys7XG4gIH1cblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICB0aGlzLnBhY2tldChwYWNrZXQpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuc2VuZEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIH1cblxuICB0aGlzLmZsYWdzID0ge307XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICBwYWNrZXQubnNwID0gdGhpcy5uc3A7XG4gIHRoaXMuaW8ucGFja2V0KHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBgb3BlbmAuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCd0cmFuc3BvcnQgaXMgb3BlbiAtIGNvbm5lY3RpbmcnKTtcblxuICAvLyB3cml0ZSBjb25uZWN0IHBhY2tldCBpZiBuZWNlc3NhcnlcbiAgaWYgKCcvJyAhPT0gdGhpcy5uc3ApIHtcbiAgICBpZiAodGhpcy5xdWVyeSkge1xuICAgICAgdmFyIHF1ZXJ5ID0gdHlwZW9mIHRoaXMucXVlcnkgPT09ICdvYmplY3QnID8gcGFyc2Vxcy5lbmNvZGUodGhpcy5xdWVyeSkgOiB0aGlzLnF1ZXJ5O1xuICAgICAgZGVidWcoJ3NlbmRpbmcgY29ubmVjdCBwYWNrZXQgd2l0aCBxdWVyeSAlcycsIHF1ZXJ5KTtcbiAgICAgIHRoaXMucGFja2V0KHt0eXBlOiBwYXJzZXIuQ09OTkVDVCwgcXVlcnk6IHF1ZXJ5fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucGFja2V0KHt0eXBlOiBwYXJzZXIuQ09OTkVDVH0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgYGNsb3NlYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVhc29uXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gIGRlYnVnKCdjbG9zZSAoJXMpJywgcmVhc29uKTtcbiAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICBkZWxldGUgdGhpcy5pZDtcbiAgdGhpcy5lbWl0KCdkaXNjb25uZWN0JywgcmVhc29uKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdpdGggc29ja2V0IHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9ucGFja2V0ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB2YXIgc2FtZU5hbWVzcGFjZSA9IHBhY2tldC5uc3AgPT09IHRoaXMubnNwO1xuICB2YXIgcm9vdE5hbWVzcGFjZUVycm9yID0gcGFja2V0LnR5cGUgPT09IHBhcnNlci5FUlJPUiAmJiBwYWNrZXQubnNwID09PSAnLyc7XG5cbiAgaWYgKCFzYW1lTmFtZXNwYWNlICYmICFyb290TmFtZXNwYWNlRXJyb3IpIHJldHVybjtcblxuICBzd2l0Y2ggKHBhY2tldC50eXBlKSB7XG4gICAgY2FzZSBwYXJzZXIuQ09OTkVDVDpcbiAgICAgIHRoaXMub25jb25uZWN0KCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkVWRU5UOlxuICAgICAgdGhpcy5vbmV2ZW50KHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkJJTkFSWV9FVkVOVDpcbiAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5BQ0s6XG4gICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkJJTkFSWV9BQ0s6XG4gICAgICB0aGlzLm9uYWNrKHBhY2tldCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgcGFyc2VyLkRJU0NPTk5FQ1Q6XG4gICAgICB0aGlzLm9uZGlzY29ubmVjdCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5FUlJPUjpcbiAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBwYWNrZXQuZGF0YSk7XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBldmVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uZXZlbnQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIHZhciBhcmdzID0gcGFja2V0LmRhdGEgfHwgW107XG4gIGRlYnVnKCdlbWl0dGluZyBldmVudCAlaicsIGFyZ3MpO1xuXG4gIGlmIChudWxsICE9IHBhY2tldC5pZCkge1xuICAgIGRlYnVnKCdhdHRhY2hpbmcgYWNrIGNhbGxiYWNrIHRvIGV2ZW50Jyk7XG4gICAgYXJncy5wdXNoKHRoaXMuYWNrKHBhY2tldC5pZCkpO1xuICB9XG5cbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnJlY2VpdmVCdWZmZXIucHVzaChhcmdzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBQcm9kdWNlcyBhbiBhY2sgY2FsbGJhY2sgdG8gZW1pdCB3aXRoIGFuIGV2ZW50LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuYWNrID0gZnVuY3Rpb24gKGlkKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNlbnQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAvLyBwcmV2ZW50IGRvdWJsZSBjYWxsYmFja3NcbiAgICBpZiAoc2VudCkgcmV0dXJuO1xuICAgIHNlbnQgPSB0cnVlO1xuICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICAgIGRlYnVnKCdzZW5kaW5nIGFjayAlaicsIGFyZ3MpO1xuXG4gICAgc2VsZi5wYWNrZXQoe1xuICAgICAgdHlwZTogaGFzQmluKGFyZ3MpID8gcGFyc2VyLkJJTkFSWV9BQ0sgOiBwYXJzZXIuQUNLLFxuICAgICAgaWQ6IGlkLFxuICAgICAgZGF0YTogYXJnc1xuICAgIH0pO1xuICB9O1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNlcnZlciBhY2tub3dsZWdlbWVudC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uYWNrID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB2YXIgYWNrID0gdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgYWNrKSB7XG4gICAgZGVidWcoJ2NhbGxpbmcgYWNrICVzIHdpdGggJWonLCBwYWNrZXQuaWQsIHBhY2tldC5kYXRhKTtcbiAgICBhY2suYXBwbHkodGhpcywgcGFja2V0LmRhdGEpO1xuICAgIGRlbGV0ZSB0aGlzLmFja3NbcGFja2V0LmlkXTtcbiAgfSBlbHNlIHtcbiAgICBkZWJ1ZygnYmFkIGFjayAlcycsIHBhY2tldC5pZCk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc2VydmVyIGNvbm5lY3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5lbWl0KCdjb25uZWN0Jyk7XG4gIHRoaXMuZW1pdEJ1ZmZlcmVkKCk7XG59O1xuXG4vKipcbiAqIEVtaXQgYnVmZmVyZWQgZXZlbnRzIChyZWNlaXZlZCBhbmQgZW1pdHRlZCkuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5lbWl0QnVmZmVyZWQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5yZWNlaXZlQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgZW1pdC5hcHBseSh0aGlzLCB0aGlzLnJlY2VpdmVCdWZmZXJbaV0pO1xuICB9XG4gIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLnNlbmRCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLnBhY2tldCh0aGlzLnNlbmRCdWZmZXJbaV0pO1xuICB9XG4gIHRoaXMuc2VuZEJ1ZmZlciA9IFtdO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzZXJ2ZXIgZGlzY29ubmVjdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgZGVidWcoJ3NlcnZlciBkaXNjb25uZWN0ICglcyknLCB0aGlzLm5zcCk7XG4gIHRoaXMuZGVzdHJveSgpO1xuICB0aGlzLm9uY2xvc2UoJ2lvIHNlcnZlciBkaXNjb25uZWN0Jyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGZvcmNlZCBjbGllbnQvc2VydmVyIHNpZGUgZGlzY29ubmVjdGlvbnMsXG4gKiB0aGlzIG1ldGhvZCBlbnN1cmVzIHRoZSBtYW5hZ2VyIHN0b3BzIHRyYWNraW5nIHVzIGFuZFxuICogdGhhdCByZWNvbm5lY3Rpb25zIGRvbid0IGdldCB0cmlnZ2VyZWQgZm9yIHRoaXMuXG4gKlxuICogQGFwaSBwcml2YXRlLlxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc3Vicykge1xuICAgIC8vIGNsZWFuIHN1YnNjcmlwdGlvbnMgdG8gYXZvaWQgcmVjb25uZWN0aW9uc1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0aGlzLnN1YnNbaV0uZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnN1YnMgPSBudWxsO1xuICB9XG5cbiAgdGhpcy5pby5kZXN0cm95KHRoaXMpO1xufTtcblxuLyoqXG4gKiBEaXNjb25uZWN0cyB0aGUgc29ja2V0IG1hbnVhbGx5LlxuICpcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNsb3NlID1cblNvY2tldC5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgZGVidWcoJ3BlcmZvcm1pbmcgZGlzY29ubmVjdCAoJXMpJywgdGhpcy5uc3ApO1xuICAgIHRoaXMucGFja2V0KHsgdHlwZTogcGFyc2VyLkRJU0NPTk5FQ1QgfSk7XG4gIH1cblxuICAvLyByZW1vdmUgc29ja2V0IGZyb20gcG9vbFxuICB0aGlzLmRlc3Ryb3koKTtcblxuICBpZiAodGhpcy5jb25uZWN0ZWQpIHtcbiAgICAvLyBmaXJlIGV2ZW50c1xuICAgIHRoaXMub25jbG9zZSgnaW8gY2xpZW50IGRpc2Nvbm5lY3QnKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY29tcHJlc3MgZmxhZy5cbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGlmIGB0cnVlYCwgY29tcHJlc3NlcyB0aGUgc2VuZGluZyBkYXRhXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jb21wcmVzcyA9IGZ1bmN0aW9uIChjb21wcmVzcykge1xuICB0aGlzLmZsYWdzLmNvbXByZXNzID0gY29tcHJlc3M7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBiaW5hcnkgZmxhZ1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gd2hldGhlciB0aGUgZW1pdHRlZCBkYXRhIGNvbnRhaW5zIGJpbmFyeVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuYmluYXJ5ID0gZnVuY3Rpb24gKGJpbmFyeSkge1xuICB0aGlzLmZsYWdzLmJpbmFyeSA9IGJpbmFyeTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gb247XG5cbi8qKlxuICogSGVscGVyIGZvciBzdWJzY3JpcHRpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEV2ZW50RW1pdHRlcn0gb2JqIHdpdGggYEVtaXR0ZXJgIG1peGluIG9yIGBFdmVudEVtaXR0ZXJgXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgbmFtZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gb24gKG9iaiwgZXYsIGZuKSB7XG4gIG9iai5vbihldiwgZm4pO1xuICByZXR1cm4ge1xuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9iai5yZW1vdmVMaXN0ZW5lcihldiwgZm4pO1xuICAgIH1cbiAgfTtcbn1cbiIsIi8qKlxuICogU2xpY2UgcmVmZXJlbmNlLlxuICovXG5cbnZhciBzbGljZSA9IFtdLnNsaWNlO1xuXG4vKipcbiAqIEJpbmQgYG9iamAgdG8gYGZuYC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufFN0cmluZ30gZm4gb3Igc3RyaW5nXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmosIGZuKXtcbiAgaWYgKCdzdHJpbmcnID09IHR5cGVvZiBmbikgZm4gPSBvYmpbZm5dO1xuICBpZiAoJ2Z1bmN0aW9uJyAhPSB0eXBlb2YgZm4pIHRocm93IG5ldyBFcnJvcignYmluZCgpIHJlcXVpcmVzIGEgZnVuY3Rpb24nKTtcbiAgdmFyIGFyZ3MgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMik7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIHJldHVybiBmbi5hcHBseShvYmosIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICB9XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxudmFyIHVybCA9IHJlcXVpcmUoJy4vdXJsJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIE1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ3NvY2tldC5pby1jbGllbnQnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBsb29rdXA7XG5cbi8qKlxuICogTWFuYWdlcnMgY2FjaGUuXG4gKi9cblxudmFyIGNhY2hlID0gZXhwb3J0cy5tYW5hZ2VycyA9IHt9O1xuXG4vKipcbiAqIExvb2tzIHVwIGFuIGV4aXN0aW5nIGBNYW5hZ2VyYCBmb3IgbXVsdGlwbGV4aW5nLlxuICogSWYgdGhlIHVzZXIgc3VtbW9uczpcbiAqXG4gKiAgIGBpbygnaHR0cDovL2xvY2FsaG9zdC9hJyk7YFxuICogICBgaW8oJ2h0dHA6Ly9sb2NhbGhvc3QvYicpO2BcbiAqXG4gKiBXZSByZXVzZSB0aGUgZXhpc3RpbmcgaW5zdGFuY2UgYmFzZWQgb24gc2FtZSBzY2hlbWUvcG9ydC9ob3N0LFxuICogYW5kIHdlIGluaXRpYWxpemUgc29ja2V0cyBmb3IgZWFjaCBuYW1lc3BhY2UuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb29rdXAgKHVyaSwgb3B0cykge1xuICBpZiAodHlwZW9mIHVyaSA9PT0gJ29iamVjdCcpIHtcbiAgICBvcHRzID0gdXJpO1xuICAgIHVyaSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIHZhciBwYXJzZWQgPSB1cmwodXJpKTtcbiAgdmFyIHNvdXJjZSA9IHBhcnNlZC5zb3VyY2U7XG4gIHZhciBpZCA9IHBhcnNlZC5pZDtcbiAgdmFyIHBhdGggPSBwYXJzZWQucGF0aDtcbiAgdmFyIHNhbWVOYW1lc3BhY2UgPSBjYWNoZVtpZF0gJiYgcGF0aCBpbiBjYWNoZVtpZF0ubnNwcztcbiAgdmFyIG5ld0Nvbm5lY3Rpb24gPSBvcHRzLmZvcmNlTmV3IHx8IG9wdHNbJ2ZvcmNlIG5ldyBjb25uZWN0aW9uJ10gfHxcbiAgICAgICAgICAgICAgICAgICAgICBmYWxzZSA9PT0gb3B0cy5tdWx0aXBsZXggfHwgc2FtZU5hbWVzcGFjZTtcblxuICB2YXIgaW87XG5cbiAgaWYgKG5ld0Nvbm5lY3Rpb24pIHtcbiAgICBkZWJ1ZygnaWdub3Jpbmcgc29ja2V0IGNhY2hlIGZvciAlcycsIHNvdXJjZSk7XG4gICAgaW8gPSBNYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFjYWNoZVtpZF0pIHtcbiAgICAgIGRlYnVnKCduZXcgaW8gaW5zdGFuY2UgZm9yICVzJywgc291cmNlKTtcbiAgICAgIGNhY2hlW2lkXSA9IE1hbmFnZXIoc291cmNlLCBvcHRzKTtcbiAgICB9XG4gICAgaW8gPSBjYWNoZVtpZF07XG4gIH1cbiAgaWYgKHBhcnNlZC5xdWVyeSAmJiAhb3B0cy5xdWVyeSkge1xuICAgIG9wdHMucXVlcnkgPSBwYXJzZWQucXVlcnk7XG4gIH1cbiAgcmV0dXJuIGlvLnNvY2tldChwYXJzZWQucGF0aCwgb3B0cyk7XG59XG5cbi8qKlxuICogUHJvdG9jb2wgdmVyc2lvbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7XG5cbi8qKlxuICogYGNvbm5lY3RgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmlcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5jb25uZWN0ID0gbG9va3VwO1xuXG4vKipcbiAqIEV4cG9zZSBjb25zdHJ1Y3RvcnMgZm9yIHN0YW5kYWxvbmUgYnVpbGQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLk1hbmFnZXIgPSByZXF1aXJlKCcuL21hbmFnZXInKTtcbmV4cG9ydHMuU29ja2V0ID0gcmVxdWlyZSgnLi9zb2NrZXQnKTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBwYXJzZXVyaSA9IHJlcXVpcmUoJ3BhcnNldXJpJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50OnVybCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gdXJsO1xuXG4vKipcbiAqIFVSTCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybFxuICogQHBhcmFtIHtPYmplY3R9IEFuIG9iamVjdCBtZWFudCB0byBtaW1pYyB3aW5kb3cubG9jYXRpb24uXG4gKiAgICAgICAgICAgICAgICAgRGVmYXVsdHMgdG8gd2luZG93LmxvY2F0aW9uLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiB1cmwgKHVyaSwgbG9jKSB7XG4gIHZhciBvYmogPSB1cmk7XG5cbiAgLy8gZGVmYXVsdCB0byB3aW5kb3cubG9jYXRpb25cbiAgbG9jID0gbG9jIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxvY2F0aW9uKTtcbiAgaWYgKG51bGwgPT0gdXJpKSB1cmkgPSBsb2MucHJvdG9jb2wgKyAnLy8nICsgbG9jLmhvc3Q7XG5cbiAgLy8gcmVsYXRpdmUgcGF0aCBzdXBwb3J0XG4gIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHVyaSkge1xuICAgIGlmICgnLycgPT09IHVyaS5jaGFyQXQoMCkpIHtcbiAgICAgIGlmICgnLycgPT09IHVyaS5jaGFyQXQoMSkpIHtcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgdXJpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJpID0gbG9jLmhvc3QgKyB1cmk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEvXihodHRwcz98d3NzPyk6XFwvXFwvLy50ZXN0KHVyaSkpIHtcbiAgICAgIGRlYnVnKCdwcm90b2NvbC1sZXNzIHVybCAlcycsIHVyaSk7XG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBsb2MpIHtcbiAgICAgICAgdXJpID0gbG9jLnByb3RvY29sICsgJy8vJyArIHVyaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVyaSA9ICdodHRwczovLycgKyB1cmk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcGFyc2VcbiAgICBkZWJ1ZygncGFyc2UgJXMnLCB1cmkpO1xuICAgIG9iaiA9IHBhcnNldXJpKHVyaSk7XG4gIH1cblxuICAvLyBtYWtlIHN1cmUgd2UgdHJlYXQgYGxvY2FsaG9zdDo4MGAgYW5kIGBsb2NhbGhvc3RgIGVxdWFsbHlcbiAgaWYgKCFvYmoucG9ydCkge1xuICAgIGlmICgvXihodHRwfHdzKSQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgb2JqLnBvcnQgPSAnODAnO1xuICAgIH0gZWxzZSBpZiAoL14oaHR0cHx3cylzJC8udGVzdChvYmoucHJvdG9jb2wpKSB7XG4gICAgICBvYmoucG9ydCA9ICc0NDMnO1xuICAgIH1cbiAgfVxuXG4gIG9iai5wYXRoID0gb2JqLnBhdGggfHwgJy8nO1xuXG4gIHZhciBpcHY2ID0gb2JqLmhvc3QuaW5kZXhPZignOicpICE9PSAtMTtcbiAgdmFyIGhvc3QgPSBpcHY2ID8gJ1snICsgb2JqLmhvc3QgKyAnXScgOiBvYmouaG9zdDtcblxuICAvLyBkZWZpbmUgdW5pcXVlIGlkXG4gIG9iai5pZCA9IG9iai5wcm90b2NvbCArICc6Ly8nICsgaG9zdCArICc6JyArIG9iai5wb3J0O1xuICAvLyBkZWZpbmUgaHJlZlxuICBvYmouaHJlZiA9IG9iai5wcm90b2NvbCArICc6Ly8nICsgaG9zdCArIChsb2MgJiYgbG9jLnBvcnQgPT09IG9iai5wb3J0ID8gJycgOiAoJzonICsgb2JqLnBvcnQpKTtcblxuICByZXR1cm4gb2JqO1xufVxuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKi9cblxuZnVuY3Rpb24gc2V0dXAoZW52KSB7XG5cdGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmRlZmF1bHQgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuY29lcmNlID0gY29lcmNlO1xuXHRjcmVhdGVEZWJ1Zy5kaXNhYmxlID0gZGlzYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlID0gZW5hYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGVkID0gZW5hYmxlZDtcblx0Y3JlYXRlRGVidWcuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuXHQqL1xuXHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMgPSBbXTtcblxuXHQvKipcblx0KiBUaGUgY3VycmVudGx5IGFjdGl2ZSBkZWJ1ZyBtb2RlIG5hbWVzLCBhbmQgbmFtZXMgdG8gc2tpcC5cblx0Ki9cblxuXHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRjcmVhdGVEZWJ1Zy5za2lwcyA9IFtdO1xuXG5cdC8qKlxuXHQqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cblx0KlxuXHQqIFZhbGlkIGtleSBuYW1lcyBhcmUgYSBzaW5nbGUsIGxvd2VyIG9yIHVwcGVyLWNhc2UgbGV0dGVyLCBpLmUuIFwiblwiIGFuZCBcIk5cIi5cblx0Ki9cblx0Y3JlYXRlRGVidWcuZm9ybWF0dGVycyA9IHt9O1xuXG5cdC8qKlxuXHQqIFNlbGVjdHMgYSBjb2xvciBmb3IgYSBkZWJ1ZyBuYW1lc3BhY2Vcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlIFRoZSBuYW1lc3BhY2Ugc3RyaW5nIGZvciB0aGUgZm9yIHRoZSBkZWJ1ZyBpbnN0YW5jZSB0byBiZSBjb2xvcmVkXG5cdCogQHJldHVybiB7TnVtYmVyfFN0cmluZ30gQW4gQU5TSSBjb2xvciBjb2RlIGZvciB0aGUgZ2l2ZW4gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHNlbGVjdENvbG9yKG5hbWVzcGFjZSkge1xuXHRcdGxldCBoYXNoID0gMDtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXNwYWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRoYXNoID0gKChoYXNoIDw8IDUpIC0gaGFzaCkgKyBuYW1lc3BhY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNyZWF0ZURlYnVnLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGNyZWF0ZURlYnVnLmNvbG9ycy5sZW5ndGhdO1xuXHR9XG5cdGNyZWF0ZURlYnVnLnNlbGVjdENvbG9yID0gc2VsZWN0Q29sb3I7XG5cblx0LyoqXG5cdCogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQHJldHVybiB7RnVuY3Rpb259XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gY3JlYXRlRGVidWcobmFtZXNwYWNlKSB7XG5cdFx0bGV0IHByZXZUaW1lO1xuXG5cdFx0ZnVuY3Rpb24gZGVidWcoLi4uYXJncykge1xuXHRcdFx0Ly8gRGlzYWJsZWQ/XG5cdFx0XHRpZiAoIWRlYnVnLmVuYWJsZWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBzZWxmID0gZGVidWc7XG5cblx0XHRcdC8vIFNldCBgZGlmZmAgdGltZXN0YW1wXG5cdFx0XHRjb25zdCBjdXJyID0gTnVtYmVyKG5ldyBEYXRlKCkpO1xuXHRcdFx0Y29uc3QgbXMgPSBjdXJyIC0gKHByZXZUaW1lIHx8IGN1cnIpO1xuXHRcdFx0c2VsZi5kaWZmID0gbXM7XG5cdFx0XHRzZWxmLnByZXYgPSBwcmV2VGltZTtcblx0XHRcdHNlbGYuY3VyciA9IGN1cnI7XG5cdFx0XHRwcmV2VGltZSA9IGN1cnI7XG5cblx0XHRcdGFyZ3NbMF0gPSBjcmVhdGVEZWJ1Zy5jb2VyY2UoYXJnc1swXSk7XG5cblx0XHRcdGlmICh0eXBlb2YgYXJnc1swXSAhPT0gJ3N0cmluZycpIHtcblx0XHRcdFx0Ly8gQW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cblx0XHRcdFx0YXJncy51bnNoaWZ0KCclTycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCAobWF0Y2gsIGZvcm1hdCkgPT4ge1xuXHRcdFx0XHQvLyBJZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG5cdFx0XHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0XHRjb25zdCBmb3JtYXR0ZXIgPSBjcmVhdGVEZWJ1Zy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG5cdFx0XHRcdGlmICh0eXBlb2YgZm9ybWF0dGVyID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdFx0Y29uc3QgdmFsID0gYXJnc1tpbmRleF07XG5cdFx0XHRcdFx0bWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG5cdFx0XHRcdFx0Ly8gTm93IHdlIG5lZWQgdG8gcmVtb3ZlIGBhcmdzW2luZGV4XWAgc2luY2UgaXQncyBpbmxpbmVkIGluIHRoZSBgZm9ybWF0YFxuXHRcdFx0XHRcdGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0XHRpbmRleC0tO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBtYXRjaDtcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBBcHBseSBlbnYtc3BlY2lmaWMgZm9ybWF0dGluZyAoY29sb3JzLCBldGMuKVxuXHRcdFx0Y3JlYXRlRGVidWcuZm9ybWF0QXJncy5jYWxsKHNlbGYsIGFyZ3MpO1xuXG5cdFx0XHRjb25zdCBsb2dGbiA9IHNlbGYubG9nIHx8IGNyZWF0ZURlYnVnLmxvZztcblx0XHRcdGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXHRcdH1cblxuXHRcdGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcblx0XHRkZWJ1Zy5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChuYW1lc3BhY2UpO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5kZXN0cm95ID0gZGVzdHJveTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0Ly8gRGVidWcuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5cdFx0Ly8gZGVidWcucmF3TG9nID0gcmF3TG9nO1xuXG5cdFx0Ly8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcblx0XHRpZiAodHlwZW9mIGNyZWF0ZURlYnVnLmluaXQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdGNyZWF0ZURlYnVnLmluaXQoZGVidWcpO1xuXHRcdH1cblxuXHRcdGNyZWF0ZURlYnVnLmluc3RhbmNlcy5wdXNoKGRlYnVnKTtcblxuXHRcdHJldHVybiBkZWJ1Zztcblx0fVxuXG5cdGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG5cdFx0Y29uc3QgaW5kZXggPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcblx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgY3JlYXRlRGVidWcuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZURlYnVnLmluc3RhbmNlc1tpXTtcblx0XHRcdGluc3RhbmNlLmVuYWJsZWQgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCogRGlzYWJsZSBkZWJ1ZyBvdXRwdXQuXG5cdCpcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBkaXNhYmxlKCkge1xuXHRcdGNvbnN0IG5hbWVzcGFjZXMgPSBbXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5uYW1lcy5tYXAodG9OYW1lc3BhY2UpLFxuXHRcdFx0Li4uY3JlYXRlRGVidWcuc2tpcHMubWFwKHRvTmFtZXNwYWNlKS5tYXAobmFtZXNwYWNlID0+ICctJyArIG5hbWVzcGFjZSlcblx0XHRdLmpvaW4oJywnKTtcblx0XHRjcmVhdGVEZWJ1Zy5lbmFibGUoJycpO1xuXHRcdHJldHVybiBuYW1lc3BhY2VzO1xuXHR9XG5cblx0LyoqXG5cdCogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBtb2RlIG5hbWUgaXMgZW5hYmxlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVcblx0KiBAcmV0dXJuIHtCb29sZWFufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuXHRcdGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0bGV0IGk7XG5cdFx0bGV0IGxlbjtcblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQqIENvbnZlcnQgcmVnZXhwIHRvIG5hbWVzcGFjZVxuXHQqXG5cdCogQHBhcmFtIHtSZWdFeHB9IHJlZ3hlcFxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlXG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIHRvTmFtZXNwYWNlKHJlZ2V4cCkge1xuXHRcdHJldHVybiByZWdleHAudG9TdHJpbmcoKVxuXHRcdFx0LnN1YnN0cmluZygyLCByZWdleHAudG9TdHJpbmcoKS5sZW5ndGggLSAyKVxuXHRcdFx0LnJlcGxhY2UoL1xcLlxcKlxcPyQvLCAnKicpO1xuXHR9XG5cblx0LyoqXG5cdCogQ29lcmNlIGB2YWxgLlxuXHQqXG5cdCogQHBhcmFtIHtNaXhlZH0gdmFsXG5cdCogQHJldHVybiB7TWl4ZWR9XG5cdCogQGFwaSBwcml2YXRlXG5cdCovXG5cdGZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcblx0XHRpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRjcmVhdGVEZWJ1Zy5lbmFibGUoY3JlYXRlRGVidWcubG9hZCgpKTtcblxuXHRyZXR1cm4gY3JlYXRlRGVidWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0dXA7XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHcgPSBkICogNztcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNGaW5pdGUodmFsKSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oLT8oPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHdlZWtzP3x3fHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICd3ZWVrcyc6XG4gICAgY2FzZSAnd2Vlayc6XG4gICAgY2FzZSAndyc6XG4gICAgICByZXR1cm4gbiAqIHc7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtc0FicyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICB2YXIgbXNBYnMgPSBNYXRoLmFicyhtcyk7XG4gIGlmIChtc0FicyA+PSBkKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIGQsICdkYXknKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gaCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBoLCAnaG91cicpO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIHBsdXJhbChtcywgbXNBYnMsIG0sICdtaW51dGUnKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBzLCAnc2Vjb25kJyk7XG4gIH1cbiAgcmV0dXJuIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBtc0FicywgbiwgbmFtZSkge1xuICB2YXIgaXNQbHVyYWwgPSBtc0FicyA+PSBuICogMS41O1xuICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG4pICsgJyAnICsgbmFtZSArIChpc1BsdXJhbCA/ICdzJyA6ICcnKTtcbn1cbiIsIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJyMwMDAwQ0MnLCAnIzAwMDBGRicsICcjMDAzM0NDJywgJyMwMDMzRkYnLCAnIzAwNjZDQycsICcjMDA2NkZGJywgJyMwMDk5Q0MnLFxuICAnIzAwOTlGRicsICcjMDBDQzAwJywgJyMwMENDMzMnLCAnIzAwQ0M2NicsICcjMDBDQzk5JywgJyMwMENDQ0MnLCAnIzAwQ0NGRicsXG4gICcjMzMwMENDJywgJyMzMzAwRkYnLCAnIzMzMzNDQycsICcjMzMzM0ZGJywgJyMzMzY2Q0MnLCAnIzMzNjZGRicsICcjMzM5OUNDJyxcbiAgJyMzMzk5RkYnLCAnIzMzQ0MwMCcsICcjMzNDQzMzJywgJyMzM0NDNjYnLCAnIzMzQ0M5OScsICcjMzNDQ0NDJywgJyMzM0NDRkYnLFxuICAnIzY2MDBDQycsICcjNjYwMEZGJywgJyM2NjMzQ0MnLCAnIzY2MzNGRicsICcjNjZDQzAwJywgJyM2NkNDMzMnLCAnIzk5MDBDQycsXG4gICcjOTkwMEZGJywgJyM5OTMzQ0MnLCAnIzk5MzNGRicsICcjOTlDQzAwJywgJyM5OUNDMzMnLCAnI0NDMDAwMCcsICcjQ0MwMDMzJyxcbiAgJyNDQzAwNjYnLCAnI0NDMDA5OScsICcjQ0MwMENDJywgJyNDQzAwRkYnLCAnI0NDMzMwMCcsICcjQ0MzMzMzJywgJyNDQzMzNjYnLFxuICAnI0NDMzM5OScsICcjQ0MzM0NDJywgJyNDQzMzRkYnLCAnI0NDNjYwMCcsICcjQ0M2NjMzJywgJyNDQzk5MDAnLCAnI0NDOTkzMycsXG4gICcjQ0NDQzAwJywgJyNDQ0NDMzMnLCAnI0ZGMDAwMCcsICcjRkYwMDMzJywgJyNGRjAwNjYnLCAnI0ZGMDA5OScsICcjRkYwMENDJyxcbiAgJyNGRjAwRkYnLCAnI0ZGMzMwMCcsICcjRkYzMzMzJywgJyNGRjMzNjYnLCAnI0ZGMzM5OScsICcjRkYzM0NDJywgJyNGRjMzRkYnLFxuICAnI0ZGNjYwMCcsICcjRkY2NjMzJywgJyNGRjk5MDAnLCAnI0ZGOTkzMycsICcjRkZDQzAwJywgJyNGRkNDMzMnXG5dO1xuXG4vKipcbiAqIEN1cnJlbnRseSBvbmx5IFdlYktpdC1iYXNlZCBXZWIgSW5zcGVjdG9ycywgRmlyZWZveCA+PSB2MzEsXG4gKiBhbmQgdGhlIEZpcmVidWcgZXh0ZW5zaW9uIChhbnkgRmlyZWZveCB2ZXJzaW9uKSBhcmUga25vd25cbiAqIHRvIHN1cHBvcnQgXCIlY1wiIENTUyBjdXN0b21pemF0aW9ucy5cbiAqXG4gKiBUT0RPOiBhZGQgYSBgbG9jYWxTdG9yYWdlYCB2YXJpYWJsZSB0byBleHBsaWNpdGx5IGVuYWJsZS9kaXNhYmxlIGNvbG9yc1xuICovXG5cbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcbiAgLy8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuICAvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuICAvLyBleHBsaWNpdGx5XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIGlzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG4gIC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG4gIHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuICAgIC8vIGlzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcbiAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuICAgIC8vIGlzIGZpcmVmb3ggPj0gdjMxP1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuICAgIC8vIGRvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnRzLmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uKHYpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnIubWVzc2FnZTtcbiAgfVxufTtcblxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuICB2YXIgdXNlQ29sb3JzID0gdGhpcy51c2VDb2xvcnM7XG5cbiAgYXJnc1swXSA9ICh1c2VDb2xvcnMgPyAnJWMnIDogJycpXG4gICAgKyB0aGlzLm5hbWVzcGFjZVxuICAgICsgKHVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKVxuICAgICsgYXJnc1swXVxuICAgICsgKHVzZUNvbG9ycyA/ICclYyAnIDogJyAnKVxuICAgICsgJysnICsgZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG4gIGlmICghdXNlQ29sb3JzKSByZXR1cm47XG5cbiAgdmFyIGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuICBhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKVxuXG4gIC8vIHRoZSBmaW5hbCBcIiVjXCIgaXMgc29tZXdoYXQgdHJpY2t5LCBiZWNhdXNlIHRoZXJlIGNvdWxkIGJlIG90aGVyXG4gIC8vIGFyZ3VtZW50cyBwYXNzZWQgZWl0aGVyIGJlZm9yZSBvciBhZnRlciB0aGUgJWMsIHNvIHdlIG5lZWQgdG9cbiAgLy8gZmlndXJlIG91dCB0aGUgY29ycmVjdCBpbmRleCB0byBpbnNlcnQgdGhlIENTUyBpbnRvXG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsYXN0QyA9IDA7XG4gIGFyZ3NbMF0ucmVwbGFjZSgvJVthLXpBLVolXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIGlmICgnJSUnID09PSBtYXRjaCkgcmV0dXJuO1xuICAgIGluZGV4Kys7XG4gICAgaWYgKCclYycgPT09IG1hdGNoKSB7XG4gICAgICAvLyB3ZSBvbmx5IGFyZSBpbnRlcmVzdGVkIGluIHRoZSAqbGFzdCogJWNcbiAgICAgIC8vICh0aGUgdXNlciBtYXkgaGF2ZSBwcm92aWRlZCB0aGVpciBvd24pXG4gICAgICBsYXN0QyA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG5cbiAgYXJncy5zcGxpY2UobGFzdEMsIDAsIGMpO1xufVxuXG4vKipcbiAqIEludm9rZXMgYGNvbnNvbGUubG9nKClgIHdoZW4gYXZhaWxhYmxlLlxuICogTm8tb3Agd2hlbiBgY29uc29sZS5sb2dgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGxvZygpIHtcbiAgLy8gdGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcbiAgLy8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcbiAgcmV0dXJuICdvYmplY3QnID09PSB0eXBlb2YgY29uc29sZVxuICAgICYmIGNvbnNvbGUubG9nXG4gICAgJiYgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZS5sb2csIGNvbnNvbGUsIGFyZ3VtZW50cyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHNhdmUobmFtZXNwYWNlcykge1xuICB0cnkge1xuICAgIGlmIChudWxsID09IG5hbWVzcGFjZXMpIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UuZGVidWcgPSBuYW1lc3BhY2VzO1xuICAgIH1cbiAgfSBjYXRjaChlKSB7fVxufVxuXG4vKipcbiAqIExvYWQgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gcmV0dXJucyB0aGUgcHJldmlvdXNseSBwZXJzaXN0ZWQgZGVidWcgbW9kZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvYWQoKSB7XG4gIHZhciByO1xuICB0cnkge1xuICAgIHIgPSBleHBvcnRzLnN0b3JhZ2UuZGVidWc7XG4gIH0gY2F0Y2goZSkge31cblxuICAvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG4gIGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuICAgIHIgPSBwcm9jZXNzLmVudi5ERUJVRztcbiAgfVxuXG4gIHJldHVybiByO1xufVxuXG4vKipcbiAqIEVuYWJsZSBuYW1lc3BhY2VzIGxpc3RlZCBpbiBgbG9jYWxTdG9yYWdlLmRlYnVnYCBpbml0aWFsbHkuXG4gKi9cblxuZXhwb3J0cy5lbmFibGUobG9hZCgpKTtcblxuLyoqXG4gKiBMb2NhbHN0b3JhZ2UgYXR0ZW1wdHMgdG8gcmV0dXJuIHRoZSBsb2NhbHN0b3JhZ2UuXG4gKlxuICogVGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSBzYWZhcmkgdGhyb3dzXG4gKiB3aGVuIGEgdXNlciBkaXNhYmxlcyBjb29raWVzL2xvY2Fsc3RvcmFnZVxuICogYW5kIHlvdSBhdHRlbXB0IHRvIGFjY2VzcyBpdC5cbiAqXG4gKiBAcmV0dXJuIHtMb2NhbFN0b3JhZ2V9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2NhbHN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHt9XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Z1snZGVmYXVsdCddID0gY3JlYXRlRGVidWc7XG5leHBvcnRzLmNvZXJjZSA9IGNvZXJjZTtcbmV4cG9ydHMuZGlzYWJsZSA9IGRpc2FibGU7XG5leHBvcnRzLmVuYWJsZSA9IGVuYWJsZTtcbmV4cG9ydHMuZW5hYmxlZCA9IGVuYWJsZWQ7XG5leHBvcnRzLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuLyoqXG4gKiBBY3RpdmUgYGRlYnVnYCBpbnN0YW5jZXMuXG4gKi9cbmV4cG9ydHMuaW5zdGFuY2VzID0gW107XG5cbi8qKlxuICogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG4gKi9cblxuZXhwb3J0cy5uYW1lcyA9IFtdO1xuZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4vKipcbiAqIE1hcCBvZiBzcGVjaWFsIFwiJW5cIiBoYW5kbGluZyBmdW5jdGlvbnMsIGZvciB0aGUgZGVidWcgXCJmb3JtYXRcIiBhcmd1bWVudC5cbiAqXG4gKiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzID0ge307XG5cbi8qKlxuICogU2VsZWN0IGEgY29sb3IuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcbiAgdmFyIGhhc2ggPSAwLCBpO1xuXG4gIGZvciAoaSBpbiBuYW1lc3BhY2UpIHtcbiAgICBoYXNoICA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG4gICAgaGFzaCB8PSAwOyAvLyBDb252ZXJ0IHRvIDMyYml0IGludGVnZXJcbiAgfVxuXG4gIHJldHVybiBleHBvcnRzLmNvbG9yc1tNYXRoLmFicyhoYXNoKSAlIGV4cG9ydHMuY29sb3JzLmxlbmd0aF07XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZGVidWdnZXIgd2l0aCB0aGUgZ2l2ZW4gYG5hbWVzcGFjZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXG4gIHZhciBwcmV2VGltZTtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcbiAgZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cbiAgLy8gZW52LXNwZWNpZmljIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBkZWJ1ZyBpbnN0YW5jZXNcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBleHBvcnRzLmluaXQpIHtcbiAgICBleHBvcnRzLmluaXQoZGVidWcpO1xuICB9XG5cbiAgZXhwb3J0cy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cbiAgcmV0dXJuIGRlYnVnO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95ICgpIHtcbiAgdmFyIGluZGV4ID0gZXhwb3J0cy5pbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGV4cG9ydHMuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIGk7XG4gIHZhciBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG4gIHZhciBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxuXG4gIGZvciAoaSA9IDA7IGkgPCBleHBvcnRzLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnN0YW5jZSA9IGV4cG9ydHMuaW5zdGFuY2VzW2ldO1xuICAgIGluc3RhbmNlLmVuYWJsZWQgPSBleHBvcnRzLmVuYWJsZWQoaW5zdGFuY2UubmFtZXNwYWNlKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIGlmIChuYW1lW25hbWUubGVuZ3RoIC0gMV0gPT09ICcqJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIvKipcbiAqIEhlbHBlcnMuXG4gKi9cblxudmFyIHMgPSAxMDAwO1xudmFyIG0gPSBzICogNjA7XG52YXIgaCA9IG0gKiA2MDtcbnZhciBkID0gaCAqIDI0O1xudmFyIHkgPSBkICogMzY1LjI1O1xuXG4vKipcbiAqIFBhcnNlIG9yIGZvcm1hdCB0aGUgZ2l2ZW4gYHZhbGAuXG4gKlxuICogT3B0aW9uczpcbiAqXG4gKiAgLSBgbG9uZ2AgdmVyYm9zZSBmb3JtYXR0aW5nIFtmYWxzZV1cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xOdW1iZXJ9IHZhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHRocm93cyB7RXJyb3J9IHRocm93IGFuIGVycm9yIGlmIHZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtTdHJpbmd8TnVtYmVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHZhbCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAodHlwZSA9PT0gJ3N0cmluZycgJiYgdmFsLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gcGFyc2UodmFsKTtcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWwpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBvcHRpb25zLmxvbmcgPyBmbXRMb25nKHZhbCkgOiBmbXRTaG9ydCh2YWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAndmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSB2YWxpZCBudW1iZXIuIHZhbD0nICtcbiAgICAgIEpTT04uc3RyaW5naWZ5KHZhbClcbiAgKTtcbn07XG5cbi8qKlxuICogUGFyc2UgdGhlIGdpdmVuIGBzdHJgIGFuZCByZXR1cm4gbWlsbGlzZWNvbmRzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHBhcnNlKHN0cikge1xuICBzdHIgPSBTdHJpbmcoc3RyKTtcbiAgaWYgKHN0ci5sZW5ndGggPiAxMDApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG1hdGNoID0gL14oKD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnZGF5cyc6XG4gICAgY2FzZSAnZGF5JzpcbiAgICBjYXNlICdkJzpcbiAgICAgIHJldHVybiBuICogZDtcbiAgICBjYXNlICdob3Vycyc6XG4gICAgY2FzZSAnaG91cic6XG4gICAgY2FzZSAnaHJzJzpcbiAgICBjYXNlICdocic6XG4gICAgY2FzZSAnaCc6XG4gICAgICByZXR1cm4gbiAqIGg7XG4gICAgY2FzZSAnbWludXRlcyc6XG4gICAgY2FzZSAnbWludXRlJzpcbiAgICBjYXNlICdtaW5zJzpcbiAgICBjYXNlICdtaW4nOlxuICAgIGNhc2UgJ20nOlxuICAgICAgcmV0dXJuIG4gKiBtO1xuICAgIGNhc2UgJ3NlY29uZHMnOlxuICAgIGNhc2UgJ3NlY29uZCc6XG4gICAgY2FzZSAnc2Vjcyc6XG4gICAgY2FzZSAnc2VjJzpcbiAgICBjYXNlICdzJzpcbiAgICAgIHJldHVybiBuICogcztcbiAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxuICAgIGNhc2UgJ21pbGxpc2Vjb25kJzpcbiAgICBjYXNlICdtc2Vjcyc6XG4gICAgY2FzZSAnbXNlYyc6XG4gICAgY2FzZSAnbXMnOlxuICAgICAgcmV0dXJuIG47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydCBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRTaG9ydChtcykge1xuICBpZiAobXMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtcyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgcmV0dXJuIHBsdXJhbChtcywgZCwgJ2RheScpIHx8XG4gICAgcGx1cmFsKG1zLCBoLCAnaG91cicpIHx8XG4gICAgcGx1cmFsKG1zLCBtLCAnbWludXRlJykgfHxcbiAgICBwbHVyYWwobXMsIHMsICdzZWNvbmQnKSB8fFxuICAgIG1zICsgJyBtcyc7XG59XG5cbi8qKlxuICogUGx1cmFsaXphdGlvbiBoZWxwZXIuXG4gKi9cblxuZnVuY3Rpb24gcGx1cmFsKG1zLCBuLCBuYW1lKSB7XG4gIGlmIChtcyA8IG4pIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1zIDwgbiAqIDEuNSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKG1zIC8gbikgKyAnICcgKyBuYW1lO1xuICB9XG4gIHJldHVybiBNYXRoLmNlaWwobXMgLyBuKSArICcgJyArIG5hbWUgKyAncyc7XG59XG4iLCIvKmdsb2JhbCBCbG9iLEZpbGUqL1xuXG4vKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHNcbiAqL1xuXG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJ2lzYXJyYXknKTtcbnZhciBpc0J1ZiA9IHJlcXVpcmUoJy4vaXMtYnVmZmVyJyk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEJsb2IpID09PSAnW29iamVjdCBCbG9iQ29uc3RydWN0b3JdJyk7XG52YXIgd2l0aE5hdGl2ZUZpbGUgPSB0eXBlb2YgRmlsZSA9PT0gJ2Z1bmN0aW9uJyB8fCAodHlwZW9mIEZpbGUgIT09ICd1bmRlZmluZWQnICYmIHRvU3RyaW5nLmNhbGwoRmlsZSkgPT09ICdbb2JqZWN0IEZpbGVDb25zdHJ1Y3Rvcl0nKTtcblxuLyoqXG4gKiBSZXBsYWNlcyBldmVyeSBCdWZmZXIgfCBBcnJheUJ1ZmZlciBpbiBwYWNrZXQgd2l0aCBhIG51bWJlcmVkIHBsYWNlaG9sZGVyLlxuICogQW55dGhpbmcgd2l0aCBibG9icyBvciBmaWxlcyBzaG91bGQgYmUgZmVkIHRocm91Z2ggcmVtb3ZlQmxvYnMgYmVmb3JlIGNvbWluZ1xuICogaGVyZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0IC0gc29ja2V0LmlvIGV2ZW50IHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGRlY29uc3RydWN0ZWQgcGFja2V0IGFuZCBsaXN0IG9mIGJ1ZmZlcnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5kZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCkge1xuICB2YXIgYnVmZmVycyA9IFtdO1xuICB2YXIgcGFja2V0RGF0YSA9IHBhY2tldC5kYXRhO1xuICB2YXIgcGFjayA9IHBhY2tldDtcbiAgcGFjay5kYXRhID0gX2RlY29uc3RydWN0UGFja2V0KHBhY2tldERhdGEsIGJ1ZmZlcnMpO1xuICBwYWNrLmF0dGFjaG1lbnRzID0gYnVmZmVycy5sZW5ndGg7IC8vIG51bWJlciBvZiBiaW5hcnkgJ2F0dGFjaG1lbnRzJ1xuICByZXR1cm4ge3BhY2tldDogcGFjaywgYnVmZmVyczogYnVmZmVyc307XG59O1xuXG5mdW5jdGlvbiBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YSwgYnVmZmVycykge1xuICBpZiAoIWRhdGEpIHJldHVybiBkYXRhO1xuXG4gIGlmIChpc0J1ZihkYXRhKSkge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IHsgX3BsYWNlaG9sZGVyOiB0cnVlLCBudW06IGJ1ZmZlcnMubGVuZ3RoIH07XG4gICAgYnVmZmVycy5wdXNoKGRhdGEpO1xuICAgIHJldHVybiBwbGFjZWhvbGRlcjtcbiAgfSBlbHNlIGlmIChpc0FycmF5KGRhdGEpKSB7XG4gICAgdmFyIG5ld0RhdGEgPSBuZXcgQXJyYXkoZGF0YS5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgbmV3RGF0YVtpXSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0RhdGE7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmICEoZGF0YSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgdmFyIG5ld0RhdGEgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgbmV3RGF0YVtrZXldID0gX2RlY29uc3RydWN0UGFja2V0KGRhdGFba2V5XSwgYnVmZmVycyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdEYXRhO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFJlY29uc3RydWN0cyBhIGJpbmFyeSBwYWNrZXQgZnJvbSBpdHMgcGxhY2Vob2xkZXIgcGFja2V0IGFuZCBidWZmZXJzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIGV2ZW50IHBhY2tldCB3aXRoIHBsYWNlaG9sZGVyc1xuICogQHBhcmFtIHtBcnJheX0gYnVmZmVycyAtIGJpbmFyeSBidWZmZXJzIHRvIHB1dCBpbiBwbGFjZWhvbGRlciBwb3NpdGlvbnNcbiAqIEByZXR1cm4ge09iamVjdH0gcmVjb25zdHJ1Y3RlZCBwYWNrZXRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5yZWNvbnN0cnVjdFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCwgYnVmZmVycykge1xuICBwYWNrZXQuZGF0YSA9IF9yZWNvbnN0cnVjdFBhY2tldChwYWNrZXQuZGF0YSwgYnVmZmVycyk7XG4gIHBhY2tldC5hdHRhY2htZW50cyA9IHVuZGVmaW5lZDsgLy8gbm8gbG9uZ2VyIHVzZWZ1bFxuICByZXR1cm4gcGFja2V0O1xufTtcblxuZnVuY3Rpb24gX3JlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcblxuICBpZiAoZGF0YSAmJiBkYXRhLl9wbGFjZWhvbGRlcikge1xuICAgIHJldHVybiBidWZmZXJzW2RhdGEubnVtXTsgLy8gYXBwcm9wcmlhdGUgYnVmZmVyIChzaG91bGQgYmUgbmF0dXJhbCBvcmRlciBhbnl3YXkpXG4gIH0gZWxzZSBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YVtpXSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2ldLCBidWZmZXJzKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIGRhdGFba2V5XSA9IF9yZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEFzeW5jaHJvbm91c2x5IHJlbW92ZXMgQmxvYnMgb3IgRmlsZXMgZnJvbSBkYXRhIHZpYVxuICogRmlsZVJlYWRlcidzIHJlYWRBc0FycmF5QnVmZmVyIG1ldGhvZC4gVXNlZCBiZWZvcmUgZW5jb2RpbmdcbiAqIGRhdGEgYXMgbXNncGFjay4gQ2FsbHMgY2FsbGJhY2sgd2l0aCB0aGUgYmxvYmxlc3MgZGF0YS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmVtb3ZlQmxvYnMgPSBmdW5jdGlvbihkYXRhLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBfcmVtb3ZlQmxvYnMob2JqLCBjdXJLZXksIGNvbnRhaW5pbmdPYmplY3QpIHtcbiAgICBpZiAoIW9iaikgcmV0dXJuIG9iajtcblxuICAgIC8vIGNvbnZlcnQgYW55IGJsb2JcbiAgICBpZiAoKHdpdGhOYXRpdmVCbG9iICYmIG9iaiBpbnN0YW5jZW9mIEJsb2IpIHx8XG4gICAgICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKSkge1xuICAgICAgcGVuZGluZ0Jsb2JzKys7XG5cbiAgICAgIC8vIGFzeW5jIGZpbGVyZWFkZXJcbiAgICAgIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIGZpbGVSZWFkZXIub25sb2FkID0gZnVuY3Rpb24oKSB7IC8vIHRoaXMucmVzdWx0ID09IGFycmF5YnVmZmVyXG4gICAgICAgIGlmIChjb250YWluaW5nT2JqZWN0KSB7XG4gICAgICAgICAgY29udGFpbmluZ09iamVjdFtjdXJLZXldID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgYmxvYmxlc3NEYXRhID0gdGhpcy5yZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBub3RoaW5nIHBlbmRpbmcgaXRzIGNhbGxiYWNrIHRpbWVcbiAgICAgICAgaWYoISAtLXBlbmRpbmdCbG9icykge1xuICAgICAgICAgIGNhbGxiYWNrKGJsb2JsZXNzRGF0YSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIob2JqKTsgLy8gYmxvYiAtPiBhcnJheWJ1ZmZlclxuICAgIH0gZWxzZSBpZiAoaXNBcnJheShvYmopKSB7IC8vIGhhbmRsZSBhcnJheVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtpXSwgaSwgb2JqKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmICFpc0J1ZihvYmopKSB7IC8vIGFuZCBvYmplY3RcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgX3JlbW92ZUJsb2JzKG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHBlbmRpbmdCbG9icyA9IDA7XG4gIHZhciBibG9ibGVzc0RhdGEgPSBkYXRhO1xuICBfcmVtb3ZlQmxvYnMoYmxvYmxlc3NEYXRhKTtcbiAgaWYgKCFwZW5kaW5nQmxvYnMpIHtcbiAgICBjYWxsYmFjayhibG9ibGVzc0RhdGEpO1xuICB9XG59O1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMuYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGhcbmV4cG9ydHMudG9CeXRlQXJyYXkgPSB0b0J5dGVBcnJheVxuZXhwb3J0cy5mcm9tQnl0ZUFycmF5ID0gZnJvbUJ5dGVBcnJheVxuXG52YXIgbG9va3VwID0gW11cbnZhciByZXZMb29rdXAgPSBbXVxudmFyIEFyciA9IHR5cGVvZiBVaW50OEFycmF5ICE9PSAndW5kZWZpbmVkJyA/IFVpbnQ4QXJyYXkgOiBBcnJheVxuXG52YXIgY29kZSA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJ1xuZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNvZGUubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgbG9va3VwW2ldID0gY29kZVtpXVxuICByZXZMb29rdXBbY29kZS5jaGFyQ29kZUF0KGkpXSA9IGlcbn1cblxuLy8gU3VwcG9ydCBkZWNvZGluZyBVUkwtc2FmZSBiYXNlNjQgc3RyaW5ncywgYXMgTm9kZS5qcyBkb2VzLlxuLy8gU2VlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9CYXNlNjQjVVJMX2FwcGxpY2F0aW9uc1xucmV2TG9va3VwWyctJy5jaGFyQ29kZUF0KDApXSA9IDYyXG5yZXZMb29rdXBbJ18nLmNoYXJDb2RlQXQoMCldID0gNjNcblxuZnVuY3Rpb24gZ2V0TGVucyAoYjY0KSB7XG4gIHZhciBsZW4gPSBiNjQubGVuZ3RoXG5cbiAgaWYgKGxlbiAlIDQgPiAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZy4gTGVuZ3RoIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA0JylcbiAgfVxuXG4gIC8vIFRyaW0gb2ZmIGV4dHJhIGJ5dGVzIGFmdGVyIHBsYWNlaG9sZGVyIGJ5dGVzIGFyZSBmb3VuZFxuICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9iZWF0Z2FtbWl0L2Jhc2U2NC1qcy9pc3N1ZXMvNDJcbiAgdmFyIHZhbGlkTGVuID0gYjY0LmluZGV4T2YoJz0nKVxuICBpZiAodmFsaWRMZW4gPT09IC0xKSB2YWxpZExlbiA9IGxlblxuXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSB2YWxpZExlbiA9PT0gbGVuXG4gICAgPyAwXG4gICAgOiA0IC0gKHZhbGlkTGVuICUgNClcblxuICByZXR1cm4gW3ZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW5dXG59XG5cbi8vIGJhc2U2NCBpcyA0LzMgKyB1cCB0byB0d28gY2hhcmFjdGVycyBvZiB0aGUgb3JpZ2luYWwgZGF0YVxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoYjY0KSB7XG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIF9ieXRlTGVuZ3RoIChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pIHtcbiAgcmV0dXJuICgodmFsaWRMZW4gKyBwbGFjZUhvbGRlcnNMZW4pICogMyAvIDQpIC0gcGxhY2VIb2xkZXJzTGVuXG59XG5cbmZ1bmN0aW9uIHRvQnl0ZUFycmF5IChiNjQpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG5cbiAgdmFyIGFyciA9IG5ldyBBcnIoX2J5dGVMZW5ndGgoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSlcblxuICB2YXIgY3VyQnl0ZSA9IDBcblxuICAvLyBpZiB0aGVyZSBhcmUgcGxhY2Vob2xkZXJzLCBvbmx5IGdldCB1cCB0byB0aGUgbGFzdCBjb21wbGV0ZSA0IGNoYXJzXG4gIHZhciBsZW4gPSBwbGFjZUhvbGRlcnNMZW4gPiAwXG4gICAgPyB2YWxpZExlbiAtIDRcbiAgICA6IHZhbGlkTGVuXG5cbiAgdmFyIGlcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSArPSA0KSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDE4KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgMTIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA8PCA2KSB8XG4gICAgICByZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDMpXVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiAxNikgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMikge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPj4gNClcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDEpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTApIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCA0KSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPj4gMilcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIHRyaXBsZXRUb0Jhc2U2NCAobnVtKSB7XG4gIHJldHVybiBsb29rdXBbbnVtID4+IDE4ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gMTIgJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiA2ICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gJiAweDNGXVxufVxuXG5mdW5jdGlvbiBlbmNvZGVDaHVuayAodWludDgsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHRtcFxuICB2YXIgb3V0cHV0ID0gW11cbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpICs9IDMpIHtcbiAgICB0bXAgPVxuICAgICAgKCh1aW50OFtpXSA8PCAxNikgJiAweEZGMDAwMCkgK1xuICAgICAgKCh1aW50OFtpICsgMV0gPDwgOCkgJiAweEZGMDApICtcbiAgICAgICh1aW50OFtpICsgMl0gJiAweEZGKVxuICAgIG91dHB1dC5wdXNoKHRyaXBsZXRUb0Jhc2U2NCh0bXApKVxuICB9XG4gIHJldHVybiBvdXRwdXQuam9pbignJylcbn1cblxuZnVuY3Rpb24gZnJvbUJ5dGVBcnJheSAodWludDgpIHtcbiAgdmFyIHRtcFxuICB2YXIgbGVuID0gdWludDgubGVuZ3RoXG4gIHZhciBleHRyYUJ5dGVzID0gbGVuICUgMyAvLyBpZiB3ZSBoYXZlIDEgYnl0ZSBsZWZ0LCBwYWQgMiBieXRlc1xuICB2YXIgcGFydHMgPSBbXVxuICB2YXIgbWF4Q2h1bmtMZW5ndGggPSAxNjM4MyAvLyBtdXN0IGJlIG11bHRpcGxlIG9mIDNcblxuICAvLyBnbyB0aHJvdWdoIHRoZSBhcnJheSBldmVyeSB0aHJlZSBieXRlcywgd2UnbGwgZGVhbCB3aXRoIHRyYWlsaW5nIHN0dWZmIGxhdGVyXG4gIGZvciAodmFyIGkgPSAwLCBsZW4yID0gbGVuIC0gZXh0cmFCeXRlczsgaSA8IGxlbjI7IGkgKz0gbWF4Q2h1bmtMZW5ndGgpIHtcbiAgICBwYXJ0cy5wdXNoKGVuY29kZUNodW5rKFxuICAgICAgdWludDgsIGksIChpICsgbWF4Q2h1bmtMZW5ndGgpID4gbGVuMiA/IGxlbjIgOiAoaSArIG1heENodW5rTGVuZ3RoKVxuICAgICkpXG4gIH1cblxuICAvLyBwYWQgdGhlIGVuZCB3aXRoIHplcm9zLCBidXQgbWFrZSBzdXJlIHRvIG5vdCBmb3JnZXQgdGhlIGV4dHJhIGJ5dGVzXG4gIGlmIChleHRyYUJ5dGVzID09PSAxKSB7XG4gICAgdG1wID0gdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAyXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCA0KSAmIDB4M0ZdICtcbiAgICAgICc9PSdcbiAgICApXG4gIH0gZWxzZSBpZiAoZXh0cmFCeXRlcyA9PT0gMikge1xuICAgIHRtcCA9ICh1aW50OFtsZW4gLSAyXSA8PCA4KSArIHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMTBdICtcbiAgICAgIGxvb2t1cFsodG1wID4+IDQpICYgMHgzRl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgMikgJiAweDNGXSArXG4gICAgICAnPSdcbiAgICApXG4gIH1cblxuICByZXR1cm4gcGFydHMuam9pbignJylcbn1cbiIsImV4cG9ydHMucmVhZCA9IGZ1bmN0aW9uIChidWZmZXIsIG9mZnNldCwgaXNMRSwgbUxlbiwgbkJ5dGVzKSB7XG4gIHZhciBlLCBtXG4gIHZhciBlTGVuID0gKG5CeXRlcyAqIDgpIC0gbUxlbiAtIDFcbiAgdmFyIGVNYXggPSAoMSA8PCBlTGVuKSAtIDFcbiAgdmFyIGVCaWFzID0gZU1heCA+PiAxXG4gIHZhciBuQml0cyA9IC03XG4gIHZhciBpID0gaXNMRSA/IChuQnl0ZXMgLSAxKSA6IDBcbiAgdmFyIGQgPSBpc0xFID8gLTEgOiAxXG4gIHZhciBzID0gYnVmZmVyW29mZnNldCArIGldXG5cbiAgaSArPSBkXG5cbiAgZSA9IHMgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgcyA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gZUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBlID0gKGUgKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgbSA9IGUgJiAoKDEgPDwgKC1uQml0cykpIC0gMSlcbiAgZSA+Pj0gKC1uQml0cylcbiAgbkJpdHMgKz0gbUxlblxuICBmb3IgKDsgbkJpdHMgPiAwOyBtID0gKG0gKiAyNTYpICsgYnVmZmVyW29mZnNldCArIGldLCBpICs9IGQsIG5CaXRzIC09IDgpIHt9XG5cbiAgaWYgKGUgPT09IDApIHtcbiAgICBlID0gMSAtIGVCaWFzXG4gIH0gZWxzZSBpZiAoZSA9PT0gZU1heCkge1xuICAgIHJldHVybiBtID8gTmFOIDogKChzID8gLTEgOiAxKSAqIEluZmluaXR5KVxuICB9IGVsc2Uge1xuICAgIG0gPSBtICsgTWF0aC5wb3coMiwgbUxlbilcbiAgICBlID0gZSAtIGVCaWFzXG4gIH1cbiAgcmV0dXJuIChzID8gLTEgOiAxKSAqIG0gKiBNYXRoLnBvdygyLCBlIC0gbUxlbilcbn1cblxuZXhwb3J0cy53cml0ZSA9IGZ1bmN0aW9uIChidWZmZXIsIHZhbHVlLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbSwgY1xuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgcnQgPSAobUxlbiA9PT0gMjMgPyBNYXRoLnBvdygyLCAtMjQpIC0gTWF0aC5wb3coMiwgLTc3KSA6IDApXG4gIHZhciBpID0gaXNMRSA/IDAgOiAobkJ5dGVzIC0gMSlcbiAgdmFyIGQgPSBpc0xFID8gMSA6IC0xXG4gIHZhciBzID0gdmFsdWUgPCAwIHx8ICh2YWx1ZSA9PT0gMCAmJiAxIC8gdmFsdWUgPCAwKSA/IDEgOiAwXG5cbiAgdmFsdWUgPSBNYXRoLmFicyh2YWx1ZSlcblxuICBpZiAoaXNOYU4odmFsdWUpIHx8IHZhbHVlID09PSBJbmZpbml0eSkge1xuICAgIG0gPSBpc05hTih2YWx1ZSkgPyAxIDogMFxuICAgIGUgPSBlTWF4XG4gIH0gZWxzZSB7XG4gICAgZSA9IE1hdGguZmxvb3IoTWF0aC5sb2codmFsdWUpIC8gTWF0aC5MTjIpXG4gICAgaWYgKHZhbHVlICogKGMgPSBNYXRoLnBvdygyLCAtZSkpIDwgMSkge1xuICAgICAgZS0tXG4gICAgICBjICo9IDJcbiAgICB9XG4gICAgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICB2YWx1ZSArPSBydCAvIGNcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgKz0gcnQgKiBNYXRoLnBvdygyLCAxIC0gZUJpYXMpXG4gICAgfVxuICAgIGlmICh2YWx1ZSAqIGMgPj0gMikge1xuICAgICAgZSsrXG4gICAgICBjIC89IDJcbiAgICB9XG5cbiAgICBpZiAoZSArIGVCaWFzID49IGVNYXgpIHtcbiAgICAgIG0gPSAwXG4gICAgICBlID0gZU1heFxuICAgIH0gZWxzZSBpZiAoZSArIGVCaWFzID49IDEpIHtcbiAgICAgIG0gPSAoKHZhbHVlICogYykgLSAxKSAqIE1hdGgucG93KDIsIG1MZW4pXG4gICAgICBlID0gZSArIGVCaWFzXG4gICAgfSBlbHNlIHtcbiAgICAgIG0gPSB2YWx1ZSAqIE1hdGgucG93KDIsIGVCaWFzIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IDBcbiAgICB9XG4gIH1cblxuICBmb3IgKDsgbUxlbiA+PSA4OyBidWZmZXJbb2Zmc2V0ICsgaV0gPSBtICYgMHhmZiwgaSArPSBkLCBtIC89IDI1NiwgbUxlbiAtPSA4KSB7fVxuXG4gIGUgPSAoZSA8PCBtTGVuKSB8IG1cbiAgZUxlbiArPSBtTGVuXG4gIGZvciAoOyBlTGVuID4gMDsgYnVmZmVyW29mZnNldCArIGldID0gZSAmIDB4ZmYsIGkgKz0gZCwgZSAvPSAyNTYsIGVMZW4gLT0gOCkge31cblxuICBidWZmZXJbb2Zmc2V0ICsgaSAtIGRdIHw9IHMgKiAxMjhcbn1cbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFycikge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcnIpID09ICdbb2JqZWN0IEFycmF5XSc7XG59O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG5cbi8qKlxuICogRXhwb3J0cyBwYXJzZXJcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICpcbiAqL1xubW9kdWxlLmV4cG9ydHMucGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB0cmFuc3BvcnRzID0gcmVxdWlyZSgnLi90cmFuc3BvcnRzL2luZGV4Jyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnNvY2tldCcpO1xudmFyIGluZGV4ID0gcmVxdWlyZSgnaW5kZXhvZicpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbnZhciBwYXJzZXVyaSA9IHJlcXVpcmUoJ3BhcnNldXJpJyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvY2tldDtcblxuLyoqXG4gKiBTb2NrZXQgY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8T2JqZWN0fSB1cmkgb3Igb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gU29ja2V0ICh1cmksIG9wdHMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNvY2tldCkpIHJldHVybiBuZXcgU29ja2V0KHVyaSwgb3B0cyk7XG5cbiAgb3B0cyA9IG9wdHMgfHwge307XG5cbiAgaWYgKHVyaSAmJiAnb2JqZWN0JyA9PT0gdHlwZW9mIHVyaSkge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gbnVsbDtcbiAgfVxuXG4gIGlmICh1cmkpIHtcbiAgICB1cmkgPSBwYXJzZXVyaSh1cmkpO1xuICAgIG9wdHMuaG9zdG5hbWUgPSB1cmkuaG9zdDtcbiAgICBvcHRzLnNlY3VyZSA9IHVyaS5wcm90b2NvbCA9PT0gJ2h0dHBzJyB8fCB1cmkucHJvdG9jb2wgPT09ICd3c3MnO1xuICAgIG9wdHMucG9ydCA9IHVyaS5wb3J0O1xuICAgIGlmICh1cmkucXVlcnkpIG9wdHMucXVlcnkgPSB1cmkucXVlcnk7XG4gIH0gZWxzZSBpZiAob3B0cy5ob3N0KSB7XG4gICAgb3B0cy5ob3N0bmFtZSA9IHBhcnNldXJpKG9wdHMuaG9zdCkuaG9zdDtcbiAgfVxuXG4gIHRoaXMuc2VjdXJlID0gbnVsbCAhPSBvcHRzLnNlY3VyZSA/IG9wdHMuc2VjdXJlXG4gICAgOiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2wpO1xuXG4gIGlmIChvcHRzLmhvc3RuYW1lICYmICFvcHRzLnBvcnQpIHtcbiAgICAvLyBpZiBubyBwb3J0IGlzIHNwZWNpZmllZCBtYW51YWxseSwgdXNlIHRoZSBwcm90b2NvbCBkZWZhdWx0XG4gICAgb3B0cy5wb3J0ID0gdGhpcy5zZWN1cmUgPyAnNDQzJyA6ICc4MCc7XG4gIH1cblxuICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudCB8fCBmYWxzZTtcbiAgdGhpcy5ob3N0bmFtZSA9IG9wdHMuaG9zdG5hbWUgfHxcbiAgICAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xuICB0aGlzLnBvcnQgPSBvcHRzLnBvcnQgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYXRpb24ucG9ydFxuICAgICAgPyBsb2NhdGlvbi5wb3J0XG4gICAgICA6ICh0aGlzLnNlY3VyZSA/IDQ0MyA6IDgwKSk7XG4gIHRoaXMucXVlcnkgPSBvcHRzLnF1ZXJ5IHx8IHt9O1xuICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB0aGlzLnF1ZXJ5KSB0aGlzLnF1ZXJ5ID0gcGFyc2Vxcy5kZWNvZGUodGhpcy5xdWVyeSk7XG4gIHRoaXMudXBncmFkZSA9IGZhbHNlICE9PSBvcHRzLnVwZ3JhZGU7XG4gIHRoaXMucGF0aCA9IChvcHRzLnBhdGggfHwgJy9lbmdpbmUuaW8nKS5yZXBsYWNlKC9cXC8kLywgJycpICsgJy8nO1xuICB0aGlzLmZvcmNlSlNPTlAgPSAhIW9wdHMuZm9yY2VKU09OUDtcbiAgdGhpcy5qc29ucCA9IGZhbHNlICE9PSBvcHRzLmpzb25wO1xuICB0aGlzLmZvcmNlQmFzZTY0ID0gISFvcHRzLmZvcmNlQmFzZTY0O1xuICB0aGlzLmVuYWJsZXNYRFIgPSAhIW9wdHMuZW5hYmxlc1hEUjtcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSBmYWxzZSAhPT0gb3B0cy53aXRoQ3JlZGVudGlhbHM7XG4gIHRoaXMudGltZXN0YW1wUGFyYW0gPSBvcHRzLnRpbWVzdGFtcFBhcmFtIHx8ICd0JztcbiAgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyA9IG9wdHMudGltZXN0YW1wUmVxdWVzdHM7XG4gIHRoaXMudHJhbnNwb3J0cyA9IG9wdHMudHJhbnNwb3J0cyB8fCBbJ3BvbGxpbmcnLCAnd2Vic29ja2V0J107XG4gIHRoaXMudHJhbnNwb3J0T3B0aW9ucyA9IG9wdHMudHJhbnNwb3J0T3B0aW9ucyB8fCB7fTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJyc7XG4gIHRoaXMud3JpdGVCdWZmZXIgPSBbXTtcbiAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcbiAgdGhpcy5wb2xpY3lQb3J0ID0gb3B0cy5wb2xpY3lQb3J0IHx8IDg0MztcbiAgdGhpcy5yZW1lbWJlclVwZ3JhZGUgPSBvcHRzLnJlbWVtYmVyVXBncmFkZSB8fCBmYWxzZTtcbiAgdGhpcy5iaW5hcnlUeXBlID0gbnVsbDtcbiAgdGhpcy5vbmx5QmluYXJ5VXBncmFkZXMgPSBvcHRzLm9ubHlCaW5hcnlVcGdyYWRlcztcbiAgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSA9IGZhbHNlICE9PSBvcHRzLnBlck1lc3NhZ2VEZWZsYXRlID8gKG9wdHMucGVyTWVzc2FnZURlZmxhdGUgfHwge30pIDogZmFsc2U7XG5cbiAgaWYgKHRydWUgPT09IHRoaXMucGVyTWVzc2FnZURlZmxhdGUpIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSB7fTtcbiAgaWYgKHRoaXMucGVyTWVzc2FnZURlZmxhdGUgJiYgbnVsbCA9PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgIHRoaXMucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkID0gMTAyNDtcbiAgfVxuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLnBmeCA9IG9wdHMucGZ4IHx8IG51bGw7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXkgfHwgbnVsbDtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlIHx8IG51bGw7XG4gIHRoaXMuY2VydCA9IG9wdHMuY2VydCB8fCBudWxsO1xuICB0aGlzLmNhID0gb3B0cy5jYSB8fCBudWxsO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnMgfHwgbnVsbDtcbiAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuICB0aGlzLmZvcmNlTm9kZSA9ICEhb3B0cy5mb3JjZU5vZGU7XG5cbiAgLy8gZGV0ZWN0IFJlYWN0TmF0aXZlIGVudmlyb25tZW50XG4gIHRoaXMuaXNSZWFjdE5hdGl2ZSA9ICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdzdHJpbmcnICYmIG5hdmlnYXRvci5wcm9kdWN0LnRvTG93ZXJDYXNlKCkgPT09ICdyZWFjdG5hdGl2ZScpO1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgb3IgUmVhY3ROYXRpdmUgY2xpZW50XG4gIGlmICh0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5pc1JlYWN0TmF0aXZlKSB7XG4gICAgaWYgKG9wdHMuZXh0cmFIZWFkZXJzICYmIE9iamVjdC5rZXlzKG9wdHMuZXh0cmFIZWFkZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICAgIH1cblxuICAgIGlmIChvcHRzLmxvY2FsQWRkcmVzcykge1xuICAgICAgdGhpcy5sb2NhbEFkZHJlc3MgPSBvcHRzLmxvY2FsQWRkcmVzcztcbiAgICB9XG4gIH1cblxuICAvLyBzZXQgb24gaGFuZHNoYWtlXG4gIHRoaXMuaWQgPSBudWxsO1xuICB0aGlzLnVwZ3JhZGVzID0gbnVsbDtcbiAgdGhpcy5waW5nSW50ZXJ2YWwgPSBudWxsO1xuICB0aGlzLnBpbmdUaW1lb3V0ID0gbnVsbDtcblxuICAvLyBzZXQgb24gaGVhcnRiZWF0XG4gIHRoaXMucGluZ0ludGVydmFsVGltZXIgPSBudWxsO1xuICB0aGlzLnBpbmdUaW1lb3V0VGltZXIgPSBudWxsO1xuXG4gIHRoaXMub3BlbigpO1xufVxuXG5Tb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFNvY2tldC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG9jb2wgPSBwYXJzZXIucHJvdG9jb2w7IC8vIHRoaXMgaXMgYW4gaW50XG5cbi8qKlxuICogRXhwb3NlIGRlcHMgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5XG4gKiBhbmQgc3RhbmRhbG9uZSBicm93c2VyIGFjY2Vzcy5cbiAqL1xuXG5Tb2NrZXQuU29ja2V0ID0gU29ja2V0O1xuU29ja2V0LlRyYW5zcG9ydCA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0Jyk7XG5Tb2NrZXQudHJhbnNwb3J0cyA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9pbmRleCcpO1xuU29ja2V0LnBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIHRyYW5zcG9ydCBvZiB0aGUgZ2l2ZW4gdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAqIEByZXR1cm4ge1RyYW5zcG9ydH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuY3JlYXRlVHJhbnNwb3J0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVidWcoJ2NyZWF0aW5nIHRyYW5zcG9ydCBcIiVzXCInLCBuYW1lKTtcbiAgdmFyIHF1ZXJ5ID0gY2xvbmUodGhpcy5xdWVyeSk7XG5cbiAgLy8gYXBwZW5kIGVuZ2luZS5pbyBwcm90b2NvbCBpZGVudGlmaWVyXG4gIHF1ZXJ5LkVJTyA9IHBhcnNlci5wcm90b2NvbDtcblxuICAvLyB0cmFuc3BvcnQgbmFtZVxuICBxdWVyeS50cmFuc3BvcnQgPSBuYW1lO1xuXG4gIC8vIHBlci10cmFuc3BvcnQgb3B0aW9uc1xuICB2YXIgb3B0aW9ucyA9IHRoaXMudHJhbnNwb3J0T3B0aW9uc1tuYW1lXSB8fCB7fTtcblxuICAvLyBzZXNzaW9uIGlkIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcbiAgaWYgKHRoaXMuaWQpIHF1ZXJ5LnNpZCA9IHRoaXMuaWQ7XG5cbiAgdmFyIHRyYW5zcG9ydCA9IG5ldyB0cmFuc3BvcnRzW25hbWVdKHtcbiAgICBxdWVyeTogcXVlcnksXG4gICAgc29ja2V0OiB0aGlzLFxuICAgIGFnZW50OiBvcHRpb25zLmFnZW50IHx8IHRoaXMuYWdlbnQsXG4gICAgaG9zdG5hbWU6IG9wdGlvbnMuaG9zdG5hbWUgfHwgdGhpcy5ob3N0bmFtZSxcbiAgICBwb3J0OiBvcHRpb25zLnBvcnQgfHwgdGhpcy5wb3J0LFxuICAgIHNlY3VyZTogb3B0aW9ucy5zZWN1cmUgfHwgdGhpcy5zZWN1cmUsXG4gICAgcGF0aDogb3B0aW9ucy5wYXRoIHx8IHRoaXMucGF0aCxcbiAgICBmb3JjZUpTT05QOiBvcHRpb25zLmZvcmNlSlNPTlAgfHwgdGhpcy5mb3JjZUpTT05QLFxuICAgIGpzb25wOiBvcHRpb25zLmpzb25wIHx8IHRoaXMuanNvbnAsXG4gICAgZm9yY2VCYXNlNjQ6IG9wdGlvbnMuZm9yY2VCYXNlNjQgfHwgdGhpcy5mb3JjZUJhc2U2NCxcbiAgICBlbmFibGVzWERSOiBvcHRpb25zLmVuYWJsZXNYRFIgfHwgdGhpcy5lbmFibGVzWERSLFxuICAgIHdpdGhDcmVkZW50aWFsczogb3B0aW9ucy53aXRoQ3JlZGVudGlhbHMgfHwgdGhpcy53aXRoQ3JlZGVudGlhbHMsXG4gICAgdGltZXN0YW1wUmVxdWVzdHM6IG9wdGlvbnMudGltZXN0YW1wUmVxdWVzdHMgfHwgdGhpcy50aW1lc3RhbXBSZXF1ZXN0cyxcbiAgICB0aW1lc3RhbXBQYXJhbTogb3B0aW9ucy50aW1lc3RhbXBQYXJhbSB8fCB0aGlzLnRpbWVzdGFtcFBhcmFtLFxuICAgIHBvbGljeVBvcnQ6IG9wdGlvbnMucG9saWN5UG9ydCB8fCB0aGlzLnBvbGljeVBvcnQsXG4gICAgcGZ4OiBvcHRpb25zLnBmeCB8fCB0aGlzLnBmeCxcbiAgICBrZXk6IG9wdGlvbnMua2V5IHx8IHRoaXMua2V5LFxuICAgIHBhc3NwaHJhc2U6IG9wdGlvbnMucGFzc3BocmFzZSB8fCB0aGlzLnBhc3NwaHJhc2UsXG4gICAgY2VydDogb3B0aW9ucy5jZXJ0IHx8IHRoaXMuY2VydCxcbiAgICBjYTogb3B0aW9ucy5jYSB8fCB0aGlzLmNhLFxuICAgIGNpcGhlcnM6IG9wdGlvbnMuY2lwaGVycyB8fCB0aGlzLmNpcGhlcnMsXG4gICAgcmVqZWN0VW5hdXRob3JpemVkOiBvcHRpb25zLnJlamVjdFVuYXV0aG9yaXplZCB8fCB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCxcbiAgICBwZXJNZXNzYWdlRGVmbGF0ZTogb3B0aW9ucy5wZXJNZXNzYWdlRGVmbGF0ZSB8fCB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLFxuICAgIGV4dHJhSGVhZGVyczogb3B0aW9ucy5leHRyYUhlYWRlcnMgfHwgdGhpcy5leHRyYUhlYWRlcnMsXG4gICAgZm9yY2VOb2RlOiBvcHRpb25zLmZvcmNlTm9kZSB8fCB0aGlzLmZvcmNlTm9kZSxcbiAgICBsb2NhbEFkZHJlc3M6IG9wdGlvbnMubG9jYWxBZGRyZXNzIHx8IHRoaXMubG9jYWxBZGRyZXNzLFxuICAgIHJlcXVlc3RUaW1lb3V0OiBvcHRpb25zLnJlcXVlc3RUaW1lb3V0IHx8IHRoaXMucmVxdWVzdFRpbWVvdXQsXG4gICAgcHJvdG9jb2xzOiBvcHRpb25zLnByb3RvY29scyB8fCB2b2lkICgwKSxcbiAgICBpc1JlYWN0TmF0aXZlOiB0aGlzLmlzUmVhY3ROYXRpdmVcbiAgfSk7XG5cbiAgcmV0dXJuIHRyYW5zcG9ydDtcbn07XG5cbmZ1bmN0aW9uIGNsb25lIChvYmopIHtcbiAgdmFyIG8gPSB7fTtcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBvW2ldID0gb2JqW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn1cblxuLyoqXG4gKiBJbml0aWFsaXplcyB0cmFuc3BvcnQgdG8gdXNlIGFuZCBzdGFydHMgcHJvYmUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblNvY2tldC5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRyYW5zcG9ydDtcbiAgaWYgKHRoaXMucmVtZW1iZXJVcGdyYWRlICYmIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgJiYgdGhpcy50cmFuc3BvcnRzLmluZGV4T2YoJ3dlYnNvY2tldCcpICE9PSAtMSkge1xuICAgIHRyYW5zcG9ydCA9ICd3ZWJzb2NrZXQnO1xuICB9IGVsc2UgaWYgKDAgPT09IHRoaXMudHJhbnNwb3J0cy5sZW5ndGgpIHtcbiAgICAvLyBFbWl0IGVycm9yIG9uIG5leHQgdGljayBzbyBpdCBjYW4gYmUgbGlzdGVuZWQgdG9cbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgJ05vIHRyYW5zcG9ydHMgYXZhaWxhYmxlJyk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRyYW5zcG9ydCA9IHRoaXMudHJhbnNwb3J0c1swXTtcbiAgfVxuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG5cbiAgLy8gUmV0cnkgd2l0aCB0aGUgbmV4dCB0cmFuc3BvcnQgaWYgdGhlIHRyYW5zcG9ydCBpcyBkaXNhYmxlZCAoanNvbnA6IGZhbHNlKVxuICB0cnkge1xuICAgIHRyYW5zcG9ydCA9IHRoaXMuY3JlYXRlVHJhbnNwb3J0KHRyYW5zcG9ydCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLnRyYW5zcG9ydHMuc2hpZnQoKTtcbiAgICB0aGlzLm9wZW4oKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cmFuc3BvcnQub3BlbigpO1xuICB0aGlzLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBjdXJyZW50IHRyYW5zcG9ydC4gRGlzYWJsZXMgdGhlIGV4aXN0aW5nIG9uZSAoaWYgYW55KS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNldFRyYW5zcG9ydCA9IGZ1bmN0aW9uICh0cmFuc3BvcnQpIHtcbiAgZGVidWcoJ3NldHRpbmcgdHJhbnNwb3J0ICVzJywgdHJhbnNwb3J0Lm5hbWUpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKHRoaXMudHJhbnNwb3J0KSB7XG4gICAgZGVidWcoJ2NsZWFyaW5nIGV4aXN0aW5nIHRyYW5zcG9ydCAlcycsIHRoaXMudHJhbnNwb3J0Lm5hbWUpO1xuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygpO1xuICB9XG5cbiAgLy8gc2V0IHVwIHRyYW5zcG9ydFxuICB0aGlzLnRyYW5zcG9ydCA9IHRyYW5zcG9ydDtcblxuICAvLyBzZXQgdXAgdHJhbnNwb3J0IGxpc3RlbmVyc1xuICB0cmFuc3BvcnRcbiAgLm9uKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uRHJhaW4oKTtcbiAgfSlcbiAgLm9uKCdwYWNrZXQnLCBmdW5jdGlvbiAocGFja2V0KSB7XG4gICAgc2VsZi5vblBhY2tldChwYWNrZXQpO1xuICB9KVxuICAub24oJ2Vycm9yJywgZnVuY3Rpb24gKGUpIHtcbiAgICBzZWxmLm9uRXJyb3IoZSk7XG4gIH0pXG4gIC5vbignY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCd0cmFuc3BvcnQgY2xvc2UnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIFByb2JlcyBhIHRyYW5zcG9ydC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdHJhbnNwb3J0IG5hbWVcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUucHJvYmUgPSBmdW5jdGlvbiAobmFtZSkge1xuICBkZWJ1ZygncHJvYmluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gIHZhciB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydChuYW1lLCB7IHByb2JlOiAxIH0pO1xuICB2YXIgZmFpbGVkID0gZmFsc2U7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gb25UcmFuc3BvcnRPcGVuICgpIHtcbiAgICBpZiAoc2VsZi5vbmx5QmluYXJ5VXBncmFkZXMpIHtcbiAgICAgIHZhciB1cGdyYWRlTG9zZXNCaW5hcnkgPSAhdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiBzZWxmLnRyYW5zcG9ydC5zdXBwb3J0c0JpbmFyeTtcbiAgICAgIGZhaWxlZCA9IGZhaWxlZCB8fCB1cGdyYWRlTG9zZXNCaW5hcnk7XG4gICAgfVxuICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIG9wZW5lZCcsIG5hbWUpO1xuICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6ICdwaW5nJywgZGF0YTogJ3Byb2JlJyB9XSk7XG4gICAgdHJhbnNwb3J0Lm9uY2UoJ3BhY2tldCcsIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIGlmIChmYWlsZWQpIHJldHVybjtcbiAgICAgIGlmICgncG9uZycgPT09IG1zZy50eXBlICYmICdwcm9iZScgPT09IG1zZy5kYXRhKSB7XG4gICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIHBvbmcnLCBuYW1lKTtcbiAgICAgICAgc2VsZi51cGdyYWRpbmcgPSB0cnVlO1xuICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGluZycsIHRyYW5zcG9ydCk7XG4gICAgICAgIGlmICghdHJhbnNwb3J0KSByZXR1cm47XG4gICAgICAgIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSAnd2Vic29ja2V0JyA9PT0gdHJhbnNwb3J0Lm5hbWU7XG5cbiAgICAgICAgZGVidWcoJ3BhdXNpbmcgY3VycmVudCB0cmFuc3BvcnQgXCIlc1wiJywgc2VsZi50cmFuc3BvcnQubmFtZSk7XG4gICAgICAgIHNlbGYudHJhbnNwb3J0LnBhdXNlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICAgICAgaWYgKCdjbG9zZWQnID09PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgICBkZWJ1ZygnY2hhbmdpbmcgdHJhbnNwb3J0IGFuZCBzZW5kaW5nIHVwZ3JhZGUgcGFja2V0Jyk7XG5cbiAgICAgICAgICBjbGVhbnVwKCk7XG5cbiAgICAgICAgICBzZWxmLnNldFRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICAgICAgICAgIHRyYW5zcG9ydC5zZW5kKFt7IHR5cGU6ICd1cGdyYWRlJyB9XSk7XG4gICAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRlJywgdHJhbnNwb3J0KTtcbiAgICAgICAgICB0cmFuc3BvcnQgPSBudWxsO1xuICAgICAgICAgIHNlbGYudXBncmFkaW5nID0gZmFsc2U7XG4gICAgICAgICAgc2VsZi5mbHVzaCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlYnVnKCdwcm9iZSB0cmFuc3BvcnQgXCIlc1wiIGZhaWxlZCcsIG5hbWUpO1xuICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdwcm9iZSBlcnJvcicpO1xuICAgICAgICBlcnIudHJhbnNwb3J0ID0gdHJhbnNwb3J0Lm5hbWU7XG4gICAgICAgIHNlbGYuZW1pdCgndXBncmFkZUVycm9yJywgZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZyZWV6ZVRyYW5zcG9ydCAoKSB7XG4gICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuXG4gICAgLy8gQW55IGNhbGxiYWNrIGNhbGxlZCBieSB0cmFuc3BvcnQgc2hvdWxkIGJlIGlnbm9yZWQgc2luY2Ugbm93XG4gICAgZmFpbGVkID0gdHJ1ZTtcblxuICAgIGNsZWFudXAoKTtcblxuICAgIHRyYW5zcG9ydC5jbG9zZSgpO1xuICAgIHRyYW5zcG9ydCA9IG51bGw7XG4gIH1cblxuICAvLyBIYW5kbGUgYW55IGVycm9yIHRoYXQgaGFwcGVucyB3aGlsZSBwcm9iaW5nXG4gIGZ1bmN0aW9uIG9uZXJyb3IgKGVycikge1xuICAgIHZhciBlcnJvciA9IG5ldyBFcnJvcigncHJvYmUgZXJyb3I6ICcgKyBlcnIpO1xuICAgIGVycm9yLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgZnJlZXplVHJhbnNwb3J0KCk7XG5cbiAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQgYmVjYXVzZSBvZiBlcnJvcjogJXMnLCBuYW1lLCBlcnIpO1xuXG4gICAgc2VsZi5lbWl0KCd1cGdyYWRlRXJyb3InLCBlcnJvcik7XG4gIH1cblxuICBmdW5jdGlvbiBvblRyYW5zcG9ydENsb3NlICgpIHtcbiAgICBvbmVycm9yKCd0cmFuc3BvcnQgY2xvc2VkJyk7XG4gIH1cblxuICAvLyBXaGVuIHRoZSBzb2NrZXQgaXMgY2xvc2VkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgZnVuY3Rpb24gb25jbG9zZSAoKSB7XG4gICAgb25lcnJvcignc29ja2V0IGNsb3NlZCcpO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIHVwZ3JhZGVkIHdoaWxlIHdlJ3JlIHByb2JpbmdcbiAgZnVuY3Rpb24gb251cGdyYWRlICh0bykge1xuICAgIGlmICh0cmFuc3BvcnQgJiYgdG8ubmFtZSAhPT0gdHJhbnNwb3J0Lm5hbWUpIHtcbiAgICAgIGRlYnVnKCdcIiVzXCIgd29ya3MgLSBhYm9ydGluZyBcIiVzXCInLCB0by5uYW1lLCB0cmFuc3BvcnQubmFtZSk7XG4gICAgICBmcmVlemVUcmFuc3BvcnQoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZW1vdmUgYWxsIGxpc3RlbmVycyBvbiB0aGUgdHJhbnNwb3J0IGFuZCBvbiBzZWxmXG4gIGZ1bmN0aW9uIGNsZWFudXAgKCkge1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignb3BlbicsIG9uVHJhbnNwb3J0T3Blbik7XG4gICAgdHJhbnNwb3J0LnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvblRyYW5zcG9ydENsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIoJ3VwZ3JhZGluZycsIG9udXBncmFkZSk7XG4gIH1cblxuICB0cmFuc3BvcnQub25jZSgnb3BlbicsIG9uVHJhbnNwb3J0T3Blbik7XG4gIHRyYW5zcG9ydC5vbmNlKCdlcnJvcicsIG9uZXJyb3IpO1xuICB0cmFuc3BvcnQub25jZSgnY2xvc2UnLCBvblRyYW5zcG9ydENsb3NlKTtcblxuICB0aGlzLm9uY2UoJ2Nsb3NlJywgb25jbG9zZSk7XG4gIHRoaXMub25jZSgndXBncmFkaW5nJywgb251cGdyYWRlKTtcblxuICB0cmFuc3BvcnQub3BlbigpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2hlbiBjb25uZWN0aW9uIGlzIGRlZW1lZCBvcGVuLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdzb2NrZXQgb3BlbicpO1xuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIFNvY2tldC5wcmlvcldlYnNvY2tldFN1Y2Nlc3MgPSAnd2Vic29ja2V0JyA9PT0gdGhpcy50cmFuc3BvcnQubmFtZTtcbiAgdGhpcy5lbWl0KCdvcGVuJyk7XG4gIHRoaXMuZmx1c2goKTtcblxuICAvLyB3ZSBjaGVjayBmb3IgYHJlYWR5U3RhdGVgIGluIGNhc2UgYW4gYG9wZW5gXG4gIC8vIGxpc3RlbmVyIGFscmVhZHkgY2xvc2VkIHRoZSBzb2NrZXRcbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlICYmIHRoaXMudXBncmFkZSAmJiB0aGlzLnRyYW5zcG9ydC5wYXVzZSkge1xuICAgIGRlYnVnKCdzdGFydGluZyB1cGdyYWRlIHByb2JlcycpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gdGhpcy51cGdyYWRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHRoaXMucHJvYmUodGhpcy51cGdyYWRlc1tpXSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEhhbmRsZXMgYSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vblBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8XG4gICAgICAnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIGRlYnVnKCdzb2NrZXQgcmVjZWl2ZTogdHlwZSBcIiVzXCIsIGRhdGEgXCIlc1wiJywgcGFja2V0LnR5cGUsIHBhY2tldC5kYXRhKTtcblxuICAgIHRoaXMuZW1pdCgncGFja2V0JywgcGFja2V0KTtcblxuICAgIC8vIFNvY2tldCBpcyBsaXZlIC0gYW55IHBhY2tldCBjb3VudHNcbiAgICB0aGlzLmVtaXQoJ2hlYXJ0YmVhdCcpO1xuXG4gICAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgICAgY2FzZSAnb3Blbic6XG4gICAgICAgIHRoaXMub25IYW5kc2hha2UoSlNPTi5wYXJzZShwYWNrZXQuZGF0YSkpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncG9uZyc6XG4gICAgICAgIHRoaXMuc2V0UGluZygpO1xuICAgICAgICB0aGlzLmVtaXQoJ3BvbmcnKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcignc2VydmVyIGVycm9yJyk7XG4gICAgICAgIGVyci5jb2RlID0gcGFja2V0LmRhdGE7XG4gICAgICAgIHRoaXMub25FcnJvcihlcnIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnbWVzc2FnZSc6XG4gICAgICAgIHRoaXMuZW1pdCgnZGF0YScsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgcGFja2V0LmRhdGEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoJ3BhY2tldCByZWNlaXZlZCB3aXRoIHNvY2tldCByZWFkeVN0YXRlIFwiJXNcIicsIHRoaXMucmVhZHlTdGF0ZSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gaGFuZHNoYWtlIGNvbXBsZXRpb24uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGhhbmRzaGFrZSBvYmpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25IYW5kc2hha2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmVtaXQoJ2hhbmRzaGFrZScsIGRhdGEpO1xuICB0aGlzLmlkID0gZGF0YS5zaWQ7XG4gIHRoaXMudHJhbnNwb3J0LnF1ZXJ5LnNpZCA9IGRhdGEuc2lkO1xuICB0aGlzLnVwZ3JhZGVzID0gdGhpcy5maWx0ZXJVcGdyYWRlcyhkYXRhLnVwZ3JhZGVzKTtcbiAgdGhpcy5waW5nSW50ZXJ2YWwgPSBkYXRhLnBpbmdJbnRlcnZhbDtcbiAgdGhpcy5waW5nVGltZW91dCA9IGRhdGEucGluZ1RpbWVvdXQ7XG4gIHRoaXMub25PcGVuKCk7XG4gIC8vIEluIGNhc2Ugb3BlbiBoYW5kbGVyIGNsb3NlcyBzb2NrZXRcbiAgaWYgKCdjbG9zZWQnID09PSB0aGlzLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgdGhpcy5zZXRQaW5nKCk7XG5cbiAgLy8gUHJvbG9uZyBsaXZlbmVzcyBvZiBzb2NrZXQgb24gaGVhcnRiZWF0XG4gIHRoaXMucmVtb3ZlTGlzdGVuZXIoJ2hlYXJ0YmVhdCcsIHRoaXMub25IZWFydGJlYXQpO1xuICB0aGlzLm9uKCdoZWFydGJlYXQnLCB0aGlzLm9uSGVhcnRiZWF0KTtcbn07XG5cbi8qKlxuICogUmVzZXRzIHBpbmcgdGltZW91dC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uSGVhcnRiZWF0ID0gZnVuY3Rpb24gKHRpbWVvdXQpIHtcbiAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ1RpbWVvdXRUaW1lcik7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgc2VsZi5waW5nVGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCdjbG9zZWQnID09PSBzZWxmLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICBzZWxmLm9uQ2xvc2UoJ3BpbmcgdGltZW91dCcpO1xuICB9LCB0aW1lb3V0IHx8IChzZWxmLnBpbmdJbnRlcnZhbCArIHNlbGYucGluZ1RpbWVvdXQpKTtcbn07XG5cbi8qKlxuICogUGluZ3Mgc2VydmVyIGV2ZXJ5IGB0aGlzLnBpbmdJbnRlcnZhbGAgYW5kIGV4cGVjdHMgcmVzcG9uc2VcbiAqIHdpdGhpbiBgdGhpcy5waW5nVGltZW91dGAgb3IgY2xvc2VzIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZXRQaW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGNsZWFyVGltZW91dChzZWxmLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgc2VsZi5waW5nSW50ZXJ2YWxUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGRlYnVnKCd3cml0aW5nIHBpbmcgcGFja2V0IC0gZXhwZWN0aW5nIHBvbmcgd2l0aGluICVzbXMnLCBzZWxmLnBpbmdUaW1lb3V0KTtcbiAgICBzZWxmLnBpbmcoKTtcbiAgICBzZWxmLm9uSGVhcnRiZWF0KHNlbGYucGluZ1RpbWVvdXQpO1xuICB9LCBzZWxmLnBpbmdJbnRlcnZhbCk7XG59O1xuXG4vKipcbiogU2VuZHMgYSBwaW5nIHBhY2tldC5cbipcbiogQGFwaSBwcml2YXRlXG4qL1xuXG5Tb2NrZXQucHJvdG90eXBlLnBpbmcgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5zZW5kUGFja2V0KCdwaW5nJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYuZW1pdCgncGluZycpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIG9uIGBkcmFpbmAgZXZlbnRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uRHJhaW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMud3JpdGVCdWZmZXIuc3BsaWNlKDAsIHRoaXMucHJldkJ1ZmZlckxlbik7XG5cbiAgLy8gc2V0dGluZyBwcmV2QnVmZmVyTGVuID0gMCBpcyB2ZXJ5IGltcG9ydGFudFxuICAvLyBmb3IgZXhhbXBsZSwgd2hlbiB1cGdyYWRpbmcsIHVwZ3JhZGUgcGFja2V0IGlzIHNlbnQgb3ZlcixcbiAgLy8gYW5kIGEgbm9uemVybyBwcmV2QnVmZmVyTGVuIGNvdWxkIGNhdXNlIHByb2JsZW1zIG9uIGBkcmFpbmBcbiAgdGhpcy5wcmV2QnVmZmVyTGVuID0gMDtcblxuICBpZiAoMCA9PT0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICB0aGlzLmVtaXQoJ2RyYWluJyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG59O1xuXG4vKipcbiAqIEZsdXNoIHdyaXRlIGJ1ZmZlcnMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5mbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdjbG9zZWQnICE9PSB0aGlzLnJlYWR5U3RhdGUgJiYgdGhpcy50cmFuc3BvcnQud3JpdGFibGUgJiZcbiAgICAhdGhpcy51cGdyYWRpbmcgJiYgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpIHtcbiAgICBkZWJ1ZygnZmx1c2hpbmcgJWQgcGFja2V0cyBpbiBzb2NrZXQnLCB0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCk7XG4gICAgdGhpcy50cmFuc3BvcnQuc2VuZCh0aGlzLndyaXRlQnVmZmVyKTtcbiAgICAvLyBrZWVwIHRyYWNrIG9mIGN1cnJlbnQgbGVuZ3RoIG9mIHdyaXRlQnVmZmVyXG4gICAgLy8gc3BsaWNlIHdyaXRlQnVmZmVyIGFuZCBjYWxsYmFja0J1ZmZlciBvbiBgZHJhaW5gXG4gICAgdGhpcy5wcmV2QnVmZmVyTGVuID0gdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGg7XG4gICAgdGhpcy5lbWl0KCdmbHVzaCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAcmV0dXJuIHtTb2NrZXR9IGZvciBjaGFpbmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS53cml0ZSA9XG5Tb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAobXNnLCBvcHRpb25zLCBmbikge1xuICB0aGlzLnNlbmRQYWNrZXQoJ21lc3NhZ2UnLCBtc2csIG9wdGlvbnMsIGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYWNrZXQgdHlwZS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhLlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2VuZFBhY2tldCA9IGZ1bmN0aW9uICh0eXBlLCBkYXRhLCBvcHRpb25zLCBmbikge1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGRhdGEpIHtcbiAgICBmbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2Ygb3B0aW9ucykge1xuICAgIGZuID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGlmICgnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2VkJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuY29tcHJlc3MgPSBmYWxzZSAhPT0gb3B0aW9ucy5jb21wcmVzcztcblxuICB2YXIgcGFja2V0ID0ge1xuICAgIHR5cGU6IHR5cGUsXG4gICAgZGF0YTogZGF0YSxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH07XG4gIHRoaXMuZW1pdCgncGFja2V0Q3JlYXRlJywgcGFja2V0KTtcbiAgdGhpcy53cml0ZUJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIGlmIChmbikgdGhpcy5vbmNlKCdmbHVzaCcsIGZuKTtcbiAgdGhpcy5mbHVzaCgpO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCdvcGVuaW5nJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NpbmcnO1xuXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodGhpcy51cGdyYWRpbmcpIHtcbiAgICAgIHdhaXRGb3JVcGdyYWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2UgKCkge1xuICAgIHNlbGYub25DbG9zZSgnZm9yY2VkIGNsb3NlJyk7XG4gICAgZGVidWcoJ3NvY2tldCBjbG9zaW5nIC0gdGVsbGluZyB0cmFuc3BvcnQgdG8gY2xvc2UnKTtcbiAgICBzZWxmLnRyYW5zcG9ydC5jbG9zZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2xlYW51cEFuZENsb3NlICgpIHtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRlRXJyb3InLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIGNsb3NlKCk7XG4gIH1cblxuICBmdW5jdGlvbiB3YWl0Rm9yVXBncmFkZSAoKSB7XG4gICAgLy8gd2FpdCBmb3IgdXBncmFkZSB0byBmaW5pc2ggc2luY2Ugd2UgY2FuJ3Qgc2VuZCBwYWNrZXRzIHdoaWxlIHBhdXNpbmcgYSB0cmFuc3BvcnRcbiAgICBzZWxmLm9uY2UoJ3VwZ3JhZGUnLCBjbGVhbnVwQW5kQ2xvc2UpO1xuICAgIHNlbGYub25jZSgndXBncmFkZUVycm9yJywgY2xlYW51cEFuZENsb3NlKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgZXJyb3JcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gIGRlYnVnKCdzb2NrZXQgZXJyb3IgJWonLCBlcnIpO1xuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gZmFsc2U7XG4gIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB0aGlzLm9uQ2xvc2UoJ3RyYW5zcG9ydCBlcnJvcicsIGVycik7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHRyYW5zcG9ydCBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAocmVhc29uLCBkZXNjKSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnY2xvc2luZycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIGRlYnVnKCdzb2NrZXQgY2xvc2Ugd2l0aCByZWFzb246IFwiJXNcIicsIHJlYXNvbik7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gY2xlYXIgdGltZXJzXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucGluZ0ludGVydmFsVGltZXIpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuXG4gICAgLy8gc3RvcCBldmVudCBmcm9tIGZpcmluZyBhZ2FpbiBmb3IgdHJhbnNwb3J0XG4gICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCdjbG9zZScpO1xuXG4gICAgLy8gZW5zdXJlIHRyYW5zcG9ydCB3b24ndCBzdGF5IG9wZW5cbiAgICB0aGlzLnRyYW5zcG9ydC5jbG9zZSgpO1xuXG4gICAgLy8gaWdub3JlIGZ1cnRoZXIgdHJhbnNwb3J0IGNvbW11bmljYXRpb25cbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcblxuICAgIC8vIHNldCByZWFkeSBzdGF0ZVxuICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuXG4gICAgLy8gY2xlYXIgc2Vzc2lvbiBpZFxuICAgIHRoaXMuaWQgPSBudWxsO1xuXG4gICAgLy8gZW1pdCBjbG9zZSBldmVudFxuICAgIHRoaXMuZW1pdCgnY2xvc2UnLCByZWFzb24sIGRlc2MpO1xuXG4gICAgLy8gY2xlYW4gYnVmZmVycyBhZnRlciwgc28gdXNlcnMgY2FuIHN0aWxsXG4gICAgLy8gZ3JhYiB0aGUgYnVmZmVycyBvbiBgY2xvc2VgIGV2ZW50XG4gICAgc2VsZi53cml0ZUJ1ZmZlciA9IFtdO1xuICAgIHNlbGYucHJldkJ1ZmZlckxlbiA9IDA7XG4gIH1cbn07XG5cbi8qKlxuICogRmlsdGVycyB1cGdyYWRlcywgcmV0dXJuaW5nIG9ubHkgdGhvc2UgbWF0Y2hpbmcgY2xpZW50IHRyYW5zcG9ydHMuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2VydmVyIHVwZ3JhZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5maWx0ZXJVcGdyYWRlcyA9IGZ1bmN0aW9uICh1cGdyYWRlcykge1xuICB2YXIgZmlsdGVyZWRVcGdyYWRlcyA9IFtdO1xuICBmb3IgKHZhciBpID0gMCwgaiA9IHVwZ3JhZGVzLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgIGlmICh+aW5kZXgodGhpcy50cmFuc3BvcnRzLCB1cGdyYWRlc1tpXSkpIGZpbHRlcmVkVXBncmFkZXMucHVzaCh1cGdyYWRlc1tpXSk7XG4gIH1cbiAgcmV0dXJuIGZpbHRlcmVkVXBncmFkZXM7XG59O1xuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICpcbiAqIExvZ2ljIGJvcnJvd2VkIGZyb20gTW9kZXJuaXpyOlxuICpcbiAqICAgLSBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvY29ycy5qc1xuICovXG5cbnRyeSB7XG4gIG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICd3aXRoQ3JlZGVudGlhbHMnIGluIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xufSBjYXRjaCAoZXJyKSB7XG4gIC8vIGlmIFhNTEh0dHAgc3VwcG9ydCBpcyBkaXNhYmxlZCBpbiBJRSB0aGVuIGl0IHdpbGwgdGhyb3dcbiAgLy8gd2hlbiB0cnlpbmcgdG8gY3JlYXRlXG4gIG1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG59XG4iLCIvKiBnbG9iYWwgYXR0YWNoRXZlbnQgKi9cblxuLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBYTUxIdHRwUmVxdWVzdCA9IHJlcXVpcmUoJ3htbGh0dHByZXF1ZXN0LXNzbCcpO1xudmFyIFBvbGxpbmcgPSByZXF1aXJlKCcuL3BvbGxpbmcnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnY29tcG9uZW50LWVtaXR0ZXInKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciBkZWJ1ZyA9IHJlcXVpcmUoJ2RlYnVnJykoJ2VuZ2luZS5pby1jbGllbnQ6cG9sbGluZy14aHInKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vZ2xvYmFsVGhpcycpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gWEhSO1xubW9kdWxlLmV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG5cbi8qKlxuICogRW1wdHkgZnVuY3Rpb25cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSAoKSB7fVxuXG4vKipcbiAqIFhIUiBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFhIUiAob3B0cykge1xuICBQb2xsaW5nLmNhbGwodGhpcywgb3B0cyk7XG4gIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBvcHRzLnJlcXVlc3RUaW1lb3V0O1xuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuXG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIGlzU1NMID0gJ2h0dHBzOicgPT09IGxvY2F0aW9uLnByb3RvY29sO1xuICAgIHZhciBwb3J0ID0gbG9jYXRpb24ucG9ydDtcblxuICAgIC8vIHNvbWUgdXNlciBhZ2VudHMgaGF2ZSBlbXB0eSBgbG9jYXRpb24ucG9ydGBcbiAgICBpZiAoIXBvcnQpIHtcbiAgICAgIHBvcnQgPSBpc1NTTCA/IDQ0MyA6IDgwO1xuICAgIH1cblxuICAgIHRoaXMueGQgPSAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSkgfHxcbiAgICAgIHBvcnQgIT09IG9wdHMucG9ydDtcbiAgICB0aGlzLnhzID0gb3B0cy5zZWN1cmUgIT09IGlzU1NMO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICovXG5cbmluaGVyaXQoWEhSLCBQb2xsaW5nKTtcblxuLyoqXG4gKiBYSFIgc3VwcG9ydHMgYmluYXJ5XG4gKi9cblxuWEhSLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHJlcXVlc3QuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1ldGhvZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIG9wdHMudXJpID0gdGhpcy51cmkoKTtcbiAgb3B0cy54ZCA9IHRoaXMueGQ7XG4gIG9wdHMueHMgPSB0aGlzLnhzO1xuICBvcHRzLmFnZW50ID0gdGhpcy5hZ2VudCB8fCBmYWxzZTtcbiAgb3B0cy5zdXBwb3J0c0JpbmFyeSA9IHRoaXMuc3VwcG9ydHNCaW5hcnk7XG4gIG9wdHMuZW5hYmxlc1hEUiA9IHRoaXMuZW5hYmxlc1hEUjtcbiAgb3B0cy53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFscztcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgb3B0cy5wYXNzcGhyYXNlID0gdGhpcy5wYXNzcGhyYXNlO1xuICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gIG9wdHMuY2EgPSB0aGlzLmNhO1xuICBvcHRzLmNpcGhlcnMgPSB0aGlzLmNpcGhlcnM7XG4gIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIG9wdHMucmVxdWVzdFRpbWVvdXQgPSB0aGlzLnJlcXVlc3RUaW1lb3V0O1xuXG4gIC8vIG90aGVyIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMuZXh0cmFIZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG5cbiAgcmV0dXJuIG5ldyBSZXF1ZXN0KG9wdHMpO1xufTtcblxuLyoqXG4gKiBTZW5kcyBkYXRhLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmQuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblhIUi5wcm90b3R5cGUuZG9Xcml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICB2YXIgaXNCaW5hcnkgPSB0eXBlb2YgZGF0YSAhPT0gJ3N0cmluZycgJiYgZGF0YSAhPT0gdW5kZWZpbmVkO1xuICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KHsgbWV0aG9kOiAnUE9TVCcsIGRhdGE6IGRhdGEsIGlzQmluYXJ5OiBpc0JpbmFyeSB9KTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICByZXEub24oJ3N1Y2Nlc3MnLCBmbik7XG4gIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2VsZi5vbkVycm9yKCd4aHIgcG9zdCBlcnJvcicsIGVycik7XG4gIH0pO1xuICB0aGlzLnNlbmRYaHIgPSByZXE7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuWEhSLnByb3RvdHlwZS5kb1BvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCd4aHIgcG9sbCcpO1xuICB2YXIgcmVxID0gdGhpcy5yZXF1ZXN0KCk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmVxLm9uKCdkYXRhJywgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBzZWxmLm9uRGF0YShkYXRhKTtcbiAgfSk7XG4gIHJlcS5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgc2VsZi5vbkVycm9yKCd4aHIgcG9sbCBlcnJvcicsIGVycik7XG4gIH0pO1xuICB0aGlzLnBvbGxYaHIgPSByZXE7XG59O1xuXG4vKipcbiAqIFJlcXVlc3QgY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBSZXF1ZXN0IChvcHRzKSB7XG4gIHRoaXMubWV0aG9kID0gb3B0cy5tZXRob2QgfHwgJ0dFVCc7XG4gIHRoaXMudXJpID0gb3B0cy51cmk7XG4gIHRoaXMueGQgPSAhIW9wdHMueGQ7XG4gIHRoaXMueHMgPSAhIW9wdHMueHM7XG4gIHRoaXMuYXN5bmMgPSBmYWxzZSAhPT0gb3B0cy5hc3luYztcbiAgdGhpcy5kYXRhID0gdW5kZWZpbmVkICE9PSBvcHRzLmRhdGEgPyBvcHRzLmRhdGEgOiBudWxsO1xuICB0aGlzLmFnZW50ID0gb3B0cy5hZ2VudDtcbiAgdGhpcy5pc0JpbmFyeSA9IG9wdHMuaXNCaW5hcnk7XG4gIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBvcHRzLnN1cHBvcnRzQmluYXJ5O1xuICB0aGlzLmVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gb3B0cy53aXRoQ3JlZGVudGlhbHM7XG4gIHRoaXMucmVxdWVzdFRpbWVvdXQgPSBvcHRzLnJlcXVlc3RUaW1lb3V0O1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLnBmeCA9IG9wdHMucGZ4O1xuICB0aGlzLmtleSA9IG9wdHMua2V5O1xuICB0aGlzLnBhc3NwaHJhc2UgPSBvcHRzLnBhc3NwaHJhc2U7XG4gIHRoaXMuY2VydCA9IG9wdHMuY2VydDtcbiAgdGhpcy5jYSA9IG9wdHMuY2E7XG4gIHRoaXMuY2lwaGVycyA9IG9wdHMuY2lwaGVycztcbiAgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQgPSBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuXG4gIHRoaXMuY3JlYXRlKCk7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFJlcXVlc3QucHJvdG90eXBlKTtcblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBYSFIgb2JqZWN0IGFuZCBzZW5kcyB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5jcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvcHRzID0geyBhZ2VudDogdGhpcy5hZ2VudCwgeGRvbWFpbjogdGhpcy54ZCwgeHNjaGVtZTogdGhpcy54cywgZW5hYmxlc1hEUjogdGhpcy5lbmFibGVzWERSIH07XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gIG9wdHMua2V5ID0gdGhpcy5rZXk7XG4gIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICBvcHRzLmNhID0gdGhpcy5jYTtcbiAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuXG4gIHZhciB4aHIgPSB0aGlzLnhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRyeSB7XG4gICAgZGVidWcoJ3hociBvcGVuICVzOiAlcycsIHRoaXMubWV0aG9kLCB0aGlzLnVyaSk7XG4gICAgeGhyLm9wZW4odGhpcy5tZXRob2QsIHRoaXMudXJpLCB0aGlzLmFzeW5jKTtcbiAgICB0cnkge1xuICAgICAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgICAgIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sgJiYgeGhyLnNldERpc2FibGVIZWFkZXJDaGVjayh0cnVlKTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmV4dHJhSGVhZGVycykge1xuICAgICAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5leHRyYUhlYWRlcnNbaV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICBpZiAoJ1BPU1QnID09PSB0aGlzLm1ldGhvZCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMuaXNCaW5hcnkpIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnKi8qJyk7XG4gICAgfSBjYXRjaCAoZSkge31cblxuICAgIC8vIGllNiBjaGVja1xuICAgIGlmICgnd2l0aENyZWRlbnRpYWxzJyBpbiB4aHIpIHtcbiAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0aGlzLndpdGhDcmVkZW50aWFscztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXF1ZXN0VGltZW91dCkge1xuICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLnJlcXVlc3RUaW1lb3V0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm9uTG9hZCgpO1xuICAgICAgfTtcbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLm9uRXJyb3IoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgIGlmIChzZWxmLnN1cHBvcnRzQmluYXJ5ICYmIGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyB8fCBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTsgY2hhcnNldD1VVEYtOCcpIHtcbiAgICAgICAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgICAgfVxuICAgICAgICBpZiAoNCAhPT0geGhyLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgICAgICAgaWYgKDIwMCA9PT0geGhyLnN0YXR1cyB8fCAxMjIzID09PSB4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBtYWtlIHN1cmUgdGhlIGBlcnJvcmAgZXZlbnQgaGFuZGxlciB0aGF0J3MgdXNlci1zZXRcbiAgICAgICAgICAvLyBkb2VzIG5vdCB0aHJvdyBpbiB0aGUgc2FtZSB0aWNrIGFuZCBnZXRzIGNhdWdodCBoZXJlXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLm9uRXJyb3IodHlwZW9mIHhoci5zdGF0dXMgPT09ICdudW1iZXInID8geGhyLnN0YXR1cyA6IDApO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlYnVnKCd4aHIgZGF0YSAlcycsIHRoaXMuZGF0YSk7XG4gICAgeGhyLnNlbmQodGhpcy5kYXRhKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIE5lZWQgdG8gZGVmZXIgc2luY2UgLmNyZWF0ZSgpIGlzIGNhbGxlZCBkaXJlY3RseSBmaHJvbSB0aGUgY29uc3RydWN0b3JcbiAgICAvLyBhbmQgdGh1cyB0aGUgJ2Vycm9yJyBldmVudCBjYW4gb25seSBiZSBvbmx5IGJvdW5kICphZnRlciogdGhpcyBleGNlcHRpb25cbiAgICAvLyBvY2N1cnMuICBUaGVyZWZvcmUsIGFsc28sIHdlIGNhbm5vdCB0aHJvdyBoZXJlIGF0IGFsbC5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYub25FcnJvcihlKTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMuaW5kZXggPSBSZXF1ZXN0LnJlcXVlc3RzQ291bnQrKztcbiAgICBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdID0gdGhpcztcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzdWNjZXNzZnVsIHJlc3BvbnNlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uU3VjY2VzcyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0KCdzdWNjZXNzJyk7XG4gIHRoaXMuY2xlYW51cCgpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgaWYgd2UgaGF2ZSBkYXRhLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuZW1pdCgnZGF0YScsIGRhdGEpO1xuICB0aGlzLm9uU3VjY2VzcygpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlcnJvci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgdGhpcy5jbGVhbnVwKHRydWUpO1xufTtcblxuLyoqXG4gKiBDbGVhbnMgdXAgaG91c2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIChmcm9tRXJyb3IpIHtcbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgdGhpcy54aHIgfHwgbnVsbCA9PT0gdGhpcy54aHIpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8geG1saHR0cHJlcXVlc3RcbiAgaWYgKHRoaXMuaGFzWERSKCkpIHtcbiAgICB0aGlzLnhoci5vbmxvYWQgPSB0aGlzLnhoci5vbmVycm9yID0gZW1wdHk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy54aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZW1wdHk7XG4gIH1cblxuICBpZiAoZnJvbUVycm9yKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMueGhyLmFib3J0KCk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGVsZXRlIFJlcXVlc3QucmVxdWVzdHNbdGhpcy5pbmRleF07XG4gIH1cblxuICB0aGlzLnhociA9IG51bGw7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGxvYWQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25Mb2FkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZGF0YTtcbiAgdHJ5IHtcbiAgICB2YXIgY29udGVudFR5cGU7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnRlbnRUeXBlID0gdGhpcy54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgaWYgKGNvbnRlbnRUeXBlID09PSAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyB8fCBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbTsgY2hhcnNldD1VVEYtOCcpIHtcbiAgICAgIGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZSB8fCB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSB0aGlzLnhoci5yZXNwb25zZVRleHQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy5vbkVycm9yKGUpO1xuICB9XG4gIGlmIChudWxsICE9IGRhdGEpIHtcbiAgICB0aGlzLm9uRGF0YShkYXRhKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDaGVjayBpZiBpdCBoYXMgWERvbWFpblJlcXVlc3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuaGFzWERSID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHlwZW9mIFhEb21haW5SZXF1ZXN0ICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy54cyAmJiB0aGlzLmVuYWJsZXNYRFI7XG59O1xuXG4vKipcbiAqIEFib3J0cyB0aGUgcmVxdWVzdC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNsZWFudXAoKTtcbn07XG5cbi8qKlxuICogQWJvcnRzIHBlbmRpbmcgcmVxdWVzdHMgd2hlbiB1bmxvYWRpbmcgdGhlIHdpbmRvdy4gVGhpcyBpcyBuZWVkZWQgdG8gcHJldmVudFxuICogbWVtb3J5IGxlYWtzIChlLmcuIHdoZW4gdXNpbmcgSUUpIGFuZCB0byBlbnN1cmUgdGhhdCBubyBzcHVyaW91cyBlcnJvciBpc1xuICogZW1pdHRlZC5cbiAqL1xuXG5SZXF1ZXN0LnJlcXVlc3RzQ291bnQgPSAwO1xuUmVxdWVzdC5yZXF1ZXN0cyA9IHt9O1xuXG5pZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAodHlwZW9mIGF0dGFjaEV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgdW5sb2FkSGFuZGxlcik7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFkZEV2ZW50TGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgdGVybWluYXRpb25FdmVudCA9ICdvbnBhZ2VoaWRlJyBpbiBnbG9iYWxUaGlzID8gJ3BhZ2VoaWRlJyA6ICd1bmxvYWQnO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIodGVybWluYXRpb25FdmVudCwgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVubG9hZEhhbmRsZXIgKCkge1xuICBmb3IgKHZhciBpIGluIFJlcXVlc3QucmVxdWVzdHMpIHtcbiAgICBpZiAoUmVxdWVzdC5yZXF1ZXN0cy5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgUmVxdWVzdC5yZXF1ZXN0c1tpXS5hYm9ydCgpO1xuICAgIH1cbiAgfVxufVxuIiwiXG4vKipcbiAqIEdldHMgdGhlIGtleXMgZm9yIGFuIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJuIHtBcnJheX0ga2V5c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzIChvYmope1xuICB2YXIgYXJyID0gW107XG4gIHZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKGhhcy5jYWxsKG9iaiwgaSkpIHtcbiAgICAgIGFyci5wdXNoKGkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyO1xufTtcbiIsIi8qKlxuICogQW4gYWJzdHJhY3Rpb24gZm9yIHNsaWNpbmcgYW4gYXJyYXlidWZmZXIgZXZlbiB3aGVuXG4gKiBBcnJheUJ1ZmZlci5wcm90b3R5cGUuc2xpY2UgaXMgbm90IHN1cHBvcnRlZFxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihhcnJheWJ1ZmZlciwgc3RhcnQsIGVuZCkge1xuICB2YXIgYnl0ZXMgPSBhcnJheWJ1ZmZlci5ieXRlTGVuZ3RoO1xuICBzdGFydCA9IHN0YXJ0IHx8IDA7XG4gIGVuZCA9IGVuZCB8fCBieXRlcztcblxuICBpZiAoYXJyYXlidWZmZXIuc2xpY2UpIHsgcmV0dXJuIGFycmF5YnVmZmVyLnNsaWNlKHN0YXJ0LCBlbmQpOyB9XG5cbiAgaWYgKHN0YXJ0IDwgMCkgeyBzdGFydCArPSBieXRlczsgfVxuICBpZiAoZW5kIDwgMCkgeyBlbmQgKz0gYnl0ZXM7IH1cbiAgaWYgKGVuZCA+IGJ5dGVzKSB7IGVuZCA9IGJ5dGVzOyB9XG5cbiAgaWYgKHN0YXJ0ID49IGJ5dGVzIHx8IHN0YXJ0ID49IGVuZCB8fCBieXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBuZXcgQXJyYXlCdWZmZXIoMCk7XG4gIH1cblxuICB2YXIgYWJ2ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuICB2YXIgcmVzdWx0ID0gbmV3IFVpbnQ4QXJyYXkoZW5kIC0gc3RhcnQpO1xuICBmb3IgKHZhciBpID0gc3RhcnQsIGlpID0gMDsgaSA8IGVuZDsgaSsrLCBpaSsrKSB7XG4gICAgcmVzdWx0W2lpXSA9IGFidltpXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0LmJ1ZmZlcjtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGFmdGVyXG5cbmZ1bmN0aW9uIGFmdGVyKGNvdW50LCBjYWxsYmFjaywgZXJyX2NiKSB7XG4gICAgdmFyIGJhaWwgPSBmYWxzZVxuICAgIGVycl9jYiA9IGVycl9jYiB8fCBub29wXG4gICAgcHJveHkuY291bnQgPSBjb3VudFxuXG4gICAgcmV0dXJuIChjb3VudCA9PT0gMCkgPyBjYWxsYmFjaygpIDogcHJveHlcblxuICAgIGZ1bmN0aW9uIHByb3h5KGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChwcm94eS5jb3VudCA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FmdGVyIGNhbGxlZCB0b28gbWFueSB0aW1lcycpXG4gICAgICAgIH1cbiAgICAgICAgLS1wcm94eS5jb3VudFxuXG4gICAgICAgIC8vIGFmdGVyIGZpcnN0IGVycm9yLCByZXN0IGFyZSBwYXNzZWQgdG8gZXJyX2NiXG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGJhaWwgPSB0cnVlXG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpXG4gICAgICAgICAgICAvLyBmdXR1cmUgZXJyb3IgY2FsbGJhY2tzIHdpbGwgZ28gdG8gZXJyb3IgaGFuZGxlclxuICAgICAgICAgICAgY2FsbGJhY2sgPSBlcnJfY2JcbiAgICAgICAgfSBlbHNlIGlmIChwcm94eS5jb3VudCA9PT0gMCAmJiAhYmFpbCkge1xuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVzdWx0KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge31cbiIsIi8qISBodHRwczovL210aHMuYmUvdXRmOGpzIHYyLjEuMiBieSBAbWF0aGlhcyAqL1xuXG52YXIgc3RyaW5nRnJvbUNoYXJDb2RlID0gU3RyaW5nLmZyb21DaGFyQ29kZTtcblxuLy8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcbmZ1bmN0aW9uIHVjczJkZWNvZGUoc3RyaW5nKSB7XG5cdHZhciBvdXRwdXQgPSBbXTtcblx0dmFyIGNvdW50ZXIgPSAwO1xuXHR2YXIgbGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcblx0dmFyIHZhbHVlO1xuXHR2YXIgZXh0cmE7XG5cdHdoaWxlIChjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdGlmICh2YWx1ZSA+PSAweEQ4MDAgJiYgdmFsdWUgPD0gMHhEQkZGICYmIGNvdW50ZXIgPCBsZW5ndGgpIHtcblx0XHRcdC8vIGhpZ2ggc3Vycm9nYXRlLCBhbmQgdGhlcmUgaXMgYSBuZXh0IGNoYXJhY3RlclxuXHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKChleHRyYSAmIDB4RkMwMCkgPT0gMHhEQzAwKSB7IC8vIGxvdyBzdXJyb2dhdGVcblx0XHRcdFx0b3V0cHV0LnB1c2goKCh2YWx1ZSAmIDB4M0ZGKSA8PCAxMCkgKyAoZXh0cmEgJiAweDNGRikgKyAweDEwMDAwKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHVubWF0Y2hlZCBzdXJyb2dhdGU7IG9ubHkgYXBwZW5kIHRoaXMgY29kZSB1bml0LCBpbiBjYXNlIHRoZSBuZXh0XG5cdFx0XHRcdC8vIGNvZGUgdW5pdCBpcyB0aGUgaGlnaCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpclxuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdGNvdW50ZXItLTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG4vLyBUYWtlbiBmcm9tIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZVxuZnVuY3Rpb24gdWNzMmVuY29kZShhcnJheSkge1xuXHR2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXHR2YXIgaW5kZXggPSAtMTtcblx0dmFyIHZhbHVlO1xuXHR2YXIgb3V0cHV0ID0gJyc7XG5cdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdFx0dmFsdWUgPSBhcnJheVtpbmRleF07XG5cdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHR2YWx1ZSAtPSAweDEwMDAwO1xuXHRcdFx0b3V0cHV0ICs9IHN0cmluZ0Zyb21DaGFyQ29kZSh2YWx1ZSA+Pj4gMTAgJiAweDNGRiB8IDB4RDgwMCk7XG5cdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0fVxuXHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUpO1xuXHR9XG5cdHJldHVybiBvdXRwdXQ7XG59XG5cbmZ1bmN0aW9uIGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50LCBzdHJpY3QpIHtcblx0aWYgKGNvZGVQb2ludCA+PSAweEQ4MDAgJiYgY29kZVBvaW50IDw9IDB4REZGRikge1xuXHRcdGlmIChzdHJpY3QpIHtcblx0XHRcdHRocm93IEVycm9yKFxuXHRcdFx0XHQnTG9uZSBzdXJyb2dhdGUgVSsnICsgY29kZVBvaW50LnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpICtcblx0XHRcdFx0JyBpcyBub3QgYSBzY2FsYXIgdmFsdWUnXG5cdFx0XHQpO1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIHNoaWZ0KSB7XG5cdHJldHVybiBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gc2hpZnQpICYgMHgzRikgfCAweDgwKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQ29kZVBvaW50KGNvZGVQb2ludCwgc3RyaWN0KSB7XG5cdGlmICgoY29kZVBvaW50ICYgMHhGRkZGRkY4MCkgPT0gMCkgeyAvLyAxLWJ5dGUgc2VxdWVuY2Vcblx0XHRyZXR1cm4gc3RyaW5nRnJvbUNoYXJDb2RlKGNvZGVQb2ludCk7XG5cdH1cblx0dmFyIHN5bWJvbCA9ICcnO1xuXHRpZiAoKGNvZGVQb2ludCAmIDB4RkZGRkY4MDApID09IDApIHsgLy8gMi1ieXRlIHNlcXVlbmNlXG5cdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDYpICYgMHgxRikgfCAweEMwKTtcblx0fVxuXHRlbHNlIGlmICgoY29kZVBvaW50ICYgMHhGRkZGMDAwMCkgPT0gMCkgeyAvLyAzLWJ5dGUgc2VxdWVuY2Vcblx0XHRpZiAoIWNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50LCBzdHJpY3QpKSB7XG5cdFx0XHRjb2RlUG9pbnQgPSAweEZGRkQ7XG5cdFx0fVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiAxMikgJiAweDBGKSB8IDB4RTApO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdH1cblx0ZWxzZSBpZiAoKGNvZGVQb2ludCAmIDB4RkZFMDAwMDApID09IDApIHsgLy8gNC1ieXRlIHNlcXVlbmNlXG5cdFx0c3ltYm9sID0gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IDE4KSAmIDB4MDcpIHwgMHhGMCk7XG5cdFx0c3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCAxMik7XG5cdFx0c3ltYm9sICs9IGNyZWF0ZUJ5dGUoY29kZVBvaW50LCA2KTtcblx0fVxuXHRzeW1ib2wgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKChjb2RlUG9pbnQgJiAweDNGKSB8IDB4ODApO1xuXHRyZXR1cm4gc3ltYm9sO1xufVxuXG5mdW5jdGlvbiB1dGY4ZW5jb2RlKHN0cmluZywgb3B0cykge1xuXHRvcHRzID0gb3B0cyB8fCB7fTtcblx0dmFyIHN0cmljdCA9IGZhbHNlICE9PSBvcHRzLnN0cmljdDtcblxuXHR2YXIgY29kZVBvaW50cyA9IHVjczJkZWNvZGUoc3RyaW5nKTtcblx0dmFyIGxlbmd0aCA9IGNvZGVQb2ludHMubGVuZ3RoO1xuXHR2YXIgaW5kZXggPSAtMTtcblx0dmFyIGNvZGVQb2ludDtcblx0dmFyIGJ5dGVTdHJpbmcgPSAnJztcblx0d2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcblx0XHRjb2RlUG9pbnQgPSBjb2RlUG9pbnRzW2luZGV4XTtcblx0XHRieXRlU3RyaW5nICs9IGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQsIHN0cmljdCk7XG5cdH1cblx0cmV0dXJuIGJ5dGVTdHJpbmc7XG59XG5cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5mdW5jdGlvbiByZWFkQ29udGludWF0aW9uQnl0ZSgpIHtcblx0aWYgKGJ5dGVJbmRleCA+PSBieXRlQ291bnQpIHtcblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdH1cblxuXHR2YXIgY29udGludWF0aW9uQnl0ZSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcblx0Ynl0ZUluZGV4Kys7XG5cblx0aWYgKChjb250aW51YXRpb25CeXRlICYgMHhDMCkgPT0gMHg4MCkge1xuXHRcdHJldHVybiBjb250aW51YXRpb25CeXRlICYgMHgzRjtcblx0fVxuXG5cdC8vIElmIHdlIGVuZCB1cCBoZXJlLCBpdOKAmXMgbm90IGEgY29udGludWF0aW9uIGJ5dGVcblx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlU3ltYm9sKHN0cmljdCkge1xuXHR2YXIgYnl0ZTE7XG5cdHZhciBieXRlMjtcblx0dmFyIGJ5dGUzO1xuXHR2YXIgYnl0ZTQ7XG5cdHZhciBjb2RlUG9pbnQ7XG5cblx0aWYgKGJ5dGVJbmRleCA+IGJ5dGVDb3VudCkge1xuXHRcdHRocm93IEVycm9yKCdJbnZhbGlkIGJ5dGUgaW5kZXgnKTtcblx0fVxuXG5cdGlmIChieXRlSW5kZXggPT0gYnl0ZUNvdW50KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gUmVhZCBmaXJzdCBieXRlXG5cdGJ5dGUxID0gYnl0ZUFycmF5W2J5dGVJbmRleF0gJiAweEZGO1xuXHRieXRlSW5kZXgrKztcblxuXHQvLyAxLWJ5dGUgc2VxdWVuY2UgKG5vIGNvbnRpbnVhdGlvbiBieXRlcylcblx0aWYgKChieXRlMSAmIDB4ODApID09IDApIHtcblx0XHRyZXR1cm4gYnl0ZTE7XG5cdH1cblxuXHQvLyAyLWJ5dGUgc2VxdWVuY2Vcblx0aWYgKChieXRlMSAmIDB4RTApID09IDB4QzApIHtcblx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Y29kZVBvaW50ID0gKChieXRlMSAmIDB4MUYpIDw8IDYpIHwgYnl0ZTI7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDgwKSB7XG5cdFx0XHRyZXR1cm4gY29kZVBvaW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBjb250aW51YXRpb24gYnl0ZScpO1xuXHRcdH1cblx0fVxuXG5cdC8vIDMtYnl0ZSBzZXF1ZW5jZSAobWF5IGluY2x1ZGUgdW5wYWlyZWQgc3Vycm9nYXRlcylcblx0aWYgKChieXRlMSAmIDB4RjApID09IDB4RTApIHtcblx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Ynl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDBGKSA8PCAxMikgfCAoYnl0ZTIgPDwgNikgfCBieXRlMztcblx0XHRpZiAoY29kZVBvaW50ID49IDB4MDgwMCkge1xuXHRcdFx0cmV0dXJuIGNoZWNrU2NhbGFyVmFsdWUoY29kZVBvaW50LCBzdHJpY3QpID8gY29kZVBvaW50IDogMHhGRkZEO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBjb250aW51YXRpb24gYnl0ZScpO1xuXHRcdH1cblx0fVxuXG5cdC8vIDQtYnl0ZSBzZXF1ZW5jZVxuXHRpZiAoKGJ5dGUxICYgMHhGOCkgPT0gMHhGMCkge1xuXHRcdGJ5dGUyID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRieXRlMyA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Ynl0ZTQgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDA3KSA8PCAweDEyKSB8IChieXRlMiA8PCAweDBDKSB8XG5cdFx0XHQoYnl0ZTMgPDwgMHgwNikgfCBieXRlNDtcblx0XHRpZiAoY29kZVBvaW50ID49IDB4MDEwMDAwICYmIGNvZGVQb2ludCA8PSAweDEwRkZGRikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHR9XG5cdH1cblxuXHR0aHJvdyBFcnJvcignSW52YWxpZCBVVEYtOCBkZXRlY3RlZCcpO1xufVxuXG52YXIgYnl0ZUFycmF5O1xudmFyIGJ5dGVDb3VudDtcbnZhciBieXRlSW5kZXg7XG5mdW5jdGlvbiB1dGY4ZGVjb2RlKGJ5dGVTdHJpbmcsIG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHZhciBzdHJpY3QgPSBmYWxzZSAhPT0gb3B0cy5zdHJpY3Q7XG5cblx0Ynl0ZUFycmF5ID0gdWNzMmRlY29kZShieXRlU3RyaW5nKTtcblx0Ynl0ZUNvdW50ID0gYnl0ZUFycmF5Lmxlbmd0aDtcblx0Ynl0ZUluZGV4ID0gMDtcblx0dmFyIGNvZGVQb2ludHMgPSBbXTtcblx0dmFyIHRtcDtcblx0d2hpbGUgKCh0bXAgPSBkZWNvZGVTeW1ib2woc3RyaWN0KSkgIT09IGZhbHNlKSB7XG5cdFx0Y29kZVBvaW50cy5wdXNoKHRtcCk7XG5cdH1cblx0cmV0dXJuIHVjczJlbmNvZGUoY29kZVBvaW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHR2ZXJzaW9uOiAnMi4xLjInLFxuXHRlbmNvZGU6IHV0ZjhlbmNvZGUsXG5cdGRlY29kZTogdXRmOGRlY29kZVxufTtcbiIsIi8qXG4gKiBiYXNlNjQtYXJyYXlidWZmZXJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWtsYXN2aC9iYXNlNjQtYXJyYXlidWZmZXJcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTIgTmlrbGFzIHZvbiBIZXJ0emVuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UuXG4gKi9cbihmdW5jdGlvbigpe1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgY2hhcnMgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIjtcblxuICAvLyBVc2UgYSBsb29rdXAgdGFibGUgdG8gZmluZCB0aGUgaW5kZXguXG4gIHZhciBsb29rdXAgPSBuZXcgVWludDhBcnJheSgyNTYpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgbG9va3VwW2NoYXJzLmNoYXJDb2RlQXQoaSldID0gaTtcbiAgfVxuXG4gIGV4cG9ydHMuZW5jb2RlID0gZnVuY3Rpb24oYXJyYXlidWZmZXIpIHtcbiAgICB2YXIgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlciksXG4gICAgaSwgbGVuID0gYnl0ZXMubGVuZ3RoLCBiYXNlNjQgPSBcIlwiO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9Mykge1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2ldID4+IDJdO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaV0gJiAzKSA8PCA0KSB8IChieXRlc1tpICsgMV0gPj4gNCldO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzWygoYnl0ZXNbaSArIDFdICYgMTUpIDw8IDIpIHwgKGJ5dGVzW2kgKyAyXSA+PiA2KV07XG4gICAgICBiYXNlNjQgKz0gY2hhcnNbYnl0ZXNbaSArIDJdICYgNjNdO1xuICAgIH1cblxuICAgIGlmICgobGVuICUgMykgPT09IDIpIHtcbiAgICAgIGJhc2U2NCA9IGJhc2U2NC5zdWJzdHJpbmcoMCwgYmFzZTY0Lmxlbmd0aCAtIDEpICsgXCI9XCI7XG4gICAgfSBlbHNlIGlmIChsZW4gJSAzID09PSAxKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAyKSArIFwiPT1cIjtcbiAgICB9XG5cbiAgICByZXR1cm4gYmFzZTY0O1xuICB9O1xuXG4gIGV4cG9ydHMuZGVjb2RlID0gIGZ1bmN0aW9uKGJhc2U2NCkge1xuICAgIHZhciBidWZmZXJMZW5ndGggPSBiYXNlNjQubGVuZ3RoICogMC43NSxcbiAgICBsZW4gPSBiYXNlNjQubGVuZ3RoLCBpLCBwID0gMCxcbiAgICBlbmNvZGVkMSwgZW5jb2RlZDIsIGVuY29kZWQzLCBlbmNvZGVkNDtcblxuICAgIGlmIChiYXNlNjRbYmFzZTY0Lmxlbmd0aCAtIDFdID09PSBcIj1cIikge1xuICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAyXSA9PT0gXCI9XCIpIHtcbiAgICAgICAgYnVmZmVyTGVuZ3RoLS07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGFycmF5YnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKGJ1ZmZlckxlbmd0aCksXG4gICAgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhcnJheWJ1ZmZlcik7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKz00KSB7XG4gICAgICBlbmNvZGVkMSA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKV07XG4gICAgICBlbmNvZGVkMiA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzEpXTtcbiAgICAgIGVuY29kZWQzID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMildO1xuICAgICAgZW5jb2RlZDQgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSszKV07XG5cbiAgICAgIGJ5dGVzW3ArK10gPSAoZW5jb2RlZDEgPDwgMikgfCAoZW5jb2RlZDIgPj4gNCk7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMiAmIDE1KSA8PCA0KSB8IChlbmNvZGVkMyA+PiAyKTtcbiAgICAgIGJ5dGVzW3ArK10gPSAoKGVuY29kZWQzICYgMykgPDwgNikgfCAoZW5jb2RlZDQgJiA2Myk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5YnVmZmVyO1xuICB9O1xufSkoKTtcbiIsIi8qKlxyXG4gKiBDcmVhdGUgYSBibG9iIGJ1aWxkZXIgZXZlbiB3aGVuIHZlbmRvciBwcmVmaXhlcyBleGlzdFxyXG4gKi9cclxuXHJcbnZhciBCbG9iQnVpbGRlciA9IHR5cGVvZiBCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIFdlYktpdEJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IFdlYktpdEJsb2JCdWlsZGVyIDpcclxuICB0eXBlb2YgTVNCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBNU0Jsb2JCdWlsZGVyIDpcclxuICB0eXBlb2YgTW96QmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTW96QmxvYkJ1aWxkZXIgOiBcclxuICBmYWxzZTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIGlzIHN1cHBvcnRlZFxyXG4gKi9cclxuXHJcbnZhciBibG9iU3VwcG9ydGVkID0gKGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgYSA9IG5ldyBCbG9iKFsnaGknXSk7XHJcbiAgICByZXR1cm4gYS5zaXplID09PSAyO1xyXG4gIH0gY2F0Y2goZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSkoKTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiBCbG9iIGNvbnN0cnVjdG9yIHN1cHBvcnRzIEFycmF5QnVmZmVyVmlld3NcclxuICogRmFpbHMgaW4gU2FmYXJpIDYsIHNvIHdlIG5lZWQgdG8gbWFwIHRvIEFycmF5QnVmZmVycyB0aGVyZS5cclxuICovXHJcblxyXG52YXIgYmxvYlN1cHBvcnRzQXJyYXlCdWZmZXJWaWV3ID0gYmxvYlN1cHBvcnRlZCAmJiAoZnVuY3Rpb24oKSB7XHJcbiAgdHJ5IHtcclxuICAgIHZhciBiID0gbmV3IEJsb2IoW25ldyBVaW50OEFycmF5KFsxLDJdKV0pO1xyXG4gICAgcmV0dXJuIGIuc2l6ZSA9PT0gMjtcclxuICB9IGNhdGNoKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYkJ1aWxkZXIgaXMgc3VwcG9ydGVkXHJcbiAqL1xyXG5cclxudmFyIGJsb2JCdWlsZGVyU3VwcG9ydGVkID0gQmxvYkJ1aWxkZXJcclxuICAmJiBCbG9iQnVpbGRlci5wcm90b3R5cGUuYXBwZW5kXHJcbiAgJiYgQmxvYkJ1aWxkZXIucHJvdG90eXBlLmdldEJsb2I7XHJcblxyXG4vKipcclxuICogSGVscGVyIGZ1bmN0aW9uIHRoYXQgbWFwcyBBcnJheUJ1ZmZlclZpZXdzIHRvIEFycmF5QnVmZmVyc1xyXG4gKiBVc2VkIGJ5IEJsb2JCdWlsZGVyIGNvbnN0cnVjdG9yIGFuZCBvbGQgYnJvd3NlcnMgdGhhdCBkaWRuJ3RcclxuICogc3VwcG9ydCBpdCBpbiB0aGUgQmxvYiBjb25zdHJ1Y3Rvci5cclxuICovXHJcblxyXG5mdW5jdGlvbiBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSkge1xyXG4gIHJldHVybiBhcnkubWFwKGZ1bmN0aW9uKGNodW5rKSB7XHJcbiAgICBpZiAoY2h1bmsuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgdmFyIGJ1ZiA9IGNodW5rLmJ1ZmZlcjtcclxuXHJcbiAgICAgIC8vIGlmIHRoaXMgaXMgYSBzdWJhcnJheSwgbWFrZSBhIGNvcHkgc28gd2Ugb25seVxyXG4gICAgICAvLyBpbmNsdWRlIHRoZSBzdWJhcnJheSByZWdpb24gZnJvbSB0aGUgdW5kZXJseWluZyBidWZmZXJcclxuICAgICAgaWYgKGNodW5rLmJ5dGVMZW5ndGggIT09IGJ1Zi5ieXRlTGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGNvcHkgPSBuZXcgVWludDhBcnJheShjaHVuay5ieXRlTGVuZ3RoKTtcclxuICAgICAgICBjb3B5LnNldChuZXcgVWludDhBcnJheShidWYsIGNodW5rLmJ5dGVPZmZzZXQsIGNodW5rLmJ5dGVMZW5ndGgpKTtcclxuICAgICAgICBidWYgPSBjb3B5LmJ1ZmZlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGJ1ZjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2h1bms7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJsb2JCdWlsZGVyQ29uc3RydWN0b3IoYXJ5LCBvcHRpb25zKSB7XHJcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XHJcblxyXG4gIHZhciBiYiA9IG5ldyBCbG9iQnVpbGRlcigpO1xyXG4gIG1hcEFycmF5QnVmZmVyVmlld3MoYXJ5KS5mb3JFYWNoKGZ1bmN0aW9uKHBhcnQpIHtcclxuICAgIGJiLmFwcGVuZChwYXJ0KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChvcHRpb25zLnR5cGUpID8gYmIuZ2V0QmxvYihvcHRpb25zLnR5cGUpIDogYmIuZ2V0QmxvYigpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gQmxvYkNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xyXG4gIHJldHVybiBuZXcgQmxvYihtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSksIG9wdGlvbnMgfHwge30pO1xyXG59O1xyXG5cclxuaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJykge1xyXG4gIEJsb2JCdWlsZGVyQ29uc3RydWN0b3IucHJvdG90eXBlID0gQmxvYi5wcm90b3R5cGU7XHJcbiAgQmxvYkNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEJsb2IucHJvdG90eXBlO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcclxuICBpZiAoYmxvYlN1cHBvcnRlZCkge1xyXG4gICAgcmV0dXJuIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA/IEJsb2IgOiBCbG9iQ29uc3RydWN0b3I7XHJcbiAgfSBlbHNlIGlmIChibG9iQnVpbGRlclN1cHBvcnRlZCkge1xyXG4gICAgcmV0dXJuIEJsb2JCdWlsZGVyQ29uc3RydWN0b3I7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG59KSgpO1xyXG4iLCIvKipcbiAqIE1vZHVsZSByZXF1aXJlbWVudHMuXG4gKi9cblxudmFyIFBvbGxpbmcgPSByZXF1aXJlKCcuL3BvbGxpbmcnKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vZ2xvYmFsVGhpcycpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gSlNPTlBQb2xsaW5nO1xuXG4vKipcbiAqIENhY2hlZCByZWd1bGFyIGV4cHJlc3Npb25zLlxuICovXG5cbnZhciByTmV3bGluZSA9IC9cXG4vZztcbnZhciByRXNjYXBlZE5ld2xpbmUgPSAvXFxcXG4vZztcblxuLyoqXG4gKiBHbG9iYWwgSlNPTlAgY2FsbGJhY2tzLlxuICovXG5cbnZhciBjYWxsYmFja3M7XG5cbi8qKlxuICogTm9vcC5cbiAqL1xuXG5mdW5jdGlvbiBlbXB0eSAoKSB7IH1cblxuLyoqXG4gKiBKU09OUCBQb2xsaW5nIGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRzLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBKU09OUFBvbGxpbmcgKG9wdHMpIHtcbiAgUG9sbGluZy5jYWxsKHRoaXMsIG9wdHMpO1xuXG4gIHRoaXMucXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuXG4gIC8vIGRlZmluZSBnbG9iYWwgY2FsbGJhY2tzIGFycmF5IGlmIG5vdCBwcmVzZW50XG4gIC8vIHdlIGRvIHRoaXMgaGVyZSAobGF6aWx5KSB0byBhdm9pZCB1bm5lZWRlZCBnbG9iYWwgcG9sbHV0aW9uXG4gIGlmICghY2FsbGJhY2tzKSB7XG4gICAgLy8gd2UgbmVlZCB0byBjb25zaWRlciBtdWx0aXBsZSBlbmdpbmVzIGluIHRoZSBzYW1lIHBhZ2VcbiAgICBjYWxsYmFja3MgPSBnbG9iYWxUaGlzLl9fX2VpbyA9IChnbG9iYWxUaGlzLl9fX2VpbyB8fCBbXSk7XG4gIH1cblxuICAvLyBjYWxsYmFjayBpZGVudGlmaWVyXG4gIHRoaXMuaW5kZXggPSBjYWxsYmFja3MubGVuZ3RoO1xuXG4gIC8vIGFkZCBjYWxsYmFjayB0byBqc29ucCBnbG9iYWxcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAobXNnKSB7XG4gICAgc2VsZi5vbkRhdGEobXNnKTtcbiAgfSk7XG5cbiAgLy8gYXBwZW5kIHRvIHF1ZXJ5IHN0cmluZ1xuICB0aGlzLnF1ZXJ5LmogPSB0aGlzLmluZGV4O1xuXG4gIC8vIHByZXZlbnQgc3B1cmlvdXMgZXJyb3JzIGZyb20gYmVpbmcgZW1pdHRlZCB3aGVuIHRoZSB3aW5kb3cgaXMgdW5sb2FkZWRcbiAgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuc2NyaXB0KSBzZWxmLnNjcmlwdC5vbmVycm9yID0gZW1wdHk7XG4gICAgfSwgZmFsc2UpO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBQb2xsaW5nLlxuICovXG5cbmluaGVyaXQoSlNPTlBQb2xsaW5nLCBQb2xsaW5nKTtcblxuLypcbiAqIEpTT05QIG9ubHkgc3VwcG9ydHMgYmluYXJ5IGFzIGJhc2U2NCBlbmNvZGVkIHN0cmluZ3NcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gZmFsc2U7XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zY3JpcHQpIHtcbiAgICB0aGlzLnNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc2NyaXB0KTtcbiAgICB0aGlzLnNjcmlwdCA9IG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5mb3JtKSB7XG4gICAgdGhpcy5mb3JtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5mb3JtKTtcbiAgICB0aGlzLmZvcm0gPSBudWxsO1xuICAgIHRoaXMuaWZyYW1lID0gbnVsbDtcbiAgfVxuXG4gIFBvbGxpbmcucHJvdG90eXBlLmRvQ2xvc2UuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogU3RhcnRzIGEgcG9sbCBjeWNsZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5KU09OUFBvbGxpbmcucHJvdG90eXBlLmRvUG9sbCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cbiAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICB9XG5cbiAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgc2NyaXB0LnNyYyA9IHRoaXMudXJpKCk7XG4gIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ2pzb25wIHBvbGwgZXJyb3InLCBlKTtcbiAgfTtcblxuICB2YXIgaW5zZXJ0QXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG4gIGlmIChpbnNlcnRBdCkge1xuICAgIGluc2VydEF0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNjcmlwdCwgaW5zZXJ0QXQpO1xuICB9IGVsc2Uge1xuICAgIChkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cbiAgdGhpcy5zY3JpcHQgPSBzY3JpcHQ7XG5cbiAgdmFyIGlzVUFnZWNrbyA9ICd1bmRlZmluZWQnICE9PSB0eXBlb2YgbmF2aWdhdG9yICYmIC9nZWNrby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbiAgaWYgKGlzVUFnZWNrbykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICAgIH0sIDEwMCk7XG4gIH1cbn07XG5cbi8qKlxuICogV3JpdGVzIHdpdGggYSBoaWRkZW4gaWZyYW1lLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhIHRvIHNlbmRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxlZCB1cG9uIGZsdXNoLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb1dyaXRlID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoIXRoaXMuZm9ybSkge1xuICAgIHZhciBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHZhciBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICB2YXIgaWQgPSB0aGlzLmlmcmFtZUlkID0gJ2Vpb19pZnJhbWVfJyArIHRoaXMuaW5kZXg7XG4gICAgdmFyIGlmcmFtZTtcblxuICAgIGZvcm0uY2xhc3NOYW1lID0gJ3NvY2tldGlvJztcbiAgICBmb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBmb3JtLnN0eWxlLnRvcCA9ICctMTAwMHB4JztcbiAgICBmb3JtLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XG4gICAgZm9ybS50YXJnZXQgPSBpZDtcbiAgICBmb3JtLm1ldGhvZCA9ICdQT1NUJztcbiAgICBmb3JtLnNldEF0dHJpYnV0ZSgnYWNjZXB0LWNoYXJzZXQnLCAndXRmLTgnKTtcbiAgICBhcmVhLm5hbWUgPSAnZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhcmVhKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB0aGlzLmFyZWEgPSBhcmVhO1xuICB9XG5cbiAgdGhpcy5mb3JtLmFjdGlvbiA9IHRoaXMudXJpKCk7XG5cbiAgZnVuY3Rpb24gY29tcGxldGUgKCkge1xuICAgIGluaXRJZnJhbWUoKTtcbiAgICBmbigpO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdElmcmFtZSAoKSB7XG4gICAgaWYgKHNlbGYuaWZyYW1lKSB7XG4gICAgICB0cnkge1xuICAgICAgICBzZWxmLmZvcm0ucmVtb3ZlQ2hpbGQoc2VsZi5pZnJhbWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBzZWxmLm9uRXJyb3IoJ2pzb25wIHBvbGxpbmcgaWZyYW1lIHJlbW92YWwgZXJyb3InLCBlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgLy8gaWU2IGR5bmFtaWMgaWZyYW1lcyB3aXRoIHRhcmdldD1cIlwiIHN1cHBvcnQgKHRoYW5rcyBDaHJpcyBMYW1iYWNoZXIpXG4gICAgICB2YXIgaHRtbCA9ICc8aWZyYW1lIHNyYz1cImphdmFzY3JpcHQ6MFwiIG5hbWU9XCInICsgc2VsZi5pZnJhbWVJZCArICdcIj4nO1xuICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgIGlmcmFtZS5uYW1lID0gc2VsZi5pZnJhbWVJZDtcbiAgICAgIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDowJztcbiAgICB9XG5cbiAgICBpZnJhbWUuaWQgPSBzZWxmLmlmcmFtZUlkO1xuXG4gICAgc2VsZi5mb3JtLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gICAgc2VsZi5pZnJhbWUgPSBpZnJhbWU7XG4gIH1cblxuICBpbml0SWZyYW1lKCk7XG5cbiAgLy8gZXNjYXBlIFxcbiB0byBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY29udmVydGVkIGludG8gXFxyXFxuIGJ5IHNvbWUgVUFzXG4gIC8vIGRvdWJsZSBlc2NhcGluZyBpcyByZXF1aXJlZCBmb3IgZXNjYXBlZCBuZXcgbGluZXMgYmVjYXVzZSB1bmVzY2FwaW5nIG9mIG5ldyBsaW5lcyBjYW4gYmUgZG9uZSBzYWZlbHkgb24gc2VydmVyLXNpZGVcbiAgZGF0YSA9IGRhdGEucmVwbGFjZShyRXNjYXBlZE5ld2xpbmUsICdcXFxcXFxuJyk7XG4gIHRoaXMuYXJlYS52YWx1ZSA9IGRhdGEucmVwbGFjZShyTmV3bGluZSwgJ1xcXFxuJyk7XG5cbiAgdHJ5IHtcbiAgICB0aGlzLmZvcm0uc3VibWl0KCk7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgaWYgKHRoaXMuaWZyYW1lLmF0dGFjaEV2ZW50KSB7XG4gICAgdGhpcy5pZnJhbWUub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHNlbGYuaWZyYW1lLnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgY29tcGxldGUoKTtcbiAgICAgIH1cbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRoaXMuaWZyYW1lLm9ubG9hZCA9IGNvbXBsZXRlO1xuICB9XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBUcmFuc3BvcnQgPSByZXF1aXJlKCcuLi90cmFuc3BvcnQnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBpbmhlcml0ID0gcmVxdWlyZSgnY29tcG9uZW50LWluaGVyaXQnKTtcbnZhciB5ZWFzdCA9IHJlcXVpcmUoJ3llYXN0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OndlYnNvY2tldCcpO1xuXG52YXIgQnJvd3NlcldlYlNvY2tldCwgTm9kZVdlYlNvY2tldDtcblxuaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gIEJyb3dzZXJXZWJTb2NrZXQgPSBXZWJTb2NrZXQ7XG59IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICBCcm93c2VyV2ViU29ja2V0ID0gc2VsZi5XZWJTb2NrZXQgfHwgc2VsZi5Nb3pXZWJTb2NrZXQ7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICB0cnkge1xuICAgIE5vZGVXZWJTb2NrZXQgPSByZXF1aXJlKCd3cycpO1xuICB9IGNhdGNoIChlKSB7IH1cbn1cblxuLyoqXG4gKiBHZXQgZWl0aGVyIHRoZSBgV2ViU29ja2V0YCBvciBgTW96V2ViU29ja2V0YCBnbG9iYWxzXG4gKiBpbiB0aGUgYnJvd3NlciBvciB0cnkgdG8gcmVzb2x2ZSBXZWJTb2NrZXQtY29tcGF0aWJsZVxuICogaW50ZXJmYWNlIGV4cG9zZWQgYnkgYHdzYCBmb3IgTm9kZS1saWtlIGVudmlyb25tZW50LlxuICovXG5cbnZhciBXZWJTb2NrZXRJbXBsID0gQnJvd3NlcldlYlNvY2tldCB8fCBOb2RlV2ViU29ja2V0O1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gV1M7XG5cbi8qKlxuICogV2ViU29ja2V0IHRyYW5zcG9ydCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAYXBpIHtPYmplY3R9IGNvbm5lY3Rpb24gb3B0aW9uc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBXUyAob3B0cykge1xuICB2YXIgZm9yY2VCYXNlNjQgPSAob3B0cyAmJiBvcHRzLmZvcmNlQmFzZTY0KTtcbiAgaWYgKGZvcmNlQmFzZTY0KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG4gIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBvcHRzLnBlck1lc3NhZ2VEZWZsYXRlO1xuICB0aGlzLnVzaW5nQnJvd3NlcldlYlNvY2tldCA9IEJyb3dzZXJXZWJTb2NrZXQgJiYgIW9wdHMuZm9yY2VOb2RlO1xuICB0aGlzLnByb3RvY29scyA9IG9wdHMucHJvdG9jb2xzO1xuICBpZiAoIXRoaXMudXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgV2ViU29ja2V0SW1wbCA9IE5vZGVXZWJTb2NrZXQ7XG4gIH1cbiAgVHJhbnNwb3J0LmNhbGwodGhpcywgb3B0cyk7XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBUcmFuc3BvcnQuXG4gKi9cblxuaW5oZXJpdChXUywgVHJhbnNwb3J0KTtcblxuLyoqXG4gKiBUcmFuc3BvcnQgbmFtZS5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbldTLnByb3RvdHlwZS5uYW1lID0gJ3dlYnNvY2tldCc7XG5cbi8qXG4gKiBXZWJTb2NrZXRzIHN1cHBvcnQgYmluYXJ5XG4gKi9cblxuV1MucHJvdG90eXBlLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcblxuLyoqXG4gKiBPcGVucyBzb2NrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLmRvT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKCF0aGlzLmNoZWNrKCkpIHtcbiAgICAvLyBsZXQgcHJvYmUgdGltZW91dFxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB1cmkgPSB0aGlzLnVyaSgpO1xuICB2YXIgcHJvdG9jb2xzID0gdGhpcy5wcm90b2NvbHM7XG5cbiAgdmFyIG9wdHMgPSB7fTtcblxuICBpZiAoIXRoaXMuaXNSZWFjdE5hdGl2ZSkge1xuICAgIG9wdHMuYWdlbnQgPSB0aGlzLmFnZW50O1xuICAgIG9wdHMucGVyTWVzc2FnZURlZmxhdGUgPSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlO1xuXG4gICAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gICAgb3B0cy5wZnggPSB0aGlzLnBmeDtcbiAgICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICAgIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgICBvcHRzLmNlcnQgPSB0aGlzLmNlcnQ7XG4gICAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gICAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICAgIG9wdHMucmVqZWN0VW5hdXRob3JpemVkID0gdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQ7XG4gIH1cblxuICBpZiAodGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICBvcHRzLmhlYWRlcnMgPSB0aGlzLmV4dHJhSGVhZGVycztcbiAgfVxuICBpZiAodGhpcy5sb2NhbEFkZHJlc3MpIHtcbiAgICBvcHRzLmxvY2FsQWRkcmVzcyA9IHRoaXMubG9jYWxBZGRyZXNzO1xuICB9XG5cbiAgdHJ5IHtcbiAgICB0aGlzLndzID1cbiAgICAgIHRoaXMudXNpbmdCcm93c2VyV2ViU29ja2V0ICYmICF0aGlzLmlzUmVhY3ROYXRpdmVcbiAgICAgICAgPyBwcm90b2NvbHNcbiAgICAgICAgICA/IG5ldyBXZWJTb2NrZXRJbXBsKHVyaSwgcHJvdG9jb2xzKVxuICAgICAgICAgIDogbmV3IFdlYlNvY2tldEltcGwodXJpKVxuICAgICAgICA6IG5ldyBXZWJTb2NrZXRJbXBsKHVyaSwgcHJvdG9jb2xzLCBvcHRzKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1pdCgnZXJyb3InLCBlcnIpO1xuICB9XG5cbiAgaWYgKHRoaXMud3MuYmluYXJ5VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHRoaXMud3Muc3VwcG9ydHMgJiYgdGhpcy53cy5zdXBwb3J0cy5iaW5hcnkpIHtcbiAgICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gdHJ1ZTtcbiAgICB0aGlzLndzLmJpbmFyeVR5cGUgPSAnbm9kZWJ1ZmZlcic7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gJ2FycmF5YnVmZmVyJztcbiAgfVxuXG4gIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbn07XG5cbi8qKlxuICogQWRkcyBldmVudCBsaXN0ZW5lcnMgdG8gdGhlIHNvY2tldFxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMud3Mub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25PcGVuKCk7XG4gIH07XG4gIHRoaXMud3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uQ2xvc2UoKTtcbiAgfTtcbiAgdGhpcy53cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXYpIHtcbiAgICBzZWxmLm9uRGF0YShldi5kYXRhKTtcbiAgfTtcbiAgdGhpcy53cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICBzZWxmLm9uRXJyb3IoJ3dlYnNvY2tldCBlcnJvcicsIGUpO1xuICB9O1xufTtcblxuLyoqXG4gKiBXcml0ZXMgZGF0YSB0byBzb2NrZXQuXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgb2YgcGFja2V0cy5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy53cml0YWJsZSA9IGZhbHNlO1xuXG4gIC8vIGVuY29kZVBhY2tldCBlZmZpY2llbnQgYXMgaXQgdXNlcyBXUyBmcmFtaW5nXG4gIC8vIG5vIG5lZWQgZm9yIGVuY29kZVBheWxvYWRcbiAgdmFyIHRvdGFsID0gcGFja2V0cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gdG90YWw7IGkgPCBsOyBpKyspIHtcbiAgICAoZnVuY3Rpb24gKHBhY2tldCkge1xuICAgICAgcGFyc2VyLmVuY29kZVBhY2tldChwYWNrZXQsIHNlbGYuc3VwcG9ydHNCaW5hcnksIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmICghc2VsZi51c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICAvLyBhbHdheXMgY3JlYXRlIGEgbmV3IG9iamVjdCAoR0gtNDM3KVxuICAgICAgICAgIHZhciBvcHRzID0ge307XG4gICAgICAgICAgaWYgKHBhY2tldC5vcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gcGFja2V0Lm9wdGlvbnMuY29tcHJlc3M7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYucGVyTWVzc2FnZURlZmxhdGUpIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSAnc3RyaW5nJyA9PT0gdHlwZW9mIGRhdGEgPyBCdWZmZXIuYnl0ZUxlbmd0aChkYXRhKSA6IGRhdGEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGxlbiA8IHNlbGYucGVyTWVzc2FnZURlZmxhdGUudGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgIG9wdHMuY29tcHJlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTb21ldGltZXMgdGhlIHdlYnNvY2tldCBoYXMgYWxyZWFkeSBiZWVuIGNsb3NlZCBidXQgdGhlIGJyb3dzZXIgZGlkbid0XG4gICAgICAgIC8vIGhhdmUgYSBjaGFuY2Ugb2YgaW5mb3JtaW5nIHVzIGFib3V0IGl0IHlldCwgaW4gdGhhdCBjYXNlIHNlbmQgd2lsbFxuICAgICAgICAvLyB0aHJvdyBhbiBlcnJvclxuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzZWxmLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgICAgICAgICAgLy8gVHlwZUVycm9yIGlzIHRocm93biB3aGVuIHBhc3NpbmcgdGhlIHNlY29uZCBhcmd1bWVudCBvbiBTYWZhcmlcbiAgICAgICAgICAgIHNlbGYud3Muc2VuZChkYXRhKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZi53cy5zZW5kKGRhdGEsIG9wdHMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGRlYnVnKCd3ZWJzb2NrZXQgY2xvc2VkIGJlZm9yZSBvbmNsb3NlIGV2ZW50Jyk7XG4gICAgICAgIH1cblxuICAgICAgICAtLXRvdGFsIHx8IGRvbmUoKTtcbiAgICAgIH0pO1xuICAgIH0pKHBhY2tldHNbaV0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZG9uZSAoKSB7XG4gICAgc2VsZi5lbWl0KCdmbHVzaCcpO1xuXG4gICAgLy8gZmFrZSBkcmFpblxuICAgIC8vIGRlZmVyIHRvIG5leHQgdGljayB0byBhbGxvdyBTb2NrZXQgdG8gY2xlYXIgd3JpdGVCdWZmZXJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHNlbGYud3JpdGFibGUgPSB0cnVlO1xuICAgICAgc2VsZi5lbWl0KCdkcmFpbicpO1xuICAgIH0sIDApO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGNsb3NlXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIFRyYW5zcG9ydC5wcm90b3R5cGUub25DbG9zZS5jYWxsKHRoaXMpO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5kb0Nsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHRoaXMud3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhpcy53cy5jbG9zZSgpO1xuICB9XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuV1MucHJvdG90eXBlLnVyaSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcbiAgdmFyIHNjaGVtYSA9IHRoaXMuc2VjdXJlID8gJ3dzcycgOiAnd3MnO1xuICB2YXIgcG9ydCA9ICcnO1xuXG4gIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gIGlmICh0aGlzLnBvcnQgJiYgKCgnd3NzJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA0NDMpIHx8XG4gICAgKCd3cycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gODApKSkge1xuICAgIHBvcnQgPSAnOicgKyB0aGlzLnBvcnQ7XG4gIH1cblxuICAvLyBhcHBlbmQgdGltZXN0YW1wIHRvIFVSSVxuICBpZiAodGhpcy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgIHF1ZXJ5W3RoaXMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgfVxuXG4gIC8vIGNvbW11bmljYXRlIGJpbmFyeSBzdXBwb3J0IGNhcGFiaWxpdGllc1xuICBpZiAoIXRoaXMuc3VwcG9ydHNCaW5hcnkpIHtcbiAgICBxdWVyeS5iNjQgPSAxO1xuICB9XG5cbiAgcXVlcnkgPSBwYXJzZXFzLmVuY29kZShxdWVyeSk7XG5cbiAgLy8gcHJlcGVuZCA/IHRvIHF1ZXJ5XG4gIGlmIChxdWVyeS5sZW5ndGgpIHtcbiAgICBxdWVyeSA9ICc/JyArIHF1ZXJ5O1xuICB9XG5cbiAgdmFyIGlwdjYgPSB0aGlzLmhvc3RuYW1lLmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHJldHVybiBzY2hlbWEgKyAnOi8vJyArIChpcHY2ID8gJ1snICsgdGhpcy5ob3N0bmFtZSArICddJyA6IHRoaXMuaG9zdG5hbWUpICsgcG9ydCArIHRoaXMucGF0aCArIHF1ZXJ5O1xufTtcblxuLyoqXG4gKiBGZWF0dXJlIGRldGVjdGlvbiBmb3IgV2ViU29ja2V0LlxuICpcbiAqIEByZXR1cm4ge0Jvb2xlYW59IHdoZXRoZXIgdGhpcyB0cmFuc3BvcnQgaXMgYXZhaWxhYmxlLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5XUy5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIVdlYlNvY2tldEltcGwgJiYgISgnX19pbml0aWFsaXplJyBpbiBXZWJTb2NrZXRJbXBsICYmIHRoaXMubmFtZSA9PT0gV1MucHJvdG90eXBlLm5hbWUpO1xufTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIm1vZHVsZS5leHBvcnRzID0gdG9BcnJheVxuXG5mdW5jdGlvbiB0b0FycmF5KGxpc3QsIGluZGV4KSB7XG4gICAgdmFyIGFycmF5ID0gW11cblxuICAgIGluZGV4ID0gaW5kZXggfHwgMFxuXG4gICAgZm9yICh2YXIgaSA9IGluZGV4IHx8IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycmF5W2kgLSBpbmRleF0gPSBsaXN0W2ldXG4gICAgfVxuXG4gICAgcmV0dXJuIGFycmF5XG59XG4iLCJcbi8qKlxuICogRXhwb3NlIGBCYWNrb2ZmYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJhY2tvZmY7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBiYWNrb2ZmIHRpbWVyIHdpdGggYG9wdHNgLlxuICpcbiAqIC0gYG1pbmAgaW5pdGlhbCB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbMTAwXVxuICogLSBgbWF4YCBtYXggdGltZW91dCBbMTAwMDBdXG4gKiAtIGBqaXR0ZXJgIFswXVxuICogLSBgZmFjdG9yYCBbMl1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBCYWNrb2ZmKG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIHRoaXMubXMgPSBvcHRzLm1pbiB8fCAxMDA7XG4gIHRoaXMubWF4ID0gb3B0cy5tYXggfHwgMTAwMDA7XG4gIHRoaXMuZmFjdG9yID0gb3B0cy5mYWN0b3IgfHwgMjtcbiAgdGhpcy5qaXR0ZXIgPSBvcHRzLmppdHRlciA+IDAgJiYgb3B0cy5qaXR0ZXIgPD0gMSA/IG9wdHMuaml0dGVyIDogMDtcbiAgdGhpcy5hdHRlbXB0cyA9IDA7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBiYWNrb2ZmIGR1cmF0aW9uLlxuICpcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuZHVyYXRpb24gPSBmdW5jdGlvbigpe1xuICB2YXIgbXMgPSB0aGlzLm1zICogTWF0aC5wb3codGhpcy5mYWN0b3IsIHRoaXMuYXR0ZW1wdHMrKyk7XG4gIGlmICh0aGlzLmppdHRlcikge1xuICAgIHZhciByYW5kID0gIE1hdGgucmFuZG9tKCk7XG4gICAgdmFyIGRldmlhdGlvbiA9IE1hdGguZmxvb3IocmFuZCAqIHRoaXMuaml0dGVyICogbXMpO1xuICAgIG1zID0gKE1hdGguZmxvb3IocmFuZCAqIDEwKSAmIDEpID09IDAgID8gbXMgLSBkZXZpYXRpb24gOiBtcyArIGRldmlhdGlvbjtcbiAgfVxuICByZXR1cm4gTWF0aC5taW4obXMsIHRoaXMubWF4KSB8IDA7XG59O1xuXG4vKipcbiAqIFJlc2V0IHRoZSBudW1iZXIgb2YgYXR0ZW1wdHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1pbmltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1pbiA9IGZ1bmN0aW9uKG1pbil7XG4gIHRoaXMubXMgPSBtaW47XG59O1xuXG4vKipcbiAqIFNldCB0aGUgbWF4aW11bSBkdXJhdGlvblxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0TWF4ID0gZnVuY3Rpb24obWF4KXtcbiAgdGhpcy5tYXggPSBtYXg7XG59O1xuXG4vKipcbiAqIFNldCB0aGUgaml0dGVyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRKaXR0ZXIgPSBmdW5jdGlvbihqaXR0ZXIpe1xuICB0aGlzLmppdHRlciA9IGppdHRlcjtcbn07XG5cbiIsImNvbnN0IGJsb2NrcyA9IFtcclxuICAgIFwiI2NjY1wiLFxyXG4gICAgXCIjM0NCMzcxXCIsXHJcbiAgICBcIiNCMEM0REVcIixcclxuICAgIFwiI0YwRkZGMFwiLFxyXG4gICAgXCIjRUVFOEFBXCIsXHJcbiAgICBcIiNGQTgwNzJcIixcclxuICAgIFwiIzY5Njk2OVwiLFxyXG4gICAgXCIjODAwMDAwXCIsXHJcbiAgICBcIiNFNkU2RkFcIixcclxuICAgIFwiI0ZGQTA3QVwiLFxyXG4gICAgXCIjNDBFMEQwXCIsXHJcbiAgICBcIiM5NDAwRDNcIixcclxuICAgIFwiIzc3ODg5OVwiLFxyXG4gICAgXCIjNjQ5NUVEXCIsXHJcbiAgICBcIiM0ODNEOEJcIixcclxuICAgIFwiIzQ2ODJCNFwiLFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmxvY2tzO1xyXG4iLCJpbXBvcnQgYmxvY2tzIGZyb20gXCIuL2Jsb2Nrcy5qc1wiO1xyXG5cclxuY2xhc3MgQm9hcmQge1xyXG4gICAgY29uc3RydWN0b3Iod29ybGQpIHtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JvYXJkXCIpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVdvcmxkID0gKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCB7eCwgeSwgdn0gPSBkYXRhO1xyXG4gICAgICAgIGNvbnN0IHtibG9ja1NpemV9ID0gdGhpcy53b3JsZDtcclxuXHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gYmxvY2tzW3ZdO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KHggKiBibG9ja1NpemUsIHkqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgY29uc3Qge2Jsb2NrU2l6ZSwgdywgaH0gPSB0aGlzLndvcmxkO1xyXG5cclxuICAgICAgICBpZighdGhpcy53b3JsZC53b3JsZCkgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc2VsZi5kcmF3KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3ICogYmxvY2tTaXplO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGggKiBibG9ja1NpemU7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmxkLndvcmxkLmxlbmd0aDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGJsb2Nrc1t0aGlzLndvcmxkLndvcmxkW2ldXTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoKGkgJSB3KSAqIGJsb2NrU2l6ZSwgcGFyc2VJbnQoaSAvIHcpICogYmxvY2tTaXplLCBibG9ja1NpemUsIGJsb2NrU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIiwiY2xhc3MgUGxheWVycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3b3JsZCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5ZXJzXCIpO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG4gICAgICAgIHRoaXMud29ybGQgPSB3b3JsZDtcclxuICAgICAgICB0aGlzLnBsYXllclNpemUgPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQbGF5ZXJzKGRhdGEpIHtcclxuICAgICAgICBjb25zdCB7dywgaCwgYmxvY2tTaXplfSA9IHRoaXMud29ybGQ7XHJcbiAgICAgICAgY29uc3Qge2NvbG9ycywgcGxheWVyU2l6ZX0gPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHcgKiBibG9ja1NpemU7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaCAqIGJsb2NrU2l6ZTtcclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKHBsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFwbGF5ZXIucG9zKSByZXR1cm47XHJcbiAgICAgICAgICAgIGNvbnN0IHt4LCB5fSA9IHBsYXllci5wb3M7XHJcbiAgICAgICAgICAgIGNvbnN0IHtjb2x9ID0gcGxheWVyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJyZ2JhKDAsMCwwLC4yKVwiO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZWxsaXBzZSh4ICsgMywgeSArIDMsIHBsYXllclNpemUsIHBsYXllclNpemUsIE1hdGguUEkgLyA0LCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbDtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmVsbGlwc2UoeCwgeSwgcGxheWVyU2l6ZSwgcGxheWVyU2l6ZSwgTWF0aC5QSSAvIDQsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJzO1xyXG4iLCJpbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcclxuaW1wb3J0IEJvYXJkIGZyb20gXCIuL0JvYXJkLmpzXCI7XHJcbmltcG9ydCBQbGF5ZXJzIGZyb20gXCIuL1BsYXllcnMuanNcIjtcclxuXHJcbmNvbnN0IGtleWNvZGVzID0gW1xyXG4gICAgMzgsIC8vdXBcclxuICAgIDQwLCAvL2Rvd25cclxuICAgIDM3LCAvL2xlZnRcclxuICAgIDM5LCAvL3JpZ2h0XHJcbiAgICA4NywgLy93XHJcbiAgICA4MywgLy9zXHJcbiAgICA2NSwgLy9hXHJcbiAgICA2OCwgLy9kXHJcbl07XHJcblxyXG5cclxuY2xhc3MgQ2xpZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldCA9IGlvKCk7XHJcbiAgICAgICAgdGhpcy5ib2FyZCA9ICBuZXcgQm9hcmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzID0gbmV3IFBsYXllcnModGhpcyk7XHJcbiAgICAgICAgdGhpcy53b3JsZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxvY2tTaXplID0gMTY7XHJcbiAgICAgICAgdGhpcy53ID0gNjQ7XHJcbiAgICAgICAgdGhpcy5oID0gNjQ7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oXCJ3b3JsZFwiLCAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMud29ybGQgPSB2YWw7XHJcbiAgICAgICAgICAgIHRoaXMuYm9hcmQuZHJhdygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldC5vbignY29ubmVjdCcsICgpID0+IHRoaXMuc29ja2V0LmVtaXQoXCJqb2luXCIpKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbihcInVwZGF0ZVdvcmxkXCIsIHNlbGYudXBkYXRlV29ybGQpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKFwidXBkYXRlUGxheWVyc1wiLCBzZWxmLnVwZGF0ZVBsYXllcnMpO1xyXG5cclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpc1tga2V5RG93biR7ZS5rZXlDb2RlfWBdID09PSB0cnVlKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXNbYGtleURvd24ke2Uua2V5Q29kZX1gXSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKGtleWNvZGVzLmluZGV4T2YoZS5rZXlDb2RlKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwia2V5ZG93blwiLCBlLmtleUNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpc1tga2V5RG93biR7ZS5rZXlDb2RlfWBdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKGtleWNvZGVzLmluZGV4T2YoZS5rZXlDb2RlKSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNvY2tldC5lbWl0KFwia2V5dXBcIiwgZS5rZXlDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVXb3JsZCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3gsIHksIHZ9ID0gZGF0YTtcclxuICAgICAgICBjb25zdCB7YmxvY2tTaXplLCB3LCBofSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmKHRoaXMud29ybGQpIHRoaXMud29ybGRbeSAqIHcgKyB4XSA9IHY7XHJcbiAgICAgICAgdGhpcy5ib2FyZC51cGRhdGVXb3JsZChkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQbGF5ZXJzID0gKGRhdGEpID0+IHtcclxuICAgICAgICBkZWxldGUgdGhpcy5wbGF5ZXJzRGF0YTtcclxuICAgICAgICB0aGlzLnBsYXllcnNEYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnBsYXllcnMudXBkYXRlUGxheWVycyhkYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xyXG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gXCIuL0NsaWVudC5qc1wiO1xyXG5cclxud2luZG93LmdhbWVDbGllbnQgPSBuZXcgQ2xpZW50KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=