// Confirms every Q-number each checklist references still exists in its questions file.
import { readFileSync } from "node:fs";

function checkPair(label, checklistPath, questionsPath) {
  const questions = readFileSync(questionsPath, "utf8");
  const checklist = readFileSync(checklistPath, "utf8");

  const refs = [
    ...new Set((checklist.match(/[≈🔒] (Q\d+)/g) ?? []).map((s) => s.replace(/[≈🔒] /, ""))),
  ].sort((a, b) => Number(a.slice(1)) - Number(b.slice(1)));

  const present = (q) => new RegExp(`${q}\\b`).test(questions);
  const missing = refs.filter((q) => !present(q));
  const needsAnswer = (questions.match(/· NEEDS ANSWER/g) ?? []).length;
  const answered = (questions.match(/· ANSWERED/g) ?? []).length;
  const ours = (checklist.match(/\| ≈ Ours \|/g) ?? []).length;

  console.log(`=== ${label} ===`);
  console.log(`checklist references ${refs.length} distinct questions: ${refs.join(", ") || "(none)"}`);
  console.log(`dangling references: ${missing.length ? missing.join(", ") : "none"}`);
  console.log(`open questions awaiting a client answer: ${needsAnswer}`);
  console.log(`answered questions: ${answered}`);
  console.log(`rows marked "≈ Ours": ${ours}`);
  console.log("");

  return missing.length;
}

let dangling = 0;
dangling += checkPair("v2", "requirements/v2/V2-CHECKLIST.md", "requirements/v2/V2-QUESTIONS.md");
dangling += checkPair("v3", "requirements/v3/V3-CHECKLIST.md", "requirements/v3/V3-QUESTIONS.md");

process.exitCode = dangling ? 1 : 0;
