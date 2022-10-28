import json
import subprocess

def add(word):
  f = open("wordList.json", "r")
  jsondata = json.loads(f.read())
  f.close()
  if word not in jsondata["items"]:
    jsondata["items"].append(word)
    with open("wordList.json", "w") as outfile:
      json.dump(jsondata, outfile, indent=4, sort_keys=True )
    command = "py pushtogit.py"
    subprocess.call(command, shell=True)


while True:
  word = input("add a word: ")
  confirmSpelling = input("spelling correct for '" + word + "'?")
  if confirmSpelling.lower()=="y":
    add(word)