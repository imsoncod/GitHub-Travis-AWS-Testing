#!/bin/bash

cd /home/ec2-user/deploy

mv /home/ec2-user/deploy/* /home/ec2-user

cd

npm install

pm2 start app.js