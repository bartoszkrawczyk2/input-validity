const init = () => {
  console.log("init called");
};

document.addEventListener("click", () => {
  console.log("document click event");
});

init();

export { init };
