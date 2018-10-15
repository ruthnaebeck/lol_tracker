# League of Legends Stats Tracker

## Development

### Riot Games API
- Sign up a developer account with Riot Games - https://developer.riotgames.com
- If you don't play League of Legends, you will need to download the game and create a Summoner
- Static data was downloaded from https://ddragon.leagueoflegends.com/cdn/dragontail-8.19.1.tgz

### Redis Server
To install Redis (on macOSX), run the following commands:
```
mkdir redis
cd redis
curl -O http://download.redis.io/redis-stable.tar.gz
tar xzvf redis-stable.tar.gz
cd redis-stable
make
make test
sudo make install
```
Start the Redis server with:
```
redis-server
```
Test if the Redis Server is working with the following. If it replies **PONG**, then it is good.
```
redis-cli ping
```
A full list of redis commands can be found at https://redis.io/commands

## Deployment
Deploy branch to Heroku:

```
git checkout -b deploy
git add -f 'public'
git commit -m 'add bundles for deploy'
git push -f heroku deploy:master
git checkout master
git branch -D deploy
```
