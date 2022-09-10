var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  component: () => component,
  file: () => file,
  imports: () => imports,
  index: () => index,
  server: () => server,
  shared: () => shared,
  stylesheets: () => stylesheets
});
module.exports = __toCommonJS(stdin_exports);
var shared = __toESM(require("../entries/pages/about/_page.js"));
var server = __toESM(require("../entries/pages/about/_page.server.js"));
const index = 16;
const component = async () => (await Promise.resolve().then(() => __toESM(require("../entries/pages/about/_page.svelte.js")))).default;
const file = "_app/immutable/components/pages/about/_page.svelte-79a3e9dd.js";
const imports = ["_app/immutable/components/pages/about/_page.svelte-79a3e9dd.js", "_app/immutable/chunks/index-f07d0395.js", "_app/immutable/modules/pages/about/_page.js-702ef64f.js", "_app/immutable/chunks/_page-3414e42f.js"];
const stylesheets = ["_app/immutable/assets/_page-9682aba9.css"];
