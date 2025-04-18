/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const GetWorkspaceUsersSortingOption = {
  FirstNameAsc: "first_name_asc",
  LastNameAsc: "last_name_asc",
  EmailAsc: "email_asc",
  FirstNameDesc: "first_name_desc",
  LastNameDesc: "last_name_desc",
  EmailDesc: "email_desc",
} as const;
export type GetWorkspaceUsersSortingOption = ClosedEnum<
  typeof GetWorkspaceUsersSortingOption
>;

/** @internal */
export const GetWorkspaceUsersSortingOption$inboundSchema: z.ZodNativeEnum<
  typeof GetWorkspaceUsersSortingOption
> = z.nativeEnum(GetWorkspaceUsersSortingOption);

/** @internal */
export const GetWorkspaceUsersSortingOption$outboundSchema: z.ZodNativeEnum<
  typeof GetWorkspaceUsersSortingOption
> = GetWorkspaceUsersSortingOption$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWorkspaceUsersSortingOption$ {
  /** @deprecated use `GetWorkspaceUsersSortingOption$inboundSchema` instead. */
  export const inboundSchema = GetWorkspaceUsersSortingOption$inboundSchema;
  /** @deprecated use `GetWorkspaceUsersSortingOption$outboundSchema` instead. */
  export const outboundSchema = GetWorkspaceUsersSortingOption$outboundSchema;
}
