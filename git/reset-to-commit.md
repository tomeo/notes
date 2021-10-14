# Reset to commit

On the server, move the cursor back to the last known good commit:
```
git push -f origin <last_known_good_commit>:<branch_name>
```

Locally, do the same:
```
git reset --hard <last_known_good_commit>
```