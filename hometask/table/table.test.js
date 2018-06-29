import { PlainTextTable } from './table'

describe('table', function () {
    test('should create columns array', function () {
        var table = new PlainTextTable({});
        table.setColumns('a', 'b');
        expect(table.columns).toHaveLength(2);
        expect(table.rows).toHaveLength(0);
        expect(table.columns).toEqual(['a', 'b']);
    });

    test('should create row', function () {
        var table = new PlainTextTable({});
        table.addRow('a', 'b');
        expect(table.rows).toHaveLength(1);
        expect(table.columns).toHaveLength(0);
        expect(table.rows[0]).toEqual(['a', 'b']);
    });

    test('should create printable table: just header', function () {
        var table = new PlainTextTable({});
        table.setColumns('a', 'b');
        expect(table.format()).toEqual('  a  |  b  |');
    });

    test('should create printable table: header and 1 row', function () {
        var table = new PlainTextTable({});
        table.setColumns('a', 'b');
        table.addRow('1', '2');
        expect(table.format()).toEqual(
`  a  |  b  |
------------
  1  |  2  |`
        );
    });

    test('should create printable table: header and couple rows', function () {
        var table = new PlainTextTable({});
        table.setColumns('a', 'b');
        table.addRow('1', '2');
        table.addRow('Q', 'Z');
        expect(table.format()).toEqual(
`  a  |  b  |
------------
  1  |  2  |
------------
  Q  |  Z  |`);
    });

    test('should create printable table: different widths', function () {
        var table = new PlainTextTable({});
        table.setColumns('a');
        table.addRow('Abracadabra');
        expect(table.format()).toEqual(
`  a            |
----------------
  Abracadabra  |`);
    });

    test('should create printable table: change padding', function () {
        var table = new PlainTextTable({padding: 3});
        table.setColumns('a', 'b');
        table.addRow('1', '2');
        expect(table.format()).toEqual(
`   a   |   b   |
----------------
   1   |   2   |`);
    });

    test('should create printable table: change vertical separator', function () {
        var table = new PlainTextTable({vSeparator: '·'});
        table.setColumns('a', 'b');
        table.addRow('1', '2');
        expect(table.format()).toEqual(
`  a  ·  b  ·
------------
  1  ·  2  ·`);
    });

    test('should create printable table: change horizontal separator', function () {
        var table = new PlainTextTable({hSeparator: '·'});
        table.setColumns('a', 'b');
        table.addRow('1', '2');
        expect(table.format()).toEqual(
`  a  |  b  |
············
  1  |  2  |`);
    });

    test('should create printable table: different types', function () {
        var table = new PlainTextTable({});
        table.setColumns('a', 'b');
        table.addRow(123, false);
        expect(table.format()).toEqual(
`  a    |  b      |
------------------
  123  |  false  |`);
    });
});
