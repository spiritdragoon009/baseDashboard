Description
Allow Repo Admins to view and modify Type of Update keywords/patterns so classification rules stay current; changes apply to future extractions only. (Type definitions)

User Story
As a Repo Admin, I want to view and modify Type of Update definitions so that classification rules stay current.

UI Requirements

Type Definitions tab: table (Type Name, Keywords Count, Articles Tagged, Last Modified) and Edit drawer to add/remove keywords/patterns.

Functional Requirements

FR ID

Requirement

Details

FR-111.1

Type Definition CRUD

Create, Read, Update, Delete Type of Update definitions (e.g., Safety, GMP/GDP, Clinical Labelling, Marketing Authorizations, etc.)

FR-111.2

Keyword/Pattern Management

Each Type has associated keywords and regex patterns used to classify extracted articles

FR-111.3

Prospective Application

Changes to Type definitions apply only to future extractions; existing articles retain their original classification

FR-111.4

Usage Tracking

System tracks how many articles are tagged with each Type to help Repo Admin understand classification coverage

Acceptance Criteria

ID

Given

When

Then

AC-111.1

Repo Admin is on Type Definitions tab

Admin views the table

Columns displayed: Type Name, Keywords Count, Articles Tagged, Last Modified, Actions (Edit)

AC-111.2

Types include Safety, GMP/GDP, Clinical Labelling, Marketing Authorizations, Fees, DMF, CMC, Safety Timelines

Admin views table

All standard Types listed; system prevents deletion of core Types

AC-111.3

Repo Admin clicks Edit on "Safety" Type

Edit drawer opens

Shows current keywords/patterns list; Add/Remove capabilities; keyword examples shown

AC-111.4

Repo Admin adds keyword "adverse event reporting" to Safety Type

Admin saves

Keyword added; Last Modified updates to current timestamp; audit trail records the change

AC-111.5

Repo Admin adds keyword "pharmacovigilance" which exists in Safety Timelines

System validates

Warning shown: "This keyword also exists in Safety Timelines Type. Articles may match multiple Types."; Admin can proceed or cancel

AC-111.6

Type definition is updated

Next extraction runs

New articles are classified using updated keywords; existing articles unchanged

AC-111.7

Repo Admin views Safety Type (100 articles tagged)

Admin removes keyword "ADR"

Warning: "This keyword matches 15 existing articles. Future articles will not be tagged with this keyword. Existing tags remain."

AC-111.8

Client team is configured to monitor "Safety" Type

Type definition is updated

Team continues receiving articles; new keywords expand what matches "Safety" for future extractions

AC-111.9

Repo Admin wants to create new Type "Post-Market Surveillance"

Admin clicks Create

Form allows: Type Name (unique), Keywords (min 1 required), Description; saved Type becomes available for team monitoring config

@Vishal N Attaching the Screen UI, Please add your comments.


