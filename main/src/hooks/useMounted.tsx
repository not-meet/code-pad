'use client'
import React, { useEffect, useState } from 'react'

const useMounted = () => {
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return mounted;
}

export default useMounted
