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

  Client_defineProperty(this, "temp", function (data) {
    _this.socket.emit("temp", data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tcGFyc2VyL2xpYi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wYXJzZXFzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtaW5oZXJpdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29tcG9uZW50LWVtaXR0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIveG1saHR0cHJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL2dsb2JhbFRoaXMuYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbmdpbmUuaW8tY2xpZW50L25vZGVfbW9kdWxlcy9jb21wb25lbnQtZW1pdHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFyc2V1cmkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLXBhcnNlci9pcy1idWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL21hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLWJpbmFyeTIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3llYXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbmRleG9mL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tY2xpZW50L2xpYi9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL29uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb21wb25lbnQtYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc29ja2V0LmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1jbGllbnQvbGliL3VybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGVidWcvc3JjL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvbm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NvY2tldC5pby1wYXJzZXIvbm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zb2NrZXQuaW8tcGFyc2VyL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXNlNjQtanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2llZWU3NTQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci9ub2RlX21vZHVsZXMvaXNhcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3NvY2tldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGFzLWNvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy14aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1wYXJzZXIvbGliL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FycmF5YnVmZmVyLnNsaWNlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLXBhcnNlci9saWIvdXRmOC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmFzZTY0LWFycmF5YnVmZmVyL2xpYi9iYXNlNjQtYXJyYXlidWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jsb2IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZ2luZS5pby1jbGllbnQvbGliL3RyYW5zcG9ydHMvcG9sbGluZy1qc29ucC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZW5naW5lLmlvLWNsaWVudC9saWIvdHJhbnNwb3J0cy93ZWJzb2NrZXQuanMiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdG8tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhY2tvMi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9mZS9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vZmUvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vZmUvUGxheWVycy5qcyIsIndlYnBhY2s6Ly8vLi9mZS9DbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZmUvaW5kZXguanMiXSwibmFtZXMiOlsiZXhwb3J0cyIsImxvZyIsImZvcm1hdEFyZ3MiLCJzYXZlIiwibG9hZCIsInVzZUNvbG9ycyIsInN0b3JhZ2UiLCJsb2NhbHN0b3JhZ2UiLCJjb2xvcnMiLCJ3aW5kb3ciLCJwcm9jZXNzIiwidHlwZSIsIl9fbndqcyIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwibWF0Y2giLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwiV2Via2l0QXBwZWFyYW5jZSIsImNvbnNvbGUiLCJmaXJlYnVnIiwiZXhjZXB0aW9uIiwidGFibGUiLCJwYXJzZUludCIsIlJlZ0V4cCIsIiQxIiwiYXJncyIsIm5hbWVzcGFjZSIsIm1vZHVsZSIsImh1bWFuaXplIiwiZGlmZiIsImMiLCJjb2xvciIsInNwbGljZSIsImluZGV4IiwibGFzdEMiLCJyZXBsYWNlIiwibmFtZXNwYWNlcyIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwiZXJyb3IiLCJyIiwiZ2V0SXRlbSIsImVudiIsIkRFQlVHIiwibG9jYWxTdG9yYWdlIiwicmVxdWlyZSIsImZvcm1hdHRlcnMiLCJqIiwidiIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlIiwia2V5cyIsImhhc0JpbmFyeSIsInNsaWNlQnVmZmVyIiwiYWZ0ZXIiLCJ1dGY4IiwiYmFzZTY0ZW5jb2RlciIsIkFycmF5QnVmZmVyIiwiaXNBbmRyb2lkIiwidGVzdCIsImlzUGhhbnRvbUpTIiwiZG9udFNlbmRCbG9icyIsInByb3RvY29sIiwicGFja2V0cyIsIm9wZW4iLCJjbG9zZSIsInBpbmciLCJwb25nIiwidXBncmFkZSIsIm5vb3AiLCJwYWNrZXRzbGlzdCIsImVyciIsImRhdGEiLCJCbG9iIiwiZW5jb2RlUGFja2V0IiwicGFja2V0Iiwic3VwcG9ydHNCaW5hcnkiLCJ1dGY4ZW5jb2RlIiwiY2FsbGJhY2siLCJ1bmRlZmluZWQiLCJidWZmZXIiLCJlbmNvZGVBcnJheUJ1ZmZlciIsImVuY29kZUJsb2IiLCJiYXNlNjQiLCJlbmNvZGVCYXNlNjRPYmplY3QiLCJlbmNvZGVkIiwiZW5jb2RlIiwiU3RyaW5nIiwic3RyaWN0IiwiZW5jb2RlQmFzZTY0UGFja2V0IiwiY29udGVudEFycmF5IiwiVWludDhBcnJheSIsInJlc3VsdEJ1ZmZlciIsImJ5dGVMZW5ndGgiLCJpIiwibGVuZ3RoIiwiZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIiLCJmciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImJsb2IiLCJiNjQiLCJzcGxpdCIsInJlYWRBc0RhdGFVUkwiLCJiNjRkYXRhIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJlIiwidHlwZWQiLCJiYXNpYyIsIkFycmF5IiwiYnRvYSIsImRlY29kZVBhY2tldCIsImJpbmFyeVR5cGUiLCJ1dGY4ZGVjb2RlIiwiY2hhckF0IiwiZGVjb2RlQmFzZTY0UGFja2V0Iiwic3Vic3RyIiwidHJ5RGVjb2RlIiwiTnVtYmVyIiwic3Vic3RyaW5nIiwiYXNBcnJheSIsInJlc3QiLCJkZWNvZGUiLCJtc2ciLCJlbmNvZGVQYXlsb2FkIiwiaXNCaW5hcnkiLCJlbmNvZGVQYXlsb2FkQXNCbG9iIiwiZW5jb2RlUGF5bG9hZEFzQXJyYXlCdWZmZXIiLCJzZXRMZW5ndGhIZWFkZXIiLCJlbmNvZGVPbmUiLCJkb25lQ2FsbGJhY2siLCJtYXAiLCJyZXN1bHRzIiwiam9pbiIsImFyeSIsImVhY2giLCJkb25lIiwibmV4dCIsImVhY2hXaXRoSW5kZXgiLCJlbCIsImNiIiwiZGVjb2RlUGF5bG9hZCIsImRlY29kZVBheWxvYWRBc0JpbmFyeSIsIm4iLCJsIiwiY2hyIiwicmV0IiwiZW5jb2RlZFBhY2tldHMiLCJ0b3RhbExlbmd0aCIsInJlZHVjZSIsImFjYyIsInAiLCJsZW4iLCJ0b1N0cmluZyIsInJlc3VsdEFycmF5IiwiYnVmZmVySW5kZXgiLCJmb3JFYWNoIiwiaXNTdHJpbmciLCJhYiIsInZpZXciLCJjaGFyQ29kZUF0IiwibGVuU3RyIiwiYmluYXJ5SWRlbnRpZmllciIsInNpemUiLCJsZW5ndGhBcnkiLCJidWZmZXJUYWlsIiwiYnVmZmVycyIsInRhaWxBcnJheSIsIm1zZ0xlbmd0aCIsInB1c2giLCJ0b3RhbCIsIm9iaiIsInN0ciIsImhhc093blByb3BlcnR5IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicXMiLCJxcnkiLCJwYWlycyIsInBhaXIiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhIiwiYiIsImZuIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJkZWJ1ZyIsIkVtaXR0ZXIiLCJiaW5hcnkiLCJpc0FycmF5IiwiaXNCdWYiLCJ0eXBlcyIsIkNPTk5FQ1QiLCJESVNDT05ORUNUIiwiRVZFTlQiLCJBQ0siLCJFUlJPUiIsIkJJTkFSWV9FVkVOVCIsIkJJTkFSWV9BQ0siLCJFbmNvZGVyIiwiRGVjb2RlciIsIkVSUk9SX1BBQ0tFVCIsImVuY29kZUFzQmluYXJ5IiwiZW5jb2RpbmciLCJlbmNvZGVBc1N0cmluZyIsImF0dGFjaG1lbnRzIiwibnNwIiwiaWQiLCJwYXlsb2FkIiwidHJ5U3RyaW5naWZ5Iiwid3JpdGVFbmNvZGluZyIsImJsb2JsZXNzRGF0YSIsImRlY29uc3RydWN0aW9uIiwiZGVjb25zdHJ1Y3RQYWNrZXQiLCJwYWNrIiwidW5zaGlmdCIsInJlbW92ZUJsb2JzIiwicmVjb25zdHJ1Y3RvciIsImFkZCIsImRlY29kZVN0cmluZyIsIkJpbmFyeVJlY29uc3RydWN0b3IiLCJyZWNvblBhY2siLCJlbWl0IiwiRXJyb3IiLCJ0YWtlQmluYXJ5RGF0YSIsImJ1ZiIsInRyeVBhcnNlIiwiaXNQYXlsb2FkVmFsaWQiLCJwYXJzZSIsImRlc3Ryb3kiLCJmaW5pc2hlZFJlY29uc3RydWN0aW9uIiwiYmluRGF0YSIsInJlY29uc3RydWN0UGFja2V0IiwibWl4aW4iLCJrZXkiLCJvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsIl9jYWxsYmFja3MiLCJvbmNlIiwib2ZmIiwiYXJndW1lbnRzIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2FsbGJhY2tzIiwic2xpY2UiLCJjYWxsIiwibGlzdGVuZXJzIiwiaGFzTGlzdGVuZXJzIiwiYXJyIiwiaWVlZTc1NCIsIkJ1ZmZlciIsIlNsb3dCdWZmZXIiLCJJTlNQRUNUX01BWF9CWVRFUyIsIlRZUEVEX0FSUkFZX1NVUFBPUlQiLCJnbG9iYWwiLCJ0eXBlZEFycmF5U3VwcG9ydCIsImtNYXhMZW5ndGgiLCJfX3Byb3RvX18iLCJmb28iLCJzdWJhcnJheSIsImNyZWF0ZUJ1ZmZlciIsInRoYXQiLCJSYW5nZUVycm9yIiwiYXJnIiwiZW5jb2RpbmdPck9mZnNldCIsImFsbG9jVW5zYWZlIiwiZnJvbSIsInBvb2xTaXplIiwiX2F1Z21lbnQiLCJ2YWx1ZSIsIlR5cGVFcnJvciIsImZyb21BcnJheUJ1ZmZlciIsImZyb21TdHJpbmciLCJmcm9tT2JqZWN0IiwiU3ltYm9sIiwic3BlY2llcyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwiYXNzZXJ0U2l6ZSIsImFsbG9jIiwiZmlsbCIsImNoZWNrZWQiLCJhbGxvY1Vuc2FmZVNsb3ciLCJzdHJpbmciLCJpc0VuY29kaW5nIiwiYWN0dWFsIiwid3JpdGUiLCJmcm9tQXJyYXlMaWtlIiwiYXJyYXkiLCJieXRlT2Zmc2V0IiwiaXNCdWZmZXIiLCJjb3B5IiwiaXNuYW4iLCJfaXNCdWZmZXIiLCJjb21wYXJlIiwieCIsInkiLCJNYXRoIiwibWluIiwiY29uY2F0IiwibGlzdCIsInBvcyIsImlzVmlldyIsImxvd2VyZWRDYXNlIiwidXRmOFRvQnl0ZXMiLCJiYXNlNjRUb0J5dGVzIiwic2xvd1RvU3RyaW5nIiwic3RhcnQiLCJlbmQiLCJoZXhTbGljZSIsInV0ZjhTbGljZSIsImFzY2lpU2xpY2UiLCJsYXRpbjFTbGljZSIsImJhc2U2NFNsaWNlIiwidXRmMTZsZVNsaWNlIiwic3dhcCIsIm0iLCJzd2FwMTYiLCJzd2FwMzIiLCJzd2FwNjQiLCJlcXVhbHMiLCJpbnNwZWN0IiwibWF4IiwidGFyZ2V0IiwidGhpc1N0YXJ0IiwidGhpc0VuZCIsInRoaXNDb3B5IiwidGFyZ2V0Q29weSIsImJpZGlyZWN0aW9uYWxJbmRleE9mIiwidmFsIiwiZGlyIiwiaXNOYU4iLCJhcnJheUluZGV4T2YiLCJpbmRleE9mIiwibGFzdEluZGV4T2YiLCJpbmRleFNpemUiLCJhcnJMZW5ndGgiLCJ2YWxMZW5ndGgiLCJyZWFkIiwicmVhZFVJbnQxNkJFIiwiZm91bmRJbmRleCIsImZvdW5kIiwiaW5jbHVkZXMiLCJoZXhXcml0ZSIsIm9mZnNldCIsInJlbWFpbmluZyIsInN0ckxlbiIsInBhcnNlZCIsInV0ZjhXcml0ZSIsImJsaXRCdWZmZXIiLCJhc2NpaVdyaXRlIiwiYXNjaWlUb0J5dGVzIiwibGF0aW4xV3JpdGUiLCJiYXNlNjRXcml0ZSIsInVjczJXcml0ZSIsInV0ZjE2bGVUb0J5dGVzIiwiaXNGaW5pdGUiLCJ0b0pTT04iLCJfYXJyIiwiZnJvbUJ5dGVBcnJheSIsInJlcyIsImZpcnN0Qnl0ZSIsImNvZGVQb2ludCIsImJ5dGVzUGVyU2VxdWVuY2UiLCJzZWNvbmRCeXRlIiwidGhpcmRCeXRlIiwiZm91cnRoQnl0ZSIsInRlbXBDb2RlUG9pbnQiLCJkZWNvZGVDb2RlUG9pbnRzQXJyYXkiLCJNQVhfQVJHVU1FTlRTX0xFTkdUSCIsImNvZGVQb2ludHMiLCJvdXQiLCJ0b0hleCIsImJ5dGVzIiwibmV3QnVmIiwic2xpY2VMZW4iLCJjaGVja09mZnNldCIsImV4dCIsInJlYWRVSW50TEUiLCJub0Fzc2VydCIsIm11bCIsInJlYWRVSW50QkUiLCJyZWFkVUludDgiLCJyZWFkVUludDE2TEUiLCJyZWFkVUludDMyTEUiLCJyZWFkVUludDMyQkUiLCJyZWFkSW50TEUiLCJwb3ciLCJyZWFkSW50QkUiLCJyZWFkSW50OCIsInJlYWRJbnQxNkxFIiwicmVhZEludDE2QkUiLCJyZWFkSW50MzJMRSIsInJlYWRJbnQzMkJFIiwicmVhZEZsb2F0TEUiLCJyZWFkRmxvYXRCRSIsInJlYWREb3VibGVMRSIsInJlYWREb3VibGVCRSIsImNoZWNrSW50Iiwid3JpdGVVSW50TEUiLCJtYXhCeXRlcyIsIndyaXRlVUludEJFIiwid3JpdGVVSW50OCIsImZsb29yIiwib2JqZWN0V3JpdGVVSW50MTYiLCJsaXR0bGVFbmRpYW4iLCJ3cml0ZVVJbnQxNkxFIiwid3JpdGVVSW50MTZCRSIsIm9iamVjdFdyaXRlVUludDMyIiwid3JpdGVVSW50MzJMRSIsIndyaXRlVUludDMyQkUiLCJ3cml0ZUludExFIiwibGltaXQiLCJzdWIiLCJ3cml0ZUludEJFIiwid3JpdGVJbnQ4Iiwid3JpdGVJbnQxNkxFIiwid3JpdGVJbnQxNkJFIiwid3JpdGVJbnQzMkxFIiwid3JpdGVJbnQzMkJFIiwiY2hlY2tJRUVFNzU0Iiwid3JpdGVGbG9hdCIsIndyaXRlRmxvYXRMRSIsIndyaXRlRmxvYXRCRSIsIndyaXRlRG91YmxlIiwid3JpdGVEb3VibGVMRSIsIndyaXRlRG91YmxlQkUiLCJ0YXJnZXRTdGFydCIsInNldCIsImNvZGUiLCJJTlZBTElEX0JBU0U2NF9SRSIsImJhc2U2NGNsZWFuIiwic3RyaW5ndHJpbSIsInRyaW0iLCJ1bml0cyIsIkluZmluaXR5IiwibGVhZFN1cnJvZ2F0ZSIsImJ5dGVBcnJheSIsImhpIiwibG8iLCJ0b0J5dGVBcnJheSIsInNyYyIsImRzdCIsImhhc0NPUlMiLCJnbG9iYWxUaGlzIiwib3B0cyIsInhkb21haW4iLCJ4c2NoZW1lIiwiZW5hYmxlc1hEUiIsIlhNTEh0dHBSZXF1ZXN0IiwiWERvbWFpblJlcXVlc3QiLCJzZWxmIiwiRnVuY3Rpb24iLCJwYXJzZXIiLCJUcmFuc3BvcnQiLCJwYXRoIiwiaG9zdG5hbWUiLCJwb3J0Iiwic2VjdXJlIiwicXVlcnkiLCJ0aW1lc3RhbXBQYXJhbSIsInRpbWVzdGFtcFJlcXVlc3RzIiwicmVhZHlTdGF0ZSIsImFnZW50Iiwic29ja2V0Iiwid2l0aENyZWRlbnRpYWxzIiwicGZ4IiwicGFzc3BocmFzZSIsImNlcnQiLCJjYSIsImNpcGhlcnMiLCJyZWplY3RVbmF1dGhvcml6ZWQiLCJmb3JjZU5vZGUiLCJpc1JlYWN0TmF0aXZlIiwiZXh0cmFIZWFkZXJzIiwibG9jYWxBZGRyZXNzIiwib25FcnJvciIsImRlc2MiLCJkZXNjcmlwdGlvbiIsImRvT3BlbiIsImRvQ2xvc2UiLCJvbkNsb3NlIiwic2VuZCIsIm9uT3BlbiIsIndyaXRhYmxlIiwib25EYXRhIiwib25QYWNrZXQiLCJyZSIsInBhcnRzIiwicGFyc2V1cmkiLCJleGVjIiwidXJpIiwic291cmNlIiwiaG9zdCIsImF1dGhvcml0eSIsImlwdjZ1cmkiLCJjYWNoZWRTZXRUaW1lb3V0IiwiY2FjaGVkQ2xlYXJUaW1lb3V0IiwiZGVmYXVsdFNldFRpbW91dCIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJydW4iLCJuZXh0VGljayIsIkl0ZW0iLCJ0aXRsZSIsImJyb3dzZXIiLCJhcmd2IiwidmVyc2lvbiIsInZlcnNpb25zIiwiYWRkTGlzdGVuZXIiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsInVtYXNrIiwid2l0aE5hdGl2ZUJ1ZmZlciIsIndpdGhOYXRpdmVBcnJheUJ1ZmZlciIsImVpbyIsIlNvY2tldCIsImJpbmQiLCJCYWNrb2ZmIiwiaGFzIiwiTWFuYWdlciIsIm5zcHMiLCJzdWJzIiwicmVjb25uZWN0aW9uIiwicmVjb25uZWN0aW9uQXR0ZW1wdHMiLCJyZWNvbm5lY3Rpb25EZWxheSIsInJlY29ubmVjdGlvbkRlbGF5TWF4IiwicmFuZG9taXphdGlvbkZhY3RvciIsImJhY2tvZmYiLCJqaXR0ZXIiLCJjb25uZWN0aW5nIiwibGFzdFBpbmciLCJwYWNrZXRCdWZmZXIiLCJfcGFyc2VyIiwiZW5jb2RlciIsImRlY29kZXIiLCJhdXRvQ29ubmVjdCIsImVtaXRBbGwiLCJ1cGRhdGVTb2NrZXRJZHMiLCJnZW5lcmF0ZUlkIiwiZW5naW5lIiwiX3JlY29ubmVjdGlvbiIsIl9yZWNvbm5lY3Rpb25BdHRlbXB0cyIsIl9yZWNvbm5lY3Rpb25EZWxheSIsInNldE1pbiIsIl9yYW5kb21pemF0aW9uRmFjdG9yIiwic2V0Sml0dGVyIiwiX3JlY29ubmVjdGlvbkRlbGF5TWF4Iiwic2V0TWF4IiwiX3RpbWVvdXQiLCJtYXliZVJlY29ubmVjdE9uT3BlbiIsInJlY29ubmVjdGluZyIsImF0dGVtcHRzIiwicmVjb25uZWN0IiwiY29ubmVjdCIsInNraXBSZWNvbm5lY3QiLCJvcGVuU3ViIiwib25vcGVuIiwiZXJyb3JTdWIiLCJjbGVhbnVwIiwidGltZXIiLCJvbnBpbmciLCJEYXRlIiwib25wb25nIiwib25kYXRhIiwib25kZWNvZGVkIiwib25lcnJvciIsIm9uQ29ubmVjdGluZyIsIm9wdGlvbnMiLCJwcm9jZXNzUGFja2V0UXVldWUiLCJzaGlmdCIsInN1YnNMZW5ndGgiLCJkaXNjb25uZWN0IiwicmVzZXQiLCJvbmNsb3NlIiwicmVhc29uIiwiZGVsYXkiLCJkdXJhdGlvbiIsIm9ucmVjb25uZWN0IiwiYXR0ZW1wdCIsIlhIUiIsIkpTT05QIiwid2Vic29ja2V0IiwicG9sbGluZyIsInhociIsInhkIiwieHMiLCJqc29ucCIsImxvY2F0aW9uIiwiaXNTU0wiLCJmb3JjZUpTT05QIiwicGFyc2VxcyIsImluaGVyaXQiLCJ5ZWFzdCIsIlBvbGxpbmciLCJoYXNYSFIyIiwicmVzcG9uc2VUeXBlIiwiZm9yY2VCYXNlNjQiLCJwb2xsIiwicGF1c2UiLCJvblBhdXNlIiwiZG9Qb2xsIiwiY2FsbGJhY2tmbiIsImRvV3JpdGUiLCJzY2hlbWEiLCJzaWQiLCJpcHY2Iiwid2l0aE5hdGl2ZUJsb2IiLCJ3aXRoTmF0aXZlRmlsZSIsIkZpbGUiLCJhbHBoYWJldCIsInNlZWQiLCJwcmV2IiwibnVtIiwiZGVjb2RlZCIsIm5vdyIsInRvQXJyYXkiLCJoYXNCaW4iLCJldmVudHMiLCJjb25uZWN0X2Vycm9yIiwiY29ubmVjdF90aW1lb3V0IiwicmVjb25uZWN0X2F0dGVtcHQiLCJyZWNvbm5lY3RfZmFpbGVkIiwicmVjb25uZWN0X2Vycm9yIiwiaW8iLCJqc29uIiwiaWRzIiwiYWNrcyIsInJlY2VpdmVCdWZmZXIiLCJzZW5kQnVmZmVyIiwiY29ubmVjdGVkIiwiZGlzY29ubmVjdGVkIiwiZmxhZ3MiLCJzdWJFdmVudHMiLCJldiIsImNvbXByZXNzIiwicG9wIiwib25wYWNrZXQiLCJzYW1lTmFtZXNwYWNlIiwicm9vdE5hbWVzcGFjZUVycm9yIiwib25jb25uZWN0Iiwib25ldmVudCIsIm9uYWNrIiwib25kaXNjb25uZWN0IiwiYWNrIiwic2VudCIsImVtaXRCdWZmZXJlZCIsInVybCIsImxvb2t1cCIsImNhY2hlIiwibWFuYWdlcnMiLCJuZXdDb25uZWN0aW9uIiwiZm9yY2VOZXciLCJtdWx0aXBsZXgiLCJsb2MiLCJocmVmIiwic2V0dXAiLCJjcmVhdGVEZWJ1ZyIsImNvZXJjZSIsImRpc2FibGUiLCJlbmFibGUiLCJlbmFibGVkIiwiaW5zdGFuY2VzIiwibmFtZXMiLCJza2lwcyIsInNlbGVjdENvbG9yIiwiaGFzaCIsImFicyIsInByZXZUaW1lIiwiY3VyciIsIm1zIiwiZm9ybWF0IiwiZm9ybWF0dGVyIiwibG9nRm4iLCJleHRlbmQiLCJpbml0IiwiZGVsaW1pdGVyIiwibmV3RGVidWciLCJpbnN0YW5jZSIsInRvTmFtZXNwYWNlIiwicmVnZXhwIiwic3RhY2siLCJzIiwiaCIsImQiLCJ3IiwiZm10TG9uZyIsImZtdFNob3J0IiwicGFyc2VGbG9hdCIsIm1zQWJzIiwicm91bmQiLCJwbHVyYWwiLCJpc1BsdXJhbCIsImNocm9tZSIsImxvY2FsIiwiY2VpbCIsInBhY2tldERhdGEiLCJfZGVjb25zdHJ1Y3RQYWNrZXQiLCJwbGFjZWhvbGRlciIsIl9wbGFjZWhvbGRlciIsIm5ld0RhdGEiLCJfcmVjb25zdHJ1Y3RQYWNrZXQiLCJfcmVtb3ZlQmxvYnMiLCJjdXJLZXkiLCJjb250YWluaW5nT2JqZWN0IiwicGVuZGluZ0Jsb2JzIiwiZmlsZVJlYWRlciIsImciLCJyZXZMb29rdXAiLCJBcnIiLCJnZXRMZW5zIiwidmFsaWRMZW4iLCJwbGFjZUhvbGRlcnNMZW4iLCJsZW5zIiwiX2J5dGVMZW5ndGgiLCJ0bXAiLCJjdXJCeXRlIiwidHJpcGxldFRvQmFzZTY0IiwiZW5jb2RlQ2h1bmsiLCJ1aW50OCIsIm91dHB1dCIsImV4dHJhQnl0ZXMiLCJtYXhDaHVua0xlbmd0aCIsImxlbjIiLCJpc0xFIiwibUxlbiIsIm5CeXRlcyIsImVMZW4iLCJlTWF4IiwiZUJpYXMiLCJuQml0cyIsIk5hTiIsInJ0IiwiTE4yIiwidHJhbnNwb3J0cyIsInRyYW5zcG9ydE9wdGlvbnMiLCJ3cml0ZUJ1ZmZlciIsInByZXZCdWZmZXJMZW4iLCJwb2xpY3lQb3J0IiwicmVtZW1iZXJVcGdyYWRlIiwib25seUJpbmFyeVVwZ3JhZGVzIiwicGVyTWVzc2FnZURlZmxhdGUiLCJ0aHJlc2hvbGQiLCJwcm9kdWN0IiwidXBncmFkZXMiLCJwaW5nSW50ZXJ2YWwiLCJwaW5nVGltZW91dCIsInBpbmdJbnRlcnZhbFRpbWVyIiwicGluZ1RpbWVvdXRUaW1lciIsInByaW9yV2Vic29ja2V0U3VjY2VzcyIsImNyZWF0ZVRyYW5zcG9ydCIsImNsb25lIiwiRUlPIiwidHJhbnNwb3J0IiwicmVxdWVzdFRpbWVvdXQiLCJwcm90b2NvbHMiLCJvIiwic2V0VHJhbnNwb3J0Iiwib25EcmFpbiIsInByb2JlIiwiZmFpbGVkIiwib25UcmFuc3BvcnRPcGVuIiwidXBncmFkZUxvc2VzQmluYXJ5IiwidXBncmFkaW5nIiwiZmx1c2giLCJmcmVlemVUcmFuc3BvcnQiLCJvblRyYW5zcG9ydENsb3NlIiwib251cGdyYWRlIiwidG8iLCJvbkhhbmRzaGFrZSIsInNldFBpbmciLCJmaWx0ZXJVcGdyYWRlcyIsIm9uSGVhcnRiZWF0Iiwic2VuZFBhY2tldCIsIndhaXRGb3JVcGdyYWRlIiwiY2xlYW51cEFuZENsb3NlIiwiZmlsdGVyZWRVcGdyYWRlcyIsIlJlcXVlc3QiLCJlbXB0eSIsInJlcXVlc3QiLCJyZXEiLCJtZXRob2QiLCJzZW5kWGhyIiwicG9sbFhociIsImFzeW5jIiwiY3JlYXRlIiwic2V0RGlzYWJsZUhlYWRlckNoZWNrIiwic2V0UmVxdWVzdEhlYWRlciIsImhhc1hEUiIsIm9uTG9hZCIsInJlc3BvbnNlVGV4dCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsImNvbnRlbnRUeXBlIiwiZ2V0UmVzcG9uc2VIZWFkZXIiLCJzdGF0dXMiLCJyZXF1ZXN0c0NvdW50IiwicmVxdWVzdHMiLCJvblN1Y2Nlc3MiLCJmcm9tRXJyb3IiLCJhYm9ydCIsInJlc3BvbnNlIiwiYXR0YWNoRXZlbnQiLCJ1bmxvYWRIYW5kbGVyIiwidGVybWluYXRpb25FdmVudCIsImFycmF5YnVmZmVyIiwiYWJ2IiwiaWkiLCJjb3VudCIsImVycl9jYiIsImJhaWwiLCJwcm94eSIsInN0cmluZ0Zyb21DaGFyQ29kZSIsInVjczJkZWNvZGUiLCJjb3VudGVyIiwiZXh0cmEiLCJ1Y3MyZW5jb2RlIiwiY2hlY2tTY2FsYXJWYWx1ZSIsInRvVXBwZXJDYXNlIiwiY3JlYXRlQnl0ZSIsImVuY29kZUNvZGVQb2ludCIsInN5bWJvbCIsImJ5dGVTdHJpbmciLCJyZWFkQ29udGludWF0aW9uQnl0ZSIsImJ5dGVJbmRleCIsImJ5dGVDb3VudCIsImNvbnRpbnVhdGlvbkJ5dGUiLCJkZWNvZGVTeW1ib2wiLCJieXRlMSIsImJ5dGUyIiwiYnl0ZTMiLCJieXRlNCIsImNoYXJzIiwiYnVmZmVyTGVuZ3RoIiwiZW5jb2RlZDEiLCJlbmNvZGVkMiIsImVuY29kZWQzIiwiZW5jb2RlZDQiLCJCbG9iQnVpbGRlciIsIldlYktpdEJsb2JCdWlsZGVyIiwiTVNCbG9iQnVpbGRlciIsIk1vekJsb2JCdWlsZGVyIiwiYmxvYlN1cHBvcnRlZCIsImJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyIsImJsb2JCdWlsZGVyU3VwcG9ydGVkIiwiYXBwZW5kIiwiZ2V0QmxvYiIsIm1hcEFycmF5QnVmZmVyVmlld3MiLCJjaHVuayIsIkJsb2JCdWlsZGVyQ29uc3RydWN0b3IiLCJiYiIsInBhcnQiLCJCbG9iQ29uc3RydWN0b3IiLCJKU09OUFBvbGxpbmciLCJyTmV3bGluZSIsInJFc2NhcGVkTmV3bGluZSIsIl9fX2VpbyIsInNjcmlwdCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZvcm0iLCJpZnJhbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5zZXJ0QXQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImluc2VydEJlZm9yZSIsImhlYWQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJpc1VBZ2Vja28iLCJhcmVhIiwiaWZyYW1lSWQiLCJjbGFzc05hbWUiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJzZXRBdHRyaWJ1dGUiLCJhY3Rpb24iLCJjb21wbGV0ZSIsImluaXRJZnJhbWUiLCJodG1sIiwic3VibWl0IiwiQnJvd3NlcldlYlNvY2tldCIsIk5vZGVXZWJTb2NrZXQiLCJXZWJTb2NrZXQiLCJNb3pXZWJTb2NrZXQiLCJXZWJTb2NrZXRJbXBsIiwiV1MiLCJ1c2luZ0Jyb3dzZXJXZWJTb2NrZXQiLCJjaGVjayIsImhlYWRlcnMiLCJ3cyIsInN1cHBvcnRzIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJvbm1lc3NhZ2UiLCJmYWN0b3IiLCJyYW5kIiwicmFuZG9tIiwiZGV2aWF0aW9uIiwiYmxvY2tzIiwiQm9hcmQiLCJ3b3JsZCIsImJsb2NrU2l6ZSIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhdyIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJQbGF5ZXJzIiwicGxheWVyU2l6ZSIsInBsYXllciIsImNvbCIsImJlZ2luUGF0aCIsImVsbGlwc2UiLCJQSSIsImtleWNvZGVzIiwiQ2xpZW50IiwiYm9hcmQiLCJ1cGRhdGVXb3JsZCIsInBsYXllcnNEYXRhIiwicGxheWVycyIsInVwZGF0ZVBsYXllcnMiLCJrZXlDb2RlIiwiZ2FtZUNsaWVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFD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LENBQVlyUCxJQUFaLENBQWlCLE9BQWpCLEVBQTBCbkgsQ0FBQyxDQUFDczBCLE9BQTVCO0FBQ0g7QUFDSixHQUxEO0FBT0gsQzs7QUFxQlVOLDJEQUFmLEU7O0FDeEVBO0FBRUF4NkIsTUFBTSxDQUFDKzZCLFVBQVAsR0FBb0IsSUFBSVAsU0FBSixFQUFwQixDIiwiZmlsZSI6Ii4uL2ZlL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNTEpO1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMubG9nID0gbG9nO1xuZXhwb3J0cy5mb3JtYXRBcmdzID0gZm9ybWF0QXJncztcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLmxvYWQgPSBsb2FkO1xuZXhwb3J0cy51c2VDb2xvcnMgPSB1c2VDb2xvcnM7XG5leHBvcnRzLnN0b3JhZ2UgPSBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG5cdCcjMDAwMENDJyxcblx0JyMwMDAwRkYnLFxuXHQnIzAwMzNDQycsXG5cdCcjMDAzM0ZGJyxcblx0JyMwMDY2Q0MnLFxuXHQnIzAwNjZGRicsXG5cdCcjMDA5OUNDJyxcblx0JyMwMDk5RkYnLFxuXHQnIzAwQ0MwMCcsXG5cdCcjMDBDQzMzJyxcblx0JyMwMENDNjYnLFxuXHQnIzAwQ0M5OScsXG5cdCcjMDBDQ0NDJyxcblx0JyMwMENDRkYnLFxuXHQnIzMzMDBDQycsXG5cdCcjMzMwMEZGJyxcblx0JyMzMzMzQ0MnLFxuXHQnIzMzMzNGRicsXG5cdCcjMzM2NkNDJyxcblx0JyMzMzY2RkYnLFxuXHQnIzMzOTlDQycsXG5cdCcjMzM5OUZGJyxcblx0JyMzM0NDMDAnLFxuXHQnIzMzQ0MzMycsXG5cdCcjMzNDQzY2Jyxcblx0JyMzM0NDOTknLFxuXHQnIzMzQ0NDQycsXG5cdCcjMzNDQ0ZGJyxcblx0JyM2NjAwQ0MnLFxuXHQnIzY2MDBGRicsXG5cdCcjNjYzM0NDJyxcblx0JyM2NjMzRkYnLFxuXHQnIzY2Q0MwMCcsXG5cdCcjNjZDQzMzJyxcblx0JyM5OTAwQ0MnLFxuXHQnIzk5MDBGRicsXG5cdCcjOTkzM0NDJyxcblx0JyM5OTMzRkYnLFxuXHQnIzk5Q0MwMCcsXG5cdCcjOTlDQzMzJyxcblx0JyNDQzAwMDAnLFxuXHQnI0NDMDAzMycsXG5cdCcjQ0MwMDY2Jyxcblx0JyNDQzAwOTknLFxuXHQnI0NDMDBDQycsXG5cdCcjQ0MwMEZGJyxcblx0JyNDQzMzMDAnLFxuXHQnI0NDMzMzMycsXG5cdCcjQ0MzMzY2Jyxcblx0JyNDQzMzOTknLFxuXHQnI0NDMzNDQycsXG5cdCcjQ0MzM0ZGJyxcblx0JyNDQzY2MDAnLFxuXHQnI0NDNjYzMycsXG5cdCcjQ0M5OTAwJyxcblx0JyNDQzk5MzMnLFxuXHQnI0NDQ0MwMCcsXG5cdCcjQ0NDQzMzJyxcblx0JyNGRjAwMDAnLFxuXHQnI0ZGMDAzMycsXG5cdCcjRkYwMDY2Jyxcblx0JyNGRjAwOTknLFxuXHQnI0ZGMDBDQycsXG5cdCcjRkYwMEZGJyxcblx0JyNGRjMzMDAnLFxuXHQnI0ZGMzMzMycsXG5cdCcjRkYzMzY2Jyxcblx0JyNGRjMzOTknLFxuXHQnI0ZGMzNDQycsXG5cdCcjRkYzM0ZGJyxcblx0JyNGRjY2MDAnLFxuXHQnI0ZGNjYzMycsXG5cdCcjRkY5OTAwJyxcblx0JyNGRjk5MzMnLFxuXHQnI0ZGQ0MwMCcsXG5cdCcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eVxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHQvLyBOQjogSW4gYW4gRWxlY3Ryb24gcHJlbG9hZCBzY3JpcHQsIGRvY3VtZW50IHdpbGwgYmUgZGVmaW5lZCBidXQgbm90IGZ1bGx5XG5cdC8vIGluaXRpYWxpemVkLiBTaW5jZSB3ZSBrbm93IHdlJ3JlIGluIENocm9tZSwgd2UnbGwganVzdCBkZXRlY3QgdGhpcyBjYXNlXG5cdC8vIGV4cGxpY2l0bHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wcm9jZXNzICYmICh3aW5kb3cucHJvY2Vzcy50eXBlID09PSAncmVuZGVyZXInIHx8IHdpbmRvdy5wcm9jZXNzLl9fbndqcykpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8vIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlIGRvIG5vdCBzdXBwb3J0IGNvbG9ycy5cblx0aWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC8oZWRnZXx0cmlkZW50KVxcLyhcXGQrKS8pKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcblx0Ly8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcblx0cmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG5cdFx0Ly8gSXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuXHRcdCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG5cdFx0Ly8gSXMgZmlyZWZveCA+PSB2MzE/XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG5cdFx0KHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG5cdFx0Ly8gRG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG5cdGFyZ3NbMF0gPSAodGhpcy51c2VDb2xvcnMgPyAnJWMnIDogJycpICtcblx0XHR0aGlzLm5hbWVzcGFjZSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyAlYycgOiAnICcpICtcblx0XHRhcmdzWzBdICtcblx0XHQodGhpcy51c2VDb2xvcnMgPyAnJWMgJyA6ICcgJykgK1xuXHRcdCcrJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cblx0aWYgKCF0aGlzLnVzZUNvbG9ycykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGMgPSAnY29sb3I6ICcgKyB0aGlzLmNvbG9yO1xuXHRhcmdzLnNwbGljZSgxLCAwLCBjLCAnY29sb3I6IGluaGVyaXQnKTtcblxuXHQvLyBUaGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuXHQvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG5cdC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuXHRsZXQgaW5kZXggPSAwO1xuXHRsZXQgbGFzdEMgPSAwO1xuXHRhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgbWF0Y2ggPT4ge1xuXHRcdGlmIChtYXRjaCA9PT0gJyUlJykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpbmRleCsrO1xuXHRcdGlmIChtYXRjaCA9PT0gJyVjJykge1xuXHRcdFx0Ly8gV2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG5cdFx0XHQvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuXHRcdFx0bGFzdEMgPSBpbmRleDtcblx0XHR9XG5cdH0pO1xuXG5cdGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0Ly8gVGhpcyBoYWNrZXJ5IGlzIHJlcXVpcmVkIGZvciBJRTgvOSwgd2hlcmVcblx0Ly8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24gZG9lc24ndCBoYXZlICdhcHBseSdcblx0cmV0dXJuIHR5cGVvZiBjb25zb2xlID09PSAnb2JqZWN0JyAmJlxuXHRcdGNvbnNvbGUubG9nICYmXG5cdFx0Y29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cbi8qKlxuICogU2F2ZSBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcblx0dHJ5IHtcblx0XHRpZiAobmFtZXNwYWNlcykge1xuXHRcdFx0ZXhwb3J0cy5zdG9yYWdlLnNldEl0ZW0oJ2RlYnVnJywgbmFtZXNwYWNlcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5yZW1vdmVJdGVtKCdkZWJ1ZycpO1xuXHRcdH1cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gbG9hZCgpIHtcblx0bGV0IHI7XG5cdHRyeSB7XG5cdFx0ciA9IGV4cG9ydHMuc3RvcmFnZS5nZXRJdGVtKCdkZWJ1ZycpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxuXG5cdC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcblx0aWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG5cdFx0ciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG5cblx0cmV0dXJuIHI7XG59XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuXHR0cnkge1xuXHRcdC8vIFRWTUxLaXQgKEFwcGxlIFRWIEpTIFJ1bnRpbWUpIGRvZXMgbm90IGhhdmUgYSB3aW5kb3cgb2JqZWN0LCBqdXN0IGxvY2FsU3RvcmFnZSBpbiB0aGUgZ2xvYmFsIGNvbnRleHRcblx0XHQvLyBUaGUgQnJvd3NlciBhbHNvIGhhcyBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0LlxuXHRcdHJldHVybiBsb2NhbFN0b3JhZ2U7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb21tb24nKShleHBvcnRzKTtcblxuY29uc3Qge2Zvcm1hdHRlcnN9ID0gbW9kdWxlLmV4cG9ydHM7XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmZvcm1hdHRlcnMuaiA9IGZ1bmN0aW9uICh2KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdHJldHVybiAnW1VuZXhwZWN0ZWRKU09OUGFyc2VFcnJvcl06ICcgKyBlcnJvci5tZXNzYWdlO1xuXHR9XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG52YXIgaGFzQmluYXJ5ID0gcmVxdWlyZSgnaGFzLWJpbmFyeTInKTtcbnZhciBzbGljZUJ1ZmZlciA9IHJlcXVpcmUoJ2FycmF5YnVmZmVyLnNsaWNlJyk7XG52YXIgYWZ0ZXIgPSByZXF1aXJlKCdhZnRlcicpO1xudmFyIHV0ZjggPSByZXF1aXJlKCcuL3V0ZjgnKTtcblxudmFyIGJhc2U2NGVuY29kZXI7XG5pZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykge1xuICBiYXNlNjRlbmNvZGVyID0gcmVxdWlyZSgnYmFzZTY0LWFycmF5YnVmZmVyJyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UgYXJlIHJ1bm5pbmcgYW4gYW5kcm9pZCBicm93c2VyLiBUaGF0IHJlcXVpcmVzIHVzIHRvIHVzZVxuICogQXJyYXlCdWZmZXIgd2l0aCBwb2xsaW5nIHRyYW5zcG9ydHMuLi5cbiAqXG4gKiBodHRwOi8vZ2hpbmRhLm5ldC9qcGVnLWJsb2ItYWpheC1hbmRyb2lkL1xuICovXG5cbnZhciBpc0FuZHJvaWQgPSB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAvQW5kcm9pZC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQ2hlY2sgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gUGhhbnRvbUpTLlxuICogVXBsb2FkaW5nIGEgQmxvYiB3aXRoIFBoYW50b21KUyBkb2VzIG5vdCB3b3JrIGNvcnJlY3RseSwgYXMgcmVwb3J0ZWQgaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hcml5YS9waGFudG9tanMvaXNzdWVzLzExMzk1XG4gKiBAdHlwZSBib29sZWFuXG4gKi9cbnZhciBpc1BoYW50b21KUyA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9QaGFudG9tSlMvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4vKipcbiAqIFdoZW4gdHJ1ZSwgYXZvaWRzIHVzaW5nIEJsb2JzIHRvIGVuY29kZSBwYXlsb2Fkcy5cbiAqIEB0eXBlIGJvb2xlYW5cbiAqL1xudmFyIGRvbnRTZW5kQmxvYnMgPSBpc0FuZHJvaWQgfHwgaXNQaGFudG9tSlM7XG5cbi8qKlxuICogQ3VycmVudCBwcm90b2NvbCB2ZXJzaW9uLlxuICovXG5cbmV4cG9ydHMucHJvdG9jb2wgPSAzO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlcy5cbiAqL1xuXG52YXIgcGFja2V0cyA9IGV4cG9ydHMucGFja2V0cyA9IHtcbiAgICBvcGVuOiAgICAgMCAgICAvLyBub24td3NcbiAgLCBjbG9zZTogICAgMSAgICAvLyBub24td3NcbiAgLCBwaW5nOiAgICAgMlxuICAsIHBvbmc6ICAgICAzXG4gICwgbWVzc2FnZTogIDRcbiAgLCB1cGdyYWRlOiAgNVxuICAsIG5vb3A6ICAgICA2XG59O1xuXG52YXIgcGFja2V0c2xpc3QgPSBrZXlzKHBhY2tldHMpO1xuXG4vKipcbiAqIFByZW1hZGUgZXJyb3IgcGFja2V0LlxuICovXG5cbnZhciBlcnIgPSB7IHR5cGU6ICdlcnJvcicsIGRhdGE6ICdwYXJzZXIgZXJyb3InIH07XG5cbi8qKlxuICogQ3JlYXRlIGEgYmxvYiBhcGkgZXZlbiBmb3IgYmxvYiBidWlsZGVyIHdoZW4gdmVuZG9yIHByZWZpeGVzIGV4aXN0XG4gKi9cblxudmFyIEJsb2IgPSByZXF1aXJlKCdibG9iJyk7XG5cbi8qKlxuICogRW5jb2RlcyBhIHBhY2tldC5cbiAqXG4gKiAgICAgPHBhY2tldCB0eXBlIGlkPiBbIDxkYXRhPiBdXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiAgICAgNWhlbGxvIHdvcmxkXG4gKiAgICAgM1xuICogICAgIDRcbiAqXG4gKiBCaW5hcnkgaXMgZW5jb2RlZCBpbiBhbiBpZGVudGljYWwgcHJpbmNpcGxlXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgdXRmOGVuY29kZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBzdXBwb3J0c0JpbmFyeSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gc3VwcG9ydHNCaW5hcnk7XG4gICAgc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdXRmOGVuY29kZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gdXRmOGVuY29kZTtcbiAgICB1dGY4ZW5jb2RlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBkYXRhID0gKHBhY2tldC5kYXRhID09PSB1bmRlZmluZWQpXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHBhY2tldC5kYXRhLmJ1ZmZlciB8fCBwYWNrZXQuZGF0YTtcblxuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICByZXR1cm4gZW5jb2RlQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiBkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIHJldHVybiBlbmNvZGVCbG9iKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8vIG1pZ2h0IGJlIGFuIG9iamVjdCB3aXRoIHsgYmFzZTY0OiB0cnVlLCBkYXRhOiBkYXRhQXNCYXNlNjRTdHJpbmcgfVxuICBpZiAoZGF0YSAmJiBkYXRhLmJhc2U2NCkge1xuICAgIHJldHVybiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICAvLyBTZW5kaW5nIGRhdGEgYXMgYSB1dGYtOCBzdHJpbmdcbiAgdmFyIGVuY29kZWQgPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcblxuICAvLyBkYXRhIGZyYWdtZW50IGlzIG9wdGlvbmFsXG4gIGlmICh1bmRlZmluZWQgIT09IHBhY2tldC5kYXRhKSB7XG4gICAgZW5jb2RlZCArPSB1dGY4ZW5jb2RlID8gdXRmOC5lbmNvZGUoU3RyaW5nKHBhY2tldC5kYXRhKSwgeyBzdHJpY3Q6IGZhbHNlIH0pIDogU3RyaW5nKHBhY2tldC5kYXRhKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjaygnJyArIGVuY29kZWQpO1xuXG59O1xuXG5mdW5jdGlvbiBlbmNvZGVCYXNlNjRPYmplY3QocGFja2V0LCBjYWxsYmFjaykge1xuICAvLyBwYWNrZXQgZGF0YSBpcyBhbiBvYmplY3QgeyBiYXNlNjQ6IHRydWUsIGRhdGE6IGRhdGFBc0Jhc2U2NFN0cmluZyB9XG4gIHZhciBtZXNzYWdlID0gJ2InICsgZXhwb3J0cy5wYWNrZXRzW3BhY2tldC50eXBlXSArIHBhY2tldC5kYXRhLmRhdGE7XG4gIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKTtcbn1cblxuLyoqXG4gKiBFbmNvZGUgcGFja2V0IGhlbHBlcnMgZm9yIGJpbmFyeSB0eXBlc1xuICovXG5cbmZ1bmN0aW9uIGVuY29kZUFycmF5QnVmZmVyKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgZGF0YSA9IHBhY2tldC5kYXRhO1xuICB2YXIgY29udGVudEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoZGF0YSk7XG4gIHZhciByZXN1bHRCdWZmZXIgPSBuZXcgVWludDhBcnJheSgxICsgZGF0YS5ieXRlTGVuZ3RoKTtcblxuICByZXN1bHRCdWZmZXJbMF0gPSBwYWNrZXRzW3BhY2tldC50eXBlXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb250ZW50QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHRCdWZmZXJbaSsxXSA9IGNvbnRlbnRBcnJheVtpXTtcbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayhyZXN1bHRCdWZmZXIuYnVmZmVyKTtcbn1cblxuZnVuY3Rpb24gZW5jb2RlQmxvYkFzQXJyYXlCdWZmZXIocGFja2V0LCBzdXBwb3J0c0JpbmFyeSwgY2FsbGJhY2spIHtcbiAgaWYgKCFzdXBwb3J0c0JpbmFyeSkge1xuICAgIHJldHVybiBleHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldChwYWNrZXQsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHsgdHlwZTogcGFja2V0LnR5cGUsIGRhdGE6IGZyLnJlc3VsdCB9LCBzdXBwb3J0c0JpbmFyeSwgdHJ1ZSwgY2FsbGJhY2spO1xuICB9O1xuICByZXR1cm4gZnIucmVhZEFzQXJyYXlCdWZmZXIocGFja2V0LmRhdGEpO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVCbG9iKHBhY2tldCwgc3VwcG9ydHNCaW5hcnksIGNhbGxiYWNrKSB7XG4gIGlmICghc3VwcG9ydHNCaW5hcnkpIHtcbiAgICByZXR1cm4gZXhwb3J0cy5lbmNvZGVCYXNlNjRQYWNrZXQocGFja2V0LCBjYWxsYmFjayk7XG4gIH1cblxuICBpZiAoZG9udFNlbmRCbG9icykge1xuICAgIHJldHVybiBlbmNvZGVCbG9iQXNBcnJheUJ1ZmZlcihwYWNrZXQsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjayk7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gIGxlbmd0aFswXSA9IHBhY2tldHNbcGFja2V0LnR5cGVdO1xuICB2YXIgYmxvYiA9IG5ldyBCbG9iKFtsZW5ndGguYnVmZmVyLCBwYWNrZXQuZGF0YV0pO1xuXG4gIHJldHVybiBjYWxsYmFjayhibG9iKTtcbn1cblxuLyoqXG4gKiBFbmNvZGVzIGEgcGFja2V0IHdpdGggYmluYXJ5IGRhdGEgaW4gYSBiYXNlNjQgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCwgaGFzIGB0eXBlYCBhbmQgYGRhdGFgXG4gKiBAcmV0dXJuIHtTdHJpbmd9IGJhc2U2NCBlbmNvZGVkIG1lc3NhZ2VcbiAqL1xuXG5leHBvcnRzLmVuY29kZUJhc2U2NFBhY2tldCA9IGZ1bmN0aW9uKHBhY2tldCwgY2FsbGJhY2spIHtcbiAgdmFyIG1lc3NhZ2UgPSAnYicgKyBleHBvcnRzLnBhY2tldHNbcGFja2V0LnR5cGVdO1xuICBpZiAodHlwZW9mIEJsb2IgIT09ICd1bmRlZmluZWQnICYmIHBhY2tldC5kYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgIHZhciBmciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgZnIub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYjY0ID0gZnIucmVzdWx0LnNwbGl0KCcsJylbMV07XG4gICAgICBjYWxsYmFjayhtZXNzYWdlICsgYjY0KTtcbiAgICB9O1xuICAgIHJldHVybiBmci5yZWFkQXNEYXRhVVJMKHBhY2tldC5kYXRhKTtcbiAgfVxuXG4gIHZhciBiNjRkYXRhO1xuICB0cnkge1xuICAgIGI2NGRhdGEgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KHBhY2tldC5kYXRhKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBpUGhvbmUgU2FmYXJpIGRvZXNuJ3QgbGV0IHlvdSBhcHBseSB3aXRoIHR5cGVkIGFycmF5c1xuICAgIHZhciB0eXBlZCA9IG5ldyBVaW50OEFycmF5KHBhY2tldC5kYXRhKTtcbiAgICB2YXIgYmFzaWMgPSBuZXcgQXJyYXkodHlwZWQubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBiYXNpY1tpXSA9IHR5cGVkW2ldO1xuICAgIH1cbiAgICBiNjRkYXRhID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBiYXNpYyk7XG4gIH1cbiAgbWVzc2FnZSArPSBidG9hKGI2NGRhdGEpO1xuICByZXR1cm4gY2FsbGJhY2sobWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIERlY29kZXMgYSBwYWNrZXQuIENoYW5nZXMgZm9ybWF0IHRvIEJsb2IgaWYgcmVxdWVzdGVkLlxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBgdHlwZWAgYW5kIGBkYXRhYCAoaWYgYW55KVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVQYWNrZXQgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgdXRmOGRlY29kZSkge1xuICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxuICAvLyBTdHJpbmcgZGF0YVxuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKGRhdGEuY2hhckF0KDApID09PSAnYicpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmRlY29kZUJhc2U2NFBhY2tldChkYXRhLnN1YnN0cigxKSwgYmluYXJ5VHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKHV0ZjhkZWNvZGUpIHtcbiAgICAgIGRhdGEgPSB0cnlEZWNvZGUoZGF0YSk7XG4gICAgICBpZiAoZGF0YSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGVycjtcbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHR5cGUgPSBkYXRhLmNoYXJBdCgwKTtcblxuICAgIGlmIChOdW1iZXIodHlwZSkgIT0gdHlwZSB8fCAhcGFja2V0c2xpc3RbdHlwZV0pIHtcbiAgICAgIHJldHVybiBlcnI7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogcGFja2V0c2xpc3RbdHlwZV0sIGRhdGE6IGRhdGEuc3Vic3RyaW5nKDEpIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IHBhY2tldHNsaXN0W3R5cGVdIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGFzQXJyYXkgPSBuZXcgVWludDhBcnJheShkYXRhKTtcbiAgdmFyIHR5cGUgPSBhc0FycmF5WzBdO1xuICB2YXIgcmVzdCA9IHNsaWNlQnVmZmVyKGRhdGEsIDEpO1xuICBpZiAoQmxvYiAmJiBiaW5hcnlUeXBlID09PSAnYmxvYicpIHtcbiAgICByZXN0ID0gbmV3IEJsb2IoW3Jlc3RdKTtcbiAgfVxuICByZXR1cm4geyB0eXBlOiBwYWNrZXRzbGlzdFt0eXBlXSwgZGF0YTogcmVzdCB9O1xufTtcblxuZnVuY3Rpb24gdHJ5RGVjb2RlKGRhdGEpIHtcbiAgdHJ5IHtcbiAgICBkYXRhID0gdXRmOC5kZWNvZGUoZGF0YSwgeyBzdHJpY3Q6IGZhbHNlIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIERlY29kZXMgYSBwYWNrZXQgZW5jb2RlZCBpbiBhIGJhc2U2NCBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYmFzZTY0IGVuY29kZWQgbWVzc2FnZVxuICogQHJldHVybiB7T2JqZWN0fSB3aXRoIGB0eXBlYCBhbmQgYGRhdGFgIChpZiBhbnkpXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVCYXNlNjRQYWNrZXQgPSBmdW5jdGlvbihtc2csIGJpbmFyeVR5cGUpIHtcbiAgdmFyIHR5cGUgPSBwYWNrZXRzbGlzdFttc2cuY2hhckF0KDApXTtcbiAgaWYgKCFiYXNlNjRlbmNvZGVyKSB7XG4gICAgcmV0dXJuIHsgdHlwZTogdHlwZSwgZGF0YTogeyBiYXNlNjQ6IHRydWUsIGRhdGE6IG1zZy5zdWJzdHIoMSkgfSB9O1xuICB9XG5cbiAgdmFyIGRhdGEgPSBiYXNlNjRlbmNvZGVyLmRlY29kZShtc2cuc3Vic3RyKDEpKTtcblxuICBpZiAoYmluYXJ5VHlwZSA9PT0gJ2Jsb2InICYmIEJsb2IpIHtcbiAgICBkYXRhID0gbmV3IEJsb2IoW2RhdGFdKTtcbiAgfVxuXG4gIHJldHVybiB7IHR5cGU6IHR5cGUsIGRhdGE6IGRhdGEgfTtcbn07XG5cbi8qKlxuICogRW5jb2RlcyBtdWx0aXBsZSBtZXNzYWdlcyAocGF5bG9hZCkuXG4gKlxuICogICAgIDxsZW5ndGg+OmRhdGFcbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqICAgICAxMTpoZWxsbyB3b3JsZDI6aGlcbiAqXG4gKiBJZiBhbnkgY29udGVudHMgYXJlIGJpbmFyeSwgdGhleSB3aWxsIGJlIGVuY29kZWQgYXMgYmFzZTY0IHN0cmluZ3MuIEJhc2U2NFxuICogZW5jb2RlZCBzdHJpbmdzIGFyZSBtYXJrZWQgd2l0aCBhIGIgYmVmb3JlIHRoZSBsZW5ndGggc3BlY2lmaWVyXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYXlsb2FkID0gZnVuY3Rpb24gKHBhY2tldHMsIHN1cHBvcnRzQmluYXJ5LCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIHN1cHBvcnRzQmluYXJ5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBzdXBwb3J0c0JpbmFyeTtcbiAgICBzdXBwb3J0c0JpbmFyeSA9IG51bGw7XG4gIH1cblxuICB2YXIgaXNCaW5hcnkgPSBoYXNCaW5hcnkocGFja2V0cyk7XG5cbiAgaWYgKHN1cHBvcnRzQmluYXJ5ICYmIGlzQmluYXJ5KSB7XG4gICAgaWYgKEJsb2IgJiYgIWRvbnRTZW5kQmxvYnMpIHtcbiAgICAgIHJldHVybiBleHBvcnRzLmVuY29kZVBheWxvYWRBc0Jsb2IocGFja2V0cywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBleHBvcnRzLmVuY29kZVBheWxvYWRBc0FycmF5QnVmZmVyKHBhY2tldHMsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmICghcGFja2V0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2soJzA6Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRMZW5ndGhIZWFkZXIobWVzc2FnZSkge1xuICAgIHJldHVybiBtZXNzYWdlLmxlbmd0aCArICc6JyArIG1lc3NhZ2U7XG4gIH1cblxuICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsICFpc0JpbmFyeSA/IGZhbHNlIDogc3VwcG9ydHNCaW5hcnksIGZhbHNlLCBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICBkb25lQ2FsbGJhY2sobnVsbCwgc2V0TGVuZ3RoSGVhZGVyKG1lc3NhZ2UpKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHRzLmpvaW4oJycpKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEFzeW5jIGFycmF5IG1hcCB1c2luZyBhZnRlclxuICovXG5cbmZ1bmN0aW9uIG1hcChhcnksIGVhY2gsIGRvbmUpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShhcnkubGVuZ3RoKTtcbiAgdmFyIG5leHQgPSBhZnRlcihhcnkubGVuZ3RoLCBkb25lKTtcblxuICB2YXIgZWFjaFdpdGhJbmRleCA9IGZ1bmN0aW9uKGksIGVsLCBjYikge1xuICAgIGVhY2goZWwsIGZ1bmN0aW9uKGVycm9yLCBtc2cpIHtcbiAgICAgIHJlc3VsdFtpXSA9IG1zZztcbiAgICAgIGNiKGVycm9yLCByZXN1bHQpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZWFjaFdpdGhJbmRleChpLCBhcnlbaV0sIG5leHQpO1xuICB9XG59XG5cbi8qXG4gKiBEZWNvZGVzIGRhdGEgd2hlbiBhIHBheWxvYWQgaXMgbWF5YmUgZXhwZWN0ZWQuIFBvc3NpYmxlIGJpbmFyeSBjb250ZW50cyBhcmVcbiAqIGRlY29kZWQgZnJvbSB0aGVpciBiYXNlNjQgcmVwcmVzZW50YXRpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSwgY2FsbGJhY2sgbWV0aG9kXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb2RlUGF5bG9hZCA9IGZ1bmN0aW9uIChkYXRhLCBiaW5hcnlUeXBlLCBjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZGVjb2RlUGF5bG9hZEFzQmluYXJ5KGRhdGEsIGJpbmFyeVR5cGUsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYmluYXJ5VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNhbGxiYWNrID0gYmluYXJ5VHlwZTtcbiAgICBiaW5hcnlUeXBlID0gbnVsbDtcbiAgfVxuXG4gIHZhciBwYWNrZXQ7XG4gIGlmIChkYXRhID09PSAnJykge1xuICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgfVxuXG4gIHZhciBsZW5ndGggPSAnJywgbiwgbXNnO1xuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gZGF0YS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICB2YXIgY2hyID0gZGF0YS5jaGFyQXQoaSk7XG5cbiAgICBpZiAoY2hyICE9PSAnOicpIHtcbiAgICAgIGxlbmd0aCArPSBjaHI7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAobGVuZ3RoID09PSAnJyB8fCAobGVuZ3RoICE9IChuID0gTnVtYmVyKGxlbmd0aCkpKSkge1xuICAgICAgLy8gcGFyc2VyIGVycm9yIC0gaWdub3JpbmcgcGF5bG9hZFxuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgfVxuXG4gICAgbXNnID0gZGF0YS5zdWJzdHIoaSArIDEsIG4pO1xuXG4gICAgaWYgKGxlbmd0aCAhPSBtc2cubGVuZ3RoKSB7XG4gICAgICAvLyBwYXJzZXIgZXJyb3IgLSBpZ25vcmluZyBwYXlsb2FkXG4gICAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgICB9XG5cbiAgICBpZiAobXNnLmxlbmd0aCkge1xuICAgICAgcGFja2V0ID0gZXhwb3J0cy5kZWNvZGVQYWNrZXQobXNnLCBiaW5hcnlUeXBlLCBmYWxzZSk7XG5cbiAgICAgIGlmIChlcnIudHlwZSA9PT0gcGFja2V0LnR5cGUgJiYgZXJyLmRhdGEgPT09IHBhY2tldC5kYXRhKSB7XG4gICAgICAgIC8vIHBhcnNlciBlcnJvciBpbiBpbmRpdmlkdWFsIHBhY2tldCAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKGVyciwgMCwgMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXQgPSBjYWxsYmFjayhwYWNrZXQsIGkgKyBuLCBsKTtcbiAgICAgIGlmIChmYWxzZSA9PT0gcmV0KSByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gYWR2YW5jZSBjdXJzb3JcbiAgICBpICs9IG47XG4gICAgbGVuZ3RoID0gJyc7XG4gIH1cblxuICBpZiAobGVuZ3RoICE9PSAnJykge1xuICAgIC8vIHBhcnNlciBlcnJvciAtIGlnbm9yaW5nIHBheWxvYWRcbiAgICByZXR1cm4gY2FsbGJhY2soZXJyLCAwLCAxKTtcbiAgfVxuXG59O1xuXG4vKipcbiAqIEVuY29kZXMgbXVsdGlwbGUgbWVzc2FnZXMgKHBheWxvYWQpIGFzIGJpbmFyeS5cbiAqXG4gKiA8MSA9IGJpbmFyeSwgMCA9IHN0cmluZz48bnVtYmVyIGZyb20gMC05PjxudW1iZXIgZnJvbSAwLTk+Wy4uLl08bnVtYmVyXG4gKiAyNTU+PGRhdGE+XG4gKlxuICogRXhhbXBsZTpcbiAqIDEgMyAyNTUgMSAyIDMsIGlmIHRoZSBiaW5hcnkgY29udGVudHMgYXJlIGludGVycHJldGVkIGFzIDggYml0IGludGVnZXJzXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFja2V0c1xuICogQHJldHVybiB7QXJyYXlCdWZmZXJ9IGVuY29kZWQgcGF5bG9hZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5lbmNvZGVQYXlsb2FkQXNBcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKHBhY2tldHMsIGNhbGxiYWNrKSB7XG4gIGlmICghcGFja2V0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2sobmV3IEFycmF5QnVmZmVyKDApKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuY29kZU9uZShwYWNrZXQsIGRvbmVDYWxsYmFjaykge1xuICAgIGV4cG9ydHMuZW5jb2RlUGFja2V0KHBhY2tldCwgdHJ1ZSwgdHJ1ZSwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIGRvbmVDYWxsYmFjayhudWxsLCBkYXRhKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1hcChwYWNrZXRzLCBlbmNvZGVPbmUsIGZ1bmN0aW9uKGVyciwgZW5jb2RlZFBhY2tldHMpIHtcbiAgICB2YXIgdG90YWxMZW5ndGggPSBlbmNvZGVkUGFja2V0cy5yZWR1Y2UoZnVuY3Rpb24oYWNjLCBwKSB7XG4gICAgICB2YXIgbGVuO1xuICAgICAgaWYgKHR5cGVvZiBwID09PSAnc3RyaW5nJyl7XG4gICAgICAgIGxlbiA9IHAubGVuZ3RoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuID0gcC5ieXRlTGVuZ3RoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYyArIGxlbi50b1N0cmluZygpLmxlbmd0aCArIGxlbiArIDI7IC8vIHN0cmluZy9iaW5hcnkgaWRlbnRpZmllciArIHNlcGFyYXRvciA9IDJcbiAgICB9LCAwKTtcblxuICAgIHZhciByZXN1bHRBcnJheSA9IG5ldyBVaW50OEFycmF5KHRvdGFsTGVuZ3RoKTtcblxuICAgIHZhciBidWZmZXJJbmRleCA9IDA7XG4gICAgZW5jb2RlZFBhY2tldHMuZm9yRWFjaChmdW5jdGlvbihwKSB7XG4gICAgICB2YXIgaXNTdHJpbmcgPSB0eXBlb2YgcCA9PT0gJ3N0cmluZyc7XG4gICAgICB2YXIgYWIgPSBwO1xuICAgICAgaWYgKGlzU3RyaW5nKSB7XG4gICAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkocC5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2aWV3W2ldID0gcC5jaGFyQ29kZUF0KGkpO1xuICAgICAgICB9XG4gICAgICAgIGFiID0gdmlldy5idWZmZXI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc1N0cmluZykgeyAvLyBub3QgdHJ1ZSBiaW5hcnlcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSAwO1xuICAgICAgfSBlbHNlIHsgLy8gdHJ1ZSBiaW5hcnlcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSAxO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGVuU3RyID0gYWIuYnl0ZUxlbmd0aC50b1N0cmluZygpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5TdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSBwYXJzZUludChsZW5TdHJbaV0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0QXJyYXlbYnVmZmVySW5kZXgrK10gPSAyNTU7XG5cbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkoYWIpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2aWV3Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJlc3VsdEFycmF5W2J1ZmZlckluZGV4KytdID0gdmlld1tpXTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjYWxsYmFjayhyZXN1bHRBcnJheS5idWZmZXIpO1xuICB9KTtcbn07XG5cbi8qKlxuICogRW5jb2RlIGFzIEJsb2JcbiAqL1xuXG5leHBvcnRzLmVuY29kZVBheWxvYWRBc0Jsb2IgPSBmdW5jdGlvbihwYWNrZXRzLCBjYWxsYmFjaykge1xuICBmdW5jdGlvbiBlbmNvZGVPbmUocGFja2V0LCBkb25lQ2FsbGJhY2spIHtcbiAgICBleHBvcnRzLmVuY29kZVBhY2tldChwYWNrZXQsIHRydWUsIHRydWUsIGZ1bmN0aW9uKGVuY29kZWQpIHtcbiAgICAgIHZhciBiaW5hcnlJZGVudGlmaWVyID0gbmV3IFVpbnQ4QXJyYXkoMSk7XG4gICAgICBiaW5hcnlJZGVudGlmaWVyWzBdID0gMTtcbiAgICAgIGlmICh0eXBlb2YgZW5jb2RlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShlbmNvZGVkLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW5jb2RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZpZXdbaV0gPSBlbmNvZGVkLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgZW5jb2RlZCA9IHZpZXcuYnVmZmVyO1xuICAgICAgICBiaW5hcnlJZGVudGlmaWVyWzBdID0gMDtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbiA9IChlbmNvZGVkIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpXG4gICAgICAgID8gZW5jb2RlZC5ieXRlTGVuZ3RoXG4gICAgICAgIDogZW5jb2RlZC5zaXplO1xuXG4gICAgICB2YXIgbGVuU3RyID0gbGVuLnRvU3RyaW5nKCk7XG4gICAgICB2YXIgbGVuZ3RoQXJ5ID0gbmV3IFVpbnQ4QXJyYXkobGVuU3RyLmxlbmd0aCArIDEpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5TdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGVuZ3RoQXJ5W2ldID0gcGFyc2VJbnQobGVuU3RyW2ldKTtcbiAgICAgIH1cbiAgICAgIGxlbmd0aEFyeVtsZW5TdHIubGVuZ3RoXSA9IDI1NTtcblxuICAgICAgaWYgKEJsb2IpIHtcbiAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbYmluYXJ5SWRlbnRpZmllci5idWZmZXIsIGxlbmd0aEFyeS5idWZmZXIsIGVuY29kZWRdKTtcbiAgICAgICAgZG9uZUNhbGxiYWNrKG51bGwsIGJsb2IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbWFwKHBhY2tldHMsIGVuY29kZU9uZSwgZnVuY3Rpb24oZXJyLCByZXN1bHRzKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrKG5ldyBCbG9iKHJlc3VsdHMpKTtcbiAgfSk7XG59O1xuXG4vKlxuICogRGVjb2RlcyBkYXRhIHdoZW4gYSBwYXlsb2FkIGlzIG1heWJlIGV4cGVjdGVkLiBTdHJpbmdzIGFyZSBkZWNvZGVkIGJ5XG4gKiBpbnRlcnByZXRpbmcgZWFjaCBieXRlIGFzIGEga2V5IGNvZGUgZm9yIGVudHJpZXMgbWFya2VkIHRvIHN0YXJ0IHdpdGggMC4gU2VlXG4gKiBkZXNjcmlwdGlvbiBvZiBlbmNvZGVQYXlsb2FkQXNCaW5hcnlcbiAqXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBkYXRhLCBjYWxsYmFjayBtZXRob2RcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5kZWNvZGVQYXlsb2FkQXNCaW5hcnkgPSBmdW5jdGlvbiAoZGF0YSwgYmluYXJ5VHlwZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBiaW5hcnlUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2FsbGJhY2sgPSBiaW5hcnlUeXBlO1xuICAgIGJpbmFyeVR5cGUgPSBudWxsO1xuICB9XG5cbiAgdmFyIGJ1ZmZlclRhaWwgPSBkYXRhO1xuICB2YXIgYnVmZmVycyA9IFtdO1xuXG4gIHdoaWxlIChidWZmZXJUYWlsLmJ5dGVMZW5ndGggPiAwKSB7XG4gICAgdmFyIHRhaWxBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ1ZmZlclRhaWwpO1xuICAgIHZhciBpc1N0cmluZyA9IHRhaWxBcnJheVswXSA9PT0gMDtcbiAgICB2YXIgbXNnTGVuZ3RoID0gJyc7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgOyBpKyspIHtcbiAgICAgIGlmICh0YWlsQXJyYXlbaV0gPT09IDI1NSkgYnJlYWs7XG5cbiAgICAgIC8vIDMxMCA9IGNoYXIgbGVuZ3RoIG9mIE51bWJlci5NQVhfVkFMVUVcbiAgICAgIGlmIChtc2dMZW5ndGgubGVuZ3RoID4gMzEwKSB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIsIDAsIDEpO1xuICAgICAgfVxuXG4gICAgICBtc2dMZW5ndGggKz0gdGFpbEFycmF5W2ldO1xuICAgIH1cblxuICAgIGJ1ZmZlclRhaWwgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCAyICsgbXNnTGVuZ3RoLmxlbmd0aCk7XG4gICAgbXNnTGVuZ3RoID0gcGFyc2VJbnQobXNnTGVuZ3RoKTtcblxuICAgIHZhciBtc2cgPSBzbGljZUJ1ZmZlcihidWZmZXJUYWlsLCAwLCBtc2dMZW5ndGgpO1xuICAgIGlmIChpc1N0cmluZykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbXNnID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBuZXcgVWludDhBcnJheShtc2cpKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaVBob25lIFNhZmFyaSBkb2Vzbid0IGxldCB5b3UgYXBwbHkgdG8gdHlwZWQgYXJyYXlzXG4gICAgICAgIHZhciB0eXBlZCA9IG5ldyBVaW50OEFycmF5KG1zZyk7XG4gICAgICAgIG1zZyA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHR5cGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbXNnICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodHlwZWRbaV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgYnVmZmVycy5wdXNoKG1zZyk7XG4gICAgYnVmZmVyVGFpbCA9IHNsaWNlQnVmZmVyKGJ1ZmZlclRhaWwsIG1zZ0xlbmd0aCk7XG4gIH1cblxuICB2YXIgdG90YWwgPSBidWZmZXJzLmxlbmd0aDtcbiAgYnVmZmVycy5mb3JFYWNoKGZ1bmN0aW9uKGJ1ZmZlciwgaSkge1xuICAgIGNhbGxiYWNrKGV4cG9ydHMuZGVjb2RlUGFja2V0KGJ1ZmZlciwgYmluYXJ5VHlwZSwgdHJ1ZSksIGksIHRvdGFsKTtcbiAgfSk7XG59O1xuIiwiLyoqXHJcbiAqIENvbXBpbGVzIGEgcXVlcnlzdHJpbmdcclxuICogUmV0dXJucyBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdFxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdH1cclxuICogQGFwaSBwcml2YXRlXHJcbiAqL1xyXG5cclxuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAob2JqKSB7XHJcbiAgdmFyIHN0ciA9ICcnO1xyXG5cclxuICBmb3IgKHZhciBpIGluIG9iaikge1xyXG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xyXG4gICAgICBpZiAoc3RyLmxlbmd0aCkgc3RyICs9ICcmJztcclxuICAgICAgc3RyICs9IGVuY29kZVVSSUNvbXBvbmVudChpKSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChvYmpbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0cjtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBQYXJzZXMgYSBzaW1wbGUgcXVlcnlzdHJpbmcgaW50byBhbiBvYmplY3RcclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IHFzXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24ocXMpe1xyXG4gIHZhciBxcnkgPSB7fTtcclxuICB2YXIgcGFpcnMgPSBxcy5zcGxpdCgnJicpO1xyXG4gIGZvciAodmFyIGkgPSAwLCBsID0gcGFpcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICB2YXIgcGFpciA9IHBhaXJzW2ldLnNwbGl0KCc9Jyk7XHJcbiAgICBxcnlbZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMF0pXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcclxuICB9XHJcbiAgcmV0dXJuIHFyeTtcclxufTtcclxuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGEsIGIpe1xuICB2YXIgZm4gPSBmdW5jdGlvbigpe307XG4gIGZuLnByb3RvdHlwZSA9IGIucHJvdG90eXBlO1xuICBhLnByb3RvdHlwZSA9IG5ldyBmbjtcbiAgYS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBhO1xufTsiLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgYmluYXJ5ID0gcmVxdWlyZSgnLi9iaW5hcnknKTtcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xudmFyIGlzQnVmID0gcmVxdWlyZSgnLi9pcy1idWZmZXInKTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5wcm90b2NvbCA9IDQ7XG5cbi8qKlxuICogUGFja2V0IHR5cGVzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy50eXBlcyA9IFtcbiAgJ0NPTk5FQ1QnLFxuICAnRElTQ09OTkVDVCcsXG4gICdFVkVOVCcsXG4gICdBQ0snLFxuICAnRVJST1InLFxuICAnQklOQVJZX0VWRU5UJyxcbiAgJ0JJTkFSWV9BQ0snXG5dO1xuXG4vKipcbiAqIFBhY2tldCB0eXBlIGBjb25uZWN0YC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuQ09OTkVDVCA9IDA7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGRpc2Nvbm5lY3RgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5ESVNDT05ORUNUID0gMTtcblxuLyoqXG4gKiBQYWNrZXQgdHlwZSBgZXZlbnRgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5FVkVOVCA9IDI7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGFja2AuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkFDSyA9IDM7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGVycm9yYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuRVJST1IgPSA0O1xuXG4vKipcbiAqIFBhY2tldCB0eXBlICdiaW5hcnkgZXZlbnQnXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkJJTkFSWV9FVkVOVCA9IDU7XG5cbi8qKlxuICogUGFja2V0IHR5cGUgYGJpbmFyeSBhY2tgLiBGb3IgYWNrcyB3aXRoIGJpbmFyeSBhcmd1bWVudHMuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkJJTkFSWV9BQ0sgPSA2O1xuXG4vKipcbiAqIEVuY29kZXIgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkVuY29kZXIgPSBFbmNvZGVyO1xuXG4vKipcbiAqIERlY29kZXIgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLkRlY29kZXIgPSBEZWNvZGVyO1xuXG4vKipcbiAqIEEgc29ja2V0LmlvIEVuY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVuY29kZXIoKSB7fVxuXG52YXIgRVJST1JfUEFDS0VUID0gZXhwb3J0cy5FUlJPUiArICdcImVuY29kZSBlcnJvclwiJztcblxuLyoqXG4gKiBFbmNvZGUgYSBwYWNrZXQgYXMgYSBzaW5nbGUgc3RyaW5nIGlmIG5vbi1iaW5hcnksIG9yIGFzIGFcbiAqIGJ1ZmZlciBzZXF1ZW5jZSwgZGVwZW5kaW5nIG9uIHBhY2tldCB0eXBlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBwYWNrZXQgb2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayAtIGZ1bmN0aW9uIHRvIGhhbmRsZSBlbmNvZGluZ3MgKGxpa2VseSBlbmdpbmUud3JpdGUpXG4gKiBAcmV0dXJuIENhbGxzIGNhbGxiYWNrIHdpdGggQXJyYXkgb2YgZW5jb2RpbmdzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVuY29kZXIucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uKG9iaiwgY2FsbGJhY2spe1xuICBkZWJ1ZygnZW5jb2RpbmcgcGFja2V0ICVqJywgb2JqKTtcblxuICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IG9iai50eXBlIHx8IGV4cG9ydHMuQklOQVJZX0FDSyA9PT0gb2JqLnR5cGUpIHtcbiAgICBlbmNvZGVBc0JpbmFyeShvYmosIGNhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZW5jb2RpbmcgPSBlbmNvZGVBc1N0cmluZyhvYmopO1xuICAgIGNhbGxiYWNrKFtlbmNvZGluZ10pO1xuICB9XG59O1xuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgYXMgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge1N0cmluZ30gZW5jb2RlZFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZW5jb2RlQXNTdHJpbmcob2JqKSB7XG5cbiAgLy8gZmlyc3QgaXMgdHlwZVxuICB2YXIgc3RyID0gJycgKyBvYmoudHlwZTtcblxuICAvLyBhdHRhY2htZW50cyBpZiB3ZSBoYXZlIHRoZW1cbiAgaWYgKGV4cG9ydHMuQklOQVJZX0VWRU5UID09PSBvYmoudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IG9iai50eXBlKSB7XG4gICAgc3RyICs9IG9iai5hdHRhY2htZW50cyArICctJztcbiAgfVxuXG4gIC8vIGlmIHdlIGhhdmUgYSBuYW1lc3BhY2Ugb3RoZXIgdGhhbiBgL2BcbiAgLy8gd2UgYXBwZW5kIGl0IGZvbGxvd2VkIGJ5IGEgY29tbWEgYCxgXG4gIGlmIChvYmoubnNwICYmICcvJyAhPT0gb2JqLm5zcCkge1xuICAgIHN0ciArPSBvYmoubnNwICsgJywnO1xuICB9XG5cbiAgLy8gaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgdGhlIGlkXG4gIGlmIChudWxsICE9IG9iai5pZCkge1xuICAgIHN0ciArPSBvYmouaWQ7XG4gIH1cblxuICAvLyBqc29uIGRhdGFcbiAgaWYgKG51bGwgIT0gb2JqLmRhdGEpIHtcbiAgICB2YXIgcGF5bG9hZCA9IHRyeVN0cmluZ2lmeShvYmouZGF0YSk7XG4gICAgaWYgKHBheWxvYWQgIT09IGZhbHNlKSB7XG4gICAgICBzdHIgKz0gcGF5bG9hZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIEVSUk9SX1BBQ0tFVDtcbiAgICB9XG4gIH1cblxuICBkZWJ1ZygnZW5jb2RlZCAlaiBhcyAlcycsIG9iaiwgc3RyKTtcbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gdHJ5U3RyaW5naWZ5KHN0cikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzdHIpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuY29kZSBwYWNrZXQgYXMgJ2J1ZmZlciBzZXF1ZW5jZScgYnkgcmVtb3ZpbmcgYmxvYnMsIGFuZFxuICogZGVjb25zdHJ1Y3RpbmcgcGFja2V0IGludG8gb2JqZWN0IHdpdGggcGxhY2Vob2xkZXJzIGFuZFxuICogYSBsaXN0IG9mIGJ1ZmZlcnMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQHJldHVybiB7QnVmZmVyfSBlbmNvZGVkXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBlbmNvZGVBc0JpbmFyeShvYmosIGNhbGxiYWNrKSB7XG5cbiAgZnVuY3Rpb24gd3JpdGVFbmNvZGluZyhibG9ibGVzc0RhdGEpIHtcbiAgICB2YXIgZGVjb25zdHJ1Y3Rpb24gPSBiaW5hcnkuZGVjb25zdHJ1Y3RQYWNrZXQoYmxvYmxlc3NEYXRhKTtcbiAgICB2YXIgcGFjayA9IGVuY29kZUFzU3RyaW5nKGRlY29uc3RydWN0aW9uLnBhY2tldCk7XG4gICAgdmFyIGJ1ZmZlcnMgPSBkZWNvbnN0cnVjdGlvbi5idWZmZXJzO1xuXG4gICAgYnVmZmVycy51bnNoaWZ0KHBhY2spOyAvLyBhZGQgcGFja2V0IGluZm8gdG8gYmVnaW5uaW5nIG9mIGRhdGEgbGlzdFxuICAgIGNhbGxiYWNrKGJ1ZmZlcnMpOyAvLyB3cml0ZSBhbGwgdGhlIGJ1ZmZlcnNcbiAgfVxuXG4gIGJpbmFyeS5yZW1vdmVCbG9icyhvYmosIHdyaXRlRW5jb2RpbmcpO1xufVxuXG4vKipcbiAqIEEgc29ja2V0LmlvIERlY29kZXIgaW5zdGFuY2VcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IGRlY29kZXJcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRGVjb2RlcigpIHtcbiAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbnVsbDtcbn1cblxuLyoqXG4gKiBNaXggaW4gYEVtaXR0ZXJgIHdpdGggRGVjb2Rlci5cbiAqL1xuXG5FbWl0dGVyKERlY29kZXIucHJvdG90eXBlKTtcblxuLyoqXG4gKiBEZWNvZGVzIGFuIGVuY29kZWQgcGFja2V0IHN0cmluZyBpbnRvIHBhY2tldCBKU09OLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBvYmogLSBlbmNvZGVkIHBhY2tldFxuICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRGVjb2Rlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24ob2JqKSB7XG4gIHZhciBwYWNrZXQ7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgIHBhY2tldCA9IGRlY29kZVN0cmluZyhvYmopO1xuICAgIGlmIChleHBvcnRzLkJJTkFSWV9FVkVOVCA9PT0gcGFja2V0LnR5cGUgfHwgZXhwb3J0cy5CSU5BUllfQUNLID09PSBwYWNrZXQudHlwZSkgeyAvLyBiaW5hcnkgcGFja2V0J3MganNvblxuICAgICAgdGhpcy5yZWNvbnN0cnVjdG9yID0gbmV3IEJpbmFyeVJlY29uc3RydWN0b3IocGFja2V0KTtcblxuICAgICAgLy8gbm8gYXR0YWNobWVudHMsIGxhYmVsZWQgYmluYXJ5IGJ1dCBubyBiaW5hcnkgZGF0YSB0byBmb2xsb3dcbiAgICAgIGlmICh0aGlzLnJlY29uc3RydWN0b3IucmVjb25QYWNrLmF0dGFjaG1lbnRzID09PSAwKSB7XG4gICAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHsgLy8gbm9uLWJpbmFyeSBmdWxsIHBhY2tldFxuICAgICAgdGhpcy5lbWl0KCdkZWNvZGVkJywgcGFja2V0KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNCdWYob2JqKSB8fCBvYmouYmFzZTY0KSB7IC8vIHJhdyBiaW5hcnkgZGF0YVxuICAgIGlmICghdGhpcy5yZWNvbnN0cnVjdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2dvdCBiaW5hcnkgZGF0YSB3aGVuIG5vdCByZWNvbnN0cnVjdGluZyBhIHBhY2tldCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYWNrZXQgPSB0aGlzLnJlY29uc3RydWN0b3IudGFrZUJpbmFyeURhdGEob2JqKTtcbiAgICAgIGlmIChwYWNrZXQpIHsgLy8gcmVjZWl2ZWQgZmluYWwgYnVmZmVyXG4gICAgICAgIHRoaXMucmVjb25zdHJ1Y3RvciA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1pdCgnZGVjb2RlZCcsIHBhY2tldCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biB0eXBlOiAnICsgb2JqKTtcbiAgfVxufTtcblxuLyoqXG4gKiBEZWNvZGUgYSBwYWNrZXQgU3RyaW5nIChKU09OIGRhdGEpXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGRlY29kZVN0cmluZyhzdHIpIHtcbiAgdmFyIGkgPSAwO1xuICAvLyBsb29rIHVwIHR5cGVcbiAgdmFyIHAgPSB7XG4gICAgdHlwZTogTnVtYmVyKHN0ci5jaGFyQXQoMCkpXG4gIH07XG5cbiAgaWYgKG51bGwgPT0gZXhwb3J0cy50eXBlc1twLnR5cGVdKSB7XG4gICAgcmV0dXJuIGVycm9yKCd1bmtub3duIHBhY2tldCB0eXBlICcgKyBwLnR5cGUpO1xuICB9XG5cbiAgLy8gbG9vayB1cCBhdHRhY2htZW50cyBpZiB0eXBlIGJpbmFyeVxuICBpZiAoZXhwb3J0cy5CSU5BUllfRVZFTlQgPT09IHAudHlwZSB8fCBleHBvcnRzLkJJTkFSWV9BQ0sgPT09IHAudHlwZSkge1xuICAgIHZhciBidWYgPSAnJztcbiAgICB3aGlsZSAoc3RyLmNoYXJBdCgrK2kpICE9PSAnLScpIHtcbiAgICAgIGJ1ZiArPSBzdHIuY2hhckF0KGkpO1xuICAgICAgaWYgKGkgPT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgfVxuICAgIGlmIChidWYgIT0gTnVtYmVyKGJ1ZikgfHwgc3RyLmNoYXJBdChpKSAhPT0gJy0nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgYXR0YWNobWVudHMnKTtcbiAgICB9XG4gICAgcC5hdHRhY2htZW50cyA9IE51bWJlcihidWYpO1xuICB9XG5cbiAgLy8gbG9vayB1cCBuYW1lc3BhY2UgKGlmIGFueSlcbiAgaWYgKCcvJyA9PT0gc3RyLmNoYXJBdChpICsgMSkpIHtcbiAgICBwLm5zcCA9ICcnO1xuICAgIHdoaWxlICgrK2kpIHtcbiAgICAgIHZhciBjID0gc3RyLmNoYXJBdChpKTtcbiAgICAgIGlmICgnLCcgPT09IGMpIGJyZWFrO1xuICAgICAgcC5uc3AgKz0gYztcbiAgICAgIGlmIChpID09PSBzdHIubGVuZ3RoKSBicmVhaztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcC5uc3AgPSAnLyc7XG4gIH1cblxuICAvLyBsb29rIHVwIGlkXG4gIHZhciBuZXh0ID0gc3RyLmNoYXJBdChpICsgMSk7XG4gIGlmICgnJyAhPT0gbmV4dCAmJiBOdW1iZXIobmV4dCkgPT0gbmV4dCkge1xuICAgIHAuaWQgPSAnJztcbiAgICB3aGlsZSAoKytpKSB7XG4gICAgICB2YXIgYyA9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAobnVsbCA9PSBjIHx8IE51bWJlcihjKSAhPSBjKSB7XG4gICAgICAgIC0taTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwLmlkICs9IHN0ci5jaGFyQXQoaSk7XG4gICAgICBpZiAoaSA9PT0gc3RyLmxlbmd0aCkgYnJlYWs7XG4gICAgfVxuICAgIHAuaWQgPSBOdW1iZXIocC5pZCk7XG4gIH1cblxuICAvLyBsb29rIHVwIGpzb24gZGF0YVxuICBpZiAoc3RyLmNoYXJBdCgrK2kpKSB7XG4gICAgdmFyIHBheWxvYWQgPSB0cnlQYXJzZShzdHIuc3Vic3RyKGkpKTtcbiAgICB2YXIgaXNQYXlsb2FkVmFsaWQgPSBwYXlsb2FkICE9PSBmYWxzZSAmJiAocC50eXBlID09PSBleHBvcnRzLkVSUk9SIHx8IGlzQXJyYXkocGF5bG9hZCkpO1xuICAgIGlmIChpc1BheWxvYWRWYWxpZCkge1xuICAgICAgcC5kYXRhID0gcGF5bG9hZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGVycm9yKCdpbnZhbGlkIHBheWxvYWQnKTtcbiAgICB9XG4gIH1cblxuICBkZWJ1ZygnZGVjb2RlZCAlcyBhcyAlaicsIHN0ciwgcCk7XG4gIHJldHVybiBwO1xufVxuXG5mdW5jdGlvbiB0cnlQYXJzZShzdHIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShzdHIpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIERlYWxsb2NhdGVzIGEgcGFyc2VyJ3MgcmVzb3VyY2VzXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5EZWNvZGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLnJlY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLnJlY29uc3RydWN0b3IuZmluaXNoZWRSZWNvbnN0cnVjdGlvbigpO1xuICB9XG59O1xuXG4vKipcbiAqIEEgbWFuYWdlciBvZiBhIGJpbmFyeSBldmVudCdzICdidWZmZXIgc2VxdWVuY2UnLiBTaG91bGRcbiAqIGJlIGNvbnN0cnVjdGVkIHdoZW5ldmVyIGEgcGFja2V0IG9mIHR5cGUgQklOQVJZX0VWRU5UIGlzXG4gKiBkZWNvZGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEByZXR1cm4ge0JpbmFyeVJlY29uc3RydWN0b3J9IGluaXRpYWxpemVkIHJlY29uc3RydWN0b3JcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIEJpbmFyeVJlY29uc3RydWN0b3IocGFja2V0KSB7XG4gIHRoaXMucmVjb25QYWNrID0gcGFja2V0O1xuICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBNZXRob2QgdG8gYmUgY2FsbGVkIHdoZW4gYmluYXJ5IGRhdGEgcmVjZWl2ZWQgZnJvbSBjb25uZWN0aW9uXG4gKiBhZnRlciBhIEJJTkFSWV9FVkVOVCBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtCdWZmZXIgfCBBcnJheUJ1ZmZlcn0gYmluRGF0YSAtIHRoZSByYXcgYmluYXJ5IGRhdGEgcmVjZWl2ZWRcbiAqIEByZXR1cm4ge251bGwgfCBPYmplY3R9IHJldHVybnMgbnVsbCBpZiBtb3JlIGJpbmFyeSBkYXRhIGlzIGV4cGVjdGVkIG9yXG4gKiAgIGEgcmVjb25zdHJ1Y3RlZCBwYWNrZXQgb2JqZWN0IGlmIGFsbCBidWZmZXJzIGhhdmUgYmVlbiByZWNlaXZlZC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkJpbmFyeVJlY29uc3RydWN0b3IucHJvdG90eXBlLnRha2VCaW5hcnlEYXRhID0gZnVuY3Rpb24oYmluRGF0YSkge1xuICB0aGlzLmJ1ZmZlcnMucHVzaChiaW5EYXRhKTtcbiAgaWYgKHRoaXMuYnVmZmVycy5sZW5ndGggPT09IHRoaXMucmVjb25QYWNrLmF0dGFjaG1lbnRzKSB7IC8vIGRvbmUgd2l0aCBidWZmZXIgbGlzdFxuICAgIHZhciBwYWNrZXQgPSBiaW5hcnkucmVjb25zdHJ1Y3RQYWNrZXQodGhpcy5yZWNvblBhY2ssIHRoaXMuYnVmZmVycyk7XG4gICAgdGhpcy5maW5pc2hlZFJlY29uc3RydWN0aW9uKCk7XG4gICAgcmV0dXJuIHBhY2tldDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbi8qKlxuICogQ2xlYW5zIHVwIGJpbmFyeSBwYWNrZXQgcmVjb25zdHJ1Y3Rpb24gdmFyaWFibGVzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkJpbmFyeVJlY29uc3RydWN0b3IucHJvdG90eXBlLmZpbmlzaGVkUmVjb25zdHJ1Y3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5yZWNvblBhY2sgPSBudWxsO1xuICB0aGlzLmJ1ZmZlcnMgPSBbXTtcbn07XG5cbmZ1bmN0aW9uIGVycm9yKG1zZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGV4cG9ydHMuRVJST1IsXG4gICAgZGF0YTogJ3BhcnNlciBlcnJvcjogJyArIG1zZ1xuICB9O1xufVxuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcclxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuXHJcbiAgaWYgKGNhbGxiYWNrcykge1xyXG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHJldHVybiB7QXJyYXl9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcclxuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XSB8fCBbXTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcclxufTtcclxuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAoYXJyKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGFycikgPT0gJ1tvYmplY3QgQXJyYXldJztcbn07XG4iLCIvKiFcbiAqIFRoZSBidWZmZXIgbW9kdWxlIGZyb20gbm9kZS5qcywgZm9yIHRoZSBicm93c2VyLlxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cblxuJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGllZWU3NTQgPSByZXF1aXJlKCdpZWVlNzU0JylcbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpXG5cbmV4cG9ydHMuQnVmZmVyID0gQnVmZmVyXG5leHBvcnRzLlNsb3dCdWZmZXIgPSBTbG93QnVmZmVyXG5leHBvcnRzLklOU1BFQ1RfTUFYX0JZVEVTID0gNTBcblxuLyoqXG4gKiBJZiBgQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRgOlxuICogICA9PT0gdHJ1ZSAgICBVc2UgVWludDhBcnJheSBpbXBsZW1lbnRhdGlvbiAoZmFzdGVzdClcbiAqICAgPT09IGZhbHNlICAgVXNlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiAobW9zdCBjb21wYXRpYmxlLCBldmVuIElFNilcbiAqXG4gKiBCcm93c2VycyB0aGF0IHN1cHBvcnQgdHlwZWQgYXJyYXlzIGFyZSBJRSAxMCssIEZpcmVmb3ggNCssIENocm9tZSA3KywgU2FmYXJpIDUuMSssXG4gKiBPcGVyYSAxMS42KywgaU9TIDQuMisuXG4gKlxuICogRHVlIHRvIHZhcmlvdXMgYnJvd3NlciBidWdzLCBzb21ldGltZXMgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIHVzZWQgZXZlblxuICogd2hlbiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0eXBlZCBhcnJheXMuXG4gKlxuICogTm90ZTpcbiAqXG4gKiAgIC0gRmlyZWZveCA0LTI5IGxhY2tzIHN1cHBvcnQgZm9yIGFkZGluZyBuZXcgcHJvcGVydGllcyB0byBgVWludDhBcnJheWAgaW5zdGFuY2VzLFxuICogICAgIFNlZTogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njk1NDM4LlxuICpcbiAqICAgLSBDaHJvbWUgOS0xMCBpcyBtaXNzaW5nIHRoZSBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uLlxuICpcbiAqICAgLSBJRTEwIGhhcyBhIGJyb2tlbiBgVHlwZWRBcnJheS5wcm90b3R5cGUuc3ViYXJyYXlgIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYXJyYXlzIG9mXG4gKiAgICAgaW5jb3JyZWN0IGxlbmd0aCBpbiBzb21lIHNpdHVhdGlvbnMuXG5cbiAqIFdlIGRldGVjdCB0aGVzZSBidWdneSBicm93c2VycyBhbmQgc2V0IGBCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVGAgdG8gYGZhbHNlYCBzbyB0aGV5XG4gKiBnZXQgdGhlIE9iamVjdCBpbXBsZW1lbnRhdGlvbiwgd2hpY2ggaXMgc2xvd2VyIGJ1dCBiZWhhdmVzIGNvcnJlY3RseS5cbiAqL1xuQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgPSBnbG9iYWwuVFlQRURfQVJSQVlfU1VQUE9SVCAhPT0gdW5kZWZpbmVkXG4gID8gZ2xvYmFsLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgOiB0eXBlZEFycmF5U3VwcG9ydCgpXG5cbi8qXG4gKiBFeHBvcnQga01heExlbmd0aCBhZnRlciB0eXBlZCBhcnJheSBzdXBwb3J0IGlzIGRldGVybWluZWQuXG4gKi9cbmV4cG9ydHMua01heExlbmd0aCA9IGtNYXhMZW5ndGgoKVxuXG5mdW5jdGlvbiB0eXBlZEFycmF5U3VwcG9ydCAoKSB7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IG5ldyBVaW50OEFycmF5KDEpXG4gICAgYXJyLl9fcHJvdG9fXyA9IHtfX3Byb3RvX186IFVpbnQ4QXJyYXkucHJvdG90eXBlLCBmb286IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDQyIH19XG4gICAgcmV0dXJuIGFyci5mb28oKSA9PT0gNDIgJiYgLy8gdHlwZWQgYXJyYXkgaW5zdGFuY2VzIGNhbiBiZSBhdWdtZW50ZWRcbiAgICAgICAgdHlwZW9mIGFyci5zdWJhcnJheSA9PT0gJ2Z1bmN0aW9uJyAmJiAvLyBjaHJvbWUgOS0xMCBsYWNrIGBzdWJhcnJheWBcbiAgICAgICAgYXJyLnN1YmFycmF5KDEsIDEpLmJ5dGVMZW5ndGggPT09IDAgLy8gaWUxMCBoYXMgYnJva2VuIGBzdWJhcnJheWBcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGtNYXhMZW5ndGggKCkge1xuICByZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlRcbiAgICA/IDB4N2ZmZmZmZmZcbiAgICA6IDB4M2ZmZmZmZmZcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnVmZmVyICh0aGF0LCBsZW5ndGgpIHtcbiAgaWYgKGtNYXhMZW5ndGgoKSA8IGxlbmd0aCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aCcpXG4gIH1cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IG5ldyBVaW50OEFycmF5KGxlbmd0aClcbiAgICB0aGF0Ll9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICAvLyBGYWxsYmFjazogUmV0dXJuIGFuIG9iamVjdCBpbnN0YW5jZSBvZiB0aGUgQnVmZmVyIGNsYXNzXG4gICAgaWYgKHRoYXQgPT09IG51bGwpIHtcbiAgICAgIHRoYXQgPSBuZXcgQnVmZmVyKGxlbmd0aClcbiAgICB9XG4gICAgdGhhdC5sZW5ndGggPSBsZW5ndGhcbiAgfVxuXG4gIHJldHVybiB0aGF0XG59XG5cbi8qKlxuICogVGhlIEJ1ZmZlciBjb25zdHJ1Y3RvciByZXR1cm5zIGluc3RhbmNlcyBvZiBgVWludDhBcnJheWAgdGhhdCBoYXZlIHRoZWlyXG4gKiBwcm90b3R5cGUgY2hhbmdlZCB0byBgQnVmZmVyLnByb3RvdHlwZWAuIEZ1cnRoZXJtb3JlLCBgQnVmZmVyYCBpcyBhIHN1YmNsYXNzIG9mXG4gKiBgVWludDhBcnJheWAsIHNvIHRoZSByZXR1cm5lZCBpbnN0YW5jZXMgd2lsbCBoYXZlIGFsbCB0aGUgbm9kZSBgQnVmZmVyYCBtZXRob2RzXG4gKiBhbmQgdGhlIGBVaW50OEFycmF5YCBtZXRob2RzLiBTcXVhcmUgYnJhY2tldCBub3RhdGlvbiB3b3JrcyBhcyBleHBlY3RlZCAtLSBpdFxuICogcmV0dXJucyBhIHNpbmdsZSBvY3RldC5cbiAqXG4gKiBUaGUgYFVpbnQ4QXJyYXlgIHByb3RvdHlwZSByZW1haW5zIHVubW9kaWZpZWQuXG4gKi9cblxuZnVuY3Rpb24gQnVmZmVyIChhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICBpZiAoIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUICYmICEodGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpIHtcbiAgICByZXR1cm4gbmV3IEJ1ZmZlcihhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIC8vIENvbW1vbiBjYXNlLlxuICBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGVuY29kaW5nT3JPZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZydcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIGFsbG9jVW5zYWZlKHRoaXMsIGFyZylcbiAgfVxuICByZXR1cm4gZnJvbSh0aGlzLCBhcmcsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbn1cblxuQnVmZmVyLnBvb2xTaXplID0gODE5MiAvLyBub3QgdXNlZCBieSB0aGlzIGltcGxlbWVudGF0aW9uXG5cbi8vIFRPRE86IExlZ2FjeSwgbm90IG5lZWRlZCBhbnltb3JlLiBSZW1vdmUgaW4gbmV4dCBtYWpvciB2ZXJzaW9uLlxuQnVmZmVyLl9hdWdtZW50ID0gZnVuY3Rpb24gKGFycikge1xuICBhcnIuX19wcm90b19fID0gQnVmZmVyLnByb3RvdHlwZVxuICByZXR1cm4gYXJyXG59XG5cbmZ1bmN0aW9uIGZyb20gKHRoYXQsIHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsdWUgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBmcm9tQXJyYXlCdWZmZXIodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGZyb21TdHJpbmcodGhhdCwgdmFsdWUsIGVuY29kaW5nT3JPZmZzZXQpXG4gIH1cblxuICByZXR1cm4gZnJvbU9iamVjdCh0aGF0LCB2YWx1ZSlcbn1cblxuLyoqXG4gKiBGdW5jdGlvbmFsbHkgZXF1aXZhbGVudCB0byBCdWZmZXIoYXJnLCBlbmNvZGluZykgYnV0IHRocm93cyBhIFR5cGVFcnJvclxuICogaWYgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBCdWZmZXIuZnJvbShzdHJbLCBlbmNvZGluZ10pXG4gKiBCdWZmZXIuZnJvbShhcnJheSlcbiAqIEJ1ZmZlci5mcm9tKGJ1ZmZlcilcbiAqIEJ1ZmZlci5mcm9tKGFycmF5QnVmZmVyWywgYnl0ZU9mZnNldFssIGxlbmd0aF1dKVxuICoqL1xuQnVmZmVyLmZyb20gPSBmdW5jdGlvbiAodmFsdWUsIGVuY29kaW5nT3JPZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gZnJvbShudWxsLCB2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxufVxuXG5pZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX18gPSBVaW50OEFycmF5LnByb3RvdHlwZVxuICBCdWZmZXIuX19wcm90b19fID0gVWludDhBcnJheVxuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnNwZWNpZXMgJiZcbiAgICAgIEJ1ZmZlcltTeW1ib2wuc3BlY2llc10gPT09IEJ1ZmZlcikge1xuICAgIC8vIEZpeCBzdWJhcnJheSgpIGluIEVTMjAxNi4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZmVyb3NzL2J1ZmZlci9wdWxsLzk3XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJ1ZmZlciwgU3ltYm9sLnNwZWNpZXMsIHtcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRTaXplIChzaXplKSB7XG4gIGlmICh0eXBlb2Ygc2l6ZSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJylcbiAgfSBlbHNlIGlmIChzaXplIDwgMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxsb2MgKHRoYXQsIHNpemUsIGZpbGwsIGVuY29kaW5nKSB7XG4gIGFzc2VydFNpemUoc2l6ZSlcbiAgaWYgKHNpemUgPD0gMCkge1xuICAgIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbiAgfVxuICBpZiAoZmlsbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT25seSBwYXkgYXR0ZW50aW9uIHRvIGVuY29kaW5nIGlmIGl0J3MgYSBzdHJpbmcuIFRoaXNcbiAgICAvLyBwcmV2ZW50cyBhY2NpZGVudGFsbHkgc2VuZGluZyBpbiBhIG51bWJlciB0aGF0IHdvdWxkXG4gICAgLy8gYmUgaW50ZXJwcmV0dGVkIGFzIGEgc3RhcnQgb2Zmc2V0LlxuICAgIHJldHVybiB0eXBlb2YgZW5jb2RpbmcgPT09ICdzdHJpbmcnXG4gICAgICA/IGNyZWF0ZUJ1ZmZlcih0aGF0LCBzaXplKS5maWxsKGZpbGwsIGVuY29kaW5nKVxuICAgICAgOiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSkuZmlsbChmaWxsKVxuICB9XG4gIHJldHVybiBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGZpbGxlZCBCdWZmZXIgaW5zdGFuY2UuXG4gKiBhbGxvYyhzaXplWywgZmlsbFssIGVuY29kaW5nXV0pXG4gKiovXG5CdWZmZXIuYWxsb2MgPSBmdW5jdGlvbiAoc2l6ZSwgZmlsbCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGFsbG9jKG51bGwsIHNpemUsIGZpbGwsIGVuY29kaW5nKVxufVxuXG5mdW5jdGlvbiBhbGxvY1Vuc2FmZSAodGhhdCwgc2l6ZSkge1xuICBhc3NlcnRTaXplKHNpemUpXG4gIHRoYXQgPSBjcmVhdGVCdWZmZXIodGhhdCwgc2l6ZSA8IDAgPyAwIDogY2hlY2tlZChzaXplKSB8IDApXG4gIGlmICghQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSkge1xuICAgICAgdGhhdFtpXSA9IDBcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoYXRcbn1cblxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIEJ1ZmZlcihudW0pLCBieSBkZWZhdWx0IGNyZWF0ZXMgYSBub24temVyby1maWxsZWQgQnVmZmVyIGluc3RhbmNlLlxuICogKi9cbkJ1ZmZlci5hbGxvY1Vuc2FmZSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuLyoqXG4gKiBFcXVpdmFsZW50IHRvIFNsb3dCdWZmZXIobnVtKSwgYnkgZGVmYXVsdCBjcmVhdGVzIGEgbm9uLXplcm8tZmlsbGVkIEJ1ZmZlciBpbnN0YW5jZS5cbiAqL1xuQnVmZmVyLmFsbG9jVW5zYWZlU2xvdyA9IGZ1bmN0aW9uIChzaXplKSB7XG4gIHJldHVybiBhbGxvY1Vuc2FmZShudWxsLCBzaXplKVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nICh0aGF0LCBzdHJpbmcsIGVuY29kaW5nKSB7XG4gIGlmICh0eXBlb2YgZW5jb2RpbmcgIT09ICdzdHJpbmcnIHx8IGVuY29kaW5nID09PSAnJykge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gIH1cblxuICBpZiAoIUJ1ZmZlci5pc0VuY29kaW5nKGVuY29kaW5nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiZW5jb2RpbmdcIiBtdXN0IGJlIGEgdmFsaWQgc3RyaW5nIGVuY29kaW5nJylcbiAgfVxuXG4gIHZhciBsZW5ndGggPSBieXRlTGVuZ3RoKHN0cmluZywgZW5jb2RpbmcpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcblxuICB2YXIgYWN0dWFsID0gdGhhdC53cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuXG4gIGlmIChhY3R1YWwgIT09IGxlbmd0aCkge1xuICAgIC8vIFdyaXRpbmcgYSBoZXggc3RyaW5nLCBmb3IgZXhhbXBsZSwgdGhhdCBjb250YWlucyBpbnZhbGlkIGNoYXJhY3RlcnMgd2lsbFxuICAgIC8vIGNhdXNlIGV2ZXJ5dGhpbmcgYWZ0ZXIgdGhlIGZpcnN0IGludmFsaWQgY2hhcmFjdGVyIHRvIGJlIGlnbm9yZWQuIChlLmcuXG4gICAgLy8gJ2FieHhjZCcgd2lsbCBiZSB0cmVhdGVkIGFzICdhYicpXG4gICAgdGhhdCA9IHRoYXQuc2xpY2UoMCwgYWN0dWFsKVxuICB9XG5cbiAgcmV0dXJuIHRoYXRcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5TGlrZSAodGhhdCwgYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCA8IDAgPyAwIDogY2hlY2tlZChhcnJheS5sZW5ndGgpIHwgMFxuICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbmd0aClcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIHRoYXRbaV0gPSBhcnJheVtpXSAmIDI1NVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheUJ1ZmZlciAodGhhdCwgYXJyYXksIGJ5dGVPZmZzZXQsIGxlbmd0aCkge1xuICBhcnJheS5ieXRlTGVuZ3RoIC8vIHRoaXMgdGhyb3dzIGlmIGBhcnJheWAgaXMgbm90IGEgdmFsaWQgQXJyYXlCdWZmZXJcblxuICBpZiAoYnl0ZU9mZnNldCA8IDAgfHwgYXJyYXkuYnl0ZUxlbmd0aCA8IGJ5dGVPZmZzZXQpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXFwnb2Zmc2V0XFwnIGlzIG91dCBvZiBib3VuZHMnKVxuICB9XG5cbiAgaWYgKGFycmF5LmJ5dGVMZW5ndGggPCBieXRlT2Zmc2V0ICsgKGxlbmd0aCB8fCAwKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdcXCdsZW5ndGhcXCcgaXMgb3V0IG9mIGJvdW5kcycpXG4gIH1cblxuICBpZiAoYnl0ZU9mZnNldCA9PT0gdW5kZWZpbmVkICYmIGxlbmd0aCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSlcbiAgfSBlbHNlIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXksIGJ5dGVPZmZzZXQpXG4gIH0gZWxzZSB7XG4gICAgYXJyYXkgPSBuZXcgVWludDhBcnJheShhcnJheSwgYnl0ZU9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gUmV0dXJuIGFuIGF1Z21lbnRlZCBgVWludDhBcnJheWAgaW5zdGFuY2UsIGZvciBiZXN0IHBlcmZvcm1hbmNlXG4gICAgdGhhdCA9IGFycmF5XG4gICAgdGhhdC5fX3Byb3RvX18gPSBCdWZmZXIucHJvdG90eXBlXG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IFJldHVybiBhbiBvYmplY3QgaW5zdGFuY2Ugb2YgdGhlIEJ1ZmZlciBjbGFzc1xuICAgIHRoYXQgPSBmcm9tQXJyYXlMaWtlKHRoYXQsIGFycmF5KVxuICB9XG4gIHJldHVybiB0aGF0XG59XG5cbmZ1bmN0aW9uIGZyb21PYmplY3QgKHRoYXQsIG9iaikge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKG9iaikpIHtcbiAgICB2YXIgbGVuID0gY2hlY2tlZChvYmoubGVuZ3RoKSB8IDBcbiAgICB0aGF0ID0gY3JlYXRlQnVmZmVyKHRoYXQsIGxlbilcblxuICAgIGlmICh0aGF0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRoYXRcbiAgICB9XG5cbiAgICBvYmouY29weSh0aGF0LCAwLCAwLCBsZW4pXG4gICAgcmV0dXJuIHRoYXRcbiAgfVxuXG4gIGlmIChvYmopIHtcbiAgICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgb2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fCAnbGVuZ3RoJyBpbiBvYmopIHtcbiAgICAgIGlmICh0eXBlb2Ygb2JqLmxlbmd0aCAhPT0gJ251bWJlcicgfHwgaXNuYW4ob2JqLmxlbmd0aCkpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ1ZmZlcih0aGF0LCAwKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UodGhhdCwgb2JqKVxuICAgIH1cblxuICAgIGlmIChvYmoudHlwZSA9PT0gJ0J1ZmZlcicgJiYgaXNBcnJheShvYmouZGF0YSkpIHtcbiAgICAgIHJldHVybiBmcm9tQXJyYXlMaWtlKHRoYXQsIG9iai5kYXRhKVxuICAgIH1cbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcsIEJ1ZmZlciwgQXJyYXlCdWZmZXIsIEFycmF5LCBvciBhcnJheS1saWtlIG9iamVjdC4nKVxufVxuXG5mdW5jdGlvbiBjaGVja2VkIChsZW5ndGgpIHtcbiAgLy8gTm90ZTogY2Fubm90IHVzZSBgbGVuZ3RoIDwga01heExlbmd0aCgpYCBoZXJlIGJlY2F1c2UgdGhhdCBmYWlscyB3aGVuXG4gIC8vIGxlbmd0aCBpcyBOYU4gKHdoaWNoIGlzIG90aGVyd2lzZSBjb2VyY2VkIHRvIHplcm8uKVxuICBpZiAobGVuZ3RoID49IGtNYXhMZW5ndGgoKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdBdHRlbXB0IHRvIGFsbG9jYXRlIEJ1ZmZlciBsYXJnZXIgdGhhbiBtYXhpbXVtICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICdzaXplOiAweCcgKyBrTWF4TGVuZ3RoKCkudG9TdHJpbmcoMTYpICsgJyBieXRlcycpXG4gIH1cbiAgcmV0dXJuIGxlbmd0aCB8IDBcbn1cblxuZnVuY3Rpb24gU2xvd0J1ZmZlciAobGVuZ3RoKSB7XG4gIGlmICgrbGVuZ3RoICE9IGxlbmd0aCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGVxZXFlcVxuICAgIGxlbmd0aCA9IDBcbiAgfVxuICByZXR1cm4gQnVmZmVyLmFsbG9jKCtsZW5ndGgpXG59XG5cbkJ1ZmZlci5pc0J1ZmZlciA9IGZ1bmN0aW9uIGlzQnVmZmVyIChiKSB7XG4gIHJldHVybiAhIShiICE9IG51bGwgJiYgYi5faXNCdWZmZXIpXG59XG5cbkJ1ZmZlci5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAoYSwgYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihhKSB8fCAhQnVmZmVyLmlzQnVmZmVyKGIpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnRzIG11c3QgYmUgQnVmZmVycycpXG4gIH1cblxuICBpZiAoYSA9PT0gYikgcmV0dXJuIDBcblxuICB2YXIgeCA9IGEubGVuZ3RoXG4gIHZhciB5ID0gYi5sZW5ndGhcblxuICBmb3IgKHZhciBpID0gMCwgbGVuID0gTWF0aC5taW4oeCwgeSk7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChhW2ldICE9PSBiW2ldKSB7XG4gICAgICB4ID0gYVtpXVxuICAgICAgeSA9IGJbaV1cbiAgICAgIGJyZWFrXG4gICAgfVxuICB9XG5cbiAgaWYgKHggPCB5KSByZXR1cm4gLTFcbiAgaWYgKHkgPCB4KSByZXR1cm4gMVxuICByZXR1cm4gMFxufVxuXG5CdWZmZXIuaXNFbmNvZGluZyA9IGZ1bmN0aW9uIGlzRW5jb2RpbmcgKGVuY29kaW5nKSB7XG4gIHN3aXRjaCAoU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgY2FzZSAnaGV4JzpcbiAgICBjYXNlICd1dGY4JzpcbiAgICBjYXNlICd1dGYtOCc6XG4gICAgY2FzZSAnYXNjaWknOlxuICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgY2FzZSAnYmluYXJ5JzpcbiAgICBjYXNlICdiYXNlNjQnOlxuICAgIGNhc2UgJ3VjczInOlxuICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICBjYXNlICd1dGYxNmxlJzpcbiAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5CdWZmZXIuY29uY2F0ID0gZnVuY3Rpb24gY29uY2F0IChsaXN0LCBsZW5ndGgpIHtcbiAgaWYgKCFpc0FycmF5KGxpc3QpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJylcbiAgfVxuXG4gIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBCdWZmZXIuYWxsb2MoMClcbiAgfVxuXG4gIHZhciBpXG4gIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgIGxlbmd0aCA9IDBcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgbGVuZ3RoICs9IGxpc3RbaV0ubGVuZ3RoXG4gICAgfVxuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShsZW5ndGgpXG4gIHZhciBwb3MgPSAwXG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGJ1ZiA9IGxpc3RbaV1cbiAgICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihidWYpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKVxuICAgIH1cbiAgICBidWYuY29weShidWZmZXIsIHBvcylcbiAgICBwb3MgKz0gYnVmLmxlbmd0aFxuICB9XG4gIHJldHVybiBidWZmZXJcbn1cblxuZnVuY3Rpb24gYnl0ZUxlbmd0aCAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAoQnVmZmVyLmlzQnVmZmVyKHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nLmxlbmd0aFxuICB9XG4gIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBBcnJheUJ1ZmZlci5pc1ZpZXcgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgIChBcnJheUJ1ZmZlci5pc1ZpZXcoc3RyaW5nKSB8fCBzdHJpbmcgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICByZXR1cm4gc3RyaW5nLmJ5dGVMZW5ndGhcbiAgfVxuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICBzdHJpbmcgPSAnJyArIHN0cmluZ1xuICB9XG5cbiAgdmFyIGxlbiA9IHN0cmluZy5sZW5ndGhcbiAgaWYgKGxlbiA9PT0gMCkgcmV0dXJuIDBcblxuICAvLyBVc2UgYSBmb3IgbG9vcCB0byBhdm9pZCByZWN1cnNpb25cbiAgdmFyIGxvd2VyZWRDYXNlID0gZmFsc2VcbiAgZm9yICg7Oykge1xuICAgIHN3aXRjaCAoZW5jb2RpbmcpIHtcbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgIGNhc2UgJ2xhdGluMSc6XG4gICAgICBjYXNlICdiaW5hcnknOlxuICAgICAgICByZXR1cm4gbGVuXG4gICAgICBjYXNlICd1dGY4JzpcbiAgICAgIGNhc2UgJ3V0Zi04JzpcbiAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGhcbiAgICAgIGNhc2UgJ3VjczInOlxuICAgICAgY2FzZSAndWNzLTInOlxuICAgICAgY2FzZSAndXRmMTZsZSc6XG4gICAgICBjYXNlICd1dGYtMTZsZSc6XG4gICAgICAgIHJldHVybiBsZW4gKiAyXG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gbGVuID4+PiAxXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICByZXR1cm4gYmFzZTY0VG9CeXRlcyhzdHJpbmcpLmxlbmd0aFxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKGxvd2VyZWRDYXNlKSByZXR1cm4gdXRmOFRvQnl0ZXMoc3RyaW5nKS5sZW5ndGggLy8gYXNzdW1lIHV0ZjhcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cbkJ1ZmZlci5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuXG5mdW5jdGlvbiBzbG93VG9TdHJpbmcgKGVuY29kaW5nLCBzdGFydCwgZW5kKSB7XG4gIHZhciBsb3dlcmVkQ2FzZSA9IGZhbHNlXG5cbiAgLy8gTm8gbmVlZCB0byB2ZXJpZnkgdGhhdCBcInRoaXMubGVuZ3RoIDw9IE1BWF9VSU5UMzJcIiBzaW5jZSBpdCdzIGEgcmVhZC1vbmx5XG4gIC8vIHByb3BlcnR5IG9mIGEgdHlwZWQgYXJyYXkuXG5cbiAgLy8gVGhpcyBiZWhhdmVzIG5laXRoZXIgbGlrZSBTdHJpbmcgbm9yIFVpbnQ4QXJyYXkgaW4gdGhhdCB3ZSBzZXQgc3RhcnQvZW5kXG4gIC8vIHRvIHRoZWlyIHVwcGVyL2xvd2VyIGJvdW5kcyBpZiB0aGUgdmFsdWUgcGFzc2VkIGlzIG91dCBvZiByYW5nZS5cbiAgLy8gdW5kZWZpbmVkIGlzIGhhbmRsZWQgc3BlY2lhbGx5IGFzIHBlciBFQ01BLTI2MiA2dGggRWRpdGlvbixcbiAgLy8gU2VjdGlvbiAxMy4zLjMuNyBSdW50aW1lIFNlbWFudGljczogS2V5ZWRCaW5kaW5nSW5pdGlhbGl6YXRpb24uXG4gIGlmIChzdGFydCA9PT0gdW5kZWZpbmVkIHx8IHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gMFxuICB9XG4gIC8vIFJldHVybiBlYXJseSBpZiBzdGFydCA+IHRoaXMubGVuZ3RoLiBEb25lIGhlcmUgdG8gcHJldmVudCBwb3RlbnRpYWwgdWludDMyXG4gIC8vIGNvZXJjaW9uIGZhaWwgYmVsb3cuXG4gIGlmIChzdGFydCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICBpZiAoZW5kID09PSB1bmRlZmluZWQgfHwgZW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICBlbmQgPSB0aGlzLmxlbmd0aFxuICB9XG5cbiAgaWYgKGVuZCA8PSAwKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cblxuICAvLyBGb3JjZSBjb2Vyc2lvbiB0byB1aW50MzIuIFRoaXMgd2lsbCBhbHNvIGNvZXJjZSBmYWxzZXkvTmFOIHZhbHVlcyB0byAwLlxuICBlbmQgPj4+PSAwXG4gIHN0YXJ0ID4+Pj0gMFxuXG4gIGlmIChlbmQgPD0gc3RhcnQpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGlmICghZW5jb2RpbmcpIGVuY29kaW5nID0gJ3V0ZjgnXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBzd2l0Y2ggKGVuY29kaW5nKSB7XG4gICAgICBjYXNlICdoZXgnOlxuICAgICAgICByZXR1cm4gaGV4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAndXRmOCc6XG4gICAgICBjYXNlICd1dGYtOCc6XG4gICAgICAgIHJldHVybiB1dGY4U2xpY2UodGhpcywgc3RhcnQsIGVuZClcblxuICAgICAgY2FzZSAnYXNjaWknOlxuICAgICAgICByZXR1cm4gYXNjaWlTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICdsYXRpbjEnOlxuICAgICAgY2FzZSAnYmluYXJ5JzpcbiAgICAgICAgcmV0dXJuIGxhdGluMVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgIHJldHVybiBiYXNlNjRTbGljZSh0aGlzLCBzdGFydCwgZW5kKVxuXG4gICAgICBjYXNlICd1Y3MyJzpcbiAgICAgIGNhc2UgJ3Vjcy0yJzpcbiAgICAgIGNhc2UgJ3V0ZjE2bGUnOlxuICAgICAgY2FzZSAndXRmLTE2bGUnOlxuICAgICAgICByZXR1cm4gdXRmMTZsZVNsaWNlKHRoaXMsIHN0YXJ0LCBlbmQpXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChsb3dlcmVkQ2FzZSkgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBlbmNvZGluZzogJyArIGVuY29kaW5nKVxuICAgICAgICBlbmNvZGluZyA9IChlbmNvZGluZyArICcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICAgIGxvd2VyZWRDYXNlID0gdHJ1ZVxuICAgIH1cbiAgfVxufVxuXG4vLyBUaGUgcHJvcGVydHkgaXMgdXNlZCBieSBgQnVmZmVyLmlzQnVmZmVyYCBhbmQgYGlzLWJ1ZmZlcmAgKGluIFNhZmFyaSA1LTcpIHRvIGRldGVjdFxuLy8gQnVmZmVyIGluc3RhbmNlcy5cbkJ1ZmZlci5wcm90b3R5cGUuX2lzQnVmZmVyID0gdHJ1ZVxuXG5mdW5jdGlvbiBzd2FwIChiLCBuLCBtKSB7XG4gIHZhciBpID0gYltuXVxuICBiW25dID0gYlttXVxuICBiW21dID0gaVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnN3YXAxNiA9IGZ1bmN0aW9uIHN3YXAxNiAoKSB7XG4gIHZhciBsZW4gPSB0aGlzLmxlbmd0aFxuICBpZiAobGVuICUgMiAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0cycpXG4gIH1cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHN3YXAodGhpcywgaSwgaSArIDEpXG4gIH1cbiAgcmV0dXJuIHRoaXNcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5zd2FwMzIgPSBmdW5jdGlvbiBzd2FwMzIgKCkge1xuICB2YXIgbGVuID0gdGhpcy5sZW5ndGhcbiAgaWYgKGxlbiAlIDQgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDMyLWJpdHMnKVxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICBzd2FwKHRoaXMsIGksIGkgKyAzKVxuICAgIHN3YXAodGhpcywgaSArIDEsIGkgKyAyKVxuICB9XG4gIHJldHVybiB0aGlzXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuc3dhcDY0ID0gZnVuY3Rpb24gc3dhcDY0ICgpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIGlmIChsZW4gJSA4ICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0J1ZmZlciBzaXplIG11c3QgYmUgYSBtdWx0aXBsZSBvZiA2NC1iaXRzJylcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSA4KSB7XG4gICAgc3dhcCh0aGlzLCBpLCBpICsgNylcbiAgICBzd2FwKHRoaXMsIGkgKyAxLCBpICsgNilcbiAgICBzd2FwKHRoaXMsIGkgKyAyLCBpICsgNSlcbiAgICBzd2FwKHRoaXMsIGkgKyAzLCBpICsgNClcbiAgfVxuICByZXR1cm4gdGhpc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGggfCAwXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiAnJ1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHV0ZjhTbGljZSh0aGlzLCAwLCBsZW5ndGgpXG4gIHJldHVybiBzbG93VG9TdHJpbmcuYXBwbHkodGhpcywgYXJndW1lbnRzKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmVxdWFscyA9IGZ1bmN0aW9uIGVxdWFscyAoYikge1xuICBpZiAoIUJ1ZmZlci5pc0J1ZmZlcihiKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlcicpXG4gIGlmICh0aGlzID09PSBiKSByZXR1cm4gdHJ1ZVxuICByZXR1cm4gQnVmZmVyLmNvbXBhcmUodGhpcywgYikgPT09IDBcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0ID0gZnVuY3Rpb24gaW5zcGVjdCAoKSB7XG4gIHZhciBzdHIgPSAnJ1xuICB2YXIgbWF4ID0gZXhwb3J0cy5JTlNQRUNUX01BWF9CWVRFU1xuICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgc3RyID0gdGhpcy50b1N0cmluZygnaGV4JywgMCwgbWF4KS5tYXRjaCgvLnsyfS9nKS5qb2luKCcgJylcbiAgICBpZiAodGhpcy5sZW5ndGggPiBtYXgpIHN0ciArPSAnIC4uLiAnXG4gIH1cbiAgcmV0dXJuICc8QnVmZmVyICcgKyBzdHIgKyAnPidcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlID0gZnVuY3Rpb24gY29tcGFyZSAodGFyZ2V0LCBzdGFydCwgZW5kLCB0aGlzU3RhcnQsIHRoaXNFbmQpIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIodGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXInKVxuICB9XG5cbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdGFydCA9IDBcbiAgfVxuICBpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcbiAgICBlbmQgPSB0YXJnZXQgPyB0YXJnZXQubGVuZ3RoIDogMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXNTdGFydCA9IDBcbiAgfVxuICBpZiAodGhpc0VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpc0VuZCA9IHRoaXMubGVuZ3RoXG4gIH1cblxuICBpZiAoc3RhcnQgPCAwIHx8IGVuZCA+IHRhcmdldC5sZW5ndGggfHwgdGhpc1N0YXJ0IDwgMCB8fCB0aGlzRW5kID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignb3V0IG9mIHJhbmdlIGluZGV4JylcbiAgfVxuXG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCAmJiBzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMFxuICB9XG4gIGlmICh0aGlzU3RhcnQgPj0gdGhpc0VuZCkge1xuICAgIHJldHVybiAtMVxuICB9XG4gIGlmIChzdGFydCA+PSBlbmQpIHtcbiAgICByZXR1cm4gMVxuICB9XG5cbiAgc3RhcnQgPj4+PSAwXG4gIGVuZCA+Pj49IDBcbiAgdGhpc1N0YXJ0ID4+Pj0gMFxuICB0aGlzRW5kID4+Pj0gMFxuXG4gIGlmICh0aGlzID09PSB0YXJnZXQpIHJldHVybiAwXG5cbiAgdmFyIHggPSB0aGlzRW5kIC0gdGhpc1N0YXJ0XG4gIHZhciB5ID0gZW5kIC0gc3RhcnRcbiAgdmFyIGxlbiA9IE1hdGgubWluKHgsIHkpXG5cbiAgdmFyIHRoaXNDb3B5ID0gdGhpcy5zbGljZSh0aGlzU3RhcnQsIHRoaXNFbmQpXG4gIHZhciB0YXJnZXRDb3B5ID0gdGFyZ2V0LnNsaWNlKHN0YXJ0LCBlbmQpXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIGlmICh0aGlzQ29weVtpXSAhPT0gdGFyZ2V0Q29weVtpXSkge1xuICAgICAgeCA9IHRoaXNDb3B5W2ldXG4gICAgICB5ID0gdGFyZ2V0Q29weVtpXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICBpZiAoeCA8IHkpIHJldHVybiAtMVxuICBpZiAoeSA8IHgpIHJldHVybiAxXG4gIHJldHVybiAwXG59XG5cbi8vIEZpbmRzIGVpdGhlciB0aGUgZmlyc3QgaW5kZXggb2YgYHZhbGAgaW4gYGJ1ZmZlcmAgYXQgb2Zmc2V0ID49IGBieXRlT2Zmc2V0YCxcbi8vIE9SIHRoZSBsYXN0IGluZGV4IG9mIGB2YWxgIGluIGBidWZmZXJgIGF0IG9mZnNldCA8PSBgYnl0ZU9mZnNldGAuXG4vL1xuLy8gQXJndW1lbnRzOlxuLy8gLSBidWZmZXIgLSBhIEJ1ZmZlciB0byBzZWFyY2hcbi8vIC0gdmFsIC0gYSBzdHJpbmcsIEJ1ZmZlciwgb3IgbnVtYmVyXG4vLyAtIGJ5dGVPZmZzZXQgLSBhbiBpbmRleCBpbnRvIGBidWZmZXJgOyB3aWxsIGJlIGNsYW1wZWQgdG8gYW4gaW50MzJcbi8vIC0gZW5jb2RpbmcgLSBhbiBvcHRpb25hbCBlbmNvZGluZywgcmVsZXZhbnQgaXMgdmFsIGlzIGEgc3RyaW5nXG4vLyAtIGRpciAtIHRydWUgZm9yIGluZGV4T2YsIGZhbHNlIGZvciBsYXN0SW5kZXhPZlxuZnVuY3Rpb24gYmlkaXJlY3Rpb25hbEluZGV4T2YgKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZywgZGlyKSB7XG4gIC8vIEVtcHR5IGJ1ZmZlciBtZWFucyBubyBtYXRjaFxuICBpZiAoYnVmZmVyLmxlbmd0aCA9PT0gMCkgcmV0dXJuIC0xXG5cbiAgLy8gTm9ybWFsaXplIGJ5dGVPZmZzZXRcbiAgaWYgKHR5cGVvZiBieXRlT2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgIGVuY29kaW5nID0gYnl0ZU9mZnNldFxuICAgIGJ5dGVPZmZzZXQgPSAwXG4gIH0gZWxzZSBpZiAoYnl0ZU9mZnNldCA+IDB4N2ZmZmZmZmYpIHtcbiAgICBieXRlT2Zmc2V0ID0gMHg3ZmZmZmZmZlxuICB9IGVsc2UgaWYgKGJ5dGVPZmZzZXQgPCAtMHg4MDAwMDAwMCkge1xuICAgIGJ5dGVPZmZzZXQgPSAtMHg4MDAwMDAwMFxuICB9XG4gIGJ5dGVPZmZzZXQgPSArYnl0ZU9mZnNldCAgLy8gQ29lcmNlIHRvIE51bWJlci5cbiAgaWYgKGlzTmFOKGJ5dGVPZmZzZXQpKSB7XG4gICAgLy8gYnl0ZU9mZnNldDogaXQgaXQncyB1bmRlZmluZWQsIG51bGwsIE5hTiwgXCJmb29cIiwgZXRjLCBzZWFyY2ggd2hvbGUgYnVmZmVyXG4gICAgYnl0ZU9mZnNldCA9IGRpciA/IDAgOiAoYnVmZmVyLmxlbmd0aCAtIDEpXG4gIH1cblxuICAvLyBOb3JtYWxpemUgYnl0ZU9mZnNldDogbmVnYXRpdmUgb2Zmc2V0cyBzdGFydCBmcm9tIHRoZSBlbmQgb2YgdGhlIGJ1ZmZlclxuICBpZiAoYnl0ZU9mZnNldCA8IDApIGJ5dGVPZmZzZXQgPSBidWZmZXIubGVuZ3RoICsgYnl0ZU9mZnNldFxuICBpZiAoYnl0ZU9mZnNldCA+PSBidWZmZXIubGVuZ3RoKSB7XG4gICAgaWYgKGRpcikgcmV0dXJuIC0xXG4gICAgZWxzZSBieXRlT2Zmc2V0ID0gYnVmZmVyLmxlbmd0aCAtIDFcbiAgfSBlbHNlIGlmIChieXRlT2Zmc2V0IDwgMCkge1xuICAgIGlmIChkaXIpIGJ5dGVPZmZzZXQgPSAwXG4gICAgZWxzZSByZXR1cm4gLTFcbiAgfVxuXG4gIC8vIE5vcm1hbGl6ZSB2YWxcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFsID0gQnVmZmVyLmZyb20odmFsLCBlbmNvZGluZylcbiAgfVxuXG4gIC8vIEZpbmFsbHksIHNlYXJjaCBlaXRoZXIgaW5kZXhPZiAoaWYgZGlyIGlzIHRydWUpIG9yIGxhc3RJbmRleE9mXG4gIGlmIChCdWZmZXIuaXNCdWZmZXIodmFsKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZTogbG9va2luZyBmb3IgZW1wdHkgc3RyaW5nL2J1ZmZlciBhbHdheXMgZmFpbHNcbiAgICBpZiAodmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIHJldHVybiBhcnJheUluZGV4T2YoYnVmZmVyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ251bWJlcicpIHtcbiAgICB2YWwgPSB2YWwgJiAweEZGIC8vIFNlYXJjaCBmb3IgYSBieXRlIHZhbHVlIFswLTI1NV1cbiAgICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQgJiZcbiAgICAgICAgdHlwZW9mIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmIChkaXIpIHtcbiAgICAgICAgcmV0dXJuIFVpbnQ4QXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChidWZmZXIsIHZhbCwgYnl0ZU9mZnNldClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKGJ1ZmZlciwgdmFsLCBieXRlT2Zmc2V0KVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXlJbmRleE9mKGJ1ZmZlciwgWyB2YWwgXSwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGRpcilcbiAgfVxuXG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ZhbCBtdXN0IGJlIHN0cmluZywgbnVtYmVyIG9yIEJ1ZmZlcicpXG59XG5cbmZ1bmN0aW9uIGFycmF5SW5kZXhPZiAoYXJyLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCBkaXIpIHtcbiAgdmFyIGluZGV4U2l6ZSA9IDFcbiAgdmFyIGFyckxlbmd0aCA9IGFyci5sZW5ndGhcbiAgdmFyIHZhbExlbmd0aCA9IHZhbC5sZW5ndGhcblxuICBpZiAoZW5jb2RpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gU3RyaW5nKGVuY29kaW5nKS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGVuY29kaW5nID09PSAndWNzMicgfHwgZW5jb2RpbmcgPT09ICd1Y3MtMicgfHxcbiAgICAgICAgZW5jb2RpbmcgPT09ICd1dGYxNmxlJyB8fCBlbmNvZGluZyA9PT0gJ3V0Zi0xNmxlJykge1xuICAgICAgaWYgKGFyci5sZW5ndGggPCAyIHx8IHZhbC5sZW5ndGggPCAyKSB7XG4gICAgICAgIHJldHVybiAtMVxuICAgICAgfVxuICAgICAgaW5kZXhTaXplID0gMlxuICAgICAgYXJyTGVuZ3RoIC89IDJcbiAgICAgIHZhbExlbmd0aCAvPSAyXG4gICAgICBieXRlT2Zmc2V0IC89IDJcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZWFkIChidWYsIGkpIHtcbiAgICBpZiAoaW5kZXhTaXplID09PSAxKSB7XG4gICAgICByZXR1cm4gYnVmW2ldXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBidWYucmVhZFVJbnQxNkJFKGkgKiBpbmRleFNpemUpXG4gICAgfVxuICB9XG5cbiAgdmFyIGlcbiAgaWYgKGRpcikge1xuICAgIHZhciBmb3VuZEluZGV4ID0gLTFcbiAgICBmb3IgKGkgPSBieXRlT2Zmc2V0OyBpIDwgYXJyTGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWFkKGFyciwgaSkgPT09IHJlYWQodmFsLCBmb3VuZEluZGV4ID09PSAtMSA/IDAgOiBpIC0gZm91bmRJbmRleCkpIHtcbiAgICAgICAgaWYgKGZvdW5kSW5kZXggPT09IC0xKSBmb3VuZEluZGV4ID0gaVxuICAgICAgICBpZiAoaSAtIGZvdW5kSW5kZXggKyAxID09PSB2YWxMZW5ndGgpIHJldHVybiBmb3VuZEluZGV4ICogaW5kZXhTaXplXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZm91bmRJbmRleCAhPT0gLTEpIGkgLT0gaSAtIGZvdW5kSW5kZXhcbiAgICAgICAgZm91bmRJbmRleCA9IC0xXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmIChieXRlT2Zmc2V0ICsgdmFsTGVuZ3RoID4gYXJyTGVuZ3RoKSBieXRlT2Zmc2V0ID0gYXJyTGVuZ3RoIC0gdmFsTGVuZ3RoXG4gICAgZm9yIChpID0gYnl0ZU9mZnNldDsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHZhciBmb3VuZCA9IHRydWVcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgaWYgKHJlYWQoYXJyLCBpICsgaikgIT09IHJlYWQodmFsLCBqKSkge1xuICAgICAgICAgIGZvdW5kID0gZmFsc2VcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoZm91bmQpIHJldHVybiBpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIC0xXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUuaW5jbHVkZXMgPSBmdW5jdGlvbiBpbmNsdWRlcyAodmFsLCBieXRlT2Zmc2V0LCBlbmNvZGluZykge1xuICByZXR1cm4gdGhpcy5pbmRleE9mKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpICE9PSAtMVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mICh2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nKSB7XG4gIHJldHVybiBiaWRpcmVjdGlvbmFsSW5kZXhPZih0aGlzLCB2YWwsIGJ5dGVPZmZzZXQsIGVuY29kaW5nLCB0cnVlKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mID0gZnVuY3Rpb24gbGFzdEluZGV4T2YgKHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIGJpZGlyZWN0aW9uYWxJbmRleE9mKHRoaXMsIHZhbCwgYnl0ZU9mZnNldCwgZW5jb2RpbmcsIGZhbHNlKVxufVxuXG5mdW5jdGlvbiBoZXhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIG9mZnNldCA9IE51bWJlcihvZmZzZXQpIHx8IDBcbiAgdmFyIHJlbWFpbmluZyA9IGJ1Zi5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICBsZW5ndGggPSByZW1haW5pbmdcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPSBOdW1iZXIobGVuZ3RoKVxuICAgIGlmIChsZW5ndGggPiByZW1haW5pbmcpIHtcbiAgICAgIGxlbmd0aCA9IHJlbWFpbmluZ1xuICAgIH1cbiAgfVxuXG4gIC8vIG11c3QgYmUgYW4gZXZlbiBudW1iZXIgb2YgZGlnaXRzXG4gIHZhciBzdHJMZW4gPSBzdHJpbmcubGVuZ3RoXG4gIGlmIChzdHJMZW4gJSAyICE9PSAwKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGhleCBzdHJpbmcnKVxuXG4gIGlmIChsZW5ndGggPiBzdHJMZW4gLyAyKSB7XG4gICAgbGVuZ3RoID0gc3RyTGVuIC8gMlxuICB9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFyc2VkID0gcGFyc2VJbnQoc3RyaW5nLnN1YnN0cihpICogMiwgMiksIDE2KVxuICAgIGlmIChpc05hTihwYXJzZWQpKSByZXR1cm4gaVxuICAgIGJ1ZltvZmZzZXQgKyBpXSA9IHBhcnNlZFxuICB9XG4gIHJldHVybiBpXG59XG5cbmZ1bmN0aW9uIHV0ZjhXcml0ZSAoYnVmLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKSB7XG4gIHJldHVybiBibGl0QnVmZmVyKHV0ZjhUb0J5dGVzKHN0cmluZywgYnVmLmxlbmd0aCAtIG9mZnNldCksIGJ1Ziwgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGFzY2lpV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcihhc2NpaVRvQnl0ZXMoc3RyaW5nKSwgYnVmLCBvZmZzZXQsIGxlbmd0aClcbn1cblxuZnVuY3Rpb24gbGF0aW4xV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYXNjaWlXcml0ZShidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG59XG5cbmZ1bmN0aW9uIGJhc2U2NFdyaXRlIChidWYsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgcmV0dXJuIGJsaXRCdWZmZXIoYmFzZTY0VG9CeXRlcyhzdHJpbmcpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5mdW5jdGlvbiB1Y3MyV3JpdGUgKGJ1Ziwgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aCkge1xuICByZXR1cm4gYmxpdEJ1ZmZlcih1dGYxNmxlVG9CeXRlcyhzdHJpbmcsIGJ1Zi5sZW5ndGggLSBvZmZzZXQpLCBidWYsIG9mZnNldCwgbGVuZ3RoKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gd3JpdGUgKHN0cmluZywgb2Zmc2V0LCBsZW5ndGgsIGVuY29kaW5nKSB7XG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcpXG4gIGlmIChvZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGVuY29kaW5nID0gJ3V0ZjgnXG4gICAgbGVuZ3RoID0gdGhpcy5sZW5ndGhcbiAgICBvZmZzZXQgPSAwXG4gIC8vIEJ1ZmZlciN3cml0ZShzdHJpbmcsIGVuY29kaW5nKVxuICB9IGVsc2UgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBvZmZzZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgZW5jb2RpbmcgPSBvZmZzZXRcbiAgICBsZW5ndGggPSB0aGlzLmxlbmd0aFxuICAgIG9mZnNldCA9IDBcbiAgLy8gQnVmZmVyI3dyaXRlKHN0cmluZywgb2Zmc2V0WywgbGVuZ3RoXVssIGVuY29kaW5nXSlcbiAgfSBlbHNlIGlmIChpc0Zpbml0ZShvZmZzZXQpKSB7XG4gICAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICAgIGlmIChpc0Zpbml0ZShsZW5ndGgpKSB7XG4gICAgICBsZW5ndGggPSBsZW5ndGggfCAwXG4gICAgICBpZiAoZW5jb2RpbmcgPT09IHVuZGVmaW5lZCkgZW5jb2RpbmcgPSAndXRmOCdcbiAgICB9IGVsc2Uge1xuICAgICAgZW5jb2RpbmcgPSBsZW5ndGhcbiAgICAgIGxlbmd0aCA9IHVuZGVmaW5lZFxuICAgIH1cbiAgLy8gbGVnYWN5IHdyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldCwgbGVuZ3RoKSAtIHJlbW92ZSBpbiB2MC4xM1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdCdWZmZXIud3JpdGUoc3RyaW5nLCBlbmNvZGluZywgb2Zmc2V0WywgbGVuZ3RoXSkgaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCdcbiAgICApXG4gIH1cblxuICB2YXIgcmVtYWluaW5nID0gdGhpcy5sZW5ndGggLSBvZmZzZXRcbiAgaWYgKGxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IGxlbmd0aCA+IHJlbWFpbmluZykgbGVuZ3RoID0gcmVtYWluaW5nXG5cbiAgaWYgKChzdHJpbmcubGVuZ3RoID4gMCAmJiAobGVuZ3RoIDwgMCB8fCBvZmZzZXQgPCAwKSkgfHwgb2Zmc2V0ID4gdGhpcy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQXR0ZW1wdCB0byB3cml0ZSBvdXRzaWRlIGJ1ZmZlciBib3VuZHMnKVxuICB9XG5cbiAgaWYgKCFlbmNvZGluZykgZW5jb2RpbmcgPSAndXRmOCdcblxuICB2YXIgbG93ZXJlZENhc2UgPSBmYWxzZVxuICBmb3IgKDs7KSB7XG4gICAgc3dpdGNoIChlbmNvZGluZykge1xuICAgICAgY2FzZSAnaGV4JzpcbiAgICAgICAgcmV0dXJuIGhleFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ3V0ZjgnOlxuICAgICAgY2FzZSAndXRmLTgnOlxuICAgICAgICByZXR1cm4gdXRmOFdyaXRlKHRoaXMsIHN0cmluZywgb2Zmc2V0LCBsZW5ndGgpXG5cbiAgICAgIGNhc2UgJ2FzY2lpJzpcbiAgICAgICAgcmV0dXJuIGFzY2lpV3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAnbGF0aW4xJzpcbiAgICAgIGNhc2UgJ2JpbmFyeSc6XG4gICAgICAgIHJldHVybiBsYXRpbjFXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBjYXNlICdiYXNlNjQnOlxuICAgICAgICAvLyBXYXJuaW5nOiBtYXhMZW5ndGggbm90IHRha2VuIGludG8gYWNjb3VudCBpbiBiYXNlNjRXcml0ZVxuICAgICAgICByZXR1cm4gYmFzZTY0V3JpdGUodGhpcywgc3RyaW5nLCBvZmZzZXQsIGxlbmd0aClcblxuICAgICAgY2FzZSAndWNzMic6XG4gICAgICBjYXNlICd1Y3MtMic6XG4gICAgICBjYXNlICd1dGYxNmxlJzpcbiAgICAgIGNhc2UgJ3V0Zi0xNmxlJzpcbiAgICAgICAgcmV0dXJuIHVjczJXcml0ZSh0aGlzLCBzdHJpbmcsIG9mZnNldCwgbGVuZ3RoKVxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAobG93ZXJlZENhc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZW5jb2Rpbmc6ICcgKyBlbmNvZGluZylcbiAgICAgICAgZW5jb2RpbmcgPSAoJycgKyBlbmNvZGluZykudG9Mb3dlckNhc2UoKVxuICAgICAgICBsb3dlcmVkQ2FzZSA9IHRydWVcbiAgICB9XG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiB0b0pTT04gKCkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdCdWZmZXInLFxuICAgIGRhdGE6IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuX2FyciB8fCB0aGlzLCAwKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJhc2U2NFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgaWYgKHN0YXJ0ID09PSAwICYmIGVuZCA9PT0gYnVmLmxlbmd0aCkge1xuICAgIHJldHVybiBiYXNlNjQuZnJvbUJ5dGVBcnJheShidWYpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGJhc2U2NC5mcm9tQnl0ZUFycmF5KGJ1Zi5zbGljZShzdGFydCwgZW5kKSlcbiAgfVxufVxuXG5mdW5jdGlvbiB1dGY4U2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICBlbmQgPSBNYXRoLm1pbihidWYubGVuZ3RoLCBlbmQpXG4gIHZhciByZXMgPSBbXVxuXG4gIHZhciBpID0gc3RhcnRcbiAgd2hpbGUgKGkgPCBlbmQpIHtcbiAgICB2YXIgZmlyc3RCeXRlID0gYnVmW2ldXG4gICAgdmFyIGNvZGVQb2ludCA9IG51bGxcbiAgICB2YXIgYnl0ZXNQZXJTZXF1ZW5jZSA9IChmaXJzdEJ5dGUgPiAweEVGKSA/IDRcbiAgICAgIDogKGZpcnN0Qnl0ZSA+IDB4REYpID8gM1xuICAgICAgOiAoZmlyc3RCeXRlID4gMHhCRikgPyAyXG4gICAgICA6IDFcblxuICAgIGlmIChpICsgYnl0ZXNQZXJTZXF1ZW5jZSA8PSBlbmQpIHtcbiAgICAgIHZhciBzZWNvbmRCeXRlLCB0aGlyZEJ5dGUsIGZvdXJ0aEJ5dGUsIHRlbXBDb2RlUG9pbnRcblxuICAgICAgc3dpdGNoIChieXRlc1BlclNlcXVlbmNlKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZiAoZmlyc3RCeXRlIDwgMHg4MCkge1xuICAgICAgICAgICAgY29kZVBvaW50ID0gZmlyc3RCeXRlXG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4MUYpIDw8IDB4NiB8IChzZWNvbmRCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHg3Rikge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBpZiAoKHNlY29uZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAodGhpcmRCeXRlICYgMHhDMCkgPT09IDB4ODApIHtcbiAgICAgICAgICAgIHRlbXBDb2RlUG9pbnQgPSAoZmlyc3RCeXRlICYgMHhGKSA8PCAweEMgfCAoc2Vjb25kQnl0ZSAmIDB4M0YpIDw8IDB4NiB8ICh0aGlyZEJ5dGUgJiAweDNGKVxuICAgICAgICAgICAgaWYgKHRlbXBDb2RlUG9pbnQgPiAweDdGRiAmJiAodGVtcENvZGVQb2ludCA8IDB4RDgwMCB8fCB0ZW1wQ29kZVBvaW50ID4gMHhERkZGKSkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBzZWNvbmRCeXRlID0gYnVmW2kgKyAxXVxuICAgICAgICAgIHRoaXJkQnl0ZSA9IGJ1ZltpICsgMl1cbiAgICAgICAgICBmb3VydGhCeXRlID0gYnVmW2kgKyAzXVxuICAgICAgICAgIGlmICgoc2Vjb25kQnl0ZSAmIDB4QzApID09PSAweDgwICYmICh0aGlyZEJ5dGUgJiAweEMwKSA9PT0gMHg4MCAmJiAoZm91cnRoQnl0ZSAmIDB4QzApID09PSAweDgwKSB7XG4gICAgICAgICAgICB0ZW1wQ29kZVBvaW50ID0gKGZpcnN0Qnl0ZSAmIDB4RikgPDwgMHgxMiB8IChzZWNvbmRCeXRlICYgMHgzRikgPDwgMHhDIHwgKHRoaXJkQnl0ZSAmIDB4M0YpIDw8IDB4NiB8IChmb3VydGhCeXRlICYgMHgzRilcbiAgICAgICAgICAgIGlmICh0ZW1wQ29kZVBvaW50ID4gMHhGRkZGICYmIHRlbXBDb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgICAgICAgICBjb2RlUG9pbnQgPSB0ZW1wQ29kZVBvaW50XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb2RlUG9pbnQgPT09IG51bGwpIHtcbiAgICAgIC8vIHdlIGRpZCBub3QgZ2VuZXJhdGUgYSB2YWxpZCBjb2RlUG9pbnQgc28gaW5zZXJ0IGFcbiAgICAgIC8vIHJlcGxhY2VtZW50IGNoYXIgKFUrRkZGRCkgYW5kIGFkdmFuY2Ugb25seSAxIGJ5dGVcbiAgICAgIGNvZGVQb2ludCA9IDB4RkZGRFxuICAgICAgYnl0ZXNQZXJTZXF1ZW5jZSA9IDFcbiAgICB9IGVsc2UgaWYgKGNvZGVQb2ludCA+IDB4RkZGRikge1xuICAgICAgLy8gZW5jb2RlIHRvIHV0ZjE2IChzdXJyb2dhdGUgcGFpciBkYW5jZSlcbiAgICAgIGNvZGVQb2ludCAtPSAweDEwMDAwXG4gICAgICByZXMucHVzaChjb2RlUG9pbnQgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApXG4gICAgICBjb2RlUG9pbnQgPSAweERDMDAgfCBjb2RlUG9pbnQgJiAweDNGRlxuICAgIH1cblxuICAgIHJlcy5wdXNoKGNvZGVQb2ludClcbiAgICBpICs9IGJ5dGVzUGVyU2VxdWVuY2VcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkocmVzKVxufVxuXG4vLyBCYXNlZCBvbiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMjc0NzI3Mi82ODA3NDIsIHRoZSBicm93c2VyIHdpdGhcbi8vIHRoZSBsb3dlc3QgbGltaXQgaXMgQ2hyb21lLCB3aXRoIDB4MTAwMDAgYXJncy5cbi8vIFdlIGdvIDEgbWFnbml0dWRlIGxlc3MsIGZvciBzYWZldHlcbnZhciBNQVhfQVJHVU1FTlRTX0xFTkdUSCA9IDB4MTAwMFxuXG5mdW5jdGlvbiBkZWNvZGVDb2RlUG9pbnRzQXJyYXkgKGNvZGVQb2ludHMpIHtcbiAgdmFyIGxlbiA9IGNvZGVQb2ludHMubGVuZ3RoXG4gIGlmIChsZW4gPD0gTUFYX0FSR1VNRU5UU19MRU5HVEgpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVQb2ludHMpIC8vIGF2b2lkIGV4dHJhIHNsaWNlKClcbiAgfVxuXG4gIC8vIERlY29kZSBpbiBjaHVua3MgdG8gYXZvaWQgXCJjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIi5cbiAgdmFyIHJlcyA9ICcnXG4gIHZhciBpID0gMFxuICB3aGlsZSAoaSA8IGxlbikge1xuICAgIHJlcyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFxuICAgICAgU3RyaW5nLFxuICAgICAgY29kZVBvaW50cy5zbGljZShpLCBpICs9IE1BWF9BUkdVTUVOVFNfTEVOR1RIKVxuICAgIClcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpU2xpY2UgKGJ1Ziwgc3RhcnQsIGVuZCkge1xuICB2YXIgcmV0ID0gJydcbiAgZW5kID0gTWF0aC5taW4oYnVmLmxlbmd0aCwgZW5kKVxuXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgKytpKSB7XG4gICAgcmV0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmW2ldICYgMHg3RilcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGxhdGluMVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIHJldCA9ICcnXG4gIGVuZCA9IE1hdGgubWluKGJ1Zi5sZW5ndGgsIGVuZClcblxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgIHJldCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZltpXSlcbiAgfVxuICByZXR1cm4gcmV0XG59XG5cbmZ1bmN0aW9uIGhleFNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IGJ1Zi5sZW5ndGhcblxuICBpZiAoIXN0YXJ0IHx8IHN0YXJ0IDwgMCkgc3RhcnQgPSAwXG4gIGlmICghZW5kIHx8IGVuZCA8IDAgfHwgZW5kID4gbGVuKSBlbmQgPSBsZW5cblxuICB2YXIgb3V0ID0gJydcbiAgZm9yICh2YXIgaSA9IHN0YXJ0OyBpIDwgZW5kOyArK2kpIHtcbiAgICBvdXQgKz0gdG9IZXgoYnVmW2ldKVxuICB9XG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gdXRmMTZsZVNsaWNlIChidWYsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYnVmLnNsaWNlKHN0YXJ0LCBlbmQpXG4gIHZhciByZXMgPSAnJ1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ5dGVzLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgcmVzICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYnl0ZXNbaV0gKyBieXRlc1tpICsgMV0gKiAyNTYpXG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG5CdWZmZXIucHJvdG90eXBlLnNsaWNlID0gZnVuY3Rpb24gc2xpY2UgKHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbiA9IHRoaXMubGVuZ3RoXG4gIHN0YXJ0ID0gfn5zdGFydFxuICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IH5+ZW5kXG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ICs9IGxlblxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMFxuICB9IGVsc2UgaWYgKHN0YXJ0ID4gbGVuKSB7XG4gICAgc3RhcnQgPSBsZW5cbiAgfVxuXG4gIGlmIChlbmQgPCAwKSB7XG4gICAgZW5kICs9IGxlblxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwXG4gIH0gZWxzZSBpZiAoZW5kID4gbGVuKSB7XG4gICAgZW5kID0gbGVuXG4gIH1cblxuICBpZiAoZW5kIDwgc3RhcnQpIGVuZCA9IHN0YXJ0XG5cbiAgdmFyIG5ld0J1ZlxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICBuZXdCdWYgPSB0aGlzLnN1YmFycmF5KHN0YXJ0LCBlbmQpXG4gICAgbmV3QnVmLl9fcHJvdG9fXyA9IEJ1ZmZlci5wcm90b3R5cGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgc2xpY2VMZW4gPSBlbmQgLSBzdGFydFxuICAgIG5ld0J1ZiA9IG5ldyBCdWZmZXIoc2xpY2VMZW4sIHVuZGVmaW5lZClcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlTGVuOyArK2kpIHtcbiAgICAgIG5ld0J1ZltpXSA9IHRoaXNbaSArIHN0YXJ0XVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCdWZcbn1cblxuLypcbiAqIE5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgYnVmZmVyIGlzbid0IHRyeWluZyB0byB3cml0ZSBvdXQgb2YgYm91bmRzLlxuICovXG5mdW5jdGlvbiBjaGVja09mZnNldCAob2Zmc2V0LCBleHQsIGxlbmd0aCkge1xuICBpZiAoKG9mZnNldCAlIDEpICE9PSAwIHx8IG9mZnNldCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdvZmZzZXQgaXMgbm90IHVpbnQnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gbGVuZ3RoKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVHJ5aW5nIHRvIGFjY2VzcyBiZXlvbmQgYnVmZmVyIGxlbmd0aCcpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRSA9IGZ1bmN0aW9uIHJlYWRVSW50TEUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCBieXRlTGVuZ3RoLCB0aGlzLmxlbmd0aClcblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXRdXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB3aGlsZSAoKytpIDwgYnl0ZUxlbmd0aCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIGldICogbXVsXG4gIH1cblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRCRSA9IGZ1bmN0aW9uIHJlYWRVSW50QkUgKG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG4gIH1cblxuICB2YXIgdmFsID0gdGhpc1tvZmZzZXQgKyAtLWJ5dGVMZW5ndGhdXG4gIHZhciBtdWwgPSAxXG4gIHdoaWxlIChieXRlTGVuZ3RoID4gMCAmJiAobXVsICo9IDB4MTAwKSkge1xuICAgIHZhbCArPSB0aGlzW29mZnNldCArIC0tYnl0ZUxlbmd0aF0gKiBtdWxcbiAgfVxuXG4gIHJldHVybiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDggPSBmdW5jdGlvbiByZWFkVUludDggKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAxLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuIHRoaXNbb2Zmc2V0XVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZMRSA9IGZ1bmN0aW9uIHJlYWRVSW50MTZMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDIsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gdGhpc1tvZmZzZXRdIHwgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2QkUgPSBmdW5jdGlvbiByZWFkVUludDE2QkUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgcmV0dXJuICh0aGlzW29mZnNldF0gPDwgOCkgfCB0aGlzW29mZnNldCArIDFdXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFID0gZnVuY3Rpb24gcmVhZFVJbnQzMkxFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgNCwgdGhpcy5sZW5ndGgpXG5cbiAgcmV0dXJuICgodGhpc1tvZmZzZXRdKSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAxXSA8PCA4KSB8XG4gICAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCAxNikpICtcbiAgICAgICh0aGlzW29mZnNldCArIDNdICogMHgxMDAwMDAwKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRSA9IGZ1bmN0aW9uIHJlYWRVSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdICogMHgxMDAwMDAwKSArXG4gICAgKCh0aGlzW29mZnNldCArIDFdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMl0gPDwgOCkgfFxuICAgIHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludExFID0gZnVuY3Rpb24gcmVhZEludExFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XVxuICB2YXIgbXVsID0gMVxuICB2YXIgaSA9IDBcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB2YWwgKz0gdGhpc1tvZmZzZXQgKyBpXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludEJFID0gZnVuY3Rpb24gcmVhZEludEJFIChvZmZzZXQsIGJ5dGVMZW5ndGgsIG5vQXNzZXJ0KSB7XG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgYnl0ZUxlbmd0aCA9IGJ5dGVMZW5ndGggfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgYnl0ZUxlbmd0aCwgdGhpcy5sZW5ndGgpXG5cbiAgdmFyIGkgPSBieXRlTGVuZ3RoXG4gIHZhciBtdWwgPSAxXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIC0taV1cbiAgd2hpbGUgKGkgPiAwICYmIChtdWwgKj0gMHgxMDApKSB7XG4gICAgdmFsICs9IHRoaXNbb2Zmc2V0ICsgLS1pXSAqIG11bFxuICB9XG4gIG11bCAqPSAweDgwXG5cbiAgaWYgKHZhbCA+PSBtdWwpIHZhbCAtPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aClcblxuICByZXR1cm4gdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDggPSBmdW5jdGlvbiByZWFkSW50OCAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDEsIHRoaXMubGVuZ3RoKVxuICBpZiAoISh0aGlzW29mZnNldF0gJiAweDgwKSkgcmV0dXJuICh0aGlzW29mZnNldF0pXG4gIHJldHVybiAoKDB4ZmYgLSB0aGlzW29mZnNldF0gKyAxKSAqIC0xKVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWRJbnQxNkxFID0gZnVuY3Rpb24gcmVhZEludDE2TEUgKG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tPZmZzZXQob2Zmc2V0LCAyLCB0aGlzLmxlbmd0aClcbiAgdmFyIHZhbCA9IHRoaXNbb2Zmc2V0XSB8ICh0aGlzW29mZnNldCArIDFdIDw8IDgpXG4gIHJldHVybiAodmFsICYgMHg4MDAwKSA/IHZhbCB8IDB4RkZGRjAwMDAgOiB2YWxcbn1cblxuQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRSA9IGZ1bmN0aW9uIHJlYWRJbnQxNkJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgMiwgdGhpcy5sZW5ndGgpXG4gIHZhciB2YWwgPSB0aGlzW29mZnNldCArIDFdIHwgKHRoaXNbb2Zmc2V0XSA8PCA4KVxuICByZXR1cm4gKHZhbCAmIDB4ODAwMCkgPyB2YWwgfCAweEZGRkYwMDAwIDogdmFsXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyTEUgPSBmdW5jdGlvbiByZWFkSW50MzJMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdKSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgOCkgfFxuICAgICh0aGlzW29mZnNldCArIDJdIDw8IDE2KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10gPDwgMjQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEludDMyQkUgPSBmdW5jdGlvbiByZWFkSW50MzJCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuXG4gIHJldHVybiAodGhpc1tvZmZzZXRdIDw8IDI0KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgMV0gPDwgMTYpIHxcbiAgICAodGhpc1tvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgKHRoaXNbb2Zmc2V0ICsgM10pXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEUgPSBmdW5jdGlvbiByZWFkRmxvYXRMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgMjMsIDQpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkUgPSBmdW5jdGlvbiByZWFkRmxvYXRCRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDQsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgZmFsc2UsIDIzLCA0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVMRSA9IGZ1bmN0aW9uIHJlYWREb3VibGVMRSAob2Zmc2V0LCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSBjaGVja09mZnNldChvZmZzZXQsIDgsIHRoaXMubGVuZ3RoKVxuICByZXR1cm4gaWVlZTc1NC5yZWFkKHRoaXMsIG9mZnNldCwgdHJ1ZSwgNTIsIDgpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUJFID0gZnVuY3Rpb24gcmVhZERvdWJsZUJFIChvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrT2Zmc2V0KG9mZnNldCwgOCwgdGhpcy5sZW5ndGgpXG4gIHJldHVybiBpZWVlNzU0LnJlYWQodGhpcywgb2Zmc2V0LCBmYWxzZSwgNTIsIDgpXG59XG5cbmZ1bmN0aW9uIGNoZWNrSW50IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKCFCdWZmZXIuaXNCdWZmZXIoYnVmKSkgdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJylcbiAgaWYgKHZhbHVlID4gbWF4IHx8IHZhbHVlIDwgbWluKSB0aHJvdyBuZXcgUmFuZ2VFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IGlzIG91dCBvZiBib3VuZHMnKVxuICBpZiAob2Zmc2V0ICsgZXh0ID4gYnVmLmxlbmd0aCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnRMRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBtdWwgPSAxXG4gIHZhciBpID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkUgPSBmdW5jdGlvbiB3cml0ZVVJbnRCRSAodmFsdWUsIG9mZnNldCwgYnl0ZUxlbmd0aCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aCB8IDBcbiAgaWYgKCFub0Fzc2VydCkge1xuICAgIHZhciBtYXhCeXRlcyA9IE1hdGgucG93KDIsIDggKiBieXRlTGVuZ3RoKSAtIDFcbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBtYXhCeXRlcywgMClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICB0aGlzW29mZnNldCArIGldID0gKHZhbHVlIC8gbXVsKSAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBvZmZzZXQgKyBieXRlTGVuZ3RoXG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OCA9IGZ1bmN0aW9uIHdyaXRlVUludDggKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMSwgMHhmZiwgMClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICByZXR1cm4gb2Zmc2V0ICsgMVxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQxNiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmYgKyB2YWx1ZSArIDFcbiAgZm9yICh2YXIgaSA9IDAsIGogPSBNYXRoLm1pbihidWYubGVuZ3RoIC0gb2Zmc2V0LCAyKTsgaSA8IGo7ICsraSkge1xuICAgIGJ1ZltvZmZzZXQgKyBpXSA9ICh2YWx1ZSAmICgweGZmIDw8ICg4ICogKGxpdHRsZUVuZGlhbiA/IGkgOiAxIC0gaSkpKSkgPj4+XG4gICAgICAobGl0dGxlRW5kaWFuID8gaSA6IDEgLSBpKSAqIDhcbiAgfVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZVVJbnQxNkxFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDIsIDB4ZmZmZiwgMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDE2KHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDJcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFID0gZnVuY3Rpb24gd3JpdGVVSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweGZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5mdW5jdGlvbiBvYmplY3RXcml0ZVVJbnQzMiAoYnVmLCB2YWx1ZSwgb2Zmc2V0LCBsaXR0bGVFbmRpYW4pIHtcbiAgaWYgKHZhbHVlIDwgMCkgdmFsdWUgPSAweGZmZmZmZmZmICsgdmFsdWUgKyAxXG4gIGZvciAodmFyIGkgPSAwLCBqID0gTWF0aC5taW4oYnVmLmxlbmd0aCAtIG9mZnNldCwgNCk7IGkgPCBqOyArK2kpIHtcbiAgICBidWZbb2Zmc2V0ICsgaV0gPSAodmFsdWUgPj4+IChsaXR0bGVFbmRpYW4gPyBpIDogMyAtIGkpICogOCkgJiAweGZmXG4gIH1cbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFID0gZnVuY3Rpb24gd3JpdGVVSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweGZmZmZmZmZmLCAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlID4+PiAyNClcbiAgICB0aGlzW29mZnNldCArIDJdID0gKHZhbHVlID4+PiAxNilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZVVJbnQzMkJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIGNoZWNrSW50KHRoaXMsIHZhbHVlLCBvZmZzZXQsIDQsIDB4ZmZmZmZmZmYsIDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gMjQpXG4gICAgdGhpc1tvZmZzZXQgKyAxXSA9ICh2YWx1ZSA+Pj4gMTYpXG4gICAgdGhpc1tvZmZzZXQgKyAyXSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDNdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQzMih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgNFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEUgPSBmdW5jdGlvbiB3cml0ZUludExFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gMFxuICB2YXIgbXVsID0gMVxuICB2YXIgc3ViID0gMFxuICB0aGlzW29mZnNldF0gPSB2YWx1ZSAmIDB4RkZcbiAgd2hpbGUgKCsraSA8IGJ5dGVMZW5ndGggJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgLSAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50QkUgPSBmdW5jdGlvbiB3cml0ZUludEJFICh2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBub0Fzc2VydCkge1xuICB2YWx1ZSA9ICt2YWx1ZVxuICBvZmZzZXQgPSBvZmZzZXQgfCAwXG4gIGlmICghbm9Bc3NlcnQpIHtcbiAgICB2YXIgbGltaXQgPSBNYXRoLnBvdygyLCA4ICogYnl0ZUxlbmd0aCAtIDEpXG5cbiAgICBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBieXRlTGVuZ3RoLCBsaW1pdCAtIDEsIC1saW1pdClcbiAgfVxuXG4gIHZhciBpID0gYnl0ZUxlbmd0aCAtIDFcbiAgdmFyIG11bCA9IDFcbiAgdmFyIHN1YiA9IDBcbiAgdGhpc1tvZmZzZXQgKyBpXSA9IHZhbHVlICYgMHhGRlxuICB3aGlsZSAoLS1pID49IDAgJiYgKG11bCAqPSAweDEwMCkpIHtcbiAgICBpZiAodmFsdWUgPCAwICYmIHN1YiA9PT0gMCAmJiB0aGlzW29mZnNldCArIGkgKyAxXSAhPT0gMCkge1xuICAgICAgc3ViID0gMVxuICAgIH1cbiAgICB0aGlzW29mZnNldCArIGldID0gKCh2YWx1ZSAvIG11bCkgPj4gMCkgLSBzdWIgJiAweEZGXG4gIH1cblxuICByZXR1cm4gb2Zmc2V0ICsgYnl0ZUxlbmd0aFxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50OCA9IGZ1bmN0aW9uIHdyaXRlSW50OCAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAxLCAweDdmLCAtMHg4MClcbiAgaWYgKCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkgdmFsdWUgPSBNYXRoLmZsb29yKHZhbHVlKVxuICBpZiAodmFsdWUgPCAwKSB2YWx1ZSA9IDB4ZmYgKyB2YWx1ZSArIDFcbiAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgcmV0dXJuIG9mZnNldCArIDFcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2TEUgPSBmdW5jdGlvbiB3cml0ZUludDE2TEUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgMiwgMHg3ZmZmLCAtMHg4MDAwKVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgJiAweGZmKVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDgpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MTYodGhpcywgdmFsdWUsIG9mZnNldCwgdHJ1ZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MTZCRSA9IGZ1bmN0aW9uIHdyaXRlSW50MTZCRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCAyLCAweDdmZmYsIC0weDgwMDApXG4gIGlmIChCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVCkge1xuICAgIHRoaXNbb2Zmc2V0XSA9ICh2YWx1ZSA+Pj4gOClcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlICYgMHhmZilcbiAgfSBlbHNlIHtcbiAgICBvYmplY3RXcml0ZVVJbnQxNih0aGlzLCB2YWx1ZSwgb2Zmc2V0LCBmYWxzZSlcbiAgfVxuICByZXR1cm4gb2Zmc2V0ICsgMlxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRSA9IGZ1bmN0aW9uIHdyaXRlSW50MzJMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgdmFsdWUgPSArdmFsdWVcbiAgb2Zmc2V0ID0gb2Zmc2V0IHwgMFxuICBpZiAoIW5vQXNzZXJ0KSBjaGVja0ludCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCA0LCAweDdmZmZmZmZmLCAtMHg4MDAwMDAwMClcbiAgaWYgKEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgdGhpc1tvZmZzZXRdID0gKHZhbHVlICYgMHhmZilcbiAgICB0aGlzW29mZnNldCArIDFdID0gKHZhbHVlID4+PiA4KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgM10gPSAodmFsdWUgPj4+IDI0KVxuICB9IGVsc2Uge1xuICAgIG9iamVjdFdyaXRlVUludDMyKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkUgPSBmdW5jdGlvbiB3cml0ZUludDMyQkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHZhbHVlID0gK3ZhbHVlXG4gIG9mZnNldCA9IG9mZnNldCB8IDBcbiAgaWYgKCFub0Fzc2VydCkgY2hlY2tJbnQodGhpcywgdmFsdWUsIG9mZnNldCwgNCwgMHg3ZmZmZmZmZiwgLTB4ODAwMDAwMDApXG4gIGlmICh2YWx1ZSA8IDApIHZhbHVlID0gMHhmZmZmZmZmZiArIHZhbHVlICsgMVxuICBpZiAoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpIHtcbiAgICB0aGlzW29mZnNldF0gPSAodmFsdWUgPj4+IDI0KVxuICAgIHRoaXNbb2Zmc2V0ICsgMV0gPSAodmFsdWUgPj4+IDE2KVxuICAgIHRoaXNbb2Zmc2V0ICsgMl0gPSAodmFsdWUgPj4+IDgpXG4gICAgdGhpc1tvZmZzZXQgKyAzXSA9ICh2YWx1ZSAmIDB4ZmYpXG4gIH0gZWxzZSB7XG4gICAgb2JqZWN0V3JpdGVVSW50MzIodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UpXG4gIH1cbiAgcmV0dXJuIG9mZnNldCArIDRcbn1cblxuZnVuY3Rpb24gY2hlY2tJRUVFNzU0IChidWYsIHZhbHVlLCBvZmZzZXQsIGV4dCwgbWF4LCBtaW4pIHtcbiAgaWYgKG9mZnNldCArIGV4dCA+IGJ1Zi5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbmRleCBvdXQgb2YgcmFuZ2UnKVxuICBpZiAob2Zmc2V0IDwgMCkgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0luZGV4IG91dCBvZiByYW5nZScpXG59XG5cbmZ1bmN0aW9uIHdyaXRlRmxvYXQgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgNCwgMy40MDI4MjM0NjYzODUyODg2ZSszOCwgLTMuNDAyODIzNDY2Mzg1Mjg4NmUrMzgpXG4gIH1cbiAgaWVlZTc1NC53cml0ZShidWYsIHZhbHVlLCBvZmZzZXQsIGxpdHRsZUVuZGlhbiwgMjMsIDQpXG4gIHJldHVybiBvZmZzZXQgKyA0XG59XG5cbkJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFID0gZnVuY3Rpb24gd3JpdGVGbG9hdExFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVGbG9hdCh0aGlzLCB2YWx1ZSwgb2Zmc2V0LCB0cnVlLCBub0Fzc2VydClcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUgPSBmdW5jdGlvbiB3cml0ZUZsb2F0QkUgKHZhbHVlLCBvZmZzZXQsIG5vQXNzZXJ0KSB7XG4gIHJldHVybiB3cml0ZUZsb2F0KHRoaXMsIHZhbHVlLCBvZmZzZXQsIGZhbHNlLCBub0Fzc2VydClcbn1cblxuZnVuY3Rpb24gd3JpdGVEb3VibGUgKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCBub0Fzc2VydCkge1xuICBpZiAoIW5vQXNzZXJ0KSB7XG4gICAgY2hlY2tJRUVFNzU0KGJ1ZiwgdmFsdWUsIG9mZnNldCwgOCwgMS43OTc2OTMxMzQ4NjIzMTU3RSszMDgsIC0xLjc5NzY5MzEzNDg2MjMxNTdFKzMwOClcbiAgfVxuICBpZWVlNzU0LndyaXRlKGJ1ZiwgdmFsdWUsIG9mZnNldCwgbGl0dGxlRW5kaWFuLCA1MiwgOClcbiAgcmV0dXJuIG9mZnNldCArIDhcbn1cblxuQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZUxFID0gZnVuY3Rpb24gd3JpdGVEb3VibGVMRSAodmFsdWUsIG9mZnNldCwgbm9Bc3NlcnQpIHtcbiAgcmV0dXJuIHdyaXRlRG91YmxlKHRoaXMsIHZhbHVlLCBvZmZzZXQsIHRydWUsIG5vQXNzZXJ0KVxufVxuXG5CdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkUgPSBmdW5jdGlvbiB3cml0ZURvdWJsZUJFICh2YWx1ZSwgb2Zmc2V0LCBub0Fzc2VydCkge1xuICByZXR1cm4gd3JpdGVEb3VibGUodGhpcywgdmFsdWUsIG9mZnNldCwgZmFsc2UsIG5vQXNzZXJ0KVxufVxuXG4vLyBjb3B5KHRhcmdldEJ1ZmZlciwgdGFyZ2V0U3RhcnQ9MCwgc291cmNlU3RhcnQ9MCwgc291cmNlRW5kPWJ1ZmZlci5sZW5ndGgpXG5CdWZmZXIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiBjb3B5ICh0YXJnZXQsIHRhcmdldFN0YXJ0LCBzdGFydCwgZW5kKSB7XG4gIGlmICghc3RhcnQpIHN0YXJ0ID0gMFxuICBpZiAoIWVuZCAmJiBlbmQgIT09IDApIGVuZCA9IHRoaXMubGVuZ3RoXG4gIGlmICh0YXJnZXRTdGFydCA+PSB0YXJnZXQubGVuZ3RoKSB0YXJnZXRTdGFydCA9IHRhcmdldC5sZW5ndGhcbiAgaWYgKCF0YXJnZXRTdGFydCkgdGFyZ2V0U3RhcnQgPSAwXG4gIGlmIChlbmQgPiAwICYmIGVuZCA8IHN0YXJ0KSBlbmQgPSBzdGFydFxuXG4gIC8vIENvcHkgMCBieXRlczsgd2UncmUgZG9uZVxuICBpZiAoZW5kID09PSBzdGFydCkgcmV0dXJuIDBcbiAgaWYgKHRhcmdldC5sZW5ndGggPT09IDAgfHwgdGhpcy5sZW5ndGggPT09IDApIHJldHVybiAwXG5cbiAgLy8gRmF0YWwgZXJyb3IgY29uZGl0aW9uc1xuICBpZiAodGFyZ2V0U3RhcnQgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RhcmdldFN0YXJ0IG91dCBvZiBib3VuZHMnKVxuICB9XG4gIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gdGhpcy5sZW5ndGgpIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzJylcbiAgaWYgKGVuZCA8IDApIHRocm93IG5ldyBSYW5nZUVycm9yKCdzb3VyY2VFbmQgb3V0IG9mIGJvdW5kcycpXG5cbiAgLy8gQXJlIHdlIG9vYj9cbiAgaWYgKGVuZCA+IHRoaXMubGVuZ3RoKSBlbmQgPSB0aGlzLmxlbmd0aFxuICBpZiAodGFyZ2V0Lmxlbmd0aCAtIHRhcmdldFN0YXJ0IDwgZW5kIC0gc3RhcnQpIHtcbiAgICBlbmQgPSB0YXJnZXQubGVuZ3RoIC0gdGFyZ2V0U3RhcnQgKyBzdGFydFxuICB9XG5cbiAgdmFyIGxlbiA9IGVuZCAtIHN0YXJ0XG4gIHZhciBpXG5cbiAgaWYgKHRoaXMgPT09IHRhcmdldCAmJiBzdGFydCA8IHRhcmdldFN0YXJ0ICYmIHRhcmdldFN0YXJ0IDwgZW5kKSB7XG4gICAgLy8gZGVzY2VuZGluZyBjb3B5IGZyb20gZW5kXG4gICAgZm9yIChpID0gbGVuIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgIHRhcmdldFtpICsgdGFyZ2V0U3RhcnRdID0gdGhpc1tpICsgc3RhcnRdXG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA8IDEwMDAgfHwgIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKSB7XG4gICAgLy8gYXNjZW5kaW5nIGNvcHkgZnJvbSBzdGFydFxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgdGFyZ2V0W2kgKyB0YXJnZXRTdGFydF0gPSB0aGlzW2kgKyBzdGFydF1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoXG4gICAgICB0YXJnZXQsXG4gICAgICB0aGlzLnN1YmFycmF5KHN0YXJ0LCBzdGFydCArIGxlbiksXG4gICAgICB0YXJnZXRTdGFydFxuICAgIClcbiAgfVxuXG4gIHJldHVybiBsZW5cbn1cblxuLy8gVXNhZ2U6XG4vLyAgICBidWZmZXIuZmlsbChudW1iZXJbLCBvZmZzZXRbLCBlbmRdXSlcbi8vICAgIGJ1ZmZlci5maWxsKGJ1ZmZlclssIG9mZnNldFssIGVuZF1dKVxuLy8gICAgYnVmZmVyLmZpbGwoc3RyaW5nWywgb2Zmc2V0WywgZW5kXV1bLCBlbmNvZGluZ10pXG5CdWZmZXIucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiBmaWxsICh2YWwsIHN0YXJ0LCBlbmQsIGVuY29kaW5nKSB7XG4gIC8vIEhhbmRsZSBzdHJpbmcgY2FzZXM6XG4gIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgIGlmICh0eXBlb2Ygc3RhcnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBlbmNvZGluZyA9IHN0YXJ0XG4gICAgICBzdGFydCA9IDBcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZW5kID09PSAnc3RyaW5nJykge1xuICAgICAgZW5jb2RpbmcgPSBlbmRcbiAgICAgIGVuZCA9IHRoaXMubGVuZ3RoXG4gICAgfVxuICAgIGlmICh2YWwubGVuZ3RoID09PSAxKSB7XG4gICAgICB2YXIgY29kZSA9IHZhbC5jaGFyQ29kZUF0KDApXG4gICAgICBpZiAoY29kZSA8IDI1Nikge1xuICAgICAgICB2YWwgPSBjb2RlXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlbmNvZGluZyAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBlbmNvZGluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2VuY29kaW5nIG11c3QgYmUgYSBzdHJpbmcnKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGVuY29kaW5nID09PSAnc3RyaW5nJyAmJiAhQnVmZmVyLmlzRW5jb2RpbmcoZW5jb2RpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIGVuY29kaW5nOiAnICsgZW5jb2RpbmcpXG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgdmFsID0gdmFsICYgMjU1XG4gIH1cblxuICAvLyBJbnZhbGlkIHJhbmdlcyBhcmUgbm90IHNldCB0byBhIGRlZmF1bHQsIHNvIGNhbiByYW5nZSBjaGVjayBlYXJseS5cbiAgaWYgKHN0YXJ0IDwgMCB8fCB0aGlzLmxlbmd0aCA8IHN0YXJ0IHx8IHRoaXMubGVuZ3RoIDwgZW5kKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ091dCBvZiByYW5nZSBpbmRleCcpXG4gIH1cblxuICBpZiAoZW5kIDw9IHN0YXJ0KSB7XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHN0YXJ0ID0gc3RhcnQgPj4+IDBcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGVuZCA+Pj4gMFxuXG4gIGlmICghdmFsKSB2YWwgPSAwXG5cbiAgdmFyIGlcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgZm9yIChpID0gc3RhcnQ7IGkgPCBlbmQ7ICsraSkge1xuICAgICAgdGhpc1tpXSA9IHZhbFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgYnl0ZXMgPSBCdWZmZXIuaXNCdWZmZXIodmFsKVxuICAgICAgPyB2YWxcbiAgICAgIDogdXRmOFRvQnl0ZXMobmV3IEJ1ZmZlcih2YWwsIGVuY29kaW5nKS50b1N0cmluZygpKVxuICAgIHZhciBsZW4gPSBieXRlcy5sZW5ndGhcbiAgICBmb3IgKGkgPSAwOyBpIDwgZW5kIC0gc3RhcnQ7ICsraSkge1xuICAgICAgdGhpc1tpICsgc3RhcnRdID0gYnl0ZXNbaSAlIGxlbl1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpc1xufVxuXG4vLyBIRUxQRVIgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09XG5cbnZhciBJTlZBTElEX0JBU0U2NF9SRSA9IC9bXitcXC8wLTlBLVphLXotX10vZ1xuXG5mdW5jdGlvbiBiYXNlNjRjbGVhbiAoc3RyKSB7XG4gIC8vIE5vZGUgc3RyaXBzIG91dCBpbnZhbGlkIGNoYXJhY3RlcnMgbGlrZSBcXG4gYW5kIFxcdCBmcm9tIHRoZSBzdHJpbmcsIGJhc2U2NC1qcyBkb2VzIG5vdFxuICBzdHIgPSBzdHJpbmd0cmltKHN0cikucmVwbGFjZShJTlZBTElEX0JBU0U2NF9SRSwgJycpXG4gIC8vIE5vZGUgY29udmVydHMgc3RyaW5ncyB3aXRoIGxlbmd0aCA8IDIgdG8gJydcbiAgaWYgKHN0ci5sZW5ndGggPCAyKSByZXR1cm4gJydcbiAgLy8gTm9kZSBhbGxvd3MgZm9yIG5vbi1wYWRkZWQgYmFzZTY0IHN0cmluZ3MgKG1pc3NpbmcgdHJhaWxpbmcgPT09KSwgYmFzZTY0LWpzIGRvZXMgbm90XG4gIHdoaWxlIChzdHIubGVuZ3RoICUgNCAhPT0gMCkge1xuICAgIHN0ciA9IHN0ciArICc9J1xuICB9XG4gIHJldHVybiBzdHJcbn1cblxuZnVuY3Rpb24gc3RyaW5ndHJpbSAoc3RyKSB7XG4gIGlmIChzdHIudHJpbSkgcmV0dXJuIHN0ci50cmltKClcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJylcbn1cblxuZnVuY3Rpb24gdG9IZXggKG4pIHtcbiAgaWYgKG4gPCAxNikgcmV0dXJuICcwJyArIG4udG9TdHJpbmcoMTYpXG4gIHJldHVybiBuLnRvU3RyaW5nKDE2KVxufVxuXG5mdW5jdGlvbiB1dGY4VG9CeXRlcyAoc3RyaW5nLCB1bml0cykge1xuICB1bml0cyA9IHVuaXRzIHx8IEluZmluaXR5XG4gIHZhciBjb2RlUG9pbnRcbiAgdmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGhcbiAgdmFyIGxlYWRTdXJyb2dhdGUgPSBudWxsXG4gIHZhciBieXRlcyA9IFtdXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpXG5cbiAgICAvLyBpcyBzdXJyb2dhdGUgY29tcG9uZW50XG4gICAgaWYgKGNvZGVQb2ludCA+IDB4RDdGRiAmJiBjb2RlUG9pbnQgPCAweEUwMDApIHtcbiAgICAgIC8vIGxhc3QgY2hhciB3YXMgYSBsZWFkXG4gICAgICBpZiAoIWxlYWRTdXJyb2dhdGUpIHtcbiAgICAgICAgLy8gbm8gbGVhZCB5ZXRcbiAgICAgICAgaWYgKGNvZGVQb2ludCA+IDB4REJGRikge1xuICAgICAgICAgIC8vIHVuZXhwZWN0ZWQgdHJhaWxcbiAgICAgICAgICBpZiAoKHVuaXRzIC09IDMpID4gLTEpIGJ5dGVzLnB1c2goMHhFRiwgMHhCRiwgMHhCRClcbiAgICAgICAgICBjb250aW51ZVxuICAgICAgICB9IGVsc2UgaWYgKGkgKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAvLyB1bnBhaXJlZCBsZWFkXG4gICAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgICAgY29udGludWVcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhbGlkIGxlYWRcbiAgICAgICAgbGVhZFN1cnJvZ2F0ZSA9IGNvZGVQb2ludFxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIDIgbGVhZHMgaW4gYSByb3dcbiAgICAgIGlmIChjb2RlUG9pbnQgPCAweERDMDApIHtcbiAgICAgICAgaWYgKCh1bml0cyAtPSAzKSA+IC0xKSBieXRlcy5wdXNoKDB4RUYsIDB4QkYsIDB4QkQpXG4gICAgICAgIGxlYWRTdXJyb2dhdGUgPSBjb2RlUG9pbnRcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gdmFsaWQgc3Vycm9nYXRlIHBhaXJcbiAgICAgIGNvZGVQb2ludCA9IChsZWFkU3Vycm9nYXRlIC0gMHhEODAwIDw8IDEwIHwgY29kZVBvaW50IC0gMHhEQzAwKSArIDB4MTAwMDBcbiAgICB9IGVsc2UgaWYgKGxlYWRTdXJyb2dhdGUpIHtcbiAgICAgIC8vIHZhbGlkIGJtcCBjaGFyLCBidXQgbGFzdCBjaGFyIHdhcyBhIGxlYWRcbiAgICAgIGlmICgodW5pdHMgLT0gMykgPiAtMSkgYnl0ZXMucHVzaCgweEVGLCAweEJGLCAweEJEKVxuICAgIH1cblxuICAgIGxlYWRTdXJyb2dhdGUgPSBudWxsXG5cbiAgICAvLyBlbmNvZGUgdXRmOFxuICAgIGlmIChjb2RlUG9pbnQgPCAweDgwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDEpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goY29kZVBvaW50KVxuICAgIH0gZWxzZSBpZiAoY29kZVBvaW50IDwgMHg4MDApIHtcbiAgICAgIGlmICgodW5pdHMgLT0gMikgPCAwKSBicmVha1xuICAgICAgYnl0ZXMucHVzaChcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiB8IDB4QzAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDEwMDAwKSB7XG4gICAgICBpZiAoKHVuaXRzIC09IDMpIDwgMCkgYnJlYWtcbiAgICAgIGJ5dGVzLnB1c2goXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgfCAweEUwLFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHg2ICYgMHgzRiB8IDB4ODAsXG4gICAgICAgIGNvZGVQb2ludCAmIDB4M0YgfCAweDgwXG4gICAgICApXG4gICAgfSBlbHNlIGlmIChjb2RlUG9pbnQgPCAweDExMDAwMCkge1xuICAgICAgaWYgKCh1bml0cyAtPSA0KSA8IDApIGJyZWFrXG4gICAgICBieXRlcy5wdXNoKFxuICAgICAgICBjb2RlUG9pbnQgPj4gMHgxMiB8IDB4RjAsXG4gICAgICAgIGNvZGVQb2ludCA+PiAweEMgJiAweDNGIHwgMHg4MCxcbiAgICAgICAgY29kZVBvaW50ID4+IDB4NiAmIDB4M0YgfCAweDgwLFxuICAgICAgICBjb2RlUG9pbnQgJiAweDNGIHwgMHg4MFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY29kZSBwb2ludCcpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVzXG59XG5cbmZ1bmN0aW9uIGFzY2lpVG9CeXRlcyAoc3RyKSB7XG4gIHZhciBieXRlQXJyYXkgPSBbXVxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7ICsraSkge1xuICAgIC8vIE5vZGUncyBjb2RlIHNlZW1zIHRvIGJlIGRvaW5nIHRoaXMgYW5kIG5vdCAmIDB4N0YuLlxuICAgIGJ5dGVBcnJheS5wdXNoKHN0ci5jaGFyQ29kZUF0KGkpICYgMHhGRilcbiAgfVxuICByZXR1cm4gYnl0ZUFycmF5XG59XG5cbmZ1bmN0aW9uIHV0ZjE2bGVUb0J5dGVzIChzdHIsIHVuaXRzKSB7XG4gIHZhciBjLCBoaSwgbG9cbiAgdmFyIGJ5dGVBcnJheSA9IFtdXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKCh1bml0cyAtPSAyKSA8IDApIGJyZWFrXG5cbiAgICBjID0gc3RyLmNoYXJDb2RlQXQoaSlcbiAgICBoaSA9IGMgPj4gOFxuICAgIGxvID0gYyAlIDI1NlxuICAgIGJ5dGVBcnJheS5wdXNoKGxvKVxuICAgIGJ5dGVBcnJheS5wdXNoKGhpKVxuICB9XG5cbiAgcmV0dXJuIGJ5dGVBcnJheVxufVxuXG5mdW5jdGlvbiBiYXNlNjRUb0J5dGVzIChzdHIpIHtcbiAgcmV0dXJuIGJhc2U2NC50b0J5dGVBcnJheShiYXNlNjRjbGVhbihzdHIpKVxufVxuXG5mdW5jdGlvbiBibGl0QnVmZmVyIChzcmMsIGRzdCwgb2Zmc2V0LCBsZW5ndGgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgIGlmICgoaSArIG9mZnNldCA+PSBkc3QubGVuZ3RoKSB8fCAoaSA+PSBzcmMubGVuZ3RoKSkgYnJlYWtcbiAgICBkc3RbaSArIG9mZnNldF0gPSBzcmNbaV1cbiAgfVxuICByZXR1cm4gaVxufVxuXG5mdW5jdGlvbiBpc25hbiAodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IHZhbCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNlbGYtY29tcGFyZVxufVxuIiwiLy8gYnJvd3NlciBzaGltIGZvciB4bWxodHRwcmVxdWVzdCBtb2R1bGVcblxudmFyIGhhc0NPUlMgPSByZXF1aXJlKCdoYXMtY29ycycpO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuL2dsb2JhbFRoaXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0cykge1xuICB2YXIgeGRvbWFpbiA9IG9wdHMueGRvbWFpbjtcblxuICAvLyBzY2hlbWUgbXVzdCBiZSBzYW1lIHdoZW4gdXNpZ24gWERvbWFpblJlcXVlc3RcbiAgLy8gaHR0cDovL2Jsb2dzLm1zZG4uY29tL2IvaWVpbnRlcm5hbHMvYXJjaGl2ZS8yMDEwLzA1LzEzL3hkb21haW5yZXF1ZXN0LXJlc3RyaWN0aW9ucy1saW1pdGF0aW9ucy1hbmQtd29ya2Fyb3VuZHMuYXNweFxuICB2YXIgeHNjaGVtZSA9IG9wdHMueHNjaGVtZTtcblxuICAvLyBYRG9tYWluUmVxdWVzdCBoYXMgYSBmbG93IG9mIG5vdCBzZW5kaW5nIGNvb2tpZSwgdGhlcmVmb3JlIGl0IHNob3VsZCBiZSBkaXNhYmxlZCBhcyBhIGRlZmF1bHQuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9BdXRvbWF0dGljL2VuZ2luZS5pby1jbGllbnQvcHVsbC8yMTdcbiAgdmFyIGVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG5cbiAgLy8gWE1MSHR0cFJlcXVlc3QgY2FuIGJlIGRpc2FibGVkIG9uIElFXG4gIHRyeSB7XG4gICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgWE1MSHR0cFJlcXVlc3QgJiYgKCF4ZG9tYWluIHx8IGhhc0NPUlMpKSB7XG4gICAgICByZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IH1cblxuICAvLyBVc2UgWERvbWFpblJlcXVlc3QgZm9yIElFOCBpZiBlbmFibGVzWERSIGlzIHRydWVcbiAgLy8gYmVjYXVzZSBsb2FkaW5nIGJhciBrZWVwcyBmbGFzaGluZyB3aGVuIHVzaW5nIGpzb25wLXBvbGxpbmdcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3l1amlvc2FrYS9zb2NrZS5pby1pZTgtbG9hZGluZy1leGFtcGxlXG4gIHRyeSB7XG4gICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgWERvbWFpblJlcXVlc3QgJiYgIXhzY2hlbWUgJiYgZW5hYmxlc1hEUikge1xuICAgICAgcmV0dXJuIG5ldyBYRG9tYWluUmVxdWVzdCgpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkgeyB9XG5cbiAgaWYgKCF4ZG9tYWluKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgZ2xvYmFsVGhpc1tbJ0FjdGl2ZSddLmNvbmNhdCgnT2JqZWN0Jykuam9pbignWCcpXSgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICB9IGNhdGNoIChlKSB7IH1cbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBzZWxmO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctZnVuY1xuICB9XG59KSgpO1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBUcmFuc3BvcnQ7XG5cbi8qKlxuICogVHJhbnNwb3J0IGFic3RyYWN0IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gVHJhbnNwb3J0IChvcHRzKSB7XG4gIHRoaXMucGF0aCA9IG9wdHMucGF0aDtcbiAgdGhpcy5ob3N0bmFtZSA9IG9wdHMuaG9zdG5hbWU7XG4gIHRoaXMucG9ydCA9IG9wdHMucG9ydDtcbiAgdGhpcy5zZWN1cmUgPSBvcHRzLnNlY3VyZTtcbiAgdGhpcy5xdWVyeSA9IG9wdHMucXVlcnk7XG4gIHRoaXMudGltZXN0YW1wUGFyYW0gPSBvcHRzLnRpbWVzdGFtcFBhcmFtO1xuICB0aGlzLnRpbWVzdGFtcFJlcXVlc3RzID0gb3B0cy50aW1lc3RhbXBSZXF1ZXN0cztcbiAgdGhpcy5yZWFkeVN0YXRlID0gJyc7XG4gIHRoaXMuYWdlbnQgPSBvcHRzLmFnZW50IHx8IGZhbHNlO1xuICB0aGlzLnNvY2tldCA9IG9wdHMuc29ja2V0O1xuICB0aGlzLmVuYWJsZXNYRFIgPSBvcHRzLmVuYWJsZXNYRFI7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gb3B0cy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIHRoaXMucGZ4ID0gb3B0cy5wZng7XG4gIHRoaXMua2V5ID0gb3B0cy5rZXk7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZTtcbiAgdGhpcy5jZXJ0ID0gb3B0cy5jZXJ0O1xuICB0aGlzLmNhID0gb3B0cy5jYTtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzO1xuICB0aGlzLnJlamVjdFVuYXV0aG9yaXplZCA9IG9wdHMucmVqZWN0VW5hdXRob3JpemVkO1xuICB0aGlzLmZvcmNlTm9kZSA9IG9wdHMuZm9yY2VOb2RlO1xuXG4gIC8vIHJlc3VsdHMgb2YgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnQgZGV0ZWN0aW9uXG4gIHRoaXMuaXNSZWFjdE5hdGl2ZSA9IG9wdHMuaXNSZWFjdE5hdGl2ZTtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICB0aGlzLmV4dHJhSGVhZGVycyA9IG9wdHMuZXh0cmFIZWFkZXJzO1xuICB0aGlzLmxvY2FsQWRkcmVzcyA9IG9wdHMubG9jYWxBZGRyZXNzO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihUcmFuc3BvcnQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBFbWl0cyBhbiBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtUcmFuc3BvcnR9IGZvciBjaGFpbmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uRXJyb3IgPSBmdW5jdGlvbiAobXNnLCBkZXNjKSB7XG4gIHZhciBlcnIgPSBuZXcgRXJyb3IobXNnKTtcbiAgZXJyLnR5cGUgPSAnVHJhbnNwb3J0RXJyb3InO1xuICBlcnIuZGVzY3JpcHRpb24gPSBkZXNjO1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE9wZW5zIHRoZSB0cmFuc3BvcnQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnY2xvc2VkJyA9PT0gdGhpcy5yZWFkeVN0YXRlIHx8ICcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAnb3BlbmluZyc7XG4gICAgdGhpcy5kb09wZW4oKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDbG9zZXMgdGhlIHRyYW5zcG9ydC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICB0aGlzLmRvQ2xvc2UoKTtcbiAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBtdWx0aXBsZSBwYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhY2tldHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblRyYW5zcG9ydC5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChwYWNrZXRzKSB7XG4gIGlmICgnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMud3JpdGUocGFja2V0cyk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUcmFuc3BvcnQgbm90IG9wZW4nKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBvcGVuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdvcGVuJztcbiAgdGhpcy53cml0YWJsZSA9IHRydWU7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBkYXRhLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uRGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBwYWNrZXQgPSBwYXJzZXIuZGVjb2RlUGFja2V0KGRhdGEsIHRoaXMuc29ja2V0LmJpbmFyeVR5cGUpO1xuICB0aGlzLm9uUGFja2V0KHBhY2tldCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIGEgZGVjb2RlZCBwYWNrZXQuXG4gKi9cblxuVHJhbnNwb3J0LnByb3RvdHlwZS5vblBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5UcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG59O1xuIiwiXHJcbi8qKlxyXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxyXG4gKi9cclxuXHJcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxyXG4gKlxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XHJcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XHJcbn07XHJcblxyXG4vKipcclxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IG9ialxyXG4gKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbmZ1bmN0aW9uIG1peGluKG9iaikge1xyXG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xyXG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xyXG4gIH1cclxuICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG4vKipcclxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUub24gPVxyXG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcbiAgKHRoaXMuX2NhbGxiYWNrc1snJCcgKyBldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdKVxyXG4gICAgLnB1c2goZm4pO1xyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxyXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cclxuICogQHJldHVybiB7RW1pdHRlcn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcclxuICBmdW5jdGlvbiBvbigpIHtcclxuICAgIHRoaXMub2ZmKGV2ZW50LCBvbik7XHJcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgb24uZm4gPSBmbjtcclxuICB0aGlzLm9uKGV2ZW50LCBvbik7XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG4vKipcclxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcclxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxyXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxyXG4gKiBAYXBpIHB1YmxpY1xyXG4gKi9cclxuXHJcbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XHJcbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cclxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG5cclxuICAvLyBhbGxcclxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gc3BlY2lmaWMgZXZlbnRcclxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XHJcblxyXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcclxuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcclxuICB2YXIgY2I7XHJcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcclxuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xyXG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcclxuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZW1vdmUgZXZlbnQgc3BlY2lmaWMgYXJyYXlzIGZvciBldmVudCB0eXBlcyB0aGF0IG5vXHJcbiAgLy8gb25lIGlzIHN1YnNjcmliZWQgZm9yIHRvIGF2b2lkIG1lbW9yeSBsZWFrLlxyXG4gIGlmIChjYWxsYmFja3MubGVuZ3RoID09PSAwKSB7XHJcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzWyckJyArIGV2ZW50XTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcclxuICogQHBhcmFtIHtNaXhlZH0gLi4uXHJcbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcclxuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XHJcblxyXG4gIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKVxyXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XHJcbiAgfVxyXG5cclxuICBpZiAoY2FsbGJhY2tzKSB7XHJcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XHJcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XHJcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xyXG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbJyQnICsgZXZlbnRdIHx8IFtdO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cclxuICpcclxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XHJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XHJcbiAqIEBhcGkgcHVibGljXHJcbiAqL1xyXG5cclxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xyXG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xyXG59O1xyXG4iLCIvKipcclxuICogUGFyc2VzIGFuIFVSSVxyXG4gKlxyXG4gKiBAYXV0aG9yIFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPiAoTUlUIGxpY2Vuc2UpXHJcbiAqIEBhcGkgcHJpdmF0ZVxyXG4gKi9cclxuXHJcbnZhciByZSA9IC9eKD86KD8hW146QF0rOlteOkBcXC9dKkApKGh0dHB8aHR0cHN8d3N8d3NzKTpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KCg/OlthLWYwLTldezAsNH06KXsyLDd9W2EtZjAtOV17MCw0fXxbXjpcXC8/I10qKSg/OjooXFxkKikpPykoKChcXC8oPzpbXj8jXSg/IVtePyNcXC9dKlxcLltePyNcXC8uXSsoPzpbPyNdfCQpKSkqXFwvPyk/KFtePyNcXC9dKikpKD86XFw/KFteI10qKSk/KD86IyguKikpPykvO1xyXG5cclxudmFyIHBhcnRzID0gW1xyXG4gICAgJ3NvdXJjZScsICdwcm90b2NvbCcsICdhdXRob3JpdHknLCAndXNlckluZm8nLCAndXNlcicsICdwYXNzd29yZCcsICdob3N0JywgJ3BvcnQnLCAncmVsYXRpdmUnLCAncGF0aCcsICdkaXJlY3RvcnknLCAnZmlsZScsICdxdWVyeScsICdhbmNob3InXHJcbl07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNldXJpKHN0cikge1xyXG4gICAgdmFyIHNyYyA9IHN0cixcclxuICAgICAgICBiID0gc3RyLmluZGV4T2YoJ1snKSxcclxuICAgICAgICBlID0gc3RyLmluZGV4T2YoJ10nKTtcclxuXHJcbiAgICBpZiAoYiAhPSAtMSAmJiBlICE9IC0xKSB7XHJcbiAgICAgICAgc3RyID0gc3RyLnN1YnN0cmluZygwLCBiKSArIHN0ci5zdWJzdHJpbmcoYiwgZSkucmVwbGFjZSgvOi9nLCAnOycpICsgc3RyLnN1YnN0cmluZyhlLCBzdHIubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3RyIHx8ICcnKSxcclxuICAgICAgICB1cmkgPSB7fSxcclxuICAgICAgICBpID0gMTQ7XHJcblxyXG4gICAgd2hpbGUgKGktLSkge1xyXG4gICAgICAgIHVyaVtwYXJ0c1tpXV0gPSBtW2ldIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChiICE9IC0xICYmIGUgIT0gLTEpIHtcclxuICAgICAgICB1cmkuc291cmNlID0gc3JjO1xyXG4gICAgICAgIHVyaS5ob3N0ID0gdXJpLmhvc3Quc3Vic3RyaW5nKDEsIHVyaS5ob3N0Lmxlbmd0aCAtIDEpLnJlcGxhY2UoLzsvZywgJzonKTtcclxuICAgICAgICB1cmkuYXV0aG9yaXR5ID0gdXJpLmF1dGhvcml0eS5yZXBsYWNlKCdbJywgJycpLnJlcGxhY2UoJ10nLCAnJykucmVwbGFjZSgvOy9nLCAnOicpO1xyXG4gICAgICAgIHVyaS5pcHY2dXJpID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXJpO1xyXG59O1xyXG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXG5tb2R1bGUuZXhwb3J0cyA9IGlzQnVmO1xuXG52YXIgd2l0aE5hdGl2ZUJ1ZmZlciA9IHR5cGVvZiBCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIEJ1ZmZlci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJztcbnZhciB3aXRoTmF0aXZlQXJyYXlCdWZmZXIgPSB0eXBlb2YgQXJyYXlCdWZmZXIgPT09ICdmdW5jdGlvbic7XG5cbnZhciBpc1ZpZXcgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2YgQXJyYXlCdWZmZXIuaXNWaWV3ID09PSAnZnVuY3Rpb24nID8gQXJyYXlCdWZmZXIuaXNWaWV3KG9iaikgOiAob2JqLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG9iaiBpcyBhIGJ1ZmZlciBvciBhbiBhcnJheWJ1ZmZlci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBpc0J1ZihvYmopIHtcbiAgcmV0dXJuICh3aXRoTmF0aXZlQnVmZmVyICYmIEJ1ZmZlci5pc0J1ZmZlcihvYmopKSB8fFxuICAgICAgICAgICh3aXRoTmF0aXZlQXJyYXlCdWZmZXIgJiYgKG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyIHx8IGlzVmlldyhvYmopKSk7XG59XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgZWlvID0gcmVxdWlyZSgnZW5naW5lLmlvLWNsaWVudCcpO1xudmFyIFNvY2tldCA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnc29ja2V0LmlvLXBhcnNlcicpO1xudmFyIG9uID0gcmVxdWlyZSgnLi9vbicpO1xudmFyIGJpbmQgPSByZXF1aXJlKCdjb21wb25lbnQtYmluZCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDptYW5hZ2VyJyk7XG52YXIgaW5kZXhPZiA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcbnZhciBCYWNrb2ZmID0gcmVxdWlyZSgnYmFja28yJyk7XG5cbi8qKlxuICogSUU2KyBoYXNPd25Qcm9wZXJ0eVxuICovXG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBNYW5hZ2VyO1xuXG4vKipcbiAqIGBNYW5hZ2VyYCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5naW5lIGluc3RhbmNlIG9yIGVuZ2luZSB1cmkvb3B0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gTWFuYWdlciAodXJpLCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBNYW5hZ2VyKSkgcmV0dXJuIG5ldyBNYW5hZ2VyKHVyaSwgb3B0cyk7XG4gIGlmICh1cmkgJiYgKCdvYmplY3QnID09PSB0eXBlb2YgdXJpKSkge1xuICAgIG9wdHMgPSB1cmk7XG4gICAgdXJpID0gdW5kZWZpbmVkO1xuICB9XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIG9wdHMucGF0aCA9IG9wdHMucGF0aCB8fCAnL3NvY2tldC5pbyc7XG4gIHRoaXMubnNwcyA9IHt9O1xuICB0aGlzLnN1YnMgPSBbXTtcbiAgdGhpcy5vcHRzID0gb3B0cztcbiAgdGhpcy5yZWNvbm5lY3Rpb24ob3B0cy5yZWNvbm5lY3Rpb24gIT09IGZhbHNlKTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25BdHRlbXB0cyhvcHRzLnJlY29ubmVjdGlvbkF0dGVtcHRzIHx8IEluZmluaXR5KTtcbiAgdGhpcy5yZWNvbm5lY3Rpb25EZWxheShvcHRzLnJlY29ubmVjdGlvbkRlbGF5IHx8IDEwMDApO1xuICB0aGlzLnJlY29ubmVjdGlvbkRlbGF5TWF4KG9wdHMucmVjb25uZWN0aW9uRGVsYXlNYXggfHwgNTAwMCk7XG4gIHRoaXMucmFuZG9taXphdGlvbkZhY3RvcihvcHRzLnJhbmRvbWl6YXRpb25GYWN0b3IgfHwgMC41KTtcbiAgdGhpcy5iYWNrb2ZmID0gbmV3IEJhY2tvZmYoe1xuICAgIG1pbjogdGhpcy5yZWNvbm5lY3Rpb25EZWxheSgpLFxuICAgIG1heDogdGhpcy5yZWNvbm5lY3Rpb25EZWxheU1heCgpLFxuICAgIGppdHRlcjogdGhpcy5yYW5kb21pemF0aW9uRmFjdG9yKClcbiAgfSk7XG4gIHRoaXMudGltZW91dChudWxsID09IG9wdHMudGltZW91dCA/IDIwMDAwIDogb3B0cy50aW1lb3V0KTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIHRoaXMudXJpID0gdXJpO1xuICB0aGlzLmNvbm5lY3RpbmcgPSBbXTtcbiAgdGhpcy5sYXN0UGluZyA9IG51bGw7XG4gIHRoaXMuZW5jb2RpbmcgPSBmYWxzZTtcbiAgdGhpcy5wYWNrZXRCdWZmZXIgPSBbXTtcbiAgdmFyIF9wYXJzZXIgPSBvcHRzLnBhcnNlciB8fCBwYXJzZXI7XG4gIHRoaXMuZW5jb2RlciA9IG5ldyBfcGFyc2VyLkVuY29kZXIoKTtcbiAgdGhpcy5kZWNvZGVyID0gbmV3IF9wYXJzZXIuRGVjb2RlcigpO1xuICB0aGlzLmF1dG9Db25uZWN0ID0gb3B0cy5hdXRvQ29ubmVjdCAhPT0gZmFsc2U7XG4gIGlmICh0aGlzLmF1dG9Db25uZWN0KSB0aGlzLm9wZW4oKTtcbn1cblxuLyoqXG4gKiBQcm9wYWdhdGUgZ2l2ZW4gZXZlbnQgdG8gc29ja2V0cyBhbmQgZW1pdCBvbiBgdGhpc2BcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5lbWl0QWxsID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmVtaXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgZm9yICh2YXIgbnNwIGluIHRoaXMubnNwcykge1xuICAgIGlmIChoYXMuY2FsbCh0aGlzLm5zcHMsIG5zcCkpIHtcbiAgICAgIHRoaXMubnNwc1tuc3BdLmVtaXQuYXBwbHkodGhpcy5uc3BzW25zcF0sIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFVwZGF0ZSBgc29ja2V0LmlkYCBvZiBhbGwgc29ja2V0c1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnVwZGF0ZVNvY2tldElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgZm9yICh2YXIgbnNwIGluIHRoaXMubnNwcykge1xuICAgIGlmIChoYXMuY2FsbCh0aGlzLm5zcHMsIG5zcCkpIHtcbiAgICAgIHRoaXMubnNwc1tuc3BdLmlkID0gdGhpcy5nZW5lcmF0ZUlkKG5zcCk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIGdlbmVyYXRlIGBzb2NrZXQuaWRgIGZvciB0aGUgZ2l2ZW4gYG5zcGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbnNwXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5nZW5lcmF0ZUlkID0gZnVuY3Rpb24gKG5zcCkge1xuICByZXR1cm4gKG5zcCA9PT0gJy8nID8gJycgOiAobnNwICsgJyMnKSkgKyB0aGlzLmVuZ2luZS5pZDtcbn07XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKE1hbmFnZXIucHJvdG90eXBlKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgcmVjb25uZWN0aW9uYCBjb25maWcuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSB0cnVlL2ZhbHNlIGlmIGl0IHNob3VsZCBhdXRvbWF0aWNhbGx5IHJlY29ubmVjdFxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb24gPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl9yZWNvbm5lY3Rpb247XG4gIHRoaXMuX3JlY29ubmVjdGlvbiA9ICEhdjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIHJlY29ubmVjdGlvbiBhdHRlbXB0cyBjb25maWcuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1heCByZWNvbm5lY3Rpb24gYXR0ZW1wdHMgYmVmb3JlIGdpdmluZyB1cFxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzO1xuICB0aGlzLl9yZWNvbm5lY3Rpb25BdHRlbXB0cyA9IHY7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSBkZWxheSBiZXR3ZWVuIHJlY29ubmVjdGlvbnMuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGRlbGF5XG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnJlY29ubmVjdGlvbkRlbGF5ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm4gdGhpcy5fcmVjb25uZWN0aW9uRGVsYXk7XG4gIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5ID0gdjtcbiAgdGhpcy5iYWNrb2ZmICYmIHRoaXMuYmFja29mZi5zZXRNaW4odik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuTWFuYWdlci5wcm90b3R5cGUucmFuZG9taXphdGlvbkZhY3RvciA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3I7XG4gIHRoaXMuX3JhbmRvbWl6YXRpb25GYWN0b3IgPSB2O1xuICB0aGlzLmJhY2tvZmYgJiYgdGhpcy5iYWNrb2ZmLnNldEppdHRlcih2KTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIG1heGltdW0gZGVsYXkgYmV0d2VlbiByZWNvbm5lY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBkZWxheVxuICogQHJldHVybiB7TWFuYWdlcn0gc2VsZiBvciB2YWx1ZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3Rpb25EZWxheU1heCA9IGZ1bmN0aW9uICh2KSB7XG4gIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3JlY29ubmVjdGlvbkRlbGF5TWF4O1xuICB0aGlzLl9yZWNvbm5lY3Rpb25EZWxheU1heCA9IHY7XG4gIHRoaXMuYmFja29mZiAmJiB0aGlzLmJhY2tvZmYuc2V0TWF4KHYpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY29ubmVjdGlvbiB0aW1lb3V0LiBgZmFsc2VgIHRvIGRpc2FibGVcbiAqXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmIG9yIHZhbHVlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnRpbWVvdXQgPSBmdW5jdGlvbiAodikge1xuICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVybiB0aGlzLl90aW1lb3V0O1xuICB0aGlzLl90aW1lb3V0ID0gdjtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyB0cnlpbmcgdG8gcmVjb25uZWN0IGlmIHJlY29ubmVjdGlvbiBpcyBlbmFibGVkIGFuZCB3ZSBoYXZlIG5vdFxuICogc3RhcnRlZCByZWNvbm5lY3RpbmcgeWV0XG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUubWF5YmVSZWNvbm5lY3RPbk9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIC8vIE9ubHkgdHJ5IHRvIHJlY29ubmVjdCBpZiBpdCdzIHRoZSBmaXJzdCB0aW1lIHdlJ3JlIGNvbm5lY3RpbmdcbiAgaWYgKCF0aGlzLnJlY29ubmVjdGluZyAmJiB0aGlzLl9yZWNvbm5lY3Rpb24gJiYgdGhpcy5iYWNrb2ZmLmF0dGVtcHRzID09PSAwKSB7XG4gICAgLy8ga2VlcHMgcmVjb25uZWN0aW9uIGZyb20gZmlyaW5nIHR3aWNlIGZvciB0aGUgc2FtZSByZWNvbm5lY3Rpb24gbG9vcFxuICAgIHRoaXMucmVjb25uZWN0KCk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQgYHNvY2tldGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3B0aW9uYWwsIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtNYW5hZ2VyfSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9wZW4gPVxuTWFuYWdlci5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uIChmbiwgb3B0cykge1xuICBkZWJ1ZygncmVhZHlTdGF0ZSAlcycsIHRoaXMucmVhZHlTdGF0ZSk7XG4gIGlmICh+dGhpcy5yZWFkeVN0YXRlLmluZGV4T2YoJ29wZW4nKSkgcmV0dXJuIHRoaXM7XG5cbiAgZGVidWcoJ29wZW5pbmcgJXMnLCB0aGlzLnVyaSk7XG4gIHRoaXMuZW5naW5lID0gZWlvKHRoaXMudXJpLCB0aGlzLm9wdHMpO1xuICB2YXIgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuICB0aGlzLnNraXBSZWNvbm5lY3QgPSBmYWxzZTtcblxuICAvLyBlbWl0IGBvcGVuYFxuICB2YXIgb3BlblN1YiA9IG9uKHNvY2tldCwgJ29wZW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbm9wZW4oKTtcbiAgICBmbiAmJiBmbigpO1xuICB9KTtcblxuICAvLyBlbWl0IGBjb25uZWN0X2Vycm9yYFxuICB2YXIgZXJyb3JTdWIgPSBvbihzb2NrZXQsICdlcnJvcicsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGVidWcoJ2Nvbm5lY3RfZXJyb3InKTtcbiAgICBzZWxmLmNsZWFudXAoKTtcbiAgICBzZWxmLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcbiAgICBzZWxmLmVtaXRBbGwoJ2Nvbm5lY3RfZXJyb3InLCBkYXRhKTtcbiAgICBpZiAoZm4pIHtcbiAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ0Nvbm5lY3Rpb24gZXJyb3InKTtcbiAgICAgIGVyci5kYXRhID0gZGF0YTtcbiAgICAgIGZuKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9ubHkgZG8gdGhpcyBpZiB0aGVyZSBpcyBubyBmbiB0byBoYW5kbGUgdGhlIGVycm9yXG4gICAgICBzZWxmLm1heWJlUmVjb25uZWN0T25PcGVuKCk7XG4gICAgfVxuICB9KTtcblxuICAvLyBlbWl0IGBjb25uZWN0X3RpbWVvdXRgXG4gIGlmIChmYWxzZSAhPT0gdGhpcy5fdGltZW91dCkge1xuICAgIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dDtcbiAgICBkZWJ1ZygnY29ubmVjdCBhdHRlbXB0IHdpbGwgdGltZW91dCBhZnRlciAlZCcsIHRpbWVvdXQpO1xuXG4gICAgLy8gc2V0IHRpbWVyXG4gICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBkZWJ1ZygnY29ubmVjdCBhdHRlbXB0IHRpbWVkIG91dCBhZnRlciAlZCcsIHRpbWVvdXQpO1xuICAgICAgb3BlblN1Yi5kZXN0cm95KCk7XG4gICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgIHNvY2tldC5lbWl0KCdlcnJvcicsICd0aW1lb3V0Jyk7XG4gICAgICBzZWxmLmVtaXRBbGwoJ2Nvbm5lY3RfdGltZW91dCcsIHRpbWVvdXQpO1xuICAgIH0sIHRpbWVvdXQpO1xuXG4gICAgdGhpcy5zdWJzLnB1c2goe1xuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdGhpcy5zdWJzLnB1c2gob3BlblN1Yik7XG4gIHRoaXMuc3Vicy5wdXNoKGVycm9yU3ViKTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IG9wZW4uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Zygnb3BlbicpO1xuXG4gIC8vIGNsZWFyIG9sZCBzdWJzXG4gIHRoaXMuY2xlYW51cCgpO1xuXG4gIC8vIG1hcmsgYXMgb3BlblxuICB0aGlzLnJlYWR5U3RhdGUgPSAnb3Blbic7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xuXG4gIC8vIGFkZCBuZXcgc3Vic1xuICB2YXIgc29ja2V0ID0gdGhpcy5lbmdpbmU7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2RhdGEnLCBiaW5kKHRoaXMsICdvbmRhdGEnKSkpO1xuICB0aGlzLnN1YnMucHVzaChvbihzb2NrZXQsICdwaW5nJywgYmluZCh0aGlzLCAnb25waW5nJykpKTtcbiAgdGhpcy5zdWJzLnB1c2gob24oc29ja2V0LCAncG9uZycsIGJpbmQodGhpcywgJ29ucG9uZycpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2Vycm9yJywgYmluZCh0aGlzLCAnb25lcnJvcicpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHNvY2tldCwgJ2Nsb3NlJywgYmluZCh0aGlzLCAnb25jbG9zZScpKSk7XG4gIHRoaXMuc3Vicy5wdXNoKG9uKHRoaXMuZGVjb2RlciwgJ2RlY29kZWQnLCBiaW5kKHRoaXMsICdvbmRlY29kZWQnKSkpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHBpbmcuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25waW5nID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmxhc3RQaW5nID0gbmV3IERhdGUoKTtcbiAgdGhpcy5lbWl0QWxsKCdwaW5nJyk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGEgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ucG9uZyA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5lbWl0QWxsKCdwb25nJywgbmV3IERhdGUoKSAtIHRoaXMubGFzdFBpbmcpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgd2l0aCBkYXRhLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uZGF0YSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHRoaXMuZGVjb2Rlci5hZGQoZGF0YSk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aGVuIHBhcnNlciBmdWxseSBkZWNvZGVzIGEgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9uZGVjb2RlZCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdGhpcy5lbWl0KCdwYWNrZXQnLCBwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBzb2NrZXQgZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgZGVidWcoJ2Vycm9yJywgZXJyKTtcbiAgdGhpcy5lbWl0QWxsKCdlcnJvcicsIGVycik7XG59O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgc29ja2V0IGZvciB0aGUgZ2l2ZW4gYG5zcGAuXG4gKlxuICogQHJldHVybiB7U29ja2V0fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5zb2NrZXQgPSBmdW5jdGlvbiAobnNwLCBvcHRzKSB7XG4gIHZhciBzb2NrZXQgPSB0aGlzLm5zcHNbbnNwXTtcbiAgaWYgKCFzb2NrZXQpIHtcbiAgICBzb2NrZXQgPSBuZXcgU29ja2V0KHRoaXMsIG5zcCwgb3B0cyk7XG4gICAgdGhpcy5uc3BzW25zcF0gPSBzb2NrZXQ7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNvY2tldC5vbignY29ubmVjdGluZycsIG9uQ29ubmVjdGluZyk7XG4gICAgc29ja2V0Lm9uKCdjb25uZWN0JywgZnVuY3Rpb24gKCkge1xuICAgICAgc29ja2V0LmlkID0gc2VsZi5nZW5lcmF0ZUlkKG5zcCk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5hdXRvQ29ubmVjdCkge1xuICAgICAgLy8gbWFudWFsbHkgY2FsbCBoZXJlIHNpbmNlIGNvbm5lY3RpbmcgZXZlbnQgaXMgZmlyZWQgYmVmb3JlIGxpc3RlbmluZ1xuICAgICAgb25Db25uZWN0aW5nKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb25Db25uZWN0aW5nICgpIHtcbiAgICBpZiAoIX5pbmRleE9mKHNlbGYuY29ubmVjdGluZywgc29ja2V0KSkge1xuICAgICAgc2VsZi5jb25uZWN0aW5nLnB1c2goc29ja2V0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc29ja2V0O1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBhIHNvY2tldCBjbG9zZS5cbiAqXG4gKiBAcGFyYW0ge1NvY2tldH0gc29ja2V0XG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChzb2NrZXQpIHtcbiAgdmFyIGluZGV4ID0gaW5kZXhPZih0aGlzLmNvbm5lY3RpbmcsIHNvY2tldCk7XG4gIGlmICh+aW5kZXgpIHRoaXMuY29ubmVjdGluZy5zcGxpY2UoaW5kZXgsIDEpO1xuICBpZiAodGhpcy5jb25uZWN0aW5nLmxlbmd0aCkgcmV0dXJuO1xuXG4gIHRoaXMuY2xvc2UoKTtcbn07XG5cbi8qKlxuICogV3JpdGVzIGEgcGFja2V0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLnBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgZGVidWcoJ3dyaXRpbmcgcGFja2V0ICVqJywgcGFja2V0KTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAocGFja2V0LnF1ZXJ5ICYmIHBhY2tldC50eXBlID09PSAwKSBwYWNrZXQubnNwICs9ICc/JyArIHBhY2tldC5xdWVyeTtcblxuICBpZiAoIXNlbGYuZW5jb2RpbmcpIHtcbiAgICAvLyBlbmNvZGUsIHRoZW4gd3JpdGUgdG8gZW5naW5lIHdpdGggcmVzdWx0XG4gICAgc2VsZi5lbmNvZGluZyA9IHRydWU7XG4gICAgdGhpcy5lbmNvZGVyLmVuY29kZShwYWNrZXQsIGZ1bmN0aW9uIChlbmNvZGVkUGFja2V0cykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbmNvZGVkUGFja2V0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzZWxmLmVuZ2luZS53cml0ZShlbmNvZGVkUGFja2V0c1tpXSwgcGFja2V0Lm9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgc2VsZi5lbmNvZGluZyA9IGZhbHNlO1xuICAgICAgc2VsZi5wcm9jZXNzUGFja2V0UXVldWUoKTtcbiAgICB9KTtcbiAgfSBlbHNlIHsgLy8gYWRkIHBhY2tldCB0byB0aGUgcXVldWVcbiAgICBzZWxmLnBhY2tldEJ1ZmZlci5wdXNoKHBhY2tldCk7XG4gIH1cbn07XG5cbi8qKlxuICogSWYgcGFja2V0IGJ1ZmZlciBpcyBub24tZW1wdHksIGJlZ2lucyBlbmNvZGluZyB0aGVcbiAqIG5leHQgcGFja2V0IGluIGxpbmUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuTWFuYWdlci5wcm90b3R5cGUucHJvY2Vzc1BhY2tldFF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5wYWNrZXRCdWZmZXIubGVuZ3RoID4gMCAmJiAhdGhpcy5lbmNvZGluZykge1xuICAgIHZhciBwYWNrID0gdGhpcy5wYWNrZXRCdWZmZXIuc2hpZnQoKTtcbiAgICB0aGlzLnBhY2tldChwYWNrKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDbGVhbiB1cCB0cmFuc3BvcnQgc3Vic2NyaXB0aW9ucyBhbmQgcGFja2V0IGJ1ZmZlci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygnY2xlYW51cCcpO1xuXG4gIHZhciBzdWJzTGVuZ3RoID0gdGhpcy5zdWJzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc3ViID0gdGhpcy5zdWJzLnNoaWZ0KCk7XG4gICAgc3ViLmRlc3Ryb3koKTtcbiAgfVxuXG4gIHRoaXMucGFja2V0QnVmZmVyID0gW107XG4gIHRoaXMuZW5jb2RpbmcgPSBmYWxzZTtcbiAgdGhpcy5sYXN0UGluZyA9IG51bGw7XG5cbiAgdGhpcy5kZWNvZGVyLmRlc3Ryb3koKTtcbn07XG5cbi8qKlxuICogQ2xvc2UgdGhlIGN1cnJlbnQgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLmNsb3NlID1cbk1hbmFnZXIucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdkaXNjb25uZWN0Jyk7XG4gIHRoaXMuc2tpcFJlY29ubmVjdCA9IHRydWU7XG4gIHRoaXMucmVjb25uZWN0aW5nID0gZmFsc2U7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIC8vIGBvbmNsb3NlYCB3aWxsIG5vdCBmaXJlIGJlY2F1c2VcbiAgICAvLyBhbiBvcGVuIGV2ZW50IG5ldmVyIGhhcHBlbmVkXG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gIH1cbiAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zZWQnO1xuICBpZiAodGhpcy5lbmdpbmUpIHRoaXMuZW5naW5lLmNsb3NlKCk7XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGVuZ2luZSBjbG9zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICBkZWJ1Zygnb25jbG9zZScpO1xuXG4gIHRoaXMuY2xlYW51cCgpO1xuICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ2Nsb3NlZCc7XG4gIHRoaXMuZW1pdCgnY2xvc2UnLCByZWFzb24pO1xuXG4gIGlmICh0aGlzLl9yZWNvbm5lY3Rpb24gJiYgIXRoaXMuc2tpcFJlY29ubmVjdCkge1xuICAgIHRoaXMucmVjb25uZWN0KCk7XG4gIH1cbn07XG5cbi8qKlxuICogQXR0ZW1wdCBhIHJlY29ubmVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5NYW5hZ2VyLnByb3RvdHlwZS5yZWNvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnJlY29ubmVjdGluZyB8fCB0aGlzLnNraXBSZWNvbm5lY3QpIHJldHVybiB0aGlzO1xuXG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAodGhpcy5iYWNrb2ZmLmF0dGVtcHRzID49IHRoaXMuX3JlY29ubmVjdGlvbkF0dGVtcHRzKSB7XG4gICAgZGVidWcoJ3JlY29ubmVjdCBmYWlsZWQnKTtcbiAgICB0aGlzLmJhY2tvZmYucmVzZXQoKTtcbiAgICB0aGlzLmVtaXRBbGwoJ3JlY29ubmVjdF9mYWlsZWQnKTtcbiAgICB0aGlzLnJlY29ubmVjdGluZyA9IGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHZhciBkZWxheSA9IHRoaXMuYmFja29mZi5kdXJhdGlvbigpO1xuICAgIGRlYnVnKCd3aWxsIHdhaXQgJWRtcyBiZWZvcmUgcmVjb25uZWN0IGF0dGVtcHQnLCBkZWxheSk7XG5cbiAgICB0aGlzLnJlY29ubmVjdGluZyA9IHRydWU7XG4gICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5za2lwUmVjb25uZWN0KSByZXR1cm47XG5cbiAgICAgIGRlYnVnKCdhdHRlbXB0aW5nIHJlY29ubmVjdCcpO1xuICAgICAgc2VsZi5lbWl0QWxsKCdyZWNvbm5lY3RfYXR0ZW1wdCcsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG4gICAgICBzZWxmLmVtaXRBbGwoJ3JlY29ubmVjdGluZycsIHNlbGYuYmFja29mZi5hdHRlbXB0cyk7XG5cbiAgICAgIC8vIGNoZWNrIGFnYWluIGZvciB0aGUgY2FzZSBzb2NrZXQgY2xvc2VkIGluIGFib3ZlIGV2ZW50c1xuICAgICAgaWYgKHNlbGYuc2tpcFJlY29ubmVjdCkgcmV0dXJuO1xuXG4gICAgICBzZWxmLm9wZW4oZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgZGVidWcoJ3JlY29ubmVjdCBhdHRlbXB0IGVycm9yJyk7XG4gICAgICAgICAgc2VsZi5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgICAgICAgICBzZWxmLnJlY29ubmVjdCgpO1xuICAgICAgICAgIHNlbGYuZW1pdEFsbCgncmVjb25uZWN0X2Vycm9yJywgZXJyLmRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnKCdyZWNvbm5lY3Qgc3VjY2VzcycpO1xuICAgICAgICAgIHNlbGYub25yZWNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZGVsYXkpO1xuXG4gICAgdGhpcy5zdWJzLnB1c2goe1xuICAgICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHN1Y2Nlc3NmdWwgcmVjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbk1hbmFnZXIucHJvdG90eXBlLm9ucmVjb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICB2YXIgYXR0ZW1wdCA9IHRoaXMuYmFja29mZi5hdHRlbXB0cztcbiAgdGhpcy5yZWNvbm5lY3RpbmcgPSBmYWxzZTtcbiAgdGhpcy5iYWNrb2ZmLnJlc2V0KCk7XG4gIHRoaXMudXBkYXRlU29ja2V0SWRzKCk7XG4gIHRoaXMuZW1pdEFsbCgncmVjb25uZWN0JywgYXR0ZW1wdCk7XG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzXG4gKi9cblxudmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG52YXIgWEhSID0gcmVxdWlyZSgnLi9wb2xsaW5nLXhocicpO1xudmFyIEpTT05QID0gcmVxdWlyZSgnLi9wb2xsaW5nLWpzb25wJyk7XG52YXIgd2Vic29ja2V0ID0gcmVxdWlyZSgnLi93ZWJzb2NrZXQnKTtcblxuLyoqXG4gKiBFeHBvcnQgdHJhbnNwb3J0cy5cbiAqL1xuXG5leHBvcnRzLnBvbGxpbmcgPSBwb2xsaW5nO1xuZXhwb3J0cy53ZWJzb2NrZXQgPSB3ZWJzb2NrZXQ7XG5cbi8qKlxuICogUG9sbGluZyB0cmFuc3BvcnQgcG9seW1vcnBoaWMgY29uc3RydWN0b3IuXG4gKiBEZWNpZGVzIG9uIHhociB2cyBqc29ucCBiYXNlZCBvbiBmZWF0dXJlIGRldGVjdGlvbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwb2xsaW5nIChvcHRzKSB7XG4gIHZhciB4aHI7XG4gIHZhciB4ZCA9IGZhbHNlO1xuICB2YXIgeHMgPSBmYWxzZTtcbiAgdmFyIGpzb25wID0gZmFsc2UgIT09IG9wdHMuanNvbnA7XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgaXNTU0wgPSAnaHR0cHM6JyA9PT0gbG9jYXRpb24ucHJvdG9jb2w7XG4gICAgdmFyIHBvcnQgPSBsb2NhdGlvbi5wb3J0O1xuXG4gICAgLy8gc29tZSB1c2VyIGFnZW50cyBoYXZlIGVtcHR5IGBsb2NhdGlvbi5wb3J0YFxuICAgIGlmICghcG9ydCkge1xuICAgICAgcG9ydCA9IGlzU1NMID8gNDQzIDogODA7XG4gICAgfVxuXG4gICAgeGQgPSBvcHRzLmhvc3RuYW1lICE9PSBsb2NhdGlvbi5ob3N0bmFtZSB8fCBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgeHMgPSBvcHRzLnNlY3VyZSAhPT0gaXNTU0w7XG4gIH1cblxuICBvcHRzLnhkb21haW4gPSB4ZDtcbiAgb3B0cy54c2NoZW1lID0geHM7XG4gIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdChvcHRzKTtcblxuICBpZiAoJ29wZW4nIGluIHhociAmJiAhb3B0cy5mb3JjZUpTT05QKSB7XG4gICAgcmV0dXJuIG5ldyBYSFIob3B0cyk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFqc29ucCkgdGhyb3cgbmV3IEVycm9yKCdKU09OUCBkaXNhYmxlZCcpO1xuICAgIHJldHVybiBuZXcgSlNPTlAob3B0cyk7XG4gIH1cbn1cbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VxcyA9IHJlcXVpcmUoJ3BhcnNlcXMnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpwb2xsaW5nJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBQb2xsaW5nO1xuXG4vKipcbiAqIElzIFhIUjIgc3VwcG9ydGVkP1xuICovXG5cbnZhciBoYXNYSFIyID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFhNTEh0dHBSZXF1ZXN0ID0gcmVxdWlyZSgneG1saHR0cHJlcXVlc3Qtc3NsJyk7XG4gIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoeyB4ZG9tYWluOiBmYWxzZSB9KTtcbiAgcmV0dXJuIG51bGwgIT0geGhyLnJlc3BvbnNlVHlwZTtcbn0pKCk7XG5cbi8qKlxuICogUG9sbGluZyBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIFBvbGxpbmcgKG9wdHMpIHtcbiAgdmFyIGZvcmNlQmFzZTY0ID0gKG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NCk7XG4gIGlmICghaGFzWEhSMiB8fCBmb3JjZUJhc2U2NCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuICBUcmFuc3BvcnQuY2FsbCh0aGlzLCBvcHRzKTtcbn1cblxuLyoqXG4gKiBJbmhlcml0cyBmcm9tIFRyYW5zcG9ydC5cbiAqL1xuXG5pbmhlcml0KFBvbGxpbmcsIFRyYW5zcG9ydCk7XG5cbi8qKlxuICogVHJhbnNwb3J0IG5hbWUuXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUubmFtZSA9ICdwb2xsaW5nJztcblxuLyoqXG4gKiBPcGVucyB0aGUgc29ja2V0ICh0cmlnZ2VycyBwb2xsaW5nKS4gV2Ugd3JpdGUgYSBQSU5HIG1lc3NhZ2UgdG8gZGV0ZXJtaW5lXG4gKiB3aGVuIHRoZSB0cmFuc3BvcnQgaXMgb3Blbi5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5kb09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMucG9sbCgpO1xufTtcblxuLyoqXG4gKiBQYXVzZXMgcG9sbGluZy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayB1cG9uIGJ1ZmZlcnMgYXJlIGZsdXNoZWQgYW5kIHRyYW5zcG9ydCBpcyBwYXVzZWRcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24gKG9uUGF1c2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIHRoaXMucmVhZHlTdGF0ZSA9ICdwYXVzaW5nJztcblxuICBmdW5jdGlvbiBwYXVzZSAoKSB7XG4gICAgZGVidWcoJ3BhdXNlZCcpO1xuICAgIHNlbGYucmVhZHlTdGF0ZSA9ICdwYXVzZWQnO1xuICAgIG9uUGF1c2UoKTtcbiAgfVxuXG4gIGlmICh0aGlzLnBvbGxpbmcgfHwgIXRoaXMud3JpdGFibGUpIHtcbiAgICB2YXIgdG90YWwgPSAwO1xuXG4gICAgaWYgKHRoaXMucG9sbGluZykge1xuICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgcG9sbGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgIHRvdGFsKys7XG4gICAgICB0aGlzLm9uY2UoJ3BvbGxDb21wbGV0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVidWcoJ3ByZS1wYXVzZSBwb2xsaW5nIGNvbXBsZXRlJyk7XG4gICAgICAgIC0tdG90YWwgfHwgcGF1c2UoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICghdGhpcy53cml0YWJsZSkge1xuICAgICAgZGVidWcoJ3dlIGFyZSBjdXJyZW50bHkgd3JpdGluZyAtIHdhaXRpbmcgdG8gcGF1c2UnKTtcbiAgICAgIHRvdGFsKys7XG4gICAgICB0aGlzLm9uY2UoJ2RyYWluJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWJ1ZygncHJlLXBhdXNlIHdyaXRpbmcgY29tcGxldGUnKTtcbiAgICAgICAgLS10b3RhbCB8fCBwYXVzZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBhdXNlKCk7XG4gIH1cbn07XG5cbi8qKlxuICogU3RhcnRzIHBvbGxpbmcgY3ljbGUuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Qb2xsaW5nLnByb3RvdHlwZS5wb2xsID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygncG9sbGluZycpO1xuICB0aGlzLnBvbGxpbmcgPSB0cnVlO1xuICB0aGlzLmRvUG9sbCgpO1xuICB0aGlzLmVtaXQoJ3BvbGwnKTtcbn07XG5cbi8qKlxuICogT3ZlcmxvYWRzIG9uRGF0YSB0byBkZXRlY3QgcGF5bG9hZHMuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUub25EYXRhID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBkZWJ1ZygncG9sbGluZyBnb3QgZGF0YSAlcycsIGRhdGEpO1xuICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAocGFja2V0LCBpbmRleCwgdG90YWwpIHtcbiAgICAvLyBpZiBpdHMgdGhlIGZpcnN0IG1lc3NhZ2Ugd2UgY29uc2lkZXIgdGhlIHRyYW5zcG9ydCBvcGVuXG4gICAgaWYgKCdvcGVuaW5nJyA9PT0gc2VsZi5yZWFkeVN0YXRlKSB7XG4gICAgICBzZWxmLm9uT3BlbigpO1xuICAgIH1cblxuICAgIC8vIGlmIGl0cyBhIGNsb3NlIHBhY2tldCwgd2UgY2xvc2UgdGhlIG9uZ29pbmcgcmVxdWVzdHNcbiAgICBpZiAoJ2Nsb3NlJyA9PT0gcGFja2V0LnR5cGUpIHtcbiAgICAgIHNlbGYub25DbG9zZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIG90aGVyd2lzZSBieXBhc3Mgb25EYXRhIGFuZCBoYW5kbGUgdGhlIG1lc3NhZ2VcbiAgICBzZWxmLm9uUGFja2V0KHBhY2tldCk7XG4gIH07XG5cbiAgLy8gZGVjb2RlIHBheWxvYWRcbiAgcGFyc2VyLmRlY29kZVBheWxvYWQoZGF0YSwgdGhpcy5zb2NrZXQuYmluYXJ5VHlwZSwgY2FsbGJhY2spO1xuXG4gIC8vIGlmIGFuIGV2ZW50IGRpZCBub3QgdHJpZ2dlciBjbG9zaW5nXG4gIGlmICgnY2xvc2VkJyAhPT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgLy8gaWYgd2UgZ290IGRhdGEgd2UncmUgbm90IHBvbGxpbmdcbiAgICB0aGlzLnBvbGxpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoJ3BvbGxDb21wbGV0ZScpO1xuXG4gICAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgICB0aGlzLnBvbGwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVidWcoJ2lnbm9yaW5nIHBvbGwgLSB0cmFuc3BvcnQgc3RhdGUgXCIlc1wiJywgdGhpcy5yZWFkeVN0YXRlKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogRm9yIHBvbGxpbmcsIHNlbmQgYSBjbG9zZSBwYWNrZXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGZ1bmN0aW9uIGNsb3NlICgpIHtcbiAgICBkZWJ1Zygnd3JpdGluZyBjbG9zZSBwYWNrZXQnKTtcbiAgICBzZWxmLndyaXRlKFt7IHR5cGU6ICdjbG9zZScgfV0pO1xuICB9XG5cbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSB7XG4gICAgZGVidWcoJ3RyYW5zcG9ydCBvcGVuIC0gY2xvc2luZycpO1xuICAgIGNsb3NlKCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gaW4gY2FzZSB3ZSdyZSB0cnlpbmcgdG8gY2xvc2Ugd2hpbGVcbiAgICAvLyBoYW5kc2hha2luZyBpcyBpbiBwcm9ncmVzcyAoR0gtMTY0KVxuICAgIGRlYnVnKCd0cmFuc3BvcnQgbm90IG9wZW4gLSBkZWZlcnJpbmcgY2xvc2UnKTtcbiAgICB0aGlzLm9uY2UoJ29wZW4nLCBjbG9zZSk7XG4gIH1cbn07XG5cbi8qKlxuICogV3JpdGVzIGEgcGFja2V0cyBwYXlsb2FkLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgcGFja2V0c1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZHJhaW4gY2FsbGJhY2tcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblBvbGxpbmcucHJvdG90eXBlLndyaXRlID0gZnVuY3Rpb24gKHBhY2tldHMpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gIHZhciBjYWxsYmFja2ZuID0gZnVuY3Rpb24gKCkge1xuICAgIHNlbGYud3JpdGFibGUgPSB0cnVlO1xuICAgIHNlbGYuZW1pdCgnZHJhaW4nKTtcbiAgfTtcblxuICBwYXJzZXIuZW5jb2RlUGF5bG9hZChwYWNrZXRzLCB0aGlzLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgIHNlbGYuZG9Xcml0ZShkYXRhLCBjYWxsYmFja2ZuKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEdlbmVyYXRlcyB1cmkgZm9yIGNvbm5lY3Rpb24uXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUG9sbGluZy5wcm90b3R5cGUudXJpID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5IHx8IHt9O1xuICB2YXIgc2NoZW1hID0gdGhpcy5zZWN1cmUgPyAnaHR0cHMnIDogJ2h0dHAnO1xuICB2YXIgcG9ydCA9ICcnO1xuXG4gIC8vIGNhY2hlIGJ1c3RpbmcgaXMgZm9yY2VkXG4gIGlmIChmYWxzZSAhPT0gdGhpcy50aW1lc3RhbXBSZXF1ZXN0cykge1xuICAgIHF1ZXJ5W3RoaXMudGltZXN0YW1wUGFyYW1dID0geWVhc3QoKTtcbiAgfVxuXG4gIGlmICghdGhpcy5zdXBwb3J0c0JpbmFyeSAmJiAhcXVlcnkuc2lkKSB7XG4gICAgcXVlcnkuYjY0ID0gMTtcbiAgfVxuXG4gIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gIC8vIGF2b2lkIHBvcnQgaWYgZGVmYXVsdCBmb3Igc2NoZW1hXG4gIGlmICh0aGlzLnBvcnQgJiYgKCgnaHR0cHMnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDQ0MykgfHxcbiAgICAgKCdodHRwJyA9PT0gc2NoZW1hICYmIE51bWJlcih0aGlzLnBvcnQpICE9PSA4MCkpKSB7XG4gICAgcG9ydCA9ICc6JyArIHRoaXMucG9ydDtcbiAgfVxuXG4gIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIHZhciBpcHY2ID0gdGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICByZXR1cm4gc2NoZW1hICsgJzovLycgKyAoaXB2NiA/ICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScgOiB0aGlzLmhvc3RuYW1lKSArIHBvcnQgKyB0aGlzLnBhdGggKyBxdWVyeTtcbn07XG4iLCIvKiBnbG9iYWwgQmxvYiBGaWxlICovXG5cbi8qXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBpc0FycmF5ID0gcmVxdWlyZSgnaXNhcnJheScpO1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIHdpdGhOYXRpdmVCbG9iID0gdHlwZW9mIEJsb2IgPT09ICdmdW5jdGlvbicgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBCbG9iICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEJsb2IpID09PSAnW29iamVjdCBCbG9iQ29uc3RydWN0b3JdJztcbnZhciB3aXRoTmF0aXZlRmlsZSA9IHR5cGVvZiBGaWxlID09PSAnZnVuY3Rpb24nIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgRmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9TdHJpbmcuY2FsbChGaWxlKSA9PT0gJ1tvYmplY3QgRmlsZUNvbnN0cnVjdG9yXSc7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNCaW5hcnk7XG5cbi8qKlxuICogQ2hlY2tzIGZvciBiaW5hcnkgZGF0YS5cbiAqXG4gKiBTdXBwb3J0cyBCdWZmZXIsIEFycmF5QnVmZmVyLCBCbG9iIGFuZCBGaWxlLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhbnl0aGluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBoYXNCaW5hcnkgKG9iaikge1xuICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChoYXNCaW5hcnkob2JqW2ldKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIEJ1ZmZlci5pc0J1ZmZlciAmJiBCdWZmZXIuaXNCdWZmZXIob2JqKSkgfHxcbiAgICAodHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iaiBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB8fFxuICAgICh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICh3aXRoTmF0aXZlRmlsZSAmJiBvYmogaW5zdGFuY2VvZiBGaWxlKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL0F1dG9tYXR0aWMvaGFzLWJpbmFyeS9wdWxsLzRcbiAgaWYgKG9iai50b0pTT04gJiYgdHlwZW9mIG9iai50b0pTT04gPT09ICdmdW5jdGlvbicgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBoYXNCaW5hcnkob2JqLnRvSlNPTigpLCB0cnVlKTtcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSAmJiBoYXNCaW5hcnkob2JqW2tleV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhbHBoYWJldCA9ICcwMTIzNDU2Nzg5QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ei1fJy5zcGxpdCgnJylcbiAgLCBsZW5ndGggPSA2NFxuICAsIG1hcCA9IHt9XG4gICwgc2VlZCA9IDBcbiAgLCBpID0gMFxuICAsIHByZXY7XG5cbi8qKlxuICogUmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3BlY2lmaWVkIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbnVtIFRoZSBudW1iZXIgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG51bWJlci5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShudW0pIHtcbiAgdmFyIGVuY29kZWQgPSAnJztcblxuICBkbyB7XG4gICAgZW5jb2RlZCA9IGFscGhhYmV0W251bSAlIGxlbmd0aF0gKyBlbmNvZGVkO1xuICAgIG51bSA9IE1hdGguZmxvb3IobnVtIC8gbGVuZ3RoKTtcbiAgfSB3aGlsZSAobnVtID4gMCk7XG5cbiAgcmV0dXJuIGVuY29kZWQ7XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBpbnRlZ2VyIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgZ2l2ZW4gc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge051bWJlcn0gVGhlIGludGVnZXIgdmFsdWUgcmVwcmVzZW50ZWQgYnkgdGhlIHN0cmluZy5cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgdmFyIGRlY29kZWQgPSAwO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBkZWNvZGVkID0gZGVjb2RlZCAqIGxlbmd0aCArIG1hcFtzdHIuY2hhckF0KGkpXTtcbiAgfVxuXG4gIHJldHVybiBkZWNvZGVkO1xufVxuXG4vKipcbiAqIFllYXN0OiBBIHRpbnkgZ3Jvd2luZyBpZCBnZW5lcmF0b3IuXG4gKlxuICogQHJldHVybnMge1N0cmluZ30gQSB1bmlxdWUgaWQuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiB5ZWFzdCgpIHtcbiAgdmFyIG5vdyA9IGVuY29kZSgrbmV3IERhdGUoKSk7XG5cbiAgaWYgKG5vdyAhPT0gcHJldikgcmV0dXJuIHNlZWQgPSAwLCBwcmV2ID0gbm93O1xuICByZXR1cm4gbm93ICsnLicrIGVuY29kZShzZWVkKyspO1xufVxuXG4vL1xuLy8gTWFwIGVhY2ggY2hhcmFjdGVyIHRvIGl0cyBpbmRleC5cbi8vXG5mb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSBtYXBbYWxwaGFiZXRbaV1dID0gaTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgYHllYXN0YCwgYGVuY29kZWAgYW5kIGBkZWNvZGVgIGZ1bmN0aW9ucy5cbi8vXG55ZWFzdC5lbmNvZGUgPSBlbmNvZGU7XG55ZWFzdC5kZWNvZGUgPSBkZWNvZGU7XG5tb2R1bGUuZXhwb3J0cyA9IHllYXN0O1xuIiwiXG52YXIgaW5kZXhPZiA9IFtdLmluZGV4T2Y7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyLCBvYmope1xuICBpZiAoaW5kZXhPZikgcmV0dXJuIGFyci5pbmRleE9mKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKGFycltpXSA9PT0gb2JqKSByZXR1cm4gaTtcbiAgfVxuICByZXR1cm4gLTE7XG59OyIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciBwYXJzZXIgPSByZXF1aXJlKCdzb2NrZXQuaW8tcGFyc2VyJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgdG9BcnJheSA9IHJlcXVpcmUoJ3RvLWFycmF5Jyk7XG52YXIgb24gPSByZXF1aXJlKCcuL29uJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1iaW5kJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50OnNvY2tldCcpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG52YXIgaGFzQmluID0gcmVxdWlyZSgnaGFzLWJpbmFyeTInKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBTb2NrZXQ7XG5cbi8qKlxuICogSW50ZXJuYWwgZXZlbnRzIChibGFja2xpc3RlZCkuXG4gKiBUaGVzZSBldmVudHMgY2FuJ3QgYmUgZW1pdHRlZCBieSB0aGUgdXNlci5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG52YXIgZXZlbnRzID0ge1xuICBjb25uZWN0OiAxLFxuICBjb25uZWN0X2Vycm9yOiAxLFxuICBjb25uZWN0X3RpbWVvdXQ6IDEsXG4gIGNvbm5lY3Rpbmc6IDEsXG4gIGRpc2Nvbm5lY3Q6IDEsXG4gIGVycm9yOiAxLFxuICByZWNvbm5lY3Q6IDEsXG4gIHJlY29ubmVjdF9hdHRlbXB0OiAxLFxuICByZWNvbm5lY3RfZmFpbGVkOiAxLFxuICByZWNvbm5lY3RfZXJyb3I6IDEsXG4gIHJlY29ubmVjdGluZzogMSxcbiAgcGluZzogMSxcbiAgcG9uZzogMVxufTtcblxuLyoqXG4gKiBTaG9ydGN1dCB0byBgRW1pdHRlciNlbWl0YC5cbiAqL1xuXG52YXIgZW1pdCA9IEVtaXR0ZXIucHJvdG90eXBlLmVtaXQ7XG5cbi8qKlxuICogYFNvY2tldGAgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBTb2NrZXQgKGlvLCBuc3AsIG9wdHMpIHtcbiAgdGhpcy5pbyA9IGlvO1xuICB0aGlzLm5zcCA9IG5zcDtcbiAgdGhpcy5qc29uID0gdGhpczsgLy8gY29tcGF0XG4gIHRoaXMuaWRzID0gMDtcbiAgdGhpcy5hY2tzID0ge307XG4gIHRoaXMucmVjZWl2ZUJ1ZmZlciA9IFtdO1xuICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbiAgdGhpcy5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgdGhpcy5kaXNjb25uZWN0ZWQgPSB0cnVlO1xuICB0aGlzLmZsYWdzID0ge307XG4gIGlmIChvcHRzICYmIG9wdHMucXVlcnkpIHtcbiAgICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeTtcbiAgfVxuICBpZiAodGhpcy5pby5hdXRvQ29ubmVjdCkgdGhpcy5vcGVuKCk7XG59XG5cbi8qKlxuICogTWl4IGluIGBFbWl0dGVyYC5cbiAqL1xuXG5FbWl0dGVyKFNvY2tldC5wcm90b3R5cGUpO1xuXG4vKipcbiAqIFN1YnNjcmliZSB0byBvcGVuLCBjbG9zZSBhbmQgcGFja2V0IGV2ZW50c1xuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc3ViRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICBpZiAodGhpcy5zdWJzKSByZXR1cm47XG5cbiAgdmFyIGlvID0gdGhpcy5pbztcbiAgdGhpcy5zdWJzID0gW1xuICAgIG9uKGlvLCAnb3BlbicsIGJpbmQodGhpcywgJ29ub3BlbicpKSxcbiAgICBvbihpbywgJ3BhY2tldCcsIGJpbmQodGhpcywgJ29ucGFja2V0JykpLFxuICAgIG9uKGlvLCAnY2xvc2UnLCBiaW5kKHRoaXMsICdvbmNsb3NlJykpXG4gIF07XG59O1xuXG4vKipcbiAqIFwiT3BlbnNcIiB0aGUgc29ja2V0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vcGVuID1cblNvY2tldC5wcm90b3R5cGUuY29ubmVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuY29ubmVjdGVkKSByZXR1cm4gdGhpcztcblxuICB0aGlzLnN1YkV2ZW50cygpO1xuICB0aGlzLmlvLm9wZW4oKTsgLy8gZW5zdXJlIG9wZW5cbiAgaWYgKCdvcGVuJyA9PT0gdGhpcy5pby5yZWFkeVN0YXRlKSB0aGlzLm9ub3BlbigpO1xuICB0aGlzLmVtaXQoJ2Nvbm5lY3RpbmcnKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNlbmRzIGEgYG1lc3NhZ2VgIGV2ZW50LlxuICpcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMpO1xuICBhcmdzLnVuc2hpZnQoJ21lc3NhZ2UnKTtcbiAgdGhpcy5lbWl0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogT3ZlcnJpZGUgYGVtaXRgLlxuICogSWYgdGhlIGV2ZW50IGlzIGluIGBldmVudHNgLCBpdCdzIGVtaXR0ZWQgbm9ybWFsbHkuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiAoZXYpIHtcbiAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eShldikpIHtcbiAgICBlbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgdmFyIHBhY2tldCA9IHtcbiAgICB0eXBlOiAodGhpcy5mbGFncy5iaW5hcnkgIT09IHVuZGVmaW5lZCA/IHRoaXMuZmxhZ3MuYmluYXJ5IDogaGFzQmluKGFyZ3MpKSA/IHBhcnNlci5CSU5BUllfRVZFTlQgOiBwYXJzZXIuRVZFTlQsXG4gICAgZGF0YTogYXJnc1xuICB9O1xuXG4gIHBhY2tldC5vcHRpb25zID0ge307XG4gIHBhY2tldC5vcHRpb25zLmNvbXByZXNzID0gIXRoaXMuZmxhZ3MgfHwgZmFsc2UgIT09IHRoaXMuZmxhZ3MuY29tcHJlc3M7XG5cbiAgLy8gZXZlbnQgYWNrIGNhbGxiYWNrXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdKSB7XG4gICAgZGVidWcoJ2VtaXR0aW5nIHBhY2tldCB3aXRoIGFjayBpZCAlZCcsIHRoaXMuaWRzKTtcbiAgICB0aGlzLmFja3NbdGhpcy5pZHNdID0gYXJncy5wb3AoKTtcbiAgICBwYWNrZXQuaWQgPSB0aGlzLmlkcysrO1xuICB9XG5cbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgdGhpcy5wYWNrZXQocGFja2V0KTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnNlbmRCdWZmZXIucHVzaChwYWNrZXQpO1xuICB9XG5cbiAgdGhpcy5mbGFncyA9IHt9O1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcGFja2V0XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgcGFja2V0Lm5zcCA9IHRoaXMubnNwO1xuICB0aGlzLmlvLnBhY2tldChwYWNrZXQpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBlbmdpbmUgYG9wZW5gLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25vcGVuID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygndHJhbnNwb3J0IGlzIG9wZW4gLSBjb25uZWN0aW5nJyk7XG5cbiAgLy8gd3JpdGUgY29ubmVjdCBwYWNrZXQgaWYgbmVjZXNzYXJ5XG4gIGlmICgnLycgIT09IHRoaXMubnNwKSB7XG4gICAgaWYgKHRoaXMucXVlcnkpIHtcbiAgICAgIHZhciBxdWVyeSA9IHR5cGVvZiB0aGlzLnF1ZXJ5ID09PSAnb2JqZWN0JyA/IHBhcnNlcXMuZW5jb2RlKHRoaXMucXVlcnkpIDogdGhpcy5xdWVyeTtcbiAgICAgIGRlYnVnKCdzZW5kaW5nIGNvbm5lY3QgcGFja2V0IHdpdGggcXVlcnkgJXMnLCBxdWVyeSk7XG4gICAgICB0aGlzLnBhY2tldCh7dHlwZTogcGFyc2VyLkNPTk5FQ1QsIHF1ZXJ5OiBxdWVyeX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhY2tldCh7dHlwZTogcGFyc2VyLkNPTk5FQ1R9KTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZW5naW5lIGBjbG9zZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHJlYXNvblxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICBkZWJ1ZygnY2xvc2UgKCVzKScsIHJlYXNvbik7XG4gIHRoaXMuY29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMuZGlzY29ubmVjdGVkID0gdHJ1ZTtcbiAgZGVsZXRlIHRoaXMuaWQ7XG4gIHRoaXMuZW1pdCgnZGlzY29ubmVjdCcsIHJlYXNvbik7XG59O1xuXG4vKipcbiAqIENhbGxlZCB3aXRoIHNvY2tldCBwYWNrZXQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbnBhY2tldCA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdmFyIHNhbWVOYW1lc3BhY2UgPSBwYWNrZXQubnNwID09PSB0aGlzLm5zcDtcbiAgdmFyIHJvb3ROYW1lc3BhY2VFcnJvciA9IHBhY2tldC50eXBlID09PSBwYXJzZXIuRVJST1IgJiYgcGFja2V0Lm5zcCA9PT0gJy8nO1xuXG4gIGlmICghc2FtZU5hbWVzcGFjZSAmJiAhcm9vdE5hbWVzcGFjZUVycm9yKSByZXR1cm47XG5cbiAgc3dpdGNoIChwYWNrZXQudHlwZSkge1xuICAgIGNhc2UgcGFyc2VyLkNPTk5FQ1Q6XG4gICAgICB0aGlzLm9uY29ubmVjdCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5FVkVOVDpcbiAgICAgIHRoaXMub25ldmVudChwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5CSU5BUllfRVZFTlQ6XG4gICAgICB0aGlzLm9uZXZlbnQocGFja2V0KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuQUNLOlxuICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5CSU5BUllfQUNLOlxuICAgICAgdGhpcy5vbmFjayhwYWNrZXQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIHBhcnNlci5ESVNDT05ORUNUOlxuICAgICAgdGhpcy5vbmRpc2Nvbm5lY3QoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBwYXJzZXIuRVJST1I6XG4gICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgcGFja2V0LmRhdGEpO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgZXZlbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmV2ZW50ID0gZnVuY3Rpb24gKHBhY2tldCkge1xuICB2YXIgYXJncyA9IHBhY2tldC5kYXRhIHx8IFtdO1xuICBkZWJ1ZygnZW1pdHRpbmcgZXZlbnQgJWonLCBhcmdzKTtcblxuICBpZiAobnVsbCAhPSBwYWNrZXQuaWQpIHtcbiAgICBkZWJ1ZygnYXR0YWNoaW5nIGFjayBjYWxsYmFjayB0byBldmVudCcpO1xuICAgIGFyZ3MucHVzaCh0aGlzLmFjayhwYWNrZXQuaWQpKTtcbiAgfVxuXG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIGVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5yZWNlaXZlQnVmZmVyLnB1c2goYXJncyk7XG4gIH1cbn07XG5cbi8qKlxuICogUHJvZHVjZXMgYW4gYWNrIGNhbGxiYWNrIHRvIGVtaXQgd2l0aCBhbiBldmVudC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmFjayA9IGZ1bmN0aW9uIChpZCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHZhciBzZW50ID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgLy8gcHJldmVudCBkb3VibGUgY2FsbGJhY2tzXG4gICAgaWYgKHNlbnQpIHJldHVybjtcbiAgICBzZW50ID0gdHJ1ZTtcbiAgICB2YXIgYXJncyA9IHRvQXJyYXkoYXJndW1lbnRzKTtcbiAgICBkZWJ1Zygnc2VuZGluZyBhY2sgJWonLCBhcmdzKTtcblxuICAgIHNlbGYucGFja2V0KHtcbiAgICAgIHR5cGU6IGhhc0JpbihhcmdzKSA/IHBhcnNlci5CSU5BUllfQUNLIDogcGFyc2VyLkFDSyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIGRhdGE6IGFyZ3NcbiAgICB9KTtcbiAgfTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gYSBzZXJ2ZXIgYWNrbm93bGVnZW1lbnQuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldFxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmFjayA9IGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgdmFyIGFjayA9IHRoaXMuYWNrc1twYWNrZXQuaWRdO1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGFjaykge1xuICAgIGRlYnVnKCdjYWxsaW5nIGFjayAlcyB3aXRoICVqJywgcGFja2V0LmlkLCBwYWNrZXQuZGF0YSk7XG4gICAgYWNrLmFwcGx5KHRoaXMsIHBhY2tldC5kYXRhKTtcbiAgICBkZWxldGUgdGhpcy5hY2tzW3BhY2tldC5pZF07XG4gIH0gZWxzZSB7XG4gICAgZGVidWcoJ2JhZCBhY2sgJXMnLCBwYWNrZXQuaWQpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIHNlcnZlciBjb25uZWN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25jb25uZWN0ID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbm5lY3RlZCA9IHRydWU7XG4gIHRoaXMuZGlzY29ubmVjdGVkID0gZmFsc2U7XG4gIHRoaXMuZW1pdCgnY29ubmVjdCcpO1xuICB0aGlzLmVtaXRCdWZmZXJlZCgpO1xufTtcblxuLyoqXG4gKiBFbWl0IGJ1ZmZlcmVkIGV2ZW50cyAocmVjZWl2ZWQgYW5kIGVtaXR0ZWQpLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZW1pdEJ1ZmZlcmVkID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaTtcbiAgZm9yIChpID0gMDsgaSA8IHRoaXMucmVjZWl2ZUJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgIGVtaXQuYXBwbHkodGhpcywgdGhpcy5yZWNlaXZlQnVmZmVyW2ldKTtcbiAgfVxuICB0aGlzLnJlY2VpdmVCdWZmZXIgPSBbXTtcblxuICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5zZW5kQnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5wYWNrZXQodGhpcy5zZW5kQnVmZmVyW2ldKTtcbiAgfVxuICB0aGlzLnNlbmRCdWZmZXIgPSBbXTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc2VydmVyIGRpc2Nvbm5lY3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGRlYnVnKCdzZXJ2ZXIgZGlzY29ubmVjdCAoJXMpJywgdGhpcy5uc3ApO1xuICB0aGlzLmRlc3Ryb3koKTtcbiAgdGhpcy5vbmNsb3NlKCdpbyBzZXJ2ZXIgZGlzY29ubmVjdCcpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBmb3JjZWQgY2xpZW50L3NlcnZlciBzaWRlIGRpc2Nvbm5lY3Rpb25zLFxuICogdGhpcyBtZXRob2QgZW5zdXJlcyB0aGUgbWFuYWdlciBzdG9wcyB0cmFja2luZyB1cyBhbmRcbiAqIHRoYXQgcmVjb25uZWN0aW9ucyBkb24ndCBnZXQgdHJpZ2dlcmVkIGZvciB0aGlzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZS5cbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLnN1YnMpIHtcbiAgICAvLyBjbGVhbiBzdWJzY3JpcHRpb25zIHRvIGF2b2lkIHJlY29ubmVjdGlvbnNcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc3Vicy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5zdWJzW2ldLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5zdWJzID0gbnVsbDtcbiAgfVxuXG4gIHRoaXMuaW8uZGVzdHJveSh0aGlzKTtcbn07XG5cbi8qKlxuICogRGlzY29ubmVjdHMgdGhlIHNvY2tldCBtYW51YWxseS5cbiAqXG4gKiBAcmV0dXJuIHtTb2NrZXR9IHNlbGZcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5jbG9zZSA9XG5Tb2NrZXQucHJvdG90eXBlLmRpc2Nvbm5lY3QgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgIGRlYnVnKCdwZXJmb3JtaW5nIGRpc2Nvbm5lY3QgKCVzKScsIHRoaXMubnNwKTtcbiAgICB0aGlzLnBhY2tldCh7IHR5cGU6IHBhcnNlci5ESVNDT05ORUNUIH0pO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNvY2tldCBmcm9tIHBvb2xcbiAgdGhpcy5kZXN0cm95KCk7XG5cbiAgaWYgKHRoaXMuY29ubmVjdGVkKSB7XG4gICAgLy8gZmlyZSBldmVudHNcbiAgICB0aGlzLm9uY2xvc2UoJ2lvIGNsaWVudCBkaXNjb25uZWN0Jyk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgdGhlIGNvbXByZXNzIGZsYWcuXG4gKlxuICogQHBhcmFtIHtCb29sZWFufSBpZiBgdHJ1ZWAsIGNvbXByZXNzZXMgdGhlIHNlbmRpbmcgZGF0YVxuICogQHJldHVybiB7U29ja2V0fSBzZWxmXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUuY29tcHJlc3MgPSBmdW5jdGlvbiAoY29tcHJlc3MpIHtcbiAgdGhpcy5mbGFncy5jb21wcmVzcyA9IGNvbXByZXNzO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgYmluYXJ5IGZsYWdcbiAqXG4gKiBAcGFyYW0ge0Jvb2xlYW59IHdoZXRoZXIgdGhlIGVtaXR0ZWQgZGF0YSBjb250YWlucyBiaW5hcnlcbiAqIEByZXR1cm4ge1NvY2tldH0gc2VsZlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmJpbmFyeSA9IGZ1bmN0aW9uIChiaW5hcnkpIHtcbiAgdGhpcy5mbGFncy5iaW5hcnkgPSBiaW5hcnk7XG4gIHJldHVybiB0aGlzO1xufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uO1xuXG4vKipcbiAqIEhlbHBlciBmb3Igc3Vic2NyaXB0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxFdmVudEVtaXR0ZXJ9IG9iaiB3aXRoIGBFbWl0dGVyYCBtaXhpbiBvciBgRXZlbnRFbWl0dGVyYFxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IG5hbWVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIG9uIChvYmosIGV2LCBmbikge1xuICBvYmoub24oZXYsIGZuKTtcbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICBvYmoucmVtb3ZlTGlzdGVuZXIoZXYsIGZuKTtcbiAgICB9XG4gIH07XG59XG4iLCIvKipcbiAqIFNsaWNlIHJlZmVyZW5jZS5cbiAqL1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcblxuLyoqXG4gKiBCaW5kIGBvYmpgIHRvIGBmbmAuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtGdW5jdGlvbnxTdHJpbmd9IGZuIG9yIHN0cmluZ1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqLCBmbil7XG4gIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YgZm4pIGZuID0gb2JqW2ZuXTtcbiAgaWYgKCdmdW5jdGlvbicgIT0gdHlwZW9mIGZuKSB0aHJvdyBuZXcgRXJyb3IoJ2JpbmQoKSByZXF1aXJlcyBhIGZ1bmN0aW9uJyk7XG4gIHZhciBhcmdzID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpO1xuICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZm4uYXBwbHkob2JqLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgfVxufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbnZhciB1cmwgPSByZXF1aXJlKCcuL3VybCcpO1xudmFyIHBhcnNlciA9IHJlcXVpcmUoJ3NvY2tldC5pby1wYXJzZXInKTtcbnZhciBNYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdzb2NrZXQuaW8tY2xpZW50Jyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gbG9va3VwO1xuXG4vKipcbiAqIE1hbmFnZXJzIGNhY2hlLlxuICovXG5cbnZhciBjYWNoZSA9IGV4cG9ydHMubWFuYWdlcnMgPSB7fTtcblxuLyoqXG4gKiBMb29rcyB1cCBhbiBleGlzdGluZyBgTWFuYWdlcmAgZm9yIG11bHRpcGxleGluZy5cbiAqIElmIHRoZSB1c2VyIHN1bW1vbnM6XG4gKlxuICogICBgaW8oJ2h0dHA6Ly9sb2NhbGhvc3QvYScpO2BcbiAqICAgYGlvKCdodHRwOi8vbG9jYWxob3N0L2InKTtgXG4gKlxuICogV2UgcmV1c2UgdGhlIGV4aXN0aW5nIGluc3RhbmNlIGJhc2VkIG9uIHNhbWUgc2NoZW1lL3BvcnQvaG9zdCxcbiAqIGFuZCB3ZSBpbml0aWFsaXplIHNvY2tldHMgZm9yIGVhY2ggbmFtZXNwYWNlLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9va3VwICh1cmksIG9wdHMpIHtcbiAgaWYgKHR5cGVvZiB1cmkgPT09ICdvYmplY3QnKSB7XG4gICAgb3B0cyA9IHVyaTtcbiAgICB1cmkgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBvcHRzID0gb3B0cyB8fCB7fTtcblxuICB2YXIgcGFyc2VkID0gdXJsKHVyaSk7XG4gIHZhciBzb3VyY2UgPSBwYXJzZWQuc291cmNlO1xuICB2YXIgaWQgPSBwYXJzZWQuaWQ7XG4gIHZhciBwYXRoID0gcGFyc2VkLnBhdGg7XG4gIHZhciBzYW1lTmFtZXNwYWNlID0gY2FjaGVbaWRdICYmIHBhdGggaW4gY2FjaGVbaWRdLm5zcHM7XG4gIHZhciBuZXdDb25uZWN0aW9uID0gb3B0cy5mb3JjZU5ldyB8fCBvcHRzWydmb3JjZSBuZXcgY29ubmVjdGlvbiddIHx8XG4gICAgICAgICAgICAgICAgICAgICAgZmFsc2UgPT09IG9wdHMubXVsdGlwbGV4IHx8IHNhbWVOYW1lc3BhY2U7XG5cbiAgdmFyIGlvO1xuXG4gIGlmIChuZXdDb25uZWN0aW9uKSB7XG4gICAgZGVidWcoJ2lnbm9yaW5nIHNvY2tldCBjYWNoZSBmb3IgJXMnLCBzb3VyY2UpO1xuICAgIGlvID0gTWFuYWdlcihzb3VyY2UsIG9wdHMpO1xuICB9IGVsc2Uge1xuICAgIGlmICghY2FjaGVbaWRdKSB7XG4gICAgICBkZWJ1ZygnbmV3IGlvIGluc3RhbmNlIGZvciAlcycsIHNvdXJjZSk7XG4gICAgICBjYWNoZVtpZF0gPSBNYW5hZ2VyKHNvdXJjZSwgb3B0cyk7XG4gICAgfVxuICAgIGlvID0gY2FjaGVbaWRdO1xuICB9XG4gIGlmIChwYXJzZWQucXVlcnkgJiYgIW9wdHMucXVlcnkpIHtcbiAgICBvcHRzLnF1ZXJ5ID0gcGFyc2VkLnF1ZXJ5O1xuICB9XG4gIHJldHVybiBpby5zb2NrZXQocGFyc2VkLnBhdGgsIG9wdHMpO1xufVxuXG4vKipcbiAqIFByb3RvY29sIHZlcnNpb24uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sO1xuXG4vKipcbiAqIGBjb25uZWN0YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJpXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuY29ubmVjdCA9IGxvb2t1cDtcblxuLyoqXG4gKiBFeHBvc2UgY29uc3RydWN0b3JzIGZvciBzdGFuZGFsb25lIGJ1aWxkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZXhwb3J0cy5NYW5hZ2VyID0gcmVxdWlyZSgnLi9tYW5hZ2VyJyk7XG5leHBvcnRzLlNvY2tldCA9IHJlcXVpcmUoJy4vc29ja2V0Jyk7XG4iLCJcbi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgcGFyc2V1cmkgPSByZXF1aXJlKCdwYXJzZXVyaScpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnc29ja2V0LmlvLWNsaWVudDp1cmwnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHVybDtcblxuLyoqXG4gKiBVUkwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7T2JqZWN0fSBBbiBvYmplY3QgbWVhbnQgdG8gbWltaWMgd2luZG93LmxvY2F0aW9uLlxuICogICAgICAgICAgICAgICAgIERlZmF1bHRzIHRvIHdpbmRvdy5sb2NhdGlvbi5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gdXJsICh1cmksIGxvYykge1xuICB2YXIgb2JqID0gdXJpO1xuXG4gIC8vIGRlZmF1bHQgdG8gd2luZG93LmxvY2F0aW9uXG4gIGxvYyA9IGxvYyB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbik7XG4gIGlmIChudWxsID09IHVyaSkgdXJpID0gbG9jLnByb3RvY29sICsgJy8vJyArIGxvYy5ob3N0O1xuXG4gIC8vIHJlbGF0aXZlIHBhdGggc3VwcG9ydFxuICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB1cmkpIHtcbiAgICBpZiAoJy8nID09PSB1cmkuY2hhckF0KDApKSB7XG4gICAgICBpZiAoJy8nID09PSB1cmkuY2hhckF0KDEpKSB7XG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArIHVyaTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVyaSA9IGxvYy5ob3N0ICsgdXJpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghL14oaHR0cHM/fHdzcz8pOlxcL1xcLy8udGVzdCh1cmkpKSB7XG4gICAgICBkZWJ1ZygncHJvdG9jb2wtbGVzcyB1cmwgJXMnLCB1cmkpO1xuICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgbG9jKSB7XG4gICAgICAgIHVyaSA9IGxvYy5wcm90b2NvbCArICcvLycgKyB1cmk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB1cmkgPSAnaHR0cHM6Ly8nICsgdXJpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBhcnNlXG4gICAgZGVidWcoJ3BhcnNlICVzJywgdXJpKTtcbiAgICBvYmogPSBwYXJzZXVyaSh1cmkpO1xuICB9XG5cbiAgLy8gbWFrZSBzdXJlIHdlIHRyZWF0IGBsb2NhbGhvc3Q6ODBgIGFuZCBgbG9jYWxob3N0YCBlcXVhbGx5XG4gIGlmICghb2JqLnBvcnQpIHtcbiAgICBpZiAoL14oaHR0cHx3cykkLy50ZXN0KG9iai5wcm90b2NvbCkpIHtcbiAgICAgIG9iai5wb3J0ID0gJzgwJztcbiAgICB9IGVsc2UgaWYgKC9eKGh0dHB8d3MpcyQvLnRlc3Qob2JqLnByb3RvY29sKSkge1xuICAgICAgb2JqLnBvcnQgPSAnNDQzJztcbiAgICB9XG4gIH1cblxuICBvYmoucGF0aCA9IG9iai5wYXRoIHx8ICcvJztcblxuICB2YXIgaXB2NiA9IG9iai5ob3N0LmluZGV4T2YoJzonKSAhPT0gLTE7XG4gIHZhciBob3N0ID0gaXB2NiA/ICdbJyArIG9iai5ob3N0ICsgJ10nIDogb2JqLmhvc3Q7XG5cbiAgLy8gZGVmaW5lIHVuaXF1ZSBpZFxuICBvYmouaWQgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAnOicgKyBvYmoucG9ydDtcbiAgLy8gZGVmaW5lIGhyZWZcbiAgb2JqLmhyZWYgPSBvYmoucHJvdG9jb2wgKyAnOi8vJyArIGhvc3QgKyAobG9jICYmIGxvYy5wb3J0ID09PSBvYmoucG9ydCA/ICcnIDogKCc6JyArIG9iai5wb3J0KSk7XG5cbiAgcmV0dXJuIG9iajtcbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICovXG5cbmZ1bmN0aW9uIHNldHVwKGVudikge1xuXHRjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5kZWZhdWx0ID0gY3JlYXRlRGVidWc7XG5cdGNyZWF0ZURlYnVnLmNvZXJjZSA9IGNvZXJjZTtcblx0Y3JlYXRlRGVidWcuZGlzYWJsZSA9IGRpc2FibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZSA9IGVuYWJsZTtcblx0Y3JlYXRlRGVidWcuZW5hYmxlZCA9IGVuYWJsZWQ7XG5cdGNyZWF0ZURlYnVnLmh1bWFuaXplID0gcmVxdWlyZSgnbXMnKTtcblxuXHRPYmplY3Qua2V5cyhlbnYpLmZvckVhY2goa2V5ID0+IHtcblx0XHRjcmVhdGVEZWJ1Z1trZXldID0gZW52W2tleV07XG5cdH0pO1xuXG5cdC8qKlxuXHQqIEFjdGl2ZSBgZGVidWdgIGluc3RhbmNlcy5cblx0Ki9cblx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzID0gW107XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdFx0Y29uc3QgZm9ybWF0dGVyID0gY3JlYXRlRGVidWcuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXHRcdFx0XHRpZiAodHlwZW9mIGZvcm1hdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdGNvbnN0IHZhbCA9IGFyZ3NbaW5kZXhdO1xuXHRcdFx0XHRcdG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuXHRcdFx0XHRcdC8vIE5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcblx0XHRcdFx0XHRhcmdzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0aW5kZXgtLTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcblx0XHRcdGNyZWF0ZURlYnVnLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuXHRcdFx0Y29uc3QgbG9nRm4gPSBzZWxmLmxvZyB8fCBjcmVhdGVEZWJ1Zy5sb2c7XG5cdFx0XHRsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9XG5cblx0XHRkZWJ1Zy5uYW1lc3BhY2UgPSBuYW1lc3BhY2U7XG5cdFx0ZGVidWcuZW5hYmxlZCA9IGNyZWF0ZURlYnVnLmVuYWJsZWQobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy51c2VDb2xvcnMgPSBjcmVhdGVEZWJ1Zy51c2VDb2xvcnMoKTtcblx0XHRkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGRlc3Ryb3k7XG5cdFx0ZGVidWcuZXh0ZW5kID0gZXh0ZW5kO1xuXHRcdC8vIERlYnVnLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuXHRcdC8vIGRlYnVnLnJhd0xvZyA9IHJhd0xvZztcblxuXHRcdC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRjcmVhdGVEZWJ1Zy5pbnN0YW5jZXMucHVzaChkZWJ1Zyk7XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnN0IGluZGV4ID0gY3JlYXRlRGVidWcuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG5cdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0Y3JlYXRlRGVidWcuaW5zdGFuY2VzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZXh0ZW5kKG5hbWVzcGFjZSwgZGVsaW1pdGVyKSB7XG5cdFx0Y29uc3QgbmV3RGVidWcgPSBjcmVhdGVEZWJ1Zyh0aGlzLm5hbWVzcGFjZSArICh0eXBlb2YgZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/ICc6JyA6IGRlbGltaXRlcikgKyBuYW1lc3BhY2UpO1xuXHRcdG5ld0RlYnVnLmxvZyA9IHRoaXMubG9nO1xuXHRcdHJldHVybiBuZXdEZWJ1Zztcblx0fVxuXG5cdC8qKlxuXHQqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcblx0KiBzZXBhcmF0ZWQgYnkgYSBjb2xvbiBhbmQgd2lsZGNhcmRzLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuXHRcdGNyZWF0ZURlYnVnLnNhdmUobmFtZXNwYWNlcyk7XG5cblx0XHRjcmVhdGVEZWJ1Zy5uYW1lcyA9IFtdO1xuXHRcdGNyZWF0ZURlYnVnLnNraXBzID0gW107XG5cblx0XHRsZXQgaTtcblx0XHRjb25zdCBzcGxpdCA9ICh0eXBlb2YgbmFtZXNwYWNlcyA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2VzIDogJycpLnNwbGl0KC9bXFxzLF0rLyk7XG5cdFx0Y29uc3QgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoIXNwbGl0W2ldKSB7XG5cdFx0XHRcdC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRuYW1lc3BhY2VzID0gc3BsaXRbaV0ucmVwbGFjZSgvXFwqL2csICcuKj8nKTtcblxuXHRcdFx0aWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuXHRcdFx0XHRjcmVhdGVEZWJ1Zy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLm5hbWVzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzICsgJyQnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGNyZWF0ZURlYnVnLmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgaW5zdGFuY2UgPSBjcmVhdGVEZWJ1Zy5pbnN0YW5jZXNbaV07XG5cdFx0XHRpbnN0YW5jZS5lbmFibGVkID0gY3JlYXRlRGVidWcuZW5hYmxlZChpbnN0YW5jZS5uYW1lc3BhY2UpO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuXHQqXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2VzXG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRjb25zdCBuYW1lc3BhY2VzID0gW1xuXHRcdFx0Li4uY3JlYXRlRGVidWcubmFtZXMubWFwKHRvTmFtZXNwYWNlKSxcblx0XHRcdC4uLmNyZWF0ZURlYnVnLnNraXBzLm1hcCh0b05hbWVzcGFjZSkubWFwKG5hbWVzcGFjZSA9PiAnLScgKyBuYW1lc3BhY2UpXG5cdFx0XS5qb2luKCcsJyk7XG5cdFx0Y3JlYXRlRGVidWcuZW5hYmxlKCcnKTtcblx0XHRyZXR1cm4gbmFtZXNwYWNlcztcblx0fVxuXG5cdC8qKlxuXHQqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cblx0KlxuXHQqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG5cdCogQHJldHVybiB7Qm9vbGVhbn1cblx0KiBAYXBpIHB1YmxpY1xuXHQqL1xuXHRmdW5jdGlvbiBlbmFibGVkKG5hbWUpIHtcblx0XHRpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdGxldCBpO1xuXHRcdGxldCBsZW47XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5za2lwcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLnNraXBzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSA9IDAsIGxlbiA9IGNyZWF0ZURlYnVnLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG5cdFx0XHRpZiAoY3JlYXRlRGVidWcubmFtZXNbaV0udGVzdChuYW1lKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0KiBDb252ZXJ0IHJlZ2V4cCB0byBuYW1lc3BhY2Vcblx0KlxuXHQqIEBwYXJhbSB7UmVnRXhwfSByZWd4ZXBcblx0KiBAcmV0dXJuIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiB0b05hbWVzcGFjZShyZWdleHApIHtcblx0XHRyZXR1cm4gcmVnZXhwLnRvU3RyaW5nKClcblx0XHRcdC5zdWJzdHJpbmcoMiwgcmVnZXhwLnRvU3RyaW5nKCkubGVuZ3RoIC0gMilcblx0XHRcdC5yZXBsYWNlKC9cXC5cXCpcXD8kLywgJyonKTtcblx0fVxuXG5cdC8qKlxuXHQqIENvZXJjZSBgdmFsYC5cblx0KlxuXHQqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuXHQqIEByZXR1cm4ge01peGVkfVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBjb2VyY2UodmFsKSB7XG5cdFx0aWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSB7XG5cdFx0XHRyZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCIvKipcbiAqIFRoaXMgaXMgdGhlIHdlYiBicm93c2VyIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqXG4gKiBFeHBvc2UgYGRlYnVnKClgIGFzIHRoZSBtb2R1bGUuXG4gKi9cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kZWJ1ZycpO1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuc3RvcmFnZSA9ICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWVcbiAgICAgICAgICAgICAgICYmICd1bmRlZmluZWQnICE9IHR5cGVvZiBjaHJvbWUuc3RvcmFnZVxuICAgICAgICAgICAgICAgICAgPyBjaHJvbWUuc3RvcmFnZS5sb2NhbFxuICAgICAgICAgICAgICAgICAgOiBsb2NhbHN0b3JhZ2UoKTtcblxuLyoqXG4gKiBDb2xvcnMuXG4gKi9cblxuZXhwb3J0cy5jb2xvcnMgPSBbXG4gICcjMDAwMENDJywgJyMwMDAwRkYnLCAnIzAwMzNDQycsICcjMDAzM0ZGJywgJyMwMDY2Q0MnLCAnIzAwNjZGRicsICcjMDA5OUNDJyxcbiAgJyMwMDk5RkYnLCAnIzAwQ0MwMCcsICcjMDBDQzMzJywgJyMwMENDNjYnLCAnIzAwQ0M5OScsICcjMDBDQ0NDJywgJyMwMENDRkYnLFxuICAnIzMzMDBDQycsICcjMzMwMEZGJywgJyMzMzMzQ0MnLCAnIzMzMzNGRicsICcjMzM2NkNDJywgJyMzMzY2RkYnLCAnIzMzOTlDQycsXG4gICcjMzM5OUZGJywgJyMzM0NDMDAnLCAnIzMzQ0MzMycsICcjMzNDQzY2JywgJyMzM0NDOTknLCAnIzMzQ0NDQycsICcjMzNDQ0ZGJyxcbiAgJyM2NjAwQ0MnLCAnIzY2MDBGRicsICcjNjYzM0NDJywgJyM2NjMzRkYnLCAnIzY2Q0MwMCcsICcjNjZDQzMzJywgJyM5OTAwQ0MnLFxuICAnIzk5MDBGRicsICcjOTkzM0NDJywgJyM5OTMzRkYnLCAnIzk5Q0MwMCcsICcjOTlDQzMzJywgJyNDQzAwMDAnLCAnI0NDMDAzMycsXG4gICcjQ0MwMDY2JywgJyNDQzAwOTknLCAnI0NDMDBDQycsICcjQ0MwMEZGJywgJyNDQzMzMDAnLCAnI0NDMzMzMycsICcjQ0MzMzY2JyxcbiAgJyNDQzMzOTknLCAnI0NDMzNDQycsICcjQ0MzM0ZGJywgJyNDQzY2MDAnLCAnI0NDNjYzMycsICcjQ0M5OTAwJywgJyNDQzk5MzMnLFxuICAnI0NDQ0MwMCcsICcjQ0NDQzMzJywgJyNGRjAwMDAnLCAnI0ZGMDAzMycsICcjRkYwMDY2JywgJyNGRjAwOTknLCAnI0ZGMDBDQycsXG4gICcjRkYwMEZGJywgJyNGRjMzMDAnLCAnI0ZGMzMzMycsICcjRkYzMzY2JywgJyNGRjMzOTknLCAnI0ZGMzNDQycsICcjRkYzM0ZGJyxcbiAgJyNGRjY2MDAnLCAnI0ZGNjYzMycsICcjRkY5OTAwJywgJyNGRjk5MzMnLCAnI0ZGQ0MwMCcsICcjRkZDQzMzJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgZG8gbm90IHN1cHBvcnQgY29sb3JzLlxuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goLyhlZGdlfHRyaWRlbnQpXFwvKFxcZCspLykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBpcyB3ZWJraXQ/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE2NDU5NjA2LzM3Njc3M1xuICAvLyBkb2N1bWVudCBpcyB1bmRlZmluZWQgaW4gcmVhY3QtbmF0aXZlOiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QtbmF0aXZlL3B1bGwvMTYzMlxuICByZXR1cm4gKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuV2Via2l0QXBwZWFyYW5jZSkgfHxcbiAgICAvLyBpcyBmaXJlYnVnPyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zOTgxMjAvMzc2NzczXG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jb25zb2xlICYmICh3aW5kb3cuY29uc29sZS5maXJlYnVnIHx8ICh3aW5kb3cuY29uc29sZS5leGNlcHRpb24gJiYgd2luZG93LmNvbnNvbGUudGFibGUpKSkgfHxcbiAgICAvLyBpcyBmaXJlZm94ID49IHYzMT9cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1Rvb2xzL1dlYl9Db25zb2xlI1N0eWxpbmdfbWVzc2FnZXNcbiAgICAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKSAmJiBwYXJzZUludChSZWdFeHAuJDEsIDEwKSA+PSAzMSkgfHxcbiAgICAvLyBkb3VibGUgY2hlY2sgd2Via2l0IGluIHVzZXJBZ2VudCBqdXN0IGluIGNhc2Ugd2UgYXJlIGluIGEgd29ya2VyXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9hcHBsZXdlYmtpdFxcLyhcXGQrKS8pKTtcbn1cblxuLyoqXG4gKiBNYXAgJWogdG8gYEpTT04uc3RyaW5naWZ5KClgLCBzaW5jZSBubyBXZWIgSW5zcGVjdG9ycyBkbyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0cy5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbih2KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHYpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyLm1lc3NhZ2U7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBDb2xvcml6ZSBsb2cgYXJndW1lbnRzIGlmIGVuYWJsZWQuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXRBcmdzKGFyZ3MpIHtcbiAgdmFyIHVzZUNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXG4gIGFyZ3NbMF0gPSAodXNlQ29sb3JzID8gJyVjJyA6ICcnKVxuICAgICsgdGhpcy5uYW1lc3BhY2VcbiAgICArICh1c2VDb2xvcnMgPyAnICVjJyA6ICcgJylcbiAgICArIGFyZ3NbMF1cbiAgICArICh1c2VDb2xvcnMgPyAnJWMgJyA6ICcgJylcbiAgICArICcrJyArIGV4cG9ydHMuaHVtYW5pemUodGhpcy5kaWZmKTtcblxuICBpZiAoIXVzZUNvbG9ycykgcmV0dXJuO1xuXG4gIHZhciBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcbiAgYXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0JylcblxuICAvLyB0aGUgZmluYWwgXCIlY1wiIGlzIHNvbWV3aGF0IHRyaWNreSwgYmVjYXVzZSB0aGVyZSBjb3VsZCBiZSBvdGhlclxuICAvLyBhcmd1bWVudHMgcGFzc2VkIGVpdGhlciBiZWZvcmUgb3IgYWZ0ZXIgdGhlICVjLCBzbyB3ZSBuZWVkIHRvXG4gIC8vIGZpZ3VyZSBvdXQgdGhlIGNvcnJlY3QgaW5kZXggdG8gaW5zZXJ0IHRoZSBDU1MgaW50b1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGFzdEMgPSAwO1xuICBhcmdzWzBdLnJlcGxhY2UoLyVbYS16QS1aJV0vZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICBpZiAoJyUlJyA9PT0gbWF0Y2gpIHJldHVybjtcbiAgICBpbmRleCsrO1xuICAgIGlmICgnJWMnID09PSBtYXRjaCkge1xuICAgICAgLy8gd2Ugb25seSBhcmUgaW50ZXJlc3RlZCBpbiB0aGUgKmxhc3QqICVjXG4gICAgICAvLyAodGhlIHVzZXIgbWF5IGhhdmUgcHJvdmlkZWQgdGhlaXIgb3duKVxuICAgICAgbGFzdEMgPSBpbmRleDtcbiAgICB9XG4gIH0pO1xuXG4gIGFyZ3Muc3BsaWNlKGxhc3RDLCAwLCBjKTtcbn1cblxuLyoqXG4gKiBJbnZva2VzIGBjb25zb2xlLmxvZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUubG9nYCBpcyBub3QgYSBcImZ1bmN0aW9uXCIuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBsb2coKSB7XG4gIC8vIHRoaXMgaGFja2VyeSBpcyByZXF1aXJlZCBmb3IgSUU4LzksIHdoZXJlXG4gIC8vIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uIGRvZXNuJ3QgaGF2ZSAnYXBwbHknXG4gIHJldHVybiAnb2JqZWN0JyA9PT0gdHlwZW9mIGNvbnNvbGVcbiAgICAmJiBjb25zb2xlLmxvZ1xuICAgICYmIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGUubG9nLCBjb25zb2xlLCBhcmd1bWVudHMpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBzYXZlKG5hbWVzcGFjZXMpIHtcbiAgdHJ5IHtcbiAgICBpZiAobnVsbCA9PSBuYW1lc3BhY2VzKSB7XG4gICAgICBleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLmRlYnVnID0gbmFtZXNwYWNlcztcbiAgICB9XG4gIH0gY2F0Y2goZSkge31cbn1cblxuLyoqXG4gKiBMb2FkIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHJldHVybnMgdGhlIHByZXZpb3VzbHkgcGVyc2lzdGVkIGRlYnVnIG1vZGVzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBsb2FkKCkge1xuICB2YXIgcjtcbiAgdHJ5IHtcbiAgICByID0gZXhwb3J0cy5zdG9yYWdlLmRlYnVnO1xuICB9IGNhdGNoKGUpIHt9XG5cbiAgLy8gSWYgZGVidWcgaXNuJ3Qgc2V0IGluIExTLCBhbmQgd2UncmUgaW4gRWxlY3Ryb24sIHRyeSB0byBsb2FkICRERUJVR1xuICBpZiAoIXIgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICdlbnYnIGluIHByb2Nlc3MpIHtcbiAgICByID0gcHJvY2Vzcy5lbnYuREVCVUc7XG4gIH1cblxuICByZXR1cm4gcjtcbn1cblxuLyoqXG4gKiBFbmFibGUgbmFtZXNwYWNlcyBsaXN0ZWQgaW4gYGxvY2FsU3RvcmFnZS5kZWJ1Z2AgaW5pdGlhbGx5LlxuICovXG5cbmV4cG9ydHMuZW5hYmxlKGxvYWQoKSk7XG5cbi8qKlxuICogTG9jYWxzdG9yYWdlIGF0dGVtcHRzIHRvIHJldHVybiB0aGUgbG9jYWxzdG9yYWdlLlxuICpcbiAqIFRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2Ugc2FmYXJpIHRocm93c1xuICogd2hlbiBhIHVzZXIgZGlzYWJsZXMgY29va2llcy9sb2NhbHN0b3JhZ2VcbiAqIGFuZCB5b3UgYXR0ZW1wdCB0byBhY2Nlc3MgaXQuXG4gKlxuICogQHJldHVybiB7TG9jYWxTdG9yYWdlfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9jYWxzdG9yYWdlKCkge1xuICB0cnkge1xuICAgIHJldHVybiB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7fVxufVxuIiwiXG4vKipcbiAqIFRoaXMgaXMgdGhlIGNvbW1vbiBsb2dpYyBmb3IgYm90aCB0aGUgTm9kZS5qcyBhbmQgd2ViIGJyb3dzZXJcbiAqIGltcGxlbWVudGF0aW9ucyBvZiBgZGVidWcoKWAuXG4gKlxuICogRXhwb3NlIGBkZWJ1ZygpYCBhcyB0aGUgbW9kdWxlLlxuICovXG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZURlYnVnLmRlYnVnID0gY3JlYXRlRGVidWdbJ2RlZmF1bHQnXSA9IGNyZWF0ZURlYnVnO1xuZXhwb3J0cy5jb2VyY2UgPSBjb2VyY2U7XG5leHBvcnRzLmRpc2FibGUgPSBkaXNhYmxlO1xuZXhwb3J0cy5lbmFibGUgPSBlbmFibGU7XG5leHBvcnRzLmVuYWJsZWQgPSBlbmFibGVkO1xuZXhwb3J0cy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cbi8qKlxuICogQWN0aXZlIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICovXG5leHBvcnRzLmluc3RhbmNlcyA9IFtdO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICB2YXIgcHJldlRpbWU7XG5cbiAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgLy8gZGlzYWJsZWQ/XG4gICAgaWYgKCFkZWJ1Zy5lbmFibGVkKSByZXR1cm47XG5cbiAgICB2YXIgc2VsZiA9IGRlYnVnO1xuXG4gICAgLy8gc2V0IGBkaWZmYCB0aW1lc3RhbXBcbiAgICB2YXIgY3VyciA9ICtuZXcgRGF0ZSgpO1xuICAgIHZhciBtcyA9IGN1cnIgLSAocHJldlRpbWUgfHwgY3Vycik7XG4gICAgc2VsZi5kaWZmID0gbXM7XG4gICAgc2VsZi5wcmV2ID0gcHJldlRpbWU7XG4gICAgc2VsZi5jdXJyID0gY3VycjtcbiAgICBwcmV2VGltZSA9IGN1cnI7XG5cbiAgICAvLyB0dXJuIHRoZSBgYXJndW1lbnRzYCBpbnRvIGEgcHJvcGVyIEFycmF5XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cblxuICAgIGFyZ3NbMF0gPSBleHBvcnRzLmNvZXJjZShhcmdzWzBdKTtcblxuICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIGFyZ3NbMF0pIHtcbiAgICAgIC8vIGFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG4gICAgICBhcmdzLnVuc2hpZnQoJyVPJyk7XG4gICAgfVxuXG4gICAgLy8gYXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIGFyZ3NbMF0gPSBhcmdzWzBdLnJlcGxhY2UoLyUoW2EtekEtWiVdKS9nLCBmdW5jdGlvbihtYXRjaCwgZm9ybWF0KSB7XG4gICAgICAvLyBpZiB3ZSBlbmNvdW50ZXIgYW4gZXNjYXBlZCAlIHRoZW4gZG9uJ3QgaW5jcmVhc2UgdGhlIGFycmF5IGluZGV4XG4gICAgICBpZiAobWF0Y2ggPT09ICclJScpIHJldHVybiBtYXRjaDtcbiAgICAgIGluZGV4Kys7XG4gICAgICB2YXIgZm9ybWF0dGVyID0gZXhwb3J0cy5mb3JtYXR0ZXJzW2Zvcm1hdF07XG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGZvcm1hdHRlcikge1xuICAgICAgICB2YXIgdmFsID0gYXJnc1tpbmRleF07XG4gICAgICAgIG1hdGNoID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgdmFsKTtcblxuICAgICAgICAvLyBub3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG4gICAgICAgIGFyZ3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgaW5kZXgtLTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBtYXRjaDtcbiAgICB9KTtcblxuICAgIC8vIGFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG4gICAgZXhwb3J0cy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cbiAgICB2YXIgbG9nRm4gPSBkZWJ1Zy5sb2cgfHwgZXhwb3J0cy5sb2cgfHwgY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbiAgICBsb2dGbi5hcHBseShzZWxmLCBhcmdzKTtcbiAgfVxuXG4gIGRlYnVnLm5hbWVzcGFjZSA9IG5hbWVzcGFjZTtcbiAgZGVidWcuZW5hYmxlZCA9IGV4cG9ydHMuZW5hYmxlZChuYW1lc3BhY2UpO1xuICBkZWJ1Zy51c2VDb2xvcnMgPSBleHBvcnRzLnVzZUNvbG9ycygpO1xuICBkZWJ1Zy5jb2xvciA9IHNlbGVjdENvbG9yKG5hbWVzcGFjZSk7XG4gIGRlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG4gIC8vIGVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG4gIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZXhwb3J0cy5pbml0KSB7XG4gICAgZXhwb3J0cy5pbml0KGRlYnVnKTtcbiAgfVxuXG4gIGV4cG9ydHMuaW5zdGFuY2VzLnB1c2goZGVidWcpO1xuXG4gIHJldHVybiBkZWJ1Zztcbn1cblxuZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gIHZhciBpbmRleCA9IGV4cG9ydHMuaW5zdGFuY2VzLmluZGV4T2YodGhpcyk7XG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBleHBvcnRzLmluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG4vKipcbiAqIEVuYWJsZXMgYSBkZWJ1ZyBtb2RlIGJ5IG5hbWVzcGFjZXMuIFRoaXMgY2FuIGluY2x1ZGUgbW9kZXNcbiAqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlKG5hbWVzcGFjZXMpIHtcbiAgZXhwb3J0cy5zYXZlKG5hbWVzcGFjZXMpO1xuXG4gIGV4cG9ydHMubmFtZXMgPSBbXTtcbiAgZXhwb3J0cy5za2lwcyA9IFtdO1xuXG4gIHZhciBpO1xuICB2YXIgc3BsaXQgPSAodHlwZW9mIG5hbWVzcGFjZXMgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlcyA6ICcnKS5zcGxpdCgvW1xccyxdKy8pO1xuICB2YXIgbGVuID0gc3BsaXQubGVuZ3RoO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmICghc3BsaXRbaV0pIGNvbnRpbnVlOyAvLyBpZ25vcmUgZW1wdHkgc3RyaW5nc1xuICAgIG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuICAgIGlmIChuYW1lc3BhY2VzWzBdID09PSAnLScpIHtcbiAgICAgIGV4cG9ydHMuc2tpcHMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMuc3Vic3RyKDEpICsgJyQnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhwb3J0cy5pbnN0YW5jZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBleHBvcnRzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKGluc3RhbmNlLm5hbWVzcGFjZSk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gIGV4cG9ydHMuZW5hYmxlKCcnKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGVuYWJsZWQobmFtZSkge1xuICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgaSwgbGVuO1xuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLnNraXBzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMuc2tpcHNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSAwLCBsZW4gPSBleHBvcnRzLm5hbWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGV4cG9ydHMubmFtZXNbaV0udGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDb2VyY2UgYHZhbGAuXG4gKlxuICogQHBhcmFtIHtNaXhlZH0gdmFsXG4gKiBAcmV0dXJuIHtNaXhlZH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGNvZXJjZSh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIEVycm9yKSByZXR1cm4gdmFsLnN0YWNrIHx8IHZhbC5tZXNzYWdlO1xuICByZXR1cm4gdmFsO1xufVxuIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB5ID0gZCAqIDM2NS4yNTtcblxuLyoqXG4gKiBQYXJzZSBvciBmb3JtYXQgdGhlIGdpdmVuIGB2YWxgLlxuICpcbiAqIE9wdGlvbnM6XG4gKlxuICogIC0gYGxvbmdgIHZlcmJvc2UgZm9ybWF0dGluZyBbZmFsc2VdXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8TnVtYmVyfSB2YWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEB0aHJvd3Mge0Vycm9yfSB0aHJvdyBhbiBlcnJvciBpZiB2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIG51bWJlclxuICogQHJldHVybiB7U3RyaW5nfE51bWJlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih2YWwsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnICYmIHZhbC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIHBhcnNlKHZhbCk7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ251bWJlcicgJiYgaXNOYU4odmFsKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKCg/OlxcZCspP1xcLj9cXGQrKSAqKG1pbGxpc2Vjb25kcz98bXNlY3M/fG1zfHNlY29uZHM/fHNlY3M/fHN8bWludXRlcz98bWlucz98bXxob3Vycz98aHJzP3xofGRheXM/fGR8eWVhcnM/fHlycz98eSk/JC9pLmV4ZWMoXG4gICAgc3RyXG4gICk7XG4gIGlmICghbWF0Y2gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG4gPSBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgdmFyIHR5cGUgPSAobWF0Y2hbMl0gfHwgJ21zJykudG9Mb3dlckNhc2UoKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAneWVhcnMnOlxuICAgIGNhc2UgJ3llYXInOlxuICAgIGNhc2UgJ3lycyc6XG4gICAgY2FzZSAneXInOlxuICAgIGNhc2UgJ3knOlxuICAgICAgcmV0dXJuIG4gKiB5O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgaWYgKG1zID49IGQpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGQpICsgJ2QnO1xuICB9XG4gIGlmIChtcyA+PSBoKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBoKSArICdoJztcbiAgfVxuICBpZiAobXMgPj0gbSkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gbSkgKyAnbSc7XG4gIH1cbiAgaWYgKG1zID49IHMpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIHMpICsgJ3MnO1xuICB9XG4gIHJldHVybiBtcyArICdtcyc7XG59XG5cbi8qKlxuICogTG9uZyBmb3JtYXQgZm9yIGBtc2AuXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmbXRMb25nKG1zKSB7XG4gIHJldHVybiBwbHVyYWwobXMsIGQsICdkYXknKSB8fFxuICAgIHBsdXJhbChtcywgaCwgJ2hvdXInKSB8fFxuICAgIHBsdXJhbChtcywgbSwgJ21pbnV0ZScpIHx8XG4gICAgcGx1cmFsKG1zLCBzLCAnc2Vjb25kJykgfHxcbiAgICBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbiwgbmFtZSkge1xuICBpZiAobXMgPCBuKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtcyA8IG4gKiAxLjUpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihtcyAvIG4pICsgJyAnICsgbmFtZTtcbiAgfVxuICByZXR1cm4gTWF0aC5jZWlsKG1zIC8gbikgKyAnICcgKyBuYW1lICsgJ3MnO1xufVxuIiwiLypnbG9iYWwgQmxvYixGaWxlKi9cblxuLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzXG4gKi9cblxudmFyIGlzQXJyYXkgPSByZXF1aXJlKCdpc2FycmF5Jyk7XG52YXIgaXNCdWYgPSByZXF1aXJlKCcuL2lzLWJ1ZmZlcicpO1xudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciB3aXRoTmF0aXZlQmxvYiA9IHR5cGVvZiBCbG9iID09PSAnZnVuY3Rpb24nIHx8ICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgdG9TdHJpbmcuY2FsbChCbG9iKSA9PT0gJ1tvYmplY3QgQmxvYkNvbnN0cnVjdG9yXScpO1xudmFyIHdpdGhOYXRpdmVGaWxlID0gdHlwZW9mIEZpbGUgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyAmJiB0b1N0cmluZy5jYWxsKEZpbGUpID09PSAnW29iamVjdCBGaWxlQ29uc3RydWN0b3JdJyk7XG5cbi8qKlxuICogUmVwbGFjZXMgZXZlcnkgQnVmZmVyIHwgQXJyYXlCdWZmZXIgaW4gcGFja2V0IHdpdGggYSBudW1iZXJlZCBwbGFjZWhvbGRlci5cbiAqIEFueXRoaW5nIHdpdGggYmxvYnMgb3IgZmlsZXMgc2hvdWxkIGJlIGZlZCB0aHJvdWdoIHJlbW92ZUJsb2JzIGJlZm9yZSBjb21pbmdcbiAqIGhlcmUuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhY2tldCAtIHNvY2tldC5pbyBldmVudCBwYWNrZXRcbiAqIEByZXR1cm4ge09iamVjdH0gd2l0aCBkZWNvbnN0cnVjdGVkIHBhY2tldCBhbmQgbGlzdCBvZiBidWZmZXJzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMuZGVjb25zdHJ1Y3RQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQpIHtcbiAgdmFyIGJ1ZmZlcnMgPSBbXTtcbiAgdmFyIHBhY2tldERhdGEgPSBwYWNrZXQuZGF0YTtcbiAgdmFyIHBhY2sgPSBwYWNrZXQ7XG4gIHBhY2suZGF0YSA9IF9kZWNvbnN0cnVjdFBhY2tldChwYWNrZXREYXRhLCBidWZmZXJzKTtcbiAgcGFjay5hdHRhY2htZW50cyA9IGJ1ZmZlcnMubGVuZ3RoOyAvLyBudW1iZXIgb2YgYmluYXJ5ICdhdHRhY2htZW50cydcbiAgcmV0dXJuIHtwYWNrZXQ6IHBhY2ssIGJ1ZmZlcnM6IGJ1ZmZlcnN9O1xufTtcblxuZnVuY3Rpb24gX2RlY29uc3RydWN0UGFja2V0KGRhdGEsIGJ1ZmZlcnMpIHtcbiAgaWYgKCFkYXRhKSByZXR1cm4gZGF0YTtcblxuICBpZiAoaXNCdWYoZGF0YSkpIHtcbiAgICB2YXIgcGxhY2Vob2xkZXIgPSB7IF9wbGFjZWhvbGRlcjogdHJ1ZSwgbnVtOiBidWZmZXJzLmxlbmd0aCB9O1xuICAgIGJ1ZmZlcnMucHVzaChkYXRhKTtcbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH0gZWxzZSBpZiAoaXNBcnJheShkYXRhKSkge1xuICAgIHZhciBuZXdEYXRhID0gbmV3IEFycmF5KGRhdGEubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIG5ld0RhdGFbaV0gPSBfZGVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgfVxuICAgIHJldHVybiBuZXdEYXRhO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiAhKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgIHZhciBuZXdEYXRhID0ge307XG4gICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgIG5ld0RhdGFba2V5XSA9IF9kZWNvbnN0cnVjdFBhY2tldChkYXRhW2tleV0sIGJ1ZmZlcnMpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3RGF0YTtcbiAgfVxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBSZWNvbnN0cnVjdHMgYSBiaW5hcnkgcGFja2V0IGZyb20gaXRzIHBsYWNlaG9sZGVyIHBhY2tldCBhbmQgYnVmZmVyc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYWNrZXQgLSBldmVudCBwYWNrZXQgd2l0aCBwbGFjZWhvbGRlcnNcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1ZmZlcnMgLSBiaW5hcnkgYnVmZmVycyB0byBwdXQgaW4gcGxhY2Vob2xkZXIgcG9zaXRpb25zXG4gKiBAcmV0dXJuIHtPYmplY3R9IHJlY29uc3RydWN0ZWQgcGFja2V0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmV4cG9ydHMucmVjb25zdHJ1Y3RQYWNrZXQgPSBmdW5jdGlvbihwYWNrZXQsIGJ1ZmZlcnMpIHtcbiAgcGFja2V0LmRhdGEgPSBfcmVjb25zdHJ1Y3RQYWNrZXQocGFja2V0LmRhdGEsIGJ1ZmZlcnMpO1xuICBwYWNrZXQuYXR0YWNobWVudHMgPSB1bmRlZmluZWQ7IC8vIG5vIGxvbmdlciB1c2VmdWxcbiAgcmV0dXJuIHBhY2tldDtcbn07XG5cbmZ1bmN0aW9uIF9yZWNvbnN0cnVjdFBhY2tldChkYXRhLCBidWZmZXJzKSB7XG4gIGlmICghZGF0YSkgcmV0dXJuIGRhdGE7XG5cbiAgaWYgKGRhdGEgJiYgZGF0YS5fcGxhY2Vob2xkZXIpIHtcbiAgICByZXR1cm4gYnVmZmVyc1tkYXRhLm51bV07IC8vIGFwcHJvcHJpYXRlIGJ1ZmZlciAoc2hvdWxkIGJlIG5hdHVyYWwgb3JkZXIgYW55d2F5KVxuICB9IGVsc2UgaWYgKGlzQXJyYXkoZGF0YSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFbaV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtpXSwgYnVmZmVycyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICBkYXRhW2tleV0gPSBfcmVjb25zdHJ1Y3RQYWNrZXQoZGF0YVtrZXldLCBidWZmZXJzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSByZW1vdmVzIEJsb2JzIG9yIEZpbGVzIGZyb20gZGF0YSB2aWFcbiAqIEZpbGVSZWFkZXIncyByZWFkQXNBcnJheUJ1ZmZlciBtZXRob2QuIFVzZWQgYmVmb3JlIGVuY29kaW5nXG4gKiBkYXRhIGFzIG1zZ3BhY2suIENhbGxzIGNhbGxiYWNrIHdpdGggdGhlIGJsb2JsZXNzIGRhdGEuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRhdGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJlbW92ZUJsb2JzID0gZnVuY3Rpb24oZGF0YSwgY2FsbGJhY2spIHtcbiAgZnVuY3Rpb24gX3JlbW92ZUJsb2JzKG9iaiwgY3VyS2V5LCBjb250YWluaW5nT2JqZWN0KSB7XG4gICAgaWYgKCFvYmopIHJldHVybiBvYmo7XG5cbiAgICAvLyBjb252ZXJ0IGFueSBibG9iXG4gICAgaWYgKCh3aXRoTmF0aXZlQmxvYiAmJiBvYmogaW5zdGFuY2VvZiBCbG9iKSB8fFxuICAgICAgICAod2l0aE5hdGl2ZUZpbGUgJiYgb2JqIGluc3RhbmNlb2YgRmlsZSkpIHtcbiAgICAgIHBlbmRpbmdCbG9icysrO1xuXG4gICAgICAvLyBhc3luYyBmaWxlcmVhZGVyXG4gICAgICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyAvLyB0aGlzLnJlc3VsdCA9PSBhcnJheWJ1ZmZlclxuICAgICAgICBpZiAoY29udGFpbmluZ09iamVjdCkge1xuICAgICAgICAgIGNvbnRhaW5pbmdPYmplY3RbY3VyS2V5XSA9IHRoaXMucmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGJsb2JsZXNzRGF0YSA9IHRoaXMucmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgbm90aGluZyBwZW5kaW5nIGl0cyBjYWxsYmFjayB0aW1lXG4gICAgICAgIGlmKCEgLS1wZW5kaW5nQmxvYnMpIHtcbiAgICAgICAgICBjYWxsYmFjayhibG9ibGVzc0RhdGEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKG9iaik7IC8vIGJsb2IgLT4gYXJyYXlidWZmZXJcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqKSkgeyAvLyBoYW5kbGUgYXJyYXlcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIF9yZW1vdmVCbG9icyhvYmpbaV0sIGksIG9iaik7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhaXNCdWYob2JqKSkgeyAvLyBhbmQgb2JqZWN0XG4gICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICAgIF9yZW1vdmVCbG9icyhvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBwZW5kaW5nQmxvYnMgPSAwO1xuICB2YXIgYmxvYmxlc3NEYXRhID0gZGF0YTtcbiAgX3JlbW92ZUJsb2JzKGJsb2JsZXNzRGF0YSk7XG4gIGlmICghcGVuZGluZ0Jsb2JzKSB7XG4gICAgY2FsbGJhY2soYmxvYmxlc3NEYXRhKTtcbiAgfVxufTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLmJ5dGVMZW5ndGggPSBieXRlTGVuZ3RoXG5leHBvcnRzLnRvQnl0ZUFycmF5ID0gdG9CeXRlQXJyYXlcbmV4cG9ydHMuZnJvbUJ5dGVBcnJheSA9IGZyb21CeXRlQXJyYXlcblxudmFyIGxvb2t1cCA9IFtdXG52YXIgcmV2TG9va3VwID0gW11cbnZhciBBcnIgPSB0eXBlb2YgVWludDhBcnJheSAhPT0gJ3VuZGVmaW5lZCcgPyBVaW50OEFycmF5IDogQXJyYXlcblxudmFyIGNvZGUgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLydcbmZvciAodmFyIGkgPSAwLCBsZW4gPSBjb2RlLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gIGxvb2t1cFtpXSA9IGNvZGVbaV1cbiAgcmV2TG9va3VwW2NvZGUuY2hhckNvZGVBdChpKV0gPSBpXG59XG5cbi8vIFN1cHBvcnQgZGVjb2RpbmcgVVJMLXNhZmUgYmFzZTY0IHN0cmluZ3MsIGFzIE5vZGUuanMgZG9lcy5cbi8vIFNlZTogaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQmFzZTY0I1VSTF9hcHBsaWNhdGlvbnNcbnJldkxvb2t1cFsnLScuY2hhckNvZGVBdCgwKV0gPSA2MlxucmV2TG9va3VwWydfJy5jaGFyQ29kZUF0KDApXSA9IDYzXG5cbmZ1bmN0aW9uIGdldExlbnMgKGI2NCkge1xuICB2YXIgbGVuID0gYjY0Lmxlbmd0aFxuXG4gIGlmIChsZW4gJSA0ID4gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNCcpXG4gIH1cblxuICAvLyBUcmltIG9mZiBleHRyYSBieXRlcyBhZnRlciBwbGFjZWhvbGRlciBieXRlcyBhcmUgZm91bmRcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYmVhdGdhbW1pdC9iYXNlNjQtanMvaXNzdWVzLzQyXG4gIHZhciB2YWxpZExlbiA9IGI2NC5pbmRleE9mKCc9JylcbiAgaWYgKHZhbGlkTGVuID09PSAtMSkgdmFsaWRMZW4gPSBsZW5cblxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gdmFsaWRMZW4gPT09IGxlblxuICAgID8gMFxuICAgIDogNCAtICh2YWxpZExlbiAlIDQpXG5cbiAgcmV0dXJuIFt2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuXVxufVxuXG4vLyBiYXNlNjQgaXMgNC8zICsgdXAgdG8gdHdvIGNoYXJhY3RlcnMgb2YgdGhlIG9yaWdpbmFsIGRhdGFcbmZ1bmN0aW9uIGJ5dGVMZW5ndGggKGI2NCkge1xuICB2YXIgbGVucyA9IGdldExlbnMoYjY0KVxuICB2YXIgdmFsaWRMZW4gPSBsZW5zWzBdXG4gIHZhciBwbGFjZUhvbGRlcnNMZW4gPSBsZW5zWzFdXG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiBfYnl0ZUxlbmd0aCAoYjY0LCB2YWxpZExlbiwgcGxhY2VIb2xkZXJzTGVuKSB7XG4gIHJldHVybiAoKHZhbGlkTGVuICsgcGxhY2VIb2xkZXJzTGVuKSAqIDMgLyA0KSAtIHBsYWNlSG9sZGVyc0xlblxufVxuXG5mdW5jdGlvbiB0b0J5dGVBcnJheSAoYjY0KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuXG4gIHZhciBhcnIgPSBuZXcgQXJyKF9ieXRlTGVuZ3RoKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikpXG5cbiAgdmFyIGN1ckJ5dGUgPSAwXG5cbiAgLy8gaWYgdGhlcmUgYXJlIHBsYWNlaG9sZGVycywgb25seSBnZXQgdXAgdG8gdGhlIGxhc3QgY29tcGxldGUgNCBjaGFyc1xuICB2YXIgbGVuID0gcGxhY2VIb2xkZXJzTGVuID4gMFxuICAgID8gdmFsaWRMZW4gLSA0XG4gICAgOiB2YWxpZExlblxuXG4gIHZhciBpXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkgKz0gNCkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxOCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDEyKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAyKV0gPDwgNikgfFxuICAgICAgcmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAzKV1cbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gMTYpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIGlmIChwbGFjZUhvbGRlcnNMZW4gPT09IDIpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldID4+IDQpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAxKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDEwKSB8XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkgKyAxKV0gPDwgNCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildID4+IDIpXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDgpICYgMHhGRlxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgcmV0dXJuIGFyclxufVxuXG5mdW5jdGlvbiB0cmlwbGV0VG9CYXNlNjQgKG51bSkge1xuICByZXR1cm4gbG9va3VwW251bSA+PiAxOCAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDEyICYgMHgzRl0gK1xuICAgIGxvb2t1cFtudW0gPj4gNiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtICYgMHgzRl1cbn1cblxuZnVuY3Rpb24gZW5jb2RlQ2h1bmsgKHVpbnQ4LCBzdGFydCwgZW5kKSB7XG4gIHZhciB0bXBcbiAgdmFyIG91dHB1dCA9IFtdXG4gIGZvciAodmFyIGkgPSBzdGFydDsgaSA8IGVuZDsgaSArPSAzKSB7XG4gICAgdG1wID1cbiAgICAgICgodWludDhbaV0gPDwgMTYpICYgMHhGRjAwMDApICtcbiAgICAgICgodWludDhbaSArIDFdIDw8IDgpICYgMHhGRjAwKSArXG4gICAgICAodWludDhbaSArIDJdICYgMHhGRilcbiAgICBvdXRwdXQucHVzaCh0cmlwbGV0VG9CYXNlNjQodG1wKSlcbiAgfVxuICByZXR1cm4gb3V0cHV0LmpvaW4oJycpXG59XG5cbmZ1bmN0aW9uIGZyb21CeXRlQXJyYXkgKHVpbnQ4KSB7XG4gIHZhciB0bXBcbiAgdmFyIGxlbiA9IHVpbnQ4Lmxlbmd0aFxuICB2YXIgZXh0cmFCeXRlcyA9IGxlbiAlIDMgLy8gaWYgd2UgaGF2ZSAxIGJ5dGUgbGVmdCwgcGFkIDIgYnl0ZXNcbiAgdmFyIHBhcnRzID0gW11cbiAgdmFyIG1heENodW5rTGVuZ3RoID0gMTYzODMgLy8gbXVzdCBiZSBtdWx0aXBsZSBvZiAzXG5cbiAgLy8gZ28gdGhyb3VnaCB0aGUgYXJyYXkgZXZlcnkgdGhyZWUgYnl0ZXMsIHdlJ2xsIGRlYWwgd2l0aCB0cmFpbGluZyBzdHVmZiBsYXRlclxuICBmb3IgKHZhciBpID0gMCwgbGVuMiA9IGxlbiAtIGV4dHJhQnl0ZXM7IGkgPCBsZW4yOyBpICs9IG1heENodW5rTGVuZ3RoKSB7XG4gICAgcGFydHMucHVzaChlbmNvZGVDaHVuayhcbiAgICAgIHVpbnQ4LCBpLCAoaSArIG1heENodW5rTGVuZ3RoKSA+IGxlbjIgPyBsZW4yIDogKGkgKyBtYXhDaHVua0xlbmd0aClcbiAgICApKVxuICB9XG5cbiAgLy8gcGFkIHRoZSBlbmQgd2l0aCB6ZXJvcywgYnV0IG1ha2Ugc3VyZSB0byBub3QgZm9yZ2V0IHRoZSBleHRyYSBieXRlc1xuICBpZiAoZXh0cmFCeXRlcyA9PT0gMSkge1xuICAgIHRtcCA9IHVpbnQ4W2xlbiAtIDFdXG4gICAgcGFydHMucHVzaChcbiAgICAgIGxvb2t1cFt0bXAgPj4gMl0gK1xuICAgICAgbG9va3VwWyh0bXAgPDwgNCkgJiAweDNGXSArXG4gICAgICAnPT0nXG4gICAgKVxuICB9IGVsc2UgaWYgKGV4dHJhQnl0ZXMgPT09IDIpIHtcbiAgICB0bXAgPSAodWludDhbbGVuIC0gMl0gPDwgOCkgKyB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDEwXSArXG4gICAgICBsb29rdXBbKHRtcCA+PiA0KSAmIDB4M0ZdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDIpICYgMHgzRl0gK1xuICAgICAgJz0nXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHBhcnRzLmpvaW4oJycpXG59XG4iLCJleHBvcnRzLnJlYWQgPSBmdW5jdGlvbiAoYnVmZmVyLCBvZmZzZXQsIGlzTEUsIG1MZW4sIG5CeXRlcykge1xuICB2YXIgZSwgbVxuICB2YXIgZUxlbiA9IChuQnl0ZXMgKiA4KSAtIG1MZW4gLSAxXG4gIHZhciBlTWF4ID0gKDEgPDwgZUxlbikgLSAxXG4gIHZhciBlQmlhcyA9IGVNYXggPj4gMVxuICB2YXIgbkJpdHMgPSAtN1xuICB2YXIgaSA9IGlzTEUgPyAobkJ5dGVzIC0gMSkgOiAwXG4gIHZhciBkID0gaXNMRSA/IC0xIDogMVxuICB2YXIgcyA9IGJ1ZmZlcltvZmZzZXQgKyBpXVxuXG4gIGkgKz0gZFxuXG4gIGUgPSBzICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIHMgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IGVMZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgZSA9IChlICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIG0gPSBlICYgKCgxIDw8ICgtbkJpdHMpKSAtIDEpXG4gIGUgPj49ICgtbkJpdHMpXG4gIG5CaXRzICs9IG1MZW5cbiAgZm9yICg7IG5CaXRzID4gMDsgbSA9IChtICogMjU2KSArIGJ1ZmZlcltvZmZzZXQgKyBpXSwgaSArPSBkLCBuQml0cyAtPSA4KSB7fVxuXG4gIGlmIChlID09PSAwKSB7XG4gICAgZSA9IDEgLSBlQmlhc1xuICB9IGVsc2UgaWYgKGUgPT09IGVNYXgpIHtcbiAgICByZXR1cm4gbSA/IE5hTiA6ICgocyA/IC0xIDogMSkgKiBJbmZpbml0eSlcbiAgfSBlbHNlIHtcbiAgICBtID0gbSArIE1hdGgucG93KDIsIG1MZW4pXG4gICAgZSA9IGUgLSBlQmlhc1xuICB9XG4gIHJldHVybiAocyA/IC0xIDogMSkgKiBtICogTWF0aC5wb3coMiwgZSAtIG1MZW4pXG59XG5cbmV4cG9ydHMud3JpdGUgPSBmdW5jdGlvbiAoYnVmZmVyLCB2YWx1ZSwgb2Zmc2V0LCBpc0xFLCBtTGVuLCBuQnl0ZXMpIHtcbiAgdmFyIGUsIG0sIGNcbiAgdmFyIGVMZW4gPSAobkJ5dGVzICogOCkgLSBtTGVuIC0gMVxuICB2YXIgZU1heCA9ICgxIDw8IGVMZW4pIC0gMVxuICB2YXIgZUJpYXMgPSBlTWF4ID4+IDFcbiAgdmFyIHJ0ID0gKG1MZW4gPT09IDIzID8gTWF0aC5wb3coMiwgLTI0KSAtIE1hdGgucG93KDIsIC03NykgOiAwKVxuICB2YXIgaSA9IGlzTEUgPyAwIDogKG5CeXRlcyAtIDEpXG4gIHZhciBkID0gaXNMRSA/IDEgOiAtMVxuICB2YXIgcyA9IHZhbHVlIDwgMCB8fCAodmFsdWUgPT09IDAgJiYgMSAvIHZhbHVlIDwgMCkgPyAxIDogMFxuXG4gIHZhbHVlID0gTWF0aC5hYnModmFsdWUpXG5cbiAgaWYgKGlzTmFOKHZhbHVlKSB8fCB2YWx1ZSA9PT0gSW5maW5pdHkpIHtcbiAgICBtID0gaXNOYU4odmFsdWUpID8gMSA6IDBcbiAgICBlID0gZU1heFxuICB9IGVsc2Uge1xuICAgIGUgPSBNYXRoLmZsb29yKE1hdGgubG9nKHZhbHVlKSAvIE1hdGguTE4yKVxuICAgIGlmICh2YWx1ZSAqIChjID0gTWF0aC5wb3coMiwgLWUpKSA8IDEpIHtcbiAgICAgIGUtLVxuICAgICAgYyAqPSAyXG4gICAgfVxuICAgIGlmIChlICsgZUJpYXMgPj0gMSkge1xuICAgICAgdmFsdWUgKz0gcnQgLyBjXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlICs9IHJ0ICogTWF0aC5wb3coMiwgMSAtIGVCaWFzKVxuICAgIH1cbiAgICBpZiAodmFsdWUgKiBjID49IDIpIHtcbiAgICAgIGUrK1xuICAgICAgYyAvPSAyXG4gICAgfVxuXG4gICAgaWYgKGUgKyBlQmlhcyA+PSBlTWF4KSB7XG4gICAgICBtID0gMFxuICAgICAgZSA9IGVNYXhcbiAgICB9IGVsc2UgaWYgKGUgKyBlQmlhcyA+PSAxKSB7XG4gICAgICBtID0gKCh2YWx1ZSAqIGMpIC0gMSkgKiBNYXRoLnBvdygyLCBtTGVuKVxuICAgICAgZSA9IGUgKyBlQmlhc1xuICAgIH0gZWxzZSB7XG4gICAgICBtID0gdmFsdWUgKiBNYXRoLnBvdygyLCBlQmlhcyAtIDEpICogTWF0aC5wb3coMiwgbUxlbilcbiAgICAgIGUgPSAwXG4gICAgfVxuICB9XG5cbiAgZm9yICg7IG1MZW4gPj0gODsgYnVmZmVyW29mZnNldCArIGldID0gbSAmIDB4ZmYsIGkgKz0gZCwgbSAvPSAyNTYsIG1MZW4gLT0gOCkge31cblxuICBlID0gKGUgPDwgbUxlbikgfCBtXG4gIGVMZW4gKz0gbUxlblxuICBmb3IgKDsgZUxlbiA+IDA7IGJ1ZmZlcltvZmZzZXQgKyBpXSA9IGUgJiAweGZmLCBpICs9IGQsIGUgLz0gMjU2LCBlTGVuIC09IDgpIHt9XG5cbiAgYnVmZmVyW29mZnNldCArIGkgLSBkXSB8PSBzICogMTI4XG59XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcnIpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoYXJyKSA9PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIlxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NvY2tldCcpO1xuXG4vKipcbiAqIEV4cG9ydHMgcGFyc2VyXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqXG4gKi9cbm1vZHVsZS5leHBvcnRzLnBhcnNlciA9IHJlcXVpcmUoJ2VuZ2luZS5pby1wYXJzZXInKTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgdHJhbnNwb3J0cyA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cy9pbmRleCcpO1xudmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdjb21wb25lbnQtZW1pdHRlcicpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDpzb2NrZXQnKTtcbnZhciBpbmRleCA9IHJlcXVpcmUoJ2luZGV4b2YnKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG52YXIgcGFyc2V1cmkgPSByZXF1aXJlKCdwYXJzZXVyaScpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBTb2NrZXQ7XG5cbi8qKlxuICogU29ja2V0IGNvbnN0cnVjdG9yLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE9iamVjdH0gdXJpIG9yIG9wdGlvbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIFNvY2tldCAodXJpLCBvcHRzKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTb2NrZXQpKSByZXR1cm4gbmV3IFNvY2tldCh1cmksIG9wdHMpO1xuXG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gIGlmICh1cmkgJiYgJ29iamVjdCcgPT09IHR5cGVvZiB1cmkpIHtcbiAgICBvcHRzID0gdXJpO1xuICAgIHVyaSA9IG51bGw7XG4gIH1cblxuICBpZiAodXJpKSB7XG4gICAgdXJpID0gcGFyc2V1cmkodXJpKTtcbiAgICBvcHRzLmhvc3RuYW1lID0gdXJpLmhvc3Q7XG4gICAgb3B0cy5zZWN1cmUgPSB1cmkucHJvdG9jb2wgPT09ICdodHRwcycgfHwgdXJpLnByb3RvY29sID09PSAnd3NzJztcbiAgICBvcHRzLnBvcnQgPSB1cmkucG9ydDtcbiAgICBpZiAodXJpLnF1ZXJ5KSBvcHRzLnF1ZXJ5ID0gdXJpLnF1ZXJ5O1xuICB9IGVsc2UgaWYgKG9wdHMuaG9zdCkge1xuICAgIG9wdHMuaG9zdG5hbWUgPSBwYXJzZXVyaShvcHRzLmhvc3QpLmhvc3Q7XG4gIH1cblxuICB0aGlzLnNlY3VyZSA9IG51bGwgIT0gb3B0cy5zZWN1cmUgPyBvcHRzLnNlY3VyZVxuICAgIDogKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2h0dHBzOicgPT09IGxvY2F0aW9uLnByb3RvY29sKTtcblxuICBpZiAob3B0cy5ob3N0bmFtZSAmJiAhb3B0cy5wb3J0KSB7XG4gICAgLy8gaWYgbm8gcG9ydCBpcyBzcGVjaWZpZWQgbWFudWFsbHksIHVzZSB0aGUgcHJvdG9jb2wgZGVmYXVsdFxuICAgIG9wdHMucG9ydCA9IHRoaXMuc2VjdXJlID8gJzQ0MycgOiAnODAnO1xuICB9XG5cbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQgfHwgZmFsc2U7XG4gIHRoaXMuaG9zdG5hbWUgPSBvcHRzLmhvc3RuYW1lIHx8XG4gICAgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbiAgdGhpcy5wb3J0ID0gb3B0cy5wb3J0IHx8ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxvY2F0aW9uLnBvcnRcbiAgICAgID8gbG9jYXRpb24ucG9ydFxuICAgICAgOiAodGhpcy5zZWN1cmUgPyA0NDMgOiA4MCkpO1xuICB0aGlzLnF1ZXJ5ID0gb3B0cy5xdWVyeSB8fCB7fTtcbiAgaWYgKCdzdHJpbmcnID09PSB0eXBlb2YgdGhpcy5xdWVyeSkgdGhpcy5xdWVyeSA9IHBhcnNlcXMuZGVjb2RlKHRoaXMucXVlcnkpO1xuICB0aGlzLnVwZ3JhZGUgPSBmYWxzZSAhPT0gb3B0cy51cGdyYWRlO1xuICB0aGlzLnBhdGggPSAob3B0cy5wYXRoIHx8ICcvZW5naW5lLmlvJykucmVwbGFjZSgvXFwvJC8sICcnKSArICcvJztcbiAgdGhpcy5mb3JjZUpTT05QID0gISFvcHRzLmZvcmNlSlNPTlA7XG4gIHRoaXMuanNvbnAgPSBmYWxzZSAhPT0gb3B0cy5qc29ucDtcbiAgdGhpcy5mb3JjZUJhc2U2NCA9ICEhb3B0cy5mb3JjZUJhc2U2NDtcbiAgdGhpcy5lbmFibGVzWERSID0gISFvcHRzLmVuYWJsZXNYRFI7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2UgIT09IG9wdHMud2l0aENyZWRlbnRpYWxzO1xuICB0aGlzLnRpbWVzdGFtcFBhcmFtID0gb3B0cy50aW1lc3RhbXBQYXJhbSB8fCAndCc7XG4gIHRoaXMudGltZXN0YW1wUmVxdWVzdHMgPSBvcHRzLnRpbWVzdGFtcFJlcXVlc3RzO1xuICB0aGlzLnRyYW5zcG9ydHMgPSBvcHRzLnRyYW5zcG9ydHMgfHwgWydwb2xsaW5nJywgJ3dlYnNvY2tldCddO1xuICB0aGlzLnRyYW5zcG9ydE9wdGlvbnMgPSBvcHRzLnRyYW5zcG9ydE9wdGlvbnMgfHwge307XG4gIHRoaXMucmVhZHlTdGF0ZSA9ICcnO1xuICB0aGlzLndyaXRlQnVmZmVyID0gW107XG4gIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG4gIHRoaXMucG9saWN5UG9ydCA9IG9wdHMucG9saWN5UG9ydCB8fCA4NDM7XG4gIHRoaXMucmVtZW1iZXJVcGdyYWRlID0gb3B0cy5yZW1lbWJlclVwZ3JhZGUgfHwgZmFsc2U7XG4gIHRoaXMuYmluYXJ5VHlwZSA9IG51bGw7XG4gIHRoaXMub25seUJpbmFyeVVwZ3JhZGVzID0gb3B0cy5vbmx5QmluYXJ5VXBncmFkZXM7XG4gIHRoaXMucGVyTWVzc2FnZURlZmxhdGUgPSBmYWxzZSAhPT0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZSA/IChvcHRzLnBlck1lc3NhZ2VEZWZsYXRlIHx8IHt9KSA6IGZhbHNlO1xuXG4gIGlmICh0cnVlID09PSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlKSB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0ge307XG4gIGlmICh0aGlzLnBlck1lc3NhZ2VEZWZsYXRlICYmIG51bGwgPT0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZS50aHJlc2hvbGQpIHtcbiAgICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCA9IDEwMjQ7XG4gIH1cblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeCB8fCBudWxsO1xuICB0aGlzLmtleSA9IG9wdHMua2V5IHx8IG51bGw7XG4gIHRoaXMucGFzc3BocmFzZSA9IG9wdHMucGFzc3BocmFzZSB8fCBudWxsO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQgfHwgbnVsbDtcbiAgdGhpcy5jYSA9IG9wdHMuY2EgfHwgbnVsbDtcbiAgdGhpcy5jaXBoZXJzID0gb3B0cy5jaXBoZXJzIHx8IG51bGw7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRzLnJlamVjdFVuYXV0aG9yaXplZDtcbiAgdGhpcy5mb3JjZU5vZGUgPSAhIW9wdHMuZm9yY2VOb2RlO1xuXG4gIC8vIGRldGVjdCBSZWFjdE5hdGl2ZSBlbnZpcm9ubWVudFxuICB0aGlzLmlzUmVhY3ROYXRpdmUgPSAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnc3RyaW5nJyAmJiBuYXZpZ2F0b3IucHJvZHVjdC50b0xvd2VyQ2FzZSgpID09PSAncmVhY3RuYXRpdmUnKTtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIG9yIFJlYWN0TmF0aXZlIGNsaWVudFxuICBpZiAodHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuaXNSZWFjdE5hdGl2ZSkge1xuICAgIGlmIChvcHRzLmV4dHJhSGVhZGVycyAmJiBPYmplY3Qua2V5cyhvcHRzLmV4dHJhSGVhZGVycykubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5sb2NhbEFkZHJlc3MpIHtcbiAgICAgIHRoaXMubG9jYWxBZGRyZXNzID0gb3B0cy5sb2NhbEFkZHJlc3M7XG4gICAgfVxuICB9XG5cbiAgLy8gc2V0IG9uIGhhbmRzaGFrZVxuICB0aGlzLmlkID0gbnVsbDtcbiAgdGhpcy51cGdyYWRlcyA9IG51bGw7XG4gIHRoaXMucGluZ0ludGVydmFsID0gbnVsbDtcbiAgdGhpcy5waW5nVGltZW91dCA9IG51bGw7XG5cbiAgLy8gc2V0IG9uIGhlYXJ0YmVhdFxuICB0aGlzLnBpbmdJbnRlcnZhbFRpbWVyID0gbnVsbDtcbiAgdGhpcy5waW5nVGltZW91dFRpbWVyID0gbnVsbDtcblxuICB0aGlzLm9wZW4oKTtcbn1cblxuU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihTb2NrZXQucHJvdG90eXBlKTtcblxuLyoqXG4gKiBQcm90b2NvbCB2ZXJzaW9uLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuU29ja2V0LnByb3RvY29sID0gcGFyc2VyLnByb3RvY29sOyAvLyB0aGlzIGlzIGFuIGludFxuXG4vKipcbiAqIEV4cG9zZSBkZXBzIGZvciBsZWdhY3kgY29tcGF0aWJpbGl0eVxuICogYW5kIHN0YW5kYWxvbmUgYnJvd3NlciBhY2Nlc3MuXG4gKi9cblxuU29ja2V0LlNvY2tldCA9IFNvY2tldDtcblNvY2tldC5UcmFuc3BvcnQgPSByZXF1aXJlKCcuL3RyYW5zcG9ydCcpO1xuU29ja2V0LnRyYW5zcG9ydHMgPSByZXF1aXJlKCcuL3RyYW5zcG9ydHMvaW5kZXgnKTtcblNvY2tldC5wYXJzZXIgPSByZXF1aXJlKCdlbmdpbmUuaW8tcGFyc2VyJyk7XG5cbi8qKlxuICogQ3JlYXRlcyB0cmFuc3BvcnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gKiBAcmV0dXJuIHtUcmFuc3BvcnR9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLmNyZWF0ZVRyYW5zcG9ydCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGRlYnVnKCdjcmVhdGluZyB0cmFuc3BvcnQgXCIlc1wiJywgbmFtZSk7XG4gIHZhciBxdWVyeSA9IGNsb25lKHRoaXMucXVlcnkpO1xuXG4gIC8vIGFwcGVuZCBlbmdpbmUuaW8gcHJvdG9jb2wgaWRlbnRpZmllclxuICBxdWVyeS5FSU8gPSBwYXJzZXIucHJvdG9jb2w7XG5cbiAgLy8gdHJhbnNwb3J0IG5hbWVcbiAgcXVlcnkudHJhbnNwb3J0ID0gbmFtZTtcblxuICAvLyBwZXItdHJhbnNwb3J0IG9wdGlvbnNcbiAgdmFyIG9wdGlvbnMgPSB0aGlzLnRyYW5zcG9ydE9wdGlvbnNbbmFtZV0gfHwge307XG5cbiAgLy8gc2Vzc2lvbiBpZCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gIGlmICh0aGlzLmlkKSBxdWVyeS5zaWQgPSB0aGlzLmlkO1xuXG4gIHZhciB0cmFuc3BvcnQgPSBuZXcgdHJhbnNwb3J0c1tuYW1lXSh7XG4gICAgcXVlcnk6IHF1ZXJ5LFxuICAgIHNvY2tldDogdGhpcyxcbiAgICBhZ2VudDogb3B0aW9ucy5hZ2VudCB8fCB0aGlzLmFnZW50LFxuICAgIGhvc3RuYW1lOiBvcHRpb25zLmhvc3RuYW1lIHx8IHRoaXMuaG9zdG5hbWUsXG4gICAgcG9ydDogb3B0aW9ucy5wb3J0IHx8IHRoaXMucG9ydCxcbiAgICBzZWN1cmU6IG9wdGlvbnMuc2VjdXJlIHx8IHRoaXMuc2VjdXJlLFxuICAgIHBhdGg6IG9wdGlvbnMucGF0aCB8fCB0aGlzLnBhdGgsXG4gICAgZm9yY2VKU09OUDogb3B0aW9ucy5mb3JjZUpTT05QIHx8IHRoaXMuZm9yY2VKU09OUCxcbiAgICBqc29ucDogb3B0aW9ucy5qc29ucCB8fCB0aGlzLmpzb25wLFxuICAgIGZvcmNlQmFzZTY0OiBvcHRpb25zLmZvcmNlQmFzZTY0IHx8IHRoaXMuZm9yY2VCYXNlNjQsXG4gICAgZW5hYmxlc1hEUjogb3B0aW9ucy5lbmFibGVzWERSIHx8IHRoaXMuZW5hYmxlc1hEUixcbiAgICB3aXRoQ3JlZGVudGlhbHM6IG9wdGlvbnMud2l0aENyZWRlbnRpYWxzIHx8IHRoaXMud2l0aENyZWRlbnRpYWxzLFxuICAgIHRpbWVzdGFtcFJlcXVlc3RzOiBvcHRpb25zLnRpbWVzdGFtcFJlcXVlc3RzIHx8IHRoaXMudGltZXN0YW1wUmVxdWVzdHMsXG4gICAgdGltZXN0YW1wUGFyYW06IG9wdGlvbnMudGltZXN0YW1wUGFyYW0gfHwgdGhpcy50aW1lc3RhbXBQYXJhbSxcbiAgICBwb2xpY3lQb3J0OiBvcHRpb25zLnBvbGljeVBvcnQgfHwgdGhpcy5wb2xpY3lQb3J0LFxuICAgIHBmeDogb3B0aW9ucy5wZnggfHwgdGhpcy5wZngsXG4gICAga2V5OiBvcHRpb25zLmtleSB8fCB0aGlzLmtleSxcbiAgICBwYXNzcGhyYXNlOiBvcHRpb25zLnBhc3NwaHJhc2UgfHwgdGhpcy5wYXNzcGhyYXNlLFxuICAgIGNlcnQ6IG9wdGlvbnMuY2VydCB8fCB0aGlzLmNlcnQsXG4gICAgY2E6IG9wdGlvbnMuY2EgfHwgdGhpcy5jYSxcbiAgICBjaXBoZXJzOiBvcHRpb25zLmNpcGhlcnMgfHwgdGhpcy5jaXBoZXJzLFxuICAgIHJlamVjdFVuYXV0aG9yaXplZDogb3B0aW9ucy5yZWplY3RVbmF1dGhvcml6ZWQgfHwgdGhpcy5yZWplY3RVbmF1dGhvcml6ZWQsXG4gICAgcGVyTWVzc2FnZURlZmxhdGU6IG9wdGlvbnMucGVyTWVzc2FnZURlZmxhdGUgfHwgdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZSxcbiAgICBleHRyYUhlYWRlcnM6IG9wdGlvbnMuZXh0cmFIZWFkZXJzIHx8IHRoaXMuZXh0cmFIZWFkZXJzLFxuICAgIGZvcmNlTm9kZTogb3B0aW9ucy5mb3JjZU5vZGUgfHwgdGhpcy5mb3JjZU5vZGUsXG4gICAgbG9jYWxBZGRyZXNzOiBvcHRpb25zLmxvY2FsQWRkcmVzcyB8fCB0aGlzLmxvY2FsQWRkcmVzcyxcbiAgICByZXF1ZXN0VGltZW91dDogb3B0aW9ucy5yZXF1ZXN0VGltZW91dCB8fCB0aGlzLnJlcXVlc3RUaW1lb3V0LFxuICAgIHByb3RvY29sczogb3B0aW9ucy5wcm90b2NvbHMgfHwgdm9pZCAoMCksXG4gICAgaXNSZWFjdE5hdGl2ZTogdGhpcy5pc1JlYWN0TmF0aXZlXG4gIH0pO1xuXG4gIHJldHVybiB0cmFuc3BvcnQ7XG59O1xuXG5mdW5jdGlvbiBjbG9uZSAob2JqKSB7XG4gIHZhciBvID0ge307XG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgb1tpXSA9IG9ialtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG87XG59XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdHJhbnNwb3J0IHRvIHVzZSBhbmQgc3RhcnRzIHByb2JlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5Tb2NrZXQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0cmFuc3BvcnQ7XG4gIGlmICh0aGlzLnJlbWVtYmVyVXBncmFkZSAmJiBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzICYmIHRoaXMudHJhbnNwb3J0cy5pbmRleE9mKCd3ZWJzb2NrZXQnKSAhPT0gLTEpIHtcbiAgICB0cmFuc3BvcnQgPSAnd2Vic29ja2V0JztcbiAgfSBlbHNlIGlmICgwID09PSB0aGlzLnRyYW5zcG9ydHMubGVuZ3RoKSB7XG4gICAgLy8gRW1pdCBlcnJvciBvbiBuZXh0IHRpY2sgc28gaXQgY2FuIGJlIGxpc3RlbmVkIHRvXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2VsZi5lbWl0KCdlcnJvcicsICdObyB0cmFuc3BvcnRzIGF2YWlsYWJsZScpO1xuICAgIH0sIDApO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB0cmFuc3BvcnQgPSB0aGlzLnRyYW5zcG9ydHNbMF07XG4gIH1cbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW5pbmcnO1xuXG4gIC8vIFJldHJ5IHdpdGggdGhlIG5leHQgdHJhbnNwb3J0IGlmIHRoZSB0cmFuc3BvcnQgaXMgZGlzYWJsZWQgKGpzb25wOiBmYWxzZSlcbiAgdHJ5IHtcbiAgICB0cmFuc3BvcnQgPSB0aGlzLmNyZWF0ZVRyYW5zcG9ydCh0cmFuc3BvcnQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdGhpcy50cmFuc3BvcnRzLnNoaWZ0KCk7XG4gICAgdGhpcy5vcGVuKCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJhbnNwb3J0Lm9wZW4oKTtcbiAgdGhpcy5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgY3VycmVudCB0cmFuc3BvcnQuIERpc2FibGVzIHRoZSBleGlzdGluZyBvbmUgKGlmIGFueSkuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5zZXRUcmFuc3BvcnQgPSBmdW5jdGlvbiAodHJhbnNwb3J0KSB7XG4gIGRlYnVnKCdzZXR0aW5nIHRyYW5zcG9ydCAlcycsIHRyYW5zcG9ydC5uYW1lKTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmICh0aGlzLnRyYW5zcG9ydCkge1xuICAgIGRlYnVnKCdjbGVhcmluZyBleGlzdGluZyB0cmFuc3BvcnQgJXMnLCB0aGlzLnRyYW5zcG9ydC5uYW1lKTtcbiAgICB0aGlzLnRyYW5zcG9ydC5yZW1vdmVBbGxMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8vIHNldCB1cCB0cmFuc3BvcnRcbiAgdGhpcy50cmFuc3BvcnQgPSB0cmFuc3BvcnQ7XG5cbiAgLy8gc2V0IHVwIHRyYW5zcG9ydCBsaXN0ZW5lcnNcbiAgdHJhbnNwb3J0XG4gIC5vbignZHJhaW4nLCBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbkRyYWluKCk7XG4gIH0pXG4gIC5vbigncGFja2V0JywgZnVuY3Rpb24gKHBhY2tldCkge1xuICAgIHNlbGYub25QYWNrZXQocGFja2V0KTtcbiAgfSlcbiAgLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgc2VsZi5vbkVycm9yKGUpO1xuICB9KVxuICAub24oJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIHNlbGYub25DbG9zZSgndHJhbnNwb3J0IGNsb3NlJyk7XG4gIH0pO1xufTtcblxuLyoqXG4gKiBQcm9iZXMgYSB0cmFuc3BvcnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRyYW5zcG9ydCBuYW1lXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnByb2JlID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgZGVidWcoJ3Byb2JpbmcgdHJhbnNwb3J0IFwiJXNcIicsIG5hbWUpO1xuICB2YXIgdHJhbnNwb3J0ID0gdGhpcy5jcmVhdGVUcmFuc3BvcnQobmFtZSwgeyBwcm9iZTogMSB9KTtcbiAgdmFyIGZhaWxlZCA9IGZhbHNlO1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIG9uVHJhbnNwb3J0T3BlbiAoKSB7XG4gICAgaWYgKHNlbGYub25seUJpbmFyeVVwZ3JhZGVzKSB7XG4gICAgICB2YXIgdXBncmFkZUxvc2VzQmluYXJ5ID0gIXRoaXMuc3VwcG9ydHNCaW5hcnkgJiYgc2VsZi50cmFuc3BvcnQuc3VwcG9ydHNCaW5hcnk7XG4gICAgICBmYWlsZWQgPSBmYWlsZWQgfHwgdXBncmFkZUxvc2VzQmluYXJ5O1xuICAgIH1cbiAgICBpZiAoZmFpbGVkKSByZXR1cm47XG5cbiAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBvcGVuZWQnLCBuYW1lKTtcbiAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiAncGluZycsIGRhdGE6ICdwcm9iZScgfV0pO1xuICAgIHRyYW5zcG9ydC5vbmNlKCdwYWNrZXQnLCBmdW5jdGlvbiAobXNnKSB7XG4gICAgICBpZiAoZmFpbGVkKSByZXR1cm47XG4gICAgICBpZiAoJ3BvbmcnID09PSBtc2cudHlwZSAmJiAncHJvYmUnID09PSBtc2cuZGF0YSkge1xuICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBwb25nJywgbmFtZSk7XG4gICAgICAgIHNlbGYudXBncmFkaW5nID0gdHJ1ZTtcbiAgICAgICAgc2VsZi5lbWl0KCd1cGdyYWRpbmcnLCB0cmFuc3BvcnQpO1xuICAgICAgICBpZiAoIXRyYW5zcG9ydCkgcmV0dXJuO1xuICAgICAgICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gJ3dlYnNvY2tldCcgPT09IHRyYW5zcG9ydC5uYW1lO1xuXG4gICAgICAgIGRlYnVnKCdwYXVzaW5nIGN1cnJlbnQgdHJhbnNwb3J0IFwiJXNcIicsIHNlbGYudHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgICBzZWxmLnRyYW5zcG9ydC5wYXVzZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKGZhaWxlZCkgcmV0dXJuO1xuICAgICAgICAgIGlmICgnY2xvc2VkJyA9PT0gc2VsZi5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgICAgZGVidWcoJ2NoYW5naW5nIHRyYW5zcG9ydCBhbmQgc2VuZGluZyB1cGdyYWRlIHBhY2tldCcpO1xuXG4gICAgICAgICAgY2xlYW51cCgpO1xuXG4gICAgICAgICAgc2VsZi5zZXRUcmFuc3BvcnQodHJhbnNwb3J0KTtcbiAgICAgICAgICB0cmFuc3BvcnQuc2VuZChbeyB0eXBlOiAndXBncmFkZScgfV0pO1xuICAgICAgICAgIHNlbGYuZW1pdCgndXBncmFkZScsIHRyYW5zcG9ydCk7XG4gICAgICAgICAgdHJhbnNwb3J0ID0gbnVsbDtcbiAgICAgICAgICBzZWxmLnVwZ3JhZGluZyA9IGZhbHNlO1xuICAgICAgICAgIHNlbGYuZmx1c2goKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1ZygncHJvYmUgdHJhbnNwb3J0IFwiJXNcIiBmYWlsZWQnLCBuYW1lKTtcbiAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcigncHJvYmUgZXJyb3InKTtcbiAgICAgICAgZXJyLnRyYW5zcG9ydCA9IHRyYW5zcG9ydC5uYW1lO1xuICAgICAgICBzZWxmLmVtaXQoJ3VwZ3JhZGVFcnJvcicsIGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBmcmVlemVUcmFuc3BvcnQgKCkge1xuICAgIGlmIChmYWlsZWQpIHJldHVybjtcblxuICAgIC8vIEFueSBjYWxsYmFjayBjYWxsZWQgYnkgdHJhbnNwb3J0IHNob3VsZCBiZSBpZ25vcmVkIHNpbmNlIG5vd1xuICAgIGZhaWxlZCA9IHRydWU7XG5cbiAgICBjbGVhbnVwKCk7XG5cbiAgICB0cmFuc3BvcnQuY2xvc2UoKTtcbiAgICB0cmFuc3BvcnQgPSBudWxsO1xuICB9XG5cbiAgLy8gSGFuZGxlIGFueSBlcnJvciB0aGF0IGhhcHBlbnMgd2hpbGUgcHJvYmluZ1xuICBmdW5jdGlvbiBvbmVycm9yIChlcnIpIHtcbiAgICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoJ3Byb2JlIGVycm9yOiAnICsgZXJyKTtcbiAgICBlcnJvci50cmFuc3BvcnQgPSB0cmFuc3BvcnQubmFtZTtcblxuICAgIGZyZWV6ZVRyYW5zcG9ydCgpO1xuXG4gICAgZGVidWcoJ3Byb2JlIHRyYW5zcG9ydCBcIiVzXCIgZmFpbGVkIGJlY2F1c2Ugb2YgZXJyb3I6ICVzJywgbmFtZSwgZXJyKTtcblxuICAgIHNlbGYuZW1pdCgndXBncmFkZUVycm9yJywgZXJyb3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25UcmFuc3BvcnRDbG9zZSAoKSB7XG4gICAgb25lcnJvcigndHJhbnNwb3J0IGNsb3NlZCcpO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgc29ja2V0IGlzIGNsb3NlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gIGZ1bmN0aW9uIG9uY2xvc2UgKCkge1xuICAgIG9uZXJyb3IoJ3NvY2tldCBjbG9zZWQnKTtcbiAgfVxuXG4gIC8vIFdoZW4gdGhlIHNvY2tldCBpcyB1cGdyYWRlZCB3aGlsZSB3ZSdyZSBwcm9iaW5nXG4gIGZ1bmN0aW9uIG9udXBncmFkZSAodG8pIHtcbiAgICBpZiAodHJhbnNwb3J0ICYmIHRvLm5hbWUgIT09IHRyYW5zcG9ydC5uYW1lKSB7XG4gICAgICBkZWJ1ZygnXCIlc1wiIHdvcmtzIC0gYWJvcnRpbmcgXCIlc1wiJywgdG8ubmFtZSwgdHJhbnNwb3J0Lm5hbWUpO1xuICAgICAgZnJlZXplVHJhbnNwb3J0KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgb24gdGhlIHRyYW5zcG9ydCBhbmQgb24gc2VsZlxuICBmdW5jdGlvbiBjbGVhbnVwICgpIHtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ29wZW4nLCBvblRyYW5zcG9ydE9wZW4pO1xuICAgIHRyYW5zcG9ydC5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBvbmVycm9yKTtcbiAgICB0cmFuc3BvcnQucmVtb3ZlTGlzdGVuZXIoJ2Nsb3NlJywgb25UcmFuc3BvcnRDbG9zZSk7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmNsb3NlKTtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCd1cGdyYWRpbmcnLCBvbnVwZ3JhZGUpO1xuICB9XG5cbiAgdHJhbnNwb3J0Lm9uY2UoJ29wZW4nLCBvblRyYW5zcG9ydE9wZW4pO1xuICB0cmFuc3BvcnQub25jZSgnZXJyb3InLCBvbmVycm9yKTtcbiAgdHJhbnNwb3J0Lm9uY2UoJ2Nsb3NlJywgb25UcmFuc3BvcnRDbG9zZSk7XG5cbiAgdGhpcy5vbmNlKCdjbG9zZScsIG9uY2xvc2UpO1xuICB0aGlzLm9uY2UoJ3VwZ3JhZGluZycsIG9udXBncmFkZSk7XG5cbiAgdHJhbnNwb3J0Lm9wZW4oKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHdoZW4gY29ubmVjdGlvbiBpcyBkZWVtZWQgb3Blbi5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUub25PcGVuID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1Zygnc29ja2V0IG9wZW4nKTtcbiAgdGhpcy5yZWFkeVN0YXRlID0gJ29wZW4nO1xuICBTb2NrZXQucHJpb3JXZWJzb2NrZXRTdWNjZXNzID0gJ3dlYnNvY2tldCcgPT09IHRoaXMudHJhbnNwb3J0Lm5hbWU7XG4gIHRoaXMuZW1pdCgnb3BlbicpO1xuICB0aGlzLmZsdXNoKCk7XG5cbiAgLy8gd2UgY2hlY2sgZm9yIGByZWFkeVN0YXRlYCBpbiBjYXNlIGFuIGBvcGVuYFxuICAvLyBsaXN0ZW5lciBhbHJlYWR5IGNsb3NlZCB0aGUgc29ja2V0XG4gIGlmICgnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSAmJiB0aGlzLnVwZ3JhZGUgJiYgdGhpcy50cmFuc3BvcnQucGF1c2UpIHtcbiAgICBkZWJ1Zygnc3RhcnRpbmcgdXBncmFkZSBwcm9iZXMnKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHRoaXMudXBncmFkZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB0aGlzLnByb2JlKHRoaXMudXBncmFkZXNbaV0pO1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBIYW5kbGVzIGEgcGFja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUub25QYWNrZXQgPSBmdW5jdGlvbiAocGFja2V0KSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSB8fFxuICAgICAgJ2Nsb3NpbmcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1Zygnc29ja2V0IHJlY2VpdmU6IHR5cGUgXCIlc1wiLCBkYXRhIFwiJXNcIicsIHBhY2tldC50eXBlLCBwYWNrZXQuZGF0YSk7XG5cbiAgICB0aGlzLmVtaXQoJ3BhY2tldCcsIHBhY2tldCk7XG5cbiAgICAvLyBTb2NrZXQgaXMgbGl2ZSAtIGFueSBwYWNrZXQgY291bnRzXG4gICAgdGhpcy5lbWl0KCdoZWFydGJlYXQnKTtcblxuICAgIHN3aXRjaCAocGFja2V0LnR5cGUpIHtcbiAgICAgIGNhc2UgJ29wZW4nOlxuICAgICAgICB0aGlzLm9uSGFuZHNoYWtlKEpTT04ucGFyc2UocGFja2V0LmRhdGEpKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3BvbmcnOlxuICAgICAgICB0aGlzLnNldFBpbmcoKTtcbiAgICAgICAgdGhpcy5lbWl0KCdwb25nJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ3NlcnZlciBlcnJvcicpO1xuICAgICAgICBlcnIuY29kZSA9IHBhY2tldC5kYXRhO1xuICAgICAgICB0aGlzLm9uRXJyb3IoZXJyKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ21lc3NhZ2UnOlxuICAgICAgICB0aGlzLmVtaXQoJ2RhdGEnLCBwYWNrZXQuZGF0YSk7XG4gICAgICAgIHRoaXMuZW1pdCgnbWVzc2FnZScsIHBhY2tldC5kYXRhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRlYnVnKCdwYWNrZXQgcmVjZWl2ZWQgd2l0aCBzb2NrZXQgcmVhZHlTdGF0ZSBcIiVzXCInLCB0aGlzLnJlYWR5U3RhdGUpO1xuICB9XG59O1xuXG4vKipcbiAqIENhbGxlZCB1cG9uIGhhbmRzaGFrZSBjb21wbGV0aW9uLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYW5kc2hha2Ugb2JqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLm9uSGFuZHNoYWtlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdGhpcy5lbWl0KCdoYW5kc2hha2UnLCBkYXRhKTtcbiAgdGhpcy5pZCA9IGRhdGEuc2lkO1xuICB0aGlzLnRyYW5zcG9ydC5xdWVyeS5zaWQgPSBkYXRhLnNpZDtcbiAgdGhpcy51cGdyYWRlcyA9IHRoaXMuZmlsdGVyVXBncmFkZXMoZGF0YS51cGdyYWRlcyk7XG4gIHRoaXMucGluZ0ludGVydmFsID0gZGF0YS5waW5nSW50ZXJ2YWw7XG4gIHRoaXMucGluZ1RpbWVvdXQgPSBkYXRhLnBpbmdUaW1lb3V0O1xuICB0aGlzLm9uT3BlbigpO1xuICAvLyBJbiBjYXNlIG9wZW4gaGFuZGxlciBjbG9zZXMgc29ja2V0XG4gIGlmICgnY2xvc2VkJyA9PT0gdGhpcy5yZWFkeVN0YXRlKSByZXR1cm47XG4gIHRoaXMuc2V0UGluZygpO1xuXG4gIC8vIFByb2xvbmcgbGl2ZW5lc3Mgb2Ygc29ja2V0IG9uIGhlYXJ0YmVhdFxuICB0aGlzLnJlbW92ZUxpc3RlbmVyKCdoZWFydGJlYXQnLCB0aGlzLm9uSGVhcnRiZWF0KTtcbiAgdGhpcy5vbignaGVhcnRiZWF0JywgdGhpcy5vbkhlYXJ0YmVhdCk7XG59O1xuXG4vKipcbiAqIFJlc2V0cyBwaW5nIHRpbWVvdXQuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkhlYXJ0YmVhdCA9IGZ1bmN0aW9uICh0aW1lb3V0KSB7XG4gIGNsZWFyVGltZW91dCh0aGlzLnBpbmdUaW1lb3V0VGltZXIpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHNlbGYucGluZ1RpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIGlmICgnY2xvc2VkJyA9PT0gc2VsZi5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgc2VsZi5vbkNsb3NlKCdwaW5nIHRpbWVvdXQnKTtcbiAgfSwgdGltZW91dCB8fCAoc2VsZi5waW5nSW50ZXJ2YWwgKyBzZWxmLnBpbmdUaW1lb3V0KSk7XG59O1xuXG4vKipcbiAqIFBpbmdzIHNlcnZlciBldmVyeSBgdGhpcy5waW5nSW50ZXJ2YWxgIGFuZCBleHBlY3RzIHJlc3BvbnNlXG4gKiB3aXRoaW4gYHRoaXMucGluZ1RpbWVvdXRgIG9yIGNsb3NlcyBjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuc2V0UGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBjbGVhclRpbWVvdXQoc2VsZi5waW5nSW50ZXJ2YWxUaW1lcik7XG4gIHNlbGYucGluZ0ludGVydmFsVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICBkZWJ1Zygnd3JpdGluZyBwaW5nIHBhY2tldCAtIGV4cGVjdGluZyBwb25nIHdpdGhpbiAlc21zJywgc2VsZi5waW5nVGltZW91dCk7XG4gICAgc2VsZi5waW5nKCk7XG4gICAgc2VsZi5vbkhlYXJ0YmVhdChzZWxmLnBpbmdUaW1lb3V0KTtcbiAgfSwgc2VsZi5waW5nSW50ZXJ2YWwpO1xufTtcblxuLyoqXG4qIFNlbmRzIGEgcGluZyBwYWNrZXQuXG4qXG4qIEBhcGkgcHJpdmF0ZVxuKi9cblxuU29ja2V0LnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuc2VuZFBhY2tldCgncGluZycsIGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLmVtaXQoJ3BpbmcnKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIENhbGxlZCBvbiBgZHJhaW5gIGV2ZW50XG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkRyYWluID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLndyaXRlQnVmZmVyLnNwbGljZSgwLCB0aGlzLnByZXZCdWZmZXJMZW4pO1xuXG4gIC8vIHNldHRpbmcgcHJldkJ1ZmZlckxlbiA9IDAgaXMgdmVyeSBpbXBvcnRhbnRcbiAgLy8gZm9yIGV4YW1wbGUsIHdoZW4gdXBncmFkaW5nLCB1cGdyYWRlIHBhY2tldCBpcyBzZW50IG92ZXIsXG4gIC8vIGFuZCBhIG5vbnplcm8gcHJldkJ1ZmZlckxlbiBjb3VsZCBjYXVzZSBwcm9ibGVtcyBvbiBgZHJhaW5gXG4gIHRoaXMucHJldkJ1ZmZlckxlbiA9IDA7XG5cbiAgaWYgKDAgPT09IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgdGhpcy5lbWl0KCdkcmFpbicpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZmx1c2goKTtcbiAgfVxufTtcblxuLyoqXG4gKiBGbHVzaCB3cml0ZSBidWZmZXJzLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnY2xvc2VkJyAhPT0gdGhpcy5yZWFkeVN0YXRlICYmIHRoaXMudHJhbnNwb3J0LndyaXRhYmxlICYmXG4gICAgIXRoaXMudXBncmFkaW5nICYmIHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoKSB7XG4gICAgZGVidWcoJ2ZsdXNoaW5nICVkIHBhY2tldHMgaW4gc29ja2V0JywgdGhpcy53cml0ZUJ1ZmZlci5sZW5ndGgpO1xuICAgIHRoaXMudHJhbnNwb3J0LnNlbmQodGhpcy53cml0ZUJ1ZmZlcik7XG4gICAgLy8ga2VlcCB0cmFjayBvZiBjdXJyZW50IGxlbmd0aCBvZiB3cml0ZUJ1ZmZlclxuICAgIC8vIHNwbGljZSB3cml0ZUJ1ZmZlciBhbmQgY2FsbGJhY2tCdWZmZXIgb24gYGRyYWluYFxuICAgIHRoaXMucHJldkJ1ZmZlckxlbiA9IHRoaXMud3JpdGVCdWZmZXIubGVuZ3RoO1xuICAgIHRoaXMuZW1pdCgnZmx1c2gnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZW5kcyBhIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQHJldHVybiB7U29ja2V0fSBmb3IgY2hhaW5pbmcuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cblNvY2tldC5wcm90b3R5cGUud3JpdGUgPVxuU29ja2V0LnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKG1zZywgb3B0aW9ucywgZm4pIHtcbiAgdGhpcy5zZW5kUGFja2V0KCdtZXNzYWdlJywgbXNnLCBvcHRpb25zLCBmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZW5kcyBhIHBhY2tldC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFja2V0IHR5cGUuXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24uXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5Tb2NrZXQucHJvdG90eXBlLnNlbmRQYWNrZXQgPSBmdW5jdGlvbiAodHlwZSwgZGF0YSwgb3B0aW9ucywgZm4pIHtcbiAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiBkYXRhKSB7XG4gICAgZm4gPSBkYXRhO1xuICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICBmbiA9IG9wdGlvbnM7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cblxuICBpZiAoJ2Nsb3NpbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ2Nsb3NlZCcgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBvcHRpb25zLmNvbXByZXNzID0gZmFsc2UgIT09IG9wdGlvbnMuY29tcHJlc3M7XG5cbiAgdmFyIHBhY2tldCA9IHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRhdGE6IGRhdGEsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9O1xuICB0aGlzLmVtaXQoJ3BhY2tldENyZWF0ZScsIHBhY2tldCk7XG4gIHRoaXMud3JpdGVCdWZmZXIucHVzaChwYWNrZXQpO1xuICBpZiAoZm4pIHRoaXMub25jZSgnZmx1c2gnLCBmbik7XG4gIHRoaXMuZmx1c2goKTtcbn07XG5cbi8qKlxuICogQ2xvc2VzIHRoZSBjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblNvY2tldC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gIGlmICgnb3BlbmluZycgPT09IHRoaXMucmVhZHlTdGF0ZSB8fCAnb3BlbicgPT09IHRoaXMucmVhZHlTdGF0ZSkge1xuICAgIHRoaXMucmVhZHlTdGF0ZSA9ICdjbG9zaW5nJztcblxuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGlmICh0aGlzLndyaXRlQnVmZmVyLmxlbmd0aCkge1xuICAgICAgdGhpcy5vbmNlKCdkcmFpbicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICAgICAgd2FpdEZvclVwZ3JhZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudXBncmFkaW5nKSB7XG4gICAgICB3YWl0Rm9yVXBncmFkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlICgpIHtcbiAgICBzZWxmLm9uQ2xvc2UoJ2ZvcmNlZCBjbG9zZScpO1xuICAgIGRlYnVnKCdzb2NrZXQgY2xvc2luZyAtIHRlbGxpbmcgdHJhbnNwb3J0IHRvIGNsb3NlJyk7XG4gICAgc2VsZi50cmFuc3BvcnQuY2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXBBbmRDbG9zZSAoKSB7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkZScsIGNsZWFudXBBbmRDbG9zZSk7XG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcigndXBncmFkZUVycm9yJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICBjbG9zZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gd2FpdEZvclVwZ3JhZGUgKCkge1xuICAgIC8vIHdhaXQgZm9yIHVwZ3JhZGUgdG8gZmluaXNoIHNpbmNlIHdlIGNhbid0IHNlbmQgcGFja2V0cyB3aGlsZSBwYXVzaW5nIGEgdHJhbnNwb3J0XG4gICAgc2VsZi5vbmNlKCd1cGdyYWRlJywgY2xlYW51cEFuZENsb3NlKTtcbiAgICBzZWxmLm9uY2UoJ3VwZ3JhZGVFcnJvcicsIGNsZWFudXBBbmRDbG9zZSk7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gdHJhbnNwb3J0IGVycm9yXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICBkZWJ1Zygnc29ja2V0IGVycm9yICVqJywgZXJyKTtcbiAgU29ja2V0LnByaW9yV2Vic29ja2V0U3VjY2VzcyA9IGZhbHNlO1xuICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgdGhpcy5vbkNsb3NlKCd0cmFuc3BvcnQgZXJyb3InLCBlcnIpO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiB0cmFuc3BvcnQgY2xvc2UuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuU29ja2V0LnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKHJlYXNvbiwgZGVzYykge1xuICBpZiAoJ29wZW5pbmcnID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ29wZW4nID09PSB0aGlzLnJlYWR5U3RhdGUgfHwgJ2Nsb3NpbmcnID09PSB0aGlzLnJlYWR5U3RhdGUpIHtcbiAgICBkZWJ1Zygnc29ja2V0IGNsb3NlIHdpdGggcmVhc29uOiBcIiVzXCInLCByZWFzb24pO1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIGNsZWFyIHRpbWVyc1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnBpbmdJbnRlcnZhbFRpbWVyKTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5waW5nVGltZW91dFRpbWVyKTtcblxuICAgIC8vIHN0b3AgZXZlbnQgZnJvbSBmaXJpbmcgYWdhaW4gZm9yIHRyYW5zcG9ydFxuICAgIHRoaXMudHJhbnNwb3J0LnJlbW92ZUFsbExpc3RlbmVycygnY2xvc2UnKTtcblxuICAgIC8vIGVuc3VyZSB0cmFuc3BvcnQgd29uJ3Qgc3RheSBvcGVuXG4gICAgdGhpcy50cmFuc3BvcnQuY2xvc2UoKTtcblxuICAgIC8vIGlnbm9yZSBmdXJ0aGVyIHRyYW5zcG9ydCBjb21tdW5pY2F0aW9uXG4gICAgdGhpcy50cmFuc3BvcnQucmVtb3ZlQWxsTGlzdGVuZXJzKCk7XG5cbiAgICAvLyBzZXQgcmVhZHkgc3RhdGVcbiAgICB0aGlzLnJlYWR5U3RhdGUgPSAnY2xvc2VkJztcblxuICAgIC8vIGNsZWFyIHNlc3Npb24gaWRcbiAgICB0aGlzLmlkID0gbnVsbDtcblxuICAgIC8vIGVtaXQgY2xvc2UgZXZlbnRcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgcmVhc29uLCBkZXNjKTtcblxuICAgIC8vIGNsZWFuIGJ1ZmZlcnMgYWZ0ZXIsIHNvIHVzZXJzIGNhbiBzdGlsbFxuICAgIC8vIGdyYWIgdGhlIGJ1ZmZlcnMgb24gYGNsb3NlYCBldmVudFxuICAgIHNlbGYud3JpdGVCdWZmZXIgPSBbXTtcbiAgICBzZWxmLnByZXZCdWZmZXJMZW4gPSAwO1xuICB9XG59O1xuXG4vKipcbiAqIEZpbHRlcnMgdXBncmFkZXMsIHJldHVybmluZyBvbmx5IHRob3NlIG1hdGNoaW5nIGNsaWVudCB0cmFuc3BvcnRzLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNlcnZlciB1cGdyYWRlc1xuICogQGFwaSBwcml2YXRlXG4gKlxuICovXG5cblNvY2tldC5wcm90b3R5cGUuZmlsdGVyVXBncmFkZXMgPSBmdW5jdGlvbiAodXBncmFkZXMpIHtcbiAgdmFyIGZpbHRlcmVkVXBncmFkZXMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDAsIGogPSB1cGdyYWRlcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICBpZiAofmluZGV4KHRoaXMudHJhbnNwb3J0cywgdXBncmFkZXNbaV0pKSBmaWx0ZXJlZFVwZ3JhZGVzLnB1c2godXBncmFkZXNbaV0pO1xuICB9XG4gIHJldHVybiBmaWx0ZXJlZFVwZ3JhZGVzO1xufTtcbiIsIlxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqXG4gKiBMb2dpYyBib3Jyb3dlZCBmcm9tIE1vZGVybml6cjpcbiAqXG4gKiAgIC0gaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2NvcnMuanNcbiAqL1xuXG50cnkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAnd2l0aENyZWRlbnRpYWxzJyBpbiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbn0gY2F0Y2ggKGVycikge1xuICAvLyBpZiBYTUxIdHRwIHN1cHBvcnQgaXMgZGlzYWJsZWQgaW4gSUUgdGhlbiBpdCB3aWxsIHRocm93XG4gIC8vIHdoZW4gdHJ5aW5nIHRvIGNyZWF0ZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xufVxuIiwiLyogZ2xvYmFsIGF0dGFjaEV2ZW50ICovXG5cbi8qKlxuICogTW9kdWxlIHJlcXVpcmVtZW50cy5cbiAqL1xuXG52YXIgWE1MSHR0cFJlcXVlc3QgPSByZXF1aXJlKCd4bWxodHRwcmVxdWVzdC1zc2wnKTtcbnZhciBQb2xsaW5nID0gcmVxdWlyZSgnLi9wb2xsaW5nJyk7XG52YXIgRW1pdHRlciA9IHJlcXVpcmUoJ2NvbXBvbmVudC1lbWl0dGVyJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdlbmdpbmUuaW8tY2xpZW50OnBvbGxpbmcteGhyJyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2dsb2JhbFRoaXMnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFhIUjtcbm1vZHVsZS5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG4vKipcbiAqIEVtcHR5IGZ1bmN0aW9uXG4gKi9cblxuZnVuY3Rpb24gZW1wdHkgKCkge31cblxuLyoqXG4gKiBYSFIgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0c1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBYSFIgKG9wdHMpIHtcbiAgUG9sbGluZy5jYWxsKHRoaXMsIG9wdHMpO1xuICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gb3B0cy5yZXF1ZXN0VGltZW91dDtcbiAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBpc1NTTCA9ICdodHRwczonID09PSBsb2NhdGlvbi5wcm90b2NvbDtcbiAgICB2YXIgcG9ydCA9IGxvY2F0aW9uLnBvcnQ7XG5cbiAgICAvLyBzb21lIHVzZXIgYWdlbnRzIGhhdmUgZW1wdHkgYGxvY2F0aW9uLnBvcnRgXG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICBwb3J0ID0gaXNTU0wgPyA0NDMgOiA4MDtcbiAgICB9XG5cbiAgICB0aGlzLnhkID0gKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0cy5ob3N0bmFtZSAhPT0gbG9jYXRpb24uaG9zdG5hbWUpIHx8XG4gICAgICBwb3J0ICE9PSBvcHRzLnBvcnQ7XG4gICAgdGhpcy54cyA9IG9wdHMuc2VjdXJlICE9PSBpc1NTTDtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gUG9sbGluZy5cbiAqL1xuXG5pbmhlcml0KFhIUiwgUG9sbGluZyk7XG5cbi8qKlxuICogWEhSIHN1cHBvcnRzIGJpbmFyeVxuICovXG5cblhIUi5wcm90b3R5cGUuc3VwcG9ydHNCaW5hcnkgPSB0cnVlO1xuXG4vKipcbiAqIENyZWF0ZXMgYSByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblhIUi5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICBvcHRzLnVyaSA9IHRoaXMudXJpKCk7XG4gIG9wdHMueGQgPSB0aGlzLnhkO1xuICBvcHRzLnhzID0gdGhpcy54cztcbiAgb3B0cy5hZ2VudCA9IHRoaXMuYWdlbnQgfHwgZmFsc2U7XG4gIG9wdHMuc3VwcG9ydHNCaW5hcnkgPSB0aGlzLnN1cHBvcnRzQmluYXJ5O1xuICBvcHRzLmVuYWJsZXNYRFIgPSB0aGlzLmVuYWJsZXNYRFI7XG4gIG9wdHMud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHM7XG5cbiAgLy8gU1NMIG9wdGlvbnMgZm9yIE5vZGUuanMgY2xpZW50XG4gIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gIG9wdHMua2V5ID0gdGhpcy5rZXk7XG4gIG9wdHMucGFzc3BocmFzZSA9IHRoaXMucGFzc3BocmFzZTtcbiAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICBvcHRzLmNhID0gdGhpcy5jYTtcbiAgb3B0cy5jaXBoZXJzID0gdGhpcy5jaXBoZXJzO1xuICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuICBvcHRzLnJlcXVlc3RUaW1lb3V0ID0gdGhpcy5yZXF1ZXN0VGltZW91dDtcblxuICAvLyBvdGhlciBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLmV4dHJhSGVhZGVycyA9IHRoaXMuZXh0cmFIZWFkZXJzO1xuXG4gIHJldHVybiBuZXcgUmVxdWVzdChvcHRzKTtcbn07XG5cbi8qKlxuICogU2VuZHMgZGF0YS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGVkIHVwb24gZmx1c2guXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5YSFIucHJvdG90eXBlLmRvV3JpdGUgPSBmdW5jdGlvbiAoZGF0YSwgZm4pIHtcbiAgdmFyIGlzQmluYXJ5ID0gdHlwZW9mIGRhdGEgIT09ICdzdHJpbmcnICYmIGRhdGEgIT09IHVuZGVmaW5lZDtcbiAgdmFyIHJlcSA9IHRoaXMucmVxdWVzdCh7IG1ldGhvZDogJ1BPU1QnLCBkYXRhOiBkYXRhLCBpc0JpbmFyeTogaXNCaW5hcnkgfSk7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgcmVxLm9uKCdzdWNjZXNzJywgZm4pO1xuICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgIHNlbGYub25FcnJvcigneGhyIHBvc3QgZXJyb3InLCBlcnIpO1xuICB9KTtcbiAgdGhpcy5zZW5kWGhyID0gcmVxO1xufTtcblxuLyoqXG4gKiBTdGFydHMgYSBwb2xsIGN5Y2xlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblhIUi5wcm90b3R5cGUuZG9Qb2xsID0gZnVuY3Rpb24gKCkge1xuICBkZWJ1ZygneGhyIHBvbGwnKTtcbiAgdmFyIHJlcSA9IHRoaXMucmVxdWVzdCgpO1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHJlcS5vbignZGF0YScsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgc2VsZi5vbkRhdGEoZGF0YSk7XG4gIH0pO1xuICByZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuICAgIHNlbGYub25FcnJvcigneGhyIHBvbGwgZXJyb3InLCBlcnIpO1xuICB9KTtcbiAgdGhpcy5wb2xsWGhyID0gcmVxO1xufTtcblxuLyoqXG4gKiBSZXF1ZXN0IGNvbnN0cnVjdG9yXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gUmVxdWVzdCAob3B0cykge1xuICB0aGlzLm1ldGhvZCA9IG9wdHMubWV0aG9kIHx8ICdHRVQnO1xuICB0aGlzLnVyaSA9IG9wdHMudXJpO1xuICB0aGlzLnhkID0gISFvcHRzLnhkO1xuICB0aGlzLnhzID0gISFvcHRzLnhzO1xuICB0aGlzLmFzeW5jID0gZmFsc2UgIT09IG9wdHMuYXN5bmM7XG4gIHRoaXMuZGF0YSA9IHVuZGVmaW5lZCAhPT0gb3B0cy5kYXRhID8gb3B0cy5kYXRhIDogbnVsbDtcbiAgdGhpcy5hZ2VudCA9IG9wdHMuYWdlbnQ7XG4gIHRoaXMuaXNCaW5hcnkgPSBvcHRzLmlzQmluYXJ5O1xuICB0aGlzLnN1cHBvcnRzQmluYXJ5ID0gb3B0cy5zdXBwb3J0c0JpbmFyeTtcbiAgdGhpcy5lbmFibGVzWERSID0gb3B0cy5lbmFibGVzWERSO1xuICB0aGlzLndpdGhDcmVkZW50aWFscyA9IG9wdHMud2l0aENyZWRlbnRpYWxzO1xuICB0aGlzLnJlcXVlc3RUaW1lb3V0ID0gb3B0cy5yZXF1ZXN0VGltZW91dDtcblxuICAvLyBTU0wgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5wZnggPSBvcHRzLnBmeDtcbiAgdGhpcy5rZXkgPSBvcHRzLmtleTtcbiAgdGhpcy5wYXNzcGhyYXNlID0gb3B0cy5wYXNzcGhyYXNlO1xuICB0aGlzLmNlcnQgPSBvcHRzLmNlcnQ7XG4gIHRoaXMuY2EgPSBvcHRzLmNhO1xuICB0aGlzLmNpcGhlcnMgPSBvcHRzLmNpcGhlcnM7XG4gIHRoaXMucmVqZWN0VW5hdXRob3JpemVkID0gb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQ7XG5cbiAgLy8gb3RoZXIgb3B0aW9ucyBmb3IgTm9kZS5qcyBjbGllbnRcbiAgdGhpcy5leHRyYUhlYWRlcnMgPSBvcHRzLmV4dHJhSGVhZGVycztcblxuICB0aGlzLmNyZWF0ZSgpO1xufVxuXG4vKipcbiAqIE1peCBpbiBgRW1pdHRlcmAuXG4gKi9cblxuRW1pdHRlcihSZXF1ZXN0LnByb3RvdHlwZSk7XG5cbi8qKlxuICogQ3JlYXRlcyB0aGUgWEhSIG9iamVjdCBhbmQgc2VuZHMgdGhlIHJlcXVlc3QuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgb3B0cyA9IHsgYWdlbnQ6IHRoaXMuYWdlbnQsIHhkb21haW46IHRoaXMueGQsIHhzY2hlbWU6IHRoaXMueHMsIGVuYWJsZXNYRFI6IHRoaXMuZW5hYmxlc1hEUiB9O1xuXG4gIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICBvcHRzLnBmeCA9IHRoaXMucGZ4O1xuICBvcHRzLmtleSA9IHRoaXMua2V5O1xuICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gIG9wdHMuY2VydCA9IHRoaXMuY2VydDtcbiAgb3B0cy5jYSA9IHRoaXMuY2E7XG4gIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgb3B0cy5yZWplY3RVbmF1dGhvcml6ZWQgPSB0aGlzLnJlamVjdFVuYXV0aG9yaXplZDtcblxuICB2YXIgeGhyID0gdGhpcy54aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3Qob3B0cyk7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0cnkge1xuICAgIGRlYnVnKCd4aHIgb3BlbiAlczogJXMnLCB0aGlzLm1ldGhvZCwgdGhpcy51cmkpO1xuICAgIHhoci5vcGVuKHRoaXMubWV0aG9kLCB0aGlzLnVyaSwgdGhpcy5hc3luYyk7XG4gICAgdHJ5IHtcbiAgICAgIGlmICh0aGlzLmV4dHJhSGVhZGVycykge1xuICAgICAgICB4aHIuc2V0RGlzYWJsZUhlYWRlckNoZWNrICYmIHhoci5zZXREaXNhYmxlSGVhZGVyQ2hlY2sodHJ1ZSk7XG4gICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5leHRyYUhlYWRlcnMpIHtcbiAgICAgICAgICBpZiAodGhpcy5leHRyYUhlYWRlcnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMuZXh0cmFIZWFkZXJzW2ldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgaWYgKCdQT1NUJyA9PT0gdGhpcy5tZXRob2QpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLmlzQmluYXJ5KSB7XG4gICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJyovKicpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG5cbiAgICAvLyBpZTYgY2hlY2tcbiAgICBpZiAoJ3dpdGhDcmVkZW50aWFscycgaW4geGhyKSB7XG4gICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHM7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVxdWVzdFRpbWVvdXQpIHtcbiAgICAgIHhoci50aW1lb3V0ID0gdGhpcy5yZXF1ZXN0VGltZW91dDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5oYXNYRFIoKSkge1xuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkxvYWQoKTtcbiAgICAgIH07XG4gICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjb250ZW50VHlwZSA9IHhoci5nZXRSZXNwb25zZUhlYWRlcignQ29udGVudC1UeXBlJyk7XG4gICAgICAgICAgICBpZiAoc2VsZi5zdXBwb3J0c0JpbmFyeSAmJiBjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfHwgY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07IGNoYXJzZXQ9VVRGLTgnKSB7XG4gICAgICAgICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDQgIT09IHhoci5yZWFkeVN0YXRlKSByZXR1cm47XG4gICAgICAgIGlmICgyMDAgPT09IHhoci5zdGF0dXMgfHwgMTIyMyA9PT0geGhyLnN0YXR1cykge1xuICAgICAgICAgIHNlbGYub25Mb2FkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbWFrZSBzdXJlIHRoZSBgZXJyb3JgIGV2ZW50IGhhbmRsZXIgdGhhdCdzIHVzZXItc2V0XG4gICAgICAgICAgLy8gZG9lcyBub3QgdGhyb3cgaW4gdGhlIHNhbWUgdGljayBhbmQgZ2V0cyBjYXVnaHQgaGVyZVxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5vbkVycm9yKHR5cGVvZiB4aHIuc3RhdHVzID09PSAnbnVtYmVyJyA/IHhoci5zdGF0dXMgOiAwKTtcbiAgICAgICAgICB9LCAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICBkZWJ1ZygneGhyIGRhdGEgJXMnLCB0aGlzLmRhdGEpO1xuICAgIHhoci5zZW5kKHRoaXMuZGF0YSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBOZWVkIHRvIGRlZmVyIHNpbmNlIC5jcmVhdGUoKSBpcyBjYWxsZWQgZGlyZWN0bHkgZmhyb20gdGhlIGNvbnN0cnVjdG9yXG4gICAgLy8gYW5kIHRodXMgdGhlICdlcnJvcicgZXZlbnQgY2FuIG9ubHkgYmUgb25seSBib3VuZCAqYWZ0ZXIqIHRoaXMgZXhjZXB0aW9uXG4gICAgLy8gb2NjdXJzLiAgVGhlcmVmb3JlLCBhbHNvLCB3ZSBjYW5ub3QgdGhyb3cgaGVyZSBhdCBhbGwuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLm9uRXJyb3IoZSk7XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aGlzLmluZGV4ID0gUmVxdWVzdC5yZXF1ZXN0c0NvdW50Kys7XG4gICAgUmVxdWVzdC5yZXF1ZXN0c1t0aGlzLmluZGV4XSA9IHRoaXM7XG4gIH1cbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vblN1Y2Nlc3MgPSBmdW5jdGlvbiAoKSB7XG4gIHRoaXMuZW1pdCgnc3VjY2VzcycpO1xuICB0aGlzLmNsZWFudXAoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIGlmIHdlIGhhdmUgZGF0YS5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5vbkRhdGEgPSBmdW5jdGlvbiAoZGF0YSkge1xuICB0aGlzLmVtaXQoJ2RhdGEnLCBkYXRhKTtcbiAgdGhpcy5vblN1Y2Nlc3MoKTtcbn07XG5cbi8qKlxuICogQ2FsbGVkIHVwb24gZXJyb3IuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuUmVxdWVzdC5wcm90b3R5cGUub25FcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgdGhpcy5lbWl0KCdlcnJvcicsIGVycik7XG4gIHRoaXMuY2xlYW51cCh0cnVlKTtcbn07XG5cbi8qKlxuICogQ2xlYW5zIHVwIGhvdXNlLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiAoZnJvbUVycm9yKSB7XG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHRoaXMueGhyIHx8IG51bGwgPT09IHRoaXMueGhyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8vIHhtbGh0dHByZXF1ZXN0XG4gIGlmICh0aGlzLmhhc1hEUigpKSB7XG4gICAgdGhpcy54aHIub25sb2FkID0gdGhpcy54aHIub25lcnJvciA9IGVtcHR5O1xuICB9IGVsc2Uge1xuICAgIHRoaXMueGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGVtcHR5O1xuICB9XG5cbiAgaWYgKGZyb21FcnJvcikge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLnhoci5hYm9ydCgpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRlbGV0ZSBSZXF1ZXN0LnJlcXVlc3RzW3RoaXMuaW5kZXhdO1xuICB9XG5cbiAgdGhpcy54aHIgPSBudWxsO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBsb2FkLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGRhdGE7XG4gIHRyeSB7XG4gICAgdmFyIGNvbnRlbnRUeXBlO1xuICAgIHRyeSB7XG4gICAgICBjb250ZW50VHlwZSA9IHRoaXMueGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGlmIChjb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbScgfHwgY29udGVudFR5cGUgPT09ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW07IGNoYXJzZXQ9VVRGLTgnKSB7XG4gICAgICBkYXRhID0gdGhpcy54aHIucmVzcG9uc2UgfHwgdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXRhID0gdGhpcy54aHIucmVzcG9uc2VUZXh0O1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMub25FcnJvcihlKTtcbiAgfVxuICBpZiAobnVsbCAhPSBkYXRhKSB7XG4gICAgdGhpcy5vbkRhdGEoZGF0YSk7XG4gIH1cbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgaXQgaGFzIFhEb21haW5SZXF1ZXN0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cblJlcXVlc3QucHJvdG90eXBlLmhhc1hEUiA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHR5cGVvZiBYRG9tYWluUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMueHMgJiYgdGhpcy5lbmFibGVzWERSO1xufTtcblxuLyoqXG4gKiBBYm9ydHMgdGhlIHJlcXVlc3QuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5SZXF1ZXN0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jbGVhbnVwKCk7XG59O1xuXG4vKipcbiAqIEFib3J0cyBwZW5kaW5nIHJlcXVlc3RzIHdoZW4gdW5sb2FkaW5nIHRoZSB3aW5kb3cuIFRoaXMgaXMgbmVlZGVkIHRvIHByZXZlbnRcbiAqIG1lbW9yeSBsZWFrcyAoZS5nLiB3aGVuIHVzaW5nIElFKSBhbmQgdG8gZW5zdXJlIHRoYXQgbm8gc3B1cmlvdXMgZXJyb3IgaXNcbiAqIGVtaXR0ZWQuXG4gKi9cblxuUmVxdWVzdC5yZXF1ZXN0c0NvdW50ID0gMDtcblJlcXVlc3QucmVxdWVzdHMgPSB7fTtcblxuaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKHR5cGVvZiBhdHRhY2hFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIHVubG9hZEhhbmRsZXIpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHRlcm1pbmF0aW9uRXZlbnQgPSAnb25wYWdlaGlkZScgaW4gZ2xvYmFsVGhpcyA/ICdwYWdlaGlkZScgOiAndW5sb2FkJztcbiAgICBhZGRFdmVudExpc3RlbmVyKHRlcm1pbmF0aW9uRXZlbnQsIHVubG9hZEhhbmRsZXIsIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmxvYWRIYW5kbGVyICgpIHtcbiAgZm9yICh2YXIgaSBpbiBSZXF1ZXN0LnJlcXVlc3RzKSB7XG4gICAgaWYgKFJlcXVlc3QucmVxdWVzdHMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIFJlcXVlc3QucmVxdWVzdHNbaV0uYWJvcnQoKTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuLyoqXG4gKiBHZXRzIHRoZSBrZXlzIGZvciBhbiBvYmplY3QuXG4gKlxuICogQHJldHVybiB7QXJyYXl9IGtleXNcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyAob2JqKXtcbiAgdmFyIGFyciA9IFtdO1xuICB2YXIgaGFzID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGkpKSB7XG4gICAgICBhcnIucHVzaChpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycjtcbn07XG4iLCIvKipcbiAqIEFuIGFic3RyYWN0aW9uIGZvciBzbGljaW5nIGFuIGFycmF5YnVmZmVyIGV2ZW4gd2hlblxuICogQXJyYXlCdWZmZXIucHJvdG90eXBlLnNsaWNlIGlzIG5vdCBzdXBwb3J0ZWRcbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYXJyYXlidWZmZXIsIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGJ5dGVzID0gYXJyYXlidWZmZXIuYnl0ZUxlbmd0aDtcbiAgc3RhcnQgPSBzdGFydCB8fCAwO1xuICBlbmQgPSBlbmQgfHwgYnl0ZXM7XG5cbiAgaWYgKGFycmF5YnVmZmVyLnNsaWNlKSB7IHJldHVybiBhcnJheWJ1ZmZlci5zbGljZShzdGFydCwgZW5kKTsgfVxuXG4gIGlmIChzdGFydCA8IDApIHsgc3RhcnQgKz0gYnl0ZXM7IH1cbiAgaWYgKGVuZCA8IDApIHsgZW5kICs9IGJ5dGVzOyB9XG4gIGlmIChlbmQgPiBieXRlcykgeyBlbmQgPSBieXRlczsgfVxuXG4gIGlmIChzdGFydCA+PSBieXRlcyB8fCBzdGFydCA+PSBlbmQgfHwgYnl0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gbmV3IEFycmF5QnVmZmVyKDApO1xuICB9XG5cbiAgdmFyIGFidiA9IG5ldyBVaW50OEFycmF5KGFycmF5YnVmZmVyKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBVaW50OEFycmF5KGVuZCAtIHN0YXJ0KTtcbiAgZm9yICh2YXIgaSA9IHN0YXJ0LCBpaSA9IDA7IGkgPCBlbmQ7IGkrKywgaWkrKykge1xuICAgIHJlc3VsdFtpaV0gPSBhYnZbaV07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdC5idWZmZXI7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBhZnRlclxuXG5mdW5jdGlvbiBhZnRlcihjb3VudCwgY2FsbGJhY2ssIGVycl9jYikge1xuICAgIHZhciBiYWlsID0gZmFsc2VcbiAgICBlcnJfY2IgPSBlcnJfY2IgfHwgbm9vcFxuICAgIHByb3h5LmNvdW50ID0gY291bnRcblxuICAgIHJldHVybiAoY291bnQgPT09IDApID8gY2FsbGJhY2soKSA6IHByb3h5XG5cbiAgICBmdW5jdGlvbiBwcm94eShlcnIsIHJlc3VsdCkge1xuICAgICAgICBpZiAocHJveHkuY291bnQgPD0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdhZnRlciBjYWxsZWQgdG9vIG1hbnkgdGltZXMnKVxuICAgICAgICB9XG4gICAgICAgIC0tcHJveHkuY291bnRcblxuICAgICAgICAvLyBhZnRlciBmaXJzdCBlcnJvciwgcmVzdCBhcmUgcGFzc2VkIHRvIGVycl9jYlxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBiYWlsID0gdHJ1ZVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKVxuICAgICAgICAgICAgLy8gZnV0dXJlIGVycm9yIGNhbGxiYWNrcyB3aWxsIGdvIHRvIGVycm9yIGhhbmRsZXJcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZXJyX2NiXG4gICAgICAgIH0gZWxzZSBpZiAocHJveHkuY291bnQgPT09IDAgJiYgIWJhaWwpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKG51bGwsIHJlc3VsdClcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbm9vcCgpIHt9XG4iLCIvKiEgaHR0cHM6Ly9tdGhzLmJlL3V0ZjhqcyB2Mi4xLjIgYnkgQG1hdGhpYXMgKi9cblxudmFyIHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGU7XG5cbi8vIFRha2VuIGZyb20gaHR0cHM6Ly9tdGhzLmJlL3B1bnljb2RlXG5mdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHR2YXIgb3V0cHV0ID0gW107XG5cdHZhciBjb3VudGVyID0gMDtcblx0dmFyIGxlbmd0aCA9IHN0cmluZy5sZW5ndGg7XG5cdHZhciB2YWx1ZTtcblx0dmFyIGV4dHJhO1xuXHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdHZhbHVlID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRpZiAodmFsdWUgPj0gMHhEODAwICYmIHZhbHVlIDw9IDB4REJGRiAmJiBjb3VudGVyIDwgbGVuZ3RoKSB7XG5cdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdGV4dHJhID0gc3RyaW5nLmNoYXJDb2RlQXQoY291bnRlcisrKTtcblx0XHRcdGlmICgoZXh0cmEgJiAweEZDMDApID09IDB4REMwMCkgeyAvLyBsb3cgc3Vycm9nYXRlXG5cdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyB1bm1hdGNoZWQgc3Vycm9nYXRlOyBvbmx5IGFwcGVuZCB0aGlzIGNvZGUgdW5pdCwgaW4gY2FzZSB0aGUgbmV4dFxuXHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0b3V0cHV0LnB1c2godmFsdWUpO1xuXHRcdFx0XHRjb3VudGVyLS07XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG91dHB1dC5wdXNoKHZhbHVlKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG91dHB1dDtcbn1cblxuLy8gVGFrZW4gZnJvbSBodHRwczovL210aHMuYmUvcHVueWNvZGVcbmZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0dmFyIGluZGV4ID0gLTE7XG5cdHZhciB2YWx1ZTtcblx0dmFyIG91dHB1dCA9ICcnO1xuXHR3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuXHRcdHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuXHRcdGlmICh2YWx1ZSA+IDB4RkZGRikge1xuXHRcdFx0dmFsdWUgLT0gMHgxMDAwMDtcblx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0dmFsdWUgPSAweERDMDAgfCB2YWx1ZSAmIDB4M0ZGO1xuXHRcdH1cblx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gb3V0cHV0O1xufVxuXG5mdW5jdGlvbiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSB7XG5cdGlmIChjb2RlUG9pbnQgPj0gMHhEODAwICYmIGNvZGVQb2ludCA8PSAweERGRkYpIHtcblx0XHRpZiAoc3RyaWN0KSB7XG5cdFx0XHR0aHJvdyBFcnJvcihcblx0XHRcdFx0J0xvbmUgc3Vycm9nYXRlIFUrJyArIGNvZGVQb2ludC50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSArXG5cdFx0XHRcdCcgaXMgbm90IGEgc2NhbGFyIHZhbHVlJ1xuXHRcdFx0KTtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbmZ1bmN0aW9uIGNyZWF0ZUJ5dGUoY29kZVBvaW50LCBzaGlmdCkge1xuXHRyZXR1cm4gc3RyaW5nRnJvbUNoYXJDb2RlKCgoY29kZVBvaW50ID4+IHNoaWZ0KSAmIDB4M0YpIHwgMHg4MCk7XG59XG5cbmZ1bmN0aW9uIGVuY29kZUNvZGVQb2ludChjb2RlUG9pbnQsIHN0cmljdCkge1xuXHRpZiAoKGNvZGVQb2ludCAmIDB4RkZGRkZGODApID09IDApIHsgLy8gMS1ieXRlIHNlcXVlbmNlXG5cdFx0cmV0dXJuIHN0cmluZ0Zyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuXHR9XG5cdHZhciBzeW1ib2wgPSAnJztcblx0aWYgKChjb2RlUG9pbnQgJiAweEZGRkZGODAwKSA9PSAwKSB7IC8vIDItYnl0ZSBzZXF1ZW5jZVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiA2KSAmIDB4MUYpIHwgMHhDMCk7XG5cdH1cblx0ZWxzZSBpZiAoKGNvZGVQb2ludCAmIDB4RkZGRjAwMDApID09IDApIHsgLy8gMy1ieXRlIHNlcXVlbmNlXG5cdFx0aWYgKCFjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSkge1xuXHRcdFx0Y29kZVBvaW50ID0gMHhGRkZEO1xuXHRcdH1cblx0XHRzeW1ib2wgPSBzdHJpbmdGcm9tQ2hhckNvZGUoKChjb2RlUG9pbnQgPj4gMTIpICYgMHgwRikgfCAweEUwKTtcblx0XHRzeW1ib2wgKz0gY3JlYXRlQnl0ZShjb2RlUG9pbnQsIDYpO1xuXHR9XG5cdGVsc2UgaWYgKChjb2RlUG9pbnQgJiAweEZGRTAwMDAwKSA9PSAwKSB7IC8vIDQtYnl0ZSBzZXF1ZW5jZVxuXHRcdHN5bWJvbCA9IHN0cmluZ0Zyb21DaGFyQ29kZSgoKGNvZGVQb2ludCA+PiAxOCkgJiAweDA3KSB8IDB4RjApO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgMTIpO1xuXHRcdHN5bWJvbCArPSBjcmVhdGVCeXRlKGNvZGVQb2ludCwgNik7XG5cdH1cblx0c3ltYm9sICs9IHN0cmluZ0Zyb21DaGFyQ29kZSgoY29kZVBvaW50ICYgMHgzRikgfCAweDgwKTtcblx0cmV0dXJuIHN5bWJvbDtcbn1cblxuZnVuY3Rpb24gdXRmOGVuY29kZShzdHJpbmcsIG9wdHMpIHtcblx0b3B0cyA9IG9wdHMgfHwge307XG5cdHZhciBzdHJpY3QgPSBmYWxzZSAhPT0gb3B0cy5zdHJpY3Q7XG5cblx0dmFyIGNvZGVQb2ludHMgPSB1Y3MyZGVjb2RlKHN0cmluZyk7XG5cdHZhciBsZW5ndGggPSBjb2RlUG9pbnRzLmxlbmd0aDtcblx0dmFyIGluZGV4ID0gLTE7XG5cdHZhciBjb2RlUG9pbnQ7XG5cdHZhciBieXRlU3RyaW5nID0gJyc7XG5cdHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG5cdFx0Y29kZVBvaW50ID0gY29kZVBvaW50c1tpbmRleF07XG5cdFx0Ynl0ZVN0cmluZyArPSBlbmNvZGVDb2RlUG9pbnQoY29kZVBvaW50LCBzdHJpY3QpO1xuXHR9XG5cdHJldHVybiBieXRlU3RyaW5nO1xufVxuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuZnVuY3Rpb24gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKSB7XG5cdGlmIChieXRlSW5kZXggPj0gYnl0ZUNvdW50KSB7XG5cdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgYnl0ZSBpbmRleCcpO1xuXHR9XG5cblx0dmFyIGNvbnRpbnVhdGlvbkJ5dGUgPSBieXRlQXJyYXlbYnl0ZUluZGV4XSAmIDB4RkY7XG5cdGJ5dGVJbmRleCsrO1xuXG5cdGlmICgoY29udGludWF0aW9uQnl0ZSAmIDB4QzApID09IDB4ODApIHtcblx0XHRyZXR1cm4gY29udGludWF0aW9uQnl0ZSAmIDB4M0Y7XG5cdH1cblxuXHQvLyBJZiB3ZSBlbmQgdXAgaGVyZSwgaXTigJlzIG5vdCBhIGNvbnRpbnVhdGlvbiBieXRlXG5cdHRocm93IEVycm9yKCdJbnZhbGlkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG59XG5cbmZ1bmN0aW9uIGRlY29kZVN5bWJvbChzdHJpY3QpIHtcblx0dmFyIGJ5dGUxO1xuXHR2YXIgYnl0ZTI7XG5cdHZhciBieXRlMztcblx0dmFyIGJ5dGU0O1xuXHR2YXIgY29kZVBvaW50O1xuXG5cdGlmIChieXRlSW5kZXggPiBieXRlQ291bnQpIHtcblx0XHR0aHJvdyBFcnJvcignSW52YWxpZCBieXRlIGluZGV4Jyk7XG5cdH1cblxuXHRpZiAoYnl0ZUluZGV4ID09IGJ5dGVDb3VudCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIFJlYWQgZmlyc3QgYnl0ZVxuXHRieXRlMSA9IGJ5dGVBcnJheVtieXRlSW5kZXhdICYgMHhGRjtcblx0Ynl0ZUluZGV4Kys7XG5cblx0Ly8gMS1ieXRlIHNlcXVlbmNlIChubyBjb250aW51YXRpb24gYnl0ZXMpXG5cdGlmICgoYnl0ZTEgJiAweDgwKSA9PSAwKSB7XG5cdFx0cmV0dXJuIGJ5dGUxO1xuXHR9XG5cblx0Ly8gMi1ieXRlIHNlcXVlbmNlXG5cdGlmICgoYnl0ZTEgJiAweEUwKSA9PSAweEMwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGNvZGVQb2ludCA9ICgoYnl0ZTEgJiAweDFGKSA8PCA2KSB8IGJ5dGUyO1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHg4MCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyAzLWJ5dGUgc2VxdWVuY2UgKG1heSBpbmNsdWRlIHVucGFpcmVkIHN1cnJvZ2F0ZXMpXG5cdGlmICgoYnl0ZTEgJiAweEYwKSA9PSAweEUwKSB7XG5cdFx0Ynl0ZTIgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGUzID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgwRikgPDwgMTIpIHwgKGJ5dGUyIDw8IDYpIHwgYnl0ZTM7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDA4MDApIHtcblx0XHRcdHJldHVybiBjaGVja1NjYWxhclZhbHVlKGNvZGVQb2ludCwgc3RyaWN0KSA/IGNvZGVQb2ludCA6IDB4RkZGRDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgY29udGludWF0aW9uIGJ5dGUnKTtcblx0XHR9XG5cdH1cblxuXHQvLyA0LWJ5dGUgc2VxdWVuY2Vcblx0aWYgKChieXRlMSAmIDB4RjgpID09IDB4RjApIHtcblx0XHRieXRlMiA9IHJlYWRDb250aW51YXRpb25CeXRlKCk7XG5cdFx0Ynl0ZTMgPSByZWFkQ29udGludWF0aW9uQnl0ZSgpO1xuXHRcdGJ5dGU0ID0gcmVhZENvbnRpbnVhdGlvbkJ5dGUoKTtcblx0XHRjb2RlUG9pbnQgPSAoKGJ5dGUxICYgMHgwNykgPDwgMHgxMikgfCAoYnl0ZTIgPDwgMHgwQykgfFxuXHRcdFx0KGJ5dGUzIDw8IDB4MDYpIHwgYnl0ZTQ7XG5cdFx0aWYgKGNvZGVQb2ludCA+PSAweDAxMDAwMCAmJiBjb2RlUG9pbnQgPD0gMHgxMEZGRkYpIHtcblx0XHRcdHJldHVybiBjb2RlUG9pbnQ7XG5cdFx0fVxuXHR9XG5cblx0dGhyb3cgRXJyb3IoJ0ludmFsaWQgVVRGLTggZGV0ZWN0ZWQnKTtcbn1cblxudmFyIGJ5dGVBcnJheTtcbnZhciBieXRlQ291bnQ7XG52YXIgYnl0ZUluZGV4O1xuZnVuY3Rpb24gdXRmOGRlY29kZShieXRlU3RyaW5nLCBvcHRzKSB7XG5cdG9wdHMgPSBvcHRzIHx8IHt9O1xuXHR2YXIgc3RyaWN0ID0gZmFsc2UgIT09IG9wdHMuc3RyaWN0O1xuXG5cdGJ5dGVBcnJheSA9IHVjczJkZWNvZGUoYnl0ZVN0cmluZyk7XG5cdGJ5dGVDb3VudCA9IGJ5dGVBcnJheS5sZW5ndGg7XG5cdGJ5dGVJbmRleCA9IDA7XG5cdHZhciBjb2RlUG9pbnRzID0gW107XG5cdHZhciB0bXA7XG5cdHdoaWxlICgodG1wID0gZGVjb2RlU3ltYm9sKHN0cmljdCkpICE9PSBmYWxzZSkge1xuXHRcdGNvZGVQb2ludHMucHVzaCh0bXApO1xuXHR9XG5cdHJldHVybiB1Y3MyZW5jb2RlKGNvZGVQb2ludHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0dmVyc2lvbjogJzIuMS4yJyxcblx0ZW5jb2RlOiB1dGY4ZW5jb2RlLFxuXHRkZWNvZGU6IHV0ZjhkZWNvZGVcbn07XG4iLCIvKlxuICogYmFzZTY0LWFycmF5YnVmZmVyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbmlrbGFzdmgvYmFzZTY0LWFycmF5YnVmZmVyXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEyIE5pa2xhcyB2b24gSGVydHplblxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlLlxuICovXG4oZnVuY3Rpb24oKXtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGNoYXJzID0gXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvXCI7XG5cbiAgLy8gVXNlIGEgbG9va3VwIHRhYmxlIHRvIGZpbmQgdGhlIGluZGV4LlxuICB2YXIgbG9va3VwID0gbmV3IFVpbnQ4QXJyYXkoMjU2KTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFycy5sZW5ndGg7IGkrKykge1xuICAgIGxvb2t1cFtjaGFycy5jaGFyQ29kZUF0KGkpXSA9IGk7XG4gIH1cblxuICBleHBvcnRzLmVuY29kZSA9IGZ1bmN0aW9uKGFycmF5YnVmZmVyKSB7XG4gICAgdmFyIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpLFxuICAgIGksIGxlbiA9IGJ5dGVzLmxlbmd0aCwgYmFzZTY0ID0gXCJcIjtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrPTMpIHtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1tieXRlc1tpXSA+PiAyXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2ldICYgMykgPDwgNCkgfCAoYnl0ZXNbaSArIDFdID4+IDQpXTtcbiAgICAgIGJhc2U2NCArPSBjaGFyc1soKGJ5dGVzW2kgKyAxXSAmIDE1KSA8PCAyKSB8IChieXRlc1tpICsgMl0gPj4gNildO1xuICAgICAgYmFzZTY0ICs9IGNoYXJzW2J5dGVzW2kgKyAyXSAmIDYzXTtcbiAgICB9XG5cbiAgICBpZiAoKGxlbiAlIDMpID09PSAyKSB7XG4gICAgICBiYXNlNjQgPSBiYXNlNjQuc3Vic3RyaW5nKDAsIGJhc2U2NC5sZW5ndGggLSAxKSArIFwiPVwiO1xuICAgIH0gZWxzZSBpZiAobGVuICUgMyA9PT0gMSkge1xuICAgICAgYmFzZTY0ID0gYmFzZTY0LnN1YnN0cmluZygwLCBiYXNlNjQubGVuZ3RoIC0gMikgKyBcIj09XCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJhc2U2NDtcbiAgfTtcblxuICBleHBvcnRzLmRlY29kZSA9ICBmdW5jdGlvbihiYXNlNjQpIHtcbiAgICB2YXIgYnVmZmVyTGVuZ3RoID0gYmFzZTY0Lmxlbmd0aCAqIDAuNzUsXG4gICAgbGVuID0gYmFzZTY0Lmxlbmd0aCwgaSwgcCA9IDAsXG4gICAgZW5jb2RlZDEsIGVuY29kZWQyLCBlbmNvZGVkMywgZW5jb2RlZDQ7XG5cbiAgICBpZiAoYmFzZTY0W2Jhc2U2NC5sZW5ndGggLSAxXSA9PT0gXCI9XCIpIHtcbiAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgaWYgKGJhc2U2NFtiYXNlNjQubGVuZ3RoIC0gMl0gPT09IFwiPVwiKSB7XG4gICAgICAgIGJ1ZmZlckxlbmd0aC0tO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBhcnJheWJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcihidWZmZXJMZW5ndGgpLFxuICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYXJyYXlidWZmZXIpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSs9NCkge1xuICAgICAgZW5jb2RlZDEgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSldO1xuICAgICAgZW5jb2RlZDIgPSBsb29rdXBbYmFzZTY0LmNoYXJDb2RlQXQoaSsxKV07XG4gICAgICBlbmNvZGVkMyA9IGxvb2t1cFtiYXNlNjQuY2hhckNvZGVBdChpKzIpXTtcbiAgICAgIGVuY29kZWQ0ID0gbG9va3VwW2Jhc2U2NC5jaGFyQ29kZUF0KGkrMyldO1xuXG4gICAgICBieXRlc1twKytdID0gKGVuY29kZWQxIDw8IDIpIHwgKGVuY29kZWQyID4+IDQpO1xuICAgICAgYnl0ZXNbcCsrXSA9ICgoZW5jb2RlZDIgJiAxNSkgPDwgNCkgfCAoZW5jb2RlZDMgPj4gMik7XG4gICAgICBieXRlc1twKytdID0gKChlbmNvZGVkMyAmIDMpIDw8IDYpIHwgKGVuY29kZWQ0ICYgNjMpO1xuICAgIH1cblxuICAgIHJldHVybiBhcnJheWJ1ZmZlcjtcbiAgfTtcbn0pKCk7XG4iLCIvKipcclxuICogQ3JlYXRlIGEgYmxvYiBidWlsZGVyIGV2ZW4gd2hlbiB2ZW5kb3IgcHJlZml4ZXMgZXhpc3RcclxuICovXHJcblxyXG52YXIgQmxvYkJ1aWxkZXIgPSB0eXBlb2YgQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gQmxvYkJ1aWxkZXIgOlxyXG4gIHR5cGVvZiBXZWJLaXRCbG9iQnVpbGRlciAhPT0gJ3VuZGVmaW5lZCcgPyBXZWJLaXRCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIE1TQmxvYkJ1aWxkZXIgIT09ICd1bmRlZmluZWQnID8gTVNCbG9iQnVpbGRlciA6XHJcbiAgdHlwZW9mIE1vekJsb2JCdWlsZGVyICE9PSAndW5kZWZpbmVkJyA/IE1vekJsb2JCdWlsZGVyIDogXHJcbiAgZmFsc2U7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBpcyBzdXBwb3J0ZWRcclxuICovXHJcblxyXG52YXIgYmxvYlN1cHBvcnRlZCA9IChmdW5jdGlvbigpIHtcclxuICB0cnkge1xyXG4gICAgdmFyIGEgPSBuZXcgQmxvYihbJ2hpJ10pO1xyXG4gICAgcmV0dXJuIGEuc2l6ZSA9PT0gMjtcclxuICB9IGNhdGNoKGUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn0pKCk7XHJcblxyXG4vKipcclxuICogQ2hlY2sgaWYgQmxvYiBjb25zdHJ1Y3RvciBzdXBwb3J0cyBBcnJheUJ1ZmZlclZpZXdzXHJcbiAqIEZhaWxzIGluIFNhZmFyaSA2LCBzbyB3ZSBuZWVkIHRvIG1hcCB0byBBcnJheUJ1ZmZlcnMgdGhlcmUuXHJcbiAqL1xyXG5cclxudmFyIGJsb2JTdXBwb3J0c0FycmF5QnVmZmVyVmlldyA9IGJsb2JTdXBwb3J0ZWQgJiYgKGZ1bmN0aW9uKCkge1xyXG4gIHRyeSB7XHJcbiAgICB2YXIgYiA9IG5ldyBCbG9iKFtuZXcgVWludDhBcnJheShbMSwyXSldKTtcclxuICAgIHJldHVybiBiLnNpemUgPT09IDI7XHJcbiAgfSBjYXRjaChlKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG59KSgpO1xyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIEJsb2JCdWlsZGVyIGlzIHN1cHBvcnRlZFxyXG4gKi9cclxuXHJcbnZhciBibG9iQnVpbGRlclN1cHBvcnRlZCA9IEJsb2JCdWlsZGVyXHJcbiAgJiYgQmxvYkJ1aWxkZXIucHJvdG90eXBlLmFwcGVuZFxyXG4gICYmIEJsb2JCdWlsZGVyLnByb3RvdHlwZS5nZXRCbG9iO1xyXG5cclxuLyoqXHJcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IG1hcHMgQXJyYXlCdWZmZXJWaWV3cyB0byBBcnJheUJ1ZmZlcnNcclxuICogVXNlZCBieSBCbG9iQnVpbGRlciBjb25zdHJ1Y3RvciBhbmQgb2xkIGJyb3dzZXJzIHRoYXQgZGlkbid0XHJcbiAqIHN1cHBvcnQgaXQgaW4gdGhlIEJsb2IgY29uc3RydWN0b3IuXHJcbiAqL1xyXG5cclxuZnVuY3Rpb24gbWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpIHtcclxuICByZXR1cm4gYXJ5Lm1hcChmdW5jdGlvbihjaHVuaykge1xyXG4gICAgaWYgKGNodW5rLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgIHZhciBidWYgPSBjaHVuay5idWZmZXI7XHJcblxyXG4gICAgICAvLyBpZiB0aGlzIGlzIGEgc3ViYXJyYXksIG1ha2UgYSBjb3B5IHNvIHdlIG9ubHlcclxuICAgICAgLy8gaW5jbHVkZSB0aGUgc3ViYXJyYXkgcmVnaW9uIGZyb20gdGhlIHVuZGVybHlpbmcgYnVmZmVyXHJcbiAgICAgIGlmIChjaHVuay5ieXRlTGVuZ3RoICE9PSBidWYuYnl0ZUxlbmd0aCkge1xyXG4gICAgICAgIHZhciBjb3B5ID0gbmV3IFVpbnQ4QXJyYXkoY2h1bmsuYnl0ZUxlbmd0aCk7XHJcbiAgICAgICAgY29weS5zZXQobmV3IFVpbnQ4QXJyYXkoYnVmLCBjaHVuay5ieXRlT2Zmc2V0LCBjaHVuay5ieXRlTGVuZ3RoKSk7XHJcbiAgICAgICAgYnVmID0gY29weS5idWZmZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBidWY7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNodW5rO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yKGFyeSwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG5cclxuICB2YXIgYmIgPSBuZXcgQmxvYkJ1aWxkZXIoKTtcclxuICBtYXBBcnJheUJ1ZmZlclZpZXdzKGFyeSkuZm9yRWFjaChmdW5jdGlvbihwYXJ0KSB7XHJcbiAgICBiYi5hcHBlbmQocGFydCk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAob3B0aW9ucy50eXBlKSA/IGJiLmdldEJsb2Iob3B0aW9ucy50eXBlKSA6IGJiLmdldEJsb2IoKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIEJsb2JDb25zdHJ1Y3RvcihhcnksIG9wdGlvbnMpIHtcclxuICByZXR1cm4gbmV3IEJsb2IobWFwQXJyYXlCdWZmZXJWaWV3cyhhcnkpLCBvcHRpb25zIHx8IHt9KTtcclxufTtcclxuXHJcbmlmICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICBCbG9iQnVpbGRlckNvbnN0cnVjdG9yLnByb3RvdHlwZSA9IEJsb2IucHJvdG90eXBlO1xyXG4gIEJsb2JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBCbG9iLnByb3RvdHlwZTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XHJcbiAgaWYgKGJsb2JTdXBwb3J0ZWQpIHtcclxuICAgIHJldHVybiBibG9iU3VwcG9ydHNBcnJheUJ1ZmZlclZpZXcgPyBCbG9iIDogQmxvYkNvbnN0cnVjdG9yO1xyXG4gIH0gZWxzZSBpZiAoYmxvYkJ1aWxkZXJTdXBwb3J0ZWQpIHtcclxuICAgIHJldHVybiBCbG9iQnVpbGRlckNvbnN0cnVjdG9yO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxufSkoKTtcclxuIiwiLyoqXG4gKiBNb2R1bGUgcmVxdWlyZW1lbnRzLlxuICovXG5cbnZhciBQb2xsaW5nID0gcmVxdWlyZSgnLi9wb2xsaW5nJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2dsb2JhbFRoaXMnKTtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEpTT05QUG9sbGluZztcblxuLyoqXG4gKiBDYWNoZWQgcmVndWxhciBleHByZXNzaW9ucy5cbiAqL1xuXG52YXIgck5ld2xpbmUgPSAvXFxuL2c7XG52YXIgckVzY2FwZWROZXdsaW5lID0gL1xcXFxuL2c7XG5cbi8qKlxuICogR2xvYmFsIEpTT05QIGNhbGxiYWNrcy5cbiAqL1xuXG52YXIgY2FsbGJhY2tzO1xuXG4vKipcbiAqIE5vb3AuXG4gKi9cblxuZnVuY3Rpb24gZW1wdHkgKCkgeyB9XG5cbi8qKlxuICogSlNPTlAgUG9sbGluZyBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0cy5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gSlNPTlBQb2xsaW5nIChvcHRzKSB7XG4gIFBvbGxpbmcuY2FsbCh0aGlzLCBvcHRzKTtcblxuICB0aGlzLnF1ZXJ5ID0gdGhpcy5xdWVyeSB8fCB7fTtcblxuICAvLyBkZWZpbmUgZ2xvYmFsIGNhbGxiYWNrcyBhcnJheSBpZiBub3QgcHJlc2VudFxuICAvLyB3ZSBkbyB0aGlzIGhlcmUgKGxhemlseSkgdG8gYXZvaWQgdW5uZWVkZWQgZ2xvYmFsIHBvbGx1dGlvblxuICBpZiAoIWNhbGxiYWNrcykge1xuICAgIC8vIHdlIG5lZWQgdG8gY29uc2lkZXIgbXVsdGlwbGUgZW5naW5lcyBpbiB0aGUgc2FtZSBwYWdlXG4gICAgY2FsbGJhY2tzID0gZ2xvYmFsVGhpcy5fX19laW8gPSAoZ2xvYmFsVGhpcy5fX19laW8gfHwgW10pO1xuICB9XG5cbiAgLy8gY2FsbGJhY2sgaWRlbnRpZmllclxuICB0aGlzLmluZGV4ID0gY2FsbGJhY2tzLmxlbmd0aDtcblxuICAvLyBhZGQgY2FsbGJhY2sgdG8ganNvbnAgZ2xvYmFsXG4gIHZhciBzZWxmID0gdGhpcztcbiAgY2FsbGJhY2tzLnB1c2goZnVuY3Rpb24gKG1zZykge1xuICAgIHNlbGYub25EYXRhKG1zZyk7XG4gIH0pO1xuXG4gIC8vIGFwcGVuZCB0byBxdWVyeSBzdHJpbmdcbiAgdGhpcy5xdWVyeS5qID0gdGhpcy5pbmRleDtcblxuICAvLyBwcmV2ZW50IHNwdXJpb3VzIGVycm9ycyBmcm9tIGJlaW5nIGVtaXR0ZWQgd2hlbiB0aGUgd2luZG93IGlzIHVubG9hZGVkXG4gIGlmICh0eXBlb2YgYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLnNjcmlwdCkgc2VsZi5zY3JpcHQub25lcnJvciA9IGVtcHR5O1xuICAgIH0sIGZhbHNlKTtcbiAgfVxufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gUG9sbGluZy5cbiAqL1xuXG5pbmhlcml0KEpTT05QUG9sbGluZywgUG9sbGluZyk7XG5cbi8qXG4gKiBKU09OUCBvbmx5IHN1cHBvcnRzIGJpbmFyeSBhcyBiYXNlNjQgZW5jb2RlZCBzdHJpbmdzXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IGZhbHNlO1xuXG4vKipcbiAqIENsb3NlcyB0aGUgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHRoaXMuc2NyaXB0KSB7XG4gICAgdGhpcy5zY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNjcmlwdCk7XG4gICAgdGhpcy5zY3JpcHQgPSBudWxsO1xuICB9XG5cbiAgaWYgKHRoaXMuZm9ybSkge1xuICAgIHRoaXMuZm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuZm9ybSk7XG4gICAgdGhpcy5mb3JtID0gbnVsbDtcbiAgICB0aGlzLmlmcmFtZSA9IG51bGw7XG4gIH1cblxuICBQb2xsaW5nLnByb3RvdHlwZS5kb0Nsb3NlLmNhbGwodGhpcyk7XG59O1xuXG4vKipcbiAqIFN0YXJ0cyBhIHBvbGwgY3ljbGUuXG4gKlxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuSlNPTlBQb2xsaW5nLnByb3RvdHlwZS5kb1BvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG4gIGlmICh0aGlzLnNjcmlwdCkge1xuICAgIHRoaXMuc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zY3JpcHQpO1xuICAgIHRoaXMuc2NyaXB0ID0gbnVsbDtcbiAgfVxuXG4gIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gIHNjcmlwdC5zcmMgPSB0aGlzLnVyaSgpO1xuICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgc2VsZi5vbkVycm9yKCdqc29ucCBwb2xsIGVycm9yJywgZSk7XG4gIH07XG5cbiAgdmFyIGluc2VydEF0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICBpZiAoaW5zZXJ0QXQpIHtcbiAgICBpbnNlcnRBdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIGluc2VydEF0KTtcbiAgfSBlbHNlIHtcbiAgICAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5ib2R5KS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG4gIHRoaXMuc2NyaXB0ID0gc2NyaXB0O1xuXG4gIHZhciBpc1VBZ2Vja28gPSAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG5hdmlnYXRvciAmJiAvZ2Vja28vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gIGlmIChpc1VBZ2Vja28pIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgICB9LCAxMDApO1xuICB9XG59O1xuXG4vKipcbiAqIFdyaXRlcyB3aXRoIGEgaGlkZGVuIGlmcmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0YSB0byBzZW5kXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsZWQgdXBvbiBmbHVzaC5cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbkpTT05QUG9sbGluZy5wcm90b3R5cGUuZG9Xcml0ZSA9IGZ1bmN0aW9uIChkYXRhLCBmbikge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICB2YXIgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICB2YXIgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdmFyIGlkID0gdGhpcy5pZnJhbWVJZCA9ICdlaW9faWZyYW1lXycgKyB0aGlzLmluZGV4O1xuICAgIHZhciBpZnJhbWU7XG5cbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdzb2NrZXRpbyc7XG4gICAgZm9ybS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZm9ybS5zdHlsZS50b3AgPSAnLTEwMDBweCc7XG4gICAgZm9ybS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xuICAgIGZvcm0udGFyZ2V0ID0gaWQ7XG4gICAgZm9ybS5tZXRob2QgPSAnUE9TVCc7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2FjY2VwdC1jaGFyc2V0JywgJ3V0Zi04Jyk7XG4gICAgYXJlYS5uYW1lID0gJ2QnO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYXJlYSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgdGhpcy5hcmVhID0gYXJlYTtcbiAgfVxuXG4gIHRoaXMuZm9ybS5hY3Rpb24gPSB0aGlzLnVyaSgpO1xuXG4gIGZ1bmN0aW9uIGNvbXBsZXRlICgpIHtcbiAgICBpbml0SWZyYW1lKCk7XG4gICAgZm4oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXRJZnJhbWUgKCkge1xuICAgIGlmIChzZWxmLmlmcmFtZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZi5mb3JtLnJlbW92ZUNoaWxkKHNlbGYuaWZyYW1lKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgc2VsZi5vbkVycm9yKCdqc29ucCBwb2xsaW5nIGlmcmFtZSByZW1vdmFsIGVycm9yJywgZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIC8vIGllNiBkeW5hbWljIGlmcmFtZXMgd2l0aCB0YXJnZXQ9XCJcIiBzdXBwb3J0ICh0aGFua3MgQ2hyaXMgTGFtYmFjaGVyKVxuICAgICAgdmFyIGh0bWwgPSAnPGlmcmFtZSBzcmM9XCJqYXZhc2NyaXB0OjBcIiBuYW1lPVwiJyArIHNlbGYuaWZyYW1lSWQgKyAnXCI+JztcbiAgICAgIGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaHRtbCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgICBpZnJhbWUubmFtZSA9IHNlbGYuaWZyYW1lSWQ7XG4gICAgICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6MCc7XG4gICAgfVxuXG4gICAgaWZyYW1lLmlkID0gc2VsZi5pZnJhbWVJZDtcblxuICAgIHNlbGYuZm9ybS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAgIHNlbGYuaWZyYW1lID0gaWZyYW1lO1xuICB9XG5cbiAgaW5pdElmcmFtZSgpO1xuXG4gIC8vIGVzY2FwZSBcXG4gdG8gcHJldmVudCBpdCBmcm9tIGJlaW5nIGNvbnZlcnRlZCBpbnRvIFxcclxcbiBieSBzb21lIFVBc1xuICAvLyBkb3VibGUgZXNjYXBpbmcgaXMgcmVxdWlyZWQgZm9yIGVzY2FwZWQgbmV3IGxpbmVzIGJlY2F1c2UgdW5lc2NhcGluZyBvZiBuZXcgbGluZXMgY2FuIGJlIGRvbmUgc2FmZWx5IG9uIHNlcnZlci1zaWRlXG4gIGRhdGEgPSBkYXRhLnJlcGxhY2UockVzY2FwZWROZXdsaW5lLCAnXFxcXFxcbicpO1xuICB0aGlzLmFyZWEudmFsdWUgPSBkYXRhLnJlcGxhY2Uock5ld2xpbmUsICdcXFxcbicpO1xuXG4gIHRyeSB7XG4gICAgdGhpcy5mb3JtLnN1Ym1pdCgpO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIGlmICh0aGlzLmlmcmFtZS5hdHRhY2hFdmVudCkge1xuICAgIHRoaXMuaWZyYW1lLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChzZWxmLmlmcmFtZS5yZWFkeVN0YXRlID09PSAnY29tcGxldGUnKSB7XG4gICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmlmcmFtZS5vbmxvYWQgPSBjb21wbGV0ZTtcbiAgfVxufTtcbiIsIi8qKlxuICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAqL1xuXG52YXIgVHJhbnNwb3J0ID0gcmVxdWlyZSgnLi4vdHJhbnNwb3J0Jyk7XG52YXIgcGFyc2VyID0gcmVxdWlyZSgnZW5naW5lLmlvLXBhcnNlcicpO1xudmFyIHBhcnNlcXMgPSByZXF1aXJlKCdwYXJzZXFzJyk7XG52YXIgaW5oZXJpdCA9IHJlcXVpcmUoJ2NvbXBvbmVudC1pbmhlcml0Jyk7XG52YXIgeWVhc3QgPSByZXF1aXJlKCd5ZWFzdCcpO1xudmFyIGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnZW5naW5lLmlvLWNsaWVudDp3ZWJzb2NrZXQnKTtcblxudmFyIEJyb3dzZXJXZWJTb2NrZXQsIE5vZGVXZWJTb2NrZXQ7XG5cbmlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICBCcm93c2VyV2ViU29ja2V0ID0gV2ViU29ja2V0O1xufSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgQnJvd3NlcldlYlNvY2tldCA9IHNlbGYuV2ViU29ja2V0IHx8IHNlbGYuTW96V2ViU29ja2V0O1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgdHJ5IHtcbiAgICBOb2RlV2ViU29ja2V0ID0gcmVxdWlyZSgnd3MnKTtcbiAgfSBjYXRjaCAoZSkgeyB9XG59XG5cbi8qKlxuICogR2V0IGVpdGhlciB0aGUgYFdlYlNvY2tldGAgb3IgYE1veldlYlNvY2tldGAgZ2xvYmFsc1xuICogaW4gdGhlIGJyb3dzZXIgb3IgdHJ5IHRvIHJlc29sdmUgV2ViU29ja2V0LWNvbXBhdGlibGVcbiAqIGludGVyZmFjZSBleHBvc2VkIGJ5IGB3c2AgZm9yIE5vZGUtbGlrZSBlbnZpcm9ubWVudC5cbiAqL1xuXG52YXIgV2ViU29ja2V0SW1wbCA9IEJyb3dzZXJXZWJTb2NrZXQgfHwgTm9kZVdlYlNvY2tldDtcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdTO1xuXG4vKipcbiAqIFdlYlNvY2tldCB0cmFuc3BvcnQgY29uc3RydWN0b3IuXG4gKlxuICogQGFwaSB7T2JqZWN0fSBjb25uZWN0aW9uIG9wdGlvbnNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gV1MgKG9wdHMpIHtcbiAgdmFyIGZvcmNlQmFzZTY0ID0gKG9wdHMgJiYgb3B0cy5mb3JjZUJhc2U2NCk7XG4gIGlmIChmb3JjZUJhc2U2NCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnBlck1lc3NhZ2VEZWZsYXRlID0gb3B0cy5wZXJNZXNzYWdlRGVmbGF0ZTtcbiAgdGhpcy51c2luZ0Jyb3dzZXJXZWJTb2NrZXQgPSBCcm93c2VyV2ViU29ja2V0ICYmICFvcHRzLmZvcmNlTm9kZTtcbiAgdGhpcy5wcm90b2NvbHMgPSBvcHRzLnByb3RvY29scztcbiAgaWYgKCF0aGlzLnVzaW5nQnJvd3NlcldlYlNvY2tldCkge1xuICAgIFdlYlNvY2tldEltcGwgPSBOb2RlV2ViU29ja2V0O1xuICB9XG4gIFRyYW5zcG9ydC5jYWxsKHRoaXMsIG9wdHMpO1xufVxuXG4vKipcbiAqIEluaGVyaXRzIGZyb20gVHJhbnNwb3J0LlxuICovXG5cbmluaGVyaXQoV1MsIFRyYW5zcG9ydCk7XG5cbi8qKlxuICogVHJhbnNwb3J0IG5hbWUuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5XUy5wcm90b3R5cGUubmFtZSA9ICd3ZWJzb2NrZXQnO1xuXG4vKlxuICogV2ViU29ja2V0cyBzdXBwb3J0IGJpbmFyeVxuICovXG5cbldTLnByb3RvdHlwZS5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG5cbi8qKlxuICogT3BlbnMgc29ja2V0LlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5kb09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gIGlmICghdGhpcy5jaGVjaygpKSB7XG4gICAgLy8gbGV0IHByb2JlIHRpbWVvdXRcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgdXJpID0gdGhpcy51cmkoKTtcbiAgdmFyIHByb3RvY29scyA9IHRoaXMucHJvdG9jb2xzO1xuXG4gIHZhciBvcHRzID0ge307XG5cbiAgaWYgKCF0aGlzLmlzUmVhY3ROYXRpdmUpIHtcbiAgICBvcHRzLmFnZW50ID0gdGhpcy5hZ2VudDtcbiAgICBvcHRzLnBlck1lc3NhZ2VEZWZsYXRlID0gdGhpcy5wZXJNZXNzYWdlRGVmbGF0ZTtcblxuICAgIC8vIFNTTCBvcHRpb25zIGZvciBOb2RlLmpzIGNsaWVudFxuICAgIG9wdHMucGZ4ID0gdGhpcy5wZng7XG4gICAgb3B0cy5rZXkgPSB0aGlzLmtleTtcbiAgICBvcHRzLnBhc3NwaHJhc2UgPSB0aGlzLnBhc3NwaHJhc2U7XG4gICAgb3B0cy5jZXJ0ID0gdGhpcy5jZXJ0O1xuICAgIG9wdHMuY2EgPSB0aGlzLmNhO1xuICAgIG9wdHMuY2lwaGVycyA9IHRoaXMuY2lwaGVycztcbiAgICBvcHRzLnJlamVjdFVuYXV0aG9yaXplZCA9IHRoaXMucmVqZWN0VW5hdXRob3JpemVkO1xuICB9XG5cbiAgaWYgKHRoaXMuZXh0cmFIZWFkZXJzKSB7XG4gICAgb3B0cy5oZWFkZXJzID0gdGhpcy5leHRyYUhlYWRlcnM7XG4gIH1cbiAgaWYgKHRoaXMubG9jYWxBZGRyZXNzKSB7XG4gICAgb3B0cy5sb2NhbEFkZHJlc3MgPSB0aGlzLmxvY2FsQWRkcmVzcztcbiAgfVxuXG4gIHRyeSB7XG4gICAgdGhpcy53cyA9XG4gICAgICB0aGlzLnVzaW5nQnJvd3NlcldlYlNvY2tldCAmJiAhdGhpcy5pc1JlYWN0TmF0aXZlXG4gICAgICAgID8gcHJvdG9jb2xzXG4gICAgICAgICAgPyBuZXcgV2ViU29ja2V0SW1wbCh1cmksIHByb3RvY29scylcbiAgICAgICAgICA6IG5ldyBXZWJTb2NrZXRJbXBsKHVyaSlcbiAgICAgICAgOiBuZXcgV2ViU29ja2V0SW1wbCh1cmksIHByb3RvY29scywgb3B0cyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyKTtcbiAgfVxuXG4gIGlmICh0aGlzLndzLmJpbmFyeVR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMuc3VwcG9ydHNCaW5hcnkgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICh0aGlzLndzLnN1cHBvcnRzICYmIHRoaXMud3Muc3VwcG9ydHMuYmluYXJ5KSB7XG4gICAgdGhpcy5zdXBwb3J0c0JpbmFyeSA9IHRydWU7XG4gICAgdGhpcy53cy5iaW5hcnlUeXBlID0gJ25vZGVidWZmZXInO1xuICB9IGVsc2Uge1xuICAgIHRoaXMud3MuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG4gIH1cblxuICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XG59O1xuXG4vKipcbiAqIEFkZHMgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBzb2NrZXRcbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLndzLm9ub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZWxmLm9uT3BlbigpO1xuICB9O1xuICB0aGlzLndzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2VsZi5vbkNsb3NlKCk7XG4gIH07XG4gIHRoaXMud3Mub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2KSB7XG4gICAgc2VsZi5vbkRhdGEoZXYuZGF0YSk7XG4gIH07XG4gIHRoaXMud3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgc2VsZi5vbkVycm9yKCd3ZWJzb2NrZXQgZXJyb3InLCBlKTtcbiAgfTtcbn07XG5cbi8qKlxuICogV3JpdGVzIGRhdGEgdG8gc29ja2V0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IG9mIHBhY2tldHMuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUud3JpdGUgPSBmdW5jdGlvbiAocGFja2V0cykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcblxuICAvLyBlbmNvZGVQYWNrZXQgZWZmaWNpZW50IGFzIGl0IHVzZXMgV1MgZnJhbWluZ1xuICAvLyBubyBuZWVkIGZvciBlbmNvZGVQYXlsb2FkXG4gIHZhciB0b3RhbCA9IHBhY2tldHMubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHRvdGFsOyBpIDwgbDsgaSsrKSB7XG4gICAgKGZ1bmN0aW9uIChwYWNrZXQpIHtcbiAgICAgIHBhcnNlci5lbmNvZGVQYWNrZXQocGFja2V0LCBzZWxmLnN1cHBvcnRzQmluYXJ5LCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiAoIXNlbGYudXNpbmdCcm93c2VyV2ViU29ja2V0KSB7XG4gICAgICAgICAgLy8gYWx3YXlzIGNyZWF0ZSBhIG5ldyBvYmplY3QgKEdILTQzNylcbiAgICAgICAgICB2YXIgb3B0cyA9IHt9O1xuICAgICAgICAgIGlmIChwYWNrZXQub3B0aW9ucykge1xuICAgICAgICAgICAgb3B0cy5jb21wcmVzcyA9IHBhY2tldC5vcHRpb25zLmNvbXByZXNzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWxmLnBlck1lc3NhZ2VEZWZsYXRlKSB7XG4gICAgICAgICAgICB2YXIgbGVuID0gJ3N0cmluZycgPT09IHR5cGVvZiBkYXRhID8gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSkgOiBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChsZW4gPCBzZWxmLnBlck1lc3NhZ2VEZWZsYXRlLnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICBvcHRzLmNvbXByZXNzID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU29tZXRpbWVzIHRoZSB3ZWJzb2NrZXQgaGFzIGFscmVhZHkgYmVlbiBjbG9zZWQgYnV0IHRoZSBicm93c2VyIGRpZG4ndFxuICAgICAgICAvLyBoYXZlIGEgY2hhbmNlIG9mIGluZm9ybWluZyB1cyBhYm91dCBpdCB5ZXQsIGluIHRoYXQgY2FzZSBzZW5kIHdpbGxcbiAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoc2VsZi51c2luZ0Jyb3dzZXJXZWJTb2NrZXQpIHtcbiAgICAgICAgICAgIC8vIFR5cGVFcnJvciBpcyB0aHJvd24gd2hlbiBwYXNzaW5nIHRoZSBzZWNvbmQgYXJndW1lbnQgb24gU2FmYXJpXG4gICAgICAgICAgICBzZWxmLndzLnNlbmQoZGF0YSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGYud3Muc2VuZChkYXRhLCBvcHRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBkZWJ1Zygnd2Vic29ja2V0IGNsb3NlZCBiZWZvcmUgb25jbG9zZSBldmVudCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLS10b3RhbCB8fCBkb25lKCk7XG4gICAgICB9KTtcbiAgICB9KShwYWNrZXRzW2ldKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUgKCkge1xuICAgIHNlbGYuZW1pdCgnZmx1c2gnKTtcblxuICAgIC8vIGZha2UgZHJhaW5cbiAgICAvLyBkZWZlciB0byBuZXh0IHRpY2sgdG8gYWxsb3cgU29ja2V0IHRvIGNsZWFyIHdyaXRlQnVmZmVyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIHNlbGYuZW1pdCgnZHJhaW4nKTtcbiAgICB9LCAwKTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgdXBvbiBjbG9zZVxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS5vbkNsb3NlID0gZnVuY3Rpb24gKCkge1xuICBUcmFuc3BvcnQucHJvdG90eXBlLm9uQ2xvc2UuY2FsbCh0aGlzKTtcbn07XG5cbi8qKlxuICogQ2xvc2VzIHNvY2tldC5cbiAqXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5XUy5wcm90b3R5cGUuZG9DbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiB0aGlzLndzICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgfVxufTtcblxuLyoqXG4gKiBHZW5lcmF0ZXMgdXJpIGZvciBjb25uZWN0aW9uLlxuICpcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbldTLnByb3RvdHlwZS51cmkgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBxdWVyeSA9IHRoaXMucXVlcnkgfHwge307XG4gIHZhciBzY2hlbWEgPSB0aGlzLnNlY3VyZSA/ICd3c3MnIDogJ3dzJztcbiAgdmFyIHBvcnQgPSAnJztcblxuICAvLyBhdm9pZCBwb3J0IGlmIGRlZmF1bHQgZm9yIHNjaGVtYVxuICBpZiAodGhpcy5wb3J0ICYmICgoJ3dzcycgPT09IHNjaGVtYSAmJiBOdW1iZXIodGhpcy5wb3J0KSAhPT0gNDQzKSB8fFxuICAgICgnd3MnID09PSBzY2hlbWEgJiYgTnVtYmVyKHRoaXMucG9ydCkgIT09IDgwKSkpIHtcbiAgICBwb3J0ID0gJzonICsgdGhpcy5wb3J0O1xuICB9XG5cbiAgLy8gYXBwZW5kIHRpbWVzdGFtcCB0byBVUklcbiAgaWYgKHRoaXMudGltZXN0YW1wUmVxdWVzdHMpIHtcbiAgICBxdWVyeVt0aGlzLnRpbWVzdGFtcFBhcmFtXSA9IHllYXN0KCk7XG4gIH1cblxuICAvLyBjb21tdW5pY2F0ZSBiaW5hcnkgc3VwcG9ydCBjYXBhYmlsaXRpZXNcbiAgaWYgKCF0aGlzLnN1cHBvcnRzQmluYXJ5KSB7XG4gICAgcXVlcnkuYjY0ID0gMTtcbiAgfVxuXG4gIHF1ZXJ5ID0gcGFyc2Vxcy5lbmNvZGUocXVlcnkpO1xuXG4gIC8vIHByZXBlbmQgPyB0byBxdWVyeVxuICBpZiAocXVlcnkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSAnPycgKyBxdWVyeTtcbiAgfVxuXG4gIHZhciBpcHY2ID0gdGhpcy5ob3N0bmFtZS5pbmRleE9mKCc6JykgIT09IC0xO1xuICByZXR1cm4gc2NoZW1hICsgJzovLycgKyAoaXB2NiA/ICdbJyArIHRoaXMuaG9zdG5hbWUgKyAnXScgOiB0aGlzLmhvc3RuYW1lKSArIHBvcnQgKyB0aGlzLnBhdGggKyBxdWVyeTtcbn07XG5cbi8qKlxuICogRmVhdHVyZSBkZXRlY3Rpb24gZm9yIFdlYlNvY2tldC5cbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufSB3aGV0aGVyIHRoaXMgdHJhbnNwb3J0IGlzIGF2YWlsYWJsZS5cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuV1MucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISFXZWJTb2NrZXRJbXBsICYmICEoJ19faW5pdGlhbGl6ZScgaW4gV2ViU29ja2V0SW1wbCAmJiB0aGlzLm5hbWUgPT09IFdTLnByb3RvdHlwZS5uYW1lKTtcbn07XG4iLCIvKiAoaWdub3JlZCkgKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHRvQXJyYXlcblxuZnVuY3Rpb24gdG9BcnJheShsaXN0LCBpbmRleCkge1xuICAgIHZhciBhcnJheSA9IFtdXG5cbiAgICBpbmRleCA9IGluZGV4IHx8IDBcblxuICAgIGZvciAodmFyIGkgPSBpbmRleCB8fCAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBhcnJheVtpIC0gaW5kZXhdID0gbGlzdFtpXVxuICAgIH1cblxuICAgIHJldHVybiBhcnJheVxufVxuIiwiXG4vKipcbiAqIEV4cG9zZSBgQmFja29mZmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBCYWNrb2ZmO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYmFja29mZiB0aW1lciB3aXRoIGBvcHRzYC5cbiAqXG4gKiAtIGBtaW5gIGluaXRpYWwgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgWzEwMF1cbiAqIC0gYG1heGAgbWF4IHRpbWVvdXQgWzEwMDAwXVxuICogLSBgaml0dGVyYCBbMF1cbiAqIC0gYGZhY3RvcmAgWzJdXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdHNcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gQmFja29mZihvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB0aGlzLm1zID0gb3B0cy5taW4gfHwgMTAwO1xuICB0aGlzLm1heCA9IG9wdHMubWF4IHx8IDEwMDAwO1xuICB0aGlzLmZhY3RvciA9IG9wdHMuZmFjdG9yIHx8IDI7XG4gIHRoaXMuaml0dGVyID0gb3B0cy5qaXR0ZXIgPiAwICYmIG9wdHMuaml0dGVyIDw9IDEgPyBvcHRzLmppdHRlciA6IDA7XG4gIHRoaXMuYXR0ZW1wdHMgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiB0aGUgYmFja29mZiBkdXJhdGlvbi5cbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLmR1cmF0aW9uID0gZnVuY3Rpb24oKXtcbiAgdmFyIG1zID0gdGhpcy5tcyAqIE1hdGgucG93KHRoaXMuZmFjdG9yLCB0aGlzLmF0dGVtcHRzKyspO1xuICBpZiAodGhpcy5qaXR0ZXIpIHtcbiAgICB2YXIgcmFuZCA9ICBNYXRoLnJhbmRvbSgpO1xuICAgIHZhciBkZXZpYXRpb24gPSBNYXRoLmZsb29yKHJhbmQgKiB0aGlzLmppdHRlciAqIG1zKTtcbiAgICBtcyA9IChNYXRoLmZsb29yKHJhbmQgKiAxMCkgJiAxKSA9PSAwICA/IG1zIC0gZGV2aWF0aW9uIDogbXMgKyBkZXZpYXRpb247XG4gIH1cbiAgcmV0dXJuIE1hdGgubWluKG1zLCB0aGlzLm1heCkgfCAwO1xufTtcblxuLyoqXG4gKiBSZXNldCB0aGUgbnVtYmVyIG9mIGF0dGVtcHRzLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpe1xuICB0aGlzLmF0dGVtcHRzID0gMDtcbn07XG5cbi8qKlxuICogU2V0IHRoZSBtaW5pbXVtIGR1cmF0aW9uXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5CYWNrb2ZmLnByb3RvdHlwZS5zZXRNaW4gPSBmdW5jdGlvbihtaW4pe1xuICB0aGlzLm1zID0gbWluO1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIG1heGltdW0gZHVyYXRpb25cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkJhY2tvZmYucHJvdG90eXBlLnNldE1heCA9IGZ1bmN0aW9uKG1heCl7XG4gIHRoaXMubWF4ID0gbWF4O1xufTtcblxuLyoqXG4gKiBTZXQgdGhlIGppdHRlclxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuQmFja29mZi5wcm90b3R5cGUuc2V0Sml0dGVyID0gZnVuY3Rpb24oaml0dGVyKXtcbiAgdGhpcy5qaXR0ZXIgPSBqaXR0ZXI7XG59O1xuXG4iLCJjb25zdCBibG9ja3MgPSBbXHJcbiAgICBcIiNjY2NcIixcclxuICAgIFwiIzNDQjM3MVwiLFxyXG4gICAgXCIjQjBDNERFXCIsXHJcbiAgICBcIiNGMEZGRjBcIixcclxuICAgIFwiI0VFRThBQVwiLFxyXG4gICAgXCIjRkE4MDcyXCIsXHJcbiAgICBcIiM2OTY5NjlcIixcclxuICAgIFwiIzgwMDAwMFwiLFxyXG4gICAgXCIjRTZFNkZBXCIsXHJcbiAgICBcIiNGRkEwN0FcIixcclxuICAgIFwiIzQwRTBEMFwiLFxyXG4gICAgXCIjOTQwMEQzXCIsXHJcbiAgICBcIiM3Nzg4OTlcIixcclxuICAgIFwiIzY0OTVFRFwiLFxyXG4gICAgXCIjNDgzRDhCXCIsXHJcbiAgICBcIiM0NjgyQjRcIixcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsb2NrcztcclxuIiwiaW1wb3J0IGJsb2NrcyBmcm9tIFwiLi9ibG9ja3MuanNcIjtcclxuXHJcbmNsYXNzIEJvYXJkIHtcclxuICAgIGNvbnN0cnVjdG9yKHdvcmxkKSB7XHJcbiAgICAgICAgdGhpcy53b3JsZCA9IHdvcmxkO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib2FyZFwiKTtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVXb3JsZCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc3Qge3gsIHksIHZ9ID0gZGF0YTtcclxuICAgICAgICBjb25zdCB7YmxvY2tTaXplfSA9IHRoaXMud29ybGQ7XHJcblxyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGJsb2Nrc1t2XTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh4ICogYmxvY2tTaXplLCB5KiBibG9ja1NpemUsIGJsb2NrU2l6ZSwgYmxvY2tTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNvbnN0IHtibG9ja1NpemUsIHcsIGh9ID0gdGhpcy53b3JsZDtcclxuXHJcbiAgICAgICAgaWYoIXRoaXMud29ybGQud29ybGQpIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNlbGYuZHJhdyk7XHJcblxyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdyAqIGJsb2NrU2l6ZTtcclxuICAgICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSBoICogYmxvY2tTaXplO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy53b3JsZC53b3JsZC5sZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBibG9ja3NbdGhpcy53b3JsZC53b3JsZFtpXV07XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KChpICUgdykgKiBibG9ja1NpemUsIHBhcnNlSW50KGkgLyB3KSAqIGJsb2NrU2l6ZSwgYmxvY2tTaXplLCBibG9ja1NpemUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiIsImNsYXNzIFBsYXllcnMge1xyXG4gICAgY29uc3RydWN0b3Iod29ybGQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGxheWVyc1wiKTtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLndvcmxkID0gd29ybGQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTaXplID0gMTA7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGxheWVycyhkYXRhKSB7XHJcbiAgICAgICAgY29uc3Qge3csIGgsIGJsb2NrU2l6ZX0gPSB0aGlzLndvcmxkO1xyXG4gICAgICAgIGNvbnN0IHtjb2xvcnMsIHBsYXllclNpemV9ID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3ICogYmxvY2tTaXplO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGggKiBibG9ja1NpemU7XHJcblxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBpZighcGxheWVyLnBvcykgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCB7eCwgeX0gPSBwbGF5ZXIucG9zO1xyXG4gICAgICAgICAgICBjb25zdCB7Y29sfSA9IHBsYXllcjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgwLDAsMCwuMilcIjtcclxuICAgICAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmVsbGlwc2UoeCArIDMsIHkgKyAzLCBwbGF5ZXJTaXplLCBwbGF5ZXJTaXplLCBNYXRoLlBJIC8gNCwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2w7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICB0aGlzLmN0eC5lbGxpcHNlKHgsIHksIHBsYXllclNpemUsIHBsYXllclNpemUsIE1hdGguUEkgLyA0LCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVycztcclxuIiwiaW1wb3J0IGlvIGZyb20gXCJzb2NrZXQuaW8tY2xpZW50XCI7XHJcbmltcG9ydCBCb2FyZCBmcm9tIFwiLi9Cb2FyZC5qc1wiO1xyXG5pbXBvcnQgUGxheWVycyBmcm9tIFwiLi9QbGF5ZXJzLmpzXCI7XHJcblxyXG5jb25zdCBrZXljb2RlcyA9IFtcclxuICAgIDM4LCAvL3VwXHJcbiAgICA0MCwgLy9kb3duXHJcbiAgICAzNywgLy9sZWZ0XHJcbiAgICAzOSwgLy9yaWdodFxyXG4gICAgODcsIC8vd1xyXG4gICAgODMsIC8vc1xyXG4gICAgNjUsIC8vYVxyXG4gICAgNjgsIC8vZFxyXG5dO1xyXG5cclxuXHJcbmNsYXNzIENsaWVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBpbygpO1xyXG4gICAgICAgIHRoaXMuYm9hcmQgPSAgbmV3IEJvYXJkKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGxheWVycyA9IG5ldyBQbGF5ZXJzKHRoaXMpO1xyXG4gICAgICAgIHRoaXMud29ybGQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IDE2O1xyXG4gICAgICAgIHRoaXMudyA9IDY0O1xyXG4gICAgICAgIHRoaXMuaCA9IDY0O1xyXG4gICAgICAgIHRoaXMuc29ja2V0Lm9uKFwid29ybGRcIiwgKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndvcmxkID0gdmFsO1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLmRyYXcoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oJ2Nvbm5lY3QnLCAoKSA9PiB0aGlzLnNvY2tldC5lbWl0KFwiam9pblwiKSk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQub24oXCJ1cGRhdGVXb3JsZFwiLCBzZWxmLnVwZGF0ZVdvcmxkKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5vbihcInVwZGF0ZVBsYXllcnNcIiwgc2VsZi51cGRhdGVQbGF5ZXJzKTtcclxuXHJcbiAgICAgICAgd2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHRoaXNbYGtleURvd24ke2Uua2V5Q29kZX1gXSA9PT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzW2BrZXlEb3duJHtlLmtleUNvZGV9YF0gPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihrZXljb2Rlcy5pbmRleE9mKGUua2V5Q29kZSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImtleWRvd25cIiwgZS5rZXlDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXNbYGtleURvd24ke2Uua2V5Q29kZX1gXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihrZXljb2Rlcy5pbmRleE9mKGUua2V5Q29kZSkgPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcImtleXVwXCIsIGUua2V5Q29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlV29ybGQgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt4LCB5LCB2fSA9IGRhdGE7XHJcbiAgICAgICAgY29uc3Qge2Jsb2NrU2l6ZSwgdywgaH0gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZih0aGlzLndvcmxkKSB0aGlzLndvcmxkW3kgKiB3ICsgeF0gPSB2O1xyXG4gICAgICAgIHRoaXMuYm9hcmQudXBkYXRlV29ybGQoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGxheWVycyA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMucGxheWVyc0RhdGE7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLnVwZGF0ZVBsYXllcnMoZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGVtcCA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChcInRlbXBcIiwgZGF0YSlcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xyXG4iLCJpbXBvcnQgQ2xpZW50IGZyb20gXCIuL0NsaWVudC5qc1wiO1xyXG5cclxud2luZG93LmdhbWVDbGllbnQgPSBuZXcgQ2xpZW50KCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=