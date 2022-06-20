
import './app-info.css';

const AppInfo = ({data}) => {
    const increaseCount = data.filter(elem => elem.increase).length;
    const totalCount = data.length;

    return (
        <div className="app-info">
            <h1>Учет сотрудников</h1>
            <h2>Общее число сотрудников: {totalCount}</h2>
            <h2>Премию получат: {increaseCount}</h2>
        </div>
    )
}

export default AppInfo;