$(function () {
    var index = 1,
        $pdfBox = $('#pdfbox'),
        $pdfBoxS = $('#pdfboxs'),
        $firstBtn = $('#firstbtn'),
        $lastBtn = $('#lastbtn'),
        $nextBtn = $('#nextbtn'),
        $prevBtn = $('#prevbtn'),
        $curPage = $('#curpage');

    var imgList = '';
    var imgUrl = '<img src="img/pdf' + index + '.PNG" />';

    for (var i = 1; i <= page; i++) {
        imgList += '<img src="img/pdf' + i + '.PNG" />';
    }

    if (page == index) {
        $('button').prop('disabled', 'disabled');
    }
    $pdfBox.html(imgList);
    $pdfBoxS.html(imgUrl);
    $curPage.html(' 第' + index + '页 / 共' + page + '页');
    $nextBtn.click(function () {
        index;
        index++;
        $pdfBoxS.html('<img src="img/pdf' + index + '.PNG" />');
        $curPage.html(' 第' + index + '页 / 共' + page + '页');
        if (index >= page) {
            $nextBtn.prop('disabled', 'disabled');
            $lastBtn.prop('disabled', 'disabled');
        } else {
            $prevBtn.removeProp('disabled');
        }
        if (index > 1) {
            $prevBtn.removeProp('disabled');
            $firstBtn.removeProp('disabled');
        }
    });
    $prevBtn.click(function () {
        index--;
        $curPage.html(' 第' + index + '页 / 共' + page + '页');
        $pdfBoxS.html('<img src="img/pdf' + index + '.PNG" />');
        if (index < 2) {
            $prevBtn.prop('disabled', 'disabled');
            $firstBtn.prop('disabled', 'disabled');
        } else {
            $prevBtn.removeProp('disabled');
        }
        if (index < page) {
            $nextBtn.removeProp('disabled');
            $lastBtn.removeProp('disabled');
        }
    });
    $firstBtn.click(function () {
        index = 1;
        $pdfBoxS.html('<img src="img/pdf' + index + '.PNG" />');
        $curPage.html(' 第' + index + '页 / 共' + page + '页');
        $prevBtn.prop('disabled', 'disabled');
        $firstBtn.prop('disabled', 'disabled');
        $nextBtn.removeProp('disabled');
        $lastBtn.removeProp('disabled');
    });
    $lastBtn.click(function () {
        index = page;
        $pdfBoxS.html('<img src="img/pdf' + index + '.PNG" />');
        $curPage.html(' 第' + index + '页 / 共' + page + '页');
        $nextBtn.prop('disabled', 'disabled');
        $lastBtn.prop('disabled', 'disabled');
        $prevBtn.removeProp('disabled');
        $firstBtn.removeProp('disabled');
    });
});
