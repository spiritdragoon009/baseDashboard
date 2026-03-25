Description

Identify product names, brand names, and drug classes in article text and metadata so product‑specific content is recognizable and downstream relevance filtering can route items to appropriate teams. Store these as linked tags on the article.

User Story

As a Repo Admin, I want the system to extract product names, brand names, and drug classes from articles so that product‑specific content is identifiable.

UI Requirements

Article Display shows Product/Brand/Class chips; hovering reveals source snippet if available.

Functional Requirements

Dynamically identify and store product, brand, and drug class mentions as structured tags. (FR‑02)

Persist these tags in the product layer to enable relevance filtering by teams. (URS relevance & routing concepts)

Acceptance Criteria

Given an article mentions “metformin” and “Lipitor,” when the system processes the article, then it extracts “metformin” as product, “Lipitor” as brand, and marks the article Product‑Specific. (AC‑02; FR‑02/FR‑03 linkage)
