curriculum
==========

This is an dynamic cv base using AngularJS. You dont need to know anything about it to make a web curriculum vitae that has a static header and dynamic tabs with a neat effect (CSS transition).

You need yeoman and grunt for testing and deploying your work. Once they are set, just run grunt server and follow the instructions below to insert your own information. You can deploy this with grunt or just by uploading the dist folder after you ran "grunt build" command. There is also a very simple nodeserver file on root so you can deploy this as an app to heroku for example.

To insert your own information, navigate to app/views/

#### example of about.html:
```
<!DOCTYPE html>
  <h2>About me</h2>
  <br>
  <p>
      Here you can make a brief description about youreself</a>.
      <br><br>
      <h4>You can make lists like this</h4>
      <ul>
        <li>list element 1</li>
        <li>list element 2</li>

      </ul>
      <br>
      You can change this image just changing images/me.jpg to picture of you.
  </p>
  <br><br>
  <div class="photo-area">
      <img src='/images/me.jpg' class = "photoOfMe">
  </div>
  ```
