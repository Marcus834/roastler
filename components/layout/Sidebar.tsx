import { signOut } from "next-auth/react"
import { BiLogOut } from "react-icons/bi"
import { BsHouseFill, BsBellFill } from "react-icons/bs"
import { FaUser } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { FaBookmark } from "react-icons/fa"

import useCurrentUser from "@/hooks/useCurrentUser"

import SidebarItem from "./SidebarItem"
import SidebarLogo from "./SidebarLogo"
import SidebarTweetButton from "./SidebarTweetButton"
import SidebarProfileWidget from "./SidebarProfileWidget"

const Sidebar = () => {
  const { data: currentUser } = useCurrentUser()

  const items = [
    {
      icon: BsHouseFill,
      label: "Home",
      href: "/",
    },
    {
      icon: FaSearch,
      label: "Explore",
      href: "/explore",
    },
    {
      icon: BsBellFill,
      label: "Notifications",
      href: "/notifications",
      auth: true,
      alert: currentUser?.hasNotification,
    },
    {
      icon: IoMdMail,
      label: "Messages",
      href: "/",
      auth: true,
    },
    {
      icon: FaBookmark,
      label: "Bookmarks",
      href: "/",
      auth: true,
    },
    {
      icon: FaUser,
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      auth: true,
    },
  ]

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              alert={item.alert}
              auth={item.auth}
              href={item.href}
              icon={item.icon}
              label={item.label}
            />
          ))}
          {currentUser && (
            <SidebarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SidebarTweetButton />
          <SidebarProfileWidget />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
