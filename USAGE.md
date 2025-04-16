<!-- Start SDK Example Usage [usage] -->
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