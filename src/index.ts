const validityMessages = {
  badInput: "message-bad-input",
  customError: "message-custom-error",
  patternMismatch: "message-pattern-mismatch",
  rangeOverflow: "message-range-overflow",
  rangeUnderflow: "message-range-underflow",
  stepMismatch: "message-step-mismatch",
  tooLong: "message-too-long",
  tooShort: "message-too-short",
  typeMismatch: "message-type-mismatch",
  valid: "message-valid",
  valueMissing: "message-value-missing",
} as const;

const getMessage = (input: HTMLInputElement) => {
  let msg: string | null = null;

  for (const key in input.validity) {
    if (input.validity[key as keyof ValidityState]) {
      msg = input.getAttribute(validityMessages[key as keyof ValidityState]);
      break;
    }
  }

  return msg || input.validationMessage;
};

document.addEventListener(
  "invalid",
  (e) => {
    if (!(e.target instanceof HTMLInputElement)) return;
    e.target.setAttribute("data-dirty", "true");

    const selector = e.target.getAttribute("validation-message");
    if (!selector) return;
    e.preventDefault();

    const messageEl = document.querySelector(selector);
    if (!messageEl) return;

    messageEl.textContent = getMessage(e.target);
  },
  true
);

window.addEventListener("input", (e) => {
  if (!(e.target instanceof HTMLInputElement)) return;

  if (!e.target.getAttribute("data-dirty")) return;

  const selector = e.target.getAttribute("validation-message");
  if (!selector) return;

  const messageEl = document.querySelector(selector);
  if (!messageEl) return;

  messageEl.textContent = getMessage(e.target);
});

const init = () => {
  const sameAsElements = document.querySelectorAll("[pattern-same-as]");
  sameAsElements.forEach((targetElement) => {
    const sourceElementSelector = targetElement.getAttribute("pattern-same-as");
    if (!sourceElementSelector) return;

    const sourceElement = document.querySelector(sourceElementSelector);
    if (!sourceElement) return;

    sourceElement.addEventListener("input", (e) => {
      if (!(e.target instanceof HTMLInputElement)) return;
      targetElement.setAttribute(
        "pattern",
        e.target.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
      );
    });
  });
};

init();

export { init };
