# LAB: Basic Auth Auction

Built an auction application that let's people bid on item

## Auth routes

A new user should be able to sign up. The `User` model should include email and
passwordHash.

* the signup route will be used to add new users

## Auction

The auction model has a reference to a user, title, description, quantity, and end date/time.

[ ] the POST route will be used to create a new auction
[ ] the get by id route will be used to get an auctions details (title, description, quantity, end date/time, populated user, a list of all bids)
[ ] the get route will be used to get a list of all auctions

## Bid

The bid model has a reference to an auction, a reference to a user, a price, a quantity, and accepted.

[ ] the POST route will be used to create a new bid (if an existing bid by the user already exists update instead)
[ ] the get by id will be used to get a bid details (populated auction, populated user, price, and quantity)
[ ] the delete route will be used to delete a bid

## Functionality

[ ] do not allow bids after an auction has ended
[ ] Every hour check for auctions that have ended (use a setInterval in your server.js). Create an algorithm to accept bids:
  [ ] HINT: Auction.find({ $lte: { end: Date.now() } })
  [ ] only entire bids can be accepted
  [ ] prioritize making the most money followed by not wasting
[ ] only users can:
  [ ] create and auction
  [ ] bid on an auction
[ ] BONUS: create a `Result` model that stores a reference to an auction, an array of references to bids, the sold
  quantity, and the sold price
[ ] BONUS: after accepting bids send an email to the creator of the auction with the results.

## Testing

[ ] `supertest` to test all routes

## Rubric

* 1 point for `User` model
* 2 points for password storage and comparison
* 2 points for signup route
* 2 points for basic auth middleware
* 1 point for `Auction` model
* 1 point for `Bid` model
* 1 point for accepting bids