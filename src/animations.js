export const staggerAnimations = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.6,
        }
    }
};

export const fadeInFromRight = {
    hidden: {
        x: 150,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.35, ease: "easeOut" },
    }
};

export const fadeInFromLeft = {
    hidden: {
        x: -150,
        opacity: 0,
    },
    show: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.35, ease: "easeOut"}
    }
};