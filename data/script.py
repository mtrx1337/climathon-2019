import pickle
dict = pickle.load( open( "data.json", "rb" ) )
print str(dict)[0:80]
print len(dict["source"]["data"]["features"])

