document.addEventListener("DOMContentLoaded", function () {
    const photoContainer = document.getElementById("photo-container");
    const labels = document.querySelectorAll(".label");
    const panZoom = panzoom(photoContainer, {
        zoomDoubleClickSpeed: 1, // Prevents double-click fast zoom
        minZoom: 1,
        maxZoom: 4,
        smoothScroll: false
    });

    panZoom.on("zoom", function (e) {
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
