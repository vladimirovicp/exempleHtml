const _0x12304e = _0x2cb6;

function _0x2cb6(_0x4b79bb, _0x124d88) {
    const _0x23eae5 = _0x23ea();
    return _0x2cb6 = function (_0x2cb60f, _0x352fa9) {
        _0x2cb60f = _0x2cb60f - 0x197;
        let _0x3e1da5 = _0x23eae5[_0x2cb60f];
        return _0x3e1da5;
    }, _0x2cb6(_0x4b79bb, _0x124d88);
}

function _0x23ea() {
    const _0x546b0b = ['.container\x20img', 'remove', '8490370UxiwJm', 'classList', '191120PYoVWI', '25xkREIO', '.content', '27882kYFnFv', '78xxRdKD', '24OsEGyK', '405jZCjUd', '679856fuVgJv', '3787InvAnz', 'https://api.icndb.com/jokes/random?escape=javascript', '366WGtQsq', '318132UaYbBN', '11hqmYuN', 'textContent', 'click', 'querySelector', 'random', '495798yPgVBz', 'shake-img'];
    _0x23ea = function () {
        return _0x546b0b;
    };
    return _0x23ea();
} (function (_0x44e039, _0x270a8f) {
    const _0x35e13a = _0x2cb6,
        _0x27d536 = _0x44e039();
    while (!![]) {
        try {
            const _0x579724 = -parseInt(_0x35e13a(0x1ac)) / 0x1 * (parseInt(_0x35e13a(0x197)) / 0x2) + parseInt(_0x35e13a(0x1a3)) / 0x3 + parseInt(_0x35e13a(0x199)) / 0x4 * (parseInt(_0x35e13a(0x1aa)) / 0x5) + -parseInt(_0x35e13a(0x19c)) / 0x6 * (-parseInt(_0x35e13a(0x19a)) / 0x7) + parseInt(_0x35e13a(0x1a9)) / 0x8 * (-parseInt(_0x35e13a(0x198)) / 0x9) + -parseInt(_0x35e13a(0x1a7)) / 0xa * (-parseInt(_0x35e13a(0x19e)) / 0xb) + parseInt(_0x35e13a(0x19d)) / 0xc * (parseInt(_0x35e13a(0x1ad)) / 0xd);
            if (_0x579724 === _0x270a8f) break;
            else _0x27d536['push'](_0x27d536['shift']());
        } catch (_0x516894) {
            _0x27d536['push'](_0x27d536['shift']());
        }
    }
}(_0x23ea, 0x9dd9c));
const btn = document[_0x12304e(0x1a1)]('.btn'),
    content = document[_0x12304e(0x1a1)](_0x12304e(0x1ab)),
    img = document[_0x12304e(0x1a1)](_0x12304e(0x1a5)),
    url = _0x12304e(0x19b);
btn['addEventListener'](_0x12304e(0x1a0), async () => {
    try {
        const _0x2deada = await fetch(url),
            _0x5dd2b6 = await _0x2deada['json']();
        displayData(_0x5dd2b6);
    } catch (_0xb57ab8) {
        console['log'](_0xb57ab8);
    }
});

function displayData(_0x565a3b) {
    const _0x4fc70e = _0x12304e;
    img[_0x4fc70e(0x1a8)]['add'](_0x4fc70e(0x1a4));
    const {
        value: {
            joke: _0x57e831
        }
    } = _0x565a3b;
    content[_0x4fc70e(0x19f)] = _0x57e831;
    const _0x26447a = Math[_0x4fc70e(0x1a2)]() * 0x3e8;
    setTimeout(() => {
        const _0x5b73e6 = _0x4fc70e;
        img[_0x5b73e6(0x1a8)][_0x5b73e6(0x1a6)](_0x5b73e6(0x1a4));
    }, _0x26447a);
}