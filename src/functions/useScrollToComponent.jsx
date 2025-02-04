import { useLocation, useNavigate } from "react-router-dom";

// FIXME: browser ko back button thichda feri redirect to previous page hudaina
const useScrollToComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToComponent = (id) => {
    const performScroll = () => {
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

    if(location.pathname !== '/') {
      navigate('/', {replace: true});
      setTimeout(performScroll, 500); // ensuring page loads
    } else {
      performScroll();
    }
  };
  return scrollToComponent;
};

export default useScrollToComponent;
