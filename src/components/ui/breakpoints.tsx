'use client';

import { useBreakpointValue } from '@chakra-ui/react';
export default function checkDeviceSize() {
    const current = useBreakpointValue({
        base: "base",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
    });
    return current;
}

