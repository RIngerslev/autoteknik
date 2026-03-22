export const GA_ID = "AW-18019535668";

type Gtag = (
    command: "config" | "event",
    targetId: string,
    config?: Record<string, any>
) => void;

declare global {
    interface Window {
        gtag?: Gtag;
    }
}

export const pageview = (url: string) => {
    window.gtag?.("config", GA_ID, {
        page_path: url,
    });
};