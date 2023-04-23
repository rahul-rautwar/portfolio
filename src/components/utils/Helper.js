export function scrollToSection(sectionName) {
  let toSection = document.getElementById(sectionName);
  if (!toSection) return;
  toSection.scrollIntoView({ behavior: "smooth" });
}
