# Interactive rebase

Fixup, squash / reword commits before merging a branch.

From branch:
```
git rebase -i master
```

A document called `git-rebase-todo` will open in your editor.

Change `pick` to `squash` for the commits you would like to squash. Squashing goes upwards:

```
pick    <hash> <message>
squash  <hash> <message>
squash  <hash> <message>
```

If you would like to alter the commit message change `pick` to `reword` and alter the message.

Save and close document and a new document will open in your editor. Edit your commit message, save and close.

If you have previously pushed your branch to a remote you must now force push
```
git push -f origin your/branch
```

You can now merge the branch with master, if that is what your goal was!