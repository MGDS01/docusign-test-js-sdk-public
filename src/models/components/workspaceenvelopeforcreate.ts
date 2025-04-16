/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WorkspaceEnvelopeForCreate = {
  /**
   * The name for the envelope
   */
  envelopeName: string | null;
  /**
   * The optional list of document IDs to be added to the envelope
   */
  documentIds?: Array<string> | null | undefined;
};

/** @internal */
export const WorkspaceEnvelopeForCreate$inboundSchema: z.ZodType<
  WorkspaceEnvelopeForCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  envelope_name: z.nullable(z.string()),
  document_ids: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    "envelope_name": "envelopeName",
    "document_ids": "documentIds",
  });
});

/** @internal */
export type WorkspaceEnvelopeForCreate$Outbound = {
  envelope_name: string | null;
  document_ids?: Array<string> | null | undefined;
};

/** @internal */
export const WorkspaceEnvelopeForCreate$outboundSchema: z.ZodType<
  WorkspaceEnvelopeForCreate$Outbound,
  z.ZodTypeDef,
  WorkspaceEnvelopeForCreate
> = z.object({
  envelopeName: z.nullable(z.string()),
  documentIds: z.nullable(z.array(z.string())).optional(),
}).transform((v) => {
  return remap$(v, {
    envelopeName: "envelope_name",
    documentIds: "document_ids",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WorkspaceEnvelopeForCreate$ {
  /** @deprecated use `WorkspaceEnvelopeForCreate$inboundSchema` instead. */
  export const inboundSchema = WorkspaceEnvelopeForCreate$inboundSchema;
  /** @deprecated use `WorkspaceEnvelopeForCreate$outboundSchema` instead. */
  export const outboundSchema = WorkspaceEnvelopeForCreate$outboundSchema;
  /** @deprecated use `WorkspaceEnvelopeForCreate$Outbound` instead. */
  export type Outbound = WorkspaceEnvelopeForCreate$Outbound;
}

export function workspaceEnvelopeForCreateToJSON(
  workspaceEnvelopeForCreate: WorkspaceEnvelopeForCreate,
): string {
  return JSON.stringify(
    WorkspaceEnvelopeForCreate$outboundSchema.parse(workspaceEnvelopeForCreate),
  );
}

export function workspaceEnvelopeForCreateFromJSON(
  jsonString: string,
): SafeParseResult<WorkspaceEnvelopeForCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WorkspaceEnvelopeForCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WorkspaceEnvelopeForCreate' from JSON`,
  );
}
