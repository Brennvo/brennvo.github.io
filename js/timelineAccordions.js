initializeAccordions();

/**
 * Utility to retrieve an accordion parent element from an inner child
 * @param {HTML Element} accordionChild -  a element that is a child of parent
 * element with an accordion-group id
 * @returns HTML element
 */
function getAccordionGroup(accordionChild) {
  if (!accordionChild || accordionChild instanceof HTMLElement === false) {
    throw new Error(`${accordionChild} is not a valid HTML element.`);
  }
  let curr = accordionChild;
  let id = accordionChild.getAttribute("id") || "";

  while (curr && !id.includes("accordion-group")) {
    curr = curr.parentElement;
    if (!curr) {
      throw new Error("Could not find parent accordion group");
    }
    id = curr.getAttribute("id") || "";
  }

  return curr;
}

/**
 * Utility to determine of an accordion is expanded or collapses
 * @param {HTML ELement} btn - accordion button
 * @returns boolean
 */
function isExpanded(btn) {
  return btn.getAttribute("aria-expanded") === "true" ? true : false;
}

/**
 * Utility to append an id to an element
 * @param {HTML Element} element - element to append an id to
 * @param {string} id - id to be appended to current element ids
 */
function appendId(element, id) {
  const currId = element.getAttribute("id");
  element.setAttribute("id", currId ? `${currId} ${id}` : id);
}

/**
 * Utility to return the accordion button and content elements
 * @param {HTML Element} accordionGroup - an element with an accordion-group id
 * @returns the accordion group's associated button and content elements
 */
function getAccordionItems(accordionGroup) {
  const button = accordionGroup.querySelector(".accordion-heading button");
  const content = accordionGroup.querySelector(".accordion-content");
  return [button, content];
}

function getBorderStyle() {
  const style = getComputedStyle(document.body);
  const borderColor = style.getPropertyValue("--text4");
  return borderColor;
}

/**
 * Expands an accordion
 * @param {HTML Element} accordionGroup - an element with an accordion-group id
 */
function expandAccordion(accordionGroup) {
  const [btn, content] = getAccordionItems(accordionGroup);
  btn.setAttribute("aria-expanded", true);
  content.style.display = "block";
}

/**
 * Collapses an accordion
 * @param {HTML Element} accordionGroup - an element with an accordion-group id
 */
function collapseAccordion(accordionGroup) {
  const [btn, content] = getAccordionItems(accordionGroup);
  btn.setAttribute("aria-expanded", false);
  content.style.display = "none";
}

/**
 * Toggles an accordion from being expanded and collapses
 * @returns void
 */
function toggleAccordion() {
  let accordionGroup;
  try {
    accordionGroup = getAccordionGroup(this);
  } catch (e) {
    console.log(e);
    return;
  }

  isExpanded(this)
    ? collapseAccordion(accordionGroup)
    : expandAccordion(accordionGroup);
}

/**
 * Initializes the accordions on the page by adding event listeners and
 * accessibility properties
 */
function initializeAccordions() {
  const accordions = document.querySelectorAll("#accordion-group");

  for (let i = 0; i < accordions.length; i++) {
    const currAccordion = accordions[i];
    const [btn, content] = getAccordionItems(currAccordion);
    // Add accordion properties
    const accordionBtnId = `accordionBtn${i}id`;
    const accordionContentId = `accordionContent${i}id`;
    appendId(btn, accordionBtnId);
    appendId(content, accordionContentId);
    btn.setAttribute("aria-controls", accordionContentId);
    content.setAttribute("aria-labelledby", accordionBtnId);

    // Add toggle functionality
    btn.addEventListener("click", toggleAccordion);
    //btn.addEventListener("click", toggleAccordion);

    if (i === 0) {
      expandAccordion(currAccordion);
    } else {
      collapseAccordion(currAccordion);
    }
  }
}
