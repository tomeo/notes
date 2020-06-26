# Git override executable bit

Override the executable bit of the added files. The executable bit is only changed in the index, the files on disk are left unchanged.
```
git add --chmod=+x -- entrypoint.sh
```

Run for all files:
```
find . -name '*.sh' | xargs git update-index --chmod=+x
```

## Documentation
* https://git-scm.com/docs/git-add#Documentation/git-add.txt---chmod-x