# Make the AI Judge Laugh: Developer Excuses

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/prosky1/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3-entry/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)
[![Reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3/prosky1/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3-entry/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3)

Entry for the [make.fun bounty "Make the AI Judge Laugh: Developer Excuses"](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3): one funny single-line excuse a developer gives when code breaks in production, under 200 characters.

## The line

> The merge conflict resolved itself by deleting the feature we were demoing.

## How it works

`main.ts` writes the line to `/output/entry.txt` (75 characters), after checking it against the competition gate: 1–200 characters, not only whitespace, a single line. It then reads the file back and verifies the content matches exactly.

Run it with Node 22 or later:

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
