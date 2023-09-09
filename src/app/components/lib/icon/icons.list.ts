export const etsSimpleIconList = ["bell", "dark-mode", "global", "logo", "search", "white-mode"] as const;
export const etsColoredIconList = ["english", "germany", "ukraine"] as const;
export const etsStrokeIconList = ["attach-off", "attach", "bag", "chart-vertical", "chart", "check-circle", "chevrons-left-arrows", "chevrons-right-arrows", "eye-off", "eye", "file-star", "file", "filter", "flag", "folder-starm", "folder", "gift", "grid-horizontal", "grid-vertical", "grid", "heart", "home", "inbox", "lock-off", "lock-on", "mail", "message", "photo-download", "photo-heart", "photo-send", "photo-upload", "photo", "settings-2", "settings", "shopping-cart", "star", "time", "user-round", "user-square", "video-file-2", "video-file-3"] as const;
export const etsIconList = [...etsSimpleIconList, ...etsColoredIconList, ...etsStrokeIconList] as const;