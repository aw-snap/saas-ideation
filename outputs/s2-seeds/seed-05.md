# seed-05: AI PC optimiser and fixer

## Seed card

- **Title:** AI PC optimiser and fixer
- **One-liner:** Consumers pay for an AI that runs on their PC to optimise device performance and fix bugs.
- **Audience:** Consumer PC users. [+] Specifically, non-technical Windows home users who would otherwise call a relative or pay a repair shop; also the family "tech person" who looks after their parents' PCs, and small offices with no IT staff.
- **Pain:** Slow or buggy PCs that users don't know how to fix themselves. [+] Today they search error messages, run "cleaner" apps that report 1,000 problems, pay a repair shop, or wait days for a relative to look at it.
- **Mechanism:** AI on the consumer's own PC that optimises performance and fixes bugs. [+] The user describes the problem in plain words; the agent reads the machine's real state (startup apps, event logs, driver versions, disk health, recent updates). [+] It shows evidence before fixing anything (e.g. "slow since a browser extension was installed on the 12th; it uses 40% of your CPU"). [+] Every fix is a proposed plan the user approves; a restore point is taken first and every change can be undone in one click. [+] Family mode lets the family's tech person see the diagnosis and approve fixes remotely.
- **Enabling tech:** "AI that runs on their PC" (group). [+] Open between a fully local model and a local agent calling a cloud model. Most direct reading: an LLM agent with tool calls against OS diagnostics and a fixed allow-list of actions. `[inferred]`
- **Business model:** Consumers pay (group, from the one-liner). [+] Diagnosis free, a small fee per fix (or a low monthly plan with ongoing monitoring), and a family plan covering several PCs; honest pricing is part of the pitch.
- **Demo moment:** [+] A PC slowed down on purpose, a plain-English complaint, the evidence shown, one approved fix, and a before/after timing. Then undo.
- **Core insight:** Non-technical users can't diagnose their own PCs, and existing optimisers sell fear rather than answers; an agent that reads the machine's real state and explains the actual cause in plain words can fix it safely. `[inferred]` phrasing; the anti-scareware framing comes from [+] lines.
- **What excites the group:** AI on the consumer's own PC that optimises performance and fixes bugs. [+] Also: plain-language problem descriptions, evidence before fixes, approve-and-undo safety, and family mode.
- **Open questions:**
  - Stated in the seed (all [+]): Fully local model (private but weaker) or local agent calling a cloud model. Which actions it may take at all (registry, drivers, uninstalls); probably a fixed allow-list. Trust: the "PC optimiser" category has a scareware reputation, and CCleaner-type utilities and Windows' own troubleshooters are free competitors `[unverified]`. Windows only for the first version?
  - Gaps seen: How reliably an agent diagnoses real faults versus the staged slowdown in the demo. Liability when an approved fix breaks something despite the restore point. Whether consumers will pay per fix when free tools exist. Distribution and installer trust (a new app asking for admin rights). Evidence for the pain and willingness to pay.
- **Allowed moves:** improve / pivot / break down

## Seed as idea card

---
id: seed-05
track: balanced
lineage: seed-original
territory: none
cell: { buyer: B2C, capability: tbd, track: balanced }
parents: []
source_task: s2-seed-lead
---

# AI PC optimiser and fixer

One-liner (≤20 words): An AI agent on your own PC that optimises performance and fixes bugs, showing evidence before every fix.
Buyer and niche (≤25 words): Non-technical Windows home users who would otherwise call a relative or repair shop; the family tech person; small offices without IT staff.
Pain and evidence (≤40 words; cite the pain dossier file): Slow or buggy PCs that users don't know how to fix. Today they search error messages, run cleaner apps reporting 1,000 problems, pay a repair shop, or wait days for a relative. (src: inputs/seeds/seed-05.md)
How it works (≤50 words): Users describe the problem in plain words. The agent reads real machine state (startup apps, event logs, drivers, disk health, recent updates) and shows evidence, then proposes a fix plan they approve. It takes a restore point first, with one-click undo for every change. Family mode allows remote approval.
Why now (≤25 words; name the specific capability): LLM agents can now reliably call system tools, read logs and explain findings in plain English, on or near the user's device.
Demo moment (≤20 words): A deliberately slowed PC, a plain-English complaint, evidence shown, one approved fix, before/after timing, then undo.
Business model (≤15 words): Free diagnosis; small per-fix fee or monthly monitoring; family plan covers several PCs.

## Original text

```text
<!-- Fleshed out on 2026-09-25 at the user's request. Text marked [+] was added by Claude, not the group. Everything else is the group's original wording (also kept in git and in outputs/s2-seeds/seed-05.md). -->
Title: AI PC optimiser and fixer
One-liner: Consumers pay for an AI that runs on their PC to optimise device performance and fix bugs.
Who it's for: Consumer PC users.
[+] Specifically, non-technical Windows home users who would otherwise call a relative or pay a repair shop. Also the family "tech person" who looks after their parents' PCs, and small offices with no IT staff.
The pain it solves: Slow or buggy PCs that users don't know how to fix themselves.
[+] Today they search error messages, run "cleaner" apps that report 1,000 problems, pay a repair shop, or wait days for a relative to look at it.
What excites us about it:
- AI on the consumer's own PC that optimises performance and fixes bugs.
- [+] You describe the problem in plain words ("my laptop has been loud and slow since last week", "my printer disappeared"). The agent reads the machine's real state: startup apps, event logs, driver versions, disk health and recent updates.
- [+] It shows evidence before it fixes anything, for example: "slow since a browser extension was installed on the 12th; it uses 40% of your CPU." This is the opposite of scareware's "1,432 problems found."
- [+] Every fix is a proposed plan that you approve. The PC takes a restore point first, and every change can be undone in one click.
- [+] Family mode lets the family's tech person see the diagnosis and approve fixes remotely.
- [+] Demo: a PC slowed down on purpose, a plain-English complaint, the evidence shown, one approved fix, and a before/after timing. Then undo.
- [+] Business model: diagnosis is free, and each fix costs a small fee (or a low monthly plan with ongoing monitoring), with a family plan covering several PCs. Honest pricing is part of the pitch.
What we're unsure about:
- [+] Whether to run a fully local model (private but weaker) or a local agent that calls a cloud model.
- [+] Which actions it may take at all (registry, drivers, uninstalls). It probably needs a fixed allow-list.
- [+] Trust: the "PC optimiser" category has a scareware reputation, and CCleaner-type utilities and Windows' own troubleshooters are free competitors (unverified).
- [+] Windows only for the first version?
Allowed moves: improve / pivot / break down
```

<!-- COMPLETE -->
