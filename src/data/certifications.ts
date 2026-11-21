import type { Certification } from "@/types";

/**
 * Only officially earned certifications belong here. Courses and self-study
 * are intentionally kept separate and must not be added to this list.
 *
 * Add real credentials when available, for example:
 * {
 *   id: "security-plus",
 *   name: "CompTIA Security+",
 *   issuer: "CompTIA",
 *   issueDate: "2026-01",
 *   expirationDate: "2029-01",
 *   credentialId: "...",
 *   verificationUrl: "https://...",
 * }
 */
export const certifications: Certification[] = [];
