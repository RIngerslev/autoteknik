"use client";

import { usePageTracking } from "@/app/google/pageTracking";

export default function AnalyticsTracker() {
    usePageTracking();
    return null;
}