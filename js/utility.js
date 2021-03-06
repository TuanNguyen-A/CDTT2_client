function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

function pagination(num, page, total, search, id) {
    n = Math.ceil(total / num);
    url = '';
    if (id) {
        url += 'id=' + id + '&';
    }
    if (search) {
        url += 'search=' + search + '&';
    }
    console.log("URL", url)
    if (page > 1) {
        $('#pagination').append(`
        <li class="page-item ">
            <a class="page-link" href="?${url}page=${Number(page) - 1}">Previous</a>
        </li>
        `);
    }
    for (i = 1; i <= n; i++) {
        $('#pagination').append(`
        <li class="page-item page_num ${page == i ? 'disabled' : ''}" >
            <a class="page-link" href="?${url}page=${i}">${i}</a>
        </li>
        `);
    }
    if (page < n) {
        $('#pagination').append(`
        <li class="page-item">
            <a class="page-link" href="?${url}page=${Number(page) + 1}">Next</a>
        </li>
        `);
    }
}

function paginationUser(num, page, total, search, cate) {
    n = Math.ceil(total / num);
    url = '';
    if (cate) {
        url += 'cate=' + cate + '&';
    }
    if (search) {
        url += 'search=' + search + '&';
    }
    console.log("URL", url)
    if (page > 1) {
        $('#pagination').append(`
        <li class="page-item">
          <a class="page-link" href="?${url}page=${Number(page) - 1}" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        `);
    }
    for (i = 1; i <= n; i++) {
        $('#pagination').append(`
        <li class="page-item page_num ${page == i ? 'disabled' : ''}" >
            <a class="page-link" href="?${url}page=${i}">${i}</a>
        </li>
        `);
    }
    if (page < n) {
        $('#pagination').append(`
        <li class="page-item">
          <a class="page-link" href="?${url}page=${Number(page) + 1}" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
        `);
    }
}

function updateCart() {
    storage = localStorage.getItem('cart');
    if (storage) {
        cart = JSON.parse(storage);
        count = 0;
        for (i = 0; i < cart.length; i++) {
            item = cart[i];
            count += Number(item.quantity);
        }
        $('.num').text(`
        ${count}
      `)
    }
}
function logOut(){
    $('#btn-logout').click(function(){
        console.log('Logout')
        $.cookie("Authorization", null, { path: '/' });
        location.reload();
    })
}