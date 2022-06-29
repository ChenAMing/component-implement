import "./style.css";

const app = document.getElementById("app");

const components = import.meta.globEager("./lib/*/*.ts");

for (let i = 1; i <= Object.keys(components!).length; i++) {
  const div = document.createElement("div");

  div.id = "div-" + i;

  app!.appendChild(div);
}

for (const path in components) {
  components[path].default();
}
