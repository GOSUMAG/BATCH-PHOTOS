document.addEventListener("DOMContentLoaded", function () {
    const photoContainer = document.getElementById("photo-container");
    const labels = document.querySelectorAll(".label");

    // Initialize Panzoom for zoom & pan functionality
    const panZoom = panzoom(photoContainer, {
        zoomDoubleClickSpeed: 1, // Prevents double-click fast zoom
        minZoom: 1,
        maxZoom: 4,
        smoothScroll: false
    });

    // Show labels only when zoom level > 2
    panZoom.on("zoom", function () {
        let zoomLevel = panZoom.getTransform().scale;

        labels.forEach(label => {
            if (zoomLevel > 2) {
                label.style.display = "block";
            } else {
                label.style.display = "none";
            }
        });
    });
});
