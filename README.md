# vitest-environment-clarinet

A vitest environment to test Clarinet projects.

[Learn more about Clarinet](https://stackslabs.com/clarinet)

This project is used in the [clarinet-sdk](https://www.npmjs.com/package/@stacks/clarinet-sdk) to
provide a Vitest testing enviroments for Clarinet projects. Allowing to access the Clarinet simnet
and interact with smart contracts.

## Development

This project uses [pnpm](https://pnpm.io). The version is pinned in `package.json`, so
[Corepack](https://nodejs.org/api/corepack.html) or `pnpm` itself selects it automatically.

```sh
pnpm install
pnpm test
```

`pnpm-workspace.yaml` enables pnpm's supply-chain protections: new versions are only installed
once they are 7 days old, releases with weaker trust evidence than earlier ones are rejected, and
dependency build scripts are blocked unless listed in `allowBuilds`.
