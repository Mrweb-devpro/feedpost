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
