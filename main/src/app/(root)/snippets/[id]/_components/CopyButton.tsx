import { Check, Copy } from "lucide-react";
import React, { useState } from "react"

const CopyButton = ({ code }: { code: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipBoard = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000)
  }
  return (
    <button
      onClick={copyToClipBoard}
      type="button"
      className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 group relative"
    >
      {isCopied ? (
        <Check className="size-4 text-green-400" />
      ) : (
        <Copy className=" size-4 text-gray-400 group-hover:text-gray-300" />
      )}
    </button>
  )
}

export default CopyButton
