DevLink

A website where developers can connect to each other, share their profiles, work experience, knowledge and technologies.
Screen reader support enabled.

Installation

1. Fork the repository
2. Run the command 'npm i' to install all node modules(server)
3. Run the command 'cd client'
4. Run the command 'npm i' to install all node modules(client)
5. Run the command npm run dev
6. Check it on localhost:3000

Technologies used:

1. We have the MERN architecture for developing the website.
2. MongoDB Atlas is used as a cloud database for the website.
3. App level state management is done by making use of redux which reduces complexity of state management.
4. For authentication, we have made use of jwt tokens which expire after a certain time.
5. githubclientId and githubSecret are used as a part of authorizing imports of github repositories in our website.

Features:

1. Users can register, login on our website.
2. Users can add profile, edit profile, add/delete experience, add/delete education details. 
3. Users (even if not signed in) can view other developers' profiles, their skill set, education and experience.
4. Users (if signed in) can view all other developers' posts and like/unlike them and also comment on them(discussion thread, most recent comment at the top).
5. Users can remove only their own posts and comments.

References:

* Offical documentation for node, react, npm packages, jwt.
* Youtube
* MDN Docs
* Geeksforgeeks
* W3schools
* StackOverflow

Future Scope:

UI Screens:
