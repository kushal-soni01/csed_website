import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";
import "./Sponsor.css";

gsap.registerPlugin(Observer);

export default function InfiniteScrollHorizontal({
	width = "100%",
	maxHeight = "20rem",
	negativeMargin = "-0.5em",
	items = [],
	itemMinWidth = 150,
	isTilted = false,
	tiltDirection = "left",
	autoplay = false,
	autoplaySpeed = 0.5,
	autoplayDirection = "right",
	pauseOnHover = false,
}) {
	const wrapperRef = useRef(null);
	const containerRef = useRef(null);

	const getTiltTransform = () => {
		if (!isTilted) return "none";
		return tiltDirection === "left"
			? "rotateY(20deg) rotateZ(-10deg) skewY(10deg)"
			: "rotateY(20deg) rotateZ(10deg) skewY(-10deg)";
	};

	useEffect(() => {
		const container = containerRef.current;
		if (!container || items.length === 0) return;

		const divItems = gsap.utils.toArray(container.children);
		if (!divItems.length) return;

		const firstItem = divItems[0];
		const itemStyle = getComputedStyle(firstItem);
		const itemWidth = firstItem.offsetWidth;
		const itemMarginLeft = parseFloat(itemStyle.marginLeft) || 0;
		const totalItemWidth = itemWidth + itemMarginLeft;
		const totalWidth = totalItemWidth * items.length;

		const wrapFn = gsap.utils.wrap(-totalWidth, totalWidth);

		divItems.forEach((child, i) => {
			const x = i * totalItemWidth;
			gsap.set(child, { x });
		});

		const observer = Observer.create({
			target: container,
			type: "wheel,touch,pointer",
			preventDefault: true,
			onPress: ({ target }) => (target.style.cursor = "grabbing"),
			onRelease: ({ target }) => (target.style.cursor = "grab"),
			onChange: ({ deltaX, isDragging, event }) => {
				const d = event.type === "wheel" ? -deltaX : deltaX;
				const distance = isDragging ? d * 5 : d * 10;
				divItems.forEach((child) => {
					gsap.to(child, {
						duration: 0.5,
						ease: "expo.out",
						x: `+=${distance}`,
						modifiers: {
							x: gsap.utils.unitize(wrapFn),
						},
					});
				});
			},
		});

		let rafId;
		if (autoplay) {
			const directionFactor = autoplayDirection === "right" ? 1 : -1;
			const speedPerFrame = autoplaySpeed * directionFactor;

			const tick = () => {
				divItems.forEach((child) => {
					gsap.set(child, {
						x: `+=${speedPerFrame}`,
						modifiers: {
							x: gsap.utils.unitize(wrapFn),
						},
					});
				});
				rafId = requestAnimationFrame(tick);
			};

			rafId = requestAnimationFrame(tick);

			if (pauseOnHover) {
				const stopTicker = () => rafId && cancelAnimationFrame(rafId);
				const startTicker = () => (rafId = requestAnimationFrame(tick));

				container.addEventListener("mouseenter", stopTicker);
				container.addEventListener("mouseleave", startTicker);

				return () => {
					observer.kill();
					stopTicker();
					container.removeEventListener("mouseenter", stopTicker);
					container.removeEventListener("mouseleave", startTicker);
				};
			} else {
				return () => {
					observer.kill();
					rafId && cancelAnimationFrame(rafId);
				};
			}
		}

		return () => {
			observer.kill();
			if (rafId) cancelAnimationFrame(rafId);
		};
	}, [
		items,
		autoplay,
		autoplaySpeed,
		autoplayDirection,
		pauseOnHover,
		isTilted,
		tiltDirection,
		negativeMargin,
	]);

	return (
		<>
			<style>
				{`
        .infinite-scroll-wrapper {
          max-height: ${maxHeight};
          width: ${width};
        }

        .infinite-scroll-container {
          height: 100%;
        }

        .infinite-scroll-item {
          min-width: ${itemMinWidth}px;
          margin-left: ${negativeMargin};
        }
        `}
			</style>

			<div className="infinite-scroll-wrapper" ref={wrapperRef}>
				<div
					className="infinite-scroll-container"
					ref={containerRef}
					style={{
						transform: getTiltTransform(),
					}}
				>
					{items.map((item, i) => (
						<div className="infinite-scroll-item" key={i}>
							{item.content}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
