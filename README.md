Description
Provide a monitoring Dashboard for Repo Admins with last run, success rate, and alerts; send email alerts for failures (after retries), enabling quick remediation. (Monitoring & alerts)

User Story
As a Repo Admin, I want to monitor extraction health with alerts for failures so that I ensure system reliability.

UI Requirements

Repo Admin Console → Dashboard: Health indicators, Last run summary, Alerts panel.

Functional Requirements

FR ID

Requirement

Details

FR-112.1

Health Dashboard

Display overall extraction system health: sources online vs. offline, last successful run per source, aggregate success rate

FR-112.2

Run Statistics

Show last run summary: total articles extracted, new vs. duplicate, extraction duration, errors encountered

FR-112.3

Failure Tracking

Track consecutive failures per source; differentiate between temporary (network) and persistent (site structure change) failures

FR-112.4

Automatic Retry

System automatically retries failed extractions (configurable: default 3 retries with exponential backoff)

FR-112.5

Email Alerts

Send email to Repo Admin after configurable failure threshold (default: 3 consecutive failures for same source)

FR-112.6

Alert Management

In-app alerts panel showing active alerts; ability to acknowledge/dismiss alerts

FR-112.7

Trend Analysis

Show failure trends over time (daily/weekly) to identify degrading sources

FR-112.8

Audit Trail Integration

All extraction events (success, failure, retry) logged in Repo Admin audit trail (BPR_77)

Acceptance Criteria

ID

Given

When

Then

AC-112.1

Repo Admin opens Dashboard

Dashboard loads

Health summary visible: "15/16 sources healthy", last run timestamp, total articles in last 24h

AC-112.2

Dashboard displays Last Run summary

Admin views details

Shows: Articles Extracted (150), New Articles (45), Duplicates Skipped (105), Errors (3), Duration (12 min)

AC-112.3

FDA source failed extraction

Failure is first occurrence

Status shows "1 failure"; retry scheduled automatically; no email sent yet

AC-112.4

FDA source fails 3 consecutive times

Third failure detected

Email alert sent to Repo Admin with: Source URL, Error message, Failure timestamps, "Action Required" flag

AC-112.5

Repo Admin receives alert email

Email content checked

Includes: Subject "Extraction Alert: FDA Source Failed", body has source details, link to dashboard, suggested actions

AC-112.6

Dashboard shows active alerts

Admin views Alerts panel

List shows: Source name, Failure count, First failure time, Last failure time, Acknowledge button

AC-112.7

Repo Admin acknowledges alert

Admin clicks Acknowledge

Alert moves to "Acknowledged" state; remains visible until source recovers or is disabled

AC-112.8

EMA source structure changed (persistent failure)

Multiple days of failures

Alert escalates: "Persistent Failure - Site structure may have changed. Manual investigation required."

AC-112.9

Source recovers after failures

Next extraction succeeds

Alert auto-clears; recovery logged; success rate recalculates

AC-112.10

Repo Admin wants to see failure trends

Admin views trend chart

Shows daily success/failure counts for past 30 days; highlights sources with degrading reliability

AC-112.11

Extraction completes (success or failure)

Event logged

Entry appears in Repo Admin audit trail with: timestamp, source URL, articles extracted, parsing results, errors (SR_7)

AC-112.12

Repo Admin configures alert threshold

Admin sets threshold to 5

Future alerts only trigger after 5 consecutive failures for same source

Dependencies

Dependency

Module

Why

Extraction engine must emit structured events

EP‑62 / Data Extraction Schema

FR‑112.1–112.3 read from extraction run logs — engine must write success/failure/retry events in a consumable format

Audit trail infrastructure

BPR_77 / EP‑59

FR‑112.8 and AC‑112.11 require extraction events to log to the existing audit trail; must be built and schema‑compatible

Source URL management

EP‑56 / RIPDB‑81

Dashboard health indicators (sources online vs. offline) depend on the source registry being the source of truth for active URLs

Email notification service

EP‑65 / Notifications

FR‑112.5 email alerts must use the existing notification infrastructure — not a one‑off implementation

Retry config storage

Admin Console settings

FR‑112.4 and AC‑112.12 require threshold/retry settings persisted per Repo Admin — config store must exist

Impact Assessment

If this changes…

Impacted Modules

Not Impacted

Extraction fails / retries

Failure tracking counter, Retry scheduler (exponential backoff), Audit trail log

Article repository, Team‑facing article feeds

Failure threshold reached (default 3)

Email alert triggered, In‑app alerts panel updated, Audit trail entry written

Existing acknowledged alerts, Source URL config

Alert threshold reconfigured by Repo Admin (AC‑112.12)

Future email alert timing only; no retroactive effect on already‑active alerts

Already‑triggered alerts, Audit trail entries

Source recovers after failure

Alert auto‑clears (AC‑112.9), Success rate recalculates, Dashboard health indicator updates

Acknowledged alert history, Audit trail (recovery is additive, not corrective)

Persistent failure detected (AC‑112.8)

Alert escalation logic, Email content, In‑app alert severity label

Standard retry mechanism (retries already exhausted)

Extraction run completes (success or failure)

Audit trail (always), Run Statistics panel (FR‑112.2), Trend data (FR‑112.7)

Team workflows, Notification logic (notifications only on failure threshold)

Source added or removed in URL management

Dashboard source count updates (AC‑112.1 “15/16 sources”), Health indicator recalculates

Trend history for existing sources, Active alerts for other sources

Trend data queried (30‑day view)

Read‑only; depends on audit/run log data retained for 30+ days

Live dashboard health indicators, Active alert states

