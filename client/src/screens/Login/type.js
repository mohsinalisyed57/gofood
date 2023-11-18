import { VALIDATE_EMAIL, VALIDATE_PASSWORD } from "../../validtion";
import { z } from "zod";
export const loginSchema = z.object({
  email: VALIDATE_EMAIL,
  password: VALIDATE_PASSWORD,
});
