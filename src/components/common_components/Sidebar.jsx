import React, { useEffect, useState } from "react";
import {
    BarChart2,
    DollarSign,
    Settings,
    ShoppingBag,
    ShoppingCart,
    TrendingUp,
    Users,
    Menu,
    LucideOctagonMinus,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
    { name: "Overview", icon: BarChart2, color: "#4287f5", href: "/" },
    { name: "Services", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
    { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
    { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
    { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
    { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
    { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
    { name: "Login", icon: LucideOctagonMinus, color: "#6EE7B7", href: "/login" },
];

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMediaQueryChange = (e) => {
            setIsMobile(e.matches);
            setIsSidebarOpen(!e.matches);
        };

        handleMediaQueryChange(mediaQuery);
        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }, []);

    return (
        <>
            <motion.div
                className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}
                animate={{ width: isSidebarOpen ? 220 : 80 }}
            >
                <div
                    className="h-full bg-white-800 backdrop-blur-md p-4 flex flex-col"
                    style={{
                        background: "linear-gradient(135deg, rgba(142, 64, 255, 0.3), rgba(255, 255, 255, 0.1))",
                    }}
                >
                    {/* Logo and Button Section */}
                    <div className="flex items-center justify-between mb-4">
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
                            disabled={isMobile}
                        >
                            <Menu size={26} />
                        </motion.button>
                        {isSidebarOpen && (
                            <motion.img
                                src="https://macvision.global/assets/images/logo/mahigo.png"
                                className="rounded-full object-cover transition-all duration-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                width={140}
                            />
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="mt-8 flex-grow text-black">
                        {SIDEBAR_ITEMS.map((item) => (
                            <Link key={item.href} to={item.href}>
                                <motion.div
                                    className="flex items-center font-medium p-4 mb-2 text-sm rounded-lg hover:bg-white transition-colors"
                                >
                                    <item.icon
                                        size={20}
                                        style={{ color: item.color, minWidth: "20px" }}
                                    />
                                    <AnimatePresence>
                                        {isSidebarOpen && (
                                            <motion.span
                                                className="ml-4"
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, delay: 0.3 }}
                                            >
                                                {item.name}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        ))}
                    </nav>
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
