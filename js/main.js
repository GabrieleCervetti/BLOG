var posts = [];

posts.push(new Post("Lorem ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices, quam ut sollicitudin molestie, ligula risus mattis dui, sed semper augue diam vitae dolor. Vestibulum risus orci, sagittis ac interdum et, sodales quis erat. Sed felis orci, efficitur eget sem vel, imperdiet malesuada leo. Maecenas ultricies a ante non sagittis. Curabitur ac odio feugiat, efficitur ante ac, interdum felis. Etiam lacinia euismod ante, eu faucibus leo vehicula at. Sed vehicula, metus vitae imperdiet tincidunt, nibh ipsum feugiat nulla, eu faucibus dolor ipsum sed enim. Maecenas iaculis ante eu mauris rutrum malesuada venenatis eu dui. Nulla non tortor et velit pulvinar elementum vel at nunc. Nullam suscipit mattis magna viverra blandit. Fusce ex est, lacinia ut faucibus aliquam, accumsan faucibus nunc. Maecenas diam nulla, cursus non nisl sed, rutrum mollis quam. Nullam orci nulla, rutrum vitae vulputate ac, pulvinar id velit. Cras dictum, urna ut hendrerit dapibus, dui nisl blandit turpis, in pharetra mauris lacus lacinia odio. Aenean quis facilisis ex, a placerat augue. Sed ultrices, augue in vestibulum dignissim, elit ipsum sodales diam, in laoreet odio lacus eu tortor. Ut auctor, arcu eget maximus semper, nunc ligula tincidunt lorem, pellentesque lacinia nibh sem id mi. Sed commodo sem dolor, id vulputate lectus hendrerit eu", true, true, [""]));
posts.push(new Post("de Finibus Bonorum et Malorum - Cicerone", "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?", true, true, [""]));
posts.push(new Post("1914 - H. Rackham", "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?", true, true, [""]));


new PostController().init();

// $(document).ready(function () {


//     // var users = [
//     //     'mario', 'giulio', 'alberto', 'claudia'
//     // ]

//     // $(".send-comment").click(function () {
//     //     var commentText = $(".comment-text").val();

//     //     var commentContainer = $(".comments-container");
//     //     var commentRow = '<li class="list-group-item"><a href="#" class="badge badge-light">' + users[Math.round(Math.random(0, 3))
//     //     ] + '</a>' + commentText + '</li>';

//     //     commentContainer.append(commentRow);

//     // });

    // for(var i = 0; i< posts.length; i++){
    //     var post = posts[i];
    //     if(post.public === true){
    //         createUIPost(post);
    //     }


//     // }

    

//     // $("#savePostBtn").click(addPost);


// });


// function createUIPost(post){
//     var postContainer = $("#postContainer").clone();
//     postContainer.css("display","block");
//     postContainer.attr("id","");
//     postContainer.addClass("class","postContainer");

//     var postHeader = postContainer.find(".card-header");
//     var postBody = postContainer.find(".card-text");

//     postHeader.html(post.title);
//     postBody.html(post.body);

//     $("#postsRow").append(postContainer);

// }


// function closeModal(){
//     $("#newPostModal").modal("hide");
// }

// function resetModal(){
//     $("#postTitle").val("");
//     $("#postBody").val("");

// }