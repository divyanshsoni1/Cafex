import {
  pgTable,
  uuid,
  text,
  varchar,
  timestamp,
  decimal,
  boolean,
  integer,
  jsonb,
  pgEnum,
  index,
  check,
  uniqueIndex
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const billingCycleEnum = pgEnum("billing_cycle", ["MONTHLY", "QUARTERLY", "YEARLY"]);
export const inquiryStatusEnum = pgEnum("inquiry_status", ["PENDING", "CONTACTED", "QUALIFIED", "CLOSED"]);

export const features = pgTable("feature", {
  id: uuid("id").defaultRandom().primaryKey(),
  imageUrl: text("image_url").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description", { length: 750 }).notNull(),
  content: text("content").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull()
});

export const pricingPlans = pgTable("pricing_plan", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 750 }),

  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
  currency: varchar("currency", { length: 10 }).default("INR").notNull(),

  billingCycle: billingCycleEnum("billing_cycle").notNull(),
  features: jsonb("features"), // Maps your JsonB? column type

  isPopular: boolean("is_popular").default(false).notNull(),
  hasFirstPurchaseDiscount: boolean("has_first_purchase_discount").default(true).notNull(),
  firstPurchaseDiscountPct: integer("first_purchase_discount_pct").default(50).notNull(),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
}, (table) => [
  check("discount_pct_range", sql`${table.firstPurchaseDiscountPct} >= 0 AND ${table.firstPurchaseDiscountPct} <= 100`)
]);


export const contactInquiries = pgTable("contact_inquiries", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 150 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull(),
  email: varchar("email", { length: 255 }),

  city: varchar("city", { length: 100 }).notNull(),
  state: varchar("state", { length: 100 }).notNull(),
  cafeName: varchar("cafe_name", { length: 255 }),

  usingSoftware: boolean("using_software").notNull(),
  message: text("message"),

  status: inquiryStatusEnum("status").default("PENDING").notNull(),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const cafes = pgTable("cafes", {
  id: uuid("id").defaultRandom().primaryKey(),

  name: varchar("name", { length: 255 }).notNull(),
  imageUrl: text("image_url").notNull(),

  rating: decimal("rating", { precision: 2, scale: 1 }).notNull().default("0.0"),
  totalReviews: integer("total_reviews").notNull().default(0),

  distanceKm: decimal("distance_km", { precision: 5, scale: 2 }).notNull(),

  city: varchar("city", { length: 150 }).notNull(),
  state: varchar("state", { length: 150 }).notNull(),

  tags: text("tags").array().notNull().default([]),

  currentSpecial: text("current_special").$type<{
    name: string;
    price: string;
    description: string;
  } | null>().default(null),

  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: timestamp("email_verified", { mode: "date" }),
  image: text("image"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (table) => [
  uniqueIndex("email_idx").on(table.email)
]);

export const accounts = pgTable("accounts", {
  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("provider_account_id").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
}, (table) => [
  uniqueIndex("provider_idx").on(table.provider, table.providerAccountId)
]);