import { object, string } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const registerSchema = object({
  firstName: string().min(2, "First name must be at least 2 characters"),
  lastName: string().min(2, "Last name must be at least 2 characters"),
  email: string().email("Invalid email address"),
  password: string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export const addressFormSchema = object({
  headOfficeAddress: string().min(1, "Address is required"),
  country: string(),
  province: string().min(1, "Province is required"),
  district: string().min(1, "District is required"),
  sector: string().min(1, "Sector is required"),
  cell: string().min(1, "Cell is required"),
  village: string().min(1, "Village is required"),
  streetName: string().optional(),
  poBox: string().optional(),
  email: string().email("Invalid email address"),
  phoneNumber: string()
    .min(1, "Phone number is required")
    .regex(/^\+250\d{9}$/, "Invalid phone number format"),
  fax: string().optional(),
});

export const shareInfoSchema = object({
  ordinaryShares: object({
    numberOfShares: string().min(1, "Number of shares is required"),
    parValue: string().optional(),
  }),
  nonVotingShares: object({
    numberOfShares: string().min(1, "Number of shares is required"),
    parValue: string().optional(),
  }),
  redeemableShares: object({
    numberOfShares: string().min(1, "Number of shares is required"),
    parValue: string().optional(),
  }),
  preferentialShares: object({
    numberOfShares: string().min(1, "Number of shares is required"),
    parValue: string().optional(),
  }),
});

export const attachmentSchema = object({
  articleOfAssociation: string().min(1, "Article of Association is required"),
  other1: string().optional(),
  other2: string().optional(),
  other3: string().optional(),
});
