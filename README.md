<h1>RealTime Chat Application - iDiscuss Chat App</h1>

<ul>
<li>It is an scalable Realtime Chatting Application that provides an interface for multiple user chatting at the same time.</li>
<li>FrontEnd Technologies- HTML, CSS</li>
<li>BackEnd Technologies- JavaScript, Node.js</li>
<li>Used Socket.io module for a two-way connection between client and server.</li>
<li>FrontEnd includes a navigation bar, Chat window and a form submit button for sending the messages.</li>
<li>HTML has been used for preparing the structure of application.</li>
<li>CSS has been used for styling the application.</li>
<li>Added Client sided JavaScript for the purpose of playing with DOM elements.</li>
<li>First of all stored all the DOM elements in a respectives JS variable.</li>
<li>Used Audio file which gives notification on receiving the messages.</li>
<li>Everytime a new user tries to join, first of all ask his/her name and let the server know.</li>
<li>If a new user joins, receive the event from the server using eventListner.</li>
<li>Receive message from server using receive function.</li>
<li>If a user leaves the chat, tell all the other users that this user has left the chat.</li>
<li>Server Side JavaScript will handle the Socket IO connections.</li>
<li>If a new user joins, let the other users connected with server know.</li>
<li>If someone sends the message, broadcast it to other people.</li>
<li>If someone leaves the chat, let others know.</li>
</ul>

# Important 
<ul>
<li> Dockerfile is added.</li>
<li> Github ci/cd workflow added which automatically deploys this app on heroku, as soon as push to main happens. </li>
</ul>

# See App
https://enigmatic-woodland-98672.herokuapp.com/

# Process to run the app
<ol>
  <li> run <b>node index.js</b>
  <li> Install the extension 'live server' for Vs Code. Extension Id - <b>ritwickdey.liveserver </b>
  <li> After the extension gets installed navigate to index.html and open it to edit.
  <li> Right click anywhere in the file <b>index.ejs</b> and from the menu that appears select <b> Open with Live server </b>
  <li> A instance of the application will appear in the browser. 
  <li> Copy the url from the address bar and open another instance in another tab or in incognito or on another browser.
  <li> <b> If you get cors error, need to install proper extension in firefox for enabling cors.</b>
</ol>


![Screenshot (18)](https://github.com/rvsatyam2000/Chat_Application/blob/main/src/Screenshot1.png)

![Screenshot (19)](https://github.com/rvsatyam2000/Chat_Application/blob/main/src/Screenshot2.png)

![Screenshot (20)](https://github.com/rvsatyam2000/Chat_Application/blob/main/src/Screenshot3.png)
