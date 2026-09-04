# Contributing to benchmarks

Contributions that improve benchmark coverage, measurement reliability, or
framework compatibility are welcome.

## Development setup

1. Use Node.js 22.13 or newer and enable Corepack.
2. Initialize the `submodules/weapp-vite` submodule.
3. Run `pnpm install`.
4. Add or update focused tests with implementation changes.

Before opening a pull request, run the verification commands in this order:

```bash
pnpm build
pnpm lint
pnpm typecheck
pnpm tsd
pnpm test
```

The runtime and HMR benchmarks require a logged-in WeChat DevTools installation.
The uni-app x smoke test additionally requires HBuilderX and its CLI tools.

Commits must follow Conventional Commit syntax. All current workspaces are
private benchmark fixtures, so dependency and fixture changes do not require a
release intent.

Report bugs at https://github.com/weapp-vite/benchmarks/issues and use
https://github.com/weapp-vite/benchmarks/discussions for design proposals.
