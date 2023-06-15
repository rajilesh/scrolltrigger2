

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Configure ScrollTrigger
ScrollTrigger.defaults({
  markers: true, // Set to 'true' to see ScrollTrigger markers (for debugging)
});

// Section Pinning
gsap.utils.toArray(".section").forEach((section) => {
    // Check if section has horizontal scrolling
    if (section.dataset.type === "horizontal") {
      const cards = section.querySelector(".section__cards");
      const card = section.querySelector(".section__card");
  
      const numSections = cards.length - 1;
      const snapVal = 1 / numSections;
  
      gsap.to(cards, {
        x: () => {
          return -cards.scrollWidth + card.offsetWidth;
        },
        ease: "none",
        scrollTrigger: {
        //   trigger: section,

        //   trigger: '.horizontal_section_wrappera',
        // start: "top bottom",
        // end: "+=200",
  
        start: 'top top',
        end: 'bottom bottom',
        //   start: () => "center center",
        //   end: () => `+=${cards.scrollWidth - card.offsetWidth}`,

        // end: "+=300",
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 0,
        //   pinSpacing: false,
  
          snap: {
            snapTo: 1 / (4 - 1),
            duration: 0.1,
            delay: 0.1,
            ease: "power1.inOut"
          }
        }
      });
      // Use standard vertical scroll pinning
    } else {
      ScrollTrigger.create({
        // markers: true,
        trigger: section,
        start: () => "top top",
        pin: true,
        anticipatePin: 1
      });
    }
  });
  