import requests
import pickle

dict = {
	"source": {
	"type": "geojson",
	"data": {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"geometry": {
				"type": "MultiLineString",
				"coordinates": [0, 0]
			},
			"properties": {
				"title": "",
				}
		}]
	}
	}
}


try: 
	for i in range(1, 260): 
		r = requests.get("https://api.fixmyberlin.de/api/planning-sections?page=" + str(i))
		json = r.json()
		for result in json["results"]:
			if (result["details"][0]["happy_bike_index"] < 2.5): 
				print result["details"][0]["happy_bike_index"], result["borough"]
				dict["source"]["data"]["features"] = dict["source"]["data"]["features"] + [{"properties": {"happy_bike_index": result["details"][0]["happy_bike_index"],"name": result["name"], "bezirk": result["borough"], "street_category": result["street_category"], "details": result["details"]}, "type": "MultiLineString", "coordinates": [result["geometry"]["coordinates"][0], result["geometry"]["coordinates"][1]]}]
except: 
	print "Fehler"
finally: 
	pickle.dump(dict, open("data.json", "wb" ))
