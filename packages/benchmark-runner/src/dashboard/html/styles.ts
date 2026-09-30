export const dashboardStyles = `
:root {
  color-scheme: light dark;

  --bg: #fff;
  --fg: #20242b;
  --muted: #667085;
  --line: #d9dee8;
  --soft: #f4f6f8;
  --accent: #1769aa;
  --ok: #16794d;
  --bad: #b42318;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #17191d;
    --fg: #f2f4f7;
    --muted: #aab2c0;
    --line: #3a404b;
    --soft: #22262d;
    --accent: #62a8e5;
    --ok: #61c995;
    --bad: #ff8b83;
  }
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", sans-serif;
  color: var(--fg);
  background: var(--bg);
}

a {
  color: var(--accent);
}

header {
  padding: 32px max(20px, calc((100% - 1280px) / 2));
  border-bottom: 1px solid var(--line);
}

h1 {
  margin: 0 0 12px;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0;
}

h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 24px;
  font-size: 14px;
  color: var(--muted);
}

.meta strong {
  font-weight: 500;
  color: var(--fg);
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-width: 1280px;
  padding: 14px 20px;
  margin: 0 auto;
  border-bottom: 1px solid var(--line);
}

.tab {
  padding: 10px 14px;
  font: inherit;
  color: var(--muted);
  cursor: pointer;
  background: transparent;
  border: 0;
  border-bottom: 2px solid transparent;
}

.tab[aria-selected="true"] {
  color: var(--fg);
  border-bottom-color: var(--accent);
}

.tab:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

main {
  max-width: 1280px;
  padding: 24px 20px 56px;
  margin: 0 auto;
}

.panel[hidden] {
  display: none;
}

.chart {
  width: 100%;
  height: 650px;
  min-height: 420px;
}

#chart-compile,
#chart-size {
  height: 760px;
}

.caption,
.empty {
  font-size: 14px;
  color: var(--muted);
}

.table-wrap {
  margin-top: 28px;
  overflow-x: auto;
  border-top: 1px solid var(--line);
}

.table-heading {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 12px;
}

table {
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;
}

th,
td {
  padding: 11px 12px;
  text-align: right;
  white-space: nowrap;
  border-bottom: 1px solid var(--line);
}

th:first-child,
td:first-child {
  text-align: left;
}

thead th {
  font-weight: 500;
  color: var(--muted);
  background: var(--soft);
}

tbody th {
  font-weight: 400;
}

code {
  color: var(--fg);
}

.status {
  font-weight: 500;
}

.status-passed {
  color: var(--ok);
}

.status-failed {
  color: var(--bad);
}

.status-skipped {
  color: var(--muted);
}

@media (max-width: 640px) {
  header {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  h1 {
    font-size: 24px;
  }

  main {
    padding-right: 12px;
    padding-left: 12px;
  }

  nav {
    padding-right: 8px;
    padding-left: 8px;
  }

  .tab {
    padding-right: 10px;
    padding-left: 10px;
  }

  .chart,
  #chart-compile,
  #chart-size {
    height: 540px;
  }

  th,
  td {
    padding: 10px 9px;
  }
}
`
