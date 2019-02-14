import React from 'react';
import './styles.css';
import Button from '@skbkontur/react-ui/Button';

/**
 * 1. Сделай так, чтобы количество кликов приходило с сервера, получай данные по урлу
 * http://localhost:3000/clickCount
 *
 * 2. Сделай так, чтобы параграф, показывающий количество кликов,
 * не показывался, пока данные с сервера не пришли.
 *
 * 3. Сделай так, чтобы при каждом клике по кнопке, на сервер отправлялся GET-запрос по адресу:
 * http://localhost:3000/addClick
 *
 * 4. Сделай оптимистичный рендер:
 *      - после клика по кнопке, сразу счетчик обновляется
 *      - Если с сервера вернулся результат без ошибок, то нужно проверить, что значение, вернувшееся с сервера
 *      такое же, как отправленное, если это не так, то обнови данные в стейте компонента, как на сервере.
 *      - Если с сервера вернулась ошибка, то верни значение как было до клика.
 *
 */



export default class App extends React.Component {
    constructor () {
        super();
        this.state = {
            clickCount: 0,
        };
    }

    onClick = () => {
        const { clickCount } = this.state;

        this.setState({
            clickCount: clickCount + 1,
        });
    };

    render() {
        return (
            <div className={"root"}>
                <Button onClick={this.onClick}>Click Me!</Button>
                <p>Click Count: {this.state.clickCount}</p>
            </div>
        );
    }
}


/**
 * 1. Получение данных делай в методе componentDidMount
 * 2. Сделай начальное значение clickCount = null и в методе render проверяй, стало ли оно !== null
 */
