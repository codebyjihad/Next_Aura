import { IconType } from "react-icons";

import { MdOutlineAccountCircle } from "react-icons/md";
import { FaUserFriends, FaCookie, FaLock, FaBell, FaLanguage, FaSave } from "react-icons/fa";
import { ImBlocked } from "react-icons/im";
import { IoLogoIonitron } from "react-icons/io";
import { MdPrivacyTip, MdHelpOutline, MdHistory } from "react-icons/md";


export type ProfileItem = {
  id: number;
  name: string;
  href: string;
  icone: IconType;
};


export const ProfileData: ProfileItem[] = [
  {
    id: 1,
    name: "My Account",
    href: "/my_account",
    icone: MdOutlineAccountCircle,
  },
  {
    id: 2,
    name: "Friends",
    href: "/friend",
    icone: FaUserFriends,
  },
  {
    id: 3,
    name: "Blocked Account",
    href: "/blocked_account",
    icone: ImBlocked,
  },
  {
    id: 4,
    name: "Themes",
    href: "/themes",
    icone: FaCookie,
  },
  {
    id: 5,
    name: "Nitro",
    href: "/nitro",
    icone: IoLogoIonitron,
  },
  {
    id: 6,
    name: "Personal Details",
    href: "/personal_details",
    icone: MdOutlineAccountCircle,
  },
  {
    id: 7,
    name: "Security",
    href: "/security",
    icone: FaLock,
  },
  {
    id: 8,
    name: "Privacy",
    href: "/privacy",
    icone: MdPrivacyTip,
  },
  {
    id: 9,
    name: "Notifications",
    href: "/notifications",
    icone: FaBell,
  },
  {
    id: 10,
    name: "Language",
    href: "/language",
    icone: FaLanguage,
  },
  {
    id: 11,
    name: "Help & Support",
    href: "/help",
    icone: MdHelpOutline,
  },
  {
    id: 12,
    name: "Activity Log",
    href: "/activity",
    icone: MdHistory,
  },
  {
    id: 13,
    name: "Saved",
    href: "/saved",
    icone: FaSave,
  },
];