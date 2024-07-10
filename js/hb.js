(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js
  var require_popper = __commonJS({
    "ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/gohugoio/hugo-mod-jslibs-dist/popperjs/v2@v2.21100.20000/package/dist/cjs/popper.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      function getWindow(node) {
        if (node == null) {
          return window;
        }
        if (node.toString() !== "[object Window]") {
          var ownerDocument = node.ownerDocument;
          return ownerDocument ? ownerDocument.defaultView || window : window;
        }
        return node;
      }
      function isElement2(node) {
        var OwnElement = getWindow(node).Element;
        return node instanceof OwnElement || node instanceof Element;
      }
      function isHTMLElement(node) {
        var OwnElement = getWindow(node).HTMLElement;
        return node instanceof OwnElement || node instanceof HTMLElement;
      }
      function isShadowRoot(node) {
        if (typeof ShadowRoot === "undefined") {
          return false;
        }
        var OwnElement = getWindow(node).ShadowRoot;
        return node instanceof OwnElement || node instanceof ShadowRoot;
      }
      var max = Math.max;
      var min = Math.min;
      var round = Math.round;
      function getBoundingClientRect(element, includeScale) {
        if (includeScale === void 0) {
          includeScale = false;
        }
        var rect = element.getBoundingClientRect();
        var scaleX = 1;
        var scaleY = 1;
        if (isHTMLElement(element) && includeScale) {
          var offsetHeight = element.offsetHeight;
          var offsetWidth = element.offsetWidth;
          if (offsetWidth > 0) {
            scaleX = round(rect.width) / offsetWidth || 1;
          }
          if (offsetHeight > 0) {
            scaleY = round(rect.height) / offsetHeight || 1;
          }
        }
        return {
          width: rect.width / scaleX,
          height: rect.height / scaleY,
          top: rect.top / scaleY,
          right: rect.right / scaleX,
          bottom: rect.bottom / scaleY,
          left: rect.left / scaleX,
          x: rect.left / scaleX,
          y: rect.top / scaleY
        };
      }
      function getWindowScroll(node) {
        var win = getWindow(node);
        var scrollLeft = win.pageXOffset;
        var scrollTop = win.pageYOffset;
        return {
          scrollLeft,
          scrollTop
        };
      }
      function getHTMLElementScroll(element) {
        return {
          scrollLeft: element.scrollLeft,
          scrollTop: element.scrollTop
        };
      }
      function getNodeScroll(node) {
        if (node === getWindow(node) || !isHTMLElement(node)) {
          return getWindowScroll(node);
        } else {
          return getHTMLElementScroll(node);
        }
      }
      function getNodeName(element) {
        return element ? (element.nodeName || "").toLowerCase() : null;
      }
      function getDocumentElement(element) {
        return ((isElement2(element) ? element.ownerDocument : (
          // $FlowFixMe[prop-missing]
          element.document
        )) || window.document).documentElement;
      }
      function getWindowScrollBarX(element) {
        return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
      }
      function getComputedStyle2(element) {
        return getWindow(element).getComputedStyle(element);
      }
      function isScrollParent(element) {
        var _getComputedStyle = getComputedStyle2(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
        return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
      }
      function isElementScaled(element) {
        var rect = element.getBoundingClientRect();
        var scaleX = round(rect.width) / element.offsetWidth || 1;
        var scaleY = round(rect.height) / element.offsetHeight || 1;
        return scaleX !== 1 || scaleY !== 1;
      }
      function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
        if (isFixed === void 0) {
          isFixed = false;
        }
        var isOffsetParentAnElement = isHTMLElement(offsetParent);
        var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
        var documentElement = getDocumentElement(offsetParent);
        var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
        var scroll = {
          scrollLeft: 0,
          scrollTop: 0
        };
        var offsets = {
          x: 0,
          y: 0
        };
        if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
          if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
          isScrollParent(documentElement)) {
            scroll = getNodeScroll(offsetParent);
          }
          if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
          } else if (documentElement) {
            offsets.x = getWindowScrollBarX(documentElement);
          }
        }
        return {
          x: rect.left + scroll.scrollLeft - offsets.x,
          y: rect.top + scroll.scrollTop - offsets.y,
          width: rect.width,
          height: rect.height
        };
      }
      function getLayoutRect(element) {
        var clientRect = getBoundingClientRect(element);
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        if (Math.abs(clientRect.width - width) <= 1) {
          width = clientRect.width;
        }
        if (Math.abs(clientRect.height - height) <= 1) {
          height = clientRect.height;
        }
        return {
          x: element.offsetLeft,
          y: element.offsetTop,
          width,
          height
        };
      }
      function getParentNode(element) {
        if (getNodeName(element) === "html") {
          return element;
        }
        return (
          // this is a quicker (but less type safe) way to save quite some bytes from the bundle
          // $FlowFixMe[incompatible-return]
          // $FlowFixMe[prop-missing]
          element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
          element.parentNode || // DOM Element detected
          (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
          // $FlowFixMe[incompatible-call]: HTMLElement is a Node
          getDocumentElement(element)
        );
      }
      function getScrollParent(node) {
        if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
          return node.ownerDocument.body;
        }
        if (isHTMLElement(node) && isScrollParent(node)) {
          return node;
        }
        return getScrollParent(getParentNode(node));
      }
      function listScrollParents(element, list) {
        var _element$ownerDocumen;
        if (list === void 0) {
          list = [];
        }
        var scrollParent = getScrollParent(element);
        var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
        var win = getWindow(scrollParent);
        var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
        var updatedList = list.concat(target);
        return isBody ? updatedList : (
          // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
          updatedList.concat(listScrollParents(getParentNode(target)))
        );
      }
      function isTableElement(element) {
        return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
      }
      function getTrueOffsetParent(element) {
        if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
        getComputedStyle2(element).position === "fixed") {
          return null;
        }
        return element.offsetParent;
      }
      function getContainingBlock(element) {
        var isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1;
        var isIE = navigator.userAgent.indexOf("Trident") !== -1;
        if (isIE && isHTMLElement(element)) {
          var elementCss = getComputedStyle2(element);
          if (elementCss.position === "fixed") {
            return null;
          }
        }
        var currentNode = getParentNode(element);
        while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
          var css = getComputedStyle2(currentNode);
          if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
            return currentNode;
          } else {
            currentNode = currentNode.parentNode;
          }
        }
        return null;
      }
      function getOffsetParent(element) {
        var window2 = getWindow(element);
        var offsetParent = getTrueOffsetParent(element);
        while (offsetParent && isTableElement(offsetParent) && getComputedStyle2(offsetParent).position === "static") {
          offsetParent = getTrueOffsetParent(offsetParent);
        }
        if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle2(offsetParent).position === "static")) {
          return window2;
        }
        return offsetParent || getContainingBlock(element) || window2;
      }
      var top = "top";
      var bottom = "bottom";
      var right = "right";
      var left = "left";
      var auto = "auto";
      var basePlacements = [top, bottom, right, left];
      var start = "start";
      var end = "end";
      var clippingParents = "clippingParents";
      var viewport = "viewport";
      var popper = "popper";
      var reference = "reference";
      var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
        return acc.concat([placement + "-" + start, placement + "-" + end]);
      }, []);
      var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
        return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
      }, []);
      var beforeRead = "beforeRead";
      var read = "read";
      var afterRead = "afterRead";
      var beforeMain = "beforeMain";
      var main = "main";
      var afterMain = "afterMain";
      var beforeWrite = "beforeWrite";
      var write = "write";
      var afterWrite = "afterWrite";
      var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
      function order(modifiers) {
        var map = /* @__PURE__ */ new Map();
        var visited = /* @__PURE__ */ new Set();
        var result = [];
        modifiers.forEach(function(modifier) {
          map.set(modifier.name, modifier);
        });
        function sort(modifier) {
          visited.add(modifier.name);
          var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
          requires.forEach(function(dep) {
            if (!visited.has(dep)) {
              var depModifier = map.get(dep);
              if (depModifier) {
                sort(depModifier);
              }
            }
          });
          result.push(modifier);
        }
        modifiers.forEach(function(modifier) {
          if (!visited.has(modifier.name)) {
            sort(modifier);
          }
        });
        return result;
      }
      function orderModifiers(modifiers) {
        var orderedModifiers = order(modifiers);
        return modifierPhases.reduce(function(acc, phase) {
          return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
          }));
        }, []);
      }
      function debounce(fn) {
        var pending;
        return function() {
          if (!pending) {
            pending = new Promise(function(resolve) {
              Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn());
              });
            });
          }
          return pending;
        };
      }
      function format(str) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        return [].concat(args).reduce(function(p, c) {
          return p.replace(/%s/, c);
        }, str);
      }
      var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
      var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
      var VALID_PROPERTIES = ["name", "enabled", "phase", "fn", "effect", "requires", "options"];
      function validateModifiers(modifiers) {
        modifiers.forEach(function(modifier) {
          [].concat(Object.keys(modifier), VALID_PROPERTIES).filter(function(value, index, self2) {
            return self2.indexOf(value) === index;
          }).forEach(function(key) {
            switch (key) {
              case "name":
                if (typeof modifier.name !== "string") {
                  console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', '"' + String(modifier.name) + '"'));
                }
                break;
              case "enabled":
                if (typeof modifier.enabled !== "boolean") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', '"' + String(modifier.enabled) + '"'));
                }
                break;
              case "phase":
                if (modifierPhases.indexOf(modifier.phase) < 0) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(", "), '"' + String(modifier.phase) + '"'));
                }
                break;
              case "fn":
                if (typeof modifier.fn !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "effect":
                if (modifier.effect != null && typeof modifier.effect !== "function") {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', '"' + String(modifier.fn) + '"'));
                }
                break;
              case "requires":
                if (modifier.requires != null && !Array.isArray(modifier.requires)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', '"' + String(modifier.requires) + '"'));
                }
                break;
              case "requiresIfExists":
                if (!Array.isArray(modifier.requiresIfExists)) {
                  console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', '"' + String(modifier.requiresIfExists) + '"'));
                }
                break;
              case "options":
              case "data":
                break;
              default:
                console.error('PopperJS: an invalid property has been provided to the "' + modifier.name + '" modifier, valid properties are ' + VALID_PROPERTIES.map(function(s) {
                  return '"' + s + '"';
                }).join(", ") + '; but "' + key + '" was provided.');
            }
            modifier.requires && modifier.requires.forEach(function(requirement) {
              if (modifiers.find(function(mod) {
                return mod.name === requirement;
              }) == null) {
                console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
              }
            });
          });
        });
      }
      function uniqueBy(arr, fn) {
        var identifiers = /* @__PURE__ */ new Set();
        return arr.filter(function(item) {
          var identifier = fn(item);
          if (!identifiers.has(identifier)) {
            identifiers.add(identifier);
            return true;
          }
        });
      }
      function getBasePlacement(placement) {
        return placement.split("-")[0];
      }
      function mergeByName(modifiers) {
        var merged = modifiers.reduce(function(merged2, current) {
          var existing = merged2[current.name];
          merged2[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
          }) : current;
          return merged2;
        }, {});
        return Object.keys(merged).map(function(key) {
          return merged[key];
        });
      }
      function getViewportRect(element) {
        var win = getWindow(element);
        var html = getDocumentElement(element);
        var visualViewport = win.visualViewport;
        var width = html.clientWidth;
        var height = html.clientHeight;
        var x = 0;
        var y = 0;
        if (visualViewport) {
          width = visualViewport.width;
          height = visualViewport.height;
          if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
          }
        }
        return {
          width,
          height,
          x: x + getWindowScrollBarX(element),
          y
        };
      }
      function getDocumentRect(element) {
        var _element$ownerDocumen;
        var html = getDocumentElement(element);
        var winScroll = getWindowScroll(element);
        var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
        var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
        var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
        var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
        var y = -winScroll.scrollTop;
        if (getComputedStyle2(body || html).direction === "rtl") {
          x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
        }
        return {
          width,
          height,
          x,
          y
        };
      }
      function contains(parent, child) {
        var rootNode = child.getRootNode && child.getRootNode();
        if (parent.contains(child)) {
          return true;
        } else if (rootNode && isShadowRoot(rootNode)) {
          var next = child;
          do {
            if (next && parent.isSameNode(next)) {
              return true;
            }
            next = next.parentNode || next.host;
          } while (next);
        }
        return false;
      }
      function rectToClientRect(rect) {
        return Object.assign({}, rect, {
          left: rect.x,
          top: rect.y,
          right: rect.x + rect.width,
          bottom: rect.y + rect.height
        });
      }
      function getInnerBoundingClientRect(element) {
        var rect = getBoundingClientRect(element);
        rect.top = rect.top + element.clientTop;
        rect.left = rect.left + element.clientLeft;
        rect.bottom = rect.top + element.clientHeight;
        rect.right = rect.left + element.clientWidth;
        rect.width = element.clientWidth;
        rect.height = element.clientHeight;
        rect.x = rect.left;
        rect.y = rect.top;
        return rect;
      }
      function getClientRectFromMixedType(element, clippingParent) {
        return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement2(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
      }
      function getClippingParents(element) {
        var clippingParents2 = listScrollParents(getParentNode(element));
        var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle2(element).position) >= 0;
        var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
        if (!isElement2(clipperElement)) {
          return [];
        }
        return clippingParents2.filter(function(clippingParent) {
          return isElement2(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body" && (canEscapeClipping ? getComputedStyle2(clippingParent).position !== "static" : true);
        });
      }
      function getClippingRect(element, boundary, rootBoundary) {
        var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
        var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
        var firstClippingParent = clippingParents2[0];
        var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
          var rect = getClientRectFromMixedType(element, clippingParent);
          accRect.top = max(rect.top, accRect.top);
          accRect.right = min(rect.right, accRect.right);
          accRect.bottom = min(rect.bottom, accRect.bottom);
          accRect.left = max(rect.left, accRect.left);
          return accRect;
        }, getClientRectFromMixedType(element, firstClippingParent));
        clippingRect.width = clippingRect.right - clippingRect.left;
        clippingRect.height = clippingRect.bottom - clippingRect.top;
        clippingRect.x = clippingRect.left;
        clippingRect.y = clippingRect.top;
        return clippingRect;
      }
      function getVariation(placement) {
        return placement.split("-")[1];
      }
      function getMainAxisFromPlacement(placement) {
        return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
      }
      function computeOffsets(_ref) {
        var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
        var basePlacement = placement ? getBasePlacement(placement) : null;
        var variation = placement ? getVariation(placement) : null;
        var commonX = reference2.x + reference2.width / 2 - element.width / 2;
        var commonY = reference2.y + reference2.height / 2 - element.height / 2;
        var offsets;
        switch (basePlacement) {
          case top:
            offsets = {
              x: commonX,
              y: reference2.y - element.height
            };
            break;
          case bottom:
            offsets = {
              x: commonX,
              y: reference2.y + reference2.height
            };
            break;
          case right:
            offsets = {
              x: reference2.x + reference2.width,
              y: commonY
            };
            break;
          case left:
            offsets = {
              x: reference2.x - element.width,
              y: commonY
            };
            break;
          default:
            offsets = {
              x: reference2.x,
              y: reference2.y
            };
        }
        var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
        if (mainAxis != null) {
          var len = mainAxis === "y" ? "height" : "width";
          switch (variation) {
            case start:
              offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
              break;
            case end:
              offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
              break;
          }
        }
        return offsets;
      }
      function getFreshSideObject() {
        return {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        };
      }
      function mergePaddingObject(paddingObject) {
        return Object.assign({}, getFreshSideObject(), paddingObject);
      }
      function expandToHashMap(value, keys) {
        return keys.reduce(function(hashMap, key) {
          hashMap[key] = value;
          return hashMap;
        }, {});
      }
      function detectOverflow(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
        var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
        var altContext = elementContext === popper ? reference : popper;
        var popperRect = state.rects.popper;
        var element = state.elements[altBoundary ? altContext : elementContext];
        var clippingClientRect = getClippingRect(isElement2(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
        var referenceClientRect = getBoundingClientRect(state.elements.reference);
        var popperOffsets2 = computeOffsets({
          reference: referenceClientRect,
          element: popperRect,
          strategy: "absolute",
          placement
        });
        var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
        var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
        var overflowOffsets = {
          top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
          bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
          left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
          right: elementClientRect.right - clippingClientRect.right + paddingObject.right
        };
        var offsetData = state.modifiersData.offset;
        if (elementContext === popper && offsetData) {
          var offset2 = offsetData[placement];
          Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
            var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
          });
        }
        return overflowOffsets;
      }
      var INVALID_ELEMENT_ERROR = "Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.";
      var INFINITE_LOOP_ERROR = "Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.";
      var DEFAULT_OPTIONS = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
      };
      function areValidElements() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return !args.some(function(element) {
          return !(element && typeof element.getBoundingClientRect === "function");
        });
      }
      function popperGenerator(generatorOptions) {
        if (generatorOptions === void 0) {
          generatorOptions = {};
        }
        var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
        return function createPopper4(reference2, popper2, options) {
          if (options === void 0) {
            options = defaultOptions;
          }
          var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
              reference: reference2,
              popper: popper2
            },
            attributes: {},
            styles: {}
          };
          var effectCleanupFns = [];
          var isDestroyed = false;
          var instance = {
            state,
            setOptions: function setOptions(setOptionsAction) {
              var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
              cleanupModifierEffects();
              state.options = Object.assign({}, defaultOptions, state.options, options2);
              state.scrollParents = {
                reference: isElement2(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                popper: listScrollParents(popper2)
              };
              var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
              state.orderedModifiers = orderedModifiers.filter(function(m) {
                return m.enabled;
              });
              if (true) {
                var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function(_ref) {
                  var name = _ref.name;
                  return name;
                });
                validateModifiers(modifiers);
                if (getBasePlacement(state.options.placement) === auto) {
                  var flipModifier = state.orderedModifiers.find(function(_ref2) {
                    var name = _ref2.name;
                    return name === "flip";
                  });
                  if (!flipModifier) {
                    console.error(['Popper: "auto" placements require the "flip" modifier be', "present and enabled to work."].join(" "));
                  }
                }
                var _getComputedStyle = getComputedStyle2(popper2), marginTop = _getComputedStyle.marginTop, marginRight = _getComputedStyle.marginRight, marginBottom = _getComputedStyle.marginBottom, marginLeft = _getComputedStyle.marginLeft;
                if ([marginTop, marginRight, marginBottom, marginLeft].some(function(margin) {
                  return parseFloat(margin);
                })) {
                  console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', "between the popper and its reference element or boundary.", "To replicate margin, use the `offset` modifier, as well as", "the `padding` option in the `preventOverflow` and `flip`", "modifiers."].join(" "));
                }
              }
              runModifierEffects();
              return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
              if (isDestroyed) {
                return;
              }
              var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
              if (!areValidElements(reference3, popper3)) {
                if (true) {
                  console.error(INVALID_ELEMENT_ERROR);
                }
                return;
              }
              state.rects = {
                reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                popper: getLayoutRect(popper3)
              };
              state.reset = false;
              state.placement = state.options.placement;
              state.orderedModifiers.forEach(function(modifier) {
                return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
              });
              var __debug_loops__ = 0;
              for (var index = 0; index < state.orderedModifiers.length; index++) {
                if (true) {
                  __debug_loops__ += 1;
                  if (__debug_loops__ > 100) {
                    console.error(INFINITE_LOOP_ERROR);
                    break;
                  }
                }
                if (state.reset === true) {
                  state.reset = false;
                  index = -1;
                  continue;
                }
                var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                if (typeof fn === "function") {
                  state = fn({
                    state,
                    options: _options,
                    name,
                    instance
                  }) || state;
                }
              }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: debounce(function() {
              return new Promise(function(resolve) {
                instance.forceUpdate();
                resolve(state);
              });
            }),
            destroy: function destroy() {
              cleanupModifierEffects();
              isDestroyed = true;
            }
          };
          if (!areValidElements(reference2, popper2)) {
            if (true) {
              console.error(INVALID_ELEMENT_ERROR);
            }
            return instance;
          }
          instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) {
              options.onFirstUpdate(state2);
            }
          });
          function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
              var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {} : _ref3$options, effect2 = _ref3.effect;
              if (typeof effect2 === "function") {
                var cleanupFn = effect2({
                  state,
                  name,
                  instance,
                  options: options2
                });
                var noopFn = function noopFn2() {
                };
                effectCleanupFns.push(cleanupFn || noopFn);
              }
            });
          }
          function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
              return fn();
            });
            effectCleanupFns = [];
          }
          return instance;
        };
      }
      var passive = {
        passive: true
      };
      function effect$2(_ref) {
        var state = _ref.state, instance = _ref.instance, options = _ref.options;
        var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
        var window2 = getWindow(state.elements.popper);
        var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
        if (scroll) {
          scrollParents.forEach(function(scrollParent) {
            scrollParent.addEventListener("scroll", instance.update, passive);
          });
        }
        if (resize) {
          window2.addEventListener("resize", instance.update, passive);
        }
        return function() {
          if (scroll) {
            scrollParents.forEach(function(scrollParent) {
              scrollParent.removeEventListener("scroll", instance.update, passive);
            });
          }
          if (resize) {
            window2.removeEventListener("resize", instance.update, passive);
          }
        };
      }
      var eventListeners = {
        name: "eventListeners",
        enabled: true,
        phase: "write",
        fn: function fn() {
        },
        effect: effect$2,
        data: {}
      };
      function popperOffsets(_ref) {
        var state = _ref.state, name = _ref.name;
        state.modifiersData[name] = computeOffsets({
          reference: state.rects.reference,
          element: state.rects.popper,
          strategy: "absolute",
          placement: state.placement
        });
      }
      var popperOffsets$1 = {
        name: "popperOffsets",
        enabled: true,
        phase: "read",
        fn: popperOffsets,
        data: {}
      };
      var unsetSides = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
      };
      function roundOffsetsByDPR(_ref) {
        var x = _ref.x, y = _ref.y;
        var win = window;
        var dpr = win.devicePixelRatio || 1;
        return {
          x: round(x * dpr) / dpr || 0,
          y: round(y * dpr) / dpr || 0
        };
      }
      function mapToStyles(_ref2) {
        var _Object$assign2;
        var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
        var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
        var hasX = offsets.hasOwnProperty("x");
        var hasY = offsets.hasOwnProperty("y");
        var sideX = left;
        var sideY = top;
        var win = window;
        if (adaptive) {
          var offsetParent = getOffsetParent(popper2);
          var heightProp = "clientHeight";
          var widthProp = "clientWidth";
          if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle2(offsetParent).position !== "static" && position === "absolute") {
              heightProp = "scrollHeight";
              widthProp = "scrollWidth";
            }
          }
          offsetParent = offsetParent;
          if (placement === top || (placement === left || placement === right) && variation === end) {
            sideY = bottom;
            var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : (
              // $FlowFixMe[prop-missing]
              offsetParent[heightProp]
            );
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
          }
          if (placement === left || (placement === top || placement === bottom) && variation === end) {
            sideX = right;
            var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : (
              // $FlowFixMe[prop-missing]
              offsetParent[widthProp]
            );
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
          }
        }
        var commonStyles = Object.assign({
          position
        }, adaptive && unsetSides);
        if (gpuAcceleration) {
          var _Object$assign;
          return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
        }
        return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
      }
      function computeStyles(_ref4) {
        var state = _ref4.state, options = _ref4.options;
        var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
        if (true) {
          var transitionProperty = getComputedStyle2(state.elements.popper).transitionProperty || "";
          if (adaptive && ["transform", "top", "right", "bottom", "left"].some(function(property) {
            return transitionProperty.indexOf(property) >= 0;
          })) {
            console.warn(["Popper: Detected CSS transitions on at least one of the following", 'CSS properties: "transform", "top", "right", "bottom", "left".', "\n\n", 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', "for smooth transitions, or remove these properties from the CSS", "transition declaration on the popper element if only transitioning", "opacity or background-color for example.", "\n\n", "We recommend using the popper element as a wrapper around an inner", "element that can have any CSS property transitioned for animations."].join(" "));
          }
        }
        var commonStyles = {
          placement: getBasePlacement(state.placement),
          variation: getVariation(state.placement),
          popper: state.elements.popper,
          popperRect: state.rects.popper,
          gpuAcceleration,
          isFixed: state.options.strategy === "fixed"
        };
        if (state.modifiersData.popperOffsets != null) {
          state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.popperOffsets,
            position: state.options.strategy,
            adaptive,
            roundOffsets
          })));
        }
        if (state.modifiersData.arrow != null) {
          state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
            offsets: state.modifiersData.arrow,
            position: "absolute",
            adaptive: false,
            roundOffsets
          })));
        }
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-placement": state.placement
        });
      }
      var computeStyles$1 = {
        name: "computeStyles",
        enabled: true,
        phase: "beforeWrite",
        fn: computeStyles,
        data: {}
      };
      function applyStyles(_ref) {
        var state = _ref.state;
        Object.keys(state.elements).forEach(function(name) {
          var style = state.styles[name] || {};
          var attributes = state.attributes[name] || {};
          var element = state.elements[name];
          if (!isHTMLElement(element) || !getNodeName(element)) {
            return;
          }
          Object.assign(element.style, style);
          Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) {
              element.removeAttribute(name2);
            } else {
              element.setAttribute(name2, value === true ? "" : value);
            }
          });
        });
      }
      function effect$1(_ref2) {
        var state = _ref2.state;
        var initialStyles = {
          popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
          },
          arrow: {
            position: "absolute"
          },
          reference: {}
        };
        Object.assign(state.elements.popper.style, initialStyles.popper);
        state.styles = initialStyles;
        if (state.elements.arrow) {
          Object.assign(state.elements.arrow.style, initialStyles.arrow);
        }
        return function() {
          Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
              style2[property] = "";
              return style2;
            }, {});
            if (!isHTMLElement(element) || !getNodeName(element)) {
              return;
            }
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
              element.removeAttribute(attribute);
            });
          });
        };
      }
      var applyStyles$1 = {
        name: "applyStyles",
        enabled: true,
        phase: "write",
        fn: applyStyles,
        effect: effect$1,
        requires: ["computeStyles"]
      };
      function distanceAndSkiddingToXY(placement, rects, offset2) {
        var basePlacement = getBasePlacement(placement);
        var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;
        var _ref = typeof offset2 === "function" ? offset2(Object.assign({}, rects, {
          placement
        })) : offset2, skidding = _ref[0], distance = _ref[1];
        skidding = skidding || 0;
        distance = (distance || 0) * invertDistance;
        return [left, right].indexOf(basePlacement) >= 0 ? {
          x: distance,
          y: skidding
        } : {
          x: skidding,
          y: distance
        };
      }
      function offset(_ref2) {
        var state = _ref2.state, options = _ref2.options, name = _ref2.name;
        var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [0, 0] : _options$offset;
        var data = placements.reduce(function(acc, placement) {
          acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
          return acc;
        }, {});
        var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
        if (state.modifiersData.popperOffsets != null) {
          state.modifiersData.popperOffsets.x += x;
          state.modifiersData.popperOffsets.y += y;
        }
        state.modifiersData[name] = data;
      }
      var offset$1 = {
        name: "offset",
        enabled: true,
        phase: "main",
        requires: ["popperOffsets"],
        fn: offset
      };
      var hash$1 = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
      };
      function getOppositePlacement(placement) {
        return placement.replace(/left|right|bottom|top/g, function(matched) {
          return hash$1[matched];
        });
      }
      var hash = {
        start: "end",
        end: "start"
      };
      function getOppositeVariationPlacement(placement) {
        return placement.replace(/start|end/g, function(matched) {
          return hash[matched];
        });
      }
      function computeAutoPlacement(state, options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
        var variation = getVariation(placement);
        var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
          return getVariation(placement2) === variation;
        }) : basePlacements;
        var allowedPlacements = placements$1.filter(function(placement2) {
          return allowedAutoPlacements.indexOf(placement2) >= 0;
        });
        if (allowedPlacements.length === 0) {
          allowedPlacements = placements$1;
          if (true) {
            console.error(["Popper: The `allowedAutoPlacements` option did not allow any", "placements. Ensure the `placement` option matches the variation", "of the allowed placements.", 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(" "));
          }
        }
        var overflows = allowedPlacements.reduce(function(acc, placement2) {
          acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
          })[getBasePlacement(placement2)];
          return acc;
        }, {});
        return Object.keys(overflows).sort(function(a, b) {
          return overflows[a] - overflows[b];
        });
      }
      function getExpandedFallbackPlacements(placement) {
        if (getBasePlacement(placement) === auto) {
          return [];
        }
        var oppositePlacement = getOppositePlacement(placement);
        return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
      }
      function flip(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        if (state.modifiersData[name]._skip) {
          return;
        }
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
        var preferredPlacement = state.options.placement;
        var basePlacement = getBasePlacement(preferredPlacement);
        var isBasePlacement = basePlacement === preferredPlacement;
        var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
        var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
          return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
          }) : placement2);
        }, []);
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var checksMap = /* @__PURE__ */ new Map();
        var makeFallbackChecks = true;
        var firstFittingPlacement = placements2[0];
        for (var i = 0; i < placements2.length; i++) {
          var placement = placements2[i];
          var _basePlacement = getBasePlacement(placement);
          var isStartVariation = getVariation(placement) === start;
          var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
          var len = isVertical ? "width" : "height";
          var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
          });
          var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
          if (referenceRect[len] > popperRect[len]) {
            mainVariationSide = getOppositePlacement(mainVariationSide);
          }
          var altVariationSide = getOppositePlacement(mainVariationSide);
          var checks = [];
          if (checkMainAxis) {
            checks.push(overflow[_basePlacement] <= 0);
          }
          if (checkAltAxis) {
            checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
          }
          if (checks.every(function(check) {
            return check;
          })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
          }
          checksMap.set(placement, checks);
        }
        if (makeFallbackChecks) {
          var numberOfChecks = flipVariations ? 3 : 1;
          var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
              var checks2 = checksMap.get(placement2);
              if (checks2) {
                return checks2.slice(0, _i2).every(function(check) {
                  return check;
                });
              }
            });
            if (fittingPlacement) {
              firstFittingPlacement = fittingPlacement;
              return "break";
            }
          };
          for (var _i = numberOfChecks; _i > 0; _i--) {
            var _ret = _loop(_i);
            if (_ret === "break")
              break;
          }
        }
        if (state.placement !== firstFittingPlacement) {
          state.modifiersData[name]._skip = true;
          state.placement = firstFittingPlacement;
          state.reset = true;
        }
      }
      var flip$1 = {
        name: "flip",
        enabled: true,
        phase: "main",
        fn: flip,
        requiresIfExists: ["offset"],
        data: {
          _skip: false
        }
      };
      function getAltAxis(axis) {
        return axis === "x" ? "y" : "x";
      }
      function within(min$1, value, max$1) {
        return max(min$1, min(value, max$1));
      }
      function withinMaxClamp(min2, value, max2) {
        var v = within(min2, value, max2);
        return v > max2 ? max2 : v;
      }
      function preventOverflow(_ref) {
        var state = _ref.state, options = _ref.options, name = _ref.name;
        var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
        var overflow = detectOverflow(state, {
          boundary,
          rootBoundary,
          padding,
          altBoundary
        });
        var basePlacement = getBasePlacement(state.placement);
        var variation = getVariation(state.placement);
        var isBasePlacement = !variation;
        var mainAxis = getMainAxisFromPlacement(basePlacement);
        var altAxis = getAltAxis(mainAxis);
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
          placement: state.placement
        })) : tetherOffset;
        var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue
        } : Object.assign({
          mainAxis: 0,
          altAxis: 0
        }, tetherOffsetValue);
        var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
        var data = {
          x: 0,
          y: 0
        };
        if (!popperOffsets2) {
          return;
        }
        if (checkMainAxis) {
          var _offsetModifierState$;
          var mainSide = mainAxis === "y" ? top : left;
          var altSide = mainAxis === "y" ? bottom : right;
          var len = mainAxis === "y" ? "height" : "width";
          var offset2 = popperOffsets2[mainAxis];
          var min$1 = offset2 + overflow[mainSide];
          var max$1 = offset2 - overflow[altSide];
          var additive = tether ? -popperRect[len] / 2 : 0;
          var minLen = variation === start ? referenceRect[len] : popperRect[len];
          var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
          var arrowElement = state.elements.arrow;
          var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
          };
          var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
          var arrowPaddingMin = arrowPaddingObject[mainSide];
          var arrowPaddingMax = arrowPaddingObject[altSide];
          var arrowLen = within(0, referenceRect[len], arrowRect[len]);
          var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
          var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
          var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
          var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
          var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
          var tetherMin = offset2 + minOffset - offsetModifierValue - clientOffset;
          var tetherMax = offset2 + maxOffset - offsetModifierValue;
          var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset2, tether ? max(max$1, tetherMax) : max$1);
          popperOffsets2[mainAxis] = preventedOffset;
          data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
          var _offsetModifierState$2;
          var _mainSide = mainAxis === "x" ? top : left;
          var _altSide = mainAxis === "x" ? bottom : right;
          var _offset = popperOffsets2[altAxis];
          var _len = altAxis === "y" ? "height" : "width";
          var _min = _offset + overflow[_mainSide];
          var _max = _offset - overflow[_altSide];
          var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
          var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
          var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
          var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
          var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
          popperOffsets2[altAxis] = _preventedOffset;
          data[altAxis] = _preventedOffset - _offset;
        }
        state.modifiersData[name] = data;
      }
      var preventOverflow$1 = {
        name: "preventOverflow",
        enabled: true,
        phase: "main",
        fn: preventOverflow,
        requiresIfExists: ["offset"]
      };
      var toPaddingObject = function toPaddingObject2(padding, state) {
        padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
          placement: state.placement
        })) : padding;
        return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
      };
      function arrow(_ref) {
        var _state$modifiersData$;
        var state = _ref.state, name = _ref.name, options = _ref.options;
        var arrowElement = state.elements.arrow;
        var popperOffsets2 = state.modifiersData.popperOffsets;
        var basePlacement = getBasePlacement(state.placement);
        var axis = getMainAxisFromPlacement(basePlacement);
        var isVertical = [left, right].indexOf(basePlacement) >= 0;
        var len = isVertical ? "height" : "width";
        if (!arrowElement || !popperOffsets2) {
          return;
        }
        var paddingObject = toPaddingObject(options.padding, state);
        var arrowRect = getLayoutRect(arrowElement);
        var minProp = axis === "y" ? top : left;
        var maxProp = axis === "y" ? bottom : right;
        var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
        var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
        var arrowOffsetParent = getOffsetParent(arrowElement);
        var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
        var centerToReference = endDiff / 2 - startDiff / 2;
        var min2 = paddingObject[minProp];
        var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
        var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
        var offset2 = within(min2, center, max2);
        var axisProp = axis;
        state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
      }
      function effect(_ref2) {
        var state = _ref2.state, options = _ref2.options;
        var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
        if (arrowElement == null) {
          return;
        }
        if (typeof arrowElement === "string") {
          arrowElement = state.elements.popper.querySelector(arrowElement);
          if (!arrowElement) {
            return;
          }
        }
        if (true) {
          if (!isHTMLElement(arrowElement)) {
            console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', "To use an SVG arrow, wrap it in an HTMLElement that will be used as", "the arrow."].join(" "));
          }
        }
        if (!contains(state.elements.popper, arrowElement)) {
          if (true) {
            console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', "element."].join(" "));
          }
          return;
        }
        state.elements.arrow = arrowElement;
      }
      var arrow$1 = {
        name: "arrow",
        enabled: true,
        phase: "main",
        fn: arrow,
        effect,
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
      };
      function getSideOffsets(overflow, rect, preventedOffsets) {
        if (preventedOffsets === void 0) {
          preventedOffsets = {
            x: 0,
            y: 0
          };
        }
        return {
          top: overflow.top - rect.height - preventedOffsets.y,
          right: overflow.right - rect.width + preventedOffsets.x,
          bottom: overflow.bottom - rect.height + preventedOffsets.y,
          left: overflow.left - rect.width - preventedOffsets.x
        };
      }
      function isAnySideFullyClipped(overflow) {
        return [top, right, bottom, left].some(function(side) {
          return overflow[side] >= 0;
        });
      }
      function hide(_ref) {
        var state = _ref.state, name = _ref.name;
        var referenceRect = state.rects.reference;
        var popperRect = state.rects.popper;
        var preventedOffsets = state.modifiersData.preventOverflow;
        var referenceOverflow = detectOverflow(state, {
          elementContext: "reference"
        });
        var popperAltOverflow = detectOverflow(state, {
          altBoundary: true
        });
        var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
        var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
        var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
        var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
        state.modifiersData[name] = {
          referenceClippingOffsets,
          popperEscapeOffsets,
          isReferenceHidden,
          hasPopperEscaped
        };
        state.attributes.popper = Object.assign({}, state.attributes.popper, {
          "data-popper-reference-hidden": isReferenceHidden,
          "data-popper-escaped": hasPopperEscaped
        });
      }
      var hide$1 = {
        name: "hide",
        enabled: true,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: hide
      };
      var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
      var createPopper$1 = /* @__PURE__ */ popperGenerator({
        defaultModifiers: defaultModifiers$1
      });
      var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
      var createPopper3 = /* @__PURE__ */ popperGenerator({
        defaultModifiers
      });
      exports.applyStyles = applyStyles$1;
      exports.arrow = arrow$1;
      exports.computeStyles = computeStyles$1;
      exports.createPopper = createPopper3;
      exports.createPopperLite = createPopper$1;
      exports.defaultModifiers = defaultModifiers;
      exports.detectOverflow = detectOverflow;
      exports.eventListeners = eventListeners;
      exports.flip = flip$1;
      exports.hide = hide$1;
      exports.offset = offset$1;
      exports.popperGenerator = popperGenerator;
      exports.popperOffsets = popperOffsets$1;
      exports.preventOverflow = preventOverflow$1;
    }
  });

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.17/dist/bigger-picture.umd.js
  var require_bigger_picture_umd = __commonJS({
    "ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/henrygd/bigger-picture@v1.1.17/dist/bigger-picture.umd.js"(exports, module) {
      (function(global, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.BiggerPicture = factory());
      })(exports, function() {
        function noop2() {
        }
        const identity = (x) => x;
        function assign(tar, src) {
          for (const k in src)
            tar[k] = src[k];
          return tar;
        }
        function run(fn) {
          return fn();
        }
        function run_all(fns) {
          fns.forEach(run);
        }
        function is_function(thing) {
          return typeof thing === "function";
        }
        function not_equal(a, b) {
          return a != a ? b == b : a !== b;
        }
        function is_empty(obj) {
          return Object.keys(obj).length === 0;
        }
        function subscribe(store, ...callbacks) {
          if (store == null) {
            return noop2;
          }
          const unsub = store.subscribe(...callbacks);
          return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
        }
        function component_subscribe(component, store, callback) {
          component.$$.on_destroy.push(subscribe(store, callback));
        }
        function action_destroyer(action_result) {
          return action_result && is_function(action_result.destroy) ? action_result.destroy : noop2;
        }
        let now = () => globalThis.performance.now();
        let raf = (cb) => requestAnimationFrame(cb);
        const tasks = /* @__PURE__ */ new Set();
        function run_tasks(now2) {
          tasks.forEach((task) => {
            if (!task.c(now2)) {
              tasks.delete(task);
              task.f();
            }
          });
          if (tasks.size !== 0)
            raf(run_tasks);
        }
        function loop(callback) {
          let task;
          if (tasks.size === 0)
            raf(run_tasks);
          return {
            promise: new Promise((fulfill) => {
              tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
              tasks.delete(task);
            }
          };
        }
        function append(target, node) {
          target.appendChild(node);
        }
        function insert(target, node, anchor) {
          target.insertBefore(node, anchor || null);
        }
        function detach(node) {
          node.parentNode.removeChild(node);
        }
        function element(name) {
          return document.createElement(name);
        }
        function text(data) {
          return document.createTextNode(data);
        }
        function empty() {
          return text("");
        }
        function listen(node, event, handler, options) {
          node.addEventListener(event, handler, options);
          return () => node.removeEventListener(event, handler, options);
        }
        function attr(node, attribute, value) {
          if (value == null)
            node.removeAttribute(attribute);
          else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
        }
        function set_style(node, key, value, important) {
          if (value === null) {
            node.style.removeProperty(key);
          } else {
            node.style.setProperty(key, value);
          }
        }
        function toggle_class(element2, name, toggle) {
          element2.classList[toggle ? "add" : "remove"](name);
        }
        function custom_event(type, detail, bubbles = false) {
          const e = document.createEvent("CustomEvent");
          e.initCustomEvent(type, bubbles, false, detail);
          return e;
        }
        let stylesheet;
        let active = 0;
        let current_rules = {};
        function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
          const step = 16.666 / duration;
          let keyframes = "{\n";
          for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}
`;
          }
          const rule = keyframes + `100% {${fn(b, 1 - b)}}
}`;
          const name = `_bp_${Math.round(Math.random() * 1e9)}_${uid}`;
          if (!current_rules[name]) {
            if (!stylesheet) {
              const style = element("style");
              document.head.appendChild(style);
              stylesheet = style.sheet;
            }
            current_rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
          }
          const animation = node.style.animation || "";
          node.style.animation = `${animation ? `${animation}, ` : ``}${name} ${duration}ms linear ${delay}ms 1 both`;
          active += 1;
          return name;
        }
        function delete_rule(node, name) {
          node.style.animation = (node.style.animation || "").split(", ").filter(
            name ? (anim) => anim.indexOf(name) < 0 : (anim) => anim.indexOf("_bp") === -1
            // remove all Svelte animations
          ).join(", ");
          if (name && !--active)
            clear_rules();
        }
        function clear_rules() {
          raf(() => {
            if (active)
              return;
            let i = stylesheet.cssRules.length;
            while (i--)
              stylesheet.deleteRule(i);
            current_rules = {};
          });
        }
        let current_component;
        function set_current_component(component) {
          current_component = component;
        }
        const dirty_components = [];
        const binding_callbacks = [];
        const render_callbacks = [];
        const flush_callbacks = [];
        const resolved_promise = Promise.resolve();
        let update_scheduled = false;
        function schedule_update() {
          if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
          }
        }
        function add_render_callback(fn) {
          render_callbacks.push(fn);
        }
        const seen_callbacks = /* @__PURE__ */ new Set();
        let flushidx = 0;
        function flush() {
          const saved_component = current_component;
          do {
            while (flushidx < dirty_components.length) {
              const component = dirty_components[flushidx];
              flushidx++;
              set_current_component(component);
              update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
              binding_callbacks.pop()();
            for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
              if (!seen_callbacks.has(callback)) {
                seen_callbacks.add(callback);
                callback();
              }
            }
            render_callbacks.length = 0;
          } while (dirty_components.length);
          while (flush_callbacks.length) {
            flush_callbacks.pop()();
          }
          update_scheduled = false;
          seen_callbacks.clear();
          set_current_component(saved_component);
        }
        function update($$) {
          if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
          }
        }
        let promise;
        function wait() {
          if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
              promise = null;
            });
          }
          return promise;
        }
        function dispatch(node, direction, kind) {
          node.dispatchEvent(custom_event(`${direction ? "intro" : "outro"}${kind}`));
        }
        const outroing = /* @__PURE__ */ new Set();
        let outros;
        function group_outros() {
          outros = {
            r: 0,
            c: [],
            p: outros
            // parent group
          };
        }
        function check_outros() {
          if (!outros.r) {
            run_all(outros.c);
          }
          outros = outros.p;
        }
        function transition_in(block, local) {
          if (block && block.i) {
            outroing.delete(block);
            block.i(local);
          }
        }
        function transition_out(block, local, detach2, callback) {
          if (block && block.o) {
            if (outroing.has(block))
              return;
            outroing.add(block);
            outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                if (detach2)
                  block.d(1);
                callback();
              }
            });
            block.o(local);
          }
        }
        const null_transition = { duration: 0 };
        function create_in_transition(node, fn, params) {
          let config = fn(node, params);
          let running = false;
          let animation_name;
          let task;
          let uid = 0;
          function cleanup() {
            if (animation_name)
              delete_rule(node, animation_name);
          }
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
              task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, "start"));
            task = loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(1, 0);
                  dispatch(node, true, "end");
                  cleanup();
                  return running = false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(t, 1 - t);
                }
              }
              return running;
            });
          }
          let started = false;
          return {
            start() {
              if (started)
                return;
              started = true;
              delete_rule(node);
              if (is_function(config)) {
                config = config();
                wait().then(go);
              } else {
                go();
              }
            },
            invalidate() {
              started = false;
            },
            end() {
              if (running) {
                cleanup();
                running = false;
              }
            }
          };
        }
        function create_out_transition(node, fn, params) {
          let config = fn(node, params);
          let running = true;
          let animation_name;
          const group = outros;
          group.r += 1;
          function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop2, css } = config || null_transition;
            if (css)
              animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            add_render_callback(() => dispatch(node, false, "start"));
            loop((now2) => {
              if (running) {
                if (now2 >= end_time) {
                  tick(0, 1);
                  dispatch(node, false, "end");
                  if (!--group.r) {
                    run_all(group.c);
                  }
                  return false;
                }
                if (now2 >= start_time) {
                  const t = easing((now2 - start_time) / duration);
                  tick(1 - t, t);
                }
              }
              return running;
            });
          }
          if (is_function(config)) {
            wait().then(() => {
              config = config();
              go();
            });
          } else {
            go();
          }
          return {
            end(reset) {
              if (reset && config.tick) {
                config.tick(1, 0);
              }
              if (running) {
                if (animation_name)
                  delete_rule(node, animation_name);
                running = false;
              }
            }
          };
        }
        function create_component(block) {
          block && block.c();
        }
        function mount_component(component, target, anchor, customElement) {
          const { fragment, on_mount, on_destroy, after_update } = component.$$;
          fragment && fragment.m(target, anchor);
          if (!customElement) {
            add_render_callback(() => {
              const new_on_destroy = on_mount.map(run).filter(is_function);
              if (on_destroy) {
                on_destroy.push(...new_on_destroy);
              } else {
                run_all(new_on_destroy);
              }
              component.$$.on_mount = [];
            });
          }
          after_update.forEach(add_render_callback);
        }
        function destroy_component(component, detaching) {
          const $$ = component.$$;
          if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
          }
        }
        function make_dirty(component, i) {
          if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
          }
          component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
        }
        function init(component, options, instance2, create_fragment2, not_equal2, props, append_styles, dirty = [-1]) {
          const parent_component = current_component;
          set_current_component(component);
          const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop2,
            not_equal: not_equal2,
            bound: {},
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: {},
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
          };
          append_styles && append_styles($$.root);
          let ready = false;
          $$.ctx = instance2 ? instance2(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal2($$.ctx[i], $$.ctx[i] = value)) {
              if (!$$.skip_bound && $$.bound[i])
                $$.bound[i](value);
              if (ready)
                make_dirty(component, i);
            }
            return ret;
          }) : [];
          $$.update();
          ready = true;
          run_all($$.before_update);
          $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
          if (options.target) {
            {
              $$.fragment && $$.fragment.c();
            }
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
          }
          set_current_component(parent_component);
        }
        class SvelteComponent {
          $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop2;
          }
          $on(type, callback) {
            const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
            callbacks.push(callback);
            return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                callbacks.splice(index, 1);
            };
          }
          $set($$props) {
            if (this.$$set && !is_empty($$props)) {
              this.$$.skip_bound = true;
              this.$$set($$props);
              this.$$.skip_bound = false;
            }
          }
        }
        function cubicOut(t) {
          const f = t - 1;
          return f * f * f + 1;
        }
        function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
          const style = getComputedStyle(node);
          const target_opacity = +style.opacity;
          const transform = style.transform === "none" ? "" : style.transform;
          const od = target_opacity * (1 - opacity);
          return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - od * u}`
          };
        }
        const subscriber_queue = [];
        function writable(value, start = noop2) {
          let stop;
          const subscribers = /* @__PURE__ */ new Set();
          function set(new_value) {
            if (not_equal(value, new_value)) {
              value = new_value;
              if (stop) {
                const run_queue = !subscriber_queue.length;
                for (const subscriber of subscribers) {
                  subscriber[1]();
                  subscriber_queue.push(subscriber, value);
                }
                if (run_queue) {
                  for (let i = 0; i < subscriber_queue.length; i += 2) {
                    subscriber_queue[i][0](subscriber_queue[i + 1]);
                  }
                  subscriber_queue.length = 0;
                }
              }
            }
          }
          function update2(fn) {
            set(fn(value));
          }
          function subscribe2(run2, invalidate = noop2) {
            const subscriber = [run2, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
              stop = start(set) || noop2;
            }
            run2(value);
            return () => {
              subscribers.delete(subscriber);
              if (subscribers.size === 0) {
                stop();
                stop = null;
              }
            };
          }
          return { set, update: update2, subscribe: subscribe2 };
        }
        function get_interpolator(a, b) {
          if (a === b || a !== a)
            return () => a;
          const type = typeof a;
          if (Array.isArray(a)) {
            const arr = b.map((bi, i) => {
              return get_interpolator(a[i], bi);
            });
            return (t) => arr.map((fn) => fn(t));
          }
          if (type === "number") {
            const delta = b - a;
            return (t) => a + t * delta;
          }
        }
        function tweened(value, defaults = {}) {
          const store = writable(value);
          let task;
          let target_value = value;
          function set(new_value, opts) {
            if (value == null) {
              store.set(value = new_value);
              return Promise.resolve();
            }
            target_value = new_value;
            let previous_task = task;
            let started = false;
            let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
            if (duration === 0) {
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              store.set(value = target_value);
              return Promise.resolve();
            }
            const start = now() + delay;
            let fn;
            task = loop((now2) => {
              if (now2 < start)
                return true;
              if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === "function")
                  duration = duration(value, new_value);
                started = true;
              }
              if (previous_task) {
                previous_task.abort();
                previous_task = null;
              }
              const elapsed = now2 - start;
              if (elapsed > duration) {
                store.set(value = new_value);
                return false;
              }
              store.set(value = fn(easing(elapsed / duration)));
              return true;
            });
            return task.promise;
          }
          return {
            set,
            update: (fn, opts) => set(fn(target_value, value), opts),
            subscribe: store.subscribe
          };
        }
        const closing = writable(0);
        const prefersReducedMotion = globalThis.matchMedia?.(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const defaultTweenOptions = (duration) => ({
          easing: cubicOut,
          duration: prefersReducedMotion ? 0 : duration
        });
        const getThumbBackground = (activeItem) => !activeItem.thumb || `url(${activeItem.thumb})`;
        const addAttributes = (node, obj) => {
          if (!obj) {
            return;
          }
          if (typeof obj === "string") {
            obj = JSON.parse(obj);
          }
          for (const key in obj) {
            node.setAttribute(key, obj[key]);
          }
        };
        function create_if_block_1$2(ctx) {
          let div;
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              div.innerHTML = `<span class="bp-bar"></span><span class="bp-o"></span>`;
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (current)
                return;
              if (div_outro)
                div_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div_outro = create_out_transition(div, fly, { duration: 480 });
              }
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching && div_outro)
                div_outro.end();
            }
          };
        }
        function create_if_block$2(ctx) {
          let div;
          let div_intro;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-load");
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[0]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
            },
            p(ctx2, dirty) {
              if (dirty & /*activeItem*/
              1) {
                set_style(div, "background-image", getThumbBackground(
                  /*activeItem*/
                  ctx2[0]
                ));
              }
            },
            i(local) {
              if (!div_intro) {
                add_render_callback(() => {
                  div_intro = create_in_transition(div, fly, { duration: 480 });
                  div_intro.start();
                });
              }
            },
            o: noop2,
            d(detaching) {
              if (detaching)
                detach(div);
            }
          };
        }
        function create_fragment$4(ctx) {
          let if_block0_anchor;
          let if_block1_anchor;
          let if_block0 = !/*loaded*/
          ctx[1] && create_if_block_1$2(ctx);
          let if_block1 = (
            /*$closing*/
            ctx[2] && create_if_block$2(ctx)
          );
          return {
            c() {
              if (if_block0)
                if_block0.c();
              if_block0_anchor = empty();
              if (if_block1)
                if_block1.c();
              if_block1_anchor = empty();
            },
            m(target, anchor) {
              if (if_block0)
                if_block0.m(target, anchor);
              insert(target, if_block0_anchor, anchor);
              if (if_block1)
                if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
            },
            p(ctx2, [dirty]) {
              if (!/*loaded*/
              ctx2[1]) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty & /*loaded*/
                  2) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$2(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(if_block0_anchor.parentNode, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*$closing*/
                ctx2[2]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty & /*$closing*/
                  4) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
              }
            },
            i(local) {
              transition_in(if_block0);
              transition_in(if_block1);
            },
            o(local) {
              transition_out(if_block0);
            },
            d(detaching) {
              if (if_block0)
                if_block0.d(detaching);
              if (detaching)
                detach(if_block0_anchor);
              if (if_block1)
                if_block1.d(detaching);
              if (detaching)
                detach(if_block1_anchor);
            }
          };
        }
        function instance$4($$self, $$props, $$invalidate) {
          let $closing;
          component_subscribe($$self, closing, ($$value) => $$invalidate(2, $closing = $$value));
          let { activeItem } = $$props;
          let { loaded } = $$props;
          $$self.$$set = ($$props2) => {
            if ("activeItem" in $$props2)
              $$invalidate(0, activeItem = $$props2.activeItem);
            if ("loaded" in $$props2)
              $$invalidate(1, loaded = $$props2.loaded);
          };
          return [activeItem, loaded, $closing];
        }
        class Loading extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$4, create_fragment$4, not_equal, { activeItem: 0, loaded: 1 });
          }
        }
        function create_if_block_1$1(ctx) {
          let img;
          let img_sizes_value;
          let img_outro;
          let current;
          let mounted;
          let dispose;
          return {
            c() {
              img = element("img");
              attr(img, "sizes", img_sizes_value = /*opts*/
              ctx[8].sizes || `${/*sizes*/
              ctx[1]}px`);
              attr(
                img,
                "alt",
                /*activeItem*/
                ctx[7].alt
              );
            },
            m(target, anchor) {
              insert(target, img, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[21].call(null, img)
                  ),
                  listen(
                    img,
                    "error",
                    /*error_handler*/
                    ctx[27]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (!current || dirty[0] & /*sizes*/
              2 && img_sizes_value !== (img_sizes_value = /*opts*/
              ctx2[8].sizes || `${/*sizes*/
              ctx2[1]}px`)) {
                attr(img, "sizes", img_sizes_value);
              }
            },
            i(local) {
              if (current)
                return;
              if (img_outro)
                img_outro.end(1);
              current = true;
            },
            o(local) {
              img_outro = create_out_transition(img, fly, {});
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(img);
              if (detaching && img_outro)
                img_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block$1(ctx) {
          let loading;
          let current;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[7]
              ),
              loaded: (
                /*loaded*/
                ctx[2]
              )
            }
          });
          return {
            c() {
              create_component(loading.$$.fragment);
            },
            m(target, anchor) {
              mount_component(loading, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const loading_changes = {};
              if (dirty[0] & /*loaded*/
              4)
                loading_changes.loaded = /*loaded*/
                ctx2[2];
              loading.$set(loading_changes);
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(loading, detaching);
            }
          };
        }
        function create_fragment$3(ctx) {
          let div1;
          let div0;
          let if_block0_anchor;
          let style_transform = `translate3d(${/*$imageDimensions*/
          ctx[0][0] / -2 + /*$zoomDragTranslate*/
          ctx[6][0]}px, ${/*$imageDimensions*/
          ctx[0][1] / -2 + /*$zoomDragTranslate*/
          ctx[6][1]}px, 0)`;
          let current;
          let mounted;
          let dispose;
          let if_block0 = (
            /*loaded*/
            ctx[2] && create_if_block_1$1(ctx)
          );
          let if_block1 = (
            /*showLoader*/
            ctx[3] && create_if_block$1(ctx)
          );
          return {
            c() {
              div1 = element("div");
              div0 = element("div");
              if (if_block0)
                if_block0.c();
              if_block0_anchor = empty();
              if (if_block1)
                if_block1.c();
              attr(div0, "class", "bp-img");
              set_style(
                div0,
                "width",
                /*$imageDimensions*/
                ctx[0][0] + "px"
              );
              set_style(
                div0,
                "height",
                /*$imageDimensions*/
                ctx[0][1] + "px"
              );
              toggle_class(
                div0,
                "bp-drag",
                /*pointerDown*/
                ctx[4]
              );
              toggle_class(
                div0,
                "bp-canzoom",
                /*maxZoom*/
                ctx[11] > 1 && /*$imageDimensions*/
                ctx[0][0] < /*naturalWidth*/
                ctx[12]
              );
              set_style(div0, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[7]
              ));
              set_style(div0, "transform", style_transform);
              attr(div1, "class", "bp-img-wrap");
              toggle_class(
                div1,
                "bp-close",
                /*closingWhileZoomed*/
                ctx[5]
              );
            },
            m(target, anchor) {
              insert(target, div1, anchor);
              append(div1, div0);
              if (if_block0)
                if_block0.m(div0, null);
              append(div0, if_block0_anchor);
              if (if_block1)
                if_block1.m(div0, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*onMount*/
                    ctx[20].call(null, div0)
                  ),
                  listen(
                    div1,
                    "wheel",
                    /*onWheel*/
                    ctx[15]
                  ),
                  listen(
                    div1,
                    "pointerdown",
                    /*onPointerDown*/
                    ctx[16]
                  ),
                  listen(
                    div1,
                    "pointermove",
                    /*onPointerMove*/
                    ctx[17]
                  ),
                  listen(
                    div1,
                    "pointerup",
                    /*onPointerUp*/
                    ctx[19]
                  ),
                  listen(
                    div1,
                    "pointercancel",
                    /*removeEventFromCache*/
                    ctx[18]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (
                /*loaded*/
                ctx2[2]
              ) {
                if (if_block0) {
                  if_block0.p(ctx2, dirty);
                  if (dirty[0] & /*loaded*/
                  4) {
                    transition_in(if_block0, 1);
                  }
                } else {
                  if_block0 = create_if_block_1$1(ctx2);
                  if_block0.c();
                  transition_in(if_block0, 1);
                  if_block0.m(div0, if_block0_anchor);
                }
              } else if (if_block0) {
                group_outros();
                transition_out(if_block0, 1, 1, () => {
                  if_block0 = null;
                });
                check_outros();
              }
              if (
                /*showLoader*/
                ctx2[3]
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*showLoader*/
                  8) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block$1(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(div0, null);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "width",
                  /*$imageDimensions*/
                  ctx2[0][0] + "px"
                );
              }
              if (!current || dirty[0] & /*$imageDimensions*/
              1) {
                set_style(
                  div0,
                  "height",
                  /*$imageDimensions*/
                  ctx2[0][1] + "px"
                );
              }
              if (!current || dirty[0] & /*pointerDown*/
              16) {
                toggle_class(
                  div0,
                  "bp-drag",
                  /*pointerDown*/
                  ctx2[4]
                );
              }
              if (!current || dirty[0] & /*maxZoom, $imageDimensions, naturalWidth*/
              6145) {
                toggle_class(
                  div0,
                  "bp-canzoom",
                  /*maxZoom*/
                  ctx2[11] > 1 && /*$imageDimensions*/
                  ctx2[0][0] < /*naturalWidth*/
                  ctx2[12]
                );
              }
              if (dirty[0] & /*$imageDimensions, $zoomDragTranslate*/
              65 && style_transform !== (style_transform = `translate3d(${/*$imageDimensions*/
              ctx2[0][0] / -2 + /*$zoomDragTranslate*/
              ctx2[6][0]}px, ${/*$imageDimensions*/
              ctx2[0][1] / -2 + /*$zoomDragTranslate*/
              ctx2[6][1]}px, 0)`)) {
                set_style(div0, "transform", style_transform);
              }
              if (!current || dirty[0] & /*closingWhileZoomed*/
              32) {
                toggle_class(
                  div1,
                  "bp-close",
                  /*closingWhileZoomed*/
                  ctx2[5]
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block0);
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div1);
              if (if_block0)
                if_block0.d();
              if (if_block1)
                if_block1.d();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$3($$self, $$props, $$invalidate) {
          let $zoomed;
          let $zoomDragTranslate;
          let $closing;
          let $imageDimensions;
          component_subscribe($$self, closing, ($$value) => $$invalidate(26, $closing = $$value));
          let { props } = $$props;
          let { smallScreen } = $$props;
          let { activeItem, opts, prev, next, zoomed, container } = props;
          component_subscribe($$self, zoomed, (value) => $$invalidate(25, $zoomed = value));
          let maxZoom = activeItem.maxZoom || opts.maxZoom || 10;
          let calculatedDimensions = props.calculateDimensions(activeItem);
          let sizes = calculatedDimensions[0];
          let loaded, showLoader;
          let pinchDetails;
          let bpImg;
          let prevDiff = 0;
          let pointerDown, hasDragged;
          let dragStartX, dragStartY;
          let dragStartTranslateX, dragStartTranslateY;
          let closingWhileZoomed;
          const naturalWidth = +activeItem.width;
          const dragPositions = [];
          const pointerCache = /* @__PURE__ */ new Map();
          const imageDimensions = tweened(calculatedDimensions, defaultTweenOptions(400));
          component_subscribe($$self, imageDimensions, (value) => $$invalidate(0, $imageDimensions = value));
          const zoomDragTranslate = tweened([0, 0], defaultTweenOptions(400));
          component_subscribe($$self, zoomDragTranslate, (value) => $$invalidate(6, $zoomDragTranslate = value));
          const boundTranslateValues = ([x, y], newDimensions = $imageDimensions) => {
            const maxTranslateX = (newDimensions[0] - container.w) / 2;
            const maxTranslateY = (newDimensions[1] - container.h) / 2;
            if (maxTranslateX < 0) {
              x = 0;
            } else if (x > maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? maxTranslateX + (x - maxTranslateX) / 10 : maxTranslateX;
                if (x > maxTranslateX + 20) {
                  $$invalidate(4, pointerDown = prev());
                }
              } else {
                x = maxTranslateX;
              }
            } else if (x < -maxTranslateX) {
              if (smallScreen) {
                x = pointerDown ? -maxTranslateX - (-maxTranslateX - x) / 10 : -maxTranslateX;
                if (x < -maxTranslateX - 20) {
                  $$invalidate(4, pointerDown = next());
                }
              } else {
                x = -maxTranslateX;
              }
            }
            if (maxTranslateY < 0) {
              y = 0;
            } else if (y > maxTranslateY) {
              y = maxTranslateY;
            } else if (y < -maxTranslateY) {
              y = -maxTranslateY;
            }
            return [x, y];
          };
          function changeZoom(amt = maxZoom, e) {
            if ($closing) {
              return;
            }
            const maxWidth = calculatedDimensions[0] * maxZoom;
            let newWidth = $imageDimensions[0] + $imageDimensions[0] * amt;
            let newHeight = $imageDimensions[1] + $imageDimensions[1] * amt;
            if (amt > 0) {
              if (newWidth > maxWidth) {
                newWidth = maxWidth;
                newHeight = calculatedDimensions[1] * maxZoom;
              }
              if (newWidth > naturalWidth) {
                newWidth = naturalWidth;
                newHeight = +activeItem.height;
              }
            } else if (newWidth < calculatedDimensions[0]) {
              imageDimensions.set(calculatedDimensions);
              return zoomDragTranslate.set([0, 0]);
            }
            let { x, y, width, height } = bpImg.getBoundingClientRect();
            const offsetX = e ? e.clientX - x - width / 2 : 0;
            const offsetY = e ? e.clientY - y - height / 2 : 0;
            x = -offsetX * (newWidth / width) + offsetX;
            y = -offsetY * (newHeight / height) + offsetY;
            const newDimensions = [newWidth, newHeight];
            imageDimensions.set(newDimensions).then(() => {
              $$invalidate(1, sizes = Math.round(Math.max(sizes, newWidth)));
            });
            zoomDragTranslate.set(boundTranslateValues([$zoomDragTranslate[0] + x, $zoomDragTranslate[1] + y], newDimensions));
          }
          Object.defineProperty(activeItem, "zoom", {
            configurable: true,
            get: () => $zoomed,
            set: (bool) => changeZoom(bool ? maxZoom : -maxZoom)
          });
          const onWheel = (e) => {
            if (opts.inline && !$zoomed) {
              return;
            }
            e.preventDefault();
            changeZoom(e.deltaY / -300, e);
          };
          const onPointerDown = (e) => {
            if (e.button !== 2) {
              e.preventDefault();
              $$invalidate(4, pointerDown = true);
              pointerCache.set(e.pointerId, e);
              dragStartX = e.clientX;
              dragStartY = e.clientY;
              dragStartTranslateX = $zoomDragTranslate[0];
              dragStartTranslateY = $zoomDragTranslate[1];
            }
          };
          const onPointerMove = (e) => {
            if (pointerCache.size > 1) {
              $$invalidate(4, pointerDown = false);
              return opts.noPinch?.(container.el) || handlePinch(e);
            }
            if (!pointerDown) {
              return;
            }
            let x = e.clientX;
            let y = e.clientY;
            hasDragged = dragPositions.push({ x, y }) > 2;
            x = x - dragStartX;
            y = y - dragStartY;
            if (!$zoomed) {
              if (y < -90) {
                $$invalidate(4, pointerDown = !opts.noClose && props.close());
              }
              if (Math.abs(y) < 30) {
                if (x > 40) {
                  $$invalidate(4, pointerDown = prev());
                }
                if (x < -40) {
                  $$invalidate(4, pointerDown = next());
                }
              }
            }
            if ($zoomed && hasDragged && !$closing) {
              zoomDragTranslate.set(boundTranslateValues([dragStartTranslateX + x, dragStartTranslateY + y]), { duration: 0 });
            }
          };
          const handlePinch = (e) => {
            const [p1, p2] = pointerCache.set(e.pointerId, e).values();
            const dx = p1.clientX - p2.clientX;
            const dy = p1.clientY - p2.clientY;
            const curDiff = Math.hypot(dx, dy);
            pinchDetails = pinchDetails || {
              clientX: (p1.clientX + p2.clientX) / 2,
              clientY: (p1.clientY + p2.clientY) / 2
            };
            changeZoom(((prevDiff || curDiff) - curDiff) / -35, pinchDetails);
            prevDiff = curDiff;
          };
          const removeEventFromCache = (e) => pointerCache.delete(e.pointerId);
          function onPointerUp(e) {
            removeEventFromCache(e);
            if (pinchDetails) {
              $$invalidate(4, pointerDown = prevDiff = 0);
              pinchDetails = pointerCache.size ? pinchDetails : null;
            }
            if (!pointerDown) {
              return;
            }
            $$invalidate(4, pointerDown = false);
            if (e.target === this && !opts.noClose) {
              return props.close();
            }
            if (hasDragged) {
              const [posOne, posTwo, posThree] = dragPositions.slice(-3);
              const xDiff = posTwo.x - posThree.x;
              const yDiff = posTwo.y - posThree.y;
              if (Math.hypot(xDiff, yDiff) > 5) {
                zoomDragTranslate.set(boundTranslateValues([
                  $zoomDragTranslate[0] - (posOne.x - posThree.x) * 5,
                  $zoomDragTranslate[1] - (posOne.y - posThree.y) * 5
                ]));
              }
            } else if (!opts.onImageClick?.(container.el, activeItem)) {
              changeZoom($zoomed ? -maxZoom : maxZoom, e);
            }
            hasDragged = false;
            dragPositions.length = 0;
          }
          const onMount = (node) => {
            bpImg = node;
            props.setResizeFunc(() => {
              $$invalidate(24, calculatedDimensions = props.calculateDimensions(activeItem));
              if (opts.inline || !smallScreen) {
                imageDimensions.set(calculatedDimensions);
                zoomDragTranslate.set([0, 0]);
              }
            });
            props.loadImage(activeItem).then(() => {
              $$invalidate(2, loaded = true);
              props.preloadNext();
            });
            setTimeout(
              () => {
                $$invalidate(3, showLoader = !loaded);
              },
              250
            );
          };
          const addSrc = (node) => {
            addAttributes(node, activeItem.attr);
            node.srcset = activeItem.img;
          };
          const error_handler = (error) => opts.onError?.(container, activeItem, error);
          $$self.$$set = ($$props2) => {
            if ("smallScreen" in $$props2)
              $$invalidate(23, smallScreen = $$props2.smallScreen);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*$imageDimensions, calculatedDimensions*/
            16777217) {
              zoomed.set($imageDimensions[0] - 10 > calculatedDimensions[0]);
            }
            if ($$self.$$.dirty[0] & /*$closing, $zoomed, calculatedDimensions*/
            117440512) {
              if ($closing && $zoomed && !opts.intro) {
                const closeTweenOpts = defaultTweenOptions(480);
                zoomDragTranslate.set([0, 0], closeTweenOpts);
                imageDimensions.set(calculatedDimensions, closeTweenOpts);
                $$invalidate(5, closingWhileZoomed = true);
              }
            }
          };
          return [
            $imageDimensions,
            sizes,
            loaded,
            showLoader,
            pointerDown,
            closingWhileZoomed,
            $zoomDragTranslate,
            activeItem,
            opts,
            zoomed,
            container,
            maxZoom,
            naturalWidth,
            imageDimensions,
            zoomDragTranslate,
            onWheel,
            onPointerDown,
            onPointerMove,
            removeEventFromCache,
            onPointerUp,
            onMount,
            addSrc,
            props,
            smallScreen,
            calculatedDimensions,
            $zoomed,
            $closing,
            error_handler
          ];
        }
        class Image extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$3, create_fragment$3, not_equal, { props: 22, smallScreen: 23 }, null, [-1, -1]);
          }
        }
        function create_fragment$2(ctx) {
          let div;
          let iframe;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[2]
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              iframe = element("iframe");
              create_component(loading.$$.fragment);
              attr(iframe, "allow", "autoplay; fullscreen");
              attr(
                iframe,
                "title",
                /*activeItem*/
                ctx[2].title
              );
              attr(div, "class", "bp-if");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
            },
            m(target, anchor) {
              insert(target, div, anchor);
              append(div, iframe);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = [
                  action_destroyer(
                    /*addSrc*/
                    ctx[3].call(null, iframe)
                  ),
                  listen(
                    iframe,
                    "load",
                    /*load_handler*/
                    ctx[5]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1)
                loading_changes.loaded = /*loaded*/
                ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              destroy_component(loading);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function instance$2($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const addSrc = (node) => {
            addAttributes(node, activeItem.attr);
            node.src = activeItem.iframe;
          };
          const load_handler = () => $$invalidate(0, loaded = true);
          return [loaded, dimensions, activeItem, addSrc, props, load_handler];
        }
        class Iframe extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$2, create_fragment$2, not_equal, { props: 4 });
          }
        }
        function create_fragment$1(ctx) {
          let div;
          let loading;
          let current;
          let mounted;
          let dispose;
          loading = new Loading({
            props: {
              activeItem: (
                /*activeItem*/
                ctx[2]
              ),
              loaded: (
                /*loaded*/
                ctx[0]
              )
            }
          });
          return {
            c() {
              div = element("div");
              create_component(loading.$$.fragment);
              attr(div, "class", "bp-vid");
              set_style(
                div,
                "width",
                /*dimensions*/
                ctx[1][0] + "px"
              );
              set_style(
                div,
                "height",
                /*dimensions*/
                ctx[1][1] + "px"
              );
              set_style(div, "background-image", getThumbBackground(
                /*activeItem*/
                ctx[2]
              ));
            },
            m(target, anchor) {
              insert(target, div, anchor);
              mount_component(loading, div, null);
              current = true;
              if (!mounted) {
                dispose = action_destroyer(
                  /*onMount*/
                  ctx[3].call(null, div)
                );
                mounted = true;
              }
            },
            p(ctx2, [dirty]) {
              const loading_changes = {};
              if (dirty & /*loaded*/
              1)
                loading_changes.loaded = /*loaded*/
                ctx2[0];
              loading.$set(loading_changes);
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "width",
                  /*dimensions*/
                  ctx2[1][0] + "px"
                );
              }
              if (!current || dirty & /*dimensions*/
              2) {
                set_style(
                  div,
                  "height",
                  /*dimensions*/
                  ctx2[1][1] + "px"
                );
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(loading.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(loading.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              destroy_component(loading);
              mounted = false;
              dispose();
            }
          };
        }
        function instance$1($$self, $$props, $$invalidate) {
          let { props } = $$props;
          let loaded, dimensions;
          const { activeItem, opts, container } = props;
          const setDimensions = () => $$invalidate(1, dimensions = props.calculateDimensions(activeItem));
          setDimensions();
          props.setResizeFunc(setDimensions);
          const onMount = (node) => {
            let mediaElement;
            const appendToVideo = (tag, arr) => {
              if (!Array.isArray(arr)) {
                arr = JSON.parse(arr);
              }
              for (const obj of arr) {
                if (!mediaElement) {
                  mediaElement = document.createElement(obj.type?.includes("audio") ? "audio" : "video");
                  addAttributes(mediaElement, {
                    controls: true,
                    autoplay: true,
                    playsinline: true,
                    tabindex: "0"
                  });
                  addAttributes(mediaElement, activeItem.attr);
                }
                const el = document.createElement(tag);
                addAttributes(el, obj);
                if (tag == "source") {
                  el.onError = (error) => opts.onError?.(container, activeItem, error);
                }
                mediaElement.append(el);
              }
            };
            appendToVideo("source", activeItem.sources);
            appendToVideo("track", activeItem.tracks || []);
            mediaElement.oncanplay = () => $$invalidate(0, loaded = true);
            node.append(mediaElement);
          };
          return [loaded, dimensions, activeItem, onMount, props];
        }
        class Video extends SvelteComponent {
          constructor(options) {
            super();
            init(this, options, instance$1, create_fragment$1, not_equal, { props: 4 });
          }
        }
        function create_if_block(ctx) {
          let div2;
          let div0;
          let div0_outro;
          let previous_key = (
            /*activeItem*/
            ctx[6].i
          );
          let div1;
          let button;
          let div1_outro;
          let current;
          let mounted;
          let dispose;
          let key_block = create_key_block(ctx);
          let if_block = (
            /*items*/
            ctx[0].length > 1 && create_if_block_1(ctx)
          );
          return {
            c() {
              div2 = element("div");
              div0 = element("div");
              key_block.c();
              div1 = element("div");
              button = element("button");
              if (if_block)
                if_block.c();
              attr(button, "class", "bp-x");
              attr(button, "title", "Close");
              attr(button, "aria-label", "Close");
              attr(div1, "class", "bp-controls");
              attr(div2, "class", "bp-wrap");
              toggle_class(
                div2,
                "bp-zoomed",
                /*$zoomed*/
                ctx[10]
              );
              toggle_class(
                div2,
                "bp-inline",
                /*inline*/
                ctx[8]
              );
              toggle_class(
                div2,
                "bp-small",
                /*smallScreen*/
                ctx[7]
              );
              toggle_class(
                div2,
                "bp-noclose",
                /*opts*/
                ctx[5].noClose
              );
            },
            m(target, anchor) {
              insert(target, div2, anchor);
              append(div2, div0);
              key_block.m(div2, null);
              append(div2, div1);
              append(div1, button);
              if (if_block)
                if_block.m(div1, null);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    button,
                    "click",
                    /*close*/
                    ctx[1]
                  ),
                  action_destroyer(
                    /*containerActions*/
                    ctx[14].call(null, div2)
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && not_equal(previous_key, previous_key = /*activeItem*/
              ctx2[6].i)) {
                group_outros();
                transition_out(key_block, 1, 1, noop2);
                check_outros();
                key_block = create_key_block(ctx2);
                key_block.c();
                transition_in(key_block, 1);
                key_block.m(div2, div1);
              } else {
                key_block.p(ctx2, dirty);
              }
              if (
                /*items*/
                ctx2[0].length > 1
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                } else {
                  if_block = create_if_block_1(ctx2);
                  if_block.c();
                  if_block.m(div1, null);
                }
              } else if (if_block) {
                if_block.d(1);
                if_block = null;
              }
              if (!current || dirty[0] & /*$zoomed*/
              1024) {
                toggle_class(
                  div2,
                  "bp-zoomed",
                  /*$zoomed*/
                  ctx2[10]
                );
              }
              if (!current || dirty[0] & /*inline*/
              256) {
                toggle_class(
                  div2,
                  "bp-inline",
                  /*inline*/
                  ctx2[8]
                );
              }
              if (!current || dirty[0] & /*smallScreen*/
              128) {
                toggle_class(
                  div2,
                  "bp-small",
                  /*smallScreen*/
                  ctx2[7]
                );
              }
              if (!current || dirty[0] & /*opts*/
              32) {
                toggle_class(
                  div2,
                  "bp-noclose",
                  /*opts*/
                  ctx2[5].noClose
                );
              }
            },
            i(local) {
              if (current)
                return;
              if (div0_outro)
                div0_outro.end(1);
              transition_in(key_block);
              if (div1_outro)
                div1_outro.end(1);
              current = true;
            },
            o(local) {
              if (local) {
                div0_outro = create_out_transition(div0, fly, { duration: 480 });
              }
              transition_out(key_block);
              if (local) {
                div1_outro = create_out_transition(div1, fly, {});
              }
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div2);
              if (detaching && div0_outro)
                div0_outro.end();
              key_block.d(detaching);
              if (if_block)
                if_block.d();
              if (detaching && div1_outro)
                div1_outro.end();
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_else_block(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            (ctx[6].html ?? /*activeItem*/
            ctx[6].element.outerHTML) + ""
          );
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-html");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*activeItem*/
              64 && raw_value !== (raw_value = /*activeItem*/
              (ctx2[6].html ?? /*activeItem*/
              ctx2[6].element.outerHTML) + ""))
                div.innerHTML = raw_value;
            },
            i: noop2,
            o: noop2,
            d(detaching) {
              if (detaching)
                detach(div);
            }
          };
        }
        function create_if_block_5(ctx) {
          let iframe;
          let current;
          iframe = new Iframe({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(iframe.$$.fragment);
            },
            m(target, anchor) {
              mount_component(iframe, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current)
                return;
              transition_in(iframe.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(iframe.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(iframe, detaching);
            }
          };
        }
        function create_if_block_4(ctx) {
          let video;
          let current;
          video = new Video({
            props: { props: (
              /*getChildProps*/
              ctx[13]()
            ) }
          });
          return {
            c() {
              create_component(video.$$.fragment);
            },
            m(target, anchor) {
              mount_component(video, target, anchor);
              current = true;
            },
            p: noop2,
            i(local) {
              if (current)
                return;
              transition_in(video.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(video.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(video, detaching);
            }
          };
        }
        function create_if_block_3(ctx) {
          let imageitem;
          let current;
          imageitem = new Image({
            props: {
              props: (
                /*getChildProps*/
                ctx[13]()
              ),
              smallScreen: (
                /*smallScreen*/
                ctx[7]
              )
            }
          });
          return {
            c() {
              create_component(imageitem.$$.fragment);
            },
            m(target, anchor) {
              mount_component(imageitem, target, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              const imageitem_changes = {};
              if (dirty[0] & /*smallScreen*/
              128)
                imageitem_changes.smallScreen = /*smallScreen*/
                ctx2[7];
              imageitem.$set(imageitem_changes);
            },
            i(local) {
              if (current)
                return;
              transition_in(imageitem.$$.fragment, local);
              current = true;
            },
            o(local) {
              transition_out(imageitem.$$.fragment, local);
              current = false;
            },
            d(detaching) {
              destroy_component(imageitem, detaching);
            }
          };
        }
        function create_if_block_2(ctx) {
          let div;
          let raw_value = (
            /*activeItem*/
            ctx[6].caption + ""
          );
          let div_outro;
          let current;
          return {
            c() {
              div = element("div");
              attr(div, "class", "bp-cap");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              current = true;
            },
            p(ctx2, dirty) {
              if ((!current || dirty[0] & /*activeItem*/
              64) && raw_value !== (raw_value = /*activeItem*/
              ctx2[6].caption + ""))
                div.innerHTML = raw_value;
            },
            i(local) {
              if (current)
                return;
              if (div_outro)
                div_outro.end(1);
              current = true;
            },
            o(local) {
              div_outro = create_out_transition(div, fly, { duration: 200 });
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching && div_outro)
                div_outro.end();
            }
          };
        }
        function create_key_block(ctx) {
          let div;
          let current_block_type_index;
          let if_block0;
          let div_intro;
          let div_outro;
          let if_block1_anchor;
          let current;
          let mounted;
          let dispose;
          const if_block_creators = [create_if_block_3, create_if_block_4, create_if_block_5, create_else_block];
          const if_blocks = [];
          function select_block_type(ctx2, dirty) {
            if (
              /*activeItem*/
              ctx2[6].img
            )
              return 0;
            if (
              /*activeItem*/
              ctx2[6].sources
            )
              return 1;
            if (
              /*activeItem*/
              ctx2[6].iframe
            )
              return 2;
            return 3;
          }
          current_block_type_index = select_block_type(ctx);
          if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
          let if_block1 = (
            /*activeItem*/
            ctx[6].caption && create_if_block_2(ctx)
          );
          return {
            c() {
              div = element("div");
              if_block0.c();
              if (if_block1)
                if_block1.c();
              if_block1_anchor = empty();
              attr(div, "class", "bp-inner");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              if_blocks[current_block_type_index].m(div, null);
              if (if_block1)
                if_block1.m(target, anchor);
              insert(target, if_block1_anchor, anchor);
              current = true;
              if (!mounted) {
                dispose = [
                  listen(
                    div,
                    "pointerdown",
                    /*pointerdown_handler*/
                    ctx[20]
                  ),
                  listen(
                    div,
                    "pointerup",
                    /*pointerup_handler*/
                    ctx[21]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              let previous_block_index = current_block_type_index;
              current_block_type_index = select_block_type(ctx2);
              if (current_block_type_index === previous_block_index) {
                if_blocks[current_block_type_index].p(ctx2, dirty);
              } else {
                group_outros();
                transition_out(if_blocks[previous_block_index], 1, 1, () => {
                  if_blocks[previous_block_index] = null;
                });
                check_outros();
                if_block0 = if_blocks[current_block_type_index];
                if (!if_block0) {
                  if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                  if_block0.c();
                } else {
                  if_block0.p(ctx2, dirty);
                }
                transition_in(if_block0, 1);
                if_block0.m(div, null);
              }
              if (
                /*activeItem*/
                ctx2[6].caption
              ) {
                if (if_block1) {
                  if_block1.p(ctx2, dirty);
                  if (dirty[0] & /*activeItem*/
                  64) {
                    transition_in(if_block1, 1);
                  }
                } else {
                  if_block1 = create_if_block_2(ctx2);
                  if_block1.c();
                  transition_in(if_block1, 1);
                  if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
                }
              } else if (if_block1) {
                group_outros();
                transition_out(if_block1, 1, 1, () => {
                  if_block1 = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block0);
              add_render_callback(() => {
                if (div_outro)
                  div_outro.end(1);
                div_intro = create_in_transition(
                  div,
                  /*mediaTransition*/
                  ctx[12],
                  true
                );
                div_intro.start();
              });
              transition_in(if_block1);
              current = true;
            },
            o(local) {
              transition_out(if_block0);
              if (div_intro)
                div_intro.invalidate();
              div_outro = create_out_transition(
                div,
                /*mediaTransition*/
                ctx[12],
                false
              );
              transition_out(if_block1);
              current = false;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if_blocks[current_block_type_index].d();
              if (detaching && div_outro)
                div_outro.end();
              if (if_block1)
                if_block1.d(detaching);
              if (detaching)
                detach(if_block1_anchor);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_if_block_1(ctx) {
          let div;
          let raw_value = `${/*position*/
          ctx[4] + 1} / ${/*items*/
          ctx[0].length}`;
          let button0;
          let button1;
          let mounted;
          let dispose;
          return {
            c() {
              div = element("div");
              button0 = element("button");
              button1 = element("button");
              attr(div, "class", "bp-count");
              attr(button0, "class", "bp-prev");
              attr(button0, "title", "Previous");
              attr(button0, "aria-label", "Previous");
              attr(button1, "class", "bp-next");
              attr(button1, "title", "Next");
              attr(button1, "aria-label", "Next");
            },
            m(target, anchor) {
              insert(target, div, anchor);
              div.innerHTML = raw_value;
              insert(target, button0, anchor);
              insert(target, button1, anchor);
              if (!mounted) {
                dispose = [
                  listen(
                    button0,
                    "click",
                    /*prev*/
                    ctx[2]
                  ),
                  listen(
                    button1,
                    "click",
                    /*next*/
                    ctx[3]
                  )
                ];
                mounted = true;
              }
            },
            p(ctx2, dirty) {
              if (dirty[0] & /*position, items*/
              17 && raw_value !== (raw_value = `${/*position*/
              ctx2[4] + 1} / ${/*items*/
              ctx2[0].length}`))
                div.innerHTML = raw_value;
            },
            d(detaching) {
              if (detaching)
                detach(div);
              if (detaching)
                detach(button0);
              if (detaching)
                detach(button1);
              mounted = false;
              run_all(dispose);
            }
          };
        }
        function create_fragment(ctx) {
          let if_block_anchor;
          let current;
          let if_block = (
            /*items*/
            ctx[0] && create_if_block(ctx)
          );
          return {
            c() {
              if (if_block)
                if_block.c();
              if_block_anchor = empty();
            },
            m(target, anchor) {
              if (if_block)
                if_block.m(target, anchor);
              insert(target, if_block_anchor, anchor);
              current = true;
            },
            p(ctx2, dirty) {
              if (
                /*items*/
                ctx2[0]
              ) {
                if (if_block) {
                  if_block.p(ctx2, dirty);
                  if (dirty[0] & /*items*/
                  1) {
                    transition_in(if_block, 1);
                  }
                } else {
                  if_block = create_if_block(ctx2);
                  if_block.c();
                  transition_in(if_block, 1);
                  if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
              } else if (if_block) {
                group_outros();
                transition_out(if_block, 1, 1, () => {
                  if_block = null;
                });
                check_outros();
              }
            },
            i(local) {
              if (current)
                return;
              transition_in(if_block);
              current = true;
            },
            o(local) {
              transition_out(if_block);
              current = false;
            },
            d(detaching) {
              if (if_block)
                if_block.d(detaching);
              if (detaching)
                detach(if_block_anchor);
            }
          };
        }
        function instance($$self, $$props, $$invalidate) {
          let $zoomed;
          let { items = void 0 } = $$props;
          let { target = void 0 } = $$props;
          const html = document.documentElement;
          let position;
          let opts;
          let isOpen;
          let focusTrigger;
          let smallScreen;
          let inline;
          let movement;
          let clickedEl;
          let activeItem;
          const activeItemIsHtml = () => !activeItem.img && !activeItem.sources && !activeItem.iframe;
          let resizeFunc;
          const setResizeFunc = (fn) => resizeFunc = fn;
          const container = {};
          const zoomed = writable(0);
          component_subscribe($$self, zoomed, (value) => $$invalidate(10, $zoomed = value));
          const open = (options) => {
            $$invalidate(5, opts = options);
            $$invalidate(8, inline = opts.inline);
            if (!inline && html.scrollHeight > html.clientHeight) {
              html.classList.add("bp-lock");
            }
            focusTrigger = document.activeElement;
            $$invalidate(19, container.w = target.offsetWidth, container);
            $$invalidate(
              19,
              container.h = target === document.body ? globalThis.innerHeight : target.clientHeight,
              container
            );
            $$invalidate(7, smallScreen = container.w < 769);
            $$invalidate(4, position = opts.position || 0);
            $$invalidate(0, items = []);
            for (let i = 0; i < (opts.items.length || 1); i++) {
              let item = opts.items[i] || opts.items;
              if ("dataset" in item) {
                items.push({ element: item, i, ...item.dataset });
              } else {
                item.i = i;
                items.push(item);
                item = item.element;
              }
              if (opts.el && opts.el === item) {
                $$invalidate(4, position = i);
              }
            }
          };
          const close = () => {
            opts.onClose?.(container.el, activeItem);
            closing.set(true);
            $$invalidate(0, items = null);
            focusTrigger?.focus({ preventScroll: true });
          };
          const prev = () => setPosition(position - 1);
          const next = () => setPosition(position + 1);
          const setPosition = (index) => {
            movement = index - position;
            $$invalidate(4, position = getNextPosition(index));
          };
          const getNextPosition = (index) => (index + items.length) % items.length;
          const onKeydown = (e) => {
            const { key, shiftKey } = e;
            if (key === "Escape") {
              !opts.noClose && close();
            } else if (key === "ArrowRight") {
              next();
            } else if (key === "ArrowLeft") {
              prev();
            } else if (key === "Tab") {
              const { activeElement } = document;
              if (shiftKey || !activeElement.controls) {
                e.preventDefault();
                const { focusWrap = container.el } = opts;
                const tabbable = [...focusWrap.querySelectorAll("*")].filter((node) => node.tabIndex >= 0);
                let index = tabbable.indexOf(activeElement);
                index += tabbable.length + (shiftKey ? -1 : 1);
                tabbable[index % tabbable.length].focus();
              }
            }
          };
          const calculateDimensions = ({ width = 1920, height = 1080 }) => {
            const { scale = 0.99 } = opts;
            const ratio = Math.min(1, container.w / width * scale, container.h / height * scale);
            return [Math.round(width * ratio), Math.round(height * ratio)];
          };
          const preloadNext = () => {
            if (items) {
              const nextItem = items[getNextPosition(position + 1)];
              const prevItem = items[getNextPosition(position - 1)];
              !nextItem.preload && loadImage(nextItem);
              !prevItem.preload && loadImage(prevItem);
            }
          };
          const loadImage = (item) => {
            if (item.img) {
              const image = document.createElement("img");
              image.sizes = opts.sizes || `${calculateDimensions(item)[0]}px`;
              image.srcset = item.img;
              item.preload = true;
              return image.decode().catch((error) => {
              });
            }
          };
          const mediaTransition = (node, isEntering) => {
            if (!isOpen || !items) {
              $$invalidate(18, isOpen = isEntering);
              return opts.intro ? fly(node, { y: isEntering ? 10 : -10 }) : scaleIn(node);
            }
            return fly(node, {
              x: (movement > 0 ? 20 : -20) * (isEntering ? 1 : -1),
              duration: 250
            });
          };
          const scaleIn = (node) => {
            let dimensions;
            if (activeItemIsHtml()) {
              const bpItem = node.firstChild.firstChild;
              dimensions = [bpItem.clientWidth, bpItem.clientHeight];
            } else {
              dimensions = calculateDimensions(activeItem);
            }
            const rect = (activeItem.element || focusTrigger).getBoundingClientRect();
            const leftOffset = rect.left - (container.w - rect.width) / 2;
            const centerTop = rect.top - (container.h - rect.height) / 2;
            const scaleWidth = rect.width / dimensions[0];
            const scaleHeight = rect.height / dimensions[1];
            return {
              duration: 480,
              easing: cubicOut,
              css: (t, u) => {
                return `transform:translate3d(${leftOffset * u}px, ${centerTop * u}px, 0) scale3d(${scaleWidth + t * (1 - scaleWidth)}, ${scaleHeight + t * (1 - scaleHeight)}, 1)`;
              }
            };
          };
          const getChildProps = () => ({
            activeItem,
            calculateDimensions,
            loadImage,
            preloadNext,
            opts,
            prev,
            next,
            close,
            setResizeFunc,
            zoomed,
            container
          });
          const containerActions = (node) => {
            $$invalidate(19, container.el = node, container);
            let roActive;
            opts.onOpen?.(container.el, activeItem);
            if (!inline) {
              globalThis.addEventListener("keydown", onKeydown);
            }
            const ro = new ResizeObserver((entries) => {
              if (roActive) {
                $$invalidate(19, container.w = entries[0].contentRect.width, container);
                $$invalidate(19, container.h = entries[0].contentRect.height, container);
                $$invalidate(7, smallScreen = container.w < 769);
                if (!activeItemIsHtml()) {
                  resizeFunc?.();
                }
                opts.onResize?.(container.el, activeItem);
              }
              roActive = true;
            });
            ro.observe(node);
            return {
              destroy() {
                ro.disconnect();
                globalThis.removeEventListener("keydown", onKeydown);
                closing.set(false);
                html.classList.remove("bp-lock");
                opts.onClosed?.();
              }
            };
          };
          const pointerdown_handler = (e) => $$invalidate(9, clickedEl = e.target);
          const pointerup_handler = function(e) {
            if (e.button !== 2 && e.target === this && clickedEl === this) {
              !opts.noClose && close();
            }
          };
          $$self.$$set = ($$props2) => {
            if ("items" in $$props2)
              $$invalidate(0, items = $$props2.items);
            if ("target" in $$props2)
              $$invalidate(15, target = $$props2.target);
          };
          $$self.$$.update = () => {
            if ($$self.$$.dirty[0] & /*items, position, isOpen, opts, container, activeItem*/
            786545) {
              if (items) {
                $$invalidate(6, activeItem = items[position]);
                if (isOpen) {
                  opts.onUpdate?.(container.el, activeItem);
                }
              }
            }
          };
          return [
            items,
            close,
            prev,
            next,
            position,
            opts,
            activeItem,
            smallScreen,
            inline,
            clickedEl,
            $zoomed,
            zoomed,
            mediaTransition,
            getChildProps,
            containerActions,
            target,
            open,
            setPosition,
            isOpen,
            container,
            pointerdown_handler,
            pointerup_handler
          ];
        }
        class Bigger_picture extends SvelteComponent {
          constructor(options) {
            super();
            init(
              this,
              options,
              instance,
              create_fragment,
              not_equal,
              {
                items: 0,
                target: 15,
                open: 16,
                close: 1,
                prev: 2,
                next: 3,
                setPosition: 17
              },
              null,
              [-1, -1]
            );
          }
          get items() {
            return this.$$.ctx[0];
          }
          get target() {
            return this.$$.ctx[15];
          }
          get open() {
            return this.$$.ctx[16];
          }
          get close() {
            return this.$$.ctx[1];
          }
          get prev() {
            return this.$$.ctx[2];
          }
          get next() {
            return this.$$.ctx[3];
          }
          get setPosition() {
            return this.$$.ctx[17];
          }
        }
        function biggerPicture(options) {
          return new Bigger_picture({
            ...options,
            props: options
          });
        }
        return biggerPicture;
      });
    }
  });

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/base@v0.6.1/assets/hb/modules/base/js/responsive-table.ts
  (() => {
    "use strict";
    document.querySelectorAll("table").forEach((table) => {
      const wrapper = document.createElement("div");
      wrapper.className = "table-responsive";
      wrapper.appendChild(table.cloneNode(true));
      table.parentNode?.replaceChild(wrapper, table);
    });
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dropdown.js
  var Popper = __toESM(require_popper());

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/data.js
  var elementMap = /* @__PURE__ */ new Map();
  var data_default = {
    set(element, key, instance) {
      if (!elementMap.has(element)) {
        elementMap.set(element, /* @__PURE__ */ new Map());
      }
      const instanceMap = elementMap.get(element);
      if (!instanceMap.has(key) && instanceMap.size !== 0) {
        console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
        return;
      }
      instanceMap.set(key, instance);
    },
    get(element, key) {
      if (elementMap.has(element)) {
        return elementMap.get(element).get(key) || null;
      }
      return null;
    },
    remove(element, key) {
      if (!elementMap.has(element)) {
        return;
      }
      const instanceMap = elementMap.get(element);
      instanceMap.delete(key);
      if (instanceMap.size === 0) {
        elementMap.delete(element);
      }
    }
  };

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/index.js
  var MAX_UID = 1e6;
  var MILLISECONDS_MULTIPLIER = 1e3;
  var TRANSITION_END = "transitionend";
  var parseSelector = (selector) => {
    if (selector && window.CSS && window.CSS.escape) {
      selector = selector.replace(/#([^\s"#']+)/g, (match, id) => `#${CSS.escape(id)}`);
    }
    return selector;
  };
  var toType = (object) => {
    if (object === null || object === void 0) {
      return `${object}`;
    }
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
  };
  var getUID = (prefix) => {
    do {
      prefix += Math.floor(Math.random() * MAX_UID);
    } while (document.getElementById(prefix));
    return prefix;
  };
  var getTransitionDurationFromElement = (element) => {
    if (!element) {
      return 0;
    }
    let { transitionDuration, transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    if (!floatTransitionDuration && !floatTransitionDelay) {
      return 0;
    }
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
  };
  var triggerTransitionEnd = (element) => {
    element.dispatchEvent(new Event(TRANSITION_END));
  };
  var isElement = (object) => {
    if (!object || typeof object !== "object") {
      return false;
    }
    if (typeof object.jquery !== "undefined") {
      object = object[0];
    }
    return typeof object.nodeType !== "undefined";
  };
  var getElement = (object) => {
    if (isElement(object)) {
      return object.jquery ? object[0] : object;
    }
    if (typeof object === "string" && object.length > 0) {
      return document.querySelector(parseSelector(object));
    }
    return null;
  };
  var isVisible = (element) => {
    if (!isElement(element) || element.getClientRects().length === 0) {
      return false;
    }
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) {
      return elementIsVisible;
    }
    if (closedDetails !== element) {
      const summary = element.closest("summary");
      if (summary && summary.parentNode !== closedDetails) {
        return false;
      }
      if (summary === null) {
        return false;
      }
    }
    return elementIsVisible;
  };
  var isDisabled = (element) => {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      return true;
    }
    if (element.classList.contains("disabled")) {
      return true;
    }
    if (typeof element.disabled !== "undefined") {
      return element.disabled;
    }
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
  };
  var findShadowRoot = (element) => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof element.getRootNode === "function") {
      const root = element.getRootNode();
      return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) {
      return element;
    }
    if (!element.parentNode) {
      return null;
    }
    return findShadowRoot(element.parentNode);
  };
  var noop = () => {
  };
  var reflow = (element) => {
    element.offsetHeight;
  };
  var getjQuery = () => {
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) {
      return window.jQuery;
    }
    return null;
  };
  var DOMContentLoadedCallbacks = [];
  var onDOMContentLoaded = (callback) => {
    if (document.readyState === "loading") {
      if (!DOMContentLoadedCallbacks.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const callback2 of DOMContentLoadedCallbacks) {
            callback2();
          }
        });
      }
      DOMContentLoadedCallbacks.push(callback);
    } else {
      callback();
    }
  };
  var isRTL = () => document.documentElement.dir === "rtl";
  var defineJQueryPlugin = (plugin) => {
    onDOMContentLoaded(() => {
      const $ = getjQuery();
      if ($) {
        const name = plugin.NAME;
        const JQUERY_NO_CONFLICT = $.fn[name];
        $.fn[name] = plugin.jQueryInterface;
        $.fn[name].Constructor = plugin;
        $.fn[name].noConflict = () => {
          $.fn[name] = JQUERY_NO_CONFLICT;
          return plugin.jQueryInterface;
        };
      }
    });
  };
  var execute = (possibleCallback, args = [], defaultValue = possibleCallback) => {
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
  };
  var executeAfterTransition = (callback, transitionElement, waitForTransition = true) => {
    if (!waitForTransition) {
      execute(callback);
      return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target }) => {
      if (target !== transitionElement) {
        return;
      }
      called = true;
      transitionElement.removeEventListener(TRANSITION_END, handler);
      execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(() => {
      if (!called) {
        triggerTransitionEnd(transitionElement);
      }
    }, emulatedDuration);
  };
  var getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed) => {
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    if (index === -1) {
      return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    }
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) {
      index = (index + listLength) % listLength;
    }
    return list[Math.max(0, Math.min(index, listLength - 1))];
  };

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/event-handler.js
  var namespaceRegex = /[^.]*(?=\..*)\.|.*/;
  var stripNameRegex = /\..*/;
  var stripUidRegex = /::\d+$/;
  var eventRegistry = {};
  var uidEvent = 1;
  var customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  var nativeEvents = /* @__PURE__ */ new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
  ]);
  function makeEventUid(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
  }
  function getElementEvents(element) {
    const uid = makeEventUid(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
  }
  function bootstrapHandler(element, fn) {
    return function handler(event) {
      hydrateObj(event, { delegateTarget: element });
      if (handler.oneOff) {
        EventHandler.off(element, event.type, fn);
      }
      return fn.apply(element, [event]);
    };
  }
  function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
      const domElements = element.querySelectorAll(selector);
      for (let { target } = event; target && target !== this; target = target.parentNode) {
        for (const domElement of domElements) {
          if (domElement !== target) {
            continue;
          }
          hydrateObj(event, { delegateTarget: target });
          if (handler.oneOff) {
            EventHandler.off(element, event.type, selector, fn);
          }
          return fn.apply(target, [event]);
        }
      }
    };
  }
  function findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event) => event.callable === callable && event.delegationSelector === delegationSelector);
  }
  function normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = getTypeEvent(originalTypeEvent);
    if (!nativeEvents.has(typeEvent)) {
      typeEvent = originalTypeEvent;
    }
    return [isDelegated, callable, typeEvent];
  }
  function addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) {
      return;
    }
    let [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
    if (originalTypeEvent in customEvents) {
      const wrapFunction = (fn2) => {
        return function(event) {
          if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) {
            return fn2.call(this, event);
          }
        };
      };
      callable = wrapFunction(callable);
    }
    const events = getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
      previousFunction.oneOff = previousFunction.oneOff && oneOff;
      return;
    }
    const uid = makeEventUid(callable, originalTypeEvent.replace(namespaceRegex, ""));
    const fn = isDelegated ? bootstrapDelegationHandler(element, handler, callable) : bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
  }
  function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) {
      return;
    }
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
  }
  function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent)) {
      if (handlerKey.includes(namespace)) {
        removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
      }
    }
  }
  function getTypeEvent(event) {
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
  }
  var EventHandler = {
    on(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, false);
    },
    one(element, event, handler, delegationFunction) {
      addHandler(element, event, handler, delegationFunction, true);
    },
    off(element, originalTypeEvent, handler, delegationFunction) {
      if (typeof originalTypeEvent !== "string" || !element) {
        return;
      }
      const [isDelegated, callable, typeEvent] = normalizeParameters(originalTypeEvent, handler, delegationFunction);
      const inNamespace = typeEvent !== originalTypeEvent;
      const events = getElementEvents(element);
      const storeElementEvent = events[typeEvent] || {};
      const isNamespace = originalTypeEvent.startsWith(".");
      if (typeof callable !== "undefined") {
        if (!Object.keys(storeElementEvent).length) {
          return;
        }
        removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
        return;
      }
      if (isNamespace) {
        for (const elementEvent of Object.keys(events)) {
          removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        }
      }
      for (const [keyHandlers, event] of Object.entries(storeElementEvent)) {
        const handlerKey = keyHandlers.replace(stripUidRegex, "");
        if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
          removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
      }
    },
    trigger(element, event, args) {
      if (typeof event !== "string" || !element) {
        return null;
      }
      const $ = getjQuery();
      const typeEvent = getTypeEvent(event);
      const inNamespace = event !== typeEvent;
      let jQueryEvent = null;
      let bubbles = true;
      let nativeDispatch = true;
      let defaultPrevented = false;
      if (inNamespace && $) {
        jQueryEvent = $.Event(event, args);
        $(element).trigger(jQueryEvent);
        bubbles = !jQueryEvent.isPropagationStopped();
        nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
        defaultPrevented = jQueryEvent.isDefaultPrevented();
      }
      const evt = hydrateObj(new Event(event, { bubbles, cancelable: true }), args);
      if (defaultPrevented) {
        evt.preventDefault();
      }
      if (nativeDispatch) {
        element.dispatchEvent(evt);
      }
      if (evt.defaultPrevented && jQueryEvent) {
        jQueryEvent.preventDefault();
      }
      return evt;
    }
  };
  function hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta)) {
      try {
        obj[key] = value;
      } catch {
        Object.defineProperty(obj, key, {
          configurable: true,
          get() {
            return value;
          }
        });
      }
    }
    return obj;
  }
  var event_handler_default = EventHandler;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/manipulator.js
  function normalizeData(value) {
    if (value === "true") {
      return true;
    }
    if (value === "false") {
      return false;
    }
    if (value === Number(value).toString()) {
      return Number(value);
    }
    if (value === "" || value === "null") {
      return null;
    }
    if (typeof value !== "string") {
      return value;
    }
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch {
      return value;
    }
  }
  function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr) => `-${chr.toLowerCase()}`);
  }
  var Manipulator = {
    setDataAttribute(element, key, value) {
      element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute(element, key) {
      element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes(element) {
      if (!element) {
        return {};
      }
      const attributes = {};
      const bsKeys = Object.keys(element.dataset).filter((key) => key.startsWith("bs") && !key.startsWith("bsConfig"));
      for (const key of bsKeys) {
        let pureKey = key.replace(/^bs/, "");
        pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
        attributes[pureKey] = normalizeData(element.dataset[key]);
      }
      return attributes;
    },
    getDataAttribute(element, key) {
      return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    }
  };
  var manipulator_default = Manipulator;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/config.js
  var Config = class {
    // Getters
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      return config;
    }
    _mergeConfigObj(config, element) {
      const jsonConfig = isElement(element) ? manipulator_default.getDataAttribute(element, "config") : {};
      return {
        ...this.constructor.Default,
        ...typeof jsonConfig === "object" ? jsonConfig : {},
        ...isElement(element) ? manipulator_default.getDataAttributes(element) : {},
        ...typeof config === "object" ? config : {}
      };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
      for (const [property, expectedTypes] of Object.entries(configTypes)) {
        const value = config[property];
        const valueType = isElement(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) {
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`
          );
        }
      }
    }
  };
  var config_default = Config;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/base-component.js
  var VERSION = "5.3.3";
  var BaseComponent = class extends config_default {
    constructor(element, config) {
      super();
      element = getElement(element);
      if (!element) {
        return;
      }
      this._element = element;
      this._config = this._getConfig(config);
      data_default.set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
      data_default.remove(this._element, this.constructor.DATA_KEY);
      event_handler_default.off(this._element, this.constructor.EVENT_KEY);
      for (const propertyName of Object.getOwnPropertyNames(this)) {
        this[propertyName] = null;
      }
    }
    _queueCallback(callback, element, isAnimated = true) {
      executeAfterTransition(callback, element, isAnimated);
    }
    _getConfig(config) {
      config = this._mergeConfigObj(config, this._element);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    // Static
    static getInstance(element) {
      return data_default.get(getElement(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
      return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
      return VERSION;
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
      return `${name}${this.EVENT_KEY}`;
    }
  };
  var base_component_default = BaseComponent;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dom/selector-engine.js
  var getSelector = (element) => {
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
      let hrefAttribute = element.getAttribute("href");
      if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) {
        return null;
      }
      if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) {
        hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
      }
      selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel) => parseSelector(sel)).join(",") : null;
  };
  var SelectorEngine = {
    find(selector, element = document.documentElement) {
      return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne(selector, element = document.documentElement) {
      return Element.prototype.querySelector.call(element, selector);
    },
    children(element, selector) {
      return [].concat(...element.children).filter((child) => child.matches(selector));
    },
    parents(element, selector) {
      const parents = [];
      let ancestor = element.parentNode.closest(selector);
      while (ancestor) {
        parents.push(ancestor);
        ancestor = ancestor.parentNode.closest(selector);
      }
      return parents;
    },
    prev(element, selector) {
      let previous = element.previousElementSibling;
      while (previous) {
        if (previous.matches(selector)) {
          return [previous];
        }
        previous = previous.previousElementSibling;
      }
      return [];
    },
    // TODO: this is now unused; remove later along with prev()
    next(element, selector) {
      let next = element.nextElementSibling;
      while (next) {
        if (next.matches(selector)) {
          return [next];
        }
        next = next.nextElementSibling;
      }
      return [];
    },
    focusableChildren(element) {
      const focusables = [
        "a",
        "button",
        "input",
        "textarea",
        "select",
        "details",
        "[tabindex]",
        '[contenteditable="true"]'
      ].map((selector) => `${selector}:not([tabindex^="-"])`).join(",");
      return this.find(focusables, element).filter((el) => !isDisabled(el) && isVisible(el));
    },
    getSelectorFromElement(element) {
      const selector = getSelector(element);
      if (selector) {
        return SelectorEngine.findOne(selector) ? selector : null;
      }
      return null;
    },
    getElementFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector(element) {
      const selector = getSelector(element);
      return selector ? SelectorEngine.find(selector) : [];
    }
  };
  var selector_engine_default = SelectorEngine;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/dropdown.js
  var NAME = "dropdown";
  var DATA_KEY = "bs.dropdown";
  var EVENT_KEY = `.${DATA_KEY}`;
  var DATA_API_KEY = ".data-api";
  var ESCAPE_KEY = "Escape";
  var TAB_KEY = "Tab";
  var ARROW_UP_KEY = "ArrowUp";
  var ARROW_DOWN_KEY = "ArrowDown";
  var RIGHT_MOUSE_BUTTON = 2;
  var EVENT_HIDE = `hide${EVENT_KEY}`;
  var EVENT_HIDDEN = `hidden${EVENT_KEY}`;
  var EVENT_SHOW = `show${EVENT_KEY}`;
  var EVENT_SHOWN = `shown${EVENT_KEY}`;
  var EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
  var EVENT_KEYDOWN_DATA_API = `keydown${EVENT_KEY}${DATA_API_KEY}`;
  var EVENT_KEYUP_DATA_API = `keyup${EVENT_KEY}${DATA_API_KEY}`;
  var CLASS_NAME_SHOW = "show";
  var CLASS_NAME_DROPUP = "dropup";
  var CLASS_NAME_DROPEND = "dropend";
  var CLASS_NAME_DROPSTART = "dropstart";
  var CLASS_NAME_DROPUP_CENTER = "dropup-center";
  var CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
  var SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
  var SELECTOR_DATA_TOGGLE_SHOWN = `${SELECTOR_DATA_TOGGLE}.${CLASS_NAME_SHOW}`;
  var SELECTOR_MENU = ".dropdown-menu";
  var SELECTOR_NAVBAR = ".navbar";
  var SELECTOR_NAVBAR_NAV = ".navbar-nav";
  var SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
  var PLACEMENT_TOP = isRTL() ? "top-end" : "top-start";
  var PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end";
  var PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start";
  var PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end";
  var PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start";
  var PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start";
  var PLACEMENT_TOPCENTER = "top";
  var PLACEMENT_BOTTOMCENTER = "bottom";
  var Default = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  var DefaultType = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  var Dropdown = class _Dropdown extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = selector_engine_default.next(this._element, SELECTOR_MENU)[0] || selector_engine_default.prev(this._element, SELECTOR_MENU)[0] || selector_engine_default.findOne(SELECTOR_MENU, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
      return Default;
    }
    static get DefaultType() {
      return DefaultType;
    }
    static get NAME() {
      return NAME;
    }
    // Public
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (isDisabled(this._element) || this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW, relatedTarget);
      if (showEvent.defaultPrevented) {
        return;
      }
      this._createPopper();
      if ("ontouchstart" in document.documentElement && !this._parent.closest(SELECTOR_NAVBAR_NAV)) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.on(element, "mouseover", noop);
        }
      }
      this._element.focus();
      this._element.setAttribute("aria-expanded", true);
      this._menu.classList.add(CLASS_NAME_SHOW);
      this._element.classList.add(CLASS_NAME_SHOW);
      event_handler_default.trigger(this._element, EVENT_SHOWN, relatedTarget);
    }
    hide() {
      if (isDisabled(this._element) || !this._isShown()) {
        return;
      }
      const relatedTarget = {
        relatedTarget: this._element
      };
      this._completeHide(relatedTarget);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    // Private
    _completeHide(relatedTarget) {
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE, relatedTarget);
      if (hideEvent.defaultPrevented) {
        return;
      }
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.off(element, "mouseover", noop);
        }
      }
      if (this._popper) {
        this._popper.destroy();
      }
      this._menu.classList.remove(CLASS_NAME_SHOW);
      this._element.classList.remove(CLASS_NAME_SHOW);
      this._element.setAttribute("aria-expanded", "false");
      manipulator_default.removeDataAttribute(this._menu, "popper");
      event_handler_default.trigger(this._element, EVENT_HIDDEN, relatedTarget);
    }
    _getConfig(config) {
      config = super._getConfig(config);
      if (typeof config.reference === "object" && !isElement(config.reference) && typeof config.reference.getBoundingClientRect !== "function") {
        throw new TypeError(`${NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      }
      return config;
    }
    _createPopper() {
      if (typeof Popper === "undefined") {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let referenceElement = this._element;
      if (this._config.reference === "parent") {
        referenceElement = this._parent;
      } else if (isElement(this._config.reference)) {
        referenceElement = getElement(this._config.reference);
      } else if (typeof this._config.reference === "object") {
        referenceElement = this._config.reference;
      }
      const popperConfig = this._getPopperConfig();
      this._popper = Popper.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
      return this._menu.classList.contains(CLASS_NAME_SHOW);
    }
    _getPlacement() {
      const parentDropdown = this._parent;
      if (parentDropdown.classList.contains(CLASS_NAME_DROPEND)) {
        return PLACEMENT_RIGHT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPSTART)) {
        return PLACEMENT_LEFT;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP_CENTER)) {
        return PLACEMENT_TOPCENTER;
      }
      if (parentDropdown.classList.contains(CLASS_NAME_DROPDOWN_CENTER)) {
        return PLACEMENT_BOTTOMCENTER;
      }
      const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (parentDropdown.classList.contains(CLASS_NAME_DROPUP)) {
        return isEnd ? PLACEMENT_TOPEND : PLACEMENT_TOP;
      }
      return isEnd ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
      return this._element.closest(SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
      const { offset } = this._config;
      if (typeof offset === "string") {
        return offset.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset === "function") {
        return (popperData) => offset(popperData, this._element);
      }
      return offset;
    }
    _getPopperConfig() {
      const defaultBsPopperConfig = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }
        ]
      };
      if (this._inNavbar || this._config.display === "static") {
        manipulator_default.setDataAttribute(this._menu, "popper", "static");
        defaultBsPopperConfig.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _selectMenuItem({ key, target }) {
      const items = selector_engine_default.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter((element) => isVisible(element));
      if (!items.length) {
        return;
      }
      getNextActiveElement(items, target, key === ARROW_DOWN_KEY, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Dropdown.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
    static clearMenus(event) {
      if (event.button === RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== TAB_KEY) {
        return;
      }
      const openToggles = selector_engine_default.find(SELECTOR_DATA_TOGGLE_SHOWN);
      for (const toggle of openToggles) {
        const context = _Dropdown.getInstance(toggle);
        if (!context || context._config.autoClose === false) {
          continue;
        }
        const composedPath = event.composedPath();
        const isMenuTarget = composedPath.includes(context._menu);
        if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) {
          continue;
        }
        if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) {
          continue;
        }
        const relatedTarget = { relatedTarget: context._element };
        if (event.type === "click") {
          relatedTarget.clickEvent = event;
        }
        context._completeHide(relatedTarget);
      }
    }
    static dataApiKeydownHandler(event) {
      const isInput = /input|textarea/i.test(event.target.tagName);
      const isEscapeEvent = event.key === ESCAPE_KEY;
      const isUpOrDownEvent = [ARROW_UP_KEY, ARROW_DOWN_KEY].includes(event.key);
      if (!isUpOrDownEvent && !isEscapeEvent) {
        return;
      }
      if (isInput && !isEscapeEvent) {
        return;
      }
      event.preventDefault();
      const getToggleButton = this.matches(SELECTOR_DATA_TOGGLE) ? this : selector_engine_default.prev(this, SELECTOR_DATA_TOGGLE)[0] || selector_engine_default.next(this, SELECTOR_DATA_TOGGLE)[0] || selector_engine_default.findOne(SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
      const instance = _Dropdown.getOrCreateInstance(getToggleButton);
      if (isUpOrDownEvent) {
        event.stopPropagation();
        instance.show();
        instance._selectMenuItem(event);
        return;
      }
      if (instance._isShown()) {
        event.stopPropagation();
        instance.hide();
        getToggleButton.focus();
      }
    }
  };
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler);
  event_handler_default.on(document, EVENT_CLICK_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus);
  event_handler_default.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function(event) {
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).toggle();
  });
  defineJQueryPlugin(Dropdown);

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/backdrop.js
  var NAME2 = "backdrop";
  var CLASS_NAME_FADE = "fade";
  var CLASS_NAME_SHOW2 = "show";
  var EVENT_MOUSEDOWN = `mousedown.bs.${NAME2}`;
  var Default2 = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    // if false, we use the backdrop helper without adding any element to the dom
    rootElement: "body"
    // give the choice to place backdrop under different elements
  };
  var DefaultType2 = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  var Backdrop = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isAppended = false;
      this._element = null;
    }
    // Getters
    static get Default() {
      return Default2;
    }
    static get DefaultType() {
      return DefaultType2;
    }
    static get NAME() {
      return NAME2;
    }
    // Public
    show(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._append();
      const element = this._getElement();
      if (this._config.isAnimated) {
        reflow(element);
      }
      element.classList.add(CLASS_NAME_SHOW2);
      this._emulateAnimation(() => {
        execute(callback);
      });
    }
    hide(callback) {
      if (!this._config.isVisible) {
        execute(callback);
        return;
      }
      this._getElement().classList.remove(CLASS_NAME_SHOW2);
      this._emulateAnimation(() => {
        this.dispose();
        execute(callback);
      });
    }
    dispose() {
      if (!this._isAppended) {
        return;
      }
      event_handler_default.off(this._element, EVENT_MOUSEDOWN);
      this._element.remove();
      this._isAppended = false;
    }
    // Private
    _getElement() {
      if (!this._element) {
        const backdrop = document.createElement("div");
        backdrop.className = this._config.className;
        if (this._config.isAnimated) {
          backdrop.classList.add(CLASS_NAME_FADE);
        }
        this._element = backdrop;
      }
      return this._element;
    }
    _configAfterMerge(config) {
      config.rootElement = getElement(config.rootElement);
      return config;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const element = this._getElement();
      this._config.rootElement.append(element);
      event_handler_default.on(element, EVENT_MOUSEDOWN, () => {
        execute(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(callback) {
      executeAfterTransition(callback, this._getElement(), this._config.isAnimated);
    }
  };
  var backdrop_default = Backdrop;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/component-functions.js
  var enableDismissTrigger = (component, method = "hide") => {
    const clickEvent = `click.dismiss${component.EVENT_KEY}`;
    const name = component.NAME;
    event_handler_default.on(document, clickEvent, `[data-bs-dismiss="${name}"]`, function(event) {
      if (["A", "AREA"].includes(this.tagName)) {
        event.preventDefault();
      }
      if (isDisabled(this)) {
        return;
      }
      const target = selector_engine_default.getElementFromSelector(this) || this.closest(`.${name}`);
      const instance = component.getOrCreateInstance(target);
      instance[method]();
    });
  };

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/focustrap.js
  var NAME3 = "focustrap";
  var DATA_KEY2 = "bs.focustrap";
  var EVENT_KEY2 = `.${DATA_KEY2}`;
  var EVENT_FOCUSIN = `focusin${EVENT_KEY2}`;
  var EVENT_KEYDOWN_TAB = `keydown.tab${EVENT_KEY2}`;
  var TAB_KEY2 = "Tab";
  var TAB_NAV_FORWARD = "forward";
  var TAB_NAV_BACKWARD = "backward";
  var Default3 = {
    autofocus: true,
    trapElement: null
    // The element to trap focus inside of
  };
  var DefaultType3 = {
    autofocus: "boolean",
    trapElement: "element"
  };
  var FocusTrap = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    // Getters
    static get Default() {
      return Default3;
    }
    static get DefaultType() {
      return DefaultType3;
    }
    static get NAME() {
      return NAME3;
    }
    // Public
    activate() {
      if (this._isActive) {
        return;
      }
      if (this._config.autofocus) {
        this._config.trapElement.focus();
      }
      event_handler_default.off(document, EVENT_KEY2);
      event_handler_default.on(document, EVENT_FOCUSIN, (event) => this._handleFocusin(event));
      event_handler_default.on(document, EVENT_KEYDOWN_TAB, (event) => this._handleKeydown(event));
      this._isActive = true;
    }
    deactivate() {
      if (!this._isActive) {
        return;
      }
      this._isActive = false;
      event_handler_default.off(document, EVENT_KEY2);
    }
    // Private
    _handleFocusin(event) {
      const { trapElement } = this._config;
      if (event.target === document || event.target === trapElement || trapElement.contains(event.target)) {
        return;
      }
      const elements = selector_engine_default.focusableChildren(trapElement);
      if (elements.length === 0) {
        trapElement.focus();
      } else if (this._lastTabNavDirection === TAB_NAV_BACKWARD) {
        elements[elements.length - 1].focus();
      } else {
        elements[0].focus();
      }
    }
    _handleKeydown(event) {
      if (event.key !== TAB_KEY2) {
        return;
      }
      this._lastTabNavDirection = event.shiftKey ? TAB_NAV_BACKWARD : TAB_NAV_FORWARD;
    }
  };
  var focustrap_default = FocusTrap;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/scrollbar.js
  var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  var SELECTOR_STICKY_CONTENT = ".sticky-top";
  var PROPERTY_PADDING = "padding-right";
  var PROPERTY_MARGIN = "margin-right";
  var ScrollBarHelper = class {
    constructor() {
      this._element = document.body;
    }
    // Public
    getWidth() {
      const documentWidth = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - documentWidth);
    }
    hide() {
      const width = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING, (calculatedValue) => calculatedValue + width);
      this._setElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN, (calculatedValue) => calculatedValue - width);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_FIXED_CONTENT, PROPERTY_PADDING);
      this._resetElementAttributes(SELECTOR_STICKY_CONTENT, PROPERTY_MARGIN);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    // Private
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(selector, styleProperty, callback) {
      const scrollbarWidth = this.getWidth();
      const manipulationCallBack = (element) => {
        if (element !== this._element && window.innerWidth > element.clientWidth + scrollbarWidth) {
          return;
        }
        this._saveInitialAttribute(element, styleProperty);
        const calculatedValue = window.getComputedStyle(element).getPropertyValue(styleProperty);
        element.style.setProperty(styleProperty, `${callback(Number.parseFloat(calculatedValue))}px`);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _saveInitialAttribute(element, styleProperty) {
      const actualValue = element.style.getPropertyValue(styleProperty);
      if (actualValue) {
        manipulator_default.setDataAttribute(element, styleProperty, actualValue);
      }
    }
    _resetElementAttributes(selector, styleProperty) {
      const manipulationCallBack = (element) => {
        const value = manipulator_default.getDataAttribute(element, styleProperty);
        if (value === null) {
          element.style.removeProperty(styleProperty);
          return;
        }
        manipulator_default.removeDataAttribute(element, styleProperty);
        element.style.setProperty(styleProperty, value);
      };
      this._applyManipulationCallback(selector, manipulationCallBack);
    }
    _applyManipulationCallback(selector, callBack) {
      if (isElement(selector)) {
        callBack(selector);
        return;
      }
      for (const sel of selector_engine_default.find(selector, this._element)) {
        callBack(sel);
      }
    }
  };
  var scrollbar_default = ScrollBarHelper;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/offcanvas.js
  var NAME4 = "offcanvas";
  var DATA_KEY3 = "bs.offcanvas";
  var EVENT_KEY3 = `.${DATA_KEY3}`;
  var DATA_API_KEY2 = ".data-api";
  var EVENT_LOAD_DATA_API = `load${EVENT_KEY3}${DATA_API_KEY2}`;
  var ESCAPE_KEY2 = "Escape";
  var CLASS_NAME_SHOW3 = "show";
  var CLASS_NAME_SHOWING = "showing";
  var CLASS_NAME_HIDING = "hiding";
  var CLASS_NAME_BACKDROP = "offcanvas-backdrop";
  var OPEN_SELECTOR = ".offcanvas.show";
  var EVENT_SHOW2 = `show${EVENT_KEY3}`;
  var EVENT_SHOWN2 = `shown${EVENT_KEY3}`;
  var EVENT_HIDE2 = `hide${EVENT_KEY3}`;
  var EVENT_HIDE_PREVENTED = `hidePrevented${EVENT_KEY3}`;
  var EVENT_HIDDEN2 = `hidden${EVENT_KEY3}`;
  var EVENT_RESIZE = `resize${EVENT_KEY3}`;
  var EVENT_CLICK_DATA_API2 = `click${EVENT_KEY3}${DATA_API_KEY2}`;
  var EVENT_KEYDOWN_DISMISS = `keydown.dismiss${EVENT_KEY3}`;
  var SELECTOR_DATA_TOGGLE2 = '[data-bs-toggle="offcanvas"]';
  var Default4 = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  var DefaultType4 = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  var Offcanvas = class _Offcanvas extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    // Getters
    static get Default() {
      return Default4;
    }
    static get DefaultType() {
      return DefaultType4;
    }
    static get NAME() {
      return NAME4;
    }
    // Public
    toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    }
    show(relatedTarget) {
      if (this._isShown) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, EVENT_SHOW2, { relatedTarget });
      if (showEvent.defaultPrevented) {
        return;
      }
      this._isShown = true;
      this._backdrop.show();
      if (!this._config.scroll) {
        new scrollbar_default().hide();
      }
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.classList.add(CLASS_NAME_SHOWING);
      const completeCallBack = () => {
        if (!this._config.scroll || this._config.backdrop) {
          this._focustrap.activate();
        }
        this._element.classList.add(CLASS_NAME_SHOW3);
        this._element.classList.remove(CLASS_NAME_SHOWING);
        event_handler_default.trigger(this._element, EVENT_SHOWN2, { relatedTarget });
      };
      this._queueCallback(completeCallBack, this._element, true);
    }
    hide() {
      if (!this._isShown) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, EVENT_HIDE2);
      if (hideEvent.defaultPrevented) {
        return;
      }
      this._focustrap.deactivate();
      this._element.blur();
      this._isShown = false;
      this._element.classList.add(CLASS_NAME_HIDING);
      this._backdrop.hide();
      const completeCallback = () => {
        this._element.classList.remove(CLASS_NAME_SHOW3, CLASS_NAME_HIDING);
        this._element.removeAttribute("aria-modal");
        this._element.removeAttribute("role");
        if (!this._config.scroll) {
          new scrollbar_default().reset();
        }
        event_handler_default.trigger(this._element, EVENT_HIDDEN2);
      };
      this._queueCallback(completeCallback, this._element, true);
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    // Private
    _initializeBackDrop() {
      const clickCallback = () => {
        if (this._config.backdrop === "static") {
          event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
          return;
        }
        this.hide();
      };
      const isVisible2 = Boolean(this._config.backdrop);
      return new backdrop_default({
        className: CLASS_NAME_BACKDROP,
        isVisible: isVisible2,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: isVisible2 ? clickCallback : null
      });
    }
    _initializeFocusTrap() {
      return new focustrap_default({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      event_handler_default.on(this._element, EVENT_KEYDOWN_DISMISS, (event) => {
        if (event.key !== ESCAPE_KEY2) {
          return;
        }
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        event_handler_default.trigger(this._element, EVENT_HIDE_PREVENTED);
      });
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Offcanvas.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config](this);
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API2, SELECTOR_DATA_TOGGLE2, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    event_handler_default.one(target, EVENT_HIDDEN2, () => {
      if (isVisible(this)) {
        this.focus();
      }
    });
    const alreadyOpen = selector_engine_default.findOne(OPEN_SELECTOR);
    if (alreadyOpen && alreadyOpen !== target) {
      Offcanvas.getInstance(alreadyOpen).hide();
    }
    const data = Offcanvas.getOrCreateInstance(target);
    data.toggle(this);
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const selector of selector_engine_default.find(OPEN_SELECTOR)) {
      Offcanvas.getOrCreateInstance(selector).show();
    }
  });
  event_handler_default.on(window, EVENT_RESIZE, () => {
    for (const element of selector_engine_default.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(element).position !== "fixed") {
        Offcanvas.getOrCreateInstance(element).hide();
      }
    }
  });
  enableDismissTrigger(Offcanvas);
  defineJQueryPlugin(Offcanvas);

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/header@v0.14.6/assets/hb/modules/header/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const header2 = document.querySelector(".hb-header");
      const nav = header2.querySelector(".hb-header-nav");
      if (!header2) {
        return;
      }
      const activeMenu = (menu) => {
        menu.classList.add("active");
        menu.setAttribute("aria-current", "page");
        menu.parentElement?.classList.add("active");
        const parent = menu.closest(".hb-header-menu");
        parent?.classList.add("active");
        parent?.querySelector(".nav-link:first-child")?.classList.add("active");
      };
      const isMenuParent = (parent) => {
        const href = parent.getAttribute("href") ?? "";
        return window.location.href.indexOf(href) !== -1 || window.location.pathname.indexOf(href) !== -1;
      };
      const menus = nav.querySelectorAll(`a[href="${window.location.href}"], a[href="${window.location.pathname}"]`);
      if (menus.length > 0) {
        menus.forEach((menu) => {
          activeMenu(menu);
        });
      } else {
        let foundParent = false;
        const submenus = Array.from(document.querySelectorAll("a.hb-header-submenu"));
        for (let menu of submenus) {
          if (isMenuParent(menu)) {
            activeMenu(menu);
            foundParent = true;
            break;
          }
        }
        if (!foundParent) {
          for (let menu of Array.from(nav.querySelectorAll("a.nav-link"))) {
            if (isMenuParent(menu)) {
              activeMenu(menu);
              break;
            }
          }
        }
      }
      const shadow = () => {
        nav.classList.add("shadow-sm");
      };
      const removeShadow = () => {
        nav.classList.contains("shadow-sm") && nav.classList.remove("shadow-sm");
      };
      const show = () => {
        nav.style.removeProperty("opacity");
        nav.style.removeProperty("z-index");
      };
      const hide = () => {
        nav.style.opacity = "0";
        nav.style.zIndex = "0";
      };
      let h = 0;
      const threshold = 20;
      if (document.documentElement.scrollTop !== 0) {
        header2.classList.add("scrolling");
      }
      const isMobile = () => {
        return window.innerWidth < 576;
      };
      window.addEventListener("resize", () => {
        if (!isMobile()) {
          show();
        }
      });
      window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop === 0) {
          header2.classList.remove("scrolling");
          removeShadow();
        } else {
          header2.classList.add("scrolling");
          shadow();
        }
        if (isMobile() && Math.abs(document.documentElement.scrollTop - h) > threshold) {
          document.documentElement.scrollTop > h ? hide() : show();
          h = document.documentElement.scrollTop;
        }
      });
    });
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/swipe.js
  var NAME5 = "swipe";
  var EVENT_KEY4 = ".bs.swipe";
  var EVENT_TOUCHSTART = `touchstart${EVENT_KEY4}`;
  var EVENT_TOUCHMOVE = `touchmove${EVENT_KEY4}`;
  var EVENT_TOUCHEND = `touchend${EVENT_KEY4}`;
  var EVENT_POINTERDOWN = `pointerdown${EVENT_KEY4}`;
  var EVENT_POINTERUP = `pointerup${EVENT_KEY4}`;
  var POINTER_TYPE_TOUCH = "touch";
  var POINTER_TYPE_PEN = "pen";
  var CLASS_NAME_POINTER_EVENT = "pointer-event";
  var SWIPE_THRESHOLD = 40;
  var Default5 = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  var DefaultType5 = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  var Swipe = class _Swipe extends config_default {
    constructor(element, config) {
      super();
      this._element = element;
      if (!element || !_Swipe.isSupported()) {
        return;
      }
      this._config = this._getConfig(config);
      this._deltaX = 0;
      this._supportPointerEvents = Boolean(window.PointerEvent);
      this._initEvents();
    }
    // Getters
    static get Default() {
      return Default5;
    }
    static get DefaultType() {
      return DefaultType5;
    }
    static get NAME() {
      return NAME5;
    }
    // Public
    dispose() {
      event_handler_default.off(this._element, EVENT_KEY4);
    }
    // Private
    _start(event) {
      if (!this._supportPointerEvents) {
        this._deltaX = event.touches[0].clientX;
        return;
      }
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX;
      }
    }
    _end(event) {
      if (this._eventIsPointerPenTouch(event)) {
        this._deltaX = event.clientX - this._deltaX;
      }
      this._handleSwipe();
      execute(this._config.endCallback);
    }
    _move(event) {
      this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const absDeltaX = Math.abs(this._deltaX);
      if (absDeltaX <= SWIPE_THRESHOLD) {
        return;
      }
      const direction = absDeltaX / this._deltaX;
      this._deltaX = 0;
      if (!direction) {
        return;
      }
      execute(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        event_handler_default.on(this._element, EVENT_POINTERDOWN, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_POINTERUP, (event) => this._end(event));
        this._element.classList.add(CLASS_NAME_POINTER_EVENT);
      } else {
        event_handler_default.on(this._element, EVENT_TOUCHSTART, (event) => this._start(event));
        event_handler_default.on(this._element, EVENT_TOUCHMOVE, (event) => this._move(event));
        event_handler_default.on(this._element, EVENT_TOUCHEND, (event) => this._end(event));
      }
    }
    _eventIsPointerPenTouch(event) {
      return this._supportPointerEvents && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  };
  var swipe_default = Swipe;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/carousel.js
  var NAME6 = "carousel";
  var DATA_KEY4 = "bs.carousel";
  var EVENT_KEY5 = `.${DATA_KEY4}`;
  var DATA_API_KEY3 = ".data-api";
  var ARROW_LEFT_KEY = "ArrowLeft";
  var ARROW_RIGHT_KEY = "ArrowRight";
  var TOUCHEVENT_COMPAT_WAIT = 500;
  var ORDER_NEXT = "next";
  var ORDER_PREV = "prev";
  var DIRECTION_LEFT = "left";
  var DIRECTION_RIGHT = "right";
  var EVENT_SLIDE = `slide${EVENT_KEY5}`;
  var EVENT_SLID = `slid${EVENT_KEY5}`;
  var EVENT_KEYDOWN = `keydown${EVENT_KEY5}`;
  var EVENT_MOUSEENTER = `mouseenter${EVENT_KEY5}`;
  var EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY5}`;
  var EVENT_DRAG_START = `dragstart${EVENT_KEY5}`;
  var EVENT_LOAD_DATA_API2 = `load${EVENT_KEY5}${DATA_API_KEY3}`;
  var EVENT_CLICK_DATA_API3 = `click${EVENT_KEY5}${DATA_API_KEY3}`;
  var CLASS_NAME_CAROUSEL = "carousel";
  var CLASS_NAME_ACTIVE = "active";
  var CLASS_NAME_SLIDE = "slide";
  var CLASS_NAME_END = "carousel-item-end";
  var CLASS_NAME_START = "carousel-item-start";
  var CLASS_NAME_NEXT = "carousel-item-next";
  var CLASS_NAME_PREV = "carousel-item-prev";
  var SELECTOR_ACTIVE = ".active";
  var SELECTOR_ITEM = ".carousel-item";
  var SELECTOR_ACTIVE_ITEM = SELECTOR_ACTIVE + SELECTOR_ITEM;
  var SELECTOR_ITEM_IMG = ".carousel-item img";
  var SELECTOR_INDICATORS = ".carousel-indicators";
  var SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
  var SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
  var KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
  };
  var Default6 = {
    interval: 5e3,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  var DefaultType6 = {
    interval: "(number|boolean)",
    // TODO:v6 remove boolean support
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  var Carousel = class _Carousel extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = selector_engine_default.findOne(SELECTOR_INDICATORS, this._element);
      this._addEventListeners();
      if (this._config.ride === CLASS_NAME_CAROUSEL) {
        this.cycle();
      }
    }
    // Getters
    static get Default() {
      return Default6;
    }
    static get DefaultType() {
      return DefaultType6;
    }
    static get NAME() {
      return NAME6;
    }
    // Public
    next() {
      this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
      if (!document.hidden && isVisible(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide(ORDER_PREV);
    }
    pause() {
      if (this._isSliding) {
        triggerTransitionEnd(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (!this._config.ride) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.cycle());
        return;
      }
      this.cycle();
    }
    to(index) {
      const items = this._getItems();
      if (index > items.length - 1 || index < 0) {
        return;
      }
      if (this._isSliding) {
        event_handler_default.one(this._element, EVENT_SLID, () => this.to(index));
        return;
      }
      const activeIndex = this._getItemIndex(this._getActive());
      if (activeIndex === index) {
        return;
      }
      const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
      this._slide(order, items[index]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.defaultInterval = config.interval;
      return config;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        event_handler_default.on(this._element, EVENT_KEYDOWN, (event) => this._keydown(event));
      }
      if (this._config.pause === "hover") {
        event_handler_default.on(this._element, EVENT_MOUSEENTER, () => this.pause());
        event_handler_default.on(this._element, EVENT_MOUSELEAVE, () => this._maybeEnableCycle());
      }
      if (this._config.touch && swipe_default.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const img of selector_engine_default.find(SELECTOR_ITEM_IMG, this._element)) {
        event_handler_default.on(img, EVENT_DRAG_START, (event) => event.preventDefault());
      }
      const endCallBack = () => {
        if (this._config.pause !== "hover") {
          return;
        }
        this.pause();
        if (this.touchTimeout) {
          clearTimeout(this.touchTimeout);
        }
        this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
      };
      const swipeConfig = {
        leftCallback: () => this._slide(this._directionToOrder(DIRECTION_LEFT)),
        rightCallback: () => this._slide(this._directionToOrder(DIRECTION_RIGHT)),
        endCallback: endCallBack
      };
      this._swipeHelper = new swipe_default(this._element, swipeConfig);
    }
    _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }
      const direction = KEY_TO_DIRECTION[event.key];
      if (direction) {
        event.preventDefault();
        this._slide(this._directionToOrder(direction));
      }
    }
    _getItemIndex(element) {
      return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
      if (!this._indicatorsElement) {
        return;
      }
      const activeIndicator = selector_engine_default.findOne(SELECTOR_ACTIVE, this._indicatorsElement);
      activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
      activeIndicator.removeAttribute("aria-current");
      const newActiveIndicator = selector_engine_default.findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
      if (newActiveIndicator) {
        newActiveIndicator.classList.add(CLASS_NAME_ACTIVE);
        newActiveIndicator.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const element = this._activeElement || this._getActive();
      if (!element) {
        return;
      }
      const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
      this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
      if (this._isSliding) {
        return;
      }
      const activeElement = this._getActive();
      const isNext = order === ORDER_NEXT;
      const nextElement = element || getNextActiveElement(this._getItems(), activeElement, isNext, this._config.wrap);
      if (nextElement === activeElement) {
        return;
      }
      const nextElementIndex = this._getItemIndex(nextElement);
      const triggerEvent = (eventName) => {
        return event_handler_default.trigger(this._element, eventName, {
          relatedTarget: nextElement,
          direction: this._orderToDirection(order),
          from: this._getItemIndex(activeElement),
          to: nextElementIndex
        });
      };
      const slideEvent = triggerEvent(EVENT_SLIDE);
      if (slideEvent.defaultPrevented) {
        return;
      }
      if (!activeElement || !nextElement) {
        return;
      }
      const isCycling = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(nextElementIndex);
      this._activeElement = nextElement;
      const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
      const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
      nextElement.classList.add(orderClassName);
      reflow(nextElement);
      activeElement.classList.add(directionalClassName);
      nextElement.classList.add(directionalClassName);
      const completeCallBack = () => {
        nextElement.classList.remove(directionalClassName, orderClassName);
        nextElement.classList.add(CLASS_NAME_ACTIVE);
        activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
        this._isSliding = false;
        triggerEvent(EVENT_SLID);
      };
      this._queueCallback(completeCallBack, activeElement, this._isAnimated());
      if (isCycling) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains(CLASS_NAME_SLIDE);
    }
    _getActive() {
      return selector_engine_default.findOne(SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
      return selector_engine_default.find(SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(direction) {
      if (isRTL()) {
        return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
      }
      return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
      if (isRTL()) {
        return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
      }
      return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Carousel.getOrCreateInstance(this, config);
        if (typeof config === "number") {
          data.to(config);
          return;
        }
        if (typeof config === "string") {
          if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API3, SELECTOR_DATA_SLIDE, function(event) {
    const target = selector_engine_default.getElementFromSelector(this);
    if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) {
      return;
    }
    event.preventDefault();
    const carousel = Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
      carousel.to(slideIndex);
      carousel._maybeEnableCycle();
      return;
    }
    if (manipulator_default.getDataAttribute(this, "slide") === "next") {
      carousel.next();
      carousel._maybeEnableCycle();
      return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API2, () => {
    const carousels = selector_engine_default.find(SELECTOR_DATA_RIDE);
    for (const carousel of carousels) {
      Carousel.getOrCreateInstance(carousel);
    }
  });
  defineJQueryPlugin(Carousel);
  var carousel_default = Carousel;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/carousel@v0.2.7/assets/hb/modules/carousel/js/index.ts
  (() => {
    document.querySelectorAll(".carousel").forEach((el) => {
      new carousel_default(el);
    });
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/gallery@v0.13.1/assets/hb/modules/gallery/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const loaded = (img) => {
        img.classList.remove("loading");
      };
      const images = document.querySelectorAll(".hb-gallery-album-items img");
      for (const img of images) {
        if (img.complete) {
          loaded(img);
        } else {
          img.addEventListener("load", () => {
            loaded(img);
          });
        }
      }
    });
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tooltip.js
  var Popper2 = __toESM(require_popper());

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/sanitizer.js
  var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
  var DefaultAllowlist = {
    // Global attributes allowed on any supplied element below.
    "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  var uriAttributes = /* @__PURE__ */ new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
  ]);
  var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
  var allowedAttribute = (attribute, allowedAttributeList) => {
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
      if (uriAttributes.has(attributeName)) {
        return Boolean(SAFE_URL_PATTERN.test(attribute.nodeValue));
      }
      return true;
    }
    return allowedAttributeList.filter((attributeRegex) => attributeRegex instanceof RegExp).some((regex) => regex.test(attributeName));
  };
  function sanitizeHtml(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) {
      return unsafeHtml;
    }
    if (sanitizeFunction && typeof sanitizeFunction === "function") {
      return sanitizeFunction(unsafeHtml);
    }
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements) {
      const elementName = element.nodeName.toLowerCase();
      if (!Object.keys(allowList).includes(elementName)) {
        element.remove();
        continue;
      }
      const attributeList = [].concat(...element.attributes);
      const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
      for (const attribute of attributeList) {
        if (!allowedAttribute(attribute, allowedAttributes)) {
          element.removeAttribute(attribute.nodeName);
        }
      }
    }
    return createdDocument.body.innerHTML;
  }

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/util/template-factory.js
  var NAME7 = "TemplateFactory";
  var Default7 = {
    allowList: DefaultAllowlist,
    content: {},
    // { selector : text ,  selector2 : text2 , }
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  var DefaultType7 = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  var DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  var TemplateFactory = class extends config_default {
    constructor(config) {
      super();
      this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
      return Default7;
    }
    static get DefaultType() {
      return DefaultType7;
    }
    static get NAME() {
      return NAME7;
    }
    // Public
    getContent() {
      return Object.values(this._config.content).map((config) => this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(content) {
      this._checkContent(content);
      this._config.content = { ...this._config.content, ...content };
      return this;
    }
    toHtml() {
      const templateWrapper = document.createElement("div");
      templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
      for (const [selector, text] of Object.entries(this._config.content)) {
        this._setContent(templateWrapper, text, selector);
      }
      const template = templateWrapper.children[0];
      const extraClass = this._resolvePossibleFunction(this._config.extraClass);
      if (extraClass) {
        template.classList.add(...extraClass.split(" "));
      }
      return template;
    }
    // Private
    _typeCheckConfig(config) {
      super._typeCheckConfig(config);
      this._checkContent(config.content);
    }
    _checkContent(arg) {
      for (const [selector, content] of Object.entries(arg)) {
        super._typeCheckConfig({ selector, entry: content }, DefaultContentType);
      }
    }
    _setContent(template, content, selector) {
      const templateElement = selector_engine_default.findOne(selector, template);
      if (!templateElement) {
        return;
      }
      content = this._resolvePossibleFunction(content);
      if (!content) {
        templateElement.remove();
        return;
      }
      if (isElement(content)) {
        this._putElementInTemplate(getElement(content), templateElement);
        return;
      }
      if (this._config.html) {
        templateElement.innerHTML = this._maybeSanitize(content);
        return;
      }
      templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
      return this._config.sanitize ? sanitizeHtml(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this]);
    }
    _putElementInTemplate(element, templateElement) {
      if (this._config.html) {
        templateElement.innerHTML = "";
        templateElement.append(element);
        return;
      }
      templateElement.textContent = element.textContent;
    }
  };
  var template_factory_default = TemplateFactory;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tooltip.js
  var NAME8 = "tooltip";
  var DISALLOWED_ATTRIBUTES = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]);
  var CLASS_NAME_FADE2 = "fade";
  var CLASS_NAME_MODAL = "modal";
  var CLASS_NAME_SHOW4 = "show";
  var SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
  var SELECTOR_MODAL = `.${CLASS_NAME_MODAL}`;
  var EVENT_MODAL_HIDE = "hide.bs.modal";
  var TRIGGER_HOVER = "hover";
  var TRIGGER_FOCUS = "focus";
  var TRIGGER_CLICK = "click";
  var TRIGGER_MANUAL = "manual";
  var EVENT_HIDE3 = "hide";
  var EVENT_HIDDEN3 = "hidden";
  var EVENT_SHOW3 = "show";
  var EVENT_SHOWN3 = "shown";
  var EVENT_INSERTED = "inserted";
  var EVENT_CLICK = "click";
  var EVENT_FOCUSIN2 = "focusin";
  var EVENT_FOCUSOUT = "focusout";
  var EVENT_MOUSEENTER2 = "mouseenter";
  var EVENT_MOUSELEAVE2 = "mouseleave";
  var AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: isRTL() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: isRTL() ? "right" : "left"
  };
  var Default8 = {
    allowList: DefaultAllowlist,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
  };
  var DefaultType8 = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  var Tooltip = class _Tooltip extends base_component_default {
    constructor(element, config) {
      if (typeof Popper2 === "undefined") {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(element, config);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    // Getters
    static get Default() {
      return Default8;
    }
    static get DefaultType() {
      return DefaultType8;
    }
    static get NAME() {
      return NAME8;
    }
    // Public
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (!this._isEnabled) {
        return;
      }
      this._activeTrigger.click = !this._activeTrigger.click;
      if (this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
    dispose() {
      clearTimeout(this._timeout);
      event_handler_default.off(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!(this._isWithContent() && this._isEnabled)) {
        return;
      }
      const showEvent = event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_SHOW3));
      const shadowRoot = findShadowRoot(this._element);
      const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
      if (showEvent.defaultPrevented || !isInTheDom) {
        return;
      }
      this._disposePopper();
      const tip = this._getTipElement();
      this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
      const { container } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        container.append(tip);
        event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_INSERTED));
      }
      this._popper = this._createPopper(tip);
      tip.classList.add(CLASS_NAME_SHOW4);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.on(element, "mouseover", noop);
        }
      }
      const complete = () => {
        event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_SHOWN3));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
      if (!this._isShown()) {
        return;
      }
      const hideEvent = event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_HIDE3));
      if (hideEvent.defaultPrevented) {
        return;
      }
      const tip = this._getTipElement();
      tip.classList.remove(CLASS_NAME_SHOW4);
      if ("ontouchstart" in document.documentElement) {
        for (const element of [].concat(...document.body.children)) {
          event_handler_default.off(element, "mouseover", noop);
        }
      }
      this._activeTrigger[TRIGGER_CLICK] = false;
      this._activeTrigger[TRIGGER_FOCUS] = false;
      this._activeTrigger[TRIGGER_HOVER] = false;
      this._isHovered = null;
      const complete = () => {
        if (this._isWithActiveTrigger()) {
          return;
        }
        if (!this._isHovered) {
          this._disposePopper();
        }
        this._element.removeAttribute("aria-describedby");
        event_handler_default.trigger(this._element, this.constructor.eventName(EVENT_HIDDEN3));
      };
      this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    // Protected
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      if (!this.tip) {
        this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
      }
      return this.tip;
    }
    _createTipElement(content) {
      const tip = this._getTemplateFactory(content).toHtml();
      if (!tip) {
        return null;
      }
      tip.classList.remove(CLASS_NAME_FADE2, CLASS_NAME_SHOW4);
      tip.classList.add(`bs-${this.constructor.NAME}-auto`);
      const tipId = getUID(this.constructor.NAME).toString();
      tip.setAttribute("id", tipId);
      if (this._isAnimated()) {
        tip.classList.add(CLASS_NAME_FADE2);
      }
      return tip;
    }
    setContent(content) {
      this._newContent = content;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(content) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(content);
      } else {
        this._templateFactory = new template_factory_default({
          ...this._config,
          // the `content` var has to be after `this._config`
          // to override config.content in case of popover
          content,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        [SELECTOR_TOOLTIP_INNER]: this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
      return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(CLASS_NAME_FADE2);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(CLASS_NAME_SHOW4);
    }
    _createPopper(tip) {
      const placement = execute(this._config.placement, [this, tip, this._element]);
      const attachment = AttachmentMap[placement.toUpperCase()];
      return Popper2.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
      const { offset } = this._config;
      if (typeof offset === "string") {
        return offset.split(",").map((value) => Number.parseInt(value, 10));
      }
      if (typeof offset === "function") {
        return (popperData) => offset(popperData, this._element);
      }
      return offset;
    }
    _resolvePossibleFunction(arg) {
      return execute(arg, [this._element]);
    }
    _getPopperConfig(attachment) {
      const defaultBsPopperConfig = {
        placement: attachment,
        modifiers: [
          {
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          },
          {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          },
          {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          },
          {
            name: "arrow",
            options: {
              element: `.${this.constructor.NAME}-arrow`
            }
          },
          {
            name: "preSetPlacement",
            enabled: true,
            phase: "beforeMain",
            fn: (data) => {
              this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
            }
          }
        ]
      };
      return {
        ...defaultBsPopperConfig,
        ...execute(this._config.popperConfig, [defaultBsPopperConfig])
      };
    }
    _setListeners() {
      const triggers = this._config.trigger.split(" ");
      for (const trigger of triggers) {
        if (trigger === "click") {
          event_handler_default.on(this._element, this.constructor.eventName(EVENT_CLICK), this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context.toggle();
          });
        } else if (trigger !== TRIGGER_MANUAL) {
          const eventIn = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSEENTER2) : this.constructor.eventName(EVENT_FOCUSIN2);
          const eventOut = trigger === TRIGGER_HOVER ? this.constructor.eventName(EVENT_MOUSELEAVE2) : this.constructor.eventName(EVENT_FOCUSOUT);
          event_handler_default.on(this._element, eventIn, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusin" ? TRIGGER_FOCUS : TRIGGER_HOVER] = true;
            context._enter();
          });
          event_handler_default.on(this._element, eventOut, this._config.selector, (event) => {
            const context = this._initializeOnDelegatedTarget(event);
            context._activeTrigger[event.type === "focusout" ? TRIGGER_FOCUS : TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
            context._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      event_handler_default.on(this._element.closest(SELECTOR_MODAL), EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
      const title = this._element.getAttribute("title");
      if (!title) {
        return;
      }
      if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
        this._element.setAttribute("aria-label", title);
      }
      this._element.setAttribute("data-bs-original-title", title);
      this._element.removeAttribute("title");
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
        return;
      }
      this._isHovered = true;
      this._setTimeout(() => {
        if (this._isHovered) {
          this.show();
        }
      }, this._config.delay.show);
    }
    _leave() {
      if (this._isWithActiveTrigger()) {
        return;
      }
      this._isHovered = false;
      this._setTimeout(() => {
        if (!this._isHovered) {
          this.hide();
        }
      }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
      const dataAttributes = manipulator_default.getDataAttributes(this._element);
      for (const dataAttribute of Object.keys(dataAttributes)) {
        if (DISALLOWED_ATTRIBUTES.has(dataAttribute)) {
          delete dataAttributes[dataAttribute];
        }
      }
      config = {
        ...dataAttributes,
        ...typeof config === "object" && config ? config : {}
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);
      this._typeCheckConfig(config);
      return config;
    }
    _configAfterMerge(config) {
      config.container = config.container === false ? document.body : getElement(config.container);
      if (typeof config.delay === "number") {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }
      if (typeof config.title === "number") {
        config.title = config.title.toString();
      }
      if (typeof config.content === "number") {
        config.content = config.content.toString();
      }
      return config;
    }
    _getDelegateConfig() {
      const config = {};
      for (const [key, value] of Object.entries(this._config)) {
        if (this.constructor.Default[key] !== value) {
          config[key] = value;
        }
      }
      config.selector = false;
      config.trigger = "manual";
      return config;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tooltip.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (typeof data[config] === "undefined") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  defineJQueryPlugin(Tooltip);
  var tooltip_default = Tooltip;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/bs-tooltip@v0.1.1/assets/hb/modules/bs-tooltip/js/index.ts
  (() => {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
      new tooltip_default(el);
    });
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/slide@v0.4.0/assets/hb/modules/slide/js/index.ts
  (() => {
    "use strict";
    let scrolling = false;
    const scroll = (element, dir) => {
      if (scrolling) {
        return;
      }
      scrolling = true;
      const inner = element.parentElement?.querySelector(".slide-inner");
      const step = inner.offsetWidth;
      let left = 0;
      if (dir === "left") {
        left = inner.scrollLeft - step;
      } else {
        left = Math.min(inner.scrollWidth - inner.clientWidth, inner.scrollLeft + step);
      }
      if (left <= 0) {
        scrolling = false;
        return;
      }
      inner.scroll({
        left
      });
      const checker = setInterval(() => {
        if (left === inner.scrollLeft) {
          scrolling = false;
          clearInterval(checker);
        }
      }, 50);
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll(".slide-control-left").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "left");
        });
      });
      document.querySelectorAll(".slide-control-right").forEach((element) => {
        element.addEventListener("click", () => {
          scroll(element, "right");
        });
      });
      const els = document.querySelectorAll(".slide-inner");
      els.forEach((el) => {
        let startX = 0;
        el.addEventListener("touchstart", (e) => {
          startX = e.touches[0].clientX;
        }, { passive: true });
        el.addEventListener("touchend", (e) => {
          scroll(el, e.changedTouches[0].clientX > startX ? "left" : "right");
        }, { passive: true });
      });
    });
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/giscus@v0.1.1/assets/mods/giscus/js/index.ts
  var Giscus = class {
    setTheme(theme) {
      const frames = document.querySelectorAll(
        "iframe.giscus-frame"
      );
      frames.forEach((frame) => {
        if (!frame.contentWindow) {
          return;
        }
        const endpoint = new URL(frame.src).origin;
        frame.contentWindow.postMessage(
          {
            giscus: {
              setConfig: {
                theme: `${endpoint}/themes/${theme}.css`
              }
            }
          },
          endpoint
        );
      });
    }
  };
  var js_default = Giscus;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/giscus@v0.1.1/assets/hb/modules/giscus/js/index.ts
  (() => {
    "use strict";
    const giscus = new js_default();
    const setTheme = (theme = "") => {
      if (theme === "") {
        const saved = localStorage.getItem("hb-theme");
        theme = !saved || saved === "auto" ? getPreferredTheme() : saved;
      }
      giscus.setTheme(theme);
    };
    const getPreferredTheme = () => {
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    };
    document.addEventListener("DOMContentLoaded", () => {
      document.body.addEventListener("giscus-load", () => {
        const frame = document.querySelector("iframe.giscus-frame.giscus-frame--loading");
        frame?.addEventListener("load", () => {
          setTheme();
        });
      });
      setTimeout(() => {
        setTheme();
      }, 2e3);
      document.addEventListener("hb:theme", (e) => {
        setTheme(e.detail.theme);
      });
    });
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/scrollspy.js
  var NAME9 = "scrollspy";
  var DATA_KEY5 = "bs.scrollspy";
  var EVENT_KEY6 = `.${DATA_KEY5}`;
  var DATA_API_KEY4 = ".data-api";
  var EVENT_ACTIVATE = `activate${EVENT_KEY6}`;
  var EVENT_CLICK2 = `click${EVENT_KEY6}`;
  var EVENT_LOAD_DATA_API3 = `load${EVENT_KEY6}${DATA_API_KEY4}`;
  var CLASS_NAME_DROPDOWN_ITEM = "dropdown-item";
  var CLASS_NAME_ACTIVE2 = "active";
  var SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]';
  var SELECTOR_TARGET_LINKS = "[href]";
  var SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
  var SELECTOR_NAV_LINKS = ".nav-link";
  var SELECTOR_NAV_ITEMS = ".nav-item";
  var SELECTOR_LIST_ITEMS = ".list-group-item";
  var SELECTOR_LINK_ITEMS = `${SELECTOR_NAV_LINKS}, ${SELECTOR_NAV_ITEMS} > ${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`;
  var SELECTOR_DROPDOWN = ".dropdown";
  var SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
  var Default9 = {
    offset: null,
    // TODO: v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  var DefaultType9 = {
    offset: "(number|null)",
    // TODO v6 @deprecated, keep it for backwards compatibility reasons
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  var ScrollSpy = class _ScrollSpy extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    // Getters
    static get Default() {
      return Default9;
    }
    static get DefaultType() {
      return DefaultType9;
    }
    static get NAME() {
      return NAME9;
    }
    // Public
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const section of this._observableSections.values()) {
        this._observer.observe(section);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    // Private
    _configAfterMerge(config) {
      config.target = getElement(config.target) || document.body;
      config.rootMargin = config.offset ? `${config.offset}px 0px -30%` : config.rootMargin;
      if (typeof config.threshold === "string") {
        config.threshold = config.threshold.split(",").map((value) => Number.parseFloat(value));
      }
      return config;
    }
    _maybeEnableSmoothScroll() {
      if (!this._config.smoothScroll) {
        return;
      }
      event_handler_default.off(this._config.target, EVENT_CLICK2);
      event_handler_default.on(this._config.target, EVENT_CLICK2, SELECTOR_TARGET_LINKS, (event) => {
        const observableSection = this._observableSections.get(event.target.hash);
        if (observableSection) {
          event.preventDefault();
          const root = this._rootElement || window;
          const height = observableSection.offsetTop - this._element.offsetTop;
          if (root.scrollTo) {
            root.scrollTo({ top: height, behavior: "smooth" });
            return;
          }
          root.scrollTop = height;
        }
      });
    }
    _getNewObserver() {
      const options = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver((entries) => this._observerCallback(entries), options);
    }
    // The logic of selection
    _observerCallback(entries) {
      const targetElement = (entry) => this._targetLinks.get(`#${entry.target.id}`);
      const activate = (entry) => {
        this._previousScrollData.visibleEntryTop = entry.target.offsetTop;
        this._process(targetElement(entry));
      };
      const parentScrollTop = (this._rootElement || document.documentElement).scrollTop;
      const userScrollsDown = parentScrollTop >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = parentScrollTop;
      for (const entry of entries) {
        if (!entry.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(targetElement(entry));
          continue;
        }
        const entryIsLowerThanPrevious = entry.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (userScrollsDown && entryIsLowerThanPrevious) {
          activate(entry);
          if (!parentScrollTop) {
            return;
          }
          continue;
        }
        if (!userScrollsDown && !entryIsLowerThanPrevious) {
          activate(entry);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map();
      this._observableSections = /* @__PURE__ */ new Map();
      const targetLinks = selector_engine_default.find(SELECTOR_TARGET_LINKS, this._config.target);
      for (const anchor of targetLinks) {
        if (!anchor.hash || isDisabled(anchor)) {
          continue;
        }
        const observableSection = selector_engine_default.findOne(decodeURI(anchor.hash), this._element);
        if (isVisible(observableSection)) {
          this._targetLinks.set(decodeURI(anchor.hash), anchor);
          this._observableSections.set(anchor.hash, observableSection);
        }
      }
    }
    _process(target) {
      if (this._activeTarget === target) {
        return;
      }
      this._clearActiveClass(this._config.target);
      this._activeTarget = target;
      target.classList.add(CLASS_NAME_ACTIVE2);
      this._activateParents(target);
      event_handler_default.trigger(this._element, EVENT_ACTIVATE, { relatedTarget: target });
    }
    _activateParents(target) {
      if (target.classList.contains(CLASS_NAME_DROPDOWN_ITEM)) {
        selector_engine_default.findOne(SELECTOR_DROPDOWN_TOGGLE, target.closest(SELECTOR_DROPDOWN)).classList.add(CLASS_NAME_ACTIVE2);
        return;
      }
      for (const listGroup of selector_engine_default.parents(target, SELECTOR_NAV_LIST_GROUP)) {
        for (const item of selector_engine_default.prev(listGroup, SELECTOR_LINK_ITEMS)) {
          item.classList.add(CLASS_NAME_ACTIVE2);
        }
      }
    }
    _clearActiveClass(parent) {
      parent.classList.remove(CLASS_NAME_ACTIVE2);
      const activeNodes = selector_engine_default.find(`${SELECTOR_TARGET_LINKS}.${CLASS_NAME_ACTIVE2}`, parent);
      for (const node of activeNodes) {
        node.classList.remove(CLASS_NAME_ACTIVE2);
      }
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _ScrollSpy.getOrCreateInstance(this, config);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(window, EVENT_LOAD_DATA_API3, () => {
    for (const spy of selector_engine_default.find(SELECTOR_DATA_SPY)) {
      ScrollSpy.getOrCreateInstance(spy);
    }
  });
  defineJQueryPlugin(ScrollSpy);

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/collapse.js
  var NAME10 = "collapse";
  var DATA_KEY6 = "bs.collapse";
  var EVENT_KEY7 = `.${DATA_KEY6}`;
  var DATA_API_KEY5 = ".data-api";
  var EVENT_SHOW4 = `show${EVENT_KEY7}`;
  var EVENT_SHOWN4 = `shown${EVENT_KEY7}`;
  var EVENT_HIDE4 = `hide${EVENT_KEY7}`;
  var EVENT_HIDDEN4 = `hidden${EVENT_KEY7}`;
  var EVENT_CLICK_DATA_API4 = `click${EVENT_KEY7}${DATA_API_KEY5}`;
  var CLASS_NAME_SHOW5 = "show";
  var CLASS_NAME_COLLAPSE = "collapse";
  var CLASS_NAME_COLLAPSING = "collapsing";
  var CLASS_NAME_COLLAPSED = "collapsed";
  var CLASS_NAME_DEEPER_CHILDREN = `:scope .${CLASS_NAME_COLLAPSE} .${CLASS_NAME_COLLAPSE}`;
  var CLASS_NAME_HORIZONTAL = "collapse-horizontal";
  var WIDTH = "width";
  var HEIGHT = "height";
  var SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
  var SELECTOR_DATA_TOGGLE3 = '[data-bs-toggle="collapse"]';
  var Default10 = {
    parent: null,
    toggle: true
  };
  var DefaultType10 = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  var Collapse = class _Collapse extends base_component_default {
    constructor(element, config) {
      super(element, config);
      this._isTransitioning = false;
      this._triggerArray = [];
      const toggleList = selector_engine_default.find(SELECTOR_DATA_TOGGLE3);
      for (const elem of toggleList) {
        const selector = selector_engine_default.getSelectorFromElement(elem);
        const filterElement = selector_engine_default.find(selector).filter((foundElement) => foundElement === this._element);
        if (selector !== null && filterElement.length) {
          this._triggerArray.push(elem);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    // Getters
    static get Default() {
      return Default10;
    }
    static get DefaultType() {
      return DefaultType10;
    }
    static get NAME() {
      return NAME10;
    }
    // Public
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let activeChildren = [];
      if (this._config.parent) {
        activeChildren = this._getFirstLevelChildren(SELECTOR_ACTIVES).filter((element) => element !== this._element).map((element) => _Collapse.getOrCreateInstance(element, { toggle: false }));
      }
      if (activeChildren.length && activeChildren[0]._isTransitioning) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_SHOW4);
      if (startEvent.defaultPrevented) {
        return;
      }
      for (const activeInstance of activeChildren) {
        activeInstance.hide();
      }
      const dimension = this._getDimension();
      this._element.classList.remove(CLASS_NAME_COLLAPSE);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.style[dimension] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW5);
        this._element.style[dimension] = "";
        event_handler_default.trigger(this._element, EVENT_SHOWN4);
      };
      const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      const scrollSize = `scroll${capitalizedDimension}`;
      this._queueCallback(complete, this._element, true);
      this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      const startEvent = event_handler_default.trigger(this._element, EVENT_HIDE4);
      if (startEvent.defaultPrevented) {
        return;
      }
      const dimension = this._getDimension();
      this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
      reflow(this._element);
      this._element.classList.add(CLASS_NAME_COLLAPSING);
      this._element.classList.remove(CLASS_NAME_COLLAPSE, CLASS_NAME_SHOW5);
      for (const trigger of this._triggerArray) {
        const element = selector_engine_default.getElementFromSelector(trigger);
        if (element && !this._isShown(element)) {
          this._addAriaAndCollapsedClass([trigger], false);
        }
      }
      this._isTransitioning = true;
      const complete = () => {
        this._isTransitioning = false;
        this._element.classList.remove(CLASS_NAME_COLLAPSING);
        this._element.classList.add(CLASS_NAME_COLLAPSE);
        event_handler_default.trigger(this._element, EVENT_HIDDEN4);
      };
      this._element.style[dimension] = "";
      this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
      return element.classList.contains(CLASS_NAME_SHOW5);
    }
    // Private
    _configAfterMerge(config) {
      config.toggle = Boolean(config.toggle);
      config.parent = getElement(config.parent);
      return config;
    }
    _getDimension() {
      return this._element.classList.contains(CLASS_NAME_HORIZONTAL) ? WIDTH : HEIGHT;
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const children = this._getFirstLevelChildren(SELECTOR_DATA_TOGGLE3);
      for (const element of children) {
        const selected = selector_engine_default.getElementFromSelector(element);
        if (selected) {
          this._addAriaAndCollapsedClass([element], this._isShown(selected));
        }
      }
    }
    _getFirstLevelChildren(selector) {
      const children = selector_engine_default.find(CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
      return selector_engine_default.find(selector, this._config.parent).filter((element) => !children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
      if (!triggerArray.length) {
        return;
      }
      for (const element of triggerArray) {
        element.classList.toggle(CLASS_NAME_COLLAPSED, !isOpen);
        element.setAttribute("aria-expanded", isOpen);
      }
    }
    // Static
    static jQueryInterface(config) {
      const _config = {};
      if (typeof config === "string" && /show|hide/.test(config)) {
        _config.toggle = false;
      }
      return this.each(function() {
        const data = _Collapse.getOrCreateInstance(this, _config);
        if (typeof config === "string") {
          if (typeof data[config] === "undefined") {
            throw new TypeError(`No method named "${config}"`);
          }
          data[config]();
        }
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API4, SELECTOR_DATA_TOGGLE3, function(event) {
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") {
      event.preventDefault();
    }
    for (const element of selector_engine_default.getMultipleElementsFromSelector(this)) {
      Collapse.getOrCreateInstance(element, { toggle: false }).toggle();
    }
  });
  defineJQueryPlugin(Collapse);

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/docs@v0.17.3/assets/hb/modules/docs/js/nav.ts
  (() => {
    const activeParent = (child) => {
      const parent = child.parentElement?.closest(".hb-docs-nav-links-group");
      if (parent == null) {
        return;
      }
      parent.querySelector(".collapse")?.classList.add("show");
      const heading = parent.querySelector(".hb-docs-nav-heading");
      heading.classList.add("active");
      heading.querySelector(".hb-docs-nav-item-toggle")?.setAttribute("aria-expanded", "true");
      activeParent(parent);
    };
    const active = (link2) => {
      link2.classList.add("active");
      activeParent(link2);
    };
    const link = document.querySelector(`.hb-docs-nav-links a[href="${location.pathname}"]`);
    if (link == null) {
      return;
    }
    active(link);
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/docs@v0.17.3/assets/hb/modules/docs/js/nav-toggle.ts
  (() => {
    const toggle = document.querySelector(".hb-docs-nav-toggle");
    const docs2 = document.querySelector(".hb-docs");
    if (!toggle || !docs2) {
      return;
    }
    const className = "sidebar-off";
    toggle.addEventListener("click", () => {
      if (docs2.classList.contains(className)) {
        docs2.classList.remove(className);
      } else {
        docs2.classList.add(className);
      }
    });
  })();

  // ns-params:@params
  var params_exports = {};
  __export(params_exports, {
    back_to_top: () => back_to_top,
    bigger_picture: () => bigger_picture,
    blog: () => blog,
    breadcrumb: () => breadcrumb,
    color: () => color,
    content_panel: () => content_panel,
    css_bundle_name: () => css_bundle_name,
    default: () => params_default,
    docs: () => docs,
    featured_image: () => featured_image,
    footer: () => footer,
    full_width: () => full_width,
    full_width_types: () => full_width_types,
    gallery: () => gallery,
    header: () => header,
    heading_sign: () => heading_sign,
    js_bundle_name: () => js_bundle_name,
    logo: () => logo,
    modules: () => modules,
    pagination: () => pagination,
    progress_bar: () => progress_bar,
    scrollbar: () => scrollbar,
    search: () => search,
    styles: () => styles,
    terms: () => terms,
    theme_cards: () => theme_cards
  });
  var back_to_top = { animation: true, icon_height: "2em", icon_name: "rocket", icon_width: "2em", position_bottom: "1rem", position_end: "1rem" };
  var bigger_picture = { play_interval: 5e3, scale: 2 };
  var blog = { archives: { paginate: 30 }, full_width: false, giscus: { category: "General", categoryid: "DIC_kwDOHJi95s4CTy6q", repo: "G-Zai/Blog", repoid: "R_kgDOHJi95g" }, home: { featured_posts: 5, main_sections: ["docs", "blog", "tutorials"], pinned_posts_position: "list" }, list_cols_lg: 3, list_cols_md: 2, list_style: "", paginate: 12, post_date_format: ":date_long", post_thumbnail: true, post_thumbnail_default: "images/thumbnail.png", post_thumbnail_height: "160px", post_thumbnail_placeholder: "HB THEME", post_thumbnail_position: "top", post_thumbnail_resize_height: 360, related_posts: { number: 10 }, sidebar: { max_width: "320px", position: "start", posts: { featured_count: 5, fill: true, list_style: "slide", recent_count: 5, style: "pills" }, profile: { avatar: "/images/logo.png", avatar_size: 100, company: "COMPANY", description: "", location: "Earth", socials: { email: "GLoadings@outlook.com", github: "G-Zai", rss: true }, title: "" }, sticky: true, taxonomies: { count: true, limit: 10, separate: false }, width: 0.35 }, toc: { position: "end" } };
  var breadcrumb = { disabled: false };
  var color = "light";
  var content_panel = { bottom: "20px", comments: true, repo: { branch: "main", repo: "G-Zai/Blog", service: "github" } };
  var css_bundle_name = "hb";
  var docs = { date_format: ":date_long" };
  var featured_image = { size: "x640" };
  var footer = { socials: { _color: true, email: "GLoadings@outlook.com", github: "G-Zai", rss: true } };
  var full_width = false;
  var full_width_types = { docs: { enable: true } };
  var gallery = { date_sort_order: "desc", highlight_images_count: 10, highlight_images_recursive: false, paginate: 24, thumbnail_size: "x640" };
  var header = { brand: null, breakpoint: "lg", full_width: true, logo_bg: "#712cf9", socials: { email: "GLoadings@outlook.com", github: "G-Zai", rss: true }, sticky: true, theme_toggle: { style: "switch" } };
  var heading_sign = { containers: { ".hb-blog-post-content": {}, ".hb-docs-doc-content": {} }, symbol: "\xA7" };
  var js_bundle_name = "hb";
  var logo = "/images/logo.png";
  var modules = { "code-block-panel": { js_resources: [{ partial: "code-block-panel/assets/js-resource" }] } };
  var pagination = { alignment: "center", siblings: 2, size: "" };
  var progress_bar = { height: "2px", initial_width: 20, interval: 50, time: 2 };
  var scrollbar = { corner_bg: "#909294", height: "12px", thumb_bg: "#909294", track_bg: "#f8f9fa", width: "12px" };
  var search = { modal: true };
  var styles = { hb_top_offset: "24px", prefix: "hb-" };
  var terms = { list_style: "", paginate: 12, profile: true, profile_metrics: true };
  var theme_cards = {};
  var params_default = { back_to_top, bigger_picture, blog, breadcrumb, color, content_panel, css_bundle_name, docs, featured_image, footer, full_width, full_width_types, gallery, header, heading_sign, js_bundle_name, logo, modules, pagination, progress_bar, scrollbar, search, styles, terms, theme_cards };

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/heading-sign@v0.2.0/assets/hb/modules/heading-sign/js/index.ts
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const containers = params_exports?.heading_sign?.containers;
      if (!containers) {
        return;
      }
      const symbol = params_exports?.heading_sign?.symbol ?? "\xA7";
      for (const selector in containers) {
        const container = document.querySelector(selector);
        if (!container) {
          continue;
        }
        container.querySelectorAll("h2, h3, h4, h5, h6").forEach((heading) => {
          const id = heading.getAttribute("id");
          if (!id) {
            return;
          }
          const anchor = document.createElement("a");
          anchor.className = "anchor ms-1";
          anchor.href = `#${id}`;
          anchor.innerText = symbol;
          heading.appendChild(anchor);
        });
      }
    });
  })();

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/twbs/bootstrap@v5.3.3+incompatible/js/src/tab.js
  var NAME11 = "tab";
  var DATA_KEY7 = "bs.tab";
  var EVENT_KEY8 = `.${DATA_KEY7}`;
  var EVENT_HIDE5 = `hide${EVENT_KEY8}`;
  var EVENT_HIDDEN5 = `hidden${EVENT_KEY8}`;
  var EVENT_SHOW5 = `show${EVENT_KEY8}`;
  var EVENT_SHOWN5 = `shown${EVENT_KEY8}`;
  var EVENT_CLICK_DATA_API5 = `click${EVENT_KEY8}`;
  var EVENT_KEYDOWN2 = `keydown${EVENT_KEY8}`;
  var EVENT_LOAD_DATA_API4 = `load${EVENT_KEY8}`;
  var ARROW_LEFT_KEY2 = "ArrowLeft";
  var ARROW_RIGHT_KEY2 = "ArrowRight";
  var ARROW_UP_KEY2 = "ArrowUp";
  var ARROW_DOWN_KEY2 = "ArrowDown";
  var HOME_KEY = "Home";
  var END_KEY = "End";
  var CLASS_NAME_ACTIVE3 = "active";
  var CLASS_NAME_FADE3 = "fade";
  var CLASS_NAME_SHOW6 = "show";
  var CLASS_DROPDOWN = "dropdown";
  var SELECTOR_DROPDOWN_TOGGLE2 = ".dropdown-toggle";
  var SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
  var NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${SELECTOR_DROPDOWN_TOGGLE2})`;
  var SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
  var SELECTOR_OUTER = ".nav-item, .list-group-item";
  var SELECTOR_INNER = `.nav-link${NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${NOT_SELECTOR_DROPDOWN_TOGGLE}`;
  var SELECTOR_DATA_TOGGLE4 = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
  var SELECTOR_INNER_ELEM = `${SELECTOR_INNER}, ${SELECTOR_DATA_TOGGLE4}`;
  var SELECTOR_DATA_TOGGLE_ACTIVE = `.${CLASS_NAME_ACTIVE3}[data-bs-toggle="tab"], .${CLASS_NAME_ACTIVE3}[data-bs-toggle="pill"], .${CLASS_NAME_ACTIVE3}[data-bs-toggle="list"]`;
  var Tab = class _Tab extends base_component_default {
    constructor(element) {
      super(element);
      this._parent = this._element.closest(SELECTOR_TAB_PANEL);
      if (!this._parent) {
        return;
      }
      this._setInitialAttributes(this._parent, this._getChildren());
      event_handler_default.on(this._element, EVENT_KEYDOWN2, (event) => this._keydown(event));
    }
    // Getters
    static get NAME() {
      return NAME11;
    }
    // Public
    show() {
      const innerElem = this._element;
      if (this._elemIsActive(innerElem)) {
        return;
      }
      const active = this._getActiveElem();
      const hideEvent = active ? event_handler_default.trigger(active, EVENT_HIDE5, { relatedTarget: innerElem }) : null;
      const showEvent = event_handler_default.trigger(innerElem, EVENT_SHOW5, { relatedTarget: active });
      if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) {
        return;
      }
      this._deactivate(active, innerElem);
      this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.add(CLASS_NAME_ACTIVE3);
      this._activate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.add(CLASS_NAME_SHOW6);
          return;
        }
        element.removeAttribute("tabindex");
        element.setAttribute("aria-selected", true);
        this._toggleDropDown(element, true);
        event_handler_default.trigger(element, EVENT_SHOWN5, {
          relatedTarget: relatedElem
        });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE3));
    }
    _deactivate(element, relatedElem) {
      if (!element) {
        return;
      }
      element.classList.remove(CLASS_NAME_ACTIVE3);
      element.blur();
      this._deactivate(selector_engine_default.getElementFromSelector(element));
      const complete = () => {
        if (element.getAttribute("role") !== "tab") {
          element.classList.remove(CLASS_NAME_SHOW6);
          return;
        }
        element.setAttribute("aria-selected", false);
        element.setAttribute("tabindex", "-1");
        this._toggleDropDown(element, false);
        event_handler_default.trigger(element, EVENT_HIDDEN5, { relatedTarget: relatedElem });
      };
      this._queueCallback(complete, element, element.classList.contains(CLASS_NAME_FADE3));
    }
    _keydown(event) {
      if (![ARROW_LEFT_KEY2, ARROW_RIGHT_KEY2, ARROW_UP_KEY2, ARROW_DOWN_KEY2, HOME_KEY, END_KEY].includes(event.key)) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      const children = this._getChildren().filter((element) => !isDisabled(element));
      let nextActiveElement;
      if ([HOME_KEY, END_KEY].includes(event.key)) {
        nextActiveElement = children[event.key === HOME_KEY ? 0 : children.length - 1];
      } else {
        const isNext = [ARROW_RIGHT_KEY2, ARROW_DOWN_KEY2].includes(event.key);
        nextActiveElement = getNextActiveElement(children, event.target, isNext, true);
      }
      if (nextActiveElement) {
        nextActiveElement.focus({ preventScroll: true });
        _Tab.getOrCreateInstance(nextActiveElement).show();
      }
    }
    _getChildren() {
      return selector_engine_default.find(SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((child) => this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
      this._setAttributeIfNotExists(parent, "role", "tablist");
      for (const child of children) {
        this._setInitialAttributesOnChild(child);
      }
    }
    _setInitialAttributesOnChild(child) {
      child = this._getInnerElement(child);
      const isActive = this._elemIsActive(child);
      const outerElem = this._getOuterElement(child);
      child.setAttribute("aria-selected", isActive);
      if (outerElem !== child) {
        this._setAttributeIfNotExists(outerElem, "role", "presentation");
      }
      if (!isActive) {
        child.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(child, "role", "tab");
      this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
      const target = selector_engine_default.getElementFromSelector(child);
      if (!target) {
        return;
      }
      this._setAttributeIfNotExists(target, "role", "tabpanel");
      if (child.id) {
        this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
      }
    }
    _toggleDropDown(element, open) {
      const outerElem = this._getOuterElement(element);
      if (!outerElem.classList.contains(CLASS_DROPDOWN)) {
        return;
      }
      const toggle = (selector, className) => {
        const element2 = selector_engine_default.findOne(selector, outerElem);
        if (element2) {
          element2.classList.toggle(className, open);
        }
      };
      toggle(SELECTOR_DROPDOWN_TOGGLE2, CLASS_NAME_ACTIVE3);
      toggle(SELECTOR_DROPDOWN_MENU, CLASS_NAME_SHOW6);
      outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
      if (!element.hasAttribute(attribute)) {
        element.setAttribute(attribute, value);
      }
    }
    _elemIsActive(elem) {
      return elem.classList.contains(CLASS_NAME_ACTIVE3);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
      return elem.matches(SELECTOR_INNER_ELEM) ? elem : selector_engine_default.findOne(SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
      return elem.closest(SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
      return this.each(function() {
        const data = _Tab.getOrCreateInstance(this);
        if (typeof config !== "string") {
          return;
        }
        if (data[config] === void 0 || config.startsWith("_") || config === "constructor") {
          throw new TypeError(`No method named "${config}"`);
        }
        data[config]();
      });
    }
  };
  event_handler_default.on(document, EVENT_CLICK_DATA_API5, SELECTOR_DATA_TOGGLE4, function(event) {
    if (["A", "AREA"].includes(this.tagName)) {
      event.preventDefault();
    }
    if (isDisabled(this)) {
      return;
    }
    Tab.getOrCreateInstance(this).show();
  });
  event_handler_default.on(window, EVENT_LOAD_DATA_API4, () => {
    for (const element of selector_engine_default.find(SELECTOR_DATA_TOGGLE_ACTIVE)) {
      Tab.getOrCreateInstance(element);
    }
  });
  defineJQueryPlugin(Tab);

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.1/assets/hb/modules/progress-bar/js/progress.ts
  var Progress = class {
    ele;
    bar;
    width;
    interval;
    step;
    constructor() {
      this.width = params_exports?.progress_bar?.width ?? 20;
      this.interval = params_exports?.progress_bar?.interval ?? 50;
      const time = params_exports?.progress_bar?.time ?? 2;
      this.step = (100 - this.width) / time / 1e3 * this.interval;
      this.initBar();
      this.initProgress();
    }
    initProgress() {
      const progress = document.createElement("div");
      progress.className = "hb-progress progress position-fixed top-0 w-100 rounded-0 d-none";
      progress.role = "progressbar";
      progress.appendChild(this.bar);
      document.body.appendChild(progress);
      this.ele = progress;
    }
    initBar() {
      const bar = document.createElement("div");
      bar.className = "progress-bar progress-bar-striped progress-bar-animated";
      bar.style.width = this.width + "%";
      this.bar = bar;
    }
    timer = 0;
    show() {
      this.ele.classList.remove("d-none");
      this.timer = setInterval(() => {
        this.width += this.step;
        this.bar.style.width = `${this.width}%`;
      }, this.interval);
    }
    hide() {
      this.ele.classList.add("d-none");
      clearInterval(this.timer);
    }
  };

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/progress-bar@v0.1.1/assets/hb/modules/progress-bar/js/index.ts
  (() => {
    const progress = new Progress();
    window.addEventListener("pagehide", () => {
      progress.hide();
    });
    window.addEventListener("beforeunload", () => {
      progress.show();
    });
  })();

  // <stdin>
  var import_bigger_picture_umd = __toESM(require_bigger_picture_umd());

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/bigger-picture@v0.10.1/assets/hb/modules/bigger-picture/js/panel.ts
  var Panel = class {
    constructor(bp, downloadIcon, shareIcon, rotateIcon, flipIcon, playIcon) {
      this.bp = bp;
      this.downloadIcon = downloadIcon;
      this.shareIcon = shareIcon;
      this.rotateIcon = rotateIcon;
      this.flipIcon = flipIcon;
      this.playIcon = playIcon;
    }
    init(container) {
      const p = document.createElement("div");
      p.classList.add("bp-panel", "d-flex", "position-absolute", "mx-auto", "start-0", "end-0", "text-center");
      p.appendChild(this.rotate(false));
      p.appendChild(this.rotate(true));
      p.appendChild(this.flip());
      p.appendChild(this.play());
      p.appendChild(this.download());
      p.appendChild(this.share());
      container.appendChild(p);
    }
    update(container, item) {
      const p = container.querySelector(".bp-panel");
      const d = p.querySelector(".bp-panel-download");
      d.href = item.img;
      d.download = item.alt;
    }
    imgWrap = () => {
      return document.querySelector(".bp-img-wrap");
    };
    rotate = (clockwise = false) => {
      const a = document.createElement("a");
      a.title = "Rotate";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-rotate", clockwise ? "bp-panel-rotate-clockwise" : "bp-panel-rotate-anticlockwise", "text-decoration-none", "p-2");
      a.innerHTML = this.rotateIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        let value = parseInt(wrap.getAttribute("data-rotate") ?? "0");
        value += clockwise ? 90 : -90;
        wrap.setAttribute("data-rotate", value.toString());
        this.transform(wrap);
      });
      return a;
    };
    flip = () => {
      const a = document.createElement("a");
      a.title = "Flip";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-flip", "text-decoration-none", "p-2");
      a.innerHTML = this.flipIcon;
      a.addEventListener("click", () => {
        const wrap = this.imgWrap();
        if (wrap.hasAttribute("data-flip")) {
          wrap.removeAttribute("data-flip");
        } else {
          wrap.setAttribute("data-flip", "true");
        }
        this.transform(wrap);
      });
      return a;
    };
    transform = (wrap) => {
      const transform = [];
      const rotate = wrap.getAttribute("data-rotate");
      if (rotate) {
        transform.push(`rotate(${parseInt(rotate)}deg)`);
      }
      const flip = wrap.getAttribute("data-flip");
      if (flip) {
        transform.push("scaleX(-1)");
      }
      wrap.style.transform = transform.join(" ");
    };
    playJob = 0;
    playInterval = 1e3;
    play = () => {
      const a = document.createElement("a");
      a.title = "Play";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-play", "text-decoration-none", "p-2");
      a.innerHTML = this.playIcon;
      a.addEventListener("click", () => {
        if (this.playJob) {
          clearInterval(this.playJob);
          this.playJob = 0;
          a.classList.remove("active");
          return;
        }
        a.classList.add("active");
        this.playJob = setInterval(() => {
          this.bp.next();
        }, params_default.bigger_picture.play_interval ?? 5e3);
      });
      return a;
    };
    download = () => {
      const a = document.createElement("a");
      a.title = "Download";
      a.role = "button";
      a.classList.add("bp-panel-action", "bp-panel-download", "text-decoration-none", "p-2");
      a.setAttribute("download", "");
      a.innerHTML = this.downloadIcon;
      return a;
    };
    twitterShareLink = () => {
      return `https://twitter.com/intent/tweet?url=${this.shareLink()}`;
    };
    facebookShareLink = () => {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.shareLink()}`;
    };
    shareLink = () => {
      return encodeURIComponent(window.location.href);
    };
    share = () => {
      const el = document.createElement("div");
      el.classList.add("bp-panel-action", "dropdown-center", "bp-panel-share", "p-2");
      el.innerHTML = `<a class="text-white" href="#" role="button" title="Share" data-bs-toggle="dropdown" aria-expanded="false">${this.shareIcon}</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" target="_blank" href="${this.twitterShareLink()}">Twitter</a></li>
            <li><a class="dropdown-item" target="_blank" href="${this.facebookShareLink()}">Facebook</a></li>
          </ul>`;
      return el;
    };
  };

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hbstack/back-to-top@v0.2.0/assets/hb/modules/back-to-top/js/button.ts
  var Button = class {
    btn;
    constructor(icon) {
      const btn = document.createElement("button");
      btn.className = "hb-back-to-top";
      btn.ariaLabel = "Back to top";
      btn.innerHTML = this.transformIcon(icon);
      document.body.appendChild(btn);
      this.btn = btn;
      let y = 0;
      window.addEventListener("scroll", () => {
        const top = document.documentElement.scrollTop;
        if (document.body.scrollTop > 20 || top > 20) {
          this.show();
        } else {
          this.hide();
        }
        if (this.animation() && top > y) {
          btn.classList.remove("scrolling");
        }
        y = top;
        this.updatePos();
      });
      this.btn.addEventListener("click", () => {
        this.animation() && btn.classList.add("scrolling");
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      });
    }
    transformIcon(icon) {
      return icon.replace(/<svg(.*)>((.|\n)*)<\/svg>/, `<svg$1>
  <defs><clipPath id="icon">$2</clipPath></defs>
  <rect x="0" y="0" fill="currentColor" width="100%" height="100%" clip-path="url(#icon)" />
  <rect x="0" y="100%" width="100%" height="100%" clip-path="url(#icon)" />
</svg>`);
    }
    posIcon;
    updatePos() {
      if (!this.posIcon) {
        this.posIcon = this.btn.querySelectorAll("rect")[1];
      }
      const pos = document.documentElement.scrollTop / (document.documentElement.offsetHeight - document.documentElement.clientHeight);
      this.posIcon.setAttribute("y", (1 - pos) * 100 + "%");
    }
    show() {
      this.btn.classList.add("show");
    }
    hide() {
      this.btn.classList.remove("show");
    }
    animation() {
      return params_exports?.back_to_top?.animation !== false;
    }
  };

  // <stdin>
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      const bp = (0, import_bigger_picture_umd.default)({
        target: document.body
      });
      const panel = new Panel(bp, `<svg aria-hidden="true" class="bi bi-download hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-share hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-arrow-clockwise hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-phone-flip hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M11 1H5a1 1 0 0 0-1 1v6a.5.5 0 0 1-1 0V2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a.5.5 0 0 1-1 0V2a1 1 0 0 0-1-1m1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a.5.5 0 0 0-1 0v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2a.5.5 0 0 0-1 0zM1.713 7.954a.5.5 0 1 0-.419-.908c-.347.16-.654.348-.882.57C.184 7.842 0 8.139 0 8.5c0 .546.408.94.823 1.201.44.278 1.043.51 1.745.696C3.978 10.773 5.898 11 8 11q.148 0 .294-.002l-1.148 1.148a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708l1.145 1.144L8 10c-2.04 0-3.87-.221-5.174-.569-.656-.175-1.151-.374-1.47-.575C1.012 8.639 1 8.506 1 8.5c0-.003 0-.059.112-.17.115-.112.31-.242.6-.376Zm12.993-.908a.5.5 0 0 0-.419.908c.292.134.486.264.6.377.113.11.113.166.113.169s0 .065-.13.187c-.132.122-.352.26-.677.4-.645.28-1.596.523-2.763.687a.5.5 0 0 0 .14.99c1.212-.17 2.26-.43 3.02-.758.38-.164.713-.357.96-.587.246-.229.45-.537.45-.919 0-.362-.184-.66-.412-.883s-.535-.411-.882-.571M7.5 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
</svg>`, `<svg aria-hidden="true" class="bi bi-play-circle hi-svg-inline" fill="currentColor" height="1.25em" viewBox="0 0 16 16" width="1.25em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
</svg>`);
      const onOpen = (container) => {
        panel.init(container);
      };
      const onUpdate = (container, item) => {
        panel.update(container, item);
      };
      const show = (imgs, pos) => {
        bp.open({
          items: imgs,
          intro: "fadeup",
          position: pos,
          onOpen,
          onUpdate
        });
      };
      const scale = parseInt("2");
      const data = (img) => {
        const alt = img.getAttribute("alt");
        let caption = alt;
        const captionEle = img.parentNode.querySelector("figcaption");
        if (captionEle !== null) {
          caption = captionEle.innerText;
        }
        return {
          img: img.getAttribute("data-src") ?? img.src,
          height: scale * (img.getAttribute("data-height") ?? img.naturalHeight),
          width: scale * (img.getAttribute("data-width") ?? img.naturalWidth),
          alt: img.getAttribute("alt"),
          caption,
          thumb: img.src
        };
      };
      const images = document.querySelectorAll("img");
      for (const img of images) {
        if (img.closest("a")) {
          continue;
        }
        img.addEventListener("click", () => {
          const imgs = [];
          let pos = 0;
          const set = img.closest(".bigger-pictures");
          if (set) {
            const els = set.querySelectorAll("img");
            for (let i = 0; i < els.length; i++) {
              if (els[i] === img) {
                pos = i;
              }
              imgs.push(data(els[i]));
            }
          } else {
            imgs.push(data(img));
          }
          show(imgs, pos);
        });
      }
      const links = Array.from(document.querySelectorAll(".img-link"));
      for (const link of links) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          show([{
            img: link.getAttribute("href"),
            alt: link.innerText,
            caption: link.innerText
          }], 0);
        });
      }
    });
  })();
  (() => {
    "use strict";
    window.addEventListener("DOMContentLoaded", () => {
      const btn = new Button(`<svg aria-hidden="true" class="bi bi-rocket hi-svg-inline hb-back-to-top-icon" fill="currentColor" height="2em" viewBox="0 0 16 16" width="2em" xmlns="http://www.w3.org/2000/svg">
  <path d="M8 8c.828 0 1.5-.895 1.5-2S8.828 4 8 4s-1.5.895-1.5 2S7.172 8 8 8"/>
  <path d="M11.953 8.81c-.195-3.388-.968-5.507-1.777-6.819C9.707 1.233 9.23.751 8.857.454a3.5 3.5 0 0 0-.463-.315A2 2 0 0 0 8.25.064.55.55 0 0 0 8 0a.55.55 0 0 0-.266.073 2 2 0 0 0-.142.08 4 4 0 0 0-.459.33c-.37.308-.844.803-1.31 1.57-.805 1.322-1.577 3.433-1.774 6.756l-1.497 1.826-.004.005A2.5 2.5 0 0 0 2 12.202V15.5a.5.5 0 0 0 .9.3l1.125-1.5c.166-.222.42-.4.752-.57.214-.108.414-.192.625-.281l.198-.084c.7.428 1.55.635 2.4.635s1.7-.207 2.4-.635q.1.044.196.083c.213.09.413.174.627.282.332.17.586.348.752.57l1.125 1.5a.5.5 0 0 0 .9-.3v-3.298a2.5 2.5 0 0 0-.548-1.562zM12 10.445v.055c0 .866-.284 1.585-.75 2.14.146.064.292.13.425.199.39.197.8.46 1.1.86L13 14v-1.798a1.5 1.5 0 0 0-.327-.935zM4.75 12.64C4.284 12.085 4 11.366 4 10.5v-.054l-.673.82a1.5 1.5 0 0 0-.327.936V14l.225-.3c.3-.4.71-.664 1.1-.861.133-.068.279-.135.425-.199M8.009 1.073q.096.06.226.163c.284.226.683.621 1.09 1.28C10.137 3.836 11 6.237 11 10.5c0 .858-.374 1.48-.943 1.893C9.517 12.786 8.781 13 8 13s-1.517-.214-2.057-.607C5.373 11.979 5 11.358 5 10.5c0-4.182.86-6.586 1.677-7.928.409-.67.81-1.082 1.096-1.32q.136-.113.236-.18Z"/>
  <path d="M9.479 14.361c-.48.093-.98.139-1.479.139s-.999-.046-1.479-.139L7.6 15.8a.5.5 0 0 0 .8 0z"/>
</svg>`);
    });
  })();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9nb2h1Z29pby9odWdvLW1vZC1qc2xpYnMtZGlzdC9wb3BwZXJqcy92MkB2Mi4yMTEwMC4yMDAwMC9wYWNrYWdlL2Rpc3QvY2pzL3BvcHBlci5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hlbnJ5Z2QvYmlnZ2VyLXBpY3R1cmVAdjEuMS4xNy9kaXN0L2JpZ2dlci1waWN0dXJlLnVtZC5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svYmFzZUB2MC42LjEvYXNzZXRzL2hiL21vZHVsZXMvYmFzZS9qcy9yZXNwb25zaXZlLXRhYmxlLnRzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvZHJvcGRvd24uanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vZGF0YS5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvaW5kZXguanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vZXZlbnQtaGFuZGxlci5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL2RvbS9tYW5pcHVsYXRvci5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvY29uZmlnLmpzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvYmFzZS1jb21wb25lbnQuanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9kb20vc2VsZWN0b3ItZW5naW5lLmpzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9iYWNrZHJvcC5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvY29tcG9uZW50LWZ1bmN0aW9ucy5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvZm9jdXN0cmFwLmpzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvdXRpbC9zY3JvbGxiYXIuanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9vZmZjYW52YXMuanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2hlYWRlckB2MC4xNC42L2Fzc2V0cy9oYi9tb2R1bGVzL2hlYWRlci9qcy9pbmRleC50cyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvc3dpcGUuanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy9jYXJvdXNlbC5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svY2Fyb3VzZWxAdjAuMi43L2Fzc2V0cy9oYi9tb2R1bGVzL2Nhcm91c2VsL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9nYWxsZXJ5QHYwLjEzLjEvYXNzZXRzL2hiL21vZHVsZXMvZ2FsbGVyeS9qcy9pbmRleC50cyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3Rvb2x0aXAuanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy91dGlsL3Nhbml0aXplci5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwQHY1LjMuMytpbmNvbXBhdGlibGUvanMvc3JjL3V0aWwvdGVtcGxhdGUtZmFjdG9yeS5qcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svYnMtdG9vbHRpcEB2MC4xLjEvYXNzZXRzL2hiL21vZHVsZXMvYnMtdG9vbHRpcC9qcy9pbmRleC50cyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svc2xpZGVAdjAuNC4wL2Fzc2V0cy9oYi9tb2R1bGVzL3NsaWRlL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaHVnb21vZHMvZ2lzY3VzQHYwLjEuMS9hc3NldHMvbW9kcy9naXNjdXMvanMvaW5kZXgudHMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2dpc2N1c0B2MC4xLjEvYXNzZXRzL2hiL21vZHVsZXMvZ2lzY3VzL2pzL2luZGV4LnRzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvc2Nyb2xsc3B5LmpzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXBAdjUuMy4zK2luY29tcGF0aWJsZS9qcy9zcmMvY29sbGFwc2UuanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL2RvY3NAdjAuMTcuMy9hc3NldHMvaGIvbW9kdWxlcy9kb2NzL2pzL25hdi50cyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svZG9jc0B2MC4xNy4zL2Fzc2V0cy9oYi9tb2R1bGVzL2RvY3MvanMvbmF2LXRvZ2dsZS50cyIsICJucy1wYXJhbXM6QHBhcmFtcyIsICJucy1odWdvOi9yb290Ly5jYWNoZS9odWdvX2NhY2hlL21vZHVsZXMvZmlsZWNhY2hlL21vZHVsZXMvcGtnL21vZC9naXRodWIuY29tL2hic3RhY2svaGVhZGluZy1zaWduQHYwLjIuMC9hc3NldHMvaGIvbW9kdWxlcy9oZWFkaW5nLXNpZ24vanMvaW5kZXgudHMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcEB2NS4zLjMraW5jb21wYXRpYmxlL2pzL3NyYy90YWIuanMiLCAibnMtaHVnbzovcm9vdC8uY2FjaGUvaHVnb19jYWNoZS9tb2R1bGVzL2ZpbGVjYWNoZS9tb2R1bGVzL3BrZy9tb2QvZ2l0aHViLmNvbS9oYnN0YWNrL3Byb2dyZXNzLWJhckB2MC4xLjEvYXNzZXRzL2hiL21vZHVsZXMvcHJvZ3Jlc3MtYmFyL2pzL3Byb2dyZXNzLnRzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9wcm9ncmVzcy1iYXJAdjAuMS4xL2Fzc2V0cy9oYi9tb2R1bGVzL3Byb2dyZXNzLWJhci9qcy9pbmRleC50cyIsICI8c3RkaW4+IiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iaWdnZXItcGljdHVyZUB2MC4xMC4xL2Fzc2V0cy9oYi9tb2R1bGVzL2JpZ2dlci1waWN0dXJlL2pzL3BhbmVsLnRzIiwgIm5zLWh1Z286L3Jvb3QvLmNhY2hlL2h1Z29fY2FjaGUvbW9kdWxlcy9maWxlY2FjaGUvbW9kdWxlcy9wa2cvbW9kL2dpdGh1Yi5jb20vaGJzdGFjay9iYWNrLXRvLXRvcEB2MC4yLjAvYXNzZXRzL2hiL21vZHVsZXMvYmFjay10by10b3AvanMvYnV0dG9uLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvKipcbiAqIEBwb3BwZXJqcy9jb3JlIHYyLjExLjAgLSBNSVQgTGljZW5zZVxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxuZnVuY3Rpb24gZ2V0V2luZG93KG5vZGUpIHtcbiAgaWYgKG5vZGUgPT0gbnVsbCkge1xuICAgIHJldHVybiB3aW5kb3c7XG4gIH1cblxuICBpZiAobm9kZS50b1N0cmluZygpICE9PSAnW29iamVjdCBXaW5kb3ddJykge1xuICAgIHZhciBvd25lckRvY3VtZW50ID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIHJldHVybiBvd25lckRvY3VtZW50ID8gb3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3cgOiB3aW5kb3c7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuRWxlbWVudDtcbiAgcmV0dXJuIG5vZGUgaW5zdGFuY2VvZiBPd25FbGVtZW50IHx8IG5vZGUgaW5zdGFuY2VvZiBFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc0hUTUxFbGVtZW50KG5vZGUpIHtcbiAgdmFyIE93bkVsZW1lbnQgPSBnZXRXaW5kb3cobm9kZSkuSFRNTEVsZW1lbnQ7XG4gIHJldHVybiBub2RlIGluc3RhbmNlb2YgT3duRWxlbWVudCB8fCBub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChub2RlKSB7XG4gIC8vIElFIDExIGhhcyBubyBTaGFkb3dSb290XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgT3duRWxlbWVudCA9IGdldFdpbmRvdyhub2RlKS5TaGFkb3dSb290O1xuICByZXR1cm4gbm9kZSBpbnN0YW5jZW9mIE93bkVsZW1lbnQgfHwgbm9kZSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q7XG59XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50LCBpbmNsdWRlU2NhbGUpIHtcbiAgaWYgKGluY2x1ZGVTY2FsZSA9PT0gdm9pZCAwKSB7XG4gICAgaW5jbHVkZVNjYWxlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIHZhciBzY2FsZVggPSAxO1xuICB2YXIgc2NhbGVZID0gMTtcblxuICBpZiAoaXNIVE1MRWxlbWVudChlbGVtZW50KSAmJiBpbmNsdWRlU2NhbGUpIHtcbiAgICB2YXIgb2Zmc2V0SGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgdmFyIG9mZnNldFdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDsgLy8gRG8gbm90IGF0dGVtcHQgdG8gZGl2aWRlIGJ5IDAsIG90aGVyd2lzZSB3ZSBnZXQgYEluZmluaXR5YCBhcyBzY2FsZVxuICAgIC8vIEZhbGxiYWNrIHRvIDEgaW4gY2FzZSBib3RoIHZhbHVlcyBhcmUgYDBgXG5cbiAgICBpZiAob2Zmc2V0V2lkdGggPiAwKSB7XG4gICAgICBzY2FsZVggPSByb3VuZChyZWN0LndpZHRoKSAvIG9mZnNldFdpZHRoIHx8IDE7XG4gICAgfVxuXG4gICAgaWYgKG9mZnNldEhlaWdodCA+IDApIHtcbiAgICAgIHNjYWxlWSA9IHJvdW5kKHJlY3QuaGVpZ2h0KSAvIG9mZnNldEhlaWdodCB8fCAxO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHJlY3Qud2lkdGggLyBzY2FsZVgsXG4gICAgaGVpZ2h0OiByZWN0LmhlaWdodCAvIHNjYWxlWSxcbiAgICB0b3A6IHJlY3QudG9wIC8gc2NhbGVZLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0IC8gc2NhbGVYLFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20gLyBzY2FsZVksXG4gICAgbGVmdDogcmVjdC5sZWZ0IC8gc2NhbGVYLFxuICAgIHg6IHJlY3QubGVmdCAvIHNjYWxlWCxcbiAgICB5OiByZWN0LnRvcCAvIHNjYWxlWVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGwobm9kZSkge1xuICB2YXIgd2luID0gZ2V0V2luZG93KG5vZGUpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IHdpbi5wYWdlWE9mZnNldDtcbiAgdmFyIHNjcm9sbFRvcCA9IHdpbi5wYWdlWU9mZnNldDtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50U2Nyb2xsKGVsZW1lbnQpIHtcbiAgcmV0dXJuIHtcbiAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgc2Nyb2xsVG9wOiBlbGVtZW50LnNjcm9sbFRvcFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKG5vZGUpIHtcbiAgaWYgKG5vZGUgPT09IGdldFdpbmRvdyhub2RlKSB8fCAhaXNIVE1MRWxlbWVudChub2RlKSkge1xuICAgIHJldHVybiBnZXRXaW5kb3dTY3JvbGwobm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGdldEhUTUxFbGVtZW50U2Nyb2xsKG5vZGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldE5vZGVOYW1lKGVsZW1lbnQpIHtcbiAgcmV0dXJuIGVsZW1lbnQgPyAoZWxlbWVudC5ub2RlTmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKSA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KSB7XG4gIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXJldHVybl06IGFzc3VtZSBib2R5IGlzIGFsd2F5cyBhdmFpbGFibGVcbiAgcmV0dXJuICgoaXNFbGVtZW50KGVsZW1lbnQpID8gZWxlbWVudC5vd25lckRvY3VtZW50IDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gIGVsZW1lbnQuZG9jdW1lbnQpIHx8IHdpbmRvdy5kb2N1bWVudCkuZG9jdW1lbnRFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpIHtcbiAgLy8gSWYgPGh0bWw+IGhhcyBhIENTUyB3aWR0aCBncmVhdGVyIHRoYW4gdGhlIHZpZXdwb3J0LCB0aGVuIHRoaXMgd2lsbCBiZVxuICAvLyBpbmNvcnJlY3QgZm9yIFJUTC5cbiAgLy8gUG9wcGVyIDEgaXMgYnJva2VuIGluIHRoaXMgY2FzZSBhbmQgbmV2ZXIgaGFkIGEgYnVnIHJlcG9ydCBzbyBsZXQncyBhc3N1bWVcbiAgLy8gaXQncyBub3QgYW4gaXNzdWUuIEkgZG9uJ3QgdGhpbmsgYW55b25lIGV2ZXIgc3BlY2lmaWVzIHdpZHRoIG9uIDxodG1sPlxuICAvLyBhbnl3YXkuXG4gIC8vIEJyb3dzZXJzIHdoZXJlIHRoZSBsZWZ0IHNjcm9sbGJhciBkb2Vzbid0IGNhdXNlIGFuIGlzc3VlIHJlcG9ydCBgMGAgZm9yXG4gIC8vIHRoaXMgKGUuZy4gRWRnZSAyMDE5LCBJRTExLCBTYWZhcmkpXG4gIHJldHVybiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpKS5sZWZ0ICsgZ2V0V2luZG93U2Nyb2xsKGVsZW1lbnQpLnNjcm9sbExlZnQ7XG59XG5cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGlzU2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gRmlyZWZveCB3YW50cyB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxuICB2YXIgX2dldENvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyxcbiAgICAgIG92ZXJmbG93WCA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WCxcbiAgICAgIG92ZXJmbG93WSA9IF9nZXRDb21wdXRlZFN0eWxlLm92ZXJmbG93WTtcblxuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVuLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKTtcbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50U2NhbGVkKGVsZW1lbnQpIHtcbiAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB2YXIgc2NhbGVYID0gcm91bmQocmVjdC53aWR0aCkgLyBlbGVtZW50Lm9mZnNldFdpZHRoIHx8IDE7XG4gIHZhciBzY2FsZVkgPSByb3VuZChyZWN0LmhlaWdodCkgLyBlbGVtZW50Lm9mZnNldEhlaWdodCB8fCAxO1xuICByZXR1cm4gc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMTtcbn0gLy8gUmV0dXJucyB0aGUgY29tcG9zaXRlIHJlY3Qgb2YgYW4gZWxlbWVudCByZWxhdGl2ZSB0byBpdHMgb2Zmc2V0UGFyZW50LlxuLy8gQ29tcG9zaXRlIG1lYW5zIGl0IHRha2VzIGludG8gYWNjb3VudCB0cmFuc2Zvcm1zIGFzIHdlbGwgYXMgbGF5b3V0LlxuXG5cbmZ1bmN0aW9uIGdldENvbXBvc2l0ZVJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudCwgaXNGaXhlZCkge1xuICBpZiAoaXNGaXhlZCA9PT0gdm9pZCAwKSB7XG4gICAgaXNGaXhlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ID0gaXNIVE1MRWxlbWVudChvZmZzZXRQYXJlbnQpO1xuICB2YXIgb2Zmc2V0UGFyZW50SXNTY2FsZWQgPSBpc0hUTUxFbGVtZW50KG9mZnNldFBhcmVudCkgJiYgaXNFbGVtZW50U2NhbGVkKG9mZnNldFBhcmVudCk7XG4gIHZhciBkb2N1bWVudEVsZW1lbnQgPSBnZXREb2N1bWVudEVsZW1lbnQob2Zmc2V0UGFyZW50KTtcbiAgdmFyIHJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudE9yVmlydHVhbEVsZW1lbnQsIG9mZnNldFBhcmVudElzU2NhbGVkKTtcbiAgdmFyIHNjcm9sbCA9IHtcbiAgICBzY3JvbGxMZWZ0OiAwLFxuICAgIHNjcm9sbFRvcDogMFxuICB9O1xuICB2YXIgb2Zmc2V0cyA9IHtcbiAgICB4OiAwLFxuICAgIHk6IDBcbiAgfTtcblxuICBpZiAoaXNPZmZzZXRQYXJlbnRBbkVsZW1lbnQgfHwgIWlzT2Zmc2V0UGFyZW50QW5FbGVtZW50ICYmICFpc0ZpeGVkKSB7XG4gICAgaWYgKGdldE5vZGVOYW1lKG9mZnNldFBhcmVudCkgIT09ICdib2R5JyB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzEwNzhcbiAgICBpc1Njcm9sbFBhcmVudChkb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgICBzY3JvbGwgPSBnZXROb2RlU2Nyb2xsKG9mZnNldFBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSFRNTEVsZW1lbnQob2Zmc2V0UGFyZW50KSkge1xuICAgICAgb2Zmc2V0cyA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQsIHRydWUpO1xuICAgICAgb2Zmc2V0cy54ICs9IG9mZnNldFBhcmVudC5jbGllbnRMZWZ0O1xuICAgICAgb2Zmc2V0cy55ICs9IG9mZnNldFBhcmVudC5jbGllbnRUb3A7XG4gICAgfSBlbHNlIGlmIChkb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIG9mZnNldHMueCA9IGdldFdpbmRvd1Njcm9sbEJhclgoZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHg6IHJlY3QubGVmdCArIHNjcm9sbC5zY3JvbGxMZWZ0IC0gb2Zmc2V0cy54LFxuICAgIHk6IHJlY3QudG9wICsgc2Nyb2xsLnNjcm9sbFRvcCAtIG9mZnNldHMueSxcbiAgICB3aWR0aDogcmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0XG4gIH07XG59XG5cbi8vIG1lYW5zIGl0IGRvZXNuJ3QgdGFrZSBpbnRvIGFjY291bnQgdHJhbnNmb3Jtcy5cblxuZnVuY3Rpb24gZ2V0TGF5b3V0UmVjdChlbGVtZW50KSB7XG4gIHZhciBjbGllbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQpOyAvLyBVc2UgdGhlIGNsaWVudFJlY3Qgc2l6ZXMgaWYgaXQncyBub3QgYmVlbiB0cmFuc2Zvcm1lZC5cbiAgLy8gRml4ZXMgaHR0cHM6Ly9naXRodWIuY29tL3BvcHBlcmpzL3BvcHBlci1jb3JlL2lzc3Vlcy8xMjIzXG5cbiAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gIGlmIChNYXRoLmFicyhjbGllbnRSZWN0LndpZHRoIC0gd2lkdGgpIDw9IDEpIHtcbiAgICB3aWR0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICBpZiAoTWF0aC5hYnMoY2xpZW50UmVjdC5oZWlnaHQgLSBoZWlnaHQpIDw9IDEpIHtcbiAgICBoZWlnaHQgPSBjbGllbnRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgeDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgIHk6IGVsZW1lbnQub2Zmc2V0VG9wLFxuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodFxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGdldE5vZGVOYW1lKGVsZW1lbnQpID09PSAnaHRtbCcpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiAoLy8gdGhpcyBpcyBhIHF1aWNrZXIgKGJ1dCBsZXNzIHR5cGUgc2FmZSkgd2F5IHRvIHNhdmUgcXVpdGUgc29tZSBieXRlcyBmcm9tIHRoZSBidW5kbGVcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dXG4gICAgLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgZWxlbWVudC5hc3NpZ25lZFNsb3QgfHwgLy8gc3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGVcbiAgICBlbGVtZW50LnBhcmVudE5vZGUgfHwgKCAvLyBET00gRWxlbWVudCBkZXRlY3RlZFxuICAgIGlzU2hhZG93Um9vdChlbGVtZW50KSA/IGVsZW1lbnQuaG9zdCA6IG51bGwpIHx8IC8vIFNoYWRvd1Jvb3QgZGV0ZWN0ZWRcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogSFRNTEVsZW1lbnQgaXMgYSBOb2RlXG4gICAgZ2V0RG9jdW1lbnRFbGVtZW50KGVsZW1lbnQpIC8vIGZhbGxiYWNrXG5cbiAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KG5vZGUpIHtcbiAgaWYgKFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluZGV4T2YoZ2V0Tm9kZU5hbWUobm9kZSkpID49IDApIHtcbiAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1yZXR1cm5dOiBhc3N1bWUgYm9keSBpcyBhbHdheXMgYXZhaWxhYmxlXG4gICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgaWYgKGlzSFRNTEVsZW1lbnQobm9kZSkgJiYgaXNTY3JvbGxQYXJlbnQobm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShub2RlKSk7XG59XG5cbi8qXG5naXZlbiBhIERPTSBlbGVtZW50LCByZXR1cm4gdGhlIGxpc3Qgb2YgYWxsIHNjcm9sbCBwYXJlbnRzLCB1cCB0aGUgbGlzdCBvZiBhbmNlc29yc1xudW50aWwgd2UgZ2V0IHRvIHRoZSB0b3Agd2luZG93IG9iamVjdC4gVGhpcyBsaXN0IGlzIHdoYXQgd2UgYXR0YWNoIHNjcm9sbCBsaXN0ZW5lcnNcbnRvLCBiZWNhdXNlIGlmIGFueSBvZiB0aGVzZSBwYXJlbnQgZWxlbWVudHMgc2Nyb2xsLCB3ZSdsbCBuZWVkIHRvIHJlLWNhbGN1bGF0ZSB0aGVcbnJlZmVyZW5jZSBlbGVtZW50J3MgcG9zaXRpb24uXG4qL1xuXG5mdW5jdGlvbiBsaXN0U2Nyb2xsUGFyZW50cyhlbGVtZW50LCBsaXN0KSB7XG4gIHZhciBfZWxlbWVudCRvd25lckRvY3VtZW47XG5cbiAgaWYgKGxpc3QgPT09IHZvaWQgMCkge1xuICAgIGxpc3QgPSBbXTtcbiAgfVxuXG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudCk7XG4gIHZhciBpc0JvZHkgPSBzY3JvbGxQYXJlbnQgPT09ICgoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHkpO1xuICB2YXIgd2luID0gZ2V0V2luZG93KHNjcm9sbFBhcmVudCk7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBbd2luXS5jb25jYXQod2luLnZpc3VhbFZpZXdwb3J0IHx8IFtdLCBpc1Njcm9sbFBhcmVudChzY3JvbGxQYXJlbnQpID8gc2Nyb2xsUGFyZW50IDogW10pIDogc2Nyb2xsUGFyZW50O1xuICB2YXIgdXBkYXRlZExpc3QgPSBsaXN0LmNvbmNhdCh0YXJnZXQpO1xuICByZXR1cm4gaXNCb2R5ID8gdXBkYXRlZExpc3QgOiAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS1jYWxsXTogaXNCb2R5IHRlbGxzIHVzIHRhcmdldCB3aWxsIGJlIGFuIEhUTUxFbGVtZW50IGhlcmVcbiAgdXBkYXRlZExpc3QuY29uY2F0KGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUodGFyZ2V0KSkpO1xufVxuXG5mdW5jdGlvbiBpc1RhYmxlRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBbJ3RhYmxlJywgJ3RkJywgJ3RoJ10uaW5kZXhPZihnZXROb2RlTmFtZShlbGVtZW50KSkgPj0gMDtcbn1cblxuZnVuY3Rpb24gZ2V0VHJ1ZU9mZnNldFBhcmVudChlbGVtZW50KSB7XG4gIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9wcGVyanMvcG9wcGVyLWNvcmUvaXNzdWVzLzgzN1xuICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnZml4ZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG59IC8vIGAub2Zmc2V0UGFyZW50YCByZXBvcnRzIGBudWxsYCBmb3IgZml4ZWQgZWxlbWVudHMsIHdoaWxlIGFic29sdXRlIGVsZW1lbnRzXG4vLyByZXR1cm4gdGhlIGNvbnRhaW5pbmcgYmxvY2tcblxuXG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSAhPT0gLTE7XG4gIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdUcmlkZW50JykgIT09IC0xO1xuXG4gIGlmIChpc0lFICYmIGlzSFRNTEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICAvLyBJbiBJRSA5LCAxMCBhbmQgMTEgZml4ZWQgZWxlbWVudHMgY29udGFpbmluZyBibG9jayBpcyBhbHdheXMgZXN0YWJsaXNoZWQgYnkgdGhlIHZpZXdwb3J0XG4gICAgdmFyIGVsZW1lbnRDc3MgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgaWYgKGVsZW1lbnRDc3MucG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjdXJyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUoZWxlbWVudCk7XG5cbiAgd2hpbGUgKGlzSFRNTEVsZW1lbnQoY3VycmVudE5vZGUpICYmIFsnaHRtbCcsICdib2R5J10uaW5kZXhPZihnZXROb2RlTmFtZShjdXJyZW50Tm9kZSkpIDwgMCkge1xuICAgIHZhciBjc3MgPSBnZXRDb21wdXRlZFN0eWxlKGN1cnJlbnROb2RlKTsgLy8gVGhpcyBpcyBub24tZXhoYXVzdGl2ZSBidXQgY292ZXJzIHRoZSBtb3N0IGNvbW1vbiBDU1MgcHJvcGVydGllcyB0aGF0XG4gICAgLy8gY3JlYXRlIGEgY29udGFpbmluZyBibG9jay5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuXG4gICAgaWYgKGNzcy50cmFuc2Zvcm0gIT09ICdub25lJyB8fCBjc3MucGVyc3BlY3RpdmUgIT09ICdub25lJyB8fCBjc3MuY29udGFpbiA9PT0gJ3BhaW50JyB8fCBbJ3RyYW5zZm9ybScsICdwZXJzcGVjdGl2ZSddLmluZGV4T2YoY3NzLndpbGxDaGFuZ2UpICE9PSAtMSB8fCBpc0ZpcmVmb3ggJiYgY3NzLndpbGxDaGFuZ2UgPT09ICdmaWx0ZXInIHx8IGlzRmlyZWZveCAmJiBjc3MuZmlsdGVyICYmIGNzcy5maWx0ZXIgIT09ICdub25lJykge1xuICAgICAgcmV0dXJuIGN1cnJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IC8vIEdldHMgdGhlIGNsb3Nlc3QgYW5jZXN0b3IgcG9zaXRpb25lZCBlbGVtZW50LiBIYW5kbGVzIHNvbWUgZWRnZSBjYXNlcyxcbi8vIHN1Y2ggYXMgdGFibGUgYW5jZXN0b3JzIGFuZCBjcm9zcyBicm93c2VyIGJ1Z3MuXG5cblxuZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIG9mZnNldFBhcmVudCA9IGdldFRydWVPZmZzZXRQYXJlbnQoZWxlbWVudCk7XG5cbiAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBpc1RhYmxlRWxlbWVudChvZmZzZXRQYXJlbnQpICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSBnZXRUcnVlT2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICBpZiAob2Zmc2V0UGFyZW50ICYmIChnZXROb2RlTmFtZShvZmZzZXRQYXJlbnQpID09PSAnaHRtbCcgfHwgZ2V0Tm9kZU5hbWUob2Zmc2V0UGFyZW50KSA9PT0gJ2JvZHknICYmIGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpKSB7XG4gICAgcmV0dXJuIHdpbmRvdztcbiAgfVxuXG4gIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZ2V0Q29udGFpbmluZ0Jsb2NrKGVsZW1lbnQpIHx8IHdpbmRvdztcbn1cblxudmFyIHRvcCA9ICd0b3AnO1xudmFyIGJvdHRvbSA9ICdib3R0b20nO1xudmFyIHJpZ2h0ID0gJ3JpZ2h0JztcbnZhciBsZWZ0ID0gJ2xlZnQnO1xudmFyIGF1dG8gPSAnYXV0byc7XG52YXIgYmFzZVBsYWNlbWVudHMgPSBbdG9wLCBib3R0b20sIHJpZ2h0LCBsZWZ0XTtcbnZhciBzdGFydCA9ICdzdGFydCc7XG52YXIgZW5kID0gJ2VuZCc7XG52YXIgY2xpcHBpbmdQYXJlbnRzID0gJ2NsaXBwaW5nUGFyZW50cyc7XG52YXIgdmlld3BvcnQgPSAndmlld3BvcnQnO1xudmFyIHBvcHBlciA9ICdwb3BwZXInO1xudmFyIHJlZmVyZW5jZSA9ICdyZWZlcmVuY2UnO1xudmFyIHZhcmlhdGlvblBsYWNlbWVudHMgPSAvKiNfX1BVUkVfXyovYmFzZVBsYWNlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHBsYWNlbWVudCkge1xuICByZXR1cm4gYWNjLmNvbmNhdChbcGxhY2VtZW50ICsgXCItXCIgKyBzdGFydCwgcGxhY2VtZW50ICsgXCItXCIgKyBlbmRdKTtcbn0sIFtdKTtcbnZhciBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL1tdLmNvbmNhdChiYXNlUGxhY2VtZW50cywgW2F1dG9dKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gIHJldHVybiBhY2MuY29uY2F0KFtwbGFjZW1lbnQsIHBsYWNlbWVudCArIFwiLVwiICsgc3RhcnQsIHBsYWNlbWVudCArIFwiLVwiICsgZW5kXSk7XG59LCBbXSk7IC8vIG1vZGlmaWVycyB0aGF0IG5lZWQgdG8gcmVhZCB0aGUgRE9NXG5cbnZhciBiZWZvcmVSZWFkID0gJ2JlZm9yZVJlYWQnO1xudmFyIHJlYWQgPSAncmVhZCc7XG52YXIgYWZ0ZXJSZWFkID0gJ2FmdGVyUmVhZCc7IC8vIHB1cmUtbG9naWMgbW9kaWZpZXJzXG5cbnZhciBiZWZvcmVNYWluID0gJ2JlZm9yZU1haW4nO1xudmFyIG1haW4gPSAnbWFpbic7XG52YXIgYWZ0ZXJNYWluID0gJ2FmdGVyTWFpbic7IC8vIG1vZGlmaWVyIHdpdGggdGhlIHB1cnBvc2UgdG8gd3JpdGUgdG8gdGhlIERPTSAob3Igd3JpdGUgaW50byBhIGZyYW1ld29yayBzdGF0ZSlcblxudmFyIGJlZm9yZVdyaXRlID0gJ2JlZm9yZVdyaXRlJztcbnZhciB3cml0ZSA9ICd3cml0ZSc7XG52YXIgYWZ0ZXJXcml0ZSA9ICdhZnRlcldyaXRlJztcbnZhciBtb2RpZmllclBoYXNlcyA9IFtiZWZvcmVSZWFkLCByZWFkLCBhZnRlclJlYWQsIGJlZm9yZU1haW4sIG1haW4sIGFmdGVyTWFpbiwgYmVmb3JlV3JpdGUsIHdyaXRlLCBhZnRlcldyaXRlXTtcblxuZnVuY3Rpb24gb3JkZXIobW9kaWZpZXJzKSB7XG4gIHZhciBtYXAgPSBuZXcgTWFwKCk7XG4gIHZhciB2aXNpdGVkID0gbmV3IFNldCgpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIG1hcC5zZXQobW9kaWZpZXIubmFtZSwgbW9kaWZpZXIpO1xuICB9KTsgLy8gT24gdmlzaXRpbmcgb2JqZWN0LCBjaGVjayBmb3IgaXRzIGRlcGVuZGVuY2llcyBhbmQgdmlzaXQgdGhlbSByZWN1cnNpdmVseVxuXG4gIGZ1bmN0aW9uIHNvcnQobW9kaWZpZXIpIHtcbiAgICB2aXNpdGVkLmFkZChtb2RpZmllci5uYW1lKTtcbiAgICB2YXIgcmVxdWlyZXMgPSBbXS5jb25jYXQobW9kaWZpZXIucmVxdWlyZXMgfHwgW10sIG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMgfHwgW10pO1xuICAgIHJlcXVpcmVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgaWYgKCF2aXNpdGVkLmhhcyhkZXApKSB7XG4gICAgICAgIHZhciBkZXBNb2RpZmllciA9IG1hcC5nZXQoZGVwKTtcblxuICAgICAgICBpZiAoZGVwTW9kaWZpZXIpIHtcbiAgICAgICAgICBzb3J0KGRlcE1vZGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJlc3VsdC5wdXNoKG1vZGlmaWVyKTtcbiAgfVxuXG4gIG1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIGlmICghdmlzaXRlZC5oYXMobW9kaWZpZXIubmFtZSkpIHtcbiAgICAgIC8vIGNoZWNrIGZvciB2aXNpdGVkIG9iamVjdFxuICAgICAgc29ydChtb2RpZmllcik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gb3JkZXJNb2RpZmllcnMobW9kaWZpZXJzKSB7XG4gIC8vIG9yZGVyIGJhc2VkIG9uIGRlcGVuZGVuY2llc1xuICB2YXIgb3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyKG1vZGlmaWVycyk7IC8vIG9yZGVyIGJhc2VkIG9uIHBoYXNlXG5cbiAgcmV0dXJuIG1vZGlmaWVyUGhhc2VzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwaGFzZSkge1xuICAgIHJldHVybiBhY2MuY29uY2F0KG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgcmV0dXJuIG1vZGlmaWVyLnBoYXNlID09PSBwaGFzZTtcbiAgICB9KSk7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZm4pIHtcbiAgdmFyIHBlbmRpbmc7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwZW5kaW5nKSB7XG4gICAgICBwZW5kaW5nID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcGVuZGluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICByZXNvbHZlKGZuKCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBwZW5kaW5nO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXQoc3RyKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBbXS5jb25jYXQoYXJncykucmVkdWNlKGZ1bmN0aW9uIChwLCBjKSB7XG4gICAgcmV0dXJuIHAucmVwbGFjZSgvJXMvLCBjKTtcbiAgfSwgc3RyKTtcbn1cblxudmFyIElOVkFMSURfTU9ESUZJRVJfRVJST1IgPSAnUG9wcGVyOiBtb2RpZmllciBcIiVzXCIgcHJvdmlkZWQgYW4gaW52YWxpZCAlcyBwcm9wZXJ0eSwgZXhwZWN0ZWQgJXMgYnV0IGdvdCAlcyc7XG52YXIgTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SID0gJ1BvcHBlcjogbW9kaWZpZXIgXCIlc1wiIHJlcXVpcmVzIFwiJXNcIiwgYnV0IFwiJXNcIiBtb2RpZmllciBpcyBub3QgYXZhaWxhYmxlJztcbnZhciBWQUxJRF9QUk9QRVJUSUVTID0gWyduYW1lJywgJ2VuYWJsZWQnLCAncGhhc2UnLCAnZm4nLCAnZWZmZWN0JywgJ3JlcXVpcmVzJywgJ29wdGlvbnMnXTtcbmZ1bmN0aW9uIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycykge1xuICBtb2RpZmllcnMuZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBbXS5jb25jYXQoT2JqZWN0LmtleXMobW9kaWZpZXIpLCBWQUxJRF9QUk9QRVJUSUVTKSAvLyBJRTExLWNvbXBhdGlibGUgcmVwbGFjZW1lbnQgZm9yIGBuZXcgU2V0KGl0ZXJhYmxlKWBcbiAgICAuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgsIHNlbGYpIHtcbiAgICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICAgIGlmICh0eXBlb2YgbW9kaWZpZXIubmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIFN0cmluZyhtb2RpZmllci5uYW1lKSwgJ1wibmFtZVwiJywgJ1wic3RyaW5nXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5uYW1lKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnZW5hYmxlZCc6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5lbmFibGVkICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVuYWJsZWRcIicsICdcImJvb2xlYW5cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmVuYWJsZWQpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwaGFzZSc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyUGhhc2VzLmluZGV4T2YobW9kaWZpZXIucGhhc2UpIDwgMCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicGhhc2VcIicsIFwiZWl0aGVyIFwiICsgbW9kaWZpZXJQaGFzZXMuam9pbignLCAnKSwgXCJcXFwiXCIgKyBTdHJpbmcobW9kaWZpZXIucGhhc2UpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdmbic6XG4gICAgICAgICAgaWYgKHR5cGVvZiBtb2RpZmllci5mbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wiZm5cIicsICdcImZ1bmN0aW9uXCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5mbikgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2VmZmVjdCc6XG4gICAgICAgICAgaWYgKG1vZGlmaWVyLmVmZmVjdCAhPSBudWxsICYmIHR5cGVvZiBtb2RpZmllci5lZmZlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZm9ybWF0KElOVkFMSURfTU9ESUZJRVJfRVJST1IsIG1vZGlmaWVyLm5hbWUsICdcImVmZmVjdFwiJywgJ1wiZnVuY3Rpb25cIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLmZuKSArIFwiXFxcIlwiKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVxdWlyZXMnOlxuICAgICAgICAgIGlmIChtb2RpZmllci5yZXF1aXJlcyAhPSBudWxsICYmICFBcnJheS5pc0FycmF5KG1vZGlmaWVyLnJlcXVpcmVzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNcIicsICdcImFycmF5XCInLCBcIlxcXCJcIiArIFN0cmluZyhtb2RpZmllci5yZXF1aXJlcykgKyBcIlxcXCJcIikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcXVpcmVzSWZFeGlzdHMnOlxuICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShtb2RpZmllci5yZXF1aXJlc0lmRXhpc3RzKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoSU5WQUxJRF9NT0RJRklFUl9FUlJPUiwgbW9kaWZpZXIubmFtZSwgJ1wicmVxdWlyZXNJZkV4aXN0c1wiJywgJ1wiYXJyYXlcIicsIFwiXFxcIlwiICsgU3RyaW5nKG1vZGlmaWVyLnJlcXVpcmVzSWZFeGlzdHMpICsgXCJcXFwiXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvcHRpb25zJzpcbiAgICAgICAgY2FzZSAnZGF0YSc6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiUG9wcGVySlM6IGFuIGludmFsaWQgcHJvcGVydHkgaGFzIGJlZW4gcHJvdmlkZWQgdG8gdGhlIFxcXCJcIiArIG1vZGlmaWVyLm5hbWUgKyBcIlxcXCIgbW9kaWZpZXIsIHZhbGlkIHByb3BlcnRpZXMgYXJlIFwiICsgVkFMSURfUFJPUEVSVElFUy5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIHMgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9KS5qb2luKCcsICcpICsgXCI7IGJ1dCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgd2FzIHByb3ZpZGVkLlwiKTtcbiAgICAgIH1cblxuICAgICAgbW9kaWZpZXIucmVxdWlyZXMgJiYgbW9kaWZpZXIucmVxdWlyZXMuZm9yRWFjaChmdW5jdGlvbiAocmVxdWlyZW1lbnQpIHtcbiAgICAgICAgaWYgKG1vZGlmaWVycy5maW5kKGZ1bmN0aW9uIChtb2QpIHtcbiAgICAgICAgICByZXR1cm4gbW9kLm5hbWUgPT09IHJlcXVpcmVtZW50O1xuICAgICAgICB9KSA9PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihmb3JtYXQoTUlTU0lOR19ERVBFTkRFTkNZX0VSUk9SLCBTdHJpbmcobW9kaWZpZXIubmFtZSksIHJlcXVpcmVtZW50LCByZXF1aXJlbWVudCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVuaXF1ZUJ5KGFyciwgZm4pIHtcbiAgdmFyIGlkZW50aWZpZXJzID0gbmV3IFNldCgpO1xuICByZXR1cm4gYXJyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBpZGVudGlmaWVyID0gZm4oaXRlbSk7XG5cbiAgICBpZiAoIWlkZW50aWZpZXJzLmhhcyhpZGVudGlmaWVyKSkge1xuICAgICAgaWRlbnRpZmllcnMuYWRkKGlkZW50aWZpZXIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuXG5mdW5jdGlvbiBtZXJnZUJ5TmFtZShtb2RpZmllcnMpIHtcbiAgdmFyIG1lcmdlZCA9IG1vZGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKG1lcmdlZCwgY3VycmVudCkge1xuICAgIHZhciBleGlzdGluZyA9IG1lcmdlZFtjdXJyZW50Lm5hbWVdO1xuICAgIG1lcmdlZFtjdXJyZW50Lm5hbWVdID0gZXhpc3RpbmcgPyBPYmplY3QuYXNzaWduKHt9LCBleGlzdGluZywgY3VycmVudCwge1xuICAgICAgb3B0aW9uczogT2JqZWN0LmFzc2lnbih7fSwgZXhpc3Rpbmcub3B0aW9ucywgY3VycmVudC5vcHRpb25zKSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGV4aXN0aW5nLmRhdGEsIGN1cnJlbnQuZGF0YSlcbiAgICB9KSA6IGN1cnJlbnQ7XG4gICAgcmV0dXJuIG1lcmdlZDtcbiAgfSwge30pOyAvLyBJRTExIGRvZXMgbm90IHN1cHBvcnQgT2JqZWN0LnZhbHVlc1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyhtZXJnZWQpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1lcmdlZFtrZXldO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIHdpbiA9IGdldFdpbmRvdyhlbGVtZW50KTtcbiAgdmFyIGh0bWwgPSBnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCk7XG4gIHZhciB2aXN1YWxWaWV3cG9ydCA9IHdpbi52aXN1YWxWaWV3cG9ydDtcbiAgdmFyIHdpZHRoID0gaHRtbC5jbGllbnRXaWR0aDtcbiAgdmFyIGhlaWdodCA9IGh0bWwuY2xpZW50SGVpZ2h0O1xuICB2YXIgeCA9IDA7XG4gIHZhciB5ID0gMDsgLy8gTkI6IFRoaXMgaXNuJ3Qgc3VwcG9ydGVkIG9uIGlPUyA8PSAxMi4gSWYgdGhlIGtleWJvYXJkIGlzIG9wZW4sIHRoZSBwb3BwZXJcbiAgLy8gY2FuIGJlIG9ic2N1cmVkIHVuZGVybmVhdGggaXQuXG4gIC8vIEFsc28sIGBodG1sLmNsaWVudEhlaWdodGAgYWRkcyB0aGUgYm90dG9tIGJhciBoZWlnaHQgaW4gU2FmYXJpIGlPUywgZXZlblxuICAvLyBpZiBpdCBpc24ndCBvcGVuLCBzbyBpZiB0aGlzIGlzbid0IGF2YWlsYWJsZSwgdGhlIHBvcHBlciB3aWxsIGJlIGRldGVjdGVkXG4gIC8vIHRvIG92ZXJmbG93IHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiB0b28gZWFybHkuXG5cbiAgaWYgKHZpc3VhbFZpZXdwb3J0KSB7XG4gICAgd2lkdGggPSB2aXN1YWxWaWV3cG9ydC53aWR0aDtcbiAgICBoZWlnaHQgPSB2aXN1YWxWaWV3cG9ydC5oZWlnaHQ7IC8vIFVzZXMgTGF5b3V0IFZpZXdwb3J0IChsaWtlIENocm9tZTsgU2FmYXJpIGRvZXMgbm90IGN1cnJlbnRseSlcbiAgICAvLyBJbiBDaHJvbWUsIGl0IHJldHVybnMgYSB2YWx1ZSB2ZXJ5IGNsb3NlIHRvIDAgKCsvLSkgYnV0IGNvbnRhaW5zIHJvdW5kaW5nXG4gICAgLy8gZXJyb3JzIGR1ZSB0byBmbG9hdGluZyBwb2ludCBudW1iZXJzLCBzbyB3ZSBuZWVkIHRvIGNoZWNrIHByZWNpc2lvbi5cbiAgICAvLyBTYWZhcmkgcmV0dXJucyBhIG51bWJlciA8PSAwLCB1c3VhbGx5IDwgLTEgd2hlbiBwaW5jaC16b29tZWRcbiAgICAvLyBGZWF0dXJlIGRldGVjdGlvbiBmYWlscyBpbiBtb2JpbGUgZW11bGF0aW9uIG1vZGUgaW4gQ2hyb21lLlxuICAgIC8vIE1hdGguYWJzKHdpbi5pbm5lcldpZHRoIC8gdmlzdWFsVmlld3BvcnQuc2NhbGUgLSB2aXN1YWxWaWV3cG9ydC53aWR0aCkgPFxuICAgIC8vIDAuMDAxXG4gICAgLy8gRmFsbGJhY2sgaGVyZTogXCJOb3QgU2FmYXJpXCIgdXNlckFnZW50XG5cbiAgICBpZiAoIS9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgIHggPSB2aXN1YWxWaWV3cG9ydC5vZmZzZXRMZWZ0O1xuICAgICAgeSA9IHZpc3VhbFZpZXdwb3J0Lm9mZnNldFRvcDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiB3aWR0aCxcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB4OiB4ICsgZ2V0V2luZG93U2Nyb2xsQmFyWChlbGVtZW50KSxcbiAgICB5OiB5XG4gIH07XG59XG5cbi8vIG9mIHRoZSBgPGh0bWw+YCBhbmQgYDxib2R5PmAgcmVjdCBib3VuZHMgaWYgaG9yaXpvbnRhbGx5IHNjcm9sbGFibGVcblxuZnVuY3Rpb24gZ2V0RG9jdW1lbnRSZWN0KGVsZW1lbnQpIHtcbiAgdmFyIF9lbGVtZW50JG93bmVyRG9jdW1lbjtcblxuICB2YXIgaHRtbCA9IGdldERvY3VtZW50RWxlbWVudChlbGVtZW50KTtcbiAgdmFyIHdpblNjcm9sbCA9IGdldFdpbmRvd1Njcm9sbChlbGVtZW50KTtcbiAgdmFyIGJvZHkgPSAoX2VsZW1lbnQkb3duZXJEb2N1bWVuID0gZWxlbWVudC5vd25lckRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX2VsZW1lbnQkb3duZXJEb2N1bWVuLmJvZHk7XG4gIHZhciB3aWR0aCA9IG1heChodG1sLnNjcm9sbFdpZHRoLCBodG1sLmNsaWVudFdpZHRoLCBib2R5ID8gYm9keS5zY3JvbGxXaWR0aCA6IDAsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCk7XG4gIHZhciBoZWlnaHQgPSBtYXgoaHRtbC5zY3JvbGxIZWlnaHQsIGh0bWwuY2xpZW50SGVpZ2h0LCBib2R5ID8gYm9keS5zY3JvbGxIZWlnaHQgOiAwLCBib2R5ID8gYm9keS5jbGllbnRIZWlnaHQgOiAwKTtcbiAgdmFyIHggPSAtd2luU2Nyb2xsLnNjcm9sbExlZnQgKyBnZXRXaW5kb3dTY3JvbGxCYXJYKGVsZW1lbnQpO1xuICB2YXIgeSA9IC13aW5TY3JvbGwuc2Nyb2xsVG9wO1xuXG4gIGlmIChnZXRDb21wdXRlZFN0eWxlKGJvZHkgfHwgaHRtbCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIHggKz0gbWF4KGh0bWwuY2xpZW50V2lkdGgsIGJvZHkgPyBib2R5LmNsaWVudFdpZHRoIDogMCkgLSB3aWR0aDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHg6IHgsXG4gICAgeTogeVxuICB9O1xufVxuXG5mdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIHZhciByb290Tm9kZSA9IGNoaWxkLmdldFJvb3ROb2RlICYmIGNoaWxkLmdldFJvb3ROb2RlKCk7IC8vIEZpcnN0LCBhdHRlbXB0IHdpdGggZmFzdGVyIG5hdGl2ZSBtZXRob2RcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIHRoZW4gZmFsbGJhY2sgdG8gY3VzdG9tIGltcGxlbWVudGF0aW9uIHdpdGggU2hhZG93IERPTSBzdXBwb3J0XG4gIGVsc2UgaWYgKHJvb3ROb2RlICYmIGlzU2hhZG93Um9vdChyb290Tm9kZSkpIHtcbiAgICAgIHZhciBuZXh0ID0gY2hpbGQ7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgaWYgKG5leHQgJiYgcGFyZW50LmlzU2FtZU5vZGUobmV4dCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSAvLyAkRmxvd0ZpeE1lW3Byb3AtbWlzc2luZ106IG5lZWQgYSBiZXR0ZXIgd2F5IHRvIGhhbmRsZSB0aGlzLi4uXG5cblxuICAgICAgICBuZXh0ID0gbmV4dC5wYXJlbnROb2RlIHx8IG5leHQuaG9zdDtcbiAgICAgIH0gd2hpbGUgKG5leHQpO1xuICAgIH0gLy8gR2l2ZSB1cCwgdGhlIHJlc3VsdCBpcyBmYWxzZVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlY3QsIHtcbiAgICBsZWZ0OiByZWN0LngsXG4gICAgdG9wOiByZWN0LnksXG4gICAgcmlnaHQ6IHJlY3QueCArIHJlY3Qud2lkdGgsXG4gICAgYm90dG9tOiByZWN0LnkgKyByZWN0LmhlaWdodFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5uZXJCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudCkge1xuICB2YXIgcmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KTtcbiAgcmVjdC50b3AgPSByZWN0LnRvcCArIGVsZW1lbnQuY2xpZW50VG9wO1xuICByZWN0LmxlZnQgPSByZWN0LmxlZnQgKyBlbGVtZW50LmNsaWVudExlZnQ7XG4gIHJlY3QuYm90dG9tID0gcmVjdC50b3AgKyBlbGVtZW50LmNsaWVudEhlaWdodDtcbiAgcmVjdC5yaWdodCA9IHJlY3QubGVmdCArIGVsZW1lbnQuY2xpZW50V2lkdGg7XG4gIHJlY3Qud2lkdGggPSBlbGVtZW50LmNsaWVudFdpZHRoO1xuICByZWN0LmhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICByZWN0LnggPSByZWN0LmxlZnQ7XG4gIHJlY3QueSA9IHJlY3QudG9wO1xuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpIHtcbiAgcmV0dXJuIGNsaXBwaW5nUGFyZW50ID09PSB2aWV3cG9ydCA/IHJlY3RUb0NsaWVudFJlY3QoZ2V0Vmlld3BvcnRSZWN0KGVsZW1lbnQpKSA6IGlzRWxlbWVudChjbGlwcGluZ1BhcmVudCkgPyBnZXRJbm5lckJvdW5kaW5nQ2xpZW50UmVjdChjbGlwcGluZ1BhcmVudCkgOiByZWN0VG9DbGllbnRSZWN0KGdldERvY3VtZW50UmVjdChnZXREb2N1bWVudEVsZW1lbnQoZWxlbWVudCkpKTtcbn0gLy8gQSBcImNsaXBwaW5nIHBhcmVudFwiIGlzIGFuIG92ZXJmbG93YWJsZSBjb250YWluZXIgd2l0aCB0aGUgY2hhcmFjdGVyaXN0aWMgb2Zcbi8vIGNsaXBwaW5nIChvciBoaWRpbmcpIG92ZXJmbG93aW5nIGVsZW1lbnRzIHdpdGggYSBwb3NpdGlvbiBkaWZmZXJlbnQgZnJvbVxuLy8gYGluaXRpYWxgXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdQYXJlbnRzKGVsZW1lbnQpIHtcbiAgdmFyIGNsaXBwaW5nUGFyZW50cyA9IGxpc3RTY3JvbGxQYXJlbnRzKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xuICB2YXIgY2FuRXNjYXBlQ2xpcHBpbmcgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJ10uaW5kZXhPZihnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uKSA+PSAwO1xuICB2YXIgY2xpcHBlckVsZW1lbnQgPSBjYW5Fc2NhcGVDbGlwcGluZyAmJiBpc0hUTUxFbGVtZW50KGVsZW1lbnQpID8gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIDogZWxlbWVudDtcblxuICBpZiAoIWlzRWxlbWVudChjbGlwcGVyRWxlbWVudCkpIHtcbiAgICByZXR1cm4gW107XG4gIH0gLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtcmV0dXJuXTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzE0MTRcblxuXG4gIHJldHVybiBjbGlwcGluZ1BhcmVudHMuZmlsdGVyKGZ1bmN0aW9uIChjbGlwcGluZ1BhcmVudCkge1xuICAgIHJldHVybiBpc0VsZW1lbnQoY2xpcHBpbmdQYXJlbnQpICYmIGNvbnRhaW5zKGNsaXBwaW5nUGFyZW50LCBjbGlwcGVyRWxlbWVudCkgJiYgZ2V0Tm9kZU5hbWUoY2xpcHBpbmdQYXJlbnQpICE9PSAnYm9keScgJiYgKGNhbkVzY2FwZUNsaXBwaW5nID8gZ2V0Q29tcHV0ZWRTdHlsZShjbGlwcGluZ1BhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnIDogdHJ1ZSk7XG4gIH0pO1xufSAvLyBHZXRzIHRoZSBtYXhpbXVtIGFyZWEgdGhhdCB0aGUgZWxlbWVudCBpcyB2aXNpYmxlIGluIGR1ZSB0byBhbnkgbnVtYmVyIG9mXG4vLyBjbGlwcGluZyBwYXJlbnRzXG5cblxuZnVuY3Rpb24gZ2V0Q2xpcHBpbmdSZWN0KGVsZW1lbnQsIGJvdW5kYXJ5LCByb290Qm91bmRhcnkpIHtcbiAgdmFyIG1haW5DbGlwcGluZ1BhcmVudHMgPSBib3VuZGFyeSA9PT0gJ2NsaXBwaW5nUGFyZW50cycgPyBnZXRDbGlwcGluZ1BhcmVudHMoZWxlbWVudCkgOiBbXS5jb25jYXQoYm91bmRhcnkpO1xuICB2YXIgY2xpcHBpbmdQYXJlbnRzID0gW10uY29uY2F0KG1haW5DbGlwcGluZ1BhcmVudHMsIFtyb290Qm91bmRhcnldKTtcbiAgdmFyIGZpcnN0Q2xpcHBpbmdQYXJlbnQgPSBjbGlwcGluZ1BhcmVudHNbMF07XG4gIHZhciBjbGlwcGluZ1JlY3QgPSBjbGlwcGluZ1BhcmVudHMucmVkdWNlKGZ1bmN0aW9uIChhY2NSZWN0LCBjbGlwcGluZ1BhcmVudCkge1xuICAgIHZhciByZWN0ID0gZ2V0Q2xpZW50UmVjdEZyb21NaXhlZFR5cGUoZWxlbWVudCwgY2xpcHBpbmdQYXJlbnQpO1xuICAgIGFjY1JlY3QudG9wID0gbWF4KHJlY3QudG9wLCBhY2NSZWN0LnRvcCk7XG4gICAgYWNjUmVjdC5yaWdodCA9IG1pbihyZWN0LnJpZ2h0LCBhY2NSZWN0LnJpZ2h0KTtcbiAgICBhY2NSZWN0LmJvdHRvbSA9IG1pbihyZWN0LmJvdHRvbSwgYWNjUmVjdC5ib3R0b20pO1xuICAgIGFjY1JlY3QubGVmdCA9IG1heChyZWN0LmxlZnQsIGFjY1JlY3QubGVmdCk7XG4gICAgcmV0dXJuIGFjY1JlY3Q7XG4gIH0sIGdldENsaWVudFJlY3RGcm9tTWl4ZWRUeXBlKGVsZW1lbnQsIGZpcnN0Q2xpcHBpbmdQYXJlbnQpKTtcbiAgY2xpcHBpbmdSZWN0LndpZHRoID0gY2xpcHBpbmdSZWN0LnJpZ2h0IC0gY2xpcHBpbmdSZWN0LmxlZnQ7XG4gIGNsaXBwaW5nUmVjdC5oZWlnaHQgPSBjbGlwcGluZ1JlY3QuYm90dG9tIC0gY2xpcHBpbmdSZWN0LnRvcDtcbiAgY2xpcHBpbmdSZWN0LnggPSBjbGlwcGluZ1JlY3QubGVmdDtcbiAgY2xpcHBpbmdSZWN0LnkgPSBjbGlwcGluZ1JlY3QudG9wO1xuICByZXR1cm4gY2xpcHBpbmdSZWN0O1xufVxuXG5mdW5jdGlvbiBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQuc3BsaXQoJy0nKVsxXTtcbn1cblxuZnVuY3Rpb24gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpID49IDAgPyAneCcgOiAneSc7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHJlZmVyZW5jZSA9IF9yZWYucmVmZXJlbmNlLFxuICAgICAgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9yZWYucGxhY2VtZW50O1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudCA/IGdldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciB2YXJpYXRpb24gPSBwbGFjZW1lbnQgPyBnZXRWYXJpYXRpb24ocGxhY2VtZW50KSA6IG51bGw7XG4gIHZhciBjb21tb25YID0gcmVmZXJlbmNlLnggKyByZWZlcmVuY2Uud2lkdGggLyAyIC0gZWxlbWVudC53aWR0aCAvIDI7XG4gIHZhciBjb21tb25ZID0gcmVmZXJlbmNlLnkgKyByZWZlcmVuY2UuaGVpZ2h0IC8gMiAtIGVsZW1lbnQuaGVpZ2h0IC8gMjtcbiAgdmFyIG9mZnNldHM7XG5cbiAgc3dpdGNoIChiYXNlUGxhY2VtZW50KSB7XG4gICAgY2FzZSB0b3A6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiBjb21tb25YLFxuICAgICAgICB5OiByZWZlcmVuY2UueSAtIGVsZW1lbnQuaGVpZ2h0XG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGJvdHRvbTpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IGNvbW1vblgsXG4gICAgICAgIHk6IHJlZmVyZW5jZS55ICsgcmVmZXJlbmNlLmhlaWdodFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSByaWdodDpcbiAgICAgIG9mZnNldHMgPSB7XG4gICAgICAgIHg6IHJlZmVyZW5jZS54ICsgcmVmZXJlbmNlLndpZHRoLFxuICAgICAgICB5OiBjb21tb25ZXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGxlZnQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCAtIGVsZW1lbnQud2lkdGgsXG4gICAgICAgIHk6IGNvbW1vbllcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBvZmZzZXRzID0ge1xuICAgICAgICB4OiByZWZlcmVuY2UueCxcbiAgICAgICAgeTogcmVmZXJlbmNlLnlcbiAgICAgIH07XG4gIH1cblxuICB2YXIgbWFpbkF4aXMgPSBiYXNlUGxhY2VtZW50ID8gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpIDogbnVsbDtcblxuICBpZiAobWFpbkF4aXMgIT0gbnVsbCkge1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgc3dpdGNoICh2YXJpYXRpb24pIHtcbiAgICAgIGNhc2Ugc3RhcnQ6XG4gICAgICAgIG9mZnNldHNbbWFpbkF4aXNdID0gb2Zmc2V0c1ttYWluQXhpc10gLSAocmVmZXJlbmNlW2xlbl0gLyAyIC0gZWxlbWVudFtsZW5dIC8gMik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIGVuZDpcbiAgICAgICAgb2Zmc2V0c1ttYWluQXhpc10gPSBvZmZzZXRzW21haW5BeGlzXSArIChyZWZlcmVuY2VbbGVuXSAvIDIgLSBlbGVtZW50W2xlbl0gLyAyKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbmZ1bmN0aW9uIGdldEZyZXNoU2lkZU9iamVjdCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VQYWRkaW5nT2JqZWN0KHBhZGRpbmdPYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGdldEZyZXNoU2lkZU9iamVjdCgpLCBwYWRkaW5nT2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVG9IYXNoTWFwKHZhbHVlLCBrZXlzKSB7XG4gIHJldHVybiBrZXlzLnJlZHVjZShmdW5jdGlvbiAoaGFzaE1hcCwga2V5KSB7XG4gICAgaGFzaE1hcFtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIGhhc2hNYXA7XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gZGV0ZWN0T3ZlcmZsb3coc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucyRwbGFjZW1lbnQgPT09IHZvaWQgMCA/IHN0YXRlLnBsYWNlbWVudCA6IF9vcHRpb25zJHBsYWNlbWVudCxcbiAgICAgIF9vcHRpb25zJGJvdW5kYXJ5ID0gX29wdGlvbnMuYm91bmRhcnksXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zJGJvdW5kYXJ5ID09PSB2b2lkIDAgPyBjbGlwcGluZ1BhcmVudHMgOiBfb3B0aW9ucyRib3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zLnJvb3RCb3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IF9vcHRpb25zJHJvb3RCb3VuZGFyeSA9PT0gdm9pZCAwID8gdmlld3BvcnQgOiBfb3B0aW9ucyRyb290Qm91bmRhcnksXG4gICAgICBfb3B0aW9ucyRlbGVtZW50Q29udGUgPSBfb3B0aW9ucy5lbGVtZW50Q29udGV4dCxcbiAgICAgIGVsZW1lbnRDb250ZXh0ID0gX29wdGlvbnMkZWxlbWVudENvbnRlID09PSB2b2lkIDAgPyBwb3BwZXIgOiBfb3B0aW9ucyRlbGVtZW50Q29udGUsXG4gICAgICBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9IF9vcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBfb3B0aW9ucyRhbHRCb3VuZGFyeSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRhbHRCb3VuZGFyeSxcbiAgICAgIF9vcHRpb25zJHBhZGRpbmcgPSBfb3B0aW9ucy5wYWRkaW5nLFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zJHBhZGRpbmcgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyRwYWRkaW5nO1xuICB2YXIgcGFkZGluZ09iamVjdCA9IG1lcmdlUGFkZGluZ09iamVjdCh0eXBlb2YgcGFkZGluZyAhPT0gJ251bWJlcicgPyBwYWRkaW5nIDogZXhwYW5kVG9IYXNoTWFwKHBhZGRpbmcsIGJhc2VQbGFjZW1lbnRzKSk7XG4gIHZhciBhbHRDb250ZXh0ID0gZWxlbWVudENvbnRleHQgPT09IHBvcHBlciA/IHJlZmVyZW5jZSA6IHBvcHBlcjtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBlbGVtZW50ID0gc3RhdGUuZWxlbWVudHNbYWx0Qm91bmRhcnkgPyBhbHRDb250ZXh0IDogZWxlbWVudENvbnRleHRdO1xuICB2YXIgY2xpcHBpbmdDbGllbnRSZWN0ID0gZ2V0Q2xpcHBpbmdSZWN0KGlzRWxlbWVudChlbGVtZW50KSA/IGVsZW1lbnQgOiBlbGVtZW50LmNvbnRleHRFbGVtZW50IHx8IGdldERvY3VtZW50RWxlbWVudChzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLCBib3VuZGFyeSwgcm9vdEJvdW5kYXJ5KTtcbiAgdmFyIHJlZmVyZW5jZUNsaWVudFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3Qoc3RhdGUuZWxlbWVudHMucmVmZXJlbmNlKTtcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBjb21wdXRlT2Zmc2V0cyh7XG4gICAgcmVmZXJlbmNlOiByZWZlcmVuY2VDbGllbnRSZWN0LFxuICAgIGVsZW1lbnQ6IHBvcHBlclJlY3QsXG4gICAgc3RyYXRlZ3k6ICdhYnNvbHV0ZScsXG4gICAgcGxhY2VtZW50OiBwbGFjZW1lbnRcbiAgfSk7XG4gIHZhciBwb3BwZXJDbGllbnRSZWN0ID0gcmVjdFRvQ2xpZW50UmVjdChPYmplY3QuYXNzaWduKHt9LCBwb3BwZXJSZWN0LCBwb3BwZXJPZmZzZXRzKSk7XG4gIHZhciBlbGVtZW50Q2xpZW50UmVjdCA9IGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgPyBwb3BwZXJDbGllbnRSZWN0IDogcmVmZXJlbmNlQ2xpZW50UmVjdDsgLy8gcG9zaXRpdmUgPSBvdmVyZmxvd2luZyB0aGUgY2xpcHBpbmcgcmVjdFxuICAvLyAwIG9yIG5lZ2F0aXZlID0gd2l0aGluIHRoZSBjbGlwcGluZyByZWN0XG5cbiAgdmFyIG92ZXJmbG93T2Zmc2V0cyA9IHtcbiAgICB0b3A6IGNsaXBwaW5nQ2xpZW50UmVjdC50b3AgLSBlbGVtZW50Q2xpZW50UmVjdC50b3AgKyBwYWRkaW5nT2JqZWN0LnRvcCxcbiAgICBib3R0b206IGVsZW1lbnRDbGllbnRSZWN0LmJvdHRvbSAtIGNsaXBwaW5nQ2xpZW50UmVjdC5ib3R0b20gKyBwYWRkaW5nT2JqZWN0LmJvdHRvbSxcbiAgICBsZWZ0OiBjbGlwcGluZ0NsaWVudFJlY3QubGVmdCAtIGVsZW1lbnRDbGllbnRSZWN0LmxlZnQgKyBwYWRkaW5nT2JqZWN0LmxlZnQsXG4gICAgcmlnaHQ6IGVsZW1lbnRDbGllbnRSZWN0LnJpZ2h0IC0gY2xpcHBpbmdDbGllbnRSZWN0LnJpZ2h0ICsgcGFkZGluZ09iamVjdC5yaWdodFxuICB9O1xuICB2YXIgb2Zmc2V0RGF0YSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0OyAvLyBPZmZzZXRzIGNhbiBiZSBhcHBsaWVkIG9ubHkgdG8gdGhlIHBvcHBlciBlbGVtZW50XG5cbiAgaWYgKGVsZW1lbnRDb250ZXh0ID09PSBwb3BwZXIgJiYgb2Zmc2V0RGF0YSkge1xuICAgIHZhciBvZmZzZXQgPSBvZmZzZXREYXRhW3BsYWNlbWVudF07XG4gICAgT2JqZWN0LmtleXMob3ZlcmZsb3dPZmZzZXRzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBtdWx0aXBseSA9IFtyaWdodCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/IDEgOiAtMTtcbiAgICAgIHZhciBheGlzID0gW3RvcCwgYm90dG9tXS5pbmRleE9mKGtleSkgPj0gMCA/ICd5JyA6ICd4JztcbiAgICAgIG92ZXJmbG93T2Zmc2V0c1trZXldICs9IG9mZnNldFtheGlzXSAqIG11bHRpcGx5O1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG92ZXJmbG93T2Zmc2V0cztcbn1cblxudmFyIElOVkFMSURfRUxFTUVOVF9FUlJPUiA9ICdQb3BwZXI6IEludmFsaWQgcmVmZXJlbmNlIG9yIHBvcHBlciBhcmd1bWVudCBwcm92aWRlZC4gVGhleSBtdXN0IGJlIGVpdGhlciBhIERPTSBlbGVtZW50IG9yIHZpcnR1YWwgZWxlbWVudC4nO1xudmFyIElORklOSVRFX0xPT1BfRVJST1IgPSAnUG9wcGVyOiBBbiBpbmZpbml0ZSBsb29wIGluIHRoZSBtb2RpZmllcnMgY3ljbGUgaGFzIGJlZW4gZGV0ZWN0ZWQhIFRoZSBjeWNsZSBoYXMgYmVlbiBpbnRlcnJ1cHRlZCB0byBwcmV2ZW50IGEgYnJvd3NlciBjcmFzaC4nO1xudmFyIERFRkFVTFRfT1BUSU9OUyA9IHtcbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcbiAgbW9kaWZpZXJzOiBbXSxcbiAgc3RyYXRlZ3k6ICdhYnNvbHV0ZSdcbn07XG5cbmZ1bmN0aW9uIGFyZVZhbGlkRWxlbWVudHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gIWFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgIHJldHVybiAhKGVsZW1lbnQgJiYgdHlwZW9mIGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0ID09PSAnZnVuY3Rpb24nKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvcHBlckdlbmVyYXRvcihnZW5lcmF0b3JPcHRpb25zKSB7XG4gIGlmIChnZW5lcmF0b3JPcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBnZW5lcmF0b3JPcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX2dlbmVyYXRvck9wdGlvbnMgPSBnZW5lcmF0b3JPcHRpb25zLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmID0gX2dlbmVyYXRvck9wdGlvbnMuZGVmYXVsdE1vZGlmaWVycyxcbiAgICAgIGRlZmF1bHRNb2RpZmllcnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYgPT09IHZvaWQgMCA/IFtdIDogX2dlbmVyYXRvck9wdGlvbnMkZGVmLFxuICAgICAgX2dlbmVyYXRvck9wdGlvbnMkZGVmMiA9IF9nZW5lcmF0b3JPcHRpb25zLmRlZmF1bHRPcHRpb25zLFxuICAgICAgZGVmYXVsdE9wdGlvbnMgPSBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyID09PSB2b2lkIDAgPyBERUZBVUxUX09QVElPTlMgOiBfZ2VuZXJhdG9yT3B0aW9ucyRkZWYyO1xuICByZXR1cm4gZnVuY3Rpb24gY3JlYXRlUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgICAgb3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgIH1cblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIHBsYWNlbWVudDogJ2JvdHRvbScsXG4gICAgICBvcmRlcmVkTW9kaWZpZXJzOiBbXSxcbiAgICAgIG9wdGlvbnM6IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfT1BUSU9OUywgZGVmYXVsdE9wdGlvbnMpLFxuICAgICAgbW9kaWZpZXJzRGF0YToge30sXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICByZWZlcmVuY2U6IHJlZmVyZW5jZSxcbiAgICAgICAgcG9wcGVyOiBwb3BwZXJcbiAgICAgIH0sXG4gICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgIHN0eWxlczoge31cbiAgICB9O1xuICAgIHZhciBlZmZlY3RDbGVhbnVwRm5zID0gW107XG4gICAgdmFyIGlzRGVzdHJveWVkID0gZmFsc2U7XG4gICAgdmFyIGluc3RhbmNlID0ge1xuICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgc2V0T3B0aW9uczogZnVuY3Rpb24gc2V0T3B0aW9ucyhzZXRPcHRpb25zQWN0aW9uKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHNldE9wdGlvbnNBY3Rpb24gPT09ICdmdW5jdGlvbicgPyBzZXRPcHRpb25zQWN0aW9uKHN0YXRlLm9wdGlvbnMpIDogc2V0T3B0aW9uc0FjdGlvbjtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBzdGF0ZS5vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMsIHN0YXRlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICBzdGF0ZS5zY3JvbGxQYXJlbnRzID0ge1xuICAgICAgICAgIHJlZmVyZW5jZTogaXNFbGVtZW50KHJlZmVyZW5jZSkgPyBsaXN0U2Nyb2xsUGFyZW50cyhyZWZlcmVuY2UpIDogcmVmZXJlbmNlLmNvbnRleHRFbGVtZW50ID8gbGlzdFNjcm9sbFBhcmVudHMocmVmZXJlbmNlLmNvbnRleHRFbGVtZW50KSA6IFtdLFxuICAgICAgICAgIHBvcHBlcjogbGlzdFNjcm9sbFBhcmVudHMocG9wcGVyKVxuICAgICAgICB9OyAvLyBPcmRlcnMgdGhlIG1vZGlmaWVycyBiYXNlZCBvbiB0aGVpciBkZXBlbmRlbmNpZXMgYW5kIGBwaGFzZWBcbiAgICAgICAgLy8gcHJvcGVydGllc1xuXG4gICAgICAgIHZhciBvcmRlcmVkTW9kaWZpZXJzID0gb3JkZXJNb2RpZmllcnMobWVyZ2VCeU5hbWUoW10uY29uY2F0KGRlZmF1bHRNb2RpZmllcnMsIHN0YXRlLm9wdGlvbnMubW9kaWZpZXJzKSkpOyAvLyBTdHJpcCBvdXQgZGlzYWJsZWQgbW9kaWZpZXJzXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycyA9IG9yZGVyZWRNb2RpZmllcnMuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgcmV0dXJuIG0uZW5hYmxlZDtcbiAgICAgICAgfSk7IC8vIFZhbGlkYXRlIHRoZSBwcm92aWRlZCBtb2RpZmllcnMgc28gdGhhdCB0aGUgY29uc3VtZXIgd2lsbCBnZXQgd2FybmVkXG4gICAgICAgIC8vIGlmIG9uZSBvZiB0aGUgbW9kaWZpZXJzIGlzIGludmFsaWQgZm9yIGFueSByZWFzb25cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgdmFyIG1vZGlmaWVycyA9IHVuaXF1ZUJ5KFtdLmNvbmNhdChvcmRlcmVkTW9kaWZpZXJzLCBzdGF0ZS5vcHRpb25zLm1vZGlmaWVycyksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IF9yZWYubmFtZTtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhbGlkYXRlTW9kaWZpZXJzKG1vZGlmaWVycyk7XG5cbiAgICAgICAgICBpZiAoZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5vcHRpb25zLnBsYWNlbWVudCkgPT09IGF1dG8pIHtcbiAgICAgICAgICAgIHZhciBmbGlwTW9kaWZpZXIgPSBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZpbmQoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09ICdmbGlwJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIWZsaXBNb2RpZmllcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFsnUG9wcGVyOiBcImF1dG9cIiBwbGFjZW1lbnRzIHJlcXVpcmUgdGhlIFwiZmxpcFwiIG1vZGlmaWVyIGJlJywgJ3ByZXNlbnQgYW5kIGVuYWJsZWQgdG8gd29yay4nXS5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBfZ2V0Q29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUocG9wcGVyKSxcbiAgICAgICAgICAgICAgbWFyZ2luVG9wID0gX2dldENvbXB1dGVkU3R5bGUubWFyZ2luVG9wLFxuICAgICAgICAgICAgICBtYXJnaW5SaWdodCA9IF9nZXRDb21wdXRlZFN0eWxlLm1hcmdpblJpZ2h0LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5Cb3R0b20sXG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQgPSBfZ2V0Q29tcHV0ZWRTdHlsZS5tYXJnaW5MZWZ0OyAvLyBXZSBubyBsb25nZXIgdGFrZSBpbnRvIGFjY291bnQgYG1hcmdpbnNgIG9uIHRoZSBwb3BwZXIsIGFuZCBpdCBjYW5cbiAgICAgICAgICAvLyBjYXVzZSBidWdzIHdpdGggcG9zaXRpb25pbmcsIHNvIHdlJ2xsIHdhcm4gdGhlIGNvbnN1bWVyXG5cblxuICAgICAgICAgIGlmIChbbWFyZ2luVG9wLCBtYXJnaW5SaWdodCwgbWFyZ2luQm90dG9tLCBtYXJnaW5MZWZ0XS5zb21lKGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1hcmdpbik7XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbJ1BvcHBlcjogQ1NTIFwibWFyZ2luXCIgc3R5bGVzIGNhbm5vdCBiZSB1c2VkIHRvIGFwcGx5IHBhZGRpbmcnLCAnYmV0d2VlbiB0aGUgcG9wcGVyIGFuZCBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgb3IgYm91bmRhcnkuJywgJ1RvIHJlcGxpY2F0ZSBtYXJnaW4sIHVzZSB0aGUgYG9mZnNldGAgbW9kaWZpZXIsIGFzIHdlbGwgYXMnLCAndGhlIGBwYWRkaW5nYCBvcHRpb24gaW4gdGhlIGBwcmV2ZW50T3ZlcmZsb3dgIGFuZCBgZmxpcGAnLCAnbW9kaWZpZXJzLiddLmpvaW4oJyAnKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcnVuTW9kaWZpZXJFZmZlY3RzKCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZS51cGRhdGUoKTtcbiAgICAgIH0sXG4gICAgICAvLyBTeW5jIHVwZGF0ZSBcdTIwMTMgaXQgd2lsbCBhbHdheXMgYmUgZXhlY3V0ZWQsIGV2ZW4gaWYgbm90IG5lY2Vzc2FyeS4gVGhpc1xuICAgICAgLy8gaXMgdXNlZnVsIGZvciBsb3cgZnJlcXVlbmN5IHVwZGF0ZXMgd2hlcmUgc3luYyBiZWhhdmlvciBzaW1wbGlmaWVzIHRoZVxuICAgICAgLy8gbG9naWMuXG4gICAgICAvLyBGb3IgaGlnaCBmcmVxdWVuY3kgdXBkYXRlcyAoZS5nLiBgcmVzaXplYCBhbmQgYHNjcm9sbGAgZXZlbnRzKSwgYWx3YXlzXG4gICAgICAvLyBwcmVmZXIgdGhlIGFzeW5jIFBvcHBlciN1cGRhdGUgbWV0aG9kXG4gICAgICBmb3JjZVVwZGF0ZTogZnVuY3Rpb24gZm9yY2VVcGRhdGUoKSB7XG4gICAgICAgIGlmIChpc0Rlc3Ryb3llZCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBfc3RhdGUkZWxlbWVudHMgPSBzdGF0ZS5lbGVtZW50cyxcbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IF9zdGF0ZSRlbGVtZW50cy5yZWZlcmVuY2UsXG4gICAgICAgICAgICBwb3BwZXIgPSBfc3RhdGUkZWxlbWVudHMucG9wcGVyOyAvLyBEb24ndCBwcm9jZWVkIGlmIGByZWZlcmVuY2VgIG9yIGBwb3BwZXJgIGFyZSBub3QgdmFsaWQgZWxlbWVudHNcbiAgICAgICAgLy8gYW55bW9yZVxuXG4gICAgICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKElOVkFMSURfRUxFTUVOVF9FUlJPUik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IC8vIFN0b3JlIHRoZSByZWZlcmVuY2UgYW5kIHBvcHBlciByZWN0cyB0byBiZSByZWFkIGJ5IG1vZGlmaWVyc1xuXG5cbiAgICAgICAgc3RhdGUucmVjdHMgPSB7XG4gICAgICAgICAgcmVmZXJlbmNlOiBnZXRDb21wb3NpdGVSZWN0KHJlZmVyZW5jZSwgZ2V0T2Zmc2V0UGFyZW50KHBvcHBlciksIHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCcpLFxuICAgICAgICAgIHBvcHBlcjogZ2V0TGF5b3V0UmVjdChwb3BwZXIpXG4gICAgICAgIH07IC8vIE1vZGlmaWVycyBoYXZlIHRoZSBhYmlsaXR5IHRvIHJlc2V0IHRoZSBjdXJyZW50IHVwZGF0ZSBjeWNsZS4gVGhlXG4gICAgICAgIC8vIG1vc3QgY29tbW9uIHVzZSBjYXNlIGZvciB0aGlzIGlzIHRoZSBgZmxpcGAgbW9kaWZpZXIgY2hhbmdpbmcgdGhlXG4gICAgICAgIC8vIHBsYWNlbWVudCwgd2hpY2ggdGhlbiBuZWVkcyB0byByZS1ydW4gYWxsIHRoZSBtb2RpZmllcnMsIGJlY2F1c2UgdGhlXG4gICAgICAgIC8vIGxvZ2ljIHdhcyBwcmV2aW91c2x5IHJhbiBmb3IgdGhlIHByZXZpb3VzIHBsYWNlbWVudCBhbmQgaXMgdGhlcmVmb3JlXG4gICAgICAgIC8vIHN0YWxlL2luY29ycmVjdFxuXG4gICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYWNlbWVudCA9IHN0YXRlLm9wdGlvbnMucGxhY2VtZW50OyAvLyBPbiBlYWNoIHVwZGF0ZSBjeWNsZSwgdGhlIGBtb2RpZmllcnNEYXRhYCBwcm9wZXJ0eSBmb3IgZWFjaCBtb2RpZmllclxuICAgICAgICAvLyBpcyBmaWxsZWQgd2l0aCB0aGUgaW5pdGlhbCBkYXRhIHNwZWNpZmllZCBieSB0aGUgbW9kaWZpZXIuIFRoaXMgbWVhbnNcbiAgICAgICAgLy8gaXQgZG9lc24ndCBwZXJzaXN0IGFuZCBpcyBmcmVzaCBvbiBlYWNoIHVwZGF0ZS5cbiAgICAgICAgLy8gVG8gZW5zdXJlIHBlcnNpc3RlbnQgZGF0YSwgdXNlIGAke25hbWV9I3BlcnNpc3RlbnRgXG5cbiAgICAgICAgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tb2RpZmllcnNEYXRhW21vZGlmaWVyLm5hbWVdID0gT2JqZWN0LmFzc2lnbih7fSwgbW9kaWZpZXIuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgX19kZWJ1Z19sb29wc19fID0gMDtcblxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3RhdGUub3JkZXJlZE1vZGlmaWVycy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICAgICAgICBfX2RlYnVnX2xvb3BzX18gKz0gMTtcblxuICAgICAgICAgICAgaWYgKF9fZGVidWdfbG9vcHNfXyA+IDEwMCkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKElORklOSVRFX0xPT1BfRVJST1IpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUucmVzZXQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLnJlc2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBpbmRleCA9IC0xO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIF9zdGF0ZSRvcmRlcmVkTW9kaWZpZSA9IHN0YXRlLm9yZGVyZWRNb2RpZmllcnNbaW5kZXhdLFxuICAgICAgICAgICAgICBmbiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5mbixcbiAgICAgICAgICAgICAgX3N0YXRlJG9yZGVyZWRNb2RpZmllMiA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5vcHRpb25zLFxuICAgICAgICAgICAgICBfb3B0aW9ucyA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZTIgPT09IHZvaWQgMCA/IHt9IDogX3N0YXRlJG9yZGVyZWRNb2RpZmllMixcbiAgICAgICAgICAgICAgbmFtZSA9IF9zdGF0ZSRvcmRlcmVkTW9kaWZpZS5uYW1lO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgc3RhdGUgPSBmbih7XG4gICAgICAgICAgICAgIHN0YXRlOiBzdGF0ZSxcbiAgICAgICAgICAgICAgb3B0aW9uczogX29wdGlvbnMsXG4gICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgICAgICAgfSkgfHwgc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQXN5bmMgYW5kIG9wdGltaXN0aWNhbGx5IG9wdGltaXplZCB1cGRhdGUgXHUyMDEzIGl0IHdpbGwgbm90IGJlIGV4ZWN1dGVkIGlmXG4gICAgICAvLyBub3QgbmVjZXNzYXJ5IChkZWJvdW5jZWQgdG8gcnVuIGF0IG1vc3Qgb25jZS1wZXItdGljaylcbiAgICAgIHVwZGF0ZTogZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgICAgIHJlc29sdmUoc3RhdGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0pLFxuICAgICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpO1xuICAgICAgICBpc0Rlc3Ryb3llZCA9IHRydWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICghYXJlVmFsaWRFbGVtZW50cyhyZWZlcmVuY2UsIHBvcHBlcikpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihJTlZBTElEX0VMRU1FTlRfRVJST1IpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaW5zdGFuY2Uuc2V0T3B0aW9ucyhvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgaWYgKCFpc0Rlc3Ryb3llZCAmJiBvcHRpb25zLm9uRmlyc3RVcGRhdGUpIHtcbiAgICAgICAgb3B0aW9ucy5vbkZpcnN0VXBkYXRlKHN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gTW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSBiZWZvcmUgdGhlIGZpcnN0XG4gICAgLy8gdXBkYXRlIGN5Y2xlIHJ1bnMuIFRoZXkgd2lsbCBiZSBleGVjdXRlZCBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgdXBkYXRlXG4gICAgLy8gY3ljbGUuIFRoaXMgaXMgdXNlZnVsIHdoZW4gYSBtb2RpZmllciBhZGRzIHNvbWUgcGVyc2lzdGVudCBkYXRhIHRoYXRcbiAgICAvLyBvdGhlciBtb2RpZmllcnMgbmVlZCB0byB1c2UsIGJ1dCB0aGUgbW9kaWZpZXIgaXMgcnVuIGFmdGVyIHRoZSBkZXBlbmRlbnRcbiAgICAvLyBvbmUuXG5cbiAgICBmdW5jdGlvbiBydW5Nb2RpZmllckVmZmVjdHMoKSB7XG4gICAgICBzdGF0ZS5vcmRlcmVkTW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBuYW1lID0gX3JlZjMubmFtZSxcbiAgICAgICAgICAgIF9yZWYzJG9wdGlvbnMgPSBfcmVmMy5vcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9ucyA9IF9yZWYzJG9wdGlvbnMgPT09IHZvaWQgMCA/IHt9IDogX3JlZjMkb3B0aW9ucyxcbiAgICAgICAgICAgIGVmZmVjdCA9IF9yZWYzLmVmZmVjdDtcblxuICAgICAgICBpZiAodHlwZW9mIGVmZmVjdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHZhciBjbGVhbnVwRm4gPSBlZmZlY3Qoe1xuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHZhciBub29wRm4gPSBmdW5jdGlvbiBub29wRm4oKSB7fTtcblxuICAgICAgICAgIGVmZmVjdENsZWFudXBGbnMucHVzaChjbGVhbnVwRm4gfHwgbm9vcEZuKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYW51cE1vZGlmaWVyRWZmZWN0cygpIHtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgcmV0dXJuIGZuKCk7XG4gICAgICB9KTtcbiAgICAgIGVmZmVjdENsZWFudXBGbnMgPSBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5zdGFuY2U7XG4gIH07XG59XG5cbnZhciBwYXNzaXZlID0ge1xuICBwYXNzaXZlOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBlZmZlY3QkMihfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2UsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zO1xuICB2YXIgX29wdGlvbnMkc2Nyb2xsID0gb3B0aW9ucy5zY3JvbGwsXG4gICAgICBzY3JvbGwgPSBfb3B0aW9ucyRzY3JvbGwgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRzY3JvbGwsXG4gICAgICBfb3B0aW9ucyRyZXNpemUgPSBvcHRpb25zLnJlc2l6ZSxcbiAgICAgIHJlc2l6ZSA9IF9vcHRpb25zJHJlc2l6ZSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJHJlc2l6ZTtcbiAgdmFyIHdpbmRvdyA9IGdldFdpbmRvdyhzdGF0ZS5lbGVtZW50cy5wb3BwZXIpO1xuICB2YXIgc2Nyb2xsUGFyZW50cyA9IFtdLmNvbmNhdChzdGF0ZS5zY3JvbGxQYXJlbnRzLnJlZmVyZW5jZSwgc3RhdGUuc2Nyb2xsUGFyZW50cy5wb3BwZXIpO1xuXG4gIGlmIChzY3JvbGwpIHtcbiAgICBzY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHNjcm9sbFBhcmVudCkge1xuICAgICAgc2Nyb2xsUGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAocmVzaXplKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHNjcm9sbFBhcmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2Nyb2xsUGFyZW50KSB7XG4gICAgICAgIHNjcm9sbFBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS51cGRhdGUsIHBhc3NpdmUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlc2l6ZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGluc3RhbmNlLnVwZGF0ZSwgcGFzc2l2ZSk7XG4gICAgfVxuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGV2ZW50TGlzdGVuZXJzID0ge1xuICBuYW1lOiAnZXZlbnRMaXN0ZW5lcnMnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ3dyaXRlJyxcbiAgZm46IGZ1bmN0aW9uIGZuKCkge30sXG4gIGVmZmVjdDogZWZmZWN0JDIsXG4gIGRhdGE6IHt9XG59O1xuXG5mdW5jdGlvbiBwb3BwZXJPZmZzZXRzKF9yZWYpIHtcbiAgdmFyIHN0YXRlID0gX3JlZi5zdGF0ZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWU7XG4gIC8vIE9mZnNldHMgYXJlIHRoZSBhY3R1YWwgcG9zaXRpb24gdGhlIHBvcHBlciBuZWVkcyB0byBoYXZlIHRvIGJlXG4gIC8vIHByb3Blcmx5IHBvc2l0aW9uZWQgbmVhciBpdHMgcmVmZXJlbmNlIGVsZW1lbnRcbiAgLy8gVGhpcyBpcyB0aGUgbW9zdCBiYXNpYyBwbGFjZW1lbnQsIGFuZCB3aWxsIGJlIGFkanVzdGVkIGJ5XG4gIC8vIHRoZSBtb2RpZmllcnMgaW4gdGhlIG5leHQgc3RlcFxuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gY29tcHV0ZU9mZnNldHMoe1xuICAgIHJlZmVyZW5jZTogc3RhdGUucmVjdHMucmVmZXJlbmNlLFxuICAgIGVsZW1lbnQ6IHN0YXRlLnJlY3RzLnBvcHBlcixcbiAgICBzdHJhdGVneTogJ2Fic29sdXRlJyxcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBwb3BwZXJPZmZzZXRzJDEgPSB7XG4gIG5hbWU6ICdwb3BwZXJPZmZzZXRzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdyZWFkJyxcbiAgZm46IHBvcHBlck9mZnNldHMsXG4gIGRhdGE6IHt9XG59O1xuXG52YXIgdW5zZXRTaWRlcyA9IHtcbiAgdG9wOiAnYXV0bycsXG4gIHJpZ2h0OiAnYXV0bycsXG4gIGJvdHRvbTogJ2F1dG8nLFxuICBsZWZ0OiAnYXV0bydcbn07IC8vIFJvdW5kIHRoZSBvZmZzZXRzIHRvIHRoZSBuZWFyZXN0IHN1aXRhYmxlIHN1YnBpeGVsIGJhc2VkIG9uIHRoZSBEUFIuXG4vLyBab29taW5nIGNhbiBjaGFuZ2UgdGhlIERQUiwgYnV0IGl0IHNlZW1zIHRvIHJlcG9ydCBhIHZhbHVlIHRoYXQgd2lsbFxuLy8gY2xlYW5seSBkaXZpZGUgdGhlIHZhbHVlcyBpbnRvIHRoZSBhcHByb3ByaWF0ZSBzdWJwaXhlbHMuXG5cbmZ1bmN0aW9uIHJvdW5kT2Zmc2V0c0J5RFBSKF9yZWYpIHtcbiAgdmFyIHggPSBfcmVmLngsXG4gICAgICB5ID0gX3JlZi55O1xuICB2YXIgd2luID0gd2luZG93O1xuICB2YXIgZHByID0gd2luLmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgcmV0dXJuIHtcbiAgICB4OiByb3VuZCh4ICogZHByKSAvIGRwciB8fCAwLFxuICAgIHk6IHJvdW5kKHkgKiBkcHIpIC8gZHByIHx8IDBcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwVG9TdHlsZXMoX3JlZjIpIHtcbiAgdmFyIF9PYmplY3QkYXNzaWduMjtcblxuICB2YXIgcG9wcGVyID0gX3JlZjIucG9wcGVyLFxuICAgICAgcG9wcGVyUmVjdCA9IF9yZWYyLnBvcHBlclJlY3QsXG4gICAgICBwbGFjZW1lbnQgPSBfcmVmMi5wbGFjZW1lbnQsXG4gICAgICB2YXJpYXRpb24gPSBfcmVmMi52YXJpYXRpb24sXG4gICAgICBvZmZzZXRzID0gX3JlZjIub2Zmc2V0cyxcbiAgICAgIHBvc2l0aW9uID0gX3JlZjIucG9zaXRpb24sXG4gICAgICBncHVBY2NlbGVyYXRpb24gPSBfcmVmMi5ncHVBY2NlbGVyYXRpb24sXG4gICAgICBhZGFwdGl2ZSA9IF9yZWYyLmFkYXB0aXZlLFxuICAgICAgcm91bmRPZmZzZXRzID0gX3JlZjIucm91bmRPZmZzZXRzLFxuICAgICAgaXNGaXhlZCA9IF9yZWYyLmlzRml4ZWQ7XG5cbiAgdmFyIF9yZWYzID0gcm91bmRPZmZzZXRzID09PSB0cnVlID8gcm91bmRPZmZzZXRzQnlEUFIob2Zmc2V0cykgOiB0eXBlb2Ygcm91bmRPZmZzZXRzID09PSAnZnVuY3Rpb24nID8gcm91bmRPZmZzZXRzKG9mZnNldHMpIDogb2Zmc2V0cyxcbiAgICAgIF9yZWYzJHggPSBfcmVmMy54LFxuICAgICAgeCA9IF9yZWYzJHggPT09IHZvaWQgMCA/IDAgOiBfcmVmMyR4LFxuICAgICAgX3JlZjMkeSA9IF9yZWYzLnksXG4gICAgICB5ID0gX3JlZjMkeSA9PT0gdm9pZCAwID8gMCA6IF9yZWYzJHk7XG5cbiAgdmFyIGhhc1ggPSBvZmZzZXRzLmhhc093blByb3BlcnR5KCd4Jyk7XG4gIHZhciBoYXNZID0gb2Zmc2V0cy5oYXNPd25Qcm9wZXJ0eSgneScpO1xuICB2YXIgc2lkZVggPSBsZWZ0O1xuICB2YXIgc2lkZVkgPSB0b3A7XG4gIHZhciB3aW4gPSB3aW5kb3c7XG5cbiAgaWYgKGFkYXB0aXZlKSB7XG4gICAgdmFyIG9mZnNldFBhcmVudCA9IGdldE9mZnNldFBhcmVudChwb3BwZXIpO1xuICAgIHZhciBoZWlnaHRQcm9wID0gJ2NsaWVudEhlaWdodCc7XG4gICAgdmFyIHdpZHRoUHJvcCA9ICdjbGllbnRXaWR0aCc7XG5cbiAgICBpZiAob2Zmc2V0UGFyZW50ID09PSBnZXRXaW5kb3cocG9wcGVyKSkge1xuICAgICAgb2Zmc2V0UGFyZW50ID0gZ2V0RG9jdW1lbnRFbGVtZW50KHBvcHBlcik7XG5cbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKG9mZnNldFBhcmVudCkucG9zaXRpb24gIT09ICdzdGF0aWMnICYmIHBvc2l0aW9uID09PSAnYWJzb2x1dGUnKSB7XG4gICAgICAgIGhlaWdodFByb3AgPSAnc2Nyb2xsSGVpZ2h0JztcbiAgICAgICAgd2lkdGhQcm9wID0gJ3Njcm9sbFdpZHRoJztcbiAgICAgIH1cbiAgICB9IC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLWNhc3RdOiBmb3JjZSB0eXBlIHJlZmluZW1lbnQsIHdlIGNvbXBhcmUgb2Zmc2V0UGFyZW50IHdpdGggd2luZG93IGFib3ZlLCBidXQgRmxvdyBkb2Vzbid0IGRldGVjdCBpdFxuXG5cbiAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSB0b3AgfHwgKHBsYWNlbWVudCA9PT0gbGVmdCB8fCBwbGFjZW1lbnQgPT09IHJpZ2h0KSAmJiB2YXJpYXRpb24gPT09IGVuZCkge1xuICAgICAgc2lkZVkgPSBib3R0b207XG4gICAgICB2YXIgb2Zmc2V0WSA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LmhlaWdodCA6IC8vICRGbG93Rml4TWVbcHJvcC1taXNzaW5nXVxuICAgICAgb2Zmc2V0UGFyZW50W2hlaWdodFByb3BdO1xuICAgICAgeSAtPSBvZmZzZXRZIC0gcG9wcGVyUmVjdC5oZWlnaHQ7XG4gICAgICB5ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50ID09PSBsZWZ0IHx8IChwbGFjZW1lbnQgPT09IHRvcCB8fCBwbGFjZW1lbnQgPT09IGJvdHRvbSkgJiYgdmFyaWF0aW9uID09PSBlbmQpIHtcbiAgICAgIHNpZGVYID0gcmlnaHQ7XG4gICAgICB2YXIgb2Zmc2V0WCA9IGlzRml4ZWQgJiYgd2luLnZpc3VhbFZpZXdwb3J0ID8gd2luLnZpc3VhbFZpZXdwb3J0LndpZHRoIDogLy8gJEZsb3dGaXhNZVtwcm9wLW1pc3NpbmddXG4gICAgICBvZmZzZXRQYXJlbnRbd2lkdGhQcm9wXTtcbiAgICAgIHggLT0gb2Zmc2V0WCAtIHBvcHBlclJlY3Qud2lkdGg7XG4gICAgICB4ICo9IGdwdUFjY2VsZXJhdGlvbiA/IDEgOiAtMTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0gT2JqZWN0LmFzc2lnbih7XG4gICAgcG9zaXRpb246IHBvc2l0aW9uXG4gIH0sIGFkYXB0aXZlICYmIHVuc2V0U2lkZXMpO1xuXG4gIGlmIChncHVBY2NlbGVyYXRpb24pIHtcbiAgICB2YXIgX09iamVjdCRhc3NpZ247XG5cbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCAoX09iamVjdCRhc3NpZ24gPSB7fSwgX09iamVjdCRhc3NpZ25bc2lkZVldID0gaGFzWSA/ICcwJyA6ICcnLCBfT2JqZWN0JGFzc2lnbltzaWRlWF0gPSBoYXNYID8gJzAnIDogJycsIF9PYmplY3QkYXNzaWduLnRyYW5zZm9ybSA9ICh3aW4uZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSA8PSAxID8gXCJ0cmFuc2xhdGUoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweClcIiA6IFwidHJhbnNsYXRlM2QoXCIgKyB4ICsgXCJweCwgXCIgKyB5ICsgXCJweCwgMClcIiwgX09iamVjdCRhc3NpZ24pKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjb21tb25TdHlsZXMsIChfT2JqZWN0JGFzc2lnbjIgPSB7fSwgX09iamVjdCRhc3NpZ24yW3NpZGVZXSA9IGhhc1kgPyB5ICsgXCJweFwiIDogJycsIF9PYmplY3QkYXNzaWduMltzaWRlWF0gPSBoYXNYID8geCArIFwicHhcIiA6ICcnLCBfT2JqZWN0JGFzc2lnbjIudHJhbnNmb3JtID0gJycsIF9PYmplY3QkYXNzaWduMikpO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlU3R5bGVzKF9yZWY0KSB7XG4gIHZhciBzdGF0ZSA9IF9yZWY0LnN0YXRlLFxuICAgICAgb3B0aW9ucyA9IF9yZWY0Lm9wdGlvbnM7XG4gIHZhciBfb3B0aW9ucyRncHVBY2NlbGVyYXQgPSBvcHRpb25zLmdwdUFjY2VsZXJhdGlvbixcbiAgICAgIGdwdUFjY2VsZXJhdGlvbiA9IF9vcHRpb25zJGdwdUFjY2VsZXJhdCA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJGdwdUFjY2VsZXJhdCxcbiAgICAgIF9vcHRpb25zJGFkYXB0aXZlID0gb3B0aW9ucy5hZGFwdGl2ZSxcbiAgICAgIGFkYXB0aXZlID0gX29wdGlvbnMkYWRhcHRpdmUgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRhZGFwdGl2ZSxcbiAgICAgIF9vcHRpb25zJHJvdW5kT2Zmc2V0cyA9IG9wdGlvbnMucm91bmRPZmZzZXRzLFxuICAgICAgcm91bmRPZmZzZXRzID0gX29wdGlvbnMkcm91bmRPZmZzZXRzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkcm91bmRPZmZzZXRzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICB2YXIgdHJhbnNpdGlvblByb3BlcnR5ID0gZ2V0Q29tcHV0ZWRTdHlsZShzdGF0ZS5lbGVtZW50cy5wb3BwZXIpLnRyYW5zaXRpb25Qcm9wZXJ0eSB8fCAnJztcblxuICAgIGlmIChhZGFwdGl2ZSAmJiBbJ3RyYW5zZm9ybScsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5zb21lKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHRyYW5zaXRpb25Qcm9wZXJ0eS5pbmRleE9mKHByb3BlcnR5KSA+PSAwO1xuICAgIH0pKSB7XG4gICAgICBjb25zb2xlLndhcm4oWydQb3BwZXI6IERldGVjdGVkIENTUyB0cmFuc2l0aW9ucyBvbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZycsICdDU1MgcHJvcGVydGllczogXCJ0cmFuc2Zvcm1cIiwgXCJ0b3BcIiwgXCJyaWdodFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIi4nLCAnXFxuXFxuJywgJ0Rpc2FibGUgdGhlIFwiY29tcHV0ZVN0eWxlc1wiIG1vZGlmaWVyXFwncyBgYWRhcHRpdmVgIG9wdGlvbiB0byBhbGxvdycsICdmb3Igc21vb3RoIHRyYW5zaXRpb25zLCBvciByZW1vdmUgdGhlc2UgcHJvcGVydGllcyBmcm9tIHRoZSBDU1MnLCAndHJhbnNpdGlvbiBkZWNsYXJhdGlvbiBvbiB0aGUgcG9wcGVyIGVsZW1lbnQgaWYgb25seSB0cmFuc2l0aW9uaW5nJywgJ29wYWNpdHkgb3IgYmFja2dyb3VuZC1jb2xvciBmb3IgZXhhbXBsZS4nLCAnXFxuXFxuJywgJ1dlIHJlY29tbWVuZCB1c2luZyB0aGUgcG9wcGVyIGVsZW1lbnQgYXMgYSB3cmFwcGVyIGFyb3VuZCBhbiBpbm5lcicsICdlbGVtZW50IHRoYXQgY2FuIGhhdmUgYW55IENTUyBwcm9wZXJ0eSB0cmFuc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMuJ10uam9pbignICcpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29tbW9uU3R5bGVzID0ge1xuICAgIHBsYWNlbWVudDogZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpLFxuICAgIHZhcmlhdGlvbjogZ2V0VmFyaWF0aW9uKHN0YXRlLnBsYWNlbWVudCksXG4gICAgcG9wcGVyOiBzdGF0ZS5lbGVtZW50cy5wb3BwZXIsXG4gICAgcG9wcGVyUmVjdDogc3RhdGUucmVjdHMucG9wcGVyLFxuICAgIGdwdUFjY2VsZXJhdGlvbjogZ3B1QWNjZWxlcmF0aW9uLFxuICAgIGlzRml4ZWQ6IHN0YXRlLm9wdGlvbnMuc3RyYXRlZ3kgPT09ICdmaXhlZCdcbiAgfTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMucG9wcGVyID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUuc3R5bGVzLnBvcHBlciwgbWFwVG9TdHlsZXMoT2JqZWN0LmFzc2lnbih7fSwgY29tbW9uU3R5bGVzLCB7XG4gICAgICBvZmZzZXRzOiBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMsXG4gICAgICBwb3NpdGlvbjogc3RhdGUub3B0aW9ucy5zdHJhdGVneSxcbiAgICAgIGFkYXB0aXZlOiBhZGFwdGl2ZSxcbiAgICAgIHJvdW5kT2Zmc2V0czogcm91bmRPZmZzZXRzXG4gICAgfSkpKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLmFycm93ICE9IG51bGwpIHtcbiAgICBzdGF0ZS5zdHlsZXMuYXJyb3cgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5zdHlsZXMuYXJyb3csIG1hcFRvU3R5bGVzKE9iamVjdC5hc3NpZ24oe30sIGNvbW1vblN0eWxlcywge1xuICAgICAgb2Zmc2V0czogc3RhdGUubW9kaWZpZXJzRGF0YS5hcnJvdyxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgYWRhcHRpdmU6IGZhbHNlLFxuICAgICAgcm91bmRPZmZzZXRzOiByb3VuZE9mZnNldHNcbiAgICB9KSkpO1xuICB9XG5cbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1wbGFjZW1lbnQnOiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSk7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgY29tcHV0ZVN0eWxlcyQxID0ge1xuICBuYW1lOiAnY29tcHV0ZVN0eWxlcycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnYmVmb3JlV3JpdGUnLFxuICBmbjogY29tcHV0ZVN0eWxlcyxcbiAgZGF0YToge31cbn07XG5cbi8vIGFuZCBhcHBsaWVzIHRoZW0gdG8gdGhlIEhUTUxFbGVtZW50cyBzdWNoIGFzIHBvcHBlciBhbmQgYXJyb3dcblxuZnVuY3Rpb24gYXBwbHlTdHlsZXMoX3JlZikge1xuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlO1xuICBPYmplY3Qua2V5cyhzdGF0ZS5lbGVtZW50cykuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnN0eWxlc1tuYW1lXSB8fCB7fTtcbiAgICB2YXIgYXR0cmlidXRlcyA9IHN0YXRlLmF0dHJpYnV0ZXNbbmFtZV0gfHwge307XG4gICAgdmFyIGVsZW1lbnQgPSBzdGF0ZS5lbGVtZW50c1tuYW1lXTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoZWxlbWVudCkgfHwgIWdldE5vZGVOYW1lKGVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBGbG93IGRvZXNuJ3Qgc3VwcG9ydCB0byBleHRlbmQgdGhpcyBwcm9wZXJ0eSwgYnV0IGl0J3MgdGhlIG1vc3RcbiAgICAvLyBlZmZlY3RpdmUgd2F5IHRvIGFwcGx5IHN0eWxlcyB0byBhbiBIVE1MRWxlbWVudFxuICAgIC8vICRGbG93Rml4TWVbY2Fubm90LXdyaXRlXVxuXG5cbiAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGVzW25hbWVdO1xuXG4gICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUgPT09IHRydWUgPyAnJyA6IHZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVmZmVjdCQxKF9yZWYyKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYyLnN0YXRlO1xuICB2YXIgaW5pdGlhbFN0eWxlcyA9IHtcbiAgICBwb3BwZXI6IHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0ZS5vcHRpb25zLnN0cmF0ZWd5LFxuICAgICAgbGVmdDogJzAnLFxuICAgICAgdG9wOiAnMCcsXG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgYXJyb3c6IHtcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSxcbiAgICByZWZlcmVuY2U6IHt9XG4gIH07XG4gIE9iamVjdC5hc3NpZ24oc3RhdGUuZWxlbWVudHMucG9wcGVyLnN0eWxlLCBpbml0aWFsU3R5bGVzLnBvcHBlcik7XG4gIHN0YXRlLnN0eWxlcyA9IGluaXRpYWxTdHlsZXM7XG5cbiAgaWYgKHN0YXRlLmVsZW1lbnRzLmFycm93KSB7XG4gICAgT2JqZWN0LmFzc2lnbihzdGF0ZS5lbGVtZW50cy5hcnJvdy5zdHlsZSwgaW5pdGlhbFN0eWxlcy5hcnJvdyk7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIE9iamVjdC5rZXlzKHN0YXRlLmVsZW1lbnRzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzW25hbWVdO1xuICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBzdGF0ZS5hdHRyaWJ1dGVzW25hbWVdIHx8IHt9O1xuICAgICAgdmFyIHN0eWxlUHJvcGVydGllcyA9IE9iamVjdC5rZXlzKHN0YXRlLnN0eWxlcy5oYXNPd25Qcm9wZXJ0eShuYW1lKSA/IHN0YXRlLnN0eWxlc1tuYW1lXSA6IGluaXRpYWxTdHlsZXNbbmFtZV0pOyAvLyBTZXQgYWxsIHZhbHVlcyB0byBhbiBlbXB0eSBzdHJpbmcgdG8gdW5zZXQgdGhlbVxuXG4gICAgICB2YXIgc3R5bGUgPSBzdHlsZVByb3BlcnRpZXMucmVkdWNlKGZ1bmN0aW9uIChzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgc3R5bGVbcHJvcGVydHldID0gJyc7XG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH0sIHt9KTsgLy8gYXJyb3cgaXMgb3B0aW9uYWwgKyB2aXJ0dWFsIGVsZW1lbnRzXG5cbiAgICAgIGlmICghaXNIVE1MRWxlbWVudChlbGVtZW50KSB8fCAhZ2V0Tm9kZU5hbWUoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIHN0eWxlKTtcbiAgICAgIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgYXBwbHlTdHlsZXMkMSA9IHtcbiAgbmFtZTogJ2FwcGx5U3R5bGVzJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICd3cml0ZScsXG4gIGZuOiBhcHBseVN0eWxlcyxcbiAgZWZmZWN0OiBlZmZlY3QkMSxcbiAgcmVxdWlyZXM6IFsnY29tcHV0ZVN0eWxlcyddXG59O1xuXG5mdW5jdGlvbiBkaXN0YW5jZUFuZFNraWRkaW5nVG9YWShwbGFjZW1lbnQsIHJlY3RzLCBvZmZzZXQpIHtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHZhciBpbnZlcnREaXN0YW5jZSA9IFtsZWZ0LCB0b3BdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMCA/IC0xIDogMTtcblxuICB2YXIgX3JlZiA9IHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicgPyBvZmZzZXQoT2JqZWN0LmFzc2lnbih7fSwgcmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9KSkgOiBvZmZzZXQsXG4gICAgICBza2lkZGluZyA9IF9yZWZbMF0sXG4gICAgICBkaXN0YW5jZSA9IF9yZWZbMV07XG5cbiAgc2tpZGRpbmcgPSBza2lkZGluZyB8fCAwO1xuICBkaXN0YW5jZSA9IChkaXN0YW5jZSB8fCAwKSAqIGludmVydERpc3RhbmNlO1xuICByZXR1cm4gW2xlZnQsIHJpZ2h0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpID49IDAgPyB7XG4gICAgeDogZGlzdGFuY2UsXG4gICAgeTogc2tpZGRpbmdcbiAgfSA6IHtcbiAgICB4OiBza2lkZGluZyxcbiAgICB5OiBkaXN0YW5jZVxuICB9O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucyxcbiAgICAgIG5hbWUgPSBfcmVmMi5uYW1lO1xuICB2YXIgX29wdGlvbnMkb2Zmc2V0ID0gb3B0aW9ucy5vZmZzZXQsXG4gICAgICBvZmZzZXQgPSBfb3B0aW9ucyRvZmZzZXQgPT09IHZvaWQgMCA/IFswLCAwXSA6IF9vcHRpb25zJG9mZnNldDtcbiAgdmFyIGRhdGEgPSBwbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRpc3RhbmNlQW5kU2tpZGRpbmdUb1hZKHBsYWNlbWVudCwgc3RhdGUucmVjdHMsIG9mZnNldCk7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICB2YXIgX2RhdGEkc3RhdGUkcGxhY2VtZW50ID0gZGF0YVtzdGF0ZS5wbGFjZW1lbnRdLFxuICAgICAgeCA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC54LFxuICAgICAgeSA9IF9kYXRhJHN0YXRlJHBsYWNlbWVudC55O1xuXG4gIGlmIChzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHMgIT0gbnVsbCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cy54ICs9IHg7XG4gICAgc3RhdGUubW9kaWZpZXJzRGF0YS5wb3BwZXJPZmZzZXRzLnkgKz0geTtcbiAgfVxuXG4gIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0gPSBkYXRhO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIG9mZnNldCQxID0ge1xuICBuYW1lOiAnb2Zmc2V0JyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgcmVxdWlyZXM6IFsncG9wcGVyT2Zmc2V0cyddLFxuICBmbjogb2Zmc2V0XG59O1xuXG52YXIgaGFzaCQxID0ge1xuICBsZWZ0OiAncmlnaHQnLFxuICByaWdodDogJ2xlZnQnLFxuICBib3R0b206ICd0b3AnLFxuICB0b3A6ICdib3R0b20nXG59O1xuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIGZ1bmN0aW9uIChtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGhhc2gkMVttYXRjaGVkXTtcbiAgfSk7XG59XG5cbnZhciBoYXNoID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uUGxhY2VtZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL3N0YXJ0fGVuZC9nLCBmdW5jdGlvbiAobWF0Y2hlZCkge1xuICAgIHJldHVybiBoYXNoW21hdGNoZWRdO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBwbGFjZW1lbnQgPSBfb3B0aW9ucy5wbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeSA9IF9vcHRpb25zLmJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5ID0gX29wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IF9vcHRpb25zLnBhZGRpbmcsXG4gICAgICBmbGlwVmFyaWF0aW9ucyA9IF9vcHRpb25zLmZsaXBWYXJpYXRpb25zLFxuICAgICAgX29wdGlvbnMkYWxsb3dlZEF1dG9QID0gX29wdGlvbnMuYWxsb3dlZEF1dG9QbGFjZW1lbnRzLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gX29wdGlvbnMkYWxsb3dlZEF1dG9QID09PSB2b2lkIDAgPyBwbGFjZW1lbnRzIDogX29wdGlvbnMkYWxsb3dlZEF1dG9QO1xuICB2YXIgdmFyaWF0aW9uID0gZ2V0VmFyaWF0aW9uKHBsYWNlbWVudCk7XG4gIHZhciBwbGFjZW1lbnRzJDEgPSB2YXJpYXRpb24gPyBmbGlwVmFyaWF0aW9ucyA/IHZhcmlhdGlvblBsYWNlbWVudHMgOiB2YXJpYXRpb25QbGFjZW1lbnRzLmZpbHRlcihmdW5jdGlvbiAocGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSB2YXJpYXRpb247XG4gIH0pIDogYmFzZVBsYWNlbWVudHM7XG4gIHZhciBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMS5maWx0ZXIoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHJldHVybiBhbGxvd2VkQXV0b1BsYWNlbWVudHMuaW5kZXhPZihwbGFjZW1lbnQpID49IDA7XG4gIH0pO1xuXG4gIGlmIChhbGxvd2VkUGxhY2VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBhbGxvd2VkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMkMTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoWydQb3BwZXI6IFRoZSBgYWxsb3dlZEF1dG9QbGFjZW1lbnRzYCBvcHRpb24gZGlkIG5vdCBhbGxvdyBhbnknLCAncGxhY2VtZW50cy4gRW5zdXJlIHRoZSBgcGxhY2VtZW50YCBvcHRpb24gbWF0Y2hlcyB0aGUgdmFyaWF0aW9uJywgJ29mIHRoZSBhbGxvd2VkIHBsYWNlbWVudHMuJywgJ0ZvciBleGFtcGxlLCBcImF1dG9cIiBjYW5ub3QgYmUgdXNlZCB0byBhbGxvdyBcImJvdHRvbS1zdGFydFwiLicsICdVc2UgXCJhdXRvLXN0YXJ0XCIgaW5zdGVhZC4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfSAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXTogRmxvdyBzZWVtcyB0byBoYXZlIHByb2JsZW1zIHdpdGggdHdvIGFycmF5IHVuaW9ucy4uLlxuXG5cbiAgdmFyIG92ZXJmbG93cyA9IGFsbG93ZWRQbGFjZW1lbnRzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBwbGFjZW1lbnQpIHtcbiAgICBhY2NbcGxhY2VtZW50XSA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgIGJvdW5kYXJ5OiBib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZzogcGFkZGluZ1xuICAgIH0pW2dldEJhc2VQbGFjZW1lbnQocGxhY2VtZW50KV07XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuICByZXR1cm4gT2JqZWN0LmtleXMob3ZlcmZsb3dzKS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIG92ZXJmbG93c1thXSAtIG92ZXJmbG93c1tiXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEV4cGFuZGVkRmFsbGJhY2tQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBpZiAoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIG9wcG9zaXRlUGxhY2VtZW50ID0gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KTtcbiAgcmV0dXJuIFtnZXRPcHBvc2l0ZVZhcmlhdGlvblBsYWNlbWVudChwbGFjZW1lbnQpLCBvcHBvc2l0ZVBsYWNlbWVudCwgZ2V0T3Bwb3NpdGVWYXJpYXRpb25QbGFjZW1lbnQob3Bwb3NpdGVQbGFjZW1lbnQpXTtcbn1cblxuZnVuY3Rpb24gZmxpcChfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcblxuICBpZiAoc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXS5fc2tpcCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyRtYWluQXhpcyA9IG9wdGlvbnMubWFpbkF4aXMsXG4gICAgICBjaGVja01haW5BeGlzID0gX29wdGlvbnMkbWFpbkF4aXMgPT09IHZvaWQgMCA/IHRydWUgOiBfb3B0aW9ucyRtYWluQXhpcyxcbiAgICAgIF9vcHRpb25zJGFsdEF4aXMgPSBvcHRpb25zLmFsdEF4aXMsXG4gICAgICBjaGVja0FsdEF4aXMgPSBfb3B0aW9ucyRhbHRBeGlzID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIHNwZWNpZmllZEZhbGxiYWNrUGxhY2VtZW50cyA9IG9wdGlvbnMuZmFsbGJhY2tQbGFjZW1lbnRzLFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgX29wdGlvbnMkZmxpcFZhcmlhdGlvID0gb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyxcbiAgICAgIGZsaXBWYXJpYXRpb25zID0gX29wdGlvbnMkZmxpcFZhcmlhdGlvID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkZmxpcFZhcmlhdGlvLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzID0gb3B0aW9ucy5hbGxvd2VkQXV0b1BsYWNlbWVudHM7XG4gIHZhciBwcmVmZXJyZWRQbGFjZW1lbnQgPSBzdGF0ZS5vcHRpb25zLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHByZWZlcnJlZFBsYWNlbWVudCk7XG4gIHZhciBpc0Jhc2VQbGFjZW1lbnQgPSBiYXNlUGxhY2VtZW50ID09PSBwcmVmZXJyZWRQbGFjZW1lbnQ7XG4gIHZhciBmYWxsYmFja1BsYWNlbWVudHMgPSBzcGVjaWZpZWRGYWxsYmFja1BsYWNlbWVudHMgfHwgKGlzQmFzZVBsYWNlbWVudCB8fCAhZmxpcFZhcmlhdGlvbnMgPyBbZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocHJlZmVycmVkUGxhY2VtZW50KV0gOiBnZXRFeHBhbmRlZEZhbGxiYWNrUGxhY2VtZW50cyhwcmVmZXJyZWRQbGFjZW1lbnQpKTtcbiAgdmFyIHBsYWNlbWVudHMgPSBbcHJlZmVycmVkUGxhY2VtZW50XS5jb25jYXQoZmFsbGJhY2tQbGFjZW1lbnRzKS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgcGxhY2VtZW50KSB7XG4gICAgcmV0dXJuIGFjYy5jb25jYXQoZ2V0QmFzZVBsYWNlbWVudChwbGFjZW1lbnQpID09PSBhdXRvID8gY29tcHV0ZUF1dG9QbGFjZW1lbnQoc3RhdGUsIHtcbiAgICAgIHBsYWNlbWVudDogcGxhY2VtZW50LFxuICAgICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgICAgcm9vdEJvdW5kYXJ5OiByb290Qm91bmRhcnksXG4gICAgICBwYWRkaW5nOiBwYWRkaW5nLFxuICAgICAgZmxpcFZhcmlhdGlvbnM6IGZsaXBWYXJpYXRpb25zLFxuICAgICAgYWxsb3dlZEF1dG9QbGFjZW1lbnRzOiBhbGxvd2VkQXV0b1BsYWNlbWVudHNcbiAgICB9KSA6IHBsYWNlbWVudCk7XG4gIH0sIFtdKTtcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgY2hlY2tzTWFwID0gbmV3IE1hcCgpO1xuICB2YXIgbWFrZUZhbGxiYWNrQ2hlY2tzID0gdHJ1ZTtcbiAgdmFyIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IHBsYWNlbWVudHNbMF07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwbGFjZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBsYWNlbWVudCA9IHBsYWNlbWVudHNbaV07XG5cbiAgICB2YXIgX2Jhc2VQbGFjZW1lbnQgPSBnZXRCYXNlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgaXNTdGFydFZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihwbGFjZW1lbnQpID09PSBzdGFydDtcbiAgICB2YXIgaXNWZXJ0aWNhbCA9IFt0b3AsIGJvdHRvbV0uaW5kZXhPZihfYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgICB2YXIgbGVuID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcbiAgICB2YXIgb3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgICAgcGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgICBib3VuZGFyeTogYm91bmRhcnksXG4gICAgICByb290Qm91bmRhcnk6IHJvb3RCb3VuZGFyeSxcbiAgICAgIGFsdEJvdW5kYXJ5OiBhbHRCb3VuZGFyeSxcbiAgICAgIHBhZGRpbmc6IHBhZGRpbmdcbiAgICB9KTtcbiAgICB2YXIgbWFpblZhcmlhdGlvblNpZGUgPSBpc1ZlcnRpY2FsID8gaXNTdGFydFZhcmlhdGlvbiA/IHJpZ2h0IDogbGVmdCA6IGlzU3RhcnRWYXJpYXRpb24gPyBib3R0b20gOiB0b3A7XG5cbiAgICBpZiAocmVmZXJlbmNlUmVjdFtsZW5dID4gcG9wcGVyUmVjdFtsZW5dKSB7XG4gICAgICBtYWluVmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB9XG5cbiAgICB2YXIgYWx0VmFyaWF0aW9uU2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5WYXJpYXRpb25TaWRlKTtcbiAgICB2YXIgY2hlY2tzID0gW107XG5cbiAgICBpZiAoY2hlY2tNYWluQXhpcykge1xuICAgICAgY2hlY2tzLnB1c2gob3ZlcmZsb3dbX2Jhc2VQbGFjZW1lbnRdIDw9IDApO1xuICAgIH1cblxuICAgIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICAgIGNoZWNrcy5wdXNoKG92ZXJmbG93W21haW5WYXJpYXRpb25TaWRlXSA8PSAwLCBvdmVyZmxvd1thbHRWYXJpYXRpb25TaWRlXSA8PSAwKTtcbiAgICB9XG5cbiAgICBpZiAoY2hlY2tzLmV2ZXJ5KGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgcmV0dXJuIGNoZWNrO1xuICAgIH0pKSB7XG4gICAgICBmaXJzdEZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gICAgICBtYWtlRmFsbGJhY2tDaGVja3MgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNoZWNrc01hcC5zZXQocGxhY2VtZW50LCBjaGVja3MpO1xuICB9XG5cbiAgaWYgKG1ha2VGYWxsYmFja0NoZWNrcykge1xuICAgIC8vIGAyYCBtYXkgYmUgZGVzaXJlZCBpbiBzb21lIGNhc2VzIFx1MjAxMyByZXNlYXJjaCBsYXRlclxuICAgIHZhciBudW1iZXJPZkNoZWNrcyA9IGZsaXBWYXJpYXRpb25zID8gMyA6IDE7XG5cbiAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgICAgdmFyIGZpdHRpbmdQbGFjZW1lbnQgPSBwbGFjZW1lbnRzLmZpbmQoZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgICAgICB2YXIgY2hlY2tzID0gY2hlY2tzTWFwLmdldChwbGFjZW1lbnQpO1xuXG4gICAgICAgIGlmIChjaGVja3MpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tzLnNsaWNlKDAsIF9pKS5ldmVyeShmdW5jdGlvbiAoY2hlY2spIHtcbiAgICAgICAgICAgIHJldHVybiBjaGVjaztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChmaXR0aW5nUGxhY2VtZW50KSB7XG4gICAgICAgIGZpcnN0Rml0dGluZ1BsYWNlbWVudCA9IGZpdHRpbmdQbGFjZW1lbnQ7XG4gICAgICAgIHJldHVybiBcImJyZWFrXCI7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZvciAodmFyIF9pID0gbnVtYmVyT2ZDaGVja3M7IF9pID4gMDsgX2ktLSkge1xuICAgICAgdmFyIF9yZXQgPSBfbG9vcChfaSk7XG5cbiAgICAgIGlmIChfcmV0ID09PSBcImJyZWFrXCIpIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdGF0ZS5wbGFjZW1lbnQgIT09IGZpcnN0Rml0dGluZ1BsYWNlbWVudCkge1xuICAgIHN0YXRlLm1vZGlmaWVyc0RhdGFbbmFtZV0uX3NraXAgPSB0cnVlO1xuICAgIHN0YXRlLnBsYWNlbWVudCA9IGZpcnN0Rml0dGluZ1BsYWNlbWVudDtcbiAgICBzdGF0ZS5yZXNldCA9IHRydWU7XG4gIH1cbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby11bnVzZWQtbW9kdWxlc1xuXG5cbnZhciBmbGlwJDEgPSB7XG4gIG5hbWU6ICdmbGlwJyxcbiAgZW5hYmxlZDogdHJ1ZSxcbiAgcGhhc2U6ICdtYWluJyxcbiAgZm46IGZsaXAsXG4gIHJlcXVpcmVzSWZFeGlzdHM6IFsnb2Zmc2V0J10sXG4gIGRhdGE6IHtcbiAgICBfc2tpcDogZmFsc2VcbiAgfVxufTtcblxuZnVuY3Rpb24gZ2V0QWx0QXhpcyhheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneCcgPyAneScgOiAneCc7XG59XG5cbmZ1bmN0aW9uIHdpdGhpbihtaW4kMSwgdmFsdWUsIG1heCQxKSB7XG4gIHJldHVybiBtYXgobWluJDEsIG1pbih2YWx1ZSwgbWF4JDEpKTtcbn1cbmZ1bmN0aW9uIHdpdGhpbk1heENsYW1wKG1pbiwgdmFsdWUsIG1heCkge1xuICB2YXIgdiA9IHdpdGhpbihtaW4sIHZhbHVlLCBtYXgpO1xuICByZXR1cm4gdiA+IG1heCA/IG1heCA6IHY7XG59XG5cbmZ1bmN0aW9uIHByZXZlbnRPdmVyZmxvdyhfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZi5vcHRpb25zLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZTtcbiAgdmFyIF9vcHRpb25zJG1haW5BeGlzID0gb3B0aW9ucy5tYWluQXhpcyxcbiAgICAgIGNoZWNrTWFpbkF4aXMgPSBfb3B0aW9ucyRtYWluQXhpcyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9vcHRpb25zJG1haW5BeGlzLFxuICAgICAgX29wdGlvbnMkYWx0QXhpcyA9IG9wdGlvbnMuYWx0QXhpcyxcbiAgICAgIGNoZWNrQWx0QXhpcyA9IF9vcHRpb25zJGFsdEF4aXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkYWx0QXhpcyxcbiAgICAgIGJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeSxcbiAgICAgIHJvb3RCb3VuZGFyeSA9IG9wdGlvbnMucm9vdEJvdW5kYXJ5LFxuICAgICAgYWx0Qm91bmRhcnkgPSBvcHRpb25zLmFsdEJvdW5kYXJ5LFxuICAgICAgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyxcbiAgICAgIF9vcHRpb25zJHRldGhlciA9IG9wdGlvbnMudGV0aGVyLFxuICAgICAgdGV0aGVyID0gX29wdGlvbnMkdGV0aGVyID09PSB2b2lkIDAgPyB0cnVlIDogX29wdGlvbnMkdGV0aGVyLFxuICAgICAgX29wdGlvbnMkdGV0aGVyT2Zmc2V0ID0gb3B0aW9ucy50ZXRoZXJPZmZzZXQsXG4gICAgICB0ZXRoZXJPZmZzZXQgPSBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQgPT09IHZvaWQgMCA/IDAgOiBfb3B0aW9ucyR0ZXRoZXJPZmZzZXQ7XG4gIHZhciBvdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgYm91bmRhcnk6IGJvdW5kYXJ5LFxuICAgIHJvb3RCb3VuZGFyeTogcm9vdEJvdW5kYXJ5LFxuICAgIHBhZGRpbmc6IHBhZGRpbmcsXG4gICAgYWx0Qm91bmRhcnk6IGFsdEJvdW5kYXJ5XG4gIH0pO1xuICB2YXIgYmFzZVBsYWNlbWVudCA9IGdldEJhc2VQbGFjZW1lbnQoc3RhdGUucGxhY2VtZW50KTtcbiAgdmFyIHZhcmlhdGlvbiA9IGdldFZhcmlhdGlvbihzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgaXNCYXNlUGxhY2VtZW50ID0gIXZhcmlhdGlvbjtcbiAgdmFyIG1haW5BeGlzID0gZ2V0TWFpbkF4aXNGcm9tUGxhY2VtZW50KGJhc2VQbGFjZW1lbnQpO1xuICB2YXIgYWx0QXhpcyA9IGdldEFsdEF4aXMobWFpbkF4aXMpO1xuICB2YXIgcG9wcGVyT2Zmc2V0cyA9IHN0YXRlLm1vZGlmaWVyc0RhdGEucG9wcGVyT2Zmc2V0cztcbiAgdmFyIHJlZmVyZW5jZVJlY3QgPSBzdGF0ZS5yZWN0cy5yZWZlcmVuY2U7XG4gIHZhciBwb3BwZXJSZWN0ID0gc3RhdGUucmVjdHMucG9wcGVyO1xuICB2YXIgdGV0aGVyT2Zmc2V0VmFsdWUgPSB0eXBlb2YgdGV0aGVyT2Zmc2V0ID09PSAnZnVuY3Rpb24nID8gdGV0aGVyT2Zmc2V0KE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnJlY3RzLCB7XG4gICAgcGxhY2VtZW50OiBzdGF0ZS5wbGFjZW1lbnRcbiAgfSkpIDogdGV0aGVyT2Zmc2V0O1xuICB2YXIgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlID0gdHlwZW9mIHRldGhlck9mZnNldFZhbHVlID09PSAnbnVtYmVyJyA/IHtcbiAgICBtYWluQXhpczogdGV0aGVyT2Zmc2V0VmFsdWUsXG4gICAgYWx0QXhpczogdGV0aGVyT2Zmc2V0VmFsdWVcbiAgfSA6IE9iamVjdC5hc3NpZ24oe1xuICAgIG1haW5BeGlzOiAwLFxuICAgIGFsdEF4aXM6IDBcbiAgfSwgdGV0aGVyT2Zmc2V0VmFsdWUpO1xuICB2YXIgb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9IHN0YXRlLm1vZGlmaWVyc0RhdGEub2Zmc2V0ID8gc3RhdGUubW9kaWZpZXJzRGF0YS5vZmZzZXRbc3RhdGUucGxhY2VtZW50XSA6IG51bGw7XG4gIHZhciBkYXRhID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIGlmICghcG9wcGVyT2Zmc2V0cykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChjaGVja01haW5BeGlzKSB7XG4gICAgdmFyIF9vZmZzZXRNb2RpZmllclN0YXRlJDtcblxuICAgIHZhciBtYWluU2lkZSA9IG1haW5BeGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICAgIHZhciBhbHRTaWRlID0gbWFpbkF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICAgIHZhciBsZW4gPSBtYWluQXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICAgIHZhciBvZmZzZXQgPSBwb3BwZXJPZmZzZXRzW21haW5BeGlzXTtcbiAgICB2YXIgbWluJDEgPSBvZmZzZXQgKyBvdmVyZmxvd1ttYWluU2lkZV07XG4gICAgdmFyIG1heCQxID0gb2Zmc2V0IC0gb3ZlcmZsb3dbYWx0U2lkZV07XG4gICAgdmFyIGFkZGl0aXZlID0gdGV0aGVyID8gLXBvcHBlclJlY3RbbGVuXSAvIDIgOiAwO1xuICAgIHZhciBtaW5MZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gcmVmZXJlbmNlUmVjdFtsZW5dIDogcG9wcGVyUmVjdFtsZW5dO1xuICAgIHZhciBtYXhMZW4gPSB2YXJpYXRpb24gPT09IHN0YXJ0ID8gLXBvcHBlclJlY3RbbGVuXSA6IC1yZWZlcmVuY2VSZWN0W2xlbl07IC8vIFdlIG5lZWQgdG8gaW5jbHVkZSB0aGUgYXJyb3cgaW4gdGhlIGNhbGN1bGF0aW9uIHNvIHRoZSBhcnJvdyBkb2Vzbid0IGdvXG4gICAgLy8gb3V0c2lkZSB0aGUgcmVmZXJlbmNlIGJvdW5kc1xuXG4gICAgdmFyIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLmFycm93O1xuICAgIHZhciBhcnJvd1JlY3QgPSB0ZXRoZXIgJiYgYXJyb3dFbGVtZW50ID8gZ2V0TGF5b3V0UmVjdChhcnJvd0VsZW1lbnQpIDoge1xuICAgICAgd2lkdGg6IDAsXG4gICAgICBoZWlnaHQ6IDBcbiAgICB9O1xuICAgIHZhciBhcnJvd1BhZGRpbmdPYmplY3QgPSBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10gPyBzdGF0ZS5tb2RpZmllcnNEYXRhWydhcnJvdyNwZXJzaXN0ZW50J10ucGFkZGluZyA6IGdldEZyZXNoU2lkZU9iamVjdCgpO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNaW4gPSBhcnJvd1BhZGRpbmdPYmplY3RbbWFpblNpZGVdO1xuICAgIHZhciBhcnJvd1BhZGRpbmdNYXggPSBhcnJvd1BhZGRpbmdPYmplY3RbYWx0U2lkZV07IC8vIElmIHRoZSByZWZlcmVuY2UgbGVuZ3RoIGlzIHNtYWxsZXIgdGhhbiB0aGUgYXJyb3cgbGVuZ3RoLCB3ZSBkb24ndCB3YW50XG4gICAgLy8gdG8gaW5jbHVkZSBpdHMgZnVsbCBzaXplIGluIHRoZSBjYWxjdWxhdGlvbi4gSWYgdGhlIHJlZmVyZW5jZSBpcyBzbWFsbFxuICAgIC8vIGFuZCBuZWFyIHRoZSBlZGdlIG9mIGEgYm91bmRhcnksIHRoZSBwb3BwZXIgY2FuIG92ZXJmbG93IGV2ZW4gaWYgdGhlXG4gICAgLy8gcmVmZXJlbmNlIGlzIG5vdCBvdmVyZmxvd2luZyBhcyB3ZWxsIChlLmcuIHZpcnR1YWwgZWxlbWVudHMgd2l0aCBub1xuICAgIC8vIHdpZHRoIG9yIGhlaWdodClcblxuICAgIHZhciBhcnJvd0xlbiA9IHdpdGhpbigwLCByZWZlcmVuY2VSZWN0W2xlbl0sIGFycm93UmVjdFtsZW5dKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gcmVmZXJlbmNlUmVjdFtsZW5dIC8gMiAtIGFkZGl0aXZlIC0gYXJyb3dMZW4gLSBhcnJvd1BhZGRpbmdNaW4gLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXMgOiBtaW5MZW4gLSBhcnJvd0xlbiAtIGFycm93UGFkZGluZ01pbiAtIG5vcm1hbGl6ZWRUZXRoZXJPZmZzZXRWYWx1ZS5tYWluQXhpcztcbiAgICB2YXIgbWF4T2Zmc2V0ID0gaXNCYXNlUGxhY2VtZW50ID8gLXJlZmVyZW5jZVJlY3RbbGVuXSAvIDIgKyBhZGRpdGl2ZSArIGFycm93TGVuICsgYXJyb3dQYWRkaW5nTWF4ICsgbm9ybWFsaXplZFRldGhlck9mZnNldFZhbHVlLm1haW5BeGlzIDogbWF4TGVuICsgYXJyb3dMZW4gKyBhcnJvd1BhZGRpbmdNYXggKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUubWFpbkF4aXM7XG4gICAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gc3RhdGUuZWxlbWVudHMuYXJyb3cgJiYgZ2V0T2Zmc2V0UGFyZW50KHN0YXRlLmVsZW1lbnRzLmFycm93KTtcbiAgICB2YXIgY2xpZW50T2Zmc2V0ID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBtYWluQXhpcyA9PT0gJ3knID8gYXJyb3dPZmZzZXRQYXJlbnQuY2xpZW50VG9wIHx8IDAgOiBhcnJvd09mZnNldFBhcmVudC5jbGllbnRMZWZ0IHx8IDAgOiAwO1xuICAgIHZhciBvZmZzZXRNb2RpZmllclZhbHVlID0gKF9vZmZzZXRNb2RpZmllclN0YXRlJCA9IG9mZnNldE1vZGlmaWVyU3RhdGUgPT0gbnVsbCA/IHZvaWQgMCA6IG9mZnNldE1vZGlmaWVyU3RhdGVbbWFpbkF4aXNdKSAhPSBudWxsID8gX29mZnNldE1vZGlmaWVyU3RhdGUkIDogMDtcbiAgICB2YXIgdGV0aGVyTWluID0gb2Zmc2V0ICsgbWluT2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZSAtIGNsaWVudE9mZnNldDtcbiAgICB2YXIgdGV0aGVyTWF4ID0gb2Zmc2V0ICsgbWF4T2Zmc2V0IC0gb2Zmc2V0TW9kaWZpZXJWYWx1ZTtcbiAgICB2YXIgcHJldmVudGVkT2Zmc2V0ID0gd2l0aGluKHRldGhlciA/IG1pbihtaW4kMSwgdGV0aGVyTWluKSA6IG1pbiQxLCBvZmZzZXQsIHRldGhlciA/IG1heChtYXgkMSwgdGV0aGVyTWF4KSA6IG1heCQxKTtcbiAgICBwb3BwZXJPZmZzZXRzW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldDtcbiAgICBkYXRhW21haW5BeGlzXSA9IHByZXZlbnRlZE9mZnNldCAtIG9mZnNldDtcbiAgfVxuXG4gIGlmIChjaGVja0FsdEF4aXMpIHtcbiAgICB2YXIgX29mZnNldE1vZGlmaWVyU3RhdGUkMjtcblxuICAgIHZhciBfbWFpblNpZGUgPSBtYWluQXhpcyA9PT0gJ3gnID8gdG9wIDogbGVmdDtcblxuICAgIHZhciBfYWx0U2lkZSA9IG1haW5BeGlzID09PSAneCcgPyBib3R0b20gOiByaWdodDtcblxuICAgIHZhciBfb2Zmc2V0ID0gcG9wcGVyT2Zmc2V0c1thbHRBeGlzXTtcblxuICAgIHZhciBfbGVuID0gYWx0QXhpcyA9PT0gJ3knID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuXG4gICAgdmFyIF9taW4gPSBfb2Zmc2V0ICsgb3ZlcmZsb3dbX21haW5TaWRlXTtcblxuICAgIHZhciBfbWF4ID0gX29mZnNldCAtIG92ZXJmbG93W19hbHRTaWRlXTtcblxuICAgIHZhciBpc09yaWdpblNpZGUgPSBbdG9wLCBsZWZ0XS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAgIHZhciBfb2Zmc2V0TW9kaWZpZXJWYWx1ZSA9IChfb2Zmc2V0TW9kaWZpZXJTdGF0ZSQyID0gb2Zmc2V0TW9kaWZpZXJTdGF0ZSA9PSBudWxsID8gdm9pZCAwIDogb2Zmc2V0TW9kaWZpZXJTdGF0ZVthbHRBeGlzXSkgIT0gbnVsbCA/IF9vZmZzZXRNb2RpZmllclN0YXRlJDIgOiAwO1xuXG4gICAgdmFyIF90ZXRoZXJNaW4gPSBpc09yaWdpblNpZGUgPyBfbWluIDogX29mZnNldCAtIHJlZmVyZW5jZVJlY3RbX2xlbl0gLSBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgKyBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcztcblxuICAgIHZhciBfdGV0aGVyTWF4ID0gaXNPcmlnaW5TaWRlID8gX29mZnNldCArIHJlZmVyZW5jZVJlY3RbX2xlbl0gKyBwb3BwZXJSZWN0W19sZW5dIC0gX29mZnNldE1vZGlmaWVyVmFsdWUgLSBub3JtYWxpemVkVGV0aGVyT2Zmc2V0VmFsdWUuYWx0QXhpcyA6IF9tYXg7XG5cbiAgICB2YXIgX3ByZXZlbnRlZE9mZnNldCA9IHRldGhlciAmJiBpc09yaWdpblNpZGUgPyB3aXRoaW5NYXhDbGFtcChfdGV0aGVyTWluLCBfb2Zmc2V0LCBfdGV0aGVyTWF4KSA6IHdpdGhpbih0ZXRoZXIgPyBfdGV0aGVyTWluIDogX21pbiwgX29mZnNldCwgdGV0aGVyID8gX3RldGhlck1heCA6IF9tYXgpO1xuXG4gICAgcG9wcGVyT2Zmc2V0c1thbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQ7XG4gICAgZGF0YVthbHRBeGlzXSA9IF9wcmV2ZW50ZWRPZmZzZXQgLSBfb2Zmc2V0O1xuICB9XG5cbiAgc3RhdGUubW9kaWZpZXJzRGF0YVtuYW1lXSA9IGRhdGE7XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuXG52YXIgcHJldmVudE92ZXJmbG93JDEgPSB7XG4gIG5hbWU6ICdwcmV2ZW50T3ZlcmZsb3cnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICBmbjogcHJldmVudE92ZXJmbG93LFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ29mZnNldCddXG59O1xuXG52YXIgdG9QYWRkaW5nT2JqZWN0ID0gZnVuY3Rpb24gdG9QYWRkaW5nT2JqZWN0KHBhZGRpbmcsIHN0YXRlKSB7XG4gIHBhZGRpbmcgPSB0eXBlb2YgcGFkZGluZyA9PT0gJ2Z1bmN0aW9uJyA/IHBhZGRpbmcoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucmVjdHMsIHtcbiAgICBwbGFjZW1lbnQ6IHN0YXRlLnBsYWNlbWVudFxuICB9KSkgOiBwYWRkaW5nO1xuICByZXR1cm4gbWVyZ2VQYWRkaW5nT2JqZWN0KHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IHBhZGRpbmcgOiBleHBhbmRUb0hhc2hNYXAocGFkZGluZywgYmFzZVBsYWNlbWVudHMpKTtcbn07XG5cbmZ1bmN0aW9uIGFycm93KF9yZWYpIHtcbiAgdmFyIF9zdGF0ZSRtb2RpZmllcnNEYXRhJDtcblxuICB2YXIgc3RhdGUgPSBfcmVmLnN0YXRlLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIG9wdGlvbnMgPSBfcmVmLm9wdGlvbnM7XG4gIHZhciBhcnJvd0VsZW1lbnQgPSBzdGF0ZS5lbGVtZW50cy5hcnJvdztcbiAgdmFyIHBvcHBlck9mZnNldHMgPSBzdGF0ZS5tb2RpZmllcnNEYXRhLnBvcHBlck9mZnNldHM7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gZ2V0QmFzZVBsYWNlbWVudChzdGF0ZS5wbGFjZW1lbnQpO1xuICB2YXIgYXhpcyA9IGdldE1haW5BeGlzRnJvbVBsYWNlbWVudChiYXNlUGxhY2VtZW50KTtcbiAgdmFyIGlzVmVydGljYWwgPSBbbGVmdCwgcmlnaHRdLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPj0gMDtcbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG5cbiAgaWYgKCFhcnJvd0VsZW1lbnQgfHwgIXBvcHBlck9mZnNldHMpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcGFkZGluZ09iamVjdCA9IHRvUGFkZGluZ09iamVjdChvcHRpb25zLnBhZGRpbmcsIHN0YXRlKTtcbiAgdmFyIGFycm93UmVjdCA9IGdldExheW91dFJlY3QoYXJyb3dFbGVtZW50KTtcbiAgdmFyIG1pblByb3AgPSBheGlzID09PSAneScgPyB0b3AgOiBsZWZ0O1xuICB2YXIgbWF4UHJvcCA9IGF4aXMgPT09ICd5JyA/IGJvdHRvbSA6IHJpZ2h0O1xuICB2YXIgZW5kRGlmZiA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtsZW5dICsgc3RhdGUucmVjdHMucmVmZXJlbmNlW2F4aXNdIC0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnBvcHBlcltsZW5dO1xuICB2YXIgc3RhcnREaWZmID0gcG9wcGVyT2Zmc2V0c1theGlzXSAtIHN0YXRlLnJlY3RzLnJlZmVyZW5jZVtheGlzXTtcbiAgdmFyIGFycm93T2Zmc2V0UGFyZW50ID0gZ2V0T2Zmc2V0UGFyZW50KGFycm93RWxlbWVudCk7XG4gIHZhciBjbGllbnRTaXplID0gYXJyb3dPZmZzZXRQYXJlbnQgPyBheGlzID09PSAneScgPyBhcnJvd09mZnNldFBhcmVudC5jbGllbnRIZWlnaHQgfHwgMCA6IGFycm93T2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoIHx8IDAgOiAwO1xuICB2YXIgY2VudGVyVG9SZWZlcmVuY2UgPSBlbmREaWZmIC8gMiAtIHN0YXJ0RGlmZiAvIDI7IC8vIE1ha2Ugc3VyZSB0aGUgYXJyb3cgZG9lc24ndCBvdmVyZmxvdyB0aGUgcG9wcGVyIGlmIHRoZSBjZW50ZXIgcG9pbnQgaXNcbiAgLy8gb3V0c2lkZSBvZiB0aGUgcG9wcGVyIGJvdW5kc1xuXG4gIHZhciBtaW4gPSBwYWRkaW5nT2JqZWN0W21pblByb3BdO1xuICB2YXIgbWF4ID0gY2xpZW50U2l6ZSAtIGFycm93UmVjdFtsZW5dIC0gcGFkZGluZ09iamVjdFttYXhQcm9wXTtcbiAgdmFyIGNlbnRlciA9IGNsaWVudFNpemUgLyAyIC0gYXJyb3dSZWN0W2xlbl0gLyAyICsgY2VudGVyVG9SZWZlcmVuY2U7XG4gIHZhciBvZmZzZXQgPSB3aXRoaW4obWluLCBjZW50ZXIsIG1heCk7IC8vIFByZXZlbnRzIGJyZWFraW5nIHN5bnRheCBoaWdobGlnaHRpbmcuLi5cblxuICB2YXIgYXhpc1Byb3AgPSBheGlzO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0gKF9zdGF0ZSRtb2RpZmllcnNEYXRhJCA9IHt9LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSRbYXhpc1Byb3BdID0gb2Zmc2V0LCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQuY2VudGVyT2Zmc2V0ID0gb2Zmc2V0IC0gY2VudGVyLCBfc3RhdGUkbW9kaWZpZXJzRGF0YSQpO1xufVxuXG5mdW5jdGlvbiBlZmZlY3QoX3JlZjIpIHtcbiAgdmFyIHN0YXRlID0gX3JlZjIuc3RhdGUsXG4gICAgICBvcHRpb25zID0gX3JlZjIub3B0aW9ucztcbiAgdmFyIF9vcHRpb25zJGVsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQsXG4gICAgICBhcnJvd0VsZW1lbnQgPSBfb3B0aW9ucyRlbGVtZW50ID09PSB2b2lkIDAgPyAnW2RhdGEtcG9wcGVyLWFycm93XScgOiBfb3B0aW9ucyRlbGVtZW50O1xuXG4gIGlmIChhcnJvd0VsZW1lbnQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBDU1Mgc2VsZWN0b3JcblxuXG4gIGlmICh0eXBlb2YgYXJyb3dFbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIGFycm93RWxlbWVudCA9IHN0YXRlLmVsZW1lbnRzLnBvcHBlci5xdWVyeVNlbGVjdG9yKGFycm93RWxlbWVudCk7XG5cbiAgICBpZiAoIWFycm93RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAoIWlzSFRNTEVsZW1lbnQoYXJyb3dFbGVtZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIGVsZW1lbnQgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCAobm90IGFuIFNWR0VsZW1lbnQpLicsICdUbyB1c2UgYW4gU1ZHIGFycm93LCB3cmFwIGl0IGluIGFuIEhUTUxFbGVtZW50IHRoYXQgd2lsbCBiZSB1c2VkIGFzJywgJ3RoZSBhcnJvdy4nXS5qb2luKCcgJykpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29udGFpbnMoc3RhdGUuZWxlbWVudHMucG9wcGVyLCBhcnJvd0VsZW1lbnQpKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgY29uc29sZS5lcnJvcihbJ1BvcHBlcjogXCJhcnJvd1wiIG1vZGlmaWVyXFwncyBgZWxlbWVudGAgbXVzdCBiZSBhIGNoaWxkIG9mIHRoZSBwb3BwZXInLCAnZWxlbWVudC4nXS5qb2luKCcgJykpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfVxuXG4gIHN0YXRlLmVsZW1lbnRzLmFycm93ID0gYXJyb3dFbGVtZW50O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGFycm93JDEgPSB7XG4gIG5hbWU6ICdhcnJvdycsXG4gIGVuYWJsZWQ6IHRydWUsXG4gIHBoYXNlOiAnbWFpbicsXG4gIGZuOiBhcnJvdyxcbiAgZWZmZWN0OiBlZmZlY3QsXG4gIHJlcXVpcmVzOiBbJ3BvcHBlck9mZnNldHMnXSxcbiAgcmVxdWlyZXNJZkV4aXN0czogWydwcmV2ZW50T3ZlcmZsb3cnXVxufTtcblxuZnVuY3Rpb24gZ2V0U2lkZU9mZnNldHMob3ZlcmZsb3csIHJlY3QsIHByZXZlbnRlZE9mZnNldHMpIHtcbiAgaWYgKHByZXZlbnRlZE9mZnNldHMgPT09IHZvaWQgMCkge1xuICAgIHByZXZlbnRlZE9mZnNldHMgPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRvcDogb3ZlcmZsb3cudG9wIC0gcmVjdC5oZWlnaHQgLSBwcmV2ZW50ZWRPZmZzZXRzLnksXG4gICAgcmlnaHQ6IG92ZXJmbG93LnJpZ2h0IC0gcmVjdC53aWR0aCArIHByZXZlbnRlZE9mZnNldHMueCxcbiAgICBib3R0b206IG92ZXJmbG93LmJvdHRvbSAtIHJlY3QuaGVpZ2h0ICsgcHJldmVudGVkT2Zmc2V0cy55LFxuICAgIGxlZnQ6IG92ZXJmbG93LmxlZnQgLSByZWN0LndpZHRoIC0gcHJldmVudGVkT2Zmc2V0cy54XG4gIH07XG59XG5cbmZ1bmN0aW9uIGlzQW55U2lkZUZ1bGx5Q2xpcHBlZChvdmVyZmxvdykge1xuICByZXR1cm4gW3RvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdF0uc29tZShmdW5jdGlvbiAoc2lkZSkge1xuICAgIHJldHVybiBvdmVyZmxvd1tzaWRlXSA+PSAwO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGlkZShfcmVmKSB7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGUsXG4gICAgICBuYW1lID0gX3JlZi5uYW1lO1xuICB2YXIgcmVmZXJlbmNlUmVjdCA9IHN0YXRlLnJlY3RzLnJlZmVyZW5jZTtcbiAgdmFyIHBvcHBlclJlY3QgPSBzdGF0ZS5yZWN0cy5wb3BwZXI7XG4gIHZhciBwcmV2ZW50ZWRPZmZzZXRzID0gc3RhdGUubW9kaWZpZXJzRGF0YS5wcmV2ZW50T3ZlcmZsb3c7XG4gIHZhciByZWZlcmVuY2VPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93KHN0YXRlLCB7XG4gICAgZWxlbWVudENvbnRleHQ6ICdyZWZlcmVuY2UnXG4gIH0pO1xuICB2YXIgcG9wcGVyQWx0T3ZlcmZsb3cgPSBkZXRlY3RPdmVyZmxvdyhzdGF0ZSwge1xuICAgIGFsdEJvdW5kYXJ5OiB0cnVlXG4gIH0pO1xuICB2YXIgcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzID0gZ2V0U2lkZU9mZnNldHMocmVmZXJlbmNlT3ZlcmZsb3csIHJlZmVyZW5jZVJlY3QpO1xuICB2YXIgcG9wcGVyRXNjYXBlT2Zmc2V0cyA9IGdldFNpZGVPZmZzZXRzKHBvcHBlckFsdE92ZXJmbG93LCBwb3BwZXJSZWN0LCBwcmV2ZW50ZWRPZmZzZXRzKTtcbiAgdmFyIGlzUmVmZXJlbmNlSGlkZGVuID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0cyk7XG4gIHZhciBoYXNQb3BwZXJFc2NhcGVkID0gaXNBbnlTaWRlRnVsbHlDbGlwcGVkKHBvcHBlckVzY2FwZU9mZnNldHMpO1xuICBzdGF0ZS5tb2RpZmllcnNEYXRhW25hbWVdID0ge1xuICAgIHJlZmVyZW5jZUNsaXBwaW5nT2Zmc2V0czogcmVmZXJlbmNlQ2xpcHBpbmdPZmZzZXRzLFxuICAgIHBvcHBlckVzY2FwZU9mZnNldHM6IHBvcHBlckVzY2FwZU9mZnNldHMsXG4gICAgaXNSZWZlcmVuY2VIaWRkZW46IGlzUmVmZXJlbmNlSGlkZGVuLFxuICAgIGhhc1BvcHBlckVzY2FwZWQ6IGhhc1BvcHBlckVzY2FwZWRcbiAgfTtcbiAgc3RhdGUuYXR0cmlidXRlcy5wb3BwZXIgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5hdHRyaWJ1dGVzLnBvcHBlciwge1xuICAgICdkYXRhLXBvcHBlci1yZWZlcmVuY2UtaGlkZGVuJzogaXNSZWZlcmVuY2VIaWRkZW4sXG4gICAgJ2RhdGEtcG9wcGVyLWVzY2FwZWQnOiBoYXNQb3BwZXJFc2NhcGVkXG4gIH0pO1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLXVudXNlZC1tb2R1bGVzXG5cblxudmFyIGhpZGUkMSA9IHtcbiAgbmFtZTogJ2hpZGUnLFxuICBlbmFibGVkOiB0cnVlLFxuICBwaGFzZTogJ21haW4nLFxuICByZXF1aXJlc0lmRXhpc3RzOiBbJ3ByZXZlbnRPdmVyZmxvdyddLFxuICBmbjogaGlkZVxufTtcblxudmFyIGRlZmF1bHRNb2RpZmllcnMkMSA9IFtldmVudExpc3RlbmVycywgcG9wcGVyT2Zmc2V0cyQxLCBjb21wdXRlU3R5bGVzJDEsIGFwcGx5U3R5bGVzJDFdO1xudmFyIGNyZWF0ZVBvcHBlciQxID0gLyojX19QVVJFX18qL3BvcHBlckdlbmVyYXRvcih7XG4gIGRlZmF1bHRNb2RpZmllcnM6IGRlZmF1bHRNb2RpZmllcnMkMVxufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxudmFyIGRlZmF1bHRNb2RpZmllcnMgPSBbZXZlbnRMaXN0ZW5lcnMsIHBvcHBlck9mZnNldHMkMSwgY29tcHV0ZVN0eWxlcyQxLCBhcHBseVN0eWxlcyQxLCBvZmZzZXQkMSwgZmxpcCQxLCBwcmV2ZW50T3ZlcmZsb3ckMSwgYXJyb3ckMSwgaGlkZSQxXTtcbnZhciBjcmVhdGVQb3BwZXIgPSAvKiNfX1BVUkVfXyovcG9wcGVyR2VuZXJhdG9yKHtcbiAgZGVmYXVsdE1vZGlmaWVyczogZGVmYXVsdE1vZGlmaWVyc1xufSk7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW51c2VkLW1vZHVsZXNcblxuZXhwb3J0cy5hcHBseVN0eWxlcyA9IGFwcGx5U3R5bGVzJDE7XG5leHBvcnRzLmFycm93ID0gYXJyb3ckMTtcbmV4cG9ydHMuY29tcHV0ZVN0eWxlcyA9IGNvbXB1dGVTdHlsZXMkMTtcbmV4cG9ydHMuY3JlYXRlUG9wcGVyID0gY3JlYXRlUG9wcGVyO1xuZXhwb3J0cy5jcmVhdGVQb3BwZXJMaXRlID0gY3JlYXRlUG9wcGVyJDE7XG5leHBvcnRzLmRlZmF1bHRNb2RpZmllcnMgPSBkZWZhdWx0TW9kaWZpZXJzO1xuZXhwb3J0cy5kZXRlY3RPdmVyZmxvdyA9IGRldGVjdE92ZXJmbG93O1xuZXhwb3J0cy5ldmVudExpc3RlbmVycyA9IGV2ZW50TGlzdGVuZXJzO1xuZXhwb3J0cy5mbGlwID0gZmxpcCQxO1xuZXhwb3J0cy5oaWRlID0gaGlkZSQxO1xuZXhwb3J0cy5vZmZzZXQgPSBvZmZzZXQkMTtcbmV4cG9ydHMucG9wcGVyR2VuZXJhdG9yID0gcG9wcGVyR2VuZXJhdG9yO1xuZXhwb3J0cy5wb3BwZXJPZmZzZXRzID0gcG9wcGVyT2Zmc2V0cyQxO1xuZXhwb3J0cy5wcmV2ZW50T3ZlcmZsb3cgPSBwcmV2ZW50T3ZlcmZsb3ckMTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvcHBlci5qcy5tYXBcbiIsICIoZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWxUaGlzIDogZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5CaWdnZXJQaWN0dXJlID0gZmFjdG9yeSgpKTtcbn0pKHRoaXMsIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gbm9vcCgpIHsgfVxuICAgIGNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuICAgIGZ1bmN0aW9uIGFzc2lnbih0YXIsIHNyYykge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgICAgICB0YXJba10gPSBzcmNba107XG4gICAgICAgIHJldHVybiB0YXI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJ1bihmbikge1xuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICAgICAgZm5zLmZvckVhY2gocnVuKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGluZyA9PT0gJ2Z1bmN0aW9uJztcbiAgICB9XG4gICAgZnVuY3Rpb24gbm90X2VxdWFsKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzX2VtcHR5KG9iaikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5sZW5ndGggPT09IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgICAgIGlmIChzdG9yZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZSguLi5jYWxsYmFja3MpO1xuICAgICAgICByZXR1cm4gdW5zdWIudW5zdWJzY3JpYmUgPyAoKSA9PiB1bnN1Yi51bnN1YnNjcmliZSgpIDogdW5zdWI7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXBvbmVudF9zdWJzY3JpYmUoY29tcG9uZW50LCBzdG9yZSwgY2FsbGJhY2spIHtcbiAgICAgICAgY29tcG9uZW50LiQkLm9uX2Rlc3Ryb3kucHVzaChzdWJzY3JpYmUoc3RvcmUsIGNhbGxiYWNrKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFjdGlvbl9kZXN0cm95ZXIoYWN0aW9uX3Jlc3VsdCkge1xuICAgICAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbiAgICB9XG4gICAgbGV0IG5vdyA9ICgpID0+IGdsb2JhbFRoaXMucGVyZm9ybWFuY2Uubm93KClcbiAgICAgICAgO1xuICAgIGxldCByYWYgPSBjYiA9PiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIDtcblxuICAgIGNvbnN0IHRhc2tzID0gbmV3IFNldCgpO1xuICAgIGZ1bmN0aW9uIHJ1bl90YXNrcyhub3cpIHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICghdGFzay5jKG5vdykpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHRhc2sgdGhhdCBydW5zIG9uIGVhY2ggcmFmIGZyYW1lXG4gICAgICogdW50aWwgaXQgcmV0dXJucyBhIGZhbHN5IHZhbHVlIG9yIGlzIGFib3J0ZWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsb29wKGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCB0YXNrO1xuICAgICAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgICAgIHJhZihydW5fdGFza3MpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICAgICAgdGFza3MuYWRkKHRhc2sgPSB7IGM6IGNhbGxiYWNrLCBmOiBmdWxmaWxsIH0pO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgICAgICB0YXNrcy5kZWxldGUodGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKG5vZGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShub2RlLCBhbmNob3IgfHwgbnVsbCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZWxlbWVudChuYW1lKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRhdGEpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBlbXB0eSgpIHtcbiAgICAgICAgcmV0dXJuIHRleHQoJycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuICgpID0+IG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbClcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldF9zdHlsZShub2RlLCBrZXksIHZhbHVlLCBpbXBvcnRhbnQpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLnJlbW92ZVByb3BlcnR5KGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLnNldFByb3BlcnR5KGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3RbdG9nZ2xlID8gJ2FkZCcgOiAncmVtb3ZlJ10obmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwsIGJ1YmJsZXMgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgIGUuaW5pdEN1c3RvbUV2ZW50KHR5cGUsIGJ1YmJsZXMsIGZhbHNlLCBkZXRhaWwpO1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG4gICAgbGV0IHN0eWxlc2hlZXQ7XG4gICAgbGV0IGFjdGl2ZSA9IDA7XG4gICAgbGV0IGN1cnJlbnRfcnVsZXMgPSB7fTtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuICAgIC8vIGZ1bmN0aW9uIGhhc2goc3RyKSB7XG4gICAgLy8gICAgIGxldCBoYXNoID0gNTM4MTtcbiAgICAvLyAgICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIC8vICAgICB3aGlsZSAoaS0tKVxuICAgIC8vICAgICAgICAgaGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpIF4gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgLy8gICAgIHJldHVybiBoYXNoID4+PiAwO1xuICAgIC8vIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVfcnVsZShub2RlLCBhLCBiLCBkdXJhdGlvbiwgZGVsYXksIGVhc2UsIGZuLCB1aWQgPSAwKSB7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICAgICAgbGV0IGtleWZyYW1lcyA9ICd7XFxuJztcbiAgICAgICAgZm9yIChsZXQgcCA9IDA7IHAgPD0gMTsgcCArPSBzdGVwKSB7XG4gICAgICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICAgICAga2V5ZnJhbWVzICs9IHAgKiAxMDAgKyBgJXske2ZuKHQsIDEgLSB0KX19XFxuYDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICAgICAgY29uc3QgbmFtZSA9IGBfYnBfJHtNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTkpfV8ke3VpZH1gO1xuICAgICAgICBpZiAoIWN1cnJlbnRfcnVsZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIGlmICghc3R5bGVzaGVldCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0ID0gc3R5bGUuc2hlZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50X3J1bGVzW25hbWVdID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9ICR7cnVsZX1gLCBzdHlsZXNoZWV0LmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gbm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJyc7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gYCR7YW5pbWF0aW9uID8gYCR7YW5pbWF0aW9ufSwgYCA6IGBgfSR7bmFtZX0gJHtkdXJhdGlvbn1tcyBsaW5lYXIgJHtkZWxheX1tcyAxIGJvdGhgO1xuICAgICAgICBhY3RpdmUgKz0gMTtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICAgICAgbm9kZS5zdHlsZS5hbmltYXRpb24gPSAobm9kZS5zdHlsZS5hbmltYXRpb24gfHwgJycpXG4gICAgICAgICAgICAuc3BsaXQoJywgJylcbiAgICAgICAgICAgIC5maWx0ZXIobmFtZVxuICAgICAgICAgICAgPyBhbmltID0+IGFuaW0uaW5kZXhPZihuYW1lKSA8IDAgLy8gcmVtb3ZlIHNwZWNpZmljIGFuaW1hdGlvblxuICAgICAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX2JwJykgPT09IC0xIC8vIHJlbW92ZSBhbGwgU3ZlbHRlIGFuaW1hdGlvbnNcbiAgICAgICAgKVxuICAgICAgICAgICAgLmpvaW4oJywgJyk7XG4gICAgICAgIGlmIChuYW1lICYmICEtLWFjdGl2ZSlcbiAgICAgICAgICAgIGNsZWFyX3J1bGVzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgICAgICByYWYoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBsZXQgaSA9IHN0eWxlc2hlZXQuY3NzUnVsZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSlcbiAgICAgICAgICAgICAgICBzdHlsZXNoZWV0LmRlbGV0ZVJ1bGUoaSk7XG4gICAgICAgICAgICBjdXJyZW50X3J1bGVzID0ge307XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50X2NvbXBvbmVudDtcbiAgICBmdW5jdGlvbiBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KSB7XG4gICAgICAgIGN1cnJlbnRfY29tcG9uZW50ID0gY29tcG9uZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbiAgICBjb25zdCBiaW5kaW5nX2NhbGxiYWNrcyA9IFtdO1xuICAgIGNvbnN0IHJlbmRlcl9jYWxsYmFja3MgPSBbXTtcbiAgICBjb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbiAgICBjb25zdCByZXNvbHZlZF9wcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbGV0IHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICBmdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgICAgIGlmICghdXBkYXRlX3NjaGVkdWxlZCkge1xuICAgICAgICAgICAgdXBkYXRlX3NjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZF9yZW5kZXJfY2FsbGJhY2soZm4pIHtcbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gICAgLy8gZmx1c2goKSBjYWxscyBjYWxsYmFja3MgaW4gdGhpcyBvcmRlcjpcbiAgICAvLyAxLiBBbGwgYmVmb3JlVXBkYXRlIGNhbGxiYWNrcywgaW4gb3JkZXI6IHBhcmVudHMgYmVmb3JlIGNoaWxkcmVuXG4gICAgLy8gMi4gQWxsIGJpbmQ6dGhpcyBjYWxsYmFja3MsIGluIHJldmVyc2Ugb3JkZXI6IGNoaWxkcmVuIGJlZm9yZSBwYXJlbnRzLlxuICAgIC8vIDMuIEFsbCBhZnRlclVwZGF0ZSBjYWxsYmFja3MsIGluIG9yZGVyOiBwYXJlbnRzIGJlZm9yZSBjaGlsZHJlbi4gRVhDRVBUXG4gICAgLy8gICAgZm9yIGFmdGVyVXBkYXRlcyBjYWxsZWQgZHVyaW5nIHRoZSBpbml0aWFsIG9uTW91bnQsIHdoaWNoIGFyZSBjYWxsZWQgaW5cbiAgICAvLyAgICByZXZlcnNlIG9yZGVyOiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cy5cbiAgICAvLyBTaW5jZSBjYWxsYmFja3MgbWlnaHQgdXBkYXRlIGNvbXBvbmVudCB2YWx1ZXMsIHdoaWNoIGNvdWxkIHRyaWdnZXIgYW5vdGhlclxuICAgIC8vIGNhbGwgdG8gZmx1c2goKSwgdGhlIGZvbGxvd2luZyBzdGVwcyBndWFyZCBhZ2FpbnN0IHRoaXM6XG4gICAgLy8gMS4gRHVyaW5nIGJlZm9yZVVwZGF0ZSwgYW55IHVwZGF0ZWQgY29tcG9uZW50cyB3aWxsIGJlIGFkZGVkIHRvIHRoZVxuICAgIC8vICAgIGRpcnR5X2NvbXBvbmVudHMgYXJyYXkgYW5kIHdpbGwgY2F1c2UgYSByZWVudHJhbnQgY2FsbCB0byBmbHVzaCgpLiBCZWNhdXNlXG4gICAgLy8gICAgdGhlIGZsdXNoIGluZGV4IGlzIGtlcHQgb3V0c2lkZSB0aGUgZnVuY3Rpb24sIHRoZSByZWVudHJhbnQgY2FsbCB3aWxsIHBpY2tcbiAgICAvLyAgICB1cCB3aGVyZSB0aGUgZWFybGllciBjYWxsIGxlZnQgb2ZmIGFuZCBnbyB0aHJvdWdoIGFsbCBkaXJ0eSBjb21wb25lbnRzLiBUaGVcbiAgICAvLyAgICBjdXJyZW50X2NvbXBvbmVudCB2YWx1ZSBpcyBzYXZlZCBhbmQgcmVzdG9yZWQgc28gdGhhdCB0aGUgcmVlbnRyYW50IGNhbGwgd2lsbFxuICAgIC8vICAgIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgXCJwYXJlbnRcIiBmbHVzaCgpIGNhbGwuXG4gICAgLy8gMi4gYmluZDp0aGlzIGNhbGxiYWNrcyBjYW5ub3QgdHJpZ2dlciBuZXcgZmx1c2goKSBjYWxscy5cbiAgICAvLyAzLiBEdXJpbmcgYWZ0ZXJVcGRhdGUsIGFueSB1cGRhdGVkIGNvbXBvbmVudHMgd2lsbCBOT1QgaGF2ZSB0aGVpciBhZnRlclVwZGF0ZVxuICAgIC8vICAgIGNhbGxiYWNrIGNhbGxlZCBhIHNlY29uZCB0aW1lOyB0aGUgc2Vlbl9jYWxsYmFja3Mgc2V0LCBvdXRzaWRlIHRoZSBmbHVzaCgpXG4gICAgLy8gICAgZnVuY3Rpb24sIGd1YXJhbnRlZXMgdGhpcyBiZWhhdmlvci5cbiAgICBjb25zdCBzZWVuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcbiAgICBsZXQgZmx1c2hpZHggPSAwOyAvLyBEbyAqbm90KiBtb3ZlIHRoaXMgaW5zaWRlIHRoZSBmbHVzaCgpIGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkX2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgICAgICAvLyBhbmQgdXBkYXRlIGNvbXBvbmVudHNcbiAgICAgICAgICAgIHdoaWxlIChmbHVzaGlkeCA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gZGlydHlfY29tcG9uZW50c1tmbHVzaGlkeF07XG4gICAgICAgICAgICAgICAgZmx1c2hpZHgrKztcbiAgICAgICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgICAgICB1cGRhdGUoY29tcG9uZW50LiQkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIGZsdXNoaWR4ID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChiaW5kaW5nX2NhbGxiYWNrcy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgYmluZGluZ19jYWxsYmFja3MucG9wKCkoKTtcbiAgICAgICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAgICAgLy8gYWZ0ZXJVcGRhdGUgZnVuY3Rpb25zLiBUaGlzIG1heSBjYXVzZVxuICAgICAgICAgICAgLy8gc3Vic2VxdWVudCB1cGRhdGVzLi4uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IHJlbmRlcl9jYWxsYmFja3NbaV07XG4gICAgICAgICAgICAgICAgaWYgKCFzZWVuX2NhbGxiYWNrcy5oYXMoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICAgICAgc2Vlbl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZW5kZXJfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICAgICAgd2hpbGUgKGZsdXNoX2NhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGZsdXNoX2NhbGxiYWNrcy5wb3AoKSgpO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KHNhdmVkX2NvbXBvbmVudCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgICAgICBpZiAoJCQuZnJhZ21lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGRpcnR5ID0gJCQuZGlydHk7XG4gICAgICAgICAgICAkJC5kaXJ0eSA9IFstMV07XG4gICAgICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAgICAgJCQuYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcHJvbWlzZTtcbiAgICBmdW5jdGlvbiB3YWl0KCkge1xuICAgICAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGF0Y2gobm9kZSwgZGlyZWN0aW9uLCBraW5kKSB7XG4gICAgICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbiAgICB9XG4gICAgY29uc3Qgb3V0cm9pbmcgPSBuZXcgU2V0KCk7XG4gICAgbGV0IG91dHJvcztcbiAgICBmdW5jdGlvbiBncm91cF9vdXRyb3MoKSB7XG4gICAgICAgIG91dHJvcyA9IHtcbiAgICAgICAgICAgIHI6IDAsXG4gICAgICAgICAgICBjOiBbXSxcbiAgICAgICAgICAgIHA6IG91dHJvcyAvLyBwYXJlbnQgZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tfb3V0cm9zKCkge1xuICAgICAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgICAgICBydW5fYWxsKG91dHJvcy5jKTtcbiAgICAgICAgfVxuICAgICAgICBvdXRyb3MgPSBvdXRyb3MucDtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihibG9jaywgbG9jYWwpIHtcbiAgICAgICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgICAgIG91dHJvaW5nLmRlbGV0ZShibG9jayk7XG4gICAgICAgICAgICBibG9jay5pKGxvY2FsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiB0cmFuc2l0aW9uX291dChibG9jaywgbG9jYWwsIGRldGFjaCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgICAgIGlmIChvdXRyb2luZy5oYXMoYmxvY2spKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgICAgICBvdXRyb3MuYy5wdXNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICBvdXRyb2luZy5kZWxldGUoYmxvY2spO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGV0YWNoKVxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2suZCgxKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbiAgICBmdW5jdGlvbiBjcmVhdGVfaW5fdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgICAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICBsZXQgYW5pbWF0aW9uX25hbWU7XG4gICAgICAgIGxldCB0YXNrO1xuICAgICAgICBsZXQgdWlkID0gMDtcbiAgICAgICAgZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgICAgICAgIGlmIChhbmltYXRpb25fbmFtZSlcbiAgICAgICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDAsIDEsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MsIHVpZCsrKTtcbiAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIGNvbnN0IGVuZF90aW1lID0gc3RhcnRfdGltZSArIGR1cmF0aW9uO1xuICAgICAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICAgICAgdGFzay5hYm9ydCgpO1xuICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHRydWUsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ID0gZWFzaW5nKChub3cgLSBzdGFydF90aW1lKSAvIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpY2sodCwgMSAtIHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBydW5uaW5nO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXJ0KCkge1xuICAgICAgICAgICAgICAgIGlmIChzdGFydGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGlzX2Z1bmN0aW9uKGNvbmZpZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgICAgIHdhaXQoKS50aGVuKGdvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZCgpIHtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgICAgICBsZXQgcnVubmluZyA9IHRydWU7XG4gICAgICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgIGdyb3VwLnIgKz0gMTtcbiAgICAgICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICAgICAgaWYgKGNzcylcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRfdGltZSA9IG5vdygpICsgZGVsYXk7XG4gICAgICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgICAgIGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocnVubmluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3aWxsIHJlc3VsdCBpbiBgZW5kKClgIGJlaW5nIGNhbGxlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGNsZWFuIHVwIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gc3RhcnRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdCA9IGVhc2luZygobm93IC0gc3RhcnRfdGltZSkgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICB3YWl0KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgIGdvKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGdvKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVuZChyZXNldCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcudGljaygxLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgICAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBjcmVhdGVfY29tcG9uZW50KGJsb2NrKSB7XG4gICAgICAgIGJsb2NrICYmIGJsb2NrLmMoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgdGFyZ2V0LCBhbmNob3IsIGN1c3RvbUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgICAgICBmcmFnbWVudCAmJiBmcmFnbWVudC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICAgICAgaWYgKCFjdXN0b21FbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBvbk1vdW50IGhhcHBlbnMgYmVmb3JlIHRoZSBpbml0aWFsIGFmdGVyVXBkYXRlXG4gICAgICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdfb25fZGVzdHJveSA9IG9uX21vdW50Lm1hcChydW4pLmZpbHRlcihpc19mdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgaWYgKG9uX2Rlc3Ryb3kpIHtcbiAgICAgICAgICAgICAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgICAgICAgICAvLyBtb3N0IGxpa2VseSBhcyBhIHJlc3VsdCBvZiBhIGJpbmRpbmcgaW5pdGlhbGlzaW5nXG4gICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwobmV3X29uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21wb25lbnQuJCQub25fbW91bnQgPSBbXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGFmdGVyX3VwZGF0ZS5mb3JFYWNoKGFkZF9yZW5kZXJfY2FsbGJhY2spO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgICAgICBjb25zdCAkJCA9IGNvbXBvbmVudC4kJDtcbiAgICAgICAgaWYgKCQkLmZyYWdtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuZChkZXRhY2hpbmcpO1xuICAgICAgICAgICAgLy8gVE9ETyBudWxsIG91dCBvdGhlciByZWZzLCBpbmNsdWRpbmcgY29tcG9uZW50LiQkIChidXQgbmVlZCB0b1xuICAgICAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAgICAgJCQub25fZGVzdHJveSA9ICQkLmZyYWdtZW50ID0gbnVsbDtcbiAgICAgICAgICAgICQkLmN0eCA9IFtdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ha2VfZGlydHkoY29tcG9uZW50LCBpKSB7XG4gICAgICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgICAgICBkaXJ0eV9jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgICAgIHNjaGVkdWxlX3VwZGF0ZSgpO1xuICAgICAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5WyhpIC8gMzEpIHwgMF0gfD0gKDEgPDwgKGkgJSAzMSkpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KGNvbXBvbmVudCwgb3B0aW9ucywgaW5zdGFuY2UsIGNyZWF0ZV9mcmFnbWVudCwgbm90X2VxdWFsLCBwcm9wcywgYXBwZW5kX3N0eWxlcywgZGlydHkgPSBbLTFdKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudF9jb21wb25lbnQgPSBjdXJyZW50X2NvbXBvbmVudDtcbiAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICAgICAgZnJhZ21lbnQ6IG51bGwsXG4gICAgICAgICAgICBjdHg6IG51bGwsXG4gICAgICAgICAgICAvLyBzdGF0ZVxuICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICB1cGRhdGU6IG5vb3AsXG4gICAgICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgICAgICBib3VuZDoge30sXG4gICAgICAgICAgICAvLyBsaWZlY3ljbGVcbiAgICAgICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3k6IFtdLFxuICAgICAgICAgICAgb25fZGlzY29ubmVjdDogW10sXG4gICAgICAgICAgICBiZWZvcmVfdXBkYXRlOiBbXSxcbiAgICAgICAgICAgIGFmdGVyX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKG9wdGlvbnMuY29udGV4dCB8fCAocGFyZW50X2NvbXBvbmVudCA/IHBhcmVudF9jb21wb25lbnQuJCQuY29udGV4dCA6IFtdKSksXG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgIGNhbGxiYWNrczoge30sXG4gICAgICAgICAgICBkaXJ0eSxcbiAgICAgICAgICAgIHNraXBfYm91bmQ6IGZhbHNlLFxuICAgICAgICAgICAgcm9vdDogb3B0aW9ucy50YXJnZXQgfHwgcGFyZW50X2NvbXBvbmVudC4kJC5yb290XG4gICAgICAgIH07XG4gICAgICAgIGFwcGVuZF9zdHlsZXMgJiYgYXBwZW5kX3N0eWxlcygkJC5yb290KTtcbiAgICAgICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgICAgICQkLmN0eCA9IGluc3RhbmNlXG4gICAgICAgICAgICA/IGluc3RhbmNlKGNvbXBvbmVudCwgb3B0aW9ucy5wcm9wcyB8fCB7fSwgKGksIHJldCwgLi4ucmVzdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcmVzdC5sZW5ndGggPyByZXN0WzBdIDogcmV0O1xuICAgICAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghJCQuc2tpcF9ib3VuZCAmJiAkJC5ib3VuZFtpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICQkLmJvdW5kW2ldKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgbWFrZV9kaXJ0eShjb21wb25lbnQsIGkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogW107XG4gICAgICAgICQkLnVwZGF0ZSgpO1xuICAgICAgICByZWFkeSA9IHRydWU7XG4gICAgICAgIHJ1bl9hbGwoJCQuYmVmb3JlX3VwZGF0ZSk7XG4gICAgICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICAgICAkJC5mcmFnbWVudCA9IGNyZWF0ZV9mcmFnbWVudCA/IGNyZWF0ZV9mcmFnbWVudCgkJC5jdHgpIDogZmFsc2U7XG4gICAgICAgIGlmIChvcHRpb25zLnRhcmdldCkge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW91bnRfY29tcG9uZW50KGNvbXBvbmVudCwgb3B0aW9ucy50YXJnZXQsIG9wdGlvbnMuYW5jaG9yLCBvcHRpb25zLmN1c3RvbUVsZW1lbnQpO1xuICAgICAgICAgICAgZmx1c2goKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEJhc2UgY2xhc3MgZm9yIFN2ZWx0ZSBjb21wb25lbnRzLiBVc2VkIHdoZW4gZGV2PWZhbHNlLlxuICAgICAqL1xuICAgIGNsYXNzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgICAgICRkZXN0cm95KCkge1xuICAgICAgICAgICAgZGVzdHJveV9jb21wb25lbnQodGhpcywgMSk7XG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICAkb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9ICh0aGlzLiQkLmNhbGxiYWNrc1t0eXBlXSB8fCAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gPSBbXSkpO1xuICAgICAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGNhbGxiYWNrcy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgJHNldCgkJHByb3BzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kJHNldCAmJiAhaXNfZW1wdHkoJCRwcm9wcykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiQkLnNraXBfYm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJCRzZXQoJCRwcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kJC5za2lwX2JvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gICAgICAgIGNvbnN0IGYgPSB0IC0gMS4wO1xuICAgICAgICByZXR1cm4gZiAqIGYgKiBmICsgMS4wO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZseShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCB4ID0gMCwgeSA9IDAsIG9wYWNpdHkgPSAwIH0gPSB7fSkge1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9kID0gdGFyZ2V0X29wYWNpdHkgKiAoMSAtIG9wYWNpdHkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGVsYXksXG4gICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIGVhc2luZyxcbiAgICAgICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGBXcml0YWJsZWAgc3RvcmUgdGhhdCBhbGxvd3MgYm90aCB1cGRhdGluZyBhbmQgcmVhZGluZyBieSBzdWJzY3JpcHRpb24uXG4gICAgICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gICAgICogQHBhcmFtIHtTdGFydFN0b3BOb3RpZmllcj19c3RhcnQgc3RhcnQgYW5kIHN0b3Agbm90aWZpY2F0aW9ucyBmb3Igc3Vic2NyaXB0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICAgICAgbGV0IHN0b3A7XG4gICAgICAgIGNvbnN0IHN1YnNjcmliZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICBpZiAobm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3ApIHsgLy8gc3RvcmUgaXMgcmVhZHlcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHN1YnNjcmliZXIgb2Ygc3Vic2NyaWJlcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJbMV0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzdWJzY3JpYmVyLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bl9xdWV1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcl9xdWV1ZVtpXVswXShzdWJzY3JpYmVyX3F1ZXVlW2kgKyAxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlKGZuKSB7XG4gICAgICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdWJzY3JpYmUocnVuLCBpbnZhbGlkYXRlID0gbm9vcCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICAgICAgc3Vic2NyaWJlcnMuYWRkKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzLnNpemUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcnVuKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMuZGVsZXRlKHN1YnNjcmliZXIpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBzZXQsIHVwZGF0ZSwgc3Vic2NyaWJlIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0X2ludGVycG9sYXRvcihhLCBiKSB7XG4gICAgICAgIGlmIChhID09PSBiIHx8IGEgIT09IGEpXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gYTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBhO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gYi5tYXAoKGJpLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldF9pbnRlcnBvbGF0b3IoYVtpXSwgYmkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdCA9PiBhcnIubWFwKGZuID0+IGZuKHQpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gYiAtIGE7XG4gICAgICAgICAgICByZXR1cm4gdCA9PiBhICsgdCAqIGRlbHRhO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBmdW5jdGlvbiB0d2VlbmVkKHZhbHVlLCBkZWZhdWx0cyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHN0b3JlID0gd3JpdGFibGUodmFsdWUpO1xuICAgICAgICBsZXQgdGFzaztcbiAgICAgICAgbGV0IHRhcmdldF92YWx1ZSA9IHZhbHVlO1xuICAgICAgICBmdW5jdGlvbiBzZXQobmV3X3ZhbHVlLCBvcHRzKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0X3ZhbHVlID0gbmV3X3ZhbHVlO1xuICAgICAgICAgICAgbGV0IHByZXZpb3VzX3Rhc2sgPSB0YXNrO1xuICAgICAgICAgICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGlkZW50aXR5LCBpbnRlcnBvbGF0ZSA9IGdldF9pbnRlcnBvbGF0b3IgfSA9IGFzc2lnbihhc3NpZ24oe30sIGRlZmF1bHRzKSwgb3B0cyk7XG4gICAgICAgICAgICBpZiAoZHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSB0YXJnZXRfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgICAgIGxldCBmbjtcbiAgICAgICAgICAgIHRhc2sgPSBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA8IHN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXN0YXJ0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBpbnRlcnBvbGF0ZSh2YWx1ZSwgbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiA9PT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24odmFsdWUsIG5ld192YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJldmlvdXNfdGFzaykge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgICAgIHByZXZpb3VzX3Rhc2sgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKGVsYXBzZWQgPiBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBmbihlYXNpbmcoZWxhcHNlZCAvIGR1cmF0aW9uKSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gdGFzay5wcm9taXNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXQsXG4gICAgICAgICAgICB1cGRhdGU6IChmbiwgb3B0cykgPT4gc2V0KGZuKHRhcmdldF92YWx1ZSwgdmFsdWUpLCBvcHRzKSxcbiAgICAgICAgICAgIHN1YnNjcmliZTogc3RvcmUuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqIHRydWUgaWYgZ2FsbGVyeSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjbG9zaW5nICovXG4gICAgY29uc3QgY2xvc2luZyA9IHdyaXRhYmxlKDApO1xuXG4gICAgLyoqIHN0b3JlIGlmIHVzZXIgcHJlZmVycyByZWR1Y2VkIG1vdGlvbiAgKi9cbiAgICBjb25zdCBwcmVmZXJzUmVkdWNlZE1vdGlvbiA9IGdsb2JhbFRoaXMubWF0Y2hNZWRpYT8uKFxuICAgIFx0JyhwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpJ1xuICAgICkubWF0Y2hlcztcblxuICAgIC8qKiBkZWZhdWx0IG9wdGlvbnMgZm9yIHR3ZWVucyAvIHRyYW5zaXRpb25zICovXG4gICAgY29uc3QgZGVmYXVsdFR3ZWVuT3B0aW9ucyA9IChkdXJhdGlvbikgPT4gKHtcbiAgICBcdGVhc2luZzogY3ViaWNPdXQsXG4gICAgXHRkdXJhdGlvbjogcHJlZmVyc1JlZHVjZWRNb3Rpb24gPyAwIDogZHVyYXRpb24sXG4gICAgfSk7XG5cbiAgICBjb25zdCBnZXRUaHVtYkJhY2tncm91bmQgPSAoYWN0aXZlSXRlbSkgPT5cbiAgICBcdCFhY3RpdmVJdGVtLnRodW1iIHx8IGB1cmwoJHthY3RpdmVJdGVtLnRodW1ifSlgO1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhdHRyaWJ1dGVzIHRvIHRoZSBnaXZlbiBub2RlIGJhc2VkIG9uIHRoZSBwcm92aWRlZCBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBub2RlIC0gVGhlIG5vZGUgdG8gd2hpY2ggYXR0cmlidXRlcyB3aWxsIGJlIGFkZGVkXG4gICAgICogQHBhcmFtIHtSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBib29sZWFuPiB8IHN0cmluZ30gb2JqIC0gVGhlIG9iamVjdCBjb250YWluaW5nIGtleS12YWx1ZSBwYWlycyBvZiBhdHRyaWJ1dGVzIHRvIGJlIGFkZGVkXG4gICAgICovXG4gICAgY29uc3QgYWRkQXR0cmlidXRlcyA9IChub2RlLCBvYmopID0+IHtcbiAgICBcdGlmICghb2JqKSB7XG4gICAgXHRcdHJldHVyblxuICAgIFx0fVxuICAgIFx0aWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnKSB7XG4gICAgXHRcdG9iaiA9IEpTT04ucGFyc2Uob2JqKTtcbiAgICBcdH1cbiAgICBcdGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgIFx0XHRub2RlLnNldEF0dHJpYnV0ZShrZXksIG9ialtrZXldKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gICAgLyogc3JjL2NvbXBvbmVudHMvbG9hZGluZy5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCkge1xuICAgIFx0bGV0IGRpdjtcbiAgICBcdGxldCBkaXZfb3V0cm87XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGRpdi5pbm5lckhUTUwgPSBgPHNwYW4gY2xhc3M9XCJicC1iYXJcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJicC1vXCI+PC9zcGFuPmA7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1sb2FkXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzBdKSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qYWN0aXZlSXRlbSovIDEpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzBdKSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGxvY2FsKSB7XG4gICAgXHRcdFx0XHRkaXZfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDQ4MCB9KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBkaXZfb3V0cm8pIGRpdl9vdXRyby5lbmQoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMTE6NTcpIHsjaWYgJGNsb3Npbmd9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDIoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGRpdl9pbnRybztcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtbG9hZFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFswXSkpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHkgJiAvKmFjdGl2ZUl0ZW0qLyAxKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImJhY2tncm91bmQtaW1hZ2VcIiwgZ2V0VGh1bWJCYWNrZ3JvdW5kKC8qYWN0aXZlSXRlbSovIGN0eFswXSkpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmICghZGl2X2ludHJvKSB7XG4gICAgXHRcdFx0XHRhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICBcdFx0XHRcdFx0ZGl2X2ludHJvID0gY3JlYXRlX2luX3RyYW5zaXRpb24oZGl2LCBmbHksIHsgZHVyYXRpb246IDQ4MCB9KTtcbiAgICBcdFx0XHRcdFx0ZGl2X2ludHJvLnN0YXJ0KCk7XG4gICAgXHRcdFx0XHR9KTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdG86IG5vb3AsXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlX2ZyYWdtZW50JDQoY3R4KSB7XG4gICAgXHRsZXQgaWZfYmxvY2swX2FuY2hvcjtcbiAgICBcdGxldCBpZl9ibG9jazFfYW5jaG9yO1xuICAgIFx0bGV0IGlmX2Jsb2NrMCA9ICEvKmxvYWRlZCovIGN0eFsxXSAmJiBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sxID0gLyokY2xvc2luZyovIGN0eFsyXSAmJiBjcmVhdGVfaWZfYmxvY2skMihjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2swX2FuY2hvciA9IGVtcHR5KCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9jazFfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazApIGlmX2Jsb2NrMC5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9jazBfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpZl9ibG9jazFfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGlmICghLypsb2FkZWQqLyBjdHhbMV0pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazApIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5ICYgLypsb2FkZWQqLyAyKSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBjcmVhdGVfaWZfYmxvY2tfMSQyKGN0eCk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLm0oaWZfYmxvY2swX2FuY2hvci5wYXJlbnROb2RlLCBpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKiRjbG9zaW5nKi8gY3R4WzJdKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eSAmIC8qJGNsb3NpbmcqLyA0KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2skMihjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5tKGlmX2Jsb2NrMV9hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrMS5kKDEpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2sxID0gbnVsbDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9jazFfYW5jaG9yKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQ0KCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgJGNsb3Npbmc7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgY2xvc2luZywgJCR2YWx1ZSA9PiAkJGludmFsaWRhdGUoMiwgJGNsb3NpbmcgPSAkJHZhbHVlKSk7XG4gICAgXHRsZXQgeyBhY3RpdmVJdGVtIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgbG9hZGVkIH0gPSAkJHByb3BzO1xuXG4gICAgXHQkJHNlbGYuJCRzZXQgPSAkJHByb3BzID0+IHtcbiAgICBcdFx0aWYgKCdhY3RpdmVJdGVtJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMCwgYWN0aXZlSXRlbSA9ICQkcHJvcHMuYWN0aXZlSXRlbSk7XG4gICAgXHRcdGlmICgnbG9hZGVkJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMSwgbG9hZGVkID0gJCRwcm9wcy5sb2FkZWQpO1xuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIFthY3RpdmVJdGVtLCBsb2FkZWQsICRjbG9zaW5nXTtcbiAgICB9XG5cbiAgICBjbGFzcyBMb2FkaW5nIGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBcdGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICBcdFx0c3VwZXIoKTtcbiAgICBcdFx0aW5pdCh0aGlzLCBvcHRpb25zLCBpbnN0YW5jZSQ0LCBjcmVhdGVfZnJhZ21lbnQkNCwgbm90X2VxdWFsLCB7IGFjdGl2ZUl0ZW06IDAsIGxvYWRlZDogMSB9KTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy9pbWFnZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMSQxKGN0eCkge1xuICAgIFx0bGV0IGltZztcbiAgICBcdGxldCBpbWdfc2l6ZXNfdmFsdWU7XG4gICAgXHRsZXQgaW1nX291dHJvO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGltZyA9IGVsZW1lbnQoXCJpbWdcIik7XG4gICAgXHRcdFx0YXR0cihpbWcsIFwic2l6ZXNcIiwgaW1nX3NpemVzX3ZhbHVlID0gLypvcHRzKi8gY3R4WzhdLnNpemVzIHx8IGAkey8qc2l6ZXMqLyBjdHhbMV19cHhgKTtcbiAgICBcdFx0XHRhdHRyKGltZywgXCJhbHRcIiwgLyphY3RpdmVJdGVtKi8gY3R4WzddLmFsdCk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBpbWcsIGFuY2hvcik7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLyphZGRTcmMqLyBjdHhbMjFdLmNhbGwobnVsbCwgaW1nKSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihpbWcsIFwiZXJyb3JcIiwgLyplcnJvcl9oYW5kbGVyKi8gY3R4WzI3XSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypzaXplcyovIDIgJiYgaW1nX3NpemVzX3ZhbHVlICE9PSAoaW1nX3NpemVzX3ZhbHVlID0gLypvcHRzKi8gY3R4WzhdLnNpemVzIHx8IGAkey8qc2l6ZXMqLyBjdHhbMV19cHhgKSkge1xuICAgIFx0XHRcdFx0YXR0cihpbWcsIFwic2l6ZXNcIiwgaW1nX3NpemVzX3ZhbHVlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChpbWdfb3V0cm8pIGltZ19vdXRyby5lbmQoMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHRpbWdfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oaW1nLCBmbHksIHt9KTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGltZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZyAmJiBpbWdfb3V0cm8pIGltZ19vdXRyby5lbmQoKTtcbiAgICBcdFx0XHRtb3VudGVkID0gZmFsc2U7XG4gICAgXHRcdFx0cnVuX2FsbChkaXNwb3NlKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzg0OjEwKSB7I2lmIHNob3dMb2FkZXJ9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KSB7XG4gICAgXHRsZXQgbG9hZGluZztcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRsb2FkaW5nID0gbmV3IExvYWRpbmcoe1xuICAgIFx0XHRcdHByb3BzOiB7XG4gICAgXHRcdFx0XHRhY3RpdmVJdGVtOiAvKmFjdGl2ZUl0ZW0qLyBjdHhbN10sXG4gICAgXHRcdFx0XHRsb2FkZWQ6IC8qbG9hZGVkKi8gY3R4WzJdXG4gICAgXHRcdFx0fVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIHRhcmdldCwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0Y29uc3QgbG9hZGluZ19jaGFuZ2VzID0ge307XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypsb2FkZWQqLyA0KSBsb2FkaW5nX2NoYW5nZXMubG9hZGVkID0gLypsb2FkZWQqLyBjdHhbMl07XG4gICAgXHRcdFx0bG9hZGluZy4kc2V0KGxvYWRpbmdfY2hhbmdlcyk7XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4obG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQobG9hZGluZy4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudChsb2FkaW5nLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudCQzKGN0eCkge1xuICAgIFx0bGV0IGRpdjE7XG4gICAgXHRsZXQgZGl2MDtcbiAgICBcdGxldCBpZl9ibG9jazBfYW5jaG9yO1xuICAgIFx0bGV0IHN0eWxlX3RyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSAvIC0yICsgLyokem9vbURyYWdUcmFuc2xhdGUqLyBjdHhbNl1bMF19cHgsICR7LyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzFdIC8gLTIgKyAvKiR6b29tRHJhZ1RyYW5zbGF0ZSovIGN0eFs2XVsxXX1weCwgMClgO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0bGV0IGlmX2Jsb2NrMCA9IC8qbG9hZGVkKi8gY3R4WzJdICYmIGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jazEgPSAvKnNob3dMb2FkZXIqLyBjdHhbM10gJiYgY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYxID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRkaXYwID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2swKSBpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMF9hbmNob3IgPSBlbXB0eSgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5jKCk7XG4gICAgXHRcdFx0YXR0cihkaXYwLCBcImNsYXNzXCIsIFwiYnAtaW1nXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYwLCBcIndpZHRoXCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwiaGVpZ2h0XCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjAsIFwiYnAtZHJhZ1wiLCAvKnBvaW50ZXJEb3duKi8gY3R4WzRdKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1jYW56b29tXCIsIC8qbWF4Wm9vbSovIGN0eFsxMV0gPiAxICYmIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSA8IC8qbmF0dXJhbFdpZHRoKi8gY3R4WzEyXSk7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzddKSk7XG4gICAgXHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwidHJhbnNmb3JtXCIsIHN0eWxlX3RyYW5zZm9ybSk7XG4gICAgXHRcdFx0YXR0cihkaXYxLCBcImNsYXNzXCIsIFwiYnAtaW1nLXdyYXBcIik7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjEsIFwiYnAtY2xvc2VcIiwgLypjbG9zaW5nV2hpbGVab29tZWQqLyBjdHhbNV0pO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2MSwgYW5jaG9yKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MSwgZGl2MCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLm0oZGl2MCwgbnVsbCk7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjAsIGlmX2Jsb2NrMF9hbmNob3IpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5tKGRpdjAsIG51bGwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuXG4gICAgXHRcdFx0aWYgKCFtb3VudGVkKSB7XG4gICAgXHRcdFx0XHRkaXNwb3NlID0gW1xuICAgIFx0XHRcdFx0XHRhY3Rpb25fZGVzdHJveWVyKC8qb25Nb3VudCovIGN0eFsyMF0uY2FsbChudWxsLCBkaXYwKSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcIndoZWVsXCIsIC8qb25XaGVlbCovIGN0eFsxNV0pLFxuICAgIFx0XHRcdFx0XHRsaXN0ZW4oZGl2MSwgXCJwb2ludGVyZG93blwiLCAvKm9uUG9pbnRlckRvd24qLyBjdHhbMTZdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdjEsIFwicG9pbnRlcm1vdmVcIiwgLypvblBvaW50ZXJNb3ZlKi8gY3R4WzE3XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJ1cFwiLCAvKm9uUG9pbnRlclVwKi8gY3R4WzE5XSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihkaXYxLCBcInBvaW50ZXJjYW5jZWxcIiwgLypyZW1vdmVFdmVudEZyb21DYWNoZSovIGN0eFsxOF0pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmICgvKmxvYWRlZCovIGN0eFsyXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAucChjdHgsIGRpcnR5KTtcblxuICAgIFx0XHRcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmxvYWRlZCovIDQpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCwgMSk7XG4gICAgXHRcdFx0XHRcdH1cbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IGNyZWF0ZV9pZl9ibG9ja18xJDEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazAsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAubShkaXYwLCBpZl9ibG9jazBfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMCkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMCwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICgvKnNob3dMb2FkZXIqLyBjdHhbM10pIHtcbiAgICBcdFx0XHRcdGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLypzaG93TG9hZGVyKi8gOCkge1xuICAgIFx0XHRcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2sxLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gY3JlYXRlX2lmX2Jsb2NrJDEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEubShkaXYwLCBudWxsKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrMSkge1xuICAgIFx0XHRcdFx0Z3JvdXBfb3V0cm9zKCk7XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSwgMSwgMSwgKCkgPT4ge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qJGltYWdlRGltZW5zaW9ucyovIDEpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYwLCBcIndpZHRoXCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVswXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zKi8gMSkge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdjAsIFwiaGVpZ2h0XCIsIC8qJGltYWdlRGltZW5zaW9ucyovIGN0eFswXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLypwb2ludGVyRG93biovIDE2KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MCwgXCJicC1kcmFnXCIsIC8qcG9pbnRlckRvd24qLyBjdHhbNF0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qbWF4Wm9vbSwgJGltYWdlRGltZW5zaW9ucywgbmF0dXJhbFdpZHRoKi8gNjE0NSkge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjAsIFwiYnAtY2Fuem9vbVwiLCAvKm1heFpvb20qLyBjdHhbMTFdID4gMSAmJiAvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMF0gPCAvKm5hdHVyYWxXaWR0aCovIGN0eFsxMl0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qJGltYWdlRGltZW5zaW9ucywgJHpvb21EcmFnVHJhbnNsYXRlKi8gNjUgJiYgc3R5bGVfdHJhbnNmb3JtICE9PSAoc3R5bGVfdHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7LyokaW1hZ2VEaW1lbnNpb25zKi8gY3R4WzBdWzBdIC8gLTIgKyAvKiR6b29tRHJhZ1RyYW5zbGF0ZSovIGN0eFs2XVswXX1weCwgJHsvKiRpbWFnZURpbWVuc2lvbnMqLyBjdHhbMF1bMV0gLyAtMiArIC8qJHpvb21EcmFnVHJhbnNsYXRlKi8gY3R4WzZdWzFdfXB4LCAwKWApKSB7XG4gICAgXHRcdFx0XHRzZXRfc3R5bGUoZGl2MCwgXCJ0cmFuc2Zvcm1cIiwgc3R5bGVfdHJhbnNmb3JtKTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoIWN1cnJlbnQgfHwgZGlydHlbMF0gJiAvKmNsb3NpbmdXaGlsZVpvb21lZCovIDMyKSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MSwgXCJicC1jbG9zZVwiLCAvKmNsb3NpbmdXaGlsZVpvb21lZCovIGN0eFs1XSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMCk7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2MSk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMCkgaWZfYmxvY2swLmQoKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEuZCgpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlJDMoJCRzZWxmLCAkJHByb3BzLCAkJGludmFsaWRhdGUpIHtcbiAgICBcdGxldCAkem9vbWVkO1xuICAgIFx0bGV0ICR6b29tRHJhZ1RyYW5zbGF0ZTtcbiAgICBcdGxldCAkY2xvc2luZztcbiAgICBcdGxldCAkaW1hZ2VEaW1lbnNpb25zO1xuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIGNsb3NpbmcsICQkdmFsdWUgPT4gJCRpbnZhbGlkYXRlKDI2LCAkY2xvc2luZyA9ICQkdmFsdWUpKTtcbiAgICBcdGxldCB7IHByb3BzIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgc21hbGxTY3JlZW4gfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgeyBhY3RpdmVJdGVtLCBvcHRzLCBwcmV2LCBuZXh0LCB6b29tZWQsIGNvbnRhaW5lciB9ID0gcHJvcHM7XG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgem9vbWVkLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoMjUsICR6b29tZWQgPSB2YWx1ZSkpO1xuICAgIFx0bGV0IG1heFpvb20gPSBhY3RpdmVJdGVtLm1heFpvb20gfHwgb3B0cy5tYXhab29tIHx8IDEwO1xuICAgIFx0bGV0IGNhbGN1bGF0ZWREaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKTtcblxuICAgIFx0LyoqIHZhbHVlIG9mIHNpemVzIGF0dHJpYnV0ZSAqL1xuICAgIFx0bGV0IHNpemVzID0gY2FsY3VsYXRlZERpbWVuc2lvbnNbMF07XG5cbiAgICBcdC8qKiB0cmFja3MgbG9hZCBzdGF0ZSBvZiBpbWFnZSAqL1xuICAgIFx0bGV0IGxvYWRlZCwgc2hvd0xvYWRlcjtcblxuICAgIFx0LyoqIHN0b3JlcyBwaW5jaCBpbmZvIGlmIG11bHRpcGxlIHRvdWNoIGV2ZW50cyBhY3RpdmUgKi9cbiAgICBcdGxldCBwaW5jaERldGFpbHM7XG5cbiAgICBcdC8qKiBpbWFnZSBodG1sIGVsZW1lbnQgKC5icC1pbWcpICovXG4gICAgXHRsZXQgYnBJbWc7XG5cbiAgICBcdC8qKiB0cmFjayBkaXN0YW5jZSBmb3IgcGluY2ggZXZlbnRzICovXG4gICAgXHRsZXQgcHJldkRpZmYgPSAwO1xuXG4gICAgXHRsZXQgcG9pbnRlckRvd24sIGhhc0RyYWdnZWQ7XG4gICAgXHRsZXQgZHJhZ1N0YXJ0WCwgZHJhZ1N0YXJ0WTtcblxuICAgIFx0LyoqIHpvb21EcmFnVHJhbnNsYXRlIHZhbHVlcyBvbiBzdGFydCBvZiBkcmFnICovXG4gICAgXHRsZXQgZHJhZ1N0YXJ0VHJhbnNsYXRlWCwgZHJhZ1N0YXJ0VHJhbnNsYXRlWTtcblxuICAgIFx0LyoqIGlmIHRydWUsIGFkZHMgY2xhc3MgdG8gLmJwLXdyYXAgdG8gYXZvaWQgaW1hZ2UgY3JvcHBpbmcgKi9cbiAgICBcdGxldCBjbG9zaW5nV2hpbGVab29tZWQ7XG5cbiAgICBcdGNvbnN0IG5hdHVyYWxXaWR0aCA9ICthY3RpdmVJdGVtLndpZHRoO1xuXG4gICAgXHQvKiogc3RvcmUgcG9zaXRpb25zIGZvciBkcmFnIGluZXJ0aWEgKi9cbiAgICBcdGNvbnN0IGRyYWdQb3NpdGlvbnMgPSBbXTtcblxuICAgIFx0LyoqIGNhY2hlIHBvaW50ZXIgZXZlbnRzIHRvIGhhbmRsZSBwaW5jaCAqL1xuICAgIFx0Y29uc3QgcG9pbnRlckNhY2hlID0gbmV3IE1hcCgpO1xuXG4gICAgXHQvKiogdHdlZW4gdG8gY29udHJvbCBpbWFnZSBzaXplICovXG4gICAgXHRjb25zdCBpbWFnZURpbWVuc2lvbnMgPSB0d2VlbmVkKGNhbGN1bGF0ZWREaW1lbnNpb25zLCBkZWZhdWx0VHdlZW5PcHRpb25zKDQwMCkpO1xuXG4gICAgXHRjb21wb25lbnRfc3Vic2NyaWJlKCQkc2VsZiwgaW1hZ2VEaW1lbnNpb25zLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoMCwgJGltYWdlRGltZW5zaW9ucyA9IHZhbHVlKSk7XG5cbiAgICBcdC8qKiB0cmFuc2xhdGUgdHJhbnNmb3JtIGZvciBwb2ludGVyRG93biAqL1xuICAgIFx0Y29uc3Qgem9vbURyYWdUcmFuc2xhdGUgPSB0d2VlbmVkKFswLCAwXSwgZGVmYXVsdFR3ZWVuT3B0aW9ucyg0MDApKTtcblxuICAgIFx0Y29tcG9uZW50X3N1YnNjcmliZSgkJHNlbGYsIHpvb21EcmFnVHJhbnNsYXRlLCB2YWx1ZSA9PiAkJGludmFsaWRhdGUoNiwgJHpvb21EcmFnVHJhbnNsYXRlID0gdmFsdWUpKTtcblxuICAgIFx0LyoqIGNhbGN1bGF0ZSB0cmFuc2xhdGUgcG9zaXRpb24gd2l0aCBib3VuZHMgKi9cbiAgICBcdGNvbnN0IGJvdW5kVHJhbnNsYXRlVmFsdWVzID0gKFt4LCB5XSwgbmV3RGltZW5zaW9ucyA9ICRpbWFnZURpbWVuc2lvbnMpID0+IHtcbiAgICBcdFx0Ly8gaW1hZ2UgZHJhZyB0cmFuc2xhdGUgYm91bmRzXG4gICAgXHRcdGNvbnN0IG1heFRyYW5zbGF0ZVggPSAobmV3RGltZW5zaW9uc1swXSAtIGNvbnRhaW5lci53KSAvIDI7XG5cbiAgICBcdFx0Y29uc3QgbWF4VHJhbnNsYXRlWSA9IChuZXdEaW1lbnNpb25zWzFdIC0gY29udGFpbmVyLmgpIC8gMjtcblxuICAgIFx0XHQvLyB4IG1heCBkcmFnXG4gICAgXHRcdGlmIChtYXhUcmFuc2xhdGVYIDwgMCkge1xuICAgIFx0XHRcdHggPSAwO1xuICAgIFx0XHR9IGVsc2UgaWYgKHggPiBtYXhUcmFuc2xhdGVYKSB7XG4gICAgXHRcdFx0aWYgKHNtYWxsU2NyZWVuKSB7XG4gICAgXHRcdFx0XHQvLyBib3VuZCB0byBsZWZ0IHNpZGUgKGFsbG93IHNsaWdodCBvdmVyIGRyYWcpXG4gICAgXHRcdFx0XHR4ID0gcG9pbnRlckRvd25cbiAgICBcdFx0XHRcdD8gbWF4VHJhbnNsYXRlWCArICh4IC0gbWF4VHJhbnNsYXRlWCkgLyAxMFxuICAgIFx0XHRcdFx0OiBtYXhUcmFuc2xhdGVYO1xuXG4gICAgXHRcdFx0XHQvLyBwcmV2aW91cyBpdGVtIGlmIGRyYWdnZWQgcGFzdCB0aHJlc2hvbGRcbiAgICBcdFx0XHRcdGlmICh4ID4gbWF4VHJhbnNsYXRlWCArIDIwKSB7XG4gICAgXHRcdFx0XHRcdC8vIHBvaW50ZXJkb3duID0gdW5kZWZpbmVkIHRvIHN0b3AgcG9pbnRlcm1vdmUgZnJvbSBydW5uaW5nIGFnYWluXG4gICAgXHRcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHByZXYoKSk7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdHggPSBtYXhUcmFuc2xhdGVYO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSBlbHNlIGlmICh4IDwgLW1heFRyYW5zbGF0ZVgpIHtcbiAgICBcdFx0XHQvLyBib3VuZCB0byByaWdodCBzaWRlIChhbGxvdyBzbGlnaHQgb3ZlciBkcmFnKVxuICAgIFx0XHRcdGlmIChzbWFsbFNjcmVlbikge1xuICAgIFx0XHRcdFx0eCA9IHBvaW50ZXJEb3duXG4gICAgXHRcdFx0XHQ/IC1tYXhUcmFuc2xhdGVYIC0gKC1tYXhUcmFuc2xhdGVYIC0geCkgLyAxMFxuICAgIFx0XHRcdFx0OiAtbWF4VHJhbnNsYXRlWDtcblxuICAgIFx0XHRcdFx0Ly8gbmV4dCBpdGVtIGlmIGRyYWdnZWQgcGFzdCB0aHJlc2hvbGRcbiAgICBcdFx0XHRcdGlmICh4IDwgLW1heFRyYW5zbGF0ZVggLSAyMCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBuZXh0KCkpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHR4ID0gLW1heFRyYW5zbGF0ZVg7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8geSBtYXggZHJhZ1xuICAgIFx0XHRpZiAobWF4VHJhbnNsYXRlWSA8IDApIHtcbiAgICBcdFx0XHR5ID0gMDtcbiAgICBcdFx0fSBlbHNlIGlmICh5ID4gbWF4VHJhbnNsYXRlWSkge1xuICAgIFx0XHRcdHkgPSBtYXhUcmFuc2xhdGVZO1xuICAgIFx0XHR9IGVsc2UgaWYgKHkgPCAtbWF4VHJhbnNsYXRlWSkge1xuICAgIFx0XHRcdHkgPSAtbWF4VHJhbnNsYXRlWTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdHJldHVybiBbeCwgeV07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogdXBkYXRlcyB6b29tIGxldmVsIGluIG9yIG91dCBiYXNlZCBvbiBhbXQgdmFsdWUgKi9cbiAgICBcdGZ1bmN0aW9uIGNoYW5nZVpvb20oYW10ID0gbWF4Wm9vbSwgZSkge1xuICAgIFx0XHRpZiAoJGNsb3NpbmcpIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHRjb25zdCBtYXhXaWR0aCA9IGNhbGN1bGF0ZWREaW1lbnNpb25zWzBdICogbWF4Wm9vbTtcbiAgICBcdFx0bGV0IG5ld1dpZHRoID0gJGltYWdlRGltZW5zaW9uc1swXSArICRpbWFnZURpbWVuc2lvbnNbMF0gKiBhbXQ7XG4gICAgXHRcdGxldCBuZXdIZWlnaHQgPSAkaW1hZ2VEaW1lbnNpb25zWzFdICsgJGltYWdlRGltZW5zaW9uc1sxXSAqIGFtdDtcblxuICAgIFx0XHRpZiAoYW10ID4gMCkge1xuICAgIFx0XHRcdGlmIChuZXdXaWR0aCA+IG1heFdpZHRoKSB7XG4gICAgXHRcdFx0XHQvLyByZXF1ZXN0aW5nIHNpemUgbGFyZ2UgdGhhbiBtYXggem9vbVxuICAgIFx0XHRcdFx0bmV3V2lkdGggPSBtYXhXaWR0aDtcblxuICAgIFx0XHRcdFx0bmV3SGVpZ2h0ID0gY2FsY3VsYXRlZERpbWVuc2lvbnNbMV0gKiBtYXhab29tO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmIChuZXdXaWR0aCA+IG5hdHVyYWxXaWR0aCkge1xuICAgIFx0XHRcdFx0Ly8gaWYgcmVxdWVzdGluZyB6b29tIGxhcmdlciB0aGFuIG5hdHVyYWwgc2l6ZVxuICAgIFx0XHRcdFx0bmV3V2lkdGggPSBuYXR1cmFsV2lkdGg7XG5cbiAgICBcdFx0XHRcdG5ld0hlaWdodCA9ICthY3RpdmVJdGVtLmhlaWdodDtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0gZWxzZSBpZiAobmV3V2lkdGggPCBjYWxjdWxhdGVkRGltZW5zaW9uc1swXSkge1xuICAgIFx0XHRcdC8vIGlmIHJlcXVlc3RpbmcgaW1hZ2Ugc21hbGxlciB0aGFuIHN0YXJ0aW5nIHNpemVcbiAgICBcdFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KGNhbGN1bGF0ZWREaW1lbnNpb25zKTtcblxuICAgIFx0XHRcdHJldHVybiB6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoWzAsIDBdKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGxldCB7IHgsIHksIHdpZHRoLCBoZWlnaHQgfSA9IGJwSW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgXHRcdC8vIGRpc3RhbmNlIGNsaWNrZWQgZnJvbSBjZW50ZXIgb2YgaW1hZ2VcbiAgICBcdFx0Y29uc3Qgb2Zmc2V0WCA9IGUgPyBlLmNsaWVudFggLSB4IC0gd2lkdGggLyAyIDogMDtcblxuICAgIFx0XHRjb25zdCBvZmZzZXRZID0gZSA/IGUuY2xpZW50WSAtIHkgLSBoZWlnaHQgLyAyIDogMDtcbiAgICBcdFx0eCA9IC1vZmZzZXRYICogKG5ld1dpZHRoIC8gd2lkdGgpICsgb2Zmc2V0WDtcbiAgICBcdFx0eSA9IC1vZmZzZXRZICogKG5ld0hlaWdodCAvIGhlaWdodCkgKyBvZmZzZXRZO1xuICAgIFx0XHRjb25zdCBuZXdEaW1lbnNpb25zID0gW25ld1dpZHRoLCBuZXdIZWlnaHRdO1xuXG4gICAgXHRcdC8vIHNldCBuZXcgZGltZW5zaW9ucyBhbmQgdXBkYXRlIHNpemVzIHByb3BlcnR5XG4gICAgXHRcdGltYWdlRGltZW5zaW9ucy5zZXQobmV3RGltZW5zaW9ucykudGhlbigoKSA9PiB7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDEsIHNpemVzID0gTWF0aC5yb3VuZChNYXRoLm1heChzaXplcywgbmV3V2lkdGgpKSk7XG4gICAgXHRcdH0pO1xuXG4gICAgXHRcdC8vIHVwZGF0ZSB0cmFuc2xhdGUgdmFsdWVcbiAgICBcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KGJvdW5kVHJhbnNsYXRlVmFsdWVzKFskem9vbURyYWdUcmFuc2xhdGVbMF0gKyB4LCAkem9vbURyYWdUcmFuc2xhdGVbMV0gKyB5XSwgbmV3RGltZW5zaW9ucykpO1xuICAgIFx0fVxuXG4gICAgXHQvLyBhbGxvdyB6b29tIHRvIGJlIHJlYWQgLyBzZXQgZXh0ZXJuYWxseVxuICAgIFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGFjdGl2ZUl0ZW0sICd6b29tJywge1xuICAgIFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gICAgXHRcdGdldDogKCkgPT4gJHpvb21lZCxcbiAgICBcdFx0c2V0OiBib29sID0+IGNoYW5nZVpvb20oYm9vbCA/IG1heFpvb20gOiAtbWF4Wm9vbSlcbiAgICBcdH0pO1xuXG4gICAgXHRjb25zdCBvbldoZWVsID0gZSA9PiB7XG4gICAgXHRcdC8vIHJldHVybiBpZiBzY3JvbGxpbmcgcGFzdCBpbmxpbmUgZ2FsbGVyeSB3LyB3aGVlbFxuICAgIFx0XHRpZiAob3B0cy5pbmxpbmUgJiYgISR6b29tZWQpIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBwcmV2ZW50RGVmYXVsdCB0byBzdG9wIHNjcm9sbGluZyBvbiB6b29tZWQgaW5saW5lIGltYWdlXG4gICAgXHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIFx0XHQvLyBjaGFuZ2Ugem9vbSBvbiB3aGVlbFxuICAgIFx0XHRjaGFuZ2Vab29tKGUuZGVsdGFZIC8gLTMwMCwgZSk7XG4gICAgXHR9O1xuXG4gICAgXHQvKiogb24gZHJhZyBzdGFydCwgc3RvcmUgaW5pdGlhbCBwb3NpdGlvbiBhbmQgaW1hZ2UgdHJhbnNsYXRlIHZhbHVlcyAqL1xuICAgIFx0Y29uc3Qgb25Qb2ludGVyRG93biA9IGUgPT4ge1xuICAgIFx0XHQvLyBkb24ndCBydW4gaWYgcmlnaHQgY2xpY2tcbiAgICBcdFx0aWYgKGUuYnV0dG9uICE9PSAyKSB7XG4gICAgXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHRydWUpO1xuICAgIFx0XHRcdHBvaW50ZXJDYWNoZS5zZXQoZS5wb2ludGVySWQsIGUpO1xuICAgIFx0XHRcdGRyYWdTdGFydFggPSBlLmNsaWVudFg7XG4gICAgXHRcdFx0ZHJhZ1N0YXJ0WSA9IGUuY2xpZW50WTtcbiAgICBcdFx0XHRkcmFnU3RhcnRUcmFuc2xhdGVYID0gJHpvb21EcmFnVHJhbnNsYXRlWzBdO1xuICAgIFx0XHRcdGRyYWdTdGFydFRyYW5zbGF0ZVkgPSAkem9vbURyYWdUcmFuc2xhdGVbMV07XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdC8qKiBvbiBkcmFnLCB1cGRhdGUgaW1hZ2UgdHJhbnNsYXRlIHZhbCAqL1xuICAgIFx0Y29uc3Qgb25Qb2ludGVyTW92ZSA9IGUgPT4ge1xuICAgIFx0XHRpZiAocG9pbnRlckNhY2hlLnNpemUgPiAxKSB7XG4gICAgXHRcdFx0Ly8gaWYgbXVsdGlwbGUgcG9pbnRlciBldmVudHMsIHBhc3MgdG8gaGFuZGxlUGluY2ggZnVuY3Rpb25cbiAgICBcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBmYWxzZSk7XG5cbiAgICBcdFx0XHRyZXR1cm4gb3B0cy5ub1BpbmNoPy4oY29udGFpbmVyLmVsKSB8fCBoYW5kbGVQaW5jaChlKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdGlmICghcG9pbnRlckRvd24pIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHRsZXQgeCA9IGUuY2xpZW50WDtcbiAgICBcdFx0bGV0IHkgPSBlLmNsaWVudFk7XG5cbiAgICBcdFx0Ly8gc3RvcmUgcG9zaXRpb25zIGluIGRyYWdQb3NpdGlvbnMgZm9yIGluZXJ0aWFcbiAgICBcdFx0Ly8gc2V0IGhhc0RyYWdnZWQgaWYgPiAyIHBvaW50ZXIgbW92ZSBldmVudHNcbiAgICBcdFx0aGFzRHJhZ2dlZCA9IGRyYWdQb3NpdGlvbnMucHVzaCh7IHgsIHkgfSkgPiAyO1xuXG4gICAgXHRcdC8vIG92ZXJhbGwgZHJhZyBkaWZmIGZyb20gc3RhcnQgbG9jYXRpb25cbiAgICBcdFx0eCA9IHggLSBkcmFnU3RhcnRYO1xuXG4gICAgXHRcdHkgPSB5IC0gZHJhZ1N0YXJ0WTtcblxuICAgIFx0XHQvLyBoYW5kbGUgdW56b29tZWQgbGVmdCAvIHJpZ2h0IC8gdXAgc3dpcGVzXG4gICAgXHRcdGlmICghJHpvb21lZCkge1xuICAgIFx0XHRcdC8vIGNsb3NlIGlmIHN3aXBlIHVwXG4gICAgXHRcdFx0aWYgKHkgPCAtOTApIHtcbiAgICBcdFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9ICFvcHRzLm5vQ2xvc2UgJiYgcHJvcHMuY2xvc2UoKSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Ly8gb25seSBoYW5kbGUgbGVmdCAvIHJpZ2h0IGlmIG5vdCBzd2lwaW5nIHZlcnRpY2FsbHlcbiAgICBcdFx0XHRpZiAoTWF0aC5hYnMoeSkgPCAzMCkge1xuICAgIFx0XHRcdFx0Ly8gcHJldmlvdXMgaWYgc3dpcGUgbGVmdFxuICAgIFx0XHRcdFx0aWYgKHggPiA0MCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBwcmV2KCkpO1xuICAgIFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHQvLyBuZXh0IGlmIHN3aXBlIHJpZ2h0XG4gICAgXHRcdFx0XHRpZiAoeCA8IC00MCkge1xuICAgIFx0XHRcdFx0XHQvLyBwb2ludGVyZG93biA9IHVuZGVmaW5lZCB0byBzdG9wIHBvaW50ZXJtb3ZlIGZyb20gcnVubmluZyBhZ2FpblxuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBuZXh0KCkpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIGltYWdlIGRyYWcgd2hlbiB6b29tZWRcbiAgICBcdFx0aWYgKCR6b29tZWQgJiYgaGFzRHJhZ2dlZCAmJiAhJGNsb3NpbmcpIHtcbiAgICBcdFx0XHR6b29tRHJhZ1RyYW5zbGF0ZS5zZXQoYm91bmRUcmFuc2xhdGVWYWx1ZXMoW2RyYWdTdGFydFRyYW5zbGF0ZVggKyB4LCBkcmFnU3RhcnRUcmFuc2xhdGVZICsgeV0pLCB7IGR1cmF0aW9uOiAwIH0pO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBoYW5kbGVQaW5jaCA9IGUgPT4ge1xuICAgIFx0XHQvLyB1cGRhdGUgZXZlbnQgaW4gY2FjaGUgYW5kIGdldCB2YWx1ZXNcbiAgICBcdFx0Y29uc3QgW3AxLCBwMl0gPSBwb2ludGVyQ2FjaGUuc2V0KGUucG9pbnRlcklkLCBlKS52YWx1ZXMoKTtcblxuICAgIFx0XHQvLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHR3byBwb2ludGVyc1xuICAgIFx0XHRjb25zdCBkeCA9IHAxLmNsaWVudFggLSBwMi5jbGllbnRYO1xuXG4gICAgXHRcdGNvbnN0IGR5ID0gcDEuY2xpZW50WSAtIHAyLmNsaWVudFk7XG4gICAgXHRcdGNvbnN0IGN1ckRpZmYgPSBNYXRoLmh5cG90KGR4LCBkeSk7XG5cbiAgICBcdFx0Ly8gY2FjaGUgdGhlIG9yaWdpbmFsIHBpbmNoIGNlbnRlclxuICAgIFx0XHRwaW5jaERldGFpbHMgPSBwaW5jaERldGFpbHMgfHwge1xuICAgIFx0XHRcdGNsaWVudFg6IChwMS5jbGllbnRYICsgcDIuY2xpZW50WCkgLyAyLFxuICAgIFx0XHRcdGNsaWVudFk6IChwMS5jbGllbnRZICsgcDIuY2xpZW50WSkgLyAyXG4gICAgXHRcdH07XG5cbiAgICBcdFx0Ly8gc2NhbGUgaW1hZ2VcbiAgICBcdFx0Y2hhbmdlWm9vbSgoKHByZXZEaWZmIHx8IGN1ckRpZmYpIC0gY3VyRGlmZikgLyAtMzUsIHBpbmNoRGV0YWlscyk7XG5cbiAgICBcdFx0Ly8gQ2FjaGUgdGhlIGRpc3RhbmNlIGZvciB0aGUgbmV4dCBtb3ZlIGV2ZW50XG4gICAgXHRcdHByZXZEaWZmID0gY3VyRGlmZjtcbiAgICBcdH07XG5cbiAgICBcdC8qKiByZW1vdmUgZXZlbnQgZnJvbSBwb2ludGVyIGV2ZW50IGNhY2hlICovXG4gICAgXHRjb25zdCByZW1vdmVFdmVudEZyb21DYWNoZSA9IGUgPT4gcG9pbnRlckNhY2hlLmRlbGV0ZShlLnBvaW50ZXJJZCk7XG5cbiAgICBcdGZ1bmN0aW9uIG9uUG9pbnRlclVwKGUpIHtcbiAgICBcdFx0cmVtb3ZlRXZlbnRGcm9tQ2FjaGUoZSk7XG5cbiAgICBcdFx0aWYgKHBpbmNoRGV0YWlscykge1xuICAgIFx0XHRcdC8vIHJlc2V0IHByZXZEaWZmIGFuZCBjbGVhciBwb2ludGVyRG93biB0byB0cmlnZ2VyIHJldHVybiBiZWxvd1xuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSg0LCBwb2ludGVyRG93biA9IHByZXZEaWZmID0gMCk7XG5cbiAgICBcdFx0XHQvLyBzZXQgcGluY2hEZXRhaWxzIHRvIG51bGwgYWZ0ZXIgbGFzdCBmaW5nZXIgbGlmdHNcbiAgICBcdFx0XHRwaW5jaERldGFpbHMgPSBwb2ludGVyQ2FjaGUuc2l6ZSA/IHBpbmNoRGV0YWlscyA6IG51bGw7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBtYWtlIHN1cmUgcG9pbnRlciBldmVudHMgZG9uJ3QgY2Fycnkgb3ZlciB0byBuZXh0IGltYWdlXG4gICAgXHRcdGlmICghcG9pbnRlckRvd24pIHtcbiAgICBcdFx0XHRyZXR1cm47XG4gICAgXHRcdH1cblxuICAgIFx0XHQkJGludmFsaWRhdGUoNCwgcG9pbnRlckRvd24gPSBmYWxzZSk7XG5cbiAgICBcdFx0Ly8gY2xvc2UgaWYgb3ZlcmxheSBpcyBjbGlja2VkXG4gICAgXHRcdGlmIChlLnRhcmdldCA9PT0gdGhpcyAmJiAhb3B0cy5ub0Nsb3NlKSB7XG4gICAgXHRcdFx0cmV0dXJuIHByb3BzLmNsb3NlKCk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyBhZGQgZHJhZyBpbmVydGlhIC8gc25hcCBiYWNrIHRvIGJvdW5kc1xuICAgIFx0XHRpZiAoaGFzRHJhZ2dlZCkge1xuICAgIFx0XHRcdGNvbnN0IFtwb3NPbmUsIHBvc1R3bywgcG9zVGhyZWVdID0gZHJhZ1Bvc2l0aW9ucy5zbGljZSgtMyk7XG4gICAgXHRcdFx0Y29uc3QgeERpZmYgPSBwb3NUd28ueCAtIHBvc1RocmVlLng7XG4gICAgXHRcdFx0Y29uc3QgeURpZmYgPSBwb3NUd28ueSAtIHBvc1RocmVlLnk7XG5cbiAgICBcdFx0XHRpZiAoTWF0aC5oeXBvdCh4RGlmZiwgeURpZmYpID4gNSkge1xuICAgIFx0XHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KGJvdW5kVHJhbnNsYXRlVmFsdWVzKFtcbiAgICBcdFx0XHRcdFx0JHpvb21EcmFnVHJhbnNsYXRlWzBdIC0gKHBvc09uZS54IC0gcG9zVGhyZWUueCkgKiA1LFxuICAgIFx0XHRcdFx0XHQkem9vbURyYWdUcmFuc2xhdGVbMV0gLSAocG9zT25lLnkgLSBwb3NUaHJlZS55KSAqIDVcbiAgICBcdFx0XHRcdF0pKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0gZWxzZSBpZiAoIW9wdHMub25JbWFnZUNsaWNrPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKSkge1xuICAgIFx0XHRcdGNoYW5nZVpvb20oJHpvb21lZCA/IC1tYXhab29tIDogbWF4Wm9vbSwgZSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHQvLyByZXNldCBwb2ludGVyIHN0YXRlc1xuICAgIFx0XHRoYXNEcmFnZ2VkID0gZmFsc2U7XG5cbiAgICBcdFx0Ly8gcmVzZXQgZHJhZ1Bvc2l0aW9uc1xuICAgIFx0XHRkcmFnUG9zaXRpb25zLmxlbmd0aCA9IDA7XG4gICAgXHR9XG5cbiAgICBcdGNvbnN0IG9uTW91bnQgPSBub2RlID0+IHtcbiAgICBcdFx0YnBJbWcgPSBub2RlO1xuXG4gICAgXHRcdC8vIGhhbmRsZSBnbG9iYWxUaGlzIHJlc2l6ZVxuICAgIFx0XHRwcm9wcy5zZXRSZXNpemVGdW5jKCgpID0+IHtcbiAgICBcdFx0XHQkJGludmFsaWRhdGUoMjQsIGNhbGN1bGF0ZWREaW1lbnNpb25zID0gcHJvcHMuY2FsY3VsYXRlRGltZW5zaW9ucyhhY3RpdmVJdGVtKSk7XG5cbiAgICBcdFx0XHQvLyBhZGp1c3QgaW1hZ2Ugc2l6ZSAvIHpvb20gb24gcmVzaXplLCBidXQgbm90IG9uIG1vYmlsZSBiZWNhdXNlXG4gICAgXHRcdFx0Ly8gc29tZSBicm93c2VycyAoaW9zIHNhZmFyaSAxNSkgY29uc3RhbnRseSByZXNpemUgc2NyZWVuIG9uIGRyYWdcbiAgICBcdFx0XHRpZiAob3B0cy5pbmxpbmUgfHwgIXNtYWxsU2NyZWVuKSB7XG4gICAgXHRcdFx0XHRpbWFnZURpbWVuc2lvbnMuc2V0KGNhbGN1bGF0ZWREaW1lbnNpb25zKTtcbiAgICBcdFx0XHRcdHpvb21EcmFnVHJhbnNsYXRlLnNldChbMCwgMF0pO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdFx0Ly8gZGVjb2RlIGluaXRpYWwgaW1hZ2UgYmVmb3JlIHJlbmRlcmluZ1xuICAgIFx0XHRwcm9wcy5sb2FkSW1hZ2UoYWN0aXZlSXRlbSkudGhlbigoKSA9PiB7XG4gICAgXHRcdFx0JCRpbnZhbGlkYXRlKDIsIGxvYWRlZCA9IHRydWUpO1xuICAgIFx0XHRcdHByb3BzLnByZWxvYWROZXh0KCk7XG4gICAgXHRcdH0pO1xuXG4gICAgXHRcdC8vIHNob3cgbG9hZGluZyBpbmRpY2F0b3IgaWYgbmVlZGVkXG4gICAgXHRcdHNldFRpbWVvdXQoXG4gICAgXHRcdFx0KCkgPT4ge1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDMsIHNob3dMb2FkZXIgPSAhbG9hZGVkKTtcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdDI1MFxuICAgIFx0XHQpO1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgYWRkU3JjID0gbm9kZSA9PiB7XG4gICAgXHRcdGFkZEF0dHJpYnV0ZXMobm9kZSwgYWN0aXZlSXRlbS5hdHRyKTtcbiAgICBcdFx0bm9kZS5zcmNzZXQgPSBhY3RpdmVJdGVtLmltZztcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IGVycm9yX2hhbmRsZXIgPSBlcnJvciA9PiBvcHRzLm9uRXJyb3I/Lihjb250YWluZXIsIGFjdGl2ZUl0ZW0sIGVycm9yKTtcblxuICAgIFx0JCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgXHRcdFxuICAgIFx0XHRpZiAoJ3NtYWxsU2NyZWVuJyBpbiAkJHByb3BzKSAkJGludmFsaWRhdGUoMjMsIHNtYWxsU2NyZWVuID0gJCRwcm9wcy5zbWFsbFNjcmVlbik7XG4gICAgXHR9O1xuXG4gICAgXHQkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIFx0XHRpZiAoJCRzZWxmLiQkLmRpcnR5WzBdICYgLyokaW1hZ2VEaW1lbnNpb25zLCBjYWxjdWxhdGVkRGltZW5zaW9ucyovIDE2Nzc3MjE3KSB7XG4gICAgXHRcdFx0em9vbWVkLnNldCgkaW1hZ2VEaW1lbnNpb25zWzBdIC0gMTAgPiBjYWxjdWxhdGVkRGltZW5zaW9uc1swXSk7XG4gICAgXHRcdH1cblxuICAgIFx0XHRpZiAoJCRzZWxmLiQkLmRpcnR5WzBdICYgLyokY2xvc2luZywgJHpvb21lZCwgY2FsY3VsYXRlZERpbWVuc2lvbnMqLyAxMTc0NDA1MTIpIHtcbiAgICBcdFx0XHQvLyBpZiB6b29tZWQgd2hpbGUgY2xvc2luZywgem9vbSBvdXQgaW1hZ2UgYW5kIGFkZCBjbGFzc1xuICAgIFx0XHRcdC8vIHRvIGNoYW5nZSBjb250YWluIHZhbHVlIG9uIC5icC13cmFwIHRvIGF2b2lkIGNyb3BwaW5nXG4gICAgXHRcdFx0aWYgKCRjbG9zaW5nICYmICR6b29tZWQgJiYgIW9wdHMuaW50cm8pIHtcbiAgICBcdFx0XHRcdGNvbnN0IGNsb3NlVHdlZW5PcHRzID0gZGVmYXVsdFR3ZWVuT3B0aW9ucyg0ODApO1xuICAgIFx0XHRcdFx0em9vbURyYWdUcmFuc2xhdGUuc2V0KFswLCAwXSwgY2xvc2VUd2Vlbk9wdHMpO1xuICAgIFx0XHRcdFx0aW1hZ2VEaW1lbnNpb25zLnNldChjYWxjdWxhdGVkRGltZW5zaW9ucywgY2xvc2VUd2Vlbk9wdHMpO1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDUsIGNsb3NpbmdXaGlsZVpvb21lZCA9IHRydWUpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0cmV0dXJuIFtcbiAgICBcdFx0JGltYWdlRGltZW5zaW9ucyxcbiAgICBcdFx0c2l6ZXMsXG4gICAgXHRcdGxvYWRlZCxcbiAgICBcdFx0c2hvd0xvYWRlcixcbiAgICBcdFx0cG9pbnRlckRvd24sXG4gICAgXHRcdGNsb3NpbmdXaGlsZVpvb21lZCxcbiAgICBcdFx0JHpvb21EcmFnVHJhbnNsYXRlLFxuICAgIFx0XHRhY3RpdmVJdGVtLFxuICAgIFx0XHRvcHRzLFxuICAgIFx0XHR6b29tZWQsXG4gICAgXHRcdGNvbnRhaW5lcixcbiAgICBcdFx0bWF4Wm9vbSxcbiAgICBcdFx0bmF0dXJhbFdpZHRoLFxuICAgIFx0XHRpbWFnZURpbWVuc2lvbnMsXG4gICAgXHRcdHpvb21EcmFnVHJhbnNsYXRlLFxuICAgIFx0XHRvbldoZWVsLFxuICAgIFx0XHRvblBvaW50ZXJEb3duLFxuICAgIFx0XHRvblBvaW50ZXJNb3ZlLFxuICAgIFx0XHRyZW1vdmVFdmVudEZyb21DYWNoZSxcbiAgICBcdFx0b25Qb2ludGVyVXAsXG4gICAgXHRcdG9uTW91bnQsXG4gICAgXHRcdGFkZFNyYyxcbiAgICBcdFx0cHJvcHMsXG4gICAgXHRcdHNtYWxsU2NyZWVuLFxuICAgIFx0XHRjYWxjdWxhdGVkRGltZW5zaW9ucyxcbiAgICBcdFx0JHpvb21lZCxcbiAgICBcdFx0JGNsb3NpbmcsXG4gICAgXHRcdGVycm9yX2hhbmRsZXJcbiAgICBcdF07XG4gICAgfVxuXG4gICAgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDMsIGNyZWF0ZV9mcmFnbWVudCQzLCBub3RfZXF1YWwsIHsgcHJvcHM6IDIyLCBzbWFsbFNjcmVlbjogMjMgfSwgbnVsbCwgWy0xLCAtMV0pO1xuICAgIFx0fVxuICAgIH1cblxuICAgIC8qIHNyYy9jb21wb25lbnRzL2lmcmFtZS5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMihjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgaWZyYW1lO1xuICAgIFx0bGV0IGxvYWRpbmc7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBtb3VudGVkO1xuICAgIFx0bGV0IGRpc3Bvc2U7XG5cbiAgICBcdGxvYWRpbmcgPSBuZXcgTG9hZGluZyh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdGFjdGl2ZUl0ZW06IC8qYWN0aXZlSXRlbSovIGN0eFsyXSxcbiAgICBcdFx0XHRcdGxvYWRlZDogLypsb2FkZWQqLyBjdHhbMF1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH0pO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0aWZyYW1lID0gZWxlbWVudChcImlmcmFtZVwiKTtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHRcdGF0dHIoaWZyYW1lLCBcImFsbG93XCIsIFwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cIik7XG4gICAgXHRcdFx0YXR0cihpZnJhbWUsIFwidGl0bGVcIiwgLyphY3RpdmVJdGVtKi8gY3R4WzJdLnRpdGxlKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWlmXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYsIGlmcmFtZSk7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLyphZGRTcmMqLyBjdHhbM10uY2FsbChudWxsLCBpZnJhbWUpKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGlmcmFtZSwgXCJsb2FkXCIsIC8qbG9hZF9oYW5kbGVyKi8gY3R4WzVdKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGNvbnN0IGxvYWRpbmdfY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qbG9hZGVkKi8gMSkgbG9hZGluZ19jaGFuZ2VzLmxvYWRlZCA9IC8qbG9hZGVkKi8gY3R4WzBdO1xuICAgIFx0XHRcdGxvYWRpbmcuJHNldChsb2FkaW5nX2NoYW5nZXMpO1xuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eSAmIC8qZGltZW5zaW9ucyovIDIpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQobG9hZGluZyk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFuY2UkMigkJHNlbGYsICQkcHJvcHMsICQkaW52YWxpZGF0ZSkge1xuICAgIFx0bGV0IHsgcHJvcHMgfSA9ICQkcHJvcHM7XG4gICAgXHRsZXQgbG9hZGVkLCBkaW1lbnNpb25zO1xuICAgIFx0Y29uc3QgeyBhY3RpdmVJdGVtIH0gPSBwcm9wcztcbiAgICBcdGNvbnN0IHNldERpbWVuc2lvbnMgPSAoKSA9PiAkJGludmFsaWRhdGUoMSwgZGltZW5zaW9ucyA9IHByb3BzLmNhbGN1bGF0ZURpbWVuc2lvbnMoYWN0aXZlSXRlbSkpO1xuICAgIFx0c2V0RGltZW5zaW9ucygpO1xuICAgIFx0cHJvcHMuc2V0UmVzaXplRnVuYyhzZXREaW1lbnNpb25zKTtcblxuICAgIFx0Y29uc3QgYWRkU3JjID0gbm9kZSA9PiB7XG4gICAgXHRcdGFkZEF0dHJpYnV0ZXMobm9kZSwgYWN0aXZlSXRlbS5hdHRyKTtcbiAgICBcdFx0bm9kZS5zcmMgPSBhY3RpdmVJdGVtLmlmcmFtZTtcbiAgICBcdH07XG5cbiAgICBcdGNvbnN0IGxvYWRfaGFuZGxlciA9ICgpID0+ICQkaW52YWxpZGF0ZSgwLCBsb2FkZWQgPSB0cnVlKTtcblxuICAgIFx0XG5cbiAgICBcdHJldHVybiBbbG9hZGVkLCBkaW1lbnNpb25zLCBhY3RpdmVJdGVtLCBhZGRTcmMsIHByb3BzLCBsb2FkX2hhbmRsZXJdO1xuICAgIH1cblxuICAgIGNsYXNzIElmcmFtZSBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgXHRcdHN1cGVyKCk7XG4gICAgXHRcdGluaXQodGhpcywgb3B0aW9ucywgaW5zdGFuY2UkMiwgY3JlYXRlX2ZyYWdtZW50JDIsIG5vdF9lcXVhbCwgeyBwcm9wczogNCB9KTtcbiAgICBcdH1cbiAgICB9XG5cbiAgICAvKiBzcmMvY29tcG9uZW50cy92aWRlby5zdmVsdGUgZ2VuZXJhdGVkIGJ5IFN2ZWx0ZSB2My41NS4xICovXG5cbiAgICBmdW5jdGlvbiBjcmVhdGVfZnJhZ21lbnQkMShjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgbG9hZGluZztcbiAgICBcdGxldCBjdXJyZW50O1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0bG9hZGluZyA9IG5ldyBMb2FkaW5nKHtcbiAgICBcdFx0XHRwcm9wczoge1xuICAgIFx0XHRcdFx0YWN0aXZlSXRlbTogLyphY3RpdmVJdGVtKi8gY3R4WzJdLFxuICAgIFx0XHRcdFx0bG9hZGVkOiAvKmxvYWRlZCovIGN0eFswXVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0ZGl2ID0gZWxlbWVudChcImRpdlwiKTtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KGxvYWRpbmcuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtdmlkXCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwid2lkdGhcIiwgLypkaW1lbnNpb25zKi8gY3R4WzFdWzBdICsgXCJweFwiKTtcbiAgICBcdFx0XHRzZXRfc3R5bGUoZGl2LCBcImhlaWdodFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMV0gKyBcInB4XCIpO1xuICAgIFx0XHRcdHNldF9zdHlsZShkaXYsIFwiYmFja2dyb3VuZC1pbWFnZVwiLCBnZXRUaHVtYkJhY2tncm91bmQoLyphY3RpdmVJdGVtKi8gY3R4WzJdKSk7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGxvYWRpbmcsIGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBhY3Rpb25fZGVzdHJveWVyKC8qb25Nb3VudCovIGN0eFszXS5jYWxsKG51bGwsIGRpdikpO1xuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgW2RpcnR5XSkge1xuICAgIFx0XHRcdGNvbnN0IGxvYWRpbmdfY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eSAmIC8qbG9hZGVkKi8gMSkgbG9hZGluZ19jaGFuZ2VzLmxvYWRlZCA9IC8qbG9hZGVkKi8gY3R4WzBdO1xuICAgIFx0XHRcdGxvYWRpbmcuJHNldChsb2FkaW5nX2NoYW5nZXMpO1xuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5ICYgLypkaW1lbnNpb25zKi8gMikge1xuICAgIFx0XHRcdFx0c2V0X3N0eWxlKGRpdiwgXCJ3aWR0aFwiLCAvKmRpbWVuc2lvbnMqLyBjdHhbMV1bMF0gKyBcInB4XCIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eSAmIC8qZGltZW5zaW9ucyovIDIpIHtcbiAgICBcdFx0XHRcdHNldF9zdHlsZShkaXYsIFwiaGVpZ2h0XCIsIC8qZGltZW5zaW9ucyovIGN0eFsxXVsxXSArIFwicHhcIik7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0byhsb2NhbCkge1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGxvYWRpbmcuJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQobG9hZGluZyk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdGRpc3Bvc2UoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YW5jZSQxKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgeyBwcm9wcyB9ID0gJCRwcm9wcztcbiAgICBcdGxldCBsb2FkZWQsIGRpbWVuc2lvbnM7XG4gICAgXHRjb25zdCB7IGFjdGl2ZUl0ZW0sIG9wdHMsIGNvbnRhaW5lciB9ID0gcHJvcHM7XG4gICAgXHRjb25zdCBzZXREaW1lbnNpb25zID0gKCkgPT4gJCRpbnZhbGlkYXRlKDEsIGRpbWVuc2lvbnMgPSBwcm9wcy5jYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pKTtcbiAgICBcdHNldERpbWVuc2lvbnMoKTtcbiAgICBcdHByb3BzLnNldFJlc2l6ZUZ1bmMoc2V0RGltZW5zaW9ucyk7XG5cbiAgICBcdC8qKiBjcmVhdGUgYXVkbyAvIHZpZGVvIGVsZW1lbnQgKi9cbiAgICBcdGNvbnN0IG9uTW91bnQgPSBub2RlID0+IHtcbiAgICBcdFx0bGV0IG1lZGlhRWxlbWVudDtcblxuICAgIFx0XHQvKiogdGFrZXMgc3VwcGxpZWQgb2JqZWN0IGFuZCBjcmVhdGVzIGVsZW1lbnRzIGluIHZpZGVvICovXG4gICAgXHRcdGNvbnN0IGFwcGVuZFRvVmlkZW8gPSAodGFnLCBhcnIpID0+IHtcbiAgICBcdFx0XHRpZiAoIUFycmF5LmlzQXJyYXkoYXJyKSkge1xuICAgIFx0XHRcdFx0YXJyID0gSlNPTi5wYXJzZShhcnIpO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGZvciAoY29uc3Qgb2JqIG9mIGFycikge1xuICAgIFx0XHRcdFx0Ly8gY3JlYXRlIG1lZGlhIGVsZW1lbnQgaWYgaXQgZG9lc24ndCBleGlzdFxuICAgIFx0XHRcdFx0aWYgKCFtZWRpYUVsZW1lbnQpIHtcbiAgICBcdFx0XHRcdFx0bWVkaWFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgob2JqLnR5cGU/LmluY2x1ZGVzKCdhdWRpbycpKSA/ICdhdWRpbycgOiAndmlkZW8nKTtcblxuICAgIFx0XHRcdFx0XHRhZGRBdHRyaWJ1dGVzKG1lZGlhRWxlbWVudCwge1xuICAgIFx0XHRcdFx0XHRcdGNvbnRyb2xzOiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdGF1dG9wbGF5OiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdHBsYXlzaW5saW5lOiB0cnVlLFxuICAgIFx0XHRcdFx0XHRcdHRhYmluZGV4OiAnMCdcbiAgICBcdFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdFx0YWRkQXR0cmlidXRlcyhtZWRpYUVsZW1lbnQsIGFjdGl2ZUl0ZW0uYXR0cik7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdC8vIGFkZCBzb3VyY2VzIC8gdHJhY2tzIHRvIG1lZGlhIGVsZW1lbnRcbiAgICBcdFx0XHRcdGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXG4gICAgXHRcdFx0XHRhZGRBdHRyaWJ1dGVzKGVsLCBvYmopO1xuXG4gICAgXHRcdFx0XHRpZiAodGFnID09ICdzb3VyY2UnKSB7XG4gICAgXHRcdFx0XHRcdGVsLm9uRXJyb3IgPSBlcnJvciA9PiBvcHRzLm9uRXJyb3I/Lihjb250YWluZXIsIGFjdGl2ZUl0ZW0sIGVycm9yKTtcbiAgICBcdFx0XHRcdH1cblxuICAgIFx0XHRcdFx0bWVkaWFFbGVtZW50LmFwcGVuZChlbCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9O1xuXG4gICAgXHRcdGFwcGVuZFRvVmlkZW8oJ3NvdXJjZScsIGFjdGl2ZUl0ZW0uc291cmNlcyk7XG4gICAgXHRcdGFwcGVuZFRvVmlkZW8oJ3RyYWNrJywgYWN0aXZlSXRlbS50cmFja3MgfHwgW10pO1xuICAgIFx0XHRtZWRpYUVsZW1lbnQub25jYW5wbGF5ID0gKCkgPT4gJCRpbnZhbGlkYXRlKDAsIGxvYWRlZCA9IHRydWUpO1xuICAgIFx0XHRub2RlLmFwcGVuZChtZWRpYUVsZW1lbnQpO1xuICAgIFx0fTtcblxuICAgIFx0XG5cbiAgICBcdHJldHVybiBbbG9hZGVkLCBkaW1lbnNpb25zLCBhY3RpdmVJdGVtLCBvbk1vdW50LCBwcm9wc107XG4gICAgfVxuXG4gICAgY2xhc3MgVmlkZW8gZXh0ZW5kcyBTdmVsdGVDb21wb25lbnQge1xuICAgIFx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIFx0XHRzdXBlcigpO1xuICAgIFx0XHRpbml0KHRoaXMsIG9wdGlvbnMsIGluc3RhbmNlJDEsIGNyZWF0ZV9mcmFnbWVudCQxLCBub3RfZXF1YWwsIHsgcHJvcHM6IDQgfSk7XG4gICAgXHR9XG4gICAgfVxuXG4gICAgLyogc3JjL2JpZ2dlci1waWN0dXJlLnN2ZWx0ZSBnZW5lcmF0ZWQgYnkgU3ZlbHRlIHYzLjU1LjEgKi9cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9jayhjdHgpIHtcbiAgICBcdGxldCBkaXYyO1xuICAgIFx0bGV0IGRpdjA7XG4gICAgXHRsZXQgZGl2MF9vdXRybztcbiAgICBcdGxldCBwcmV2aW91c19rZXkgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaTtcbiAgICBcdGxldCBkaXYxO1xuICAgIFx0bGV0IGJ1dHRvbjtcbiAgICBcdGxldCBkaXYxX291dHJvO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0bGV0IGtleV9ibG9jayA9IGNyZWF0ZV9rZXlfYmxvY2soY3R4KTtcbiAgICBcdGxldCBpZl9ibG9jayA9IC8qaXRlbXMqLyBjdHhbMF0ubGVuZ3RoID4gMSAmJiBjcmVhdGVfaWZfYmxvY2tfMShjdHgpO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdjIgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGRpdjAgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGtleV9ibG9jay5jKCk7XG4gICAgXHRcdFx0ZGl2MSA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YnV0dG9uID0gZWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbiwgXCJjbGFzc1wiLCBcImJwLXhcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24sIFwidGl0bGVcIiwgXCJDbG9zZVwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbiwgXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIik7XG4gICAgXHRcdFx0YXR0cihkaXYxLCBcImNsYXNzXCIsIFwiYnAtY29udHJvbHNcIik7XG4gICAgXHRcdFx0YXR0cihkaXYyLCBcImNsYXNzXCIsIFwiYnAtd3JhcFwiKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC16b29tZWRcIiwgLyokem9vbWVkKi8gY3R4WzEwXSk7XG4gICAgXHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtaW5saW5lXCIsIC8qaW5saW5lKi8gY3R4WzhdKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1zbWFsbFwiLCAvKnNtYWxsU2NyZWVuKi8gY3R4WzddKTtcbiAgICBcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1ub2Nsb3NlXCIsIC8qb3B0cyovIGN0eFs1XS5ub0Nsb3NlKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGRpdjIsIGFuY2hvcik7XG4gICAgXHRcdFx0YXBwZW5kKGRpdjIsIGRpdjApO1xuICAgIFx0XHRcdGtleV9ibG9jay5tKGRpdjIsIG51bGwpO1xuICAgIFx0XHRcdGFwcGVuZChkaXYyLCBkaXYxKTtcbiAgICBcdFx0XHRhcHBlbmQoZGl2MSwgYnV0dG9uKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLm0oZGl2MSwgbnVsbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24sIFwiY2xpY2tcIiwgLypjbG9zZSovIGN0eFsxXSksXG4gICAgXHRcdFx0XHRcdGFjdGlvbl9kZXN0cm95ZXIoLypjb250YWluZXJBY3Rpb25zKi8gY3R4WzE0XS5jYWxsKG51bGwsIGRpdjIpKVxuICAgIFx0XHRcdFx0XTtcblxuICAgIFx0XHRcdFx0bW91bnRlZCA9IHRydWU7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoZGlydHlbMF0gJiAvKmFjdGl2ZUl0ZW0qLyA2NCAmJiBub3RfZXF1YWwocHJldmlvdXNfa2V5LCBwcmV2aW91c19rZXkgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaSkpIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoa2V5X2Jsb2NrLCAxLCAxLCBub29wKTtcbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrID0gY3JlYXRlX2tleV9ibG9jayhjdHgpO1xuICAgIFx0XHRcdFx0a2V5X2Jsb2NrLmMoKTtcbiAgICBcdFx0XHRcdHRyYW5zaXRpb25faW4oa2V5X2Jsb2NrLCAxKTtcbiAgICBcdFx0XHRcdGtleV9ibG9jay5tKGRpdjIsIGRpdjEpO1xuICAgIFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRrZXlfYmxvY2sucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHR9XG5cbiAgICBcdFx0XHRpZiAoLyppdGVtcyovIGN0eFswXS5sZW5ndGggPiAxKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sucChjdHgsIGRpcnR5KTtcbiAgICBcdFx0XHRcdH0gZWxzZSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrID0gY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jay5tKGRpdjEsIG51bGwpO1xuICAgIFx0XHRcdFx0fVxuICAgIFx0XHRcdH0gZWxzZSBpZiAoaWZfYmxvY2spIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrLmQoMSk7XG4gICAgXHRcdFx0XHRpZl9ibG9jayA9IG51bGw7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKCFjdXJyZW50IHx8IGRpcnR5WzBdICYgLyokem9vbWVkKi8gMTAyNCkge1xuICAgIFx0XHRcdFx0dG9nZ2xlX2NsYXNzKGRpdjIsIFwiYnAtem9vbWVkXCIsIC8qJHpvb21lZCovIGN0eFsxMF0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qaW5saW5lKi8gMjU2KSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1pbmxpbmVcIiwgLyppbmxpbmUqLyBjdHhbOF0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qc21hbGxTY3JlZW4qLyAxMjgpIHtcbiAgICBcdFx0XHRcdHRvZ2dsZV9jbGFzcyhkaXYyLCBcImJwLXNtYWxsXCIsIC8qc21hbGxTY3JlZW4qLyBjdHhbN10pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdGlmICghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qb3B0cyovIDMyKSB7XG4gICAgXHRcdFx0XHR0b2dnbGVfY2xhc3MoZGl2MiwgXCJicC1ub2Nsb3NlXCIsIC8qb3B0cyovIGN0eFs1XS5ub0Nsb3NlKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdGlmIChkaXYwX291dHJvKSBkaXYwX291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGtleV9ibG9jayk7XG4gICAgXHRcdFx0aWYgKGRpdjFfb3V0cm8pIGRpdjFfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGxvY2FsKSB7XG4gICAgXHRcdFx0XHRkaXYwX291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdjAsIGZseSwgeyBkdXJhdGlvbjogNDgwIH0pO1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGtleV9ibG9jayk7XG5cbiAgICBcdFx0XHRpZiAobG9jYWwpIHtcbiAgICBcdFx0XHRcdGRpdjFfb3V0cm8gPSBjcmVhdGVfb3V0X3RyYW5zaXRpb24oZGl2MSwgZmx5LCB7fSk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYyKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdjBfb3V0cm8pIGRpdjBfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0a2V5X2Jsb2NrLmQoZGV0YWNoaW5nKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2spIGlmX2Jsb2NrLmQoKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdjFfb3V0cm8pIGRpdjFfb3V0cm8uZW5kKCk7XG4gICAgXHRcdFx0bW91bnRlZCA9IGZhbHNlO1xuICAgIFx0XHRcdHJ1bl9hbGwoZGlzcG9zZSk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxMToxOTkpIHs6ZWxzZX1cbiAgICBmdW5jdGlvbiBjcmVhdGVfZWxzZV9ibG9jayhjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgcmF3X3ZhbHVlID0gKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5odG1sID8/IC8qYWN0aXZlSXRlbSovIGN0eFs2XS5lbGVtZW50Lm91dGVySFRNTCkgKyBcIlwiO1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1odG1sXCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0ICYmIHJhd192YWx1ZSAhPT0gKHJhd192YWx1ZSA9ICgvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uaHRtbCA/PyAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uZWxlbWVudC5vdXRlckhUTUwpICsgXCJcIikpIGRpdi5pbm5lckhUTUwgPSByYXdfdmFsdWU7XHRcdH0sXG4gICAgXHRcdGk6IG5vb3AsXG4gICAgXHRcdG86IG5vb3AsXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGRpdik7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMxMToxNjUpIFxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9pZl9ibG9ja181KGN0eCkge1xuICAgIFx0bGV0IGlmcmFtZTtcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRpZnJhbWUgPSBuZXcgSWZyYW1lKHtcbiAgICBcdFx0XHRwcm9wczogeyBwcm9wczogLypnZXRDaGlsZFByb3BzKi8gY3R4WzEzXSgpIH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChpZnJhbWUuJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGlmcmFtZSwgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwOiBub29wLFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKGlmcmFtZS4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZyYW1lLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGRlc3Ryb3lfY29tcG9uZW50KGlmcmFtZSwgZGV0YWNoaW5nKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzExOjEwNCkgXG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzQoY3R4KSB7XG4gICAgXHRsZXQgdmlkZW87XG4gICAgXHRsZXQgY3VycmVudDtcblxuICAgIFx0dmlkZW8gPSBuZXcgVmlkZW8oe1xuICAgIFx0XHRcdHByb3BzOiB7IHByb3BzOiAvKmdldENoaWxkUHJvcHMqLyBjdHhbMTNdKCkgfVxuICAgIFx0XHR9KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRjcmVhdGVfY29tcG9uZW50KHZpZGVvLiQkLmZyYWdtZW50KTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdG1vdW50X2NvbXBvbmVudCh2aWRlbywgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwOiBub29wLFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX2luKHZpZGVvLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dCh2aWRlby4kJC5mcmFnbWVudCwgbG9jYWwpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSBmYWxzZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRkZXN0cm95X2NvbXBvbmVudCh2aWRlbywgZGV0YWNoaW5nKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcbiAgICB9XG5cbiAgICAvLyAoMzExOjQpIHsjaWYgYWN0aXZlSXRlbS5pbWd9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzMoY3R4KSB7XG4gICAgXHRsZXQgaW1hZ2VpdGVtO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG5cbiAgICBcdGltYWdlaXRlbSA9IG5ldyBJbWFnZSh7XG4gICAgXHRcdFx0cHJvcHM6IHtcbiAgICBcdFx0XHRcdHByb3BzOiAvKmdldENoaWxkUHJvcHMqLyBjdHhbMTNdKCksXG4gICAgXHRcdFx0XHRzbWFsbFNjcmVlbjogLypzbWFsbFNjcmVlbiovIGN0eFs3XVxuICAgIFx0XHRcdH1cbiAgICBcdFx0fSk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0Y3JlYXRlX2NvbXBvbmVudChpbWFnZWl0ZW0uJCQuZnJhZ21lbnQpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0bW91bnRfY29tcG9uZW50KGltYWdlaXRlbSwgdGFyZ2V0LCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRjb25zdCBpbWFnZWl0ZW1fY2hhbmdlcyA9IHt9O1xuICAgIFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qc21hbGxTY3JlZW4qLyAxMjgpIGltYWdlaXRlbV9jaGFuZ2VzLnNtYWxsU2NyZWVuID0gLypzbWFsbFNjcmVlbiovIGN0eFs3XTtcbiAgICBcdFx0XHRpbWFnZWl0ZW0uJHNldChpbWFnZWl0ZW1fY2hhbmdlcyk7XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaW1hZ2VpdGVtLiQkLmZyYWdtZW50LCBsb2NhbCk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpbWFnZWl0ZW0uJCQuZnJhZ21lbnQsIGxvY2FsKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gZmFsc2U7XG4gICAgXHRcdH0sXG4gICAgXHRcdGQoZGV0YWNoaW5nKSB7XG4gICAgXHRcdFx0ZGVzdHJveV9jb21wb25lbnQoaW1hZ2VpdGVtLCBkZXRhY2hpbmcpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTE6Mjk5KSB7I2lmIGFjdGl2ZUl0ZW0uY2FwdGlvbn1cbiAgICBmdW5jdGlvbiBjcmVhdGVfaWZfYmxvY2tfMihjdHgpIHtcbiAgICBcdGxldCBkaXY7XG4gICAgXHRsZXQgcmF3X3ZhbHVlID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24gKyBcIlwiO1xuICAgIFx0bGV0IGRpdl9vdXRybztcbiAgICBcdGxldCBjdXJyZW50O1xuXG4gICAgXHRyZXR1cm4ge1xuICAgIFx0XHRjKCkge1xuICAgIFx0XHRcdGRpdiA9IGVsZW1lbnQoXCJkaXZcIik7XG4gICAgXHRcdFx0YXR0cihkaXYsIFwiY2xhc3NcIiwgXCJicC1jYXBcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKCghY3VycmVudCB8fCBkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0KSAmJiByYXdfdmFsdWUgIT09IChyYXdfdmFsdWUgPSAvKmFjdGl2ZUl0ZW0qLyBjdHhbNl0uY2FwdGlvbiArIFwiXCIpKSBkaXYuaW5uZXJIVE1MID0gcmF3X3ZhbHVlO1x0XHR9LFxuICAgIFx0XHRpKGxvY2FsKSB7XG4gICAgXHRcdFx0aWYgKGN1cnJlbnQpIHJldHVybjtcbiAgICBcdFx0XHRpZiAoZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKDEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0ZGl2X291dHJvID0gY3JlYXRlX291dF90cmFuc2l0aW9uKGRpdiwgZmx5LCB7IGR1cmF0aW9uOiAyMDAgfSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcgJiYgZGl2X291dHJvKSBkaXZfb3V0cm8uZW5kKCk7XG4gICAgXHRcdH1cbiAgICBcdH07XG4gICAgfVxuXG4gICAgLy8gKDMwMDo0MykgeyNrZXkgYWN0aXZlSXRlbS5pfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9rZXlfYmxvY2soY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleDtcbiAgICBcdGxldCBpZl9ibG9jazA7XG4gICAgXHRsZXQgZGl2X2ludHJvO1xuICAgIFx0bGV0IGRpdl9vdXRybztcbiAgICBcdGxldCBpZl9ibG9jazFfYW5jaG9yO1xuICAgIFx0bGV0IGN1cnJlbnQ7XG4gICAgXHRsZXQgbW91bnRlZDtcbiAgICBcdGxldCBkaXNwb3NlO1xuICAgIFx0Y29uc3QgaWZfYmxvY2tfY3JlYXRvcnMgPSBbY3JlYXRlX2lmX2Jsb2NrXzMsIGNyZWF0ZV9pZl9ibG9ja180LCBjcmVhdGVfaWZfYmxvY2tfNSwgY3JlYXRlX2Vsc2VfYmxvY2tdO1xuICAgIFx0Y29uc3QgaWZfYmxvY2tzID0gW107XG5cbiAgICBcdGZ1bmN0aW9uIHNlbGVjdF9ibG9ja190eXBlKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0aWYgKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5pbWcpIHJldHVybiAwO1xuICAgIFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLnNvdXJjZXMpIHJldHVybiAxO1xuICAgIFx0XHRpZiAoLyphY3RpdmVJdGVtKi8gY3R4WzZdLmlmcmFtZSkgcmV0dXJuIDI7XG4gICAgXHRcdHJldHVybiAzO1xuICAgIFx0fVxuXG4gICAgXHRjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXggPSBzZWxlY3RfYmxvY2tfdHlwZShjdHgpO1xuICAgIFx0aWZfYmxvY2swID0gaWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF0gPSBpZl9ibG9ja19jcmVhdG9yc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdKGN0eCk7XG4gICAgXHRsZXQgaWZfYmxvY2sxID0gLyphY3RpdmVJdGVtKi8gY3R4WzZdLmNhcHRpb24gJiYgY3JlYXRlX2lmX2Jsb2NrXzIoY3R4KTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGlmX2Jsb2NrMC5jKCk7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrMSkgaWZfYmxvY2sxLmMoKTtcbiAgICBcdFx0XHRpZl9ibG9jazFfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0XHRhdHRyKGRpdiwgXCJjbGFzc1wiLCBcImJwLWlubmVyXCIpO1xuICAgIFx0XHR9LFxuICAgIFx0XHRtKHRhcmdldCwgYW5jaG9yKSB7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgZGl2LCBhbmNob3IpO1xuICAgIFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLm0oZGl2LCBudWxsKTtcbiAgICBcdFx0XHRpZiAoaWZfYmxvY2sxKSBpZl9ibG9jazEubSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2sxX2FuY2hvciwgYW5jaG9yKTtcbiAgICBcdFx0XHRjdXJyZW50ID0gdHJ1ZTtcblxuICAgIFx0XHRcdGlmICghbW91bnRlZCkge1xuICAgIFx0XHRcdFx0ZGlzcG9zZSA9IFtcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdiwgXCJwb2ludGVyZG93blwiLCAvKnBvaW50ZXJkb3duX2hhbmRsZXIqLyBjdHhbMjBdKSxcbiAgICBcdFx0XHRcdFx0bGlzdGVuKGRpdiwgXCJwb2ludGVydXBcIiwgLypwb2ludGVydXBfaGFuZGxlciovIGN0eFsyMV0pXG4gICAgXHRcdFx0XHRdO1xuXG4gICAgXHRcdFx0XHRtb3VudGVkID0gdHJ1ZTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdHAoY3R4LCBkaXJ0eSkge1xuICAgIFx0XHRcdGxldCBwcmV2aW91c19ibG9ja19pbmRleCA9IGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleDtcbiAgICBcdFx0XHRjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXggPSBzZWxlY3RfYmxvY2tfdHlwZShjdHgpO1xuXG4gICAgXHRcdFx0aWYgKGN1cnJlbnRfYmxvY2tfdHlwZV9pbmRleCA9PT0gcHJldmlvdXNfYmxvY2tfaW5kZXgpIHtcbiAgICBcdFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLnAoY3R4LCBkaXJ0eSk7XG4gICAgXHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9ja3NbcHJldmlvdXNfYmxvY2tfaW5kZXhdLCAxLCAxLCAoKSA9PiB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2Nrc1twcmV2aW91c19ibG9ja19pbmRleF0gPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdFx0aWZfYmxvY2swID0gaWZfYmxvY2tzW2N1cnJlbnRfYmxvY2tfdHlwZV9pbmRleF07XG5cbiAgICBcdFx0XHRcdGlmICghaWZfYmxvY2swKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMCA9IGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdID0gaWZfYmxvY2tfY3JlYXRvcnNbY3VycmVudF9ibG9ja190eXBlX2luZGV4XShjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazAuYygpO1xuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2swLnAoY3R4LCBkaXJ0eSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swLCAxKTtcbiAgICBcdFx0XHRcdGlmX2Jsb2NrMC5tKGRpdiwgbnVsbCk7XG4gICAgXHRcdFx0fVxuXG4gICAgXHRcdFx0aWYgKC8qYWN0aXZlSXRlbSovIGN0eFs2XS5jYXB0aW9uKSB7XG4gICAgXHRcdFx0XHRpZiAoaWZfYmxvY2sxKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5wKGN0eCwgZGlydHkpO1xuXG4gICAgXHRcdFx0XHRcdGlmIChkaXJ0eVswXSAmIC8qYWN0aXZlSXRlbSovIDY0KSB7XG4gICAgXHRcdFx0XHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEsIDEpO1xuICAgIFx0XHRcdFx0XHR9XG4gICAgXHRcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEgPSBjcmVhdGVfaWZfYmxvY2tfMihjdHgpO1xuICAgIFx0XHRcdFx0XHRpZl9ibG9jazEuYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrMSwgMSk7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrMS5tKGlmX2Jsb2NrMV9hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2sxX2FuY2hvcik7XG4gICAgXHRcdFx0XHR9XG4gICAgXHRcdFx0fSBlbHNlIGlmIChpZl9ibG9jazEpIHtcbiAgICBcdFx0XHRcdGdyb3VwX291dHJvcygpO1xuXG4gICAgXHRcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jazEsIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sxID0gbnVsbDtcbiAgICBcdFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0XHRjaGVja19vdXRyb3MoKTtcbiAgICBcdFx0XHR9XG4gICAgXHRcdH0sXG4gICAgXHRcdGkobG9jYWwpIHtcbiAgICBcdFx0XHRpZiAoY3VycmVudCkgcmV0dXJuO1xuICAgIFx0XHRcdHRyYW5zaXRpb25faW4oaWZfYmxvY2swKTtcblxuICAgIFx0XHRcdGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4ge1xuICAgIFx0XHRcdFx0aWYgKGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgxKTtcbiAgICBcdFx0XHRcdGRpdl9pbnRybyA9IGNyZWF0ZV9pbl90cmFuc2l0aW9uKGRpdiwgLyptZWRpYVRyYW5zaXRpb24qLyBjdHhbMTJdLCB0cnVlKTtcbiAgICBcdFx0XHRcdGRpdl9pbnRyby5zdGFydCgpO1xuICAgIFx0XHRcdH0pO1xuXG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jazEpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRvKGxvY2FsKSB7XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2swKTtcbiAgICBcdFx0XHRpZiAoZGl2X2ludHJvKSBkaXZfaW50cm8uaW52YWxpZGF0ZSgpO1xuICAgIFx0XHRcdGRpdl9vdXRybyA9IGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihkaXYsIC8qbWVkaWFUcmFuc2l0aW9uKi8gY3R4WzEyXSwgZmFsc2UpO1xuICAgIFx0XHRcdHRyYW5zaXRpb25fb3V0KGlmX2Jsb2NrMSk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChkaXYpO1xuICAgIFx0XHRcdGlmX2Jsb2Nrc1tjdXJyZW50X2Jsb2NrX3R5cGVfaW5kZXhdLmQoKTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nICYmIGRpdl9vdXRybykgZGl2X291dHJvLmVuZCgpO1xuICAgIFx0XHRcdGlmIChpZl9ibG9jazEpIGlmX2Jsb2NrMS5kKGRldGFjaGluZyk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGlmX2Jsb2NrMV9hbmNob3IpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIC8vICgzMTE6NTU0KSB7I2lmIGl0ZW1zLmxlbmd0aCA+IDF9XG4gICAgZnVuY3Rpb24gY3JlYXRlX2lmX2Jsb2NrXzEoY3R4KSB7XG4gICAgXHRsZXQgZGl2O1xuICAgIFx0bGV0IHJhd192YWx1ZSA9IGAkey8qcG9zaXRpb24qLyBjdHhbNF0gKyAxfSAvICR7LyppdGVtcyovIGN0eFswXS5sZW5ndGh9YCArIFwiXCI7XG4gICAgXHRsZXQgYnV0dG9uMDtcbiAgICBcdGxldCBidXR0b24xO1xuICAgIFx0bGV0IG1vdW50ZWQ7XG4gICAgXHRsZXQgZGlzcG9zZTtcblxuICAgIFx0cmV0dXJuIHtcbiAgICBcdFx0YygpIHtcbiAgICBcdFx0XHRkaXYgPSBlbGVtZW50KFwiZGl2XCIpO1xuICAgIFx0XHRcdGJ1dHRvbjAgPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFx0XHRcdGJ1dHRvbjEgPSBlbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIFx0XHRcdGF0dHIoZGl2LCBcImNsYXNzXCIsIFwiYnAtY291bnRcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24wLCBcImNsYXNzXCIsIFwiYnAtcHJldlwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjAsIFwidGl0bGVcIiwgXCJQcmV2aW91c1wiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjAsIFwiYXJpYS1sYWJlbFwiLCBcIlByZXZpb3VzXCIpO1xuICAgIFx0XHRcdGF0dHIoYnV0dG9uMSwgXCJjbGFzc1wiLCBcImJwLW5leHRcIik7XG4gICAgXHRcdFx0YXR0cihidXR0b24xLCBcInRpdGxlXCIsIFwiTmV4dFwiKTtcbiAgICBcdFx0XHRhdHRyKGJ1dHRvbjEsIFwiYXJpYS1sYWJlbFwiLCBcIk5leHRcIik7XG4gICAgXHRcdH0sXG4gICAgXHRcdG0odGFyZ2V0LCBhbmNob3IpIHtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBkaXYsIGFuY2hvcik7XG4gICAgXHRcdFx0ZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcbiAgICBcdFx0XHRpbnNlcnQodGFyZ2V0LCBidXR0b24wLCBhbmNob3IpO1xuICAgIFx0XHRcdGluc2VydCh0YXJnZXQsIGJ1dHRvbjEsIGFuY2hvcik7XG5cbiAgICBcdFx0XHRpZiAoIW1vdW50ZWQpIHtcbiAgICBcdFx0XHRcdGRpc3Bvc2UgPSBbXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24wLCBcImNsaWNrXCIsIC8qcHJldiovIGN0eFsyXSksXG4gICAgXHRcdFx0XHRcdGxpc3RlbihidXR0b24xLCBcImNsaWNrXCIsIC8qbmV4dCovIGN0eFszXSlcbiAgICBcdFx0XHRcdF07XG5cbiAgICBcdFx0XHRcdG1vdW50ZWQgPSB0cnVlO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0cChjdHgsIGRpcnR5KSB7XG4gICAgXHRcdFx0aWYgKGRpcnR5WzBdICYgLypwb3NpdGlvbiwgaXRlbXMqLyAxNyAmJiByYXdfdmFsdWUgIT09IChyYXdfdmFsdWUgPSBgJHsvKnBvc2l0aW9uKi8gY3R4WzRdICsgMX0gLyAkey8qaXRlbXMqLyBjdHhbMF0ubGVuZ3RofWAgKyBcIlwiKSkgZGl2LmlubmVySFRNTCA9IHJhd192YWx1ZTtcdFx0fSxcbiAgICBcdFx0ZChkZXRhY2hpbmcpIHtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goZGl2KTtcbiAgICBcdFx0XHRpZiAoZGV0YWNoaW5nKSBkZXRhY2goYnV0dG9uMCk7XG4gICAgXHRcdFx0aWYgKGRldGFjaGluZykgZGV0YWNoKGJ1dHRvbjEpO1xuICAgIFx0XHRcdG1vdW50ZWQgPSBmYWxzZTtcbiAgICBcdFx0XHRydW5fYWxsKGRpc3Bvc2UpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZV9mcmFnbWVudChjdHgpIHtcbiAgICBcdGxldCBpZl9ibG9ja19hbmNob3I7XG4gICAgXHRsZXQgY3VycmVudDtcbiAgICBcdGxldCBpZl9ibG9jayA9IC8qaXRlbXMqLyBjdHhbMF0gJiYgY3JlYXRlX2lmX2Jsb2NrKGN0eCk7XG5cbiAgICBcdHJldHVybiB7XG4gICAgXHRcdGMoKSB7XG4gICAgXHRcdFx0aWYgKGlmX2Jsb2NrKSBpZl9ibG9jay5jKCk7XG4gICAgXHRcdFx0aWZfYmxvY2tfYW5jaG9yID0gZW1wdHkoKTtcbiAgICBcdFx0fSxcbiAgICBcdFx0bSh0YXJnZXQsIGFuY2hvcikge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2subSh0YXJnZXQsIGFuY2hvcik7XG4gICAgXHRcdFx0aW5zZXJ0KHRhcmdldCwgaWZfYmxvY2tfYW5jaG9yLCBhbmNob3IpO1xuICAgIFx0XHRcdGN1cnJlbnQgPSB0cnVlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRwKGN0eCwgZGlydHkpIHtcbiAgICBcdFx0XHRpZiAoLyppdGVtcyovIGN0eFswXSkge1xuICAgIFx0XHRcdFx0aWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRcdGlmX2Jsb2NrLnAoY3R4LCBkaXJ0eSk7XG5cbiAgICBcdFx0XHRcdFx0aWYgKGRpcnR5WzBdICYgLyppdGVtcyovIDEpIHtcbiAgICBcdFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrLCAxKTtcbiAgICBcdFx0XHRcdFx0fVxuICAgIFx0XHRcdFx0fSBlbHNlIHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sgPSBjcmVhdGVfaWZfYmxvY2soY3R4KTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2suYygpO1xuICAgIFx0XHRcdFx0XHR0cmFuc2l0aW9uX2luKGlmX2Jsb2NrLCAxKTtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2subShpZl9ibG9ja19hbmNob3IucGFyZW50Tm9kZSwgaWZfYmxvY2tfYW5jaG9yKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9IGVsc2UgaWYgKGlmX2Jsb2NrKSB7XG4gICAgXHRcdFx0XHRncm91cF9vdXRyb3MoKTtcblxuICAgIFx0XHRcdFx0dHJhbnNpdGlvbl9vdXQoaWZfYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICBcdFx0XHRcdFx0aWZfYmxvY2sgPSBudWxsO1xuICAgIFx0XHRcdFx0fSk7XG5cbiAgICBcdFx0XHRcdGNoZWNrX291dHJvcygpO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fSxcbiAgICBcdFx0aShsb2NhbCkge1xuICAgIFx0XHRcdGlmIChjdXJyZW50KSByZXR1cm47XG4gICAgXHRcdFx0dHJhbnNpdGlvbl9pbihpZl9ibG9jayk7XG4gICAgXHRcdFx0Y3VycmVudCA9IHRydWU7XG4gICAgXHRcdH0sXG4gICAgXHRcdG8obG9jYWwpIHtcbiAgICBcdFx0XHR0cmFuc2l0aW9uX291dChpZl9ibG9jayk7XG4gICAgXHRcdFx0Y3VycmVudCA9IGZhbHNlO1xuICAgIFx0XHR9LFxuICAgIFx0XHRkKGRldGFjaGluZykge1xuICAgIFx0XHRcdGlmIChpZl9ibG9jaykgaWZfYmxvY2suZChkZXRhY2hpbmcpO1xuICAgIFx0XHRcdGlmIChkZXRhY2hpbmcpIGRldGFjaChpZl9ibG9ja19hbmNob3IpO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbmNlKCQkc2VsZiwgJCRwcm9wcywgJCRpbnZhbGlkYXRlKSB7XG4gICAgXHRsZXQgJHpvb21lZDtcbiAgICBcdGxldCB7IGl0ZW1zID0gdW5kZWZpbmVkIH0gPSAkJHByb3BzO1xuICAgIFx0bGV0IHsgdGFyZ2V0ID0gdW5kZWZpbmVkIH0gPSAkJHByb3BzO1xuICAgIFx0Y29uc3QgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIFx0LyoqIGluZGV4IG9mIGN1cnJlbnQgYWN0aXZlIGl0ZW0gKi9cbiAgICBcdGxldCBwb3NpdGlvbjtcblxuICAgIFx0LyoqIG9wdGlvbnMgcGFzc2VkIHZpYSBvcGVuIG1ldGhvZCAqL1xuICAgIFx0bGV0IG9wdHM7XG5cbiAgICBcdC8qKiBib29sIHRyYWNrcyBvcGVuIHN0YXRlICovXG4gICAgXHRsZXQgaXNPcGVuO1xuXG4gICAgXHQvKiogZG9tIGVsZW1lbnQgdG8gcmVzdG9yZSBmb2N1cyB0byBvbiBjbG9zZSAqL1xuICAgIFx0bGV0IGZvY3VzVHJpZ2dlcjtcblxuICAgIFx0LyoqIGJvb2wgdHJ1ZSBpZiBjb250YWluZXIgd2lkdGggPCA3NjkgKi9cbiAgICBcdGxldCBzbWFsbFNjcmVlbjtcblxuICAgIFx0LyoqIGJvb2wgdmFsdWUgb2YgaW5saW5lIG9wdGlvbiBwYXNzZWQgaW4gb3BlbiBtZXRob2QgKi9cbiAgICBcdGxldCBpbmxpbmU7XG5cbiAgICBcdC8qKiB3aGVuIHBvc2l0aW9uIGlzIHNldCAqL1xuICAgIFx0bGV0IG1vdmVtZW50O1xuXG4gICAgXHQvKiogc3RvcmVzIHRhcmdldCBvbiBwb2ludGVyZG93biAocmVmIGZvciBvdmVybGF5IGNsb3NlKSAqL1xuICAgIFx0bGV0IGNsaWNrZWRFbDtcblxuICAgIFx0LyoqIGFjdGl2ZSBpdGVtIG9iamVjdCAqL1xuICAgIFx0bGV0IGFjdGl2ZUl0ZW07XG5cbiAgICBcdC8qKiByZXR1cm5zIHRydWUgaWYgYGFjdGl2ZUl0ZW1gIGlzIGh0bWwgKi9cbiAgICBcdGNvbnN0IGFjdGl2ZUl0ZW1Jc0h0bWwgPSAoKSA9PiAhYWN0aXZlSXRlbS5pbWcgJiYgIWFjdGl2ZUl0ZW0uc291cmNlcyAmJiAhYWN0aXZlSXRlbS5pZnJhbWU7XG5cbiAgICBcdC8qKiBmdW5jdGlvbiBzZXQgYnkgY2hpbGQgY29tcG9uZW50IHRvIHJ1biB3aGVuIGNvbnRhaW5lciByZXNpemVkICovXG4gICAgXHRsZXQgcmVzaXplRnVuYztcblxuICAgIFx0LyoqIHVzZWQgYnkgY2hpbGQgY29tcG9uZW50cyB0byBzZXQgcmVzaXplIGZ1bmN0aW9uICovXG4gICAgXHRjb25zdCBzZXRSZXNpemVGdW5jID0gZm4gPT4gcmVzaXplRnVuYyA9IGZuO1xuXG4gICAgXHQvKiogY29udGFpbmVyIGVsZW1lbnQgKGVsKSAvIHdpZHRoICh3KSAvIGhlaWdodCAoaCkgKi9cbiAgICBcdGNvbnN0IGNvbnRhaW5lciA9IHt9O1xuXG4gICAgXHQvLyAvKiogdHJ1ZSBpZiBpbWFnZSBpcyBjdXJyZW50bHkgem9vbWVkIHBhc3Qgc3RhcnRpbmcgc2l6ZSAqL1xuICAgIFx0Y29uc3Qgem9vbWVkID0gd3JpdGFibGUoMCk7XG5cbiAgICBcdGNvbXBvbmVudF9zdWJzY3JpYmUoJCRzZWxmLCB6b29tZWQsIHZhbHVlID0+ICQkaW52YWxpZGF0ZSgxMCwgJHpvb21lZCA9IHZhbHVlKSk7XG5cbiAgICBcdGNvbnN0IG9wZW4gPSBvcHRpb25zID0+IHtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDUsIG9wdHMgPSBvcHRpb25zKTtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDgsIGlubGluZSA9IG9wdHMuaW5saW5lKTtcblxuICAgIFx0XHQvLyBhZGQgY2xhc3MgdG8gaGlkZSBzY3JvbGwgaWYgbm90IGlubGluZSBnYWxsZXJ5XG4gICAgXHRcdGlmICghaW5saW5lICYmIGh0bWwuc2Nyb2xsSGVpZ2h0ID4gaHRtbC5jbGllbnRIZWlnaHQpIHtcbiAgICBcdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ2JwLWxvY2snKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHVwZGF0ZSB0cmlnZ2VyIGVsZW1lbnQgdG8gcmVzdG9yZSBmb2N1c1xuICAgIFx0XHRmb2N1c1RyaWdnZXIgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgXHRcdCQkaW52YWxpZGF0ZSgxOSwgY29udGFpbmVyLncgPSB0YXJnZXQub2Zmc2V0V2lkdGgsIGNvbnRhaW5lcik7XG5cbiAgICBcdFx0JCRpbnZhbGlkYXRlKFxuICAgIFx0XHRcdDE5LFxuICAgIFx0XHRcdGNvbnRhaW5lci5oID0gdGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5XG4gICAgXHRcdFx0PyBnbG9iYWxUaGlzLmlubmVySGVpZ2h0XG4gICAgXHRcdFx0OiB0YXJnZXQuY2xpZW50SGVpZ2h0LFxuICAgIFx0XHRcdGNvbnRhaW5lclxuICAgIFx0XHQpO1xuXG4gICAgXHRcdCQkaW52YWxpZGF0ZSg3LCBzbWFsbFNjcmVlbiA9IGNvbnRhaW5lci53IDwgNzY5KTtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gb3B0cy5wb3NpdGlvbiB8fCAwKTtcblxuICAgIFx0XHQvLyBzZXQgaXRlbXNcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDAsIGl0ZW1zID0gW10pO1xuXG4gICAgXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgKG9wdHMuaXRlbXMubGVuZ3RoIHx8IDEpOyBpKyspIHtcbiAgICBcdFx0XHRsZXQgaXRlbSA9IG9wdHMuaXRlbXNbaV0gfHwgb3B0cy5pdGVtcztcblxuICAgIFx0XHRcdGlmICgnZGF0YXNldCcgaW4gaXRlbSkge1xuICAgIFx0XHRcdFx0aXRlbXMucHVzaCh7IGVsZW1lbnQ6IGl0ZW0sIGksIC4uLml0ZW0uZGF0YXNldCB9KTtcbiAgICBcdFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdFx0aXRlbS5pID0gaTtcbiAgICBcdFx0XHRcdGl0ZW1zLnB1c2goaXRlbSk7XG5cbiAgICBcdFx0XHRcdC8vIHNldCBpdGVtIHRvIGVsZW1lbnQgZm9yIHBvc2l0aW9uIGNoZWNrIGJlbG93XG4gICAgXHRcdFx0XHRpdGVtID0gaXRlbS5lbGVtZW50O1xuICAgIFx0XHRcdH1cblxuICAgIFx0XHRcdC8vIG92ZXJyaWRlIGdhbGxlcnkgcG9zaXRpb24gaWYgbmVlZGVkXG4gICAgXHRcdFx0aWYgKG9wdHMuZWwgJiYgb3B0cy5lbCA9PT0gaXRlbSkge1xuICAgIFx0XHRcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gaSk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHRjb25zdCBjbG9zZSA9ICgpID0+IHtcbiAgICBcdFx0b3B0cy5vbkNsb3NlPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKTtcbiAgICBcdFx0Y2xvc2luZy5zZXQodHJ1ZSk7XG4gICAgXHRcdCQkaW52YWxpZGF0ZSgwLCBpdGVtcyA9IG51bGwpO1xuXG4gICAgXHRcdC8vIHJlc3RvcmUgZm9jdXMgdG8gdHJpZ2dlciBlbGVtZW50XG4gICAgXHRcdGZvY3VzVHJpZ2dlcj8uZm9jdXMoeyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0pO1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgcHJldiA9ICgpID0+IHNldFBvc2l0aW9uKHBvc2l0aW9uIC0gMSk7XG4gICAgXHRjb25zdCBuZXh0ID0gKCkgPT4gc2V0UG9zaXRpb24ocG9zaXRpb24gKyAxKTtcblxuICAgIFx0Y29uc3Qgc2V0UG9zaXRpb24gPSBpbmRleCA9PiB7XG4gICAgXHRcdG1vdmVtZW50ID0gaW5kZXggLSBwb3NpdGlvbjtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDQsIHBvc2l0aW9uID0gZ2V0TmV4dFBvc2l0aW9uKGluZGV4KSk7XG4gICAgXHR9O1xuXG4gICAgXHQvKipcbiAgICAgKiByZXR1cm5zIG5leHQgZ2FsbGVyeSBwb3NpdGlvbiAobG9vcGVkIGlmIG5lY2Nlc3NhcnkpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG4gICAgICovXG4gICAgXHRjb25zdCBnZXROZXh0UG9zaXRpb24gPSBpbmRleCA9PiAoaW5kZXggKyBpdGVtcy5sZW5ndGgpICUgaXRlbXMubGVuZ3RoO1xuXG4gICAgXHRjb25zdCBvbktleWRvd24gPSBlID0+IHtcbiAgICBcdFx0Y29uc3QgeyBrZXksIHNoaWZ0S2V5IH0gPSBlO1xuXG4gICAgXHRcdGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgXHRcdFx0IW9wdHMubm9DbG9zZSAmJiBjbG9zZSgpO1xuICAgIFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgXHRcdFx0bmV4dCgpO1xuICAgIFx0XHR9IGVsc2UgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcpIHtcbiAgICBcdFx0XHRwcmV2KCk7XG4gICAgXHRcdH0gZWxzZSBpZiAoa2V5ID09PSAnVGFiJykge1xuICAgIFx0XHRcdC8vIHRyYXAgZm9jdXMgb24gdGFiIHByZXNzXG4gICAgXHRcdFx0Y29uc3QgeyBhY3RpdmVFbGVtZW50IH0gPSBkb2N1bWVudDtcblxuICAgIFx0XHRcdC8vIGFsbG93IGJyb3dzZXIgdG8gaGFuZGxlIHRhYiBpbnRvIHZpZGVvIGNvbnRyb2xzIG9ubHlcbiAgICBcdFx0XHRpZiAoc2hpZnRLZXkgfHwgIWFjdGl2ZUVsZW1lbnQuY29udHJvbHMpIHtcbiAgICBcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcdFx0XHRcdGNvbnN0IHsgZm9jdXNXcmFwID0gY29udGFpbmVyLmVsIH0gPSBvcHRzO1xuICAgIFx0XHRcdFx0Y29uc3QgdGFiYmFibGUgPSBbLi4uZm9jdXNXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoJyonKV0uZmlsdGVyKG5vZGUgPT4gbm9kZS50YWJJbmRleCA+PSAwKTtcbiAgICBcdFx0XHRcdGxldCBpbmRleCA9IHRhYmJhYmxlLmluZGV4T2YoYWN0aXZlRWxlbWVudCk7XG4gICAgXHRcdFx0XHRpbmRleCArPSB0YWJiYWJsZS5sZW5ndGggKyAoc2hpZnRLZXkgPyAtMSA6IDEpO1xuICAgIFx0XHRcdFx0dGFiYmFibGVbaW5kZXggJSB0YWJiYWJsZS5sZW5ndGhdLmZvY3VzKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKipcbiAgICAgKiBjYWxjdWxhdGUgZGltZW5zaW9ucyBvZiBoZWlnaHQgLyB3aWR0aCByZXNpemVkIHRvIGZpdCB3aXRoaW4gY29udGFpbmVyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gb2JqZWN0IHdpdGggaGVpZ2h0IC8gd2lkdGggcHJvcGVydGllc1xuICAgICAqIEByZXR1cm5zIHtBcnJheX0gW3dpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyXVxuICAgICAqL1xuICAgIFx0Y29uc3QgY2FsY3VsYXRlRGltZW5zaW9ucyA9ICh7IHdpZHRoID0gMTkyMCwgaGVpZ2h0ID0gMTA4MCB9KSA9PiB7XG4gICAgXHRcdGNvbnN0IHsgc2NhbGUgPSAwLjk5IH0gPSBvcHRzO1xuICAgIFx0XHRjb25zdCByYXRpbyA9IE1hdGgubWluKDEsIGNvbnRhaW5lci53IC8gd2lkdGggKiBzY2FsZSwgY29udGFpbmVyLmggLyBoZWlnaHQgKiBzY2FsZSk7XG5cbiAgICBcdFx0Ly8gcm91bmQgbnVtYmVyIHNvIHdlIGRvbid0IHVzZSBhIGZsb2F0IGFzIHRoZSBzaXplcyBhdHRyaWJ1dGVcbiAgICBcdFx0cmV0dXJuIFtNYXRoLnJvdW5kKHdpZHRoICogcmF0aW8pLCBNYXRoLnJvdW5kKGhlaWdodCAqIHJhdGlvKV07XG4gICAgXHR9O1xuXG4gICAgXHQvKiogcHJlbG9hZHMgaW1hZ2VzIGZvciBwcmV2aW91cyBhbmQgbmV4dCBpdGVtcyBpbiBnYWxsZXJ5ICovXG4gICAgXHRjb25zdCBwcmVsb2FkTmV4dCA9ICgpID0+IHtcbiAgICBcdFx0aWYgKGl0ZW1zKSB7XG4gICAgXHRcdFx0Y29uc3QgbmV4dEl0ZW0gPSBpdGVtc1tnZXROZXh0UG9zaXRpb24ocG9zaXRpb24gKyAxKV07XG4gICAgXHRcdFx0Y29uc3QgcHJldkl0ZW0gPSBpdGVtc1tnZXROZXh0UG9zaXRpb24ocG9zaXRpb24gLSAxKV07XG4gICAgXHRcdFx0IW5leHRJdGVtLnByZWxvYWQgJiYgbG9hZEltYWdlKG5leHRJdGVtKTtcbiAgICBcdFx0XHQhcHJldkl0ZW0ucHJlbG9hZCAmJiBsb2FkSW1hZ2UocHJldkl0ZW0pO1xuICAgIFx0XHR9XG4gICAgXHR9O1xuXG4gICAgXHQvKiogbG9hZHMgLyBkZWNvZGVzIGltYWdlIGZvciBpdGVtICovXG4gICAgXHRjb25zdCBsb2FkSW1hZ2UgPSBpdGVtID0+IHtcbiAgICBcdFx0aWYgKGl0ZW0uaW1nKSB7XG4gICAgXHRcdFx0Y29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBcdFx0XHRpbWFnZS5zaXplcyA9IG9wdHMuc2l6ZXMgfHwgYCR7Y2FsY3VsYXRlRGltZW5zaW9ucyhpdGVtKVswXX1weGA7XG4gICAgXHRcdFx0aW1hZ2Uuc3Jjc2V0ID0gaXRlbS5pbWc7XG4gICAgXHRcdFx0aXRlbS5wcmVsb2FkID0gdHJ1ZTtcblxuICAgIFx0XHRcdHJldHVybiBpbWFnZS5kZWNvZGUoKS5jYXRjaChlcnJvciA9PiB7XG4gICAgXHRcdFx0XHRcbiAgICBcdFx0XHR9KTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0LyoqIHN2ZWx0ZSB0cmFuc2l0aW9uIHRvIGNvbnRyb2wgb3BlbmluZyAvIGNoYW5naW5nICovXG4gICAgXHRjb25zdCBtZWRpYVRyYW5zaXRpb24gPSAobm9kZSwgaXNFbnRlcmluZykgPT4ge1xuICAgIFx0XHRpZiAoIWlzT3BlbiB8fCAhaXRlbXMpIHtcbiAgICBcdFx0XHQvLyBlbnRyYW5jZSAvIGV4aXQgdHJhbnNpdGlvblxuICAgIFx0XHRcdCQkaW52YWxpZGF0ZSgxOCwgaXNPcGVuID0gaXNFbnRlcmluZyk7XG5cbiAgICBcdFx0XHRyZXR1cm4gb3B0cy5pbnRyb1xuICAgIFx0XHRcdD8gZmx5KG5vZGUsIHsgeTogaXNFbnRlcmluZyA/IDEwIDogLTEwIH0pXG4gICAgXHRcdFx0OiBzY2FsZUluKG5vZGUpO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gZm9yd2FyZCAvIGJhY2t3YXJkIHRyYW5zaXRpb25cbiAgICBcdFx0cmV0dXJuIGZseShub2RlLCB7XG4gICAgXHRcdFx0eDogKG1vdmVtZW50ID4gMCA/IDIwIDogLTIwKSAqIChpc0VudGVyaW5nID8gMSA6IC0xKSxcbiAgICBcdFx0XHRkdXJhdGlvbjogMjUwXG4gICAgXHRcdH0pO1xuICAgIFx0fTtcblxuICAgIFx0LyoqIGN1c3RvbSBzdmVsdGUgdHJhbnNpdGlvbiBmb3IgZW50cmFuY2Ugem9vbSAqL1xuICAgIFx0Y29uc3Qgc2NhbGVJbiA9IG5vZGUgPT4ge1xuICAgIFx0XHRsZXQgZGltZW5zaW9ucztcblxuICAgIFx0XHRpZiAoYWN0aXZlSXRlbUlzSHRtbCgpKSB7XG4gICAgXHRcdFx0Y29uc3QgYnBJdGVtID0gbm9kZS5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgXHRcdFx0ZGltZW5zaW9ucyA9IFticEl0ZW0uY2xpZW50V2lkdGgsIGJwSXRlbS5jbGllbnRIZWlnaHRdO1xuICAgIFx0XHR9IGVsc2Uge1xuICAgIFx0XHRcdGRpbWVuc2lvbnMgPSBjYWxjdWxhdGVEaW1lbnNpb25zKGFjdGl2ZUl0ZW0pO1xuICAgIFx0XHR9XG5cbiAgICBcdFx0Ly8gcmVjdCBpcyBib3VuZGluZyByZWN0IG9mIHRyaWdnZXIgZWxlbWVudFxuICAgIFx0XHRjb25zdCByZWN0ID0gKGFjdGl2ZUl0ZW0uZWxlbWVudCB8fCBmb2N1c1RyaWdnZXIpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgXHRcdGNvbnN0IGxlZnRPZmZzZXQgPSByZWN0LmxlZnQgLSAoY29udGFpbmVyLncgLSByZWN0LndpZHRoKSAvIDI7XG4gICAgXHRcdGNvbnN0IGNlbnRlclRvcCA9IHJlY3QudG9wIC0gKGNvbnRhaW5lci5oIC0gcmVjdC5oZWlnaHQpIC8gMjtcbiAgICBcdFx0Y29uc3Qgc2NhbGVXaWR0aCA9IHJlY3Qud2lkdGggLyBkaW1lbnNpb25zWzBdO1xuICAgIFx0XHRjb25zdCBzY2FsZUhlaWdodCA9IHJlY3QuaGVpZ2h0IC8gZGltZW5zaW9uc1sxXTtcblxuICAgIFx0XHRyZXR1cm4ge1xuICAgIFx0XHRcdGR1cmF0aW9uOiA0ODAsXG4gICAgXHRcdFx0ZWFzaW5nOiBjdWJpY091dCxcbiAgICBcdFx0XHRjc3M6ICh0LCB1KSA9PiB7XG4gICAgXHRcdFx0XHRyZXR1cm4gYHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgke2xlZnRPZmZzZXQgKiB1fXB4LCAke2NlbnRlclRvcCAqIHV9cHgsIDApIHNjYWxlM2QoJHtzY2FsZVdpZHRoICsgdCAqICgxIC0gc2NhbGVXaWR0aCl9LCAke3NjYWxlSGVpZ2h0ICsgdCAqICgxIC0gc2NhbGVIZWlnaHQpfSwgMSlgO1xuICAgIFx0XHRcdH1cbiAgICBcdFx0fTtcbiAgICBcdH07XG5cbiAgICBcdC8qKiBwcm92aWRlcyBvYmplY3Qgdy8gbmVlZGVkIGZ1bmNzIC8gZGF0YSB0byBjaGlsZCBjb21wb25lbnRzICAqL1xuICAgIFx0Y29uc3QgZ2V0Q2hpbGRQcm9wcyA9ICgpID0+ICh7XG4gICAgXHRcdGFjdGl2ZUl0ZW0sXG4gICAgXHRcdGNhbGN1bGF0ZURpbWVuc2lvbnMsXG4gICAgXHRcdGxvYWRJbWFnZSxcbiAgICBcdFx0cHJlbG9hZE5leHQsXG4gICAgXHRcdG9wdHMsXG4gICAgXHRcdHByZXYsXG4gICAgXHRcdG5leHQsXG4gICAgXHRcdGNsb3NlLFxuICAgIFx0XHRzZXRSZXNpemVGdW5jLFxuICAgIFx0XHR6b29tZWQsXG4gICAgXHRcdGNvbnRhaW5lclxuICAgIFx0fSk7XG5cbiAgICBcdC8qKiBjb2RlIHRvIHJ1biBvbiBtb3VudCAvIGRlc3Ryb3kgKi9cbiAgICBcdGNvbnN0IGNvbnRhaW5lckFjdGlvbnMgPSBub2RlID0+IHtcbiAgICBcdFx0JCRpbnZhbGlkYXRlKDE5LCBjb250YWluZXIuZWwgPSBub2RlLCBjb250YWluZXIpO1xuICAgIFx0XHRsZXQgcm9BY3RpdmU7XG4gICAgXHRcdG9wdHMub25PcGVuPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKTtcblxuICAgIFx0XHQvLyBkb24ndCB1c2Uga2V5Ym9hcmQgZXZlbnRzIGZvciBpbmxpbmUgZ2FsbGVyaWVzXG4gICAgXHRcdGlmICghaW5saW5lKSB7XG4gICAgXHRcdFx0Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlkb3duKTtcbiAgICBcdFx0fVxuXG4gICAgXHRcdC8vIHNldCB1cCByZXNpemUgb2JzZXJ2ZXJcbiAgICBcdFx0Y29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XG4gICAgXHRcdFx0XHQvLyB1c2Ugcm9BY3RpdmUgdG8gYXZvaWQgcnVubmluZyBvbiBpbml0aWFsIG9wZW5cbiAgICBcdFx0XHRcdGlmIChyb0FjdGl2ZSkge1xuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoMTksIGNvbnRhaW5lci53ID0gZW50cmllc1swXS5jb250ZW50UmVjdC53aWR0aCwgY29udGFpbmVyKTtcbiAgICBcdFx0XHRcdFx0JCRpbnZhbGlkYXRlKDE5LCBjb250YWluZXIuaCA9IGVudHJpZXNbMF0uY29udGVudFJlY3QuaGVpZ2h0LCBjb250YWluZXIpO1xuICAgIFx0XHRcdFx0XHQkJGludmFsaWRhdGUoNywgc21hbGxTY3JlZW4gPSBjb250YWluZXIudyA8IDc2OSk7XG5cbiAgICBcdFx0XHRcdFx0Ly8gcnVuIGNoaWxkIGNvbXBvbmVudCByZXNpemUgZnVuY3Rpb25cbiAgICBcdFx0XHRcdFx0aWYgKCFhY3RpdmVJdGVtSXNIdG1sKCkpIHtcbiAgICBcdFx0XHRcdFx0XHRyZXNpemVGdW5jPy4oKTtcbiAgICBcdFx0XHRcdFx0fVxuXG4gICAgXHRcdFx0XHRcdC8vIHJ1biB1c2VyIGRlZmluZWQgb25SZXNpemUgZnVuY3Rpb25cbiAgICBcdFx0XHRcdFx0b3B0cy5vblJlc2l6ZT8uKGNvbnRhaW5lci5lbCwgYWN0aXZlSXRlbSk7XG4gICAgXHRcdFx0XHR9XG5cbiAgICBcdFx0XHRcdHJvQWN0aXZlID0gdHJ1ZTtcbiAgICBcdFx0XHR9KTtcblxuICAgIFx0XHRyby5vYnNlcnZlKG5vZGUpO1xuXG4gICAgXHRcdHJldHVybiB7XG4gICAgXHRcdFx0ZGVzdHJveSgpIHtcbiAgICBcdFx0XHRcdHJvLmRpc2Nvbm5lY3QoKTtcbiAgICBcdFx0XHRcdGdsb2JhbFRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bik7XG4gICAgXHRcdFx0XHRjbG9zaW5nLnNldChmYWxzZSk7XG5cbiAgICBcdFx0XHRcdC8vIHJlbW92ZSBjbGFzcyBoaWRpbmcgc2Nyb2xsXG4gICAgXHRcdFx0XHRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ2JwLWxvY2snKTtcblxuICAgIFx0XHRcdFx0b3B0cy5vbkNsb3NlZD8uKCk7XG4gICAgXHRcdFx0fVxuICAgIFx0XHR9O1xuICAgIFx0fTtcblxuICAgIFx0Y29uc3QgcG9pbnRlcmRvd25faGFuZGxlciA9IGUgPT4gJCRpbnZhbGlkYXRlKDksIGNsaWNrZWRFbCA9IGUudGFyZ2V0KTtcblxuICAgIFx0Y29uc3QgcG9pbnRlcnVwX2hhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgIFx0XHQvLyBvbmx5IGNsb3NlIGlmIGxlZnQgY2xpY2sgb24gc2VsZiBhbmQgbm90IGRyYWdnZWRcbiAgICBcdFx0aWYgKGUuYnV0dG9uICE9PSAyICYmIGUudGFyZ2V0ID09PSB0aGlzICYmIGNsaWNrZWRFbCA9PT0gdGhpcykge1xuICAgIFx0XHRcdCFvcHRzLm5vQ2xvc2UgJiYgY2xvc2UoKTtcbiAgICBcdFx0fVxuICAgIFx0fTtcblxuICAgIFx0JCRzZWxmLiQkc2V0ID0gJCRwcm9wcyA9PiB7XG4gICAgXHRcdGlmICgnaXRlbXMnIGluICQkcHJvcHMpICQkaW52YWxpZGF0ZSgwLCBpdGVtcyA9ICQkcHJvcHMuaXRlbXMpO1xuICAgIFx0XHRpZiAoJ3RhcmdldCcgaW4gJCRwcm9wcykgJCRpbnZhbGlkYXRlKDE1LCB0YXJnZXQgPSAkJHByb3BzLnRhcmdldCk7XG4gICAgXHR9O1xuXG4gICAgXHQkJHNlbGYuJCQudXBkYXRlID0gKCkgPT4ge1xuICAgIFx0XHRpZiAoJCRzZWxmLiQkLmRpcnR5WzBdICYgLyppdGVtcywgcG9zaXRpb24sIGlzT3Blbiwgb3B0cywgY29udGFpbmVyLCBhY3RpdmVJdGVtKi8gNzg2NTQ1KSB7XG4gICAgXHRcdFx0aWYgKGl0ZW1zKSB7XG4gICAgXHRcdFx0XHQvLyB1cGRhdGUgYWN0aXZlIGl0ZW0gd2hlbiBwb3NpdGlvbiBjaGFuZ2VzXG4gICAgXHRcdFx0XHQkJGludmFsaWRhdGUoNiwgYWN0aXZlSXRlbSA9IGl0ZW1zW3Bvc2l0aW9uXSk7XG5cbiAgICBcdFx0XHRcdGlmIChpc09wZW4pIHtcbiAgICBcdFx0XHRcdFx0Ly8gcnVuIG9uVXBkYXRlIHdoZW4gaXRlbXMgdXBkYXRlZFxuICAgIFx0XHRcdFx0XHRvcHRzLm9uVXBkYXRlPy4oY29udGFpbmVyLmVsLCBhY3RpdmVJdGVtKTtcbiAgICBcdFx0XHRcdH1cbiAgICBcdFx0XHR9XG4gICAgXHRcdH1cbiAgICBcdH07XG5cbiAgICBcdHJldHVybiBbXG4gICAgXHRcdGl0ZW1zLFxuICAgIFx0XHRjbG9zZSxcbiAgICBcdFx0cHJldixcbiAgICBcdFx0bmV4dCxcbiAgICBcdFx0cG9zaXRpb24sXG4gICAgXHRcdG9wdHMsXG4gICAgXHRcdGFjdGl2ZUl0ZW0sXG4gICAgXHRcdHNtYWxsU2NyZWVuLFxuICAgIFx0XHRpbmxpbmUsXG4gICAgXHRcdGNsaWNrZWRFbCxcbiAgICBcdFx0JHpvb21lZCxcbiAgICBcdFx0em9vbWVkLFxuICAgIFx0XHRtZWRpYVRyYW5zaXRpb24sXG4gICAgXHRcdGdldENoaWxkUHJvcHMsXG4gICAgXHRcdGNvbnRhaW5lckFjdGlvbnMsXG4gICAgXHRcdHRhcmdldCxcbiAgICBcdFx0b3BlbixcbiAgICBcdFx0c2V0UG9zaXRpb24sXG4gICAgXHRcdGlzT3BlbixcbiAgICBcdFx0Y29udGFpbmVyLFxuICAgIFx0XHRwb2ludGVyZG93bl9oYW5kbGVyLFxuICAgIFx0XHRwb2ludGVydXBfaGFuZGxlclxuICAgIFx0XTtcbiAgICB9XG5cbiAgICBjbGFzcyBCaWdnZXJfcGljdHVyZSBleHRlbmRzIFN2ZWx0ZUNvbXBvbmVudCB7XG4gICAgXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgXHRcdHN1cGVyKCk7XG5cbiAgICBcdFx0aW5pdChcbiAgICBcdFx0XHR0aGlzLFxuICAgIFx0XHRcdG9wdGlvbnMsXG4gICAgXHRcdFx0aW5zdGFuY2UsXG4gICAgXHRcdFx0Y3JlYXRlX2ZyYWdtZW50LFxuICAgIFx0XHRcdG5vdF9lcXVhbCxcbiAgICBcdFx0XHR7XG4gICAgXHRcdFx0XHRpdGVtczogMCxcbiAgICBcdFx0XHRcdHRhcmdldDogMTUsXG4gICAgXHRcdFx0XHRvcGVuOiAxNixcbiAgICBcdFx0XHRcdGNsb3NlOiAxLFxuICAgIFx0XHRcdFx0cHJldjogMixcbiAgICBcdFx0XHRcdG5leHQ6IDMsXG4gICAgXHRcdFx0XHRzZXRQb3NpdGlvbjogMTdcbiAgICBcdFx0XHR9LFxuICAgIFx0XHRcdG51bGwsXG4gICAgXHRcdFx0Wy0xLCAtMV1cbiAgICBcdFx0KTtcbiAgICBcdH1cblxuICAgIFx0Z2V0IGl0ZW1zKCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMF07XG4gICAgXHR9XG5cblxuXG4gICAgXHRnZXQgdGFyZ2V0KCkge1xuICAgIFx0XHRyZXR1cm4gdGhpcy4kJC5jdHhbMTVdO1xuICAgIFx0fVxuXG5cblxuICAgIFx0Z2V0IG9wZW4oKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsxNl07XG4gICAgXHR9XG5cbiAgICBcdGdldCBjbG9zZSgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzFdO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgcHJldigpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzJdO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgbmV4dCgpIHtcbiAgICBcdFx0cmV0dXJuIHRoaXMuJCQuY3R4WzNdO1xuICAgIFx0fVxuXG4gICAgXHRnZXQgc2V0UG9zaXRpb24oKSB7XG4gICAgXHRcdHJldHVybiB0aGlzLiQkLmN0eFsxN107XG4gICAgXHR9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgQmlnZ2VyUGljdHVyZVxuICAgICAqIEBwYXJhbSB7e3RhcmdldDogSFRNTEVsZW1lbnR9fSBvcHRpb25zXG4gICAgICogQHJldHVybnMgQmlnZ2VyUGljdHVyZSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGJpZ2dlclBpY3R1cmUgKG9wdGlvbnMpIHtcbiAgICBcdHJldHVybiBuZXcgQmlnZ2VyX3BpY3R1cmUoe1xuICAgIFx0XHQuLi5vcHRpb25zLFxuICAgIFx0XHRwcm9wczogb3B0aW9ucyxcbiAgICBcdH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGJpZ2dlclBpY3R1cmU7XG5cbn0pKTtcbiIsICIoKCkgPT4ge1xuICAgICd1c2Ugc3RyaWN0J1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUnKS5mb3JFYWNoKCh0YWJsZSkgPT4ge1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgd3JhcHBlci5jbGFzc05hbWUgPSAndGFibGUtcmVzcG9uc2l2ZSdcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YWJsZS5jbG9uZU5vZGUodHJ1ZSkpXG4gICAgICAgIHRhYmxlLnBhcmVudE5vZGU/LnJlcGxhY2VDaGlsZCh3cmFwcGVyLCB0YWJsZSlcbiAgICB9KVxufSkoKVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkcm9wZG93bi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlLFxuICBnZXRFbGVtZW50LFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBub29wXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ2Ryb3Bkb3duJ1xuY29uc3QgREFUQV9LRVkgPSAnYnMuZHJvcGRvd24nXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcblxuY29uc3QgRVNDQVBFX0tFWSA9ICdFc2NhcGUnXG5jb25zdCBUQUJfS0VZID0gJ1RhYidcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgUklHSFRfTU9VU0VfQlVUVE9OID0gMiAvLyBNb3VzZUV2ZW50LmJ1dHRvbiB2YWx1ZSBmb3IgdGhlIHNlY29uZGFyeSBidXR0b24sIHVzdWFsbHkgdGhlIHJpZ2h0IGJ1dHRvblxuXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURERU4gPSBgaGlkZGVuJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fREFUQV9BUEkgPSBga2V5ZG93biR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWVVQX0RBVEFfQVBJID0gYGtleXVwJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfRFJPUFVQID0gJ2Ryb3B1cCdcbmNvbnN0IENMQVNTX05BTUVfRFJPUEVORCA9ICdkcm9wZW5kJ1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QU1RBUlQgPSAnZHJvcHN0YXJ0J1xuY29uc3QgQ0xBU1NfTkFNRV9EUk9QVVBfQ0VOVEVSID0gJ2Ryb3B1cC1jZW50ZXInXG5jb25zdCBDTEFTU19OQU1FX0RST1BET1dOX0NFTlRFUiA9ICdkcm9wZG93bi1jZW50ZXInXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cImRyb3Bkb3duXCJdOm5vdCguZGlzYWJsZWQpOm5vdCg6ZGlzYWJsZWQpJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04gPSBgJHtTRUxFQ1RPUl9EQVRBX1RPR0dMRX0uJHtDTEFTU19OQU1FX1NIT1d9YFxuY29uc3QgU0VMRUNUT1JfTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IFNFTEVDVE9SX05BVkJBUiA9ICcubmF2YmFyJ1xuY29uc3QgU0VMRUNUT1JfTkFWQkFSX05BViA9ICcubmF2YmFyLW5hdidcbmNvbnN0IFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMgPSAnLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWl0ZW06bm90KC5kaXNhYmxlZCk6bm90KDpkaXNhYmxlZCknXG5cbmNvbnN0IFBMQUNFTUVOVF9UT1AgPSBpc1JUTCgpID8gJ3RvcC1lbmQnIDogJ3RvcC1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9UT1BFTkQgPSBpc1JUTCgpID8gJ3RvcC1zdGFydCcgOiAndG9wLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT00gPSBpc1JUTCgpID8gJ2JvdHRvbS1lbmQnIDogJ2JvdHRvbS1zdGFydCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01FTkQgPSBpc1JUTCgpID8gJ2JvdHRvbS1zdGFydCcgOiAnYm90dG9tLWVuZCdcbmNvbnN0IFBMQUNFTUVOVF9SSUdIVCA9IGlzUlRMKCkgPyAnbGVmdC1zdGFydCcgOiAncmlnaHQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfTEVGVCA9IGlzUlRMKCkgPyAncmlnaHQtc3RhcnQnIDogJ2xlZnQtc3RhcnQnXG5jb25zdCBQTEFDRU1FTlRfVE9QQ0VOVEVSID0gJ3RvcCdcbmNvbnN0IFBMQUNFTUVOVF9CT1RUT01DRU5URVIgPSAnYm90dG9tJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhdXRvQ2xvc2U6IHRydWUsXG4gIGJvdW5kYXJ5OiAnY2xpcHBpbmdQYXJlbnRzJyxcbiAgZGlzcGxheTogJ2R5bmFtaWMnLFxuICBvZmZzZXQ6IFswLCAyXSxcbiAgcG9wcGVyQ29uZmlnOiBudWxsLFxuICByZWZlcmVuY2U6ICd0b2dnbGUnXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhdXRvQ2xvc2U6ICcoYm9vbGVhbnxzdHJpbmcpJyxcbiAgYm91bmRhcnk6ICcoc3RyaW5nfGVsZW1lbnQpJyxcbiAgZGlzcGxheTogJ3N0cmluZycsXG4gIG9mZnNldDogJyhhcnJheXxzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgcG9wcGVyQ29uZmlnOiAnKG51bGx8b2JqZWN0fGZ1bmN0aW9uKScsXG4gIHJlZmVyZW5jZTogJyhzdHJpbmd8ZWxlbWVudHxvYmplY3QpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBEcm9wZG93biBleHRlbmRzIEJhc2VDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcihlbGVtZW50LCBjb25maWcpXG5cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlIC8vIGRyb3Bkb3duIHdyYXBwZXJcbiAgICAvLyBUT0RPOiB2NiByZXZlcnQgIzM3MDExICYgY2hhbmdlIG1hcmt1cCBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjMvZm9ybXMvaW5wdXQtZ3JvdXAvXG4gICAgdGhpcy5fbWVudSA9IFNlbGVjdG9yRW5naW5lLm5leHQodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHxcbiAgICAgIFNlbGVjdG9yRW5naW5lLnByZXYodGhpcy5fZWxlbWVudCwgU0VMRUNUT1JfTUVOVSlbMF0gfHxcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfTUVOVSwgdGhpcy5fcGFyZW50KVxuICAgIHRoaXMuX2luTmF2YmFyID0gdGhpcy5fZGV0ZWN0TmF2YmFyKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1Nob3duKCkgPyB0aGlzLmhpZGUoKSA6IHRoaXMuc2hvdygpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmIChpc0Rpc2FibGVkKHRoaXMuX2VsZW1lbnQpIHx8IHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgcmVsYXRlZFRhcmdldCA9IHtcbiAgICAgIHJlbGF0ZWRUYXJnZXQ6IHRoaXMuX2VsZW1lbnRcbiAgICB9XG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XLCByZWxhdGVkVGFyZ2V0KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9jcmVhdGVQb3BwZXIoKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIGFkZCBleHRyYVxuICAgIC8vIGVtcHR5IG1vdXNlb3ZlciBsaXN0ZW5lcnMgdG8gdGhlIGJvZHkncyBpbW1lZGlhdGUgY2hpbGRyZW47XG4gICAgLy8gb25seSBuZWVkZWQgYmVjYXVzZSBvZiBicm9rZW4gZXZlbnQgZGVsZWdhdGlvbiBvbiBpT1NcbiAgICAvLyBodHRwczovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTQvMDIvbW91c2VfZXZlbnRfYnViLmh0bWxcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmICF0aGlzLl9wYXJlbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVJfTkFWKSkge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIFtdLmNvbmNhdCguLi5kb2N1bWVudC5ib2R5LmNoaWxkcmVuKSkge1xuICAgICAgICBFdmVudEhhbmRsZXIub24oZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5mb2N1cygpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy5fbWVudS5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XKVxuICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NIT1dOLCByZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoaXNEaXNhYmxlZCh0aGlzLl9lbGVtZW50KSB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByZWxhdGVkVGFyZ2V0ID0ge1xuICAgICAgcmVsYXRlZFRhcmdldDogdGhpcy5fZWxlbWVudFxuICAgIH1cblxuICAgIHRoaXMuX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5faW5OYXZiYXIgPSB0aGlzLl9kZXRlY3ROYXZiYXIoKVxuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbXBsZXRlSGlkZShyZWxhdGVkVGFyZ2V0KSB7XG4gICAgY29uc3QgaGlkZUV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSwgcmVsYXRlZFRhcmdldClcbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoaXMgaXMgYSB0b3VjaC1lbmFibGVkIGRldmljZSB3ZSByZW1vdmUgdGhlIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB3ZSBhZGRlZCBmb3IgaU9TIHN1cHBvcnRcbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgW10uY29uY2F0KC4uLmRvY3VtZW50LmJvZHkuY2hpbGRyZW4pKSB7XG4gICAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgJ21vdXNlb3ZlcicsIG5vb3ApXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3BvcHBlcikge1xuICAgICAgdGhpcy5fcG9wcGVyLmRlc3Ryb3koKVxuICAgIH1cblxuICAgIHRoaXMuX21lbnUuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1cpXG4gICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpXG4gICAgTWFuaXB1bGF0b3IucmVtb3ZlRGF0YUF0dHJpYnV0ZSh0aGlzLl9tZW51LCAncG9wcGVyJylcbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4sIHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBfZ2V0Q29uZmlnKGNvbmZpZykge1xuICAgIGNvbmZpZyA9IHN1cGVyLl9nZXRDb25maWcoY29uZmlnKVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmZXJlbmNlID09PSAnb2JqZWN0JyAmJiAhaXNFbGVtZW50KGNvbmZpZy5yZWZlcmVuY2UpICYmXG4gICAgICB0eXBlb2YgY29uZmlnLnJlZmVyZW5jZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbidcbiAgICApIHtcbiAgICAgIC8vIFBvcHBlciB2aXJ0dWFsIGVsZW1lbnRzIHJlcXVpcmUgYSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgbWV0aG9kXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGAke05BTUUudG9VcHBlckNhc2UoKX06IE9wdGlvbiBcInJlZmVyZW5jZVwiIHByb3ZpZGVkIHR5cGUgXCJvYmplY3RcIiB3aXRob3V0IGEgcmVxdWlyZWQgXCJnZXRCb3VuZGluZ0NsaWVudFJlY3RcIiBtZXRob2QuYClcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfY3JlYXRlUG9wcGVyKCkge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyBkcm9wZG93bnMgcmVxdWlyZSBQb3BwZXIgKGh0dHBzOi8vcG9wcGVyLmpzLm9yZyknKVxuICAgIH1cblxuICAgIGxldCByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fZWxlbWVudFxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UgPT09ICdwYXJlbnQnKSB7XG4gICAgICByZWZlcmVuY2VFbGVtZW50ID0gdGhpcy5fcGFyZW50XG4gICAgfSBlbHNlIGlmIChpc0VsZW1lbnQodGhpcy5fY29uZmlnLnJlZmVyZW5jZSkpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBnZXRFbGVtZW50KHRoaXMuX2NvbmZpZy5yZWZlcmVuY2UpXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdGhpcy5fY29uZmlnLnJlZmVyZW5jZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSB0aGlzLl9jb25maWcucmVmZXJlbmNlXG4gICAgfVxuXG4gICAgY29uc3QgcG9wcGVyQ29uZmlnID0gdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKClcbiAgICB0aGlzLl9wb3BwZXIgPSBQb3BwZXIuY3JlYXRlUG9wcGVyKHJlZmVyZW5jZUVsZW1lbnQsIHRoaXMuX21lbnUsIHBvcHBlckNvbmZpZylcbiAgfVxuXG4gIF9pc1Nob3duKCkge1xuICAgIHJldHVybiB0aGlzLl9tZW51LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICBfZ2V0UGxhY2VtZW50KCkge1xuICAgIGNvbnN0IHBhcmVudERyb3Bkb3duID0gdGhpcy5fcGFyZW50XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUEVORCkpIHtcbiAgICAgIHJldHVybiBQTEFDRU1FTlRfUklHSFRcbiAgICB9XG5cbiAgICBpZiAocGFyZW50RHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUFNUQVJUKSkge1xuICAgICAgcmV0dXJuIFBMQUNFTUVOVF9MRUZUXG4gICAgfVxuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUF9DRU5URVIpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX1RPUENFTlRFUlxuICAgIH1cblxuICAgIGlmIChwYXJlbnREcm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9EUk9QRE9XTl9DRU5URVIpKSB7XG4gICAgICByZXR1cm4gUExBQ0VNRU5UX0JPVFRPTUNFTlRFUlxuICAgIH1cblxuICAgIC8vIFdlIG5lZWQgdG8gdHJpbSB0aGUgdmFsdWUgYmVjYXVzZSBjdXN0b20gcHJvcGVydGllcyBjYW4gYWxzbyBpbmNsdWRlIHNwYWNlc1xuICAgIGNvbnN0IGlzRW5kID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLl9tZW51KS5nZXRQcm9wZXJ0eVZhbHVlKCctLWJzLXBvc2l0aW9uJykudHJpbSgpID09PSAnZW5kJ1xuXG4gICAgaWYgKHBhcmVudERyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0RST1BVUCkpIHtcbiAgICAgIHJldHVybiBpc0VuZCA/IFBMQUNFTUVOVF9UT1BFTkQgOiBQTEFDRU1FTlRfVE9QXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzRW5kID8gUExBQ0VNRU5UX0JPVFRPTUVORCA6IFBMQUNFTUVOVF9CT1RUT01cbiAgfVxuXG4gIF9kZXRlY3ROYXZiYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQuY2xvc2VzdChTRUxFQ1RPUl9OQVZCQVIpICE9PSBudWxsXG4gIH1cblxuICBfZ2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IHsgb2Zmc2V0IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICh0eXBlb2Ygb2Zmc2V0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG9mZnNldC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VJbnQodmFsdWUsIDEwKSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIHBvcHBlckRhdGEgPT4gb2Zmc2V0KHBvcHBlckRhdGEsIHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgcmV0dXJuIG9mZnNldFxuICB9XG5cbiAgX2dldFBvcHBlckNvbmZpZygpIHtcbiAgICBjb25zdCBkZWZhdWx0QnNQb3BwZXJDb25maWcgPSB7XG4gICAgICBwbGFjZW1lbnQ6IHRoaXMuX2dldFBsYWNlbWVudCgpLFxuICAgICAgbW9kaWZpZXJzOiBbe1xuICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgIGJvdW5kYXJ5OiB0aGlzLl9jb25maWcuYm91bmRhcnlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ29mZnNldCcsXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICBvZmZzZXQ6IHRoaXMuX2dldE9mZnNldCgpXG4gICAgICAgIH1cbiAgICAgIH1dXG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSBQb3BwZXIgaWYgd2UgaGF2ZSBhIHN0YXRpYyBkaXNwbGF5IG9yIERyb3Bkb3duIGlzIGluIE5hdmJhclxuICAgIGlmICh0aGlzLl9pbk5hdmJhciB8fCB0aGlzLl9jb25maWcuZGlzcGxheSA9PT0gJ3N0YXRpYycpIHtcbiAgICAgIE1hbmlwdWxhdG9yLnNldERhdGFBdHRyaWJ1dGUodGhpcy5fbWVudSwgJ3BvcHBlcicsICdzdGF0aWMnKSAvLyBUT0RPOiB2NiByZW1vdmVcbiAgICAgIGRlZmF1bHRCc1BvcHBlckNvbmZpZy5tb2RpZmllcnMgPSBbe1xuICAgICAgICBuYW1lOiAnYXBwbHlTdHlsZXMnLFxuICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgfV1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZGVmYXVsdEJzUG9wcGVyQ29uZmlnLFxuICAgICAgLi4uZXhlY3V0ZSh0aGlzLl9jb25maWcucG9wcGVyQ29uZmlnLCBbZGVmYXVsdEJzUG9wcGVyQ29uZmlnXSlcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0TWVudUl0ZW0oeyBrZXksIHRhcmdldCB9KSB7XG4gICAgY29uc3QgaXRlbXMgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1ZJU0lCTEVfSVRFTVMsIHRoaXMuX21lbnUpLmZpbHRlcihlbGVtZW50ID0+IGlzVmlzaWJsZShlbGVtZW50KSlcblxuICAgIGlmICghaXRlbXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBpZiB0YXJnZXQgaXNuJ3QgaW5jbHVkZWQgaW4gaXRlbXMgKGUuZy4gd2hlbiBleHBhbmRpbmcgdGhlIGRyb3Bkb3duKVxuICAgIC8vIGFsbG93IGN5Y2xpbmcgdG8gZ2V0IHRoZSBsYXN0IGl0ZW0gaW4gY2FzZSBrZXkgZXF1YWxzIEFSUk9XX1VQX0tFWVxuICAgIGdldE5leHRBY3RpdmVFbGVtZW50KGl0ZW1zLCB0YXJnZXQsIGtleSA9PT0gQVJST1dfRE9XTl9LRVksICFpdGVtcy5pbmNsdWRlcyh0YXJnZXQpKS5mb2N1cygpXG4gIH1cblxuICAvLyBTdGF0aWNcbiAgc3RhdGljIGpRdWVyeUludGVyZmFjZShjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgY2xlYXJNZW51cyhldmVudCkge1xuICAgIGlmIChldmVudC5idXR0b24gPT09IFJJR0hUX01PVVNFX0JVVFRPTiB8fCAoZXZlbnQudHlwZSA9PT0gJ2tleXVwJyAmJiBldmVudC5rZXkgIT09IFRBQl9LRVkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBvcGVuVG9nZ2xlcyA9IFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfREFUQV9UT0dHTEVfU0hPV04pXG5cbiAgICBmb3IgKGNvbnN0IHRvZ2dsZSBvZiBvcGVuVG9nZ2xlcykge1xuICAgICAgY29uc3QgY29udGV4dCA9IERyb3Bkb3duLmdldEluc3RhbmNlKHRvZ2dsZSlcbiAgICAgIGlmICghY29udGV4dCB8fCBjb250ZXh0Ll9jb25maWcuYXV0b0Nsb3NlID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb21wb3NlZFBhdGggPSBldmVudC5jb21wb3NlZFBhdGgoKVxuICAgICAgY29uc3QgaXNNZW51VGFyZ2V0ID0gY29tcG9zZWRQYXRoLmluY2x1ZGVzKGNvbnRleHQuX21lbnUpXG4gICAgICBpZiAoXG4gICAgICAgIGNvbXBvc2VkUGF0aC5pbmNsdWRlcyhjb250ZXh0Ll9lbGVtZW50KSB8fFxuICAgICAgICAoY29udGV4dC5fY29uZmlnLmF1dG9DbG9zZSA9PT0gJ2luc2lkZScgJiYgIWlzTWVudVRhcmdldCkgfHxcbiAgICAgICAgKGNvbnRleHQuX2NvbmZpZy5hdXRvQ2xvc2UgPT09ICdvdXRzaWRlJyAmJiBpc01lbnVUYXJnZXQpXG4gICAgICApIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgLy8gVGFiIG5hdmlnYXRpb24gdGhyb3VnaCB0aGUgZHJvcGRvd24gbWVudSBvciBldmVudHMgZnJvbSBjb250YWluZWQgaW5wdXRzIHNob3VsZG4ndCBjbG9zZSB0aGUgbWVudVxuICAgICAgaWYgKGNvbnRleHQuX21lbnUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAoKGV2ZW50LnR5cGUgPT09ICdrZXl1cCcgJiYgZXZlbnQua2V5ID09PSBUQUJfS0VZKSB8fCAvaW5wdXR8c2VsZWN0fG9wdGlvbnx0ZXh0YXJlYXxmb3JtL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSkpKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlbGF0ZWRUYXJnZXQgPSB7IHJlbGF0ZWRUYXJnZXQ6IGNvbnRleHQuX2VsZW1lbnQgfVxuXG4gICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICByZWxhdGVkVGFyZ2V0LmNsaWNrRXZlbnQgPSBldmVudFxuICAgICAgfVxuXG4gICAgICBjb250ZXh0Ll9jb21wbGV0ZUhpZGUocmVsYXRlZFRhcmdldClcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZGF0YUFwaUtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgLy8gSWYgbm90IGFuIFVQIHwgRE9XTiB8IEVTQ0FQRSBrZXkgPT4gbm90IGEgZHJvcGRvd24gY29tbWFuZFxuICAgIC8vIElmIGlucHV0L3RleHRhcmVhICYmIGlmIGtleSBpcyBvdGhlciB0aGFuIEVTQ0FQRSA9PiBub3QgYSBkcm9wZG93biBjb21tYW5kXG5cbiAgICBjb25zdCBpc0lucHV0ID0gL2lucHV0fHRleHRhcmVhL2kudGVzdChldmVudC50YXJnZXQudGFnTmFtZSlcbiAgICBjb25zdCBpc0VzY2FwZUV2ZW50ID0gZXZlbnQua2V5ID09PSBFU0NBUEVfS0VZXG4gICAgY29uc3QgaXNVcE9yRG93bkV2ZW50ID0gW0FSUk9XX1VQX0tFWSwgQVJST1dfRE9XTl9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSlcblxuICAgIGlmICghaXNVcE9yRG93bkV2ZW50ICYmICFpc0VzY2FwZUV2ZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNJbnB1dCAmJiAhaXNFc2NhcGVFdmVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgLy8gVE9ETzogdjYgcmV2ZXJ0ICMzNzAxMSAmIGNoYW5nZSBtYXJrdXAgaHR0cHM6Ly9nZXRib290c3RyYXAuY29tL2RvY3MvNS4zL2Zvcm1zL2lucHV0LWdyb3VwL1xuICAgIGNvbnN0IGdldFRvZ2dsZUJ1dHRvbiA9IHRoaXMubWF0Y2hlcyhTRUxFQ1RPUl9EQVRBX1RPR0dMRSkgP1xuICAgICAgdGhpcyA6XG4gICAgICAoU2VsZWN0b3JFbmdpbmUucHJldih0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF0gfHxcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUubmV4dCh0aGlzLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSlbMF0gfHxcbiAgICAgICAgU2VsZWN0b3JFbmdpbmUuZmluZE9uZShTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZXZlbnQuZGVsZWdhdGVUYXJnZXQucGFyZW50Tm9kZSkpXG5cbiAgICBjb25zdCBpbnN0YW5jZSA9IERyb3Bkb3duLmdldE9yQ3JlYXRlSW5zdGFuY2UoZ2V0VG9nZ2xlQnV0dG9uKVxuXG4gICAgaWYgKGlzVXBPckRvd25FdmVudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgIGluc3RhbmNlLnNob3coKVxuICAgICAgaW5zdGFuY2UuX3NlbGVjdE1lbnVJdGVtKGV2ZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGluc3RhbmNlLl9pc1Nob3duKCkpIHsgLy8gZWxzZSBpcyBlc2NhcGUgYW5kIHdlIGNoZWNrIGlmIGl0IGlzIHNob3duXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgaW5zdGFuY2UuaGlkZSgpXG4gICAgICBnZXRUb2dnbGVCdXR0b24uZm9jdXMoKVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERhdGEgQVBJIGltcGxlbWVudGF0aW9uXG4gKi9cblxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgRHJvcGRvd24uZGF0YUFwaUtleWRvd25IYW5kbGVyKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX0RBVEFfQVBJLCBTRUxFQ1RPUl9NRU5VLCBEcm9wZG93bi5kYXRhQXBpS2V5ZG93bkhhbmRsZXIpXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBEcm9wZG93bi5jbGVhck1lbnVzKVxuRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlVUF9EQVRBX0FQSSwgRHJvcGRvd24uY2xlYXJNZW51cylcbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBEcm9wZG93bi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpLnRvZ2dsZSgpXG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihEcm9wZG93bilcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgZG9tL2RhdGEuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IGVsZW1lbnRNYXAgPSBuZXcgTWFwKClcblxuZXhwb3J0IGRlZmF1bHQge1xuICBzZXQoZWxlbWVudCwga2V5LCBpbnN0YW5jZSkge1xuICAgIGlmICghZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIGVsZW1lbnRNYXAuc2V0KGVsZW1lbnQsIG5ldyBNYXAoKSlcbiAgICB9XG5cbiAgICBjb25zdCBpbnN0YW5jZU1hcCA9IGVsZW1lbnRNYXAuZ2V0KGVsZW1lbnQpXG5cbiAgICAvLyBtYWtlIGl0IGNsZWFyIHdlIG9ubHkgd2FudCBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnRcbiAgICAvLyBjYW4gYmUgcmVtb3ZlZCBsYXRlciB3aGVuIG11bHRpcGxlIGtleS9pbnN0YW5jZXMgYXJlIGZpbmUgdG8gYmUgdXNlZFxuICAgIGlmICghaW5zdGFuY2VNYXAuaGFzKGtleSkgJiYgaW5zdGFuY2VNYXAuc2l6ZSAhPT0gMCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEJvb3RzdHJhcCBkb2Vzbid0IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5zdGFuY2UgcGVyIGVsZW1lbnQuIEJvdW5kIGluc3RhbmNlOiAke0FycmF5LmZyb20oaW5zdGFuY2VNYXAua2V5cygpKVswXX0uYClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluc3RhbmNlTWFwLnNldChrZXksIGluc3RhbmNlKVxuICB9LFxuXG4gIGdldChlbGVtZW50LCBrZXkpIHtcbiAgICBpZiAoZWxlbWVudE1hcC5oYXMoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBlbGVtZW50TWFwLmdldChlbGVtZW50KS5nZXQoa2V5KSB8fCBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICByZW1vdmUoZWxlbWVudCwga2V5KSB7XG4gICAgaWYgKCFlbGVtZW50TWFwLmhhcyhlbGVtZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgaW5zdGFuY2VNYXAgPSBlbGVtZW50TWFwLmdldChlbGVtZW50KVxuXG4gICAgaW5zdGFuY2VNYXAuZGVsZXRlKGtleSlcblxuICAgIC8vIGZyZWUgdXAgZWxlbWVudCByZWZlcmVuY2VzIGlmIHRoZXJlIGFyZSBubyBpbnN0YW5jZXMgbGVmdCBmb3IgYW4gZWxlbWVudFxuICAgIGlmIChpbnN0YW5jZU1hcC5zaXplID09PSAwKSB7XG4gICAgICBlbGVtZW50TWFwLmRlbGV0ZShlbGVtZW50KVxuICAgIH1cbiAgfVxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2luZGV4LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuY29uc3QgTUFYX1VJRCA9IDFfMDAwXzAwMFxuY29uc3QgTUlMTElTRUNPTkRTX01VTFRJUExJRVIgPSAxMDAwXG5jb25zdCBUUkFOU0lUSU9OX0VORCA9ICd0cmFuc2l0aW9uZW5kJ1xuXG4vKipcbiAqIFByb3Blcmx5IGVzY2FwZSBJRHMgc2VsZWN0b3JzIHRvIGhhbmRsZSB3ZWlyZCBJRHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuY29uc3QgcGFyc2VTZWxlY3RvciA9IHNlbGVjdG9yID0+IHtcbiAgaWYgKHNlbGVjdG9yICYmIHdpbmRvdy5DU1MgJiYgd2luZG93LkNTUy5lc2NhcGUpIHtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yIG5lZWRzIGVzY2FwaW5nIHRvIGhhbmRsZSBJRHMgKGh0bWw1KykgY29udGFpbmluZyBmb3IgaW5zdGFuY2UgL1xuICAgIHNlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZSgvIyhbXlxcc1wiIyddKykvZywgKG1hdGNoLCBpZCkgPT4gYCMke0NTUy5lc2NhcGUoaWQpfWApXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3Jcbn1cblxuLy8gU2hvdXQtb3V0IEFuZ3VzIENyb2xsIChodHRwczovL2dvby5nbC9weHdRR3ApXG5jb25zdCB0b1R5cGUgPSBvYmplY3QgPT4ge1xuICBpZiAob2JqZWN0ID09PSBudWxsIHx8IG9iamVjdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGAke29iamVjdH1gXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkubWF0Y2goL1xccyhbYS16XSspL2kpWzFdLnRvTG93ZXJDYXNlKClcbn1cblxuLyoqXG4gKiBQdWJsaWMgVXRpbCBBUElcbiAqL1xuXG5jb25zdCBnZXRVSUQgPSBwcmVmaXggPT4ge1xuICBkbyB7XG4gICAgcHJlZml4ICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1BWF9VSUQpXG4gIH0gd2hpbGUgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHByZWZpeCkpXG5cbiAgcmV0dXJuIHByZWZpeFxufVxuXG5jb25zdCBnZXRUcmFuc2l0aW9uRHVyYXRpb25Gcm9tRWxlbWVudCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gR2V0IHRyYW5zaXRpb24tZHVyYXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgbGV0IHsgdHJhbnNpdGlvbkR1cmF0aW9uLCB0cmFuc2l0aW9uRGVsYXkgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpXG5cbiAgY29uc3QgZmxvYXRUcmFuc2l0aW9uRHVyYXRpb24gPSBOdW1iZXIucGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gIGNvbnN0IGZsb2F0VHJhbnNpdGlvbkRlbGF5ID0gTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkRlbGF5KVxuXG4gIC8vIFJldHVybiAwIGlmIGVsZW1lbnQgb3IgdHJhbnNpdGlvbiBkdXJhdGlvbiBpcyBub3QgZm91bmRcbiAgaWYgKCFmbG9hdFRyYW5zaXRpb25EdXJhdGlvbiAmJiAhZmxvYXRUcmFuc2l0aW9uRGVsYXkpIHtcbiAgICByZXR1cm4gMFxuICB9XG5cbiAgLy8gSWYgbXVsdGlwbGUgZHVyYXRpb25zIGFyZSBkZWZpbmVkLCB0YWtlIHRoZSBmaXJzdFxuICB0cmFuc2l0aW9uRHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uc3BsaXQoJywnKVswXVxuICB0cmFuc2l0aW9uRGVsYXkgPSB0cmFuc2l0aW9uRGVsYXkuc3BsaXQoJywnKVswXVxuXG4gIHJldHVybiAoTnVtYmVyLnBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSArIE51bWJlci5wYXJzZUZsb2F0KHRyYW5zaXRpb25EZWxheSkpICogTUlMTElTRUNPTkRTX01VTFRJUExJRVJcbn1cblxuY29uc3QgdHJpZ2dlclRyYW5zaXRpb25FbmQgPSBlbGVtZW50ID0+IHtcbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUUkFOU0lUSU9OX0VORCkpXG59XG5cbmNvbnN0IGlzRWxlbWVudCA9IG9iamVjdCA9PiB7XG4gIGlmICghb2JqZWN0IHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdC5qcXVlcnkgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0WzBdXG4gIH1cblxuICByZXR1cm4gdHlwZW9mIG9iamVjdC5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCdcbn1cblxuY29uc3QgZ2V0RWxlbWVudCA9IG9iamVjdCA9PiB7XG4gIC8vIGl0J3MgYSBqUXVlcnkgb2JqZWN0IG9yIGEgbm9kZSBlbGVtZW50XG4gIGlmIChpc0VsZW1lbnQob2JqZWN0KSkge1xuICAgIHJldHVybiBvYmplY3QuanF1ZXJ5ID8gb2JqZWN0WzBdIDogb2JqZWN0XG4gIH1cblxuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3N0cmluZycgJiYgb2JqZWN0Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJzZVNlbGVjdG9yKG9iamVjdCkpXG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBpc1Zpc2libGUgPSBlbGVtZW50ID0+IHtcbiAgaWYgKCFpc0VsZW1lbnQoZWxlbWVudCkgfHwgZWxlbWVudC5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudElzVmlzaWJsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgndmlzaWJpbGl0eScpID09PSAndmlzaWJsZSdcbiAgLy8gSGFuZGxlIGBkZXRhaWxzYCBlbGVtZW50IGFzIGl0cyBjb250ZW50IG1heSBmYWxzaWUgYXBwZWFyIHZpc2libGUgd2hlbiBpdCBpcyBjbG9zZWRcbiAgY29uc3QgY2xvc2VkRGV0YWlscyA9IGVsZW1lbnQuY2xvc2VzdCgnZGV0YWlsczpub3QoW29wZW5dKScpXG5cbiAgaWYgKCFjbG9zZWREZXRhaWxzKSB7XG4gICAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGVcbiAgfVxuXG4gIGlmIChjbG9zZWREZXRhaWxzICE9PSBlbGVtZW50KSB7XG4gICAgY29uc3Qgc3VtbWFyeSA9IGVsZW1lbnQuY2xvc2VzdCgnc3VtbWFyeScpXG4gICAgaWYgKHN1bW1hcnkgJiYgc3VtbWFyeS5wYXJlbnROb2RlICE9PSBjbG9zZWREZXRhaWxzKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAoc3VtbWFyeSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnRJc1Zpc2libGVcbn1cblxuY29uc3QgaXNEaXNhYmxlZCA9IGVsZW1lbnQgPT4ge1xuICBpZiAoIWVsZW1lbnQgfHwgZWxlbWVudC5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgZWxlbWVudC5kaXNhYmxlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZWxlbWVudC5kaXNhYmxlZFxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpICYmIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSAnZmFsc2UnXG59XG5cbmNvbnN0IGZpbmRTaGFkb3dSb290ID0gZWxlbWVudCA9PiB7XG4gIGlmICghZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmF0dGFjaFNoYWRvdykge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBDYW4gZmluZCB0aGUgc2hhZG93IHJvb3Qgb3RoZXJ3aXNlIGl0J2xsIHJldHVybiB0aGUgZG9jdW1lbnRcbiAgaWYgKHR5cGVvZiBlbGVtZW50LmdldFJvb3ROb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc3Qgcm9vdCA9IGVsZW1lbnQuZ2V0Um9vdE5vZGUoKVxuICAgIHJldHVybiByb290IGluc3RhbmNlb2YgU2hhZG93Um9vdCA/IHJvb3QgOiBudWxsXG4gIH1cblxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgLy8gd2hlbiB3ZSBkb24ndCBmaW5kIGEgc2hhZG93IHJvb3RcbiAgaWYgKCFlbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGZpbmRTaGFkb3dSb290KGVsZW1lbnQucGFyZW50Tm9kZSlcbn1cblxuY29uc3Qgbm9vcCA9ICgpID0+IHt9XG5cbi8qKlxuICogVHJpY2sgdG8gcmVzdGFydCBhbiBlbGVtZW50J3MgYW5pbWF0aW9uXG4gKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybiB2b2lkXG4gKlxuICogQHNlZSBodHRwczovL3d3dy5jaGFyaXN0aGVvLmlvL2Jsb2cvMjAyMS8wMi9yZXN0YXJ0LWEtY3NzLWFuaW1hdGlvbi13aXRoLWphdmFzY3JpcHQvI3Jlc3RhcnRpbmctYS1jc3MtYW5pbWF0aW9uXG4gKi9cbmNvbnN0IHJlZmxvdyA9IGVsZW1lbnQgPT4ge1xuICBlbGVtZW50Lm9mZnNldEhlaWdodCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xufVxuXG5jb25zdCBnZXRqUXVlcnkgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cualF1ZXJ5ICYmICFkb2N1bWVudC5ib2R5Lmhhc0F0dHJpYnV0ZSgnZGF0YS1icy1uby1qcXVlcnknKSkge1xuICAgIHJldHVybiB3aW5kb3cualF1ZXJ5XG4gIH1cblxuICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCBET01Db250ZW50TG9hZGVkQ2FsbGJhY2tzID0gW11cblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkID0gY2FsbGJhY2sgPT4ge1xuICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgLy8gYWRkIGxpc3RlbmVyIG9uIHRoZSBmaXJzdCBjYWxsIHdoZW4gdGhlIGRvY3VtZW50IGlzIGluIGxvYWRpbmcgc3RhdGVcbiAgICBpZiAoIURPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGNhbGxiYWNrIG9mIERPTUNvbnRlbnRMb2FkZWRDYWxsYmFja3MpIHtcbiAgICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgRE9NQ29udGVudExvYWRlZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKVxuICB9IGVsc2Uge1xuICAgIGNhbGxiYWNrKClcbiAgfVxufVxuXG5jb25zdCBpc1JUTCA9ICgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kaXIgPT09ICdydGwnXG5cbmNvbnN0IGRlZmluZUpRdWVyeVBsdWdpbiA9IHBsdWdpbiA9PiB7XG4gIG9uRE9NQ29udGVudExvYWRlZCgoKSA9PiB7XG4gICAgY29uc3QgJCA9IGdldGpRdWVyeSgpXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKCQpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwbHVnaW4uTkFNRVxuICAgICAgY29uc3QgSlFVRVJZX05PX0NPTkZMSUNUID0gJC5mbltuYW1lXVxuICAgICAgJC5mbltuYW1lXSA9IHBsdWdpbi5qUXVlcnlJbnRlcmZhY2VcbiAgICAgICQuZm5bbmFtZV0uQ29uc3RydWN0b3IgPSBwbHVnaW5cbiAgICAgICQuZm5bbmFtZV0ubm9Db25mbGljdCA9ICgpID0+IHtcbiAgICAgICAgJC5mbltuYW1lXSA9IEpRVUVSWV9OT19DT05GTElDVFxuICAgICAgICByZXR1cm4gcGx1Z2luLmpRdWVyeUludGVyZmFjZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgZXhlY3V0ZSA9IChwb3NzaWJsZUNhbGxiYWNrLCBhcmdzID0gW10sIGRlZmF1bHRWYWx1ZSA9IHBvc3NpYmxlQ2FsbGJhY2spID0+IHtcbiAgcmV0dXJuIHR5cGVvZiBwb3NzaWJsZUNhbGxiYWNrID09PSAnZnVuY3Rpb24nID8gcG9zc2libGVDYWxsYmFjayguLi5hcmdzKSA6IGRlZmF1bHRWYWx1ZVxufVxuXG5jb25zdCBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uID0gKGNhbGxiYWNrLCB0cmFuc2l0aW9uRWxlbWVudCwgd2FpdEZvclRyYW5zaXRpb24gPSB0cnVlKSA9PiB7XG4gIGlmICghd2FpdEZvclRyYW5zaXRpb24pIHtcbiAgICBleGVjdXRlKGNhbGxiYWNrKVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZHVyYXRpb25QYWRkaW5nID0gNVxuICBjb25zdCBlbXVsYXRlZER1cmF0aW9uID0gZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQodHJhbnNpdGlvbkVsZW1lbnQpICsgZHVyYXRpb25QYWRkaW5nXG5cbiAgbGV0IGNhbGxlZCA9IGZhbHNlXG5cbiAgY29uc3QgaGFuZGxlciA9ICh7IHRhcmdldCB9KSA9PiB7XG4gICAgaWYgKHRhcmdldCAhPT0gdHJhbnNpdGlvbkVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNhbGxlZCA9IHRydWVcbiAgICB0cmFuc2l0aW9uRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gIH1cblxuICB0cmFuc2l0aW9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFRSQU5TSVRJT05fRU5ELCBoYW5kbGVyKVxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoIWNhbGxlZCkge1xuICAgICAgdHJpZ2dlclRyYW5zaXRpb25FbmQodHJhbnNpdGlvbkVsZW1lbnQpXG4gICAgfVxuICB9LCBlbXVsYXRlZER1cmF0aW9uKVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgcHJldmlvdXMvbmV4dCBlbGVtZW50IG9mIGEgbGlzdC5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSBsaXN0ICAgIFRoZSBsaXN0IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0gYWN0aXZlRWxlbWVudCAgIFRoZSBhY3RpdmUgZWxlbWVudFxuICogQHBhcmFtIHNob3VsZEdldE5leHQgICBDaG9vc2UgdG8gZ2V0IG5leHQgb3IgcHJldmlvdXMgZWxlbWVudFxuICogQHBhcmFtIGlzQ3ljbGVBbGxvd2VkXG4gKiBAcmV0dXJuIHtFbGVtZW50fGVsZW19IFRoZSBwcm9wZXIgZWxlbWVudFxuICovXG5jb25zdCBnZXROZXh0QWN0aXZlRWxlbWVudCA9IChsaXN0LCBhY3RpdmVFbGVtZW50LCBzaG91bGRHZXROZXh0LCBpc0N5Y2xlQWxsb3dlZCkgPT4ge1xuICBjb25zdCBsaXN0TGVuZ3RoID0gbGlzdC5sZW5ndGhcbiAgbGV0IGluZGV4ID0gbGlzdC5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpXG5cbiAgLy8gaWYgdGhlIGVsZW1lbnQgZG9lcyBub3QgZXhpc3QgaW4gdGhlIGxpc3QgcmV0dXJuIGFuIGVsZW1lbnRcbiAgLy8gZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb24gYW5kIGlmIGN5Y2xlIGlzIGFsbG93ZWRcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIHJldHVybiAhc2hvdWxkR2V0TmV4dCAmJiBpc0N5Y2xlQWxsb3dlZCA/IGxpc3RbbGlzdExlbmd0aCAtIDFdIDogbGlzdFswXVxuICB9XG5cbiAgaW5kZXggKz0gc2hvdWxkR2V0TmV4dCA/IDEgOiAtMVxuXG4gIGlmIChpc0N5Y2xlQWxsb3dlZCkge1xuICAgIGluZGV4ID0gKGluZGV4ICsgbGlzdExlbmd0aCkgJSBsaXN0TGVuZ3RoXG4gIH1cblxuICByZXR1cm4gbGlzdFtNYXRoLm1heCgwLCBNYXRoLm1pbihpbmRleCwgbGlzdExlbmd0aCAtIDEpKV1cbn1cblxuZXhwb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBleGVjdXRlLFxuICBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLFxuICBmaW5kU2hhZG93Um9vdCxcbiAgZ2V0RWxlbWVudCxcbiAgZ2V0alF1ZXJ5LFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgZ2V0VHJhbnNpdGlvbkR1cmF0aW9uRnJvbUVsZW1lbnQsXG4gIGdldFVJRCxcbiAgaXNEaXNhYmxlZCxcbiAgaXNFbGVtZW50LFxuICBpc1JUTCxcbiAgaXNWaXNpYmxlLFxuICBub29wLFxuICBvbkRPTUNvbnRlbnRMb2FkZWQsXG4gIHBhcnNlU2VsZWN0b3IsXG4gIHJlZmxvdyxcbiAgdHJpZ2dlclRyYW5zaXRpb25FbmQsXG4gIHRvVHlwZVxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vZXZlbnQtaGFuZGxlci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCB7IGdldGpRdWVyeSB9IGZyb20gJy4uL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgbmFtZXNwYWNlUmVnZXggPSAvW14uXSooPz1cXC4uKilcXC58LiovXG5jb25zdCBzdHJpcE5hbWVSZWdleCA9IC9cXC4uKi9cbmNvbnN0IHN0cmlwVWlkUmVnZXggPSAvOjpcXGQrJC9cbmNvbnN0IGV2ZW50UmVnaXN0cnkgPSB7fSAvLyBFdmVudHMgc3RvcmFnZVxubGV0IHVpZEV2ZW50ID0gMVxuY29uc3QgY3VzdG9tRXZlbnRzID0ge1xuICBtb3VzZWVudGVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VsZWF2ZTogJ21vdXNlb3V0J1xufVxuXG5jb25zdCBuYXRpdmVFdmVudHMgPSBuZXcgU2V0KFtcbiAgJ2NsaWNrJyxcbiAgJ2RibGNsaWNrJyxcbiAgJ21vdXNldXAnLFxuICAnbW91c2Vkb3duJyxcbiAgJ2NvbnRleHRtZW51JyxcbiAgJ21vdXNld2hlZWwnLFxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAnbW91c2VvdmVyJyxcbiAgJ21vdXNlb3V0JyxcbiAgJ21vdXNlbW92ZScsXG4gICdzZWxlY3RzdGFydCcsXG4gICdzZWxlY3RlbmQnLFxuICAna2V5ZG93bicsXG4gICdrZXlwcmVzcycsXG4gICdrZXl1cCcsXG4gICdvcmllbnRhdGlvbmNoYW5nZScsXG4gICd0b3VjaHN0YXJ0JyxcbiAgJ3RvdWNobW92ZScsXG4gICd0b3VjaGVuZCcsXG4gICd0b3VjaGNhbmNlbCcsXG4gICdwb2ludGVyZG93bicsXG4gICdwb2ludGVybW92ZScsXG4gICdwb2ludGVydXAnLFxuICAncG9pbnRlcmxlYXZlJyxcbiAgJ3BvaW50ZXJjYW5jZWwnLFxuICAnZ2VzdHVyZXN0YXJ0JyxcbiAgJ2dlc3R1cmVjaGFuZ2UnLFxuICAnZ2VzdHVyZWVuZCcsXG4gICdmb2N1cycsXG4gICdibHVyJyxcbiAgJ2NoYW5nZScsXG4gICdyZXNldCcsXG4gICdzZWxlY3QnLFxuICAnc3VibWl0JyxcbiAgJ2ZvY3VzaW4nLFxuICAnZm9jdXNvdXQnLFxuICAnbG9hZCcsXG4gICd1bmxvYWQnLFxuICAnYmVmb3JldW5sb2FkJyxcbiAgJ3Jlc2l6ZScsXG4gICdtb3ZlJyxcbiAgJ0RPTUNvbnRlbnRMb2FkZWQnLFxuICAncmVhZHlzdGF0ZWNoYW5nZScsXG4gICdlcnJvcicsXG4gICdhYm9ydCcsXG4gICdzY3JvbGwnXG5dKVxuXG4vKipcbiAqIFByaXZhdGUgbWV0aG9kc1xuICovXG5cbmZ1bmN0aW9uIG1ha2VFdmVudFVpZChlbGVtZW50LCB1aWQpIHtcbiAgcmV0dXJuICh1aWQgJiYgYCR7dWlkfTo6JHt1aWRFdmVudCsrfWApIHx8IGVsZW1lbnQudWlkRXZlbnQgfHwgdWlkRXZlbnQrK1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50RXZlbnRzKGVsZW1lbnQpIHtcbiAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGVsZW1lbnQpXG5cbiAgZWxlbWVudC51aWRFdmVudCA9IHVpZFxuICBldmVudFJlZ2lzdHJ5W3VpZF0gPSBldmVudFJlZ2lzdHJ5W3VpZF0gfHwge31cblxuICByZXR1cm4gZXZlbnRSZWdpc3RyeVt1aWRdXG59XG5cbmZ1bmN0aW9uIGJvb3RzdHJhcEhhbmRsZXIoZWxlbWVudCwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpIHtcbiAgICBoeWRyYXRlT2JqKGV2ZW50LCB7IGRlbGVnYXRlVGFyZ2V0OiBlbGVtZW50IH0pXG5cbiAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vZmYoZWxlbWVudCwgZXZlbnQudHlwZSwgZm4pXG4gICAgfVxuXG4gICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIFtldmVudF0pXG4gIH1cbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwRGVsZWdhdGlvbkhhbmRsZXIoZWxlbWVudCwgc2VsZWN0b3IsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZG9tRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG5cbiAgICBmb3IgKGxldCB7IHRhcmdldCB9ID0gZXZlbnQ7IHRhcmdldCAmJiB0YXJnZXQgIT09IHRoaXM7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICBmb3IgKGNvbnN0IGRvbUVsZW1lbnQgb2YgZG9tRWxlbWVudHMpIHtcbiAgICAgICAgaWYgKGRvbUVsZW1lbnQgIT09IHRhcmdldCkge1xuICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIH1cblxuICAgICAgICBoeWRyYXRlT2JqKGV2ZW50LCB7IGRlbGVnYXRlVGFyZ2V0OiB0YXJnZXQgfSlcblxuICAgICAgICBpZiAoaGFuZGxlci5vbmVPZmYpIHtcbiAgICAgICAgICBFdmVudEhhbmRsZXIub2ZmKGVsZW1lbnQsIGV2ZW50LnR5cGUsIHNlbGVjdG9yLCBmbilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh0YXJnZXQsIFtldmVudF0pXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRIYW5kbGVyKGV2ZW50cywgY2FsbGFibGUsIGRlbGVnYXRpb25TZWxlY3RvciA9IG51bGwpIHtcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoZXZlbnRzKVxuICAgIC5maW5kKGV2ZW50ID0+IGV2ZW50LmNhbGxhYmxlID09PSBjYWxsYWJsZSAmJiBldmVudC5kZWxlZ2F0aW9uU2VsZWN0b3IgPT09IGRlbGVnYXRpb25TZWxlY3Rvcilcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gIGNvbnN0IGlzRGVsZWdhdGVkID0gdHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnXG4gIC8vIFRPRE86IHRvb2x0aXAgcGFzc2VzIGBmYWxzZWAgaW5zdGVhZCBvZiBzZWxlY3Rvciwgc28gd2UgbmVlZCB0byBjaGVja1xuICBjb25zdCBjYWxsYWJsZSA9IGlzRGVsZWdhdGVkID8gZGVsZWdhdGlvbkZ1bmN0aW9uIDogKGhhbmRsZXIgfHwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuICBsZXQgdHlwZUV2ZW50ID0gZ2V0VHlwZUV2ZW50KG9yaWdpbmFsVHlwZUV2ZW50KVxuXG4gIGlmICghbmF0aXZlRXZlbnRzLmhhcyh0eXBlRXZlbnQpKSB7XG4gICAgdHlwZUV2ZW50ID0gb3JpZ2luYWxUeXBlRXZlbnRcbiAgfVxuXG4gIHJldHVybiBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdXG59XG5cbmZ1bmN0aW9uIGFkZEhhbmRsZXIoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgb25lT2ZmKSB7XG4gIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBsZXQgW2lzRGVsZWdhdGVkLCBjYWxsYWJsZSwgdHlwZUV2ZW50XSA9IG5vcm1hbGl6ZVBhcmFtZXRlcnMob3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbilcblxuICAvLyBpbiBjYXNlIG9mIG1vdXNlZW50ZXIgb3IgbW91c2VsZWF2ZSB3cmFwIHRoZSBoYW5kbGVyIHdpdGhpbiBhIGZ1bmN0aW9uIHRoYXQgY2hlY2tzIGZvciBpdHMgRE9NIHBvc2l0aW9uXG4gIC8vIHRoaXMgcHJldmVudHMgdGhlIGhhbmRsZXIgZnJvbSBiZWluZyBkaXNwYXRjaGVkIHRoZSBzYW1lIHdheSBhcyBtb3VzZW92ZXIgb3IgbW91c2VvdXQgZG9lc1xuICBpZiAob3JpZ2luYWxUeXBlRXZlbnQgaW4gY3VzdG9tRXZlbnRzKSB7XG4gICAgY29uc3Qgd3JhcEZ1bmN0aW9uID0gZm4gPT4ge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoIWV2ZW50LnJlbGF0ZWRUYXJnZXQgfHwgKGV2ZW50LnJlbGF0ZWRUYXJnZXQgIT09IGV2ZW50LmRlbGVnYXRlVGFyZ2V0ICYmICFldmVudC5kZWxlZ2F0ZVRhcmdldC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkpIHtcbiAgICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhbGxhYmxlID0gd3JhcEZ1bmN0aW9uKGNhbGxhYmxlKVxuICB9XG5cbiAgY29uc3QgZXZlbnRzID0gZ2V0RWxlbWVudEV2ZW50cyhlbGVtZW50KVxuICBjb25zdCBoYW5kbGVycyA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IChldmVudHNbdHlwZUV2ZW50XSA9IHt9KVxuICBjb25zdCBwcmV2aW91c0Z1bmN0aW9uID0gZmluZEhhbmRsZXIoaGFuZGxlcnMsIGNhbGxhYmxlLCBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsKVxuXG4gIGlmIChwcmV2aW91c0Z1bmN0aW9uKSB7XG4gICAgcHJldmlvdXNGdW5jdGlvbi5vbmVPZmYgPSBwcmV2aW91c0Z1bmN0aW9uLm9uZU9mZiAmJiBvbmVPZmZcblxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgdWlkID0gbWFrZUV2ZW50VWlkKGNhbGxhYmxlLCBvcmlnaW5hbFR5cGVFdmVudC5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpXG4gIGNvbnN0IGZuID0gaXNEZWxlZ2F0ZWQgP1xuICAgIGJvb3RzdHJhcERlbGVnYXRpb25IYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGNhbGxhYmxlKSA6XG4gICAgYm9vdHN0cmFwSGFuZGxlcihlbGVtZW50LCBjYWxsYWJsZSlcblxuICBmbi5kZWxlZ2F0aW9uU2VsZWN0b3IgPSBpc0RlbGVnYXRlZCA/IGhhbmRsZXIgOiBudWxsXG4gIGZuLmNhbGxhYmxlID0gY2FsbGFibGVcbiAgZm4ub25lT2ZmID0gb25lT2ZmXG4gIGZuLnVpZEV2ZW50ID0gdWlkXG4gIGhhbmRsZXJzW3VpZF0gPSBmblxuXG4gIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlRXZlbnQsIGZuLCBpc0RlbGVnYXRlZClcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvblNlbGVjdG9yKSB7XG4gIGNvbnN0IGZuID0gZmluZEhhbmRsZXIoZXZlbnRzW3R5cGVFdmVudF0sIGhhbmRsZXIsIGRlbGVnYXRpb25TZWxlY3RvcilcblxuICBpZiAoIWZuKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodHlwZUV2ZW50LCBmbiwgQm9vbGVhbihkZWxlZ2F0aW9uU2VsZWN0b3IpKVxuICBkZWxldGUgZXZlbnRzW3R5cGVFdmVudF1bZm4udWlkRXZlbnRdXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU5hbWVzcGFjZWRIYW5kbGVycyhlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgbmFtZXNwYWNlKSB7XG4gIGNvbnN0IHN0b3JlRWxlbWVudEV2ZW50ID0gZXZlbnRzW3R5cGVFdmVudF0gfHwge31cblxuICBmb3IgKGNvbnN0IFtoYW5kbGVyS2V5LCBldmVudF0gb2YgT2JqZWN0LmVudHJpZXMoc3RvcmVFbGVtZW50RXZlbnQpKSB7XG4gICAgaWYgKGhhbmRsZXJLZXkuaW5jbHVkZXMobmFtZXNwYWNlKSkge1xuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VHlwZUV2ZW50KGV2ZW50KSB7XG4gIC8vIGFsbG93IHRvIGdldCB0aGUgbmF0aXZlIGV2ZW50cyBmcm9tIG5hbWVzcGFjZWQgZXZlbnRzICgnY2xpY2suYnMuYnV0dG9uJyAtLT4gJ2NsaWNrJylcbiAgZXZlbnQgPSBldmVudC5yZXBsYWNlKHN0cmlwTmFtZVJlZ2V4LCAnJylcbiAgcmV0dXJuIGN1c3RvbUV2ZW50c1tldmVudF0gfHwgZXZlbnRcbn1cblxuY29uc3QgRXZlbnRIYW5kbGVyID0ge1xuICBvbihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKSB7XG4gICAgYWRkSGFuZGxlcihlbGVtZW50LCBldmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uLCBmYWxzZSlcbiAgfSxcblxuICBvbmUoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGFkZEhhbmRsZXIoZWxlbWVudCwgZXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbiwgdHJ1ZSlcbiAgfSxcblxuICBvZmYoZWxlbWVudCwgb3JpZ2luYWxUeXBlRXZlbnQsIGhhbmRsZXIsIGRlbGVnYXRpb25GdW5jdGlvbikge1xuICAgIGlmICh0eXBlb2Ygb3JpZ2luYWxUeXBlRXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBbaXNEZWxlZ2F0ZWQsIGNhbGxhYmxlLCB0eXBlRXZlbnRdID0gbm9ybWFsaXplUGFyYW1ldGVycyhvcmlnaW5hbFR5cGVFdmVudCwgaGFuZGxlciwgZGVsZWdhdGlvbkZ1bmN0aW9uKVxuICAgIGNvbnN0IGluTmFtZXNwYWNlID0gdHlwZUV2ZW50ICE9PSBvcmlnaW5hbFR5cGVFdmVudFxuICAgIGNvbnN0IGV2ZW50cyA9IGdldEVsZW1lbnRFdmVudHMoZWxlbWVudClcbiAgICBjb25zdCBzdG9yZUVsZW1lbnRFdmVudCA9IGV2ZW50c1t0eXBlRXZlbnRdIHx8IHt9XG4gICAgY29uc3QgaXNOYW1lc3BhY2UgPSBvcmlnaW5hbFR5cGVFdmVudC5zdGFydHNXaXRoKCcuJylcblxuICAgIGlmICh0eXBlb2YgY2FsbGFibGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBTaW1wbGVzdCBjYXNlOiBoYW5kbGVyIGlzIHBhc3NlZCwgcmVtb3ZlIHRoYXQgbGlzdGVuZXIgT05MWS5cbiAgICAgIGlmICghT2JqZWN0LmtleXMoc3RvcmVFbGVtZW50RXZlbnQpLmxlbmd0aCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgY2FsbGFibGUsIGlzRGVsZWdhdGVkID8gaGFuZGxlciA6IG51bGwpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoaXNOYW1lc3BhY2UpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudEV2ZW50IG9mIE9iamVjdC5rZXlzKGV2ZW50cykpIHtcbiAgICAgICAgcmVtb3ZlTmFtZXNwYWNlZEhhbmRsZXJzKGVsZW1lbnQsIGV2ZW50cywgZWxlbWVudEV2ZW50LCBvcmlnaW5hbFR5cGVFdmVudC5zbGljZSgxKSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtrZXlIYW5kbGVycywgZXZlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHN0b3JlRWxlbWVudEV2ZW50KSkge1xuICAgICAgY29uc3QgaGFuZGxlcktleSA9IGtleUhhbmRsZXJzLnJlcGxhY2Uoc3RyaXBVaWRSZWdleCwgJycpXG5cbiAgICAgIGlmICghaW5OYW1lc3BhY2UgfHwgb3JpZ2luYWxUeXBlRXZlbnQuaW5jbHVkZXMoaGFuZGxlcktleSkpIHtcbiAgICAgICAgcmVtb3ZlSGFuZGxlcihlbGVtZW50LCBldmVudHMsIHR5cGVFdmVudCwgZXZlbnQuY2FsbGFibGUsIGV2ZW50LmRlbGVnYXRpb25TZWxlY3RvcilcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdHJpZ2dlcihlbGVtZW50LCBldmVudCwgYXJncykge1xuICAgIGlmICh0eXBlb2YgZXZlbnQgIT09ICdzdHJpbmcnIHx8ICFlbGVtZW50KSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIGNvbnN0ICQgPSBnZXRqUXVlcnkoKVxuICAgIGNvbnN0IHR5cGVFdmVudCA9IGdldFR5cGVFdmVudChldmVudClcbiAgICBjb25zdCBpbk5hbWVzcGFjZSA9IGV2ZW50ICE9PSB0eXBlRXZlbnRcblxuICAgIGxldCBqUXVlcnlFdmVudCA9IG51bGxcbiAgICBsZXQgYnViYmxlcyA9IHRydWVcbiAgICBsZXQgbmF0aXZlRGlzcGF0Y2ggPSB0cnVlXG4gICAgbGV0IGRlZmF1bHRQcmV2ZW50ZWQgPSBmYWxzZVxuXG4gICAgaWYgKGluTmFtZXNwYWNlICYmICQpIHtcbiAgICAgIGpRdWVyeUV2ZW50ID0gJC5FdmVudChldmVudCwgYXJncylcblxuICAgICAgJChlbGVtZW50KS50cmlnZ2VyKGpRdWVyeUV2ZW50KVxuICAgICAgYnViYmxlcyA9ICFqUXVlcnlFdmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBuYXRpdmVEaXNwYXRjaCA9ICFqUXVlcnlFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICBkZWZhdWx0UHJldmVudGVkID0galF1ZXJ5RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKClcbiAgICB9XG5cbiAgICBjb25zdCBldnQgPSBoeWRyYXRlT2JqKG5ldyBFdmVudChldmVudCwgeyBidWJibGVzLCBjYW5jZWxhYmxlOiB0cnVlIH0pLCBhcmdzKVxuXG4gICAgaWYgKGRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKG5hdGl2ZURpc3BhdGNoKSB7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgIH1cblxuICAgIGlmIChldnQuZGVmYXVsdFByZXZlbnRlZCAmJiBqUXVlcnlFdmVudCkge1xuICAgICAgalF1ZXJ5RXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIH1cblxuICAgIHJldHVybiBldnRcbiAgfVxufVxuXG5mdW5jdGlvbiBoeWRyYXRlT2JqKG9iaiwgbWV0YSA9IHt9KSB7XG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKG1ldGEpKSB7XG4gICAgdHJ5IHtcbiAgICAgIG9ialtrZXldID0gdmFsdWVcbiAgICB9IGNhdGNoIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50SGFuZGxlclxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBkb20vbWFuaXB1bGF0b3IuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5mdW5jdGlvbiBub3JtYWxpemVEYXRhKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gJ3RydWUnKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gJ2ZhbHNlJykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSBOdW1iZXIodmFsdWUpLnRvU3RyaW5nKCkpIHtcbiAgICByZXR1cm4gTnVtYmVyKHZhbHVlKVxuICB9XG5cbiAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ251bGwnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZURhdGFLZXkoa2V5KSB7XG4gIHJldHVybiBrZXkucmVwbGFjZSgvW0EtWl0vZywgY2hyID0+IGAtJHtjaHIudG9Mb3dlckNhc2UoKX1gKVxufVxuXG5jb25zdCBNYW5pcHVsYXRvciA9IHtcbiAgc2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXksIHZhbHVlKSB7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYGRhdGEtYnMtJHtub3JtYWxpemVEYXRhS2V5KGtleSl9YCwgdmFsdWUpXG4gIH0sXG5cbiAgcmVtb3ZlRGF0YUF0dHJpYnV0ZShlbGVtZW50LCBrZXkpIHtcbiAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShgZGF0YS1icy0ke25vcm1hbGl6ZURhdGFLZXkoa2V5KX1gKVxuICB9LFxuXG4gIGdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIHtcbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVybiB7fVxuICAgIH1cblxuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB7fVxuICAgIGNvbnN0IGJzS2V5cyA9IE9iamVjdC5rZXlzKGVsZW1lbnQuZGF0YXNldCkuZmlsdGVyKGtleSA9PiBrZXkuc3RhcnRzV2l0aCgnYnMnKSAmJiAha2V5LnN0YXJ0c1dpdGgoJ2JzQ29uZmlnJykpXG5cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBic0tleXMpIHtcbiAgICAgIGxldCBwdXJlS2V5ID0ga2V5LnJlcGxhY2UoL15icy8sICcnKVxuICAgICAgcHVyZUtleSA9IHB1cmVLZXkuY2hhckF0KDApLnRvTG93ZXJDYXNlKCkgKyBwdXJlS2V5LnNsaWNlKDEsIHB1cmVLZXkubGVuZ3RoKVxuICAgICAgYXR0cmlidXRlc1twdXJlS2V5XSA9IG5vcm1hbGl6ZURhdGEoZWxlbWVudC5kYXRhc2V0W2tleV0pXG4gICAgfVxuXG4gICAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgfSxcblxuICBnZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIGtleSkge1xuICAgIHJldHVybiBub3JtYWxpemVEYXRhKGVsZW1lbnQuZ2V0QXR0cmlidXRlKGBkYXRhLWJzLSR7bm9ybWFsaXplRGF0YUtleShrZXkpfWApKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hbmlwdWxhdG9yXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvY29uZmlnLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IE1hbmlwdWxhdG9yIGZyb20gJy4uL2RvbS9tYW5pcHVsYXRvci5qcydcbmltcG9ydCB7IGlzRWxlbWVudCwgdG9UeXBlIH0gZnJvbSAnLi9pbmRleC5qcydcblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ29uZmlnIHtcbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIHt9XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gaW1wbGVtZW50IHRoZSBzdGF0aWMgbWV0aG9kIFwiTkFNRVwiLCBmb3IgZWFjaCBjb21wb25lbnQhJylcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnKVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21lcmdlQ29uZmlnT2JqKGNvbmZpZywgZWxlbWVudCkge1xuICAgIGNvbnN0IGpzb25Db25maWcgPSBpc0VsZW1lbnQoZWxlbWVudCkgPyBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsICdjb25maWcnKSA6IHt9IC8vIHRyeSB0byBwYXJzZVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMuY29uc3RydWN0b3IuRGVmYXVsdCxcbiAgICAgIC4uLih0eXBlb2YganNvbkNvbmZpZyA9PT0gJ29iamVjdCcgPyBqc29uQ29uZmlnIDoge30pLFxuICAgICAgLi4uKGlzRWxlbWVudChlbGVtZW50KSA/IE1hbmlwdWxhdG9yLmdldERhdGFBdHRyaWJ1dGVzKGVsZW1lbnQpIDoge30pLFxuICAgICAgLi4uKHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDoge30pXG4gICAgfVxuICB9XG5cbiAgX3R5cGVDaGVja0NvbmZpZyhjb25maWcsIGNvbmZpZ1R5cGVzID0gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0VHlwZSkge1xuICAgIGZvciAoY29uc3QgW3Byb3BlcnR5LCBleHBlY3RlZFR5cGVzXSBvZiBPYmplY3QuZW50cmllcyhjb25maWdUeXBlcykpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29uZmlnW3Byb3BlcnR5XVxuICAgICAgY29uc3QgdmFsdWVUeXBlID0gaXNFbGVtZW50KHZhbHVlKSA/ICdlbGVtZW50JyA6IHRvVHlwZSh2YWx1ZSlcblxuICAgICAgaWYgKCFuZXcgUmVnRXhwKGV4cGVjdGVkVHlwZXMpLnRlc3QodmFsdWVUeXBlKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIGAke3RoaXMuY29uc3RydWN0b3IuTkFNRS50b1VwcGVyQ2FzZSgpfTogT3B0aW9uIFwiJHtwcm9wZXJ0eX1cIiBwcm92aWRlZCB0eXBlIFwiJHt2YWx1ZVR5cGV9XCIgYnV0IGV4cGVjdGVkIHR5cGUgXCIke2V4cGVjdGVkVHlwZXN9XCIuYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZ1xuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBiYXNlLWNvbXBvbmVudC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBEYXRhIGZyb20gJy4vZG9tL2RhdGEuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vdXRpbC9jb25maWcuanMnXG5pbXBvcnQgeyBleGVjdXRlQWZ0ZXJUcmFuc2l0aW9uLCBnZXRFbGVtZW50IH0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IFZFUlNJT04gPSAnNS4zLjMnXG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIEJhc2VDb21wb25lbnQgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG5cbiAgICBlbGVtZW50ID0gZ2V0RWxlbWVudChlbGVtZW50KVxuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuXG4gICAgRGF0YS5zZXQodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5EQVRBX0tFWSwgdGhpcylcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBkaXNwb3NlKCkge1xuICAgIERhdGEucmVtb3ZlKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuREFUQV9LRVkpXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCB0aGlzLmNvbnN0cnVjdG9yLkVWRU5UX0tFWSlcblxuICAgIGZvciAoY29uc3QgcHJvcGVydHlOYW1lIG9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMpKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5TmFtZV0gPSBudWxsXG4gICAgfVxuICB9XG5cbiAgX3F1ZXVlQ2FsbGJhY2soY2FsbGJhY2ssIGVsZW1lbnQsIGlzQW5pbWF0ZWQgPSB0cnVlKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgZWxlbWVudCwgaXNBbmltYXRlZClcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uZmlnID0gdGhpcy5fbWVyZ2VDb25maWdPYmooY29uZmlnLCB0aGlzLl9lbGVtZW50KVxuICAgIGNvbmZpZyA9IHRoaXMuX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKVxuICAgIHRoaXMuX3R5cGVDaGVja0NvbmZpZyhjb25maWcpXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBnZXRJbnN0YW5jZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIERhdGEuZ2V0KGdldEVsZW1lbnQoZWxlbWVudCksIHRoaXMuREFUQV9LRVkpXG4gIH1cblxuICBzdGF0aWMgZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCBjb25maWcgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKGVsZW1lbnQpIHx8IG5ldyB0aGlzKGVsZW1lbnQsIHR5cGVvZiBjb25maWcgPT09ICdvYmplY3QnID8gY29uZmlnIDogbnVsbClcbiAgfVxuXG4gIHN0YXRpYyBnZXQgVkVSU0lPTigpIHtcbiAgICByZXR1cm4gVkVSU0lPTlxuICB9XG5cbiAgc3RhdGljIGdldCBEQVRBX0tFWSgpIHtcbiAgICByZXR1cm4gYGJzLiR7dGhpcy5OQU1FfWBcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRVZFTlRfS0VZKCkge1xuICAgIHJldHVybiBgLiR7dGhpcy5EQVRBX0tFWX1gXG4gIH1cblxuICBzdGF0aWMgZXZlbnROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gYCR7bmFtZX0ke3RoaXMuRVZFTlRfS0VZfWBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlQ29tcG9uZW50XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGRvbS9zZWxlY3Rvci1lbmdpbmUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgeyBpc0Rpc2FibGVkLCBpc1Zpc2libGUsIHBhcnNlU2VsZWN0b3IgfSBmcm9tICcuLi91dGlsL2luZGV4LmpzJ1xuXG5jb25zdCBnZXRTZWxlY3RvciA9IGVsZW1lbnQgPT4ge1xuICBsZXQgc2VsZWN0b3IgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy10YXJnZXQnKVxuXG4gIGlmICghc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09ICcjJykge1xuICAgIGxldCBocmVmQXR0cmlidXRlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuXG4gICAgLy8gVGhlIG9ubHkgdmFsaWQgY29udGVudCB0aGF0IGNvdWxkIGRvdWJsZSBhcyBhIHNlbGVjdG9yIGFyZSBJRHMgb3IgY2xhc3NlcyxcbiAgICAvLyBzbyBldmVyeXRoaW5nIHN0YXJ0aW5nIHdpdGggYCNgIG9yIGAuYC4gSWYgYSBcInJlYWxcIiBVUkwgaXMgdXNlZCBhcyB0aGUgc2VsZWN0b3IsXG4gICAgLy8gYGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JgIHdpbGwgcmlnaHRmdWxseSBjb21wbGFpbiBpdCBpcyBpbnZhbGlkLlxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzMyMjczXG4gICAgaWYgKCFocmVmQXR0cmlidXRlIHx8ICghaHJlZkF0dHJpYnV0ZS5pbmNsdWRlcygnIycpICYmICFocmVmQXR0cmlidXRlLnN0YXJ0c1dpdGgoJy4nKSkpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgLy8gSnVzdCBpbiBjYXNlIHNvbWUgQ01TIHB1dHMgb3V0IGEgZnVsbCBVUkwgd2l0aCB0aGUgYW5jaG9yIGFwcGVuZGVkXG4gICAgaWYgKGhyZWZBdHRyaWJ1dGUuaW5jbHVkZXMoJyMnKSAmJiAhaHJlZkF0dHJpYnV0ZS5zdGFydHNXaXRoKCcjJykpIHtcbiAgICAgIGhyZWZBdHRyaWJ1dGUgPSBgIyR7aHJlZkF0dHJpYnV0ZS5zcGxpdCgnIycpWzFdfWBcbiAgICB9XG5cbiAgICBzZWxlY3RvciA9IGhyZWZBdHRyaWJ1dGUgJiYgaHJlZkF0dHJpYnV0ZSAhPT0gJyMnID8gaHJlZkF0dHJpYnV0ZS50cmltKCkgOiBudWxsXG4gIH1cblxuICByZXR1cm4gc2VsZWN0b3IgPyBzZWxlY3Rvci5zcGxpdCgnLCcpLm1hcChzZWwgPT4gcGFyc2VTZWxlY3RvcihzZWwpKS5qb2luKCcsJykgOiBudWxsXG59XG5cbmNvbnN0IFNlbGVjdG9yRW5naW5lID0ge1xuICBmaW5kKHNlbGVjdG9yLCBlbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yQWxsLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpKVxuICB9LFxuXG4gIGZpbmRPbmUoc2VsZWN0b3IsIGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICByZXR1cm4gRWxlbWVudC5wcm90b3R5cGUucXVlcnlTZWxlY3Rvci5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKVxuICB9LFxuXG4gIGNoaWxkcmVuKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdCguLi5lbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoY2hpbGQgPT4gY2hpbGQubWF0Y2hlcyhzZWxlY3RvcikpXG4gIH0sXG5cbiAgcGFyZW50cyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHBhcmVudHMgPSBbXVxuICAgIGxldCBhbmNlc3RvciA9IGVsZW1lbnQucGFyZW50Tm9kZS5jbG9zZXN0KHNlbGVjdG9yKVxuXG4gICAgd2hpbGUgKGFuY2VzdG9yKSB7XG4gICAgICBwYXJlbnRzLnB1c2goYW5jZXN0b3IpXG4gICAgICBhbmNlc3RvciA9IGFuY2VzdG9yLnBhcmVudE5vZGUuY2xvc2VzdChzZWxlY3RvcilcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyZW50c1xuICB9LFxuXG4gIHByZXYoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBsZXQgcHJldmlvdXMgPSBlbGVtZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmdcblxuICAgIHdoaWxlIChwcmV2aW91cykge1xuICAgICAgaWYgKHByZXZpb3VzLm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbcHJldmlvdXNdXG4gICAgICB9XG5cbiAgICAgIHByZXZpb3VzID0gcHJldmlvdXMucHJldmlvdXNFbGVtZW50U2libGluZ1xuICAgIH1cblxuICAgIHJldHVybiBbXVxuICB9LFxuICAvLyBUT0RPOiB0aGlzIGlzIG5vdyB1bnVzZWQ7IHJlbW92ZSBsYXRlciBhbG9uZyB3aXRoIHByZXYoKVxuICBuZXh0KGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgbGV0IG5leHQgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZ1xuXG4gICAgd2hpbGUgKG5leHQpIHtcbiAgICAgIGlmIChuZXh0Lm1hdGNoZXMoc2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBbbmV4dF1cbiAgICAgIH1cblxuICAgICAgbmV4dCA9IG5leHQubmV4dEVsZW1lbnRTaWJsaW5nXG4gICAgfVxuXG4gICAgcmV0dXJuIFtdXG4gIH0sXG5cbiAgZm9jdXNhYmxlQ2hpbGRyZW4oZWxlbWVudCkge1xuICAgIGNvbnN0IGZvY3VzYWJsZXMgPSBbXG4gICAgICAnYScsXG4gICAgICAnYnV0dG9uJyxcbiAgICAgICdpbnB1dCcsXG4gICAgICAndGV4dGFyZWEnLFxuICAgICAgJ3NlbGVjdCcsXG4gICAgICAnZGV0YWlscycsXG4gICAgICAnW3RhYmluZGV4XScsXG4gICAgICAnW2NvbnRlbnRlZGl0YWJsZT1cInRydWVcIl0nXG4gICAgXS5tYXAoc2VsZWN0b3IgPT4gYCR7c2VsZWN0b3J9Om5vdChbdGFiaW5kZXhePVwiLVwiXSlgKS5qb2luKCcsJylcblxuICAgIHJldHVybiB0aGlzLmZpbmQoZm9jdXNhYmxlcywgZWxlbWVudCkuZmlsdGVyKGVsID0+ICFpc0Rpc2FibGVkKGVsKSAmJiBpc1Zpc2libGUoZWwpKVxuICB9LFxuXG4gIGdldFNlbGVjdG9yRnJvbUVsZW1lbnQoZWxlbWVudCkge1xuICAgIGNvbnN0IHNlbGVjdG9yID0gZ2V0U2VsZWN0b3IoZWxlbWVudClcblxuICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IpID8gc2VsZWN0b3IgOiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGxcbiAgfSxcblxuICBnZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kT25lKHNlbGVjdG9yKSA6IG51bGxcbiAgfSxcblxuICBnZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKGVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWxlY3RvciA9IGdldFNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICByZXR1cm4gc2VsZWN0b3IgPyBTZWxlY3RvckVuZ2luZS5maW5kKHNlbGVjdG9yKSA6IFtdXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3JFbmdpbmVcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC9iYWNrZHJvcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHtcbiAgZXhlY3V0ZSwgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbiwgZ2V0RWxlbWVudCwgcmVmbG93XG59IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdiYWNrZHJvcCdcbmNvbnN0IENMQVNTX05BTUVfRkFERSA9ICdmYWRlJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5jb25zdCBFVkVOVF9NT1VTRURPV04gPSBgbW91c2Vkb3duLmJzLiR7TkFNRX1gXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGNsYXNzTmFtZTogJ21vZGFsLWJhY2tkcm9wJyxcbiAgY2xpY2tDYWxsYmFjazogbnVsbCxcbiAgaXNBbmltYXRlZDogZmFsc2UsXG4gIGlzVmlzaWJsZTogdHJ1ZSwgLy8gaWYgZmFsc2UsIHdlIHVzZSB0aGUgYmFja2Ryb3AgaGVscGVyIHdpdGhvdXQgYWRkaW5nIGFueSBlbGVtZW50IHRvIHRoZSBkb21cbiAgcm9vdEVsZW1lbnQ6ICdib2R5JyAvLyBnaXZlIHRoZSBjaG9pY2UgdG8gcGxhY2UgYmFja2Ryb3AgdW5kZXIgZGlmZmVyZW50IGVsZW1lbnRzXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICBjbGlja0NhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgaXNBbmltYXRlZDogJ2Jvb2xlYW4nLFxuICBpc1Zpc2libGU6ICdib29sZWFuJyxcbiAgcm9vdEVsZW1lbnQ6ICcoZWxlbWVudHxzdHJpbmcpJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBCYWNrZHJvcCBleHRlbmRzIENvbmZpZyB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHN1cGVyKClcbiAgICB0aGlzLl9jb25maWcgPSB0aGlzLl9nZXRDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2lzQXBwZW5kZWQgPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQgPSBudWxsXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIHNob3coY2FsbGJhY2spIHtcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5pc1Zpc2libGUpIHtcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlbmQoKVxuXG4gICAgY29uc3QgZWxlbWVudCA9IHRoaXMuX2dldEVsZW1lbnQoKVxuICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xuICAgICAgcmVmbG93KGVsZW1lbnQpXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICB9KVxuICB9XG5cbiAgaGlkZShjYWxsYmFjaykge1xuICAgIGlmICghdGhpcy5fY29uZmlnLmlzVmlzaWJsZSkge1xuICAgICAgZXhlY3V0ZShjYWxsYmFjaylcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2dldEVsZW1lbnQoKS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcblxuICAgIHRoaXMuX2VtdWxhdGVBbmltYXRpb24oKCkgPT4ge1xuICAgICAgdGhpcy5kaXNwb3NlKClcbiAgICAgIGV4ZWN1dGUoY2FsbGJhY2spXG4gICAgfSlcbiAgfVxuXG4gIGRpc3Bvc2UoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKHRoaXMuX2VsZW1lbnQsIEVWRU5UX01PVVNFRE9XTilcblxuICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlKClcbiAgICB0aGlzLl9pc0FwcGVuZGVkID0gZmFsc2VcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2dldEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XG4gICAgICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICBiYWNrZHJvcC5jbGFzc05hbWUgPSB0aGlzLl9jb25maWcuY2xhc3NOYW1lXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmlzQW5pbWF0ZWQpIHtcbiAgICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0ZBREUpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBiYWNrZHJvcFxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50XG4gIH1cblxuICBfY29uZmlnQWZ0ZXJNZXJnZShjb25maWcpIHtcbiAgICAvLyB1c2UgZ2V0RWxlbWVudCgpIHdpdGggdGhlIGRlZmF1bHQgXCJib2R5XCIgdG8gZ2V0IGEgZnJlc2ggRWxlbWVudCBvbiBlYWNoIGluc3RhbnRpYXRpb25cbiAgICBjb25maWcucm9vdEVsZW1lbnQgPSBnZXRFbGVtZW50KGNvbmZpZy5yb290RWxlbWVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYXBwZW5kKCkge1xuICAgIGlmICh0aGlzLl9pc0FwcGVuZGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZ2V0RWxlbWVudCgpXG4gICAgdGhpcy5fY29uZmlnLnJvb3RFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsIEVWRU5UX01PVVNFRE9XTiwgKCkgPT4ge1xuICAgICAgZXhlY3V0ZSh0aGlzLl9jb25maWcuY2xpY2tDYWxsYmFjaylcbiAgICB9KVxuXG4gICAgdGhpcy5faXNBcHBlbmRlZCA9IHRydWVcbiAgfVxuXG4gIF9lbXVsYXRlQW5pbWF0aW9uKGNhbGxiYWNrKSB7XG4gICAgZXhlY3V0ZUFmdGVyVHJhbnNpdGlvbihjYWxsYmFjaywgdGhpcy5fZ2V0RWxlbWVudCgpLCB0aGlzLl9jb25maWcuaXNBbmltYXRlZClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYWNrZHJvcFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgeyBpc0Rpc2FibGVkIH0gZnJvbSAnLi9pbmRleC5qcydcblxuY29uc3QgZW5hYmxlRGlzbWlzc1RyaWdnZXIgPSAoY29tcG9uZW50LCBtZXRob2QgPSAnaGlkZScpID0+IHtcbiAgY29uc3QgY2xpY2tFdmVudCA9IGBjbGljay5kaXNtaXNzJHtjb21wb25lbnQuRVZFTlRfS0VZfWBcbiAgY29uc3QgbmFtZSA9IGNvbXBvbmVudC5OQU1FXG5cbiAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBjbGlja0V2ZW50LCBgW2RhdGEtYnMtZGlzbWlzcz1cIiR7bmFtZX1cIl1gLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoWydBJywgJ0FSRUEnXS5pbmNsdWRlcyh0aGlzLnRhZ05hbWUpKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgfVxuXG4gICAgaWYgKGlzRGlzYWJsZWQodGhpcykpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IodGhpcykgfHwgdGhpcy5jbG9zZXN0KGAuJHtuYW1lfWApXG4gICAgY29uc3QgaW5zdGFuY2UgPSBjb21wb25lbnQuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG5cbiAgICAvLyBNZXRob2QgYXJndW1lbnQgaXMgbGVmdCwgZm9yIEFsZXJ0IGFuZCBvbmx5LCBhcyBpdCBkb2Vzbid0IGltcGxlbWVudCB0aGUgJ2hpZGUnIG1ldGhvZFxuICAgIGluc3RhbmNlW21ldGhvZF0oKVxuICB9KVxufVxuXG5leHBvcnQge1xuICBlbmFibGVEaXNtaXNzVHJpZ2dlclxufVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL2ZvY3VzdHJhcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCBDb25maWcgZnJvbSAnLi9jb25maWcuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdmb2N1c3RyYXAnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5mb2N1c3RyYXAnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgRVZFTlRfRk9DVVNJTiA9IGBmb2N1c2luJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTl9UQUIgPSBga2V5ZG93bi50YWIke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFRBQl9LRVkgPSAnVGFiJ1xuY29uc3QgVEFCX05BVl9GT1JXQVJEID0gJ2ZvcndhcmQnXG5jb25zdCBUQUJfTkFWX0JBQ0tXQVJEID0gJ2JhY2t3YXJkJ1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhdXRvZm9jdXM6IHRydWUsXG4gIHRyYXBFbGVtZW50OiBudWxsIC8vIFRoZSBlbGVtZW50IHRvIHRyYXAgZm9jdXMgaW5zaWRlIG9mXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBhdXRvZm9jdXM6ICdib29sZWFuJyxcbiAgdHJhcEVsZW1lbnQ6ICdlbGVtZW50J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBGb2N1c1RyYXAgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9pc0FjdGl2ZSA9IGZhbHNlXG4gICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IG51bGxcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzQWN0aXZlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY29uZmlnLmF1dG9mb2N1cykge1xuICAgICAgdGhpcy5fY29uZmlnLnRyYXBFbGVtZW50LmZvY3VzKClcbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub2ZmKGRvY3VtZW50LCBFVkVOVF9LRVkpIC8vIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgZm9jdXMgbG9vcFxuICAgIEV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfRk9DVVNJTiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlRm9jdXNpbihldmVudCkpXG4gICAgRXZlbnRIYW5kbGVyLm9uKGRvY3VtZW50LCBFVkVOVF9LRVlET1dOX1RBQiwgZXZlbnQgPT4gdGhpcy5faGFuZGxlS2V5ZG93bihldmVudCkpXG5cbiAgICB0aGlzLl9pc0FjdGl2ZSA9IHRydWVcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNBY3RpdmUgPSBmYWxzZVxuICAgIEV2ZW50SGFuZGxlci5vZmYoZG9jdW1lbnQsIEVWRU5UX0tFWSlcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2hhbmRsZUZvY3VzaW4oZXZlbnQpIHtcbiAgICBjb25zdCB7IHRyYXBFbGVtZW50IH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmIChldmVudC50YXJnZXQgPT09IGRvY3VtZW50IHx8IGV2ZW50LnRhcmdldCA9PT0gdHJhcEVsZW1lbnQgfHwgdHJhcEVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudHMgPSBTZWxlY3RvckVuZ2luZS5mb2N1c2FibGVDaGlsZHJlbih0cmFwRWxlbWVudClcblxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRyYXBFbGVtZW50LmZvY3VzKClcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2xhc3RUYWJOYXZEaXJlY3Rpb24gPT09IFRBQl9OQVZfQkFDS1dBUkQpIHtcbiAgICAgIGVsZW1lbnRzW2VsZW1lbnRzLmxlbmd0aCAtIDFdLmZvY3VzKClcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudHNbMF0uZm9jdXMoKVxuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVLZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSAhPT0gVEFCX0tFWSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fbGFzdFRhYk5hdkRpcmVjdGlvbiA9IGV2ZW50LnNoaWZ0S2V5ID8gVEFCX05BVl9CQUNLV0FSRCA6IFRBQl9OQVZfRk9SV0FSRFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvY3VzVHJhcFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3Njcm9sbEJhci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBNYW5pcHVsYXRvciBmcm9tICcuLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi4vZG9tL3NlbGVjdG9yLWVuZ2luZS5qcydcbmltcG9ydCB7IGlzRWxlbWVudCB9IGZyb20gJy4vaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgU0VMRUNUT1JfRklYRURfQ09OVEVOVCA9ICcuZml4ZWQtdG9wLCAuZml4ZWQtYm90dG9tLCAuaXMtZml4ZWQsIC5zdGlja3ktdG9wJ1xuY29uc3QgU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQgPSAnLnN0aWNreS10b3AnXG5jb25zdCBQUk9QRVJUWV9QQURESU5HID0gJ3BhZGRpbmctcmlnaHQnXG5jb25zdCBQUk9QRVJUWV9NQVJHSU4gPSAnbWFyZ2luLXJpZ2h0J1xuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxCYXJIZWxwZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9lbGVtZW50ID0gZG9jdW1lbnQuYm9keVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGdldFdpZHRoKCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvaW5uZXJXaWR0aCN1c2FnZV9ub3Rlc1xuICAgIGNvbnN0IGRvY3VtZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgICByZXR1cm4gTWF0aC5hYnMod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudFdpZHRoKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuZ2V0V2lkdGgoKVxuICAgIHRoaXMuX2Rpc2FibGVPdmVyRmxvdygpXG4gICAgLy8gZ2l2ZSBwYWRkaW5nIHRvIGVsZW1lbnQgdG8gYmFsYW5jZSB0aGUgaGlkZGVuIHNjcm9sbGJhciB3aWR0aFxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcsIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgKyB3aWR0aClcbiAgICAvLyB0cmljazogV2UgYWRqdXN0IHBvc2l0aXZlIHBhZGRpbmdSaWdodCBhbmQgbmVnYXRpdmUgbWFyZ2luUmlnaHQgdG8gc3RpY2t5LXRvcCBlbGVtZW50cyB0byBrZWVwIHNob3dpbmcgZnVsbHdpZHRoXG4gICAgdGhpcy5fc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfRklYRURfQ09OVEVOVCwgUFJPUEVSVFlfUEFERElORywgY2FsY3VsYXRlZFZhbHVlID0+IGNhbGN1bGF0ZWRWYWx1ZSArIHdpZHRoKVxuICAgIHRoaXMuX3NldEVsZW1lbnRBdHRyaWJ1dGVzKFNFTEVDVE9SX1NUSUNLWV9DT05URU5ULCBQUk9QRVJUWV9NQVJHSU4sIGNhbGN1bGF0ZWRWYWx1ZSA9PiBjYWxjdWxhdGVkVmFsdWUgLSB3aWR0aClcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXModGhpcy5fZWxlbWVudCwgJ292ZXJmbG93JylcbiAgICB0aGlzLl9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHRoaXMuX2VsZW1lbnQsIFBST1BFUlRZX1BBRERJTkcpXG4gICAgdGhpcy5fcmVzZXRFbGVtZW50QXR0cmlidXRlcyhTRUxFQ1RPUl9GSVhFRF9DT05URU5ULCBQUk9QRVJUWV9QQURESU5HKVxuICAgIHRoaXMuX3Jlc2V0RWxlbWVudEF0dHJpYnV0ZXMoU0VMRUNUT1JfU1RJQ0tZX0NPTlRFTlQsIFBST1BFUlRZX01BUkdJTilcbiAgfVxuXG4gIGlzT3ZlcmZsb3dpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0V2lkdGgoKSA+IDBcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2Rpc2FibGVPdmVyRmxvdygpIHtcbiAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZSh0aGlzLl9lbGVtZW50LCAnb3ZlcmZsb3cnKVxuICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICB9XG5cbiAgX3NldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5LCBjYWxsYmFjaykge1xuICAgIGNvbnN0IHNjcm9sbGJhcldpZHRoID0gdGhpcy5nZXRXaWR0aCgpXG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSB0aGlzLl9lbGVtZW50ICYmIHdpbmRvdy5pbm5lcldpZHRoID4gZWxlbWVudC5jbGllbnRXaWR0aCArIHNjcm9sbGJhcldpZHRoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLl9zYXZlSW5pdGlhbEF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgY29uc3QgY2FsY3VsYXRlZFZhbHVlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShzdHlsZVByb3BlcnR5KVxuICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZVByb3BlcnR5LCBgJHtjYWxsYmFjayhOdW1iZXIucGFyc2VGbG9hdChjYWxjdWxhdGVkVmFsdWUpKX1weGApXG4gICAgfVxuXG4gICAgdGhpcy5fYXBwbHlNYW5pcHVsYXRpb25DYWxsYmFjayhzZWxlY3RvciwgbWFuaXB1bGF0aW9uQ2FsbEJhY2spXG4gIH1cblxuICBfc2F2ZUluaXRpYWxBdHRyaWJ1dGUoZWxlbWVudCwgc3R5bGVQcm9wZXJ0eSkge1xuICAgIGNvbnN0IGFjdHVhbFZhbHVlID0gZWxlbWVudC5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKHN0eWxlUHJvcGVydHkpXG4gICAgaWYgKGFjdHVhbFZhbHVlKSB7XG4gICAgICBNYW5pcHVsYXRvci5zZXREYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHksIGFjdHVhbFZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9yZXNldEVsZW1lbnRBdHRyaWJ1dGVzKHNlbGVjdG9yLCBzdHlsZVByb3BlcnR5KSB7XG4gICAgY29uc3QgbWFuaXB1bGF0aW9uQ2FsbEJhY2sgPSBlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZShlbGVtZW50LCBzdHlsZVByb3BlcnR5KVxuICAgICAgLy8gV2Ugb25seSB3YW50IHRvIHJlbW92ZSB0aGUgcHJvcGVydHkgaWYgdGhlIHZhbHVlIGlzIGBudWxsYDsgdGhlIHZhbHVlIGNhbiBhbHNvIGJlIHplcm9cbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KHN0eWxlUHJvcGVydHkpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBNYW5pcHVsYXRvci5yZW1vdmVEYXRhQXR0cmlidXRlKGVsZW1lbnQsIHN0eWxlUHJvcGVydHkpXG4gICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlUHJvcGVydHksIHZhbHVlKVxuICAgIH1cblxuICAgIHRoaXMuX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIG1hbmlwdWxhdGlvbkNhbGxCYWNrKVxuICB9XG5cbiAgX2FwcGx5TWFuaXB1bGF0aW9uQ2FsbGJhY2soc2VsZWN0b3IsIGNhbGxCYWNrKSB7XG4gICAgaWYgKGlzRWxlbWVudChzZWxlY3RvcikpIHtcbiAgICAgIGNhbGxCYWNrKHNlbGVjdG9yKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBzZWwgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChzZWxlY3RvciwgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIGNhbGxCYWNrKHNlbClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQmFySGVscGVyXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIG9mZmNhbnZhcy5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vdXRpbC9iYWNrZHJvcC5qcydcbmltcG9ydCB7IGVuYWJsZURpc21pc3NUcmlnZ2VyIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1mdW5jdGlvbnMuanMnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJy4vdXRpbC9mb2N1c3RyYXAuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGlzRGlzYWJsZWQsXG4gIGlzVmlzaWJsZVxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU2Nyb2xsQmFySGVscGVyIGZyb20gJy4vdXRpbC9zY3JvbGxiYXIuanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdvZmZjYW52YXMnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5vZmZjYW52YXMnXG5jb25zdCBFVkVOVF9LRVkgPSBgLiR7REFUQV9LRVl9YFxuY29uc3QgREFUQV9BUElfS0VZID0gJy5kYXRhLWFwaSdcbmNvbnN0IEVWRU5UX0xPQURfREFUQV9BUEkgPSBgbG9hZCR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVTQ0FQRV9LRVkgPSAnRXNjYXBlJ1xuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfU0hPV0lORyA9ICdzaG93aW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9ISURJTkcgPSAnaGlkaW5nJ1xuY29uc3QgQ0xBU1NfTkFNRV9CQUNLRFJPUCA9ICdvZmZjYW52YXMtYmFja2Ryb3AnXG5jb25zdCBPUEVOX1NFTEVDVE9SID0gJy5vZmZjYW52YXMuc2hvdydcblxuY29uc3QgRVZFTlRfU0hPVyA9IGBzaG93JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0hPV04gPSBgc2hvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFID0gYGhpZGUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9ISURFX1BSRVZFTlRFRCA9IGBoaWRlUHJldmVudGVkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1JFU0laRSA9IGByZXNpemUke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcbmNvbnN0IEVWRU5UX0tFWURPV05fRElTTUlTUyA9IGBrZXlkb3duLmRpc21pc3Mke0VWRU5UX0tFWX1gXG5cbmNvbnN0IFNFTEVDVE9SX0RBVEFfVE9HR0xFID0gJ1tkYXRhLWJzLXRvZ2dsZT1cIm9mZmNhbnZhc1wiXSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBzY3JvbGw6IGZhbHNlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBiYWNrZHJvcDogJyhib29sZWFufHN0cmluZyknLFxuICBrZXlib2FyZDogJ2Jvb2xlYW4nLFxuICBzY3JvbGw6ICdib29sZWFuJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBPZmZjYW52YXMgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faXNTaG93biA9IGZhbHNlXG4gICAgdGhpcy5fYmFja2Ryb3AgPSB0aGlzLl9pbml0aWFsaXplQmFja0Ryb3AoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcCA9IHRoaXMuX2luaXRpYWxpemVGb2N1c1RyYXAoKVxuICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKClcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgdG9nZ2xlKHJlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5faXNTaG93biA/IHRoaXMuaGlkZSgpIDogdGhpcy5zaG93KHJlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBzaG93KHJlbGF0ZWRUYXJnZXQpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0V2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfU0hPVywgeyByZWxhdGVkVGFyZ2V0IH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2lzU2hvd24gPSB0cnVlXG4gICAgdGhpcy5fYmFja2Ryb3Auc2hvdygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zY3JvbGwpIHtcbiAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5oaWRlKClcbiAgICB9XG5cbiAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1tb2RhbCcsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJylcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9TSE9XSU5HKVxuXG4gICAgY29uc3QgY29tcGxldGVDYWxsQmFjayA9ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5fY29uZmlnLnNjcm9sbCB8fCB0aGlzLl9jb25maWcuYmFja2Ryb3ApIHtcbiAgICAgICAgdGhpcy5fZm9jdXN0cmFwLmFjdGl2YXRlKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX1NIT1dJTkcpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTiwgeyByZWxhdGVkVGFyZ2V0IH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCB0aGlzLl9lbGVtZW50LCB0cnVlKVxuICB9XG5cbiAgaGlkZSgpIHtcbiAgICBpZiAoIXRoaXMuX2lzU2hvd24pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJREUpXG5cbiAgICBpZiAoaGlkZUV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICB0aGlzLl9lbGVtZW50LmJsdXIoKVxuICAgIHRoaXMuX2lzU2hvd24gPSBmYWxzZVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0hJRElORylcbiAgICB0aGlzLl9iYWNrZHJvcC5oaWRlKClcblxuICAgIGNvbnN0IGNvbXBsZXRlQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XLCBDTEFTU19OQU1FX0hJRElORylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW1vZGFsJylcbiAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdyb2xlJylcblxuICAgICAgaWYgKCF0aGlzLl9jb25maWcuc2Nyb2xsKSB7XG4gICAgICAgIG5ldyBTY3JvbGxCYXJIZWxwZXIoKS5yZXNldCgpXG4gICAgICB9XG5cbiAgICAgIEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0hJRERFTilcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlQ2FsbGJhY2ssIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIHRoaXMuX2JhY2tkcm9wLmRpc3Bvc2UoKVxuICAgIHRoaXMuX2ZvY3VzdHJhcC5kZWFjdGl2YXRlKClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2luaXRpYWxpemVCYWNrRHJvcCgpIHtcbiAgICBjb25zdCBjbGlja0NhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2NvbmZpZy5iYWNrZHJvcCA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERV9QUkVWRU5URUQpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICB0aGlzLmhpZGUoKVxuICAgIH1cblxuICAgIC8vICdzdGF0aWMnIG9wdGlvbiB3aWxsIGJlIHRyYW5zbGF0ZWQgdG8gdHJ1ZSwgYW5kIGJvb2xlYW5zIHdpbGwga2VlcCB0aGVpciB2YWx1ZVxuICAgIGNvbnN0IGlzVmlzaWJsZSA9IEJvb2xlYW4odGhpcy5fY29uZmlnLmJhY2tkcm9wKVxuXG4gICAgcmV0dXJuIG5ldyBCYWNrZHJvcCh7XG4gICAgICBjbGFzc05hbWU6IENMQVNTX05BTUVfQkFDS0RST1AsXG4gICAgICBpc1Zpc2libGUsXG4gICAgICBpc0FuaW1hdGVkOiB0cnVlLFxuICAgICAgcm9vdEVsZW1lbnQ6IHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgIGNsaWNrQ2FsbGJhY2s6IGlzVmlzaWJsZSA/IGNsaWNrQ2FsbGJhY2sgOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIF9pbml0aWFsaXplRm9jdXNUcmFwKCkge1xuICAgIHJldHVybiBuZXcgRm9jdXNUcmFwKHtcbiAgICAgIHRyYXBFbGVtZW50OiB0aGlzLl9lbGVtZW50XG4gICAgfSlcbiAgfVxuXG4gIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfS0VZRE9XTl9ESVNNSVNTLCBldmVudCA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ICE9PSBFU0NBUEVfS0VZKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fY29uZmlnLmtleWJvYXJkKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURFX1BSRVZFTlRFRClcbiAgICB9KVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gT2ZmY2FudmFzLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcywgY29uZmlnKVxuXG4gICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhW2NvbmZpZ10gPT09IHVuZGVmaW5lZCB8fCBjb25maWcuc3RhcnRzV2l0aCgnXycpIHx8IGNvbmZpZyA9PT0gJ2NvbnN0cnVjdG9yJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICB9XG5cbiAgICAgIGRhdGFbY29uZmlnXSh0aGlzKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0aGlzKVxuXG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgRXZlbnRIYW5kbGVyLm9uZSh0YXJnZXQsIEVWRU5UX0hJRERFTiwgKCkgPT4ge1xuICAgIC8vIGZvY3VzIG9uIHRyaWdnZXIgd2hlbiBpdCBpcyBjbG9zZWRcbiAgICBpZiAoaXNWaXNpYmxlKHRoaXMpKSB7XG4gICAgICB0aGlzLmZvY3VzKClcbiAgICB9XG4gIH0pXG5cbiAgLy8gYXZvaWQgY29uZmxpY3Qgd2hlbiBjbGlja2luZyBhIHRvZ2dsZXIgb2YgYW4gb2ZmY2FudmFzLCB3aGlsZSBhbm90aGVyIGlzIG9wZW5cbiAgY29uc3QgYWxyZWFkeU9wZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKE9QRU5fU0VMRUNUT1IpXG4gIGlmIChhbHJlYWR5T3BlbiAmJiBhbHJlYWR5T3BlbiAhPT0gdGFyZ2V0KSB7XG4gICAgT2ZmY2FudmFzLmdldEluc3RhbmNlKGFscmVhZHlPcGVuKS5oaWRlKClcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBPZmZjYW52YXMuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0YXJnZXQpXG4gIGRhdGEudG9nZ2xlKHRoaXMpXG59KVxuXG5FdmVudEhhbmRsZXIub24od2luZG93LCBFVkVOVF9MT0FEX0RBVEFfQVBJLCAoKSA9PiB7XG4gIGZvciAoY29uc3Qgc2VsZWN0b3Igb2YgU2VsZWN0b3JFbmdpbmUuZmluZChPUEVOX1NFTEVDVE9SKSkge1xuICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKHNlbGVjdG9yKS5zaG93KClcbiAgfVxufSlcblxuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfUkVTSVpFLCAoKSA9PiB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5maW5kKCdbYXJpYS1tb2RhbF1bY2xhc3MqPXNob3ddW2NsYXNzKj1vZmZjYW52YXMtXScpKSB7XG4gICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgIE9mZmNhbnZhcy5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQpLmhpZGUoKVxuICAgIH1cbiAgfVxufSlcblxuZW5hYmxlRGlzbWlzc1RyaWdnZXIoT2ZmY2FudmFzKVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihPZmZjYW52YXMpXG5cbmV4cG9ydCBkZWZhdWx0IE9mZmNhbnZhc1xuIiwgImltcG9ydCBcImpzL2Jvb3RzdHJhcC9zcmMvZHJvcGRvd25cIjtcbmltcG9ydCBcImpzL2Jvb3RzdHJhcC9zcmMvb2ZmY2FudmFzXCI7XG5cbigoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhiLWhlYWRlcicpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgIGNvbnN0IG5hdiA9IGhlYWRlci5xdWVyeVNlbGVjdG9yKCcuaGItaGVhZGVyLW5hdicpIGFzIEhUTUxFbGVtZW50XG4gICAgICAgIGlmICghaGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhY3RpdmVNZW51ID0gKG1lbnU6IEVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAncGFnZScpXG4gICAgICAgICAgICBtZW51LnBhcmVudEVsZW1lbnQ/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBtZW51LmNsb3Nlc3QoJy5oYi1oZWFkZXItbWVudScpXG4gICAgICAgICAgICBwYXJlbnQ/LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICBwYXJlbnQ/LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbGluazpmaXJzdC1jaGlsZCcpPy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNNZW51UGFyZW50ID0gKHBhcmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IHBhcmVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSA/PyAnJ1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoaHJlZikgIT09IC0xIHx8IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKGhyZWYpICE9PSAtMVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWVudXMgPSBuYXYucXVlcnlTZWxlY3RvckFsbChgYVtocmVmPVwiJHt3aW5kb3cubG9jYXRpb24uaHJlZn1cIl0sIGFbaHJlZj1cIiR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfVwiXWApXG4gICAgICAgIGlmIChtZW51cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtZW51cy5mb3JFYWNoKG1lbnUgPT4ge1xuICAgICAgICAgICAgICAgIGFjdGl2ZU1lbnUobWVudSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZm91bmRQYXJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgY29uc3Qgc3VibWVudXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2EuaGItaGVhZGVyLXN1Ym1lbnUnKSlcbiAgICAgICAgICAgIC8vIGZpbmQgcGFyZW50IG1lbnUgZnJvbSBzZWNvbmQtbGV2ZWwgbWVudXMuXG4gICAgICAgICAgICBmb3IgKGxldCBtZW51IG9mIHN1Ym1lbnVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzTWVudVBhcmVudChtZW51KSkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVNZW51KG1lbnUpXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kUGFyZW50ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmRQYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBmaW5kIHBhcmVudCBtZW51IGZyb20gdG9wLWxldmVsIG1lbnVzLlxuICAgICAgICAgICAgICAgIGZvciAobGV0IG1lbnUgb2YgQXJyYXkuZnJvbShuYXYucXVlcnlTZWxlY3RvckFsbCgnYS5uYXYtbGluaycpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNZW51UGFyZW50KG1lbnUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVNZW51KG1lbnUpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2hhZG93ID0gKCkgPT4ge1xuICAgICAgICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3NoYWRvdy1zbScpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByZW1vdmVTaGFkb3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGFkb3ctc20nKSAmJiBuYXYuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZG93LXNtJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNob3cgPSAoKSA9PiB7XG4gICAgICAgICAgICBuYXYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ29wYWNpdHknKTtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnei1pbmRleCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGlkZSA9ICgpID0+IHtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgbmF2LnN0eWxlLnpJbmRleCA9ICcwJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBoID0gMDtcbiAgICAgICAgY29uc3QgdGhyZXNob2xkID0gMjA7XG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wICE9PSAwKSB7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2Nyb2xsaW5nJylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGlzTW9iaWxlID0gKCk6IGJvb2xlYW4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5pbm5lcldpZHRoIDwgNTc2XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpc01vYmlsZSgpKSB7XG4gICAgICAgICAgICAgICAgc2hvdygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICAgICAgcmVtb3ZlU2hhZG93KClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICAgICAgc2hhZG93KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc01vYmlsZSgpICYmIE1hdGguYWJzKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLSBoKSA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiBoID8gaGlkZSgpIDogc2hvdygpO1xuICAgICAgICAgICAgICAgIGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHV0aWwvc3dpcGUuanNcbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9MSUNFTlNFKVxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqL1xuXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4uL2RvbS9ldmVudC1oYW5kbGVyLmpzJ1xuaW1wb3J0IENvbmZpZyBmcm9tICcuL2NvbmZpZy5qcydcbmltcG9ydCB7IGV4ZWN1dGUgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc3dpcGUnXG5jb25zdCBFVkVOVF9LRVkgPSAnLmJzLnN3aXBlJ1xuY29uc3QgRVZFTlRfVE9VQ0hTVEFSVCA9IGB0b3VjaHN0YXJ0JHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfVE9VQ0hNT1ZFID0gYHRvdWNobW92ZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1RPVUNIRU5EID0gYHRvdWNoZW5kJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfUE9JTlRFUkRPV04gPSBgcG9pbnRlcmRvd24ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9QT0lOVEVSVVAgPSBgcG9pbnRlcnVwJHtFVkVOVF9LRVl9YFxuY29uc3QgUE9JTlRFUl9UWVBFX1RPVUNIID0gJ3RvdWNoJ1xuY29uc3QgUE9JTlRFUl9UWVBFX1BFTiA9ICdwZW4nXG5jb25zdCBDTEFTU19OQU1FX1BPSU5URVJfRVZFTlQgPSAncG9pbnRlci1ldmVudCdcbmNvbnN0IFNXSVBFX1RIUkVTSE9MRCA9IDQwXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGVuZENhbGxiYWNrOiBudWxsLFxuICBsZWZ0Q2FsbGJhY2s6IG51bGwsXG4gIHJpZ2h0Q2FsbGJhY2s6IG51bGxcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGVuZENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgbGVmdENhbGxiYWNrOiAnKGZ1bmN0aW9ufG51bGwpJyxcbiAgcmlnaHRDYWxsYmFjazogJyhmdW5jdGlvbnxudWxsKSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgU3dpcGUgZXh0ZW5kcyBDb25maWcge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb25maWcpIHtcbiAgICBzdXBlcigpXG4gICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnRcblxuICAgIGlmICghZWxlbWVudCB8fCAhU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKGNvbmZpZylcbiAgICB0aGlzLl9kZWx0YVggPSAwXG4gICAgdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMgPSBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpXG4gICAgdGhpcy5faW5pdEV2ZW50cygpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGRpc3Bvc2UoKSB7XG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LCBFVkVOVF9LRVkpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9zdGFydChldmVudCkge1xuICAgIGlmICghdGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WFxuXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZXZlbnRJc1BvaW50ZXJQZW5Ub3VjaChldmVudCkpIHtcbiAgICAgIHRoaXMuX2RlbHRhWCA9IGV2ZW50LmNsaWVudFhcbiAgICB9XG4gIH1cblxuICBfZW5kKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2V2ZW50SXNQb2ludGVyUGVuVG91Y2goZXZlbnQpKSB7XG4gICAgICB0aGlzLl9kZWx0YVggPSBldmVudC5jbGllbnRYIC0gdGhpcy5fZGVsdGFYXG4gICAgfVxuXG4gICAgdGhpcy5faGFuZGxlU3dpcGUoKVxuICAgIGV4ZWN1dGUodGhpcy5fY29uZmlnLmVuZENhbGxiYWNrKVxuICB9XG5cbiAgX21vdmUoZXZlbnQpIHtcbiAgICB0aGlzLl9kZWx0YVggPSBldmVudC50b3VjaGVzICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSA/XG4gICAgICAwIDpcbiAgICAgIGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCAtIHRoaXMuX2RlbHRhWFxuICB9XG5cbiAgX2hhbmRsZVN3aXBlKCkge1xuICAgIGNvbnN0IGFic0RlbHRhWCA9IE1hdGguYWJzKHRoaXMuX2RlbHRhWClcblxuICAgIGlmIChhYnNEZWx0YVggPD0gU1dJUEVfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBhYnNEZWx0YVggLyB0aGlzLl9kZWx0YVhcblxuICAgIHRoaXMuX2RlbHRhWCA9IDBcblxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBleGVjdXRlKGRpcmVjdGlvbiA+IDAgPyB0aGlzLl9jb25maWcucmlnaHRDYWxsYmFjayA6IHRoaXMuX2NvbmZpZy5sZWZ0Q2FsbGJhY2spXG4gIH1cblxuICBfaW5pdEV2ZW50cygpIHtcbiAgICBpZiAodGhpcy5fc3VwcG9ydFBvaW50ZXJFdmVudHMpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9QT0lOVEVSRE9XTiwgZXZlbnQgPT4gdGhpcy5fc3RhcnQoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1BPSU5URVJVUCwgZXZlbnQgPT4gdGhpcy5fZW5kKGV2ZW50KSlcblxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfUE9JTlRFUl9FVkVOVClcbiAgICB9IGVsc2Uge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIU1RBUlQsIGV2ZW50ID0+IHRoaXMuX3N0YXJ0KGV2ZW50KSlcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9UT1VDSE1PVkUsIGV2ZW50ID0+IHRoaXMuX21vdmUoZXZlbnQpKVxuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1RPVUNIRU5ELCBldmVudCA9PiB0aGlzLl9lbmQoZXZlbnQpKVxuICAgIH1cbiAgfVxuXG4gIF9ldmVudElzUG9pbnRlclBlblRvdWNoKGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1cHBvcnRQb2ludGVyRXZlbnRzICYmIChldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1BFTiB8fCBldmVudC5wb2ludGVyVHlwZSA9PT0gUE9JTlRFUl9UWVBFX1RPVUNIKVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBpc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTd2lwZVxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCBjYXJvdXNlbC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLFxuICBnZXROZXh0QWN0aXZlRWxlbWVudCxcbiAgaXNSVEwsXG4gIGlzVmlzaWJsZSxcbiAgcmVmbG93LFxuICB0cmlnZ2VyVHJhbnNpdGlvbkVuZFxufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5pbXBvcnQgU3dpcGUgZnJvbSAnLi91dGlsL3N3aXBlLmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnY2Fyb3VzZWwnXG5jb25zdCBEQVRBX0tFWSA9ICdicy5jYXJvdXNlbCdcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5jb25zdCBEQVRBX0FQSV9LRVkgPSAnLmRhdGEtYXBpJ1xuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgPSA1MDAgLy8gVGltZSBmb3IgbW91c2UgY29tcGF0IGV2ZW50cyB0byBmaXJlIGFmdGVyIHRvdWNoXG5cbmNvbnN0IE9SREVSX05FWFQgPSAnbmV4dCdcbmNvbnN0IE9SREVSX1BSRVYgPSAncHJldidcbmNvbnN0IERJUkVDVElPTl9MRUZUID0gJ2xlZnQnXG5jb25zdCBESVJFQ1RJT05fUklHSFQgPSAncmlnaHQnXG5cbmNvbnN0IEVWRU5UX1NMSURFID0gYHNsaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfU0xJRCA9IGBzbGlkJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VFTlRFUiA9IGBtb3VzZWVudGVyJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTU9VU0VMRUFWRSA9IGBtb3VzZWxlYXZlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfRFJBR19TVEFSVCA9IGBkcmFnc3RhcnQke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5jb25zdCBFVkVOVF9DTElDS19EQVRBX0FQSSA9IGBjbGljayR7RVZFTlRfS0VZfSR7REFUQV9BUElfS0VZfWBcblxuY29uc3QgQ0xBU1NfTkFNRV9DQVJPVVNFTCA9ICdjYXJvdXNlbCdcbmNvbnN0IENMQVNTX05BTUVfQUNUSVZFID0gJ2FjdGl2ZSdcbmNvbnN0IENMQVNTX05BTUVfU0xJREUgPSAnc2xpZGUnXG5jb25zdCBDTEFTU19OQU1FX0VORCA9ICdjYXJvdXNlbC1pdGVtLWVuZCdcbmNvbnN0IENMQVNTX05BTUVfU1RBUlQgPSAnY2Fyb3VzZWwtaXRlbS1zdGFydCdcbmNvbnN0IENMQVNTX05BTUVfTkVYVCA9ICdjYXJvdXNlbC1pdGVtLW5leHQnXG5jb25zdCBDTEFTU19OQU1FX1BSRVYgPSAnY2Fyb3VzZWwtaXRlbS1wcmV2J1xuXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkUgPSAnLmFjdGl2ZSdcbmNvbnN0IFNFTEVDVE9SX0lURU0gPSAnLmNhcm91c2VsLWl0ZW0nXG5jb25zdCBTRUxFQ1RPUl9BQ1RJVkVfSVRFTSA9IFNFTEVDVE9SX0FDVElWRSArIFNFTEVDVE9SX0lURU1cbmNvbnN0IFNFTEVDVE9SX0lURU1fSU1HID0gJy5jYXJvdXNlbC1pdGVtIGltZydcbmNvbnN0IFNFTEVDVE9SX0lORElDQVRPUlMgPSAnLmNhcm91c2VsLWluZGljYXRvcnMnXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NMSURFID0gJ1tkYXRhLWJzLXNsaWRlXSwgW2RhdGEtYnMtc2xpZGUtdG9dJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9SSURFID0gJ1tkYXRhLWJzLXJpZGU9XCJjYXJvdXNlbFwiXSdcblxuY29uc3QgS0VZX1RPX0RJUkVDVElPTiA9IHtcbiAgW0FSUk9XX0xFRlRfS0VZXTogRElSRUNUSU9OX1JJR0hULFxuICBbQVJST1dfUklHSFRfS0VZXTogRElSRUNUSU9OX0xFRlRcbn1cblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgaW50ZXJ2YWw6IDUwMDAsXG4gIGtleWJvYXJkOiB0cnVlLFxuICBwYXVzZTogJ2hvdmVyJyxcbiAgcmlkZTogZmFsc2UsXG4gIHRvdWNoOiB0cnVlLFxuICB3cmFwOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBpbnRlcnZhbDogJyhudW1iZXJ8Ym9vbGVhbiknLCAvLyBUT0RPOnY2IHJlbW92ZSBib29sZWFuIHN1cHBvcnRcbiAga2V5Ym9hcmQ6ICdib29sZWFuJyxcbiAgcGF1c2U6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgcmlkZTogJyhib29sZWFufHN0cmluZyknLFxuICB0b3VjaDogJ2Jvb2xlYW4nLFxuICB3cmFwOiAnYm9vbGVhbidcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBudWxsXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG51bGxcbiAgICB0aGlzLl9pc1NsaWRpbmcgPSBmYWxzZVxuICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gbnVsbFxuICAgIHRoaXMuX3N3aXBlSGVscGVyID0gbnVsbFxuXG4gICAgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lORElDQVRPUlMsIHRoaXMuX2VsZW1lbnQpXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKVxuXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5yaWRlID09PSBDTEFTU19OQU1FX0NBUk9VU0VMKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIG5leHQoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfTkVYVClcbiAgfVxuXG4gIG5leHRXaGVuVmlzaWJsZSgpIHtcbiAgICAvLyBGSVhNRSBUT0RPIHVzZSBgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlYFxuICAgIC8vIERvbid0IGNhbGwgbmV4dCB3aGVuIHRoZSBwYWdlIGlzbid0IHZpc2libGVcbiAgICAvLyBvciB0aGUgY2Fyb3VzZWwgb3IgaXRzIHBhcmVudCBpc24ndCB2aXNpYmxlXG4gICAgaWYgKCFkb2N1bWVudC5oaWRkZW4gJiYgaXNWaXNpYmxlKHRoaXMuX2VsZW1lbnQpKSB7XG4gICAgICB0aGlzLm5leHQoKVxuICAgIH1cbiAgfVxuXG4gIHByZXYoKSB7XG4gICAgdGhpcy5fc2xpZGUoT1JERVJfUFJFVilcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIHRyaWdnZXJUcmFuc2l0aW9uRW5kKHRoaXMuX2VsZW1lbnQpXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJJbnRlcnZhbCgpXG4gIH1cblxuICBjeWNsZSgpIHtcbiAgICB0aGlzLl9jbGVhckludGVydmFsKClcbiAgICB0aGlzLl91cGRhdGVJbnRlcnZhbCgpXG5cbiAgICB0aGlzLl9pbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHRoaXMubmV4dFdoZW5WaXNpYmxlKCksIHRoaXMuX2NvbmZpZy5pbnRlcnZhbClcbiAgfVxuXG4gIF9tYXliZUVuYWJsZUN5Y2xlKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnJpZGUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1NsaWRpbmcpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbmUodGhpcy5fZWxlbWVudCwgRVZFTlRfU0xJRCwgKCkgPT4gdGhpcy5jeWNsZSgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jeWNsZSgpXG4gIH1cblxuICB0byhpbmRleCkge1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5fZ2V0SXRlbXMoKVxuICAgIGlmIChpbmRleCA+IGl0ZW1zLmxlbmd0aCAtIDEgfHwgaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faXNTbGlkaW5nKSB7XG4gICAgICBFdmVudEhhbmRsZXIub25lKHRoaXMuX2VsZW1lbnQsIEVWRU5UX1NMSUQsICgpID0+IHRoaXMudG8oaW5kZXgpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9nZXRJdGVtSW5kZXgodGhpcy5fZ2V0QWN0aXZlKCkpXG4gICAgaWYgKGFjdGl2ZUluZGV4ID09PSBpbmRleCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA+IGFjdGl2ZUluZGV4ID8gT1JERVJfTkVYVCA6IE9SREVSX1BSRVZcblxuICAgIHRoaXMuX3NsaWRlKG9yZGVyLCBpdGVtc1tpbmRleF0pXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGlmICh0aGlzLl9zd2lwZUhlbHBlcikge1xuICAgICAgdGhpcy5fc3dpcGVIZWxwZXIuZGlzcG9zZSgpXG4gICAgfVxuXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5kZWZhdWx0SW50ZXJ2YWwgPSBjb25maWcuaW50ZXJ2YWxcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKHRoaXMuX2NvbmZpZy5rZXlib2FyZCkge1xuICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcucGF1c2UgPT09ICdob3ZlcicpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9lbGVtZW50LCBFVkVOVF9NT1VTRUVOVEVSLCAoKSA9PiB0aGlzLnBhdXNlKCkpXG4gICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgRVZFTlRfTU9VU0VMRUFWRSwgKCkgPT4gdGhpcy5fbWF5YmVFbmFibGVDeWNsZSgpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG91Y2ggJiYgU3dpcGUuaXNTdXBwb3J0ZWQoKSkge1xuICAgICAgdGhpcy5fYWRkVG91Y2hFdmVudExpc3RlbmVycygpXG4gICAgfVxuICB9XG5cbiAgX2FkZFRvdWNoRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZm9yIChjb25zdCBpbWcgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9JVEVNX0lNRywgdGhpcy5fZWxlbWVudCkpIHtcbiAgICAgIEV2ZW50SGFuZGxlci5vbihpbWcsIEVWRU5UX0RSQUdfU1RBUlQsIGV2ZW50ID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpXG4gICAgfVxuXG4gICAgY29uc3QgZW5kQ2FsbEJhY2sgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY29uZmlnLnBhdXNlICE9PSAnaG92ZXInKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBJZiBpdCdzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2UsIG1vdXNlZW50ZXIvbGVhdmUgYXJlIGZpcmVkIGFzXG4gICAgICAvLyBwYXJ0IG9mIHRoZSBtb3VzZSBjb21wYXRpYmlsaXR5IGV2ZW50cyBvbiBmaXJzdCB0YXAgLSB0aGUgY2Fyb3VzZWxcbiAgICAgIC8vIHdvdWxkIHN0b3AgY3ljbGluZyB1bnRpbCB1c2VyIHRhcHBlZCBvdXQgb2YgaXQ7XG4gICAgICAvLyBoZXJlLCB3ZSBsaXN0ZW4gZm9yIHRvdWNoZW5kLCBleHBsaWNpdGx5IHBhdXNlIHRoZSBjYXJvdXNlbFxuICAgICAgLy8gKGFzIGlmIGl0J3MgdGhlIHNlY29uZCB0aW1lIHdlIHRhcCBvbiBpdCwgbW91c2VlbnRlciBjb21wYXQgZXZlbnRcbiAgICAgIC8vIGlzIE5PVCBmaXJlZCkgYW5kIGFmdGVyIGEgdGltZW91dCAodG8gYWxsb3cgZm9yIG1vdXNlIGNvbXBhdGliaWxpdHlcbiAgICAgIC8vIGV2ZW50cyB0byBmaXJlKSB3ZSBleHBsaWNpdGx5IHJlc3RhcnQgY3ljbGluZ1xuXG4gICAgICB0aGlzLnBhdXNlKClcbiAgICAgIGlmICh0aGlzLnRvdWNoVGltZW91dCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVvdXQpXG4gICAgICB9XG5cbiAgICAgIHRoaXMudG91Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl9tYXliZUVuYWJsZUN5Y2xlKCksIFRPVUNIRVZFTlRfQ09NUEFUX1dBSVQgKyB0aGlzLl9jb25maWcuaW50ZXJ2YWwpXG4gICAgfVxuXG4gICAgY29uc3Qgc3dpcGVDb25maWcgPSB7XG4gICAgICBsZWZ0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX0xFRlQpKSxcbiAgICAgIHJpZ2h0Q2FsbGJhY2s6ICgpID0+IHRoaXMuX3NsaWRlKHRoaXMuX2RpcmVjdGlvblRvT3JkZXIoRElSRUNUSU9OX1JJR0hUKSksXG4gICAgICBlbmRDYWxsYmFjazogZW5kQ2FsbEJhY2tcbiAgICB9XG5cbiAgICB0aGlzLl9zd2lwZUhlbHBlciA9IG5ldyBTd2lwZSh0aGlzLl9lbGVtZW50LCBzd2lwZUNvbmZpZylcbiAgfVxuXG4gIF9rZXlkb3duKGV2ZW50KSB7XG4gICAgaWYgKC9pbnB1dHx0ZXh0YXJlYS9pLnRlc3QoZXZlbnQudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb24gPSBLRVlfVE9fRElSRUNUSU9OW2V2ZW50LmtleV1cbiAgICBpZiAoZGlyZWN0aW9uKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB0aGlzLl9zbGlkZSh0aGlzLl9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikpXG4gICAgfVxuICB9XG5cbiAgX2dldEl0ZW1JbmRleChlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldEl0ZW1zKCkuaW5kZXhPZihlbGVtZW50KVxuICB9XG5cbiAgX3NldEFjdGl2ZUluZGljYXRvckVsZW1lbnQoaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2luZGljYXRvcnNFbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVJbmRpY2F0b3IgPSBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0FDVElWRSwgdGhpcy5faW5kaWNhdG9yc0VsZW1lbnQpXG5cbiAgICBhY3RpdmVJbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcbiAgICBhY3RpdmVJbmRpY2F0b3IucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlSW5kaWNhdG9yID0gU2VsZWN0b3JFbmdpbmUuZmluZE9uZShgW2RhdGEtYnMtc2xpZGUtdG89XCIke2luZGV4fVwiXWAsIHRoaXMuX2luZGljYXRvcnNFbGVtZW50KVxuXG4gICAgaWYgKG5ld0FjdGl2ZUluZGljYXRvcikge1xuICAgICAgbmV3QWN0aXZlSW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgICBuZXdBY3RpdmVJbmRpY2F0b3Iuc2V0QXR0cmlidXRlKCdhcmlhLWN1cnJlbnQnLCAndHJ1ZScpXG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUludGVydmFsKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9hY3RpdmVFbGVtZW50IHx8IHRoaXMuX2dldEFjdGl2ZSgpXG5cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnRJbnRlcnZhbCA9IE51bWJlci5wYXJzZUludChlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1icy1pbnRlcnZhbCcpLCAxMClcblxuICAgIHRoaXMuX2NvbmZpZy5pbnRlcnZhbCA9IGVsZW1lbnRJbnRlcnZhbCB8fCB0aGlzLl9jb25maWcuZGVmYXVsdEludGVydmFsXG4gIH1cblxuICBfc2xpZGUob3JkZXIsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgaWYgKHRoaXMuX2lzU2xpZGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZSgpXG4gICAgY29uc3QgaXNOZXh0ID0gb3JkZXIgPT09IE9SREVSX05FWFRcbiAgICBjb25zdCBuZXh0RWxlbWVudCA9IGVsZW1lbnQgfHwgZ2V0TmV4dEFjdGl2ZUVsZW1lbnQodGhpcy5fZ2V0SXRlbXMoKSwgYWN0aXZlRWxlbWVudCwgaXNOZXh0LCB0aGlzLl9jb25maWcud3JhcClcblxuICAgIGlmIChuZXh0RWxlbWVudCA9PT0gYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IHRoaXMuX2dldEl0ZW1JbmRleChuZXh0RWxlbWVudClcblxuICAgIGNvbnN0IHRyaWdnZXJFdmVudCA9IGV2ZW50TmFtZSA9PiB7XG4gICAgICByZXR1cm4gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgZXZlbnROYW1lLCB7XG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6IG5leHRFbGVtZW50LFxuICAgICAgICBkaXJlY3Rpb246IHRoaXMuX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpLFxuICAgICAgICBmcm9tOiB0aGlzLl9nZXRJdGVtSW5kZXgoYWN0aXZlRWxlbWVudCksXG4gICAgICAgIHRvOiBuZXh0RWxlbWVudEluZGV4XG4gICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHNsaWRlRXZlbnQgPSB0cmlnZ2VyRXZlbnQoRVZFTlRfU0xJREUpXG5cbiAgICBpZiAoc2xpZGVFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIWFjdGl2ZUVsZW1lbnQgfHwgIW5leHRFbGVtZW50KSB7XG4gICAgICAvLyBTb21lIHdlaXJkbmVzcyBpcyBoYXBwZW5pbmcsIHNvIHdlIGJhaWxcbiAgICAgIC8vIFRPRE86IGNoYW5nZSB0ZXN0cyB0aGF0IHVzZSBlbXB0eSBkaXZzIHRvIGF2b2lkIHRoaXMgY2hlY2tcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGlzQ3ljbGluZyA9IEJvb2xlYW4odGhpcy5faW50ZXJ2YWwpXG4gICAgdGhpcy5wYXVzZSgpXG5cbiAgICB0aGlzLl9pc1NsaWRpbmcgPSB0cnVlXG5cbiAgICB0aGlzLl9zZXRBY3RpdmVJbmRpY2F0b3JFbGVtZW50KG5leHRFbGVtZW50SW5kZXgpXG4gICAgdGhpcy5fYWN0aXZlRWxlbWVudCA9IG5leHRFbGVtZW50XG5cbiAgICBjb25zdCBkaXJlY3Rpb25hbENsYXNzTmFtZSA9IGlzTmV4dCA/IENMQVNTX05BTUVfU1RBUlQgOiBDTEFTU19OQU1FX0VORFxuICAgIGNvbnN0IG9yZGVyQ2xhc3NOYW1lID0gaXNOZXh0ID8gQ0xBU1NfTkFNRV9ORVhUIDogQ0xBU1NfTkFNRV9QUkVWXG5cbiAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKG9yZGVyQ2xhc3NOYW1lKVxuXG4gICAgcmVmbG93KG5leHRFbGVtZW50KVxuXG4gICAgYWN0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKGRpcmVjdGlvbmFsQ2xhc3NOYW1lKVxuICAgIG5leHRFbGVtZW50LmNsYXNzTGlzdC5hZGQoZGlyZWN0aW9uYWxDbGFzc05hbWUpXG5cbiAgICBjb25zdCBjb21wbGV0ZUNhbGxCYWNrID0gKCkgPT4ge1xuICAgICAgbmV4dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShkaXJlY3Rpb25hbENsYXNzTmFtZSwgb3JkZXJDbGFzc05hbWUpXG4gICAgICBuZXh0RWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgICBhY3RpdmVFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUsIG9yZGVyQ2xhc3NOYW1lLCBkaXJlY3Rpb25hbENsYXNzTmFtZSlcblxuICAgICAgdGhpcy5faXNTbGlkaW5nID0gZmFsc2VcblxuICAgICAgdHJpZ2dlckV2ZW50KEVWRU5UX1NMSUQpXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZUNhbGxCYWNrLCBhY3RpdmVFbGVtZW50LCB0aGlzLl9pc0FuaW1hdGVkKCkpXG5cbiAgICBpZiAoaXNDeWNsaW5nKSB7XG4gICAgICB0aGlzLmN5Y2xlKClcbiAgICB9XG4gIH1cblxuICBfaXNBbmltYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TTElERSlcbiAgfVxuXG4gIF9nZXRBY3RpdmUoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfQUNUSVZFX0lURU0sIHRoaXMuX2VsZW1lbnQpXG4gIH1cblxuICBfZ2V0SXRlbXMoKSB7XG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoU0VMRUNUT1JfSVRFTSwgdGhpcy5fZWxlbWVudClcbiAgfVxuXG4gIF9jbGVhckludGVydmFsKCkge1xuICAgIGlmICh0aGlzLl9pbnRlcnZhbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9pbnRlcnZhbClcbiAgICAgIHRoaXMuX2ludGVydmFsID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIF9kaXJlY3Rpb25Ub09yZGVyKGRpcmVjdGlvbikge1xuICAgIGlmIChpc1JUTCgpKSB7XG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSBESVJFQ1RJT05fTEVGVCA/IE9SREVSX1BSRVYgOiBPUkRFUl9ORVhUXG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gRElSRUNUSU9OX0xFRlQgPyBPUkRFUl9ORVhUIDogT1JERVJfUFJFVlxuICB9XG5cbiAgX29yZGVyVG9EaXJlY3Rpb24ob3JkZXIpIHtcbiAgICBpZiAoaXNSVEwoKSkge1xuICAgICAgcmV0dXJuIG9yZGVyID09PSBPUkRFUl9QUkVWID8gRElSRUNUSU9OX0xFRlQgOiBESVJFQ1RJT05fUklHSFRcbiAgICB9XG5cbiAgICByZXR1cm4gb3JkZXIgPT09IE9SREVSX1BSRVYgPyBESVJFQ1RJT05fUklHSFQgOiBESVJFQ1RJT05fTEVGVFxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gQ2Fyb3VzZWwuZ2V0T3JDcmVhdGVJbnN0YW5jZSh0aGlzLCBjb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnbnVtYmVyJykge1xuICAgICAgICBkYXRhLnRvKGNvbmZpZylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfU0xJREUsIGZ1bmN0aW9uIChldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKHRoaXMpXG5cbiAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9DQVJPVVNFTCkpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBjYXJvdXNlbCA9IENhcm91c2VsLmdldE9yQ3JlYXRlSW5zdGFuY2UodGFyZ2V0KVxuICBjb25zdCBzbGlkZUluZGV4ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtc2xpZGUtdG8nKVxuXG4gIGlmIChzbGlkZUluZGV4KSB7XG4gICAgY2Fyb3VzZWwudG8oc2xpZGVJbmRleClcbiAgICBjYXJvdXNlbC5fbWF5YmVFbmFibGVDeWNsZSgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoTWFuaXB1bGF0b3IuZ2V0RGF0YUF0dHJpYnV0ZSh0aGlzLCAnc2xpZGUnKSA9PT0gJ25leHQnKSB7XG4gICAgY2Fyb3VzZWwubmV4dCgpXG4gICAgY2Fyb3VzZWwuX21heWJlRW5hYmxlQ3ljbGUoKVxuICAgIHJldHVyblxuICB9XG5cbiAgY2Fyb3VzZWwucHJldigpXG4gIGNhcm91c2VsLl9tYXliZUVuYWJsZUN5Y2xlKClcbn0pXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1JJREUpXG5cbiAgZm9yIChjb25zdCBjYXJvdXNlbCBvZiBjYXJvdXNlbHMpIHtcbiAgICBDYXJvdXNlbC5nZXRPckNyZWF0ZUluc3RhbmNlKGNhcm91c2VsKVxuICB9XG59KVxuXG4vKipcbiAqIGpRdWVyeVxuICovXG5cbmRlZmluZUpRdWVyeVBsdWdpbihDYXJvdXNlbClcblxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzZWxcbiIsICJpbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcImpzL2Jvb3RzdHJhcC9zcmMvY2Fyb3VzZWxcIjtcblxuKCgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oXCIuY2Fyb3VzZWxcIikuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBuZXcgQ2Fyb3VzZWwoZWwpXG4gIH0pXG59KSgpXG4iLCAiKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsb2FkZWQgPSAoaW1nOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJbWFnZUVsZW1lbnQ+KCcuaGItZ2FsbGVyeS1hbGJ1bS1pdGVtcyBpbWcnKVxuICAgICAgICBmb3IgKGNvbnN0IGltZyBvZiBpbWFnZXMpIHtcbiAgICAgICAgICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQoaW1nKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkKGltZylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn0pKClcbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdG9vbHRpcC5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCAqIGFzIFBvcHBlciBmcm9tICdAcG9wcGVyanMvY29yZSdcbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgTWFuaXB1bGF0b3IgZnJvbSAnLi9kb20vbWFuaXB1bGF0b3IuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sIGV4ZWN1dGUsIGZpbmRTaGFkb3dSb290LCBnZXRFbGVtZW50LCBnZXRVSUQsIGlzUlRMLCBub29wXG59IGZyb20gJy4vdXRpbC9pbmRleC5qcydcbmltcG9ydCB7IERlZmF1bHRBbGxvd2xpc3QgfSBmcm9tICcuL3V0aWwvc2FuaXRpemVyLmpzJ1xuaW1wb3J0IFRlbXBsYXRlRmFjdG9yeSBmcm9tICcuL3V0aWwvdGVtcGxhdGUtZmFjdG9yeS5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3Rvb2x0aXAnXG5jb25zdCBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBuZXcgU2V0KFsnc2FuaXRpemUnLCAnYWxsb3dMaXN0JywgJ3Nhbml0aXplRm4nXSlcblxuY29uc3QgQ0xBU1NfTkFNRV9GQURFID0gJ2ZhZGUnXG5jb25zdCBDTEFTU19OQU1FX01PREFMID0gJ21vZGFsJ1xuY29uc3QgQ0xBU1NfTkFNRV9TSE9XID0gJ3Nob3cnXG5cbmNvbnN0IFNFTEVDVE9SX1RPT0xUSVBfSU5ORVIgPSAnLnRvb2x0aXAtaW5uZXInXG5jb25zdCBTRUxFQ1RPUl9NT0RBTCA9IGAuJHtDTEFTU19OQU1FX01PREFMfWBcblxuY29uc3QgRVZFTlRfTU9EQUxfSElERSA9ICdoaWRlLmJzLm1vZGFsJ1xuXG5jb25zdCBUUklHR0VSX0hPVkVSID0gJ2hvdmVyJ1xuY29uc3QgVFJJR0dFUl9GT0NVUyA9ICdmb2N1cydcbmNvbnN0IFRSSUdHRVJfQ0xJQ0sgPSAnY2xpY2snXG5jb25zdCBUUklHR0VSX01BTlVBTCA9ICdtYW51YWwnXG5cbmNvbnN0IEVWRU5UX0hJREUgPSAnaGlkZSdcbmNvbnN0IEVWRU5UX0hJRERFTiA9ICdoaWRkZW4nXG5jb25zdCBFVkVOVF9TSE9XID0gJ3Nob3cnXG5jb25zdCBFVkVOVF9TSE9XTiA9ICdzaG93bidcbmNvbnN0IEVWRU5UX0lOU0VSVEVEID0gJ2luc2VydGVkJ1xuY29uc3QgRVZFTlRfQ0xJQ0sgPSAnY2xpY2snXG5jb25zdCBFVkVOVF9GT0NVU0lOID0gJ2ZvY3VzaW4nXG5jb25zdCBFVkVOVF9GT0NVU09VVCA9ICdmb2N1c291dCdcbmNvbnN0IEVWRU5UX01PVVNFRU5URVIgPSAnbW91c2VlbnRlcidcbmNvbnN0IEVWRU5UX01PVVNFTEVBVkUgPSAnbW91c2VsZWF2ZSdcblxuY29uc3QgQXR0YWNobWVudE1hcCA9IHtcbiAgQVVUTzogJ2F1dG8nLFxuICBUT1A6ICd0b3AnLFxuICBSSUdIVDogaXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gIEJPVFRPTTogJ2JvdHRvbScsXG4gIExFRlQ6IGlzUlRMKCkgPyAncmlnaHQnIDogJ2xlZnQnXG59XG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIGFsbG93TGlzdDogRGVmYXVsdEFsbG93bGlzdCxcbiAgYW5pbWF0aW9uOiB0cnVlLFxuICBib3VuZGFyeTogJ2NsaXBwaW5nUGFyZW50cycsXG4gIGNvbnRhaW5lcjogZmFsc2UsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgZGVsYXk6IDAsXG4gIGZhbGxiYWNrUGxhY2VtZW50czogWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXSxcbiAgaHRtbDogZmFsc2UsXG4gIG9mZnNldDogWzAsIDZdLFxuICBwbGFjZW1lbnQ6ICd0b3AnLFxuICBwb3BwZXJDb25maWc6IG51bGwsXG4gIHNhbml0aXplOiB0cnVlLFxuICBzYW5pdGl6ZUZuOiBudWxsLFxuICBzZWxlY3RvcjogZmFsc2UsXG4gIHRlbXBsYXRlOiAnPGRpdiBjbGFzcz1cInRvb2x0aXBcIiByb2xlPVwidG9vbHRpcFwiPicgK1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48L2Rpdj4nICtcbiAgICAgICAgICAgICc8L2Rpdj4nLFxuICB0aXRsZTogJycsXG4gIHRyaWdnZXI6ICdob3ZlciBmb2N1cydcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIGFuaW1hdGlvbjogJ2Jvb2xlYW4nLFxuICBib3VuZGFyeTogJyhzdHJpbmd8ZWxlbWVudCknLFxuICBjb250YWluZXI6ICcoc3RyaW5nfGVsZW1lbnR8Ym9vbGVhbiknLFxuICBjdXN0b21DbGFzczogJyhzdHJpbmd8ZnVuY3Rpb24pJyxcbiAgZGVsYXk6ICcobnVtYmVyfG9iamVjdCknLFxuICBmYWxsYmFja1BsYWNlbWVudHM6ICdhcnJheScsXG4gIGh0bWw6ICdib29sZWFuJyxcbiAgb2Zmc2V0OiAnKGFycmF5fHN0cmluZ3xmdW5jdGlvbiknLFxuICBwbGFjZW1lbnQ6ICcoc3RyaW5nfGZ1bmN0aW9uKScsXG4gIHBvcHBlckNvbmZpZzogJyhudWxsfG9iamVjdHxmdW5jdGlvbiknLFxuICBzYW5pdGl6ZTogJ2Jvb2xlYW4nLFxuICBzYW5pdGl6ZUZuOiAnKG51bGx8ZnVuY3Rpb24pJyxcbiAgc2VsZWN0b3I6ICcoc3RyaW5nfGJvb2xlYW4pJyxcbiAgdGVtcGxhdGU6ICdzdHJpbmcnLFxuICB0aXRsZTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbiknLFxuICB0cmlnZ2VyOiAnc3RyaW5nJ1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUb29sdGlwIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIGlmICh0eXBlb2YgUG9wcGVyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9vdHN0cmFwXFwncyB0b29sdGlwcyByZXF1aXJlIFBvcHBlciAoaHR0cHM6Ly9wb3BwZXIuanMub3JnKScpXG4gICAgfVxuXG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgLy8gUHJpdmF0ZVxuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgICB0aGlzLl90aW1lb3V0ID0gMFxuICAgIHRoaXMuX2lzSG92ZXJlZCA9IG51bGxcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyID0ge31cbiAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgdGhpcy5fdGVtcGxhdGVGYWN0b3J5ID0gbnVsbFxuICAgIHRoaXMuX25ld0NvbnRlbnQgPSBudWxsXG5cbiAgICAvLyBQcm90ZWN0ZWRcbiAgICB0aGlzLnRpcCA9IG51bGxcblxuICAgIHRoaXMuX3NldExpc3RlbmVycygpXG5cbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3Rvcikge1xuICAgICAgdGhpcy5fZml4VGl0bGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuX2lzRW5hYmxlZCA9IHRydWVcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gZmFsc2VcbiAgfVxuXG4gIHRvZ2dsZUVuYWJsZWQoKSB7XG4gICAgdGhpcy5faXNFbmFibGVkID0gIXRoaXMuX2lzRW5hYmxlZFxuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgIGlmICghdGhpcy5faXNFbmFibGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyLmNsaWNrID0gIXRoaXMuX2FjdGl2ZVRyaWdnZXIuY2xpY2tcbiAgICBpZiAodGhpcy5faXNTaG93bigpKSB7XG4gICAgICB0aGlzLl9sZWF2ZSgpXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLl9lbnRlcigpXG4gIH1cblxuICBkaXNwb3NlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KVxuXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9lbGVtZW50LmNsb3Nlc3QoU0VMRUNUT1JfTU9EQUwpLCBFVkVOVF9NT0RBTF9ISURFLCB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyKVxuXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsIHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJykpXG4gICAgfVxuXG4gICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgc3VwZXIuZGlzcG9zZSgpXG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9lbGVtZW50LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgdXNlIHNob3cgb24gdmlzaWJsZSBlbGVtZW50cycpXG4gICAgfVxuXG4gICAgaWYgKCEodGhpcy5faXNXaXRoQ29udGVudCgpICYmIHRoaXMuX2lzRW5hYmxlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHNob3dFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX1NIT1cpKVxuICAgIGNvbnN0IHNoYWRvd1Jvb3QgPSBmaW5kU2hhZG93Um9vdCh0aGlzLl9lbGVtZW50KVxuICAgIGNvbnN0IGlzSW5UaGVEb20gPSAoc2hhZG93Um9vdCB8fCB0aGlzLl9lbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5jb250YWlucyh0aGlzLl9lbGVtZW50KVxuXG4gICAgaWYgKHNob3dFdmVudC5kZWZhdWx0UHJldmVudGVkIHx8ICFpc0luVGhlRG9tKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBUT0RPOiB2NiByZW1vdmUgdGhpcyBvciBtYWtlIGl0IG9wdGlvbmFsXG4gICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG5cbiAgICBjb25zdCB0aXAgPSB0aGlzLl9nZXRUaXBFbGVtZW50KClcblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JywgdGlwLmdldEF0dHJpYnV0ZSgnaWQnKSlcblxuICAgIGNvbnN0IHsgY29udGFpbmVyIH0gPSB0aGlzLl9jb25maWdcblxuICAgIGlmICghdGhpcy5fZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyh0aGlzLnRpcCkpIHtcbiAgICAgIGNvbnRhaW5lci5hcHBlbmQodGlwKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSU5TRVJURUQpKVxuICAgIH1cblxuICAgIHRoaXMuX3BvcHBlciA9IHRoaXMuX2NyZWF0ZVBvcHBlcih0aXApXG5cbiAgICB0aXAuY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX1NIT1cpXG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgdG91Y2gtZW5hYmxlZCBkZXZpY2Ugd2UgYWRkIGV4dHJhXG4gICAgLy8gZW1wdHkgbW91c2VvdmVyIGxpc3RlbmVycyB0byB0aGUgYm9keSdzIGltbWVkaWF0ZSBjaGlsZHJlbjtcbiAgICAvLyBvbmx5IG5lZWRlZCBiZWNhdXNlIG9mIGJyb2tlbiBldmVudCBkZWxlZ2F0aW9uIG9uIGlPU1xuICAgIC8vIGh0dHBzOi8vd3d3LnF1aXJrc21vZGUub3JnL2Jsb2cvYXJjaGl2ZXMvMjAxNC8wMi9tb3VzZV9ldmVudF9idWIuaHRtbFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKGVsZW1lbnQsICdtb3VzZW92ZXInLCBub29wKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfU0hPV04pKVxuXG4gICAgICBpZiAodGhpcy5faXNIb3ZlcmVkID09PSBmYWxzZSkge1xuICAgICAgICB0aGlzLl9sZWF2ZSgpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2lzSG92ZXJlZCA9IGZhbHNlXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgdGhpcy50aXAsIHRoaXMuX2lzQW5pbWF0ZWQoKSlcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1Nob3duKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IGhpZGVFdmVudCA9IEV2ZW50SGFuZGxlci50cmlnZ2VyKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0hJREUpKVxuICAgIGlmIChoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGlwRWxlbWVudCgpXG4gICAgdGlwLmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgLy8gSWYgdGhpcyBpcyBhIHRvdWNoLWVuYWJsZWQgZGV2aWNlIHdlIHJlbW92ZSB0aGUgZXh0cmFcbiAgICAvLyBlbXB0eSBtb3VzZW92ZXIgbGlzdGVuZXJzIHdlIGFkZGVkIGZvciBpT1Mgc3VwcG9ydFxuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBbXS5jb25jYXQoLi4uZG9jdW1lbnQuYm9keS5jaGlsZHJlbikpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9mZihlbGVtZW50LCAnbW91c2VvdmVyJywgbm9vcClcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfQ0xJQ0tdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfRk9DVVNdID0gZmFsc2VcbiAgICB0aGlzLl9hY3RpdmVUcmlnZ2VyW1RSSUdHRVJfSE9WRVJdID0gZmFsc2VcbiAgICB0aGlzLl9pc0hvdmVyZWQgPSBudWxsIC8vIGl0IGlzIGEgdHJpY2sgdG8gc3VwcG9ydCBtYW51YWwgdHJpZ2dlcmluZ1xuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNXaXRoQWN0aXZlVHJpZ2dlcigpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgICB0aGlzLl9kaXNwb3NlUG9wcGVyKClcbiAgICAgIH1cblxuICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkYnknKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfSElEREVOKSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCB0aGlzLnRpcCwgdGhpcy5faXNBbmltYXRlZCgpKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLl9wb3BwZXIpIHtcbiAgICAgIHRoaXMuX3BvcHBlci51cGRhdGUoKVxuICAgIH1cbiAgfVxuXG4gIC8vIFByb3RlY3RlZFxuICBfaXNXaXRoQ29udGVudCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLl9nZXRUaXRsZSgpKVxuICB9XG5cbiAgX2dldFRpcEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLnRpcCkge1xuICAgICAgdGhpcy50aXAgPSB0aGlzLl9jcmVhdGVUaXBFbGVtZW50KHRoaXMuX25ld0NvbnRlbnQgfHwgdGhpcy5fZ2V0Q29udGVudEZvclRlbXBsYXRlKCkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudGlwXG4gIH1cblxuICBfY3JlYXRlVGlwRWxlbWVudChjb250ZW50KSB7XG4gICAgY29uc3QgdGlwID0gdGhpcy5fZ2V0VGVtcGxhdGVGYWN0b3J5KGNvbnRlbnQpLnRvSHRtbCgpXG5cbiAgICAvLyBUT0RPOiByZW1vdmUgdGhpcyBjaGVjayBpbiB2NlxuICAgIGlmICghdGlwKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHRpcC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfRkFERSwgQ0xBU1NfTkFNRV9TSE9XKVxuICAgIC8vIFRPRE86IHY2IHRoZSBmb2xsb3dpbmcgY2FuIGJlIGFjaGlldmVkIHdpdGggQ1NTIG9ubHlcbiAgICB0aXAuY2xhc3NMaXN0LmFkZChgYnMtJHt0aGlzLmNvbnN0cnVjdG9yLk5BTUV9LWF1dG9gKVxuXG4gICAgY29uc3QgdGlwSWQgPSBnZXRVSUQodGhpcy5jb25zdHJ1Y3Rvci5OQU1FKS50b1N0cmluZygpXG5cbiAgICB0aXAuc2V0QXR0cmlidXRlKCdpZCcsIHRpcElkKVxuXG4gICAgaWYgKHRoaXMuX2lzQW5pbWF0ZWQoKSkge1xuICAgICAgdGlwLmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9GQURFKVxuICAgIH1cblxuICAgIHJldHVybiB0aXBcbiAgfVxuXG4gIHNldENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMuX25ld0NvbnRlbnQgPSBjb250ZW50XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5fZGlzcG9zZVBvcHBlcigpXG4gICAgICB0aGlzLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRUZW1wbGF0ZUZhY3RvcnkoY29udGVudCkge1xuICAgIGlmICh0aGlzLl90ZW1wbGF0ZUZhY3RvcnkpIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeS5jaGFuZ2VDb250ZW50KGNvbnRlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3RlbXBsYXRlRmFjdG9yeSA9IG5ldyBUZW1wbGF0ZUZhY3Rvcnkoe1xuICAgICAgICAuLi50aGlzLl9jb25maWcsXG4gICAgICAgIC8vIHRoZSBgY29udGVudGAgdmFyIGhhcyB0byBiZSBhZnRlciBgdGhpcy5fY29uZmlnYFxuICAgICAgICAvLyB0byBvdmVycmlkZSBjb25maWcuY29udGVudCBpbiBjYXNlIG9mIHBvcG92ZXJcbiAgICAgICAgY29udGVudCxcbiAgICAgICAgZXh0cmFDbGFzczogdGhpcy5fcmVzb2x2ZVBvc3NpYmxlRnVuY3Rpb24odGhpcy5fY29uZmlnLmN1c3RvbUNsYXNzKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVGYWN0b3J5XG4gIH1cblxuICBfZ2V0Q29udGVudEZvclRlbXBsYXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBbU0VMRUNUT1JfVE9PTFRJUF9JTk5FUl06IHRoaXMuX2dldFRpdGxlKClcbiAgICB9XG4gIH1cblxuICBfZ2V0VGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy50aXRsZSkgfHwgdGhpcy5fZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnMtb3JpZ2luYWwtdGl0bGUnKVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfaW5pdGlhbGl6ZU9uRGVsZWdhdGVkVGFyZ2V0KGV2ZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0T3JDcmVhdGVJbnN0YW5jZShldmVudC5kZWxlZ2F0ZVRhcmdldCwgdGhpcy5fZ2V0RGVsZWdhdGVDb25maWcoKSlcbiAgfVxuXG4gIF9pc0FuaW1hdGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuYW5pbWF0aW9uIHx8ICh0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9pc1Nob3duKCkge1xuICAgIHJldHVybiB0aGlzLnRpcCAmJiB0aGlzLnRpcC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9TSE9XKVxuICB9XG5cbiAgX2NyZWF0ZVBvcHBlcih0aXApIHtcbiAgICBjb25zdCBwbGFjZW1lbnQgPSBleGVjdXRlKHRoaXMuX2NvbmZpZy5wbGFjZW1lbnQsIFt0aGlzLCB0aXAsIHRoaXMuX2VsZW1lbnRdKVxuICAgIGNvbnN0IGF0dGFjaG1lbnQgPSBBdHRhY2htZW50TWFwW3BsYWNlbWVudC50b1VwcGVyQ2FzZSgpXVxuICAgIHJldHVybiBQb3BwZXIuY3JlYXRlUG9wcGVyKHRoaXMuX2VsZW1lbnQsIHRpcCwgdGhpcy5fZ2V0UG9wcGVyQ29uZmlnKGF0dGFjaG1lbnQpKVxuICB9XG5cbiAgX2dldE9mZnNldCgpIHtcbiAgICBjb25zdCB7IG9mZnNldCB9ID0gdGhpcy5fY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIG9mZnNldCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBvZmZzZXQuc3BsaXQoJywnKS5tYXAodmFsdWUgPT4gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCkpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBwb3BwZXJEYXRhID0+IG9mZnNldChwb3BwZXJEYXRhLCB0aGlzLl9lbGVtZW50KVxuICAgIH1cblxuICAgIHJldHVybiBvZmZzZXRcbiAgfVxuXG4gIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzLl9lbGVtZW50XSlcbiAgfVxuXG4gIF9nZXRQb3BwZXJDb25maWcoYXR0YWNobWVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRCc1BvcHBlckNvbmZpZyA9IHtcbiAgICAgIHBsYWNlbWVudDogYXR0YWNobWVudCxcbiAgICAgIG1vZGlmaWVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2ZsaXAnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGZhbGxiYWNrUGxhY2VtZW50czogdGhpcy5fY29uZmlnLmZhbGxiYWNrUGxhY2VtZW50c1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6ICdvZmZzZXQnLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIG9mZnNldDogdGhpcy5fZ2V0T2Zmc2V0KClcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJldmVudE92ZXJmbG93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBib3VuZGFyeTogdGhpcy5fY29uZmlnLmJvdW5kYXJ5XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogJ2Fycm93JyxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBlbGVtZW50OiBgLiR7dGhpcy5jb25zdHJ1Y3Rvci5OQU1FfS1hcnJvd2BcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiAncHJlU2V0UGxhY2VtZW50JyxcbiAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgIHBoYXNlOiAnYmVmb3JlTWFpbicsXG4gICAgICAgICAgZm46IGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gUHJlLXNldCBQb3BwZXIncyBwbGFjZW1lbnQgYXR0cmlidXRlIGluIG9yZGVyIHRvIHJlYWQgdGhlIGFycm93IHNpemVzIHByb3Blcmx5LlxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBQb3BwZXIgbWl4ZXMgdXAgdGhlIHdpZHRoIGFuZCBoZWlnaHQgZGltZW5zaW9ucyBzaW5jZSB0aGUgaW5pdGlhbCBhcnJvdyBzdHlsZSBpcyBmb3IgdG9wIHBsYWNlbWVudFxuICAgICAgICAgICAgdGhpcy5fZ2V0VGlwRWxlbWVudCgpLnNldEF0dHJpYnV0ZSgnZGF0YS1wb3BwZXItcGxhY2VtZW50JywgZGF0YS5zdGF0ZS5wbGFjZW1lbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLmRlZmF1bHRCc1BvcHBlckNvbmZpZyxcbiAgICAgIC4uLmV4ZWN1dGUodGhpcy5fY29uZmlnLnBvcHBlckNvbmZpZywgW2RlZmF1bHRCc1BvcHBlckNvbmZpZ10pXG4gICAgfVxuICB9XG5cbiAgX3NldExpc3RlbmVycygpIHtcbiAgICBjb25zdCB0cmlnZ2VycyA9IHRoaXMuX2NvbmZpZy50cmlnZ2VyLnNwbGl0KCcgJylcblxuICAgIGZvciAoY29uc3QgdHJpZ2dlciBvZiB0cmlnZ2Vycykge1xuICAgICAgaWYgKHRyaWdnZXIgPT09ICdjbGljaycpIHtcbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIHRoaXMuY29uc3RydWN0b3IuZXZlbnROYW1lKEVWRU5UX0NMSUNLKSwgdGhpcy5fY29uZmlnLnNlbGVjdG9yLCBldmVudCA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuX2luaXRpYWxpemVPbkRlbGVnYXRlZFRhcmdldChldmVudClcbiAgICAgICAgICBjb250ZXh0LnRvZ2dsZSgpXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKHRyaWdnZXIgIT09IFRSSUdHRVJfTUFOVUFMKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50SW4gPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUVOVEVSKSA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfRk9DVVNJTilcbiAgICAgICAgY29uc3QgZXZlbnRPdXQgPSB0cmlnZ2VyID09PSBUUklHR0VSX0hPVkVSID9cbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLmV2ZW50TmFtZShFVkVOVF9NT1VTRUxFQVZFKSA6XG4gICAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5ldmVudE5hbWUoRVZFTlRfRk9DVVNPVVQpXG5cbiAgICAgICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIGV2ZW50SW4sIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNpbicgPyBUUklHR0VSX0ZPQ1VTIDogVFJJR0dFUl9IT1ZFUl0gPSB0cnVlXG4gICAgICAgICAgY29udGV4dC5fZW50ZXIoKVxuICAgICAgICB9KVxuICAgICAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudCwgZXZlbnRPdXQsIHRoaXMuX2NvbmZpZy5zZWxlY3RvciwgZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLl9pbml0aWFsaXplT25EZWxlZ2F0ZWRUYXJnZXQoZXZlbnQpXG4gICAgICAgICAgY29udGV4dC5fYWN0aXZlVHJpZ2dlcltldmVudC50eXBlID09PSAnZm9jdXNvdXQnID8gVFJJR0dFUl9GT0NVUyA6IFRSSUdHRVJfSE9WRVJdID1cbiAgICAgICAgICAgIGNvbnRleHQuX2VsZW1lbnQuY29udGFpbnMoZXZlbnQucmVsYXRlZFRhcmdldClcblxuICAgICAgICAgIGNvbnRleHQuX2xlYXZlKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9oaWRlTW9kYWxIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBFdmVudEhhbmRsZXIub24odGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX01PREFMKSwgRVZFTlRfTU9EQUxfSElERSwgdGhpcy5faGlkZU1vZGFsSGFuZGxlcilcbiAgfVxuXG4gIF9maXhUaXRsZSgpIHtcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpXG5cbiAgICBpZiAoIXRpdGxlKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJykgJiYgIXRoaXMuX2VsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpKSB7XG4gICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHRpdGxlKVxuICAgIH1cblxuICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdkYXRhLWJzLW9yaWdpbmFsLXRpdGxlJywgdGl0bGUpIC8vIERPIE5PVCBVU0UgSVQuIElzIG9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3RpdGxlJylcbiAgfVxuXG4gIF9lbnRlcigpIHtcbiAgICBpZiAodGhpcy5faXNTaG93bigpIHx8IHRoaXMuX2lzSG92ZXJlZCkge1xuICAgICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gdHJ1ZVxuXG4gICAgdGhpcy5fc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faXNIb3ZlcmVkKSB7XG4gICAgICAgIHRoaXMuc2hvdygpXG4gICAgICB9XG4gICAgfSwgdGhpcy5fY29uZmlnLmRlbGF5LnNob3cpXG4gIH1cblxuICBfbGVhdmUoKSB7XG4gICAgaWYgKHRoaXMuX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5faXNIb3ZlcmVkID0gZmFsc2VcblxuICAgIHRoaXMuX3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9pc0hvdmVyZWQpIHtcbiAgICAgICAgdGhpcy5oaWRlKClcbiAgICAgIH1cbiAgICB9LCB0aGlzLl9jb25maWcuZGVsYXkuaGlkZSlcbiAgfVxuXG4gIF9zZXRUaW1lb3V0KGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZW91dClcbiAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChoYW5kbGVyLCB0aW1lb3V0KVxuICB9XG5cbiAgX2lzV2l0aEFjdGl2ZVRyaWdnZXIoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fYWN0aXZlVHJpZ2dlcikuaW5jbHVkZXModHJ1ZSlcbiAgfVxuXG4gIF9nZXRDb25maWcoY29uZmlnKSB7XG4gICAgY29uc3QgZGF0YUF0dHJpYnV0ZXMgPSBNYW5pcHVsYXRvci5nZXREYXRhQXR0cmlidXRlcyh0aGlzLl9lbGVtZW50KVxuXG4gICAgZm9yIChjb25zdCBkYXRhQXR0cmlidXRlIG9mIE9iamVjdC5rZXlzKGRhdGFBdHRyaWJ1dGVzKSkge1xuICAgICAgaWYgKERJU0FMTE9XRURfQVRUUklCVVRFUy5oYXMoZGF0YUF0dHJpYnV0ZSkpIHtcbiAgICAgICAgZGVsZXRlIGRhdGFBdHRyaWJ1dGVzW2RhdGFBdHRyaWJ1dGVdXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnID0ge1xuICAgICAgLi4uZGF0YUF0dHJpYnV0ZXMsXG4gICAgICAuLi4odHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcgJiYgY29uZmlnID8gY29uZmlnIDoge30pXG4gICAgfVxuICAgIGNvbmZpZyA9IHRoaXMuX21lcmdlQ29uZmlnT2JqKGNvbmZpZylcbiAgICBjb25maWcgPSB0aGlzLl9jb25maWdBZnRlck1lcmdlKGNvbmZpZylcbiAgICB0aGlzLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy5jb250YWluZXIgPSBjb25maWcuY29udGFpbmVyID09PSBmYWxzZSA/IGRvY3VtZW50LmJvZHkgOiBnZXRFbGVtZW50KGNvbmZpZy5jb250YWluZXIpXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy5kZWxheSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5kZWxheSA9IHtcbiAgICAgICAgc2hvdzogY29uZmlnLmRlbGF5LFxuICAgICAgICBoaWRlOiBjb25maWcuZGVsYXlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aXRsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy50aXRsZSA9IGNvbmZpZy50aXRsZS50b1N0cmluZygpXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBjb25maWcuY29udGVudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGNvbmZpZy5jb250ZW50ID0gY29uZmlnLmNvbnRlbnQudG9TdHJpbmcoKVxuICAgIH1cblxuICAgIHJldHVybiBjb25maWdcbiAgfVxuXG4gIF9nZXREZWxlZ2F0ZUNvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB7fVxuXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKSkge1xuICAgICAgaWYgKHRoaXMuY29uc3RydWN0b3IuRGVmYXVsdFtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICBjb25maWdba2V5XSA9IHZhbHVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uZmlnLnNlbGVjdG9yID0gZmFsc2VcbiAgICBjb25maWcudHJpZ2dlciA9ICdtYW51YWwnXG5cbiAgICAvLyBJbiB0aGUgZnV0dXJlIGNhbiBiZSByZXBsYWNlZCB3aXRoOlxuICAgIC8vIGNvbnN0IGtleXNXaXRoRGlmZmVyZW50VmFsdWVzID0gT2JqZWN0LmVudHJpZXModGhpcy5fY29uZmlnKS5maWx0ZXIoZW50cnkgPT4gdGhpcy5jb25zdHJ1Y3Rvci5EZWZhdWx0W2VudHJ5WzBdXSAhPT0gdGhpcy5fY29uZmlnW2VudHJ5WzBdXSlcbiAgICAvLyBgT2JqZWN0LmZyb21FbnRyaWVzKGtleXNXaXRoRGlmZmVyZW50VmFsdWVzKWBcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZGlzcG9zZVBvcHBlcigpIHtcbiAgICBpZiAodGhpcy5fcG9wcGVyKSB7XG4gICAgICB0aGlzLl9wb3BwZXIuZGVzdHJveSgpXG4gICAgICB0aGlzLl9wb3BwZXIgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGlwKSB7XG4gICAgICB0aGlzLnRpcC5yZW1vdmUoKVxuICAgICAgdGhpcy50aXAgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgLy8gU3RhdGljXG4gIHN0YXRpYyBqUXVlcnlJbnRlcmZhY2UoY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zdCBkYXRhID0gVG9vbHRpcC5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oVG9vbHRpcClcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcFxuIiwgIi8qKlxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIEJvb3RzdHJhcCB1dGlsL3Nhbml0aXplci5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbi8vIGpzLWRvY3Mtc3RhcnQgYWxsb3ctbGlzdFxuY29uc3QgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTiA9IC9eYXJpYS1bXFx3LV0qJC9pXG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0QWxsb3dsaXN0ID0ge1xuICAvLyBHbG9iYWwgYXR0cmlidXRlcyBhbGxvd2VkIG9uIGFueSBzdXBwbGllZCBlbGVtZW50IGJlbG93LlxuICAnKic6IFsnY2xhc3MnLCAnZGlyJywgJ2lkJywgJ2xhbmcnLCAncm9sZScsIEFSSUFfQVRUUklCVVRFX1BBVFRFUk5dLFxuICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxuICBhcmVhOiBbXSxcbiAgYjogW10sXG4gIGJyOiBbXSxcbiAgY29sOiBbXSxcbiAgY29kZTogW10sXG4gIGRkOiBbXSxcbiAgZGl2OiBbXSxcbiAgZGw6IFtdLFxuICBkdDogW10sXG4gIGVtOiBbXSxcbiAgaHI6IFtdLFxuICBoMTogW10sXG4gIGgyOiBbXSxcbiAgaDM6IFtdLFxuICBoNDogW10sXG4gIGg1OiBbXSxcbiAgaDY6IFtdLFxuICBpOiBbXSxcbiAgaW1nOiBbJ3NyYycsICdzcmNzZXQnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxuICBsaTogW10sXG4gIG9sOiBbXSxcbiAgcDogW10sXG4gIHByZTogW10sXG4gIHM6IFtdLFxuICBzbWFsbDogW10sXG4gIHNwYW46IFtdLFxuICBzdWI6IFtdLFxuICBzdXA6IFtdLFxuICBzdHJvbmc6IFtdLFxuICB1OiBbXSxcbiAgdWw6IFtdXG59XG4vLyBqcy1kb2NzLWVuZCBhbGxvdy1saXN0XG5cbmNvbnN0IHVyaUF0dHJpYnV0ZXMgPSBuZXcgU2V0KFtcbiAgJ2JhY2tncm91bmQnLFxuICAnY2l0ZScsXG4gICdocmVmJyxcbiAgJ2l0ZW10eXBlJyxcbiAgJ2xvbmdkZXNjJyxcbiAgJ3Bvc3RlcicsXG4gICdzcmMnLFxuICAneGxpbms6aHJlZidcbl0pXG5cbi8qKlxuICogQSBwYXR0ZXJuIHRoYXQgcmVjb2duaXplcyBVUkxzIHRoYXQgYXJlIHNhZmUgd3J0LiBYU1MgaW4gVVJMIG5hdmlnYXRpb25cbiAqIGNvbnRleHRzLlxuICpcbiAqIFNob3V0LW91dCB0byBBbmd1bGFyIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi8xNS4yLjgvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHMjTDM4XG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSB1bmljb3JuL2JldHRlci1yZWdleFxuY29uc3QgU0FGRV9VUkxfUEFUVEVSTiA9IC9eKD8hamF2YXNjcmlwdDopKD86W2EtejAtOSsuLV0rOnxbXiY6Lz8jXSooPzpbLz8jXXwkKSkvaVxuXG5jb25zdCBhbGxvd2VkQXR0cmlidXRlID0gKGF0dHJpYnV0ZSwgYWxsb3dlZEF0dHJpYnV0ZUxpc3QpID0+IHtcbiAgY29uc3QgYXR0cmlidXRlTmFtZSA9IGF0dHJpYnV0ZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXG5cbiAgaWYgKGFsbG93ZWRBdHRyaWJ1dGVMaXN0LmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgaWYgKHVyaUF0dHJpYnV0ZXMuaGFzKGF0dHJpYnV0ZU5hbWUpKSB7XG4gICAgICByZXR1cm4gQm9vbGVhbihTQUZFX1VSTF9QQVRURVJOLnRlc3QoYXR0cmlidXRlLm5vZGVWYWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxuICByZXR1cm4gYWxsb3dlZEF0dHJpYnV0ZUxpc3QuZmlsdGVyKGF0dHJpYnV0ZVJlZ2V4ID0+IGF0dHJpYnV0ZVJlZ2V4IGluc3RhbmNlb2YgUmVnRXhwKVxuICAgIC5zb21lKHJlZ2V4ID0+IHJlZ2V4LnRlc3QoYXR0cmlidXRlTmFtZSkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZUh0bWwodW5zYWZlSHRtbCwgYWxsb3dMaXN0LCBzYW5pdGl6ZUZ1bmN0aW9uKSB7XG4gIGlmICghdW5zYWZlSHRtbC5sZW5ndGgpIHtcbiAgICByZXR1cm4gdW5zYWZlSHRtbFxuICB9XG5cbiAgaWYgKHNhbml0aXplRnVuY3Rpb24gJiYgdHlwZW9mIHNhbml0aXplRnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gc2FuaXRpemVGdW5jdGlvbih1bnNhZmVIdG1sKVxuICB9XG5cbiAgY29uc3QgZG9tUGFyc2VyID0gbmV3IHdpbmRvdy5ET01QYXJzZXIoKVxuICBjb25zdCBjcmVhdGVkRG9jdW1lbnQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKHVuc2FmZUh0bWwsICd0ZXh0L2h0bWwnKVxuICBjb25zdCBlbGVtZW50cyA9IFtdLmNvbmNhdCguLi5jcmVhdGVkRG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG5cbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgY29uc3QgZWxlbWVudE5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICghT2JqZWN0LmtleXMoYWxsb3dMaXN0KS5pbmNsdWRlcyhlbGVtZW50TmFtZSkpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKClcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgY29uc3QgYXR0cmlidXRlTGlzdCA9IFtdLmNvbmNhdCguLi5lbGVtZW50LmF0dHJpYnV0ZXMpXG4gICAgY29uc3QgYWxsb3dlZEF0dHJpYnV0ZXMgPSBbXS5jb25jYXQoYWxsb3dMaXN0WycqJ10gfHwgW10sIGFsbG93TGlzdFtlbGVtZW50TmFtZV0gfHwgW10pXG5cbiAgICBmb3IgKGNvbnN0IGF0dHJpYnV0ZSBvZiBhdHRyaWJ1dGVMaXN0KSB7XG4gICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0cmlidXRlLCBhbGxvd2VkQXR0cmlidXRlcykpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlLm5vZGVOYW1lKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUxcbn1cbiIsICIvKipcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBCb290c3RyYXAgdXRpbC90ZW1wbGF0ZS1mYWN0b3J5LmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IFNlbGVjdG9yRW5naW5lIGZyb20gJy4uL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQgQ29uZmlnIGZyb20gJy4vY29uZmlnLmpzJ1xuaW1wb3J0IHsgRGVmYXVsdEFsbG93bGlzdCwgc2FuaXRpemVIdG1sIH0gZnJvbSAnLi9zYW5pdGl6ZXIuanMnXG5pbXBvcnQgeyBleGVjdXRlLCBnZXRFbGVtZW50LCBpc0VsZW1lbnQgfSBmcm9tICcuL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnVGVtcGxhdGVGYWN0b3J5J1xuXG5jb25zdCBEZWZhdWx0ID0ge1xuICBhbGxvd0xpc3Q6IERlZmF1bHRBbGxvd2xpc3QsXG4gIGNvbnRlbnQ6IHt9LCAvLyB7IHNlbGVjdG9yIDogdGV4dCAsICBzZWxlY3RvcjIgOiB0ZXh0MiAsIH1cbiAgZXh0cmFDbGFzczogJycsXG4gIGh0bWw6IGZhbHNlLFxuICBzYW5pdGl6ZTogdHJ1ZSxcbiAgc2FuaXRpemVGbjogbnVsbCxcbiAgdGVtcGxhdGU6ICc8ZGl2PjwvZGl2Pidcbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIGFsbG93TGlzdDogJ29iamVjdCcsXG4gIGNvbnRlbnQ6ICdvYmplY3QnLFxuICBleHRyYUNsYXNzOiAnKHN0cmluZ3xmdW5jdGlvbiknLFxuICBodG1sOiAnYm9vbGVhbicsXG4gIHNhbml0aXplOiAnYm9vbGVhbicsXG4gIHNhbml0aXplRm46ICcobnVsbHxmdW5jdGlvbiknLFxuICB0ZW1wbGF0ZTogJ3N0cmluZydcbn1cblxuY29uc3QgRGVmYXVsdENvbnRlbnRUeXBlID0ge1xuICBlbnRyeTogJyhzdHJpbmd8ZWxlbWVudHxmdW5jdGlvbnxudWxsKScsXG4gIHNlbGVjdG9yOiAnKHN0cmluZ3xlbGVtZW50KSdcbn1cblxuLyoqXG4gKiBDbGFzcyBkZWZpbml0aW9uXG4gKi9cblxuY2xhc3MgVGVtcGxhdGVGYWN0b3J5IGV4dGVuZHMgQ29uZmlnIHtcbiAgY29uc3RydWN0b3IoY29uZmlnKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMuX2NvbmZpZyA9IHRoaXMuX2dldENvbmZpZyhjb25maWcpXG4gIH1cblxuICAvLyBHZXR0ZXJzXG4gIHN0YXRpYyBnZXQgRGVmYXVsdCgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFxuICB9XG5cbiAgc3RhdGljIGdldCBEZWZhdWx0VHlwZSgpIHtcbiAgICByZXR1cm4gRGVmYXVsdFR5cGVcbiAgfVxuXG4gIHN0YXRpYyBnZXQgTkFNRSgpIHtcbiAgICByZXR1cm4gTkFNRVxuICB9XG5cbiAgLy8gUHVibGljXG4gIGdldENvbnRlbnQoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5fY29uZmlnLmNvbnRlbnQpXG4gICAgICAubWFwKGNvbmZpZyA9PiB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb25maWcpKVxuICAgICAgLmZpbHRlcihCb29sZWFuKVxuICB9XG5cbiAgaGFzQ29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50KCkubGVuZ3RoID4gMFxuICB9XG5cbiAgY2hhbmdlQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy5fY2hlY2tDb250ZW50KGNvbnRlbnQpXG4gICAgdGhpcy5fY29uZmlnLmNvbnRlbnQgPSB7IC4uLnRoaXMuX2NvbmZpZy5jb250ZW50LCAuLi5jb250ZW50IH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdG9IdG1sKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGVtcGxhdGVXcmFwcGVyLmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUodGhpcy5fY29uZmlnLnRlbXBsYXRlKVxuXG4gICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIHRleHRdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuX2NvbmZpZy5jb250ZW50KSkge1xuICAgICAgdGhpcy5fc2V0Q29udGVudCh0ZW1wbGF0ZVdyYXBwZXIsIHRleHQsIHNlbGVjdG9yKVxuICAgIH1cblxuICAgIGNvbnN0IHRlbXBsYXRlID0gdGVtcGxhdGVXcmFwcGVyLmNoaWxkcmVuWzBdXG4gICAgY29uc3QgZXh0cmFDbGFzcyA9IHRoaXMuX3Jlc29sdmVQb3NzaWJsZUZ1bmN0aW9uKHRoaXMuX2NvbmZpZy5leHRyYUNsYXNzKVxuXG4gICAgaWYgKGV4dHJhQ2xhc3MpIHtcbiAgICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoLi4uZXh0cmFDbGFzcy5zcGxpdCgnICcpKVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZVxuICB9XG5cbiAgLy8gUHJpdmF0ZVxuICBfdHlwZUNoZWNrQ29uZmlnKGNvbmZpZykge1xuICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoY29uZmlnKVxuICAgIHRoaXMuX2NoZWNrQ29udGVudChjb25maWcuY29udGVudClcbiAgfVxuXG4gIF9jaGVja0NvbnRlbnQoYXJnKSB7XG4gICAgZm9yIChjb25zdCBbc2VsZWN0b3IsIGNvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKGFyZykpIHtcbiAgICAgIHN1cGVyLl90eXBlQ2hlY2tDb25maWcoeyBzZWxlY3RvciwgZW50cnk6IGNvbnRlbnQgfSwgRGVmYXVsdENvbnRlbnRUeXBlKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRDb250ZW50KHRlbXBsYXRlLCBjb250ZW50LCBzZWxlY3Rvcikge1xuICAgIGNvbnN0IHRlbXBsYXRlRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIHRlbXBsYXRlKVxuXG4gICAgaWYgKCF0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnRlbnQgPSB0aGlzLl9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihjb250ZW50KVxuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICB0ZW1wbGF0ZUVsZW1lbnQucmVtb3ZlKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChpc0VsZW1lbnQoY29udGVudCkpIHtcbiAgICAgIHRoaXMuX3B1dEVsZW1lbnRJblRlbXBsYXRlKGdldEVsZW1lbnQoY29udGVudCksIHRlbXBsYXRlRWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcuaHRtbCkge1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX21heWJlU2FuaXRpemUoY29udGVudClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRlbXBsYXRlRWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcbiAgfVxuXG4gIF9tYXliZVNhbml0aXplKGFyZykge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuc2FuaXRpemUgPyBzYW5pdGl6ZUh0bWwoYXJnLCB0aGlzLl9jb25maWcuYWxsb3dMaXN0LCB0aGlzLl9jb25maWcuc2FuaXRpemVGbikgOiBhcmdcbiAgfVxuXG4gIF9yZXNvbHZlUG9zc2libGVGdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZXhlY3V0ZShhcmcsIFt0aGlzXSlcbiAgfVxuXG4gIF9wdXRFbGVtZW50SW5UZW1wbGF0ZShlbGVtZW50LCB0ZW1wbGF0ZUVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5fY29uZmlnLmh0bWwpIHtcbiAgICAgIHRlbXBsYXRlRWxlbWVudC5pbm5lckhUTUwgPSAnJ1xuICAgICAgdGVtcGxhdGVFbGVtZW50LmFwcGVuZChlbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGVtcGxhdGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRlbXBsYXRlRmFjdG9yeVxuIiwgImltcG9ydCBUb29sdGlwIGZyb20gXCJqcy9ib290c3RyYXAvc3JjL3Rvb2x0aXBcIjtcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1icy10b2dnbGU9XCJ0b29sdGlwXCJdJykuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgbmV3IFRvb2x0aXAoZWwpXG4gICAgfSlcbn0pKClcbiIsICIoKCkgPT4ge1xuICAndXNlIHN0cmljdCdcblxuICBsZXQgc2Nyb2xsaW5nID0gZmFsc2VcblxuICBjb25zdCBzY3JvbGwgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIGRpcjogc3RyaW5nKTogdm9pZCA9PiB7XG4gICAgaWYgKHNjcm9sbGluZykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHNjcm9sbGluZyA9IHRydWVcblxuICAgIGNvbnN0IGlubmVyID0gZWxlbWVudC5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtaW5uZXInKSBhcyBIVE1MRWxlbWVudFxuICAgIGNvbnN0IHN0ZXAgPSBpbm5lci5vZmZzZXRXaWR0aFxuICAgIGxldCBsZWZ0ID0gMFxuICAgIGlmIChkaXIgPT09ICdsZWZ0Jykge1xuICAgICAgbGVmdCA9IGlubmVyLnNjcm9sbExlZnQgLSBzdGVwXG4gICAgfSBlbHNlIHtcbiAgICAgIGxlZnQgPSBNYXRoLm1pbihpbm5lci5zY3JvbGxXaWR0aCAtIGlubmVyLmNsaWVudFdpZHRoLCBpbm5lci5zY3JvbGxMZWZ0ICsgc3RlcClcbiAgICB9XG4gICAgaWYgKGxlZnQgPD0gMCkge1xuICAgICAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlubmVyLnNjcm9sbCh7XG4gICAgICBsZWZ0XG4gICAgfSlcbiAgICBjb25zdCBjaGVja2VyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgaWYgKGxlZnQgPT09IGlubmVyLnNjcm9sbExlZnQpIHtcbiAgICAgICAgc2Nyb2xsaW5nID0gZmFsc2VcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjaGVja2VyKVxuICAgICAgfVxuICAgIH0sIDUwKVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxFbGVtZW50PignLnNsaWRlLWNvbnRyb2wtbGVmdCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ2xlZnQnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtY29udHJvbC1yaWdodCcpLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWxlbWVudCwgJ3JpZ2h0JylcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IGVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEVsZW1lbnQ+KCcuc2xpZGUtaW5uZXInKVxuICAgIGVscy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGxldCBzdGFydFggPSAwXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKGU6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgc3RhcnRYID0gZS50b3VjaGVzWzBdLmNsaWVudFhcbiAgICAgIH0sIHsgcGFzc2l2ZTogdHJ1ZSB9KVxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZTogVG91Y2hFdmVudCkgPT4ge1xuICAgICAgICBzY3JvbGwoZWwsIGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCA+IHN0YXJ0WCA/ICdsZWZ0JyA6ICdyaWdodCcpXG4gICAgICB9LCB7IHBhc3NpdmU6IHRydWUgfSlcbiAgICB9KVxuICB9KVxufSkoKVxuIiwgImNsYXNzIEdpc2N1cyB7XG4gICAgc2V0VGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgICAgICBjb25zdCBmcmFtZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsPEhUTUxJRnJhbWVFbGVtZW50PihcbiAgICAgICAgICAgICdpZnJhbWUuZ2lzY3VzLWZyYW1lJ1xuICAgICAgICApXG5cbiAgICAgICAgZnJhbWVzLmZvckVhY2goKGZyYW1lOiBIVE1MSUZyYW1lRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFmcmFtZS5jb250ZW50V2luZG93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gKG5ldyBVUkwoZnJhbWUuc3JjKSkub3JpZ2luO1xuICAgICAgICAgICAgZnJhbWUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGdpc2N1czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGAke2VuZHBvaW50fS90aGVtZXMvJHt0aGVtZX0uY3NzYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbmRwb2ludFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpc2N1cztcbiIsICJpbXBvcnQgR2lzY3VzIGZyb20gJ21vZHMvZ2lzY3VzL2pzJ1xuKCgpID0+IHtcbiAgICAndXNlIHN0cmljdCdcblxuICAgIGNvbnN0IGdpc2N1cyA9IG5ldyBHaXNjdXMoKVxuXG4gICAgY29uc3Qgc2V0VGhlbWUgPSAodGhlbWUgPSAnJykgPT4ge1xuICAgICAgICBpZiAodGhlbWUgPT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoYi10aGVtZScpXG4gICAgICAgICAgICB0aGVtZSA9ICghc2F2ZWQgfHwgc2F2ZWQgPT09ICdhdXRvJykgPyBnZXRQcmVmZXJyZWRUaGVtZSgpIDogc2F2ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGdpc2N1cy5zZXRUaGVtZSh0aGVtZSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRQcmVmZXJyZWRUaGVtZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5tYXRjaE1lZGlhICYmIHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJykubWF0Y2hlcyA/ICdkYXJrJyA6ICdsaWdodCdcbiAgICB9XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2dpc2N1cy1sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gY2hhbmdlIHRoZSB0aGVtZSBhZnRlciBsb2FkaW5nIHRoZSBnaXNjdXMgZnJhbWUuXG4gICAgICAgICAgICBjb25zdCBmcmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZS5naXNjdXMtZnJhbWUuZ2lzY3VzLWZyYW1lLS1sb2FkaW5nJylcbiAgICAgICAgICAgIGZyYW1lPy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRoZW1lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICAgICAgLy8gbWFrZSBzdXJlIGlmcmFtZSB0aG9zZSBtaXNzZWQgdGhlIFwiZ2lzY3VzLWxvYWRcIiBldmVudCB0byBiZSBzZXQgYXMgdGhlIHJpZ2h0IHRoZW1lLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFRoZW1lKClcbiAgICAgICAgfSwgMjAwMClcblxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdoYjp0aGVtZScsICgoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHNldFRoZW1lKGUuZGV0YWlsLnRoZW1lKVxuICAgICAgICB9KSBhcyBFdmVudExpc3RlbmVyKVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHNjcm9sbHNweS5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHtcbiAgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXRFbGVtZW50LCBpc0Rpc2FibGVkLCBpc1Zpc2libGVcbn0gZnJvbSAnLi91dGlsL2luZGV4LmpzJ1xuXG4vKipcbiAqIENvbnN0YW50c1xuICovXG5cbmNvbnN0IE5BTUUgPSAnc2Nyb2xsc3B5J1xuY29uc3QgREFUQV9LRVkgPSAnYnMuc2Nyb2xsc3B5J1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX0FDVElWQVRFID0gYGFjdGl2YXRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfQ0xJQ0sgPSBgY2xpY2ske0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9MT0FEX0RBVEFfQVBJID0gYGxvYWQke0VWRU5UX0tFWX0ke0RBVEFfQVBJX0tFWX1gXG5cbmNvbnN0IENMQVNTX05BTUVfRFJPUERPV05fSVRFTSA9ICdkcm9wZG93bi1pdGVtJ1xuY29uc3QgQ0xBU1NfTkFNRV9BQ1RJVkUgPSAnYWN0aXZlJ1xuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1NQWSA9ICdbZGF0YS1icy1zcHk9XCJzY3JvbGxcIl0nXG5jb25zdCBTRUxFQ1RPUl9UQVJHRVRfTElOS1MgPSAnW2hyZWZdJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0xJU1RfR1JPVVAgPSAnLm5hdiwgLmxpc3QtZ3JvdXAnXG5jb25zdCBTRUxFQ1RPUl9OQVZfTElOS1MgPSAnLm5hdi1saW5rJ1xuY29uc3QgU0VMRUNUT1JfTkFWX0lURU1TID0gJy5uYXYtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJU1RfSVRFTVMgPSAnLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0xJTktfSVRFTVMgPSBgJHtTRUxFQ1RPUl9OQVZfTElOS1N9LCAke1NFTEVDVE9SX05BVl9JVEVNU30gPiAke1NFTEVDVE9SX05BVl9MSU5LU30sICR7U0VMRUNUT1JfTElTVF9JVEVNU31gXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTiA9ICcuZHJvcGRvd24nXG5jb25zdCBTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSAnLmRyb3Bkb3duLXRvZ2dsZSdcblxuY29uc3QgRGVmYXVsdCA9IHtcbiAgb2Zmc2V0OiBudWxsLCAvLyBUT0RPOiB2NiBAZGVwcmVjYXRlZCwga2VlcCBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgcmVhc29uc1xuICByb290TWFyZ2luOiAnMHB4IDBweCAtMjUlJyxcbiAgc21vb3RoU2Nyb2xsOiBmYWxzZSxcbiAgdGFyZ2V0OiBudWxsLFxuICB0aHJlc2hvbGQ6IFswLjEsIDAuNSwgMV1cbn1cblxuY29uc3QgRGVmYXVsdFR5cGUgPSB7XG4gIG9mZnNldDogJyhudW1iZXJ8bnVsbCknLCAvLyBUT0RPIHY2IEBkZXByZWNhdGVkLCBrZWVwIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSByZWFzb25zXG4gIHJvb3RNYXJnaW46ICdzdHJpbmcnLFxuICBzbW9vdGhTY3JvbGw6ICdib29sZWFuJyxcbiAgdGFyZ2V0OiAnZWxlbWVudCcsXG4gIHRocmVzaG9sZDogJ2FycmF5J1xufVxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBTY3JvbGxTcHkgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29uZmlnKSB7XG4gICAgc3VwZXIoZWxlbWVudCwgY29uZmlnKVxuXG4gICAgLy8gdGhpcy5fZWxlbWVudCBpcyB0aGUgb2JzZXJ2YWJsZXNDb250YWluZXIgYW5kIGNvbmZpZy50YXJnZXQgdGhlIG1lbnUgbGlua3Mgd3JhcHBlclxuICAgIHRoaXMuX3RhcmdldExpbmtzID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zID0gbmV3IE1hcCgpXG4gICAgdGhpcy5fcm9vdEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2VsZW1lbnQpLm92ZXJmbG93WSA9PT0gJ3Zpc2libGUnID8gbnVsbCA6IHRoaXMuX2VsZW1lbnRcbiAgICB0aGlzLl9hY3RpdmVUYXJnZXQgPSBudWxsXG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsXG4gICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhID0ge1xuICAgICAgdmlzaWJsZUVudHJ5VG9wOiAwLFxuICAgICAgcGFyZW50U2Nyb2xsVG9wOiAwXG4gICAgfVxuICAgIHRoaXMucmVmcmVzaCgpIC8vIGluaXRpYWxpemVcbiAgfVxuXG4gIC8vIEdldHRlcnNcbiAgc3RhdGljIGdldCBEZWZhdWx0KCkge1xuICAgIHJldHVybiBEZWZhdWx0XG4gIH1cblxuICBzdGF0aWMgZ2V0IERlZmF1bHRUeXBlKCkge1xuICAgIHJldHVybiBEZWZhdWx0VHlwZVxuICB9XG5cbiAgc3RhdGljIGdldCBOQU1FKCkge1xuICAgIHJldHVybiBOQU1FXG4gIH1cblxuICAvLyBQdWJsaWNcbiAgcmVmcmVzaCgpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplVGFyZ2V0c0FuZE9ic2VydmFibGVzKClcbiAgICB0aGlzLl9tYXliZUVuYWJsZVNtb290aFNjcm9sbCgpXG5cbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX29ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX2dldE5ld09ic2VydmVyKClcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2YgdGhpcy5fb2JzZXJ2YWJsZVNlY3Rpb25zLnZhbHVlcygpKSB7XG4gICAgICB0aGlzLl9vYnNlcnZlci5vYnNlcnZlKHNlY3Rpb24pXG4gICAgfVxuICB9XG5cbiAgZGlzcG9zZSgpIHtcbiAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICBzdXBlci5kaXNwb3NlKClcbiAgfVxuXG4gIC8vIFByaXZhdGVcbiAgX2NvbmZpZ0FmdGVyTWVyZ2UoY29uZmlnKSB7XG4gICAgLy8gVE9ETzogb24gdjYgdGFyZ2V0IHNob3VsZCBiZSBnaXZlbiBleHBsaWNpdGx5ICYgcmVtb3ZlIHRoZSB7dGFyZ2V0OiAnc3MtdGFyZ2V0J30gY2FzZVxuICAgIGNvbmZpZy50YXJnZXQgPSBnZXRFbGVtZW50KGNvbmZpZy50YXJnZXQpIHx8IGRvY3VtZW50LmJvZHlcblxuICAgIC8vIFRPRE86IHY2IE9ubHkgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHJlYXNvbnMuIFVzZSByb290TWFyZ2luIG9ubHlcbiAgICBjb25maWcucm9vdE1hcmdpbiA9IGNvbmZpZy5vZmZzZXQgPyBgJHtjb25maWcub2Zmc2V0fXB4IDBweCAtMzAlYCA6IGNvbmZpZy5yb290TWFyZ2luXG5cbiAgICBpZiAodHlwZW9mIGNvbmZpZy50aHJlc2hvbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb25maWcudGhyZXNob2xkID0gY29uZmlnLnRocmVzaG9sZC5zcGxpdCgnLCcpLm1hcCh2YWx1ZSA9PiBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZ1xuICB9XG5cbiAgX21heWJlRW5hYmxlU21vb3RoU2Nyb2xsKCkge1xuICAgIGlmICghdGhpcy5fY29uZmlnLnNtb290aFNjcm9sbCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gdW5yZWdpc3RlciBhbnkgcHJldmlvdXMgbGlzdGVuZXJzXG4gICAgRXZlbnRIYW5kbGVyLm9mZih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSylcblxuICAgIEV2ZW50SGFuZGxlci5vbih0aGlzLl9jb25maWcudGFyZ2V0LCBFVkVOVF9DTElDSywgU0VMRUNUT1JfVEFSR0VUX0xJTktTLCBldmVudCA9PiB7XG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5nZXQoZXZlbnQudGFyZ2V0Lmhhc2gpXG4gICAgICBpZiAob2JzZXJ2YWJsZVNlY3Rpb24pIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCByb290ID0gdGhpcy5fcm9vdEVsZW1lbnQgfHwgd2luZG93XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IG9ic2VydmFibGVTZWN0aW9uLm9mZnNldFRvcCAtIHRoaXMuX2VsZW1lbnQub2Zmc2V0VG9wXG4gICAgICAgIGlmIChyb290LnNjcm9sbFRvKSB7XG4gICAgICAgICAgcm9vdC5zY3JvbGxUbyh7IHRvcDogaGVpZ2h0LCBiZWhhdmlvcjogJ3Ntb290aCcgfSlcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENocm9tZSA2MCBkb2Vzbid0IHN1cHBvcnQgYHNjcm9sbFRvYFxuICAgICAgICByb290LnNjcm9sbFRvcCA9IGhlaWdodFxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBfZ2V0TmV3T2JzZXJ2ZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHJvb3Q6IHRoaXMuX3Jvb3RFbGVtZW50LFxuICAgICAgdGhyZXNob2xkOiB0aGlzLl9jb25maWcudGhyZXNob2xkLFxuICAgICAgcm9vdE1hcmdpbjogdGhpcy5fY29uZmlnLnJvb3RNYXJnaW5cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4gdGhpcy5fb2JzZXJ2ZXJDYWxsYmFjayhlbnRyaWVzKSwgb3B0aW9ucylcbiAgfVxuXG4gIC8vIFRoZSBsb2dpYyBvZiBzZWxlY3Rpb25cbiAgX29ic2VydmVyQ2FsbGJhY2soZW50cmllcykge1xuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBlbnRyeSA9PiB0aGlzLl90YXJnZXRMaW5rcy5nZXQoYCMke2VudHJ5LnRhcmdldC5pZH1gKVxuICAgIGNvbnN0IGFjdGl2YXRlID0gZW50cnkgPT4ge1xuICAgICAgdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcCA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3BcbiAgICAgIHRoaXMuX3Byb2Nlc3ModGFyZ2V0RWxlbWVudChlbnRyeSkpXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50U2Nyb2xsVG9wID0gKHRoaXMuX3Jvb3RFbGVtZW50IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuc2Nyb2xsVG9wXG4gICAgY29uc3QgdXNlclNjcm9sbHNEb3duID0gcGFyZW50U2Nyb2xsVG9wID49IHRoaXMuX3ByZXZpb3VzU2Nyb2xsRGF0YS5wYXJlbnRTY3JvbGxUb3BcbiAgICB0aGlzLl9wcmV2aW91c1Njcm9sbERhdGEucGFyZW50U2Nyb2xsVG9wID0gcGFyZW50U2Nyb2xsVG9wXG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlVGFyZ2V0ID0gbnVsbFxuICAgICAgICB0aGlzLl9jbGVhckFjdGl2ZUNsYXNzKHRhcmdldEVsZW1lbnQoZW50cnkpKVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cyA9IGVudHJ5LnRhcmdldC5vZmZzZXRUb3AgPj0gdGhpcy5fcHJldmlvdXNTY3JvbGxEYXRhLnZpc2libGVFbnRyeVRvcFxuICAgICAgLy8gaWYgd2UgYXJlIHNjcm9sbGluZyBkb3duLCBwaWNrIHRoZSBiaWdnZXIgb2Zmc2V0VG9wXG4gICAgICBpZiAodXNlclNjcm9sbHNEb3duICYmIGVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgICAgLy8gaWYgcGFyZW50IGlzbid0IHNjcm9sbGVkLCBsZXQncyBrZWVwIHRoZSBmaXJzdCB2aXNpYmxlIGl0ZW0sIGJyZWFraW5nIHRoZSBpdGVyYXRpb25cbiAgICAgICAgaWYgKCFwYXJlbnRTY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIGlmIHdlIGFyZSBzY3JvbGxpbmcgdXAsIHBpY2sgdGhlIHNtYWxsZXN0IG9mZnNldFRvcFxuICAgICAgaWYgKCF1c2VyU2Nyb2xsc0Rvd24gJiYgIWVudHJ5SXNMb3dlclRoYW5QcmV2aW91cykge1xuICAgICAgICBhY3RpdmF0ZShlbnRyeSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaW5pdGlhbGl6ZVRhcmdldHNBbmRPYnNlcnZhYmxlcygpIHtcbiAgICB0aGlzLl90YXJnZXRMaW5rcyA9IG5ldyBNYXAoKVxuICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucyA9IG5ldyBNYXAoKVxuXG4gICAgY29uc3QgdGFyZ2V0TGlua3MgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX1RBUkdFVF9MSU5LUywgdGhpcy5fY29uZmlnLnRhcmdldClcblxuICAgIGZvciAoY29uc3QgYW5jaG9yIG9mIHRhcmdldExpbmtzKSB7XG4gICAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYW5jaG9yIGhhcyBhbiBpZCBhbmQgaXMgbm90IGRpc2FibGVkXG4gICAgICBpZiAoIWFuY2hvci5oYXNoIHx8IGlzRGlzYWJsZWQoYW5jaG9yKSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBvYnNlcnZhYmxlU2VjdGlvbiA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoZGVjb2RlVVJJKGFuY2hvci5oYXNoKSwgdGhpcy5fZWxlbWVudClcblxuICAgICAgLy8gZW5zdXJlIHRoYXQgdGhlIG9ic2VydmFibGVTZWN0aW9uIGV4aXN0cyAmIGlzIHZpc2libGVcbiAgICAgIGlmIChpc1Zpc2libGUob2JzZXJ2YWJsZVNlY3Rpb24pKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldExpbmtzLnNldChkZWNvZGVVUkkoYW5jaG9yLmhhc2gpLCBhbmNob3IpXG4gICAgICAgIHRoaXMuX29ic2VydmFibGVTZWN0aW9ucy5zZXQoYW5jaG9yLmhhc2gsIG9ic2VydmFibGVTZWN0aW9uKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9wcm9jZXNzKHRhcmdldCkge1xuICAgIGlmICh0aGlzLl9hY3RpdmVUYXJnZXQgPT09IHRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fY2xlYXJBY3RpdmVDbGFzcyh0aGlzLl9jb25maWcudGFyZ2V0KVxuICAgIHRoaXMuX2FjdGl2ZVRhcmdldCA9IHRhcmdldFxuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIHRoaXMuX2FjdGl2YXRlUGFyZW50cyh0YXJnZXQpXG5cbiAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9BQ1RJVkFURSwgeyByZWxhdGVkVGFyZ2V0OiB0YXJnZXQgfSlcbiAgfVxuXG4gIF9hY3RpdmF0ZVBhcmVudHModGFyZ2V0KSB7XG4gICAgLy8gQWN0aXZhdGUgZHJvcGRvd24gcGFyZW50c1xuICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKENMQVNTX05BTUVfRFJPUERPV05fSVRFTSkpIHtcbiAgICAgIFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoU0VMRUNUT1JfRFJPUERPV05fVE9HR0xFLCB0YXJnZXQuY2xvc2VzdChTRUxFQ1RPUl9EUk9QRE9XTikpXG4gICAgICAgIC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsaXN0R3JvdXAgb2YgU2VsZWN0b3JFbmdpbmUucGFyZW50cyh0YXJnZXQsIFNFTEVDVE9SX05BVl9MSVNUX0dST1VQKSkge1xuICAgICAgLy8gU2V0IHRyaWdnZXJlZCBsaW5rcyBwYXJlbnRzIGFzIGFjdGl2ZVxuICAgICAgLy8gV2l0aCBib3RoIDx1bD4gYW5kIDxuYXY+IG1hcmt1cCBhIHBhcmVudCBpcyB0aGUgcHJldmlvdXMgc2libGluZyBvZiBhbnkgbmF2IGFuY2VzdG9yXG4gICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgU2VsZWN0b3JFbmdpbmUucHJldihsaXN0R3JvdXAsIFNFTEVDVE9SX0xJTktfSVRFTVMpKSB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChDTEFTU19OQU1FX0FDVElWRSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfY2xlYXJBY3RpdmVDbGFzcyhwYXJlbnQpIHtcbiAgICBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0FDVElWRSlcblxuICAgIGNvbnN0IGFjdGl2ZU5vZGVzID0gU2VsZWN0b3JFbmdpbmUuZmluZChgJHtTRUxFQ1RPUl9UQVJHRVRfTElOS1N9LiR7Q0xBU1NfTkFNRV9BQ1RJVkV9YCwgcGFyZW50KVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBhY3RpdmVOb2Rlcykge1xuICAgICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfQUNUSVZFKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFNjcm9sbFNweS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIGNvbmZpZylcblxuICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVtjb25maWddID09PSB1bmRlZmluZWQgfHwgY29uZmlnLnN0YXJ0c1dpdGgoJ18nKSB8fCBjb25maWcgPT09ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8gbWV0aG9kIG5hbWVkIFwiJHtjb25maWd9XCJgKVxuICAgICAgfVxuXG4gICAgICBkYXRhW2NvbmZpZ10oKVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbih3aW5kb3csIEVWRU5UX0xPQURfREFUQV9BUEksICgpID0+IHtcbiAgZm9yIChjb25zdCBzcHkgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1NQWSkpIHtcbiAgICBTY3JvbGxTcHkuZ2V0T3JDcmVhdGVJbnN0YW5jZShzcHkpXG4gIH1cbn0pXG5cbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFNjcm9sbFNweSlcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsU3B5XG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIGNvbGxhcHNlLmpzXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21haW4vTElDRU5TRSlcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKi9cblxuaW1wb3J0IEJhc2VDb21wb25lbnQgZnJvbSAnLi9iYXNlLWNvbXBvbmVudC5qcydcbmltcG9ydCBFdmVudEhhbmRsZXIgZnJvbSAnLi9kb20vZXZlbnQtaGFuZGxlci5qcydcbmltcG9ydCBTZWxlY3RvckVuZ2luZSBmcm9tICcuL2RvbS9zZWxlY3Rvci1lbmdpbmUuanMnXG5pbXBvcnQge1xuICBkZWZpbmVKUXVlcnlQbHVnaW4sXG4gIGdldEVsZW1lbnQsXG4gIHJlZmxvd1xufSBmcm9tICcuL3V0aWwvaW5kZXguanMnXG5cbi8qKlxuICogQ29uc3RhbnRzXG4gKi9cblxuY29uc3QgTkFNRSA9ICdjb2xsYXBzZSdcbmNvbnN0IERBVEFfS0VZID0gJ2JzLmNvbGxhcHNlJ1xuY29uc3QgRVZFTlRfS0VZID0gYC4ke0RBVEFfS0VZfWBcbmNvbnN0IERBVEFfQVBJX0tFWSA9ICcuZGF0YS1hcGknXG5cbmNvbnN0IEVWRU5UX1NIT1cgPSBgc2hvdyR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX1NIT1dOID0gYHNob3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElERSA9IGBoaWRlJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfSElEREVOID0gYGhpZGRlbiR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9JHtEQVRBX0FQSV9LRVl9YFxuXG5jb25zdCBDTEFTU19OQU1FX1NIT1cgPSAnc2hvdydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0UgPSAnY29sbGFwc2UnXG5jb25zdCBDTEFTU19OQU1FX0NPTExBUFNJTkcgPSAnY29sbGFwc2luZydcbmNvbnN0IENMQVNTX05BTUVfQ09MTEFQU0VEID0gJ2NvbGxhcHNlZCdcbmNvbnN0IENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOID0gYDpzY29wZSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfSAuJHtDTEFTU19OQU1FX0NPTExBUFNFfWBcbmNvbnN0IENMQVNTX05BTUVfSE9SSVpPTlRBTCA9ICdjb2xsYXBzZS1ob3Jpem9udGFsJ1xuXG5jb25zdCBXSURUSCA9ICd3aWR0aCdcbmNvbnN0IEhFSUdIVCA9ICdoZWlnaHQnXG5cbmNvbnN0IFNFTEVDVE9SX0FDVElWRVMgPSAnLmNvbGxhcHNlLnNob3csIC5jb2xsYXBzZS5jb2xsYXBzaW5nJ1xuY29uc3QgU0VMRUNUT1JfREFUQV9UT0dHTEUgPSAnW2RhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIl0nXG5cbmNvbnN0IERlZmF1bHQgPSB7XG4gIHBhcmVudDogbnVsbCxcbiAgdG9nZ2xlOiB0cnVlXG59XG5cbmNvbnN0IERlZmF1bHRUeXBlID0ge1xuICBwYXJlbnQ6ICcobnVsbHxlbGVtZW50KScsXG4gIHRvZ2dsZTogJ2Jvb2xlYW4nXG59XG5cbi8qKlxuICogQ2xhc3MgZGVmaW5pdGlvblxuICovXG5cbmNsYXNzIENvbGxhcHNlIGV4dGVuZHMgQmFzZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbmZpZykge1xuICAgIHN1cGVyKGVsZW1lbnQsIGNvbmZpZylcblxuICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgdGhpcy5fdHJpZ2dlckFycmF5ID0gW11cblxuICAgIGNvbnN0IHRvZ2dsZUxpc3QgPSBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0RBVEFfVE9HR0xFKVxuXG4gICAgZm9yIChjb25zdCBlbGVtIG9mIHRvZ2dsZUxpc3QpIHtcbiAgICAgIGNvbnN0IHNlbGVjdG9yID0gU2VsZWN0b3JFbmdpbmUuZ2V0U2VsZWN0b3JGcm9tRWxlbWVudChlbGVtKVxuICAgICAgY29uc3QgZmlsdGVyRWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IpXG4gICAgICAgIC5maWx0ZXIoZm91bmRFbGVtZW50ID0+IGZvdW5kRWxlbWVudCA9PT0gdGhpcy5fZWxlbWVudClcblxuICAgICAgaWYgKHNlbGVjdG9yICE9PSBudWxsICYmIGZpbHRlckVsZW1lbnQubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3RyaWdnZXJBcnJheS5wdXNoKGVsZW0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoaWxkcmVuKClcblxuICAgIGlmICghdGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdGhpcy5faXNTaG93bigpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9jb25maWcudG9nZ2xlKSB7XG4gICAgICB0aGlzLnRvZ2dsZSgpXG4gICAgfVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IERlZmF1bHQoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRGVmYXVsdFR5cGUoKSB7XG4gICAgcmV0dXJuIERlZmF1bHRUeXBlXG4gIH1cblxuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICB0b2dnbGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hvd24oKSkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93KClcbiAgICB9XG4gIH1cblxuICBzaG93KCkge1xuICAgIGlmICh0aGlzLl9pc1RyYW5zaXRpb25pbmcgfHwgdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgYWN0aXZlQ2hpbGRyZW4gPSBbXVxuXG4gICAgLy8gZmluZCBhY3RpdmUgY2hpbGRyZW5cbiAgICBpZiAodGhpcy5fY29uZmlnLnBhcmVudCkge1xuICAgICAgYWN0aXZlQ2hpbGRyZW4gPSB0aGlzLl9nZXRGaXJzdExldmVsQ2hpbGRyZW4oU0VMRUNUT1JfQUNUSVZFUylcbiAgICAgICAgLmZpbHRlcihlbGVtZW50ID0+IGVsZW1lbnQgIT09IHRoaXMuX2VsZW1lbnQpXG4gICAgICAgIC5tYXAoZWxlbWVudCA9PiBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKGVsZW1lbnQsIHsgdG9nZ2xlOiBmYWxzZSB9KSlcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlQ2hpbGRyZW4ubGVuZ3RoICYmIGFjdGl2ZUNoaWxkcmVuWzBdLl9pc1RyYW5zaXRpb25pbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XKVxuICAgIGlmIChzdGFydEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgYWN0aXZlSW5zdGFuY2Ugb2YgYWN0aXZlQ2hpbGRyZW4pIHtcbiAgICAgIGFjdGl2ZUluc3RhbmNlLmhpZGUoKVxuICAgIH1cblxuICAgIGNvbnN0IGRpbWVuc2lvbiA9IHRoaXMuX2dldERpbWVuc2lvbigpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTRSlcbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gMFxuXG4gICAgdGhpcy5fYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuX3RyaWdnZXJBcnJheSwgdHJ1ZSlcbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG5cbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNJTkcpXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTRSwgQ0xBU1NfTkFNRV9TSE9XKVxuXG4gICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW2RpbWVuc2lvbl0gPSAnJ1xuXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9TSE9XTilcbiAgICB9XG5cbiAgICBjb25zdCBjYXBpdGFsaXplZERpbWVuc2lvbiA9IGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXG4gICAgY29uc3Qgc2Nyb2xsU2l6ZSA9IGBzY3JvbGwke2NhcGl0YWxpemVkRGltZW5zaW9ufWBcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudFtzY3JvbGxTaXplXX1weGBcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuX2lzVHJhbnNpdGlvbmluZyB8fCAhdGhpcy5faXNTaG93bigpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBzdGFydEV2ZW50ID0gRXZlbnRIYW5kbGVyLnRyaWdnZXIodGhpcy5fZWxlbWVudCwgRVZFTlRfSElERSlcbiAgICBpZiAoc3RhcnRFdmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBkaW1lbnNpb24gPSB0aGlzLl9nZXREaW1lbnNpb24oKVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gYCR7dGhpcy5fZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVtkaW1lbnNpb25dfXB4YFxuXG4gICAgcmVmbG93KHRoaXMuX2VsZW1lbnQpXG5cbiAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShDTEFTU19OQU1FX0NPTExBUFNFLCBDTEFTU19OQU1FX1NIT1cpXG5cbiAgICBmb3IgKGNvbnN0IHRyaWdnZXIgb2YgdGhpcy5fdHJpZ2dlckFycmF5KSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3Rvcih0cmlnZ2VyKVxuXG4gICAgICBpZiAoZWxlbWVudCAmJiAhdGhpcy5faXNTaG93bihlbGVtZW50KSkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW3RyaWdnZXJdLCBmYWxzZSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pc1RyYW5zaXRpb25pbmcgPSB0cnVlXG5cbiAgICBjb25zdCBjb21wbGV0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2lzVHJhbnNpdGlvbmluZyA9IGZhbHNlXG4gICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9DT0xMQVBTSU5HKVxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQ09MTEFQU0UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcih0aGlzLl9lbGVtZW50LCBFVkVOVF9ISURERU4pXG4gICAgfVxuXG4gICAgdGhpcy5fZWxlbWVudC5zdHlsZVtkaW1lbnNpb25dID0gJydcblxuICAgIHRoaXMuX3F1ZXVlQ2FsbGJhY2soY29tcGxldGUsIHRoaXMuX2VsZW1lbnQsIHRydWUpXG4gIH1cblxuICBfaXNTaG93bihlbGVtZW50ID0gdGhpcy5fZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX1NIT1cpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9jb25maWdBZnRlck1lcmdlKGNvbmZpZykge1xuICAgIGNvbmZpZy50b2dnbGUgPSBCb29sZWFuKGNvbmZpZy50b2dnbGUpIC8vIENvZXJjZSBzdHJpbmcgdmFsdWVzXG4gICAgY29uZmlnLnBhcmVudCA9IGdldEVsZW1lbnQoY29uZmlnLnBhcmVudClcbiAgICByZXR1cm4gY29uZmlnXG4gIH1cblxuICBfZ2V0RGltZW5zaW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0hPUklaT05UQUwpID8gV0lEVEggOiBIRUlHSFRcbiAgfVxuXG4gIF9pbml0aWFsaXplQ2hpbGRyZW4oKSB7XG4gICAgaWYgKCF0aGlzLl9jb25maWcucGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuX2dldEZpcnN0TGV2ZWxDaGlsZHJlbihTRUxFQ1RPUl9EQVRBX1RPR0dMRSlcblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBjaGlsZHJlbikge1xuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBTZWxlY3RvckVuZ2luZS5nZXRFbGVtZW50RnJvbVNlbGVjdG9yKGVsZW1lbnQpXG5cbiAgICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLl9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MoW2VsZW1lbnRdLCB0aGlzLl9pc1Nob3duKHNlbGVjdGVkKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZ2V0Rmlyc3RMZXZlbENoaWxkcmVuKHNlbGVjdG9yKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBTZWxlY3RvckVuZ2luZS5maW5kKENMQVNTX05BTUVfREVFUEVSX0NISUxEUkVOLCB0aGlzLl9jb25maWcucGFyZW50KVxuICAgIC8vIHJlbW92ZSBjaGlsZHJlbiBpZiBncmVhdGVyIGRlcHRoXG4gICAgcmV0dXJuIFNlbGVjdG9yRW5naW5lLmZpbmQoc2VsZWN0b3IsIHRoaXMuX2NvbmZpZy5wYXJlbnQpLmZpbHRlcihlbGVtZW50ID0+ICFjaGlsZHJlbi5pbmNsdWRlcyhlbGVtZW50KSlcbiAgfVxuXG4gIF9hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3ModHJpZ2dlckFycmF5LCBpc09wZW4pIHtcbiAgICBpZiAoIXRyaWdnZXJBcnJheS5sZW5ndGgpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0cmlnZ2VyQXJyYXkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShDTEFTU19OQU1FX0NPTExBUFNFRCwgIWlzT3BlbilcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIGNvbnN0IF9jb25maWcgPSB7fVxuICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJyAmJiAvc2hvd3xoaWRlLy50ZXN0KGNvbmZpZykpIHtcbiAgICAgIF9jb25maWcudG9nZ2xlID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBDb2xsYXBzZS5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMsIF9jb25maWcpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGFbY29uZmlnXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBObyBtZXRob2QgbmFtZWQgXCIke2NvbmZpZ31cImApXG4gICAgICAgIH1cblxuICAgICAgICBkYXRhW2NvbmZpZ10oKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIEFQSSBpbXBsZW1lbnRhdGlvblxuICovXG5cbkV2ZW50SGFuZGxlci5vbihkb2N1bWVudCwgRVZFTlRfQ0xJQ0tfREFUQV9BUEksIFNFTEVDVE9SX0RBVEFfVE9HR0xFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgLy8gcHJldmVudERlZmF1bHQgb25seSBmb3IgPGE+IGVsZW1lbnRzICh3aGljaCBjaGFuZ2UgdGhlIFVSTCkgbm90IGluc2lkZSB0aGUgY29sbGFwc2libGUgZWxlbWVudFxuICBpZiAoZXZlbnQudGFyZ2V0LnRhZ05hbWUgPT09ICdBJyB8fCAoZXZlbnQuZGVsZWdhdGVUYXJnZXQgJiYgZXZlbnQuZGVsZWdhdGVUYXJnZXQudGFnTmFtZSA9PT0gJ0EnKSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgfVxuXG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBTZWxlY3RvckVuZ2luZS5nZXRNdWx0aXBsZUVsZW1lbnRzRnJvbVNlbGVjdG9yKHRoaXMpKSB7XG4gICAgQ29sbGFwc2UuZ2V0T3JDcmVhdGVJbnN0YW5jZShlbGVtZW50LCB7IHRvZ2dsZTogZmFsc2UgfSkudG9nZ2xlKClcbiAgfVxufSlcblxuLyoqXG4gKiBqUXVlcnlcbiAqL1xuXG5kZWZpbmVKUXVlcnlQbHVnaW4oQ29sbGFwc2UpXG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlXG4iLCAiKCgpID0+IHtcbiAgY29uc3QgYWN0aXZlUGFyZW50ID0gKGNoaWxkOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudCA9IGNoaWxkLnBhcmVudEVsZW1lbnQ/LmNsb3Nlc3QoJy5oYi1kb2NzLW5hdi1saW5rcy1ncm91cCcpIGFzIEhUTUxFbGVtZW50XG4gICAgaWYgKHBhcmVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBwYXJlbnQucXVlcnlTZWxlY3RvcignLmNvbGxhcHNlJyk/LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxuICAgIGNvbnN0IGhlYWRpbmcgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmhiLWRvY3MtbmF2LWhlYWRpbmcnKSBhcyBIVE1MRWxlbWVudFxuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3IoJy5oYi1kb2NzLW5hdi1pdGVtLXRvZ2dsZScpPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpXG4gICAgYWN0aXZlUGFyZW50KHBhcmVudClcbiAgfVxuXG4gIGNvbnN0IGFjdGl2ZSA9IChsaW5rOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICBhY3RpdmVQYXJlbnQobGluaylcbiAgfVxuXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaGItZG9jcy1uYXYtbGlua3MgYVtocmVmPVwiJHtsb2NhdGlvbi5wYXRobmFtZX1cIl1gKSBhcyBIVE1MRWxlbWVudFxuICBpZiAobGluayA9PSBudWxsKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBhY3RpdmUobGluaylcbn0pKClcbiIsICIoKCkgPT4ge1xuICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGItZG9jcy1uYXYtdG9nZ2xlJylcbiAgY29uc3QgZG9jcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYi1kb2NzJylcbiAgaWYgKCF0b2dnbGUgfHwgIWRvY3MpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGNsYXNzTmFtZSA9ICdzaWRlYmFyLW9mZidcblxuICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGRvY3MuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIGRvY3MuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3MuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgfVxuICB9KVxufSkoKVxuIiwgIntcImJhY2tfdG9fdG9wXCI6e1wiYW5pbWF0aW9uXCI6dHJ1ZSxcImljb25faGVpZ2h0XCI6XCIyZW1cIixcImljb25fbmFtZVwiOlwicm9ja2V0XCIsXCJpY29uX3dpZHRoXCI6XCIyZW1cIixcInBvc2l0aW9uX2JvdHRvbVwiOlwiMXJlbVwiLFwicG9zaXRpb25fZW5kXCI6XCIxcmVtXCJ9LFwiYmlnZ2VyX3BpY3R1cmVcIjp7XCJwbGF5X2ludGVydmFsXCI6NTAwMCxcInNjYWxlXCI6Mn0sXCJibG9nXCI6e1wiYXJjaGl2ZXNcIjp7XCJwYWdpbmF0ZVwiOjMwfSxcImZ1bGxfd2lkdGhcIjpmYWxzZSxcImdpc2N1c1wiOntcImNhdGVnb3J5XCI6XCJHZW5lcmFsXCIsXCJjYXRlZ29yeWlkXCI6XCJESUNfa3dET0hKaTk1czRDVHk2cVwiLFwicmVwb1wiOlwiRy1aYWkvQmxvZ1wiLFwicmVwb2lkXCI6XCJSX2tnRE9ISmk5NWdcIn0sXCJob21lXCI6e1wiZmVhdHVyZWRfcG9zdHNcIjo1LFwibWFpbl9zZWN0aW9uc1wiOltcImRvY3NcIixcImJsb2dcIixcInR1dG9yaWFsc1wiXSxcInBpbm5lZF9wb3N0c19wb3NpdGlvblwiOlwibGlzdFwifSxcImxpc3RfY29sc19sZ1wiOjMsXCJsaXN0X2NvbHNfbWRcIjoyLFwibGlzdF9zdHlsZVwiOlwiXCIsXCJwYWdpbmF0ZVwiOjEyLFwicG9zdF9kYXRlX2Zvcm1hdFwiOlwiOmRhdGVfbG9uZ1wiLFwicG9zdF90aHVtYm5haWxcIjp0cnVlLFwicG9zdF90aHVtYm5haWxfZGVmYXVsdFwiOlwiaW1hZ2VzL3RodW1ibmFpbC5wbmdcIixcInBvc3RfdGh1bWJuYWlsX2hlaWdodFwiOlwiMTYwcHhcIixcInBvc3RfdGh1bWJuYWlsX3BsYWNlaG9sZGVyXCI6XCJIQiBUSEVNRVwiLFwicG9zdF90aHVtYm5haWxfcG9zaXRpb25cIjpcInRvcFwiLFwicG9zdF90aHVtYm5haWxfcmVzaXplX2hlaWdodFwiOjM2MCxcInJlbGF0ZWRfcG9zdHNcIjp7XCJudW1iZXJcIjoxMH0sXCJzaWRlYmFyXCI6e1wibWF4X3dpZHRoXCI6XCIzMjBweFwiLFwicG9zaXRpb25cIjpcInN0YXJ0XCIsXCJwb3N0c1wiOntcImZlYXR1cmVkX2NvdW50XCI6NSxcImZpbGxcIjp0cnVlLFwibGlzdF9zdHlsZVwiOlwic2xpZGVcIixcInJlY2VudF9jb3VudFwiOjUsXCJzdHlsZVwiOlwicGlsbHNcIn0sXCJwcm9maWxlXCI6e1wiYXZhdGFyXCI6XCIvaW1hZ2VzL2xvZ28ucG5nXCIsXCJhdmF0YXJfc2l6ZVwiOjEwMCxcImNvbXBhbnlcIjpcIkNPTVBBTllcIixcImRlc2NyaXB0aW9uXCI6XCJcIixcImxvY2F0aW9uXCI6XCJFYXJ0aFwiLFwic29jaWFsc1wiOntcImVtYWlsXCI6XCJHTG9hZGluZ3NAb3V0bG9vay5jb21cIixcImdpdGh1YlwiOlwiRy1aYWlcIixcInJzc1wiOnRydWV9LFwidGl0bGVcIjpcIlwifSxcInN0aWNreVwiOnRydWUsXCJ0YXhvbm9taWVzXCI6e1wiY291bnRcIjp0cnVlLFwibGltaXRcIjoxMCxcInNlcGFyYXRlXCI6ZmFsc2V9LFwid2lkdGhcIjowLjM1fSxcInRvY1wiOntcInBvc2l0aW9uXCI6XCJlbmRcIn19LFwiYnJlYWRjcnVtYlwiOntcImRpc2FibGVkXCI6ZmFsc2V9LFwiY29sb3JcIjpcImxpZ2h0XCIsXCJjb250ZW50X3BhbmVsXCI6e1wiYm90dG9tXCI6XCIyMHB4XCIsXCJjb21tZW50c1wiOnRydWUsXCJyZXBvXCI6e1wiYnJhbmNoXCI6XCJtYWluXCIsXCJyZXBvXCI6XCJHLVphaS9CbG9nXCIsXCJzZXJ2aWNlXCI6XCJnaXRodWJcIn19LFwiY3NzX2J1bmRsZV9uYW1lXCI6XCJoYlwiLFwiZG9jc1wiOntcImRhdGVfZm9ybWF0XCI6XCI6ZGF0ZV9sb25nXCJ9LFwiZmVhdHVyZWRfaW1hZ2VcIjp7XCJzaXplXCI6XCJ4NjQwXCJ9LFwiZm9vdGVyXCI6e1wic29jaWFsc1wiOntcIl9jb2xvclwiOnRydWUsXCJlbWFpbFwiOlwiR0xvYWRpbmdzQG91dGxvb2suY29tXCIsXCJnaXRodWJcIjpcIkctWmFpXCIsXCJyc3NcIjp0cnVlfX0sXCJmdWxsX3dpZHRoXCI6ZmFsc2UsXCJmdWxsX3dpZHRoX3R5cGVzXCI6e1wiZG9jc1wiOntcImVuYWJsZVwiOnRydWV9fSxcImdhbGxlcnlcIjp7XCJkYXRlX3NvcnRfb3JkZXJcIjpcImRlc2NcIixcImhpZ2hsaWdodF9pbWFnZXNfY291bnRcIjoxMCxcImhpZ2hsaWdodF9pbWFnZXNfcmVjdXJzaXZlXCI6ZmFsc2UsXCJwYWdpbmF0ZVwiOjI0LFwidGh1bWJuYWlsX3NpemVcIjpcIng2NDBcIn0sXCJoZWFkZXJcIjp7XCJicmFuZFwiOm51bGwsXCJicmVha3BvaW50XCI6XCJsZ1wiLFwiZnVsbF93aWR0aFwiOnRydWUsXCJsb2dvX2JnXCI6XCIjNzEyY2Y5XCIsXCJzb2NpYWxzXCI6e1wiZW1haWxcIjpcIkdMb2FkaW5nc0BvdXRsb29rLmNvbVwiLFwiZ2l0aHViXCI6XCJHLVphaVwiLFwicnNzXCI6dHJ1ZX0sXCJzdGlja3lcIjp0cnVlLFwidGhlbWVfdG9nZ2xlXCI6e1wic3R5bGVcIjpcInN3aXRjaFwifX0sXCJoZWFkaW5nX3NpZ25cIjp7XCJjb250YWluZXJzXCI6e1wiLmhiLWJsb2ctcG9zdC1jb250ZW50XCI6e30sXCIuaGItZG9jcy1kb2MtY29udGVudFwiOnt9fSxcInN5bWJvbFwiOlwiXHUwMEE3XCJ9LFwianNfYnVuZGxlX25hbWVcIjpcImhiXCIsXCJsb2dvXCI6XCIvaW1hZ2VzL2xvZ28ucG5nXCIsXCJtb2R1bGVzXCI6e1wiY29kZS1ibG9jay1wYW5lbFwiOntcImpzX3Jlc291cmNlc1wiOlt7XCJwYXJ0aWFsXCI6XCJjb2RlLWJsb2NrLXBhbmVsL2Fzc2V0cy9qcy1yZXNvdXJjZVwifV19fSxcInBhZ2luYXRpb25cIjp7XCJhbGlnbm1lbnRcIjpcImNlbnRlclwiLFwic2libGluZ3NcIjoyLFwic2l6ZVwiOlwiXCJ9LFwicHJvZ3Jlc3NfYmFyXCI6e1wiaGVpZ2h0XCI6XCIycHhcIixcImluaXRpYWxfd2lkdGhcIjoyMCxcImludGVydmFsXCI6NTAsXCJ0aW1lXCI6Mn0sXCJzY3JvbGxiYXJcIjp7XCJjb3JuZXJfYmdcIjpcIiM5MDkyOTRcIixcImhlaWdodFwiOlwiMTJweFwiLFwidGh1bWJfYmdcIjpcIiM5MDkyOTRcIixcInRyYWNrX2JnXCI6XCIjZjhmOWZhXCIsXCJ3aWR0aFwiOlwiMTJweFwifSxcInNlYXJjaFwiOntcIm1vZGFsXCI6dHJ1ZX0sXCJzdHlsZXNcIjp7XCJoYl90b3Bfb2Zmc2V0XCI6XCIyNHB4XCIsXCJwcmVmaXhcIjpcImhiLVwifSxcInRlcm1zXCI6e1wibGlzdF9zdHlsZVwiOlwiXCIsXCJwYWdpbmF0ZVwiOjEyLFwicHJvZmlsZVwiOnRydWUsXCJwcm9maWxlX21ldHJpY3NcIjp0cnVlfSxcInRoZW1lX2NhcmRzXCI6e319IiwgImltcG9ydCAqIGFzIHBhcmFtcyBmcm9tICdAcGFyYW1zJztcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBjb250YWluZXJzID0gcGFyYW1zPy5oZWFkaW5nX3NpZ24/LmNvbnRhaW5lcnNcbiAgICAgICAgaWYgKCFjb250YWluZXJzKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IHBhcmFtcz8uaGVhZGluZ19zaWduPy5zeW1ib2wgPz8gJ1x1MDBBNydcblxuICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdG9yIGluIGNvbnRhaW5lcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcImgyLCBoMywgaDQsIGg1LCBoNlwiKS5mb3JFYWNoKChoZWFkaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBoZWFkaW5nLmdldEF0dHJpYnV0ZSgnaWQnKVxuICAgICAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICAgICAgICAgICAgYW5jaG9yLmNsYXNzTmFtZSA9ICdhbmNob3IgbXMtMSdcbiAgICAgICAgICAgICAgICBhbmNob3IuaHJlZiA9IGAjJHtpZH1gXG4gICAgICAgICAgICAgICAgYW5jaG9yLmlubmVyVGV4dCA9IHN5bWJvbFxuICAgICAgICAgICAgICAgIGhlYWRpbmcuYXBwZW5kQ2hpbGQoYW5jaG9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59KSgpXG4iLCAiLyoqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQm9vdHN0cmFwIHRhYi5qc1xuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYWluL0xJQ0VOU0UpXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICovXG5cbmltcG9ydCBCYXNlQ29tcG9uZW50IGZyb20gJy4vYmFzZS1jb21wb25lbnQuanMnXG5pbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gJy4vZG9tL2V2ZW50LWhhbmRsZXIuanMnXG5pbXBvcnQgU2VsZWN0b3JFbmdpbmUgZnJvbSAnLi9kb20vc2VsZWN0b3ItZW5naW5lLmpzJ1xuaW1wb3J0IHsgZGVmaW5lSlF1ZXJ5UGx1Z2luLCBnZXROZXh0QWN0aXZlRWxlbWVudCwgaXNEaXNhYmxlZCB9IGZyb20gJy4vdXRpbC9pbmRleC5qcydcblxuLyoqXG4gKiBDb25zdGFudHNcbiAqL1xuXG5jb25zdCBOQU1FID0gJ3RhYidcbmNvbnN0IERBVEFfS0VZID0gJ2JzLnRhYidcbmNvbnN0IEVWRU5UX0tFWSA9IGAuJHtEQVRBX0tFWX1gXG5cbmNvbnN0IEVWRU5UX0hJREUgPSBgaGlkZSR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0hJRERFTiA9IGBoaWRkZW4ke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XID0gYHNob3cke0VWRU5UX0tFWX1gXG5jb25zdCBFVkVOVF9TSE9XTiA9IGBzaG93biR7RVZFTlRfS0VZfWBcbmNvbnN0IEVWRU5UX0NMSUNLX0RBVEFfQVBJID0gYGNsaWNrJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfS0VZRE9XTiA9IGBrZXlkb3duJHtFVkVOVF9LRVl9YFxuY29uc3QgRVZFTlRfTE9BRF9EQVRBX0FQSSA9IGBsb2FkJHtFVkVOVF9LRVl9YFxuXG5jb25zdCBBUlJPV19MRUZUX0tFWSA9ICdBcnJvd0xlZnQnXG5jb25zdCBBUlJPV19SSUdIVF9LRVkgPSAnQXJyb3dSaWdodCdcbmNvbnN0IEFSUk9XX1VQX0tFWSA9ICdBcnJvd1VwJ1xuY29uc3QgQVJST1dfRE9XTl9LRVkgPSAnQXJyb3dEb3duJ1xuY29uc3QgSE9NRV9LRVkgPSAnSG9tZSdcbmNvbnN0IEVORF9LRVkgPSAnRW5kJ1xuXG5jb25zdCBDTEFTU19OQU1FX0FDVElWRSA9ICdhY3RpdmUnXG5jb25zdCBDTEFTU19OQU1FX0ZBREUgPSAnZmFkZSdcbmNvbnN0IENMQVNTX05BTUVfU0hPVyA9ICdzaG93J1xuY29uc3QgQ0xBU1NfRFJPUERPV04gPSAnZHJvcGRvd24nXG5cbmNvbnN0IFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSA9ICcuZHJvcGRvd24tdG9nZ2xlJ1xuY29uc3QgU0VMRUNUT1JfRFJPUERPV05fTUVOVSA9ICcuZHJvcGRvd24tbWVudSdcbmNvbnN0IE5PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUgPSBgOm5vdCgke1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0pYFxuXG5jb25zdCBTRUxFQ1RPUl9UQUJfUEFORUwgPSAnLmxpc3QtZ3JvdXAsIC5uYXYsIFtyb2xlPVwidGFibGlzdFwiXSdcbmNvbnN0IFNFTEVDVE9SX09VVEVSID0gJy5uYXYtaXRlbSwgLmxpc3QtZ3JvdXAtaXRlbSdcbmNvbnN0IFNFTEVDVE9SX0lOTkVSID0gYC5uYXYtbGluayR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX0sIC5saXN0LWdyb3VwLWl0ZW0ke05PVF9TRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEV9LCBbcm9sZT1cInRhYlwiXSR7Tk9UX1NFTEVDVE9SX0RST1BET1dOX1RPR0dMRX1gXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSA9ICdbZGF0YS1icy10b2dnbGU9XCJ0YWJcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cInBpbGxcIl0sIFtkYXRhLWJzLXRvZ2dsZT1cImxpc3RcIl0nIC8vIFRPRE86IGNvdWxkIG9ubHkgYmUgYHRhYmAgaW4gdjZcbmNvbnN0IFNFTEVDVE9SX0lOTkVSX0VMRU0gPSBgJHtTRUxFQ1RPUl9JTk5FUn0sICR7U0VMRUNUT1JfREFUQV9UT0dHTEV9YFxuXG5jb25zdCBTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUgPSBgLiR7Q0xBU1NfTkFNRV9BQ1RJVkV9W2RhdGEtYnMtdG9nZ2xlPVwidGFiXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJwaWxsXCJdLCAuJHtDTEFTU19OQU1FX0FDVElWRX1bZGF0YS1icy10b2dnbGU9XCJsaXN0XCJdYFxuXG4vKipcbiAqIENsYXNzIGRlZmluaXRpb25cbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBCYXNlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHN1cGVyKGVsZW1lbnQpXG4gICAgdGhpcy5fcGFyZW50ID0gdGhpcy5fZWxlbWVudC5jbG9zZXN0KFNFTEVDVE9SX1RBQl9QQU5FTClcblxuICAgIGlmICghdGhpcy5fcGFyZW50KSB7XG4gICAgICByZXR1cm5cbiAgICAgIC8vIFRPRE86IHNob3VsZCB0aHJvdyBleGNlcHRpb24gaW4gdjZcbiAgICAgIC8vIHRocm93IG5ldyBUeXBlRXJyb3IoYCR7ZWxlbWVudC5vdXRlckhUTUx9IGhhcyBub3QgYSB2YWxpZCBwYXJlbnQgJHtTRUxFQ1RPUl9JTk5FUl9FTEVNfWApXG4gICAgfVxuXG4gICAgLy8gU2V0IHVwIGluaXRpYWwgYXJpYSBhdHRyaWJ1dGVzXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXModGhpcy5fcGFyZW50LCB0aGlzLl9nZXRDaGlsZHJlbigpKVxuXG4gICAgRXZlbnRIYW5kbGVyLm9uKHRoaXMuX2VsZW1lbnQsIEVWRU5UX0tFWURPV04sIGV2ZW50ID0+IHRoaXMuX2tleWRvd24oZXZlbnQpKVxuICB9XG5cbiAgLy8gR2V0dGVyc1xuICBzdGF0aWMgZ2V0IE5BTUUoKSB7XG4gICAgcmV0dXJuIE5BTUVcbiAgfVxuXG4gIC8vIFB1YmxpY1xuICBzaG93KCkgeyAvLyBTaG93cyB0aGlzIGVsZW0gYW5kIGRlYWN0aXZhdGUgdGhlIGFjdGl2ZSBzaWJsaW5nIGlmIGV4aXN0c1xuICAgIGNvbnN0IGlubmVyRWxlbSA9IHRoaXMuX2VsZW1lbnRcbiAgICBpZiAodGhpcy5fZWxlbUlzQWN0aXZlKGlubmVyRWxlbSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBmb3IgYWN0aXZlIHRhYiBvbiBzYW1lIHBhcmVudCB0byBkZWFjdGl2YXRlIGl0XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5fZ2V0QWN0aXZlRWxlbSgpXG5cbiAgICBjb25zdCBoaWRlRXZlbnQgPSBhY3RpdmUgP1xuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoYWN0aXZlLCBFVkVOVF9ISURFLCB7IHJlbGF0ZWRUYXJnZXQ6IGlubmVyRWxlbSB9KSA6XG4gICAgICBudWxsXG5cbiAgICBjb25zdCBzaG93RXZlbnQgPSBFdmVudEhhbmRsZXIudHJpZ2dlcihpbm5lckVsZW0sIEVWRU5UX1NIT1csIHsgcmVsYXRlZFRhcmdldDogYWN0aXZlIH0pXG5cbiAgICBpZiAoc2hvd0V2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgfHwgKGhpZGVFdmVudCAmJiBoaWRlRXZlbnQuZGVmYXVsdFByZXZlbnRlZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoYWN0aXZlLCBpbm5lckVsZW0pXG4gICAgdGhpcy5fYWN0aXZhdGUoaW5uZXJFbGVtLCBhY3RpdmUpXG4gIH1cblxuICAvLyBQcml2YXRlXG4gIF9hY3RpdmF0ZShlbGVtZW50LCByZWxhdGVkRWxlbSkge1xuICAgIGlmICghZWxlbWVudCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfQUNUSVZFKVxuXG4gICAgdGhpcy5fYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBhY3RpdmF0ZS9zaG93IHRoZSBwcm9wZXIgc2VjdGlvblxuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCd0YWJpbmRleCcpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsIHRydWUpXG4gICAgICB0aGlzLl90b2dnbGVEcm9wRG93bihlbGVtZW50LCB0cnVlKVxuICAgICAgRXZlbnRIYW5kbGVyLnRyaWdnZXIoZWxlbWVudCwgRVZFTlRfU0hPV04sIHtcbiAgICAgICAgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5fcXVldWVDYWxsYmFjayhjb21wbGV0ZSwgZWxlbWVudCwgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfTkFNRV9GQURFKSlcbiAgfVxuXG4gIF9kZWFjdGl2YXRlKGVsZW1lbnQsIHJlbGF0ZWRFbGVtKSB7XG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgZWxlbWVudC5ibHVyKClcblxuICAgIHRoaXMuX2RlYWN0aXZhdGUoU2VsZWN0b3JFbmdpbmUuZ2V0RWxlbWVudEZyb21TZWxlY3RvcihlbGVtZW50KSkgLy8gU2VhcmNoIGFuZCBkZWFjdGl2YXRlIHRoZSBzaG93biBzZWN0aW9uIHRvb1xuXG4gICAgY29uc3QgY29tcGxldGUgPSAoKSA9PiB7XG4gICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3JvbGUnKSAhPT0gJ3RhYicpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKENMQVNTX05BTUVfU0hPVylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpXG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgICAgdGhpcy5fdG9nZ2xlRHJvcERvd24oZWxlbWVudCwgZmFsc2UpXG4gICAgICBFdmVudEhhbmRsZXIudHJpZ2dlcihlbGVtZW50LCBFVkVOVF9ISURERU4sIHsgcmVsYXRlZFRhcmdldDogcmVsYXRlZEVsZW0gfSlcbiAgICB9XG5cbiAgICB0aGlzLl9xdWV1ZUNhbGxiYWNrKGNvbXBsZXRlLCBlbGVtZW50LCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0ZBREUpKVxuICB9XG5cbiAgX2tleWRvd24oZXZlbnQpIHtcbiAgICBpZiAoIShbQVJST1dfTEVGVF9LRVksIEFSUk9XX1JJR0hUX0tFWSwgQVJST1dfVVBfS0VZLCBBUlJPV19ET1dOX0tFWSwgSE9NRV9LRVksIEVORF9LRVldLmluY2x1ZGVzKGV2ZW50LmtleSkpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKS8vIHN0b3BQcm9wYWdhdGlvbi9wcmV2ZW50RGVmYXVsdCBib3RoIGFkZGVkIHRvIHN1cHBvcnQgdXAvZG93biBrZXlzIHdpdGhvdXQgc2Nyb2xsaW5nIHRoZSBwYWdlXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbHRlcihlbGVtZW50ID0+ICFpc0Rpc2FibGVkKGVsZW1lbnQpKVxuICAgIGxldCBuZXh0QWN0aXZlRWxlbWVudFxuXG4gICAgaWYgKFtIT01FX0tFWSwgRU5EX0tFWV0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgbmV4dEFjdGl2ZUVsZW1lbnQgPSBjaGlsZHJlbltldmVudC5rZXkgPT09IEhPTUVfS0VZID8gMCA6IGNoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzTmV4dCA9IFtBUlJPV19SSUdIVF9LRVksIEFSUk9XX0RPV05fS0VZXS5pbmNsdWRlcyhldmVudC5rZXkpXG4gICAgICBuZXh0QWN0aXZlRWxlbWVudCA9IGdldE5leHRBY3RpdmVFbGVtZW50KGNoaWxkcmVuLCBldmVudC50YXJnZXQsIGlzTmV4dCwgdHJ1ZSlcbiAgICB9XG5cbiAgICBpZiAobmV4dEFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIG5leHRBY3RpdmVFbGVtZW50LmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KVxuICAgICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UobmV4dEFjdGl2ZUVsZW1lbnQpLnNob3coKVxuICAgIH1cbiAgfVxuXG4gIF9nZXRDaGlsZHJlbigpIHsgLy8gY29sbGVjdGlvbiBvZiBpbm5lciBlbGVtZW50c1xuICAgIHJldHVybiBTZWxlY3RvckVuZ2luZS5maW5kKFNFTEVDVE9SX0lOTkVSX0VMRU0sIHRoaXMuX3BhcmVudClcbiAgfVxuXG4gIF9nZXRBY3RpdmVFbGVtKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRDaGlsZHJlbigpLmZpbmQoY2hpbGQgPT4gdGhpcy5fZWxlbUlzQWN0aXZlKGNoaWxkKSkgfHwgbnVsbFxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzKHBhcmVudCwgY2hpbGRyZW4pIHtcbiAgICB0aGlzLl9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhwYXJlbnQsICdyb2xlJywgJ3RhYmxpc3QnKVxuXG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPbkNoaWxkKGNoaWxkKVxuICAgIH1cbiAgfVxuXG4gIF9zZXRJbml0aWFsQXR0cmlidXRlc09uQ2hpbGQoY2hpbGQpIHtcbiAgICBjaGlsZCA9IHRoaXMuX2dldElubmVyRWxlbWVudChjaGlsZClcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMuX2VsZW1Jc0FjdGl2ZShjaGlsZClcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoY2hpbGQpXG4gICAgY2hpbGQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgaXNBY3RpdmUpXG5cbiAgICBpZiAob3V0ZXJFbGVtICE9PSBjaGlsZCkge1xuICAgICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHMob3V0ZXJFbGVtLCAncm9sZScsICdwcmVzZW50YXRpb24nKVxuICAgIH1cblxuICAgIGlmICghaXNBY3RpdmUpIHtcbiAgICAgIGNoaWxkLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKVxuICAgIH1cblxuICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKGNoaWxkLCAncm9sZScsICd0YWInKVxuXG4gICAgLy8gc2V0IGF0dHJpYnV0ZXMgdG8gdGhlIHJlbGF0ZWQgcGFuZWwgdG9vXG4gICAgdGhpcy5fc2V0SW5pdGlhbEF0dHJpYnV0ZXNPblRhcmdldFBhbmVsKGNoaWxkKVxuICB9XG5cbiAgX3NldEluaXRpYWxBdHRyaWJ1dGVzT25UYXJnZXRQYW5lbChjaGlsZCkge1xuICAgIGNvbnN0IHRhcmdldCA9IFNlbGVjdG9yRW5naW5lLmdldEVsZW1lbnRGcm9tU2VsZWN0b3IoY2hpbGQpXG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fc2V0QXR0cmlidXRlSWZOb3RFeGlzdHModGFyZ2V0LCAncm9sZScsICd0YWJwYW5lbCcpXG5cbiAgICBpZiAoY2hpbGQuaWQpIHtcbiAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZUlmTm90RXhpc3RzKHRhcmdldCwgJ2FyaWEtbGFiZWxsZWRieScsIGAke2NoaWxkLmlkfWApXG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZURyb3BEb3duKGVsZW1lbnQsIG9wZW4pIHtcbiAgICBjb25zdCBvdXRlckVsZW0gPSB0aGlzLl9nZXRPdXRlckVsZW1lbnQoZWxlbWVudClcbiAgICBpZiAoIW91dGVyRWxlbS5jbGFzc0xpc3QuY29udGFpbnMoQ0xBU1NfRFJPUERPV04pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB0b2dnbGUgPSAoc2VsZWN0b3IsIGNsYXNzTmFtZSkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudCA9IFNlbGVjdG9yRW5naW5lLmZpbmRPbmUoc2VsZWN0b3IsIG91dGVyRWxlbSlcbiAgICAgIGlmIChlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWUsIG9wZW4pXG4gICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX1RPR0dMRSwgQ0xBU1NfTkFNRV9BQ1RJVkUpXG4gICAgdG9nZ2xlKFNFTEVDVE9SX0RST1BET1dOX01FTlUsIENMQVNTX05BTUVfU0hPVylcbiAgICBvdXRlckVsZW0uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlbilcbiAgfVxuXG4gIF9zZXRBdHRyaWJ1dGVJZk5vdEV4aXN0cyhlbGVtZW50LCBhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgaWYgKCFlbGVtZW50Lmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIF9lbGVtSXNBY3RpdmUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5jb250YWlucyhDTEFTU19OQU1FX0FDVElWRSlcbiAgfVxuXG4gIC8vIFRyeSB0byBnZXQgdGhlIGlubmVyIGVsZW1lbnQgKHVzdWFsbHkgdGhlIC5uYXYtbGluaylcbiAgX2dldElubmVyRWxlbWVudChlbGVtKSB7XG4gICAgcmV0dXJuIGVsZW0ubWF0Y2hlcyhTRUxFQ1RPUl9JTk5FUl9FTEVNKSA/IGVsZW0gOiBTZWxlY3RvckVuZ2luZS5maW5kT25lKFNFTEVDVE9SX0lOTkVSX0VMRU0sIGVsZW0pXG4gIH1cblxuICAvLyBUcnkgdG8gZ2V0IHRoZSBvdXRlciBlbGVtZW50ICh1c3VhbGx5IHRoZSAubmF2LWl0ZW0pXG4gIF9nZXRPdXRlckVsZW1lbnQoZWxlbSkge1xuICAgIHJldHVybiBlbGVtLmNsb3Nlc3QoU0VMRUNUT1JfT1VURVIpIHx8IGVsZW1cbiAgfVxuXG4gIC8vIFN0YXRpY1xuICBzdGF0aWMgalF1ZXJ5SW50ZXJmYWNlKGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgY29uc3QgZGF0YSA9IFRhYi5nZXRPckNyZWF0ZUluc3RhbmNlKHRoaXMpXG5cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFbY29uZmlnXSA9PT0gdW5kZWZpbmVkIHx8IGNvbmZpZy5zdGFydHNXaXRoKCdfJykgfHwgY29uZmlnID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIG1ldGhvZCBuYW1lZCBcIiR7Y29uZmlnfVwiYClcbiAgICAgIH1cblxuICAgICAgZGF0YVtjb25maWddKClcbiAgICB9KVxuICB9XG59XG5cbi8qKlxuICogRGF0YSBBUEkgaW1wbGVtZW50YXRpb25cbiAqL1xuXG5FdmVudEhhbmRsZXIub24oZG9jdW1lbnQsIEVWRU5UX0NMSUNLX0RBVEFfQVBJLCBTRUxFQ1RPUl9EQVRBX1RPR0dMRSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGlmIChbJ0EnLCAnQVJFQSddLmluY2x1ZGVzKHRoaXMudGFnTmFtZSkpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIH1cblxuICBpZiAoaXNEaXNhYmxlZCh0aGlzKSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UodGhpcykuc2hvdygpXG59KVxuXG4vKipcbiAqIEluaXRpYWxpemUgb24gZm9jdXNcbiAqL1xuRXZlbnRIYW5kbGVyLm9uKHdpbmRvdywgRVZFTlRfTE9BRF9EQVRBX0FQSSwgKCkgPT4ge1xuICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgU2VsZWN0b3JFbmdpbmUuZmluZChTRUxFQ1RPUl9EQVRBX1RPR0dMRV9BQ1RJVkUpKSB7XG4gICAgVGFiLmdldE9yQ3JlYXRlSW5zdGFuY2UoZWxlbWVudClcbiAgfVxufSlcbi8qKlxuICogalF1ZXJ5XG4gKi9cblxuZGVmaW5lSlF1ZXJ5UGx1Z2luKFRhYilcblxuZXhwb3J0IGRlZmF1bHQgVGFiXG4iLCAiaW1wb3J0ICogYXMgcGFyYW1zIGZyb20gXCJAcGFyYW1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2dyZXNzIHtcbiAgICBwcml2YXRlIGVsZTogSFRNTEVsZW1lbnRcblxuICAgIHByaXZhdGUgYmFyOiBIVE1MRWxlbWVudFxuXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyXG5cbiAgICBwcml2YXRlIGludGVydmFsOiBudW1iZXIgXG5cbiAgICBwcml2YXRlIHN0ZXA6IG51bWJlclxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSBwYXJhbXM/LnByb2dyZXNzX2Jhcj8ud2lkdGggPz8gMjBcbiAgICAgICAgdGhpcy5pbnRlcnZhbCA9IHBhcmFtcz8ucHJvZ3Jlc3NfYmFyPy5pbnRlcnZhbCA/PyA1MFxuICAgICAgICBjb25zdCB0aW1lID0gcGFyYW1zPy5wcm9ncmVzc19iYXI/LnRpbWUgPz8gMiBcbiAgICAgICAgdGhpcy5zdGVwID0gKDEwMCAtIHRoaXMud2lkdGgpIC8gdGltZSAvIDEwMDAgKiB0aGlzLmludGVydmFsXG4gICAgICAgIHRoaXMuaW5pdEJhcigpXG4gICAgICAgIHRoaXMuaW5pdFByb2dyZXNzKClcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRQcm9ncmVzcygpIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9ncmVzcy5jbGFzc05hbWUgPSAnaGItcHJvZ3Jlc3MgcHJvZ3Jlc3MgcG9zaXRpb24tZml4ZWQgdG9wLTAgdy0xMDAgcm91bmRlZC0wIGQtbm9uZSdcbiAgICAgICAgcHJvZ3Jlc3Mucm9sZSA9ICdwcm9ncmVzc2JhcidcbiAgICAgICAgcHJvZ3Jlc3MuYXBwZW5kQ2hpbGQodGhpcy5iYXIpXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpXG4gICAgICAgIHRoaXMuZWxlID0gcHJvZ3Jlc3NcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRCYXIoKSB7XG4gICAgICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJhci5jbGFzc05hbWUgPSAncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCdcbiAgICAgICAgYmFyLnN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICclJ1xuICAgICAgICB0aGlzLmJhciA9IGJhclxuICAgIH1cblxuICAgIHByaXZhdGUgdGltZXIgPSAwXG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmVsZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKVxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aWR0aCArPSB0aGlzLnN0ZXBcbiAgICAgICAgICAgIHRoaXMuYmFyLnN0eWxlLndpZHRoID0gYCR7dGhpcy53aWR0aH0lYFxuICAgICAgICB9LCB0aGlzLmludGVydmFsKVxuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuZWxlLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICB9XG59XG4iLCAiaW1wb3J0IFByb2dyZXNzIGZyb20gXCIuL3Byb2dyZXNzXCI7XG5cbigoKSA9PiB7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3MoKVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BhZ2VoaWRlJywgKCkgPT4ge1xuICAgICAgICBwcm9ncmVzcy5oaWRlKClcbiAgICB9KVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgICAgICAgcHJvZ3Jlc3Muc2hvdygpXG4gICAgfSlcbn0pKClcbiIsICIvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFpbi9qcy9pbmRleC51bWQuanNcblxuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2N1c3RvbS9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvdGhlbWUtY2FyZHMvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2Jhc2UvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2hlYWRlci9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvY2Fyb3VzZWwvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2dhbGxlcnkvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2JzLXRvb2x0aXAvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL3NsaWRlL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9naXNjdXMvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL3RvYy1zY3JvbGxzcHkvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2NvbnRlbnQtcGFuZWwvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2RvY3MvanMvaW5kZXgudHMnO1xuICBpbXBvcnQgJy9oYi9tb2R1bGVzL2hlYWRpbmctc2lnbi9qcy9pbmRleC50cyc7XG4gIGltcG9ydCAnL2hiL21vZHVsZXMvYm9vdHN0cmFwL2pzL2luZGV4LnRzJztcbiAgaW1wb3J0ICcvaGIvbW9kdWxlcy9wcm9ncmVzcy1iYXIvanMvaW5kZXgudHMnO1xuXG4gIFxuICBcblxuaW1wb3J0IEJpZ2dlclBpY3R1cmUgZnJvbSAnbW9kcy9iaWdnZXItcGljdHVyZS9iaWdnZXItcGljdHVyZS51bWQuanMnXG5pbXBvcnQgUGFuZWwgZnJvbSAnaGIvbW9kdWxlcy9iaWdnZXItcGljdHVyZS9qcy9wYW5lbCdcblxuKCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBicCA9IEJpZ2dlclBpY3R1cmUoe1xuICAgICAgICAgICAgdGFyZ2V0OiBkb2N1bWVudC5ib2R5LFxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHBhbmVsID0gbmV3IFBhbmVsKGJwLCBgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImJpIGJpLWRvd25sb2FkIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBkPVwiTS41IDkuOWEuNS41IDAgMCAxIC41LjV2Mi41YTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXYtMi41YS41LjUgMCAwIDEgMSAwdjIuNWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnYtMi41YS41LjUgMCAwIDEgLjUtLjVcIi8+XG4gIDxwYXRoIGQ9XCJNNy42NDYgMTEuODU0YS41LjUgMCAwIDAgLjcwOCAwbDMtM2EuNS41IDAgMCAwLS43MDgtLjcwOEw4LjUgMTAuMjkzVjEuNWEuNS41IDAgMCAwLTEgMHY4Ljc5M0w1LjM1NCA4LjE0NmEuNS41IDAgMSAwLS43MDguNzA4elwiLz5cbjwvc3ZnPmAsIGA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzPVwiYmkgYmktc2hhcmUgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGQ9XCJNMTMuNSAxYTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zTTExIDIuNWEyLjUgMi41IDAgMSAxIC42MDMgMS42MjhsLTYuNzE4IDMuMTJhMi41IDIuNSAwIDAgMSAwIDEuNTA0bDYuNzE4IDMuMTJhMi41IDIuNSAwIDEgMS0uNDg4Ljg3NmwtNi43MTgtMy4xMmEyLjUgMi41IDAgMSAxIDAtMy4yNTZsNi43MTgtMy4xMkEyLjUgMi41IDAgMCAxIDExIDIuNW0tOC41IDRhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtMTEgNS41YTEuNSAxLjUgMCAxIDAgMCAzIDEuNSAxLjUgMCAwIDAgMC0zXCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1hcnJvdy1jbG9ja3dpc2UgaGktc3ZnLWlubGluZVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBoZWlnaHQ9XCIxLjI1ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgd2lkdGg9XCIxLjI1ZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggM2E1IDUgMCAxIDAgNC41NDYgMi45MTQuNS41IDAgMCAxIC45MDgtLjQxN0E2IDYgMCAxIDEgOCAyelwiLz5cbiAgPHBhdGggZD1cIk04IDQuNDY2Vi41MzRhLjI1LjI1IDAgMCAxIC40MS0uMTkybDIuMzYgMS45NjZjLjEyLjEuMTIuMjg0IDAgLjM4NEw4LjQxIDQuNjU4QS4yNS4yNSAwIDAgMSA4IDQuNDY2XCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1waG9uZS1mbGlwIGhpLXN2Zy1pbmxpbmVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMS4yNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMS4yNWVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMSAxSDVhMSAxIDAgMCAwLTEgMXY2YS41LjUgMCAwIDEtMSAwVjJhMiAyIDAgMCAxIDItMmg2YTIgMiAwIDAgMSAyIDJ2NmEuNS41IDAgMCAxLTEgMFYyYTEgMSAwIDAgMC0xLTFtMSAxM2ExIDEgMCAwIDEtMSAxSDVhMSAxIDAgMCAxLTEtMXYtMmEuNS41IDAgMCAwLTEgMHYyYTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0ydi0yYS41LjUgMCAwIDAtMSAwek0xLjcxMyA3Ljk1NGEuNS41IDAgMSAwLS40MTktLjkwOGMtLjM0Ny4xNi0uNjU0LjM0OC0uODgyLjU3Qy4xODQgNy44NDIgMCA4LjEzOSAwIDguNWMwIC41NDYuNDA4Ljk0LjgyMyAxLjIwMS40NC4yNzggMS4wNDMuNTEgMS43NDUuNjk2QzMuOTc4IDEwLjc3MyA1Ljg5OCAxMSA4IDExcS4xNDggMCAuMjk0LS4wMDJsLTEuMTQ4IDEuMTQ4YS41LjUgMCAwIDAgLjcwOC43MDhsMi0yYS41LjUgMCAwIDAgMC0uNzA4bC0yLTJhLjUuNSAwIDEgMC0uNzA4LjcwOGwxLjE0NSAxLjE0NEw4IDEwYy0yLjA0IDAtMy44Ny0uMjIxLTUuMTc0LS41NjktLjY1Ni0uMTc1LTEuMTUxLS4zNzQtMS40Ny0uNTc1QzEuMDEyIDguNjM5IDEgOC41MDYgMSA4LjVjMC0uMDAzIDAtLjA1OS4xMTItLjE3LjExNS0uMTEyLjMxLS4yNDIuNi0uMzc2Wm0xMi45OTMtLjkwOGEuNS41IDAgMCAwLS40MTkuOTA4Yy4yOTIuMTM0LjQ4Ni4yNjQuNi4zNzcuMTEzLjExLjExMy4xNjYuMTEzLjE2OXMwIC4wNjUtLjEzLjE4N2MtLjEzMi4xMjItLjM1Mi4yNi0uNjc3LjQtLjY0NS4yOC0xLjU5Ni41MjMtMi43NjMuNjg3YS41LjUgMCAwIDAgLjE0Ljk5YzEuMjEyLS4xNyAyLjI2LS40MyAzLjAyLS43NTguMzgtLjE2NC43MTMtLjM1Ny45Ni0uNTg3LjI0Ni0uMjI5LjQ1LS41MzcuNDUtLjkxOSAwLS4zNjItLjE4NC0uNjYtLjQxMi0uODgzcy0uNTM1LS40MTEtLjg4Mi0uNTcxTTcuNSAyYS41LjUgMCAwIDAgMCAxaDFhLjUuNSAwIDAgMCAwLTF6XCIvPlxuPC9zdmc+YCwgYDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJiaSBiaS1wbGF5LWNpcmNsZSBoaS1zdmctaW5saW5lXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGhlaWdodD1cIjEuMjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB3aWR0aD1cIjEuMjVlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgPHBhdGggZD1cIk04IDE1QTcgNyAwIDEgMSA4IDFhNyA3IDAgMCAxIDAgMTRtMCAxQTggOCAwIDEgMCA4IDBhOCA4IDAgMCAwIDAgMTZcIi8+XG4gIDxwYXRoIGQ9XCJNNi4yNzEgNS4wNTVhLjUuNSAwIDAgMSAuNTIuMDM4bDMuNSAyLjVhLjUuNSAwIDAgMSAwIC44MTRsLTMuNSAyLjVBLjUuNSAwIDAgMSA2IDEwLjV2LTVhLjUuNSAwIDAgMSAuMjcxLS40NDVcIi8+XG48L3N2Zz5gKVxuXG4gICAgICAgIGNvbnN0IG9uT3BlbiA9IChjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBwYW5lbC5pbml0KGNvbnRhaW5lcilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9uVXBkYXRlID0gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHBhbmVsLnVwZGF0ZShjb250YWluZXIsIGl0ZW0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzaG93ID0gKGltZ3MsIHBvcykgPT4ge1xuICAgICAgICAgICAgYnAub3Blbih7XG4gICAgICAgICAgICAgICAgaXRlbXM6IGltZ3MsXG4gICAgICAgICAgICAgICAgaW50cm86ICdmYWRldXAnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3MsXG4gICAgICAgICAgICAgICAgb25PcGVuOiBvbk9wZW4sXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6IG9uVXBkYXRlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNjYWxlID0gcGFyc2VJbnQoJzInKVxuXG4gICAgICAgIGNvbnN0IGRhdGEgPSAoaW1nOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhbHQgPSBpbWcuZ2V0QXR0cmlidXRlKCdhbHQnKVxuICAgICAgICAgICAgbGV0IGNhcHRpb24gPSBhbHRcbiAgICAgICAgICAgIGNvbnN0IGNhcHRpb25FbGUgPSBpbWcucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdmaWdjYXB0aW9uJylcbiAgICAgICAgICAgIGlmIChjYXB0aW9uRWxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY2FwdGlvbiA9IGNhcHRpb25FbGUuaW5uZXJUZXh0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGltZzogaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSA/PyBpbWcuc3JjLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc2NhbGUgKiAoaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSA/PyBpbWcubmF0dXJhbEhlaWdodCksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHNjYWxlICogKGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtd2lkdGgnKSA/PyBpbWcubmF0dXJhbFdpZHRoKSxcbiAgICAgICAgICAgICAgICBhbHQ6IGltZy5nZXRBdHRyaWJ1dGUoJ2FsdCcpLFxuICAgICAgICAgICAgICAgIGNhcHRpb246IGNhcHRpb24sXG4gICAgICAgICAgICAgICAgdGh1bWI6IGltZy5zcmMsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKVxuICAgICAgICBmb3IgKGNvbnN0IGltZyBvZiBpbWFnZXMpIHtcbiAgICAgICAgICAgIC8vIGlnbm9yZSBsaW5rYWJsZSBpbWFnZXMuXG4gICAgICAgICAgICBpZiAoaW1nLmNsb3Nlc3QoJ2EnKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdzOiBBcnJheTx1bmtub3duPiA9IFtdXG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IDBcbiAgICAgICAgICAgICAgICBjb25zdCBzZXQgPSBpbWcuY2xvc2VzdCgnLmJpZ2dlci1waWN0dXJlcycpXG4gICAgICAgICAgICAgICAgaWYgKHNldCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IGEgc2V0IG9mIGltYWdlcy5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWxzID0gc2V0LnF1ZXJ5U2VsZWN0b3JBbGw8SFRNTEltYWdlRWxlbWVudD4oJ2ltZycpXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxzW2ldID09PSBpbWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdzLnB1c2goZGF0YShlbHNbaV0pKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaW1ncy5wdXNoKGRhdGEoaW1nKSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzaG93KGltZ3MsIHBvcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJy5pbWctbGluaycpKVxuICAgICAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua3MpIHtcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHNob3coW3tcbiAgICAgICAgICAgICAgICAgICAgaW1nOiBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpLFxuICAgICAgICAgICAgICAgICAgICBhbHQ6IGxpbmsuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uOiBsaW5rLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICB9XSwgMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9KVxufSkoKVxuXG4gIFxuICBcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdoYi9tb2R1bGVzL2JhY2stdG8tdG9wL2pzL2J1dHRvbic7XG5cbigoKSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gbmV3IEJ1dHRvbihgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImJpIGJpLXJvY2tldCBoaS1zdmctaW5saW5lIGhiLWJhY2stdG8tdG9wLWljb25cIiBmaWxsPVwiY3VycmVudENvbG9yXCIgaGVpZ2h0PVwiMmVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIHdpZHRoPVwiMmVtXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICA8cGF0aCBkPVwiTTggOGMuODI4IDAgMS41LS44OTUgMS41LTJTOC44MjggNCA4IDRzLTEuNS44OTUtMS41IDJTNy4xNzIgOCA4IDhcIi8+XG4gIDxwYXRoIGQ9XCJNMTEuOTUzIDguODFjLS4xOTUtMy4zODgtLjk2OC01LjUwNy0xLjc3Ny02LjgxOUM5LjcwNyAxLjIzMyA5LjIzLjc1MSA4Ljg1Ny40NTRhMy41IDMuNSAwIDAgMC0uNDYzLS4zMTVBMiAyIDAgMCAwIDguMjUuMDY0LjU1LjU1IDAgMCAwIDggMGEuNTUuNTUgMCAwIDAtLjI2Ni4wNzMgMiAyIDAgMCAwLS4xNDIuMDggNCA0IDAgMCAwLS40NTkuMzNjLS4zNy4zMDgtLjg0NC44MDMtMS4zMSAxLjU3LS44MDUgMS4zMjItMS41NzcgMy40MzMtMS43NzQgNi43NTZsLTEuNDk3IDEuODI2LS4wMDQuMDA1QTIuNSAyLjUgMCAwIDAgMiAxMi4yMDJWMTUuNWEuNS41IDAgMCAwIC45LjNsMS4xMjUtMS41Yy4xNjYtLjIyMi40Mi0uNC43NTItLjU3LjIxNC0uMTA4LjQxNC0uMTkyLjYyNS0uMjgxbC4xOTgtLjA4NGMuNy40MjggMS41NS42MzUgMi40LjYzNXMxLjctLjIwNyAyLjQtLjYzNXEuMS4wNDQuMTk2LjA4M2MuMjEzLjA5LjQxMy4xNzQuNjI3LjI4Mi4zMzIuMTcuNTg2LjM0OC43NTIuNTdsMS4xMjUgMS41YS41LjUgMCAwIDAgLjktLjN2LTMuMjk4YTIuNSAyLjUgMCAwIDAtLjU0OC0xLjU2MnpNMTIgMTAuNDQ1di4wNTVjMCAuODY2LS4yODQgMS41ODUtLjc1IDIuMTQuMTQ2LjA2NC4yOTIuMTMuNDI1LjE5OS4zOS4xOTcuOC40NiAxLjEuODZMMTMgMTR2LTEuNzk4YTEuNSAxLjUgMCAwIDAtLjMyNy0uOTM1ek00Ljc1IDEyLjY0QzQuMjg0IDEyLjA4NSA0IDExLjM2NiA0IDEwLjV2LS4wNTRsLS42NzMuODJhMS41IDEuNSAwIDAgMC0uMzI3LjkzNlYxNGwuMjI1LS4zYy4zLS40LjcxLS42NjQgMS4xLS44NjEuMTMzLS4wNjguMjc5LS4xMzUuNDI1LS4xOTlNOC4wMDkgMS4wNzNxLjA5Ni4wNi4yMjYuMTYzYy4yODQuMjI2LjY4My42MjEgMS4wOSAxLjI4QzEwLjEzNyAzLjgzNiAxMSA2LjIzNyAxMSAxMC41YzAgLjg1OC0uMzc0IDEuNDgtLjk0MyAxLjg5M0M5LjUxNyAxMi43ODYgOC43ODEgMTMgOCAxM3MtMS41MTctLjIxNC0yLjA1Ny0uNjA3QzUuMzczIDExLjk3OSA1IDExLjM1OCA1IDEwLjVjMC00LjE4Mi44Ni02LjU4NiAxLjY3Ny03LjkyOC40MDktLjY3LjgxLTEuMDgyIDEuMDk2LTEuMzJxLjEzNi0uMTEzLjIzNi0uMThaXCIvPlxuICA8cGF0aCBkPVwiTTkuNDc5IDE0LjM2MWMtLjQ4LjA5My0uOTguMTM5LTEuNDc5LjEzOXMtLjk5OS0uMDQ2LTEuNDc5LS4xMzlMNy42IDE1LjhhLjUuNSAwIDAgMCAuOCAwelwiLz5cbjwvc3ZnPmApXG4gICAgfSlcbn0pKCk7XG4iLCAiaW1wb3J0IHtkZWZhdWx0IGFzIHBhcmFtc30gZnJvbSAnQHBhcmFtcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFuZWwge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIGJwLFxuICAgICAgICBwcml2YXRlIGRvd25sb2FkSWNvbjogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIHNoYXJlSWNvbjogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIHJvdGF0ZUljb246IHN0cmluZyxcbiAgICAgICAgcHJpdmF0ZSBmbGlwSWNvbjogc3RyaW5nLFxuICAgICAgICBwcml2YXRlIHBsYXlJY29uOiBzdHJpbmcsXG4gICAgKSB7XG5cbiAgICB9XG5cbiAgICBpbml0KGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwnLCAnZC1mbGV4JywgJ3Bvc2l0aW9uLWFic29sdXRlJywgJ214LWF1dG8nLCAnc3RhcnQtMCcsICdlbmQtMCcsICd0ZXh0LWNlbnRlcicpXG4gICAgICAgIHAuYXBwZW5kQ2hpbGQodGhpcy5yb3RhdGUoZmFsc2UpKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMucm90YXRlKHRydWUpKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMuZmxpcCgpKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMucGxheSgpKVxuICAgICAgICBwLmFwcGVuZENoaWxkKHRoaXMuZG93bmxvYWQoKSlcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0aGlzLnNoYXJlKCkpXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwKVxuICAgIH1cblxuICAgIHVwZGF0ZShjb250YWluZXI6IEhUTUxFbGVtZW50LCBpdGVtKSB7XG4gICAgICAgIGNvbnN0IHAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLmJwLXBhbmVsJykgYXMgSFRNTEVsZW1lbnRcblxuICAgICAgICAvLyB1cGRhdGUgZG93bmxvYWQgbGluay5cbiAgICAgICAgY29uc3QgZCA9IHAucXVlcnlTZWxlY3RvcignLmJwLXBhbmVsLWRvd25sb2FkJykgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICAgICAgZC5ocmVmID0gaXRlbS5pbWdcbiAgICAgICAgZC5kb3dubG9hZCA9IGl0ZW0uYWx0XG4gICAgfVxuXG4gICAgaW1nV3JhcCA9ICgpOiBIVE1MRWxlbWVudCA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnAtaW1nLXdyYXAnKSBhcyBIVE1MRWxlbWVudFxuICAgIH1cblxuICAgIHJvdGF0ZSA9IChjbG9ja3dpc2UgPSBmYWxzZSk6IEhUTUxBbmNob3JFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBhLnRpdGxlID0gJ1JvdGF0ZSdcbiAgICAgICAgYS5yb2xlID0gJ2J1dHRvbidcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdicC1wYW5lbC1hY3Rpb24nLCAnYnAtcGFuZWwtcm90YXRlJywgY2xvY2t3aXNlID8gJ2JwLXBhbmVsLXJvdGF0ZS1jbG9ja3dpc2UnIDogJ2JwLXBhbmVsLXJvdGF0ZS1hbnRpY2xvY2t3aXNlJywgJ3RleHQtZGVjb3JhdGlvbi1ub25lJywgJ3AtMicpXG4gICAgICAgIGEuaW5uZXJIVE1MID0gdGhpcy5yb3RhdGVJY29uXG4gICAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cmFwID0gdGhpcy5pbWdXcmFwKClcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBhcnNlSW50KHdyYXAuZ2V0QXR0cmlidXRlKCdkYXRhLXJvdGF0ZScpID8/ICcwJylcbiAgICAgICAgICAgIHZhbHVlICs9IGNsb2Nrd2lzZSA/IDkwIDogLTkwXG4gICAgICAgICAgICB3cmFwLnNldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGUnLCB2YWx1ZS50b1N0cmluZygpKVxuICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0od3JhcClcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGFcbiAgICB9XG5cbiAgICBmbGlwID0gKCk6IEhUTUxBbmNob3JFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBhLnRpdGxlID0gJ0ZsaXAnXG4gICAgICAgIGEucm9sZSA9ICdidXR0b24nXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwtYWN0aW9uJywgJ2JwLXBhbmVsLWZsaXAnLCAndGV4dC1kZWNvcmF0aW9uLW5vbmUnLCAncC0yJylcbiAgICAgICAgYS5pbm5lckhUTUwgPSB0aGlzLmZsaXBJY29uXG4gICAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB3cmFwID0gdGhpcy5pbWdXcmFwKClcbiAgICAgICAgICAgIGlmICh3cmFwLmhhc0F0dHJpYnV0ZSgnZGF0YS1mbGlwJykpIHtcbiAgICAgICAgICAgICAgICB3cmFwLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1mbGlwJylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd3JhcC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZmxpcCcsICd0cnVlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKHdyYXApXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhXG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0cmFuc2Zvcm0gPSAod3JhcDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtOiBBcnJheTxzdHJpbmc+ID0gW11cblxuICAgICAgICBjb25zdCByb3RhdGUgPSB3cmFwLmdldEF0dHJpYnV0ZSgnZGF0YS1yb3RhdGUnKVxuICAgICAgICBpZiAocm90YXRlKSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm0ucHVzaChgcm90YXRlKCR7cGFyc2VJbnQocm90YXRlKX1kZWcpYClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZsaXAgPSB3cmFwLmdldEF0dHJpYnV0ZSgnZGF0YS1mbGlwJylcbiAgICAgICAgaWYgKGZsaXApIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybS5wdXNoKCdzY2FsZVgoLTEpJylcbiAgICAgICAgfVxuXG4gICAgICAgIHdyYXAuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtLmpvaW4oXCIgXCIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwbGF5Sm9iID0gMFxuXG4gICAgcHJpdmF0ZSBwbGF5SW50ZXJ2YWwgPSAxMDAwXG5cbiAgICBwbGF5ID0gKCk6IEhUTUxBbmNob3JFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBhLnRpdGxlID0gJ1BsYXknXG4gICAgICAgIGEucm9sZSA9ICdidXR0b24nXG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwtYWN0aW9uJywgJ2JwLXBhbmVsLXBsYXknLCAndGV4dC1kZWNvcmF0aW9uLW5vbmUnLCAncC0yJylcbiAgICAgICAgYS5pbm5lckhUTUwgPSB0aGlzLnBsYXlJY29uXG4gICAgICAgIGEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5wbGF5Sm9iKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnBsYXlKb2IpXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5Sm9iID0gMFxuICAgICAgICAgICAgICAgIGEuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgdGhpcy5wbGF5Sm9iID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnAubmV4dCgpXG4gICAgICAgICAgICB9LCBwYXJhbXMuYmlnZ2VyX3BpY3R1cmUucGxheV9pbnRlcnZhbCA/PyA1MDAwKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIGRvd25sb2FkID0gKCk6IEhUTUxBbmNob3JFbGVtZW50ID0+IHtcbiAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgICBhLnRpdGxlID0gJ0Rvd25sb2FkJ1xuICAgICAgICBhLnJvbGUgPSAnYnV0dG9uJ1xuICAgICAgICBhLmNsYXNzTGlzdC5hZGQoJ2JwLXBhbmVsLWFjdGlvbicsICdicC1wYW5lbC1kb3dubG9hZCcsICd0ZXh0LWRlY29yYXRpb24tbm9uZScsICdwLTInKVxuICAgICAgICBhLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCAnJylcbiAgICAgICAgYS5pbm5lckhUTUwgPSB0aGlzLmRvd25sb2FkSWNvblxuICAgICAgICByZXR1cm4gYVxuICAgIH1cblxuICAgIHR3aXR0ZXJTaGFyZUxpbmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dXJsPSR7dGhpcy5zaGFyZUxpbmsoKX1gXG4gICAgfVxuXG4gICAgZmFjZWJvb2tTaGFyZUxpbmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHt0aGlzLnNoYXJlTGluaygpfWBcbiAgICB9XG5cbiAgICBzaGFyZUxpbmsgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgfVxuXG4gICAgc2hhcmUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnYnAtcGFuZWwtYWN0aW9uJywgJ2Ryb3Bkb3duLWNlbnRlcicsICdicC1wYW5lbC1zaGFyZScsICdwLTInKVxuICAgICAgICBlbC5pbm5lckhUTUwgPSBgPGEgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgaHJlZj1cIiNcIiByb2xlPVwiYnV0dG9uXCIgdGl0bGU9XCJTaGFyZVwiIGRhdGEtYnMtdG9nZ2xlPVwiZHJvcGRvd25cIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIj4ke3RoaXMuc2hhcmVJY29ufTwvYT5cbiAgICAgICAgICA8dWwgY2xhc3M9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIiR7dGhpcy50d2l0dGVyU2hhcmVMaW5rKCl9XCI+VHdpdHRlcjwvYT48L2xpPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIke3RoaXMuZmFjZWJvb2tTaGFyZUxpbmsoKX1cIj5GYWNlYm9vazwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+YFxuICAgICAgICByZXR1cm4gZWxcbiAgICB9XG59XG4iLCAiaW1wb3J0ICogYXMgcGFyYW1zIGZyb20gXCJAcGFyYW1zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbiB7XG4gICAgcHJpdmF0ZSBidG46IEhUTUxCdXR0b25FbGVtZW50XG5cbiAgICBjb25zdHJ1Y3RvcihpY29uOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYnRuLmNsYXNzTmFtZSA9ICdoYi1iYWNrLXRvLXRvcCdcbiAgICAgICAgYnRuLmFyaWFMYWJlbCA9ICdCYWNrIHRvIHRvcCdcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IHRoaXMudHJhbnNmb3JtSWNvbihpY29uKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJ0bilcbiAgICAgICAgdGhpcy5idG4gPSBidG5cblxuICAgICAgICBsZXQgeSA9IDBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDIwIHx8IHRvcCA+IDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uKCkgJiYgdG9wID4geSkge1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGxpbmcnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeSA9IHRvcFxuICAgICAgICAgICAgdGhpcy51cGRhdGVQb3MoKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uKCkgJiYgYnRuLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGluZycpXG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdHJhbnNmb3JtSWNvbihpY29uKSB7XG4gICAgICAgIHJldHVybiBpY29uLnJlcGxhY2UoLzxzdmcoLiopPigoLnxcXG4pKik8XFwvc3ZnPi8sIGA8c3ZnJDE+XG4gIDxkZWZzPjxjbGlwUGF0aCBpZD1cImljb25cIj4kMjwvY2xpcFBhdGg+PC9kZWZzPlxuICA8cmVjdCB4PVwiMFwiIHk9XCIwXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBjbGlwLXBhdGg9XCJ1cmwoI2ljb24pXCIgLz5cbiAgPHJlY3QgeD1cIjBcIiB5PVwiMTAwJVwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBjbGlwLXBhdGg9XCJ1cmwoI2ljb24pXCIgLz5cbjwvc3ZnPmApXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBwb3NJY29uOiBIVE1MRWxlbWVudFxuXG4gICAgdXBkYXRlUG9zKCkge1xuICAgICAgICBpZiAoIXRoaXMucG9zSWNvbikge1xuICAgICAgICAgICAgdGhpcy5wb3NJY29uID0gdGhpcy5idG4ucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ3JlY3QnKVsxXVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBvcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgLyAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9mZnNldEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgIHRoaXMucG9zSWNvbi5zZXRBdHRyaWJ1dGUoJ3knLCAoMSAtIHBvcykgKiAxMDAgKyAnJScpXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5idG4uY2xhc3NMaXN0LmFkZCgnc2hvdycpXG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5idG4uY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgfVxuXG4gICAgYW5pbWF0aW9uKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gcGFyYW1zPy5iYWNrX3RvX3RvcD8uYW5pbWF0aW9uICE9PSBmYWxzZVxuICAgIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBTUEsYUFBTyxlQUFlLFNBQVMsY0FBYyxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBRTVELGVBQVMsVUFBVSxNQUFNO0FBQ3ZCLFlBQUksUUFBUSxNQUFNO0FBQ2hCLGlCQUFPO0FBQUEsUUFDVDtBQUVBLFlBQUksS0FBSyxTQUFTLE1BQU0sbUJBQW1CO0FBQ3pDLGNBQUksZ0JBQWdCLEtBQUs7QUFDekIsaUJBQU8sZ0JBQWdCLGNBQWMsZUFBZSxTQUFTO0FBQUEsUUFDL0Q7QUFFQSxlQUFPO0FBQUEsTUFDVDtBQUVBLGVBQVNBLFdBQVUsTUFBTTtBQUN2QixZQUFJLGFBQWEsVUFBVSxJQUFJLEVBQUU7QUFDakMsZUFBTyxnQkFBZ0IsY0FBYyxnQkFBZ0I7QUFBQSxNQUN2RDtBQUVBLGVBQVMsY0FBYyxNQUFNO0FBQzNCLFlBQUksYUFBYSxVQUFVLElBQUksRUFBRTtBQUNqQyxlQUFPLGdCQUFnQixjQUFjLGdCQUFnQjtBQUFBLE1BQ3ZEO0FBRUEsZUFBUyxhQUFhLE1BQU07QUFFMUIsWUFBSSxPQUFPLGVBQWUsYUFBYTtBQUNyQyxpQkFBTztBQUFBLFFBQ1Q7QUFFQSxZQUFJLGFBQWEsVUFBVSxJQUFJLEVBQUU7QUFDakMsZUFBTyxnQkFBZ0IsY0FBYyxnQkFBZ0I7QUFBQSxNQUN2RDtBQUVBLFVBQUksTUFBTSxLQUFLO0FBQ2YsVUFBSSxNQUFNLEtBQUs7QUFDZixVQUFJLFFBQVEsS0FBSztBQUVqQixlQUFTLHNCQUFzQixTQUFTLGNBQWM7QUFDcEQsWUFBSSxpQkFBaUIsUUFBUTtBQUMzQix5QkFBZTtBQUFBLFFBQ2pCO0FBRUEsWUFBSSxPQUFPLFFBQVEsc0JBQXNCO0FBQ3pDLFlBQUksU0FBUztBQUNiLFlBQUksU0FBUztBQUViLFlBQUksY0FBYyxPQUFPLEtBQUssY0FBYztB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SUFBSSxJQUFJLFFBQVEsS0FBSztBQUNqQyxrQkFBSSxJQUFJLENBQUMsTUFBTSxLQUFLO0FBQ2hCLHNCQUFNO0FBQUEsY0FDVjtBQUNBLG1CQUFLLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQUEsWUFDMUI7QUFBQSxVQUNKLE9BQU87QUFDSCxpQkFBSyxLQUFLLEtBQUssR0FBRyxDQUFDO0FBQUEsVUFDdkI7QUFFQSxlQUFLLE1BQU0sR0FBRztBQUFBLFFBQ2xCLENBQUM7QUFBQSxNQUNMO0FBRUEsWUFBTSxRQUFRLE1BQU0sS0FBSyxTQUFTLGlCQUE4QixXQUFXLENBQUM7QUFDNUUsaUJBQVcsUUFBUSxPQUFPO0FBQ3RCLGFBQUssaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ2xDLFlBQUUsZUFBZTtBQUNqQixlQUFLLENBQUM7QUFBQSxZQUNGLEtBQUssS0FBSyxhQUFhLE1BQU07QUFBQSxZQUM3QixLQUFLLEtBQUs7QUFBQSxZQUNWLFNBQVMsS0FBSztBQUFBLFVBQ2xCLENBQUMsR0FBRyxDQUFDO0FBQUEsUUFDVCxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0osQ0FBQztBQUFBLEVBQ0wsR0FBRztBQU9ILEdBQUMsTUFBTTtBQUNIO0FBRUEsV0FBTyxpQkFBaUIsb0JBQW9CLE1BQU07QUFDOUMsWUFBTSxNQUFNLElBQUksT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBLE9BSXhCO0FBQUEsSUFDSCxDQUFDO0FBQUEsRUFDTCxHQUFHOyIsCiAgIm5hbWVzIjogWyJpc0VsZW1lbnQiLCAiZ2V0Q29tcHV0ZWRTdHlsZSIsICJ3aW5kb3ciLCAic2VsZiIsICJtZXJnZWQiLCAiY2xpcHBpbmdQYXJlbnRzIiwgInJlZmVyZW5jZSIsICJwb3BwZXJPZmZzZXRzIiwgIm9mZnNldCIsICJkZWZhdWx0TW9kaWZpZXJzIiwgImNyZWF0ZVBvcHBlciIsICJwb3BwZXIiLCAib3B0aW9ucyIsICJzdGF0ZSIsICJlZmZlY3QiLCAibm9vcEZuIiwgIm5hbWUiLCAic3R5bGUiLCAicGxhY2VtZW50IiwgInBsYWNlbWVudHMiLCAiX2xvb3AiLCAiX2kiLCAiY2hlY2tzIiwgIm1pbiIsICJtYXgiLCAidG9QYWRkaW5nT2JqZWN0IiwgIm5vb3AiLCAibm93IiwgImVsZW1lbnQiLCAiZGV0YWNoIiwgImluc3RhbmNlIiwgImNyZWF0ZV9mcmFnbWVudCIsICJub3RfZXF1YWwiLCAidXBkYXRlIiwgInN1YnNjcmliZSIsICJydW4iLCAiY3R4IiwgIiQkcHJvcHMiLCAiY2FsbGJhY2siLCAiZm4iLCAiTkFNRSIsICJDTEFTU19OQU1FX1NIT1ciLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJOQU1FIiwgIkRBVEFfS0VZIiwgIkVWRU5UX0tFWSIsICJUQUJfS0VZIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiREFUQV9BUElfS0VZIiwgIkVTQ0FQRV9LRVkiLCAiQ0xBU1NfTkFNRV9TSE9XIiwgIkVWRU5UX1NIT1ciLCAiRVZFTlRfU0hPV04iLCAiRVZFTlRfSElERSIsICJFVkVOVF9ISURERU4iLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJpc1Zpc2libGUiLCAiaGVhZGVyIiwgIk5BTUUiLCAiRVZFTlRfS0VZIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiREFUQV9BUElfS0VZIiwgIkVWRU5UX0xPQURfREFUQV9BUEkiLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiRGVmYXVsdCIsICJEZWZhdWx0VHlwZSIsICJQb3BwZXIiLCAiTkFNRSIsICJEZWZhdWx0IiwgIkRlZmF1bHRUeXBlIiwgIk5BTUUiLCAiQ0xBU1NfTkFNRV9GQURFIiwgIkNMQVNTX05BTUVfU0hPVyIsICJFVkVOVF9ISURFIiwgIkVWRU5UX0hJRERFTiIsICJFVkVOVF9TSE9XIiwgIkVWRU5UX1NIT1dOIiwgIkVWRU5UX0ZPQ1VTSU4iLCAiRVZFTlRfTU9VU0VFTlRFUiIsICJFVkVOVF9NT1VTRUxFQVZFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiUG9wcGVyIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkRBVEFfQVBJX0tFWSIsICJFVkVOVF9DTElDSyIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkNMQVNTX05BTUVfQUNUSVZFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAiTkFNRSIsICJEQVRBX0tFWSIsICJFVkVOVF9LRVkiLCAiREFUQV9BUElfS0VZIiwgIkVWRU5UX1NIT1ciLCAiRVZFTlRfU0hPV04iLCAiRVZFTlRfSElERSIsICJFVkVOVF9ISURERU4iLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiQ0xBU1NfTkFNRV9TSE9XIiwgIlNFTEVDVE9SX0RBVEFfVE9HR0xFIiwgIkRlZmF1bHQiLCAiRGVmYXVsdFR5cGUiLCAibGluayIsICJkb2NzIiwgIk5BTUUiLCAiREFUQV9LRVkiLCAiRVZFTlRfS0VZIiwgIkVWRU5UX0hJREUiLCAiRVZFTlRfSElEREVOIiwgIkVWRU5UX1NIT1ciLCAiRVZFTlRfU0hPV04iLCAiRVZFTlRfQ0xJQ0tfREFUQV9BUEkiLCAiRVZFTlRfS0VZRE9XTiIsICJFVkVOVF9MT0FEX0RBVEFfQVBJIiwgIkFSUk9XX0xFRlRfS0VZIiwgIkFSUk9XX1JJR0hUX0tFWSIsICJBUlJPV19VUF9LRVkiLCAiQVJST1dfRE9XTl9LRVkiLCAiQ0xBU1NfTkFNRV9BQ1RJVkUiLCAiQ0xBU1NfTkFNRV9GQURFIiwgIkNMQVNTX05BTUVfU0hPVyIsICJTRUxFQ1RPUl9EUk9QRE9XTl9UT0dHTEUiLCAiU0VMRUNUT1JfREFUQV9UT0dHTEUiLCAiZWxlbWVudCIsICJCaWdnZXJQaWN0dXJlIl0KfQo=

;
(() => {
  // ns-params:@params
  var params_default = { defaultLang: "en", i18n: { en: { copied: { other: "Copied!" }, copy_failed: { other: "Copy failed!" } }, "zh-hans": { copied: { other: "\u590D\u5236\u6210\u529F\uFF01" }, copy_failed: { other: "\u590D\u5236\u5931\u8D25\uFF01" } } }, icons: { copy: '<svg aria-hidden="true" class="bi bi-clipboard hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>\n  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>\n</svg>', expand: '<svg aria-hidden="true" class="bi bi-chevron-expand hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>\n</svg>', ln: '<svg aria-hidden="true" class="bi bi-list-ol hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>\n  <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635z"/>\n</svg>', wrap: '<svg aria-hidden="true" class="bi bi-text-wrap hi-svg-inline" fill="currentColor" height="1.25rem" viewBox="0 0 16 16" width="1.25rem" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h9a2.5 2.5 0 0 1 0 5h-1.293l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708l-.647.646H11.5a1.5 1.5 0 0 0 0-3h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5"/>\n</svg>' }, line_nos: true, max_lines: 10, wrap: false };

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/snackbar@v0.1.2/assets/mods/snackbar/js/index.ts
  var Snackbar = class {
    container;
    constructor() {
      this.container = document.createElement("div");
      this.container.className = "snackbars";
      document.body.appendChild(this.container);
    }
    add(text, duration = 2e3) {
      const msg = document.createElement("div");
      msg.className = "snackbar";
      msg.innerText = text;
      this.container.appendChild(msg);
      setTimeout(() => {
        msg.remove();
      }, duration);
    }
  };
  var snackbar = new Snackbar();
  var js_default = snackbar;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/i18n-js@v0.2.1/assets/mods/i18n/translator.ts
  var Translator = class {
    constructor(translations, fallback) {
      this.translations = translations;
      this.fallback = fallback;
    }
    lang = "";
    getLang() {
      if (this.lang === "") {
        this.lang = document.documentElement.getAttribute("lang") ?? this.fallback;
      }
      return this.lang;
    }
    getTranslations() {
      const lang = this.getLang();
      return this.translations[lang] ?? this.getFallbackTranslations();
    }
    getFallbackTranslations() {
      return this.translations[this.fallback];
    }
    getFallbackTranslation(key) {
      const translations = this.getFallbackTranslations();
      return translations[key] ?? "";
    }
    translate(key, ctx, fallback = "") {
      const translations = this.getTranslations();
      if (!translations) {
        return fallback === "" ? key : fallback;
      }
      const translation = translations[key] ?? this.getFallbackTranslation(key);
      if (!translation) {
        return fallback === "" ? key : fallback;
      }
      if (!ctx) {
        return translation.other;
      }
      let format = ctx.count === 1 ? translation.one : translation.other;
      for (let name in ctx) {
        format = format.replace(`{${name}}`, ctx[name]);
      }
      return format;
    }
  };

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.7.0/assets/mods/code-block-panel/js/i18n.ts
  var i18n = new Translator(params_default.i18n, params_default.defaultLang);
  var i18n_default = i18n;

  // ns-hugo:/root/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/hugomods/code-block-panel@v0.7.0/assets/mods/code-block-panel/js/panel.ts
  var Panel = class {
    constructor(code) {
      this.code = code;
    }
    pre;
    wrapper;
    ele;
    init() {
      if (!params_default.line_nos) {
        this.code.classList.add("code-no-ln");
      }
      if (params_default.wrap) {
        this.code.classList.add("code-wrap");
      }
      this.pre = this.code.parentElement;
      this.ele = document.createElement("div");
      this.ele.className = "code-block-panel";
      this.wrapper = document.createElement("div");
      this.wrapper.className = "code-block-panel-wrapper";
      this.wrapper.appendChild(this.ele);
      this.maxLines();
      this.language();
      this.lineNoButton();
      this.wrapButton();
      this.expandButton();
      this.copyButton();
      this.pre.appendChild(this.wrapper);
    }
    // Returns the lines of code block.
    lines() {
      return Array.from(this.code.querySelectorAll(":scope > span"));
    }
    maxHeight;
    maxLines() {
      const lines = this.lines();
      const maxLines = this.code.closest(".highlight")?.getAttribute("data-max-lines") ?? params_default.max_lines;
      if (maxLines > 0 && lines.length > maxLines) {
        const offsetTop = lines[maxLines].offsetTop;
        if (offsetTop > 0) {
          this.pre.style.maxHeight = this.maxHeight = offsetTop + "px";
        }
      }
    }
    // Show the code language.
    language() {
      const lang = this.code.getAttribute("data-lang");
      if (!lang || lang === "fallback") {
        return;
      }
      const e = document.createElement("span");
      e.className = "code-block-lang";
      e.innerText = lang;
      this.pre.appendChild(e);
    }
    button(name, callback) {
      const btn = document.createElement("button");
      btn.className = "code-block-action code-block-action-" + name;
      btn.innerHTML = params_default.icons[name];
      btn.addEventListener("click", () => {
        callback();
      });
      return btn;
    }
    copyButton() {
      const btn = this.button("copy", () => {
        this.copy();
      });
      this.ele.appendChild(btn);
    }
    copy() {
      const clone = this.code.cloneNode(true);
      clone.querySelectorAll(".ln, :scope > span > span:first-child").forEach((ln) => {
        ln.remove();
      });
      navigator.clipboard.writeText(clone.innerText).then(() => {
        js_default.add(i18n_default.translate("copied", null, "Copied!"));
      }).catch((err) => {
        js_default.add(i18n_default.translate("copy_failed", null, "Copy failed."));
        console.error(err);
      });
    }
    wrapButton() {
      const btn = this.button("wrap", () => {
        this.toggleClass("code-wrap");
      });
      this.ele.appendChild(btn);
    }
    toggleClass(className) {
      if (this.code.classList.contains(className)) {
        this.code.classList.remove(className);
        return;
      }
      this.code.classList.add(className);
    }
    lineNoButton() {
      const btn = this.button("ln", () => {
        this.toggleClass("code-no-ln");
      });
      this.ele.appendChild(btn);
    }
    expandButton() {
      const btn = this.button("expand", () => {
        this.expand();
      });
      this.ele.appendChild(btn);
    }
    expand() {
      if (!this.pre.style.maxHeight && !this.maxHeight) {
        return;
      }
      if (this.pre.style.maxHeight) {
        this.pre.style.maxHeight = "";
        return;
      }
      this.pre.style.maxHeight = this.maxHeight;
    }
  };

  // <stdin>
  (() => {
    "use strict";
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("pre code").forEach((code) => {
        new Panel(code).init();
      });
    });
  })();
})();
