#!/bin/bash

if [ -n "$USERNAME" && -n "$PASSWORD" ]; then
  echo "Installing cf CLI"
  curl -L "https://packages.cloudfoundry.org/stable?release=linux64-binary&source=github" | tar -zx
  chmod +x ./cf
  echo "Done install cf CLI"

  CF_USERNAME="$USERNAME"
  CF_PASSWORD="$PASSWORD"
  CF_ORGANIZATION="suchmokuo"
  CF_SPACE="development"

  ./cf api https://api.run.pivotal.io
  ./cf login --u $CF_USERNAME --p $CF_PASSWORD --o $CF_ORGANIZATION --s $CF_SPACE
  ./cf push
else
  echo "Skip deploy because USERNAME or PASSWORD are empty"
  exit 1
fi