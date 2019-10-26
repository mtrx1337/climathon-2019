# written by Manuel Renz

import json

with open('planning-sections-all-new.json') as json_file:
  data = json.load(json_file)
  # iterate through each page - last page only has 9 entries
  for i in range(0, len(data)-1):
    # iterate through each entry in each page
    for j in range(0, 10):
      print(data[i]['results'][j]['details'][0]['daily_traffic'])

  # iterate through last page
  for j in range(0, 8):
    print(data[257]['results'][j]['details'][0]['daily_traffic'])