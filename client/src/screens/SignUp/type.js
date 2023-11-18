import {
  ADDRESS_VALIDATION,
  NAME_VALIDATION,
  VALIDATE_EMAIL,
  VALIDATE_PASSWORD,
} from "../../validtion";
import { z } from "zod";
export const signUpSchema = z.object({
  name: NAME_VALIDATION,
  email: VALIDATE_EMAIL,
  address: ADDRESS_VALIDATION,
  password: VALIDATE_PASSWORD,
});
