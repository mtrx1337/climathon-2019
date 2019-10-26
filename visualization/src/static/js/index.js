"usestrict";

function insertStreetListData(data) {
    let listItemTemplate = document.getElementById("list-item-template").content.childNodes[1].cloneNode(true);
    let streetList = document.getElementById("street-list");

    for (street of data) {
        let newChild = listItemTemplate.cloneNode(true);
        let inner =
            newChild.firstElementChild.innerHTML
            .replace("%%item-heading%%", street["street-name"])
            .replace("%%item-ranking%%", calculateIndex(street))
            .replace("%%item-desc%%", street["description"])
            .replace("%%img-url%%", street["img-url"]);
        newChild.innerHTML = inner;
        streetList.appendChild(newChild);
    }
}

function calculateIndex (data) {
    let indexObj = data["index"];
    let index = (indexObj["pollution"] * indexObj["jamming"] * indexObj["accidents"]) / data.length;
    return index;
}

data = [
    {
        "street-name" : "muster straße",
        "description" : "quam reiciendis sed similique occaecati accusantium quo. Ut quibusdam quia cum et. Molestias et et autem.",
        "index" : {
            "pollution" : 1.5,
            "jamming" : 1.3,
            "accidents" : 2.5,
        },
        "img-url" : "http://localhost:5000/static/img/test.png",
    },
    {
        "street-name" : "random straße",
        "description" : "similique quaerat vero nihil aut dignissimos voluptatem. Laboriosam officiis magni voluptas cumque blanditiis repellendus. Rem laborum dignissimos velit. Iure quia quisquam expedita veniam sed aut",
        "index" : {
            "pollution" : 1.3,
            "jamming" : 2.3,
            "accidents" : 1.8,
        },
        "img-url" : "http://localhost:5000/static/img/test.png",
    },

    {
        "street-name" : "ping pong straße",
        "description" : "nihil aut dignissimos voluptatem. Laboriosam officiis magni voluptas cumque blanditiis repellendus. Rem laborum dignissimos velit. Iure quia quisquam expedita veniam sed aut",
        "index" : {
            "pollution" : 2.1,
            "jamming" : 4.1,
            "accidents" : 0.8,
        },
        "img-url" : "http://localhost:5000/static/img/test.png",

    },

    {
        "street-name" : "ping pong straße",
        "description" : "voluptatem. Laboriosam officiis magni voluptas cumque blanditiis repellendus. Rem laborum dignissimos velit. Iure quia quisquam expedita aut",
        "index" : {
            "pollution" : 1.9,
            "jamming" : 1.4,
            "accidents" : 0.8,
        },
        "img-url" : "http://localhost:5000/static/img/test.png",
    },

    {
        "street-name" : "abc straße",
        "description" : "quam reiciendis sed similique occaecati accusantium quo. Ut quibusdam quia cum et. Molestias et et autem.",
        "index" : {
            "pollution" : 1.5,
            "jamming" : 1.3,
            "accidents" : 2.5,
        },
        "img-url" : "http://localhost:5000/static/img/test.png",
    },
    {
        "street-name" : "xyz straße",
        "description" : "similique quaerat vero nihil aut dignissimos voluptatem. Laboriosam officiis magni voluptas cumque blanditiis repellendus. Rem laborum dignissimos velit. Iure quia quisquam expedita veniam sed aut",
        "index" : {
            "pollution" : 1.3,
            "jamming" : 2.3,
            "accidents" : 1.8,
        },
        "img-url" : "http://localhost:5000/static/img/test.png",
    },

    {
        "street-name" : "asdfqwer straße",
        "description" : "nihil aut dignissimos voluptatem. Laboriosam officiis magni voluptas cumque blanditiis repellendus. Rem laborum dignissimos velit. Iure quia quisquam expedita veniam sed aut",
        "index" : {
            "pollution" : 2.1,
            "jamming" : 4.1,
            "accidents" : 0.8,
        },
        "img-url" : "http://localhost:5000/static/img/test.png",
    },

    {
        "street-name" : "ping pong straße",
        "description" : "voluptatem. Laboriosam officiis magni voluptas cumque blanditiis repellendus. Rem laborum dignissimos velit. Iure quia quisquam expedita aut",
        "index" : {
            "pollution" : 1.9,
            "jamming" : 1.4,
            "accidents" : 0.8,
        },
        "img-url" : "http://localhost:5000/static/img/test.png",
    },
]

insertStreetListData(data);
