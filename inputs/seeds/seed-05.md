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
