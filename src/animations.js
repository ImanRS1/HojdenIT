export const scrollReveal = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  
    show: {
      opacity: 1,
      scale: 1.0,
      transition: {
        duration: 0.5,
      },
    },
  };

export const staggerAnimations1 = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.6,
        }
    }
};

export const staggerAnimations2 = {
    hidden: {},
    show: {
        transition: {
          staggerChildren: 0.5,
        }
    }
}

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