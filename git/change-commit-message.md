# Change git commit message

## Most recent commit
### If the commit has not been pushed
```
git commit --amend -m "New commit message."
```

### If the commit has been pushed
Don't do this if there is any risk at all that someone else has already pulled your commit.

```
git commit --amend -m "New commit message."
git push --force branch-name
```

## Sources
* https://linuxize.com/post/change-git-commit-message/