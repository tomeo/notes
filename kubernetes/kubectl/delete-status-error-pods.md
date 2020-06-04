# Delete all status error pods

## Delete all pods with status error
```
kubectl get pods | grep Error | awk '{print $1}' | xargs kubectl delete pod
```

## Delete only specic pods with status error
```
kubectl get pods | grep 'podname.*Error' | awk '{print $1}' | xargs kubectl delete pod
```

## Explanation
1. `kubectl get pods` gets all pods
2. `grep Error` will filter those with status `Error`, `grep 'podname.*Error'` will match first `podname` and then `Error` in that order.
3. `awk '{print $1}'` will get filter only the pod names.
4. `xargs kubectl delete pod` takes the pod names as a parameter and deletes each of them