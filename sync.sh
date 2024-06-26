git add .
git commit -m "Automated commit for $(date +'%d-%m-%Y')"
git push

yarn build
ssh $1 'rm /root/web/build -rf'
cp package.json yarn.lock build/
rsync build $1:/root/web/ -r
ssh $1 'cd /root/web/build; yarn install --frozen-lockfile; pm2 restart 0'
