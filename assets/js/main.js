$.ajax({
    type: "GET",
    url: "https://api.dex.guru/v1/tokens/0xafe3321309a994831884fc1725f4c3236ac79f76-bsc",
    data: "data",
    dataType: "JSON",
    success: function (response) {
        console.log(response);
    }
});