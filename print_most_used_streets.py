# written by Manuel Renz

import json
import collections

mapping = collections.OrderedDict()
street_name = []
daily_traffic = []

with open('planning-sections-all-new.json') as json_file:
  data = json.load(json_file)
  # iterate through each page - last page only has 9 entries
  for i in range(0, len(data)-1):
    # iterate through each entry in each page
    for j in range(0, 10):
      mapping[data[i]['results'][j]['name']] = data[i]['results'][j]['details'][0]['daily_traffic']
      daily_traffic.append(data[i]['results'][j]['details'][0]['daily_traffic'])

  # iterate through last page
  for j in range(0, 8):
    daily_traffic.append(data[257]['results'][j]['details'][0]['daily_traffic'])

#data.sort(key=lambda x: x[i]['results'][j]['details'][0]['daily_traffic'], reverse = True)

#mapping.sort(reverse = True)
daily_traffic.sort(reverse = True)

#for k in sorted(mapping.keys()):
#  print(k + ", " + mapping[k])

cnt = 0
for k in sorted(mapping.items(), key=lambda item: item[1], reverse = True):
  if cnt > 10:
    break
  print(k)
  cnt += 1

#for i in range(0,10):
#  print(daily_traffic[i])