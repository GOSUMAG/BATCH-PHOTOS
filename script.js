document.addEventListener("DOMContentLoaded", function () {
    console.log("Panzoom script is running");

    // Check if Panzoom is loaded correctly
    if (typeof Panzoom !== "undefined") {
        console.log("Panzoom is loaded correctly!");
    } else {
        console.error("Panzoom is NOT loading! Check your script source.");
        return;
    }

    const photoContainer = document.getElementById("photo-container");
    const labels = document.querySelectorAll(".label");

    // ✅ Initialize Panzoom
    const panZoom = Panzoom(photoContainer, {
        maxScale: 4,
        minScale: 1,
        contain: "outside"
    });

    // ✅ Enable zooming with mouse scroll
    photoContainer.addEventListener("wheel", panZoom.zoomWithWheel);

    // Function to check zoom level and show/hide labels
    function updateLabels() {
        let zoomLevel = panZoom.getScale(); // Get current zoom level
        console.log("Current zoom level:", zoomLevel);

        labels.forEach(label => {
            label.style.display = zoomLevel > 2 ? "block" : "none";
        });
    }

    // ✅ Listen for panzoom change (touch & mobile users)
    photoContainer.addEventListener("panzoomchange", updateLabels);

    // ✅ Listen for mousewheel zoom (desktop users)
    photoContainer.addEventListener("wheel", function () {
        setTimeout(updateLabels, 100); // Slight delay to ensure smooth update
    });

    // ✅ Listen for trackpad pinch zoom (desktop users)
    photoContainer.addEventListener("gesturechange", function () {
        setTimeout(updateLabels, 100);
    });
});
