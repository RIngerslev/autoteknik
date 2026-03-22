"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/app/google/analytics";

export function usePageTracking() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url =
            pathname + (searchParams?.toString() ? `?${searchParams}` : "");
        pageview(url);
    }, [pathname, searchParams]);
}