import posthog from "posthog-js";

const token = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;
const host = import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com";

let ready = false;

try {
    if (token) {
        posthog.init(token, {
            api_host: host,
            capture_pageview: "history_change",
        });
        ready = true;
    }
} catch (error) {
    console.warn("PostHog failed to start:", error);
}

export function track(event, properties) {
    try {
        if (ready) posthog.capture(event, properties);
    } catch {
        /* ignore analytics errors */
    }
}