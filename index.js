let posts = [
    {
        id: 1,
        name: "Vincent van Gogh",
        username: "vincey1853",
     
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        isimg:true,
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        id: 2,
        name: "Gustave Courbet",
        username: "gus1819",
      
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
         isimg:true,
        post: "images/services-4.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        id: 3,
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        isimg:true,
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

for(let i = 0; i < posts.length; i++){
    let shows = document.getElementById('card1').innerHTML += ` 
   
            <div class="userinfo">
        <div class="profileimg">
            <img src="${posts[i].avatar}" alt="" class="cover">
        </div>
        <h3>${posts[i].name}<br><span>${posts[i].location}</span></h3>
        
    </div>

    <div class="imgpost">
        <img src="${posts[i].post}" alt="" class="cover1" >

    </div>
<div class="actionbtn">
    <div class="left">
        <img src="images/icon-heart.png" alt="" class="heart">
        <img src="images/icon-comment.png" alt="" class="comment">
        <img src="images/icon-dm.png" alt="" class="dm">
    </div>
</div>
<div class="likes">
    <h4>${posts[i].likes}</h4>
    <h4 class="massage">${posts[i].username}<span style="color:#1f1f20;font-size: 13px; padding-left: 1%;">${posts[i].comment}</span></h4>
  </div>  
     `
// console.log(shows);
}



