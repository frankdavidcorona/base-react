# EMR System

EMR platform: http://emr.samsystems.io/

# Instalation

```sh
$ git clone git@github.com:samsystems/emr.git
$ cd emr
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
