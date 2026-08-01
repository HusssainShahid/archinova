// Confirms every Q-number the checklist references still exists in the questions file.
import { readFileSync } from "node:fs";

const questions = readFileSync("V2-QUESTIONS.md", "utf8");
const checklist = readFileSync("V2-CHECKLIST.md", "utf8");

const refs = [
  ...new Set((checklist.match(/[≈🔒] (Q\d+)/g) ?? []).map((s) => s.replace(/[≈🔒] /, ""))),
].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

const present = (q) => new RegExp(`${q}\\b`).test(questions);

const missing = refs.filter((q) => !present(q));
const needsAnswer = (questions.match(/· NEEDS ANSWER/g) ?? []).length;
const ours = (checklist.match(/\| ≈ Ours \|/g) ?? []).length;

console.log(`checklist references ${refs.length} distinct questions: ${refs.join(", ")}`);
console.log(`dangling references (point at a question that no longer exists): ${missing.length ? missing.join(", ") : "none"}`);
console.log(`open questions awaiting a client answer: ${needsAnswer}`);
console.log(`rows marked "≈ Ours" (our decision, no client answer needed): ${ours}`);

if (refs.length !== needsAnswer) {
  console.warn(
    `! mismatch: ${refs.length} questions referenced but ${needsAnswer} documented`
  );
}

process.exitCode = missing.length || refs.length !== needsAnswer ? 1 : 0;
