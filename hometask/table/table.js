function PlainTextTable (options) {
    this.columns = [];
    this.rows = [];
    this.padding = options.padding || 2;
    this.vSeparator = options.vSeparator || '|';
    this.hSeparator = options.hSeparator || '-';


    this.setColumns = function () {
        this.columns = [].slice.call(arguments);
    };

    this.addRow = function () {
        this.rows.push([].slice.call(arguments));
    };

    this.format = function () {
        var columnWidths = this._createMaximums();
        var cellPadding = repeatString(' ', this.padding);
        var tableHead = this._createHead(columnWidths, cellPadding);

        var rowWidth = tableHead.length;
        var tableBody = '';

        for (var rowIndex = 0; rowIndex < this.rows.length; rowIndex++) {
            tableBody += '\n';
            tableBody += repeatString(this.hSeparator, rowWidth);
            tableBody += '\n';

            var row = this.rows[rowIndex];
            tableBody += this._createRow(row, columnWidths, cellPadding);
        }

        var table = tableHead + tableBody;

        return table;

    };

    this._createMaximums = function () {
        var maximums = [];
        for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
            maximums.push(this._findMaximumInColumn(colIndex));
        }

        return maximums;
    };

    this._findMaximumInColumn = function(columnIndex) {
        var maxLength = String(this.columns[columnIndex]).length;

        for (var i = 0; i < this.rows.length; i++) {
            var row = this.rows[i];
            var itemLength = String(row[columnIndex]).length;
            if (itemLength > maxLength) {
                maxLength = itemLength;
            }
        }

        return maxLength;
    };

    this._createHead = function (columnWidths, cellPadding) {
        var result = '';

        for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
            var item = String(this.columns[colIndex]);
            var formattedItem = item + repeatString(' ', columnWidths[colIndex] - item.length);
            result += cellPadding + formattedItem + cellPadding + this.vSeparator;
        }

        return result;
    };

    this._createRow = function (row, columnWidths, cellPadding) {
        var result = '';

        for (var colIndex = 0; colIndex < this.columns.length; colIndex++) {
            var item = String(row[colIndex]);
            var formattedItem = item + repeatString(' ', columnWidths[colIndex] - item.length);
            result += cellPadding + formattedItem + cellPadding + this.vSeparator;
        }

        return result;
    };
}

function repeatString (str, counter) {
    var result = '';
    for (var i = 0; i < counter; i++) {
        result += str;
    }

    return result;
}
