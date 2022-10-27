## Endpoints with CACHE (REDIS)

Cache is very important in big applications when the data transfering is very slow.

Exists many strategies to implements cache, here I implemented in specific endpoint that list users from anywhere.

And when a new user be inserted the cache will be reseted. =}

It's a very very very simple project, just learning the concepts.

To run:

    -   Curl, Docker Docker and Compose installed
    -   Run npm run build
    -   Run docker-compose build --no-cache
    -   Run docker-compose up -d (-d is optional)
    -   Run: `curl localhost:3130/list` and see **Response TIME** many times
    -   Run: `curl localhost:3130/clean-cache` to reset cache

Technologies:

    -   Redis
    -   NodeJS
    -   Typescript
    -   ExpressJS
    -   IOREDIS
    -   Faker.js (to generate 5k registers in memory)