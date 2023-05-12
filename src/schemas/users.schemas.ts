import { z } from "zod";

const userSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string().nullish(),
  updatedAt: z.string().nullish(),
  deletedAt: z.string().nullish(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const userSchemaUpdateRequest = userSchemaRequest.partial();

const usersSchemaResponse = z.array(userSchemaResponse);

export {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  userSchemaUpdateRequest,
  usersSchemaResponse,
};
