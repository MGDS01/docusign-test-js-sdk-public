/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  WorkspaceUserSummary,
  WorkspaceUserSummary$inboundSchema,
  WorkspaceUserSummary$Outbound,
  WorkspaceUserSummary$outboundSchema,
} from "./workspaceusersummary.js";

export type GetWorkspaceUsersResponse = {
  /**
   * The user summary list. Includes the ID, name, and metadata such as the role ID and role name
   */
  users: Array<WorkspaceUserSummary> | null;
  /**
   * The number of users returned in the response. Always equal or less than the `count` of the request
   */
  resultSetSize?: number | null | undefined;
  /**
   * Position of the first item in the total results
   */
  startPosition?: number | null | undefined;
  /**
   * Position of the last item in the total results
   */
  endPosition?: number | null | undefined;
  /**
   * The total number of users in the workspace applicable to the request regardless of pagination. It may not always be computed
   */
  totalRowCount?: number | null | undefined;
};

/** @internal */
export const GetWorkspaceUsersResponse$inboundSchema: z.ZodType<
  GetWorkspaceUsersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  users: z.nullable(z.array(WorkspaceUserSummary$inboundSchema)),
  result_set_size: z.nullable(z.number().int()).optional(),
  start_position: z.nullable(z.number().int()).optional(),
  end_position: z.nullable(z.number().int()).optional(),
  total_row_count: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "result_set_size": "resultSetSize",
    "start_position": "startPosition",
    "end_position": "endPosition",
    "total_row_count": "totalRowCount",
  });
});

/** @internal */
export type GetWorkspaceUsersResponse$Outbound = {
  users: Array<WorkspaceUserSummary$Outbound> | null;
  result_set_size?: number | null | undefined;
  start_position?: number | null | undefined;
  end_position?: number | null | undefined;
  total_row_count?: number | null | undefined;
};

/** @internal */
export const GetWorkspaceUsersResponse$outboundSchema: z.ZodType<
  GetWorkspaceUsersResponse$Outbound,
  z.ZodTypeDef,
  GetWorkspaceUsersResponse
> = z.object({
  users: z.nullable(z.array(WorkspaceUserSummary$outboundSchema)),
  resultSetSize: z.nullable(z.number().int()).optional(),
  startPosition: z.nullable(z.number().int()).optional(),
  endPosition: z.nullable(z.number().int()).optional(),
  totalRowCount: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    resultSetSize: "result_set_size",
    startPosition: "start_position",
    endPosition: "end_position",
    totalRowCount: "total_row_count",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceUsersResponse$ {
  /** @deprecated use `GetWorkspaceUsersResponse$inboundSchema` instead. */
  export const inboundSchema = GetWorkspaceUsersResponse$inboundSchema;
  /** @deprecated use `GetWorkspaceUsersResponse$outboundSchema` instead. */
  export const outboundSchema = GetWorkspaceUsersResponse$outboundSchema;
  /** @deprecated use `GetWorkspaceUsersResponse$Outbound` instead. */
  export type Outbound = GetWorkspaceUsersResponse$Outbound;
}

export function getWorkspaceUsersResponseToJSON(
  getWorkspaceUsersResponse: GetWorkspaceUsersResponse,
): string {
  return JSON.stringify(
    GetWorkspaceUsersResponse$outboundSchema.parse(getWorkspaceUsersResponse),
  );
}

export function getWorkspaceUsersResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetWorkspaceUsersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetWorkspaceUsersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetWorkspaceUsersResponse' from JSON`,
  );
}
