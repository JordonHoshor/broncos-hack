## Player Routes

- GET https://broncoshack.herokuapp.com/
- GET https://broncoshack.herokuapp.com/:id
- PUT https://broncoshack.herokuapp.com/:id/:position

## Sphero Routes

- GET https://broncoshack.herokuapp.com/sphero/roll
- GET https://broncoshack.herokuapp.com/sphero/roundtrip
- GET https://broncoshack.herokuapp.com/sphero/:speed/:direction/:time

## Inspiration

When faced with a buffet of hardware to hack on, we could hardly pick just one piece of tech. Instead, we decided to try our hands at hacking on Alexa, Sphero and Raspberry Pi.

## What it does

Through Alexa, we can query our own custom api for positions on our fantasy football roster, change roster spots, and also get player rankings based on projected points.

With Sphero, we created a visualization for which player we should start in our fantasy league. It calculates speed for the Spheros based on projected player points.

We had many ideas for the Raspberry Pi, but unfortunately ran into some challenges. Now our raspberry pi spins a motor to act as a finishing flag for our Sphero race.

## How we built it

We created a custom api using Node, Express, PostgreSQL, and Knex which we then deployed via heroku. We also created a Angular front end and used our API endpoints for custom Alexa responses and actions.

We then created routes for Spheros to run races in a straight line, also using Node and Express.

In Linux/Bash, we wrote the commands to spin our finish line motor.

## Challenges we ran into

Mainly it was functionality between devices. Originally we wanted the pi to act as a linux server for our api, but couldn't get that to coordinate with Alexa.

We also started Friday night by attempting to incorporate the Muse headband, but quickly discovered deployment could be an issue, so we decided to reframe and move on to other pieces of tech.

## Accomplishments that we're proud of

We worked really well together formulating ideas and breaking up tasks. Like many projects (especially hackathon projects) we ran up against walls and had to re-strategize to ensure we had something awesome to present.

Specifically, we're very proud of our Alexa integration with our custom API. As students at Galvanize, it was only 5 months ago that we could barely struggle through a "Hello World." To be able to knock out and deploy a back end, front end, and have Alexa affect both was a really awesome affirmation that we've learned a ton and are continuing to grow as developers.

## What we learned

It's still difficult for us to discern between jumping in and coding and doing the research to see if our goals can be accomplished in the given time frame. I think we found a good balance overall, but it's still a fine line to walk.

## What's next for Hacker's Delight

💤   then 💰💰💰💰💰
