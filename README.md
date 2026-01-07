# WelcomeSecurity Website

This repository contains the source for the **WelcomeSecurity** website (Jekyll) — including content for **WelcomeSecurity** (security as a sidekick to developers) and **Sustira** (ESG & sustainability).

[![Website health check](https://github.com/tlkristensen/WelcomeSecurity/actions/workflows/site-health.yml/badge.svg?branch=main)](https://github.com/tlkristensen/WelcomeSecurity/actions/workflows/site-health.yml)
[![Deploy](https://github.com/tlkristensen/WelcomeSecurity/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/tlkristensen/WelcomeSecurity/actions/workflows/deploy.yml)

---

## Quick start (local development)

### Prerequisites
- Ruby
- Bundler
- Jekyll (via Bundler)

### Install dependencies
```bash
bundle install
```

### Run locally
```bash
bundle exec jekyll serve
```

Open: http://localhost:4000

### Build
```bash
bundle exec jekyll build
```

Build output is generated in:
```
output/
```

---

## Deployment

The site is deployed as **static files** to an external hosting provider.  
No WordPress, PHP, or database is required.

### Automatic deployment
A GitHub Actions workflow deploys the contents of `output/` on pushes to `master`.

Important configuration:
- `url: "https://www.welcomesecurity.net"`
- `baseurl: ""`

---

## Website health checks

A scheduled GitHub Actions workflow periodically checks:
- Site availability (HTTPS)
- Broken links

Failures are visible in the Actions tab and via GitHub notifications.

---

## Repository structure (overview)

- `_config.yml` – Jekyll configuration
- `_pages/` – Pages (about, contact, etc.)
- `_services/` – Service descriptions
- `_team/` – Team profiles
- `_data/` – Data files (SEO, features, etc.)
- `assets/` – CSS and JavaScript
- `images/` – Images and illustrations
- `output/` – Generated build output (not edited manually)

---

## Rollback

Rollback is handled at the hosting provider level by restoring the previous version of the webroot or redeploying a known-good build.

---

## Security notes

- This is a **static website** with minimal attack surface
- Deployment uses SSH keys stored in GitHub Secrets
- No credentials or secrets are stored in the repository

---

## Credits

The site was originally bootstrapped from the **Serif** Jekyll theme by Zerostatic and has since been heavily customized for WelcomeSecurity and Sustira.
