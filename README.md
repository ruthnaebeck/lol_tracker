# League of Legends Stats Tracker

## Deploy notes for Heroku

```
git checkout -b deploy
git add -f "public"
git commit -m 'add bundles for deploy'
git push -f heroku deploy:master
git branch -D deploy
```

## Challenge Questions

### Lessons learned
- React Router changed a lot from v3 to v4. A lot of breaking changes from the way I was use to. There were so many complaints online about v4, I decided to use v3.
- I should have completed the backend api calls first. I was highly distracted with re-learning things about React. I started playing around with design features and lost track of time.
- Doing this challenge was very fun (more fun than my current job).

### Different approach
If I had to do this all over again, I would probably leave out React Router and Redux. I haven't touched React in over a year, and re-learning all of these technologies took a lot of time.

### Handling a production application with rate limiting on 3rd party API
In a production environment, you could make use of a throttling queue to ensure API calls are not over the limit. Information on your API calls are returned in the HTTP headers and response codes. I searched online and there are npm packages for NodeJS to assist with this. A pretty popular one is limiter - 
https://www.npmjs.com/package/limiter

Additionally, you could cache frequent calls for the same data. The Riot Games developer website gives an example of caching the stats of pro players. 

### Designing a solution to work on production at scale 
I have no experience in this area but I've seen Datadog customers use cloud providers such as AWS to implement services like AutoScaling. This automatically spins up additional EC2 or Fargate (Container) instances based on configurations which can be set to monitor traffic.

Additionally, the use of microservices is a way to break up your application by services. This aids in continuous delivery of larger applications. If services are separate from each other, parts of the code can be deployed without negatively impacting other services.
