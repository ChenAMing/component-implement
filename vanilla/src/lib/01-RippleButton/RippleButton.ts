import "./style.css";

export default function RippleButton() {
  const div = document.getElementById("div-1");

  const btn = document.createElement("button");
  btn.id = "ripple-btn";
  btn.innerText = "CLICK ME";
  div!.appendChild(btn);

  const btnChildNodes = btn.childNodes;

  btn.onmousedown = (event: MouseEvent): void => {
    const span = document.createElement("span");
    span.className = "ripple-btn-ripple";
    span.style.top = event.clientY - btn.offsetTop + "px";
    span.style.left = event.clientX - btn.offsetLeft + "px";

    btn.appendChild(span);
  };

  btn.onmouseup = (): void => {
    setTimeout(() => {
      const span = document.getElementsByClassName(
        "ripple-btn-ripple"
      )[0] as HTMLElement;

      span.style.opacity = "0";

      setTimeout(() => {
        btn.removeChild(btnChildNodes[1]);
      }, 500);
    }, 260);
  };
}
