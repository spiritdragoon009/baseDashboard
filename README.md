Description
Allow Repo Admins to provision and manage client repository instances, scoping them to selected authorities/data sources so client users see only their corpus. (Client management & scoping)

User Story
As a Repo Admin, I want to manage client repository instances so that each client has properly configured access.

UI Requirements

Client Management tab with instance list (Client Name, Authorities enabled, Status, Last Modified) and Create/Edit flow.

Functional Requirements

FR ID

Requirement

Details

FR-113.1

Authority Scoping

Each client instance is scoped to specific Regulatory Authorities (e.g., FDA + EMA only); determines what articles flow to their product layer

FR-113.2

Client Admin Linkage

Each instance linked to one or more Client Admin users who can manage that client's product layer

FR-113.3

Multi-Authority Support

Client can have multiple authorities enabled; new authorities can be added post-creation

FR-113.4

Audit Trail

All instance changes logged with actor, timestamp, before/after values

Acceptance Criteria

ID

Given

When

Then

AC-113.1

Repo Admin is on Client Management tab

Admin views the table

Columns displayed: Client Name, Authorities Enabled, Status, Client Admin(s), Created Date, Last Modified, Actions

AC-113.2

Repo Admin clicks "Create Instance"

Create form opens

Fields: Client Name (required, unique), Authorities (multi-select from Repo Admin's geography list), Primary Client Admin Email, Status (default Active)

AC-113.3

Repo Admin selects FDA and EMA for new client "PharmaCo"

Admin saves

Instance created; only articles from FDA and EMA sources will be visible to PharmaCo users

AC-113.4

Client instance "PharmaCo" is created

Client Admin from PharmaCo logs in

Client Admin sees only articles from FDA/EMA; cannot access MHRA/TGA articles

AC-113.5

PharmaCo wants to add MHRA to their scope

Repo Admin edits instance, adds MHRA

Future MHRA articles appear in PharmaCo's queue; existing MHRA articles (if any in repo) do not backfill

AC-113.6

Client "BioTech Inc" has active articles in review

Repo Admin attempts to delete instance

Deletion blocked: "Cannot delete client with active articles. Set to Suspended or wait for completion."

AC-113.7

Repo Admin sets "BioTech Inc" to Suspended

Status saved

BioTech users can still access existing articles and complete reviews; no new articles routed to them

AC-113.8

Client instance created with Primary Client Admin email

Instance activated

Activation email sent to Client Admin with login instructions; Client Admin can access their scoped product layer

AC-113.9

Client instance has 2 Client Admins

Repo Admin views instance

Both admins listed; either can be removed (minimum 1 required)

AC-113.10

Repo Admin edits PharmaCo to remove FDA scope

Warning displayed

"PharmaCo has 45 FDA articles in progress. Removing FDA will not affect these articles but will stop new FDA articles."

AC-113.11

New client instance "MedDevice Ltd" created

Client Admin configures teams

Teams can only select from authorities enabled for that instance (FDA/EMA if that's what's scoped)

AC-113.12

Instance status changed

Audit trail checked

Entry shows: Repo Admin user, action, previous state, new state, timestamp

