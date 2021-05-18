## What would you add to your solution if you had more time?

I would look in to react-virtualized list for performance, adding multiple languages for accessibility, end-to-end tests if i feel like it would add more safety for regression.

## What would you have done differently if you knew this page was going to get thousands of views per second vs per week?

Probably look into making the heavy calculation on a server and use caching on the server to limit the ressources used and avoid calculation for every users.
I would have prioritized language too if there is thousands of view, chances are more than one languages will be good thing.

## What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it

`Nullish Coalescing` is pretty usefull to handle possible undefined value and for default values. [docs](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#nullish-coalescing)

```typescript
const asks: [number, number][] = jsonMessage.asks ?? []
```

## How would you track down a performance issue in production? Have you ever had to do this?

I rarely had to track performance issue in production. When i did we used logs from graphana and google cloud functions. I would try to pinpoint the function or network call that creates the bottleneck and then try to reproduce locally so i can fix it or find a different way of doing the same thing that solves the issue. if it's a frontend performance issue, i would inspect and try to understand what makes the frontend slow (list, network call, ...)

I usually try to reproduce the issue locally as soon as possible so it becomes easier to debug and try fixes.

## Can you describe common security concerns to consider for a frontend developer?

API key and secrets from environment variables is a pretty basic one. Everything around authentification is always one of the complex problem in apps on the frontend.

Depending on the product and how things are done, caching can create security concern (access to data supposed to be deleted for example). It's probably a backend problem but frontend would be the most susceptible to notice the caching problem.

## How would you improve the Kraken API that you just used?

I would add a timestamp in the messages sent to allow ordering by time.
If grouping was a built-in, maybe offer to pass a group value for grouping directly in the api that would be passed directly. That would reduce the quantity of data sent to the front and avoid calculation on the user's side.
Maybe some utils like the currency symbols so the developer won't need to look for even if with `.toLocalString()`, it becomes less of a problem with time.
