export const scrollTo = (element: HTMLElement) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: element.offsetTop,
  });
};
