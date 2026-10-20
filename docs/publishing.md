# Publish to npm

Package name: `pragmatic-agent`. Command after publication: `npx pragmatic-agent`.

## First release

1. Confirm that the package name is available on npm.
2. Run `npm run validate`, `npm test`, and `npm pack --dry-run` locally.
3. Merge `dev` into `main` through the maintainer's manual PR.
4. Sign in to npm as an account authorized to publish `pragmatic-agent`.
5. From a checkout of `main`, run `npm publish --access public`. npm may require two-factor authentication.
6. Verify the published package and `npx pragmatic-agent --help`.

Do not publish from `dev`. Never commit npm credentials.

## Later releases through GitHub Actions

The manual `Publish npm package` workflow always checks out `main` and runs validation, tests, and package dry-run before publishing. Configure the `npm` GitHub environment to restrict deployment to `main`.

Prefer npm **Trusted Publishing** (OIDC). On npmjs.com, configure the package's trusted publisher with repository `norfabagas/pragmatic-agent` and workflow `publish-npm.yml`. The workflow requests `id-token: write`. With trusted publishing, remove the `NODE_AUTH_TOKEN` environment stanza from the workflow before use; no long-lived token is needed.

If trusted publishing cannot be configured, store an authorized npm automation token as the GitHub Actions secret `NPM_TOKEN`. Keep the token out of repository files. The workflow currently supports this fallback. Only trigger the workflow after the npm package has been created and publishing authentication is configured.

Update `package.json` version on `dev`, then merge through a PR before publishing. npm will reject re-publishing the same name and version.
