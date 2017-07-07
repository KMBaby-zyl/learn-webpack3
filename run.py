from subprocess import call
import time

start = time.time();
for x in range(0, 10):
    call(["node", "wp3/w3dist/index.js"]);

end = time.time();
print(end - start);

start = time.time();
for x in range(0, 10):
    call(["node", "wp2/w2dist/index.js"]);

end = time.time();
print(end - start);

