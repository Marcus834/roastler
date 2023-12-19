import { useCallback } from "react"
import { useRouter } from "next/router"
import { IoIosMore } from "react-icons/io"

import useLoginModal from "@/hooks/useLoginModal"
import useCurrentUser from "@/hooks/useCurrentUser"
import Avatar from "../Avatar"

const SidebarProfileWidget = () => {
  const router = useRouter()
  const loginModal = useLoginModal()
  const { data: currentUser } = useCurrentUser()

  const onClick = useCallback(() => {
    router.push(`/users/${currentUser?.id}`)
  }, [loginModal, router, currentUser])

  return (
    <div onClick={onClick}>
      <div
        className="
        mt-6
        lg:hidden 
        rounded-full 
        h-14
        w-14
        p-4
        flex
        items-center
        justify-center 
        hover:bg-opacity-80 
        transition 
        cursor-pointer
        hover:bg-slate-300 
      "
      >
        <div>
          <Avatar userId={currentUser?.id} />
        </div>
      </div>
      <div
        className="
        mt-6
        hidden 
        lg:flex 
        px-4
        py-2
        rounded-full
        cursor-pointer
        hover:bg-slate-300 
        hover:bg-opacity-10
      "
      >
        <div>
          <Avatar userId={currentUser?.id} />
        </div>
        <div className="flex flex-col ml-1">
          <p className="text-white text-sm font-semibold w-30 truncate">
            {currentUser?.name}
          </p>
          <p className="text-white/50 text-sm truncate">
            @{currentUser?.username}
          </p>
        </div>
        <div className="flex items-center justify-center">
          <IoIosMore size={20} color="white" />
        </div>
      </div>
    </div>
  )
}

export default SidebarProfileWidget
