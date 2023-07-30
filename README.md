# CifradoSsr

### Generate Module
```sh
    ng g module [nameModule]
```

### Generate Component -Module
```sh
    ng g c [pathComponent]/[nameComponent] --module=[nameModule]
```
>Example -> `ng g c modules/client/Views/ItemsViews --style none --skip-tests`
* --skip-tests
* --style none

### Generate Component Standalone
```sh
    ng generate component shared/button --standalone  --skip-tests 
```
 
## DOCKER 

### Generate Docker image
```sh
    docker build -t cifrado-ssr-img .
```
### Refactore Docker image
```sh
    docker compose up --build -d
```
### Run Docker 
```sh
    docker run --name cifrado-ssr-app -d -it -p 80:80 cifrado-ssr-img
```
