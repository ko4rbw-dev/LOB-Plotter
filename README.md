# LOB-Plotter
#foxhunt, #RDF, #direction_finding

This project is a PWA that allows users to plot **Lines of Bearing (LOBs)** on a map, either from their current device location or from manually entered coordinates. It can also calculate and display approximate intersections (cuts/fixes) when multiple LOBs are plotted.

---

## Features
- Interactive map using **Leaflet.js**
- Plot LOBs from:
  - Current geolocation (device GPS)
  - Manually entered location and bearing
- Support for multiple LOBs
- Intersection estimation when LOBs cross
- Works offline with **Service Worker**
- Installable on mobile devices via **Add to Home Screen**

---

## Files
- `index.html` → Main app with Leaflet map & LOB plotting logic
- `manifest.json` → PWA manifest with app name, icons, and theme colors
- `sw.js` → Service worker for offline caching
- `leaflet.css` & `leaflet.js` → Leaflet map library files

---

## How to Run Locally
1. Download or clone this repo.
2. Open `index.html` in a web browser.
3. The map and LOB plotting features should work immediately.

---

## Install on iPhone
1. Open Safari and navigate to your GitHub Pages URL.
2. Tap the **Share** button.
3. Select **Add to Home Screen**.
4. The app will now appear as a fullscreen app icon and can run offline.

---

## Future Enhancements
- Export/import saved LOBs
- Sharing fixes with teammates
- Advanced mapping layers
- UI polish for easier input

---

Developed as a lightweight MVP for field plotting of LOBs.
