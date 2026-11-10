function pegarNome(item) {
    var $nome = $('.nome-produto', item);
    if ($nome.length > 0) {
        return $nome.text().trim();
    }
    return item.firstChild.textContent.trim();
}

$('.collection-item').each(function () {
    $(this).append(
        '<div class="controles">' +
        '<button class="btn-qtd menos">−</button>' +
        '<span class="qtd">1</span>' +
        '<button class="btn-qtd mais">+</button>' +
        '<button class="btn-comprar">Comprar</button>' +
        '</div>'
    );
});

$('.collection')
    .on('click', '.mais', function () {
        var $qtd = $(this).siblings('.qtd');
        $qtd.text(parseInt($qtd.text()) + 1);
        return false;
    })
    .on('click', '.menos', function () {
        var $qtd = $(this).siblings('.qtd');
        var valor = parseInt($qtd.text());
        if (valor > 1) {
            $qtd.text(valor - 1);
        }
        return false;
    })
    .on('click', '.btn-comprar', function () {
        var item = $(this).closest('.collection-item')[0];
        var $qtd = $(this).siblings('.qtd');
        var quantidade = parseInt($qtd.text());
        var nome = pegarNome(item);

        var $badge = $('.badge', item);
        if ($badge.length === 0) {
            $badge = $('<span class="badge brown-text">0</span>').appendTo(item);
        }
        $badge.text(parseInt($badge.text()) + quantidade);

        Materialize.toast(quantidade + 'x ' + nome + ' adicionado', 1500);
        $qtd.text(1); // volta para 1
        return false;
    })
    .on('click', '.badge', function () {
        $(this).remove();
        return false;
    });

$('.modal-trigger').leanModal();

$('#confirmar').on('click', function () {
    var texto = "";

    $('.badge').parent().each(function () {
        texto += pegarNome(this) + ': ';
        texto += $('.badge', this).text() + ', ';
    });

    $('#resumo').empty().text(texto);
});

$('#fazer-pedido').on('click', function () {
    var mesa = $('#numero-mesa').val();

    if (mesa === '') {
        Materialize.toast('Informe o número da mesa!', 3000, 'red');
        return false;
    }

    Materialize.toast('Pedido da mesa ' + mesa + ' feito com sucesso!', 3000, 'green');
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$('.acao-limpar').on('click', function () {
    $('#numero-mesa').val('');
    $('.badge').remove();
});

$('.scan-qrcode').on('click', function () {
    cordova.plugins.barcodeScanner.scan(
        function (resultado) {
            if (resultado.text) {
                Materialize.toast('Mesa ' + resultado.text, 2000);
                $('#numero-mesa').val(resultado.text);
            }
        },
        function (error) {
            Materialize.toast('Erro: ' + error, 3000, 'red-text');
        }
    );
});