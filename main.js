function popup1() {
    swal({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
    });

}

new jBox('Modal', {
    attach: '#btn1',
    ajax: {
        url: 'https://reqres.in/api/users?delay=2',
        data: {
            id: 1
        },
        reload: 'strict',
        setContent: false,
        success: function(response) {
            console.log('jBox AJAX response', response);
            this.setContent('<b style="color:red;">sucess</b><br>Check console for response.');
        },
        error: function() {
            this.setContent('<b style="color: #d33">Error loading content.</b>');
        }
    }
});