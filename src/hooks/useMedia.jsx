import { useMediaQuery } from "react-responsive";

function useMedia() {
  const isMobile = useMediaQuery({ query: "(max-width: 767.99px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1440px)" });
  
  return { isMobile, isTablet, isDesktop };
}

export default useMedia;
