$("#repassword").on("input", function () {
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    if (password != repassword && repassword != "") {
        $("#message-password").show();
        $("#repassword").css("outline-color", "red");
        $("#repassword").css("border", "1px red solid");
        $("#btn_register").addClass('disabled');
    } else {
        $("#message-password").hide();
        $("#repassword").css("outline-color", "black");
        $("#repassword").css("border", "1px #d8c3c3 solid");
        $("#btn_register").removeClass('disabled');
    }
});
$("#password").on("change", function () {
    var password = $("#password").val();
    var repassword = $("#repassword").val();
    if (password != repassword && repassword != "") {
        $("#message-password").show();
        $("#repassword").css("outline-color", "red");
        $("#repassword").css("border", "1px red solid");
        $("#btn_register").addClass('disabled');
    } else {
        $("#message-password").hide();
        $("#repassword").css("outline-color", "black");
        $("#repassword").css("border", "1px #d8c3c3 solid");
        $("#btn_register").removeClass('disabled');
    }
});
$("[name~=form-register]").submit(function (e) {
    e.preventDefault();
    fullName = $('[name=fullName]').val()
    email = $('[name=email]').val()
    phone = $('[name=phone]').val()
    password = $('[name=password]').val()
    address = $('[name=address]').val()

    axios.post('http://localhost:3000/auth/signUp', {
        fullName: fullName,
        email: email,
        phoneNumber: phone,
        password: password,
        address: address
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(function (response) {
            console.log(response);
            console.log(response.headers.authorization)
            token = 'Bearer ' + response.headers.authorization
            $.cookie('Authorization', token, { expires: 7 });
            // window.location.href = "/";
        })
        .catch(function (error) {
            console.log(error);
        })
});

$("[name~=form-login]").submit(function (e) {
    e.preventDefault();
    email = $('[name=customer-account]').val()
    password = $('[name=customer-password]').val()
    console.log(email)

    axios.post('http://localhost:3000/auth/signIn', {
        email: email,
        password: password
    })
        .then(function (response) {
            console.log(response);
            console.log(response.headers.authorization)
            token = 'Bearer ' + response.headers.authorization
            $.cookie('Authorization', token, { expires: 7 });
            // window.location.href= "/";
        })
        .catch(function (error) {
            console.log(error);
        });
})

