## getting start

## layer

## infra

## mini-kube dev

```shell
  skaffold dev -p api --cleanup=false

  # prune
  # skaffold dev --no-prune=false --cache-artifacts=false --cleanup=false -p api

  # image 정리
  docker image prune -a
  docker builder prune -a
```

## migration

### example

npm run typeorm:generate -- migration/createUser
