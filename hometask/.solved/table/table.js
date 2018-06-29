export class PlainTextTable {
    constructor({padding = 2, vSeparator = '|', hSeparator = '-'}) {
        this.columns = [];
        this.rows = [];
        this.padding = padding;
        this.vSeparator = vSeparator;
        this.hSeparator = hSeparator;
    }

    setColumns (...columns) {
        this.columns = columns.map(column => String(column));
    };

    addRow (...rows) {
        this.rows.push(rows.map(cell => String(cell)));
    };

    format () {
        const columnsWidths = this._createMaximums();
        const cellPadding = ' '.repeat(this.padding);
        const tableHead = this._createHead(columnsWidths, cellPadding);

        const rowWidth = tableHead.length;
        let tableBody = '';

        for (const row of this.rows) {
            tableBody += '\n';
            tableBody += this.hSeparator.repeat(rowWidth);
            tableBody += '\n';

            tableBody += this._createRow(row, columnsWidths, cellPadding);
        }

        return tableHead + tableBody;

    };

    _findMaximumInColumn(columnIndex) {
        const headLength = this.columns[columnIndex].length;
        const rowsMaxLength = this.rows.map(row => row[columnIndex].length);

        return Math.max(headLength, ...rowsMaxLength);
    };

    _createRow (row, columnWidths, cellPadding) {
        let result = '';

        for (let colIndex = 0; colIndex < this.columns.length; colIndex++) {
            result += this._createCell(row[colIndex], columnWidths[colIndex], cellPadding);
        }

        return result;
    };

    _createHead (columnWidths, cellPadding) {
        let result = '';

        for (let colIndex = 0; colIndex < this.columns.length; colIndex++) {
            result += this._createCell(this.columns[colIndex], columnWidths[colIndex], cellPadding);
        }

        return result;
    };

    _createCell(item, cellWidth, cellPadding) {
        const formattedItem = item.padEnd(cellWidth);
        return cellPadding + formattedItem + cellPadding + this.vSeparator;
    }

    _createMaximums () {
        const maximums = [];
        for (let colIndex = 0; colIndex < this.columns.length; colIndex++) {
            maximums.push(this._findMaximumInColumn(colIndex));
        }

        return maximums;
    };
}
