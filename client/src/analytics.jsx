import posthog from "posthog-js";

const key = import.meta.env.VITE_POSTHOG_KEY;

if (key) {
    posthog.init(key, {
        api_host: import.meta.env.VITE_POSTHOG_HOST || "https://us.i.posthog.com",
        capture_pageview: "history_change", // tracks page changes in your React Router app
    });
}

export function track(event, props) {
    if (key) posthog.capture(event, props);
}