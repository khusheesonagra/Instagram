document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".post-actions img");

    likeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("You liked this post!");
        });
    });
});
