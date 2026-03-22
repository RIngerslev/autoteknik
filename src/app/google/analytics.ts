export const GA_ID = "AW-18019535668";

export const pageview = (url: string) => {
    window.gtag?.("config", GA_ID, {
        page_path: url,
    });
};