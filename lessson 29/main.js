var prog_lang = ["java", "html"];

console.log(prog_lang);

prog_lang.push("C#");
console.log(prog_lang);

prog_lang.unshift("reactnative");
console.log(prog_lang)

prog_lang.shift();
console.log();

prog_lang.pop();
console.log(prog_lang)

prog_lang.splice(1, 0, "rust")
console.log(prog_lang);