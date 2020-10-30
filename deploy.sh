#!/bin/bash

cd /home/ec2-user/deploy

mv -f /home/ec2-user/deploy/* /home/ec2-user

cd /home/ec2-user

npm install

pm2 start app.js