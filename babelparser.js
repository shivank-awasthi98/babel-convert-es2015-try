var babel = require("@babel/core");

var generate = require("@babel/generator");
const codeFrame = require("@babel/code-frame");

var result = babel.transformFileSync("addmultiply.js");

const parsedAst = babel.parse("let a=4*2;", {
  parserOpts: { allowReturnOutsideFunction: true }
});
var tast = babel.transformFromAst(parsedAst, "let a=4*2");
console.log(tast);
const output = new generate.CodeGenerator(parsedAst, "let a=4*2;");
// console.log(output.code);
const rawLines = `class Foo {
    constructor()
  }`;
const location = { start: { line: 14, column: 18 } };

const result1 = codeFrame.codeFrameColumns(rawLines, location, {
  /* options */
});

console.log(result);
