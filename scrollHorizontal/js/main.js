gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".container").offsetWidth
    }
});

gsap.utils.toArray('.gun').forEach((el, i) => {
    console.log(i)
    gsap.from(el, {
        x: "100",
        duration: 2,
        opacity: 0,
        scrollTrigger: {
            trigger: "el",
            start: (i + 1) * 1920,
        }
    });
});
//# sourceURL=pen.js