# Base Project

# Instalation

```sh
$ git clone https://github.com/base-react.git
$ cd base-react
$ yarn
$ yarn dev
```

# Build dist
```sh
$ yarn build-deploy
```
# Build docker image
```docker build --no-cache -t emr . ```

# Run docker image
``` docker run -p 80:80 emr ```
