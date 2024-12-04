import { useEffect } from "react";

const useScrollFade = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Para que a animação ocorra apenas uma vez
          }
        });
      },
      { threshold: 0.1 } // Ativa quando 10% do elemento está visível
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Limpa o observer ao desmontar
  }, []);
};

export default useScrollFade;
