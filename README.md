# Dolly-Game
## Created as part of my Founders & Coders application

This game is based on one I created last year on Scratch, with similar design elements and mechanisms but fully coded. It's meant to have a quite retro, 80s arcade feel, and to celebrate a love of bad puns and Dolly Parton! The game can be played on desktop, laptop, or tablet.

### Features

- a clickable cutout of Dolly Parton that helps explain the rules of the game
- a 'start game' button which starts the playing of the song "Joelene" and causes the cartoon heads to float around the screen
- a counter which displays the current score and increments if Jolene is clicked, decrements if other women are clicked, and resets to 0 if Dolly's clone is clicked and the current score is positive
- a CSS heart-shaped encasing for the counter
- a function that makes Jolene disappear and then reappear five seconds later when she has been clicked
- a function that speeds up Jolene's movement every time she is clicked
- a function that hides the floating heads at the end of the song
- two different messages that appear at the end (one if the player's score is >= 5, or in it is < 5)
- a button at the end to replay the game

### Debugging

I overcame a number of hurdles when creating this game. Those included:

- spacing with the speech bubble and text in it. I have used media queries so that on most screens the text sits right in the middle of the speech bubble. However, it's not quite as nice as I would like and I'm sure there is a way to make this more adaptive that I have not yet figured out.
- spacing of the instructions. I had a lot of difficulty, despite coding it in a very similar way to that of my gallery on my website, getting the instructions to centre on the page. I eventually, after much inspection and trial and error, used padding on the left, though am sure there is a better way to do this that I have yet to learn.
- my biggest bug on this was in having the floating heads appear on 'start game'. I initially had the heads on display:none and then created a function which would change that to display:block. However, when I ran this function, all the heads would appear and then float to the top of the screen and never come back. I couldn't understand this as I'd changed nothing else about the code, and despite several suggestions at the support circle, I couldn't find a solution. I got around this by hiding the heads under the giant heart. It's not the most elegant solution and took a lot of adjustments for different screen widths, but it works and also gives a more interesting entrance than having them on display:none initially would have

### Reflections

I had a lot of fun making this game and am very proud of it, but with more time and coding experience I would have liked to include the following:

- mobile adaptation – I did look at doing this, but I started to realise quite quickly that this would require a lot more than adjusting the screen size and the game would be quite difficult to play on very small screens. I think doing this properly would require more thought.
- more interesting events with the floating heads – with more time, I would like to add in some additional features. Maybe the number of floating heads double every 30 seconds to make it harder, you have to click Jolene every 30 seconds or you lose all your points, changes of speed of movement for all the heads, etc. I think there could be a lot of ways to make the game more interesting with more time/experience
- having the Play Again button reload from the instructions, as at the moment you have to click Dolly and go through all the text in the bubble again. I did make a couple attempts at this, but I couldn't get them to work properly and realised it would also require resetting the counter which felt lower priority than improving some other elements of the game

I learned a lot of new skills in creating this, and hope you enjoy playing it!

