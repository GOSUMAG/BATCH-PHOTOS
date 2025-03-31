document.addEventListener("DOMContentLoaded", function () {
    console.log("Panzoom script is running");

    // Check if Panzoom is loaded correctly
    if (typeof Panzoom !== "undefined") {
        console.log("Panzoom is loaded correctly!");
    } else {
        console.error("Panzoom is NOT loading! Check your script source.");
        return; // Stop execution if Panzoom isn't available
    }

    const photoContainer = document.getElementById("photo-container");
    const labels = document.querySelectorAll(".label");

    // ✅ Initialize Panzoom with correct syntax
    const panZoom = Panzoom(photoContainer, {
        maxScale: 4,
        minScale: 1,
        contain: "outside"
    });

    // ✅ Enable zooming with mouse scroll
    photoContainer.addEventListener("wheel", panZoom.zoomWithWheel);

    // ✅ Track zoom changes and show/hide labels
    photoContainer.addEventListener("panzoomchange", function (event) {
        let zoomLevel = event.detail.scale;
        console.log("Current zoom level:", zoomLevel);

        labels.forEach(label => {
            label.style.display = zoomLevel > 2 ? "block" : "none";
        });
    });
});
