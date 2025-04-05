document.addEventListener("DOMContentLoaded", function () {
    console.log("Panzoom script is running");

    if (typeof Panzoom !== "undefined") {
        console.log("Panzoom is loaded correctly!");
    } else {
        console.error("Panzoom is NOT loading! Check your script source.");
        return;
    }

    const photoContainer = document.getElementById("photo-container");
    const labels = document.querySelectorAll(".label");
    const zoomThreshold = 2; // When to switch from bubble to rectangle

    // ✅ Initialize Panzoom
    const panZoom = Panzoom(photoContainer, {
        maxScale: 4,
        minScale: 1,
        contain: "outside"
    });

    // ✅ Enable zooming with mouse scroll
    photoContainer.addEventListener("wheel", panZoom.zoomWithWheel);

    function updateLabelsVisibility() {
        let zoomLevel = panZoom.getScale();
        console.log("Current zoom level:", zoomLevel);

        labels.forEach(label => {
            if (zoomLevel > zoomThreshold) {
                label.classList.add("zoomed"); // Convert to rectangle
                label.style.fontSize = "1vw"; // Show text
                
            } else {
                label.classList.remove("zoomed"); // Keep as bubble
                label.style.fontSize = "0px"; // Hide text
            }
        });
    }

    photoContainer.addEventListener("panzoomchange", updateLabelsVisibility);
    photoContainer.addEventListener("wheel", () => setTimeout(updateLabelsVisibility, 100));
    photoContainer.addEventListener("gesturechange", () => setTimeout(updateLabelsVisibility, 100));
});
