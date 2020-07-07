$(function () {
    let index = 1,
        page = 10,
        type = 'PNG',
        c = $('#curpage'),
        ps = $('#pdfboxs'),
        p = $('#pdfbox'),
        b1 = $('#firstbtn'),
        b2 = $('#prevbtn'),
        b3 = $('#nextbtn'),
        b4 = $('#lastbtn');

    function pD(n) {
        n.prop('disabled', 'disabled');
    }
    function rPD(n) {
        n.removeProp('disabled');
    }
    function curPage() {
        c.html(' 第' + index + '页 / 共' + page + '页');
        ps.html('<img src="img/pdf' + index + '.' + type + '" />');
    }
    var imgList = '';

    for (var i = 1; i <= page; i++) {
        imgList += '<img src="img/pdf' + i + '.' + type + '" />';
    }

    if (page == index) {
        pD($('button'));
    }
    p.html(imgList);

    curPage();

    b3.click(function () {
        index++;
        curPage();
        if (index >= page) {
            pD(b3);
            pD(b4);
        } else {
            rPD(b2);
        }
        if (index > 1) {
            rPD(b1);
            rPD(b2);
        }
    });

    b2.click(function () {
        index--;
        curPage();
        if (index < 2) {
            pD(b1);
            pD(b2);
        } else {
            rPD(b2);
        }
        if (index < page) {
            rPD(b3);
            rPD(b4);
        }
    });

    b1.click(function () {
        index = 1;
        curPage();
        pD(b1);
        pD(b2);
        rPD(b3);
        rPD(b4);
    });
    b4.click(function () {
        index = page;
        curPage();
        pD(b3);
        pD(b4);
        rPD(b1);
        rPD(b2);
    });
});
