#!/bin/bash

cd /home/ec2-user/deploy

/home/ec2-user/.nvm/versions/node/v15.0.1/bin/npm install
/home/ec2-user/.nvm/versions/node/v15.0.1/bin/pm2 start app.js