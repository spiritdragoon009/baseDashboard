Description

Automatically classify each extracted article into one or more Type of Update categories so downstream users can filter and route content efficiently. The system must support multi‑tagging because articles can span multiple categories (e.g., Safety + Clinical Labelling). The nine categories are: Clinical Labelling, Clinical Trials, Drug Master File (DMF), Fees, GMP/GDP, Marketing Authorizations, Safety, Safety Timelines, CMC.

User Story

As a Repo Admin, I want articles automatically tagged with Type of Update categories (supporting multiple tags) so that articles are classified without manual effort.

UI Requirements

Article Display shows Type badges (colored) for all matched categories.

Type Management (admin) provides visibility into Articles Tagged per type for monitoring.

Functional Requirements

Classify against 9 Types listed above; not mutually exclusive (multi‑tag support). (FR‑01)

Use stored keywords/patterns to assign tags during ingestion/classification. (see Type definitions section)

Acceptance Criteria

AC 1: Assign Multiple Type Tags to Single Article

Given an article contains keywords for "Safety" and "Clinical Labelling"
When classification runs during ingestion
Then:

Article is tagged with both "Safety" AND "Clinical Labelling"

Article Display shows both Type badges

Article appears in filters for both categories

AC 2: Classify Against All 9 Types

Given an article is extracted
When classification engine processes it
Then:

System evaluates against all 9 types: Clinical Labelling, Clinical Trials, DMF, Fees, GMP/GDP, Marketing Authorizations, Safety, Safety Timelines, CMC

All matching types are assigned as tags

Non-matching types are not assigned

AC 3: Handle Article with No Matching Types

Given an article contains no keywords matching any Type definition
When classification runs
Then:

Article is stored with zero Type tags

Article Display shows "Unclassified" or no Type badges

Article appears in "Unclassified" filter view

AC 4: Display Type Badges with Color Coding

Given an article tagged with "Safety" and "GMP/GDP"
When I view the article in Article Display
Then:

"Safety" badge appears with designated color (e.g., red)

"GMP/GDP" badge appears with designated color (e.g., blue)

Badges are visually distinct and easily identifiable

AC 5: Monitor Articles Tagged Per Type

Given I am in Type Management screen
When I view the summary table
Then:

Each Type row shows Articles Tagged count (e.g., "Safety: 245 articles")

Counts reflect current state across all articles

Clicking count navigates to filtered article list for that Type

