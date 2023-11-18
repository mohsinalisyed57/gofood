import { ErrorMessage } from "./Enum/ErrorMessage";
import { EMAIL_REGEX, PASSWORD_REGEX } from "./utils/regex";
import { z } from "zod";
export const VALIDATE_EMAIL = z
  .string()
  .regex(EMAIL_REGEX, { message: ErrorMessage?.INVALID_Email });
export const VALIDATE_PASSWORD = z
  .string()
  .regex(PASSWORD_REGEX, { message: ErrorMessage?.INVALID_PASSWORD });
export const NAME_VALIDATION = z
  .string()
  .min(1, { message: ErrorMessage?.NAME_REQUIRED })
  .max(15, { message: ErrorMessage?.NAME_MAX_LENGTH });
export const ADDRESS_VALIDATION = z
  .string()
  .min(1, { message: ErrorMessage?.ADDRESS_REQUIRED });
