# Scale replicas

Set a new size for a Deployment, ReplicaSet, Replication Controller, or StatefulSet.

```
kubectl scale [--resource-version=version] [--current-replicas=count] --replicas=COUNT (-f FILENAME | TYPE NAME)
```

For example
```
kubectl scale --replicas=1 deployment/deployment-name
```

## Sources
* https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands#scale