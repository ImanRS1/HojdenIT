export const fadeOut = {
  hidden:{
    opacity: 1,
  },
  show: {
    opacity: 0,
    transition:{
      duration: 0.5,
      delay: 1.6,
    },
  }
};

export const fadeOutNav = {
  hidden:{
    opacity: 1,
  },
  show: {
    opacity: 0,
    transition:{
      duration: 1.5,
     
    },
    display: "none"
  }
};

export const fadeIn = {
  hidden:{
    opacity: 0,
    y: -300,
  },
  show:{
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.15,
      delay: 1.1,
    },
  }
}

export const fadeInNav = {
  hidden: {
    x: 150,
    opacity: 0,
},
show: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
}
}

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
        display: "none"
    },
    show: {
        display: "flex",
        x: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: "easeOut" },
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
        transition: {duration: 0.55, ease: "easeOut"}
    }
};