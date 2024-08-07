#!/bin/bash

# PORODUCTION
git reset --hard
git checkout master
git pull origin master

npm i
npm run build
pm2 start process.config.js --env production




# DEVELOPMENT - bu VPS da ececution bo'lishini tushinishimiz kk. Ya'ni kimdir VPSga kirib manual o'zgarishlar qilgan bo'lsa qutilish uchun
# git reset --hard
# git checkout develop
# git pull origin develop

# npm i
# pm2 start process.config.js --env development