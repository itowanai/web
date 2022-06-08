fetch("http://localhost:5000/user", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": JSON.stringify({
    "username": "lola3",
    "firstName": "yura",
    "lastName": "steb",
    "password": "1234",
  })
}).then(response => { console.log(response); }).catch(err => { console.error(err); });


fetch("http://localhost:5000/login", {
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "body": JSON.stringify({
    "username": "lola2",
    "password": "1234",
  })
}).then(response => { console.log(response); }).catch(err => { console.error(err); });


fetch("http://localhost:5000/user/3", {
  "method": "PUT",
  "headers": {
    "content-type": "application/json"   
  },
  "body": JSON.stringify({
        "username": "lola228",
        "jwt":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjN9.qRIGze8YKgW-FTTjA6uiZQTH-H2Z6SwaAIlF5HrHR9A",
      })
}).then(response => { console.log(response); }).catch(err => { console.error(err); });