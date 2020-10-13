class PostController{
	
    constructor(){
        this.posts = [];
        this.restController = new RestController();
        //UI
		this.commentContainer;
        this.postsContainer;							//contenitore principale
        this.postContainer;								//contenitore del singolo post
        this.modal;
        this.openModalBtn;
        this.modalTitle;
        this.modalText;
        this.modalPublicCheck;
		this.modalFeaturedCheck;
        this.savePostBtn;
		this.tag;

        //this.editMode = false;
        //this.editedPostId = null;
        //this.editedPost = null;

	}
	
	init() {
        $(document).ready(function () {
			//this.postsRow = $("#postsRow");
            this.commentContainer = $(".comments-container");
            this.postContainer = $("#postContainer");
            this.modalTitle = $("#postTitle");
            this.modalText = $("#postBody");
            this.modalPublicCheck = $("#publicCheck");
            this.modalFeaturedCheck = $("#featuredCheck");
            this.savePostBtn = $("#savePostBtn");
            this.tag = ["", ""];

            //Post insert
            $("#savePostBtn").click(function () {

                let Ps = new Post(this.modalTitle.val(),
                    this.modalText.val(),
                    this.modalPublicCheck.is(':checked'),
                    this.modalFeaturedCheck.is(':checked'),
                    this.tag
                );
                this.addUIPost(Ps);
                this.postPosts(Ps);
                this.closeModal();
            }.bind(this));

            for (let i in posts) {
                this.addUIPost(posts[i]);
            }
            this.getPosts();
            //this.deletePost();


        }.bind(this));

    }


    addUIPost(postPost) {
        //add a post
        var postContainer = $("#postContainer").clone();
        postContainer.css("display", "block");
        postContainer.attr("id", "");
        postContainer.addClass("class", "postContainer");

        var postHeader = postContainer.find(".card-header");
        var postBody = postContainer.find(".card-text");

        postHeader.html(postPost.title);
        postBody.html(postPost.body + "<br>Tag: " + postPost.tag);
        $("#postsRow").append(postContainer);

    }

    closeModal() {
        $("#newPostModal").modal("hide");
    }


    getPosts() {
        this.restController.get("http://localhost:3000/posts", function (data, status, xhr) {
            let jsonPost = [];
            for (var i in data) {
                var post = data[i];
                if (post.public) {
                    if (post.featured) {
                        this.addUIPost(post);
                    } else {
                        jsonPost.push(post);
                    }
                }
            }
            for (let j in jsonPost) {
                this.addUIPost(jsonPost[j]);
            }
        }.bind(this))
    }


    postPosts(data) {
        this.restController.post("http://localhost:3000/posts", data, function () {
            console.log(data);
        }.bind(this))
    }

    deletePost() {
        this.restController.delete(`http://localhost:3000/posts/` + `-MJ7lGD4Sr2e1IIYzQ7n` + `.json`, function () {

        }.bind(this))
    }

    putArticles(data) {
        this.restController.put("http://localhost:3000/posts", data, function () {

        }.bind(this))
    }
}