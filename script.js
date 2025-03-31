document.addEventListener("DOMContentLoaded", function () {
    const photoContainer = document.getElementById("photo-container");
    const labels = document.querySelectorAll(".label");

    // Check if Panzoom is loading
    console.log("Panzoom script is running");

    // Initialize Panzoom
    const panZoom = panzoom(photoContainer, {
        zoomDoubleClickSpeed: 1,
        minZoom: 1,
        maxZoom: 4,
        smoothScroll: false
    });

    // Log zoom level changes
    panZoom.on("zoom", function () {
        let zoomLevel = panZoom.getTransform().scale;
        console.log("Current zoom level:", zoomLevel);

        // Show labels when zoom level > 2
        labels.forEach(label => {
            if (zoomLevel > 2.0) {
                label.style.display = "block";
            } else {
                label.style.display = "none";
            }
        });
    });
});
