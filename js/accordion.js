var accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        var accordionContent = this.nextElementSibling;

        if (accordionContent.style.display === "block") {
            accordionContent.style.display = "none";
        } else {
            accordionContent.style.display = "block";
        }
    });
}
