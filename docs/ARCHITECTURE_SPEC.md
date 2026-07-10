# Sri Lanka Law AI - Architecture Specification

Version: 1.0.0
Status: Active
Last Updated: 2026-07-10

---

# 1. Vision

## Mission

Build the most trusted AI-powered legal assistant for Sri Lanka.

The platform must:

- Provide accurate legal information.
- Always cite official legal sources.
- Minimize hallucinations.
- Scale to 100,000+ users.
- Support English, Sinhala and Tamil.
- Be maintainable for at least 10 years.

---

# 2. Core Principles

## Principle 1

Official legal documents are the source of truth.

The AI never invents laws.

---

## Principle 2

GPT explains.

The legal database provides facts.

---

## Principle 3

Every module has one responsibility.

---

## Principle 4

Everything must be replaceable.

Examples:

- OpenAI → Claude
- PostgreSQL → another database
- Vector DB → another provider

without rewriting the application.

---

# 3. High-Level Architecture

User

↓

Next.js Frontend

↓

API Layer

↓

Chat Service

↓

Legal Retrieval

↓

AI Provider

↓

Citation Builder

↓

Response

---

# 4. Folder Structure

Describe every folder.

Example:

## /legal

Purpose:

Contains all legal document processing.

Responsibilities:

- parsing
- validation
- retrieval
- citations

Never place React components here.

---

## /ai

Purpose:

Everything related to AI providers.

Contains:

- prompts
- embeddings
- providers
- moderation

Never place legal logic here.

---

# 5. Request Flow

User asks question

↓

API

↓

Retriever

↓

Database

↓

Top chunks

↓

Prompt Builder

↓

GPT

↓

Citation Builder

↓

Response

---

# 6. Legal Document Lifecycle

Official PDF

↓

Import

↓

Parse

↓

Normalize

↓

Validate

↓

Chunk

↓

Embeddings

↓

Database

↓

Searchable

---

# 7. AI Provider Layer

Supported:

- OpenAI
- Claude
- Gemini
- Local Models

All providers implement the same interface.

---

# 8. Database Strategy

Database:

PostgreSQL

ORM:

Prisma

Vector Search:

pgvector

Cache:

Redis (future)

---

# 9. Coding Standards

Maximum file size:

300 lines

Maximum function size:

50 lines

No business logic inside React components.

No OpenAI calls from UI.

No database calls from components.

Always use services.

---

# 10. Security

API Keys

Never exposed to client.

Validation

Every endpoint validates input.

Authentication

JWT / Clerk (future)

Rate Limiting

Required.

Logging

No sensitive information logged.

---

# 11. Naming Convention

Folders

lowercase

Files

kebab-case

React Components

PascalCase

Interfaces

PascalCase

Functions

camelCase

Constants

UPPER_SNAKE_CASE

---

# 12. Git Workflow

main

Always deployable.

feature/*

New work.

bugfix/*

Bug fixes.

release/*

Production release.

---

# 13. Future Modules

Authentication

Billing

Admin Dashboard

Lawyer Dashboard

Court Judgments

Document Upload

Contract Analysis

Voice Assistant

Mobile App

Public API

---

# 14. Non-Goals

The AI must not:

- provide legal representation
- impersonate lawyers
- fabricate citations
- answer without sources once RAG is enabled

---

# 15. Architecture Decisions

Document every important decision.

Example

Decision:

Use PostgreSQL + pgvector

Reason:

Single database.
Lower cost.
Easy deployment.

Date:

2026-07-10

Status:

Accepted

---

# 16. Roadmap

Phase 1

Foundation

✔ Complete

Phase 2

Knowledge Engine

In Progress

Phase 3

RAG

Pending

Phase 4

Production

Pending

Phase 5

Commercial SaaS

Pending

---

# 17. Quality Checklist

Before every PR ask:

- Does it follow architecture?
- Is it tested?
- Is documentation updated?
- Does it introduce technical debt?
- Is it scalable?

If any answer is No

Do not merge.

---

END OF SPECIFICATION