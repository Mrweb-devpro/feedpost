import { AppWindow, Bell, Home, Lock, Settings, User } from "lucide-react";
import SidebarLink from "./SidebarLink";
import { useState } from "react";
import WhatsappIcon from "./icons/WhatsappIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import ThreadsIcon from "./icons/ThreadsIcon";
import TwitterXIcon from "./icons/TwitterXIcon";
import { MdPayment } from "react-icons/md";

export default function DashboardSidebar() {
  const [activeLink, setActiveLink] = useState("dashboard");

  return (
    <div className="absolute md:relative w-full h-full bg-black/45 md:bg-transparent md:w-fit backdrop-blur-xs text-stone-600">
      <aside className=" w-80 space-y-4 h-full flex flex-col justify-between">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex flex-col">
            <nav className="space-y-2">
              <SidebarLink
                href="/home"
                icon={<Home />}
                label="Home"
                isActive={activeLink === "dashboard"}
              />

              <SidebarLink
                icon={<AppWindow />}
                label="Popular Apps"
                isActive={activeLink === "apps"}
                subLinks={[
                  {
                    label: "Whatsapp",
                    href: "/apps/whatsapp",
                    icon: <WhatsappIcon />,
                  },
                  {
                    label: "Facebook",
                    href: "/apps/facebook",
                    icon: <FacebookIcon />,
                  },
                  {
                    label: "Instagram",
                    href: "/apps/instagram",
                    icon: <InstagramIcon />,
                  },
                  {
                    label: "Threads",
                    href: "/apps/threads",
                    icon: <ThreadsIcon />,
                  },

                  {
                    label: "X",
                    href: "/apps/x",
                    icon: <TwitterXIcon />,
                  },
                ]}
              />

              <SidebarLink
                icon={<Settings />}
                label="Settings"
                isActive={activeLink === "settings"}
                subLinks={[
                  {
                    label: "Profile",
                    href: "/settings/profile",
                    icon: <User />,
                  },
                  {
                    label: "Billing",
                    href: "/settings/billing",
                    icon: <MdPayment size={23} />,
                  },
                  {
                    label: "Notifications",
                    href: "/settings/notifications",
                    icon: <Bell size={23} />,
                  },
                  {
                    label: "Security",
                    href: "/settings/security",
                    icon: <Lock />,
                  },
                ]}
              />
            </nav>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-700  to-blue-600 rounded-lg p-6 text-white">
          <h3 className="font-bold text-lg mb-2">Premium Features</h3>
          <p className="text-sm text-sky-100 mb-4">
            Get exclusive badges, ad-free experience, and more visibility for
            your feedback!
          </p>
          <button className="w-full bg-white text-blue-500 font-semibold py-2 rounded-lg hover:bg-sky-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </aside>
    </div>
  );
}
