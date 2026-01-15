// icon-registry.ts
import * as Icons from "./index";

export const iconRegistry = {
  Cube: Icons.FaCube,
  Plug: Icons.FaPlug,
  UsersCog: Icons.FaUsersCog,
  Newspaper: Icons.FaRegNewspaper,
  Users: Icons.FaUsers,
  Gem: Icons.FaRegGem,
  ArrowRight: Icons.FaLongArrowAltRight,
  Minus: Icons.FaMinus,
  Plus: Icons.FaPlus,
  MapPin: Icons.FaMapPin,
  Facebook: Icons.FaFacebook,
  FB: Icons.FaFacebook,
  LinkedIn: Icons.FaLinkedin,
  YouTube: Icons.FaYoutube,
  Instagram: Icons.FaInstagram,
  Phone: Icons.FaPhoneAlt,
  Mail: Icons.FaEnvelope,
  AngleRight: Icons.FaAngleRight,
  BookOpen: Icons.FaBookOpen,
  Megaphone: Icons.FaBullhorn,
  Network: Icons.FaNetworkWired,
  HandHoldingHeart: Icons.FaHandHoldingHeart,
  Handshake: Icons.FaHandshake,
  Donate: Icons.FaDonate,
};
export type IconName = keyof typeof iconRegistry;
