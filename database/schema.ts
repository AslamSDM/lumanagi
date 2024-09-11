import { relations } from "drizzle-orm";
import {
  AnyPgColumn,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

// Users Table: Stores user information and manages referral relationships
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  address: text("address").notNull().unique(),
  referralCode: text("referralCode").notNull().unique(),
  referredById: text("referredById").references((): AnyPgColumn => users.id, {
    onDelete: "set null",
  }), // Fixed: Changed to integer to match the 'id' column type
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});

// Relations for Users Table: Defines self-referential relationships to handle referrals
export const usersRelations = relations(users, ({ one, many }) => ({
  users: many(users),
  referred: one(users, {
    fields: [users.referredById],
    references: [users.id],
  }),
}));
