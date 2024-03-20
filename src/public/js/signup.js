console.log("Signup frontend javascript file");

$(function () {
    const fileTarget = $(".file-box .upload-hidden");
    let filename;

    fileTarget.on("change", function() {
        if (window.FileReader) {
            const uploadFile = $(this)[0].files[0];
            console.log("uploadFile:", uploadFile)
            const fileType = uploadFile["type"];
            const validImageType = ["image/jpg", "image/jpeg", "image/png",];
            if (!validImageType.includes(fileType)) {
                alert("Please insert only jpg, jpeg, and png!");
            }else {
                if (uploadFile) {
                    console.log(URL.createObjectURL(uploadFile));
                    $(".sign-input-frame")
                    .attr("src", URL.createObjectURL(uploadFile))
                    .addClass("success");
                }
                filename = $(this)[0].files[0].name;
            }
            $(this).siblings(".upload-name").val(filename);
        }
    });
});

function validateSignupForm() {
    //console.log("EXECUTED validateSignupForm");
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();
    if (
        memberNick ===  "" || 
        memberPhone === "" || 
        memberPassword === "" || 
        confirmPassword === ""
        ) {
            alert ("Please insert all required inputs!");
            return false;
        }

        if (memberPassword !== confirmPassword) {
            alert("Password differs, please check!");
            return false;
        }

        const membrImage = $(".member-image").get(0).files[0].name ? $(".member-image").get(0).files[0].name : null;

        if(!membrImage) {
            alert("Please insert restaurant image!");
            return false;
        }
    
}