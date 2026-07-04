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
    check
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