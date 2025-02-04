const useScrollToComponentHere = () => {
    const performScroll = (id) => {
      const section = document.getElementById(id);
      if (section) {
        const offset = 70;
        const elementPosition =
          section.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };
    return performScroll;
}

export default useScrollToComponentHere;
