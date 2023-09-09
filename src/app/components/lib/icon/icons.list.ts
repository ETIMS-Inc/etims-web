export const etsSimpleIconList = ["bell", "dark-mode", "global", "logo", "message", "search", "white-mode"] as const;
export const etsColoredIconList = ["english", "germany", "ukraine"] as const;
export const etsStrokeIconList = ["attach-off", "attach", "bag", "mail", "photo-download", "photo-heart", "photo-send", "photo-upload", "photo", "settings-2", "settings", "shopping-cart", "star", "user-round", "user-square", "video-file-2", "video-file-3"] as const;
export const etsIconList = [...etsSimpleIconList, ...etsColoredIconList, ...etsStrokeIconList] as const;