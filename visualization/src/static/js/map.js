const {DeckGL, GeoJsonLayer} = deck;

let accidents = {};
let fatalities = {};
let year = -1;

const deckgl = new deck.DeckGL({
    viewState: {
        latitude: 52.5168627,
        longitude: 13.4059852,
        zoom: 8,
        pitch: 0,
        minZoom: 2,
        maxZoom: 20
    },
    container: 'map',
    mapboxApiAccessToken: 'pk.eyJ1IjoibXRyeCIsImEiOiJjazI3OWFoMXIxYXYzM2NxbTgwaHFhbDZjIn0.1P8rNzTo4SLXlnGVERqh7Q',
    mapStyle: 'mapbox://styles/mapbox/dark-v10',
    pickingRadius: 5,
    layers: []
});

// Update deck.gl layers
function redraw() {

    const layers = [
        new GeoJsonLayer({
            id: 'geojson',
            data: '/static/geodata/bezirksgrenzen.geojson', // TODO switch out for actual data
            opacity: 0.8,
            stroked: true,
            filled: true,
            extruded: false,
            wireframe: true,
            getLineColor: getLineColor,
            getLineWidth: 3,
        }),
    ];

    deckgl.setProps({layers});
}

function getKey({state, type, id}) {
    return `${state}-${type}-${id}`;
}

function getLineColor(f) {
    if(f.properties.providerId === 0) {
        return [247,247,247]
    } else if (f.properties.providerId === 1) {
        return [239,138,98]
    }
}

redraw()
