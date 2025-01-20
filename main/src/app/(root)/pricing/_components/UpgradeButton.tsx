import { Zap } from "lucide-react";
import Link from "next/link";

export default function UpgradeButton() {

  return (
    <Link
      href={'/'}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white 
        bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg 
        hover:from-purple-600 hover:to-purple-700 transition-all"
    >
      <Zap className="w-5 h-5" />
      Upgrade to Pro
    </Link>
  );
}
