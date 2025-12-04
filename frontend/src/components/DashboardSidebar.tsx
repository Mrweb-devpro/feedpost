import {
  AppWindow,
  Bell,
  Gem,
  Home,
  Lock,
  PanelRightOpen,
  PanelRightClose,
  Settings,
  User,
  CreditCard,
} from "lucide-react";
import SidebarLink from "./SidebarLink";
import { useState } from "react";
import WhatsappIcon from "./icons/WhatsappIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import ThreadsIcon from "./icons/ThreadsIcon";
import TwitterXIcon from "./icons/TwitterXIcon";
import Logo from "./Logo";

export default function DashboardSidebar() {
  const [activeLink, setActiveLink] = useState("dashboard");
  const [isOpen, setIsOpen] = useState(false);

  const PanelToggleButton = () => {
    return (
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle sidebar"
      >
        {isOpen ? <PanelRightClose size={26} /> : <PanelRightOpen size={26} />}
      </button>
    );
  };

  return (
    <>
      {/* Mobile Overlay - closes sidebar when clicked */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Sidebar Container */}
      <div
        className={`fixed md:relative top-0 left-0 h-full bg-white text-stone-600 z-50 transition-transform duration-300 ease-in-out shadow-xl md:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <aside
          className={`${
            isOpen ? "w-80" : "w-20"
          } space-y-4 h-full flex flex-col justify-between p-2 overflow-y-auto transition-all`}
        >
          <div className="flex items-center gap-2 justify-between ">
            {isOpen && <Logo showText={isOpen} width={130} />}
            {/* Toggle Button */}
            <PanelToggleButton />
          </div>
          <div
            className={`${
              isOpen ? "p-4" : ""
            } bg-white rounded-lg  border border-gray-200 flex-1`}
          >
            <div className="flex flex-col">
              <nav className="space-y-2">
                <SidebarLink
                  href="/home"
                  isSidebarOpen={isOpen}
                  setIsSidebarOpen={setIsOpen}
                  icon={<Home />}
                  label="Home"
                  isActive={activeLink === "dashboard"}
                />

                <SidebarLink
                  icon={<AppWindow />}
                  isSidebarOpen={isOpen}
                  setIsSidebarOpen={setIsOpen}
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
                  isSidebarOpen={isOpen}
                  setIsSidebarOpen={setIsOpen}
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
                      icon: <CreditCard />,
                    },
                    {
                      label: "Notifications",
                      href: "/settings/notifications",
                      icon: <Bell />,
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
          <div
            className={`${
              isOpen ? "p-6" : ""
            } bg-gradient-to-br from-blue-700 to-blue-600 rounded-lg text-white`}
          >
            {isOpen ? (
              <>
                <h3 className="font-bold text-lg mb-2">Premium Features</h3>
                <p className="text-sm text-sky-100 mb-4">
                  Get exclusive badges, ad-free experience, and more visibility
                  for your feedback!
                </p>
                <button className="w-full bg-white text-blue-500 font-semibold py-2 rounded-lg hover:bg-sky-50 transition-colors flex items-center justify-center gap-2">
                  <Gem /> Upgrade Now
                </button>
              </>
            ) : (
              <button className="w-full bg-blue-500 text-white-500 font-semibold py-2 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                <Gem />
              </button>
            )}
          </div>
        </aside>
      </div>
      {/* Mobile Menu Button (visible only when sidebar is closed on mobile) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-14 left-4 z-90 p-2 bg-white rounded-lg shadow-lg md:hidden hover:bg-gray-50 transition-colors opacity-70 hover:opacity-100"
          aria-label="Open sidebar"
        >
          <PanelRightOpen />
        </button>
      )}
    </>
  );
}
