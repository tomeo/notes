# Git config

```
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lol "log --graph --decorate --pretty=oneline --abbrev-commit"
git config --global alias.lola "log --graph --decorate --pretty=oneline --abbrev-commit --all"
git config --global fetch.prune true
git config --global init.defaultBranch master
git config --global core.excludesfile ~/.gitignore
echo ".tommy" >> ~/.gitignore
```

## Live dangerously
```
git config --global http.sslVerify false
```

## Sources
* http://blog.kfish.org/2010/04/git-lola.html