# docusign-test

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *docusign-test* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=docusign-test&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/docusign/docusign). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Workspaces API: Docusign Workspaces API
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [docusign-test](#docusign-test)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "DocusignTest": {
      "command": "npx",
      "args": [
        "-y", "--package", "docusign-test",
        "--",
        "mcp", "start",
        "--o-auth2", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "DocusignTest": {
      "command": "npx",
      "args": [
        "-y", "--package", "docusign-test",
        "--",
        "mcp", "start",
        "--o-auth2", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package docusign-test -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { DocusignTest } from "docusign-test";

const docusignTest = new DocusignTest({
  oAuth2: process.env["DOCUSIGN_TEST_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTest.workspaceDocuments.list({
    accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
    workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme       | Environment Variable    |
| -------- | ------ | ------------ | ----------------------- |
| `oAuth2` | oauth2 | OAuth2 token | `DOCUSIGN_TEST_O_AUTH2` |

To authenticate with the API the `oAuth2` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { DocusignTest } from "docusign-test";

const docusignTest = new DocusignTest({
  oAuth2: process.env["DOCUSIGN_TEST_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTest.workspaceDocuments.list({
    accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
    workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [workspaceDocuments](docs/sdks/workspacedocuments/README.md)

* [list](docs/sdks/workspacedocuments/README.md#list) - Get documents in the workspace accessible to the calling user
* [get](docs/sdks/workspacedocuments/README.md#get) - Get information about the document
* [delete](docs/sdks/workspacedocuments/README.md#delete) - Deletes a document in the workspace
* [getContents](docs/sdks/workspacedocuments/README.md#getcontents) - Get the file contents of the document

### [workspaces](docs/sdks/workspaces/README.md)

* [list](docs/sdks/workspaces/README.md#list) - Gets workspaces available to the calling user
* [create](docs/sdks/workspaces/README.md#create) - Creates a new workspace
* [get](docs/sdks/workspaces/README.md#get) - Returns details about the workspace
* [listAssignableRoles](docs/sdks/workspaces/README.md#listassignableroles) - Returns the roles the caller can assign to workspace users
* [listEnvelopes](docs/sdks/workspaces/README.md#listenvelopes) - Returns the envelopes associated with the given workspace
* [createEnvelope](docs/sdks/workspaces/README.md#createenvelope) - Creates an envelope with the given documents. Returns the ID of the created envelope

### [workspaceUsers](docs/sdks/workspaceusers/README.md)

* [list](docs/sdks/workspaceusers/README.md#list) - Retrieves the list of users in the given workspace
* [add](docs/sdks/workspaceusers/README.md#add) - Adds a user to the workspace by email address
* [update](docs/sdks/workspaceusers/README.md#update) - Updates the specified user's role
* [revokeAccess](docs/sdks/workspaceusers/README.md#revokeaccess) - Revokes the specified user's access to the workspace
* [restoreAccess](docs/sdks/workspaceusers/README.md#restoreaccess) - Restores the specified user's access to the workspace

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`workspaceDocumentsDelete`](docs/sdks/workspacedocuments/README.md#delete) - Deletes a document in the workspace
- [`workspaceDocumentsGet`](docs/sdks/workspacedocuments/README.md#get) - Get information about the document
- [`workspaceDocumentsGetContents`](docs/sdks/workspacedocuments/README.md#getcontents) - Get the file contents of the document
- [`workspaceDocumentsList`](docs/sdks/workspacedocuments/README.md#list) - Get documents in the workspace accessible to the calling user
- [`workspacesCreate`](docs/sdks/workspaces/README.md#create) - Creates a new workspace
- [`workspacesCreateEnvelope`](docs/sdks/workspaces/README.md#createenvelope) - Creates an envelope with the given documents. Returns the ID of the created envelope
- [`workspacesGet`](docs/sdks/workspaces/README.md#get) - Returns details about the workspace
- [`workspacesList`](docs/sdks/workspaces/README.md#list) - Gets workspaces available to the calling user
- [`workspacesListAssignableRoles`](docs/sdks/workspaces/README.md#listassignableroles) - Returns the roles the caller can assign to workspace users
- [`workspacesListEnvelopes`](docs/sdks/workspaces/README.md#listenvelopes) - Returns the envelopes associated with the given workspace
- [`workspaceUsersAdd`](docs/sdks/workspaceusers/README.md#add) - Adds a user to the workspace by email address
- [`workspaceUsersList`](docs/sdks/workspaceusers/README.md#list) - Retrieves the list of users in the given workspace
- [`workspaceUsersRestoreAccess`](docs/sdks/workspaceusers/README.md#restoreaccess) - Restores the specified user's access to the workspace
- [`workspaceUsersRevokeAccess`](docs/sdks/workspaceusers/README.md#revokeaccess) - Revokes the specified user's access to the workspace
- [`workspaceUsersUpdate`](docs/sdks/workspaceusers/README.md#update) - Updates the specified user's role

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { DocusignTest } from "docusign-test";

const docusignTest = new DocusignTest({
  oAuth2: process.env["DOCUSIGN_TEST_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTest.workspaceDocuments.list({
    accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
    workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { DocusignTest } from "docusign-test";

const docusignTest = new DocusignTest({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  oAuth2: process.env["DOCUSIGN_TEST_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTest.workspaceDocuments.list({
    accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
    workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `list` method may throw the following errors:

| Error Type          | Status Code | Content Type     |
| ------------------- | ----------- | ---------------- |
| errors.ErrorDetails | 400, 401    | application/json |
| errors.APIError     | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { DocusignTest } from "docusign-test";
import { ErrorDetails, SDKValidationError } from "docusign-test/models/errors";

const docusignTest = new DocusignTest({
  oAuth2: process.env["DOCUSIGN_TEST_O_AUTH2"] ?? "",
});

async function run() {
  let result;
  try {
    result = await docusignTest.workspaceDocuments.list({
      accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
      workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
    });

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof ErrorDetails): {
        // Handle err.data$: ErrorDetailsData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                         | Description       |
| --- | ------------------------------ | ----------------- |
| 0   | `https://localhost:5001`       | Local Development |
| 1   | `https://api.docusign.com`     | Production server |
| 2   | `https://api-d.docusign.com`   | Demo server       |
| 3   | `https://api-s.docusign.com`   | Staging server    |
| 4   | `https://api.dev.docusign.com` | Dev server        |

#### Example

```typescript
import { DocusignTest } from "docusign-test";

const docusignTest = new DocusignTest({
  serverIdx: 4,
  oAuth2: process.env["DOCUSIGN_TEST_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTest.workspaceDocuments.list({
    accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
    workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
  });

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { DocusignTest } from "docusign-test";

const docusignTest = new DocusignTest({
  serverURL: "https://localhost:5001",
  oAuth2: process.env["DOCUSIGN_TEST_O_AUTH2"] ?? "",
});

async function run() {
  const result = await docusignTest.workspaceDocuments.list({
    accountId: "9cc31b33-195e-4e49-afbc-7023822fc19b",
    workspaceId: "d88e63cd-2368-4f35-a54c-1bb45e45a7b7",
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { DocusignTest } from "docusign-test";
import { HTTPClient } from "docusign-test/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new DocusignTest({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { DocusignTest } from "docusign-test";

const sdk = new DocusignTest({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `DOCUSIGN_TEST_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=docusign-test&utm_campaign=typescript)
