#!/bin/bash

cd /home/ec2-user/deploy

npm install

pm2 start app.js