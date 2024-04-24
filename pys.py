from maths import main
import json
import sys

# print(json.dumps(greet(sys.argv[1])))
print(json.dumps(sys.argv))
print(json.dumps(main(sys.argv[1],sys.argv[2],sys.argv[3])))