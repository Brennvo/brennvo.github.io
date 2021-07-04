initializeAccordions();

const style = getComputedStyle(document.body);
const borderColor = style.getPropertyValue("--text4");

function toggleAccordion() {
  const isExpanded =
    this.getAttribute("aria-expanded") === "true" ? true : false;
  this.setAttribute("aria-expanded", isExpanded ? "false" : "true");
  document.querySelector(
    `#${this.getAttribute("aria-controls")}`
  ).style.display = isExpanded ? "none" : "block";
}

function initializeAccordions() {
  const accordionHeaders = document.querySelectorAll(".timeline__card h3");
  for (let i = 0; i < accordionHeaders.length; i++) {
    const btnId = `accordion${i}id`;
    const contentId = `accordionContent${i}`;
    const currentHeader = accordionHeaders[i];
    // Accordion button
    const accordionButton = currentHeader.firstElementChild;
    accordionButton.addEventListener("click", toggleAccordion);
    accordionButton.setAttribute("aria-expanded", i === 0 ? "true" : "false");
    accordionButton.setAttribute("id", btnId);
    accordionButton.setAttribute("aria-controls", contentId);
    // Accordion content
    const accordionContent = currentHeader.nextElementSibling;
    accordionContent.setAttribute("id", contentId);
    accordionContent.setAttribute("aria-labelledby", btnId);
    accordionContent.style.display = i === 0 ? "block" : "none";
  }
}
