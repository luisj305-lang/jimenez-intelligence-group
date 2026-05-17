# Skill Registry — JIG

**Project**: Jimenez Intelligence Group (JIG) static site
**Generated**: 2026-05-16
**Stack**: Greenfield — Astro + Tailwind CSS (to be scaffolded)
**Artifact Store**: engram

---

## User Skills

| Skill | Trigger |
|-------|---------|
| branch-pr | creating, opening, or preparing PRs for review |
| chained-pr | PRs over 400 lines, stacked PRs, review slices |
| work-unit-commits | implementation, commit splitting, chained PRs, keeping tests/docs with code |
| comment-writer | PR feedback, issue replies, reviews, Slack/GitHub comments |
| issue-creation | creating GitHub issues, bug reports, feature requests |
| judgment-day | judgment day, dual review, adversarial review, juzgar |
| skill-creator | new skills, agent instructions, documenting AI usage patterns |
| cognitive-doc-design | writing guides, READMEs, RFCs, onboarding, architecture, review-facing docs |
| go-testing | Go tests, go test coverage, Bubbletea teatest, golden files |

---

## Compact Rules

### branch-pr
- Every PR MUST link an approved issue (status:approved) — no exceptions.
- Every PR MUST have exactly one `type:*` label.
- Branch names: `^(feat|fix|chore|docs|style|refactor|perf|test|build|ci|revert)\/[a-z0-9._-]+$`
- Run shellcheck on modified scripts before opening PR.
- Automated checks must pass before merge.

### chained-pr
- Split any PR exceeding 400 changed lines unless maintainer grants `size:exception`.
- Each PR must be reviewable in ≤60 minutes.
- One deliverable work unit per PR; tests/docs stay with the unit they verify.
- Every child PR includes a dependency diagram with the current PR marked `📍`.
- Feature Branch Chain: create a draft/no-merge tracker PR; child PRs target tracker, not main.
- Do not mix chain strategies once chosen.

### work-unit-commits
- A commit represents one deliverable behavior, fix, migration, or docs unit — never by file type.
- Tests belong in the same commit as the behavior they verify.
- Docs belong with the user-facing change they explain.
- Each commit message explains the outcome, not the file list.
- If SDD tasks forecast a >400-line change, group commits into chained PR slices before implementation.

### comment-writer
- Start with the actionable point — do not recap the PR first.
- 1-3 short paragraphs or a tight bullet list max.
- Always explain why when requesting a change.
- Match thread language; use Rioplatense Spanish/voseo when writing in Spanish.
- No em dashes — use commas, periods, or parentheses.

### issue-creation
- MUST use a template (bug report or feature request) — blank issues are disabled.
- Every issue auto-gets `status:needs-review`; maintainer must add `status:approved` before any PR.
- Search for duplicates before creating a new issue.
- Questions go to Discussions, not issues.

### judgment-day
- Launch two blind judges in parallel — never review code yourself.
- Resolve and inject project skill compact rules into both judge prompts.
- Wait for BOTH judges before synthesis.
- Classify WARNING as real only if normal use can trigger it; otherwise downgrade to INFO.
- Ask before fixing Round 1 confirmed issues.
- Always re-judge in parallel after fixes before commit/push/done.
- After 2 fix iterations with remaining issues, ask user whether to continue.

### skill-creator
- A skill is a runtime instruction contract for an LLM, not human documentation.
- Target 180–450 body tokens; hard max 1000.
- No `Keywords` section — keep triggers in `description`.
- References must point to local files.
- Required structure: frontmatter, Activation Contract, Hard Rules, Decision Gates, Execution Steps, Output Contract, References.

### cognitive-doc-design
- Lead with the answer — decision/action/outcome first, context after.
- Progressive disclosure: happy path first, then details and edge cases.
- Group related info into small sections; keep flat lists short.
- Prefer tables, checklists, examples over prose that must be remembered.
- Design docs so reviewers can verify intent without reconstructing the full story.

---

## Project Skills

None defined yet (greenfield). Add project-level skills to `/home/brank122/Documents/JIG/.atl/skills/` as the project evolves.

---

## Notes

- `go-testing` is installed but not applicable to this project (no Go code).
- No test runner in this project — `strict_tdd: false`.
- SDD artifact store: `engram` only (no `openspec/` directory created).
