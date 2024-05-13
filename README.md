# My first React App

As a new web developper, there's many thing I have to learn. I have a roadmap as long as my arm but React is for me the real go to technology.
So here it is, my first React application. It's obviously a work in progress.

# What is this App

This is a small probabilistic bet game app. What the hell does in mean ? Let me explain. 

User enter a word as input, each second the app shuffle letters randomly, until the order of the letters match the word again. 
The goal is to guess how many tries will it take. 


Possible incomming features :

- the actual guessing mechanic. As of now, player can enter a word, but there's no second input for the player to guess how many tries will it make to match the word
- the app will calculate matching probabilities and render them (maybe on a graph if it's not to performance heavy) depending on how many letters and there occurence, giving an hint to the player on the average number of tries.
- Based on the previous idea : a point system where player can wait to guess the number of tries, but the closer it get to the average number of tries the lower the point player will win (is this a fun mechanic ?)
- The input word will be checked to see if it's an existing word (probably there's an API for that). Prevents player from just put random letters or 5 times the same letters. Allows to keap track of the datas for a given word. Wich leade to.
- A database with the word players used, wich could leading to statistic analysis of all sort : wich word is the most used, how many tries on average for each word, how many tries matches a valid anagram of the word, etc.

# Stack

Used:
- React.js
  
To be implemented later:
- Next.js 
- Tailwind
