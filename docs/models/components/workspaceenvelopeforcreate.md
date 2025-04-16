# WorkspaceEnvelopeForCreate

## Example Usage

```typescript
import { WorkspaceEnvelopeForCreate } from "docusign-test/models/components";

let value: WorkspaceEnvelopeForCreate = {
  envelopeName: "<value>",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `envelopeName`                                                | *string*                                                      | :heavy_check_mark:                                            | The name for the envelope                                     |
| `documentIds`                                                 | *string*[]                                                    | :heavy_minus_sign:                                            | The optional list of document IDs to be added to the envelope |