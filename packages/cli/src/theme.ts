export type ThemeColors = {
    primary: string;
    planMode: string;
    selection: string;
    thinking: string;
    success: string;
    error: string;
    info: string;
    background: string;
    surface: string;
    dialogSurface: string;
    thinkingBorder: string;
    dimSeparator: string;
};

export type Theme = {
    name: string;
    colors: ThemeColors;
};

const DRAGON_FOX: Theme = {
    name: "DragonFox",
    colors: {
        primary: "#56D6C2",
        planMode: "#CF8EF4",
        selection: "#89B4FA",
        thinking: "#CF8EF4",
        success: "#82E0AA",
        error: "#E74C5E",
        info: "#56D6C2",
        background: "#0D0D12",
        surface: "#1A1A24",
        dialogSurface: "#0A0A10",
        thinkingBorder: "#34344A",
        dimSeparator: "#4E4E66"
    }
};

const EMBER_FORGE: Theme = {
    name: "EmberForge",
    colors: {
        primary: "#FF8C42",
        planMode: "#FFC857",
        selection: "#E0521B",
        thinking: "#FFC857",
        success: "#C7E04F",
        error: "#FF4D4D",
        info: "#FFA552",
        background: "#2B0F0A",
        surface: "#451A12",
        dialogSurface: "#1C0907",
        thinkingBorder: "#6E2C1C",
        dimSeparator: "#9A4A30"
    }
};

const DEEP_OCEAN: Theme = {
    name: "DeepOcean",
    colors: {
        primary: "#27D7E8",
        planMode: "#5AB0FF",
        selection: "#1E6FB8",
        thinking: "#6FE3F5",
        success: "#3DE0A0",
        error: "#FF6B81",
        info: "#27D7E8",
        background: "#06223D",
        surface: "#0C3358",
        dialogSurface: "#04182B",
        thinkingBorder: "#1A4E7A",
        dimSeparator: "#3E73A0"
    }
};

const ROYAL_AMETHYST: Theme = {
    name: "RoyalAmethyst",
    colors: {
        primary: "#C77DFF",
        planMode: "#E0AAFF",
        selection: "#9D4EDD",
        thinking: "#E0AAFF",
        success: "#80FFCB",
        error: "#FF5C8A",
        info: "#A98CFF",
        background: "#240B36",
        surface: "#3A1556",
        dialogSurface: "#180623",
        thinkingBorder: "#572B7A",
        dimSeparator: "#8050A8"
    }
};

const JUNGLE_CANOPY: Theme = {
    name: "JungleCanopy",
    colors: {
        primary: "#B7E04F",
        planMode: "#E8C547",
        selection: "#5FA832",
        thinking: "#C8E68A",
        success: "#7FE05A",
        error: "#E8705A",
        info: "#52C7A0",
        background: "#14250D",
        surface: "#213B15",
        dialogSurface: "#0D1A08",
        thinkingBorder: "#3C5C28",
        dimSeparator: "#5E8540"
    }
};

const CRIMSON_NIGHT: Theme = {
    name: "CrimsonNight",
    colors: {
        primary: "#FF5D73",
        planMode: "#FF8FA3",
        selection: "#C9304A",
        thinking: "#FFA9B6",
        success: "#9BE08A",
        error: "#FF3B5C",
        info: "#FF7E94",
        background: "#1F0712",
        surface: "#360E1F",
        dialogSurface: "#15050C",
        thinkingBorder: "#5C2238",
        dimSeparator: "#8A3D58"
    }
};

const SLATE_INK: Theme = {
    name: "SlateInk",
    colors: {
        primary: "#7DD3FC",
        planMode: "#A5B4FC",
        selection: "#4B6BFB",
        thinking: "#93C5FD",
        success: "#6EE7B7",
        error: "#FB7185",
        info: "#7DD3FC",
        background: "#1E2530",
        surface: "#2C3543",
        dialogSurface: "#161C24",
        thinkingBorder: "#3F4B5C",
        dimSeparator: "#647082"
    }
};

const PARCHMENT_DAY: Theme = {
    name: "ParchmentDay",
    colors: {
        primary: "#0F766E",
        planMode: "#7C3AED",
        selection: "#2563EB",
        thinking: "#9333EA",
        success: "#15803D",
        error: "#DC2626",
        info: "#0E7490",
        background: "#F4EFE3",
        surface: "#E7DFCC",
        dialogSurface: "#FBF8EF",
        thinkingBorder: "#C9BD9F",
        dimSeparator: "#9A8C6E"
    }
};

export const THEMES: Theme[] = [
    DRAGON_FOX,
    EMBER_FORGE,
    DEEP_OCEAN,
    ROYAL_AMETHYST,
    JUNGLE_CANOPY,
    CRIMSON_NIGHT,
    SLATE_INK,
    PARCHMENT_DAY
];

export const DEFAULT_THEME: Theme = DRAGON_FOX;

