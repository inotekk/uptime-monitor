# Fork Inotekk d'upptime/uptime-monitor

Fork minimal maintenu par Inotekk pour la page de statut `inotekk/status`
(status.vigiao.fr). Base : tag upstream `v1.43.12`.

## Delta par rapport à upstream

1. **i18n des issues d'incident** (`src/update.ts`) : les titres, corps,
   commentaires de clôture et unités de durée des issues sont désormais
   configurables via la section `i18n` de `.upptimerc.yml` (gabarits à
   variables `$SITE_NAME`, `$SITE_URL`, `$COMMIT_LINK`, `$HTTP_CODE`,
   `$RESPONSE_TIME`, `$DURATION`). Sans configuration, les textes anglais
   d'origine sont conservés à l'identique. Nouvelles clés :
   `issueTitleDown`, `issueTitleDegraded`, `issueBodyDown`,
   `issueBodyDegraded`, `issueResolvedDown`, `issueResolvedDegraded`,
   `durationDay(s)`, `durationHour(s)`, `durationMinute(s)`.
   Ce delta a vocation à être proposé en PR upstream.
2. **Auto-référence du fork** (`src/helpers/workflows.ts`) : la résolution
   de version et les `uses:` des workflows générés pointent vers
   `inotekk/uptime-monitor` au lieu d'`upptime/uptime-monitor`, afin que
   l'Update Template CI du repo status ne rebascule pas vers upstream.

## Resynchronisation avec upstream

```bash
git fetch upstream --tags
git merge <tag-upstream>        # ex. v1.44.0
npm ci && npm run build && npm run package
git add -A && git commit
git tag v<version>-fr.<n> && git push origin master --tags
gh release create v<version>-fr.<n> --title ... --notes ...
```

Le runtime de l'action est le bundle `dist/` committé (cf. `action.yml`) :
ne jamais tagger sans avoir reconstruit `dist/`.
