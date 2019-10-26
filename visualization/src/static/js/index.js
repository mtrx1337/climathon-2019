"usestrict";

function insertStreetListData(data) {
    let listItemTemplate = document.getElementById("list-item-template").content.childNodes[1].cloneNode(true);
    let streetList = document.getElementById("street-list");

    // init list of streets to sort by index value
    streetListUnsorted = [];
    function sortStreets(a, b) {
        return a.index - b.index;
    };

    for (street of data) {
        let newChild = listItemTemplate.cloneNode(true);
        let index = street['index'];
        let inner =
            newChild.firstElementChild.innerHTML
            .replace("%%item-heading%%", street["street-name"])
            .replace("%%item-ranking%%", index)
            //.replace("%%item-desc%%", street["description"])
            .replace("%%img-url1%%", street["image1"])
            .replace("%%img-url2%%", street["image2"])
            .replace("%%img-url3%%", street["image3"]);
        newChild.innerHTML = inner;
        streetListUnsorted.push(
            {
                newChild,
                index
            }
        );
    }

    let streetListSorted = streetListUnsorted.sort(sortStreets);

    for (street of streetListSorted) {
        streetList.appendChild(street.newChild);
    }
}

function serializeData (data) {
    let streetListUnsorted = [];
    for (street of data) {
        let details = JSON.parse(street['properties']['details'])[0];

        let streetName = street['properties']['name'];
        let index = street['properties']['happy_bike_index'];
        //let speedLimit = details['speed_limit'];
        let image1 = details['photos'][0];
        let image2 = details['photos'][1];
        let image3 = details['photos'][2];

        let stockphoto = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-p3YnCoUnFeQ%2FUaW_c7vRO2I%2FAAAAAAAAA0E%2FSw3_wo-Tv_E%2Fs1600%2FDSC02166.JPG&f=1&nofb=1"

        if (image1 != undefined) { image1 = image1['src'] } else { image1 = stockphoto };
        if (image2 != undefined) { image2 = image2['src'] } else { image2 = stockphoto };
        if (image3 != undefined) { image3 = image3['src'] } else { image3 = stockphoto };

        let streetObj = {
                "street-name": streetName,
                "index": index,
                //"description":
                "image1": image1,
                "image2": image2,
                "image3": image3,
        };

        streetListUnsorted.push(streetObj);
    }
    return streetListUnsorted
}

let url = "/static/geodata/lichtenberg.geojson";
fetch(url)
    .then(res => res.json())
    .then((out) => {
        let data = serializeData(out['features']);
        insertStreetListData(data);
    });
