particlesJS("background", {
    
    particles: {
        number: {
            value: 15,// Number of particles
            density: {
                enable: true, // Enable or disable the particle density effect.
                value_area: 300, // Area where particles are distributed
            }
        },
    
        color: {
            value: "#FFFFFF", // Particle color
        },

        shape: {
            type: "circle", // Shape type
        },

        opacity: {
            value: 0.8, // Base particle opacity
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },

        size: {
            value: 5, // Base size of particles
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },

        // Connecting lines
        line_linked: {
            enable: true,
            distance: 150, // Maximum connection length
            color: "#FFFFFF",
            opacity: 0.4,
            width: 1,
        },

        // Particle movement
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: "bounce", // Behavior our of canvas
            bounce: false,
        }
    },

    // Interactivity settings
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true, // Enable interactivity
                mode: "repulse"
            },

            onclick: {
                enable: true,
                mode: "push",
            },

            resize: true, // Resize animation on window resize
        },
    },

    // Detect Retina displays
    retina_detect: true

})