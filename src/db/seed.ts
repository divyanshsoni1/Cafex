import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { cafes } from "./schema";
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
    throw new Error("Missing DATABASE_URL environment variable.");
}

const queryClient = postgres(process.env.DATABASE_URL);
const db = drizzle(queryClient);

async function main() {
    console.log("⏳ Flushing existing table data...");
    await db.delete(cafes);

    console.log("🌱 Injecting high-quality cafe sample data...");

    const cafesSeedData = [
        {
            name: "Blue Tokai Coffee Roasters",
            imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
            rating: "4.7",
            totalReviews: 2345,
            distanceKm: "1.2",
            city: "Delhi",
            state: "Delhi",
            tags: ["artisanal coffee", "wifi", "cozy", "outdoor seating"],
            currentSpecial: JSON.stringify({ name: "Pour Over Special", price: "₹399", description: "Single origin Ethiopian coffee" })
        },
        {
            name: "Third Wave Coffee Roasters",
            imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
            rating: "4.6",
            totalReviews: 1890,
            distanceKm: "2.5",
            city: "Bangalore",
            state: "Karnataka",
            tags: ["coffee", "wifi", "study friendly", "vegan options"],
            currentSpecial: JSON.stringify({ name: "Cold Brew", price: "₹349", description: "Nitro cold brew with vanilla" })
        },
        {
            name: "Indian Coffee House",
            imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop",
            rating: "4.3",
            totalReviews: 4500,
            distanceKm: "0.8",
            city: "Kolkata",
            state: "West Bengal",
            tags: ["heritage", "budget friendly", "classic", "south indian"],
            currentSpecial: JSON.stringify({ name: "Filter Coffee", price: "₹150", description: "Authentic South Indian filter coffee" })
        },
        {
            name: "Cafe Coffee Day",
            imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
            rating: "4.0",
            totalReviews: 5670,
            distanceKm: "3.1",
            city: "Bangalore",
            state: "Karnataka",
            tags: ["coffee", "snacks", "wifi", "casual"],
            currentSpecial: JSON.stringify({ name: "Cold Coffee", price: "₹199", description: "Classic cold coffee with ice cream" })
        },
        {
            name: "Chaayos",
            imageUrl: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
            rating: "4.4",
            totalReviews: 3210,
            distanceKm: "1.8",
            city: "Delhi",
            state: "Delhi",
            tags: ["tea", "chai", "snacks", "wifi"],
            currentSpecial: JSON.stringify({ name: "Masala Chai", price: "₹199", description: "Classic Indian masala chai" })
        },
        {
            name: "The Tea Room",
            imageUrl: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&h=600&fit=crop",
            rating: "4.5",
            totalReviews: 980,
            distanceKm: "2.0",
            city: "Jaipur",
            state: "Rajasthan",
            tags: ["tea", "heritage", "cakes", "cozy"],
            currentSpecial: JSON.stringify({ name: "Kashmiri Kahwa", price: "₹299", description: "Green tea with saffron" })
        },
        {
            name: "Mango Tree Cafe",
            imageUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop", // ✅ new
            rating: "4.8",
            totalReviews: 1560,
            distanceKm: "5.5",
            city: "Goa",
            state: "Goa",
            tags: ["outdoor seating", "sea view", "relaxed", "seafood"],
            currentSpecial: JSON.stringify({ name: "Goan Fish Curry", price: "₹499", description: "Spicy Goan fish curry with rice" })
        },
        {
            name: "Cafe Lota",
            imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop", // ✅ new
            rating: "4.6",
            totalReviews: 2100,
            distanceKm: "2.3",
            city: "Delhi",
            state: "Delhi",
            tags: ["artisanal", "museum", "organic", "brunch"],
            currentSpecial: JSON.stringify({ name: "Pancake Stack", price: "₹399", description: "Fluffy pancakes with honey" })
        },
        {
            name: "Rameshwaram Cafe",
            imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop",
            rating: "4.9",
            totalReviews: 4200,
            distanceKm: "1.5",
            city: "Bangalore",
            state: "Karnataka",
            tags: ["south indian", "tiffin", "budget", "traditional"],
            currentSpecial: JSON.stringify({ name: "Ghee Podi Dosa", price: "₹249", description: "Crispy dosa with ghee" })
        },
        {
            name: "Filter Coffee",
            imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
            rating: "4.4",
            totalReviews: 3450,
            distanceKm: "0.9",
            city: "Chennai",
            state: "Tamil Nadu",
            tags: ["filter coffee", "south indian", "traditional"],
            currentSpecial: JSON.stringify({ name: "Filter Coffee", price: "₹120", description: "Authentic filter coffee" })
        },
        {
            name: "Window Seat Cafe",
            imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=600&fit=crop",
            rating: "4.3",
            totalReviews: 1200,
            distanceKm: "3.8",
            city: "Pune",
            state: "Maharashtra",
            tags: ["books", "quiet", "study", "coffee"],
            currentSpecial: JSON.stringify({ name: "Irish Coffee", price: "₹349", description: "Coffee with whiskey" })
        },
        {
            name: "Cafe Delhi Heights",
            imageUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", // ✅ new
            rating: "4.2",
            totalReviews: 2300,
            distanceKm: "4.1",
            city: "Delhi",
            state: "Delhi",
            tags: ["family", "spacious", "continental", "desserts"],
            currentSpecial: JSON.stringify({ name: "Tandoori Wrap", price: "₹299", description: "Spicy paneer wrap" })
        },
        {
            name: "The Chatter House",
            imageUrl: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=600&fit=crop", // ✅ new
            rating: "4.5",
            totalReviews: 1890,
            distanceKm: "2.2",
            city: "Kolkata",
            state: "West Bengal",
            tags: ["live music", "craft beer", "nightlife"],
            currentSpecial: JSON.stringify({ name: "Craft Beer Sampler", price: "₹699", description: "4 varieties of craft beer" })
        },
        {
            name: "Big Chill Cafe",
            imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&h=600&fit=crop",
            rating: "4.7",
            totalReviews: 5600,
            distanceKm: "1.0",
            city: "Delhi",
            state: "Delhi",
            tags: ["italian", "pasta", "desserts", "cozy"],
            currentSpecial: JSON.stringify({ name: "Tiramisu", price: "₹349", description: "Classic Italian tiramisu" })
        },
        {
            name: "Cafe Turtle",
            imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
            rating: "4.4",
            totalReviews: 1500,
            distanceKm: "3.4",
            city: "Delhi",
            state: "Delhi",
            tags: ["books", "quiet", "coffee", "cakes"],
            currentSpecial: JSON.stringify({ name: "Red Velvet Cake", price: "₹249", description: "Red velvet cake with cream cheese" })
        },
        {
            name: "Kunzum Cafe",
            imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
            rating: "4.6",
            totalReviews: 2800,
            distanceKm: "2.7",
            city: "Delhi",
            state: "Delhi",
            tags: ["travel", "books", "cozy", "photography"],
            currentSpecial: JSON.stringify({ name: "Tibetan Tea", price: "₹199", description: "Butter tea" })
        },
        {
            name: "Ivy & Bean",
            imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop",
            rating: "4.3",
            totalReviews: 950,
            distanceKm: "6.0",
            city: "Mumbai",
            state: "Maharashtra",
            tags: ["coffee", "wifi", "outdoor", "pet friendly"],
            currentSpecial: JSON.stringify({ name: "Mocha Frappe", price: "₹349", description: "Chocolate coffee frappe" })
        },
        {
            name: "Cafe Zoe",
            imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
            rating: "4.5",
            totalReviews: 2300,
            distanceKm: "5.2",
            city: "Mumbai",
            state: "Maharashtra",
            tags: ["brunch", "spacious", "industrial", "all day dining"],
            currentSpecial: JSON.stringify({ name: "Big Breakfast", price: "₹499", description: "Eggs, bacon, toast, hash browns" })
        },
        {
            name: "Prithvi Cafe",
            imageUrl: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
            rating: "4.8",
            totalReviews: 4100,
            distanceKm: "1.9",
            city: "Mumbai",
            state: "Maharashtra",
            tags: ["outdoor", "heritage", "cafe", "snacks"],
            currentSpecial: JSON.stringify({ name: "Bun Maska", price: "₹150", description: "Bread with butter" })
        },
        {
            name: "Cafe Madras",
            imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=600&fit=crop", // ✅ new
            rating: "4.5",
            totalReviews: 3900,
            distanceKm: "1.3",
            city: "Chennai",
            state: "Tamil Nadu",
            tags: ["south indian", "tiffin", "traditional"],
            currentSpecial: JSON.stringify({ name: "Mini Tiffin", price: "₹299", description: "Idli, vada, dosa, upma" })
        },
        {
            name: "SodaBottleOpenerWala",
            imageUrl: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&h=600&fit=crop",
            rating: "4.6",
            totalReviews: 3200,
            distanceKm: "3.6",
            city: "Mumbai",
            state: "Maharashtra",
            tags: ["parsi", "cafe", "desserts", "craft beer"],
            currentSpecial: JSON.stringify({ name: "Mawa Cake", price: "₹249", description: "Parsi mawa cake" })
        },
        {
            name: "Kala Ghoda Cafe",
            imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop", // ✅ new (duplicate but fine)
            rating: "4.4",
            totalReviews: 1780,
            distanceKm: "4.8",
            city: "Mumbai",
            state: "Maharashtra",
            tags: ["art", "coffee", "sandwiches", "outdoor"],
            currentSpecial: JSON.stringify({ name: "Iced Mocha", price: "₹299", description: "Iced chocolate coffee" })
        },
        {
            name: "Samovar",
            imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop", // ✅ new
            rating: "4.3",
            totalReviews: 1400,
            distanceKm: "2.1",
            city: "Mumbai",
            state: "Maharashtra",
            tags: ["heritage", "chai", "snacks"],
            currentSpecial: JSON.stringify({ name: "Karak Chai", price: "₹180", description: "Strong sweet tea" })
        },
        {
            name: "Saravana Bhavan",
            imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop",
            rating: "4.2",
            totalReviews: 6700,
            distanceKm: "0.6",
            city: "Chennai",
            state: "Tamil Nadu",
            tags: ["south indian", "vegetarian", "traditional"],
            currentSpecial: JSON.stringify({ name: "Rava Dosa", price: "₹220", description: "Crispy rava dosa" })
        },
        {
            name: "MTR",
            imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
            rating: "4.6",
            totalReviews: 5800,
            distanceKm: "1.7",
            city: "Bangalore",
            state: "Karnataka",
            tags: ["south indian", "tiffin", "traditional", "breakfast"],
            currentSpecial: JSON.stringify({ name: "Masala Dosa", price: "₹249", description: "Classic masala dosa" })
        },
        {
            name: "India Coffee House - Trivandrum",
            imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=600&fit=crop",
            rating: "4.3",
            totalReviews: 2200,
            distanceKm: "2.9",
            city: "Trivandrum",
            state: "Kerala",
            tags: ["coffee", "heritage", "classic"],
            currentSpecial: JSON.stringify({ name: "Coffee", price: "₹100", description: "Classic black coffee" })
        },
        {
            name: "Starbucks - Delhi",
            imageUrl: "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=800&h=600&fit=crop", // ✅ new
            rating: "4.1",
            totalReviews: 8900,
            distanceKm: "1.1",
            city: "Delhi",
            state: "Delhi",
            tags: ["coffee", "wifi", "global", "snacks"],
            currentSpecial: JSON.stringify({ name: "Pumpkin Spice Latte", price: "₹399", description: "Seasonal pumpkin spice latte" })
        },
        {
            name: "Costa Coffee - Mumbai",
            imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&h=600&fit=crop", // ✅ new
            rating: "4.0",
            totalReviews: 4500,
            distanceKm: "3.2",
            city: "Mumbai",
            state: "Maharashtra",
            tags: ["coffee", "wifi", "casual"],
            currentSpecial: JSON.stringify({ name: "Cortado", price: "₹299", description: "Spanish cortado" })
        },
        {
            name: "Barista",
            imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&h=600&fit=crop",
            rating: "3.9",
            totalReviews: 3200,
            distanceKm: "4.5",
            city: "Delhi",
            state: "Delhi",
            tags: ["coffee", "snacks", "casual"],
            currentSpecial: JSON.stringify({ name: "Hazelnut Latte", price: "₹349", description: "Latte with hazelnut syrup" })
        },
        {
            name: "The Coffee Bean & Tea Leaf",
            imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
            rating: "4.2",
            totalReviews: 2800,
            distanceKm: "2.6",
            city: "Bangalore",
            state: "Karnataka",
            tags: ["coffee", "tea", "wifi", "cakes"],
            currentSpecial: JSON.stringify({ name: "Original Ice Blended", price: "₹399", description: "Coffee blended with ice" })
        },
        {
            name: "Brew Estate",
            imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
            rating: "4.5",
            totalReviews: 1600,
            distanceKm: "3.3",
            city: "Chandigarh",
            state: "Punjab",
            tags: ["craft beer", "brewpub", "live music", "outdoor"],
            currentSpecial: JSON.stringify({ name: "Wheat Beer", price: "₹499", description: "German wheat beer" })
        },
        {
            name: "Social - Hauz Khas",
            imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop",
            rating: "4.4",
            totalReviews: 4800,
            distanceKm: "2.4",
            city: "Delhi",
            state: "Delhi",
            tags: ["nightlife", "cocktails", "small plates", "rooftop"],
            currentSpecial: JSON.stringify({ name: "Moscow Mule", price: "₹599", description: "Ginger beer with vodka" })
        },
        {
            name: "The Roastery",
            imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
            rating: "4.6",
            totalReviews: 1100,
            distanceKm: "5.0",
            city: "Hyderabad",
            state: "Telangana",
            tags: ["coffee", "roastery", "artisanal", "single origin"],
            currentSpecial: JSON.stringify({ name: "Ethiopian Pour Over", price: "₹449", description: "Fruity Ethiopian coffee" })
        },
        {
            name: "True Brew",
            imageUrl: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
            rating: "4.3",
            totalReviews: 1300,
            distanceKm: "2.8",
            city: "Pune",
            state: "Maharashtra",
            tags: ["coffee", "snacks", "wifi", "study"],
            currentSpecial: JSON.stringify({ name: "Caramel Latte", price: "₹329", description: "Latte with caramel" })
        },
        {
            name: "Caffé Bene",
            imageUrl: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop", // ✅ new
            rating: "4.1",
            totalReviews: 900,
            distanceKm: "4.4",
            city: "Ahmedabad",
            state: "Gujarat",
            tags: ["coffee", "gelato", "wifi", "casual"],
            currentSpecial: JSON.stringify({ name: "Affogato", price: "₹349", description: "Vanilla gelato with espresso" })
        },
        {
            name: "Costa Coffee - Kolkata",
            imageUrl: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&h=600&fit=crop", // ✅ new
            rating: "4.0",
            totalReviews: 2100,
            distanceKm: "3.7",
            city: "Kolkata",
            state: "West Bengal",
            tags: ["coffee", "wifi", "casual"],
            currentSpecial: JSON.stringify({ name: "Flat White", price: "₹299", description: "Flat white coffee" })
        },
        {
            name: "Starbucks - Chennai",
            imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop", // ✅ new
            rating: "4.1",
            totalReviews: 5600,
            distanceKm: "1.4",
            city: "Chennai",
            state: "Tamil Nadu",
            tags: ["coffee", "wifi", "global"],
            currentSpecial: JSON.stringify({ name: "Java Chip Frappuccino", price: "₹449", description: "Coffee with chocolate chips" })
        },
        {
            name: "The Tea Trail",
            imageUrl: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&h=600&fit=crop", // ✅ new
            rating: "4.5",
            totalReviews: 840,
            distanceKm: "3.9",
            city: "Jaipur",
            state: "Rajasthan",
            tags: ["tea", "herbal", "organic", "cozy"],
            currentSpecial: JSON.stringify({ name: "Mint Tea", price: "₹199", description: "Fresh mint tea" })
        },
        {
            name: "Chai Garam",
            imageUrl: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop",
            rating: "4.2",
            totalReviews: 1500,
            distanceKm: "2.0",
            city: "Lucknow",
            state: "Uttar Pradesh",
            tags: ["chai", "street food", "casual"],
            currentSpecial: JSON.stringify({ name: "Bun Maska", price: "₹120", description: "Bread with butter and chai" })
        },
        {
            name: "Roast & Toast",
            imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&h=600&fit=crop",
            rating: "4.4",
            totalReviews: 1100,
            distanceKm: "1.8",
            city: "Indore",
            state: "Madhya Pradesh",
            tags: ["coffee", "breakfast", "sandwiches", "wifi"],
            currentSpecial: JSON.stringify({ name: "Club Sandwich", price: "₹349", description: "Triple layer club sandwich" })
        },
        {
            name: "Coffee & Conversations",
            imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&h=600&fit=crop",
            rating: "4.7",
            totalReviews: 980,
            distanceKm: "6.2",
            city: "Goa",
            state: "Goa",
            tags: ["beach view", "relaxed", "coffee", "snacks"],
            currentSpecial: JSON.stringify({ name: "Bebinca", price: "₹299", description: "Goan layered dessert" })
        },
        {
            name: "The Brew Room",
            imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop", // ✅ new
            rating: "4.6",
            totalReviews: 2700,
            distanceKm: "2.2",
            city: "Bangalore",
            state: "Karnataka",
            tags: ["artisanal", "coffee", "quiet", "work"],
            currentSpecial: JSON.stringify({ name: "Flat White", price: "₹369", description: "Smooth flat white" })
        },
        {
            name: "Art House Cafe",
            imageUrl: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&h=600&fit=crop", // ✅ new
            rating: "4.3",
            totalReviews: 750,
            distanceKm: "7.0",
            city: "Mumbai",
            state: "Maharashtra",
            tags: ["art", "gallery", "coffee", "creative"],
            currentSpecial: JSON.stringify({ name: "Macchiato", price: "₹299", description: "Espresso macchiato" })
        },
        {
            name: "Green House Cafe",
            imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&h=600&fit=crop",
            rating: "4.2",
            totalReviews: 1300,
            distanceKm: "5.5",
            city: "Delhi",
            state: "Delhi",
            tags: ["plant based", "vegan", "organic", "healthy"],
            currentSpecial: JSON.stringify({ name: "Vegan Smoothie Bowl", price: "₹399", description: "Berry smoothie bowl" })
        },
        {
            name: "The Purple Cafe",
            imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop",
            rating: "4.0",
            totalReviews: 880,
            distanceKm: "4.0",
            city: "Hyderabad",
            state: "Telangana",
            tags: ["coffee", "desserts", "wifi", "casual"],
            currentSpecial: JSON.stringify({ name: "Baklava", price: "₹349", description: "Sweet pastry with nuts" })
        },
        {
            name: "Oceanic Cafe",
            imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
            rating: "4.5",
            totalReviews: 1200,
            distanceKm: "3.1",
            city: "Kochi",
            state: "Kerala",
            tags: ["seafood", "coffee", "outdoor", "backwaters"],
            currentSpecial: JSON.stringify({ name: "Kerala Fish Curry", price: "₹499", description: "Spicy fish curry" })
        },
        {
            name: "Hilltop Cafe",
            imageUrl: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&h=600&fit=crop",
            rating: "4.6",
            totalReviews: 1400,
            distanceKm: "1.5",
            city: "Shimla",
            state: "Himachal Pradesh",
            tags: ["scenic", "mountains", "cozy", "hot chocolate"],
            currentSpecial: JSON.stringify({ name: "Hot Chocolate", price: "₹249", description: "Thick hot chocolate" })
        },
        {
            name: "Rustic Brew",
            imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
            rating: "4.4",
            totalReviews: 920,
            distanceKm: "4.9",
            city: "Pune",
            state: "Maharashtra",
            tags: ["craft beer", "wood fired pizza", "live music"],
            currentSpecial: JSON.stringify({ name: "Wood Fired Margherita", price: "₹599", description: "Classic wood fired pizza" })
        },
        {
            name: "The Chocolate Room",
            imageUrl: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=800&h=600&fit=crop",
            rating: "4.3",
            totalReviews: 1050,
            distanceKm: "2.4",
            city: "Ahmedabad",
            state: "Gujarat",
            tags: ["desserts", "chocolate", "waffles", "coffee"],
            currentSpecial: JSON.stringify({ name: "Belgian Waffle", price: "₹449", description: "Waffle with chocolate sauce" })
        }
    ];

    await db.insert(cafes).values(cafesSeedData as any);

    console.log("Database seeding completed successfully!");
    process.exit(0);
}

main().catch((err) => {
    console.error("Seeding failed:", err);
    process.exit(1);
});