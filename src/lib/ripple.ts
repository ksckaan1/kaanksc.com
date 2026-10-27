const RIPPLE_TARGET = "a, button";

/** Delegated Material 3 ripple: one listener covers every link and button. */
export function ripple(event: PointerEvent) {
	if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

	const target = (event.target as Element | null)?.closest<HTMLElement>(RIPPLE_TARGET);
	if (!target || target.hasAttribute("data-no-ripple")) return;

	const rect = target.getBoundingClientRect();
	const style = getComputedStyle(target);
	if (style.position === "static") target.style.position = "relative";
	if (style.overflow !== "hidden") target.style.overflow = "hidden";

	const size = Math.max(rect.width, rect.height) * 2;
	const layer = document.createElement("span");
	layer.className = "ripple";
	layer.style.width = layer.style.height = `${size}px`;
	layer.style.left = `${event.clientX - rect.left - size / 2}px`;
	layer.style.top = `${event.clientY - rect.top - size / 2}px`;
	layer.addEventListener("animationend", () => layer.remove());
	target.appendChild(layer);
}
