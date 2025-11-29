import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SubLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

interface SidebarLinkProps {
  href?: string;
  icon?: React.ReactNode;
  label: string;
  subLinks?: SubLink[];
  isActive?: boolean;
}

export default function SidebarLink({
  href,
  icon,
  label,
  subLinks,
  isActive = false,
}: SidebarLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubLinks = subLinks && subLinks.length > 0;

  const handleToggle = () => {
    if (hasSubLinks) {
      setIsOpen(!isOpen);
    }
  };

  const baseClasses =
    "flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-sky-700/50";
  const activeClasses = isActive
    ? "bg-sky-600 text-white hover:bg-sky-700"
    : "text-slate-500 hover:text-white";

  if (hasSubLinks) {
    return (
      <div className="w-full">
        <button
          onClick={handleToggle}
          className={`${baseClasses} ${activeClasses}`}
        >
          <div className="flex items-center gap-3">
            {icon && <span className="text-lg">{icon}</span>}
            <span>{label}</span>
          </div>
          {isOpen ? (
            <ChevronDown className="w-4 h-4 transition-transform" />
          ) : (
            <ChevronRight className="w-4 h-4 transition-transform" />
          )}
        </button>

        {isOpen && (
          <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-700 pl-2">
            {subLinks.map((subLink, index) => (
              <a
                key={index}
                href={subLink.href}
                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-400 rounded-lg transition-all duration-200 hover:bg-slate-700/50 hover:text-white"
              >
                {subLink.icon && (
                  <span className="text-base">{subLink.icon}</span>
                )}
                <span>{subLink.label}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <a href={href} className={`${baseClasses} ${activeClasses}`}>
      <div className="flex items-center gap-3">
        {icon && <span className="text-lg">{icon}</span>}
        <span>{label}</span>
      </div>
    </a>
  );
}

// Demo Component
// export default function SidebarDemo() {
//   const [activeLink, setActiveLink] = useState("dashboard");

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
//       <div className="max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-6 shadow-2xl">
//         <div className="mb-6">
//           <h2 className="text-2xl font-bold text-white mb-2">Sidebar Links</h2>
//           <p className="text-slate-400 text-sm">With dropdown support</p>
//         </div>

//         <nav className="space-y-2">
//           <SidebarLink
//             href="/dashboard"
//             icon={<span>📊</span>}
//             label="Dashboard"
//             isActive={activeLink === "dashboard"}
//           />

//           <SidebarLink
//             icon={<span>📁</span>}
//             label="Projects"
//             isActive={activeLink === "projects"}
//             subLinks={[
//               {
//                 label: "All Projects",
//                 href: "/projects/all",
//                 icon: <span>📋</span>,
//               },
//               {
//                 label: "Active",
//                 href: "/projects/active",
//                 icon: <span>✅</span>,
//               },
//               {
//                 label: "Archived",
//                 href: "/projects/archived",
//                 icon: <span>📦</span>,
//               },
//             ]}
//           />

//           <SidebarLink
//             icon={<span>👥</span>}
//             label="Team"
//             isActive={activeLink === "team"}
//             subLinks={[
//               {
//                 label: "Members",
//                 href: "/team/members",
//                 icon: <span>👤</span>,
//               },
//               { label: "Roles", href: "/team/roles", icon: <span>🎭</span> },
//               {
//                 label: "Permissions",
//                 href: "/team/permissions",
//                 icon: <span>🔐</span>,
//               },
//             ]}
//           />

//           <SidebarLink
//             href="/analytics"
//             icon={<span>📈</span>}
//             label="Analytics"
//             isActive={activeLink === "analytics"}
//           />

//           <SidebarLink
//             icon={<span>⚙️</span>}
//             label="Settings"
//             isActive={activeLink === "settings"}
//             subLinks={[
//               {
//                 label: "Profile",
//                 href: "/settings/profile",
//                 icon: <span>👤</span>,
//               },
//               {
//                 label: "Billing",
//                 href: "/settings/billing",
//                 icon: <span>💳</span>,
//               },
//               {
//                 label: "Notifications",
//                 href: "/settings/notifications",
//                 icon: <span>🔔</span>,
//               },
//               {
//                 label: "Security",
//                 href: "/settings/security",
//                 icon: <span>🔒</span>,
//               },
//             ]}
//           />
//         </nav>
//       </div>
//     </div>
//   );
// }
