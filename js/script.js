// fetching the api of posts first

// const config = {
//   type: "html",
//   data: "../index.html",
//   loadListClass: "is-load-list",
//   renderInit: 2,
//   scrollEndMessage: "read all contents!",
// };
// $("#element").infinityScroll(config);

(function () {
  var ga = document.createElement("script");
  ga.type = "text/javascript";
  ga.async = true;
  ga.src =
    ("https:" == document.location.protocol ? "https://ssl" : "http://www") +
    ".google-analytics.com/ga.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(ga, s);
})();
$(".postsBox");
$.getJSON("https://dummyjson.com/posts", function (data) {
  // console.log(data.posts);
  var posts = data.posts.map(
    (post) => `
          <div 
          class='post bg-white rounded-2  border p-3 mb-3' is-load-list> 

            <div
            class="postTop d-flex gap-2 align-content-center"> 

              <div> <i class="fa-solid fa-circle-user text-primary fs-1"></i> </div>
              <h3 class="PostTitle text-uppercase"> 
                ${post.tags[0]} 
              </h3>

            </div>

              <div 
              class="postBodyContent"> 
                <h4 
                  class="PostDescription text-body-secondary mt-2">
                  ${post.title} 
                </h4>
                <p 
                  class="PostBody text-light-emphasis mt-2">
                  ${post.body}
                </ p> 
            </div>
              <hr class='text-light-emphasis'>
            <div class="postTail d-flex justify-content-between align-content-center ">

              <button class="btn text-body-secondary "> 
                <i class="fa-regular fa-thumbs-up"></i>
                <span>Like </span> 
              </button>

              <button class="btn text-body-secondary"> 
                <i class="fa-regular fa-comment-dots"></i>
                <span>Comment </span> 
              </button>

              <button class="btn text-body-secondary"> 
                <i class="fa-solid fa-retweet"></i>
                <span>Repost </span> 
              </button>

              <button class="btn text-body-secondary"> 
                <i class="fa-solid fa-paper-plane"></i>
                <span>Send</span> 
              </button>
              </div>

          </div>`
  );

  // text = `<h2>${data.license_title}</h2><br>
  //  ${posts.join("")}`;
  // console.log(posts);
  $(".postsBox").html(posts);
});

// handle the loading show
window.onload = function () {
  setTimeout(() => {
    document.querySelector(".content").classList.remove("d-none");
    document.querySelector(".loading").classList.add("d-none");
  }, 3000);
};

//  infinty scrolling using jquery infinityScroll plugin
// $("document").ready(function () {
//   console.log("test");
//   // 4. Initialize the infinityScroll plugin.
//   $("#element").infinityScroll({
//     type: "html",
//     data: "index.html",
//     loadListClass: "is-load-list",
//   });
//   // 5. Specify how many items to load on init.
//   $("#element").infinityScroll({
//     type: "html",
//     data: "index.html",
//     loadListClass: "is-load-list",
//     renderInit: 30,
//   });
//   // 6. Customize the message to display after the last items has been rendered
//   $("#element").infinityScroll({
//     type: "html",
//     data: "index.html",
//     loadListClass: "is-load-list",
//     scrollEndMessage: "read all contents!",
//   });
// });
