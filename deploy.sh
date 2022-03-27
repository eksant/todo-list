#!/bin/bash

git pull origin master
rm -rf node_modules

if [ -d "./build" ]; then
  rm -rf build
fi

yarn && yarn build
rm -rf /var/www/todo.seorangeksa.com/*
cp -R build/* /var/www/todo.seorangeksa.com