# Changelog

Running log of what changed in this project and why. Newest entry on top.
Each entry is written to be self-contained — paste just that one entry into
ChatGPT (or any other tool) to bring it up to speed without extra context.

---

## 2026-07-10 — Chat domain consolidation + route relocation

### Context going in
The repo had a large enterprise-style folder skeleton already scaffolded in
earlier commits (`ai/`, `legal/`, `database/`, `scripts/`, `shared/`, `tests/`,
etc.) but almost all of it was empty. The only real code was a small chat
feature (5 components, 1 hook, 1 service, 1 type file) sitting in flat
top-level folders (`components/`, `hooks/`, `services/`, `types/`), plus a
duplicate API route: one copy at `app/api/chat/route.ts` (wrong location) and
a newer, correctly-placed but not-yet-committed copy at
`src/app/api/chat/route.ts`.

A request came in to fully build out and reorganize the entire ~40-folder
enterprise target architecture (AI providers, RAG, billing, embeddings,
citation engine, etc.) all at once, plus produce a numeric-scored
architecture report. That was pushed back on: most of those folders have zero
code behind them, so scoring them or fleshing them out now would be
fabricated/premature. Agreed approach instead: keep empty placeholder folders
as-is, only reorganize code that actually exists, and do a qualitative
(not numeric) status pass.

### What changed
**Moved (git history preserved via `git mv`):**
- `components/ChatWindow.tsx` → `chat/components/ChatWindow.tsx`
- `components/ChatInput.tsx` → `chat/components/ChatInput.tsx`
- `components/MessageBubble.tsx` → `chat/components/MessageBubble.tsx`
- `hooks/useChat.ts` → `chat/hooks/useChat.ts`
- `services/chat.service.ts` → `chat/services/chat.service.ts`
- `types/chat.ts` → `chat/types/chat.ts`
- `components/Header.tsx` → `components/layout/Header.tsx` (generic app-shell
  chrome, not chat-specific — kept in general `components/`, not `chat/`)
- `components/Sidebar.tsx` → `components/layout/Sidebar.tsx` (same reasoning)
- `app/api/chat/route.ts` (deleted, wrong location) →
  `src/app/api/chat/route.ts` (the correct location per the rule that all App
  Router files must live under `src/app`) — staged the move that was already
  half-done but uncommitted

**Removed:**
- Root-level `services/` and `types/` directories — emptied by the moves
  above, and neither exists in the target architecture at all (chat-specific
  service/type code belongs under `chat/`, not a bare root folder). Deleted
  since they were empty and not part of the intended structure.

**Edited (import path fixes only, no logic changes):**
- `src/app/page.tsx` — updated 5 imports to point at new
  `chat/components/*`, `chat/hooks/useChat`, and `components/layout/*` paths
- `src/app/api/chat/route.ts` — updated import to
  `../../../../chat/services/chat.service`
- `chat/services/chat.service.ts` — updated `openai` import from `../lib/openai`
  to `../../lib/openai` (one extra directory level after the move)

**Left untouched:**
- All empty scaffolded folders (`ai/`, `database/`, `legal/*` subfolders,
  `scripts/*`, `shared/`, `tests/`, `config/`) — no code exists for them yet
- `lib/openai.ts`, `legal/models/legal-document.ts` — already in the correct
  location, no change needed
- `structure.txt` (2.2MB, untracked, at repo root) — origin unknown, flagged
  for the user to review; not deleted or read in full (too large)
- `.claude/` (untracked) — local tooling config, unrelated

### Verification performed
- `rm -rf .next && npx tsc --noEmit` → clean, no errors
- `npx next build` → succeeded, all 3 routes compiled (`/`, `/_not-found`,
  `/api/chat`)
- Grepped the whole repo for the old import paths to confirm nothing else
  referenced the moved files

### Current state after this change
```
chat/
  components/  ChatWindow.tsx, ChatInput.tsx, MessageBubble.tsx
  hooks/       useChat.ts
  services/    chat.service.ts
  types/       chat.ts
components/
  layout/      Header.tsx, Sidebar.tsx
  common/ forms/ feedback/   (empty — no reusable cross-feature components yet)
legal/
  models/      legal-document.ts
  (importers/ parsers/ normalizers/ validators/ chunkers/ retrievers/
   embeddings/ citations/ ranking/ versions/ sources/ — all empty)
lib/           openai.ts
src/app/       layout.tsx, page.tsx, globals.css, api/chat/route.ts
ai/ database/ scripts/ shared/ tests/ config/   — all empty, scaffolded only
```

### Open items / not yet done
- `structure.txt` — needs a decision (delete or figure out what created it)
- `docs/01-project-overview.md`, `02-architecture.md`, `03-folder-structure.md`,
  `07-roadmap.md`, `ARCHITECTURE.md`, `DECISIONS.md` are all empty placeholders
- No RAG, auth, billing, embeddings, database (Prisma/pgvector), or
  multi-language support implemented yet — only a single-turn OpenAI chat
  endpoint with no streaming, no persistence, no citation logic
- `chat.service.ts` uses model `"gpt-5.5"` — not verified against current
  OpenAI model availability
